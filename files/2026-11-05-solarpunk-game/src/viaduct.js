import * as THREE from 'three';
import { NOISE } from './glsl.js';
import { leafyMaterial } from './city.js';
import { VIADUCT, DECK_Y, L, STATION } from './layout.js';

// ---------------------------------------------------------------------------
// 高架绿廊：中间两条轨道，两侧是种植槽隔开的步道。桥面按 4 米一段，用实例盒子拼出来。
// 横截面（离中线的距离，米）：
//   0–1.2 中间种植带 | 1.2–4.2 轨道 | 4.2–5.4 种植矮墙 | 5.4–11.5 步道 | 11.5–13 外侧种植槽
// ---------------------------------------------------------------------------

const SEG = 4;

export function createViaduct( foliage, rng, Q, U, leafTex ) {

	const group = new THREE.Group();
	const curve = new THREE.CatmullRomCurve3( VIADUCT.points, false, 'centripetal' );
	const total = curve.getLength();
	const n = Math.ceil( total / SEG );
	const samples = [];
	const up = new THREE.Vector3( 0, 1, 0 );
	for ( let i = 0; i <= n; i ++ ) {

		const t = i / n;
		const p = curve.getPointAt( t );
		const T = curve.getTangentAt( t ).setY( 0 ).normalize();
		const B = new THREE.Vector3().crossVectors( T, up ).normalize();
		samples.push( { p, T, B, s: t * total } );

	}

	// 连接站在曲线上的位置（离 P1 最近的采样点）
	let walkEnd = 0;
	let best = 1e9;
	samples.forEach( ( smp, i ) => {

		const d = smp.p.distanceTo( VIADUCT.points[ 1 ] );
		if ( d < best ) {

			best = d;
			walkEnd = i;

		}

	} );
	const walkLen = samples[ walkEnd ].s;
	// 车站区和每隔 150 米的人行横道：这里没有矮墙，可以穿过轨道到另一侧（小心电车）
	const crossings = [ 150, 300, 450 ].filter( ( c ) => c < walkLen - 60 );
	const stationZone = ( s ) => s < 26 || ( s > walkLen - 26 && s < walkLen + 14 ) || crossings.some( ( c ) => Math.abs( s - c ) < 6 );

	// ---- 材质 ----
	const concrete = new THREE.MeshStandardMaterial( { color: 0xe6e3dc, roughness: 0.6 } );
	const deckMat = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0.8 } );
	deckMat.onBeforeCompile = ( sh ) => {

		sh.fragmentShader = sh.fragmentShader
			.replace( '#include <common>', `#include <common>\n${ NOISE }` )
			.replace( '#include <color_fragment>', /* glsl */ `
				#include <color_fragment>
				vec2 dp = vFogWorldPos.xz;
				vec2 g = abs( fract( dp / 1.5 ) - 0.5 );
				float seam = smoothstep( 0.47, 0.49, max( g.x, g.y ) );
				vec3 c = vec3( 0.74, 0.72, 0.68 ) * ( 0.9 + 0.15 * hash12( floor( dp / 1.5 ) ) ) * ( 1.0 - 0.25 * seam );
				c *= 0.85 + 0.3 * vnoise( dp * 0.08 );
				diffuseColor.rgb = c;
			` );

	};

	deckMat.customProgramCacheKey = () => 'deck';
	const bed = new THREE.MeshStandardMaterial( { color: 0x4a4740, roughness: 0.95 } );
	const steel = new THREE.MeshStandardMaterial( { color: 0x9a9a98, roughness: 0.3, metalness: 0.8 } );
	const planterMat = new THREE.MeshStandardMaterial( { color: 0xd8d4ca, roughness: 0.7 } );
	const soilMat = new THREE.MeshStandardMaterial( { color: 0x2a2316, roughness: 1 } );

	const lists = { deck: [], bed: [], steel: [], planter: [], soil: [], concrete: [] };
	const box = ( list, smp, l, y, w, h, len ) => list.push( { p: smp.p.clone().addScaledVector( smp.B, l ).setY( smp.p.y + y ), T: smp.T, w, h, len } );
	const blobs = [];
	const obstacles = [];

	for ( let i = 0; i < n; i ++ ) {

		const a = samples[ i ], b = samples[ i + 1 ];
		const smp = { p: a.p.clone().lerp( b.p, 0.5 ), T: a.T.clone().lerp( b.T, 0.5 ).normalize(), B: a.B.clone().lerp( b.B, 0.5 ).normalize() };
		const s = a.s;
		const len = SEG + 0.08;
		const walkable = i < walkEnd + 3;
		box( lists.deck, smp, 0, - 0.6, 26, 1.2, len );
		box( lists.concrete, smp, 0, - 3.6, 24, 4.8, len );
		for ( const side of [ - 1, 1 ] ) {

			box( lists.concrete, smp, side * 12.2, - 5.0, 1.6, 7.6, len );
			box( lists.bed, smp, side * 2.7, 0.05, 3.0, 0.1, len );
			for ( const r of [ - 0.72, 0.72 ] ) box( lists.steel, smp, side * 2.7 + r, 0.2, 0.12, 0.2, len );
			// 外侧种植槽
			box( lists.planter, smp, side * 12.25, 0.6, 1.5, 1.2, len );
			box( lists.soil, smp, side * 12.25, 1.22, 1.3, 0.06, len );
			// 轨道旁的种植矮墙（车站区留出通道）
			if ( ! ( walkable && stationZone( s ) ) ) {

				box( lists.planter, smp, side * 4.8, 0.55, 1.2, 1.1, len );
				box( lists.soil, smp, side * 4.8, 1.12, 1.0, 0.06, len );

			} else {

				box( lists.deck, smp, side * 2.7, 0.15, 3.2, 0.3, len );
				box( lists.planter, smp, side * 4.8, 0.02, 1.2, 0.06, len );

			}

			// 植物
			const near = s < walkLen + 200;
			if ( rng() < ( near ? 0.9 : 0.5 ) ) blobs.push( [ smp.p.x + smp.B.x * side * 12.2, smp.p.y + 1.0, smp.p.z + smp.B.z * side * 12.2, 1.0 + rng() * 1.1 ] );
			if ( ! ( walkable && stationZone( s ) ) && rng() < ( near ? 0.7 : 0.35 ) ) blobs.push( [ smp.p.x + smp.B.x * side * 4.8, smp.p.y + 1.0, smp.p.z + smp.B.z * side * 4.8, 0.7 + rng() * 0.6 ] );
			if ( near && rng() < 0.5 ) foliage.bush( smp.p.clone().addScaledVector( smp.B, side * 12.2 ).setY( smp.p.y + 1.1 ), 1.1 + rng() * 0.8, rng, { n: 5, size: 1.4 } );

		}

		// 中间种植带
		box( lists.planter, smp, 0, 0.35, 2.0, 0.7, len );
		if ( rng() < 0.6 ) blobs.push( [ smp.p.x, smp.p.y + 0.8, smp.p.z, 0.8 + rng() * 0.5 ] );

		// 桥墩：每 96 米一对
		if ( i % 24 === 12 ) {

			for ( const side of [ - 1, 1 ] ) {

				const q = smp.p.clone().addScaledVector( smp.B, side * 7 );
				const h = q.y - 8;
				const g = new THREE.CylinderGeometry( 3.2, 5.2, h, 20 );
				g.translate( 0, h / 2, 0 );
				const m = new THREE.Mesh( g, concrete );
				m.position.set( q.x, 0, q.z );
				group.add( m );

			}

		}

		// 步道上的路灯和长椅（会挡路）
		if ( walkable && i % 8 === 4 && ! stationZone( s ) ) {

			for ( const side of [ - 1, 1 ] ) {

				const q = smp.p.clone().addScaledVector( smp.B, side * 10.6 );
				box( lists.steel, { p: q, T: smp.T, B: smp.B }, 0, 2.6, 0.18, 5.2, 0.18 );
				box( lists.steel, { p: q, T: smp.T, B: smp.B }, - side * 0.6, 5.2, 1.4, 0.12, 0.3 );
				obstacles.push( { x: q.x, z: q.z, r: 0.35, h: 5.2 } );
				if ( i % 16 === 4 ) {

					const bq = smp.p.clone().addScaledVector( smp.B, side * 10.2 ).addScaledVector( smp.T, 3 );
					box( lists.planter, { p: bq, T: smp.T, B: smp.B }, 0, 0.25, 0.8, 0.5, 2.6 );
					obstacles.push( { x: bq.x, z: bq.z, r: 1.1, h: 0.5, box: { T: smp.T.clone(), hw: 0.45, hl: 1.35 } } );

				}

			}

		}

	}

	// ---- 实例化 ----
	const geo = new THREE.BoxGeometry( 1, 1, 1 );
	const mk = ( list, mat, shadow ) => {

		const mesh = new THREE.InstancedMesh( geo, mat, list.length );
		const m = new THREE.Matrix4(), q = new THREE.Quaternion();
		const fwd = new THREE.Vector3( 0, 0, 1 );
		list.forEach( ( b, i ) => {

			q.setFromUnitVectors( fwd, b.T );
			m.compose( b.p, q, new THREE.Vector3( b.w, b.h, b.len ) );
			mesh.setMatrixAt( i, m );

		} );
		mesh.castShadow = shadow;
		mesh.receiveShadow = true;
		mesh.computeBoundingSphere();
		group.add( mesh );
		return mesh;

	};

	mk( lists.deck, deckMat, true );
	mk( lists.concrete, concrete, false );
	mk( lists.bed, bed, false );
	mk( lists.steel, steel, true );
	mk( lists.planter, planterMat, true );
	mk( lists.soil, soilMat, false );

	// ---- 山顶车站：几道白色拱架 + 太阳能玻璃顶 ----
	{

		const s0 = samples[ 2 ];
		const glassRoof = new THREE.MeshStandardMaterial( { color: 0x23406a, roughness: 0.15, metalness: 0.8 } );
		for ( let k = 0; k < 4; k ++ ) {

			const smp = samples[ 1 + k * 2 ];
			const arch = new THREE.TorusGeometry( 14, 0.5, 8, 40, Math.PI );
			const m = new THREE.Mesh( arch, concrete );
			m.position.copy( smp.p ).setY( DECK_Y );
			m.lookAt( m.position.clone().add( smp.T ) );
			m.castShadow = true;
			group.add( m );

		}

		// 拱架顶上铺一排倾斜的太阳能板
		const yaw = Math.atan2( s0.T.x, s0.T.z );
		for ( let k = 0; k < 6; k ++ ) for ( const side of [ - 1, 1 ] ) {

			const smp = samples[ 1 + k ];
			const panel = new THREE.Mesh( new THREE.BoxGeometry( 9, 0.2, 3.6 ), glassRoof );
			panel.position.copy( smp.p ).addScaledVector( smp.B, side * 6 ).setY( DECK_Y + 12.9 );
			panel.rotation.set( 0, yaw, 0 );
			panel.rotateZ( side * 0.32 );
			panel.castShadow = true;
			group.add( panel );

		}

	}

	// ---- 连接站：从桥面伸向塔身的平台、电梯井和电梯 ----
	const pad = ( () => {

		const e = samples[ walkEnd ];
		const from = e.p.clone().addScaledVector( e.B, 12.5 );
		const to = new THREE.Vector3( L.rightTower.x - 30, DECK_Y, L.rightTower.z ).setY( DECK_Y );
		const dir = to.clone().sub( from ).setY( 0 );
		const len = dir.length();
		dir.normalize();
		const mid = from.clone().lerp( to, 0.5 );
		const slab = new THREE.Mesh( new THREE.BoxGeometry( 18, 1.2, len + 2 ), deckMat );
		slab.position.copy( mid ).setY( DECK_Y - 0.6 );
		slab.rotation.y = Math.atan2( dir.x, dir.z );
		slab.receiveShadow = true;
		group.add( slab );
		const under = new THREE.Mesh( new THREE.BoxGeometry( 16, 5, len ), concrete );
		under.position.copy( mid ).setY( DECK_Y - 3.7 );
		under.rotation.y = slab.rotation.y;
		group.add( under );
		for ( const side of [ - 1, 1 ] ) {

			const rail = new THREE.Mesh( new THREE.BoxGeometry( 0.15, 1.1, len ), steel );
			rail.position.copy( mid ).addScaledVector( new THREE.Vector3( dir.z, 0, - dir.x ), side * 8.8 ).setY( DECK_Y + 0.55 );
			rail.rotation.y = slab.rotation.y;
			group.add( rail );

		}

		return { from, to, dir, len, half: 8.2 };

	} )();

	// 电梯井：沿塔身的玻璃管，一直通到花园平台
	const elevator = ( () => {

		const base = pad.to.clone().addScaledVector( pad.dir, - 4 );
		const top = L.rightTower.discY;
		const shaftMat = new THREE.MeshStandardMaterial( { color: 0xbcd4e6, roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.25, depthWrite: false } );
		const shaft = new THREE.Mesh( new THREE.CylinderGeometry( 5, 5, top - DECK_Y + 6, 32, 1, true ), shaftMat );
		shaft.position.copy( base ).setY( ( top + DECK_Y ) / 2 + 3 );
		shaft.renderOrder = 5;
		group.add( shaft );
		for ( let y = DECK_Y; y < top; y += 12 ) {

			const ring = new THREE.Mesh( new THREE.TorusGeometry( 5, 0.25, 6, 32 ), steel );
			ring.rotation.x = Math.PI / 2;
			ring.position.copy( base ).setY( y );
			group.add( ring );

		}

		const cab = new THREE.Group();
		const floor = new THREE.Mesh( new THREE.CylinderGeometry( 4.2, 4.2, 0.5, 32 ), concrete );
		floor.position.y = - 0.25;
		floor.receiveShadow = true;
		const ceil = new THREE.Mesh( new THREE.CylinderGeometry( 4.4, 4.4, 0.6, 32 ), concrete );
		ceil.position.y = 3.6;
		const glow = new THREE.Mesh( new THREE.TorusGeometry( 4.25, 0.12, 6, 48 ), new THREE.MeshBasicMaterial( { color: new THREE.Color( 1.0, 0.7, 0.3 ).multiplyScalar( 0.3 ) } ) );
		glow.rotation.x = Math.PI / 2;
		glow.position.y = 3.2;
		cab.add( floor, ceil, glow );
		cab.position.copy( base ).setY( DECK_Y );
		group.add( cab );
		return { base, top, cab, glow };

	} )();

	// ---- 有轨电车：三节白色车厢，来回跑 ----
	const tram = ( () => {

		const g = new THREE.Group();
		const body = new THREE.MeshStandardMaterial( { color: 0xf2f0ea, roughness: 0.35, metalness: 0.1 } );
		const win = new THREE.MeshStandardMaterial( { color: 0x1b2a3a, roughness: 0.05, metalness: 0.9 } );
		const cars = [];
		for ( let k = 0; k < 3; k ++ ) {

			const c = new THREE.Group();
			const b = new THREE.Mesh( new THREE.BoxGeometry( 2.8, 3.0, 17 ), body );
			b.position.y = 1.9;
			const w = new THREE.Mesh( new THREE.BoxGeometry( 2.85, 1.1, 15 ), win );
			w.position.y = 2.4;
			const roofPanel = new THREE.Mesh( new THREE.BoxGeometry( 2.2, 0.15, 14 ), new THREE.MeshStandardMaterial( { color: 0x223a5e, roughness: 0.2, metalness: 0.7 } ) );
			roofPanel.position.y = 3.5;
			c.add( b, w, roofPanel );
			b.castShadow = true;
			g.add( c );
			cars.push( c );

		}

		group.add( g );
		return { g, cars, s: walkLen * 0.4, dir: 1 };

	} )();

	group.add( foliageBlobs( blobs, rng, leafTex ) );

	// ---- 碰撞查询：给出某点在桥面上的位置 ----
	function query( x, z ) {

		let bi = 0, bd = 1e9;
		const last = Math.min( samples.length - 1, walkEnd + 6 );
		for ( let i = 0; i <= last; i ++ ) {

			const p = samples[ i ].p;
			const d = ( p.x - x ) ** 2 + ( p.z - z ) ** 2;
			if ( d < bd ) {

				bd = d;
				bi = i;

			}

		}

		const smp = samples[ bi ];
		const dx = x - smp.p.x, dz = z - smp.p.z;
		const l = dx * smp.B.x + dz * smp.B.z;
		const along = dx * smp.T.x + dz * smp.T.z;
		return { s: smp.s + along, l, y: smp.p.y, i: bi };

	}

	function walkable( x, z ) {

		const q = query( x, z );
		if ( q.s < - 2 || q.s > walkLen + 12 ) {

			// 连接平台
			const rel = new THREE.Vector3( x - pad.from.x, 0, z - pad.from.z );
			const a = rel.dot( pad.dir );
			const side = Math.abs( rel.x * pad.dir.z - rel.z * pad.dir.x );
			return a > - 1 && a < pad.len && side < pad.half ? DECK_Y : null;

		}

		const al = Math.abs( q.l );
		if ( al > 11.4 ) {

			const rel = new THREE.Vector3( x - pad.from.x, 0, z - pad.from.z );
			const a = rel.dot( pad.dir );
			const side = Math.abs( rel.x * pad.dir.z - rel.z * pad.dir.x );
			if ( a > - 2 && a < pad.len && side < pad.half ) return DECK_Y;
			return null;

		}

		if ( al < 5.5 && ! stationZone( q.s ) ) return null;
		return q.y;

	}

	function update( dt, t ) {

		// 电车在可走的那段来回跑，车站停几秒
		const tr = tram;
		const speed = 22;
		tr.s += tr.dir * speed * dt;
		const far = Math.min( total - 30, walkLen + 900 );
		if ( tr.s > far ) tr.dir = - 1;
		if ( tr.s < 30 ) tr.dir = 1;
		tr.cars.forEach( ( c, k ) => {

			const s = THREE.MathUtils.clamp( tr.s - k * 18 * tr.dir, 0, total );
			const p = curve.getPointAt( s / total );
			const T = curve.getTangentAt( s / total ).setY( 0 ).normalize();
			const B = new THREE.Vector3().crossVectors( T, up ).normalize();
			c.position.copy( p ).addScaledVector( B, tr.dir > 0 ? - 2.7 : 2.7 );
			c.rotation.y = Math.atan2( T.x, T.z );

		} );

	}

	// 电车车头附近的位置（用来判断有没有撞到人）
	function tramHit( x, z ) {

		const q = query( x, z );
		if ( Math.abs( q.l ) > 4.4 || q.s < 0 || q.s > walkLen + 10 ) return false;
		const head = tram.s, tail = tram.s - 3 * 18 * tram.dir;
		return q.s > Math.min( head, tail ) - 9 && q.s < Math.max( head, tail ) + 9;

	}

	return { group, curve, samples, walkEnd, walkLen, query, walkable, obstacles, pad, elevator, update, stationZone, crossings, tramHit, tram };

}

function foliageBlobs( list, rng, leafTex ) {

	const geo = new THREE.IcosahedronGeometry( 1, 1 );
	geo.scale( 1.4, 0.7, 1.4 );
	const mat = leafyMaterial( leafTex, 0.9 );
	const mesh = new THREE.InstancedMesh( geo, mat, list.length );
	const m = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
	list.forEach( ( [ x, y, z, s ], i ) => {

		q.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), rng() * 6.28 );
		m.compose( new THREE.Vector3( x, y, z ), q, new THREE.Vector3( s, s, s ) );
		mesh.setMatrixAt( i, m );
		const t = rng();
		mesh.setColorAt( i, c.setRGB( 0.05 + t * 0.06, 0.11 + t * 0.08, 0.03 + t * 0.02 ) );

	} );
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	mesh.computeBoundingSphere();
	return mesh;

}
