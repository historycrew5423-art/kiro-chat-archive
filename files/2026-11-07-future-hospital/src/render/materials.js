import * as THREE from 'three';
import { NOISE } from './glsl.js';
import { LIGHT_DIR, SUN_COLOR } from '../config.js';

// ---------------------------------------------------------------------------
// 共用材质。大面积的白墙、地面都在着色器里按世界坐标加一点噪声变化，避免“塑料白”。
// 用 onBeforeCompile 注入，保留 three 自带的光照、阴影和雾（雾已替换成空气透视）。
// 每种变体要有不同的 customProgramCacheKey（否则 three 会复用同一个着色器）。
// ---------------------------------------------------------------------------

const f = ( v ) => v.toFixed( 5 );
const LIGHT_GLSL = `const vec3 L_DIR = vec3( ${ f( LIGHT_DIR.x ) }, ${ f( LIGHT_DIR.y ) }, ${ f( LIGHT_DIR.z ) } ); const vec3 L_COL = vec3( ${ f( SUN_COLOR.r ) }, ${ f( SUN_COLOR.g ) }, ${ f( SUN_COLOR.b ) } );`;

function worldPosVarying( shader ) {

	shader.vertexShader = shader.vertexShader
		.replace( '#include <common>', '#include <common>\nvarying vec3 vWPos;\nvarying vec3 vWNor;' )
		.replace( '#include <fog_vertex>', `#include <fog_vertex>
			vec4 wpp = vec4( transformed, 1.0 );
			#ifdef USE_INSTANCING
				wpp = instanceMatrix * wpp;
			#endif
			vWPos = ( modelMatrix * wpp ).xyz;
			vWNor = normalize( mat3( modelMatrix ) * objectNormal );` );
	shader.fragmentShader = shader.fragmentShader
		.replace( '#include <common>', `#include <common>\nvarying vec3 vWPos;\nvarying vec3 vWNor;\n${ NOISE }\n${ LIGHT_GLSL }` );

}

// 白色外墙：轻微的色差、雨水竖向污渍、楼板下沿发暗
export function facadeMaterial( color = 0xefebe4, opts = {} ) {

	const m = new THREE.MeshStandardMaterial( { color, roughness: opts.roughness ?? 0.52, metalness: 0.0, envMapIntensity: opts.env ?? 1.0 } );
	const amount = opts.dirt ?? 1.0;
	m.onBeforeCompile = ( shader ) => {

		worldPosVarying( shader );
		shader.fragmentShader = shader.fragmentShader.replace( '#include <color_fragment>', `#include <color_fragment>
			{
				float n = fbm3( vWPos.xz * 0.11 + vWPos.y * 0.05 );
				float streak = vnoise( vec2( ( vWPos.x + vWPos.z ) * 1.7, vWPos.y * 0.06 ) );
				float up = clamp( vWNor.y, 0.0, 1.0 );
				float d = ( n - 0.5 ) * 0.07 + ( streak - 0.5 ) * 0.05 * ( 1.0 - up );
				diffuseColor.rgb *= 1.0 + d * ${ f( amount ) };
				diffuseColor.rgb *= mix( vec3( 1.0 ), vec3( 0.96, 0.97, 0.95 ), up * 0.6 );
			}` );

	};

	m.customProgramCacheKey = () => 'facade' + amount;
	return m;

}

// 外立面玻璃：半透明，掠射角更不透明、更反光（菲涅尔）；能看到里面的灯
export function glassMaterial( opts = {} ) {

	const m = new THREE.MeshStandardMaterial( {
		color: opts.color ?? 0x2a3b40, roughness: opts.roughness ?? 0.03, metalness: 0.0,
		transparent: true, opacity: opts.opacity ?? 0.28, depthWrite: false, envMapIntensity: opts.env ?? 1.8, side: opts.side ?? THREE.DoubleSide
	} );
	m.onBeforeCompile = ( shader ) => {

		shader.fragmentShader = shader.fragmentShader.replace( '#include <opaque_fragment>', `
			{
				float fr = pow( 1.0 - clamp( dot( normalize( normal ), normalize( vViewPosition ) ), 0.0, 1.0 ), 4.0 );
				diffuseColor.a = mix( diffuseColor.a, 0.92, fr );
			}
			#include <opaque_fragment>` );

	};

	m.customProgramCacheKey = () => 'glass' + ( opts.opacity ?? 0.28 );
	return m;

}

// 不能进去的塔楼用的深色玻璃：不透明，按楼层和开间随机亮几盏室内灯
export function towerGlassMaterial( opts = {} ) {

	const m = new THREE.MeshStandardMaterial( { color: opts.color ?? 0x1c2a31, roughness: 0.05, metalness: 0.2, envMapIntensity: 1.5 } );
	const floorH = opts.floorH ?? 4.2, bay = opts.bay ?? 1.6;
	m.onBeforeCompile = ( shader ) => {

		worldPosVarying( shader );
		shader.fragmentShader = shader.fragmentShader.replace( '#include <emissivemap_fragment>', `#include <emissivemap_fragment>
			{
				float fl = floor( vWPos.y / ${ f( floorH ) } );
				vec2 hz = abs( vWNor.x ) > 0.5 ? vWPos.zy : vWPos.xy;
				float along = abs( vWNor.x ) > 0.5 ? vWPos.z : vWPos.x;
				float b = floor( ( along + vWPos.z * 0.37 * step( 0.5, abs( vWNor.x ) ) ) / ${ f( bay ) } );
				float r = hash12( vec2( fl * 1.37 + 0.5, b * 0.71 + 0.5 ) );
				float fy = fract( vWPos.y / ${ f( floorH ) } );
				float lit = step( 0.62, r ) * smoothstep( 0.08, 0.2, fy ) * smoothstep( 0.92, 0.75, fy );
				vec3 warm = mix( vec3( 1.0, 0.72, 0.42 ), vec3( 0.75, 0.86, 1.0 ), step( 0.85, r ) );
				totalEmissiveRadiance += warm * lit * 0.55 * ( 0.6 + 0.4 * hash12( vec2( b, fl ) ) );
				// 每层楼板的位置有一条暗带
				diffuseColor.rgb *= mix( 0.55, 1.0, smoothstep( 0.0, 0.06, fy ) * smoothstep( 1.0, 0.94, fy ) );
			}` );

	};

	m.customProgramCacheKey = () => 'towerglass' + floorH + '_' + bay;
	return m;

}

// 树叶面片：照片叶簇贴图 + 背光透光。透光只在叶片朝向太阳的反面时出现，并且乘上边缘系数
export function foliageMaterial( map, opts = {} ) {

	const m = new THREE.MeshStandardMaterial( {
		map, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.75, metalness: 0,
		color: opts.color ?? 0x76955c, envMapIntensity: opts.env ?? 0.35
	} );
	m.onBeforeCompile = ( shader ) => {

		worldPosVarying( shader );
		shader.vertexShader = shader.vertexShader.replace( '#include <begin_vertex>', `#include <begin_vertex>
			#ifdef USE_INSTANCING
				float swayPhase = instanceMatrix[ 3 ].x * 0.13 + instanceMatrix[ 3 ].z * 0.17;
			#else
				float swayPhase = 0.0;
			#endif
			transformed.x += sin( uTime * 1.3 + swayPhase + position.y * 0.6 ) * 0.03 * position.y;
			transformed.z += cos( uTime * 1.1 + swayPhase ) * 0.02 * position.y;` )
			.replace( '#include <common>', '#include <common>\nuniform float uTime;' );
		shader.uniforms.uTime = opts.time || { value: 0 };
		shader.fragmentShader = shader.fragmentShader.replace( '#include <color_fragment>', `#include <color_fragment>
			{
				float v = hash12( floor( vWPos.xz * 0.35 ) + floor( vWPos.y * 0.2 ) );
				diffuseColor.rgb *= mix( vec3( 0.82, 0.9, 0.78 ), vec3( 1.1, 1.04, 0.9 ), v );
			}` ).replace( '#include <emissivemap_fragment>', `#include <emissivemap_fragment>
			{
				vec3 V = normalize( cameraPosition - vWPos );
				float back = pow( clamp( dot( - V, L_DIR ), 0.0, 1.0 ), 3.0 );
				totalEmissiveRadiance += diffuseColor.rgb * L_COL * back * ${ f( opts.trans ?? 0.7 ) };
			}` );

	};

	m.customProgramCacheKey = () => 'foliage' + ( opts.trans ?? 0.7 );
	return m;

}

// 文字贴图（招牌、屏幕）。中文字体用系统自带的苹方 / 雅黑
export function textTexture( lines, opts = {} ) {

	const w = opts.w ?? 512, h = opts.h ?? 128;
	const c = document.createElement( 'canvas' );
	c.width = w; c.height = h;
	const g = c.getContext( '2d' );
	g.fillStyle = opts.bg ?? '#ffffff';
	g.fillRect( 0, 0, w, h );
	if ( opts.border ) {

		g.strokeStyle = opts.border;
		g.lineWidth = h * 0.05;
		g.strokeRect( g.lineWidth / 2, g.lineWidth / 2, w - g.lineWidth, h - g.lineWidth );

	}

	const arr = Array.isArray( lines ) ? lines : [ lines ];
	const size = opts.size ?? Math.floor( h / ( arr.length + 0.6 ) );
	g.fillStyle = opts.color ?? '#1d2a2e';
	g.textAlign = opts.align ?? 'center';
	g.textBaseline = 'middle';
	arr.forEach( ( line, i ) => {

		const fs = i === 0 ? size : size * ( opts.subScale ?? 0.6 );
		g.font = `${ opts.weight ?? 600 } ${ fs }px "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif`;
		const y = h * ( ( i + 0.5 ) / arr.length );
		const x = ( opts.align ?? 'center' ) === 'left' ? h * 0.25 : w / 2;
		if ( opts.colors && opts.colors[ i ] ) g.fillStyle = opts.colors[ i ];
		g.fillText( line, x, y );

	} );
	const t = new THREE.CanvasTexture( c );
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 4;
	return t;

}

// 叶簇贴图需要的设置
export function prepTexture( t, srgb = true, repeat = true ) {

	if ( srgb ) t.colorSpace = THREE.SRGBColorSpace;
	if ( repeat ) t.wrapS = t.wrapT = THREE.RepeatWrapping;
	t.anisotropy = 8;
	return t;

}
