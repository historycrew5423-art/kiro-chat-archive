import * as THREE from 'three';
import { NOISE } from './glsl.js';
import { ATMOS } from './atmosphere.js';
import { noiseTexture } from './materials.js';

// ---------------------------------------------------------------------------
// 瀑布：沿抛物线弯下去的条带，片元着色器里用拉长的噪声画出往下流的水丝和水沫。
// 被太阳从背后照到的部分会发亮。底部用雾气粒子盖住落水点。
// ---------------------------------------------------------------------------

const fallVertex = /* glsl */ `
	varying vec2 vUv;
	varying vec3 vWorld;
	void main() {
		vUv = uv;
		vec4 wp = modelMatrix * vec4( position, 1.0 );
		vWorld = wp.xyz;
		gl_Position = projectionMatrix * viewMatrix * wp;
	}
`;

const fallFragment = /* glsl */ `
	uniform float uTime;
	uniform float uSpeed;
	uniform vec2 uScale;
	uniform float uOpacity;
	uniform float uSeed;
	varying vec2 vUv;
	varying vec3 vWorld;
	${ NOISE }
	${ ATMOS }
	void main() {
		float x = vUv.x;
		float y = vUv.y;
		vec2 q = vec2( x * uScale.x + uSeed * 17.0, y * uScale.y );
		float t = uTime * uSpeed;
		float n1 = fbm( vec2( q.x, ( q.y - t ) * 0.10 ) );
		float n2 = fbm( vec2( q.x * 2.6 + 3.0, ( q.y - t * 1.35 ) * 0.22 ) );
		float dens = smoothstep( 0.32, 0.78, n1 * 0.65 + n2 * 0.5 ) * ( 0.55 + 0.45 * smoothstep( 0.3, 0.6, fbm( vec2( q.x * 0.35, ( q.y - t * 0.8 ) * 0.05 ) ) ) );
		float foam = smoothstep( 0.45, 0.85, fbm( vec2( q.x * 0.6, ( q.y - t * 1.1 ) * 0.45 ) ) ) * smoothstep( 0.3, 1.0, y );
		float edge = smoothstep( 0.0, 0.18, x ) * smoothstep( 1.0, 0.82, x );
		edge *= 0.6 + 0.4 * smoothstep( 0.2, 0.7, fbm( vec2( x * 6.0 + uSeed, y * 2.0 - t * 0.05 ) ) );
		float topFade = smoothstep( 0.0, 0.04, y );
		float a = clamp( dens * 0.85 + foam * 0.7, 0.0, 1.0 ) * edge * topFade * uOpacity;

		vec3 V = normalize( cameraPosition - vWorld );
		float back = pow( clamp( dot( - V, SUN_DIR ), 0.0, 1.0 ), 3.0 );
		float m = sunMask( vWorld );
		vec3 base = vec3( 0.70, 0.78, 0.80 );
		vec3 col = base * vec3( 0.20, 0.25, 0.27 ) * ( 0.8 + 0.6 * foam );
		col += base * SUN_COLOR * ( 0.25 + m * ( 0.6 + 3.0 * back ) ) * ( 0.7 + 0.5 * foam );
		col = atmos( col, vWorld );
		gl_FragColor = vec4( col, a );
	}
`;

function ribbon( top, out, w0, w1, height, throwDist ) {

	const geo = new THREE.PlaneGeometry( 1, 1, 6, 48 );
	const pos = geo.attributes.position;
	const uv = geo.attributes.uv;
	const right = new THREE.Vector3().crossVectors( new THREE.Vector3( 0, 1, 0 ), out ).normalize();
	const p = new THREE.Vector3();
	for ( let i = 0; i < pos.count; i ++ ) {

		const u = pos.getX( i ) + 0.5;
		const v = 0.5 - pos.getY( i );
		const w = w0 + ( w1 - w0 ) * v;
		p.copy( top )
			.addScaledVector( right, ( u - 0.5 ) * w )
			.addScaledVector( out, throwDist * Math.sqrt( v ) )
			.add( new THREE.Vector3( 0, - height * v, 0 ) );
		pos.setXYZ( i, p.x, p.y, p.z );
		uv.setXY( i, u, v );

	}

	geo.computeBoundingSphere();
	return geo;

}

export function createFalls( U, rock, rng, Q ) {

	const group = new THREE.Group();
	const mistSpots = [];
	const ray = new THREE.Raycaster();

	const makeMat = ( scaleX, scaleY, speed, opacity ) => new THREE.ShaderMaterial( {
		name: 'Waterfall',
		transparent: true,
		depthWrite: false,
		side: THREE.DoubleSide,
		uniforms: {
			uTime: U.uTime,
			uSpeed: { value: speed },
			uScale: { value: new THREE.Vector2( scaleX, scaleY ) },
			uOpacity: { value: opacity },
			uSeed: { value: rng() * 10 }
		},
		vertexShader: fallVertex,
		fragmentShader: fallFragment
	} );

	const add = ( geo, mat ) => {

		const mesh = new THREE.Mesh( geo, mat );
		mesh.renderOrder = 3;
		group.add( mesh );
		return mesh;

	};

	// 在岩壁上找出水口：从峡谷中线水平朝岩壁打一条射线
	const wallPoint = ( wall, y, z, dirX ) => {

		ray.set( new THREE.Vector3( 20, y, z ), new THREE.Vector3( dirX, 0, 0 ) );
		const hit = ray.intersectObject( wall, false )[ 0 ];
		return hit ? hit.point : null;

	};

	// 左边的大瀑布、右边的高瀑布，再加两条细的
	const big = [
		{ wall: rock.leftWall, y: 125, z: - 175, dir: - 1, w0: 20, w1: 34, throw: 12, land: 0 },
		{ wall: rock.rightWall, y: 168, z: - 225, dir: 1, w0: 14, w1: 26, throw: 10, land: 18 },
		{ wall: rock.leftWall, y: 120, z: - 310, dir: - 1, w0: 10, w1: 16, throw: 8, land: 20 },
		{ wall: rock.rightWall, y: 95, z: - 130, dir: 1, w0: 8, w1: 13, throw: 6, land: 6 }
	];

	for ( const f of big ) {

		const hit = wallPoint( f.wall, f.y, f.z, f.dir );
		if ( ! hit ) continue;
		const out = new THREE.Vector3( - f.dir, 0, 0.15 ).normalize();
		const top = hit.clone().addScaledVector( out, 1.5 );
		const height = top.y - f.land;
		add( ribbon( top, out, f.w0, f.w1, height, f.throw ), makeMat( 7 + f.w0 * 0.4, height * 0.08, 1.4, 0.95 ) );
		mistSpots.push( { p: top.clone().addScaledVector( out, f.throw ).setY( f.land + 4 ), s: f.w1 * 1.6, n: 6 } );

	}

	// 台阶上的一排排小瀑布
	rock.steps.forEach( ( s, i ) => {

		const below = i === 0 ? 0 : rock.steps[ i - 1 ].top;
		const h = s.top - below + 1.2;
		const n = 2 + Math.floor( rng() * 3 );
		const span = 150;
		for ( let k = 0; k < n; k ++ ) {

			const w = 8 + rng() * 24;
			const x = 20 - span / 2 + rng() * span;
			const top = new THREE.Vector3( x, s.top + 0.3, s.z + 1.0 );
			add( ribbon( top, new THREE.Vector3( 0, 0, 1 ), w, w * 1.15, h, 1.6 ), makeMat( 4 + w * 0.3, h * 0.25, 1.0, 0.9 ) );
			mistSpots.push( { p: new THREE.Vector3( x, below + 2.5, s.z + 4 ), s: w * 0.9, n: 2 } );

		}

	} );

	// ---- 雾气 ----
	const spots = [];
	for ( const m of mistSpots ) for ( let i = 0; i < m.n; i ++ ) spots.push( m );
	const count = Math.min( spots.length * 2, Q.mist );
	const base = new THREE.PlaneGeometry( 1, 1 );
	const geo = new THREE.InstancedBufferGeometry();
	geo.setIndex( base.index );
	geo.setAttribute( 'position', base.attributes.position );
	geo.setAttribute( 'uv', base.attributes.uv );
	const off = new Float32Array( count * 3 );
	const sc = new Float32Array( count );
	const sd = new Float32Array( count );
	for ( let i = 0; i < count; i ++ ) {

		const m = spots[ i % spots.length ];
		off.set( [ m.p.x + ( rng() - 0.5 ) * m.s * 1.4, m.p.y + m.s * 0.25 + rng() * 6, m.p.z + ( rng() - 0.5 ) * m.s * 0.6 ], i * 3 );
		sc[ i ] = m.s * ( 1.1 + rng() * 1.1 );
		sd[ i ] = rng();

	}

	geo.setAttribute( 'aOffset', new THREE.InstancedBufferAttribute( off, 3 ) );
	geo.setAttribute( 'aScale', new THREE.InstancedBufferAttribute( sc, 1 ) );
	geo.setAttribute( 'aSeed', new THREE.InstancedBufferAttribute( sd, 1 ) );
	geo.instanceCount = count;

	const mistMat = new THREE.ShaderMaterial( {
		name: 'Mist',
		transparent: true,
		depthWrite: false,
		uniforms: { uTime: U.uTime, uNoise: { value: noiseTexture( 128, rng ) }, uOpacity: { value: 0.26 } },
		vertexShader: /* glsl */ `
			attribute vec3 aOffset;
			attribute float aScale;
			attribute float aSeed;
			uniform float uTime;
			varying vec2 vUv;
			varying float vSeed;
			varying float vFade;
			varying vec3 vWorld;
			void main() {
				float life = fract( uTime * 0.05 * ( 0.6 + aSeed ) + aSeed );
				vec3 c = aOffset + vec3( sin( uTime * 0.1 + aSeed * 6.0 ) * 2.0, life * 14.0, life * 4.0 );
				float s = aScale * ( 0.6 + life * 0.9 );
				vec3 right = vec3( viewMatrix[ 0 ][ 0 ], viewMatrix[ 1 ][ 0 ], viewMatrix[ 2 ][ 0 ] );
				vec3 up = vec3( viewMatrix[ 0 ][ 1 ], viewMatrix[ 1 ][ 1 ], viewMatrix[ 2 ][ 1 ] );
				float ang = aSeed * 6.283 + uTime * 0.02 * ( aSeed - 0.5 );
				vec2 rp = mat2( cos( ang ), - sin( ang ), sin( ang ), cos( ang ) ) * position.xy;
				vec3 wp = c + ( right * rp.x + up * rp.y ) * s;
				vec4 mv = viewMatrix * vec4( wp, 1.0 );
				gl_Position = projectionMatrix * mv;
				vUv = uv;
				vSeed = aSeed;
				vFade = sin( life * 3.14159 ) * smoothstep( 5.0, 20.0, - mv.z );
				vWorld = wp;
			}
		`,
		fragmentShader: /* glsl */ `
			uniform sampler2D uNoise;
			uniform float uTime;
			uniform float uOpacity;
			varying vec2 vUv;
			varying float vSeed;
			varying float vFade;
			varying vec3 vWorld;
			${ ATMOS }
			void main() {
				vec2 q = vUv * 0.9 + vec2( vSeed * 7.3, vSeed * 3.1 - uTime * 0.02 );
				float n1 = texture2D( uNoise, q ).r;
				float n2 = texture2D( uNoise, q * 2.3 + n1 * 0.25 ).g;
				float n = n1 * 0.65 + n2 * 0.45;
				float r = length( vUv - 0.5 ) * 2.0;
				float mask = 1.0 - smoothstep( 0.2, 1.0, r + ( n - 0.5 ) * 0.6 );
				float dens = smoothstep( 0.2, 0.9, n * mask * 1.3 ) * mask * mask;
				dens *= smoothstep( 0.0, 0.35, vUv.y );
				vec3 V = normalize( cameraPosition - vWorld );
				float back = pow( clamp( dot( - V, SUN_DIR ), 0.0, 1.0 ), 3.0 );
				float m = sunMask( vWorld );
				vec3 col = vec3( 0.16, 0.2, 0.2 ) + SUN_COLOR * m * ( 0.2 + 0.9 * back );
				col *= 0.7 + 0.5 * n;
				col = atmos( col, vWorld );
				gl_FragColor = vec4( col, dens * vFade * uOpacity );
			}
		`
	} );
	const mist = new THREE.Mesh( geo, mistMat );
	mist.frustumCulled = false;
	mist.renderOrder = 4;
	group.add( mist );

	return { group };

}
