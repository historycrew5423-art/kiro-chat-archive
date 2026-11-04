import * as THREE from 'three';
import { NOISE } from './glsl.js';

// ---------------------------------------------------------------------------
// 岩石材质：在 MeshStandardMaterial 上注入代码，保留 three 的光照和阴影，
// 颜色、岩层、水渍、苔藓和凹凸细节全部按世界坐标程序生成（三向投影，避免拉伸）。
// ---------------------------------------------------------------------------
export function rockMaterial( { bump = 1.0, green = 1.0, tint = 1.0 } = {} ) {

	const mat = new THREE.MeshStandardMaterial( { color: new THREE.Color( tint, tint, tint ), roughness: 0.9, metalness: 0 } );
	mat.onBeforeCompile = ( shader ) => {

		shader.vertexShader = shader.vertexShader
			.replace( '#include <common>', '#include <common>\nvarying vec3 vRockN;' )
			.replace( '#include <beginnormal_vertex>', /* glsl */ `
				#include <beginnormal_vertex>
				#ifdef USE_INSTANCING
					vRockN = normalize( mat3( modelMatrix ) * mat3( instanceMatrix ) * objectNormal );
				#else
					vRockN = normalize( mat3( modelMatrix ) * objectNormal );
				#endif
			` );

		shader.fragmentShader = shader.fragmentShader
			.replace( '#include <common>', `#include <common>\nvarying vec3 vRockN;\n${ NOISE }` )
			.replace( '#include <color_fragment>', /* glsl */ `
				#include <color_fragment>
				vec3 rkP = vFogWorldPos;
				vec3 rkN = normalize( vRockN );
				vec3 rkA = abs( rkN );
				rkA /= ( rkA.x + rkA.y + rkA.z + 1e-4 );
				float rkLow = fbm( rkP.zy * 0.035 ) * rkA.x + fbm( rkP.xz * 0.035 ) * rkA.y + fbm( rkP.xy * 0.035 ) * rkA.z;
				float rkFine = vnoise( rkP.zy * 0.45 ) * rkA.x + vnoise( rkP.xz * 0.45 ) * rkA.y + vnoise( rkP.xy * 0.45 ) * rkA.z;
				float rkStrata = 0.5 + 0.5 * sin( rkP.y * 0.22 + rkLow * 4.0 );
				vec3 rkCol = mix( vec3( 0.17, 0.145, 0.11 ), vec3( 0.46, 0.38, 0.28 ), clamp( rkStrata * 0.18 + rkLow * 0.9 + 0.15, 0.0, 1.0 ) );
				rkCol *= 0.7 + 0.55 * rkFine;
				float rkStain = smoothstep( 0.55, 0.85, vnoise( vec2( ( rkP.x + rkP.z ) * 0.12, rkP.y * 0.008 ) ) );
				rkCol *= 1.0 - 0.5 * rkStain;
				float rkCover = smoothstep( 0.2, 0.65, rkN.y + ( rkLow - 0.5 ) * 0.9 );
				rkCover = max( rkCover, smoothstep( 80.0, 5.0, rkP.y ) * smoothstep( 0.35, 0.6, rkLow + 0.1 * rkFine ) * 0.85 );
				rkCover *= ${ green.toFixed( 3 ) };
				vec3 rkMoss = mix( vec3( 0.045, 0.075, 0.02 ), vec3( 0.13, 0.19, 0.05 ), rkFine );
				diffuseColor.rgb *= mix( rkCol, rkMoss, rkCover );
				float rkJoint = vnoise( vec2( ( rkP.x * rkA.z + rkP.z * rkA.x ) * 0.22, rkP.y * 0.012 ) );
				float rkH = rkLow * 1.6 + rkFine * 1.0 + rkJoint * 1.4 * ( 1.0 - rkA.y );
				float rkRough = mix( 0.95, 0.85, rkCover ) - 0.2 * rkStain;
			` )
			.replace( '#include <roughnessmap_fragment>', 'float roughnessFactor = rkRough;' )
			.replace( '#include <normal_fragment_maps>', /* glsl */ `
				#include <normal_fragment_maps>
				{
					float rkDist = length( vViewPosition );
					float rkB = ${ bump.toFixed( 3 ) } * ( 1.0 - smoothstep( 60.0, 450.0, rkDist ) );
					vec3 dpx = dFdx( - vViewPosition );
					vec3 dpy = dFdy( - vViewPosition );
					float dhx = dFdx( rkH ) * rkB;
					float dhy = dFdy( rkH ) * rkB;
					vec3 r1 = cross( dpy, normal );
					vec3 r2 = cross( normal, dpx );
					float det = dot( dpx, r1 ) * faceDirection;
					vec3 grd = sign( det ) * ( dhx * r1 + dhy * r2 );
					normal = normalize( abs( det ) * normal - grd );
				}
			` );

	};

	mat.customProgramCacheKey = () => `rock-${ bump }-${ green }`;
	return mat;

}

// ---------------------------------------------------------------------------
// 植被材质：叶团的明暗斑驳 + 逆光时的透光（太阳从叶子背后照过来会发亮）
// ---------------------------------------------------------------------------
export function foliageMaterial( { map = null, alphaTest = 0, side = THREE.FrontSide, transl = 1.6, bump = 0.6, key = 'blob' } = {} ) {

	const mat = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0.8, metalness: 0, map, alphaTest, side } );
	mat.onBeforeCompile = ( shader ) => {

		shader.fragmentShader = shader.fragmentShader
			.replace( '#include <common>', `#include <common>\n${ NOISE }` )
			.replace( '#include <color_fragment>', /* glsl */ `
				#include <color_fragment>
				vec3 fP = vFogWorldPos;
				float fN = vnoise( fP.xy * 0.9 + fP.z * 0.7 ) * 0.5 + vnoise( fP.zy * 2.1 + fP.x * 0.3 ) * 0.5;
				diffuseColor.rgb *= 0.35 + 1.1 * fN * fN;
				float fH = fN;
			` )
			.replace( '#include <normal_fragment_maps>', /* glsl */ `
				#include <normal_fragment_maps>
				{
					float fB = ${ bump.toFixed( 3 ) } * ( 1.0 - smoothstep( 40.0, 300.0, length( vViewPosition ) ) );
					vec3 dpx = dFdx( - vViewPosition );
					vec3 dpy = dFdy( - vViewPosition );
					float dhx = dFdx( fH ) * fB;
					float dhy = dFdy( fH ) * fB;
					vec3 r1 = cross( dpy, normal );
					vec3 r2 = cross( normal, dpx );
					float det = dot( dpx, r1 ) * faceDirection;
					vec3 grd = sign( det ) * ( dhx * r1 + dhy * r2 );
					normal = normalize( abs( det ) * normal - grd );
				}
			` )
			.replace( '#include <opaque_fragment>', /* glsl */ `
				{
					vec3 fV = normalize( cameraPosition - vFogWorldPos );
					float fBack = pow( clamp( dot( - fV, SUN_DIR ), 0.0, 1.0 ), 3.0 );
					float fRim = 0.25 + 0.75 * pow( 1.0 - clamp( abs( dot( normal, normalize( vViewPosition ) ) ), 0.0, 1.0 ), 2.0 );
					outgoingLight += diffuseColor.rgb * SUN_COLOR * fBack * fRim * sunMask( vFogWorldPos ) * ${ transl.toFixed( 3 ) };
				}
				#include <opaque_fragment>
			` );

	};

	mat.customProgramCacheKey = () => `foliage-${ key }-${ transl }-${ bump }`;
	return mat;

}

// 一簇叶子的贴图：几十片椭圆叶从中心向外散开，带叶脉
export function leafTexture( rng ) {

	const c = document.createElement( 'canvas' );
	c.width = c.height = 256;
	const g = c.getContext( '2d' );
	for ( let i = 0; i < 70; i ++ ) {

		const a = rng() * Math.PI * 2;
		const r = 18 + rng() * 80;
		const x = 128 + Math.cos( a ) * r * 0.9;
		const y = 128 + Math.sin( a ) * r * 0.9;
		const len = 22 + rng() * 26;
		const wid = 8 + rng() * 7;
		g.save();
		g.translate( x, y );
		g.rotate( a + ( rng() - 0.5 ) * 0.9 );
		const h = 85 + rng() * 30;
		const l = 16 + rng() * 20;
		g.fillStyle = `hsl(${ h }, ${ 45 + rng() * 25 }%, ${ l }%)`;
		g.beginPath();
		g.ellipse( 0, 0, len, wid, 0, 0, Math.PI * 2 );
		g.fill();
		g.strokeStyle = `hsla(${ h }, 50%, ${ l * 0.6 }%, 0.8)`;
		g.lineWidth = 1.5;
		g.beginPath();
		g.moveTo( - len, 0 );
		g.lineTo( len, 0 );
		g.stroke();
		g.restore();

	}

	const t = new THREE.CanvasTexture( c );
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 4;
	return t;

}

// 可平铺的噪声图（两个通道），雾气粒子采样它
export function noiseTexture( size, rng ) {

	const data = new Uint8Array( size * size * 4 );
	const octaves = [ [ 4, 0.5 ], [ 8, 0.25 ], [ 16, 0.125 ], [ 32, 0.0625 ] ];
	const grids = [ 0, 1 ].map( () => octaves.map( ( [ p ] ) => Float32Array.from( { length: p * p }, () => rng() ) ) );
	const sm = ( t ) => t * t * ( 3 - 2 * t );
	for ( let y = 0; y < size; y ++ ) {

		for ( let x = 0; x < size; x ++ ) {

			for ( let ch = 0; ch < 2; ch ++ ) {

				let v = 0;
				let norm = 0;
				octaves.forEach( ( [ p, a ], o ) => {

					const gr = grids[ ch ][ o ];
					const fx = ( x / size ) * p;
					const fy = ( y / size ) * p;
					const ix = Math.floor( fx );
					const iy = Math.floor( fy );
					const tx = sm( fx - ix );
					const ty = sm( fy - iy );
					const x0 = ix % p, x1 = ( ix + 1 ) % p, y0 = iy % p, y1 = ( iy + 1 ) % p;
					const a0 = gr[ y0 * p + x0 ] + ( gr[ y0 * p + x1 ] - gr[ y0 * p + x0 ] ) * tx;
					const a1 = gr[ y1 * p + x0 ] + ( gr[ y1 * p + x1 ] - gr[ y1 * p + x0 ] ) * tx;
					v += a * ( a0 + ( a1 - a0 ) * ty );
					norm += a;

				} );
				data[ ( y * size + x ) * 4 + ch ] = Math.round( ( v / norm ) * 255 );

			}

			data[ ( y * size + x ) * 4 + 3 ] = 255;

		}

	}

	const tex = new THREE.DataTexture( data, size, size );
	tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
	tex.magFilter = THREE.LinearFilter;
	tex.minFilter = THREE.LinearMipmapLinearFilter;
	tex.generateMipmaps = true;
	tex.needsUpdate = true;
	return tex;

}

export function glowTexture() {

	const c = document.createElement( 'canvas' );
	c.width = c.height = 128;
	const g = c.getContext( '2d' );
	const grd = g.createRadialGradient( 64, 64, 0, 64, 64, 64 );
	grd.addColorStop( 0, 'rgba(255,255,255,1)' );
	grd.addColorStop( 0.15, 'rgba(255,255,255,0.55)' );
	grd.addColorStop( 0.45, 'rgba(255,255,255,0.12)' );
	grd.addColorStop( 1, 'rgba(255,255,255,0)' );
	g.fillStyle = grd;
	g.fillRect( 0, 0, 128, 128 );
	const t = new THREE.CanvasTexture( c );
	t.colorSpace = THREE.SRGBColorSpace;
	return t;

}
