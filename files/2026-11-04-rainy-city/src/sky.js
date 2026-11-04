import * as THREE from 'three';
import { NOISE } from './glsl.js';

// 天空：上暗下亮的渐变，地平线附近带城市灯光映出的暖色，云层用噪声算，闪电时整体提亮。
export function createSkyMaterial( U ) {

	return new THREE.ShaderMaterial( {
		name: 'Sky',
		side: THREE.BackSide,
		depthWrite: false,
		fog: false,
		uniforms: {
			uTime: U.uTime,
			uFlash: U.uFlash,
			uZenith: U.uSkyZenith,
			uHorizon: U.uSkyHorizon,
			uGlow: U.uSkyGlow
		},
		vertexShader: /* glsl */ `
			varying vec3 vDir;
			void main() {
				vDir = position;
				vec4 mv = modelViewMatrix * vec4( position, 1.0 );
				gl_Position = projectionMatrix * mv;
			}
		`,
		fragmentShader: /* glsl */ `
			uniform float uTime;
			uniform float uFlash;
			uniform vec3 uZenith;
			uniform vec3 uHorizon;
			uniform vec3 uGlow;
			varying vec3 vDir;
			${ NOISE }
			void main() {
				vec3 d = normalize( vDir );
				float h = d.y;
				vec3 col = mix( uHorizon, uZenith, smoothstep( -0.02, 0.5, h ) );
				col += uGlow * exp( - max( h, 0.0 ) * 7.0 );

				// 云：投影到一张高空平面上，慢慢飘
				float k = 1.0 / max( h + 0.12, 0.05 );
				vec2 cuv = d.xz * k * 0.55 + vec2( uTime * 0.006, uTime * 0.0025 );
				float c1 = fbm( cuv * 1.2 );
				float c2 = fbm( cuv * 3.3 + 4.0 );
				float cloud = smoothstep( 0.38, 0.85, c1 * 0.75 + c2 * 0.35 );
				float lowSky = exp( - max( h, 0.0 ) * 3.5 );
				vec3 cloudCol = mix( uZenith * 1.6, uHorizon * 1.35 + uGlow * 0.6, lowSky );
				col = mix( col, cloudCol, cloud * 0.8 * smoothstep( -0.06, 0.06, h ) );
				col *= 1.0 - 0.45 * smoothstep( 0.5, 0.85, fbm( cuv * 0.6 + 11.0 ) ) * smoothstep( 0.04, 0.35, h );

				// 闪电
				col += uFlash * vec3( 0.55, 0.62, 0.85 ) * ( 0.35 + cloud * 1.2 ) * smoothstep( -0.1, 0.25, h );

				gl_FragColor = vec4( col, 1.0 );
				#include <tonemapping_fragment>
				#include <colorspace_fragment>
			}
		`
	} );

}

export function createSky( U ) {

	const mesh = new THREE.Mesh( new THREE.SphereGeometry( 4200, 48, 24 ), createSkyMaterial( U ) );
	mesh.renderOrder = - 10;
	mesh.frustumCulled = false;
	return mesh;

}
