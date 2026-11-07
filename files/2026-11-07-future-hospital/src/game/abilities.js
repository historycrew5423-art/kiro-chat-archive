import * as THREE from 'three';
import { POUCH, LINES } from '../data/memes.js';
import { textTexture } from '../render/materials.js';

// ---------------------------------------------------------------------------
// 大招和召唤物：
//   大招 wave 奶-蛙之波（团队起的名字）：镜头推到袋鼠眼前、慢放、喊招式名，一圈金色冲击波扫过全场
//        dance 科目三：全场敌人被迫一起跳 5 秒，每拍掉血
//        pouch 袋中乾坤：从育儿袋里掏出离谱的东西砸下来
//        text  最直白最不绕弯子：一道大字光束横扫
//   召唤：挖掘机（云监工）、水泥搅拌车（呕泥酱）、工程机甲（基建狂魔）、猫（哈基米）、点头鸽、云蹦迪冲击波
// ---------------------------------------------------------------------------

const pick = ( a ) => a[ Math.floor( Math.random() * a.length ) ];
const std = ( c, o = {} ) => new THREE.MeshStandardMaterial( { color: c, roughness: 0.5, ...o } );

function box( g, w, h, d, x, y, z, m ) {

	const mesh = new THREE.Mesh( new THREE.BoxGeometry( w, h, d ), m );
	mesh.position.set( x, y, z );
	mesh.castShadow = true;
	g.add( mesh );
	return mesh;

}

// 科目三大招的迪斯科球：镜面球 + 6 道彩色光柱（加法混合的锥体，不是真的灯，便宜）+ 地上的光斑
const DISCO_COLS = [ 0xff4fd8, 0x4fd8ff, 0xfff04f, 0x7dff6a, 0xff7a3d, 0xa36bff ];
function makeDisco() {

	const g = new THREE.Group();
	const ball = new THREE.Mesh( new THREE.IcosahedronGeometry( 0.5, 2 ), new THREE.MeshStandardMaterial( { color: 0xffffff, metalness: 1, roughness: 0.12, flatShading: true, emissive: 0x222233 } ) );
	g.add( ball );
	const rod = new THREE.Mesh( new THREE.CylinderGeometry( 0.025, 0.025, 6, 6 ).translate( 0, 3.4, 0 ), std( 0x888888, { metalness: 0.8 } ) );
	g.add( rod );
	const spin = new THREE.Group();
	g.add( spin );
	const beamGeo = new THREE.ConeGeometry( 1.0, 5.2, 20, 1, true ).translate( 0, - 2.6, 0 );
	const spotGeo = new THREE.CircleGeometry( 1.25, 24 ).rotateX( - Math.PI / 2 );
	const beams = [];
	for ( let i = 0; i < 6; i ++ ) {

		const arm = new THREE.Group();
		arm.rotation.y = i / 6 * Math.PI * 2;
		spin.add( arm );
		const tilt = new THREE.Group();
		tilt.rotation.x = 0.62 + ( i % 2 ) * 0.22;
		arm.add( tilt );
		const mat = new THREE.MeshBasicMaterial( { color: DISCO_COLS[ i ], transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.FrontSide, fog: false } );
		const beam = new THREE.Mesh( beamGeo, mat );
		tilt.add( beam );
		const spotMat = new THREE.MeshBasicMaterial( { color: DISCO_COLS[ i ], transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, fog: false } );
		const spot = new THREE.Mesh( spotGeo, spotMat );
		g.add( spot );
		beams.push( { tilt, mat, spot, spotMat, arm } );

	}

	g.userData = { ball, spin, beams };
	return g;

}

function makeDigger() {

	const g = new THREE.Group();
	const yel = std( 0xf2b632 ), dark = std( 0x2a2a2a ), glass = std( 0x3a5566, { roughness: 0.1, metalness: 0.3 } );
	box( g, 1.4, 0.35, 1.9, 0, 0.2, 0, dark );
	box( g, 1.3, 0.7, 1.2, 0, 0.75, - 0.1, yel );
	box( g, 0.7, 0.6, 0.6, 0.25, 1.35, - 0.2, glass );
	const arm = new THREE.Group();
	arm.position.set( - 0.35, 0.9, 0.4 );
	g.add( arm );
	box( arm, 0.22, 0.22, 1.6, 0, 0.3, 0.75, yel ).rotation.x = - 0.5;
	const bucket = box( arm, 0.7, 0.45, 0.4, 0, 0.0, 1.6, dark );
	g.userData = { arm, bucket };
	g.scale.setScalar( 0.9 );
	return g;

}

function makeMixer() {

	const g = new THREE.Group();
	const wht = std( 0xe8e8e8 ), org = std( 0xe8742a ), dark = std( 0x2a2a2a );
	box( g, 1.2, 0.3, 2.4, 0, 0.35, 0, dark );
	box( g, 1.1, 0.8, 0.7, 0, 0.9, 0.9, org );
	const drum = new THREE.Mesh( new THREE.CylinderGeometry( 0.5, 0.65, 1.5, 16 ), wht );
	drum.rotation.x = Math.PI / 2 - 0.3;
	drum.position.set( 0, 1.05, - 0.35 );
	drum.castShadow = true;
	g.add( drum );
	for ( const [ x, z ] of [ [ - 0.6, 0.8 ], [ 0.6, 0.8 ], [ - 0.6, - 0.8 ], [ 0.6, - 0.8 ] ] ) {

		const w = new THREE.Mesh( new THREE.CylinderGeometry( 0.25, 0.25, 0.2, 12 ).rotateZ( Math.PI / 2 ), dark );
		w.position.set( x, 0.25, z );
		g.add( w );

	}

	g.userData = { drum };
	g.scale.setScalar( 0.85 );
	return g;

}

function makeCat() {

	const g = new THREE.Group();
	const fur = std( 0xf0a85a, { roughness: 0.9 } ), wht = std( 0xffffff ), blk = std( 0x111111 );
	const body = new THREE.Mesh( new THREE.CapsuleGeometry( 0.18, 0.4, 4, 10 ).rotateX( Math.PI / 2 ), fur );
	body.position.y = 0.28; g.add( body );
	const head = new THREE.Mesh( new THREE.SphereGeometry( 0.17, 14, 10 ), fur );
	head.position.set( 0, 0.45, 0.32 ); g.add( head );
	for ( const s of [ - 1, 1 ] ) {

		const ear = new THREE.Mesh( new THREE.ConeGeometry( 0.06, 0.12, 6 ), fur );
		ear.position.set( s * 0.09, 0.6, 0.32 ); g.add( ear );
		const eye = new THREE.Mesh( new THREE.SphereGeometry( 0.035, 8, 6 ), blk );
		eye.position.set( s * 0.065, 0.48, 0.47 ); g.add( eye );

	}

	const tail = new THREE.Mesh( new THREE.CylinderGeometry( 0.03, 0.04, 0.45, 6 ), fur );
	tail.position.set( 0, 0.45, - 0.38 ); tail.rotation.x = - 0.7; g.add( tail );
	const muzzle = new THREE.Mesh( new THREE.SphereGeometry( 0.07, 8, 6 ), wht );
	muzzle.position.set( 0, 0.42, 0.46 ); g.add( muzzle );
	g.traverse( ( o ) => o.isMesh && ( o.castShadow = true ) );
	g.userData = { head, tail };
	return g;

}

export function makePigeon() {

	const g = new THREE.Group();
	const grey = std( 0x8a94a3, { roughness: 0.7 } ), neck = std( 0x5e8a7a, { roughness: 0.4, metalness: 0.3 } ), org = std( 0xe0803a );
	const body = new THREE.Mesh( new THREE.SphereGeometry( 0.22, 14, 10 ).scale( 0.85, 0.8, 1.3 ), grey );
	g.add( body );
	const head = new THREE.Group();
	head.position.set( 0, 0.2, 0.22 );
	g.add( head );
	head.add( new THREE.Mesh( new THREE.SphereGeometry( 0.11, 12, 8 ), neck ) );
	const beak = new THREE.Mesh( new THREE.ConeGeometry( 0.03, 0.1, 6 ).rotateX( Math.PI / 2 ), org );
	beak.position.set( 0, - 0.01, 0.13 );
	head.add( beak );
	for ( const s of [ - 1, 1 ] ) {

		const eye = new THREE.Mesh( new THREE.SphereGeometry( 0.025, 6, 6 ), org );
		eye.position.set( s * 0.06, 0.03, 0.07 );
		head.add( eye );
		const wing = new THREE.Mesh( new THREE.SphereGeometry( 0.16, 10, 6 ).scale( 0.3, 0.6, 1.2 ), grey );
		wing.position.set( s * 0.17, 0.02, - 0.05 );
		g.add( wing );

	}

	g.userData = { head };
	g.traverse( ( o ) => o.isMesh && ( o.castShadow = true ) );
	return g;

}

// 袋中乾坤：掏出来的东西（都是简单几何拼的）
function makeThing( shape ) {

	const g = new THREE.Group();
	const add = ( geo, c, x = 0, y = 0, z = 0 ) => {

		const m = new THREE.Mesh( geo, std( c ) );
		m.position.set( x, y, z ); m.castShadow = true; g.add( m ); return m;

	};

	switch ( shape ) {

		case 'fridge':
			add( new THREE.BoxGeometry( 2.2, 4.2, 1.8 ), 0xeef2f4, 0, 2.1, 0 );
			add( new THREE.BoxGeometry( 0.08, 4.1, 0.05 ), 0x888888, 0, 2.1, 0.92 );
			add( new THREE.BoxGeometry( 0.1, 1.2, 0.12 ), 0xaaaaaa, - 0.3, 2.6, 0.95 ); add( new THREE.BoxGeometry( 0.1, 1.2, 0.12 ), 0xaaaaaa, 0.3, 2.6, 0.95 );
			break;
		case 'goose':
			add( new THREE.SphereGeometry( 1.4, 16, 12 ).scale( 1, 0.8, 1.5 ), 0xffffff, 0, 1.4, 0 );
			add( new THREE.CylinderGeometry( 0.3, 0.45, 2.2, 10 ), 0xffffff, 0, 2.8, 1.4 );
			add( new THREE.SphereGeometry( 0.5, 12, 10 ), 0xffffff, 0, 3.9, 1.6 );
			add( new THREE.ConeGeometry( 0.22, 0.7, 8 ).rotateX( Math.PI / 2 ), 0xf08a2a, 0, 3.85, 2.3 );
			break;
		case 'kun':
			add( new THREE.SphereGeometry( 3, 20, 14 ).scale( 2.4, 0.9, 1 ), 0x2a4f7a, 0, 2.8, 0 );
			add( new THREE.ConeGeometry( 1.6, 3, 4 ).rotateZ( Math.PI / 2 ), 0x2a4f7a, - 8, 2.8, 0 );
			add( new THREE.SphereGeometry( 0.4, 8, 6 ), 0xffffff, 5.6, 3.6, 1.8 );
			break;
		case 'mantou':
			add( new THREE.SphereGeometry( 3, 20, 14 ).scale( 1, 0.7, 1 ), 0xfaf3e0, 0, 2, 0 );
			break;
		case 'box':
			add( new THREE.BoxGeometry( 3.2, 2.4, 2.4 ), 0x3aa35a, 0, 1.2, 0 );
			add( new THREE.BoxGeometry( 3.25, 0.6, 2.45 ), 0xffffff, 0, 1.4, 0 );
			break;
		default: {

			// 另一只袋鼠：一个大大的黄色袋鼠头
			add( new THREE.SphereGeometry( 2, 16, 12 ).scale( 1, 1.1, 1.2 ), 0xf2c94c, 0, 2.4, 0 );
			add( new THREE.SphereGeometry( 0.5, 10, 8 ), 0x5a2a20, 0, 2.2, 2.4 );
			for ( const s of [ - 1, 1 ] ) add( new THREE.CapsuleGeometry( 0.4, 2.2, 4, 8 ), 0xf2c94c, s * 0.9, 4.8, 0 );

		}

	}

	return g;

}

export function createAbilities( ctx ) {

	const { scene, fx, audio, enemies, player, cards, combat, post } = ctx;
	const P = player.p;
	const stats = () => cards.stats;
	const S = { digger: null, mixer: null, mech: null, cat: null, pigeon: null };
	const timers = { digger: 1, mixer: 2, mech: 1, cat: 1, pigeon: 0, disco: 3 };
	const zones = [];
	const zoneMat = new THREE.MeshStandardMaterial( { color: 0x8c8c86, roughness: 0.95 } );
	const zoneGeo = new THREE.CircleGeometry( 1, 32 ).rotateX( - Math.PI / 2 );
	const ult = { active: null, t: 0, dur: 0, beatAcc: 0, thing: null, text: null, disco: null };
	const tmp = new THREE.Vector3(), dir = new THREE.Vector3();

	const alive = () => enemies.list.filter( ( o ) => o.alive && o.spawnT <= 0 );
	function nearest( x, z, max = 12 ) {

		let best = null, bd = max;
		for ( const o of enemies.list ) {

			if ( ! o.alive || o.spawnT > 0 ) continue;
			const d = Math.hypot( o.x - x, o.z - z );
			if ( d < bd ) {

				bd = d; best = o;

			}

		}

		const b = ctx.boss();
		if ( b && b.alive && Math.hypot( b.x - x, b.z - z ) < bd ) best = b;
		return best;

	}

	function cone( x, z, yaw, r, dmg, knock ) {

		const fxz = Math.sin( yaw ), fzz = Math.cos( yaw );
		for ( const o of alive() ) {

			const dx = o.x - x, dz = o.z - z, d = Math.hypot( dx, dz ) || 1;
			if ( d > r + o.r || ( dx * fxz + dz * fzz ) / d < 0.3 ) continue;
			combat.damageEnemy( o, dmg, 'summon', dir.set( dx / d, 0, dz / d ), knock );

		}

		const b = ctx.boss();
		if ( b && b.alive && Math.hypot( b.x - x, b.z - z ) < r + b.r ) combat.damageEnemy( b, dmg, 'summon' );

	}

	function follow( obj, ox, oz, dt, k = 4 ) {

		const yaw = P.facing;
		const tx = P.pos.x + Math.cos( yaw ) * ox + Math.sin( yaw ) * oz;
		const tz = P.pos.z - Math.sin( yaw ) * ox + Math.cos( yaw ) * oz;
		const nav = ctx.nav();
		const p = obj.position;
		const mv = { x: p.x, z: p.z };
		nav.move( mv, ( tx - p.x ) * Math.min( 1, dt * k ), ( tz - p.z ) * Math.min( 1, dt * k ), 0.5 );
		p.x = mv.x; p.z = mv.z;
		p.y = ctx.floorY();
		const want = Math.atan2( tx - p.x, tz - p.z );
		if ( Math.hypot( tx - p.x, tz - p.z ) > 0.3 ) obj.rotation.y += ( ( ( want - obj.rotation.y + Math.PI * 3 ) % ( Math.PI * 2 ) ) - Math.PI ) * Math.min( 1, dt * 5 );

	}

	function ensure( key, make ) {

		if ( ! S[ key ] ) {

			S[ key ] = make();
			S[ key ].position.copy( P.pos );
			scene.add( S[ key ] );

		}

		return S[ key ];

	}

	function drop( key ) {

		if ( S[ key ] ) {

			scene.remove( S[ key ] ); S[ key ] = null;

		}

	}

	// ---------------- 大招 ----------------
	function cast( type ) {

		const s = stats();
		// 保险：直接调用 cast（调试截图）时，先收掉上一个大招
		if ( ult.active ) {

			endUltObjects();
			ctx.onUltEnd( ult.active );

		}

		ult.active = type; ult.t = 0; ult.beatAcc = 0; ult.done = false;
		ctx.onUltStart( type );
		if ( type === 'wave' ) {

			ult.dur = 1.6;
			fx.slowmo( 0.75, 0.3 );
			player.k.play( 'ult', 1.5 );
			audio.say( LINES.ultName, { force: true, rate: 0.9, pitch: 0.7 } );
			fx.meme( LINES.ultName + '！', { size: 72, color: '#ffd34d', y: 0.22, jx: 0, dur: 1.8 } );

		} else if ( type === 'dance' ) {

			ult.dur = 5.2;
			player.k.play( 'dance', 5.2 );
			audio.music( 'dance' );
			audio.say( '科目三，走起', { force: true } );
			for ( const o of alive() ) o.dance = 5.2;
			fx.meme( '科目三！', { size: 72, color: '#ff6ad5', y: 0.22, jx: 0 } );
			if ( ult.disco ) scene.remove( ult.disco );
			ult.disco = makeDisco();
			ult.disco.position.set( P.pos.x, ctx.floorY() + 7.5, P.pos.z );
			scene.add( ult.disco );

		} else if ( type === 'pouch' ) {

			ult.dur = 2.4;
			player.k.play( 'ult', 1.2 );
			const it = pick( POUCH );
			ult.item = it;
			audio.say( '让我看看袋里有什么', { force: true, rate: 1.3 } );
			// 落点：敌人最密的地方
			let best = null, bn = - 1;
			for ( const o of alive() ) {

				let n = 0;
				for ( const b of alive() ) if ( Math.hypot( b.x - o.x, b.z - o.z ) < it.r ) n ++;
				if ( n > bn ) {

					bn = n; best = o;

				}

			}

			const tx = best ? best.x : P.pos.x + Math.sin( P.facing ) * 6, tz = best ? best.z : P.pos.z + Math.cos( P.facing ) * 6;
			const th = makeThing( it.shape );
			th.position.set( tx, ctx.floorY() + 22, tz );
			th.rotation.y = Math.random() * 6;
			scene.add( th );
			ult.thing = th; ult.tx = tx; ult.tz = tz;
			fx.ring( tx, ctx.floorY(), tz, it.r, 0xff3030, 1.0, { grow: false, warn: true } );

		} else if ( type === 'text' ) {

			ult.dur = 1.8;
			player.k.play( 'ult', 1.4 );
			const line = '我将用最直白、最不绕弯子的方式告诉你：你被包了';
			audio.say( line, { force: true, rate: 1.5 } );
			const tex = textTexture( line, { w: 2048, h: 160, bg: 'rgba(0,0,0,0)', color: '#ffe066', size: 110 } );
			const m = new THREE.Mesh( new THREE.PlaneGeometry( 26, 2.0 ), new THREE.MeshBasicMaterial( { map: tex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide } ) );
			ult.text = m; ult.textHit = new Set();
			ult.yaw = P.facing; ult.ox = P.pos.x; ult.oz = P.pos.z;
			scene.add( m );

		}

		audio.play( 'horn' );

	}

	function updateUlt( dt ) {

		if ( ! ult.active ) return;
		const s = stats();
		ult.t += dt;
		const type = ult.active;
		if ( type === 'wave' ) {

			// 眼睛里冒金光
			const head = player.k.bones.head.getWorldPosition( tmp );
			fx.emit( { x: head.x, y: head.y + 0.05, z: head.z, count: 3, speed: 2.5, color: [ 1, 0.85, 0.3 ], size: 0.12, life: 0.4, gravity: - 2 } );
			if ( ! ult.done && ult.t > 0.9 ) {

				ult.done = true;
				fx.ring( P.pos.x, ctx.floorY(), P.pos.z, 45, 0xffd34d, 0.9 );
				fx.ring( P.pos.x, ctx.floorY() + 0.5, P.pos.z, 30, 0xffffff, 0.6 );
				fx.shake( 1.2 ); fx.flash( 0.8, 0xfff2b0 ); fx.state.ca = 1.5; fx.state.zoom = 1.2;
				audio.play( 'boom', 1 );
				for ( const o of alive() ) {

					if ( o.type === 'elite' ) combat.damageEnemy( o, 300 * ( s.f.ultDmg || 1 ), 'ult' );
					else combat.damageEnemy( o, o.hp + 1, 'ult' );

				}

				const b = ctx.boss();
				if ( b && b.alive ) ctx.hitBoss( b.maxHp * 0.15, 'ult', true );

			}

		} else if ( type === 'dance' ) {

			ult.beatAcc += dt;
			const beat = 60 / 132;
			// 迪斯科球：降下来、跟着袋鼠、光柱转圈并按拍子换颜色，最后升回去
			const dsc = ult.disco;
			if ( dsc ) {

				const down = Math.min( 1, ult.t / 0.6 ), up = Math.max( 0, ( ult.t - ( ult.dur - 0.5 ) ) / 0.5 );
				const H = 4.0 + ( 1 - down ) * 3.5 + up * 3.5;
				dsc.position.x += ( P.pos.x - dsc.position.x ) * Math.min( 1, dt * 3 );
				dsc.position.z += ( P.pos.z - dsc.position.z ) * Math.min( 1, dt * 3 );
				dsc.position.y = ctx.floorY() + H;
				const u = dsc.userData;
				u.ball.rotation.y += dt * 1.6;
				u.spin.rotation.y += dt * 1.9;
				const beatI = Math.floor( ult.t / beat );
				const fade = down * ( 1 - up );
				u.beams.forEach( ( b, i ) => {

					const a = b.tilt.rotation.x;
					b.tilt.children[ 0 ].scale.y = H / Math.cos( a ) / 5.2;
					const th = u.spin.rotation.y + b.arm.rotation.y, r = H * Math.tan( a );
					b.spot.position.set( - Math.sin( th ) * r, - H + 0.04, - Math.cos( th ) * r );
					const col = DISCO_COLS[ ( i + beatI ) % 6 ];
					b.mat.color.setHex( col ); b.spotMat.color.setHex( col );
					b.mat.opacity = 0.2 * fade; b.spotMat.opacity = 0.5 * fade;

				} );

			}

			while ( ult.beatAcc >= beat ) {

				ult.beatAcc -= beat;
				const col = [ 0xff4fd8, 0x4fd8ff, 0xfff04f, 0x7dff6a ][ Math.floor( ult.t / beat ) % 4 ];
				fx.flash( 0.07, col );
				fx.ring( P.pos.x, ctx.floorY(), P.pos.z, 9, col, 0.4 );
				for ( const o of alive() ) {

					o.dance = Math.max( o.dance, 0.6 );
					combat.damageEnemy( o, s.f.ultDmg || 30, 'ult' );

				}

				const b = ctx.boss();
				if ( b && b.alive ) ctx.hitBoss( ( s.f.ultDmg || 30 ) * 2, 'ult', true );
				if ( Math.random() < 0.35 ) fx.meme( pick( [ '左脚右脚', '甩手！', '科目三', '扭起来', '动次打次' ] ), { size: 40 } );

			}

		} else if ( type === 'pouch' && ult.thing ) {

			const th = ult.thing;
			if ( ! ult.done ) {

				th.position.y = Math.max( ctx.floorY(), th.position.y - dt * 32 );
				th.rotation.x += dt * 2;
				if ( th.position.y <= ctx.floorY() + 0.01 ) {

					ult.done = true;
					th.rotation.x = 0;
					const it = ult.item;
					combat.blast( ult.tx, ult.tz, it.r * s.area, it.dmg * ( s.f.ultDmg || 1 ), 1, 0xffd34d );
					fx.shake( 1.1 ); fx.flash( 0.5, 0xffffff );
					audio.play( 'boom', 1 );
					if ( it.shape === 'goose' ) audio.play( 'quack' );
					fx.meme( '掏出了：' + it.name, { size: 46, color: '#ffffff', y: 0.24, jx: 0, dur: 2.2 } );
					fx.emit( { x: ult.tx, y: ctx.floorY() + 0.3, z: ult.tz, count: 60, speed: 9, color: [ 0.85, 0.85, 0.85 ], size: 0.5, life: 0.9, normal: true, gravity: 2, alpha: 0.6 } );

				}

			} else if ( ult.t > ult.dur - 0.4 ) th.scale.multiplyScalar( Math.max( 0.01, 1 - dt * 8 ) );

		} else if ( type === 'text' && ult.text ) {

			// 大字光束：从袋鼠面前往前推 40 米
			const k = Math.min( 1, ult.t / 1.3 );
			const dist = 1.5 + k * 40;
			const fxz = Math.sin( ult.yaw ), fzz = Math.cos( ult.yaw );
			const m = ult.text;
			m.position.set( ult.ox + fxz * dist, ctx.floorY() + 1.4, ult.oz + fzz * dist );
			m.rotation.set( 0, ult.yaw, 0 );
			m.material.opacity = 1 - Math.max( 0, ( ult.t - 1.3 ) / 0.5 );
			for ( const o of alive() ) {

				if ( ult.textHit.has( o.id ) ) continue;
				const dx = o.x - ult.ox, dz = o.z - ult.oz;
				const along = dx * fxz + dz * fzz, side = Math.abs( dx * fzz - dz * fxz );
				if ( along < dist && along > dist - 3 && side < 13 ) {

					ult.textHit.add( o.id );
					combat.damageEnemy( o, 140 * ( s.f.ultDmg || 1 ), 'ult', dir.set( fxz, 0, fzz ), 12 );

				}

			}

			const b = ctx.boss();
			if ( b && b.alive && ! ult.textHit.has( 'boss' ) ) {

				const along = ( b.x - ult.ox ) * fxz + ( b.z - ult.oz ) * fzz;
				if ( along < dist ) {

					ult.textHit.add( 'boss' ); ctx.hitBoss( b.maxHp * 0.1, 'ult', true );

				}

			}

			if ( Math.random() < 0.5 ) fx.shake( 0.3 );

		}

		if ( ult.t >= ult.dur ) {

			endUltObjects();
			ctx.onUltEnd( type );
			ult.active = null;
			// 隔窗喊加油
			if ( s.f.jiayou ) {

				P.jiayou = s.f.jiayou;
				fx.meme( '加油！加油！', { size: 50, color: '#ff8a4d' } );

			}

		}

	}

	// ---------------- 召唤物 ----------------
	function updateSummons( dt ) {

		const s = stats();
		const sd = s.summonDmg;
		const fy = ctx.floorY();
		if ( P.jiayou > 0 ) P.jiayou -= dt;
		// 工程机甲（合体）替代挖掘机和搅拌车
		if ( s.f.mech ) {

			drop( 'digger' ); drop( 'mixer' );
			const m = ensure( 'mech', () => {

				const g = makeDigger();
				g.scale.setScalar( 1.8 );
				const mx = makeMixer(); mx.position.set( 0, 1.2, - 0.6 ); mx.scale.setScalar( 0.6 ); g.add( mx );
				return g;

			} );
			follow( m, - 2.6, - 2.2, dt, 3 );
			timers.mech -= dt;
			m.userData.arm.rotation.x = Math.max( - 0.2, m.userData.arm.rotation.x - dt * 3 );
			if ( timers.mech <= 0 && nearest( m.position.x, m.position.z, 8 ) ) {

				timers.mech = 2;
				m.userData.arm.rotation.x = 0.8;
				cone( m.position.x, m.position.z, m.rotation.y, 5.5 * s.area, s.f.mech * sd, 10 );
				zones.push( { x: m.position.x + Math.sin( m.rotation.y ) * 3, z: m.position.z + Math.cos( m.rotation.y ) * 3, r: 3 * s.area, t: 4, mesh: null } );
				audio.play( 'kick' ); fx.shake( 0.3 );
				if ( Math.random() < 0.2 ) fx.pop( '基建狂魔！', m.position.clone().setY( fy + 3.5 ), { size: 28 } );

			}

		} else {

			if ( s.f.digger ) {

				const d = ensure( 'digger', makeDigger );
				follow( d, - 2.2, - 1.6, dt );
				timers.digger -= dt;
				d.userData.arm.rotation.x = Math.max( - 0.2, d.userData.arm.rotation.x - dt * 3 );
				const tgt = nearest( d.position.x, d.position.z, 7 );
				if ( tgt ) d.rotation.y = Math.atan2( tgt.x - d.position.x, tgt.z - d.position.z );
				if ( timers.digger <= 0 && tgt ) {

					timers.digger = 3;
					d.userData.arm.rotation.x = 0.8;
					cone( d.position.x, d.position.z, d.rotation.y, 4 * s.area, s.f.digger * sd, 9 );
					audio.play( 'kick' );
					fx.emit( { x: d.position.x + Math.sin( d.rotation.y ) * 2, y: fy + 0.3, z: d.position.z + Math.cos( d.rotation.y ) * 2, count: 16, speed: 4, color: [ 0.7, 0.6, 0.45 ], size: 0.3, life: 0.6, normal: true, gravity: 4, alpha: 0.7 } );
					if ( Math.random() < 0.15 ) fx.pop( '叉酱，铲它！', d.position.clone().setY( fy + 2.4 ), { size: 24 } );

				}

			} else drop( 'digger' );
			if ( s.f.mixer ) {

				const m = ensure( 'mixer', makeMixer );
				follow( m, 2.2, - 1.8, dt );
				m.userData.drum.rotation.y += dt * 3;
				timers.mixer -= dt;
				if ( timers.mixer <= 0 && nearest( m.position.x, m.position.z, 9 ) ) {

					timers.mixer = 6;
					const z = { x: m.position.x + Math.sin( m.rotation.y ) * 2.5, z: m.position.z + Math.cos( m.rotation.y ) * 2.5, r: 3 * s.area, t: 4 };
					zones.push( z );
					audio.play( 'bloop' );
					if ( Math.random() < 0.3 ) fx.pop( '呕泥酱！', m.position.clone().setY( fy + 2.4 ), { size: 24, color: '#cccccc' } );

				}

			} else drop( 'mixer' );
			drop( 'mech' );

		}

		// 猫：扑向最近的敌人
		const twins = s.f.twins || 0;
		if ( s.f.cat ) {

			const c = ensure( 'cat', makeCat );
			c.scale.setScalar( twins ? 1.6 : 1 );
			timers.cat -= dt * ( twins ? 1.5 : 1 );
			if ( ! c.userData.jump ) {

				follow( c, 1.1, 0.6, dt, 6 );
				const tgt = nearest( c.position.x, c.position.z, 10 );
				if ( timers.cat <= 0 && tgt ) {

					timers.cat = 1.2;
					c.userData.jump = { t: 0, from: c.position.clone(), to: tmp.set( tgt.x, fy, tgt.z ).clone(), tgt };

				}

			} else {

				const j = c.userData.jump;
				j.t += dt * 2.5;
				const k = Math.min( 1, j.t );
				c.position.lerpVectors( j.from, j.to, k );
				c.position.y = fy + Math.sin( k * Math.PI ) * 1.5;
				c.rotation.y = Math.atan2( j.to.x - j.from.x, j.to.z - j.from.z );
				if ( k >= 1 ) {

					if ( j.tgt.alive ) combat.damageEnemy( j.tgt, s.f.cat * sd * ( twins ? 2 : 1 ), 'summon' );
					audio.play( 'hit', false );
					if ( Math.random() < 0.12 ) {

						fx.pop( '哈基米！', c.position.clone().setY( fy + 1.2 ), { size: 22, color: '#ffb35a' } );
						audio.say( '哈基米', { pitch: 1.9, rate: 1.3, gap: 4000 } );

					}

					c.userData.jump = null;

				}

			}

			c.userData.tail.rotation.z = Math.sin( performance.now() / 150 ) * 0.4;

		} else drop( 'cat' );

		// 点头鸽：绕着袋鼠飞，脑袋跟着节拍点
		if ( s.f.pigeon ) {

			const g = ensure( 'pigeon', makePigeon );
			g.scale.setScalar( twins ? 1.7 : 1 );
			const a = performance.now() / 1000 * 1.6;
			g.position.set( P.pos.x + Math.cos( a ) * 2.4, P.pos.y + 1.6 + Math.sin( a * 2 ) * 0.2, P.pos.z + Math.sin( a ) * 2.4 );
			g.rotation.y = - a;
			const beat = audio.beat();
			g.userData.head.position.z = 0.22 + Math.sin( beat * Math.PI * 2 ) * 0.07;
			g.userData.head.rotation.x = Math.sin( beat * Math.PI * 2 ) * 0.4;
			timers.pigeon -= dt * ( twins ? 1.5 : 1 );
			if ( timers.pigeon <= 0 ) {

				const tgt = nearest( g.position.x, g.position.z, 2.2 );
				if ( tgt ) {

					timers.pigeon = 0.5;
					combat.damageEnemy( tgt, s.f.pigeon * sd * ( twins ? 2 : 1 ), 'summon' );

				}

			}

		} else drop( 'pigeon' );

		// 云蹦迪
		if ( s.f.disco ) {

			timers.disco -= dt;
			if ( timers.disco <= 0 ) {

				timers.disco = 8;
				const r = 6 * s.area;
				fx.ring( P.pos.x, fy, P.pos.z, r, 0xff4fd8, 0.5 );
				fx.ring( P.pos.x, fy, P.pos.z, r * 0.7, 0x4fd8ff, 0.5 );
				for ( const o of alive() ) {

					const dx = o.x - P.pos.x, dz = o.z - P.pos.z, d = Math.hypot( dx, dz ) || 1;
					if ( d < r + o.r ) combat.damageEnemy( o, s.f.disco * sd, 'summon', dir.set( dx / d, 0, dz / d ), 12 );

				}

				audio.play( 'boom', 0.4 );
				fx.pop( '动次打次', null, { size: 32, y: 0.4, color: '#ff4fd8' } );

			}

		}

		// 水泥地：减速
		for ( let i = zones.length - 1; i >= 0; i -- ) {

			const z = zones[ i ];
			z.t -= dt;
			if ( ! z.mesh ) {

				z.mesh = new THREE.Mesh( zoneGeo, zoneMat );
				z.mesh.position.set( z.x, fy + 0.03, z.z );
				z.mesh.scale.setScalar( z.r );
				z.mesh.receiveShadow = true;
				scene.add( z.mesh );

			}

			if ( z.t <= 0 ) {

				scene.remove( z.mesh ); zones.splice( i, 1 ); continue;

			}

			for ( const o of enemies.list ) if ( Math.hypot( o.x - z.x, o.z - z.z ) < z.r ) o.slow = Math.max( o.slow, 0.25 );

		}

	}

	function update( dt ) {

		updateUlt( dt );
		updateSummons( dt );

	}

	function endUltObjects() {

		if ( ult.thing ) scene.remove( ult.thing );
		if ( ult.text ) {

			scene.remove( ult.text ); ult.text.material.map.dispose();

		}

		if ( ult.disco ) scene.remove( ult.disco );
		ult.thing = ult.text = ult.disco = null;

	}

	function clear() {

		for ( const z of zones ) z.mesh && scene.remove( z.mesh );
		zones.length = 0;
		for ( const k of Object.keys( S ) ) drop( k );
		// 换局时如果大招还没放完，直接收掉
		if ( ult.active ) {

			endUltObjects();
			ult.active = null;

		}

	}

	function teleportSummons() {

		for ( const o of Object.values( S ) ) if ( o ) o.position.copy( P.pos );

	}

	return { cast, update, clear, ult, teleportSummons };

}
