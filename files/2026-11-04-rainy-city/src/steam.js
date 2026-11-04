import * as THREE from 'three';
import { STEAM_LAYER } from './terrace.js';
import { STREET_Y } from './city.js';

// 预先算一张可平铺的噪声图（两个通道用不同种子），蒸汽着色器里采样它，比逐像素算 fbm 便宜得多
function makeNoiseTexture( size, rng ) {

	const data = new Uint8Array( size * size * 4 );
	const octaves = [ [ 4, 0.5 ], [ 8, 0.25 ], [ 16, 0.125 ], [ 32, 0.0625 ] ];
	const grids = [ 0, 1 ].map( () => octaves.map( ( [ p ] ) => Float32Array.from( { length: p * p }, () => rng() ) ) );
	const sm = ( t ) => t * t * ( 3 - 2 * t );
	for ( let y = 0; y < size; y ++ ) {

		for ( let x = 0; x < size; x ++ ) {

			for ( let ch = 0; ch < 2; ch ++ ) {

				let v = 0;
				let norm = 0;
				octaves.forEach( ( [ p, a ], o ) => {

					const g = grids[ ch ][ o ];
					const fx = ( x / size ) * p;
					const fy = ( y / size ) * p;
					const ix = Math.floor( fx );
					const iy = Math.floor( fy );
					const tx = sm( fx - ix );
					const ty = sm( fy - iy );
					const x0 = ix % p, x1 = ( ix + 1 ) % p, y0 = iy % p, y1 = ( iy + 1 ) % p;
					const a0 = g[ y0 * p + x0 ] + ( g[ y0 * p + x1 ] - g[ y0 * p + x0 ] ) * tx;
					const a1 = g[ y1 * p + x0 ] + ( g[ y1 * p + x1 ] - g[ y1 * p + x0 ] ) * tx;
					v += a * ( a0 + ( a1 - a0 ) * ty );
					norm += a;

				} );
				data[ ( y * size + x ) * 4 + ch ] = Math.round( ( v / norm ) * 255 );

			}

			data[ ( y * size + x ) * 4 + 3 ] = 255;

		}

	}

	const tex = new THREE.DataTexture( data, size, size );
	tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
	tex.magFilter = THREE.LinearFilter;
	tex.minFilter = THREE.LinearMipmapLinearFilter;
	tex.generateMipmaps = true;
	tex.needsUpdate = true;
	return tex;

}

// 从街道升起的蒸汽：一组始终朝向镜头的大面片，慢慢上升、膨胀、淡出，被下方街灯照成暖色
export function createSteam( U, rng, Q ) {

	const count = Q.steam;
	const base = new THREE.PlaneGeometry( 1, 1 );
	const geo = new THREE.InstancedBufferGeometry();
	geo.setIndex( base.index );
	geo.setAttribute( 'position', base.attributes.position );
	geo.setAttribute( 'uv', base.attributes.uv );
	const off = new Float32Array( count * 3 );
	const sc = new Float32Array( count );
	const sd = new Float32Array( count );
	for ( let i = 0; i < count; i ++ ) {

		const near = i < count * 0.35;
		const z = near ? - 18 - rng() * 45 : - 50 - rng() * 220;
		const x = ( rng() - 0.5 ) * ( near ? 70 : 200 + - z * 0.6 );
		off.set( [ x, STREET_Y + 14 + rng() * 16, z ], i * 3 );
		sc[ i ] = ( near ? 16 : 26 ) + rng() * 26;
		sd[ i ] = rng();

	}

	geo.setAttribute( 'aOffset', new THREE.InstancedBufferAttribute( off, 3 ) );
	geo.setAttribute( 'aScale', new THREE.InstancedBufferAttribute( sc, 1 ) );
	geo.setAttribute( 'aSeed', new THREE.InstancedBufferAttribute( sd, 1 ) );
	geo.instanceCount = count;

	const mat = new THREE.ShaderMaterial( {
		name: 'Steam',
		transparent: true,
		depthWrite: false,
		uniforms: {
			uTime: U.uTime,
			uFlash: U.uFlash,
			uNoise: { value: makeNoiseTexture( 128, rng ) },
			uStreetY: { value: STREET_Y },
			uWarm: { value: new THREE.Color( 1.0, 0.56, 0.28 ) },
			uCool: U.uSkyHorizon,
			uFogColor: U.uFogColor,
			uFogDensity: U.uFogDensity,
			uOpacity: { value: 0.7 }
		},
		vertexShader: /* glsl */ `
			attribute vec3 aOffset;
			attribute float aScale;
			attribute float aSeed;
			uniform float uTime;
			varying vec2 vUv;
			varying float vSeed;
			varying float vFade;
			varying float vLife;
			varying vec3 vWorld;
			varying float vDepth;
			void main() {
				float life = fract( uTime * 0.018 * ( 0.6 + aSeed ) + aSeed );
				vec3 c = aOffset + vec3( sin( uTime * 0.05 + aSeed * 6.0 ) * 4.0 + life * 14.0, life * 38.0, 0.0 );
				float s = aScale * ( 0.55 + life * 1.0 );
				vec3 right = vec3( viewMatrix[ 0 ][ 0 ], viewMatrix[ 1 ][ 0 ], viewMatrix[ 2 ][ 0 ] );
				vec3 up = vec3( viewMatrix[ 0 ][ 1 ], viewMatrix[ 1 ][ 1 ], viewMatrix[ 2 ][ 1 ] );
				float ang = aSeed * 6.283 + uTime * 0.01 * ( aSeed - 0.5 );
				vec2 rp = mat2( cos( ang ), - sin( ang ), sin( ang ), cos( ang ) ) * position.xy;
				vec3 wp = c + ( right * rp.x + up * rp.y ) * s;
				vec4 mv = viewMatrix * vec4( wp, 1.0 );
				gl_Position = projectionMatrix * mv;
				vUv = uv;
				vSeed = aSeed;
				vLife = life;
				vFade = sin( life * 3.14159 ) * smoothstep( 6.0, 22.0, - mv.z );
				vWorld = wp;
				vDepth = - mv.z;
			}
		`,
		fragmentShader: /* glsl */ `
			uniform sampler2D uNoise;
			uniform float uTime;
			uniform float uFlash;
			uniform float uStreetY;
			uniform vec3 uWarm;
			uniform vec3 uCool;
			uniform vec3 uFogColor;
			uniform float uFogDensity;
			uniform float uOpacity;
			varying vec2 vUv;
			varying float vSeed;
			varying float vFade;
			varying float vLife;
			varying vec3 vWorld;
			varying float vDepth;
			void main() {
				vec2 uv = vUv;
				vec2 q = uv * 0.9 + vec2( vSeed * 7.3, vSeed * 3.1 - uTime * 0.012 );
				float n1 = texture2D( uNoise, q ).r;
				float n2 = texture2D( uNoise, q * 2.3 + vec2( uTime * 0.01, 0.0 ) + n1 * 0.25 ).g;
				float n = n1 * 0.65 + n2 * 0.45;
				float r = length( uv - 0.5 ) * 2.0;
				float mask = 1.0 - smoothstep( 0.25, 1.0, r + ( n - 0.5 ) * 0.6 );
				float dens = smoothstep( 0.3, 0.85, n * mask * 1.5 ) * mask;
				float a = dens * vFade * uOpacity * ( 1.0 - vLife * 0.5 );

				float hF = clamp( ( vWorld.y - uStreetY ) / 70.0, 0.0, 1.0 );
				vec3 col = mix( uWarm * 0.8, uCool * 1.4, hF ) * ( 0.55 + 0.6 * n );
				col += uFlash * vec3( 0.4, 0.45, 0.6 ) * 0.5;
				float fogF = 1.0 - exp( - uFogDensity * uFogDensity * vDepth * vDepth );
				col = mix( col, uFogColor, fogF );
				a *= 1.0 - fogF * 0.6;
				gl_FragColor = vec4( col, a );
			}
		`
	} );

	const mesh = new THREE.Mesh( geo, mat );
	mesh.frustumCulled = false;
	mesh.layers.set( STEAM_LAYER );
	mesh.renderOrder = 2;
	return mesh;

}
