import * as THREE from 'three';
import { NOISE } from './glsl.js';
import { RAIN_LAYER } from './terrace.js';

// 雨丝：每根雨是一条短线段，下落、循环全在顶点着色器里算。
// 雨本身几乎不可见，被灯照到才亮，所以颜色按到各个灯的距离计算。
function rainLayer( U, count, boxMin, boxSize, len, ambient, seed ) {

	const pos = new Float32Array( count * 2 * 3 );
	const aSeed = new Float32Array( count * 2 * 4 );
	const aEnd = new Float32Array( count * 2 );
	let s = seed;
	const rnd = () => {

		s = ( s * 16807 ) % 2147483647;
		return s / 2147483647;

	};

	for ( let i = 0; i < count; i ++ ) {

		const sx = rnd(), sy = rnd(), sz = rnd(), sw = rnd();
		for ( let k = 0; k < 2; k ++ ) {

			const j = i * 2 + k;
			aSeed.set( [ sx, sy, sz, sw ], j * 4 );
			aEnd[ j ] = k;

		}

	}

	const geo = new THREE.BufferGeometry();
	geo.setAttribute( 'position', new THREE.BufferAttribute( pos, 3 ) );
	geo.setAttribute( 'aSeed', new THREE.BufferAttribute( aSeed, 4 ) );
	geo.setAttribute( 'aEnd', new THREE.BufferAttribute( aEnd, 1 ) );

	const mat = new THREE.ShaderMaterial( {
		name: 'Rain',
		transparent: true,
		depthWrite: false,
		blending: THREE.AdditiveBlending,
		uniforms: {
			uTime: U.uTime,
			uFlash: U.uFlash,
			uBoxMin: { value: boxMin },
			uBoxSize: { value: boxSize },
			uLen: { value: len },
			uAmbient: { value: ambient },
			uWind: U.uWind,
			uLampPos: U.uLampPos,
			uLampCol: U.uLampCol,
			uIntensity: U.uRainIntensity
		},
		vertexShader: /* glsl */ `
			#define NUM_LAMPS 3
			attribute vec4 aSeed;
			attribute float aEnd;
			uniform float uTime;
			uniform float uFlash;
			uniform vec3 uBoxMin;
			uniform vec3 uBoxSize;
			uniform float uLen;
			uniform float uAmbient;
			uniform vec3 uWind;
			uniform vec3 uLampPos[ NUM_LAMPS ];
			uniform vec3 uLampCol[ NUM_LAMPS ];
			uniform float uIntensity;
			varying vec3 vCol;
			varying float vEnd;
			void main() {
				float speed = 11.0 * ( 0.85 + 0.3 * aSeed.w );
				vec3 dir = normalize( vec3( uWind.x, - 1.0, uWind.z ) );
				float fall = mod( aSeed.y * uBoxSize.y + uTime * speed, uBoxSize.y );
				vec3 p = uBoxMin + vec3( aSeed.x * uBoxSize.x, uBoxSize.y - fall, aSeed.z * uBoxSize.z );
				p.xz += dir.xz / - dir.y * ( fall - uBoxSize.y * 0.5 );
				p -= dir * uLen * aEnd * ( 0.7 + 0.6 * aSeed.w );

				vec4 mv = modelViewMatrix * vec4( p, 1.0 );
				gl_Position = projectionMatrix * mv;

				vec3 light = vec3( uAmbient ) * vec3( 0.75, 0.85, 1.0 );
				for ( int i = 0; i < NUM_LAMPS; i ++ ) {
					vec3 L = uLampPos[ i ] - p;
					light += uLampCol[ i ] * 0.05 / ( 1.0 + dot( L, L ) * 0.35 );
				}
				light += uFlash * vec3( 0.6, 0.7, 1.0 ) * 0.4;
				float d = - mv.z;
				float fade = smoothstep( 0.4, 2.0, d ) * ( 1.0 - smoothstep( 40.0, 120.0, d ) );
				vCol = light * fade * uIntensity * ( 0.5 + 0.5 * aSeed.w );
				vEnd = aEnd;
			}
		`,
		fragmentShader: /* glsl */ `
			varying vec3 vCol;
			varying float vEnd;
			void main() {
				float a = 1.0 - vEnd * 0.85;
				gl_FragColor = vec4( vCol * a, 1.0 );
			}
		`
	} );

	const lines = new THREE.LineSegments( geo, mat );
	lines.frustumCulled = false;
	lines.layers.set( RAIN_LAYER );
	return lines;

}

// 落在地面上的小水花
function splashes( U, count, area ) {

	const pos = new Float32Array( count * 3 );
	const seed = new Float32Array( count );
	for ( let i = 0; i < count; i ++ ) seed[ i ] = Math.random();
	const geo = new THREE.BufferGeometry();
	geo.setAttribute( 'position', new THREE.BufferAttribute( pos, 3 ) );
	geo.setAttribute( 'aSeed', new THREE.BufferAttribute( seed, 1 ) );
	const mat = new THREE.ShaderMaterial( {
		name: 'Splash',
		transparent: true,
		depthWrite: false,
		blending: THREE.AdditiveBlending,
		uniforms: {
			uTime: U.uTime,
			uArea: { value: area },
			uLampPos: U.uLampPos,
			uLampCol: U.uLampCol,
			uPointScale: U.uPointScale,
			uIntensity: U.uRainIntensity
		},
		vertexShader: /* glsl */ `
			#define NUM_LAMPS 3
			attribute float aSeed;
			uniform float uTime;
			uniform vec4 uArea;
			uniform vec3 uLampPos[ NUM_LAMPS ];
			uniform vec3 uLampCol[ NUM_LAMPS ];
			uniform float uPointScale;
			uniform float uIntensity;
			varying vec3 vCol;
			varying float vLife;
			${ NOISE }
			void main() {
				float rate = 2.2 + aSeed * 1.5;
				float tt = uTime * rate + aSeed * 17.0;
				float cyc = floor( tt );
				float life = fract( tt );
				vec2 r = hash22( vec2( cyc, aSeed * 113.0 ) );
				vec3 p = vec3( uArea.x + r.x * uArea.z, 0.02 + life * 0.06, uArea.y + r.y * uArea.w );
				vec4 mv = modelViewMatrix * vec4( p, 1.0 );
				gl_Position = projectionMatrix * mv;
				vec3 light = vec3( 0.02 );
				for ( int i = 0; i < NUM_LAMPS; i ++ ) {
					vec3 L = uLampPos[ i ] - p;
					light += uLampCol[ i ] * 0.05 / ( 1.0 + dot( L, L ) * 0.3 );
				}
				vLife = life;
				vCol = light * ( 1.0 - life ) * uIntensity;
				gl_PointSize = ( 0.05 + life * 0.09 ) * uPointScale / - mv.z;
			}
		`,
		fragmentShader: /* glsl */ `
			varying vec3 vCol;
			varying float vLife;
			void main() {
				vec2 c = gl_PointCoord - 0.5;
				c.y *= 2.2;
				float d = length( c );
				float ring = smoothstep( 0.5, 0.3, d ) * smoothstep( 0.05, 0.25, d );
				gl_FragColor = vec4( vCol * ring, 1.0 );
			}
		`
	} );
	const pts = new THREE.Points( geo, mat );
	pts.frustumCulled = false;
	pts.layers.set( RAIN_LAYER );
	return pts;

}

// 远处的雨幕：几张面向镜头的大平面，上面画滚动的竖条，给远景加一层“雨雾感”
function rainCurtain( U, z, width, height, y, strength, layer ) {

	const mat = new THREE.ShaderMaterial( {
		name: 'RainCurtain',
		transparent: true,
		depthWrite: false,
		blending: THREE.AdditiveBlending,
		uniforms: {
			uTime: U.uTime,
			uStrength: { value: strength },
			uLayer: { value: layer },
			uScale: { value: new THREE.Vector2( width / 1.6, height / 9.0 ) },
			uColor: U.uSkyHorizon,
			uFlash: U.uFlash,
			uIntensity: U.uRainIntensity
		},
		vertexShader: /* glsl */ `
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}
		`,
		fragmentShader: /* glsl */ `
			uniform float uTime;
			uniform float uStrength;
			uniform float uLayer;
			uniform vec2 uScale;
			uniform vec3 uColor;
			uniform float uFlash;
			uniform float uIntensity;
			varying vec2 vUv;
			${ NOISE }
			void main() {
				vec2 uv = vUv * uScale;
				uv.x += uv.y * 0.9 * ( uScale.y / uScale.x ) * 0.6;
				float colId = floor( uv.x );
				float r = hash11( colId * 13.7 + uLayer * 7.1 );
				float y = fract( uv.y * 0.5 + uTime * ( 1.4 + r * 0.8 ) + r * 10.0 );
				float streak = smoothstep( 0.0, 0.04, y ) * ( 1.0 - smoothstep( 0.04, 0.5, y ) );
				float xx = abs( fract( uv.x ) - 0.5 );
				float w = 1.0 - smoothstep( 0.0, 0.08, xx );
				float a = streak * w * step( 0.35, r );
				float edge = smoothstep( 0.0, 0.15, vUv.y ) * smoothstep( 1.0, 0.7, vUv.y ) * smoothstep( 0.0, 0.1, vUv.x ) * smoothstep( 1.0, 0.9, vUv.x );
				vec3 c = ( uColor * 2.5 + vec3( 0.6, 0.7, 0.9 ) * uFlash ) * a * edge * uStrength * uIntensity;
				gl_FragColor = vec4( c, 1.0 );
			}
		`
	} );
	const mesh = new THREE.Mesh( new THREE.PlaneGeometry( width, height ), mat );
	mesh.position.set( 0, y, z );
	mesh.layers.set( RAIN_LAYER );
	return mesh;

}

export function createRain( U, Q ) {

	const group = new THREE.Group();
	group.add( rainLayer( U, Q.rainNear, new THREE.Vector3( - 11, - 2, - 13 ), new THREE.Vector3( 22, 12, 17 ), 0.55, 0.05, 12345 ) );
	group.add( rainLayer( U, Q.rainFar, new THREE.Vector3( - 55, - 30, - 95 ), new THREE.Vector3( 110, 70, 85 ), 1.2, 0.045, 777 ) );
	group.add( splashes( U, Q.splashes, new THREE.Vector4( - 13, - 6, 26, 9.5 ) ) );
	group.add( rainCurtain( U, - 45, 160, 90, 10, 0.05, 1 ) );
	group.add( rainCurtain( U, - 110, 380, 200, 40, 0.035, 2 ) );
	group.add( rainCurtain( U, - 200, 700, 380, 100, 0.025, 3 ) );
	return group;

}
