import * as THREE from 'three';
import { NOISE } from './glsl.js';
import { L } from './layout.js';
import { hangingVines } from './vegetation.js';

// ---------------------------------------------------------------------------
// 主体建筑：右边的空中花园塔、左边的第二座花园塔、正中的玻璃巨塔和圆环门。
// ---------------------------------------------------------------------------

// 白色塔身：按“绕塔轴的角度 × 高度”画出面板缝、横向窗带
function panelMaterial( axis, opts = {} ) {

	const mat = new THREE.MeshStandardMaterial( { color: opts.color ?? 0xe9e6de, roughness: 0.42, metalness: 0.0, envMapIntensity: 1.0 } );
	const U = { uAxis: { value: new THREE.Vector2( axis.x, axis.z ) } };
	const bands = ( opts.bands ?? 0.35 ).toFixed( 3 );
	const floorH = ( opts.floorH ?? 5.0 ).toFixed( 2 );
	mat.onBeforeCompile = ( sh ) => {

		Object.assign( sh.uniforms, U );
		sh.fragmentShader = sh.fragmentShader
			.replace( '#include <common>', `#include <common>\nuniform vec2 uAxis;\n${ NOISE }` )
			.replace( '#include <color_fragment>', /* glsl */ `
				#include <color_fragment>
				vec3 tp = vFogWorldPos;
				vec2 rel = tp.xz - uAxis;
				float ang = atan( rel.y, rel.x );
				float rad = length( rel );
				vec2 f = vec2( ang * 30.0 / 6.0, tp.y / ${ floorH } );
				vec2 g = fract( f );
				vec2 fw = fwidth( f ) + 1e-4;
				float lod = smoothstep( 0.3, 0.7, max( fw.x, fw.y ) );
				float seam = max( 1.0 - smoothstep( 0.0, 0.04 + fw.x, g.x ), 1.0 - smoothstep( 0.0, 0.05 + fw.y, g.y ) );
				// 一部分楼层是通长的玻璃窗带
				float band = step( hash11( floor( f.y ) * 1.37 + uAxis.x * 0.013 ), ${ bands } );
				float win = band * smoothstep( 0.25, 0.3, g.y ) * ( 1.0 - smoothstep( 0.82, 0.87, g.y ) );
				win = mix( win, ${ bands } * 0.55, lod );
				vec3 c = mix( vec3( 1.0 ), vec3( 0.12, 0.16, 0.2 ), win );
				c *= 1.0 - 0.18 * seam * ( 1.0 - lod );
				c *= 0.93 + 0.07 * hash12( floor( f ) );
				diffuseColor.rgb *= c;
				float tRough = mix( 0.42, 0.1, win );
				float tMetal = win * 0.8;
			` )
			.replace( '#include <roughnessmap_fragment>', 'float roughnessFactor = tRough;' )
			.replace( '#include <metalnessmap_fragment>', 'float metalnessFactor = tMetal;' );

	};

	mat.customProgramCacheKey = () => 'panel-' + bands + '-' + floorH;
	return mat;

}

// 玻璃幕墙：竖向铝框 + 楼层线，反射天空
function glassMaterial() {

	const mat = new THREE.MeshStandardMaterial( { color: 0x1f3d66, roughness: 0.1, metalness: 0.9, envMapIntensity: 0.6 } );
	mat.onBeforeCompile = ( sh ) => {

		sh.fragmentShader = sh.fragmentShader
			.replace( '#include <common>', `#include <common>\n${ NOISE }` )
			.replace( '#include <color_fragment>', /* glsl */ `
				#include <color_fragment>
				vec3 gp = vFogWorldPos;
				vec2 f = vec2( ( gp.x + gp.z ) / 3.0, gp.y / 4.2 );
				float rib = 1.0 - smoothstep( 0.0, 0.05 + fwidth( ( gp.x + gp.z ) / 18.0 ), fract( ( gp.x + gp.z ) / 18.0 ) );
				vec2 g = fract( f );
				vec2 fw = fwidth( f ) + 1e-4;
				float lod = smoothstep( 0.3, 0.7, max( fw.x, fw.y ) );
				float mull = max( 1.0 - smoothstep( 0.0, 0.08 + fw.x, g.x ), 1.0 - smoothstep( 0.0, 0.06 + fw.y, g.y ) );
				mull = mix( mull, 0.12, lod );
				mull = max( mull, rib * 0.9 );
				float panel = 0.9 + 0.2 * hash12( floor( f ) );
				diffuseColor.rgb = mix( diffuseColor.rgb * panel, vec3( 0.85, 0.87, 0.9 ), mull );
				float gRough = mix( 0.05, 0.4, mull );
				float gMetal = mix( 0.92, 0.2, mull );
			` )
			.replace( '#include <roughnessmap_fragment>', 'float roughnessFactor = gRough;' )
			.replace( '#include <metalnessmap_fragment>', 'float metalnessFactor = gMetal;' );

	};

	mat.customProgramCacheKey = () => 'glass';
	return mat;

}

const copper = () => new THREE.MeshStandardMaterial( { color: 0xb8622a, roughness: 0.38, metalness: 0.65 } );
const soil = () => new THREE.MeshStandardMaterial( { color: 0x2c2a1c, roughness: 1 } );

function cyl( r0, r1, h, seg = 48, open = false ) {

	const g = new THREE.CylinderGeometry( r1, r0, h, seg, 1, open );
	g.translate( 0, h / 2, 0 );
	return g;

}

function add( group, geo, mat, x, y, z, shadow = true ) {

	const m = new THREE.Mesh( geo, mat );
	m.position.set( x, y, z );
	m.castShadow = shadow;
	m.receiveShadow = shadow;
	group.add( m );
	return m;

}

// 碟形平台：下面是向下收的曲面，边缘一圈白色挑檐（带窗），顶面是种植土
function disc( group, x, y, z, R, coreR, mats, depth = 45 ) {

	const pts = [];
	for ( let i = 0; i <= 24; i ++ ) {

		const t = i / 24;
		const r = coreR + ( R - 6 - coreR ) * Math.pow( t, 0.55 );
		pts.push( new THREE.Vector2( r, - depth + depth * ( 1 - Math.pow( 1 - t, 2.2 ) ) - 6 ) );

	}

	add( group, new THREE.LatheGeometry( pts, 96 ), mats.white, x, y, z );
	add( group, cyl( R - 6, R, 6, 128, true ), mats.rim, x, y - 6, z );
	add( group, cyl( R, R, 2.2, 128, true ), mats.white, x, y - 0.4, z );
	const top = new THREE.CircleGeometry( R - 1, 96 );
	top.rotateX( - Math.PI / 2 );
	add( group, top, mats.soil, x, y + 0.3, z, true );
	const lip = new THREE.TorusGeometry( R, 1.4, 8, 160 );
	lip.rotateX( Math.PI / 2 );
	add( group, lip, mats.white, x, y + 1.6, z );

}

// 在圆盘上种一片森林：大树 + 灌木，边缘垂下藤蔓
function discGarden( foliage, blobs, cx, cy, cz, R, rng, density, opts = {} ) {

	const center = new THREE.Vector3( cx, cy, cz );
	const clear = opts.clear || 0;
	const canopy = opts.canopy ?? 900;
	for ( let i = 0; i < canopy; i ++ ) {

		const a = rng() * Math.PI * 2;
		const r = Math.sqrt( rng() ) * ( R - 6 );
		if ( r < clear * 0.9 ) continue;
		const mound = ( opts.mound ?? 30 ) * Math.pow( 1 - r / R, 0.8 );
		const s = 5 + rng() * 7;
		blobs.push( [ cx + Math.cos( a ) * r, cy + mound * ( 0.4 + rng() * 0.6 ) + s * 0.3, cz + Math.sin( a ) * r, s ] );

	}

	for ( let i = 0; i < density; i ++ ) {

		const a = rng() * Math.PI * 2;
		const r = Math.sqrt( rng() ) * ( R - 8 );
		if ( r < clear && rng() < 0.85 ) continue;
		const p = new THREE.Vector3( cx + Math.cos( a ) * r, cy, cz + Math.sin( a ) * r );
		const h = 14 + rng() * 22 + ( r < R * 0.5 ? 12 * rng() : 0 );
		if ( opts.cards !== false && rng() < ( opts.cardTreeRatio ?? 0.5 ) ) {

			foliage.tree( p, h, rng, { cardsPerClump: 16, cardSize: 3.4, branches: 5, tint: new THREE.Color( 0.85, 0.95, 0.75 ) } );

		} else {

			const s = h * 0.32;
			blobs.push( [ p.x, cy + h * 0.45, p.z, s ] );
			blobs.push( [ p.x + ( rng() - 0.5 ) * s, cy + h * 0.65, p.z + ( rng() - 0.5 ) * s, s * 0.8 ] );

		}

	}

	// 边缘的矮灌木和藤蔓
	const rimPts = [];
	const nRim = Math.round( R * 0.9 );
	for ( let i = 0; i < nRim; i ++ ) {

		const a = ( i / nRim ) * Math.PI * 2 + rng() * 0.05;
		const p = new THREE.Vector3( cx + Math.cos( a ) * ( R - 2 ), cy, cz + Math.sin( a ) * ( R - 2 ) );
		blobs.push( [ p.x, cy - 1, p.z, 3 + rng() * 3 ] );
		if ( rng() < 0.55 ) rimPts.push( p.clone().setY( cy - 3 ) );

	}

	hangingVines( foliage, rimPts, rng, { center, len: opts.vineLen || 34, size: 3.0 } );

}

export function createTowers( foliage, rng, Q ) {

	const group = new THREE.Group();
	const blobs = [];
	const cop = copper();
	const sl = soil();
	const glass = glassMaterial();

	// ---------------- 右边的空中花园塔 ----------------
	{

		const { x, z, discY, discR } = L.rightTower;
		const ax = { x, z };
		const white = panelMaterial( ax, { bands: 0.25 } );
		const rim = panelMaterial( ax, { bands: 0.9, floorH: 3.0 } );
		const mats = { white, rim, soil: sl };
		const coreR = 34;
		add( group, cyl( 24, 24, 230 ), white, x, 0, z );
		add( group, cyl( 28, coreR, 30, 48 ), white, x, 200, z );
		add( group, cyl( coreR, coreR, discY - 230 ), white, x, 230, z, true );
		// 平台下方的机械层：一圈小圆柱和橙色面板（参考图里平台下面那一截）
		for ( let i = 0; i < 7; i ++ ) {

			const a = ( i / 7 ) * Math.PI * 2 + 0.4;
			const r = coreR + 5 + rng() * 3;
			const y0 = 230 + rng() * 40;
			const h = discY - 34 - y0;
			add( group, cyl( 7 + rng() * 4, 7 + rng() * 4, h, 24 ), white, x + Math.cos( a ) * r, y0, z + Math.sin( a ) * r, true );
			add( group, cyl( 9.5, 9.5, 2.5, 24 ), cop, x + Math.cos( a ) * r, y0 + h * ( 0.3 + rng() * 0.4 ), z + Math.sin( a ) * r );

		}

		for ( let i = 0; i < 5; i ++ ) {

			const a = - 0.9 + i * 0.32;
			const box = new THREE.BoxGeometry( 10, 26 + rng() * 14, 2.2 );
			const m = add( group, box, cop, x + Math.cos( a ) * ( coreR + 16 ), 300 + rng() * 25, z + Math.sin( a ) * ( coreR + 16 ) );
			m.rotation.y = - a + Math.PI / 2;

		}

		// 铜色环带
		for ( const yy of [ 240, 282, discY - 52 ] ) add( group, cyl( coreR + 1.5, coreR + 1.5, 4, 64 ), cop, x, yy, z );
		disc( group, x, discY, z, discR, coreR, mats, 46 );
		// 平台上方：被植物包裹的塔身，再往上是白色圆柱模块
		const upperH = 140;
		add( group, cyl( coreR - 4, coreR - 6, upperH, 48 ), white, x, discY, z, true );
		for ( let i = 0; i < 520; i ++ ) {

			const a = rng() * Math.PI * 2;
			const k = Math.pow( rng(), 1.6 );
			const yy = discY + k * upperH * 1.05;
			const r = coreR - 5 + rng() * 2;
			blobs.push( [ x + Math.cos( a ) * r, yy, z + Math.sin( a ) * r, ( 3 + rng() * 4 ) * ( 1.3 - k * 0.7 ) ] );

		}

		const topY = discY + upperH;
		const mods = [ [ 0, 0, 26, 760 ], [ 20, 14, 14, 640 ], [ - 18, 16, 15, 560 ], [ 6, - 24, 13, 700 ], [ - 26, - 6, 11, 470 ] ];
		for ( const [ dx, dz, r, h ] of mods ) {

			add( group, cyl( r, r * 0.92, h, 40 ), white, x + dx, topY, z + dz );
			for ( let k = 0; k < 6; k ++ ) add( group, cyl( r + 0.8, r + 0.8, 3, 40 ), cop, x + dx, topY + 30 + k * h / 6.5 + rng() * 20, z + dz );
			add( group, cyl( r * 0.92, 2, 30, 24 ), white, x + dx, topY + h, z + dz );

		}

		// 竖向铜管
		for ( let i = 0; i < 6; i ++ ) {

			const a = rng() * Math.PI * 2;
			add( group, cyl( 1.6, 1.6, 300 + rng() * 300, 8 ), cop, x + Math.cos( a ) * 28, topY, z + Math.sin( a ) * 28 );

		}

		discGarden( foliage, blobs, x, discY, z, discR, rng, Math.round( Q.discTrees * 1.6 ), { clear: 40, vineLen: 46, cardTreeRatio: 0.8, canopy: 1100, mound: 30 } );

	}

	// ---------------- 左边的花园塔 ----------------
	{

		const { x, z, discY, discR } = L.leftTower;
		const ax = { x, z };
		const white = panelMaterial( ax, { bands: 0.3 } );
		const rim = panelMaterial( ax, { bands: 0.9, floorH: 3.0 } );
		const mats = { white, rim, soil: sl };
		const r = 26;
		add( group, cyl( r + 6, r, discY - 40 ), white, x, 0, z );
		for ( const yy of [ discY - 120, discY - 95, discY - 70 ] ) add( group, cyl( r + 3, r + 3, 9, 48 ), cop, x, yy, z );
		disc( group, x, discY, z, discR, r, mats, 40 );
		const shaftH = 1500;
		add( group, cyl( r, r * 0.8, shaftH, 48 ), white, x, discY, z );
		add( group, cyl( r * 1.35, r * 1.35, 160, 48 ), white, x, discY + 520, z );
		add( group, cyl( r * 1.36, r * 1.36, 4, 48 ), cop, x, discY + 600, z );
		add( group, cyl( 6, 0.5, 220, 12 ), white, x, discY + shaftH, z );
		// 盘上的一团绿植（参考图里像一座小山）
		for ( let i = 0; i < 160; i ++ ) {

			const a = rng() * Math.PI * 2;
			const rr = Math.sqrt( rng() ) * ( discR - 10 );
			const hh = ( 1 - rr / discR ) * 40;
			blobs.push( [ x + Math.cos( a ) * rr, discY + hh * rng(), z + Math.sin( a ) * rr, 8 + rng() * 10 ] );

		}

		discGarden( foliage, blobs, x, discY, z, discR, rng, Math.round( Q.discTrees * 0.3 ), { cards: false, vineLen: 26, canopy: 700, mound: 38 } );

	}

	// ---------------- 玻璃巨塔 + 圆环门 ----------------
	{

		const { x, z, width, height } = L.mega;
		const ring = L.ring;
		const white = panelMaterial( { x, z }, { bands: 0.5 } );
		// 基座：几层退台，台面上是绿化
		const podH = ring.center.y - ring.radius + 6;
		const pod = [ [ 760, 520, podH * 0.55 ], [ 560, 420, podH * 0.8 ], [ 430, 330, podH ] ];
		for ( const [ w, d, h ] of pod ) {

			add( group, new THREE.BoxGeometry( w, h, d ).translate( 0, h / 2, 0 ), white, x, 0, z + 60 );
			for ( let i = 0; i < w / 14; i ++ ) blobs.push( [ x - w / 2 + 7 + i * 14 + ( rng() - 0.5 ) * 6, h + 2, z + 60 + d / 2 - 6, 6 + rng() * 3 ] );

		}

		// 主塔：三段退台的玻璃板楼
		const tiers = [ [ width, 150, height * 0.62 ], [ width * 0.82, 130, height * 0.86 ], [ width * 0.6, 110, height ] ];
		for ( const [ w, d, h ] of tiers ) add( group, new THREE.BoxGeometry( w, h, d ).translate( 0, h / 2, 0 ), glass, x, 0, z );
		// 两侧的副楼
		add( group, new THREE.BoxGeometry( 120, 1180, 110 ).translate( 0, 590, 0 ), glass, x + width * 0.62, 0, z + 30 );
		add( group, cyl( 34, 28, 980, 40 ), white, x - width * 0.6, 0, z + 20 );
		add( group, new THREE.BoxGeometry( 18, 560, 60 ).translate( 0, 280, 0 ), white, x - width * 0.45, podH, z + 90 );
		// 塔顶天线
		add( group, cyl( 8, 1, 260, 12 ), white, x, height, z );

		// 圆环：带矩形截面的环，内侧再套两道细环
		const shape = new THREE.Shape();
		shape.absarc( 0, 0, ring.radius, 0, Math.PI * 2, false );
		const hole = new THREE.Path();
		hole.absarc( 0, 0, ring.radius - ring.tube, 0, Math.PI * 2, true );
		shape.holes.push( hole );
		const rg = new THREE.ExtrudeGeometry( shape, { depth: 44, bevelEnabled: true, bevelSize: 3, bevelThickness: 3, curveSegments: 96 } );
		rg.translate( 0, 0, - 22 );
		const ringMat = panelMaterial( { x: ring.center.x, z: ring.center.z }, { bands: 0.15, color: 0xf2efe8 } );
		add( group, rg, ringMat, ring.center.x, ring.center.y, ring.center.z );
		for ( const [ rr, tt, off ] of [ [ ring.radius - ring.tube - 10, 2.5, 6 ], [ ring.radius - ring.tube - 22, 1.5, - 8 ] ] ) {

			const t = new THREE.TorusGeometry( rr, tt, 8, 120 );
			add( group, t, ringMat, ring.center.x, ring.center.y, ring.center.z + off );

		}

		// 环内的一道横向连廊
		add( group, new THREE.BoxGeometry( ( ring.radius - ring.tube ) * 1.6, 6, 18 ), ringMat, ring.center.x, ring.center.y - ring.radius * 0.45, ring.center.z );

	}

	return { group, blobs };

}
