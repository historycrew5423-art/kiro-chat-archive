import * as THREE from 'three';
import { createKangaroo } from './kangaroo.js';

// ---------------------------------------------------------------------------
// 主角控制 + 第三人称镜头（策划方案 5.1~5.3）：
//   WASD 相对镜头方向移动；鼠标转镜头；屏幕中间偏上是准星，口罩朝准星对准的点飞
//   镜头在身后偏右上方（过肩），室内碰到墙会自动拉近，不会穿出天花板
//   冲刺 = 袋鼠大跳（途中无敌）；空格跳；F 飞踢；左键扔口罩；右键蓄力 N95；Q 大招
// ---------------------------------------------------------------------------

const clamp = THREE.MathUtils.clamp;

export function createPlayer( { scene, camera, assets, input, audio, fx } ) {

	const k = createKangaroo( assets.gltf, 1.75 );
	scene.add( k.root );
	// 补光：跟着镜头的一盏暖色小灯，照亮主角和身边的怪（第三人称游戏常用的做法），影响范围只有 9 米
	const fill = new THREE.PointLight( 0xfff0dd, 7, 9, 2 );
	scene.add( fill );
	const p = {
		k, pos: new THREE.Vector3( 0, 0, 52 ), vel: new THREE.Vector3(), yaw: Math.PI, facing: Math.PI,
		camYaw: Math.PI, camPitch: 0.32, camDist: 6.2,
		hp: 100, alive: true, iframe: 0, dashT: 0, dashCd: 0, dashDir: new THREE.Vector3(), kickCd: 0, kickT: - 1, kicked: false,
		n95Cd: 0, charge: 0, charging: false, fireAcc: 0, holdT: 0, lastFire: - 9, stillT: 0, onGround: true, vy: 0, y: 0,
		floor: null, ceil: 99, floorY: 0, r: 0.42, hurtFlash: 0, reversed: 0, merit: 0, firstHitUsed: false, controlsLocked: false,
		aim: new THREE.Vector3(), aimTarget: null, sizeK: 1, lookLift: 0, fovAdd: 0
	};

	const ray = new THREE.Raycaster();
	const ndc = new THREE.Vector2( 0, 0.08 );
	const fwd = new THREE.Vector3(), right = new THREE.Vector3(), tmp = new THREE.Vector3();

	// 镜头
	const camTarget = new THREE.Vector3();
	const camPos = new THREE.Vector3();
	const lookDir = new THREE.Vector3();
	function updateCamera( dt, nav ) {

		const sens = 0.0022;
		if ( ! p.controlsLocked ) {

			p.camYaw -= input.mouse.dx * sens;
			p.camPitch = clamp( p.camPitch + input.mouse.dy * sens, - 0.35, 1.05 );

		}

		if ( input.mouse.wheel ) p.camDist = clamp( p.camDist + input.mouse.wheel * 0.6, 3.5, 9 );
		camTarget.set( p.pos.x, p.pos.y + 1.55, p.pos.z );
		const cp = Math.cos( p.camPitch ), sp = Math.sin( p.camPitch );
		fwd.set( - Math.sin( p.camYaw ) * cp, - sp, - Math.cos( p.camYaw ) * cp );
		right.set( Math.cos( p.camYaw ), 0, - Math.sin( p.camYaw ) );
		let d = p.camDist;
		// 室内：一步步往后退，碰到墙就停
		if ( nav ) {

			for ( let s = 0.4; s <= d; s += 0.2 ) {

				tmp.copy( camTarget ).addScaledVector( fwd, - s ).addScaledVector( right, 0.65 * Math.min( 1, s / 2 ) );
				const i = nav.ix( tmp.x ), j = nav.iz( tmp.z );
				if ( ! nav.inside( i, j ) || nav.block[ j * nav.W + i ] === 1 ) {

					d = Math.max( 0.6, s - 0.45 ); break;

				}

			}

		}

		camPos.copy( camTarget ).addScaledVector( fwd, - d ).addScaledVector( right, 0.65 * Math.min( 1, d / 2 ) );
		camPos.y = clamp( camPos.y, p.floorY + 0.35, p.ceil - 0.25 );
		camera.position.copy( camPos ).add( fx.shakeOffset );
		fill.position.copy( camPos ).lerp( camTarget, 0.35 ).add( tmp.set( 0, 0.8, 0 ) );
		// Boss 战：镜头视线往上抬一点、视角放宽，大个子 Boss 不会只露半截
		const lp = p.camPitch - p.lookLift, lcp = Math.cos( lp );
		camera.lookAt( tmp.copy( camPos ).add( lookDir.set( - Math.sin( p.camYaw ) * lcp, - Math.sin( lp ), - Math.cos( p.camYaw ) * lcp ) ) );
		const targetFov = 60 + p.fovAdd + ( p.dashT > 0 ? 8 : 0 );
		camera.fov += ( targetFov - camera.fov ) * Math.min( 1, dt * 8 );
		camera.updateProjectionMatrix();

	}

	// 准星对准的点：优先最近的敌人（稍微放大判定，等于轻微的辅助瞄准），没有就取 30 米外
	function computeAim( targets ) {

		ray.setFromCamera( ndc, camera );
		let best = null, bestT = 40;
		for ( const o of targets ) {

			if ( o.spawnT > 0 ) continue;
			const c = tmp.set( o.x, ( o.y ?? 0 ) + ( o.aimY ?? o.r ), o.z );
			const oc = c.sub( ray.ray.origin );
			const t = oc.dot( ray.ray.direction );
			if ( t < 0 || t > bestT ) continue;
			const d2 = oc.lengthSq() - t * t;
			const rr = ( o.r * 1.25 + 0.3 ) ** 2;
			if ( d2 < rr ) {

				bestT = t; best = o;

			}

		}

		if ( best ) {

			p.aim.set( best.x, ( best.y ?? 0 ) + ( best.aimY ?? best.r ), best.z );

		} else {

			p.aim.copy( ray.ray.origin ).addScaledVector( ray.ray.direction, 30 );
			// 不要瞄到地板下面
			if ( p.aim.y < p.floorY + 0.4 ) {

				const t = ( p.floorY + 0.4 - ray.ray.origin.y ) / ray.ray.direction.y;
				if ( t > 0 ) p.aim.copy( ray.ray.origin ).addScaledVector( ray.ray.direction, t );

			}

		}

		p.aimTarget = best;
		return p.aim;

	}

	function update( dt, ctx ) {

		const { nav, stats, combat, targets } = ctx;
		k.st.t += 0;
		p.iframe = Math.max( 0, p.iframe - dt );
		p.dashCd = Math.max( 0, p.dashCd - dt );
		p.kickCd = Math.max( 0, p.kickCd - dt );
		p.n95Cd = Math.max( 0, p.n95Cd - dt );
		p.hurtFlash = Math.max( 0, p.hurtFlash - dt * 2 );
		p.reversed = Math.max( 0, p.reversed - dt );
		if ( stats.regen && p.alive ) p.hp = Math.min( stats.maxHp, p.hp + stats.regen * dt );
		updateCamera( dt, nav );
		if ( ! p.alive ) {

			k.st.speed = 0;
			k.update( dt );
			return;

		}

		// 移动
		const ax = input.axis();
		let mx = ax.x, mz = ax.y;
		if ( p.reversed > 0 ) {

			mx = - mx; mz = - mz;

		}

		if ( p.controlsLocked ) mx = mz = 0;
		const camF = new THREE.Vector3( - Math.sin( p.camYaw ), 0, - Math.cos( p.camYaw ) );
		const camR = new THREE.Vector3( Math.cos( p.camYaw ), 0, - Math.sin( p.camYaw ) );
		const want = new THREE.Vector3().addScaledVector( camF, mz ).addScaledVector( camR, mx );
		if ( want.lengthSq() > 1 ) want.normalize();
		const speed = stats.speed * ( p.charging ? 0.6 : 1 ) * ( k.st.action === 'ult' || k.st.action === 'dance' ? 0 : 1 );
		const accel = p.onGround ? 14 : 5;
		p.vel.x += ( want.x * speed - p.vel.x ) * Math.min( 1, accel * dt );
		p.vel.z += ( want.z * speed - p.vel.z ) * Math.min( 1, accel * dt );

		// 冲刺
		if ( input.hit( 'ShiftLeft' ) || input.hit( 'ShiftRight' ) ) {

			if ( p.dashCd <= 0 && ! p.controlsLocked ) {

				p.dashDir.copy( want.lengthSq() > 0.01 ? want : new THREE.Vector3( Math.sin( p.facing ), 0, Math.cos( p.facing ) ) ).normalize();
				p.dashT = stats.dashTime;
				p.dashCd = stats.dashCd;
				p.iframe = Math.max( p.iframe, stats.dashIframe );
				k.play( 'dash', stats.dashTime + 0.12 );
				audio.play( 'dash' );
				combat.onDash();

			}

		}

		let vx = p.vel.x, vz = p.vel.z;
		if ( p.dashT > 0 ) {

			p.dashT -= dt;
			const ds = stats.dashDist / stats.dashTime;
			vx = p.dashDir.x * ds; vz = p.dashDir.z * ds;
			fx.emit( { x: p.pos.x, y: p.pos.y + 0.3, z: p.pos.z, count: 2, speed: 1, color: [ 0.9, 0.9, 1 ], size: 0.35, life: 0.35, normal: true, gravity: - 1, alpha: 0.5 } );

		}

		nav.move( p.pos, vx * dt, vz * dt, p.r );

		// 跳
		if ( input.hit( 'Space' ) && p.onGround && ! p.controlsLocked ) {

			p.vy = 7.2; p.onGround = false;
			audio.play( 'jump' );

		}

		if ( ! p.onGround ) {

			p.vy -= 20 * dt;
			p.y += p.vy * dt;
			if ( p.y <= 0 ) {

				p.y = 0; p.vy = 0; p.onGround = true;
				fx.emit( { x: p.pos.x, y: p.floorY + 0.1, z: p.pos.z, count: 8, speed: 2, color: [ 0.8, 0.8, 0.8 ], size: 0.3, life: 0.4, normal: true, gravity: 0, alpha: 0.4 } );

			}

		}

		p.pos.y = p.floorY + p.y;
		const hSpeed = Math.hypot( vx, vz );
		p.stillT = hSpeed < 0.3 && p.onGround ? p.stillT + dt : 0;

		// 朝向：攻击、蓄力时朝镜头方向，否则朝移动方向
		const aiming = input.mouse.left || p.charging || ( performance.now() / 1000 - p.lastFire ) < 0.6;
		let targetYaw = p.facing;
		if ( aiming ) targetYaw = Math.atan2( - Math.sin( p.camYaw ), - Math.cos( p.camYaw ) );
		else if ( hSpeed > 0.5 ) targetYaw = Math.atan2( vx, vz );
		let dy = targetYaw - p.facing;
		while ( dy > Math.PI ) dy -= Math.PI * 2;
		while ( dy < - Math.PI ) dy += Math.PI * 2;
		p.facing += dy * Math.min( 1, dt * ( aiming ? 18 : 10 ) );
		k.root.position.copy( p.pos );
		k.root.rotation.y = p.facing;
		k.root.scale.setScalar( stats.size * p.sizeK );
		// 动画参数：速度、移动方向相对身体的角度
		k.st.speed = p.dashT > 0 ? 0 : hSpeed;
		const moveYaw = Math.atan2( vx, vz );
		let rel = moveYaw - p.facing;
		while ( rel > Math.PI ) rel -= Math.PI * 2;
		while ( rel < - Math.PI ) rel += Math.PI * 2;
		k.st.moveDir = hSpeed > 0.3 ? rel : 0;
		k.st.ground = p.onGround;
		k.st.vy = p.vy;
		k.st.aimPitch = aiming ? clamp( p.camPitch - 0.3, - 0.6, 0.6 ) : 0;
		k.st.charge = p.charge;

		// 攻击
		computeAim( targets );
		if ( ! p.controlsLocked ) {

			if ( input.mouse.left ) {

				p.holdT += dt;
				// 400 次咖啡：按住 4 秒后射速翻倍（叠层后更快）
				const rateMul = stats.f.coffee ? 1 + Math.min( 1, p.holdT / 4 ) * stats.f.coffee : 1;
				p.fireAcc += dt * stats.maskRate * rateMul * ( p.jiayou > 0 ? 2 : 1 );
				while ( p.fireAcc >= 1 ) {

					p.fireAcc -= 1;
					const hand = k.handPos( new THREE.Vector3() );
					combat.fireMasks( hand, p.aim, rateMul >= 2 );
					p.lastFire = performance.now() / 1000;
					k.play( 'throw', 0.24 );

				}

			} else {

				p.holdT = 0;
				p.fireAcc = Math.min( p.fireAcc, 0.9 );

			}

			// N95：右键按住蓄力，至少 0.4 秒，松开扔出
			if ( input.mouse.right && p.n95Cd <= 0 ) {

				if ( ! p.charging ) {

					p.charging = true; p.charge = 0; k.play( 'charge', 0 );

				}

				p.charge = Math.min( 1, p.charge + dt / 1.0 );
				if ( Math.random() < 0.3 ) audio.play( 'charge', p.charge );

			}

			if ( p.charging && ! input.mouse.right ) {

				p.charging = false;
				if ( p.charge >= 0.4 ) {

					const hand = k.handPos( new THREE.Vector3() );
					combat.fireN95( hand, p.aim, p.charge );
					p.n95Cd = stats.n95Cd;
					k.play( 'throw', 0.3 );

				} else k.play( 'reset' );
				p.charge = 0;

			}

			// 飞踢
			if ( input.hit( 'KeyF' ) && p.kickCd <= 0 ) {

				p.kickCd = stats.kickCd;
				p.kickT = 0; p.kicked = false;
				k.play( 'kick', 0.62 );
				p.vy = 5.5; p.onGround = false;
				const f2 = new THREE.Vector3( Math.sin( p.facing ), 0, Math.cos( p.facing ) );
				p.vel.addScaledVector( f2, 7 );
				audio.play( 'jump' );

			}

			if ( p.kickT >= 0 ) {

				p.kickT += dt;
				if ( ! p.kicked && p.kickT > 0.18 ) {

					p.kicked = true;
					combat.kick( p.pos, p.facing );

				}

				if ( p.kickT > 0.65 ) p.kickT = - 1;

			}

			if ( input.hit( 'KeyQ' ) ) combat.tryUlt();

		}

		k.update( dt );

	}

	function hurt( amount, ctx, from ) {

		if ( ! p.alive || p.iframe > 0 ) return 0;
		const s = ctx.stats;
		if ( s.f.laoshi && ! p.firstHitUsed ) {

			p.firstHitUsed = true; p.iframe = 0.6;
			fx.pop( '已老实，求放过', new THREE.Vector3( p.pos.x, p.pos.y + 2.2, p.pos.z ), { size: 26, color: '#7dff9a' } );
			return 0;

		}

		let d = amount * ( 1 - s.armor );
		if ( s.f.calm && ctx.crowd >= 8 ) d *= 0.75;
		if ( p.jiayou > 0 ) d *= 0.5;
		if ( s.f.zhaijia && p.stillT > 1 ) d *= 0.5;
		p.hp -= d;
		p.iframe = 0.6;
		p.hurtFlash = 1;
		k.play( 'hit', 0.3 );
		fx.shake( 0.35 );
		audio.play( 'hurt' );
		if ( from ) {

			p.vel.x += from.x * 6; p.vel.z += from.z * 6;

		}

		if ( p.hp <= 0 ) {

			p.hp = 0; p.alive = false;
			k.play( 'death', 0 );

		}

		return d;

	}

	function placeAt( x, z, floorY, ceil, yaw ) {

		p.pos.set( x, floorY, z );
		p.floorY = floorY;
		p.ceil = ceil;
		p.y = 0; p.vy = 0; p.onGround = true;
		p.vel.set( 0, 0, 0 );
		if ( yaw !== undefined ) {

			p.facing = yaw; p.camYaw = yaw + Math.PI;

		}

	}

	function reset( stats ) {

		p.hp = stats.maxHp; p.alive = true; p.iframe = 0; p.dashCd = p.kickCd = p.n95Cd = 0;
		p.charge = 0; p.charging = false; p.merit = 0; p.jiayou = 0; p.reversed = 0;
		k.play( 'reset' );

	}

	p.jiayou = 0;
	return { p, k, update, hurt, placeAt, reset, updateCamera, computeAim };

}
