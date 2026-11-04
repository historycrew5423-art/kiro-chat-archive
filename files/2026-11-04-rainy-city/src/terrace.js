import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { NOISE } from './glsl.js';
import { buildBeams } from './city.js';

export const RAIN_LAYER = 1;
export const STEAM_LAYER = 2;

// 观景平台的湿地面。
// 用 Reflector 渲染一张镜像图，再在着色器里按“积水 / 湿水泥”两种区域
// 分别做清晰或模糊的反射，叠加雨滴涟漪、地砖缝和灯光高光。
const FloorShader = {
	name: 'WetFloor',
	uniforms: {
		color: { value: null },
		tDiffuse: { value: null },
		textureMatrix: { value: null },
		uTime: { value: 0 },
		uFlash: { value: 0 },
		uAmbTop: { value: new THREE.Color() },
		uAmbBottom: { value: new THREE.Color() },
		uLampPos: { value: [] },
		uLampCol: { value: [] },
		uRipple: { value: 1 }
	},
	vertexShader: /* glsl */ `
		uniform mat4 textureMatrix;
		varying vec4 vUv;
		varying vec3 vWorld;
		#include <common>
		void main() {
			vUv = textureMatrix * vec4( position, 1.0 );
			vec4 wp = modelMatrix * vec4( position, 1.0 );
			vWorld = wp.xyz;
			gl_Position = projectionMatrix * viewMatrix * wp;
		}
	`,
	fragmentShader: /* glsl */ `
		#define NUM_LAMPS 3
		uniform sampler2D tDiffuse;
		uniform float uTime;
		uniform float uFlash;
		uniform float uRipple;
		uniform vec3 uAmbTop;
		uniform vec3 uAmbBottom;
		uniform vec3 uLampPos[ NUM_LAMPS ];
		uniform vec3 uLampCol[ NUM_LAMPS ];
		varying vec4 vUv;
		varying vec3 vWorld;
		#include <common>
		${ NOISE }

		// 一层雨滴涟漪：每个格子里随机位置、随机时刻落下一滴，扩散成一圈波纹，返回法线扰动
		vec2 ripples( vec2 uv, float t ) {
			vec2 cell = floor( uv );
			vec2 f = fract( uv );
			vec2 acc = vec2( 0.0 );
			for ( int j = - 1; j <= 1; j ++ ) {
				for ( int i = - 1; i <= 1; i ++ ) {
					vec2 o = vec2( float( i ), float( j ) );
					vec2 h = hash22( cell + o );
					float ph = fract( t + h.x * 3.17 );
					vec2 c = o + h - f;
					float d = length( c );
					float x = d - ph * 1.1;
					float env = ( 1.0 - ph ) * ( 1.0 - ph );
					float w = sin( x * 38.0 ) * smoothstep( 0.14, 0.0, abs( x ) ) * env;
					acc += ( c / max( d, 1e-3 ) ) * w;
				}
			}
			return acc;
		}

		void main() {
			vec2 p = vWorld.xz;

			// 积水分布
			float pn = fbm( p * 0.21 + vec2( 3.1, 1.7 ) );
			float puddle = smoothstep( 0.50, 0.555, pn );

			// 地砖 + 砂砾
			vec2 tile = abs( fract( p / 1.2 ) - 0.5 );
			float seam = 1.0 - smoothstep( 0.465, 0.49, max( tile.x, tile.y ) );
			float grit = fbm( p * 5.0 );
			vec3 albedo = vec3( 0.10, 0.10, 0.105 ) * ( 0.65 + 0.7 * grit ) * mix( 0.5, 1.0, seam );
			albedo *= mix( 0.55, 0.3, puddle );

			// 法线：涟漪 + 水泥表面的细小起伏
			vec2 rip = ripples( p * 2.6, uTime * 1.25 ) + 0.7 * ripples( p * 4.3 + 7.0, uTime * 1.6 + 0.5 );
			rip *= uRipple;
			vec2 micro = vec2( fbm3( p * 9.0 ) - 0.5, fbm3( p * 9.0 + 5.0 ) - 0.5 ) * ( 1.0 - puddle ) * 0.45;
			vec3 N = normalize( vec3( rip.x * 0.32 + micro.x, 1.0, rip.y * 0.32 + micro.y ) );
			vec3 V = normalize( cameraPosition - vWorld );
			float NdV = max( dot( N, V ), 0.0 );
			float F0 = mix( 0.04, 0.02, puddle );
			float F = F0 + ( 1.0 - F0 ) * pow( clamp( 1.0 - NdV, 0.0, 1.0 ), 5.0 );

			// 反射：积水处清晰，湿水泥处模糊并沿竖直方向拉长（湿地面倒影的典型样子）
			vec2 ruv = vUv.xy / vUv.w;
			ruv += N.xz * mix( 0.03, 0.012, puddle );
			float bias = mix( 3.2, 0.3, puddle );
			float stretch = mix( 0.018, 0.004, puddle );
			vec3 refl = vec3( 0.0 );
			float wsum = 0.0;
			for ( int k = - 3; k <= 3; k ++ ) {
				float fk = float( k );
				float w = exp( - fk * fk * 0.18 );
				refl += texture2D( tDiffuse, ruv + vec2( 0.0, fk * stretch ), bias ).rgb * w;
				wsum += w;
			}
			refl /= wsum;

			// 环境光
			vec3 col = albedo * mix( uAmbBottom, uAmbTop, 0.7 ) * 0.8;
			col += albedo * uFlash * vec3( 0.5, 0.55, 0.75 );

			// 灯光：漫反射 + 积水里的锐利高光
			for ( int i = 0; i < NUM_LAMPS; i ++ ) {
				vec3 L = uLampPos[ i ] - vWorld;
				float d2 = dot( L, L );
				L *= inversesqrt( d2 );
				float att = 1.0 / ( 1.0 + d2 );
				float NdL = max( dot( N, L ), 0.0 );
				vec3 H = normalize( L + V );
				float shin = mix( 40.0, 700.0, puddle );
				float spec = pow( clamp( dot( N, H ), 0.0, 1.0 ), shin ) * ( shin + 8.0 ) / 25.0;
				col += uLampCol[ i ] * att * ( albedo * NdL + spec * F * 0.6 );
			}

			col += refl * F * mix( 0.7, 1.15, puddle );

			gl_FragColor = vec4( col, 1.0 );
			#include <tonemapping_fragment>
			#include <colorspace_fragment>
		}
	`
};

function glowTexture() {

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

// 小屋的窗：暖光渐变 + 百叶窗横条 + 窗框，用 canvas 画出来
function windowTexture() {

	const c = document.createElement( 'canvas' );
	c.width = 128;
	c.height = 72;
	const g = c.getContext( '2d' );
	const grd = g.createLinearGradient( 0, 0, 0, 72 );
	grd.addColorStop( 0, '#ffd59a' );
	grd.addColorStop( 0.6, '#e08a3c' );
	grd.addColorStop( 1, '#7a3a14' );
	g.fillStyle = grd;
	g.fillRect( 0, 0, 128, 72 );
	g.fillStyle = 'rgba(40,18,6,0.35)';
	for ( let y = 4; y < 46; y += 5 ) g.fillRect( 0, y, 128, 2 );
	g.fillStyle = 'rgba(30,14,5,0.55)';
	g.fillRect( 20, 50, 34, 22 );
	g.fillStyle = '#15161a';
	g.fillRect( 0, 0, 128, 6 );
	g.fillRect( 0, 66, 128, 6 );
	g.fillRect( 0, 0, 6, 72 );
	g.fillRect( 122, 0, 6, 72 );
	g.fillRect( 61, 0, 6, 72 );
	const t = new THREE.CanvasTexture( c );
	t.colorSpace = THREE.SRGBColorSpace;
	return t;

}

// 半开的门：门框 + 透出的暖光，下半部更亮（灯在屋里地上）
function doorTexture() {

	const c = document.createElement( 'canvas' );
	c.width = 64;
	c.height = 128;
	const g = c.getContext( '2d' );
	const grd = g.createLinearGradient( 0, 0, 0, 128 );
	grd.addColorStop( 0, '#8a4a1c' );
	grd.addColorStop( 0.5, '#e69a50' );
	grd.addColorStop( 1, '#ffd9a0' );
	g.fillStyle = grd;
	g.fillRect( 0, 0, 64, 128 );
	g.fillStyle = 'rgba(20,10,4,0.85)';
	g.fillRect( 34, 6, 30, 122 );
	g.fillStyle = 'rgba(255,200,140,0.25)';
	g.fillRect( 34, 6, 3, 122 );
	g.fillStyle = '#121316';
	g.fillRect( 0, 0, 64, 6 );
	g.fillRect( 0, 0, 5, 128 );
	g.fillRect( 59, 0, 5, 128 );
	const t = new THREE.CanvasTexture( c );
	t.colorSpace = THREE.SRGBColorSpace;
	return t;

}

function lightCone( top, height, rTop, rBottom, color, strength ) {

	const geo = new THREE.CylinderGeometry( rTop, rBottom, height, 32, 1, true );
	geo.translate( 0, - height / 2, 0 );
	const mat = new THREE.ShaderMaterial( {
		name: 'LightCone',
		transparent: true,
		depthWrite: false,
		blending: THREE.AdditiveBlending,
		side: THREE.DoubleSide,
		uniforms: { uColor: { value: new THREE.Color( color ) }, uStrength: { value: strength } },
		vertexShader: /* glsl */ `
			varying float vH;
			varying vec3 vN;
			varying vec3 vV;
			void main() {
				vH = uv.y;
				vN = normalize( normalMatrix * normal );
				vec4 mv = modelViewMatrix * vec4( position, 1.0 );
				vV = normalize( - mv.xyz );
				gl_Position = projectionMatrix * mv;
			}
		`,
		fragmentShader: /* glsl */ `
			uniform vec3 uColor;
			uniform float uStrength;
			varying float vH;
			varying vec3 vN;
			varying vec3 vV;
			void main() {
				float edge = pow( clamp( abs( dot( normalize( vN ), normalize( vV ) ) ), 0.0, 1.0 ), 2.2 );
				// 开 MSAA 时像素中心可能落在三角形外，插值出的 vH 会略小于 0，
				// pow(负数) 在真显卡上会得到 NaN，所以先夹到 0~1
				float a = edge * pow( clamp( vH, 0.0, 1.0 ), 1.6 ) * uStrength;
				gl_FragColor = vec4( uColor * a, 1.0 );
			}
		`
	} );
	const mesh = new THREE.Mesh( geo, mat );
	mesh.position.copy( top );
	return mesh;

}

export function createTerrace( U, rng, Q ) {

	const group = new THREE.Group();

	const lampDefs = [
		{ pole: new THREE.Vector3( 5.6, 0, - 5.3 ), arm: 0.75, color: 0xffb56e, intensity: 70 },
		{ pole: new THREE.Vector3( - 8.8, 0, - 5.3 ), arm: 0.75, color: 0xffa860, intensity: 55 }
	];
	const doorLight = { pos: new THREE.Vector3( - 10.4, 2.5, - 1.2 ), color: 0xff9a50, intensity: 9 };

	const lampPos = [];
	const lampCol = [];

	const metal = new THREE.MeshStandardMaterial( { color: 0x23262b, metalness: 0.85, roughness: 0.3 } );
	const concrete = new THREE.MeshStandardMaterial( { color: 0x2a2b2e, roughness: 0.55, metalness: 0.0 } );
	const concreteDark = new THREE.MeshStandardMaterial( { color: 0x1c1d20, roughness: 0.8 } );
	const glowTex = glowTexture();

	// ---- 路灯 ----
	const lampBeams = [];
	for ( const L of lampDefs ) {

		const top = L.pole.clone().setY( 4.55 );
		lampBeams.push( [ L.pole, top, 0.11 ] );
		lampBeams.push( [ L.pole, L.pole.clone().setY( 0.5 ), 0.22 ] );
		const headPos = top.clone().add( new THREE.Vector3( L.arm, - 0.05, 0 ) );
		lampBeams.push( [ top.clone().add( new THREE.Vector3( - 0.05, - 0.05, 0 ) ), headPos, 0.06 ] );

		const shade = new THREE.Mesh( new THREE.BoxGeometry( 0.7, 0.14, 0.34 ), metal );
		shade.position.copy( headPos ).add( new THREE.Vector3( 0.1, 0.02, 0 ) );
		group.add( shade );

		const bulbPos = headPos.clone().add( new THREE.Vector3( 0.1, - 0.1, 0 ) );
		const c = new THREE.Color( L.color );
		const bulb = new THREE.Mesh(
			new THREE.BoxGeometry( 0.55, 0.05, 0.24 ),
			new THREE.MeshBasicMaterial( { color: c.clone().multiplyScalar( 14 ), fog: false } )
		);
		bulb.position.copy( bulbPos );
		group.add( bulb );

		const halo = new THREE.Sprite( new THREE.SpriteMaterial( {
			map: glowTex, color: c.clone().multiplyScalar( 2.2 ), blending: THREE.AdditiveBlending,
			depthWrite: false, transparent: true, fog: false
		} ) );
		halo.position.copy( bulbPos );
		halo.scale.setScalar( 2.6 );
		group.add( halo );

		const pl = new THREE.PointLight( L.color, L.intensity, 32, 2 );
		pl.position.copy( bulbPos ).add( new THREE.Vector3( 0, - 0.15, 0 ) );
		group.add( pl );

		const cone = lightCone( bulbPos.clone().add( new THREE.Vector3( 0, - 0.03, 0 ) ), 4.4, 0.28, 2.7, L.color, 0.07 );
		cone.layers.set( STEAM_LAYER );
		group.add( cone );

		lampPos.push( pl.position.clone() );
		lampCol.push( new THREE.Vector3( c.r, c.g, c.b ).multiplyScalar( L.intensity / Math.PI ) );

	}

	{

		const c = new THREE.Color( doorLight.color );
		const pl = new THREE.PointLight( doorLight.color, doorLight.intensity, 14, 2 );
		pl.position.copy( doorLight.pos );
		group.add( pl );
		lampPos.push( doorLight.pos.clone() );
		lampCol.push( new THREE.Vector3( c.r, c.g, c.b ).multiplyScalar( doorLight.intensity / Math.PI ) );

	}

	// ---- 栏杆 ----
	const railZ = - 6.2;
	const y0 = 0.36;
	for ( let x = - 36; x <= 36; x += 1.5 ) {

		const big = Math.round( x / 1.5 ) % 4 === 0;
		lampBeams.push( [ new THREE.Vector3( x, y0, railZ ), new THREE.Vector3( x, 1.48, railZ ), big ? 0.08 : 0.045 ] );

	}

	lampBeams.push( [ new THREE.Vector3( - 36, 1.48, railZ ), new THREE.Vector3( 36, 1.48, railZ ), 0.085 ] );
	lampBeams.push( [ new THREE.Vector3( - 36, 1.02, railZ ), new THREE.Vector3( 36, 1.02, railZ ), 0.04 ] );
	lampBeams.push( [ new THREE.Vector3( - 36, 0.66, railZ ), new THREE.Vector3( 36, 0.66, railZ ), 0.04 ] );
	group.add( buildBeams( lampBeams, metal ) );

	// 女儿墙和平台边沿
	const parapet = new THREE.Mesh( new THREE.BoxGeometry( 74, 0.36, 0.5 ), concrete );
	parapet.position.set( 0, 0.18, - 6.25 );
	group.add( parapet );
	const ledge = new THREE.Mesh( new THREE.BoxGeometry( 74, 0.9, 0.7 ), concreteDark );
	ledge.position.set( 0, - 0.45, - 6.4 );
	group.add( ledge );

	// ---- 左侧楼梯间小屋 ----
	const hut = new THREE.Mesh( new THREE.BoxGeometry( 7, 3.4, 7.5 ), concreteDark );
	hut.position.set( - 14.5, 1.7, - 1.4 );
	group.add( hut );
	const roof = new THREE.Mesh( new THREE.BoxGeometry( 8.4, 0.22, 8.8 ), concrete );
	roof.position.set( - 14.4, 3.5, - 1.4 );
	group.add( roof );
	const doorMat = new THREE.MeshBasicMaterial( { map: doorTexture(), color: new THREE.Color( 1, 1, 1 ).multiplyScalar( 1.6 ), fog: false } );
	const door = new THREE.Mesh( new THREE.PlaneGeometry( 1.1, 2.2 ), doorMat );
	door.rotation.y = Math.PI / 2;
	door.position.set( - 10.99, 1.1, - 0.4 );
	group.add( door );
	const win = new THREE.Mesh( new THREE.PlaneGeometry( 1.4, 0.8 ), new THREE.MeshBasicMaterial( { map: windowTexture(), color: new THREE.Color( 1, 1, 1 ).multiplyScalar( 1.4 ), fog: false } ) );
	win.rotation.y = Math.PI / 2;
	win.position.set( - 10.99, 2.3, - 3.2 );
	group.add( win );
	const doorHalo = new THREE.Sprite( new THREE.SpriteMaterial( { map: glowTex, color: new THREE.Color( 0xff9a52 ).multiplyScalar( 0.5 ), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true } ) );
	doorHalo.position.set( - 10.8, 1.3, - 0.4 );
	doorHalo.scale.set( 3.5, 4, 1 );
	group.add( doorHalo );

	// ---- 杂物：纸箱、空调外机、管道 ----
	const card = new THREE.MeshStandardMaterial( { color: 0x4a3420, roughness: 0.92 } );
	const boxes = [
		[ 7.3, - 4.4, 0.55, 0.45, 0.5, 0.3 ],
		[ 7.9, - 3.6, 0.7, 0.55, 0.6, - 0.2 ],
		[ 7.75, - 3.75, 0.5, 0.4, 0.45, 0.4, 0.55 ]
	];
	for ( const [ x, z, w, h, d, r, y = 0 ] of boxes ) {

		const b = new THREE.Mesh( new THREE.BoxGeometry( w, h, d ), card );
		b.position.set( x, y + h / 2, z );
		b.rotation.y = r;
		group.add( b );

	}

	const ac = new THREE.Mesh( new THREE.BoxGeometry( 1.5, 1.0, 0.8 ), new THREE.MeshStandardMaterial( { color: 0x5b5e63, roughness: 0.5, metalness: 0.4 } ) );
	ac.position.set( 13, 0.5, - 3.5 );
	ac.rotation.y = - 0.25;
	group.add( ac );
	const pipeBeams = [
		[ new THREE.Vector3( 12, 0.25, - 0.5 ), new THREE.Vector3( 30, 0.25, - 0.5 ), 0.22 ],
		[ new THREE.Vector3( 12, 0.25, - 0.5 ), new THREE.Vector3( 12, 0.25, 6 ), 0.22 ],
		[ new THREE.Vector3( - 11, 2.9, 1.6 ), new THREE.Vector3( - 11, 0.0, 1.6 ), 0.12 ]
	];
	group.add( buildBeams( pipeBeams, metal ) );

	// ---- 湿地面 ----
	const floor = new Reflector( new THREE.PlaneGeometry( 74, 34 ), {
		textureWidth: 512,
		textureHeight: 512,
		clipBias: 0.003,
		multisample: Q.msaa > 0 ? 4 : 0,
		shader: FloorShader
	} );
	floor.rotation.x = - Math.PI / 2;
	floor.position.set( 0, 0, 10.6 );
	const mu = floor.material.uniforms;
	mu.uTime = U.uTime;
	mu.uFlash = U.uFlash;
	mu.uAmbTop = U.uAmbTop;
	mu.uAmbBottom = U.uAmbBottom;
	mu.uLampPos.value = lampPos;
	mu.uLampCol.value = lampCol;
	const rt = floor.getRenderTarget();
	rt.texture.generateMipmaps = true;
	rt.texture.minFilter = THREE.LinearMipmapLinearFilter;
	group.add( floor );

	return { group, floor, lampPos, lampCol };

}
