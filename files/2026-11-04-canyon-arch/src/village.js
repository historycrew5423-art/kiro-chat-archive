import * as THREE from 'three';
import { glowTexture } from './materials.js';
import { ATMOS } from './atmosphere.js';

// ---------------------------------------------------------------------------
// 右岸的小村子：木屋、暖色窗光、灯笼，水上几条小船，近处的睡莲叶。
// ---------------------------------------------------------------------------

function roofGeometry() {

	// 三棱柱屋顶，底面 1×1，高 0.6，屋檐向外伸出
	const s = new THREE.Shape();
	s.moveTo( - 0.62, 0 );
	s.lineTo( 0, 0.55 );
	s.lineTo( 0.62, 0 );
	s.lineTo( - 0.62, 0 );
	const g = new THREE.ExtrudeGeometry( s, { depth: 1.15, bevelEnabled: false } );
	g.translate( 0, 0, - 0.575 );
	return g;

}

export function createVillage( U, rock, rng, Q ) {

	const group = new THREE.Group();
	const pos = rock.rightWall.geometry.attributes.position;
	const nor = rock.rightWall.geometry.attributes.normal;
	const spots = [];
	const shore = [];
	for ( let i = 0; i < pos.count; i ++ ) {

		const x = pos.getX( i ), y = pos.getY( i ), z = pos.getZ( i );
		if ( z > - 40 || z < - 240 ) continue;
		if ( y > 1.5 && y < 26 && nor.getY( i ) > 0.62 ) spots.push( new THREE.Vector3( x, y, z ) );
		if ( y > 0.3 && y < 2.2 && nor.getY( i ) > 0.3 ) shore.push( new THREE.Vector3( x, y, z ) );

	}

	const houses = [];
	for ( let tries = 0; tries < 400 && houses.length < 24; tries ++ ) {

		const p = spots[ Math.floor( rng() * spots.length ) ];
		if ( ! p ) break;
		if ( houses.some( ( h ) => h.p.distanceTo( p ) < 11 ) ) continue;
		houses.push( { p, w: 6 + rng() * 5, d: 5 + rng() * 4, h: 3.5 + rng() * 2.5, r: ( rng() - 0.5 ) * 0.6 + Math.PI / 2 } );

	}

	const wood = new THREE.MeshStandardMaterial( { color: 0x2a1c12, roughness: 0.9 } );
	const roofMat = new THREE.MeshStandardMaterial( { color: 0x1d1714, roughness: 0.8 } );
	const bodyGeo = new THREE.BoxGeometry( 1, 1, 1 );
	bodyGeo.translate( 0, 0.5, 0 );
	const body = new THREE.InstancedMesh( bodyGeo, wood, houses.length );
	const roof = new THREE.InstancedMesh( roofGeometry(), roofMat, houses.length );
	const m = new THREE.Matrix4();
	const q = new THREE.Quaternion();
	const lights = [];
	houses.forEach( ( h, i ) => {

		q.setFromEuler( new THREE.Euler( 0, h.r, 0 ) );
		const base = h.p.clone().setY( h.p.y - 0.8 );
		m.compose( base, q, new THREE.Vector3( h.w, h.h + 0.8, h.d ) );
		body.setMatrixAt( i, m );
		m.compose( base.clone().setY( base.y + h.h + 0.8 ), q, new THREE.Vector3( h.w, h.h * 0.9, h.d ) );
		roof.setMatrixAt( i, m );
		// 窗光：朝向峡谷中间（-x 方向）的那一面
		const n = 1 + Math.floor( rng() * 2 );
		for ( let k = 0; k < n; k ++ ) {

			lights.push( {
				p: base.clone().add( new THREE.Vector3( - h.d * 0.5 - 0.1, h.h * ( 0.35 + rng() * 0.2 ), ( rng() - 0.5 ) * h.w * 0.6 ) ),
				c: [ 6, 3.0, 1.2 ], s: 1.2 + rng() * 0.6
			} );

		}

	} );
	body.castShadow = roof.castShadow = true;
	body.receiveShadow = roof.receiveShadow = true;
	body.computeBoundingSphere();
	roof.computeBoundingSphere();
	group.add( body, roof );

	// 岸边灯笼
	for ( let i = 0; i < 26 && shore.length; i ++ ) {

		const p = shore[ Math.floor( rng() * shore.length ) ];
		lights.push( { p: p.clone().add( new THREE.Vector3( - 1, 2.2 + rng() * 1.5, 0 ) ), c: [ 7, 3.2, 1.1 ], s: 1.6 + rng() * 0.8 } );

	}

	// 小船（带一盏灯）
	const boatGeo = new THREE.BoxGeometry( 1, 1, 1 );
	const boats = new THREE.InstancedMesh( boatGeo, wood, 7 );
	for ( let i = 0; i < 7; i ++ ) {

		const z = - 40 - rng() * 170;
		const x = rock.xR( z, 0 ) - 22 - rng() * 30;
		q.setFromEuler( new THREE.Euler( 0, rng() * 0.6 - 0.3, 0 ) );
		m.compose( new THREE.Vector3( x, 0.25, z ), q, new THREE.Vector3( 1.6, 0.6, 6 ) );
		boats.setMatrixAt( i, m );
		lights.push( { p: new THREE.Vector3( x, 1.6, z + 2 ), c: [ 6, 2.8, 1.0 ], s: 1.3 } );

	}

	boats.castShadow = true;
	boats.computeBoundingSphere();
	group.add( boats );

	// 左下角岸边也放两盏灯笼
	lights.push( { p: new THREE.Vector3( - 33, 3.2, 48 ), c: [ 7, 3.2, 1.1 ], s: 1.4 } );
	lights.push( { p: new THREE.Vector3( - 41, 2.6, 60 ), c: [ 7, 3.2, 1.1 ], s: 1.2 } );

	// 灯光：发光点（叠加混合，按大气衰减）+ 少量真实点光源
	const lg = new THREE.BufferGeometry();
	const lp = new Float32Array( lights.length * 3 );
	const lc = new Float32Array( lights.length * 3 );
	const ls = new Float32Array( lights.length );
	const lph = new Float32Array( lights.length );
	lights.forEach( ( l, i ) => {

		lp.set( [ l.p.x, l.p.y, l.p.z ], i * 3 );
		lc.set( l.c, i * 3 );
		ls[ i ] = l.s;
		lph[ i ] = rng() * 10;

	} );
	lg.setAttribute( 'position', new THREE.BufferAttribute( lp, 3 ) );
	lg.setAttribute( 'aColor', new THREE.BufferAttribute( lc, 3 ) );
	lg.setAttribute( 'aSize', new THREE.BufferAttribute( ls, 1 ) );
	lg.setAttribute( 'aPhase', new THREE.BufferAttribute( lph, 1 ) );
	const pts = new THREE.Points( lg, new THREE.ShaderMaterial( {
		name: 'Lanterns',
		transparent: true,
		depthWrite: false,
		blending: THREE.AdditiveBlending,
		uniforms: { uTime: U.uTime, uPointScale: U.uPointScale, uGlow: { value: glowTexture() } },
		vertexShader: /* glsl */ `
			attribute vec3 aColor;
			attribute float aSize;
			attribute float aPhase;
			uniform float uTime;
			uniform float uPointScale;
			varying vec3 vColor;
			varying vec3 vWorld;
			void main() {
				vec4 mv = modelViewMatrix * vec4( position, 1.0 );
				gl_Position = projectionMatrix * mv;
				gl_PointSize = max( aSize * 1.6 * uPointScale / - mv.z, 2.5 );
				float flick = 0.85 + 0.15 * sin( uTime * 7.0 + aPhase ) * sin( uTime * 3.1 + aPhase * 2.0 );
				vColor = aColor * flick;
				vWorld = ( modelMatrix * vec4( position, 1.0 ) ).xyz;
			}
		`,
		fragmentShader: /* glsl */ `
			uniform sampler2D uGlow;
			varying vec3 vColor;
			varying vec3 vWorld;
			${ ATMOS }
			void main() {
				float g = texture2D( uGlow, gl_PointCoord ).r;
				float core = smoothstep( 0.18, 0.0, length( gl_PointCoord - 0.5 ) );
				gl_FragColor = vec4( vColor * ( g * 0.35 + core * 2.0 ) * atmosT( vWorld ), 1.0 );
			}
		`
	} ) );
	pts.frustumCulled = false;
	group.add( pts );

	// 真实点光源：只放几盏，照亮附近的木屋、水面和岩石
	const keyLights = lights.filter( ( _, i ) => i % Math.max( 1, Math.floor( lights.length / Q.pointLights ) ) === 0 ).slice( 0, Q.pointLights );
	for ( const l of keyLights ) {

		const pl = new THREE.PointLight( 0xff9a4a, 120, 45, 2 );
		pl.position.copy( l.p );
		group.add( pl );

	}

	// 近处的睡莲叶
	const padGeo = new THREE.CircleGeometry( 1, 14, 0.25, Math.PI * 2 - 0.5 );
	padGeo.rotateX( - Math.PI / 2 );
	const pads = new THREE.InstancedMesh( padGeo, new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0.55 } ), 140 );
	for ( let i = 0; i < 140; i ++ ) {

		const right = rng() < 0.6;
		const x = right ? 25 + rng() * 60 : - 35 + rng() * 25;
		const z = 15 + rng() * 60;
		const s = 0.7 + rng() * 1.1;
		q.setFromEuler( new THREE.Euler( 0, rng() * 6.28, 0 ) );
		m.compose( new THREE.Vector3( x, 0.06, z ), q, new THREE.Vector3( s, 1, s ) );
		pads.setMatrixAt( i, m );
		pads.setColorAt( i, new THREE.Color().setRGB( 0.05 + rng() * 0.05, 0.10 + rng() * 0.06, 0.03 ) );

	}

	pads.receiveShadow = true;
	pads.computeBoundingSphere();
	group.add( pads );

	return { group, stats: { houses: houses.length, lights: lights.length } };

}
