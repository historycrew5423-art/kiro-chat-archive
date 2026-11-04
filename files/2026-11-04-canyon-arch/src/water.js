import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { NOISE } from './glsl.js';
import { ATMOS } from './atmosphere.js';

// 水面法线：几组方向不同的长波 + 噪声细纹，用来扭曲倒影
const WAVES = /* glsl */ `
	vec2 waveGrad( vec2 p, float t ) {
		vec2 g = vec2( 0.0 );
		vec2 d;
		d = normalize( vec2( 0.3, 1.0 ) );  g += d * cos( dot( d, p ) * 0.21 + t * 0.7 ) * 0.010;
		d = normalize( vec2( - 0.8, 0.6 ) ); g += d * cos( dot( d, p ) * 0.37 + t * 0.9 ) * 0.008;
		d = normalize( vec2( 0.9, 0.2 ) );  g += d * cos( dot( d, p ) * 0.63 + t * 1.3 ) * 0.007;
		d = normalize( vec2( - 0.2, - 1.0 ) ); g += d * cos( dot( d, p ) * 1.10 + t * 1.7 ) * 0.006;
		d = normalize( vec2( 0.6, - 0.7 ) ); g += d * cos( dot( d, p ) * 1.90 + t * 2.3 ) * 0.005;
		float e = 0.2;
		vec2 q = p * 0.33 + vec2( t * 0.04, t * 0.03 );
		float h0 = fbm3( q );
		g += vec2( fbm3( q + vec2( e, 0.0 ) ) - h0, fbm3( q + vec2( 0.0, e ) ) - h0 ) / e * 0.05;
		return g;
	}
`;

const LakeShader = {
	name: 'Lake',
	uniforms: {
		color: { value: null },
		tDiffuse: { value: null },
		textureMatrix: { value: null },
		uTime: { value: 0 }
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
		uniform sampler2D tDiffuse;
		uniform float uTime;
		varying vec4 vUv;
		varying vec3 vWorld;
		#include <common>
		${ NOISE }
		${ ATMOS }
		${ WAVES }
		void main() {
			vec2 g = waveGrad( vWorld.xz, uTime );
			vec3 N = normalize( vec3( - g.x, 1.0, - g.y ) );
			vec3 V = normalize( cameraPosition - vWorld );
			float NdV = clamp( dot( N, V ), 0.0, 1.0 );
			float F = 0.02 + 0.98 * pow( clamp( 1.0 - NdV, 0.0, 1.0 ), 5.0 );
			vec2 ruv = vUv.xy / vUv.w + N.xz * 0.03;
			vec3 refl = texture2D( tDiffuse, ruv ).rgb;
			float m = sunMask( vWorld );
			vec3 deep = vec3( 0.010, 0.026, 0.020 ) * ( 0.6 + 0.8 * m );
			vec3 R = reflect( - V, N );
			float rs = clamp( dot( R, SUN_DIR ), 0.0, 1.0 );
			vec3 col = deep * ( 1.0 - F ) + refl * F;
			float sparkle = smoothstep( 0.6, 0.95, vnoise( vWorld.xz * 2.5 + uTime * 0.7 ) );
			col += SUN_COLOR * ( pow( rs, 1400.0 ) * 10.0 * sparkle + pow( rs, 200.0 ) * 0.25 ) * m;
			col = atmos( col, vWorld );
			gl_FragColor = vec4( col, 1.0 );
			#include <tonemapping_fragment>
			#include <colorspace_fragment>
		}
	`
};

// 不做真实倒影的水面（台阶上的小水潭、拱门后的河）：
// 把反射方向投到拱门所在的平面上，落在洞口里就是亮的天空，否则是暗的岩壁
const pondFragment = /* glsl */ `
	uniform float uTime;
	uniform float uOpen;
	varying vec3 vWorld;
	#include <common>
	${ NOISE }
	${ ATMOS }
	${ WAVES }
	void main() {
		vec2 g = waveGrad( vWorld.xz * 1.5, uTime * 1.3 ) * 1.8;
		vec3 N = normalize( vec3( - g.x, 1.0, - g.y ) );
		vec3 V = normalize( cameraPosition - vWorld );
		float NdV = clamp( dot( N, V ), 0.0, 1.0 );
		float F = 0.02 + 0.98 * pow( clamp( 1.0 - NdV, 0.0, 1.0 ), 5.0 );
		vec3 R = reflect( - V, N );
		vec3 sky = vec3( 1.5, 1.25, 0.95 ) + SUN_COLOR * pow( clamp( dot( R, SUN_DIR ), 0.0, 1.0 ), 12.0 ) * 3.0;
		vec3 rockC = vec3( 0.05, 0.07, 0.05 );
		float open = uOpen < 0.5 ? 1.0 : uOpen;
		if ( uOpen < 0.5 && vWorld.z > ${ ( - 400 ).toFixed( 1 ) } ) {
			float t = ( ${ ( - 400 ).toFixed( 1 ) } - vWorld.z ) / min( R.z, - 1e-3 );
			vec2 q = vWorld.xy + R.xy * t;
			open = 1.0 - smoothstep( - 20.0, 10.0, archSDF( q ) );
		}
		vec3 refl = mix( rockC, sky, open );
		float m = sunMask( vWorld );
		vec3 col = vec3( 0.02, 0.04, 0.03 ) * ( 0.5 + m ) * ( 1.0 - F ) + refl * F;
		col += SUN_COLOR * pow( clamp( dot( R, SUN_DIR ), 0.0, 1.0 ), 800.0 ) * 6.0 * m;
		col = atmos( col, vWorld );
		gl_FragColor = vec4( col, 1.0 );
		#include <tonemapping_fragment>
		#include <colorspace_fragment>
	}
`;

function pondMaterial( U, open ) {

	return new THREE.ShaderMaterial( {
		name: 'Pond',
		uniforms: { uTime: U.uTime, uOpen: { value: open } },
		vertexShader: /* glsl */ `
			varying vec3 vWorld;
			void main() {
				vec4 wp = modelMatrix * vec4( position, 1.0 );
				vWorld = wp.xyz;
				gl_Position = projectionMatrix * viewMatrix * wp;
			}
		`,
		fragmentShader: pondFragment
	} );

}

export function createWater( U, rock, Q ) {

	const group = new THREE.Group();

	const lake = new Reflector( new THREE.PlaneGeometry( 640, 500 ), {
		textureWidth: 512,
		textureHeight: 512,
		clipBias: 0.002,
		multisample: Q.msaa > 0 ? 4 : 0,
		shader: LakeShader
	} );
	lake.rotation.x = - Math.PI / 2;
	lake.position.set( 20, 0, - 268 + 250 );
	lake.material.uniforms.uTime = U.uTime;
	group.add( lake );

	// 台阶上的水潭
	const pm = pondMaterial( U, 0 );
	rock.steps.forEach( ( s, i ) => {

		const next = rock.steps[ i + 1 ];
		const z1 = next ? next.z : s.z - 36;
		const g = new THREE.PlaneGeometry( s.x1 - s.x0, s.z - z1 + 2 );
		g.rotateX( - Math.PI / 2 );
		const mesh = new THREE.Mesh( g, pm );
		mesh.position.set( ( s.x0 + s.x1 ) / 2, s.top - 0.4, ( s.z + z1 ) / 2 - 1 );
		group.add( mesh );

	} );

	// 拱门后面的河
	{

		const g = new THREE.PlaneGeometry( 700, 2400 );
		g.rotateX( - Math.PI / 2 );
		const mesh = new THREE.Mesh( g, pondMaterial( U, 1 ) );
		mesh.position.set( 20, 30.6, - 388 - 1200 );
		group.add( mesh );

	}

	return { group, lake };

}
