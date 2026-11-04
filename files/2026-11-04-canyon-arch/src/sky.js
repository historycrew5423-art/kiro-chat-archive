import * as THREE from 'three';
import { NOISE } from './glsl.js';
import { ATMOS } from './atmosphere.js';

// 天空：只从拱门洞口里看得到。低空是暖白色，太阳周围是很亮的光晕，带几缕薄云
export function createSkyMaterial( U, { envOnly = false } = {} ) {

	return new THREE.ShaderMaterial( {
		name: envOnly ? 'SkyEnv' : 'Sky',
		side: THREE.BackSide,
		depthWrite: false,
		uniforms: { uTime: U.uTime },
		vertexShader: /* glsl */ `
			varying vec3 vDir;
			void main() {
				vDir = position;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}
		`,
		fragmentShader: /* glsl */ `
			uniform float uTime;
			varying vec3 vDir;
			${ NOISE }
			${ ATMOS }
			void main() {
				vec3 d = normalize( vDir );
				float s = clamp( dot( d, SUN_DIR ), 0.0, 1.0 );
				vec3 zen = vec3( 0.30, 0.48, 0.80 );
				vec3 hor = vec3( 1.05, 0.88, 0.66 );
				vec3 col = mix( hor, zen, smoothstep( 0.0, 0.6, d.y ) );
				col = mix( col, vec3( 1.2, 0.95, 0.7 ), smoothstep( 0.0, - 0.08, d.y ) );
				col += SUN_COLOR * ( pow( s, 8.0 ) * 1.0 + pow( s, 90.0 ) * 5.0 );
				${ envOnly ? '' : 'col += SUN_COLOR * smoothstep( 0.99955, 0.99985, s ) * 28.0;' }
				vec2 cuv = d.xz / max( d.y + 0.15, 0.05 );
				float c = smoothstep( 0.5, 0.8, fbm( cuv * vec2( 0.8, 2.5 ) + vec2( uTime * 0.004, 0.0 ) ) ) * smoothstep( - 0.02, 0.15, d.y );
				col = mix( col, vec3( 1.0, 0.8, 0.6 ) + SUN_COLOR * pow( s, 10.0 ) * 2.0, c * 0.35 );
				gl_FragColor = vec4( col, 1.0 );
				#include <tonemapping_fragment>
				#include <colorspace_fragment>
			}
		`
	} );

}

export function createSky( U ) {

	const mesh = new THREE.Mesh( new THREE.SphereGeometry( 5200, 48, 24 ), createSkyMaterial( U ) );
	mesh.frustumCulled = false;
	mesh.renderOrder = - 10;
	return mesh;

}

// 环境光用的“峡谷”环境：四周是暗绿的岩壁，只有拱门方向有亮光
export function createEnvScene( U ) {

	const scene = new THREE.Scene();
	const mat = new THREE.ShaderMaterial( {
		side: THREE.BackSide,
		depthWrite: false,
		vertexShader: /* glsl */ `
			varying vec3 vDir;
			void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
		`,
		fragmentShader: /* glsl */ `
			varying vec3 vDir;
			void main() {
				vec3 d = normalize( vDir );
				vec3 rock = mix( vec3( 0.03, 0.04, 0.03 ), vec3( 0.09, 0.11, 0.10 ), smoothstep( - 0.4, 0.6, d.y ) );
				vec3 open = normalize( vec3( 0.04, 0.22, - 1.0 ) );
				float o = smoothstep( 0.90, 0.97, dot( d, open ) );
				vec3 col = rock + vec3( 1.6, 1.25, 0.9 ) * o;
				col += vec3( 0.25, 0.32, 0.4 ) * smoothstep( 0.6, 1.0, d.y ) * 0.4;
				gl_FragColor = vec4( col, 1.0 );
			}
		`
	} );
	scene.add( new THREE.Mesh( new THREE.SphereGeometry( 100, 48, 24 ), mat ) );
	return scene;

}
