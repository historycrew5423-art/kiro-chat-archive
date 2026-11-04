import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { smooth } from './noise.js';
import { foliageMaterial, leafTexture } from './materials.js';

// ---------------------------------------------------------------------------
// 植被：岩壁上的灌木团（按岩面朝向和高度撒点）、岸边的树、画面上角垂下的枝叶、左下角的蕨类。
// ---------------------------------------------------------------------------

function blobGeometry( detail, N, seed ) {

	let g = new THREE.IcosahedronGeometry( 1, detail );
	g.deleteAttribute( 'normal' );
	g.deleteAttribute( 'uv' );
	g = mergeVertices( g );
	const p = g.attributes.position;
	for ( let i = 0; i < p.count; i ++ ) {

		const x = p.getX( i ), y = p.getY( i ), z = p.getZ( i );
		const k = 1 + N.noise3( x * 1.6 + seed, y * 1.6, z * 1.6 ) * 0.5 + N.noise3( x * 4.2, y * 4.2 + seed, z * 4.2 ) * 0.22;
		p.setXYZ( i, x * k, y * k * 0.8, z * k );

	}

	g.computeVertexNormals();
	return g;

}

function greenColor( rng, dark = 0 ) {

	const t = rng();
	const c = new THREE.Color().setRGB(
		0.025 + t * 0.07 + rng() * 0.02,
		0.05 + t * 0.10 + rng() * 0.025,
		0.012 + t * 0.025
	);
	return c.multiplyScalar( 1 - dark );

}

function instanced( geo, mat, items, castShadow ) {

	const mesh = new THREE.InstancedMesh( geo, mat, items.length );
	const m = new THREE.Matrix4();
	items.forEach( ( it, i ) => {

		m.compose( it.p, it.q, it.s );
		mesh.setMatrixAt( i, m );
		mesh.setColorAt( i, it.c );

	} );
	mesh.instanceMatrix.needsUpdate = true;
	if ( mesh.instanceColor ) mesh.instanceColor.needsUpdate = true;
	mesh.castShadow = castShadow;
	mesh.receiveShadow = true;
	mesh.computeBoundingSphere();
	return mesh;

}

export function createVegetation( rock, N, rng, Q ) {

	const group = new THREE.Group();
	const small = [];
	const big = [];
	const trunks = [];
	const banks = [];
	const up = new THREE.Vector3( 0, 1, 0 );
	const tmpN = new THREE.Vector3();

	const sources = [
		{ mesh: rock.leftWall, w: 1.0 },
		{ mesh: rock.rightWall, w: 1.0 },
		{ mesh: rock.portalFront, w: 0.55 },
		{ mesh: rock.intrados, w: 0.3 },
		...rock.stepMeshes.map( ( mesh ) => ( { mesh, w: 0.45 } ) )
	];

	for ( const src of sources ) {

		const pos = src.mesh.geometry.attributes.position;
		const nor = src.mesh.geometry.attributes.normal;
		for ( let i = 0; i < pos.count; i ++ ) {

			const y = pos.getY( i );
			if ( y < 0.6 || y > 440 ) continue;
			const x = pos.getX( i ), z = pos.getZ( i );
			if ( z > 150 ) continue;
			tmpN.set( nor.getX( i ), nor.getY( i ), nor.getZ( i ) );
			const ny = tmpN.y;
			const ledgeK = smooth( 0.1, 0.65, ny );
			const low = smooth( 95, 5, y );
			const patch = smooth( - 0.15, 0.35, N.fbm( x * 0.012, y * 0.012, z * 0.012, 3 ) );
			let pr = ( ledgeK * 0.6 + 0.012 * smooth( - 0.3, 0.1, ny ) + low * 0.5 * smooth( - 0.25, 0.4, ny ) ) * ( 0.3 + 0.9 * patch ) * src.w;
			pr *= Q.foliage;
			if ( rng() > pr ) continue;

			if ( low > 0.6 && ny > 0.55 ) banks.push( new THREE.Vector3( x, y, z ) );

			const isBig = low > 0.4 && ny > 0.3 && rng() < 0.18;
			const s = isBig ? 3.5 + rng() * 4.5 : 1.2 + Math.pow( rng(), 2 ) * 3.6;
			const p = new THREE.Vector3( x, y, z ).addScaledVector( tmpN, s * 0.12 );
			const q = new THREE.Quaternion().setFromEuler( new THREE.Euler( rng() * 6.28, rng() * 6.28, rng() * 6.28 ) );
			const sc = new THREE.Vector3( s, s * ( 0.65 + rng() * 0.35 ), s );
			const col = greenColor( rng, y > 200 ? 0.25 : 0.05 );
			( isBig ? big : small ).push( { p, q, s: sc, c: col } );
			const extra = Math.floor( rng() * 3 );
			for ( let e = 0; e < extra; e ++ ) {

				const o = new THREE.Vector3( rng() - 0.5, ( rng() - 0.5 ) * 0.6, rng() - 0.5 ).multiplyScalar( s * 1.3 );
				const s2 = s * ( 0.45 + rng() * 0.4 );
				small.push( {
					p: p.clone().add( o ),
					q: new THREE.Quaternion().setFromEuler( new THREE.Euler( rng() * 6.28, rng() * 6.28, rng() * 6.28 ) ),
					s: new THREE.Vector3( s2, s2 * ( 0.6 + rng() * 0.4 ), s2 ),
					c: col.clone().multiplyScalar( 0.75 + rng() * 0.5 )
				} );

			}

		}

	}

	// 岸边的树：树干 + 三到五团树冠
	const treeCount = Math.min( banks.length, Q.trees );
	for ( let i = 0; i < treeCount; i ++ ) {

		const b = banks[ Math.floor( rng() * banks.length ) ];
		const h = 10 + rng() * 14;
		const top = b.clone().add( new THREE.Vector3( ( rng() - 0.5 ) * 3, h, ( rng() - 0.5 ) * 3 ) );
		const dir = top.clone().sub( b );
		const len = dir.length();
		trunks.push( {
			p: b.clone().addScaledVector( dir, 0.5 ),
			q: new THREE.Quaternion().setFromUnitVectors( up, dir.clone().normalize() ),
			s: new THREE.Vector3( 0.3 + rng() * 0.25, len, 0.3 + rng() * 0.25 ),
			c: new THREE.Color( 0.09, 0.07, 0.05 )
		} );
		const n = 5 + Math.floor( rng() * 4 );
		const tc = greenColor( rng, 0.1 );
		for ( let k = 0; k < n; k ++ ) {

			const s = 2.5 + rng() * 3.5;
			const a = rng() * Math.PI * 2;
			const r = rng() * 6;
			big.push( {
				p: top.clone().add( new THREE.Vector3( Math.cos( a ) * r, ( rng() - 0.6 ) * 4 - r * 0.25, Math.sin( a ) * r ) ),
				q: new THREE.Quaternion().setFromEuler( new THREE.Euler( rng() * 6, rng() * 6, rng() * 6 ) ),
				s: new THREE.Vector3( s * 1.2, s * 0.55, s * 1.2 ),
				c: tc.clone().multiplyScalar( 0.7 + rng() * 0.6 )
			} );

		}

	}

	const blobMat = foliageMaterial( { transl: 0.7, bump: 1.1, key: 'blob' } );
	group.add( instanced( blobGeometry( 1, N, 3.1 ), blobMat, small, Q.foliageShadow ) );
	group.add( instanced( blobGeometry( 2, N, 7.7 ), blobMat, big, true ) );

	const trunkGeo = new THREE.CylinderGeometry( 0.6, 1, 1, 7 );
	const trunkMat = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0.9 } );
	if ( trunks.length ) group.add( instanced( trunkGeo, trunkMat, trunks, true ) );

	// ---- 画面上角的前景枝叶 + 左下角的蕨类：用叶片贴图的小面片 ----
	const tex = leafTexture( rng );
	const cardMat = foliageMaterial( { map: tex, alphaTest: 0.45, side: THREE.DoubleSide, transl: 1.4, bump: 0.0, key: 'card' } );
	const cardDepth = new THREE.MeshDepthMaterial( { depthPacking: THREE.RGBADepthPacking, map: tex, alphaTest: 0.45, side: THREE.DoubleSide } );
	const cards = [];
	const branches = [];

	const clusters = [
		// 左上
		{ c: [ - 34, 31, 36 ], r: 6, n: 150, from: [ - 95, 60, 45 ] },
		{ c: [ - 25, 36, 28 ], r: 5, n: 120, from: [ - 95, 60, 45 ] },
		{ c: [ - 44, 25, 48 ], r: 6, n: 130, from: [ - 95, 50, 60 ] },
		{ c: [ - 18, 41, 40 ], r: 4, n: 90, from: [ - 95, 60, 45 ] },
		// 右上
		{ c: [ 36, 32, 38 ], r: 6, n: 150, from: [ 100, 60, 45 ] },
		{ c: [ 27, 38, 30 ], r: 5, n: 110, from: [ 100, 60, 45 ] },
		{ c: [ 46, 26, 50 ], r: 6, n: 120, from: [ 100, 50, 62 ] }
	];

	for ( const cl of clusters ) {

		const c = new THREE.Vector3( ...cl.c );
		const from = new THREE.Vector3( ...cl.from );
		const dir = c.clone().sub( from );
		branches.push( {
			p: from.clone().addScaledVector( dir, 0.5 ),
			q: new THREE.Quaternion().setFromUnitVectors( up, dir.clone().normalize() ),
			s: new THREE.Vector3( 0.35, dir.length(), 0.35 ),
			c: new THREE.Color( 0.05, 0.04, 0.03 )
		} );
		for ( let i = 0; i < cl.n * Q.cards; i ++ ) {

			const off = new THREE.Vector3( rng() - 0.5, ( rng() - 0.5 ) * 0.7, rng() - 0.5 ).normalize().multiplyScalar( Math.pow( rng(), 0.6 ) * cl.r );
			const t = rng();
			const p = from.clone().lerp( c, 0.55 + t * 0.45 ).add( off );
			p.y -= Math.pow( t, 2 ) * 3;
			const s = 1.6 + rng() * 1.6;
			cards.push( {
				p,
				q: new THREE.Quaternion().setFromEuler( new THREE.Euler( rng() * 6.28, rng() * 6.28, rng() * 6.28 ) ),
				s: new THREE.Vector3( s, s, s ),
				c: greenColor( rng, 0.35 )
			} );

		}

	}

	// 蕨类：左下角岸边石头上
	for ( let i = 0; i < 260 * Q.cards; i ++ ) {

		const p = new THREE.Vector3( - 50 + rng() * 34, 0.6 + rng() * 2.5, 30 + rng() * 44 );
		const s = 1.2 + rng() * 1.4;
		cards.push( {
			p,
			q: new THREE.Quaternion().setFromEuler( new THREE.Euler( - 1.2 + rng() * 0.8, rng() * 6.28, ( rng() - 0.5 ) * 0.8 ) ),
			s: new THREE.Vector3( s, s, s ),
			c: greenColor( rng, 0.2 )
		} );

	}

	const cardMesh = instanced( new THREE.PlaneGeometry( 1, 1 ), cardMat, cards, true );
	cardMesh.customDepthMaterial = cardDepth;
	group.add( cardMesh );

	return { group, stats: { small: small.length, big: big.length, trees: treeCount, cards: cards.length } };

}
