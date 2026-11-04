import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { ARCH } from './atmosphere.js';
import { smooth } from './noise.js';
import { rockMaterial } from './materials.js';

// ---------------------------------------------------------------------------
// 峡谷的岩体：拱门（正面 + 洞口内壁）、左右岩壁、中间的台阶瀑布、远处地形、近处的大石头。
// 所有岩体先按简单的基本形状生成，再统一加一个三维噪声位移场 D(p)。
// 位移只取决于位置，所以不同网格的共享边会被推到同一个地方，不会裂开。
// ---------------------------------------------------------------------------

export function createRock( N, rng, Q ) {

	const group = new THREE.Group();
	const zF = ARCH.z;

	const ledge = ( y ) => {

		// 必须连续：先升后降回到 0，否则网格采样到跳变处会出现锯齿状的台阶
		const f = y / 17 - Math.floor( y / 17 );
		return smooth( 0.55, 0.85, f ) * ( 1 - smooth( 0.85, 1.0, f ) );

	};

	const D = ( x, y, z, amp ) => {

		const s1 = 0.0055;
		const a = N.fbm( x * s1, y * s1 * 0.7, z * s1, 4 );
		const b = N.fbm( x * s1 + 19.1, y * s1 * 0.7 + 7.3, z * s1 + 3.7, 4 );
		const c = N.fbm( x * s1 + 41.7, y * s1 + 13.1, z * s1 + 29.3, 3 );
		const r = 1 - Math.abs( N.noise3( x * 0.022, y * 0.035, z * 0.022 ) );
		const t = ledge( y + N.noise3( x * 0.01, 0.3, z * 0.01 ) * 30 );
		const fx = N.noise3( x * 0.08, y * 0.08, z * 0.08 ) * 2.5;
		const fz = N.noise3( x * 0.08 + 5.2, y * 0.08 + 1.3, z * 0.08 + 7.7 ) * 2.5;
		return [
			( a * 46 + ( r - 0.5 ) * 12 + t * 2.2 + fx ) * amp,
			c * 14 * amp,
			( b * 46 + ( r - 0.5 ) * 12 + t * 2.2 + fz ) * amp
		];

	};

	const displaced = ( x, y, z, amp ) => {

		const d = D( x, y, z, amp );
		return [ x + d[ 0 ], y + d[ 1 ], z + d[ 2 ] ];

	};

	// 网格生成：fn(u, v) 给出顶点；expect(p) 给出这里法线应该朝的方向，用来自动纠正三角形朝向
	function grid( nu, nv, fn, expect ) {

		const pos = new Float32Array( ( nu + 1 ) * ( nv + 1 ) * 3 );
		let k = 0;
		for ( let j = 0; j <= nv; j ++ ) {

			for ( let i = 0; i <= nu; i ++ ) {

				const p = fn( i / nu, j / nv );
				pos[ k ++ ] = p[ 0 ];
				pos[ k ++ ] = p[ 1 ];
				pos[ k ++ ] = p[ 2 ];

			}

		}

		const build = ( flip ) => {

			const idx = [];
			for ( let j = 0; j < nv; j ++ ) {

				for ( let i = 0; i < nu; i ++ ) {

					const a = j * ( nu + 1 ) + i, b = a + 1, c = a + nu + 1, d = c + 1;
					if ( flip ) idx.push( a, b, c, b, d, c );
					else idx.push( a, c, b, b, c, d );

				}

			}

			return idx;

		};

		const g = new THREE.BufferGeometry();
		g.setAttribute( 'position', new THREE.BufferAttribute( pos, 3 ) );
		g.setIndex( build( false ) );
		g.computeVertexNormals();
		const n = g.attributes.normal;
		let score = 0;
		for ( let i = 0; i < n.count; i += 17 ) {

			const e = expect( pos[ i * 3 ], pos[ i * 3 + 1 ], pos[ i * 3 + 2 ] );
			score += n.getX( i ) * e[ 0 ] + n.getY( i ) * e[ 1 ] + n.getZ( i ) * e[ 2 ];

		}

		if ( score < 0 ) {

			g.setIndex( build( true ) );
			g.computeVertexNormals();

		}

		g.computeBoundingSphere();
		return g;

	}

	const mat = rockMaterial( { bump: 1.0 } );
	const addMesh = ( geo, m = mat ) => {

		const mesh = new THREE.Mesh( geo, m );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		group.add( mesh );
		return mesh;

	};

	// ---- 拱门洞口轮廓：左竖边 → 半椭圆 → 右竖边 ----
	const cx = ( ARCH.x0 + ARCH.x1 ) / 2;
	const rx = ( ARCH.x1 - ARCH.x0 ) / 2;
	const Lv = ARCH.spring - ARCH.bottom;
	const Le = Math.PI * Math.sqrt( ( rx * rx + ARCH.ry * ARCH.ry ) / 2 );
	const Lt = Lv * 2 + Le;
	const outline = ( u ) => {

		const s = u * Lt;
		if ( s < Lv ) return { x: ARCH.x0, y: ARCH.bottom + s, nx: - 1, ny: 0 };
		if ( s > Lv + Le ) return { x: ARCH.x1, y: ARCH.spring - ( s - Lv - Le ), nx: 1, ny: 0 };
		const th = Math.PI * ( 1 - ( s - Lv ) / Le );
		const x = cx + rx * Math.cos( th );
		const y = ARCH.spring + ARCH.ry * Math.sin( th );
		let nx = Math.cos( th ) / rx, ny = Math.sin( th ) / ARCH.ry;
		const l = Math.hypot( nx, ny );
		return { x, y, nx: nx / l, ny: ny / l };

	};

	const archAmp = 0.5;
	const R = 430;
	const portalFront = addMesh( grid( 220, 56, ( u, v ) => {

		const o = outline( u );
		const r = R * Math.pow( v, 1.7 );
		return displaced( o.x + o.nx * r, o.y + o.ny * r, zF + r * 0.12, archAmp );

	}, () => [ 0, 0, 1 ] ) );

	const intrados = addMesh( grid( 220, 22, ( u, v ) => {

		const o = outline( u );
		return displaced( o.x, o.y, zF - ARCH.depth * v, archAmp );

	}, ( x, y ) => [ cx - x, ARCH.spring + 20 - y, 0 ] ) );

	// ---- 左右岩壁：靠近镜头处宽，往拱门方向收窄到洞口宽度；上部向内倾，底部有坡脚 ----
	const S = ( z ) => Math.pow( smooth( zF, 230, z ), 0.85 );
	const lean = ( y ) => 40 * Math.pow( Math.min( 1, Math.max( 0, y / 460 ) ), 2 );
	const talus = ( y ) => 32 * ( 1 - smooth( - 35, 50, y ) );
	const xL = ( z, y ) => ARCH.x0 - 125 * S( z ) + lean( y ) + talus( y );
	const xR = ( z, y ) => ARCH.x1 + 110 * S( z ) - lean( y ) - talus( y );
	const wallZ0 = zF - 40;
	const wallZ1 = 230;
	const wallFn = ( side ) => ( u, v ) => {

		const z = wallZ0 + ( wallZ1 - wallZ0 ) * u;
		const y = - 40 + 510 * v;
		const x = side < 0 ? xL( z, y ) : xR( z, y );
		return displaced( x, y, z, 1.0 );

	};

	const leftWall = addMesh( grid( Q.wallRes[ 0 ], Q.wallRes[ 1 ], wallFn( - 1 ), () => [ 1, 0, 0 ] ) );
	const rightWall = addMesh( grid( Q.wallRes[ 0 ], Q.wallRes[ 1 ], wallFn( 1 ), () => [ - 1, 0, 0 ] ) );

	// ---- 台阶：拱门下的几级岩坎，每级上面是一个小水潭，前沿挂瀑布 ----
	const steps = [
		{ z: - 268, top: 7 },
		{ z: - 298, top: 13 },
		{ z: - 327, top: 19 },
		{ z: - 357, top: 25 },
		{ z: - 388, top: 31 }
	];
	const stepMeshes = [];
	for ( const s of steps ) {

		const x0 = xL( s.z, 10 ) - 40;
		const x1 = xR( s.z, 10 ) + 40;
		const depth = 36;
		const h = s.top + 20;
		const g = new THREE.BoxGeometry( x1 - x0, h, depth, 70, 5, 6 );
		g.translate( ( x0 + x1 ) / 2, s.top - h / 2, s.z - depth / 2 );
		const p = g.attributes.position;
		for ( let i = 0; i < p.count; i ++ ) {

			const d = D( p.getX( i ), p.getY( i ), p.getZ( i ), 0.1 );
			const onTop = p.getY( i ) > s.top - 0.01;
			p.setXYZ( i, p.getX( i ) + d[ 0 ], p.getY( i ) + ( onTop ? d[ 1 ] * 0.15 : d[ 1 ] ), p.getZ( i ) + d[ 2 ] );

		}

		g.computeVertexNormals();
		stepMeshes.push( addMesh( g ) );
		s.x0 = x0;
		s.x1 = x1;

	}

	// ---- 拱门后面的远景地形：一条河谷通向远方，两侧是起伏的高地 ----
	const farH = ( x, z ) => {

		const t = smooth( - 400, - 700, z );
		const vx = x - 20 - 40 * Math.sin( z * 0.0025 );
		const valley = Math.max( 0, Math.abs( vx ) - 38 ) * 0.3;
		const hills = ( N.fbm( x * 0.002, 0.5, z * 0.002, 4 ) * 0.5 + 0.5 ) * 130;
		return 30 + ( valley + hills * Math.min( 1, Math.abs( vx ) / 160 ) ) * t + 1.0 * ( 1 - t );

	};

	{

		const g = new THREE.PlaneGeometry( 4200, 2500, Q.farRes[ 0 ], Q.farRes[ 1 ] );
		g.rotateX( - Math.PI / 2 );
		g.translate( 0, 0, - 400 - 1250 );
		const p = g.attributes.position;
		for ( let i = 0; i < p.count; i ++ ) p.setY( i, farH( p.getX( i ), p.getZ( i ) ) );
		g.computeVertexNormals();
		const far = new THREE.Mesh( g, rockMaterial( { bump: 0.0, green: 1.4 } ) );
		far.receiveShadow = true;
		group.add( far );

	}

	// ---- 近处岸边的大石头 ----
	const boulderGeo = ( () => {

		let g = new THREE.IcosahedronGeometry( 1, 3 );
		g.deleteAttribute( 'normal' );
		g.deleteAttribute( 'uv' );
		g = mergeVertices( g );
		const p = g.attributes.position;
		for ( let i = 0; i < p.count; i ++ ) {

			const x = p.getX( i ), y = p.getY( i ), z = p.getZ( i );
			const k = 1 + N.noise3( x * 1.3 + 3, y * 1.3, z * 1.3 ) * 0.35 + N.noise3( x * 3.1, y * 3.1, z * 3.1 + 7 ) * 0.12;
			p.setXYZ( i, x * k, y * k * 0.7, z * k );

		}

		g.computeVertexNormals();
		return g;

	} )();

	const boulders = [];
	for ( let i = 0; i < 14; i ++ ) {

		boulders.push( [ - 52 + rng() * 36, - 0.8 + rng() * 1.2, 26 + rng() * 46, 2 + rng() * 4.5 ] );

	}

	for ( let i = 0; i < 26; i ++ ) {

		const right = rng() < 0.5;
		const z = - 240 + rng() * 300;
		const x = right ? xR( z, 0 ) - 4 - rng() * 10 : xL( z, 0 ) + 4 + rng() * 10;
		boulders.push( [ x, - 0.5, z, 2 + rng() * 5 ] );

	}

	const bMesh = new THREE.InstancedMesh( boulderGeo, rockMaterial( { bump: 0.8, green: 0.8 } ), boulders.length );
	const m = new THREE.Matrix4();
	const q = new THREE.Quaternion();
	boulders.forEach( ( [ x, y, z, s ], i ) => {

		q.setFromEuler( new THREE.Euler( rng() * 0.4, rng() * 6.28, rng() * 0.4 ) );
		m.compose( new THREE.Vector3( x, y, z ), q, new THREE.Vector3( s * ( 0.8 + rng() * 0.6 ), s, s * ( 0.8 + rng() * 0.6 ) ) );
		bMesh.setMatrixAt( i, m );

	} );
	bMesh.castShadow = true;
	bMesh.receiveShadow = true;
	bMesh.computeBoundingSphere();
	group.add( bMesh );

	return {
		group, leftWall, rightWall, portalFront, intrados, stepMeshes, steps,
		xL, xR, farH, boulders
	};

}
