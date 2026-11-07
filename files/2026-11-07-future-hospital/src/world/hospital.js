import * as THREE from 'three';
import { HOSP } from '../config.js';
import { slab, rectPath, pathWall, along, box, cyl, merge, worldUV } from './geom.js';
import { facadeMaterial, glassMaterial, towerGlassMaterial, textTexture } from '../render/materials.js';

// ---------------------------------------------------------------------------
// 医院外观（参考图从左到右）：
//   B 红十字塔：圆角塔楼，白色横带 + 深色玻璃，南面一块白墙上挂红十字
//   A 主楼：能进去的四层（1F 大厅 + 2F~4F），每层一圈白色楼板外沿 + 玻璃幕墙，屋顶花园是 Boss 场地
//   C 顶部塔：主楼屋顶北侧，竖向肋片立面
//   D 东翼：高大的白色竖向鳍片，夕阳从鳍片之间透过来
//   E 悬挑屋顶：东翼顶上向东伸出去的薄板，下面垂着藤蔓
//   F 中层平台：西侧伸出去的长平台，上面种满树
//   G 坡下的小楼：一路往湖边低下去
// 返回需要种树、挂藤蔓的位置，交给 vegetation.js。
// ---------------------------------------------------------------------------

export function createHospital( env ) {

	const group = new THREE.Group();
	group.name = 'hospital';
	const M = {
		white: facadeMaterial( 0xf1ede6 ),
		whiteSmooth: facadeMaterial( 0xf4f1ec, { roughness: 0.38, dirt: 0.5 } ),
		glass: glassMaterial(),
		towerGlass: towerGlassMaterial( { floorH: 4.2, bay: 1.7 } ),
		ribGlass: towerGlassMaterial( { color: 0x4a5a63, floorH: 3.6, bay: 1.1 } ),
		mullion: new THREE.MeshStandardMaterial( { color: 0xcfd3d4, roughness: 0.35, metalness: 0.65 } ),
		red: new THREE.MeshStandardMaterial( { color: 0xd3221f, roughness: 0.42, emissive: 0xff2a14, emissiveIntensity: 0.35 } ),
		soil: new THREE.MeshStandardMaterial( { color: 0x3b4a2a, roughness: 0.95 } ),
		interiorDark: new THREE.MeshStandardMaterial( { color: 0x1a1d1f, roughness: 0.9 } ),
		ceilingLight: new THREE.MeshStandardMaterial( { color: 0xffffff, emissive: 0xfff1dd, emissiveIntensity: 2.2 } )
	};
	const geo = { white: [], whiteSmooth: [], glass: [], towerGlass: [], ribGlass: [], mullion: [], red: [], soil: [] };
	const plant = { trees: [], vines: [], shrubs: [] }; // 给 vegetation.js 的种植点

	const { x0, x1, z0, z1, levels } = HOSP;
	const R = 7;

	// ---------------- A 主楼 ----------------
	// 地坪和屋顶结构
	geo.white.push( slab( x0 - 0.8, x1 + 0.8, z0 - 0.8, z1 + 0.8, R + 0.8, - 0.6, 0.0, 0.1 ) );
	// 楼板外沿：一圈白色厚边（顶面比室内地面低 2 厘米，室内地面由 interior.js 铺），圆角，带小倒角
	const BAND = 1.25;
	for ( let i = 1; i < levels.length; i ++ ) {

		const y = levels[ i ];
		const roof = i === levels.length - 1;
		geo.white.push( slab( x0 - 0.9, x1 + 0.9, z0 - 0.9, z1 + 0.9, R + 0.9, y - BAND, roof ? y + 1.1 : y - 0.02, 0.14, roof ? [ x0 + 0.5, x1 - 0.5, z0 + 0.5, z1 - 0.5, R - 0.5 ] : null ) );

	}

	// 屋顶面（花园土层，上面铺草和树）
	geo.soil.push( slab( x0 + 0.5, x1 - 0.5, z0 + 0.5, z1 - 0.5, R - 0.5, levels[ 4 ] - 0.3, levels[ 4 ] - 0.01 ) );
	const path = rectPath( x0, x1, z0, z1, R, 0.4 );
	for ( let i = 0; i < levels.length - 1; i ++ ) {

		const ya = levels[ i ], yb = levels[ i + 1 ] - BAND;
		geo.glass.push( pathWall( path, ya, yb ) );
		// 竖梃：大厅 3 米一根粗的，楼上 1.6 米一根细的
		const sp = i === 0 ? 3.0 : 1.6;
		const w = i === 0 ? 0.16 : 0.07;
		along( path, sp, ( x, z, nx, nz ) => {

			const g = new THREE.BoxGeometry( w, yb - ya, 0.22 );
			g.rotateY( Math.atan2( nx, nz ) );
			g.translate( x + nx * 0.06, ( ya + yb ) / 2, z + nz * 0.06 );
			geo.mullion.push( g );

		} );
		// 每层中间一道横梃
		if ( i > 0 ) {

			const t = pathWall( path, ya + 1.05, ya + 1.12, 0, 1, 0.07 );
			geo.mullion.push( t );

		}

	}

	// 南立面的几块竖向白板，打破玻璃的单调（参考图主楼正面有大面积白墙）
	for ( const [ cx, w ] of [ [ - 20, 5.5 ], [ 9, 3.2 ], [ 23.5, 4.2 ] ] ) {

		geo.whiteSmooth.push( box( cx, ( levels[ 1 ] + levels[ 4 ] ) / 2, z1 + 0.55, w, levels[ 4 ] - levels[ 1 ] - 0.2, 1.0 ) );

	}

	// 正门雨棚：薄板悬挑，前缘圆弧
	geo.white.push( slab( - 13, 13, z1 + 0.5, z1 + 9, 3.5, 5.6, 6.2, 0.12 ) );
	for ( const cx of [ - 11, 11 ] ) geo.mullion.push( cyl( cx, 0, z1 + 7.8, 0.18, 0.18, 5.6, 12 ) );
	// 雨棚上的字
	const sign = new THREE.Mesh( new THREE.PlaneGeometry( 14, 1.6 ), new THREE.MeshStandardMaterial( {
		map: textTexture( '未来医院 · FUTURE HOSPITAL', { w: 1024, h: 118, bg: '#f4f1ec', color: '#1e6f5c', size: 74 } ), roughness: 0.5
	} ) );
	sign.position.set( 0, 5.9, z1 + 9.06 );
	group.add( sign );

	// ---------------- B 红十字塔 ----------------
	const bx0 = - 58, bx1 = - 32, bz0 = - 16, bz1 = 14, BR = 8, bTop = 67.2;
	const bPath = rectPath( bx0, bx1, bz0, bz1, BR, 0.5 );
	geo.white.push( slab( bx0 - 0.4, bx1 + 0.4, bz0 - 0.4, bz1 + 0.4, BR + 0.4, - 0.6, 0.6, 0.1 ) );
	for ( let y = 4.2; y < bTop; y += 4.2 ) {

		geo.white.push( slab( bx0 - 0.35, bx1 + 0.35, bz0 - 0.35, bz1 + 0.35, BR + 0.35, y - 0.55, y + 0.5, 0.1 ) );

	}

	geo.white.push( slab( bx0 - 0.5, bx1 + 0.5, bz0 - 0.5, bz1 + 0.5, BR + 0.5, bTop - 0.4, bTop + 1.4, 0.15 ) );
	geo.towerGlass.push( pathWall( bPath, 0.6, bTop - 0.4 ) );
	// 南面 + 东南面的白色实墙（红十字就挂在这里）
	const crossPanel = slab( bx0 + 9, bx1 + 0.45, bz1 - 6, bz1 + 0.45, 5.5, 33.6, bTop - 0.4, 0.1 );
	geo.whiteSmooth.push( crossPanel );
	// 红十字：两块圆角厚板交叉
	const cx = - 40.6, cy = 54, cz = bz1 + 0.5;
	for ( const [ w, h ] of [ [ 10, 3.4 ], [ 3.4, 10 ] ] ) {

		const s = new THREE.Shape();
		const rr = 0.5;
		s.moveTo( - w / 2 + rr, - h / 2 ); s.lineTo( w / 2 - rr, - h / 2 ); s.quadraticCurveTo( w / 2, - h / 2, w / 2, - h / 2 + rr );
		s.lineTo( w / 2, h / 2 - rr ); s.quadraticCurveTo( w / 2, h / 2, w / 2 - rr, h / 2 ); s.lineTo( - w / 2 + rr, h / 2 );
		s.quadraticCurveTo( - w / 2, h / 2, - w / 2, h / 2 - rr ); s.lineTo( - w / 2, - h / 2 + rr ); s.quadraticCurveTo( - w / 2, - h / 2, - w / 2 + rr, - h / 2 );
		const g = new THREE.ExtrudeGeometry( s, { depth: 0.35, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 2, curveSegments: 6 } );
		g.translate( cx, cy, cz );
		geo.red.push( g );

	}

	// 塔顶的树和垂下来的藤
	plant.trees.push( { x0: bx0 + 2, x1: bx1 - 2, z0: bz0 + 2, z1: bz1 - 2, y: bTop + 1.4, n: 12, s: 0.9 } );
	plant.vines.push( { ax: bx0 + 3, az: bz1 + 0.6, bx: bx0 + 12, bz: bz1 + 0.6, y: bTop + 0.6, len: [ 6, 18 ], n: 14, nx: 0, nz: 1 } );

	// ---------------- C 顶部塔（竖向肋片） ----------------
	const cX0 = - 14, cX1 = 12, cZ0 = - 20, cZ1 = - 4, cTop = 74;
	const cPath = rectPath( cX0, cX1, cZ0, cZ1, 3, 0.4 );
	geo.ribGlass.push( pathWall( cPath, levels[ 4 ], cTop ) );
	along( cPath, 1.05, ( x, z, nx, nz ) => {

		const g = new THREE.BoxGeometry( 0.26, cTop - levels[ 4 ], 0.9 );
		g.rotateY( Math.atan2( nx, nz ) );
		g.translate( x + nx * 0.45, ( levels[ 4 ] + cTop ) / 2, z + nz * 0.45 );
		geo.whiteSmooth.push( g );

	} );
	geo.white.push( slab( cX0 - 1.2, cX1 + 1.2, cZ0 - 1.2, cZ1 + 1.2, 4, cTop, cTop + 1.3, 0.12 ) );
	plant.trees.push( { x0: cX0, x1: cX1, z0: cZ0, z1: cZ1, y: cTop + 1.3, n: 9, s: 0.85 } );
	plant.vines.push( { ax: cX0 - 1, az: cZ1 + 1.3, bx: cX1 + 1, bz: cZ1 + 1.3, y: cTop + 0.8, len: [ 4, 14 ], n: 18, nx: 0, nz: 1 } );

	// ---------------- D 东翼（竖向鳍片） ----------------
	const dX0 = 33, dX1 = 52, dZ0 = - 18, dZ1 = 14, dTop = 52;
	const dPath = rectPath( dX0, dX1, dZ0, dZ1, 2, 0.4 );
	// 下面 24 米是有玻璃的楼，上面是镂空的鳍片柱廊：夕阳从鳍片缝里透过来（参考图右边那一片光）
	geo.towerGlass.push( pathWall( dPath, 0.0, 24 ) );
	geo.white.push( slab( dX0 - 0.3, dX1 + 0.3, dZ0 - 0.3, dZ1 + 0.3, 2.3, 23.6, 24.4, 0.1 ) );
	along( dPath, 2.3, ( x, z, nx, nz ) => {

		const g = new THREE.BoxGeometry( 0.55, dTop + 0.2, 2.3 );
		g.rotateY( Math.atan2( nx, nz ) );
		g.translate( x + nx * 1.15, dTop / 2, z + nz * 1.15 );
		geo.white.push( g );

	} );
	for ( let y = 8; y < 24; y += 8 ) geo.white.push( slab( dX0 - 0.2, dX1 + 0.2, dZ0 - 0.2, dZ1 + 0.2, 2.2, y - 0.4, y + 0.2 ) );

	// ---------------- E 悬挑屋顶 ----------------
	const eX0 = 22, eX1 = 76, eZ0 = - 24, eZ1 = 12;
	geo.white.push( slab( eX0, eX1, eZ0, eZ1, 4, dTop, dTop + 1.5, 0.2 ) );
	geo.soil.push( slab( eX0 + 1, eX1 - 1, eZ0 + 1, eZ1 - 1, 3, dTop + 1.5, dTop + 1.8 ) );
	// 斜撑
	for ( const zz of [ - 18, 6 ] ) {

		const g = new THREE.CylinderGeometry( 0.35, 0.35, 26, 10 );
		g.rotateZ( - 0.95 );
		g.translate( 63, dTop - 9, zz );
		geo.mullion.push( g );

	}

	plant.trees.push( { x0: eX0 + 3, x1: eX1 - 3, z0: eZ0 + 3, z1: eZ1 - 3, y: dTop + 1.8, n: 16, s: 1.0 } );
	plant.vines.push( { ax: eX0 + 8, az: eZ1 + 0.2, bx: eX1 - 2, bz: eZ1 + 0.2, y: dTop + 0.2, len: [ 5, 24 ], n: 34, nx: 0, nz: 1 } );
	plant.vines.push( { ax: eX1 + 0.2, az: eZ0 + 2, bx: eX1 + 0.2, bz: eZ1 - 2, y: dTop + 0.2, len: [ 4, 16 ], n: 18, nx: 1, nz: 0 } );

	// ---------------- F 中层平台（西侧） ----------------
	const fX0 = - 86, fX1 = - 30, fZ0 = 4, fZ1 = 30, fY = 15;
	geo.white.push( slab( fX0, fX1, fZ0, fZ1, 5, fY - 1.2, fY + 0.4, 0.2 ) );
	geo.soil.push( slab( fX0 + 1, fX1 - 1, fZ0 + 1, fZ1 - 1, 4, fY + 0.4, fY + 0.7 ) );
	for ( const [ px, pz ] of [ [ - 80, 26 ], [ - 64, 26 ], [ - 48, 26 ], [ - 80, 9 ], [ - 64, 9 ] ] ) geo.mullion.push( cyl( px, - 3, pz, 0.45, 0.45, fY - 1.2 + 3, 12 ) );
	plant.trees.push( { x0: fX0 + 3, x1: fX1 - 3, z0: fZ0 + 3, z1: fZ1 - 3, y: fY + 0.7, n: 26, s: 1.05 } );
	plant.vines.push( { ax: fX0 + 4, az: fZ1 + 0.2, bx: fX1 - 2, bz: fZ1 + 0.2, y: fY - 0.6, len: [ 3, 10 ], n: 30, nx: 0, nz: 1 } );

	// 主楼南立面挂一片垂直绿化（参考图中间那片垂下来的藤）
	plant.vines.push( { ax: - 9, az: z1 + 1.2, bx: 7, bz: z1 + 1.2, y: levels[ 4 ] + 1.0, len: [ 8, 21 ], n: 26, nx: 0, nz: 1 } );
	plant.vines.push( { ax: - 30, az: z1 - 2, bx: - 24, bz: z1 + 1.0, y: levels[ 4 ] + 1.0, len: [ 5, 14 ], n: 9, nx: - 0.4, nz: 0.9 } );
	for ( const yy of [ levels[ 2 ], levels[ 3 ] ] ) plant.vines.push( { ax: 10, az: z1 + 1.0, bx: 22, bz: z1 + 1.0, y: yy - 0.2, len: [ 1.5, 4.5 ], n: 10, nx: 0, nz: 1 } );
	plant.vines.push( { ax: 26, az: z1 + 1.0, bx: 31, bz: z1 - 3, y: levels[ 4 ] + 1.0, len: [ 6, 16 ], n: 8, nx: 0.6, nz: 0.8 } );
	// 主楼屋顶四周的树（中间留给 Boss 场地）
	plant.trees.push( { x0: x0 + 2, x1: x1 - 2, z0: z0 + 2, z1: z1 - 2, y: levels[ 4 ] + 0.25, n: 22, s: 0.9, avoid: { x: 1, z: 9, r: 14.5 }, avoidRect: [ cX0 - 1.5, cX1 + 1.5, cZ0 - 1.5, cZ1 + 1.5 ] } );

	// ---------------- G 坡下的小楼 ----------------
	const small = [
		[ - 78, - 56, 34, 50, 0, 7.5 ], [ - 52, - 38, 42, 56, - 1.5, 4.5 ], [ 40, 62, 30, 46, 0, 8 ],
		[ 66, 88, 18, 38, 0, 11 ], [ 92, 112, 28, 44, - 1, 6 ], [ - 104, - 84, 30, 46, 1, 9 ], [ 58, 76, - 52, - 30, 0, 14 ], [ - 72, - 50, - 52, - 30, 0, 12 ]
	];
	for ( const [ ax, bx, az, bz, y0, h ] of small ) {

		const p = rectPath( ax, bx, az, bz, 2.5, 0.5 );
		geo.white.push( slab( ax - 0.3, bx + 0.3, az - 0.3, bz + 0.3, 2.8, y0 - 1, y0 + 0.6, 0.08 ) );
		for ( let y = y0 + 3.6; y < y0 + h; y += 3.6 ) geo.white.push( slab( ax - 0.3, bx + 0.3, az - 0.3, bz + 0.3, 2.8, y - 0.4, y + 0.3, 0.08 ) );
		geo.white.push( slab( ax - 0.4, bx + 0.4, az - 0.4, bz + 0.4, 2.9, y0 + h - 0.2, y0 + h + 0.8, 0.12 ) );
		geo.towerGlass.push( pathWall( p, y0 + 0.6, y0 + h ) );
		plant.trees.push( { x0: ax + 1.5, x1: bx - 1.5, z0: az + 1.5, z1: bz - 1.5, y: y0 + h + 0.8, n: Math.round( ( bx - ax ) * ( bz - az ) / 70 ), s: 0.75 } );

	}

	// 不能种树的地方：楼的占地（加一点余量）、广场
	const footprints = [
		[ x0 - 3, x1 + 3, z0 - 3, z1 + 12 ], [ bx0 - 3, bx1 + 3, bz0 - 3, bz1 + 3 ], [ dX0 - 4, dX1 + 4, dZ0 - 4, dZ1 + 4 ],
		[ fX0 - 2, fX1 + 2, fZ0 - 2, fZ1 + 2 ], [ - 72, 72, 20, 62 ],
		...small.map( ( [ ax, bx, az, bz ] ) => [ ax - 2.5, bx + 2.5, az - 2.5, bz + 2.5 ] )
	];

	// 合并成每种材质一个网格
	for ( const [ k, list ] of Object.entries( geo ) ) {

		if ( ! list.length ) continue;
		const g = merge( list );
		g.computeBoundingSphere();
		const mesh = new THREE.Mesh( g, M[ k ] );
		mesh.name = 'hosp_' + k;
		mesh.castShadow = k !== 'glass';
		mesh.receiveShadow = true;
		if ( k === 'glass' ) mesh.renderOrder = 2;
		group.add( mesh );

	}

	const isBuilt = ( x, z, m = 0 ) => footprints.some( ( [ a, b, c, d ] ) => x > a - m && x < b + m && z > c - m && z < d + m );
	return { group, M, plant, footprints, isBuilt };

}
