import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { NOISE } from './glsl.js';

const quadVS = /* glsl */ `
	varying vec2 vUv;
	void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
`;

// 安全阀（来自雨夜场景的教训）：NaN / 无穷大的像素清零，避免被泛光扩散成整屏黑色
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
			gl_FragColor = vec4( clamp( c, 0.0, 300.0 ), 1.0 );
		}
	`
};

// 光束：把画面里最亮的部分（太阳和洞口的天空）从太阳位置向外做径向模糊，
// 岩石和树叶挡住的地方自然留下暗缝，就成了一道道光柱
class GodRaysPass extends Pass {

	constructor( camera, sunDir, { samples = 64, scale = 0.5, intensity = 0.28 } = {} ) {

		super();
		this.camera = camera;
		this.sunDir = sunDir.clone();
		this.scale = scale;
		this.intensity = intensity;
		const opts = { type: THREE.HalfFloatType };
		this.rtMask = new THREE.WebGLRenderTarget( 1, 1, opts );
		this.rtBlur = new THREE.WebGLRenderTarget( 1, 1, opts );
		this.sunUv = new THREE.Vector2();
		this.maskMat = new THREE.ShaderMaterial( {
			uniforms: { tDiffuse: { value: null }, uSun: { value: this.sunUv }, uAspect: { value: 1 }, uThreshold: { value: 4.5 } },
			vertexShader: quadVS,
			fragmentShader: /* glsl */ `
				uniform sampler2D tDiffuse;
				uniform vec2 uSun;
				uniform float uAspect;
				uniform float uThreshold;
				varying vec2 vUv;
				void main() {
					vec3 c = texture2D( tDiffuse, vUv ).rgb;
					float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
					float k = max( l - uThreshold, 0.0 ) / max( l, 1e-4 );
					vec2 d = ( vUv - uSun ) * vec2( uAspect, 1.0 );
					gl_FragColor = vec4( min( c * k, vec3( 20.0 ) ) * exp( - dot( d, d ) * 2.5 ), 1.0 );
				}
			`
		} );
		this.blurMat = new THREE.ShaderMaterial( {
			defines: { SAMPLES: samples },
			uniforms: { tMask: { value: null }, uSun: { value: this.sunUv }, uDensity: { value: 0.92 }, uDecay: { value: 0.958 }, uWeight: { value: 0.05 } },
			vertexShader: quadVS,
			fragmentShader: /* glsl */ `
				uniform sampler2D tMask;
				uniform vec2 uSun;
				uniform float uDensity;
				uniform float uDecay;
				uniform float uWeight;
				varying vec2 vUv;
				${ NOISE }
				void main() {
					vec2 delta = ( vUv - uSun ) * uDensity / float( SAMPLES );
					vec2 uv = vUv - delta * hash12( vUv * 913.0 );
					float illum = 1.0;
					vec3 acc = vec3( 0.0 );
					for ( int i = 0; i < SAMPLES; i ++ ) {
						uv -= delta;
						acc += texture2D( tMask, uv ).rgb * illum * uWeight;
						illum *= uDecay;
					}
					gl_FragColor = vec4( acc, 1.0 );
				}
			`
		} );
		this.compMat = new THREE.ShaderMaterial( {
			uniforms: { tDiffuse: { value: null }, tRays: { value: null }, uIntensity: { value: 0 } },
			vertexShader: quadVS,
			fragmentShader: /* glsl */ `
				uniform sampler2D tDiffuse;
				uniform sampler2D tRays;
				uniform float uIntensity;
				varying vec2 vUv;
				void main() {
					vec3 c = texture2D( tDiffuse, vUv ).rgb + texture2D( tRays, vUv ).rgb * vec3( 1.0, 0.85, 0.65 ) * uIntensity;
					gl_FragColor = vec4( c, 1.0 );
				}
			`
		} );
		this.quad = new FullScreenQuad( null );
		this._v = new THREE.Vector3();

	}

	setSize( w, h ) {

		const sw = Math.max( 1, Math.round( w * this.scale ) );
		const sh = Math.max( 1, Math.round( h * this.scale ) );
		this.rtMask.setSize( sw, sh );
		this.rtBlur.setSize( sw, sh );
		this.maskMat.uniforms.uAspect.value = w / h;

	}

	render( renderer, writeBuffer, readBuffer ) {

		const v = this._v.copy( this.camera.position ).addScaledVector( this.sunDir, 4000 );
		const view = v.clone().applyMatrix4( this.camera.matrixWorldInverse );
		v.project( this.camera );
		this.sunUv.set( v.x * 0.5 + 0.5, v.y * 0.5 + 0.5 );
		const off = Math.max( Math.abs( v.x ), Math.abs( v.y ) );
		const fade = view.z < 0 ? 1 - THREE.MathUtils.smoothstep( off, 1.1, 2.0 ) : 0;

		this.maskMat.uniforms.tDiffuse.value = readBuffer.texture;
		this.quad.material = this.maskMat;
		renderer.setRenderTarget( this.rtMask );
		this.quad.render( renderer );

		this.blurMat.uniforms.tMask.value = this.rtMask.texture;
		this.quad.material = this.blurMat;
		renderer.setRenderTarget( this.rtBlur );
		this.quad.render( renderer );

		this.compMat.uniforms.tDiffuse.value = readBuffer.texture;
		this.compMat.uniforms.tRays.value = this.rtBlur.texture;
		this.compMat.uniforms.uIntensity.value = this.intensity * fade;
		this.quad.material = this.compMat;
		renderer.setRenderTarget( this.renderToScreen ? null : writeBuffer );
		if ( this.clear ) renderer.clear();
		this.quad.render( renderer );

	}

}

// 线性空间调色：暗部偏青绿，亮部偏金
const GradeShader = {
	name: 'Grade',
	uniforms: { tDiffuse: { value: null }, uExposure: { value: 1.22 } },
	vertexShader: quadVS,
	fragmentShader: /* glsl */ `
		uniform sampler2D tDiffuse;
		uniform float uExposure;
		varying vec2 vUv;
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb * uExposure;
			float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
			c *= mix( vec3( 0.88, 1.02, 1.06 ), vec3( 1.06, 1.0, 0.9 ), smoothstep( 0.02, 0.6, l ) );
			c = mix( vec3( l ), c, 1.15 );
			gl_FragColor = vec4( max( c, 0.0 ), 1.0 );
		}
	`
};

const FinalShader = {
	name: 'Final',
	uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uRes: { value: new THREE.Vector2( 1, 1 ) }, uFade: { value: 0 } },
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
			col *= mix( 0.62, 1.0, smoothstep( 1.05, 0.3, length( vc ) ) );
			col += ( hash12( vUv * uRes + fract( uTime * 7.13 ) * 517.0 ) - 0.5 ) * 0.022;
			gl_FragColor = vec4( col * uFade, 1.0 );
		}
	`
};

export function createPost( renderer, scene, camera, sunDir, Q ) {

	const size = renderer.getDrawingBufferSize( new THREE.Vector2() );
	const target = new THREE.WebGLRenderTarget( size.x, size.y, { type: THREE.HalfFloatType, samples: Q.msaa } );
	const composer = new EffectComposer( renderer, target );
	composer.addPass( new RenderPass( scene, camera ) );
	composer.addPass( new ShaderPass( SanitizeShader ) );
	const rays = new GodRaysPass( camera, sunDir, { samples: Q.raySamples, scale: Q.rayScale } );
	composer.addPass( rays );
	const bloom = new UnrealBloomPass( new THREE.Vector2( size.x, size.y ), 0.35, 0.6, 2.2 );
	composer.addPass( bloom );
	const grade = new ShaderPass( GradeShader );
	composer.addPass( grade );
	composer.addPass( new OutputPass() );
	const final = new ShaderPass( FinalShader );
	composer.addPass( final );

	return {
		composer, rays, bloom, grade, final,
		setSize( w, h, dpr ) {

			composer.setPixelRatio( dpr );
			composer.setSize( w, h );
			final.uniforms.uRes.value.set( w * dpr, h * dpr );

		}
	};

}
