import * as THREE from 'three';
import { DECK_Y, L } from './layout.js';

// ---------------------------------------------------------------------------
// 主角控制：键盘移动、一蹦一跳的步伐、重力和落地、碰撞，以及第三人称镜头。
// 能走的地面有四种：山顶台地、高架步道、连接平台、空中花园平台。
// 走到边缘会被挡住，不会掉下去。
// ---------------------------------------------------------------------------

const GRAV = 26;
const STEP_UP = 0.65;

export function createPlayer( { character, hill, viaduct, obstacles, camera, dom } ) {

	const pos = new THREE.Vector3();
	const vel = new THREE.Vector3();
	let yaw = 0;
	let onGround = true;
	let airT = 0, airDur = 0.5;
	let crouch = 0;
	let land = 0;
	let hopTimer = 0;
	let jumpQueued = false;
	let anim = 0;
	let surface = 'hill';
	let disc = false;
	let carried = false;
	const keys = new Set();

	// 镜头
	const cam = { yaw: 0, pitch: 0.18, dist: 7.5, tDist: 7.5, look: new THREE.Vector3() };
	let dragging = false, lx = 0, ly = 0, locked = false;

	addEventListener( 'keydown', ( e ) => {

		keys.add( e.code );
		if ( e.code === 'Space' ) {

			jumpQueued = true;
			e.preventDefault();

		}

	} );
	addEventListener( 'keyup', ( e ) => keys.delete( e.code ) );
	addEventListener( 'blur', () => keys.clear() );
	dom.addEventListener( 'pointerdown', ( e ) => {

		dragging = true;
		lx = e.clientX;
		ly = e.clientY;

	} );
	addEventListener( 'pointerup', () => {

		dragging = false;

	} );
	addEventListener( 'pointermove', ( e ) => {

		let dx = 0, dy = 0;
		if ( locked ) {

			dx = e.movementX;
			dy = e.movementY;

		} else if ( dragging ) {

			dx = e.clientX - lx;
			dy = e.clientY - ly;
			lx = e.clientX;
			ly = e.clientY;

		}

		cam.yaw -= dx * 0.0042;
		cam.pitch = THREE.MathUtils.clamp( cam.pitch + dy * 0.0035, - 0.35, 1.2 );

	} );
	dom.addEventListener( 'wheel', ( e ) => {

		cam.tDist = THREE.MathUtils.clamp( cam.tDist * Math.exp( e.deltaY * 0.001 ), 3.5, 40 );
		e.preventDefault();

	}, { passive: false } );
	document.addEventListener( 'pointerlockchange', () => {

		locked = document.pointerLockElement === dom;

	} );

	// 某个位置的地面高度；走不上去的地方返回 null
	function groundAt( x, z, feetY ) {

		let best = null;
		const consider = ( h ) => {

			if ( h === null || h === undefined ) return;
			if ( h > feetY + STEP_UP ) return;
			if ( best === null || h > best ) best = h;

		};

		if ( disc ) {

			const { x: cx, z: cz, discY, discR } = L.rightTower;
			const r = Math.hypot( x - cx, z - cz );
			if ( r < discR - 7 && r > 31 ) consider( discY + 0.3 );
			return best;

		}

		if ( hill.walkable( x, z ) ) consider( hill.height( x, z ) );
		consider( viaduct.walkable( x, z ) );
		// 可以站上去的矮障碍物（花坛、长椅）
		for ( const o of obstacles ) {

			if ( o.h > 1.6 ) continue;
			if ( insideObstacle( o, x, z, 0 ) ) consider( o.base + o.h );

		}

		return best;

	}

	function insideObstacle( o, x, z, pad ) {

		if ( o.box ) {

			const dx = x - o.x, dz = z - o.z;
			const a = dx * o.box.T.x + dz * o.box.T.z;
			const b = dx * o.box.T.z - dz * o.box.T.x;
			return Math.abs( a ) < o.box.hl + pad && Math.abs( b ) < o.box.hw + pad;

		}

		return Math.hypot( x - o.x, z - o.z ) < o.r + pad;

	}

	// 高的障碍物（灯柱、树干）把人推开
	function pushOut( p ) {

		for ( const o of obstacles ) {

			if ( o.disc !== disc ) continue;
			if ( p.y >= o.base + o.h - 0.05 ) continue;
			if ( o.h <= 1.6 && p.y >= o.base + o.h - STEP_UP ) continue;
			if ( o.box ) continue;
			const dx = p.x - o.x, dz = p.z - o.z;
			const d = Math.hypot( dx, dz );
			const min = o.r + 0.35;
			if ( d < min && d > 1e-4 ) {

				p.x = o.x + dx / d * min;
				p.z = o.z + dz / d * min;

			}

		}

	}

	function place( p, faceYaw, onDisc = false ) {

		pos.copy( p );
		disc = onDisc;
		vel.set( 0, 0, 0 );
		yaw = faceYaw;
		cam.yaw = faceYaw + Math.PI;
		onGround = true;
		const g = groundAt( pos.x, pos.z, pos.y + 5 );
		if ( g !== null ) pos.y = g;

	}

	let enabled = false;
	let time = 0;

	function update( dt ) {

		time += dt;
		if ( carried ) {

			// 坐电梯时位置由电梯决定
			vel.set( 0, 0, 0 );
			onGround = true;
			anim += dt;
			character.root.position.copy( pos );
			character.root.rotation.y = yaw;
			character.pose( { t: anim, air: false, crouch: 0, speed: 0 } );
			return;

		}

		const input = new THREE.Vector2(
			( keys.has( 'KeyD' ) || keys.has( 'ArrowRight' ) ? 1 : 0 ) - ( keys.has( 'KeyA' ) || keys.has( 'ArrowLeft' ) ? 1 : 0 ),
			( keys.has( 'KeyW' ) || keys.has( 'ArrowUp' ) ? 1 : 0 ) - ( keys.has( 'KeyS' ) || keys.has( 'ArrowDown' ) ? 1 : 0 )
		);
		if ( ! enabled ) input.set( 0, 0 );
		const moving = input.lengthSq() > 0;
		const run = keys.has( 'ShiftLeft' ) || keys.has( 'ShiftRight' );
		const speed = run ? 10.5 : 5.2;

		// 移动方向相对镜头
		const fwd = new THREE.Vector3( - Math.sin( cam.yaw ), 0, - Math.cos( cam.yaw ) );
		const right = new THREE.Vector3( - fwd.z, 0, fwd.x );
		const want = new THREE.Vector3().addScaledVector( fwd, input.y ).addScaledVector( right, input.x );
		if ( moving ) want.normalize().multiplyScalar( speed );

		// 水平速度：地上跟手，空中保留惯性
		const acc = onGround ? 14 : 3;
		vel.x += ( want.x - vel.x ) * Math.min( 1, acc * dt );
		vel.z += ( want.z - vel.z ) * Math.min( 1, acc * dt );
		if ( moving ) {

			const target = Math.atan2( want.x, want.z );
			let d = target - yaw;
			d = Math.atan2( Math.sin( d ), Math.cos( d ) );
			yaw += d * Math.min( 1, 10 * dt );

		}

		// 起跳：空格大跳；走动时自动一蹦一跳
		if ( onGround ) {

			hopTimer -= dt;
			if ( enabled && jumpQueued ) {

				vel.y = 9.0;
				onGround = false;
				airT = 0;
				airDur = 2 * vel.y / GRAV;
				crouch = 1;
				st.onJump && st.onJump( 1 );

			} else if ( moving && hopTimer <= 0 && land <= 0 ) {

				vel.y = run ? 5.4 : 4.0;
				onGround = false;
				airT = 0;
				airDur = 2 * vel.y / GRAV;
				st.onJump && st.onJump( run ? 0.7 : 0.45 );

			}

		}

		jumpQueued = false;

		// 积分 + 碰撞
		const next = pos.clone();
		next.x += vel.x * dt;
		next.z += vel.z * dt;
		if ( ! onGround ) {

			vel.y -= GRAV * dt;
			airT += dt;

		}

		next.y += vel.y * dt;
		pushOut( next );
		// 新位置下面没有能站的地面（悬崖、桥外、轨道区）就不让过去：先试只沿 x 或只沿 z 滑动
		const ok = ( p ) => groundAt( p.x, p.z, Math.max( p.y, pos.y ) + 0.01 ) !== null;
		if ( ! ok( next ) ) {

			const nx = pos.clone().setX( next.x ).setY( next.y );
			const nz = pos.clone().setZ( next.z ).setY( next.y );
			if ( ok( nx ) ) {

				next.copy( nx );
				vel.z = 0;

			} else if ( ok( nz ) ) {

				next.copy( nz );
				vel.x = 0;

			} else {

				next.x = pos.x;
				next.z = pos.z;
				vel.x = vel.z = 0;

			}

		}

		const g = groundAt( next.x, next.z, Math.max( next.y, pos.y ) + 0.01 );
		if ( g !== null ) {

			if ( onGround ) {

				// 贴地走：上下台阶跟着地面
				if ( g < next.y - 0.9 ) {

					onGround = false;
					airT = 0;
					airDur = 0.6;

				} else next.y = g;

			} else if ( next.y <= g && vel.y <= 0 ) {

				next.y = g;
				onGround = true;
				const impact = Math.min( 1, - vel.y / 12 );
				vel.y = 0;
				land = 0.1 + impact * 0.12;
				crouch = Math.max( crouch, 0.35 + impact * 0.6 );
				hopTimer = run ? 0.02 : 0.06;
				st.onLand && st.onLand( impact );

			}

		}

		pos.copy( next );
		land -= dt;

		// 下蹲：起跳前后、落地时
		const crouchTarget = onGround ? ( land > 0 ? 1 : 0 ) : ( airT < 0.08 ? 0.6 : 0 );
		crouch += ( crouchTarget - crouch ) * Math.min( 1, ( crouchTarget > crouch ? 30 : 9 ) * dt );
		anim += dt;

		character.root.position.copy( pos );
		character.root.rotation.y = yaw;
		const hs = Math.hypot( vel.x, vel.z );
		character.pose( { t: anim, air: ! onGround, airT, airDur, speed: hs, crouch } );
		surface = disc ? 'disc' : ( hill.walkable( pos.x, pos.z ) && Math.abs( hill.height( pos.x, pos.z ) - pos.y ) < 1 ? 'hill' : 'deck' );

	}

	function updateCamera( dt ) {

		cam.dist += ( cam.tDist - cam.dist ) * Math.min( 1, 6 * dt );
		const target = pos.clone().add( new THREE.Vector3( 0, 1.5, 0 ) );
		cam.look.lerp( target, Math.min( 1, 10 * dt ) );
		const cp = Math.cos( cam.pitch );
		const off = new THREE.Vector3( Math.sin( cam.yaw ) * cp, Math.sin( cam.pitch ), Math.cos( cam.yaw ) * cp ).multiplyScalar( cam.dist );
		const want = cam.look.clone().add( off );
		// 镜头不能钻到山里
		if ( ! disc ) {

			const gh = hill.height( want.x, want.z );
			if ( want.y < gh + 1.2 && hill.walkable( want.x, want.z ) ) want.y = gh + 1.2;

		}

		camera.position.copy( want );
		camera.lookAt( cam.look );

	}

	const st = {
		pos, vel, cam, place, update, updateCamera,
		get onGround() {

			return onGround;

		},
		get surface() {

			return surface;

		},
		get disc() {

			return disc;

		},
		set disc( v ) {

			disc = v;

		},
		set carried( v ) {

			carried = v;

		},
		get carried() {

			return carried;

		},
		set enabled( v ) {

			enabled = v;

		},
		get enabled() {

			return enabled;

		},
		requestLock() {

			if ( dom.requestPointerLock ) dom.requestPointerLock();

		},
		get yaw() {

			return yaw;

		},
		onJump: null,
		onLand: null
	};
	return st;

}

export { DECK_Y };
