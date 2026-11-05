import * as THREE from 'three';

// ---------------------------------------------------------------------------
// 天上飞的：参考图左上角那架金色的有翼飞行器，和远处几只小飞行物。
// ---------------------------------------------------------------------------

function goldenCraft() {

	const g = new THREE.Group();
	const gold = new THREE.MeshStandardMaterial( { color: 0xb88a3a, roughness: 0.28, metalness: 0.85 } );
	const dark = new THREE.MeshStandardMaterial( { color: 0x2a2620, roughness: 0.4, metalness: 0.5 } );
	// 机身：头尖尾细
	const pts = [];
	for ( let i = 0; i <= 20; i ++ ) {

		const t = i / 20;
		pts.push( new THREE.Vector2( Math.sin( Math.pow( t, 0.7 ) * Math.PI ) * 2.4 * ( 1 - t * 0.5 ), t * 30 - 15 ) );

	}

	const body = new THREE.Mesh( new THREE.LatheGeometry( pts, 18 ), gold );
	body.rotation.x = Math.PI / 2;
	g.add( body );
	// 后掠翼：像鸟翅膀一样外段上扬
	const wingShape = new THREE.Shape();
	wingShape.moveTo( 0, 4 );
	wingShape.bezierCurveTo( 8, 3, 18, - 1, 26, - 7 );
	wingShape.lineTo( 23, - 8.5 );
	wingShape.bezierCurveTo( 15, - 5, 7, - 4, 0, - 6 );
	wingShape.lineTo( 0, 4 );
	const wg = new THREE.ExtrudeGeometry( wingShape, { depth: 0.5, bevelEnabled: false } );
	wg.rotateX( - Math.PI / 2 );
	for ( const s of [ 1, - 1 ] ) {

		const w = new THREE.Mesh( wg, gold );
		w.scale.x = s;
		w.rotation.z = s * 0.12;
		g.add( w );
		const tip = new THREE.Mesh( new THREE.BoxGeometry( 6, 0.3, 2 ), dark );
		tip.position.set( s * 24, 1.6, 7 );
		tip.rotation.z = s * 0.5;
		g.add( tip );

	}

	const tail = new THREE.Mesh( new THREE.BoxGeometry( 8, 0.3, 4 ), gold );
	tail.position.set( 0, 0.3, 14 );
	g.add( tail );
	const fin = new THREE.Mesh( new THREE.BoxGeometry( 0.3, 4, 4 ), gold );
	fin.position.set( 0, 2, 13 );
	g.add( fin );
	const canopy = new THREE.Mesh( new THREE.SphereGeometry( 1.6, 12, 8 ), new THREE.MeshStandardMaterial( { color: 0x101820, roughness: 0.05, metalness: 0.9 } ) );
	canopy.scale.set( 1, 0.7, 2.2 );
	canopy.position.set( 0, 1.4, - 8 );
	g.add( canopy );
	return g;

}

export function createFlyers( start, rng ) {

	const group = new THREE.Group();
	const craft = goldenCraft();
	craft.scale.setScalar( 1.0 );
	group.add( craft );
	// 绕着城市飞一大圈；t=0 时正好在参考图里的位置
	const center = new THREE.Vector3( start.x + 900, start.y, start.z - 900 );
	const R = Math.hypot( start.x - center.x, start.z - center.z );
	const a0 = Math.atan2( start.z - center.z, start.x - center.x );

	const small = [];
	const sGeo = new THREE.ConeGeometry( 1.2, 5, 6 );
	sGeo.rotateX( Math.PI / 2 );
	const sMat = new THREE.MeshStandardMaterial( { color: 0x8f8a80, roughness: 0.4, metalness: 0.6 } );
	for ( let i = 0; i < 9; i ++ ) {

		const m = new THREE.Mesh( sGeo, sMat );
		m.scale.setScalar( 1.5 + rng() * 2 );
		group.add( m );
		small.push( { m, c: new THREE.Vector3( ( rng() - 0.5 ) * 2400, 300 + rng() * 400, - 600 - rng() * 2600 ), r: 150 + rng() * 500, w: ( 0.02 + rng() * 0.03 ) * ( rng() < 0.5 ? 1 : - 1 ), a: rng() * 6.28 } );

	}

	function update( t ) {

		const a = a0 - t * 0.012;
		const p = new THREE.Vector3( center.x + Math.cos( a ) * R, start.y + Math.sin( t * 0.05 ) * 20, center.z + Math.sin( a ) * R );
		const ahead = new THREE.Vector3( center.x + Math.cos( a - 0.01 ) * R, p.y, center.z + Math.sin( a - 0.01 ) * R );
		craft.position.copy( p );
		craft.lookAt( ahead );
		craft.rotateY( Math.PI );
		craft.rotateZ( 0.25 );
		for ( const s of small ) {

			const b = s.a + t * s.w;
			s.m.position.set( s.c.x + Math.cos( b ) * s.r, s.c.y + Math.sin( t * 0.3 + s.a ) * 10, s.c.z + Math.sin( b ) * s.r );
			s.m.lookAt( s.c.x + Math.cos( b + Math.sign( s.w ) * 0.05 ) * s.r, s.m.position.y, s.c.z + Math.sin( b + Math.sign( s.w ) * 0.05 ) * s.r );

		}

	}

	update( 0 );
	return { group, update, craft };

}
