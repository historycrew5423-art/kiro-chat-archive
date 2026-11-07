import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// ---------------------------------------------------------------------------
// 敌人（策划方案 v0.2 第 7 节）：圆滚滚的卡通病毒，像搪胶玩具，紫灰色，头上一圈小刺，大眼睛，有点蠢。
//   small 小病毒、medium 中病毒（被打败 50% 分裂成两个小的）、big 大病毒（普通口罩只有一半伤害，撞飞主角）、
//   sneeze 喷嚏病毒（远程：鼓起来 0.6 秒再喷 3 颗飞沫）、elite 精英偏方怪（头顶白酒瓶、醋壶、板蓝根，吐谣言气泡）
// 每种一个 InstancedMesh（身体、刺、眼睛、嘴合成一个几何体，用顶点色），一种怪一次绘制。
// 打败的敌人不会死：被口罩包住，变成口罩包，晃晃悠悠飘到天花板（屋顶上就飘上天），越积越多。
// ---------------------------------------------------------------------------

export const TYPES = {
	small: { name: '小病毒', hp: 10, speed: 4.5, dmg: 5, r: 0.38, xp: 1, ult: 0.5, gold: 0.25, cap: 220, spikes: 14, color: [ 0.64, 0.54, 0.74 ], tip: [ 0.98, 0.6, 0.72 ] },
	medium: { name: '中病毒', hp: 40, speed: 3, dmg: 10, r: 0.7, xp: 3, ult: 1.5, gold: 0.6, cap: 90, spikes: 18, color: [ 0.56, 0.46, 0.7 ], tip: [ 0.95, 0.5, 0.6 ] },
	big: { name: '大病毒', hp: 150, speed: 2, dmg: 20, r: 1.35, xp: 10, ult: 5, gold: 2, cap: 30, spikes: 24, color: [ 0.42, 0.35, 0.56 ], tip: [ 0.9, 0.35, 0.5 ] },
	sneeze: { name: '喷嚏病毒', hp: 30, speed: 2.5, dmg: 6, r: 0.62, xp: 3, ult: 1.5, gold: 0.6, cap: 60, spikes: 12, color: [ 0.55, 0.7, 0.48 ], tip: [ 0.95, 0.85, 0.4 ], nose: true },
	elite: { name: '偏方怪', hp: 400, speed: 2, dmg: 15, r: 1.15, xp: 30, ult: 10, gold: 12, cap: 4, spikes: 20, color: [ 0.38, 0.3, 0.46 ], tip: [ 0.98, 0.78, 0.3 ], props: true }
};

function colorize( g, c ) {

	const n = g.attributes.position.count;
	const a = new Float32Array( n * 3 );
	for ( let i = 0; i < n; i ++ ) a.set( c, i * 3 );
	g.setAttribute( 'color', new THREE.BufferAttribute( a, 3 ) );
	g.deleteAttribute( 'uv' );
	return g;

}

function virusGeometry( T ) {

	const parts = [];
	const body = new THREE.IcosahedronGeometry( 1, 4 );
	// 身体：轻微的凹凸
	const p = body.attributes.position;
	for ( let i = 0; i < p.count; i ++ ) {

		const x = p.getX( i ), y = p.getY( i ), z = p.getZ( i );
		const k = 1 + Math.sin( x * 7 + y * 3 ) * Math.sin( z * 6 - y * 4 ) * 0.025;
		p.setXYZ( i, x * k, y * k * 0.94, z * k );

	}

	body.computeVertexNormals();
	parts.push( colorize( body, T.color ) );
	// 刺：斐波那契球面上均匀分布，避开脸（+Z 前方）
	const n = T.spikes;
	for ( let i = 0; i < n * 2; i ++ ) {

		const y = 1 - ( i + 0.5 ) / ( n * 2 ) * 2;
		const r = Math.sqrt( 1 - y * y );
		const a = i * 2.39996;
		const d = new THREE.Vector3( Math.cos( a ) * r, y, Math.sin( a ) * r );
		if ( d.z > 0.45 && Math.abs( d.y ) < 0.6 ) continue;
		if ( i % 2 ) continue;
		const stem = new THREE.CylinderGeometry( 0.06, 0.08, 0.34, 8 );
		stem.translate( 0, 1.1, 0 );
		const tip = new THREE.SphereGeometry( 0.13, 10, 8 );
		tip.translate( 0, 1.3, 0 );
		const q = new THREE.Quaternion().setFromUnitVectors( new THREE.Vector3( 0, 1, 0 ), d );
		const m = new THREE.Matrix4().makeRotationFromQuaternion( q );
		parts.push( colorize( stem.applyMatrix4( m ), T.color.map( ( v ) => v * 0.85 ) ) );
		parts.push( colorize( tip.applyMatrix4( m ), T.tip ) );

	}

	// 大眼睛
	for ( const s of [ - 1, 1 ] ) {

		const eye = new THREE.SphereGeometry( 0.3, 16, 12 ).scale( 1, 1.15, 0.6 );
		eye.translate( s * 0.32, 0.22, 0.86 );
		parts.push( colorize( eye, [ 1, 1, 1 ] ) );
		const pupil = new THREE.SphereGeometry( 0.14, 12, 10 ).scale( 1, 1.1, 0.5 );
		pupil.translate( s * 0.28, 0.18, 1.04 );
		parts.push( colorize( pupil, [ 0.05, 0.05, 0.07 ] ) );
		const shine = new THREE.SphereGeometry( 0.045, 8, 6 );
		shine.translate( s * 0.24, 0.27, 1.1 );
		parts.push( colorize( shine, [ 1, 1, 1 ] ) );

	}

	// 嘴：一道弧
	const mouth = new THREE.TorusGeometry( 0.22, 0.045, 6, 16, Math.PI );
	mouth.rotateZ( Math.PI );
	mouth.translate( 0, - 0.12, 0.96 );
	parts.push( colorize( mouth, [ 0.25, 0.08, 0.12 ] ) );
	if ( T.nose ) {

		const nose = new THREE.SphereGeometry( 0.17, 12, 10 );
		nose.translate( 0, 0.02, 1.0 );
		parts.push( colorize( nose, [ 0.95, 0.35, 0.3 ] ) );

	}

	if ( T.props ) {

		// 偏方怪头上的东西：白酒瓶、醋壶、一包板蓝根
		const bottle = new THREE.CylinderGeometry( 0.16, 0.16, 0.5, 12 ); bottle.translate( - 0.35, 1.25, 0 );
		const neck = new THREE.CylinderGeometry( 0.06, 0.08, 0.25, 10 ); neck.translate( - 0.35, 1.62, 0 );
		const label = new THREE.CylinderGeometry( 0.165, 0.165, 0.18, 12 ); label.translate( - 0.35, 1.22, 0 );
		const pot = new THREE.SphereGeometry( 0.26, 14, 10 ); pot.translate( 0.3, 1.18, - 0.1 );
		const spout = new THREE.CylinderGeometry( 0.04, 0.06, 0.3, 8 ); spout.rotateZ( - 0.9 ); spout.translate( 0.6, 1.25, - 0.1 );
		const box = new THREE.BoxGeometry( 0.42, 0.3, 0.2 ); box.translate( 0.05, 1.18, 0.35 );
		parts.push( colorize( bottle, [ 0.9, 0.94, 0.96 ] ), colorize( neck, [ 0.9, 0.94, 0.96 ] ), colorize( label, [ 0.85, 0.15, 0.15 ] ) );
		parts.push( colorize( pot, [ 0.25, 0.18, 0.12 ] ), colorize( spout, [ 0.25, 0.18, 0.12 ] ), colorize( box, [ 0.25, 0.65, 0.35 ] ) );

	}

	const flat = parts.map( ( g ) => ( g.index ? g.toNonIndexed() : g ) );
	return mergeGeometries( flat, false );

}

function vinylMaterial() {

	const m = new THREE.MeshStandardMaterial( { vertexColors: true, roughness: 0.32, metalness: 0, envMapIntensity: 0.9 } );
	m.onBeforeCompile = ( shader ) => {

		// 搪胶玩具的边缘高光
		shader.fragmentShader = shader.fragmentShader.replace( '#include <emissivemap_fragment>', `#include <emissivemap_fragment>
			{
				float rim = pow( 1.0 - clamp( dot( normalize( normal ), normalize( vViewPosition ) ), 0.0, 1.0 ), 3.0 );
				totalEmissiveRadiance += diffuseColor.rgb * rim * 0.35;
				#ifdef USE_INSTANCING_COLOR
					totalEmissiveRadiance += max( vec3( 0.0 ), vColor.rgb - 1.0 ) * 0.0;
				#endif
			}` );

	};

	m.customProgramCacheKey = () => 'vinyl';
	return m;

}

// 口罩包：白色鼓鼓的小包，两边耳挂
function bundleGeometry() {

	const parts = [];
	const body = new THREE.SphereGeometry( 1, 20, 14 ).scale( 1.0, 0.55, 0.75 );
	parts.push( colorize( body, [ 0.93, 0.96, 0.98 ] ) );
	// 褶子
	for ( const y of [ - 0.2, 0, 0.2 ] ) {

		const pleat = new THREE.TorusGeometry( 1, 0.025, 4, 32 ).rotateX( Math.PI / 2 ).scale( 1.0, 1, 0.76 );
		pleat.translate( 0, y, 0 );
		parts.push( colorize( pleat, [ 0.62, 0.78, 0.9 ] ) );

	}

	for ( const s of [ - 1, 1 ] ) {

		const loop = new THREE.TorusGeometry( 0.42, 0.04, 6, 20 ).rotateY( Math.PI / 2 );
		loop.translate( s * 1.1, 0.1, 0 );
		parts.push( colorize( loop, [ 0.97, 0.97, 0.97 ] ) );

	}

	return mergeGeometries( parts.map( ( g ) => ( g.index ? g.toNonIndexed() : g ) ), false );

}

export function createEnemies( { scene } ) {

	const mat = vinylMaterial();
	const meshes = {};
	for ( const [ k, T ] of Object.entries( TYPES ) ) {

		const im = new THREE.InstancedMesh( virusGeometry( T ), mat, T.cap );
		im.count = 0;
		im.castShadow = true;
		im.receiveShadow = true;
		im.frustumCulled = false;
		im.instanceColor = new THREE.InstancedBufferAttribute( new Float32Array( T.cap * 3 ).fill( 1 ), 3 );
		scene.add( im );
		meshes[ k ] = im;

	}

	const bundleMat = new THREE.MeshStandardMaterial( { vertexColors: true, roughness: 0.7, envMapIntensity: 0.8 } );
	const BCAP = 420;
	const bundles = new THREE.InstancedMesh( bundleGeometry(), bundleMat, BCAP );
	bundles.count = 0;
	bundles.castShadow = true;
	bundles.frustumCulled = false;
	scene.add( bundles );
	const bundleList = [];

	const list = [];
	let nextId = 1;
	const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), pv = new THREE.Vector3(), e = new THREE.Euler();
	const white = new THREE.Color();

	function spawn( type, x, z, y, opts = {} ) {

		const T = TYPES[ type ];
		if ( list.filter( ( o ) => o.type === type ).length >= T.cap ) return null;
		const hpMul = opts.hpMul ?? 1;
		const o = {
			id: nextId ++, type, T, x, z, y, vx: 0, vz: 0, kx: 0, kz: 0, hp: T.hp * hpMul, maxHp: T.hp * hpMul, r: T.r, alive: true,
			spawnT: opts.instant ? 0 : 0.8, flash: 0, stun: 0, slow: 0, yaw: Math.random() * 6.28, hop: Math.random() * 6.28,
			timer: 1.5 + Math.random() * 2, state: 'move', inflate: 0, dance: 0, airborne: 0, vy: 0, hy: 0, fromSplit: !! opts.split
		};
		list.push( o );
		return o;

	}

	function wrap( o, size ) {

		// 把敌人变成口罩包：从敌人的位置开始往上飘
		if ( bundleList.length >= BCAP ) bundleList.shift();
		bundleList.push( { x: o.x, y: o.y + o.r, z: o.z, s: ( size ?? o.r ) * 0.75, vy: 0.6, t: 0, phase: Math.random() * 6.28, ceil: o.ceil ?? ( o.y + 6 ), wob: Math.random() } );

	}

	function update( dt, ctx ) {

		const { player, nav, flowReady, floorY, ceilY, onContact, onSneeze, onRumor, aura } = ctx;
		const px = player.pos.x, pz = player.pos.z;
		const dir = { x: 0, z: 0 };
		for ( let i = list.length - 1; i >= 0; i -- ) {

			const o = list[ i ];
			if ( ! o.alive ) {

				list.splice( i, 1 ); continue;

			}

			o.y = floorY;
			if ( o.spawnT > 0 ) {

				o.spawnT -= dt; continue;

			}

			o.flash = Math.max( 0, o.flash - dt * 6 );
			o.hop += dt * ( 6 + o.T.speed );
			if ( o.stun > 0 ) {

				o.stun -= dt;

			}

			const dx = px - o.x, dz = pz - o.z;
			const dist = Math.hypot( dx, dz ) || 1e-3;
			o.yaw = Math.atan2( dx, dz );
			let speed = o.T.speed * ( o.slow > 0 ? 0.4 : 1 ) * ( aura && aura( o ) ? 1.3 : 1 );
			o.slow = Math.max( 0, o.slow - dt );
			// 被迫跳舞（科目三大招）
			if ( o.dance > 0 ) {

				o.dance -= dt; speed = 0;

			}

			let mx = 0, mz = 0;
			if ( o.stun <= 0 && o.dance <= 0 ) {

				// 能直接看到主角就直线追，否则走流场
				if ( dist < 3 || ( flowReady && ! nav.los( o.x, o.z, px, pz ) ) ) {

					if ( nav.flowDir( o.x, o.z, dir ) && dist >= 3 ) {

						mx = dir.x; mz = dir.z;

					} else {

						mx = dx / dist; mz = dz / dist;

					}

				} else {

					mx = dx / dist; mz = dz / dist;

				}

				if ( o.type === 'sneeze' ) {

					// 停在 8~12 米外
					if ( dist < 8 ) {

						mx = - mx; mz = - mz;

					} else if ( dist < 12 ) {

						const s = Math.sin( o.id ) > 0 ? 1 : - 1;
						mx = - dz / dist * 0.5 * s; mz = dx / dist * 0.5 * s;

					}

					o.timer -= dt;
					if ( o.state === 'move' && o.timer <= 0 && dist < 18 ) {

						o.state = 'inflate'; o.inflate = 0;

					}

					if ( o.state === 'inflate' ) {

						speed = 0;
						o.inflate += dt;
						if ( o.inflate >= 0.6 ) {

							onSneeze( o );
							o.state = 'move'; o.timer = 2.5; o.inflate = 0;

						}

					}

				}

				if ( o.type === 'elite' ) {

					o.timer -= dt;
					if ( o.timer <= 0 ) {

						onRumor( o ); o.timer = 5;

					}

				}

			}

			// 分开：和别的怪不要叠在一起
			let sx = 0, sz = 0;
			for ( let j = 0; j < list.length; j ++ ) {

				const b = list[ j ];
				if ( b === o || b.spawnT > 0 ) continue;
				const ex = o.x - b.x, ez = o.z - b.z;
				const rr = o.r + b.r;
				const d2 = ex * ex + ez * ez;
				if ( d2 < rr * rr && d2 > 1e-6 ) {

					const d = Math.sqrt( d2 );
					sx += ex / d * ( rr - d ); sz += ez / d * ( rr - d );

				}

			}

			o.vx = mx * speed + sx * 4 + o.kx;
			o.vz = mz * speed + sz * 4 + o.kz;
			o.kx *= Math.pow( 0.02, dt ); o.kz *= Math.pow( 0.02, dt );
			nav.move( o, o.vx * dt, o.vz * dt, Math.min( o.r * 0.8, 0.9 ) );
			// 被踢飞：在空中
			if ( o.airborne > 0 ) {

				o.airborne -= dt;
				o.vy -= 22 * dt;
				o.hy = Math.max( 0, o.hy + o.vy * dt );

			} else o.hy = Math.max( 0, o.hy - dt * 8 );

			// 碰到主角
			if ( o.stun <= 0 && o.dance <= 0 && dist < o.r + 0.45 ) onContact( o, dx / dist, dz / dist );

		}

		// 写实例矩阵
		const counts = {};
		for ( const k of Object.keys( meshes ) ) counts[ k ] = 0;
		for ( const o of list ) {

			const im = meshes[ o.type ];
			const k = counts[ o.type ] ++;
			let s = o.r, sy = 1, sxz = 1;
			let y = o.y + o.r * 0.95 + o.hy;
			if ( o.spawnT > 0 ) {

				const t = 1 - o.spawnT / 0.8;
				s *= Math.max( 0.01, t * t ); y -= ( 1 - t ) * o.r;

			} else {

				// 一蹦一蹦：小病毒跳得高，大的只是一鼓一鼓
				const h = Math.abs( Math.sin( o.hop ) );
				const amp = o.type === 'small' ? 0.45 : o.type === 'big' ? 0.06 : 0.18;
				y += h * amp * ( o.stun > 0 ? 0 : 1 );
				sy = 1 + ( h - 0.5 ) * 0.18;
				sxz = 1 - ( h - 0.5 ) * 0.1;
				if ( o.state === 'inflate' ) {

					const inf = Math.min( 1, o.inflate / 0.6 );
					sxz *= 1 + inf * 0.35; sy *= 1 + inf * 0.25;

				}

				if ( o.dance > 0 ) {

					sy = 1 + Math.sin( o.hop * 2 ) * 0.2; sxz = 1 - Math.sin( o.hop * 2 ) * 0.1;

				}

			}

			// 跳科目三：左右扭（绕 Y 甩 + 绕 Z 歪），颜色跟着迪斯科灯变
			const rollZ = o.dance > 0 ? Math.sin( o.hop ) * 0.35 : o.stun > 0 ? Math.cos( o.hop * 3 ) * 0.3 : 0;
			e.set( o.stun > 0 ? Math.sin( o.hop * 3 ) * 0.3 : 0, o.yaw + ( o.dance > 0 ? Math.sin( o.hop ) * 0.8 : 0 ), rollZ );
			q.setFromEuler( e );
			m4.compose( pv.set( o.x, y, o.z ), q, sv.set( s * sxz, s * sy, s * sxz ) );
			im.setMatrixAt( k, m4 );
			const f = o.flash;
			white.setRGB( 1 + f * 2.5, 1 + f * 2.5, 1 + f * 2.5 );
			if ( o.stun > 0 ) white.setRGB( 1.4, 1.4, 0.6 );
			else if ( o.dance > 0 && f < 0.05 ) white.setHSL( ( o.hop * 0.08 + o.id * 0.17 ) % 1, 0.9, 0.72 );
			im.setColorAt( k, white );

		}

		for ( const [ k, im ] of Object.entries( meshes ) ) {

			im.count = counts[ k ];
			im.instanceMatrix.needsUpdate = true;
			if ( im.instanceColor ) im.instanceColor.needsUpdate = true;

		}

		// 口罩包：往上飘，到天花板就停住，耳挂扑腾（整体轻轻晃）
		for ( let i = 0; i < bundleList.length; i ++ ) {

			const b = bundleList[ i ];
			b.t += dt;
			if ( b.y < b.ceil - b.s * 0.6 ) {

				b.vy = Math.min( b.vy + dt * 1.5, 2.2 );
				b.y += b.vy * dt;
				b.x += Math.sin( b.t * 2 + b.phase ) * dt * 0.4;

			} else b.y = b.ceil - b.s * 0.6 + Math.sin( b.t * 1.7 + b.phase ) * 0.05;
			e.set( Math.sin( b.t * 5 + b.phase ) * 0.25, b.phase, Math.sin( b.t * 3.7 + b.phase ) * 0.18 );
			q.setFromEuler( e );
			m4.compose( pv.set( b.x, b.y, b.z ), q, sv.set( b.s, b.s * ( 1 + Math.sin( b.t * 9 + b.phase ) * 0.06 * ( b.wob > 0.7 ? 2 : 1 ) ), b.s ) );
			bundles.setMatrixAt( i, m4 );

		}

		bundles.count = bundleList.length;
		bundles.instanceMatrix.needsUpdate = true;

	}

	function clear() {

		list.length = 0;
		for ( const im of Object.values( meshes ) ) im.count = 0;

	}

	function clearBundles() {

		bundleList.length = 0;
		bundles.count = 0;

	}

	return { list, spawn, wrap, update, clear, clearBundles, meshes, bundleList, TYPES };

}
