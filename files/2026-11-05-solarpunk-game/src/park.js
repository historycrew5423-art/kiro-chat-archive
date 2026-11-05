import * as THREE from 'three';
import { PLATEAU, PLATEAU_Y } from './layout.js';

// ---------------------------------------------------------------------------
// 山顶公园：树、灌木、太阳能廊架、长椅，以及参考图里框住画面的近景树叶：
// 左下角岩丘上的树、右上角伸进画面的树枝、右下角的一团叶子。
// ---------------------------------------------------------------------------

export function createPark( foliage, hill, rng, frame ) {

	const Y0 = PLATEAU_Y - 200; // 下面框景树的坐标是按台地高 200 写的

	const group = new THREE.Group();
	const obstacles = [];
	const C = PLATEAU.center;
	const H = ( x, z ) => hill.height( x, z );

	// 框景的大树：树干在镜头右后方，两根粗枝伸到画面右上角和右下角
	{

		const base = new THREE.Vector3( 34, H( 34, 22 ), 22 );
		const top = base.clone().add( new THREE.Vector3( - 2, 58, 2 ) );
		foliage.branch( base.clone().setY( base.y - 2 ), top, 2.2, 1.2 );
		const tint = new THREE.Color( 0.78, 0.9, 0.7 );
		const crown = top.clone().add( new THREE.Vector3( 6, 6, 8 ) );
		const arms = [
			[ new THREE.Vector3( 30, 252, 18 ), new THREE.Vector3( 9, 271, 7 ), 6.5 ],
			[ new THREE.Vector3( 31, 240, 18 ), new THREE.Vector3( 14, 254, - 3 ), 6.0 ],
			[ new THREE.Vector3( 32, 246, 22 ), new THREE.Vector3( 48, 262, 36 ), 9 ],
			[ new THREE.Vector3( 32, 250, 22 ), new THREE.Vector3( 30, 270, 44 ), 9 ],
			[ new THREE.Vector3( 32, 255, 22 ), new THREE.Vector3( 52, 268, 12 ), 8 ]
		];
		for ( const arm of arms ) {

			arm[ 0 ].y += Y0;
			arm[ 1 ].y += Y0;

		}

		arms.forEach( ( [ a, b, r ], k ) => {

			const f = k < 2 ? frame : foliage;
			f.branch( a, b, 0.9, 0.3 );
			f.clump( b, r, Math.round( r * r * 1.4 ), rng, { tint, crown, size: 2.6, flat: 0.6 } );
			f.clump( a.clone().lerp( b, 0.6 ), r * 0.6, Math.round( r * r * 0.5 ), rng, { tint, crown, size: 2.4 } );

		} );

		foliage.clump( crown, 10, 90, rng, { tint, crown, size: 3.0, flat: 0.55 } );
		obstacles.push( { x: base.x, z: base.z, r: 2.4, h: 60, base: base.y } );

	}

	// 岩丘顶上的树（参考图左下角）
	{

		const kx = hill.KNOLL.x + 8, kz = hill.KNOLL.z + 4;
		const base = new THREE.Vector3( kx, H( kx, kz ) - 1, kz );
		foliage.tree( base, 15, rng, { cardsPerClump: 24, cardSize: 2.2, branches: 6, tint: new THREE.Color( 0.8, 0.92, 0.7 ) } );
		for ( let i = 0; i < 14; i ++ ) {

			const a = rng() * Math.PI * 2, r = 6 + rng() * 14;
			const x = hill.KNOLL.x + Math.cos( a ) * r, z = hill.KNOLL.z + Math.sin( a ) * r;
			foliage.bush( new THREE.Vector3( x, H( x, z ) - 0.5, z ), 1.5 + rng() * 2, rng, { tint: new THREE.Color( 0.75, 0.85, 0.65 ) } );

		}

	}

	// 台地上的树和灌木（避开出生点附近和通往车站的路）
	const free = ( x, z ) => Math.hypot( x - 0, z + 10 ) > 16 && Math.hypot( x - 38, z + 30 ) > 22 && hill.walkable( x, z );
	let placed = 0;
	for ( let tries = 0; tries < 900 && placed < 48; tries ++ ) {

		const a = rng() * Math.PI * 2, r = 20 + Math.sqrt( rng() ) * 105;
		const x = C.x + Math.cos( a ) * r, z = C.z + Math.sin( a ) * r;
		if ( ! free( x, z ) ) continue;
		if ( obstacles.some( ( o ) => Math.hypot( o.x - x, o.z - z ) < 12 ) ) continue;
		const h = 10 + rng() * 12;
		const y = H( x, z );
		foliage.tree( new THREE.Vector3( x, y, z ), h, rng, { cardsPerClump: 18, cardSize: 2.2, branches: 5 + Math.floor( rng() * 3 ) } );
		obstacles.push( { x, z, r: h * 0.03 + 0.3, h: h, base: y } );
		placed ++;

	}

	for ( let i = 0; i < 70; i ++ ) {

		const a = rng() * Math.PI * 2, r = 15 + Math.sqrt( rng() ) * 112;
		const x = C.x + Math.cos( a ) * r, z = C.z + Math.sin( a ) * r;
		if ( ! free( x, z ) ) continue;
		foliage.bush( new THREE.Vector3( x, H( x, z ) - 0.2, z ), 0.8 + rng() * 1.4, rng );

	}

	// 悬崖边一圈灌木（让台地边缘不那么光秃）
	for ( let i = 0; i < 120; i ++ ) {

		const th = rng() * Math.PI * 2;
		const R = hill.edgeR( th ) - 2 - rng() * 3;
		const x = C.x + Math.cos( th ) * R, z = C.z + Math.sin( th ) * R;
		if ( Math.hypot( x - 38, z + 32 ) < 24 ) continue;
		if ( Math.hypot( x, z + 20 ) < 14 ) continue;
		foliage.bush( new THREE.Vector3( x, H( x, z ) - 0.3, z ), 1 + rng() * 1.6, rng );

	}

	// 太阳能廊架：出生点旁边，四根白柱子撑着一排倾斜的太阳能板
	{

		const white = new THREE.MeshStandardMaterial( { color: 0xebe8e0, roughness: 0.5 } );
		const pv = new THREE.MeshStandardMaterial( { color: 0x1f3a63, roughness: 0.12, metalness: 0.85 } );
		const cx = - 16, cz = 12, y = H( cx, cz );
		for ( const [ dx, dz ] of [ [ - 5, - 3 ], [ 5, - 3 ], [ - 5, 3 ], [ 5, 3 ] ] ) {

			const col = new THREE.Mesh( new THREE.CylinderGeometry( 0.18, 0.22, 3.6, 10 ), white );
			col.position.set( cx + dx, y + 1.8, cz + dz );
			col.castShadow = true;
			group.add( col );
			obstacles.push( { x: cx + dx, z: cz + dz, r: 0.3, h: 3.6, base: y } );

		}

		for ( let k = 0; k < 4; k ++ ) {

			const p = new THREE.Mesh( new THREE.BoxGeometry( 2.4, 0.08, 7.2 ), pv );
			p.position.set( cx - 3.75 + k * 2.5, y + 3.75, cz );
			p.rotation.z = 0.25;
			p.castShadow = true;
			group.add( p );

		}

		const beam = new THREE.Mesh( new THREE.BoxGeometry( 11, 0.25, 0.25 ), white );
		for ( const dz of [ - 3, 3 ] ) {

			const b = beam.clone();
			b.position.set( cx, y + 3.55, cz + dz );
			group.add( b );

		}

		// 长椅
		const bench = new THREE.Mesh( new THREE.BoxGeometry( 3, 0.5, 0.8 ), new THREE.MeshStandardMaterial( { color: 0x8a6b4a, roughness: 0.8 } ) );
		bench.position.set( cx, y + 0.25, cz );
		bench.castShadow = true;
		group.add( bench );
		obstacles.push( { x: cx, z: cz, r: 1.2, h: 0.5, base: y, box: { T: new THREE.Vector3( 0, 0, 1 ), hw: 1.5, hl: 0.4 } } );

	}

	// 观景台的木栏杆（出生点前面的悬崖边）
	{

		const wood = new THREE.MeshStandardMaterial( { color: 0x6b5340, roughness: 0.8 } );
		for ( let i = - 6; i <= 6; i ++ ) {

			const th = - Math.PI / 2 + i * 0.045;
			const R = hill.edgeR( th ) - 1.5;
			const x = C.x + Math.cos( th ) * R, z = C.z + Math.sin( th ) * R;
			const post = new THREE.Mesh( new THREE.BoxGeometry( 0.15, 1.1, 0.15 ), wood );
			post.position.set( x, H( x, z ) + 0.55, z );
			post.castShadow = true;
			group.add( post );
			if ( i < 6 ) {

				const th2 = th + 0.045;
				const R2 = hill.edgeR( th2 ) - 1.5;
				const x2 = C.x + Math.cos( th2 ) * R2, z2 = C.z + Math.sin( th2 ) * R2;
				const len = Math.hypot( x2 - x, z2 - z );
				const rail = new THREE.Mesh( new THREE.BoxGeometry( len, 0.1, 0.1 ), wood );
				rail.position.set( ( x + x2 ) / 2, H( x, z ) + 1.05, ( z + z2 ) / 2 );
				rail.rotation.y = - Math.atan2( z2 - z, x2 - x );
				group.add( rail );

			}

		}

	}

	return { group, obstacles, spawn: new THREE.Vector3( 0, PLATEAU_Y, - 8 ) };

}
