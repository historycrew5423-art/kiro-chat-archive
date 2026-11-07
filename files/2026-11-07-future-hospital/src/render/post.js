import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { NOISE } from './glsl.js';
import { SUN_DIR } from '../config.js';

// ---------------------------------------------------------------------------
// 后期链：渲染 → GTAO → 坏像素清零 → 光束 → 泛光 → 景深（只在开场）→ 调色 → 色调映射 → SMAA → 暗角/颗粒/色差/闪白
// 坏像素清零必须在泛光之前（雨夜场景的教训：一个 NaN 像素会被泛光扩散成整屏黑色）。
// ---------------------------------------------------------------------------

const quadVS = /* glsl */ `
	varying vec2 vUv;
	void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
`;

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

const GradeShader = {
	name: 'Grade',
	uniforms: { tDiffuse: { value: null }, uExposure: { value: 1.0 }, uContrast: { value: 1.12 }, uSat: { value: 1.16 }, uWarm: { value: 1.0 } },
	vertexShader: quadVS,
	fragmentShader: /* glsl */ `
		uniform sampler2D tDiffuse;
		uniform float uExposure, uContrast, uSat, uWarm;
		varying vec2 vUv;
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb * uExposure;
			float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
			// 暗部偏青、亮部偏暖（参考图：阴影里是冷的蓝绿，受光面是金色）
			vec3 tint = mix( vec3( 0.93, 1.0, 1.05 ), vec3( 1.06, 1.0, 0.92 ), smoothstep( 0.04, 0.9, l ) );
			c *= mix( vec3( 1.0 ), tint, uWarm );
			c = mix( vec3( l ), c, uSat );
			c = exp2( ( log2( max( c, 1e-5 ) ) - log2( 0.18 ) ) * uContrast + log2( 0.18 ) );
			gl_FragColor = vec4( c, 1.0 );
		}
	`
};

const FinalShader = {
	name: 'Final',
	uniforms: {
		tDiffuse: { value: null }, uTime: { value: 0 }, uRes: { value: new THREE.Vector2( 1, 1 ) },
		uFade: { value: 1 }, uCA: { value: 0 }, uFlash: { value: 0 }, uFlashColor: { value: new THREE.Color( 1, 1, 1 ) },
		uGray: { value: 0 }, uZoom: { value: 0 }, uVignette: { value: 1 }, uHurt: { value: 0 }
	},
	vertexShader: quadVS,
	fragmentShader: /* glsl */ `
		uniform sampler2D tDiffuse;
		uniform float uTime, uFade, uCA, uFlash, uGray, uZoom, uVignette, uHurt;
		uniform vec3 uFlashColor;
		uniform vec2 uRes;
		varying vec2 vUv;
		${ NOISE }
		void main() {
			vec2 c = vUv - 0.5;
			vec3 col;
			if ( uZoom > 0.001 ) {
				// 大招时的放射状变焦模糊
				col = vec3( 0.0 );
				for ( int i = 0; i < 12; i ++ ) {
					float k = 1.0 - uZoom * float( i ) / 12.0 * 0.25;
					col += texture2D( tDiffuse, 0.5 + c * k ).rgb;
				}
				col /= 12.0;
			} else if ( uCA > 0.001 ) {
				vec2 o = c * uCA * 0.02;
				col = vec3( texture2D( tDiffuse, vUv + o ).r, texture2D( tDiffuse, vUv ).g, texture2D( tDiffuse, vUv - o ).b );
			} else {
				col = texture2D( tDiffuse, vUv ).rgb;
			}
			float aspect = uRes.x / uRes.y;
			vec2 vc = c * vec2( max( aspect, 1.0 ), max( 1.0 / aspect, 1.0 ) );
			float vig = smoothstep( 1.15, 0.32, length( vc ) );
			col *= mix( 1.0, mix( 0.74, 1.0, vig ), uVignette );
			// 受伤：边缘泛红
			col = mix( col, vec3( 0.9, 0.05, 0.05 ), uHurt * ( 1.0 - vig ) * 0.6 );
			float l = dot( col, vec3( 0.299, 0.587, 0.114 ) );
			col = mix( col, vec3( l ), uGray );
			col = mix( col, uFlashColor, uFlash );
			col += ( hash12( vUv * uRes + fract( uTime * 7.13 ) * 517.0 ) - 0.5 ) * 0.014;
			gl_FragColor = vec4( col * uFade, 1.0 );
		}
	`
};

// 光束：从太阳的屏幕位置做径向模糊（只取太阳附近的亮部），从建筑缝隙里透出来
class GodraysPass extends Pass {

	constructor( camera ) {

		super();
		this.camera = camera;
		this.rtA = new THREE.WebGLRenderTarget( 1, 1, { type: THREE.HalfFloatType } );
		this.rtB = new THREE.WebGLRenderTarget( 1, 1, { type: THREE.HalfFloatType } );
		this.uniforms = {
			tDiffuse: { value: null }, tRays: { value: null },
			uSun: { value: new THREE.Vector2( 0.5, 0.5 ) }, uVis: { value: 0 },
			uThreshold: { value: 5.0 }, uIntensity: { value: 0.16 }, uAspect: { value: 1 }
		};
		this.extract = new FullScreenQuad( new THREE.ShaderMaterial( {
			uniforms: this.uniforms, vertexShader: quadVS,
			fragmentShader: /* glsl */ `
				uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uThreshold, uAspect;
				varying vec2 vUv;
				void main() {
					vec3 c = texture2D( tDiffuse, vUv ).rgb;
					float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
					vec2 d = ( vUv - uSun ) * vec2( uAspect, 1.0 );
					float m = exp( - dot( d, d ) * 9.0 );
					gl_FragColor = vec4( c * max( l - uThreshold, 0.0 ) / max( l, 1e-3 ) * m, 1.0 );
				}
			`
		} ) );
		this.blur = new FullScreenQuad( new THREE.ShaderMaterial( {
			uniforms: { tDiffuse: { value: null }, uSun: this.uniforms.uSun }, vertexShader: quadVS,
			fragmentShader: /* glsl */ `
				uniform sampler2D tDiffuse; uniform vec2 uSun;
				varying vec2 vUv;
				void main() {
					vec2 delta = ( uSun - vUv ) / 56.0 * 0.92;
					vec2 uv = vUv;
					vec3 acc = vec3( 0.0 );
					float w = 1.0;
					for ( int i = 0; i < 56; i ++ ) {
						acc += texture2D( tDiffuse, uv ).rgb * w;
						w *= 0.965;
						uv += delta;
					}
					gl_FragColor = vec4( acc / 18.0, 1.0 );
				}
			`
		} ) );
		this.comp = new FullScreenQuad( new THREE.ShaderMaterial( {
			uniforms: this.uniforms, vertexShader: quadVS,
			fragmentShader: /* glsl */ `
				uniform sampler2D tDiffuse, tRays; uniform float uIntensity, uVis;
				varying vec2 vUv;
				void main() {
					vec3 c = texture2D( tDiffuse, vUv ).rgb;
					c += texture2D( tRays, vUv ).rgb * uIntensity * uVis * vec3( 1.0, 0.82, 0.6 );
					gl_FragColor = vec4( c, 1.0 );
				}
			`
		} ) );
		this._v = new THREE.Vector3();

	}

	setSize( w, h ) {

		this.rtA.setSize( Math.max( 1, w >> 1 ), Math.max( 1, h >> 1 ) );
		this.rtB.setSize( Math.max( 1, w >> 1 ), Math.max( 1, h >> 1 ) );
		this.uniforms.uAspect.value = w / Math.max( 1, h );

	}

	render( renderer, writeBuffer, readBuffer ) {

		const cam = this.camera;
		const p = this._v.copy( SUN_DIR ).multiplyScalar( 4000 ).add( cam.position ).project( cam );
		const fwd = new THREE.Vector3();
		cam.getWorldDirection( fwd );
		const facing = fwd.dot( SUN_DIR );
		this.uniforms.uSun.value.set( p.x * 0.5 + 0.5, p.y * 0.5 + 0.5 );
		this.uniforms.uVis.value = THREE.MathUtils.smoothstep( facing, 0.55, 0.85 ) * this.enabledAmount;
		this.uniforms.tDiffuse.value = readBuffer.texture;
		if ( this.uniforms.uVis.value > 0.001 ) {

			renderer.setRenderTarget( this.rtA );
			this.extract.render( renderer );
			this.blur.material.uniforms.tDiffuse.value = this.rtA.texture;
			renderer.setRenderTarget( this.rtB );
			this.blur.render( renderer );

		}

		this.uniforms.tRays.value = this.rtB.texture;
		renderer.setRenderTarget( this.renderToScreen ? null : writeBuffer );
		this.comp.render( renderer );

	}

}

export function createPost( renderer, scene, camera, Q ) {

	const size = renderer.getDrawingBufferSize( new THREE.Vector2() );
	const target = new THREE.WebGLRenderTarget( size.x, size.y, { type: THREE.HalfFloatType, samples: Q.msaa } );
	const composer = new EffectComposer( renderer, target );
	const renderPass = new RenderPass( scene, camera );
	composer.addPass( renderPass );
	let gtao = null;
	if ( Q.ao ) {

		gtao = new GTAOPass( scene, camera, size.x, size.y );
		gtao.output = GTAOPass.OUTPUT.Default;
		gtao.blendIntensity = 0.85;
		gtao.updateGtaoMaterial( { radius: 0.9, distanceExponent: 1.4, thickness: 1.2, scale: 1.0, samples: Q.aoSamples, distanceFallOff: 1.0, screenSpaceRadius: false } );
		gtao.updatePdMaterial( { lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 5, rings: 2, samples: 8 } );
		composer.addPass( gtao );

	}

	composer.addPass( new ShaderPass( SanitizeShader ) );
	const godrays = new GodraysPass( camera );
	godrays.enabledAmount = 1;
	composer.addPass( godrays );
	const bloom = new UnrealBloomPass( new THREE.Vector2( size.x / 2, size.y / 2 ), 0.16, 0.45, 4.0 );
	composer.addPass( bloom );
	const bokeh = new BokehPass( scene, camera, { focus: 400, aperture: 0.00012, maxblur: 0.008 } );
	bokeh.enabled = false;
	composer.addPass( bokeh );
	const grade = new ShaderPass( GradeShader );
	composer.addPass( grade );
	composer.addPass( new OutputPass() );
	let smaa = null;
	if ( Q.smaa ) {

		smaa = new SMAAPass();
		composer.addPass( smaa );

	}

	const final = new ShaderPass( FinalShader );
	composer.addPass( final );

	return {
		composer, gtao, bloom, grade, final, godrays, bokeh, smaa,
		setSize( w, h, dpr ) {

			composer.setPixelRatio( dpr );
			composer.setSize( w, h );
			final.uniforms.uRes.value.set( w * dpr, h * dpr );

		},
		render( dt ) {

			final.uniforms.uTime.value += dt;
			composer.render( dt );

		}
	};

}
