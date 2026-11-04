import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { NOISE } from './glsl.js';

// 安全阀：把 NaN / 无穷大的像素清零，并限制最大亮度。
// 不加这一步时，只要有一个坏像素，泛光的多级模糊就会把它扩散成大块黑色，画面会一闪一闪地变黑。
// 用位运算判断指数位，避免编译器的快速数学优化把 isnan 判断去掉。
const SanitizeShader = {
	name: 'Sanitize',
	uniforms: { tDiffuse: { value: null } },
	vertexShader: /* glsl */ `
		varying vec2 vUv;
		void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
	`,
	fragmentShader: /* glsl */ `
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		bool bad( float x ) { return ( floatBitsToUint( x ) & 0x7f800000u ) == 0x7f800000u; }
		void main() {
			vec4 t = texture2D( tDiffuse, vUv );
			vec3 c = t.rgb;
			if ( bad( c.r ) || bad( c.g ) || bad( c.b ) ) c = vec3( 0.0 );
			c = clamp( c, 0.0, 300.0 );
			gl_FragColor = vec4( c, 1.0 );
		}
	`
};

// 线性 HDR 空间里调色：暗部偏青蓝、亮部偏暖，略降饱和，像电影里的雨夜
const GradeShader = {
	name: 'Grade',
	uniforms: {
		tDiffuse: { value: null },
		uExposure: { value: 1.0 }
	},
	vertexShader: /* glsl */ `
		varying vec2 vUv;
		void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
	`,
	fragmentShader: /* glsl */ `
		uniform sampler2D tDiffuse;
		uniform float uExposure;
		varying vec2 vUv;
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb * uExposure;
			float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
			vec3 shadowTint = vec3( 0.86, 0.97, 1.12 );
			vec3 highTint = vec3( 1.08, 1.0, 0.9 );
			c *= mix( shadowTint, highTint, smoothstep( 0.02, 0.5, l ) );
			c = mix( vec3( l ), c, 0.9 );
			c += vec3( 0.003, 0.005, 0.008 );
			gl_FragColor = vec4( c, 1.0 );
		}
	`
};

// 显示空间里的最后一道：轻微色散、暗角、胶片颗粒、淡入
const FinalShader = {
	name: 'Final',
	uniforms: {
		tDiffuse: { value: null },
		uTime: { value: 0 },
		uRes: { value: new THREE.Vector2( 1, 1 ) },
		uFade: { value: 0 }
	},
	vertexShader: /* glsl */ `
		varying vec2 vUv;
		void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
	`,
	fragmentShader: /* glsl */ `
		uniform sampler2D tDiffuse;
		uniform float uTime;
		uniform vec2 uRes;
		uniform float uFade;
		varying vec2 vUv;
		${ NOISE }
		void main() {
			vec2 c = vUv - 0.5;
			float k = dot( c, c ) * 0.0025;
			vec3 col;
			col.r = texture2D( tDiffuse, vUv + c * k ).r;
			col.g = texture2D( tDiffuse, vUv ).g;
			col.b = texture2D( tDiffuse, vUv - c * k ).b;
			float aspect = uRes.x / uRes.y;
			vec2 vc = c * vec2( max( aspect, 1.0 ), max( 1.0 / aspect, 1.0 ) );
			float vig = smoothstep( 1.05, 0.25, length( vc ) );
			col *= mix( 0.5, 1.0, vig );
			float g = hash12( vUv * uRes + fract( uTime * 7.13 ) * 517.0 ) - 0.5;
			col += g * 0.032;
			col *= uFade;
			gl_FragColor = vec4( col, 1.0 );
		}
	`
};

export function createPost( renderer, scene, camera, Q ) {

	const size = renderer.getDrawingBufferSize( new THREE.Vector2() );
	const target = new THREE.WebGLRenderTarget( size.x, size.y, { type: THREE.HalfFloatType, samples: Q.msaa } );
	const composer = new EffectComposer( renderer, target );
	composer.addPass( new RenderPass( scene, camera ) );
	composer.addPass( new ShaderPass( SanitizeShader ) );
	const bloom = new UnrealBloomPass( new THREE.Vector2( size.x * Q.bloomScale, size.y * Q.bloomScale ), 0.75, 0.6, 1.1 );
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
