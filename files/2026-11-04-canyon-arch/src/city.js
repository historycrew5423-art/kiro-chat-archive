import * as THREE from 'three';

// ---------------------------------------------------------------------------
// 拱门外的远方城市：细高的塔楼（分段收窄 + 尖顶）和带拱券的高架桥。
// 离得很远，主要靠雾变成逆光里的淡金色剪影，所以几何体很简单。
// ---------------------------------------------------------------------------

function archModule() {

	const s = new THREE.Shape();
	s.moveTo( - 12, 0 );
	s.lineTo( - 12, 26 );
	s.lineTo( 12, 26 );
	s.lineTo( 12, 0 );
	s.lineTo( 8, 0 );
	s.lineTo( 8, 12 );
	s.absarc( 0, 12, 8, 0, Math.PI, false );
	s.lineTo( - 8, 0 );
	s.lineTo( - 12, 0 );
	const g = new THREE.ExtrudeGeometry( s, { depth: 7, bevelEnabled: false, curveSegments: 10 } );
	g.translate( 0, 0, - 3.5 );
	return g;

}

export function createCity( rock, rng ) {

	const group = new THREE.Group();
	const boxes = [];
	const arches = [];
	const towers = [];

	const tower = ( x, z, h, w ) => {

		const base = rock.farH( x, z ) - 2;
		let y = base;
		let cw = w;
		const tiers = 2 + Math.floor( rng() * 3 );
		for ( let i = 0; i < tiers; i ++ ) {

			const th = h * ( i === 0 ? 0.45 : 0.55 / ( tiers - 1 ) ) * ( 0.85 + rng() * 0.3 );
			boxes.push( { x, z, y, w: cw, d: cw * ( 0.8 + rng() * 0.4 ), h: th, r: rng() * 0.3 } );
			y += th;
			// 每段之间的挑檐平台
			boxes.push( { x, z, y: y - 1.5, w: cw * 1.25, d: cw * 1.25, h: 2.5, r: 0 } );
			cw *= 0.62 + rng() * 0.15;

		}

		if ( rng() < 0.75 ) boxes.push( { x, z, y, w: Math.max( 1.5, cw * 0.25 ), d: Math.max( 1.5, cw * 0.25 ), h: h * ( 0.15 + rng() * 0.25 ), r: 0 } );
		towers.push( { x, z, top: y, base } );

	};

	// 主塔：拱门里最显眼的那座
	tower( - 5, - 1150, 560, 46 );
	tower( 70, - 1350, 420, 34 );

	for ( let i = 0; i < 70; i ++ ) {

		const z = - 800 - Math.pow( rng(), 0.8 ) * 1900;
		const spread = 160 + ( - z - 800 ) * 0.35;
		const x = 20 + ( rng() - 0.5 ) * 2 * spread;
		const tooClose = towers.some( ( t ) => Math.hypot( t.x - x, t.z - z ) < 45 );
		if ( tooClose ) continue;
		const h = 90 + Math.pow( rng(), 1.6 ) * 360;
		tower( x, z, h, 14 + rng() * 26 );

	}

	// 高架桥：在几座塔之间架拱券
	const bridge = ( a, b, y ) => {

		const dx = b.x - a.x, dz = b.z - a.z;
		const len = Math.hypot( dx, dz );
		const n = Math.floor( len / 24 );
		const rot = Math.atan2( dx, dz ) + Math.PI / 2;
		for ( let i = 0; i < n; i ++ ) {

			const t = ( i + 0.5 ) / n;
			arches.push( { x: a.x + dx * t, z: a.z + dz * t, y, rot } );

		}

	};

	const sorted = [ ...towers ].sort( ( p, q ) => q.top - p.top );
	for ( let i = 0; i < 6; i ++ ) {

		const a = sorted[ i ];
		const b = sorted.slice( i + 1 ).sort( ( p, q ) => Math.hypot( p.x - a.x, p.z - a.z ) - Math.hypot( q.x - a.x, q.z - a.z ) )[ 0 ];
		if ( ! b ) continue;
		const y = Math.min( a.top, b.top ) * 0.35 + Math.max( a.base, b.base ) * 0.65 + 40;
		bridge( a, b, y );

	}

	// 一条横跨河谷的长高架
	bridge( { x: - 260, z: - 950 }, { x: 330, z: - 1020 }, 95 );
	bridge( { x: - 220, z: - 1500 }, { x: 380, z: - 1420 }, 150 );

	const mat = new THREE.MeshStandardMaterial( { color: 0xd2c4aa, roughness: 0.85 } );
	const boxGeo = new THREE.BoxGeometry( 1, 1, 1 );
	boxGeo.translate( 0, 0.5, 0 );
	const bm = new THREE.InstancedMesh( boxGeo, mat, boxes.length );
	const m = new THREE.Matrix4();
	const q = new THREE.Quaternion();
	boxes.forEach( ( b, i ) => {

		q.setFromEuler( new THREE.Euler( 0, b.r, 0 ) );
		m.compose( new THREE.Vector3( b.x, b.y, b.z ), q, new THREE.Vector3( b.w, b.h, b.d ) );
		bm.setMatrixAt( i, m );

	} );
	bm.computeBoundingSphere();
	group.add( bm );

	const am = new THREE.InstancedMesh( archModule(), mat, arches.length );
	arches.forEach( ( a, i ) => {

		q.setFromEuler( new THREE.Euler( 0, a.rot, 0 ) );
		m.compose( new THREE.Vector3( a.x, a.y, a.z ), q, new THREE.Vector3( 1, 1, 1 ) );
		am.setMatrixAt( i, m );

	} );
	am.computeBoundingSphere();
	group.add( am );

	return { group, stats: { towers: towers.length, arches: arches.length } };

}
