import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { LINES } from '../data/memes.js';

// ---------------------------------------------------------------------------
// Boss：冠状病毒国王【形象暂定】（策划方案 v0.2 第 7.4 节，场地按屋顶圆台缩小到半径 13.5 米）
//   一阶段 100%~66%：身上 6 根大刺，受到的伤害 -80%；N95 打中一次掉一根（掉完正常受伤）
//                     每 6 秒扇形射 5 根刺（先亮 0.8 秒红线）；每 10 秒召 8 个小病毒
//   二阶段 66%~33%：刺全掉；每 8 秒跳起来砸主角的位置（提前 1 秒红圈），落地冲击波扩散到 12 米，跳起来能躲
//   三阶段 33%~0：变大到 8 米，间隔缩短 30%，灰雾从边缘往里收（每秒 0.5 米，最小半径 6 米），站在雾里每秒掉 5 血；
//                  进入三阶段时大招条直接充满
//   打败：灰雾散开，被一个巨大的 N95 包住，飘上天
// 所有攻击都有预警；每个阶段切换只触发一次。
// ---------------------------------------------------------------------------

function colorize( g, c ) {

	const n = g.attributes.position.count;
	const a = new Float32Array( n * 3 );
	for ( let i = 0; i < n; i ++ ) a.set( c, i * 3 );
	g.setAttribute( 'color', new THREE.BufferAttribute( a, 3 ) );
	if ( g.attributes.uv ) g.deleteAttribute( 'uv' );
	return g.index ? g.toNonIndexed() : g;

}

function bossGeometry() {

	const parts = [];
	const body = new THREE.IcosahedronGeometry( 1, 5 );
	parts.push( colorize( body, [ 0.5, 0.36, 0.62 ] ) );
	for ( let i = 0; i < 70; i ++ ) {

		const y = 1 - ( i + 0.5 ) / 70 * 2, r = Math.sqrt( 1 - y * y ), a = i * 2.39996;
		const d = new THREE.Vector3( Math.cos( a ) * r, y, Math.sin( a ) * r );
		if ( d.z > 0.4 && Math.abs( d.y ) < 0.55 ) continue;
		const q = new THREE.Quaternion().setFromUnitVectors( new THREE.Vector3( 0, 1, 0 ), d );
		const m = new THREE.Matrix4().makeRotationFromQuaternion( q );
		parts.push( colorize( new THREE.CylinderGeometry( 0.03, 0.045, 0.2, 6 ).translate( 0, 1.06, 0 ).applyMatrix4( m ), [ 0.42, 0.3, 0.52 ] ) );
		parts.push( colorize( new THREE.SphereGeometry( 0.07, 8, 6 ).translate( 0, 1.18, 0 ).applyMatrix4( m ), y > 0.6 ? [ 1, 0.82, 0.25 ] : [ 0.98, 0.5, 0.7 ] ) );

	}

	for ( const s of [ - 1, 1 ] ) {

		parts.push( colorize( new THREE.SphereGeometry( 0.26, 16, 12 ).scale( 1, 1.2, 0.6 ).translate( s * 0.3, 0.25, 0.88 ), [ 1, 1, 1 ] ) );
		parts.push( colorize( new THREE.SphereGeometry( 0.12, 12, 10 ).scale( 1, 1.1, 0.5 ).translate( s * 0.27, 0.2, 1.03 ), [ 0.05, 0.05, 0.05 ] ) );
		// 怒眉
		parts.push( colorize( new THREE.BoxGeometry( 0.34, 0.07, 0.08 ).rotateZ( s * 0.35 ).translate( s * 0.3, 0.55, 0.92 ), [ 0.15, 0.08, 0.18 ] ) );
		// 八字胡
		parts.push( colorize( new THREE.CapsuleGeometry( 0.05, 0.22, 4, 8 ).rotateZ( Math.PI / 2 + s * 0.4 ).translate( s * 0.15, - 0.12, 1.0 ), [ 0.15, 0.08, 0.1 ] ) );

	}

	parts.push( colorize( new THREE.TorusGeometry( 0.2, 0.04, 6, 16, Math.PI ).rotateZ( Math.PI ).translate( 0, - 0.3, 0.95 ), [ 0.25, 0.05, 0.1 ] ) );
	// 王冠
	const crown = new THREE.CylinderGeometry( 0.42, 0.48, 0.28, 16, 1, true ).translate( 0, 1.05, 0 );
	parts.push( colorize( crown, [ 1, 0.78, 0.2 ] ) );
	for ( let i = 0; i < 8; i ++ ) {

		const a = i / 8 * Math.PI * 2;
		parts.push( colorize( new THREE.ConeGeometry( 0.08, 0.26, 6 ).translate( Math.cos( a ) * 0.43, 1.32, Math.sin( a ) * 0.43 ), [ 1, 0.82, 0.25 ] ) );
		parts.push( colorize( new THREE.SphereGeometry( 0.05, 6, 6 ).translate( Math.cos( a ) * 0.46, 1.05, Math.sin( a ) * 0.46 ), i % 2 ? [ 0.9, 0.1, 0.2 ] : [ 0.2, 0.5, 1 ] ) );

	}

	return mergeGeometries( parts, false );

}

export function createBoss( ctx ) {

	const { scene, fx, audio, enemies, combat } = ctx;
	const mat = new THREE.MeshStandardMaterial( { vertexColors: true, roughness: 0.3, envMapIntensity: 0.9 } );
	const mesh = new THREE.Mesh( bossGeometry(), mat );
	mesh.castShadow = true;
	mesh.visible = false;
	scene.add( mesh );
	// 6 根护盾大刺
	const shieldMat = new THREE.MeshStandardMaterial( { color: 0xb43c8c, roughness: 0.25, emissive: 0x3a0a2a, emissiveIntensity: 0.6 } );
	const shieldGeo = mergeGeometries( [ new THREE.CylinderGeometry( 0.07, 0.12, 0.7, 10 ).translate( 0, 1.25, 0 ), new THREE.SphereGeometry( 0.2, 12, 10 ).translate( 0, 1.62, 0 ) ] );
	const shields = [];
	for ( let i = 0; i < 6; i ++ ) {

		const s = new THREE.Mesh( shieldGeo, shieldMat );
		const a = i / 6 * Math.PI * 2;
		s.quaternion.setFromUnitVectors( new THREE.Vector3( 0, 1, 0 ), new THREE.Vector3( Math.cos( a ), 0.25, Math.sin( a ) ).normalize() );
		s.castShadow = true;
		mesh.add( s );
		shields.push( s );

	}

	// 灰雾：场地边缘的一圈半透明墙
	const fogMat = new THREE.MeshBasicMaterial( { color: 0x8a8f99, transparent: true, opacity: 0.0, depthWrite: false, side: THREE.DoubleSide } );
	const fog = new THREE.Mesh( new THREE.CylinderGeometry( 1, 1, 6, 64, 1, true ), fogMat );
	fog.renderOrder = 4;
	scene.add( fog );
	const lines = [];
	const lineMat = new THREE.MeshBasicMaterial( { color: 0xff2020, transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending } );

	const B = {
		alive: false, isBoss: true, x: 0, z: 0, y: 0, r: 3, aimY: 3, hp: 2500, maxHp: 2500, phase: 1, shields: 6,
		timers: {}, flags: {}, size: 6, fogR: 99, wrapT: - 1, arena: null, slam: null, wave: null, fan: null, spawnT: 0
	};

	function start( arena, floorY ) {

		B.arena = arena;
		B.x = arena.x; B.z = arena.z - 6; B.y = floorY;
		B.hp = B.maxHp; B.phase = 1; B.shields = 6; B.alive = true; B.size = 5; B.r = 2.2; B.aimY = 2.5;
		B.timers = { fan: 4, summon: 6, slam: 5 };
		B.flags = {}; B.fogR = arena.r + 2; B.wrapT = - 1; B.slam = null; B.wave = null; B.fan = null;
		for ( const s of shields ) s.visible = true;
		// 上一局三阶段变红了，这里恢复原色
		mat.color.set( 0xffffff ); mesh.rotation.z = 0; fogMat.opacity = 0;
		mesh.visible = true;
		mesh.position.set( B.x, B.y, B.z );
		mesh.scale.setScalar( 0.01 );
		B.intro = 1.6;
		audio.play( 'dundun' );
		audio.play( 'roar' );

	}

	function hit( d, src, ignoreShield ) {

		if ( ! B.alive || B.wrapT >= 0 || B.intro > 0 ) return 0;
		let dd = d;
		if ( B.phase === 1 && B.shields > 0 && ! ignoreShield ) dd *= 0.2;
		B.hp -= dd;
		mat.emissive.setRGB( 0.6, 0.6, 0.6 );
		B.flash = 1;
		fx.dmg( dd, new THREE.Vector3( B.x, B.y + B.size * 0.9, B.z ), dd > 80 );
		combat.state.dmgDealt += dd;
		if ( B.hp <= 0 ) {

			B.hp = 0;
			defeat();

		}

		return dd;

	}

	function n95Hit() {

		if ( B.phase !== 1 || B.shields <= 0 ) return;
		B.shields --;
		shields[ B.shields ].visible = false;
		audio.play( 'crit' );
		fx.pop( '破防了！', new THREE.Vector3( B.x, B.y + B.size + 1, B.z ), { size: 36, color: '#ff6ad5' } );
		if ( B.shields === 0 ) {

			fx.meme( LINES.bossPhase2, { size: 50 } );
			audio.play( 'boom', 0.6 );

		}

	}

	function defeat() {

		B.wrapT = 0;
		audio.play( 'boom', 1 );
		audio.play( 'horn' );
		fx.meme( LINES.bossDown, { size: 56, color: '#ffd34d', dur: 2.4 } );
		audio.say( '国王被包住，送走了', { force: true } );
		for ( const o of enemies.list ) if ( o.alive ) combat.damageEnemy( o, o.hp + 1, 'ult' );
		// 一个巨大的口罩包把国王包住，慢慢飘上天
		enemies.wrap( { x: B.x, y: B.y + B.size * 0.15, z: B.z, r: B.size * 0.5, ceil: B.y + 80 }, B.size * 0.62 );
		fx.emit( { x: B.x, y: B.y + B.size * 0.5, z: B.z, count: 70, speed: 7, color: [ 0.92, 0.96, 1.0 ], size: 0.7, life: 1.1, normal: true, gravity: - 0.5, alpha: 0.7, grow: 1.6 } );
		fx.shake( 0.9 );

	}

	const tmp = new THREE.Vector3();
	function update( dt, player ) {

		if ( ! mesh.visible ) return;
		const P = player.p;
		const A = B.arena;
		if ( B.flash ) {

			B.flash = Math.max( 0, B.flash - dt * 5 );
			mat.emissive.setRGB( B.flash * 0.6, B.flash * 0.6, B.flash * 0.6 );

		}

		// 被打败：巨大的 N95 包住，慢慢飘上天
		if ( B.wrapT >= 0 ) {

			B.wrapT += dt;
			B.alive = B.wrapT < 0.1;
			// 国王本体缩进口罩包里（口罩包是 enemies.wrap 生成的，自己往上飘）
			mesh.scale.setScalar( B.size / 2 * Math.max( 0.01, 1 - B.wrapT * 3.5 ) );
			mesh.rotation.z = Math.sin( B.wrapT * 2 ) * 0.2;
			fogMat.opacity = Math.max( 0, fogMat.opacity - dt );
			if ( B.wrapT > 6 ) {

				mesh.visible = false;
				ctx.onBossDone();

			}

			return;

		}

		if ( ! B.alive ) return;
		// 登场：从地上长出来
		if ( B.intro > 0 ) {

			B.intro -= dt;
			const k = 1 - Math.max( 0, B.intro ) / 1.6;
			mesh.scale.setScalar( B.size / 2 * ( k * k * ( 3 - 2 * k ) ) );
			mesh.position.set( B.x, B.y + B.size / 2 * k, B.z );
			if ( B.intro <= 0 ) {

				fx.meme( LINES.boss, { size: 60, color: '#ff4d8b', dur: 2.2 } );
				audio.say( '冠状病毒国王，驾到', { force: true, pitch: 0.5, rate: 0.95 } );
				fx.shake( 0.8 );

			}

			return;

		}

		const frac = B.hp / B.maxHp;
		// 阶段切换（一次性）
		if ( frac < 0.66 && ! B.flags.p2 ) {

			B.flags.p2 = true; B.phase = 2; B.shields = 0;
			for ( const s of shields ) s.visible = false;
			fx.meme( LINES.bossPhase2, { size: 56 } );
			audio.play( 'dundun' );
			B.timers.slam = 2;

		}

		if ( frac < 0.33 && ! B.flags.p3 ) {

			B.flags.p3 = true; B.phase = 3;
			fx.meme( LINES.bossPhase3, { size: 64, color: '#ff3030' } );
			audio.say( '国王红温了', { force: true } );
			audio.play( 'roar' );
			combat.state.ult = 100;
			fx.pop( '大招充满了！按 Q', null, { size: 34, y: 0.42, color: '#ffd34d', dur: 2 } );

		}

		const speedMul = B.phase === 3 ? 1.5 : 1;
		const intervalMul = B.phase === 3 ? 0.7 : 1;
		const targetSize = B.phase === 3 ? 7 : 5;
		B.size += ( targetSize - B.size ) * Math.min( 1, dt * 1.5 );
		B.r = B.size * 0.43;
		B.aimY = B.size * 0.5;
		if ( B.phase === 3 ) mat.color.lerp( new THREE.Color( 1.0, 0.45, 0.45 ), Math.min( 1, dt ) );

		const dx = P.pos.x - B.x, dz = P.pos.z - B.z, dist = Math.hypot( dx, dz ) || 1;
		const yaw = Math.atan2( dx, dz );
		// 砸地
		if ( B.slam ) {

			const s = B.slam;
			s.t += dt;
			const k = Math.min( 1, s.t / 1.0 );
			B.x = s.fx + ( s.tx - s.fx ) * k; B.z = s.fz + ( s.tz - s.fz ) * k;
			mesh.position.set( B.x, B.y + B.size / 2 + Math.sin( k * Math.PI ) * 7, B.z );
			if ( s.t >= 1.0 ) {

				B.slam = null;
				fx.shake( 1.0 ); fx.flash( 0.25, 0xffd0d0 );
				audio.play( 'boom', 1 );
				fx.emit( { x: B.x, y: B.y + 0.3, z: B.z, count: 50, speed: 10, color: [ 0.6, 0.55, 0.6 ], size: 0.6, life: 0.8, normal: true, gravity: 2, alpha: 0.6 } );
				if ( Math.hypot( P.pos.x - B.x, P.pos.z - B.z ) < 4 + 0.5 ) ctx.hurtPlayer( 25, tmp.set( P.pos.x - B.x, 0, P.pos.z - B.z ).normalize() );
				B.wave = { t: 0, x: B.x, z: B.z, hit: false };
				fx.ring( B.x, B.y, B.z, 12, 0xff6060, 0.8 );

			}

		} else {

			// 慢慢走向主角
			const sp = ( B.phase === 3 ? 3 : 2 ) * dt;
			if ( dist > B.r + 1 ) {

				B.x += dx / dist * sp; B.z += dz / dist * sp;

			}

			// 不出圆台
			const ax = B.x - A.x, az = B.z - A.z, ad = Math.hypot( ax, az );
			if ( ad > A.r - B.r ) {

				B.x = A.x + ax / ad * ( A.r - B.r ); B.z = A.z + az / ad * ( A.r - B.r );

			}

			mesh.position.set( B.x, B.y + B.size / 2 + Math.abs( Math.sin( performance.now() / 300 ) ) * 0.2, B.z );

		}

		mesh.scale.setScalar( B.size / 2 );
		mesh.rotation.y += ( ( ( yaw - mesh.rotation.y + Math.PI * 3 ) % ( Math.PI * 2 ) ) - Math.PI ) * Math.min( 1, dt * 3 );
		// 冲击波：往外扩散到 12 米，跳起来能躲过
		if ( B.wave ) {

			const w = B.wave;
			w.t += dt;
			const r = 12 * Math.min( 1, w.t / 0.8 );
			const pd = Math.hypot( P.pos.x - w.x, P.pos.z - w.z );
			if ( ! w.hit && Math.abs( pd - r ) < 0.7 && P.y < 0.5 ) {

				w.hit = true;
				ctx.hurtPlayer( 15, tmp.set( P.pos.x - w.x, 0, P.pos.z - w.z ).normalize() );

			}

			if ( w.t > 0.8 ) B.wave = null;

		}

		// 碰撞伤害
		if ( dist < B.r + 0.6 && ! B.slam ) ctx.hurtPlayer( 20, tmp.set( dx / dist, 0, dz / dist ) );

		// 扇形射刺：先亮红线
		B.timers.fan -= dt;
		if ( B.timers.fan <= 0 && ! B.fan && ! B.slam ) {

			B.fan = { t: 0, yaw };
			for ( let i = - 2; i <= 2; i ++ ) {

				const l = new THREE.Mesh( new THREE.PlaneGeometry( 0.25, 14 ).rotateX( - Math.PI / 2 ).translate( 0, 0, 7 ), lineMat );
				l.position.set( B.x, B.y + 0.08, B.z );
				l.rotation.y = yaw + i * Math.PI / 12;
				scene.add( l );
				lines.push( l );

			}

		}

		if ( B.fan ) {

			B.fan.t += dt;
			for ( const l of lines ) l.material.opacity = 0.35 + 0.35 * Math.sin( B.fan.t * 25 );
			if ( B.fan.t >= 0.8 ) {

				for ( let i = - 2; i <= 2; i ++ ) {

					const a = B.fan.yaw + i * Math.PI / 12;
					combat.enemyShot( 'spike', B.x + Math.sin( a ) * B.r, B.y + 1.2, B.z + Math.cos( a ) * B.r, Math.sin( a ) * 12, 0, Math.cos( a ) * 12, 15, { r: 0.35, life: 2.2 } );

				}

				for ( const l of lines ) scene.remove( l );
				lines.length = 0;
				B.fan = null;
				B.timers.fan = 6 * intervalMul;
				audio.play( 'bigThrow' );

			}

		}

		// 召小病毒
		B.timers.summon -= dt;
		if ( B.timers.summon <= 0 ) {

			const n = B.phase === 1 ? 8 : 6;
			B.timers.summon = ( B.phase === 1 ? 10 : 12 ) * intervalMul;
			for ( let i = 0; i < n; i ++ ) {

				const a = i / n * Math.PI * 2;
				const r = A.r * 0.7;
				enemies.spawn( 'small', A.x + Math.cos( a ) * r, A.z + Math.sin( a ) * r, B.y );

			}

			fx.pop( '小的们，上！', new THREE.Vector3( B.x, B.y + B.size + 1, B.z ), { size: 30, color: '#ff8ad5' } );

		}

		// 二、三阶段：砸地
		if ( B.phase >= 2 && ! B.slam ) {

			B.timers.slam -= dt;
			if ( B.timers.slam <= 0 ) {

				B.timers.slam = 8 * intervalMul;
				B.slam = { t: 0, fx: B.x, fz: B.z, tx: P.pos.x, tz: P.pos.z };
				fx.ring( P.pos.x, B.y, P.pos.z, 4, 0xff2020, 1.0, { grow: false, warn: true } );
				fx.pop( '跳起来躲冲击波！', null, { size: 28, y: 0.44, color: '#ff8080' } );

			}

		}

		// 三阶段：灰雾往里收
		if ( B.phase === 3 ) {

			B.fogR = Math.max( 6, Math.min( B.fogR, A.r + 0.5 ) - dt * 0.5 );
			fogMat.opacity = Math.min( 0.55, fogMat.opacity + dt * 0.3 );
			fog.position.set( A.x, B.y + 3, A.z );
			fog.scale.set( B.fogR, 1, B.fogR );
			if ( Math.hypot( P.pos.x - A.x, P.pos.z - A.z ) > B.fogR ) {

				B.fogDmg = ( B.fogDmg || 0 ) + dt;
				if ( B.fogDmg > 0.25 ) {

					B.fogDmg = 0;
					ctx.hurtPlayerRaw( 1.25 );

				}

			}

		}

	}

	function hide() {

		mesh.visible = false; B.alive = false; fogMat.opacity = 0;
		for ( const l of lines ) scene.remove( l );
		lines.length = 0;

	}

	return { B, start, hit, n95Hit, update, hide, mesh };

}
