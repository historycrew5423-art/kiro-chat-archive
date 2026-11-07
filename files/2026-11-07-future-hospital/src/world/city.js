import * as THREE from 'three';
import { mulberry32 } from '../core/rng.js';
import { towerGlassMaterial, facadeMaterial } from '../render/materials.js';
import { merge } from './geom.js';
import { TITLE_CAM } from '../config.js';

// ---------------------------------------------------------------------------
// 远处的城市：开场镜头右侧地平线上的一片塔楼（参考图右边），加几座地标塔（高高的锥形塔、蘑菇形的圆盘塔）。
// 距离 1.5~5 公里，靠空气透视变成发蓝的剪影。左侧远处再放一排低矮的城市。
// 飞行器：几架小飞机沿圆形航线慢慢飞，机身带灯。
// ---------------------------------------------------------------------------

export function createCity() {

	const group = new THREE.Group();
	group.name = 'city';
	const rng = mulberry32( 77 );
	const glass = towerGlassMaterial( { color: 0x6f7e88, floorH: 4.0, bay: 3.2 } );
	const white = facadeMaterial( 0xdcd8d2, { dirt: 0.3 } );
	const boxes = [], whites = [];
	const cam = TITLE_CAM.pos;
	const f = TITLE_CAM.look.clone().sub( cam ).setY( 0 ).normalize();
	const r = new THREE.Vector3( - f.z, 0, f.x );
	const at = ( deg, dist ) => {

		const a = THREE.MathUtils.degToRad( deg );
		return new THREE.Vector3( cam.x + ( f.x * Math.cos( a ) + r.x * Math.sin( a ) ) * dist, 0, cam.z + ( f.z * Math.cos( a ) + r.z * Math.sin( a ) ) * dist );

	};

	// 右侧主城区
	for ( let i = 0; i < 260; i ++ ) {

		const deg = rng.range( 6, 40 ), dist = rng.range( 1300, 5200 );
		const p = at( deg, dist );
		const h = rng.range( 18, 55 ) * ( 1 + Math.max( 0, 1 - Math.abs( deg - 20 ) / 14 ) * 1.3 ) * ( dist / 2500 );
		const w = rng.range( 26, 60 ), d = rng.range( 26, 60 );
		const g = new THREE.BoxGeometry( w, h, d );
		g.translate( p.x, h / 2 - 4, p.z );
		( rng() < 0.3 ? whites : boxes ).push( g );
		// 一部分楼顶再叠一节细一点的
		if ( rng() < 0.35 ) {

			const h2 = h * rng.range( 0.2, 0.5 );
			const g2 = new THREE.BoxGeometry( w * 0.6, h2, d * 0.6 );
			g2.translate( p.x, h - 4 + h2 / 2, p.z );
			boxes.push( g2 );

		}

	}

	// 左侧远处的低矮城区（湖湾对岸）
	for ( let i = 0; i < 120; i ++ ) {

		const p = at( rng.range( - 42, - 18 ), rng.range( 2600, 5600 ) );
		const h = rng.range( 12, 45 );
		const g = new THREE.BoxGeometry( rng.range( 30, 70 ), h, rng.range( 30, 70 ) );
		g.translate( p.x, h / 2 - 4, p.z );
		( rng() < 0.4 ? whites : boxes ).push( g );

	}

	group.add( new THREE.Mesh( merge( boxes ), glass ) );
	group.add( new THREE.Mesh( merge( whites ), white ) );

	// 地标 1：细高的锥形塔（参考图最右边）
	const lathe = ( pts, x, z, mat ) => {

		const g = new THREE.LatheGeometry( pts.map( ( [ a, b ] ) => new THREE.Vector2( a, b ) ), 40 );
		g.translate( x, - 4, z );
		const m = new THREE.Mesh( g, mat );
		group.add( m );
		return m;

	};

	let p = at( 27, 2300 );
	lathe( [ [ 0, 0 ], [ 30, 0 ], [ 26, 40 ], [ 19, 120 ], [ 13, 190 ], [ 9, 240 ], [ 6, 262 ], [ 2, 290 ], [ 0, 290 ] ], p.x, p.z, white );
	// 地标 2：蘑菇形圆盘塔
	p = at( 33, 2900 );
	lathe( [ [ 0, 0 ], [ 10, 0 ], [ 8, 80 ], [ 7, 150 ], [ 24, 160 ], [ 46, 168 ], [ 49, 173 ], [ 36, 180 ], [ 6, 185 ], [ 0, 186 ] ], p.x, p.z, white );
	// 地标 3：分段收窄的塔
	p = at( 15, 3400 );
	lathe( [ [ 0, 0 ], [ 30, 0 ], [ 30, 90 ], [ 23, 98 ], [ 23, 160 ], [ 15, 168 ], [ 15, 210 ], [ 5, 230 ], [ 0, 230 ] ], p.x, p.z, glass );
	p = at( 21, 1900 );
	lathe( [ [ 0, 0 ], [ 16, 0 ], [ 17, 60 ], [ 13, 110 ], [ 8, 140 ], [ 0, 144 ] ], p.x, p.z, white );
	// 右边远处的长桥
	{

		const a = at( 30, 1500 ), b = at( 12, 2600 );
		const len = a.distanceTo( b );
		const g = new THREE.BoxGeometry( 14, 4, len );
		g.lookAt( new THREE.Vector3().subVectors( b, a ) );
		g.translate( ( a.x + b.x ) / 2, 18, ( a.z + b.z ) / 2 );
		group.add( new THREE.Mesh( g, white ) );

	}

	// 飞行器
	const flyers = [];
	const bodyMat = new THREE.MeshStandardMaterial( { color: 0xe9ecef, roughness: 0.3, metalness: 0.4 } );
	const lightMat = new THREE.MeshStandardMaterial( { color: 0x222222, emissive: 0xfff2d6, emissiveIntensity: 6 } );
	const flyerGeo = merge( [
		new THREE.CapsuleGeometry( 0.9, 3.2, 4, 10 ).rotateZ( Math.PI / 2 ),
		new THREE.BoxGeometry( 1.4, 0.18, 6.5 ).translate( - 0.2, 0.1, 0 ),
		new THREE.BoxGeometry( 0.8, 1.2, 0.15 ).translate( - 2.0, 0.7, 0 )
	] );
	const lampGeo = new THREE.SphereGeometry( 0.22, 8, 6 );
	const routes = [
		{ c: new THREE.Vector3( - 120, 95, 80 ), r: 260, speed: 0.035, phase: 1.2, tilt: 0.12 },
		{ c: new THREE.Vector3( - 60, 120, - 40 ), r: 340, speed: - 0.028, phase: 3.6, tilt: - 0.1 },
		{ c: new THREE.Vector3( 200, 80, - 100 ), r: 300, speed: 0.04, phase: 0.2, tilt: 0.08 },
		{ c: new THREE.Vector3( 500, 140, - 300 ), r: 500, speed: 0.022, phase: 5.0, tilt: 0.05 }
	];
	for ( const rt of routes ) {

		const fly = new THREE.Group();
		const b = new THREE.Mesh( flyerGeo, bodyMat );
		b.castShadow = true;
		fly.add( b );
		for ( const z of [ - 3.1, 3.1 ] ) {

			const l = new THREE.Mesh( lampGeo, lightMat );
			l.position.set( - 0.2, 0.1, z );
			fly.add( l );

		}

		fly.scale.setScalar( 1.6 );
		group.add( fly );
		flyers.push( { fly, ...rt } );

	}

	function update( t ) {

		for ( const f of flyers ) {

			const a = f.phase + t * f.speed;
			f.fly.position.set( f.c.x + Math.cos( a ) * f.r, f.c.y + Math.sin( a * 2.3 ) * 6, f.c.z + Math.sin( a ) * f.r );
			// 机头朝飞行方向
			const s = Math.sign( f.speed );
			f.fly.rotation.set( 0, - a - s * Math.PI / 2 + Math.PI, s * f.tilt );

		}

	}

	return { group, update };

}
