import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { LINES, RUMORS } from '../data/memes.js';
import { textTexture } from '../render/materials.js';

// ---------------------------------------------------------------------------
// 战斗：飞行物（口罩、大馒头、N95、喷嚏飞沫、Boss 的刺、谣言气泡）、伤害结算、打败敌人的奖励、
// 金币和“多喝热水”回血、飞踢、冲刺撞人、额温枪光束、连击、大招条。
// 数值按策划方案 v0.2 第 5、7 节。
// ---------------------------------------------------------------------------

const pick = ( a ) => a[ Math.floor( Math.random() * a.length ) ];

function colorize( g, c ) {

	const n = g.attributes.position.count;
	const a = new Float32Array( n * 3 );
	for ( let i = 0; i < n; i ++ ) a.set( c, i * 3 );
	g.setAttribute( 'color', new THREE.BufferAttribute( a, 3 ) );
	if ( g.attributes.uv ) g.deleteAttribute( 'uv' );
	return g.index ? g.toNonIndexed() : g;

}

// 口罩：一片弯过来的浅蓝色布，两边两个耳挂
function maskGeometry( s = 1, valve = false ) {

	const g = new THREE.PlaneGeometry( 0.36 * s, 0.21 * s, 8, 3 );
	const p = g.attributes.position;
	const R = 0.24 * s;
	for ( let i = 0; i < p.count; i ++ ) {

		const a = p.getX( i ) / R;
		p.setXYZ( i, Math.sin( a ) * R, p.getY( i ) * ( 1 - Math.abs( a ) * 0.15 ), Math.cos( a ) * R - R );

	}

	g.computeVertexNormals();
	const parts = [ colorize( g, valve ? [ 0.95, 0.96, 0.95 ] : [ 0.62, 0.82, 0.95 ] ) ];
	for ( const y of [ - 0.05, 0, 0.05 ] ) parts.push( colorize( new THREE.BoxGeometry( 0.3 * s, 0.006 * s, 0.01 * s ).translate( 0, y * s, 0.002 ), valve ? [ 0.8, 0.82, 0.8 ] : [ 0.45, 0.65, 0.85 ] ) );
	for ( const sx of [ - 1, 1 ] ) parts.push( colorize( new THREE.TorusGeometry( 0.075 * s, 0.009 * s, 5, 14 ).rotateY( Math.PI / 2 ).translate( sx * 0.2 * s, 0, - 0.06 * s ), [ 0.97, 0.97, 0.97 ] ) );
	if ( valve ) parts.push( colorize( new THREE.CylinderGeometry( 0.05 * s, 0.05 * s, 0.03 * s, 14 ).rotateX( Math.PI / 2 ).translate( 0.06 * s, - 0.02 * s, 0.02 * s ), [ 0.35, 0.55, 0.85 ] ) );
	return mergeGeometries( parts, false );

}

export function createCombat( ctx ) {

	const { scene, fx, audio, enemies, player, cards } = ctx;
	const P = player.p;
	const state = { ult: 0, combo: 0, comboT: 0, comboBest: 0, kills: 0, gold: 0, xp: 0, level: 1, merit: 0, bonusHp: 0, maskCount: 0, dmgDealt: 0, jackpotN: 0, roomKills: 0 };
	const stats = () => cards.stats;

	// ---------------- 飞行物的网格 ----------------
	const projMat = new THREE.MeshStandardMaterial( { vertexColors: true, side: THREE.DoubleSide, roughness: 0.65, emissive: 0x223344, emissiveIntensity: 0.25 } );
	const mk = ( geo, mat, cap ) => {

		const im = new THREE.InstancedMesh( geo, mat, cap );
		im.count = 0; im.frustumCulled = false; im.castShadow = true;
		scene.add( im );
		return im;

	};

	const MESH = {
		mask: mk( maskGeometry( 1 ), projMat, 300 ),
		n95: mk( maskGeometry( 2.4, true ), projMat, 16 ),
		mantou: mk( colorize( new THREE.SphereGeometry( 0.42, 16, 12 ).scale( 1, 0.75, 1 ), [ 0.98, 0.95, 0.86 ] ), new THREE.MeshStandardMaterial( { vertexColors: true, roughness: 0.8 } ), 40 ),
		drop: mk( new THREE.SphereGeometry( 0.17, 10, 8 ), new THREE.MeshStandardMaterial( { color: 0x9ad44a, emissive: 0x3a6a10, emissiveIntensity: 0.8, roughness: 0.2 } ), 160 ),
		spike: mk( new THREE.ConeGeometry( 0.22, 1.1, 10 ).rotateX( Math.PI / 2 ), new THREE.MeshStandardMaterial( { color: 0xe066a0, emissive: 0x601030, emissiveIntensity: 0.6, roughness: 0.3 } ), 120 ),
		coin: mk( new THREE.CylinderGeometry( 0.16, 0.16, 0.04, 16 ).rotateX( Math.PI / 2 ), new THREE.MeshStandardMaterial( { color: 0xffc83d, metalness: 1, roughness: 0.25, emissive: 0x553300, emissiveIntensity: 0.6 } ), 400 ),
		cup: mk( mergeGeometries( [ colorize( new THREE.CylinderGeometry( 0.16, 0.12, 0.34, 14 ), [ 0.95, 0.95, 0.95 ] ), colorize( new THREE.TorusGeometry( 0.08, 0.02, 6, 12 ).translate( 0.18, 0, 0 ), [ 0.95, 0.95, 0.95 ] ), colorize( new THREE.CylinderGeometry( 0.15, 0.15, 0.02, 14 ).translate( 0, 0.15, 0 ), [ 0.95, 0.5, 0.25 ] ) ], false ), new THREE.MeshStandardMaterial( { vertexColors: true, roughness: 0.3, emissive: 0x442211, emissiveIntensity: 0.4 } ), 30 )
	};
	const shots = [], hostile = [], pickups = [], beams = [], rumors = [];
	const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sv = new THREE.Vector3( 1, 1, 1 ), pv = new THREE.Vector3(), dirV = new THREE.Vector3(), tmp = new THREE.Vector3();

	// ---------------- 伤害 ----------------
	function enemyCenter( o, out ) {

		return out.set( o.x, o.y + o.r * 0.95 + ( o.hy || 0 ), o.z );

	}

	function damageMul( src ) {

		const s = stats();
		let m = s.dmgMul;
		if ( s.f.hongwen && P.hp < s.maxHp * 0.5 ) m *= 1 + s.f.hongwen;
		if ( s.f.tangping && P.stillT > 1 && ( src === 'mask' || src === 'mantou' ) ) m *= 1 + s.f.tangping;
		if ( s.f.calm && ctx.crowd() >= 8 ) m *= 1 + s.f.calm;
		if ( s.f.zhaijia && P.stillT > 1 ) m *= 1 + Math.min( 0.5, Math.floor( P.stillT / 10 ) * s.f.zhaijia );
		return m;

	}

	function damageEnemy( o, base, src = 'mask', dir = null, knock = 0 ) {

		if ( ! o.alive || o.spawnT > 0 ) return 0;
		if ( o.isBoss ) return ctx.hitBoss( base * damageMul( src ), src );
		const s = stats();
		let d = base * damageMul( src );
		if ( o.type === 'big' && src === 'mask' ) d *= 0.5;
		let crit = false;
		if ( Math.random() < s.critChance ) {

			d *= s.critMul; crit = true;

		}

		o.hp -= d;
		o.flash = 1;
		state.dmgDealt += d;
		fx.dmg( d, enemyCenter( o, tmp ).setY( tmp.y + o.r ), crit );
		if ( crit && Math.random() < 0.25 ) fx.pop( pick( LINES.crit ), tmp, { size: 24, color: '#ffd34d', jx: 60 } );
		audio.play( 'hit', d > 40 );
		if ( dir && knock ) {

			o.kx += dir.x * knock / Math.max( 0.6, o.r ); o.kz += dir.z * knock / Math.max( 0.6, o.r );

		}

		if ( s.f.stun && Math.random() < s.f.stun && o.type !== 'elite' ) {

			o.stun = 1.2;
			audio.play( 'stun' );
			fx.pop( '硬控', tmp, { size: 22, color: '#fff27a', jx: 40 } );

		}

		if ( s.f.muyu && Math.random() < s.f.muyu ) {

			state.merit ++;
			P.hp = Math.min( s.maxHp + state.bonusHp, P.hp + 1 );
			audio.play( 'muyu' );
			fx.pop( '功德 +1', tmp, { size: 20, color: '#ffe9a8', jx: 50 } );
			if ( state.merit % 50 === 0 ) {

				state.bonusHp += 10;
				fx.meme( '功德圆满：最大生命 +10', { size: 36 } );

			}

		}

		if ( o.hp <= 0 ) defeat( o, src );
		return d;

	}

	const pendingBlasts = [];
	function defeat( o, src ) {

		o.alive = false;
		const T = o.T;
		const s = stats();
		o.ceil = ctx.ceilY();
		enemies.wrap( o, o.r * 1.15 );
		audio.play( 'pop', o.type === 'small' ? 1 : o.type === 'big' ? 0.5 : 0.75 );
		enemyCenter( o, tmp );
		fx.emit( { x: tmp.x, y: tmp.y, z: tmp.z, count: 14 + o.r * 10, speed: 4 + o.r * 2, colors: [ [ 0.9, 0.95, 1 ], [ 0.6, 0.8, 1 ], [ 1, 0.8, 0.95 ] ], size: 0.16, life: 0.6, gravity: 5 } );
		state.kills ++;
		state.roomKills ++;
		state.xp += T.xp;
		state.ult = Math.min( 100, state.ult + T.ult * s.ultGain );
		// 连击
		state.combo ++;
		state.comboT = 2;
		state.comboBest = Math.max( state.comboBest, state.combo );
		ctx.onCombo( state.combo );
		// 金币
		let g = T.gold * s.goldMul;
		while ( g > 0 ) {

			if ( g >= 1 || Math.random() < g ) dropPickup( 'coin', tmp.x, ctx.floorY(), tmp.z );
			g -= 1;

		}

		if ( s.f.coinRain && Math.random() < s.f.coinRain ) {

			for ( let i = 0; i < 14; i ++ ) dropPickup( 'coin', tmp.x + ( Math.random() - 0.5 ) * 3, ctx.floorY(), tmp.z + ( Math.random() - 0.5 ) * 3 );
			fx.pop( '泼天的富贵', tmp, { size: 30, color: '#ffd34d' } );

		}

		if ( Math.random() < 0.035 ) dropPickup( 'cup', tmp.x, ctx.floorY(), tmp.z );
		// 中病毒分裂
		if ( o.type === 'medium' && Math.random() < 0.5 ) {

			for ( const sx of [ - 0.5, 0.5 ] ) {

				const c = enemies.spawn( 'small', o.x + sx, o.z + sx * 0.3, o.y, { instant: true, split: true, hpMul: ctx.hpMul() } );
				if ( c ) {

					c.kx = sx * 6; c.kz = ( Math.random() - 0.5 ) * 6;

				}

			}

		}

		// 包的：被包住的时候炸开，能连锁
		if ( s.f.baode ) pendingBlasts.push( { x: o.x, z: o.z, d: s.f.baode, depth: ( o.blastDepth || 0 ) + 1 } );
		// 拿到大结果
		if ( s.f.jackpot ) {

			state.jackpotN ++;
			if ( state.jackpotN >= s.f.jackpot ) {

				state.jackpotN = 0;
				for ( let i = 0; i < 30; i ++ ) dropPickup( 'coin', o.x + ( Math.random() - 0.5 ) * 4, ctx.floorY(), o.z + ( Math.random() - 0.5 ) * 4 );
				P.hp = Math.min( s.maxHp + state.bonusHp, P.hp + 20 );
				fx.meme( '拿到大结果了家人们', { size: 46, color: '#ff4d4d' } );
				audio.play( 'horn' );

			}

		}

		ctx.onDefeat( o, src );

	}

	function blast( x, z, r, d, depth = 1, color = 0xffffff ) {

		fx.ring( x, ctx.floorY(), z, r, color, 0.35 );
		for ( const o of enemies.list ) {

			if ( ! o.alive || o.spawnT > 0 ) continue;
			if ( Math.hypot( o.x - x, o.z - z ) < r + o.r ) {

				o.blastDepth = depth;
				damageEnemy( o, d, 'blast' );

			}

		}

		const b = ctx.boss();
		if ( b && b.alive && Math.hypot( b.x - x, b.z - z ) < r + b.r ) damageEnemy( b, d, 'blast' );

	}

	// ---------------- 开火 ----------------
	function fireMasks( hand, aim, doubled ) {

		const s = stats();
		let n = s.maskCount * ( s.f.dafa && doubled ? 2 : 1 );
		dirV.subVectors( aim, hand ).normalize();
		const baseYaw = Math.atan2( dirV.x, dirV.z );
		const pitch = Math.asin( THREE.MathUtils.clamp( dirV.y, - 1, 1 ) );
		const spread = THREE.MathUtils.degToRad( s.maskSpread );
		for ( let i = 0; i < n; i ++ ) {

			const off = n === 1 ? 0 : ( i - ( n - 1 ) / 2 ) * spread;
			const yaw = baseYaw + off + ( Math.random() - 0.5 ) * 0.02;
			const cp = Math.cos( pitch );
			const isMantou = s.f.mantou && Math.random() < s.f.mantou;
			const sp = s.maskSpeed * ( isMantou ? 0.8 : 1 );
			shots.push( {
				kind: isMantou ? 'mantou' : 'mask', x: hand.x, y: hand.y, z: hand.z,
				vx: Math.sin( yaw ) * cp * sp, vy: Math.sin( pitch ) * sp, vz: Math.cos( yaw ) * cp * sp,
				dmg: s.maskDmg * s.maskDmgMul * ( isMantou ? 3 : 1 ), pierce: s.f.boomerang ? 99 : 0, life: s.maskRange / sp * ( s.f.boomerang ? 1.0 : 1 ),
				age: 0, r: isMantou ? 0.45 : 0.25, hits: new Set(), spin: Math.random() * 6, homing: s.homing, knock: isMantou ? 9 : 1.5,
				boomerang: s.f.boomerang ? 1 : 0
			} );

		}

		state.maskCount ++;
		audio.play( 'throw' );
		// 额温枪：每 5 个口罩一道光束
		if ( s.f.thermo && state.maskCount % 5 === 0 ) beam( hand, dirV, s.f.thermo );

	}

	function fireN95( hand, aim, charge ) {

		const s = stats();
		dirV.subVectors( aim, hand ).normalize();
		const sp = 28;
		shots.push( {
			kind: 'n95', x: hand.x, y: hand.y, z: hand.z, vx: dirV.x * sp, vy: dirV.y * sp, vz: dirV.z * sp,
			dmg: s.n95Dmg * ( 0.6 + 0.4 * charge ), pierce: s.n95Pierce, life: 1.4, age: 0, r: 0.6, hits: new Set(), spin: 0, homing: 0.05, knock: 6, wrap: s.n95Wrap
		} );
		audio.play( 'bigThrow' );
		fx.shake( 0.2 );
		if ( s.n95Wrap ) fx.pop( '一罩难求！', null, { size: 34, color: '#ffffff', y: 0.36 } );

	}

	const beamMat = new THREE.MeshBasicMaterial( { color: 0xff5a2a, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false } );
	const beamGeo = new THREE.CylinderGeometry( 0.05, 0.05, 1, 6 ).rotateX( Math.PI / 2 ).translate( 0, 0, 0.5 );
	function beam( from, dir, dmg ) {

		const len = 26;
		const m = new THREE.Mesh( beamGeo, beamMat.clone() );
		m.position.copy( from );
		m.scale.set( 1, 1, len );
		m.lookAt( tmp.copy( from ).add( dir ) );
		scene.add( m );
		beams.push( { m, t: 0 } );
		for ( const o of [ ...enemies.list, ctx.boss() ].filter( Boolean ) ) {

			if ( ! o.alive || o.spawnT > 0 ) continue;
			const c = enemyCenter( o, pv );
			c.sub( from );
			const t = c.dot( dir );
			if ( t < 0 || t > len ) continue;
			if ( c.lengthSq() - t * t < ( o.r + 0.3 ) ** 2 ) {

				damageEnemy( o, dmg, 'beam' );
				fx.pop( '36.5℃', enemyCenter( o, tmp ).setY( tmp.y + o.r * 1.5 ), { size: 22, color: '#ff8a4d', jx: 30 } );

			}

		}

		audio.play( 'crit' );

	}

	// ---------------- 敌人的飞行物 ----------------
	function enemyShot( kind, x, y, z, vx, vy, vz, dmg, opts = {} ) {

		hostile.push( { kind, x, y, z, vx, vy, vz, dmg, life: opts.life ?? 3, r: opts.r ?? 0.22, age: 0, gravity: opts.gravity ?? 0 } );

	}

	function sneeze( o ) {

		const dx = P.pos.x - o.x, dz = P.pos.z - o.z, l = Math.hypot( dx, dz ) || 1;
		const yaw = Math.atan2( dx, dz );
		for ( const off of [ - 0.2, 0, 0.2 ] ) enemyShot( 'drop', o.x + dx / l * o.r, o.y + o.r, o.z + dz / l * o.r, Math.sin( yaw + off ) * 10, 1.2, Math.cos( yaw + off ) * 10, 8, { gravity: 1.5 } );
		audio.play( 'sneeze' );
		fx.pop( '阿嚏！', tmp.set( o.x, o.y + o.r * 2.2, o.z ), { size: 26, color: '#b8ff7a' } );
		if ( Math.random() < 0.15 ) audio.say( '阿——嚏', { rate: 1.4, pitch: 1.6, gap: 3000 } );

	}

	const rumorGeo = new THREE.SphereGeometry( 0.55, 20, 14 );
	function rumor( o ) {

		const text = pick( RUMORS );
		const mat = new THREE.MeshStandardMaterial( { color: 0xffe9a8, transparent: true, opacity: 0.55, roughness: 0.1, emissive: 0x664400, emissiveIntensity: 0.4, depthWrite: false } );
		const m = new THREE.Mesh( rumorGeo, mat );
		const sp = new THREE.Sprite( new THREE.SpriteMaterial( { map: textTexture( text, { w: 512, h: 96, bg: 'rgba(0,0,0,0)', color: '#ffe066', size: 46 } ), transparent: true, depthTest: false } ) );
		sp.scale.set( 3.2, 0.6, 1 );
		sp.position.y = 0.9;
		m.add( sp );
		m.position.set( o.x, o.y + o.r * 2.4, o.z );
		scene.add( m );
		rumors.push( { m, sp, t: 0, hp: 1, text } );
		audio.play( 'bloop' );

	}

	// ---------------- 掉落物 ----------------
	function dropPickup( kind, x, y, z ) {

		if ( pickups.length > 380 ) return;
		pickups.push( { kind, x, y: y + 0.4, z, vx: ( Math.random() - 0.5 ) * 4, vy: 4 + Math.random() * 2, vz: ( Math.random() - 0.5 ) * 4, t: 0, spin: Math.random() * 6 } );

	}

	// ---------------- 飞踢、冲刺 ----------------
	function kick( pos, facing ) {

		const s = stats();
		const r = s.kickRadius * s.area;
		const fxz = Math.sin( facing ), fzz = Math.cos( facing );
		const cx = pos.x + fxz * 1.2, cz = pos.z + fzz * 1.2;
		fx.ring( cx, ctx.floorY(), cz, r, 0xffd34d, 0.4 );
		fx.shake( 0.45 );
		fx.hitstop( 0.06 );
		audio.play( 'kick' );
		let n = 0;
		for ( const o of enemies.list ) {

			if ( ! o.alive || o.spawnT > 0 ) continue;
			const dx = o.x - pos.x, dz = o.z - pos.z, d = Math.hypot( dx, dz ) || 1;
			if ( d > r + o.r + 1.2 ) continue;
			if ( ( dx * fxz + dz * fzz ) / d < - 0.3 && d > 1.2 ) continue;
			dirV.set( dx / d, 0, dz / d );
			damageEnemy( o, s.kickDmg, 'kick', dirV, s.kickKnock );
			if ( o.alive && o.type !== 'elite' ) {

				o.airborne = 0.9; o.vy = 8 / Math.max( 0.7, o.r ); o.flying = s.f.suchao ? 0.9 : 0;

			}

			n ++;

		}

		const b = ctx.boss();
		if ( b && b.alive && Math.hypot( b.x - pos.x, b.z - pos.z ) < r + b.r + 1 ) damageEnemy( b, s.kickDmg, 'kick' );
		if ( n >= 3 || Math.random() < 0.3 ) fx.meme( s.f.suchao ? '友谊第十四！' : pick( LINES.kick ), { size: 44 } );

	}

	let dashHit = new Set();
	function onDash() {

		dashHit = new Set();
		if ( Math.random() < 0.12 ) fx.pop( pick( LINES.dash ), null, { size: 28, y: 0.38 } );

	}

	function tryUlt() {

		// 上一个大招还没放完就不让放（否则上一个大招的东西会留在场景里）
		if ( state.ult < 100 || ! P.alive || ctx.ultActive?.() ) return false;
		state.ult = 0;
		ctx.castUlt( stats().ult );
		return true;

	}

	// ---------------- 每帧 ----------------
	function update( dt ) {

		const s = stats();
		const nav = ctx.nav();
		const fy = ctx.floorY(), cy = ctx.ceilY();
		const targets = enemies.list;
		const boss = ctx.boss();
		// 连击计时
		if ( state.comboT > 0 ) {

			state.comboT -= dt;
			if ( state.comboT <= 0 ) state.combo = 0;

		}

		// 冲刺撞人（逆行者）
		if ( P.dashT > 0 && s.f.nixing ) {

			for ( const o of targets ) {

				if ( ! o.alive || o.spawnT > 0 || dashHit.has( o.id ) ) continue;
				if ( Math.hypot( o.x - P.pos.x, o.z - P.pos.z ) < o.r + 1.0 ) {

					dashHit.add( o.id );
					damageEnemy( o, s.f.nixing, 'dash', P.dashDir, 6 );

				}

			}

		}

		// 被踢飞的敌人砸到别的敌人（苏超飞踢）
		for ( const o of targets ) {

			if ( ! o.flying || o.flying <= 0 ) continue;
			o.flying -= dt;
			for ( const b of targets ) {

				if ( b === o || ! b.alive || b.spawnT > 0 || b.flyHit === o.id ) continue;
				if ( Math.hypot( b.x - o.x, b.z - o.z ) < b.r + o.r ) {

					b.flyHit = o.id;
					damageEnemy( b, s.kickDmg * 0.5, 'kick', dirV.set( b.x - o.x, 0, b.z - o.z ).normalize(), 6 );

				}

			}

		}

		// 包的：连锁爆炸（排队处理，避免一帧里递归太深）
		let guard = 0;
		while ( pendingBlasts.length && guard ++ < 30 ) {

			const b = pendingBlasts.shift();
			if ( b.depth > 6 ) continue;
			blast( b.x, b.z, 3 * s.area, b.d, b.depth, 0xbfe6ff );
			if ( guard === 1 && Math.random() < 0.3 ) fx.pop( '包的！', tmp.set( b.x, fy + 2, b.z ), { size: 30, color: '#bfe6ff' } );

		}

		// 我方飞行物
		const counts = { mask: 0, n95: 0, mantou: 0 };
		for ( let i = shots.length - 1; i >= 0; i -- ) {

			const o = shots[ i ];
			o.age += dt;
			// 追踪：前方 10° 以内最近的敌人
			if ( o.homing > 0 ) {

				let best = null, bd = 1e9;
				const sp = Math.hypot( o.vx, o.vy, o.vz );
				for ( const t of targets ) {

					if ( ! t.alive || t.spawnT > 0 || o.hits.has( t.id ) ) continue;
					const c = enemyCenter( t, pv );
					const dx = c.x - o.x, dy = c.y - o.y, dz = c.z - o.z;
					const d = Math.hypot( dx, dy, dz );
					if ( d > 14 || d < 0.01 ) continue;
					const cos = ( dx * o.vx + dy * o.vy + dz * o.vz ) / ( d * sp );
					if ( cos > 0.985 && d < bd ) {

						bd = d; best = c.clone();

					}

				}

				if ( best ) {

					const k = Math.min( 1, o.homing * 30 * dt );
					const d = best.sub( pv.set( o.x, o.y, o.z ) ).normalize().multiplyScalar( sp );
					o.vx += ( d.x - o.vx ) * k; o.vy += ( d.y - o.vy ) * k; o.vz += ( d.z - o.vz ) * k;

				}

			}

			// 回旋镖：飞出去一半时间后往回飞
			if ( o.boomerang === 1 && o.age > o.life * 0.45 ) {

				o.boomerang = 2; o.hits.clear();

			}

			if ( o.boomerang === 2 ) {

				const dx = P.pos.x - o.x, dy = P.pos.y + 1.2 - o.y, dz = P.pos.z - o.z, d = Math.hypot( dx, dy, dz ) || 1;
				const sp = s.maskSpeed * 1.1;
				o.vx += ( dx / d * sp - o.vx ) * Math.min( 1, dt * 6 ); o.vy += ( dy / d * sp - o.vy ) * Math.min( 1, dt * 6 ); o.vz += ( dz / d * sp - o.vz ) * Math.min( 1, dt * 6 );
				if ( d < 1.0 ) o.life = 0;
				o.life = Math.max( o.life, o.age + 0.1 );

			}

			o.x += o.vx * dt; o.y += o.vy * dt; o.z += o.vz * dt;
			o.spin += dt * 14;
			let dead = o.age > o.life;
			// 撞墙、落地
			if ( ! dead && nav && o.boomerang !== 2 ) {

				const ii = nav.ix( o.x ), jj = nav.iz( o.z );
				const v = nav.inside( ii, jj ) ? nav.block[ jj * nav.W + ii ] : 1;
				if ( v === 1 || v === 3 || o.y < fy + 0.05 || o.y > cy - 0.05 ) {

					if ( o.boomerang === 1 ) {

						o.boomerang = 2; o.hits.clear();

					} else {

						dead = true;
						fx.emit( { x: o.x, y: Math.max( o.y, fy + 0.1 ), z: o.z, count: 5, speed: 2, color: [ 0.8, 0.9, 1 ], size: 0.12, life: 0.3 } );

					}

				}

			}

			// 命中
			if ( ! dead ) {

				for ( const t of targets ) {

					if ( ! t.alive || t.spawnT > 0 || o.hits.has( t.id ) ) continue;
					const c = enemyCenter( t, pv );
					const rr = t.r + o.r;
					if ( ( c.x - o.x ) ** 2 + ( c.y - o.y ) ** 2 + ( c.z - o.z ) ** 2 < rr * rr ) {

						o.hits.add( t.id );
						dirV.set( o.vx, 0, o.vz ).normalize();
						if ( o.wrap && t.type !== 'elite' ) {

							damageEnemy( t, t.hp + 1, 'n95' );

						} else damageEnemy( t, o.dmg, o.kind, dirV, o.knock );
						fx.emit( { x: o.x, y: o.y, z: o.z, count: 6, speed: 3, color: [ 1, 0.9, 0.6 ], size: 0.1, life: 0.25 } );
						if ( o.pierce <= 0 ) {

							dead = true; break;

						}

						o.pierce --;

					}

				}

				if ( ! dead && boss && boss.alive && ! o.hits.has( 'boss' ) ) {

					const c = pv.set( boss.x, boss.y + boss.aimY, boss.z );
					const rr = boss.r + o.r;
					if ( ( c.x - o.x ) ** 2 + ( c.y - o.y ) ** 2 + ( c.z - o.z ) ** 2 < rr * rr ) {

						o.hits.add( 'boss' );
						if ( o.kind === 'n95' ) ctx.bossN95();
						damageEnemy( boss, o.dmg * ( o.kind === 'n95' ? 1 : 1 ), o.kind );
						if ( o.pierce <= 0 ) dead = true;
						else o.pierce --;

					}

				}

				// 打破谣言气泡
				for ( const r of rumors ) {

					if ( r.hp > 0 && r.m.position.distanceToSquared( pv.set( o.x, o.y, o.z ) ) < 0.9 ) {

						r.hp = 0; dead = o.pierce <= 0;
						audio.play( 'pop', 0.6 );
						fx.pop( '谣言粉碎', r.m.position, { size: 24, color: '#7dff9a' } );

					}

				}

			}

			if ( dead ) {

				shots.splice( i, 1 ); continue;

			}

			const im = MESH[ o.kind ];
			const k = counts[ o.kind ] ++;
			if ( k >= im.instanceMatrix.count ) continue;
			e.set( o.spin * 0.3, Math.atan2( o.vx, o.vz ), o.kind === 'mantou' ? o.spin : Math.sin( o.spin ) * 0.5 );
			q.setFromEuler( e );
			m4.compose( pv.set( o.x, o.y, o.z ), q, sv.set( 1, 1, 1 ) );
			im.setMatrixAt( k, m4 );

		}

		for ( const k of Object.keys( counts ) ) {

			MESH[ k ].count = counts[ k ]; MESH[ k ].instanceMatrix.needsUpdate = true;

		}

		// 敌方飞行物
		const hc = { drop: 0, spike: 0 };
		for ( let i = hostile.length - 1; i >= 0; i -- ) {

			const o = hostile[ i ];
			o.age += dt;
			o.vy -= o.gravity * dt;
			o.x += o.vx * dt; o.y += o.vy * dt; o.z += o.vz * dt;
			let dead = o.age > o.life || o.y < fy;
			if ( ! dead && nav ) {

				const ii = nav.ix( o.x ), jj = nav.iz( o.z );
				const v = nav.inside( ii, jj ) ? nav.block[ jj * nav.W + ii ] : 1;
				if ( v === 1 || v === 3 ) dead = true;

			}

			if ( ! dead && P.alive ) {

				const dx = P.pos.x - o.x, dy = P.pos.y + 0.9 - o.y, dz = P.pos.z - o.z;
				if ( dx * dx + dz * dz < ( o.r + 0.45 ) ** 2 && Math.abs( dy ) < 1.1 ) {

					ctx.hurtPlayer( o.dmg, dirV.set( - dx, 0, - dz ).normalize().negate() );
					dead = true;
					fx.emit( { x: o.x, y: o.y, z: o.z, count: 8, speed: 3, color: o.kind === 'drop' ? [ 0.6, 0.9, 0.3 ] : [ 1, 0.4, 0.7 ], size: 0.15, life: 0.3 } );

				}

			}

			if ( dead ) {

				hostile.splice( i, 1 ); continue;

			}

			const im = MESH[ o.kind ];
			const k = hc[ o.kind ] ++;
			q.setFromEuler( e.set( 0, Math.atan2( o.vx, o.vz ), 0 ) );
			if ( o.kind === 'spike' ) q.setFromUnitVectors( tmp.set( 0, 0, 1 ), pv.set( o.vx, o.vy, o.vz ).normalize() );
			m4.compose( pv.set( o.x, o.y, o.z ), q, sv.set( 1, 1, 1 ) );
			im.setMatrixAt( k, m4 );

		}

		for ( const k of Object.keys( hc ) ) {

			MESH[ k ].count = hc[ k ]; MESH[ k ].instanceMatrix.needsUpdate = true;

		}

		// 谣言气泡：慢慢飘向主角，碰到就“洗脑”（方向反了 3 秒）
		for ( let i = rumors.length - 1; i >= 0; i -- ) {

			const r = rumors[ i ];
			r.t += dt;
			if ( r.hp <= 0 || r.t > 7 ) {

				scene.remove( r.m ); r.m.material.dispose(); r.sp.material.map.dispose(); r.sp.material.dispose(); rumors.splice( i, 1 ); continue;

			}

			tmp.set( P.pos.x - r.m.position.x, P.pos.y + 1.2 - r.m.position.y, P.pos.z - r.m.position.z );
			const d = tmp.length();
			r.m.position.addScaledVector( tmp.normalize(), dt * 2.6 );
			r.m.position.y += Math.sin( r.t * 3 ) * dt * 0.4;
			if ( d < 0.9 && P.alive ) {

				r.hp = 0;
				P.reversed = 3;
				fx.meme( '被谣言洗脑了！方向反了', { size: 40, color: '#ffd34d' } );
				audio.say( pick( LINES.rumor ), { gap: 2000 } );
				audio.play( 'bloop' );

			}

		}

		// 掉落物：先弹起来，再被吸过来
		const pc = { coin: 0, cup: 0 };
		for ( let i = pickups.length - 1; i >= 0; i -- ) {

			const o = pickups[ i ];
			o.t += dt; o.spin += dt * 6;
			const dx = P.pos.x - o.x, dz = P.pos.z - o.z, dy = P.pos.y + 0.8 - o.y;
			const d = Math.hypot( dx, dy, dz );
			if ( o.t > 0.5 && d < 3.2 + ( o.t > 6 ? 30 : 0 ) ) {

				const sp = 14 * Math.min( 1, ( o.t - 0.5 ) * 2 );
				o.x += dx / d * sp * dt; o.y += dy / d * sp * dt; o.z += dz / d * sp * dt;

			} else {

				o.vy -= 16 * dt;
				o.x += o.vx * dt; o.y += o.vy * dt; o.z += o.vz * dt;
				o.vx *= 0.96; o.vz *= 0.96;
				if ( o.y < fy + 0.18 ) {

					o.y = fy + 0.18; o.vy = Math.abs( o.vy ) * 0.35; o.vx *= 0.6; o.vz *= 0.6;

				}

			}

			if ( d < 0.7 && P.alive ) {

				if ( o.kind === 'coin' ) {

					state.gold += 1; audio.play( 'coin' );

				} else {

					P.hp = Math.min( s.maxHp + state.bonusHp, P.hp + 12 );
					fx.pop( '多喝热水 +12', tmp.set( P.pos.x, P.pos.y + 2.2, P.pos.z ), { size: 26, color: '#ff9a6a' } );
					audio.play( 'level' );

				}

				pickups.splice( i, 1 ); continue;

			}

			const im = MESH[ o.kind ];
			const k = pc[ o.kind ] ++;
			q.setFromEuler( e.set( 0, o.spin, 0 ) );
			m4.compose( pv.set( o.x, o.y + ( o.kind === 'coin' ? Math.sin( o.t * 4 ) * 0.05 : 0 ), o.z ), q, sv.set( 1, 1, 1 ) );
			im.setMatrixAt( k, m4 );

		}

		for ( const k of Object.keys( pc ) ) {

			MESH[ k ].count = pc[ k ]; MESH[ k ].instanceMatrix.needsUpdate = true;

		}

		// 光束淡出
		for ( let i = beams.length - 1; i >= 0; i -- ) {

			const b = beams[ i ];
			b.t += dt;
			b.m.material.opacity = 0.9 * ( 1 - b.t / 0.25 );
			if ( b.t > 0.25 ) {

				scene.remove( b.m ); b.m.material.dispose(); beams.splice( i, 1 );

			}

		}

	}

	function clear() {

		shots.length = 0; hostile.length = 0; pendingBlasts.length = 0;
		for ( const r of rumors ) scene.remove( r.m );
		rumors.length = 0;
		for ( const b of beams ) scene.remove( b.m );
		beams.length = 0;

	}

	function collectAll() {

		// 房间打完：剩下的金币全部飞过来
		for ( const o of pickups ) o.t = Math.max( o.t, 6 );

	}

	return { state, fireMasks, fireN95, kick, onDash, tryUlt, update, damageEnemy, blast, enemyShot, sneeze, rumor, dropPickup, clear, collectAll, defeat };

}
