import * as THREE from 'three';
import { createInput } from '../core/input.js';
import { makeStreams } from '../core/rng.js';
import { createAudio } from '../audio/audio.js';
import { createFx } from './fx.js';
import { createHud } from './hud.js';
import { createPlayer } from './player.js';
import { createEnemies } from './enemies.js';
import { createCards } from './cards.js';
import { createCombat } from './combat.js';
import { createAbilities, makePigeon } from './abilities.js';
import { createBoss } from './boss.js';
import { makeLayouts } from './layout.js';
import { ELEVATORS, THEME_NAMES } from '../world/interior.js';
import { LINES } from '../data/memes.js';
import { TITLE_CAM, FLOOR_NAMES, HOSP } from '../config.js';
import { PARAMS } from '../core/assets.js';

// ---------------------------------------------------------------------------
// 游戏流程：
//   标题（参考图机位）→ 点击开始，镜头飞到广场上的袋鼠身后 → 走进大厅 → 挂号处按 E 开局 →
//   西北电梯上 2F → 每层：电梯厅 A（安全）→ 二选一的门 → 房间 B → 房间 D → 出口电梯 → … → 屋顶 Boss → 人生总结
//   中途倒下：芭比Q了 → 人生总结 → 人生重开（回到大厅，梗卡清空，换一个种子）
// 网址加 ?demo=1：只打 2F 一层就上屋顶（演示用短局）。
// ---------------------------------------------------------------------------

const pick = ( a ) => a[ Math.floor( Math.random() * a.length ) ];
const params = PARAMS;
const DEMO = params.has( 'demo' );

// 每层每个战斗房间的三波怪
const WAVES = {
	1: [ [ [ 'small', 8 ] ], [ [ 'small', 6 ], [ 'medium', 2 ] ], [ [ 'small', 6 ], [ 'sneeze', 2 ], [ 'medium', 1 ] ] ],
	2: [ [ [ 'small', 10 ], [ 'medium', 2 ] ], [ [ 'small', 6 ], [ 'sneeze', 2 ], [ 'medium', 2 ] ], [ [ 'small', 8 ], [ 'big', 1 ], [ 'sneeze', 2 ] ] ],
	3: [ [ [ 'small', 12 ], [ 'medium', 3 ] ], [ [ 'small', 8 ], [ 'sneeze', 3 ], [ 'big', 1 ] ], [ [ 'small', 10 ], [ 'big', 2 ], [ 'medium', 3 ] ] ]
};

export function createGame( ctx ) {

	const { renderer, scene, camera, post, world, assets, Q, time, SHOT } = ctx;
	const interior = world.interior;
	const input = createInput( renderer.domElement );
	const audio = createAudio();
	const fx = createFx( { scene, camera, post } );
	const hud = createHud();
	const player = createPlayer( { scene, camera, assets, input, audio, fx } );
	const enemies = createEnemies( { scene } );
	const P = player.p;
	const g = { state: 'title', floor: 0, paused: false, modal: false, run: null, cards: null, combat: null, abilities: null, boss: null, player, enemies, audio, fx, hud };
	let streams = makeStreams( 1 );
	g.cards = createCards( streams.cards );
	// 每局会换一套新的卡（createCards），战斗和技能模块通过这个代理拿到当前的 stats
	const cardsProxy = { get stats() {

		return g.cards.stats;

	} };

	const floorOf = () => interior.floors[ g.floor ];
	const floorY = () => floorOf().y;
	const ceilY = () => g.floor === 4 ? floorOf().y + 40 : floorOf().y + floorOf().h;
	const nav = () => floorOf().nav;
	const crowd = () => {

		let n = 0;
		for ( const o of enemies.list ) if ( o.alive && Math.hypot( o.x - P.pos.x, o.z - P.pos.z ) < 8 ) n ++;
		return n;

	};

	const hurtPlayer = ( d, dir ) => {

		const got = player.hurt( d, { stats: g.cards.stats, crowd: crowd() }, dir );
		if ( got > 0 ) {

			post.final.uniforms.uHurt.value = 1;
			if ( Math.random() < 0.18 ) audio.say( pick( LINES.hurt ), { gap: 4000 } );
			if ( ! P.alive ) onDeath();

		}

	};

	const hurtPlayerRaw = ( d ) => {

		if ( ! P.alive ) return;
		P.hp -= d;
		if ( P.hp <= 0 ) {

			P.hp = 0; P.alive = false; player.k.play( 'death', 0 ); onDeath();

		}

	};

	g.combat = createCombat( {
		scene, fx, audio, enemies, player, cards: cardsProxy,
		crowd, nav, floorY, ceilY, hurtPlayer,
		boss: () => ( g.boss.B.alive ? g.boss.B : null ),
		hitBoss: ( d, src, ignore ) => g.boss.hit( d, src, ignore ),
		bossN95: () => g.boss.n95Hit(),
		hpMul: () => g.run?.hpMul || 1,
		castUlt: ( type ) => g.abilities.cast( type ),
		ultActive: () => !! g.abilities?.ult.active,
		onCombo, onDefeat
	} );
	g.abilities = createAbilities( {
		scene, fx, audio, enemies, player, cards: cardsProxy, combat: g.combat, post, nav, floorY,
		boss: () => ( g.boss.B.alive ? g.boss.B : null ),
		hitBoss: ( d, src, ignore ) => g.boss.hit( d, src, ignore ),
		onUltStart, onUltEnd
	} );
	g.boss = createBoss( { scene, fx, audio, enemies, combat: g.combat, hurtPlayer, hurtPlayerRaw, onBossDone } );

	// 精神焕发的鸽子：藏在大厅北边绿墙前的花池上，找到它有彩蛋
	const egg = makePigeon();
	egg.position.set( 6, 0.62, - 12 );
	egg.scale.setScalar( 1.6 );
	scene.add( egg );
	let eggFound = false;

	// ------------------------------------------------------------------
	// 开局、楼层
	// ------------------------------------------------------------------
	function newRun() {

		const seed = ( Math.random() * 1e9 ) >>> 0;
		streams = makeStreams( seed );
		const layouts = makeLayouts( seed );
		interior.rebuild( layouts );
		g.cards = createCards( streams.cards );
		g.combat.state.ult = 0; Object.assign( g.combat.state, { combo: 0, comboT: 0, comboBest: 0, kills: 0, gold: 0, xp: 0, level: 1, merit: 0, bonusHp: 0, maskCount: 0, dmgDealt: 0, jackpotN: 0, roomKills: 0 } );
		rebindCards();
		g.run = { seed, layouts, startT: time.value, roomsCleared: 0, room: null, cleared: new Set(), locked: new Set(), chosen: null, wave: 0, waveSpawned: 0, waveDefeated: 0, pendingLevels: 0, hpMul: 1, floorsDone: 0 };
		player.reset( g.cards.stats );
		enemies.clear(); enemies.clearBundles(); g.combat.clear(); g.abilities.clear(); g.boss.hide();
		hud.cardsOwned( [] );

	}

	// 换了卡池以后，combat/abilities 里引用的 cards 要更新
	function rebindCards() {

		for ( const sys of [ g.combat, g.abilities ] ) sys && ( sys.cardsRef = g.cards );

	}

	function enterFloor( i, spawnKey ) {

		g.floor = i;
		interior.setActive( i );
		const f = floorOf();
		const indoor = i >= 1 && i <= 3;
		P.lookLift = i === 4 ? 0.15 : 0;
		P.fovAdd = i === 4 ? 6 : 0;
		world.water.freeze = indoor;
		scene.environmentIntensity = indoor ? 0.28 : 0.55;
		if ( post.gtao ) post.gtao.enabled = indoor || i === 0;
		enemies.clear(); g.combat.clear();
		const e = f.elevators[ spawnKey ];
		if ( e ) {

			const out = ELEVATORS[ spawnKey ].out;
			player.placeAt( e.doorX + out[ 0 ] * 3.4, e.doorZ + out[ 1 ] * 3.4, f.y, ceilY(), Math.atan2( out[ 0 ], out[ 1 ] ) );
			e.target = 1;

		}

		g.abilities.teleportSummons();
		P.firstHitUsed = false;
		if ( i >= 1 && i <= 3 ) {

			const L = f.layout;
			g.run.room = 'A';
			g.run.cleared = new Set( [ 'A' ] );
			g.run.locked = new Set();
			g.run.chosen = null;
			for ( const d of Object.values( f.doors ) ) d.set( false );
			f.doors[ 'A-B1' ].set( true, 0x30ff7a );
			f.doors[ 'A-B2' ].set( true, 0x30ff7a );
			hud.where( FLOOR_NAMES[ i ], '选一扇门：门牌上写着奖励' );
			hud.toast( FLOOR_NAMES[ i ] + ' · 二选一', 3 );
			audio.music( 'lobby' );
			for ( const k of Object.keys( f.elevators ) ) f.elevators[ k ].target = k === spawnKey ? 1 : 0;
			setTimeout( () => {

				if ( f.elevators[ spawnKey ] ) f.elevators[ spawnKey ].target = 0;

			}, 2500 );
			void L;

		} else if ( i === 4 ) {

			P.camDist = 8.5;
			hud.where( FLOOR_NAMES[ 4 ], 'Boss：冠状病毒国王（暂定）' );
			audio.music( 'boss' );
			setTimeout( () => {

				g.boss.start( f.arena, f.y );

			}, 1800 );

		} else {

			hud.where( FLOOR_NAMES[ 0 ], g.run ? '坐西北角的电梯去 2F' : '先去挂号处挂号' );
			audio.music( 'lobby' );

		}

		updateMinimap();

	}

	function updateMinimap() {

		const f = floorOf();
		hud.minimap( f, g.run?.room, g.run?.cleared || new Set(), g.run?.locked || new Set() );

	}

	// 当前在哪个房间
	function roomAt( x, z ) {

		const f = floorOf();
		if ( ! f.rooms || g.floor === 0 || g.floor === 4 ) return null;
		for ( const r of Object.values( f.rooms ) ) {

			const b = r.bounds;
			if ( x > b.x0 + 0.4 && x < b.x1 - 0.4 && z > b.z0 + 0.4 && z < b.z1 - 0.4 ) return r;

		}

		return null;

	}

	function startRoom( r ) {

		const f = floorOf();
		const run = g.run;
		run.room = r.id;
		run.roomsCleared;
		g.combat.state.roomKills = 0;
		P.firstHitUsed = false;
		// 选了 B1 就锁上 B2，反过来一样
		if ( r.id === 'B1' || r.id === 'B2' ) {

			const other = r.id === 'B1' ? 'B2' : 'B1';
			run.chosen = r.id;
			run.locked.add( other );
			f.doors[ 'A-B1' ].set( false ); f.doors[ 'A-B2' ].set( false );
			f.doors[ other + '-D' ].set( false );
			f.doors[ r.id + '-D' ].set( false );

		} else if ( r.id === 'D' ) {

			for ( const d of Object.values( f.doors ) ) d.set( false );

		}

		hud.where( FLOOR_NAMES[ g.floor ], ( r.label || THEME_NAMES[ r.theme ] ) + ( r.sub ? ' · ' + r.sub : '' ) );
		updateMinimap();
		const n = run.roomsCleared + 1;
		run.hpMul = 1 + 0.25 * ( n - 1 ) * ( DEMO ? 0.6 : 1 );
		if ( r.type === 'fight' || r.type === 'elite' ) {

			run.combat = { waves: WAVES[ g.floor ].map( ( w ) => w.map( ( [ t, c ] ) => [ t, Math.ceil( c * ( DEMO ? 0.8 : 1 ) ) ] ) ), wave: - 1, spawned: [], elite: null, ending: false, eliteTimer: 6 };
			audio.music( r.type === 'elite' ? 'boss' : 'fight' );
			audio.play( 'dundun' );
			fx.meme( r.type === 'elite' ? LINES.elite : pick( LINES.roomStart ), { size: 52 } );
			if ( Math.random() < 0.6 ) audio.say( r.type === 'elite' ? '偏方怪来了' : pick( LINES.roomStart ), { gap: 500 } );
			if ( r.type === 'elite' ) {

				const pos = nav().randomFree( streams.spawn, r.bounds.x0 + 3, r.bounds.x1 - 3, r.bounds.z0 + 3, r.bounds.z1 - 3, P.pos, 9 );
				if ( pos ) {

					run.combat.elite = enemies.spawn( 'elite', pos.x, pos.z, floorY(), { hpMul: run.hpMul } );
					puff( pos.x, pos.z, 2 );

				}

				run.combat.waves = [ [ [ 'small', 6 ], [ 'sneeze', 1 ] ] ];

			}

			nextWave();

		} else {

			// 商店、休息、药箱：不打架，门直接开
			run.combat = null;
			audio.music( 'lobby' );
			const line = pick( LINES[ r.type === 'shop' ? 'shop' : r.type === 'rest' ? 'rest' : 'treasure' ] );
			fx.meme( line, { size: 46 } );
			audio.say( line, { gap: 500 } );
			r.interact = { x: r.center.x, z: r.center.z + 2, used: false };
			finishRoom( r, false );

		}

	}

	function puff( x, z, s = 1 ) {

		fx.emit( { x, y: floorY() + 0.5 * s, z, count: 18 * s, speed: 1.6 * s, color: [ 0.55, 0.55, 0.58 ], size: 1.2 * s, life: 1.0, normal: true, gravity: - 0.5, alpha: 0.55, grow: 1.5, jitter: 0.6 * s } );

	}

	function nextWave() {

		const c = g.run.combat;
		c.wave ++;
		const w = c.waves[ c.wave ];
		if ( ! w ) return;
		const r = floorOf().rooms[ g.run.room ];
		const b = r.bounds;
		c.spawned = [];
		for ( const [ type, count ] of w ) {

			for ( let k = 0; k < count; k ++ ) {

				const pos = nav().randomFree( streams.spawn, b.x0 + 1.5, b.x1 - 1.5, b.z0 + 1.5, b.z1 - 1.5, P.pos, 7 );
				if ( ! pos ) continue;
				const o = enemies.spawn( type, pos.x, pos.z, floorY(), { hpMul: g.run.hpMul } );
				if ( o ) {

					c.spawned.push( o );
					puff( pos.x, pos.z, o.r );

				}

			}

		}

		if ( c.wave > 0 ) hud.toast( `第 ${ c.wave + 1 } 波`, 1.5 );

	}

	function updateRoomCombat( dt ) {

		const c = g.run?.combat;
		if ( ! c || c.ending ) return;
		const r = floorOf().rooms[ g.run.room ];
		if ( r.type === 'elite' ) {

			c.eliteTimer -= dt;
			if ( c.eliteTimer <= 0 && enemies.list.length < 14 ) {

				c.eliteTimer = 6;
				const pos = nav().randomFree( streams.spawn, r.bounds.x0 + 2, r.bounds.x1 - 2, r.bounds.z0 + 2, r.bounds.z1 - 2, P.pos, 7 );
				if ( pos ) {

					enemies.spawn( 'small', pos.x, pos.z, floorY(), { hpMul: g.run.hpMul } ); puff( pos.x, pos.z, 0.5 );

				}

			}

			if ( c.elite && ! c.elite.alive ) endRoomCombat( r );
			return;

		}

		// 一波打掉 80% 刷下一波；第 3 波刷完、场上少于 5 个时结束
		const total = c.spawned.length || 1;
		const down = c.spawned.filter( ( o ) => ! o.alive ).length;
		if ( c.wave < c.waves.length - 1 && down / total >= 0.8 ) nextWave();
		else if ( c.wave === c.waves.length - 1 && enemies.list.filter( ( o ) => o.alive ).length < 5 && down / total >= 0.5 ) endRoomCombat( r );

	}

	function endRoomCombat( r ) {

		const c = g.run.combat;
		c.ending = true;
		// 剩下的自动被包住：只飘上天，不给奖励
		for ( const o of enemies.list ) {

			if ( ! o.alive ) continue;
			o.alive = false; o.ceil = ceilY();
			enemies.wrap( o, o.r * 1.15 );

		}

		audio.play( 'horn' );
		const line = pick( LINES.roomClear );
		fx.meme( line, { size: 60, color: '#7dff9a' } );
		audio.say( line, { gap: 300 } );
		g.combat.collectAll();
		setTimeout( () => finishRoom( r, true ), 900 );

	}

	async function finishRoom( r, fought ) {

		const run = g.run;
		const f = floorOf();
		run.cleared.add( r.id );
		run.roomsCleared ++;
		const s = g.cards.stats;
		if ( fought ) {

			P.hp = Math.min( s.maxHp + g.combat.state.bonusHp, P.hp + ( s.maxHp + g.combat.state.bonusHp ) * 0.2 + s.roomHeal );
			if ( s.roomHeal ) fx.pop( '板蓝根 +' + Math.round( s.roomHeal ), null, { size: 30, y: 0.5, color: '#7dff9a' } );
			await levelUps();
			const bias = { attack: 'attack', defense: 'defense', summon: 'summon' }[ r.reward ] || null;
			await offerCards( '房间清空！选一张梗卡', bias ? '这扇门偏向：' + { attack: '攻击', defense: '防御', summon: '召唤' }[ bias ] : r.type === 'elite' ? '精英奖励：至少稀有' : '', bias, r.type === 'elite' ? 1 : 0 );

		}

		// 开门
		if ( r.id === 'B1' || r.id === 'B2' ) f.doors[ r.id + '-D' ].set( true, 0x30ff7a );
		if ( r.id === 'D' ) {

			const dep = f.layout.depart[ 0 ] === 1 ? 'se' : 'nw';
			f.elevators[ dep ].target = 1;
			run.departKey = dep;
			hud.toast( '出口电梯开了！', 3 );
			audio.play( 'ding' );

		}

		audio.music( 'lobby' );
		updateMinimap();

	}

	function xpNeed() {

		return 10 + 8 * g.combat.state.level;

	}

	g.xpNeed = xpNeed;

	async function levelUps() {

		const c = g.combat.state;
		while ( c.xp >= xpNeed() ) {

			c.xp -= xpNeed();
			c.level ++;
			audio.play( 'level' );
			const s = g.cards.stats;
			if ( s.f.huoren ) P.hp = Math.min( s.maxHp + c.bonusHp, P.hp + s.f.huoren );
			fx.meme( pick( LINES.levelUp ), { size: 50, color: '#6ad3ff' } );
			await offerCards( '升级！Lv.' + c.level + ' 选一张梗卡', '', null, 0 );

		}

	}

	async function offerCards( title, sub, bias, minRare ) {

		const list = g.cards.offer( bias, minRare );
		if ( ! list.length ) return;
		g.modal = true;
		input.unlock();
		audio.play( 'scratch' );
		player.k.play( 'pose', 0 );
		const c = await hud.pickCard( list, title, sub, ( id ) => g.cards.stacks( id ) );
		const n = g.cards.take( c );
		const s = g.cards.stats;
		// 最大生命变了：按比例补上
		if ( c.fx === 'fat' ) P.hp += c.v * ( n === 1 ? 1 : 0.5 );
		hud.cardsOwned( g.cards.list() );
		fx.meme( c.name, { size: 58, color: c.rare === 2 || c.cat === 'fusion' ? '#ffd34d' : c.rare === 1 ? '#6ad3ff' : '#ffffff' } );
		hud.subtitle( c.name, c.say );
		audio.say( c.say, { force: true } );
		audio.play( c.rare >= 2 || c.cat === 'fusion' ? 'horn' : 'level' );
		player.k.play( 'reset' );
		g.modal = false;
		if ( g.state === 'play' ) input.lock();
		void s;

	}

	// ------------------------------------------------------------------
	// 事件
	// ------------------------------------------------------------------
	function onCombo( n ) {

		const m = { 10: LINES.combo10, 25: LINES.combo25, 50: LINES.combo50, 100: LINES.combo100 }[ n ];
		if ( m ) {

			fx.meme( n + ' 连击！' + m, { size: 54, color: n >= 50 ? '#ff6ad5' : '#ffd34d' } );
			audio.play( n >= 25 ? 'horn' : 'crit' );
			if ( n >= 25 ) audio.say( m, { gap: 1000 } );

		}

	}

	function onDefeat() {

		if ( g.combat.state.xp >= xpNeed() && ! g.modal && P.alive ) levelUps();

	}

	let ultCam = null;
	function onUltStart( type ) {

		if ( type === 'wave' ) ultCam = { t: 0 };
		audio.play( 'boom', 0.5 );

	}

	function onUltEnd( type ) {

		if ( type === 'dance' ) audio.music( g.floor === 4 ? 'boss' : g.run?.combat && ! g.run.combat.ending ? 'fight' : 'lobby' );

	}

	function onDeath() {

		audio.play( 'sadTrombone' );
		audio.music( '' );
		const line = pick( LINES.death );
		fx.meme( line, { size: 80, color: '#ff4d4d', y: 0.3, jx: 0, dur: 2.5 } );
		audio.say( line, { force: true } );
		post.final.uniforms.uGray.value = 0;
		g.deathT = 0;

	}

	function onBossDone() {

		// 通关
		audio.music( 'win' );
		const line = pick( LINES.win );
		audio.say( line, { force: true } );
		fx.meme( line, { size: 72, color: '#ffd34d' } );
		player.k.play( 'win', 0 );
		for ( let i = 0; i < 12; i ++ ) setTimeout( () => fx.emit( { x: P.pos.x + ( Math.random() - 0.5 ) * 10, y: floorY() + 6 + Math.random() * 4, z: P.pos.z + ( Math.random() - 0.5 ) * 10, count: 30, speed: 6, colors: [ [ 1, 0.3, 0.3 ], [ 1, 0.85, 0.2 ], [ 0.3, 0.8, 1 ], [ 0.5, 1, 0.4 ] ], size: 0.25, life: 1.6, gravity: 4 } ), i * 250 );
		setTimeout( () => showSummary( true ), 4500 );

	}

	function showSummary( win ) {

		const c = g.combat.state, run = g.run;
		const t = Math.round( time.value - ( run?.startT || 0 ) );
		const score = ( win ? 60 : 0 ) + c.kills * 0.4 + c.comboBest * 0.5 + ( run?.roomsCleared || 0 ) * 6;
		const rank = score > 140 ? 0 : score > 95 ? 1 : score > 60 ? 2 : score > 30 ? 3 : 4;
		const best = Number( localStorage.getItem( 'fh_best' ) || 0 );
		if ( score > best ) localStorage.setItem( 'fh_best', String( Math.round( score ) ) );
		hud.summary( win, rank, [
			`用时 ${ Math.floor( t / 60 ) } 分 ${ t % 60 } 秒 · 到达 ${ FLOOR_NAMES[ g.floor ] }`,
			`送走病毒 ${ c.kills } 个 · 最高连击 ${ c.comboBest } · 造成伤害 ${ Math.round( c.dmgDealt ) }`,
			`梗卡 ${ g.cards.list().length } 张：${ g.cards.list().map( ( x ) => x.name ).join( '、' ) || '无' }`,
			`金币 ${ c.gold } · 功德 ${ c.merit } · 本局得分 ${ Math.round( score ) }（历史最高 ${ Math.max( best, Math.round( score ) ) }）`
		] );
		input.unlock();
		g.state = 'summary';

	}

	document.getElementById( 'btnAgain' ).onclick = () => {

		document.getElementById( 'summary' ).classList.add( 'hidden' );
		post.final.uniforms.uGray.value = 0;
		g.run = null;
		newRunCleanup();
		enterFloor( 0, null );
		player.placeAt( 0, 16, 0, ceilYOf( 0 ), Math.PI );
		g.state = 'play';
		input.lock();
		hud.toast( '人生重开！再去挂号处挂个号', 3 );

	};

	function newRunCleanup() {

		g.cards = createCards( makeStreams( 7 ).cards );
		rebindCards();
		player.reset( g.cards.stats );
		enemies.clear(); g.combat.clear(); g.abilities.clear(); g.boss.hide();
		hud.cardsOwned( [] );
		Object.assign( g.combat.state, { ult: 0, combo: 0, kills: 0, gold: 0, xp: 0, level: 1 } );

	}

	const ceilYOf = ( i ) => i === 4 ? interior.floors[ 4 ].y + 40 : interior.floors[ i ].y + interior.floors[ i ].h;

	// 暂停
	input.state.onLockChange = ( locked ) => {

		if ( ! locked && g.state === 'play' && ! g.modal ) {

			g.paused = true;
			hud.pause( true, g.cards.list() );

		}

	};

	document.getElementById( 'btnResume' ).onclick = () => {

		hud.pause( false, [] ); g.paused = false; input.lock();

	};

	document.getElementById( 'btnMute' ).onclick = ( e ) => {

		audio.setMuted( ! audio.muted ); e.target.textContent = '静音：' + ( audio.muted ? '开' : '关' );

	};

	document.getElementById( 'btnRestart' ).onclick = () => {

		hud.pause( false, [] ); g.paused = false;
		showSummary( false );

	};

	// ------------------------------------------------------------------
	// 标题 → 开始
	// ------------------------------------------------------------------
	const titleEl = document.getElementById( 'title' );
	let fly = null;
	function showTitle() {

		titleEl.classList.remove( 'hidden' );
		g.state = 'title';
		post.bokeh.enabled = true;
		titleEl.onclick = () => start();

	}

	function start() {

		titleEl.classList.add( 'hidden' );
		audio.resume();
		audio.music( 'lobby' );
		input.lock();
		post.bokeh.enabled = false;
		enterFloor( 0, null );
		player.placeAt( 0, 50, 0, ceilYOf( 0 ), Math.PI );
		P.camYaw = 0; P.camPitch = 0.28;
		fly = { t: 0, from: camera.position.clone(), q: camera.quaternion.clone(), fov: camera.fov };
		g.state = 'fly';
		hud.show( true );
		setTimeout( () => audio.say( pick( LINES.start ) ), 1200 );

	}

	// 电梯
	async function rideElevator( toFloor, spawnKey, fromKey ) {

		g.modal = true;
		const f = floorOf();
		if ( f.elevators[ fromKey ] ) f.elevators[ fromKey ].target = 0;
		P.controlsLocked = true;
		hud.fade( 1 );
		audio.play( 'ding' );
		await wait( 500 );
		audio.music( 'elevator' );
		hud.elevator( true, FLOOR_NAMES[ g.floor ].slice( 0, 2 ), pick( LINES.elevator ) );
		const steps = toFloor - g.floor;
		for ( let k = 1; k <= Math.max( 1, steps ); k ++ ) {

			await wait( 700 );
			hud.elevator( true, FLOOR_NAMES[ Math.min( 4, g.floor + k ) ].slice( 0, 2 ) );

		}

		await wait( 600 );
		audio.play( 'ding' );
		enterFloor( toFloor, spawnKey );
		hud.elevator( false );
		hud.fade( 0 );
		P.controlsLocked = false;
		g.modal = false;

	}

	const wait = ( ms ) => new Promise( ( r ) => setTimeout( r, ms ) );

	// 互动（E）
	function interactions() {

		const f = floorOf();
		let promptHtml = '';
		const near = ( x, z, r ) => Math.hypot( P.pos.x - x, P.pos.z - z ) < r;
		if ( g.floor === 0 ) {

			if ( ! g.run && near( 0, 9.2, 3.4 ) ) {

				promptHtml = '按 <b>E</b> 挂号（开始一局）';
				if ( input.hit( 'KeyE' ) ) {

					newRun();
					f.elevators.nw.target = 1;
					audio.play( 'cash' );
					fx.meme( '挂号成功：001 号 袋鼠', { size: 50, color: '#7dff9a' } );
					audio.say( '请 零零一号 袋鼠，到二楼就诊', { force: true } );
					hud.where( FLOOR_NAMES[ 0 ], '坐西北角的电梯去 2F（跟着绿线走）' );

				}

			}

			if ( g.run && near( ELEVATORS.nw.x, ELEVATORS.nw.z + 2.2, 3 ) ) {

				promptHtml = '按 <b>E</b> 坐电梯去 2F';
				if ( input.hit( 'KeyE' ) ) rideElevator( 1, 'nw', 'nw' );

			}

			if ( ! eggFound && near( egg.position.x, egg.position.z, 2.6 ) ) {

				promptHtml = '按 <b>E</b> 看看这只鸽子';
				if ( input.hit( 'KeyE' ) ) {

					eggFound = true;
					fx.meme( LINES.pigeon, { size: 40, color: '#7dff9a', dur: 3 } );
					audio.say( LINES.pigeon, { force: true } );
					g.combat.state.gold += 20;
					audio.play( 'cash' );

				}

			}

		} else if ( g.floor >= 1 && g.floor <= 3 && g.run ) {

			const run = g.run;
			const r = f.rooms[ run.room ];
			if ( r && r.interact && ! r.interact.used && near( r.interact.x, r.interact.z, 3.2 ) ) {

				const label = { shop: '按 <b>E</b> 买梗卡（30 金币）', rest: '按 <b>E</b> 躺一会儿（回 40% 生命）', treasure: '按 <b>E</b> 打开药箱' }[ r.type ];
				promptHtml = label;
				if ( input.hit( 'KeyE' ) ) useRoom( r );

			}

			if ( run.departKey ) {

				const e = f.elevators[ run.departKey ];
				if ( near( e.doorX + ELEVATORS[ run.departKey ].out[ 0 ] * 2.2, e.doorZ + ELEVATORS[ run.departKey ].out[ 1 ] * 2.2, 3 ) ) {

					const to = DEMO ? 4 : g.floor + 1;
					promptHtml = '按 <b>E</b> 坐电梯去 ' + FLOOR_NAMES[ to ];
					if ( input.hit( 'KeyE' ) ) {

						run.departKey = null;
						// 下一层从同一个角出来（电梯井是竖直的）
						rideElevator( to, to === 4 ? 'se' : ( f.layout.depart[ 0 ] === 1 ? 'se' : 'nw' ), f.layout.depart[ 0 ] === 1 ? 'se' : 'nw' );

					}

				}

			}

		}

		hud.prompt( promptHtml );

	}

	async function useRoom( r ) {

		const s = g.cards.stats;
		const c = g.combat.state;
		if ( r.type === 'shop' ) {

			if ( c.gold < 30 ) {

				hud.toast( '金币不够（要 30）', 2 ); audio.play( 'hurt' ); return;

			}

			c.gold -= 30;
			audio.play( 'cash' );
			await offerCards( '便利店：选一张梗卡', '花了 30 金币', null, 0 );
			if ( c.gold < 30 ) r.interact.used = true;

		} else if ( r.type === 'rest' ) {

			r.interact.used = true;
			P.hp = Math.min( s.maxHp + c.bonusHp, P.hp + ( s.maxHp + c.bonusHp ) * 0.4 );
			fx.meme( '情绪价值拉满 +40%', { size: 46, color: '#7dff9a' } );
			audio.play( 'level' );

		} else if ( r.type === 'treasure' ) {

			r.interact.used = true;
			audio.play( 'horn' );
			c.gold += 15;
			await offerCards( '药箱：白拿一张梗卡', '还捡到 15 金币', null, 1 );

		}

	}

	// ------------------------------------------------------------------
	// 每帧
	// ------------------------------------------------------------------
	const tmpV = new THREE.Vector3();
	let flowT = 0, idleT = 0;
	function update( dtReal, frozen ) {

		const scale = fx.timeScale( dtReal );
		const dt = ( g.paused || g.modal && g.state !== 'fly' ? 0 : dtReal * scale );
		if ( g.state === 'title' ) {

			camera.position.copy( TITLE_CAM.pos );
			camera.fov = TITLE_CAM.fov;
			camera.lookAt( TITLE_CAM.look );
			camera.updateProjectionMatrix();
			fx.update( dtReal, dtReal );
			input.endFrame();
			return;

		}

		const f = floorOf();
		// 流场：每 0.25 秒从主角位置重算一次
		flowT -= dt;
		if ( flowT <= 0 && enemies.list.length ) {

			flowT = 0.25;
			f.nav.flow( P.pos.x, P.pos.z );

		}

		const stats = g.cards.stats;
		const targets = g.boss.B.alive ? [ ...enemies.list, g.boss.B ] : enemies.list;
		if ( g.state !== 'summary' ) player.update( dt, { nav: f.nav, stats, combat: g.combat, targets } );
		else player.updateCamera( dtReal, f.nav );
		const eliteAura = ( o ) => {

			for ( const e of enemies.list ) if ( e.type === 'elite' && e !== o && e.alive && Math.hypot( e.x - o.x, e.z - o.z ) < 8 ) return true;
			return false;

		};

		enemies.update( dt, {
			player: P, nav: f.nav, flowReady: true, floorY: f.y, ceilY: ceilY(),
			onContact: ( o, dx, dz ) => hurtPlayer( o.T.dmg * ( g.run?.hpMul > 1 ? 1 + ( g.run.hpMul - 1 ) * 0.3 : 1 ), tmpV.set( dx, 0, dz ) ),
			onSneeze: ( o ) => g.combat.sneeze( o ),
			onRumor: ( o ) => g.combat.rumor( o ),
			aura: enemies.list.some( ( e ) => e.type === 'elite' ) ? eliteAura : null
		} );
		g.combat.update( dt );
		g.abilities.update( dt );
		g.boss.update( dt, player );
		fx.update( dt, dtReal );
		post.final.uniforms.uHurt.value = Math.max( 0, post.final.uniforms.uHurt.value - dtReal * 2.5 ) + ( P.hp < stats.maxHp * 0.25 && P.alive ? 0.25 + 0.15 * Math.sin( time.value * 6 ) : 0 );

		// 房间进出
		if ( g.state === 'play' && g.run && g.floor >= 1 && g.floor <= 3 ) {

			const r = roomAt( P.pos.x, P.pos.z );
			if ( r && r.id !== g.run.room && ! g.run.cleared.has( r.id ) && ! g.run.locked.has( r.id ) ) startRoom( r );
			updateRoomCombat( dt );

		}

		// 镜头：开场飞过来；大招时推到袋鼠眼前
		if ( g.state === 'fly' ) {

			fly.t += dtReal / 3.2;
			const k = Math.min( 1, fly.t );
			const e = k * k * ( 3 - 2 * k );
			const endPos = camera.position.clone();
			const endQ = camera.quaternion.clone();
			camera.position.lerpVectors( fly.from, endPos, e );
			camera.quaternion.slerpQuaternions( fly.q, endQ, e );
			camera.fov = fly.fov + ( 60 - fly.fov ) * e;
			camera.updateProjectionMatrix();
			if ( k >= 1 ) {

				g.state = 'play';
				hud.toast( '走进医院，去挂号处挂号', 3 );

			}

		}

		if ( ultCam ) {

			ultCam.t += dtReal;
			const head = player.k.bones.head.getWorldPosition( tmpV );
			const fwd = new THREE.Vector3( Math.sin( P.facing ), 0, Math.cos( P.facing ) );
			const k = Math.min( 1, ultCam.t / 0.25 ) * ( 1 - Math.max( 0, ( ultCam.t - 1.0 ) / 0.35 ) );
			const camWant = head.clone().addScaledVector( fwd, 1.1 ).add( new THREE.Vector3( 0, 0.05, 0 ) );
			camera.position.lerp( camWant, k );
			const q0 = camera.quaternion.clone();
			camera.lookAt( head );
			camera.quaternion.slerpQuaternions( q0, camera.quaternion.clone(), k );
			if ( ultCam.t > 1.35 ) ultCam = null;

		}

		// 倒下：画面慢慢变灰，然后人生总结
		if ( ! P.alive && g.state === 'play' ) {

			g.deathT = ( g.deathT || 0 ) + dtReal;
			post.final.uniforms.uGray.value = Math.min( 1, g.deathT / 1.5 );
			if ( g.deathT > 2.6 ) showSummary( false );

		}

		// 站着不动太久，袋鼠会自言自语
		if ( g.state === 'play' && P.stillT > 0 ) {

			idleT += dt;
			if ( idleT > 14 ) {

				idleT = 0;
				const l = pick( LINES.idle );
				audio.say( l );
				hud.subtitle( '袋鼠', l );

			}

		} else idleT = 0;

		// 鸽子彩蛋：跟着节拍点头
		egg.userData.head.position.z = 0.22 + Math.sin( audio.beat() * Math.PI * 2 ) * 0.07;
		egg.visible = g.floor === 0;

		if ( g.state === 'play' && ! g.modal && ! g.paused ) interactions();
		if ( g.state === 'play' && input.hit( 'Tab' ) ) hud.toggleCards();
		hud.update( g, dtReal );
		input.endFrame();

	}

	// ------------------------------------------------------------------
	// 调试截图用：直接摆好状态
	// ------------------------------------------------------------------
	function applyShot( spec ) {

		const st = spec.state;
		if ( ! st ) {

			if ( spec.view === 'title' ) {

				g.state = 'title'; post.bokeh.enabled = spec.bokeh ?? true;

			}

			return;

		}

		post.bokeh.enabled = false;
		hud.show( true );
		if ( st.run && ! g.run ) newRun();
		enterFloor( st.floor ?? 0, st.spawn || null );
		if ( st.x !== undefined ) player.placeAt( st.x, st.z, floorOf().y, ceilY(), st.yaw ?? 0 );
		if ( st.camYaw !== undefined ) P.camYaw = st.camYaw;
		if ( st.camPitch !== undefined ) P.camPitch = st.camPitch;
		if ( st.camDist !== undefined ) P.camDist = st.camDist;
		g.state = 'play';
		if ( st.enemies ) {

			for ( const [ type, n, r ] of st.enemies ) {

				for ( let i = 0; i < n; i ++ ) {

					const a = Math.random() * Math.PI * 2, d = ( r ?? 6 ) * ( 0.5 + Math.random() * 0.5 );
					const o = enemies.spawn( type, P.pos.x + Math.sin( a ) * d, P.pos.z + Math.cos( a ) * d, floorY(), { instant: true } );
					if ( o ) o.hop = Math.random() * 6;

				}

			}

		}

		if ( st.cards ) for ( const id of st.cards ) g.cards.take( g.cards.all.get( id ) );
		if ( st.boss ) {

			g.boss.start( floorOf().arena, floorOf().y );
			g.boss.B.intro = 0;
			g.boss.mesh.scale.setScalar( 3 );

		}

		if ( st.ult ) {

			g.combat.state.ult = 100;
			g.abilities.cast( st.ult );

		}

		if ( st.action ) player.k.play( st.action, st.actionDur || 0 );
		if ( st.speed ) {

			P.vel.set( Math.sin( P.facing ) * st.speed, 0, Math.cos( P.facing ) * st.speed );

		}

		if ( st.bundles ) for ( let i = 0; i < st.bundles; i ++ ) enemies.wrap( { x: P.pos.x + ( Math.random() - 0.5 ) * 16, y: floorY(), z: P.pos.z + ( Math.random() - 0.5 ) * 16, r: 0.5 + Math.random() * 0.5, ceil: ceilY() } );

	}

	return {
		showTitle, update, applyShot, g,
		debugText: () => `${ g.state } F${ g.floor } room ${ g.run?.room || '-' } e${ enemies.list.length } hp${ Math.round( P.hp ) }`
	};

}
