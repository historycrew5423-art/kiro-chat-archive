import * as THREE from 'three';

// ---------------------------------------------------------------------------
// 主角：袋鼠火枪手（用户提供的 Tripo 模型，Blender 里绑了 25 根骨头，见 rig/rig.py）。
// 载入后按原骨架的静止位置重建一套“零旋转”的骨头，这样每根骨头的局部坐标轴都和角色坐标一致：
//   绕 X 轴转：腿和手臂 -X 往前摆、+X 往后摆；躯干 +X 往前弯
//   绕 Z 轴转：左臂 +Z、右臂 -Z 是往外张开
//   绕 Y 轴转：+Y 向左转
// 动画全部用代码算：走、跑、跳、冲刺（袋鼠跳）、扔口罩、蓄力、飞踢、受伤、倒地、跳舞（科目三）、发大招。
// 耳朵和披风用弹簧做二次运动。
// ---------------------------------------------------------------------------

const lerp = THREE.MathUtils.lerp;
const clamp = THREE.MathUtils.clamp;
const ease = ( t ) => t * t * ( 3 - 2 * t );

export function createKangaroo( gltf, height = 1.75 ) {

	gltf.scene.updateMatrixWorld( true );
	let src = null;
	gltf.scene.traverse( ( o ) => {

		if ( o.isSkinnedMesh && ! src ) src = o;

	} );
	const oldBones = src.skeleton.bones;
	const geo = src.geometry.clone();
	geo.applyMatrix4( src.matrixWorld );
	// 原骨头的静止位置（角色坐标）
	const rest = oldBones.map( ( b ) => new THREE.Vector3().setFromMatrixPosition( b.matrixWorld ) );
	// GLTFLoader 会把名字里的点去掉（hand.R → handR），这里改回来
	const bones = oldBones.map( ( b ) => {

		const nb = new THREE.Bone();
		nb.name = b.name.replace( /^(ear|shoulder|upper_arm|forearm|hand|thigh|shin|foot)(L|R)$/, '$1.$2' );
		return nb;

	} );
	const index = new Map( oldBones.map( ( b, i ) => [ b, i ] ) );
	let rootIdx = 0;
	oldBones.forEach( ( b, i ) => {

		const pi = index.get( b.parent );
		if ( pi === undefined ) {

			rootIdx = i;
			bones[ i ].position.copy( rest[ i ] );

		} else {

			bones[ pi ].add( bones[ i ] );
			bones[ i ].position.copy( rest[ i ] ).sub( rest[ pi ] );

		}

	} );
	const mat = src.material;
	mat.envMapIntensity = 0.7;
	const mesh = new THREE.SkinnedMesh( geo, mat );
	mesh.add( bones[ rootIdx ] );
	mesh.updateMatrixWorld( true );
	mesh.bind( new THREE.Skeleton( bones ) );
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	mesh.frustumCulled = false;

	const root = new THREE.Group();
	const H0 = 0.977;
	const scale = height / H0;
	mesh.scale.setScalar( scale );
	root.add( mesh );

	const B = Object.fromEntries( bones.map( ( b ) => [ b.name, b ] ) );
	const restPos = Object.fromEntries( bones.map( ( b ) => [ b.name, b.position.clone() ] ) );

	// 姿势：每根骨头一组欧拉角，加上髋部位移
	const names = bones.map( ( b ) => b.name );
	const pose = () => {

		const p = { off: new THREE.Vector3(), rot: {} };
		for ( const n of names ) p.rot[ n ] = [ 0, 0, 0 ];
		return p;

	};

	const P = pose(), A = pose();
	const blend = ( dst, src2, w, only ) => {

		for ( const n of names ) {

			if ( only && ! only.has( n ) ) continue;
			const d = dst.rot[ n ], s = src2.rot[ n ];
			d[ 0 ] = lerp( d[ 0 ], s[ 0 ], w ); d[ 1 ] = lerp( d[ 1 ], s[ 1 ], w ); d[ 2 ] = lerp( d[ 2 ], s[ 2 ], w );

		}

		if ( ! only ) dst.off.lerp( src2.off, w );

	};

	const UPPER = new Set( [ 'spine', 'chest', 'neck', 'head', 'shoulder.L', 'shoulder.R', 'upper_arm.L', 'upper_arm.R', 'forearm.L', 'forearm.R', 'hand.L', 'hand.R' ] );
	const clear = ( p ) => {

		for ( const n of names ) {

			const r = p.rot[ n ]; r[ 0 ] = r[ 1 ] = r[ 2 ] = 0;

		}

		p.off.set( 0, 0, 0 );

	};

	const R = ( p, n, x = 0, y = 0, z = 0 ) => {

		const r = p.rot[ n ];
		if ( r ) {

			r[ 0 ] += x; r[ 1 ] += y; r[ 2 ] += z;

		}

	};

	// 二次运动：耳朵、披风
	const springs = { earL: { a: 0, v: 0 }, earR: { a: 0, v: 0 }, cape: { a: 0, v: 0 }, capeZ: { a: 0, v: 0 } };
	const spring = ( s, target, k, d, dt ) => {

		s.v += ( ( target - s.a ) * k - s.v * d ) * dt;
		s.a += s.v * dt;
		return s.a;

	};

	let phase = 0;
	const st = {
		t: 0, speed: 0, moveDir: 0, // moveDir：移动方向相对身体朝向的角度
		ground: true, airT: 0, vy: 0,
		action: null, actionT: 0, actionDur: 0, // throw / charge / kick / dash / hit / dance / ult / win / death / sit
		charge: 0, aimPitch: 0, twist: 0
	};
	let prevSpeed = 0;

	function locomotion( dt ) {

		clear( P );
		const sp = st.speed;
		const walk = clamp( sp / 3.2, 0, 1 );
		const run = clamp( ( sp - 3.2 ) / 4.0, 0, 1 );
		const freq = lerp( 1.7, 2.6, run ) * ( sp > 0.2 ? 1 : 0 );
		// 步频跟着速度走：步幅 * 步频 = 速度
		phase += dt * ( sp > 0.15 ? Math.max( 5.5, sp * lerp( 2.0, 1.35, run ) ) : 0 );
		const s = Math.sin( phase ), c = Math.cos( phase );
		const back = Math.abs( st.moveDir ) > 2.0 ? - 1 : 1; // 倒着走
		const A1 = lerp( 0.45, 0.8, run ) * walk;
		R( P, 'thigh.L', - A1 * s * back );
		R( P, 'thigh.R', A1 * s * back );
		const kneeL = Math.max( 0, Math.sin( phase - 0.6 ) ) * lerp( 0.7, 1.4, run ) * walk + 0.05;
		const kneeR = Math.max( 0, Math.sin( phase + Math.PI - 0.6 ) ) * lerp( 0.7, 1.4, run ) * walk + 0.05;
		R( P, 'shin.L', kneeL );
		R( P, 'shin.R', kneeR );
		R( P, 'foot.L', - kneeL * 0.35 + A1 * s * 0.3 * back );
		R( P, 'foot.R', - kneeR * 0.35 - A1 * s * 0.3 * back );
		// 骨盆转、身体起伏
		R( P, 'hips', 0, 0.12 * s * walk, 0.05 * s * walk );
		R( P, 'spine', 0.04 * walk + run * 0.22, - 0.08 * s * walk );
		R( P, 'chest', run * 0.08, - 0.1 * s * walk );
		P.off.y = - Math.abs( c ) * 0.012 * walk - run * 0.02 + Math.abs( s ) * 0.012 * walk;
		// 侧着走：大腿往外张
		const side = Math.sin( st.moveDir ) * walk;
		R( P, 'thigh.L', 0, 0, side * 0.25 * Math.max( 0, s ) );
		R( P, 'thigh.R', 0, 0, side * 0.25 * Math.max( 0, - s ) );
		// 手臂反向摆，跑步时手肘弯
		const armA = lerp( 0.35, 0.9, run ) * walk;
		R( P, 'upper_arm.L', armA * s * back, 0, 0.08 );
		R( P, 'upper_arm.R', - armA * s * back, 0, - 0.08 );
		R( P, 'forearm.L', - lerp( 0.25, 1.3, run ) * walk - 0.1 );
		R( P, 'forearm.R', - lerp( 0.25, 1.3, run ) * walk - 0.1 );
		// 站着：呼吸、看两边
		const idle = 1 - walk;
		const br = Math.sin( st.t * 1.9 );
		R( P, 'chest', 0.02 * br * idle );
		R( P, 'head', Math.sin( st.t * 0.53 ) * 0.05 * idle, Math.sin( st.t * 0.37 ) * 0.3 * idle );
		R( P, 'upper_arm.L', 0, 0, ( 0.06 + 0.02 * br ) * idle );
		R( P, 'upper_arm.R', 0, 0, - ( 0.06 + 0.02 * br ) * idle );
		R( P, 'head', - run * 0.15 );
		// 空中：腿收起来
		if ( ! st.ground ) {

			const up = clamp( st.vy / 6, - 1, 1 );
			R( P, 'thigh.L', - 0.7 - up * 0.2 ); R( P, 'thigh.R', - 0.4 );
			R( P, 'shin.L', 1.2 ); R( P, 'shin.R', 0.9 );
			R( P, 'upper_arm.L', - 0.3, 0, 0.6 ); R( P, 'upper_arm.R', - 0.3, 0, - 0.6 );
			R( P, 'spine', 0.1 );

		}

	}

	// 动作：t 从 0 到 1
	function action( name, t, dt ) {

		clear( A );
		let w = 1, only = null;
		switch ( name ) {

			case 'throw': {

				// 过肩扔口罩：举手 → 甩出去
				only = UPPER;
				const k = t < 0.35 ? ease( t / 0.35 ) : 1 - ease( ( t - 0.35 ) / 0.65 ) * 0.85;
				const snap = t < 0.35 ? 0 : ease( Math.min( 1, ( t - 0.35 ) / 0.25 ) );
				R( A, 'upper_arm.R', lerp( - 2.6, - 1.2, snap ) * k, 0, - 0.25 * k );
				R( A, 'forearm.R', lerp( - 1.4, - 0.1, snap ) * k );
				R( A, 'chest', 0.15 * snap * k, lerp( 0.35, - 0.35, snap ) * k );
				R( A, 'upper_arm.L', - 0.6 * k, 0, 0.3 * k );
				R( A, 'head', 0, lerp( - 0.2, 0.2, snap ) * k );
				w = 1;
				break;

			}

			case 'charge': {

				// 蓄力 N95：右手往后拉，身子拧过去，越蓄越抖
				only = UPPER;
				const k = ease( Math.min( 1, t * 3 ) );
				const jit = Math.sin( st.t * 60 ) * 0.04 * st.charge;
				R( A, 'upper_arm.R', ( 0.9 + jit ) * k, 0, - 0.5 * k );
				R( A, 'forearm.R', - 1.6 * k );
				R( A, 'chest', - 0.05 * k, 0.55 * k + jit );
				R( A, 'upper_arm.L', - 1.3 * k, 0, 0.2 * k );
				R( A, 'forearm.L', - 0.3 * k );
				R( A, 'head', 0, - 0.4 * k );
				break;

			}

			case 'kick': {

				// 袋鼠飞踢：腾空，双脚并拢往前蹬，身子后仰，手往上甩
				const up = Math.sin( Math.min( 1, t / 0.9 ) * Math.PI );
				const ext = t < 0.25 ? ease( t / 0.25 ) : t < 0.7 ? 1 : 1 - ease( ( t - 0.7 ) / 0.3 );
				R( A, 'thigh.L', - 1.55 * ext - 0.3 * ( 1 - ext ) ); R( A, 'thigh.R', - 1.45 * ext - 0.3 * ( 1 - ext ) );
				R( A, 'shin.L', 0.1 + 1.2 * ( 1 - ext ) ); R( A, 'shin.R', 0.1 + 1.2 * ( 1 - ext ) );
				R( A, 'foot.L', - 0.4 * ext ); R( A, 'foot.R', - 0.4 * ext );
				R( A, 'spine', - 0.55 * ext ); R( A, 'chest', - 0.25 * ext );
				R( A, 'head', 0.4 * ext );
				R( A, 'upper_arm.L', - 2.4 * up, 0, 0.5 ); R( A, 'upper_arm.R', - 2.4 * up, 0, - 0.5 );
				A.off.y = up * 0.15;
				break;

			}

			case 'dash': {

				// 冲刺 = 一个大袋鼠跳：双腿并拢收起，身子前倾，手往后甩
				const k = Math.sin( t * Math.PI );
				R( A, 'thigh.L', - 0.9 * k ); R( A, 'thigh.R', - 0.9 * k );
				R( A, 'shin.L', 1.5 * k ); R( A, 'shin.R', 1.5 * k );
				R( A, 'spine', 0.55 * k );
				R( A, 'upper_arm.L', 1.1 * k, 0, 0.3 * k ); R( A, 'upper_arm.R', 1.1 * k, 0, - 0.3 * k );
				R( A, 'head', - 0.4 * k );
				A.off.y = k * 0.05;
				break;

			}

			case 'hit': {

				only = UPPER;
				const k = Math.sin( Math.min( 1, t ) * Math.PI );
				R( A, 'spine', - 0.35 * k ); R( A, 'head', - 0.45 * k, 0.2 * k );
				R( A, 'upper_arm.L', - 0.9 * k, 0, 0.6 * k ); R( A, 'upper_arm.R', - 0.9 * k, 0, - 0.6 * k );
				w = 0.9;
				break;

			}

			case 'death': {

				// 往后一倒，四仰八叉
				const k = ease( Math.min( 1, t * 1.6 ) );
				R( A, 'root', - 1.45 * k );
				R( A, 'upper_arm.L', - 0.4 * k, 0, 1.3 * k ); R( A, 'upper_arm.R', - 0.4 * k, 0, - 1.3 * k );
				R( A, 'thigh.L', - 0.4 * k, 0, 0.4 * k ); R( A, 'thigh.R', - 0.2 * k, 0, - 0.3 * k );
				R( A, 'shin.L', 0.6 * k ); R( A, 'head', 0.3 * k, 0.4 * k );
				A.off.y = - 0.02 * k;
				break;

			}

			case 'dance': {

				// 科目三（致敬，不是原舞）：左右扭胯，手臂交替甩，膝盖踩拍子
				const b = st.t * Math.PI * 2 * 2.1;
				const sw = Math.sin( b * 0.5 );
				R( A, 'hips', 0, sw * 0.4, sw * 0.12 );
				R( A, 'spine', 0.05, - sw * 0.35, - sw * 0.1 );
				R( A, 'thigh.L', - 0.25 * Math.max( 0, Math.sin( b ) ), 0, 0.15 );
				R( A, 'thigh.R', - 0.25 * Math.max( 0, - Math.sin( b ) ), 0, - 0.15 );
				R( A, 'shin.L', 0.5 * Math.max( 0, Math.sin( b ) ) ); R( A, 'shin.R', 0.5 * Math.max( 0, - Math.sin( b ) ) );
				R( A, 'upper_arm.L', - 0.5 - 0.8 * Math.max( 0, sw ), 0.5, 0.9 + 0.5 * Math.sin( b ) );
				R( A, 'upper_arm.R', - 0.5 - 0.8 * Math.max( 0, - sw ), - 0.5, - 0.9 - 0.5 * Math.sin( b + 1 ) );
				R( A, 'forearm.L', - 1.2 ); R( A, 'forearm.R', - 1.2 );
				R( A, 'hand.L', 0, 0, Math.sin( b * 2 ) * 0.6 ); R( A, 'hand.R', 0, 0, Math.sin( b * 2 + 1 ) * 0.6 );
				R( A, 'head', 0.1 * Math.sin( b ), sw * 0.3 );
				A.off.y = - 0.03 - 0.03 * Math.abs( Math.sin( b ) );
				break;

			}

			case 'ult': {

				// 发大招：两手合在腰侧聚气 → 往前一推
				const gather = t < 0.55 ? ease( t / 0.55 ) : 1;
				const push = t < 0.55 ? 0 : ease( Math.min( 1, ( t - 0.55 ) / 0.15 ) );
				const k = 1 - ( t > 0.85 ? ease( ( t - 0.85 ) / 0.15 ) : 0 );
				R( A, 'thigh.L', - 0.5 * k, 0, 0.35 * k ); R( A, 'thigh.R', 0.35 * k, 0, - 0.35 * k );
				R( A, 'shin.L', 0.5 * k ); R( A, 'shin.R', 0.3 * k );
				R( A, 'spine', lerp( - 0.15, 0.25, push ) * k, lerp( 0.6, 0, push ) * k );
				R( A, 'upper_arm.L', lerp( 0.3, - 1.55, push ) * k * gather, 0, lerp( - 0.5, 0.05, push ) * k );
				R( A, 'upper_arm.R', lerp( 0.6, - 1.55, push ) * k * gather, 0, lerp( - 0.1, - 0.05, push ) * k );
				R( A, 'forearm.L', lerp( - 1.6, 0, push ) * k ); R( A, 'forearm.R', lerp( - 1.6, 0, push ) * k );
				R( A, 'hand.L', 0, 0, - 0.6 * push * k ); R( A, 'hand.R', 0, 0, 0.6 * push * k );
				R( A, 'head', 0.1 * k );
				A.off.y = - 0.06 * k;
				break;

			}

			case 'win': {

				const b = st.t * 9;
				R( A, 'upper_arm.L', - 2.8, 0, 0.3 + Math.sin( b ) * 0.2 ); R( A, 'upper_arm.R', - 2.8, 0, - 0.3 - Math.sin( b ) * 0.2 );
				R( A, 'head', - 0.3 );
				A.off.y = Math.abs( Math.sin( b * 0.5 ) ) * 0.12;
				break;

			}

			case 'pose': {

				// 选卡时的得意姿势：叉腰
				only = UPPER;
				R( A, 'upper_arm.L', 0.2, 0, 0.7 ); R( A, 'upper_arm.R', 0.2, 0, - 0.7 );
				R( A, 'forearm.L', - 1.8, 0, 0 ); R( A, 'forearm.R', - 1.8, 0, 0 );
				R( A, 'chest', - 0.1 ); R( A, 'head', - 0.2, 0.3 );
				break;

			}

		}

		return { w, only };

	}

	function apply( dt ) {

		// 耳朵：速度变化时往后甩，平时轻轻抖
		const acc = ( st.speed - prevSpeed ) / Math.max( dt, 1e-3 );
		prevSpeed = st.speed;
		const earT = clamp( st.speed * 0.08 + acc * 0.02 + ( st.ground ? 0 : - st.vy * 0.05 ), - 0.6, 0.9 );
		const eL = spring( springs.earL, earT, 90, 9, dt ), eR = spring( springs.earR, earT * 0.9, 80, 8, dt );
		const capeT = clamp( 0.1 + st.speed * 0.09 + ( st.ground ? 0 : 0.3 ), 0, 1.1 );
		const cp = spring( springs.cape, capeT, 40, 6, dt );
		const cz = spring( springs.capeZ, Math.sin( st.t * 1.3 ) * 0.06 - Math.sin( st.moveDir ) * st.speed * 0.03, 30, 5, dt );
		R( P, 'ear.L', eL + Math.sin( st.t * 2.3 ) * 0.03, 0, - 0.08 ); R( P, 'ear.R', eR + Math.sin( st.t * 2.1 + 1 ) * 0.03, 0, 0.08 );
		R( P, 'cape1', cp * 0.7, 0, cz ); R( P, 'cape2', cp * 0.5, 0, cz * 0.5 );
		for ( const n of names ) {

			const r = P.rot[ n ];
			B[ n ].rotation.set( r[ 0 ], r[ 1 ], r[ 2 ] );

		}

		B.hips.position.copy( restPos.hips ).addScaledVector( P.off, 1 / scale * 1.0 );

	}

	function update( dt ) {

		st.t += dt;
		locomotion( dt );
		if ( st.action ) {

			st.actionT += dt;
			const t = st.actionDur > 0 ? Math.min( 1, st.actionT / st.actionDur ) : ( st.actionT % 1 );
			const { w, only } = action( st.action, t, dt );
			// 动作开始和结束时淡入淡出，避免跳帧
			const fade = st.actionDur > 0 ? Math.min( 1, st.actionT / 0.06, ( st.actionDur - st.actionT ) / 0.08 + ( st.action === 'death' ? 99 : 0 ) ) : Math.min( 1, st.actionT / 0.15 );
			blend( P, A, clamp( fade, 0, 1 ) * w, only );
			if ( only ) {

				// 上半身动作时，下半身照常走路；髋部位移也照常
			} else P.off.copy( A.off ).lerp( P.off, 1 - clamp( fade, 0, 1 ) );
			if ( st.actionDur > 0 && st.actionT >= st.actionDur && st.action !== 'death' ) st.action = null;

		}

		// 瞄准：上半身跟着镜头俯仰
		R( P, 'chest', - st.aimPitch * 0.35, st.twist * 0.5 );
		R( P, 'spine', 0, st.twist * 0.3 );
		R( P, 'head', - st.aimPitch * 0.3, st.twist * 0.2 );
		apply( dt );

	}

	function play( name, dur = 0 ) {

		if ( st.action === 'death' && name !== 'reset' ) return;
		st.action = name === 'reset' ? null : name;
		st.actionT = 0;
		st.actionDur = dur;

	}

	// 右手的世界坐标（扔口罩的出手点）
	const _v = new THREE.Vector3();
	function handPos( out ) {

		B[ 'hand.R' ].getWorldPosition( out || _v );
		return out || _v;

	}

	update( 0.016 );
	return { root, mesh, bones: B, st, update, play, handPos, height };

}
