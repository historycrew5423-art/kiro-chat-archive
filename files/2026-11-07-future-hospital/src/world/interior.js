import * as THREE from 'three';
import { HOSP, FLOOR_NAMES } from '../config.js';
import { createNav } from './nav.js';
import { createBuckets, createProps } from './props.js';
import { createInteriorMaterials } from './interiorMaterials.js';
import { textTexture } from '../render/materials.js';
import { roundedRectShape, merge } from './geom.js';
import { mulberry32 } from '../core/rng.js';

// ---------------------------------------------------------------------------
// 医院内部：
//   1F 大厅（和门外广场是同一张导航图，可以直接走进去）：挂号处、候诊椅、绿墙、药房、两组电梯
//   2F~4F：每层切成 2x2 四个房间。到达房间 A（安全）→ 二选一的门 → 房间 B → 房间 D（出口电梯）
//          电梯一层在西北角、一层在东南角交替，所以每层的到达角和出口角是对角
//   屋顶：Boss 场地，一块圆形平台
// 每局重新生成 2F~4F 的房间内容（rebuild），外立面不变。
// ---------------------------------------------------------------------------

const { x0, x1, z0, z1, levels } = HOSP;
const BAND = 1.25;
const IN = 0.45; // 室内边界离玻璃的距离
// 2x2 房间：col 0 = 西，1 = 东；row 0 = 北，1 = 南
export const CELLS = [ [ 0, 0 ], [ 1, 0 ], [ 0, 1 ], [ 1, 1 ] ];
export function cellBounds( c, r ) {

	return {
		x0: c === 0 ? x0 + IN : 0.2, x1: c === 0 ? - 0.2 : x1 - IN,
		z0: r === 0 ? z0 + IN : 0.2, z1: r === 0 ? - 0.2 : z1 - IN
	};

}

// 门：两个相邻房间之间墙的中点
function doorBetween( a, b ) {

	if ( a[ 1 ] === b[ 1 ] ) return { axis: 'x', x: 0, z: a[ 1 ] === 0 ? - 10.75 : 10.75 }; // 东西相邻，墙在 x=0
	return { axis: 'z', x: a[ 0 ] === 0 ? - 15.75 : 15.75, z: 0 }; // 南北相邻，墙在 z=0

}

// 电梯：西北组在北墙上，东南组在东墙上
export const ELEVATORS = {
	nw: { x: - 21, z: z0 + 0.9, rot: 0, out: [ 0, 1 ] },
	se: { x: x1 - 0.9, z: 11, rot: - Math.PI / 2, out: [ - 1, 0 ] }
};

const ROOM_THEMES = {
	1: [ 'waiting', 'consult', 'kids' ],
	2: [ 'lab', 'ct', 'consult' ],
	3: [ 'rehab', 'pharmacy', 'lab' ]
};
export const THEME_NAMES = {
	hall: '电梯厅', waiting: '候诊区', consult: '诊室', kids: '儿科游乐区', lab: '检验科', ct: '影像科 CT 室',
	rehab: '康复训练中心', pharmacy: '药房', shop: '便利店', garden: '中庭花园', storage: '药品仓库', lobby: '门诊大厅', roof: '屋顶花园'
};

export function createInterior( { leafMat } ) {

	const root = new THREE.Group();
	root.name = 'interior';
	const M = createInteriorMaterials( leafMat );
	const floors = [];
	const signCache = new Map();
	const signMat = ( key, lines, opts ) => {

		if ( ! signCache.has( key ) ) signCache.set( key, new THREE.MeshStandardMaterial( { map: textTexture( lines, opts ), roughness: 0.5, envMapIntensity: 0.3, emissive: 0xffffff, emissiveIntensity: opts.glow ?? 0.25, emissiveMap: null } ) );
		const m = signCache.get( key );
		if ( m.emissiveMap === null ) m.emissiveMap = m.map;
		return m;

	};

	function finalize( group, B ) {

		for ( const [ key, list ] of B.map ) {

			if ( ! list.length ) continue;
			const g = merge( list );
			g.computeBoundingSphere();
			const mesh = new THREE.Mesh( g, M[ key ] || M.plasticWhite );
			mesh.castShadow = ! [ 'lightPanel', 'glassPart', 'glassFrost', 'screenBlue', 'vendGlow' ].includes( key ) && ! key.startsWith( 'guide' );
			mesh.receiveShadow = true;
			if ( key.startsWith( 'glass' ) ) mesh.renderOrder = 3;
			mesh.name = 'int_' + key;
			group.add( mesh );

		}

	}

	function addSign( group, x, y, z, rot, w, h, lines, opts = {} ) {

		const key = JSON.stringify( [ lines, opts.bg, opts.color ] );
		const mesh = new THREE.Mesh( new THREE.PlaneGeometry( w, h ), signMat( key, lines, { w: 512, h: Math.round( 512 * h / w ), ...opts } ) );
		mesh.position.set( x, y, z );
		mesh.rotation.y = rot;
		group.add( mesh );
		return mesh;

	}

	// 地面（整层的圆角矩形）和天花板（带灯带）
	function floorAndCeiling( B, y, h, floorKey, lightsEvery = 4.5 ) {

		const shape = roundedRectShape( x0 + 0.1, x1 - 0.1, z0 + 0.1, z1 - 0.1, 6.9 );
		const fg = new THREE.ShapeGeometry( shape, 12 );
		fg.rotateX( - Math.PI / 2 );
		B.add( floorKey, fg, 0, y + 0.001, 0 );
		const cg = new THREE.ShapeGeometry( shape, 12 );
		cg.rotateX( Math.PI / 2 );
		B.add( 'ceiling', cg, 0, y + h, 0 );
		// 天花板灯带：东西向的长条
		for ( let z = z0 + 4; z < z1 - 3; z += lightsEvery ) {

			for ( let x = x0 + 6; x < x1 - 6; x += 7 ) {

				B.add( 'lightPanel', new THREE.BoxGeometry( 4.2, 0.05, 0.22 ), x + 2.1, y + h - 0.03, z );

			}

		}

	}

	// 墙段：两点之间的墙，留出门洞
	function wallSeg( B, nav, ax, az, bx, bz, y, h, gaps = [] ) {

		const horiz = Math.abs( bz - az ) < 1e-3;
		const len = horiz ? Math.abs( bx - ax ) : Math.abs( bz - az );
		const s0 = horiz ? Math.min( ax, bx ) : Math.min( az, bz );
		const pieces = [];
		let cur = s0;
		const gs = gaps.map( ( g ) => [ g.c - g.w / 2, g.c + g.w / 2 ] ).sort( ( a, b ) => a[ 0 ] - b[ 0 ] );
		for ( const [ g0, g1 ] of gs ) {

			if ( g0 > cur ) pieces.push( [ cur, g0 ] );
			cur = Math.max( cur, g1 );

		}

		if ( cur < s0 + len ) pieces.push( [ cur, s0 + len ] );
		for ( const [ p0, p1 ] of pieces ) {

			const L = p1 - p0, c = ( p0 + p1 ) / 2;
			if ( L < 0.05 ) continue;
			const wx = horiz ? c : ax, wz = horiz ? az : c;
			B.add( 'wall', new THREE.BoxGeometry( horiz ? L : 0.3, h, horiz ? 0.3 : L ), wx, y + h / 2, wz );
			// 护墙板：下面 1.1 米木色
			B.add( 'woodSlat', new THREE.BoxGeometry( horiz ? L : 0.34, 1.1, horiz ? 0.34 : L ), wx, y + 0.55, wz );
			if ( horiz ) nav.fillRect( p0, p1, az - 0.3, az + 0.3, 1 );
			else nav.fillRect( ax - 0.3, ax + 0.3, p0, p1, 1 );

		}

		// 门洞上方的过梁
		for ( const [ g0, g1 ] of gs ) {

			const c = ( g0 + g1 ) / 2, L = g1 - g0;
			const wx = horiz ? c : ax, wz = horiz ? az : c;
			B.add( 'wall', new THREE.BoxGeometry( horiz ? L : 0.3, h - 3.2, horiz ? 0.3 : L ), wx, y + 3.2 + ( h - 3.2 ) / 2, wz );

		}

	}

	// 外墙（玻璃）以内的导航边界：圆角矩形外面全部堵上
	function blockOutside( nav, inset = IN ) {

		const r = 7 - inset;
		const ax = x0 + inset, bx = x1 - inset, az = z0 + inset, bz = z1 - inset;
		for ( let j = 0; j < nav.H; j ++ ) {

			for ( let i = 0; i < nav.W; i ++ ) {

				const x = nav.x0 + ( i + 0.5 ) * nav.cell, z = nav.z0 + ( j + 0.5 ) * nav.cell;
				const qx = Math.max( ax + r - x, 0, x - ( bx - r ) ), qz = Math.max( az + r - z, 0, z - ( bz - r ) );
				const inside = x > ax && x < bx && z > az && z < bz && Math.hypot( qx, qz ) < r;
				if ( ! inside && x > x0 - 1 && x < x1 + 1 && z > z0 - 1 && z < z1 + 1 ) nav.block[ j * nav.W + i ] = 1;

			}

		}

	}

	// 自动门（两扇滑动玻璃门 + 门头 + 状态灯条）
	function makeDoor( group, B, nav, id, d, y, label ) {

		const along = d.axis === 'x' ? 'z' : 'x';
		const w = 4.0;
		const door = { id, x: d.x, z: d.z, axis: d.axis, open: 0, target: 0, leaves: [], label };
		const leafGeo = new THREE.BoxGeometry( d.axis === 'x' ? 0.06 : w / 2, 3.1, d.axis === 'x' ? w / 2 : 0.06 );
		for ( const s of [ - 1, 1 ] ) {

			const leaf = new THREE.Mesh( leafGeo, M.glassPart );
			leaf.renderOrder = 3;
			const base = new THREE.Vector3( d.x, y + 1.6, d.z );
			base[ along ] += s * w / 4;
			leaf.position.copy( base );
			leaf.userData = { base, s, along };
			group.add( leaf );
			door.leaves.push( leaf );
			// 门框边条
			const f = new THREE.Mesh( new THREE.BoxGeometry( d.axis === 'x' ? 0.1 : 0.08, 3.1, d.axis === 'x' ? 0.08 : 0.1 ), M.metal );
			f.position.copy( base ).setY( y + 1.6 );
			f.position[ along ] = ( d.axis === 'x' ? d.z : d.x ) + s * ( w / 2 - 0.04 );
			group.add( f );

		}

		const lightMat = new THREE.MeshStandardMaterial( { color: 0x000000, emissive: 0xff3030, emissiveIntensity: 3 } );
		const strip = new THREE.Mesh( new THREE.BoxGeometry( d.axis === 'x' ? 0.36 : w, 0.08, d.axis === 'x' ? w : 0.36 ), lightMat );
		strip.position.set( d.x, y + 3.24, d.z );
		group.add( strip );
		door.lightMat = lightMat;
		nav.addDoor( id, d.x - ( d.axis === 'x' ? 0.4 : w / 2 ), d.x + ( d.axis === 'x' ? 0.4 : w / 2 ), d.z - ( d.axis === 'x' ? w / 2 : 0.4 ), d.z + ( d.axis === 'x' ? w / 2 : 0.4 ) );
		nav.setDoor( id, false );
		door.set = ( open, color ) => {

			door.target = open ? 1 : 0;
			nav.setDoor( id, open );
			lightMat.emissive.set( color ?? ( open ? 0x30ff7a : 0xff3030 ) );

		};

		return door;

	}

	// 电梯门（两扇不锈钢门 + 楼层显示屏）
	function makeElevator( group, B, nav, key, y, floorIndex ) {

		const e = ELEVATORS[ key ];
		const g = new THREE.Group();
		g.position.set( e.x, y, e.z );
		g.rotation.y = e.rot;
		group.add( g );
		const frame = new THREE.Mesh( new THREE.BoxGeometry( 3.6, 3.6, 0.3 ), M.metalDark );
		frame.position.set( 0, 1.8, - 0.1 );
		g.add( frame );
		const leaves = [];
		for ( const s of [ - 1, 1 ] ) {

			const leaf = new THREE.Mesh( new THREE.BoxGeometry( 1.25, 2.9, 0.06 ), M.chrome );
			leaf.position.set( s * 0.625, 1.45, 0.08 );
			leaf.userData.s = s;
			g.add( leaf );
			leaves.push( leaf );

		}

		const disp = new THREE.Mesh( new THREE.PlaneGeometry( 1.3, 0.42 ), new THREE.MeshStandardMaterial( { map: textTexture( FLOOR_NAMES[ floorIndex ].slice( 0, 2 ), { w: 256, h: 84, bg: '#120806', color: '#ff6a3d', size: 60 } ), emissive: 0xffffff, emissiveIntensity: 1.2, roughness: 0.3 } ) );
		disp.material.emissiveMap = disp.material.map;
		disp.position.set( 0, 3.35, 0.1 );
		g.add( disp );
		// 导航：门本身挡住
		const c = Math.cos( e.rot ), s = Math.sin( e.rot );
		nav.fillOBB( e.x, e.z, 1.9, 0.45, e.rot, 1 );
		return {
			key, x: e.x + e.out[ 0 ] * 2.2, z: e.z + e.out[ 1 ] * 2.2, doorX: e.x, doorZ: e.z, leaves, open: 0, target: 0, group: g, c, s,
			// 主角从电梯出来时站的位置
			spawn: { x: e.x + e.out[ 0 ] * 3.2 + ( key === 'nw' ? 0 : 0 ), z: e.z + e.out[ 1 ] * 3.2 + ( key === 'nw' ? 3.2 - 3.2 : 0 ) }
		};

	}

	// ------------------------------------------------------------------
	// 房间内容
	// ------------------------------------------------------------------
	function furnish( P, b, theme, rng, doorsHere, B, y ) {

		const cx = ( b.x0 + b.x1 ) / 2, cz = ( b.z0 + b.z1 ) / 2;
		const w = b.x1 - b.x0, d = b.z1 - b.z0;
		const nearDoor = ( x, z, r = 3.2 ) => doorsHere.some( ( p ) => Math.hypot( p.x - x, p.z - z ) < r );
		const free = ( x, z, r = 2.2 ) => ! nearDoor( x, z, r + 1.5 );
		const edge = 1.0;
		// 沿墙摆一圈东西（避开门和电梯）
		const alongWalls = ( fn, step, inset = 0.9 ) => {

			for ( let x = b.x0 + 2.5; x < b.x1 - 2; x += step ) {

				if ( free( x, b.z0 + inset ) ) fn( x, b.z0 + inset, 0 );
				if ( free( x, b.z1 - inset ) ) fn( x, b.z1 - inset, Math.PI );

			}

			for ( let z = b.z0 + 3; z < b.z1 - 2.5; z += step ) {

				if ( free( b.x0 + inset, z ) ) fn( b.x0 + inset, z, - Math.PI / 2 );
				if ( free( b.x1 - inset, z ) ) fn( b.x1 - inset, z, Math.PI / 2 );

			}

		};

		// 中间几处掩体
		const islands = ( fn, n ) => {

			const pts = [];
			for ( let k = 0; k < n * 6 && pts.length < n; k ++ ) {

				const x = b.x0 + 4 + rng() * ( w - 8 ), z = b.z0 + 4 + rng() * ( d - 8 );
				if ( ! free( x, z, 3.5 ) ) continue;
				if ( pts.some( ( p ) => Math.hypot( p.x - x, p.z - z ) < 7 ) ) continue;
				pts.push( { x, z } );
				fn( x, z, Math.floor( rng() * 4 ) * Math.PI / 2 );

			}

		};

		switch ( theme ) {

			case 'waiting':
				alongWalls( ( x, z, r ) => P.chairRow( x, z, r, 4 ), 4.2 );
				islands( ( x, z, r ) => P.planter( x, z, 3.2, 1.0, 0.6, r, 4 ), 4 );
				break;
			case 'consult':
				alongWalls( ( x, z, r ) => {

					P.desk( x, z, r );
					// 玻璃隔断
					const c = Math.cos( r ), s = Math.sin( r );
					B.add( 'glassPart', new THREE.BoxGeometry( 0.05, 2.4, 2.2 ), x + c * 1.6, y + 1.2, z - s * 1.6, r );

				}, 4.6, 1.3 );
				islands( ( x, z, r ) => P.indoorTree( x, z, 1.0 ), 3 );
				islands( ( x, z, r ) => P.bench( x, z, r, 2.6 ), 2 );
				break;
			case 'kids':
				islands( ( x, z, r ) => P.play( x, z, r ), 3 );
				islands( ( x, z ) => P.ball( x, z, 0.35 + rng() * 0.2, rng() < 0.5 ? 'accentOrange' : 'accentTeal' ), 6 );
				alongWalls( ( x, z, r ) => P.cabinet( x, z, r, 1.6, 0.7, 0.5, 'accentYellow' ), 5.5 );
				break;
			case 'lab':
				for ( let k = 0; k < 3; k ++ ) {

					const z = b.z0 + d * ( 0.25 + k * 0.25 );
					for ( const s of [ - 1, 1 ] ) {

						const x = cx + s * w * 0.22;
						if ( free( x, z, 3 ) ) P.labBench( x, z, 0, 4.2 );

					}

				}

				alongWalls( ( x, z, r ) => P.cabinet( x, z, r, 1.4, 1.9, 0.5 ), 3.4 );
				break;
			case 'ct':
				P.ct( cx, cz - 1.5, Math.PI / 2 * ( rng() < 0.5 ? 0 : 1 ) );
				alongWalls( ( x, z, r ) => P.cabinet( x, z, r, 1.2, 1.2, 0.5 ), 4.5 );
				islands( ( x, z ) => P.ivStand( x, z ), 2 );
				break;
			case 'rehab':
				alongWalls( ( x, z, r ) => P.treadmill( x, z, r ), 2.6, 1.3 );
				islands( ( x, z, r ) => P.bars( x, z, r ), 2 );
				islands( ( x, z ) => P.ball( x, z, 0.33, 'accentTeal' ), 5 );
				break;
			case 'pharmacy':
				for ( let k = 0; k < 4; k ++ ) {

					const x = b.x0 + w * ( 0.2 + k * 0.2 );
					for ( const zz of [ b.z0 + d * 0.3, b.z0 + d * 0.7 ] ) if ( free( x, zz, 3 ) ) P.shelf( x, zz, Math.PI / 2, 4.0, 2.0, 0.5, k * 7 + 3 );

				}

				break;
			case 'shop':
				alongWalls( ( x, z, r ) => ( rng() < 0.55 ? P.vending( x, z, r ) : P.shelf( x, z, r, 2.2, 1.6, 0.5, Math.floor( x * 13 ) ) ), 3.0 );
				P.cabinet( cx, cz + 2, 0, 3.2, 1.0, 0.8, 'wood' );
				break;
			case 'garden':
				islands( ( x, z ) => P.indoorTree( x, z, 1.3 + rng() * 0.4 ), 6 );
				islands( ( x, z, r ) => P.bench( x, z, r, 2.4 ), 4 );
				alongWalls( ( x, z, r ) => P.planter( x, z, 3.0, 0.9, 0.55, r, 4 ), 5.0 );
				break;
			case 'storage':
				alongWalls( ( x, z, r ) => P.shelf( x, z, r, 2.6, 2.2, 0.55, Math.floor( z * 7 ) ), 3.2 );
				islands( ( x, z, r ) => P.cabinet( x, z, r, 1.6, 1.1, 0.8 ), 4 );
				break;
			case 'hall':
				alongWalls( ( x, z, r ) => ( rng() < 0.5 ? P.bench( x, z, r, 2.6 ) : P.planter( x, z, 2.6, 0.9, 0.55, r, 3 ) ), 5.2 );
				islands( ( x, z ) => P.indoorTree( x, z, 1.2 ), 2 );
				break;

		}

	}

	// ------------------------------------------------------------------
	// 1F 大厅 + 门外广场（同一张导航图）
	// ------------------------------------------------------------------
	function buildLobby() {

		const y = 0, h = levels[ 1 ] - BAND;
		const group = new THREE.Group();
		group.name = 'floor0';
		const B = createBuckets();
		const nav = createNav( - 74, 74, z0 - 1, 64, 0.5 );
		const P = createProps( B, nav, y );
		floorAndCeiling( B, y, h, 'terrazzo', 5 );
		// 主楼外墙：圆角矩形一圈都是障碍，只有正门开口
		blockOutside( nav );
		for ( let j = 0; j < nav.H; j ++ ) {

			for ( let i = 0; i < nav.W; i ++ ) {

				const x = nav.x0 + ( i + 0.5 ) * nav.cell, z = nav.z0 + ( j + 0.5 ) * nav.cell;
				// 广场：主楼南边，x -70..70，z 22..62（以外是坡和湖，挡住）
				const plaza = x > - 70 && x < 70 && z > z1 && z < 62;
				const inMain = x > x0 && x < x1 && z > z0 && z < z1;
				if ( ! plaza && ! inMain ) nav.block[ j * nav.W + i ] = 1;

			}

		}

		// 正门：南立面中间 6 米
		nav.fillRect( - 3, 3, z1 - 1.0, z1 + 0.6, 0 );
		const doorsHere = [ { x: 0, z: z1 } ];
		// 挂号处（弧形台）
		P.reception( 0, 2.5, 5.5, 2.0, Math.PI );
		addSign( group, 0, 4.6, - 2.4, 0, 6, 1.1, [ '挂号 · 收费', 'REGISTRATION' ], { bg: '#1e6f5c', color: '#ffffff', glow: 0.6 } );
		addSign( group, 0, 4.6, - 2.6, Math.PI, 6, 1.1, [ '挂号 · 收费', 'REGISTRATION' ], { bg: '#1e6f5c', color: '#ffffff', glow: 0.6 } );
		// 柱子
		for ( const cx of [ - 24, - 12, 12, 24 ] ) for ( const cz of [ - 9, 9 ] ) P.column( cx, cz, 0.55, h );
		// 候诊椅
		for ( const s of [ - 1, 1 ] ) {

			for ( let k = 0; k < 3; k ++ ) P.chairRow( s * 18, 8 + k * 2.4, 0, 6 );

		}

		// 室内树和花池
		for ( const [ px, pz ] of [ [ - 8, 14 ], [ 8, 14 ], [ - 27, 15 ], [ 27, 15 ], [ - 6, - 12 ], [ 6, - 12 ] ] ) P.indoorTree( px, pz, 1.4 );
		P.planter( - 18, 2.5, 6, 1.0, 0.6, 0, 6 );
		P.planter( 18, 2.5, 6, 1.0, 0.6, 0, 6 );
		// 北墙：绿墙（叶片面片铺满）
		for ( let x = - 12; x <= 12; x += 1.1 ) {

			for ( let yy = 0.8; yy < h - 0.6; yy += 1.0 ) {

				B.add( 'leaf', new THREE.PlaneGeometry( 1.5, 1.5 ), x + Math.sin( yy * 3 + x ) * 0.2, yy, z0 + 0.75 + Math.sin( x * 7 + yy ) * 0.08, Math.sin( x * 13 + yy * 7 ) * 0.4 );

			}

		}

		B.add( 'wood', new THREE.BoxGeometry( 26, h, 0.3 ), 0, h / 2, z0 + 0.45 );
		nav.fillRect( - 13, 13, z0, z0 + 1.2, 1 );
		// 药房（西侧）
		for ( let k = 0; k < 3; k ++ ) P.shelf( x0 + 1.2, - 12 + k * 4.4, Math.PI / 2, 4.0, 2.2, 0.5, k + 1 );
		P.cabinet( x0 + 4.2, - 8, Math.PI / 2, 9, 1.05, 0.7, 'wood' );
		addSign( group, x0 + 4.25, 3.4, - 8, Math.PI / 2, 4.5, 0.9, [ '药房', 'PHARMACY' ], { bg: '#f4f1ec', color: '#1e6f5c' } );
		// 自动售货机
		P.vending( 28, - 15, - Math.PI / 2 );
		P.vending( 28, - 13.6, - Math.PI / 2 );
		// 叫号屏
		addSign( group, - 18, 3.6, 5.4, 0, 4.2, 1.3, [ '请 001 号 袋鼠', '到 2F 就诊' ], { bg: '#0b1d2a', color: '#7fd6ff', glow: 1.4, subScale: 0.75 } );
		addSign( group, 18, 3.6, 5.4, 0, 4.2, 1.3, [ '家人们谁懂啊', '挂号不用排队了' ], { bg: '#0b1d2a', color: '#ffd34d', glow: 1.4, subScale: 0.75 } );
		// 地上的导向线：绿线从正门到挂号处再到西北电梯
		const line = ( key, pts ) => {

			for ( let i = 0; i < pts.length - 1; i ++ ) {

				const [ ax, az ] = pts[ i ], [ bx, bz ] = pts[ i + 1 ];
				const len = Math.hypot( bx - ax, bz - az );
				const g = new THREE.BoxGeometry( 0.3, 0.012, len + 0.3 );
				B.add( key, g, ( ax + bx ) / 2, y + 0.008, ( az + bz ) / 2, Math.atan2( bx - ax, bz - az ) );

			}

		};

		line( 'guideGreen', [ [ - 1.2, z1 - 1 ], [ - 1.2, 9.5 ], [ - 9, 9.5 ], [ - 9, - 4 ], [ - 21, - 4 ], [ - 21, z0 + 3 ] ] );
		line( 'guideBlue', [ [ 1.2, z1 - 1 ], [ 1.2, 9.0 ], [ 22, 9.0 ], [ 22, 11 ], [ x1 - 3, 11 ] ] );
		line( 'guideOrange', [ [ 0, z1 - 1.5 ], [ 0, 9.0 ] ] );
		const elevators = { nw: makeElevator( group, B, nav, 'nw', y, 1 ), se: makeElevator( group, B, nav, 'se', y, 1 ) };
		addSign( group, - 21, 4.4, z0 + 0.62, 0, 5, 0.8, [ '电梯 → 2F 门诊', 'ELEVATOR' ], { bg: '#2fb36a', color: '#ffffff', glow: 0.8 } );
		addSign( group, x1 - 0.62, 4.4, 11, - Math.PI / 2, 5, 0.8, [ '员工专用 · 袋鼠勿入', 'STAFF ONLY' ], { bg: '#3a8be0', color: '#ffffff', glow: 0.8 } );
		// 广场：铺装、花池、长椅、路灯（在 exterior 的地面之上）
		const pav = new THREE.PlaneGeometry( 140, 40 );
		pav.rotateX( - Math.PI / 2 );
		B.add( 'paving', pav, 0, 0.012, 42 );
		for ( const s of [ - 1, 1 ] ) {

			for ( const px of [ 14, 32, 50 ] ) {

				P.planter( s * px, 36, 7, 2.2, 0.7, 0, 6 );
				P.bench( s * px, 39.2, Math.PI, 3.0 );

			}

			P.planter( s * 24, 54, 10, 2.4, 0.7, 0, 8 );

		}

		// 湖边栏杆
		for ( let x = - 69; x < 69; x += 1.6 ) B.add( 'metal', new THREE.CylinderGeometry( 0.04, 0.04, 1.05, 8 ), x, y + 0.52, 61.6 );
		B.add( 'metal', new THREE.CylinderGeometry( 0.05, 0.05, 138, 8 ).rotateZ( Math.PI / 2 ), 0, y + 1.05, 61.6 );
		finalize( group, B );
		// 室内灯
		const lights = [];
		for ( const [ lx, lz ] of [ [ - 18, 8 ], [ 18, 8 ], [ 0, - 10 ], [ - 22, - 12 ], [ 22, - 12 ], [ 0, 12 ] ] ) {

			const l = new THREE.PointLight( 0xfff1de, 44, 26, 1.6 );
			l.position.set( lx, h - 2.0, lz );
			group.add( l );
			lights.push( l );

		}

		const rooms = [ { id: 'lobby', theme: 'lobby', bounds: { x0: x0 + IN, x1: x1 - IN, z0: z0 + IN, z1: z1 - IN }, type: 'safe' }, { id: 'plaza', theme: 'plaza', bounds: { x0: - 70, x1: 70, z0: z1, z1: 62 }, type: 'safe' } ];
		return { index: 0, y, h, group, nav, rooms, doors: {}, elevators, lights, interact: [ { id: 'register', x: 0, z: 9.2, r: 3.2, prompt: '按 <b>E</b> 挂号（开始一局）' } ] };

	}

	// ------------------------------------------------------------------
	// 2F~4F
	// ------------------------------------------------------------------
	function buildFloor( index, layout ) {

		const y = levels[ index ], h = levels[ index + 1 ] - BAND - y;
		const group = new THREE.Group();
		group.name = 'floor' + index;
		const B = createBuckets();
		const nav = createNav( x0 - 1, x1 + 1, z0 - 1, z1 + 1, 0.5 );
		const P = createProps( B, nav, y );
		const rng = mulberry32( layout.seed * 31 + index );
		blockOutside( nav );
		// 每个房间的地面材质不同：先铺整层，再在房间里叠一块
		floorAndCeiling( B, y, h, 'vinyl', 4.5 );
		const rooms = {};
		const arrive = layout.arrive, depart = layout.depart;
		const order = { A: arrive, D: depart, B1: layout.b1, B2: layout.b2 };
		for ( const [ id, cell ] of Object.entries( order ) ) {

			const b = cellBounds( cell[ 0 ], cell[ 1 ] );
			const spec = layout.rooms[ id ];
			rooms[ id ] = { id, cell, bounds: b, ...spec };
			const fk = { kids: 'vinylKids', ct: 'vinylBlue', rehab: 'woodFloor', garden: 'woodFloor', shop: 'terrazzo', pharmacy: 'vinyl', lab: 'vinyl', consult: 'vinyl', waiting: 'terrazzo', hall: 'terrazzo', storage: 'vinylBlue' }[ spec.theme ] || 'vinyl';
			const fg = new THREE.PlaneGeometry( b.x1 - b.x0, b.z1 - b.z0 );
			fg.rotateX( - Math.PI / 2 );
			B.add( fk, fg, ( b.x0 + b.x1 ) / 2, y + 0.004, ( b.z0 + b.z1 ) / 2 );

		}

		// 隔墙：x = 0（南北向）和 z = 0（东西向），每段中间留门洞
		const gapsX = [ { c: - 10.75, w: 4.4 }, { c: 10.75, w: 4.4 } ];
		const gapsZ = [ { c: - 15.75, w: 4.4 }, { c: 15.75, w: 4.4 } ];
		wallSeg( B, nav, 0, z0 + 0.3, 0, z1 - 0.3, y, h, gapsX );
		wallSeg( B, nav, x0 + 0.3, 0, x1 - 0.3, 0, y, h, gapsZ );
		// 门：A-B1, A-B2, B1-D, B2-D
		const doors = {};
		const pairs = [ [ 'A', 'B1' ], [ 'A', 'B2' ], [ 'B1', 'D' ], [ 'B2', 'D' ] ];
		for ( const [ a, b ] of pairs ) {

			const d = doorBetween( rooms[ a ].cell, rooms[ b ].cell );
			const id = a + '-' + b;
			doors[ id ] = makeDoor( group, B, nav, id, d, y, rooms[ b ] );
			doors[ id ].from = a;
			doors[ id ].to = b;
			// 门头上的牌子：通往房间的名字和奖励
			const label = rooms[ b ].label || THEME_NAMES[ rooms[ b ].theme ];
			const off = 0.2;
			const ra = rooms[ a ].bounds;
			const toward = d.axis === 'x' ? Math.sign( ( ra.x0 + ra.x1 ) / 2 - d.x ) : Math.sign( ( ra.z0 + ra.z1 ) / 2 - d.z );
			const sx = d.axis === 'x' ? d.x + toward * off : d.x, sz = d.axis === 'x' ? d.z : d.z + toward * off;
			const rot = d.axis === 'x' ? ( toward > 0 ? Math.PI / 2 : - Math.PI / 2 ) : ( toward > 0 ? 0 : Math.PI );
			const sign = addSign( group, sx, y + 3.9, sz, rot, 3.6, 0.9, [ label, rooms[ b ].sub || '' ], { bg: rooms[ b ].color || '#1e6f5c', color: '#ffffff', glow: 0.9, subScale: 0.55 } );
			doors[ id ].sign = sign;

		}

		// 电梯：到达、出口
		const elevators = {};
		for ( const key of [ 'nw', 'se' ] ) elevators[ key ] = makeElevator( group, B, nav, key, y, index );
		// 房间家具
		for ( const r of Object.values( rooms ) ) {

			const doorsHere = Object.values( doors ).filter( ( d ) => d.from === r.id || d.to === r.id ).map( ( d ) => ( { x: d.x, z: d.z } ) );
			for ( const e of Object.values( elevators ) ) if ( e.doorX > r.bounds.x0 - 1 && e.doorX < r.bounds.x1 + 1 && e.doorZ > r.bounds.z0 - 1 && e.doorZ < r.bounds.z1 + 1 ) doorsHere.push( { x: e.doorX, z: e.doorZ } );
			furnish( P, r.bounds, r.theme, rng, doorsHere, B, y );
			// 房间牌（墙角）
			r.center = { x: ( r.bounds.x0 + r.bounds.x1 ) / 2, z: ( r.bounds.z0 + r.bounds.z1 ) / 2 };

		}

		finalize( group, B );
		const lights = [];
		for ( const r of Object.values( rooms ) ) {

			const warm = [ 'garden', 'rehab', 'shop', 'waiting', 'kids' ].includes( r.theme );
			for ( const fx of [ 0.3, 0.7 ] ) {

				const l = new THREE.PointLight( warm ? 0xffe9cc : 0xe9f3ff, 22, 18, 1.6 );
				l.position.set( r.bounds.x0 + ( r.bounds.x1 - r.bounds.x0 ) * fx, y + h - 1.4, r.center.z );
				group.add( l );
				lights.push( l );

			}

		}

		return { index, y, h, group, nav, rooms, doors, elevators, lights, layout };

	}

	// ------------------------------------------------------------------
	// 屋顶：Boss 场地
	// ------------------------------------------------------------------
	const ARENA = { x: 1, z: 9, r: 13.5 };
	function buildRoof() {

		const y = levels[ 4 ];
		const group = new THREE.Group();
		group.name = 'floor4';
		const B = createBuckets();
		const nav = createNav( x0 - 1, x1 + 1, z0 - 1, z1 + 1, 0.5 );
		nav.block.fill( 1 );
		// 圆形场地 + 从东南角电梯过来的小路
		for ( let j = 0; j < nav.H; j ++ ) {

			for ( let i = 0; i < nav.W; i ++ ) {

				const x = nav.x0 + ( i + 0.5 ) * nav.cell, z = nav.z0 + ( j + 0.5 ) * nav.cell;
				const inArena = Math.hypot( x - ARENA.x, z - ARENA.z ) < ARENA.r - 0.6;
				const path = x > 12 && x < 31 && z > 8 && z < 14;
				if ( inArena || path ) nav.block[ j * nav.W + i ] = 0;

			}

		}

		const disc = new THREE.CylinderGeometry( ARENA.r, ARENA.r, 0.3, 64 );
		B.add( 'terrazzo', disc, ARENA.x, y + 0.15, ARENA.z );
		B.add( 'metal', new THREE.TorusGeometry( ARENA.r, 0.08, 6, 96 ).rotateX( Math.PI / 2 ), ARENA.x, y + 0.32, ARENA.z );
		const pathG = new THREE.BoxGeometry( 19, 0.3, 6 );
		B.add( 'woodFloor', pathG, 21.5, y + 0.15, 11 );
		// 圆台边上一圈矮灯柱
		for ( let k = 0; k < 24; k ++ ) {

			const a = k / 24 * Math.PI * 2;
			B.add( 'lightPanel', new THREE.CylinderGeometry( 0.08, 0.08, 0.5, 8 ), ARENA.x + Math.cos( a ) * ( ARENA.r - 0.3 ), y + 0.55, ARENA.z + Math.sin( a ) * ( ARENA.r - 0.3 ) );

		}

		const elevators = { se: makeElevator( group, B, nav, 'se', y, 4 ) };
		finalize( group, B );
		const rooms = { BOSS: { id: 'BOSS', theme: 'roof', type: 'boss', bounds: { x0: ARENA.x - ARENA.r, x1: ARENA.x + ARENA.r, z0: ARENA.z - ARENA.r, z1: ARENA.z + ARENA.r }, center: { x: ARENA.x, z: ARENA.z } } };
		return { index: 4, y, h: 30, group, nav, rooms, doors: {}, elevators, lights: [], arena: ARENA };

	}

	function clearFloor( i ) {

		const f = floors[ i ];
		if ( ! f ) return;
		root.remove( f.group );
		f.group.traverse( ( o ) => {

			if ( o.geometry ) o.geometry.dispose();

		} );

	}

	// 每局开始时：按布局重建 2F~4F
	function rebuild( layouts ) {

		for ( let i = 1; i <= 3; i ++ ) {

			clearFloor( i );
			floors[ i ] = buildFloor( i, layouts[ i ] );
			root.add( floors[ i ].group );

		}

	}

	floors[ 0 ] = buildLobby();
	root.add( floors[ 0 ].group );
	floors[ 4 ] = buildRoof();
	root.add( floors[ 4 ].group );

	// 只开当前楼层的灯（别的楼层只有天花板灯带的自发光，外面看起来亮着就行）
	function setActive( i ) {

		floors.forEach( ( f, k ) => {

			if ( ! f ) return;
			for ( const l of f.lights ) l.visible = k === i;

		} );

	}

	// 门和电梯门的开合动画
	function update( dt ) {

		for ( const f of floors ) {

			if ( ! f ) continue;
			for ( const d of Object.values( f.doors ) ) {

				d.open += ( d.target - d.open ) * Math.min( 1, dt * 6 );
				for ( const leaf of d.leaves ) {

					const u = leaf.userData;
					leaf.position[ u.along ] = u.base[ u.along ] + u.s * d.open * 1.9;

				}

			}

			for ( const e of Object.values( f.elevators ) ) {

				e.open += ( e.target - e.open ) * Math.min( 1, dt * 4 );
				for ( const leaf of e.leaves ) leaf.position.x = leaf.userData.s * ( 0.625 + e.open * 1.2 );

			}

		}

	}

	return { root, floors, rebuild, setActive, update, M, ARENA, ROOM_THEMES };

}
