import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { NOISE } from '../render/glsl.js';
import { ATMOS } from '../render/atmosphere.js';
import { WATER_Y } from '../config.js';

// ---------------------------------------------------------------------------
// 湖面：Reflector 渲染镜像，几组波纹 + 噪声细纹做法线去扰动倒影；菲涅尔混合水色和倒影；
// 太阳的碎光：窄高光乘噪声（峡谷场景的教训：宽高光会让水面中间一大团白）。
// 每帧只更新一次倒影（GTAO、景深这些通道也会触发 onBeforeRender，要跳过）。
// ---------------------------------------------------------------------------

export const LAYER_NO_REFLECT = 3;

export function createWater( Q, time ) {

	const shader = {
		name: 'Lake',
		uniforms: {
			tDiffuse: { value: null }, textureMatrix: { value: null }, color: { value: null },
			uTime: time, uDeep: { value: new THREE.Color( 0.018, 0.04, 0.045 ) }, uRefl: { value: 1.0 }
		},
		vertexShader: /* glsl */ `
			uniform mat4 textureMatrix;
			varying vec4 vUv;
			varying vec3 vW;
			void main() {
				vUv = textureMatrix * vec4( position, 1.0 );
				vec4 w = modelMatrix * vec4( position, 1.0 );
				vW = w.xyz;
				gl_Position = projectionMatrix * viewMatrix * w;
			}
		`,
		fragmentShader: /* glsl */ `
			uniform sampler2D tDiffuse;
			uniform float uTime, uRefl;
			uniform vec3 uDeep;
			varying vec4 vUv;
			varying vec3 vW;
			${ NOISE }
			${ ATMOS }
			vec2 waves( vec2 p ) {
				vec2 g = vec2( 0.0 );
				float t = uTime;
				g += vec2( 0.9, 0.3 ) * cos( dot( p, vec2( 0.9, 0.3 ) ) * 0.22 + t * 0.7 ) * 0.10;
				g += vec2( - 0.4, 0.9 ) * cos( dot( p, vec2( - 0.4, 0.9 ) ) * 0.31 + t * 0.9 ) * 0.07;
				g += vec2( 0.6, - 0.8 ) * cos( dot( p, vec2( 0.6, - 0.8 ) ) * 0.53 + t * 1.3 ) * 0.04;
				g += vec2( vnoise( p * 0.9 + t * 0.3 ) - 0.5, vnoise( p * 0.9 - t * 0.27 + 7.0 ) - 0.5 ) * 0.16;
				g += vec2( vnoise( p * 3.1 + t * 0.6 ) - 0.5, vnoise( p * 3.3 - t * 0.5 + 3.0 ) - 0.5 ) * 0.08;
				return g;
			}
			void main() {
				vec3 V = normalize( cameraPosition - vW );
				float dist = length( cameraPosition - vW );
				// 远处的波纹按距离减弱（否则会闪）
				float fade = 1.0 / ( 1.0 + dist * 0.004 );
				vec2 g = waves( vW.xz ) * fade;
				vec3 N = normalize( vec3( - g.x, 1.0, - g.y ) );
				float fr = 0.02 + 0.98 * pow( 1.0 - clamp( dot( N, V ), 0.0, 1.0 ), 5.0 );
				vec4 uv = vUv;
				uv.xy += N.xz * 6.0 * uv.w * 0.012;
				vec3 refl = texture2DProj( tDiffuse, uv ).rgb * uRefl;
				// 倒影竖向拉长一点（远处水面的倒影本来就模糊、拉长）
				vec4 uv2 = uv; uv2.y += uv.w * 0.006;
				refl = mix( refl, texture2DProj( tDiffuse, uv2 ).rgb, 0.35 );
				vec3 col = mix( uDeep, refl, clamp( fr * 1.15 + 0.12, 0.0, 1.0 ) );
				// 太阳碎光
				vec3 Hh = normalize( SUN_DIR + V );
				float spec = pow( clamp( dot( N, Hh ), 0.0, 1.0 ), 900.0 );
				float glint = smoothstep( 0.55, 0.9, vnoise( vW.xz * 1.7 + uTime * 0.8 ) );
				col += SUN_COLOR * spec * glint * 90.0;
				col = atmos( col, vW );
				gl_FragColor = vec4( col, 1.0 );
			}
		`
	};
	const size = 3200;
	const geo = new THREE.PlaneGeometry( size, size );
	const water = new Reflector( geo, {
		shader, textureWidth: Q.reflW, textureHeight: Q.reflH, clipBias: 0.002, multisample: 0
	} );
	water.rotation.x = - Math.PI / 2;
	water.position.set( - 50, WATER_Y, 400 );
	water.name = 'lake';
	water.material.uniforms.uTime = time;

	// 每帧只渲染一次倒影
	const orig = water.onBeforeRender;
	let lastFrame = - 1;
	water.frame = 0;
	water.mainCamera = null;
	water.onBeforeRender = function ( renderer, scene, camera ) {

		// 室内看不到湖：倒影停在最后一帧，省一次整场景渲染
		if ( camera !== water.mainCamera || lastFrame === water.frame || water.freeze ) return;
		lastFrame = water.frame;
		orig.call( this, renderer, scene, camera );

	};

	water.setup = ( camera ) => {

		water.mainCamera = camera;
		const rc = water.getReflectionCamera( camera );
		rc.layers.disable( LAYER_NO_REFLECT );

	};

	return water;

}
