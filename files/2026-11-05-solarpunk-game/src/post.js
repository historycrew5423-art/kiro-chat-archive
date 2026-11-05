import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { NOISE } from './glsl.js';

const quadVS = /* glsl */ `
	varying vec2 vUv;
	void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
`;

// 安全阀：NaN / 无穷大像素清零（雨夜场景的教训：否则泛光会把一个坏像素扩散成整屏黑色）
const SanitizeShader = {
	name: 'Sanitize',
	uniforms: { tDiffuse: { value: null } },
	vertexShader: quadVS,
	fragmentShader: /* glsl */ `
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		bool bad( float x ) { return ( floatBitsToUint( x ) & 0x7f800000u ) == 0x7f800000u; }
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb;
			if ( bad( c.r ) || bad( c.g ) || bad( c.b ) ) c = vec3( 0.0 );
			gl_FragColor = vec4( clamp( c, 0.0, 200.0 ), 1.0 );
		}
	`
};

// 调色：暗部略偏青，亮部偏暖，提一点对比和饱和度（参考图是暖阳 + 饱和的蓝天绿树）
const GradeShader = {
	name: 'Grade',
	uniforms: { tDiffuse: { value: null }, uExposure: { value: 1.0 }, uContrast: { value: 1.16 }, uSat: { value: 1.12 } },
	vertexShader: quadVS,
	fragmentShader: /* glsl */ `
		uniform sampler2D tDiffuse;
		uniform float uExposure;
		uniform float uContrast;
		uniform float uSat;
		varying vec2 vUv;
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb * uExposure;
			float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
			c *= mix( vec3( 0.95, 1.0, 1.03 ), vec3( 1.04, 1.0, 0.95 ), smoothstep( 0.05, 0.6, l ) );
			c = mix( vec3( l ), c, uSat );
			// 在对数空间里绕中灰做对比度
			c = exp2( ( log2( max( c, 1e-5 ) ) - log2( 0.18 ) ) * uContrast + log2( 0.18 ) );
			gl_FragColor = vec4( c, 1.0 );
		}
	`
};

const FinalShader = {
	name: 'Final',
	uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uRes: { value: new THREE.Vector2( 1, 1 ) }, uFade: { value: 1 } },
	vertexShader: quadVS,
	fragmentShader: /* glsl */ `
		uniform sampler2D tDiffuse;
		uniform float uTime;
		uniform vec2 uRes;
		uniform float uFade;
		varying vec2 vUv;
		${ NOISE }
		void main() {
			vec2 c = vUv - 0.5;
			vec3 col = texture2D( tDiffuse, vUv ).rgb;
			float aspect = uRes.x / uRes.y;
			vec2 vc = c * vec2( max( aspect, 1.0 ), max( 1.0 / aspect, 1.0 ) );
			col *= mix( 0.78, 1.0, smoothstep( 1.1, 0.35, length( vc ) ) );
			col += ( hash12( vUv * uRes + fract( uTime * 7.13 ) * 517.0 ) - 0.5 ) * 0.012;
			gl_FragColor = vec4( col * uFade, 1.0 );
		}
	`
};

export function createPost( renderer, scene, camera, Q ) {

	const size = renderer.getDrawingBufferSize( new THREE.Vector2() );
	const target = new THREE.WebGLRenderTarget( size.x, size.y, { type: THREE.HalfFloatType, samples: Q.msaa } );
	const composer = new EffectComposer( renderer, target );
	composer.addPass( new RenderPass( scene, camera ) );
	composer.addPass( new ShaderPass( SanitizeShader ) );
	const bloom = new UnrealBloomPass( new THREE.Vector2( size.x / 2, size.y / 2 ), 0.18, 0.5, 1.6 );
	composer.addPass( bloom );
	const grade = new ShaderPass( GradeShader );
	composer.addPass( grade );
	composer.addPass( new OutputPass() );
	const final = new ShaderPass( FinalShader );
	composer.addPass( final );
	return {
		composer, bloom, grade, final,
		setSize( w, h, dpr ) {

			composer.setPixelRatio( dpr );
			composer.setSize( w, h );
			final.uniforms.uRes.value.set( w * dpr, h * dpr );

		}
	};

}
