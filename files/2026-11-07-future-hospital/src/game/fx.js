import * as THREE from 'three';

// ---------------------------------------------------------------------------
// 特效：
//   粒子（一个 Points 系统，加法混合的火花/金光，普通混合的灰雾/彩纸）
//   冲击波圆环、地面红圈预警、红线预警
//   屏幕上的弹字（立体字的梗）和伤害数字（DOM，位置按 3D 坐标投影）
//   镜头震动、顿帧、闪白、色差
// ---------------------------------------------------------------------------

const MAX = 3000;

export function createFx( { scene, camera, post } ) {

	const pos = new Float32Array( MAX * 3 ), col = new Float32Array( MAX * 3 ), size = new Float32Array( MAX ), alpha = new Float32Array( MAX );
	const vel = new Float32Array( MAX * 3 ), life = new Float32Array( MAX ), maxLife = new Float32Array( MAX ), grav = new Float32Array( MAX ), grow = new Float32Array( MAX ), kind = new Uint8Array( MAX );
	let n = 0;
	const mkSystem = ( blending ) => {

		const g = new THREE.BufferGeometry();
		g.setAttribute( 'position', new THREE.BufferAttribute( new Float32Array( MAX * 3 ), 3 ).setUsage( THREE.DynamicDrawUsage ) );
		g.setAttribute( 'color', new THREE.BufferAttribute( new Float32Array( MAX * 3 ), 3 ).setUsage( THREE.DynamicDrawUsage ) );
		g.setAttribute( 'size', new THREE.BufferAttribute( new Float32Array( MAX ), 1 ).setUsage( THREE.DynamicDrawUsage ) );
		g.setAttribute( 'alpha', new THREE.BufferAttribute( new Float32Array( MAX ), 1 ).setUsage( THREE.DynamicDrawUsage ) );
		const m = new THREE.ShaderMaterial( {
			transparent: true, depthWrite: false, blending,
			uniforms: { uScale: { value: innerHeight / 2 } },
			vertexShader: /* glsl */ `
				attribute float size; attribute float alpha; attribute vec3 color;
				varying vec3 vC; varying float vA;
				uniform float uScale;
				void main() {
					vC = color; vA = alpha;
					vec4 mv = modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mv;
					gl_PointSize = size * uScale / max( 0.1, - mv.z );
				}
			`,
			fragmentShader: /* glsl */ `
				varying vec3 vC; varying float vA;
				void main() {
					vec2 p = gl_PointCoord - 0.5;
					float d = length( p );
					float a = smoothstep( 0.5, 0.15, d ) * vA;
					if ( a < 0.01 ) discard;
					gl_FragColor = vec4( vC, a );
				}
			`
		} );
		const pts = new THREE.Points( g, m );
		pts.frustumCulled = false;
		pts.renderOrder = 5;
		scene.add( pts );
		return pts;

	};

	const additive = mkSystem( THREE.AdditiveBlending );
	const normal = mkSystem( THREE.NormalBlending );

	function emit( o ) {

		const count = o.count ?? 1;
		for ( let k = 0; k < count; k ++ ) {

			if ( n >= MAX ) return;
			const i = n ++;
			const sp = o.speed ?? 3;
			const dir = o.dir;
			let vx = ( Math.random() - 0.5 ), vy = ( Math.random() - 0.5 ), vz = ( Math.random() - 0.5 );
			const l = Math.hypot( vx, vy, vz ) || 1;
			vx /= l; vy /= l; vz /= l;
			if ( dir ) {

				vx = vx * ( o.spread ?? 0.5 ) + dir.x; vy = vy * ( o.spread ?? 0.5 ) + dir.y; vz = vz * ( o.spread ?? 0.5 ) + dir.z;

			}

			const s = sp * ( 0.4 + Math.random() * 0.8 );
			pos.set( [ o.x + ( Math.random() - 0.5 ) * ( o.jitter ?? 0 ), o.y + ( Math.random() - 0.5 ) * ( o.jitter ?? 0 ), o.z + ( Math.random() - 0.5 ) * ( o.jitter ?? 0 ) ], i * 3 );
			vel.set( [ vx * s, vy * s + ( o.up ?? 0 ), vz * s ], i * 3 );
			const c = o.colors ? o.colors[ Math.floor( Math.random() * o.colors.length ) ] : ( o.color ?? [ 1, 0.8, 0.4 ] );
			col.set( c, i * 3 );
			size[ i ] = ( o.size ?? 0.15 ) * ( 0.6 + Math.random() * 0.8 );
			maxLife[ i ] = life[ i ] = ( o.life ?? 0.6 ) * ( 0.6 + Math.random() * 0.6 );
			grav[ i ] = o.gravity ?? 6;
			grow[ i ] = o.grow ?? 0;
			kind[ i ] = o.normal ? 1 : 0;
			alpha[ i ] = o.alpha ?? 1;

		}

	}

	function updateParticles( dt ) {

		let j = 0;
		for ( let i = 0; i < n; i ++ ) {

			life[ i ] -= dt;
			if ( life[ i ] <= 0 ) continue;
			if ( j !== i ) {

				pos.copyWithin( j * 3, i * 3, i * 3 + 3 ); vel.copyWithin( j * 3, i * 3, i * 3 + 3 ); col.copyWithin( j * 3, i * 3, i * 3 + 3 );
				size[ j ] = size[ i ]; life[ j ] = life[ i ]; maxLife[ j ] = maxLife[ i ]; grav[ j ] = grav[ i ]; grow[ j ] = grow[ i ]; kind[ j ] = kind[ i ]; alpha[ j ] = alpha[ i ];

			}

			vel[ j * 3 + 1 ] -= grav[ j ] * dt;
			const drag = kind[ j ] ? 0.96 : 0.985;
			vel[ j * 3 ] *= drag; vel[ j * 3 + 1 ] *= drag; vel[ j * 3 + 2 ] *= drag;
			pos[ j * 3 ] += vel[ j * 3 ] * dt; pos[ j * 3 + 1 ] += vel[ j * 3 + 1 ] * dt; pos[ j * 3 + 2 ] += vel[ j * 3 + 2 ] * dt;
			size[ j ] += grow[ j ] * dt;
			j ++;

		}

		n = j;
		// 分别写进两个系统
		for ( const [ sys, k ] of [ [ additive, 0 ], [ normal, 1 ] ] ) {

			const a = sys.geometry.attributes;
			let m = 0;
			for ( let i = 0; i < n; i ++ ) {

				if ( kind[ i ] !== k ) continue;
				a.position.array.set( pos.subarray( i * 3, i * 3 + 3 ), m * 3 );
				a.color.array.set( col.subarray( i * 3, i * 3 + 3 ), m * 3 );
				a.size.array[ m ] = size[ i ];
				const t = life[ i ] / maxLife[ i ];
				a.alpha.array[ m ] = alpha[ i ] * Math.min( 1, t * 3 ) * ( k ? Math.min( 1, ( 1 - t ) * 6 ) : 1 );
				m ++;

			}

			sys.geometry.setDrawRange( 0, m );
			for ( const key of [ 'position', 'color', 'size', 'alpha' ] ) a[ key ].needsUpdate = true;
			sys.material.uniforms.uScale.value = innerHeight / ( 2 * Math.tan( THREE.MathUtils.degToRad( camera.fov / 2 ) ) );

		}

	}

	// ---------------- 冲击波、预警圈 ----------------
	const rings = [];
	const ringGeo = new THREE.RingGeometry( 0.86, 1.0, 64 ).rotateX( - Math.PI / 2 );
	const discGeo = new THREE.CircleGeometry( 1, 48 ).rotateX( - Math.PI / 2 );
	function ring( x, y, z, r, color = 0xffd34d, dur = 0.5, opts = {} ) {

		const m = new THREE.MeshBasicMaterial( { color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide } );
		const mesh = new THREE.Mesh( opts.disc ? discGeo : ringGeo, m );
		mesh.position.set( x, y + 0.06, z );
		mesh.renderOrder = 6;
		scene.add( mesh );
		rings.push( { mesh, t: 0, dur, r, grow: opts.grow ?? true, warn: opts.warn } );
		return mesh;

	}

	function updateRings( dt ) {

		for ( let i = rings.length - 1; i >= 0; i -- ) {

			const R = rings[ i ];
			R.t += dt;
			const k = R.t / R.dur;
			if ( k >= 1 ) {

				scene.remove( R.mesh ); R.mesh.material.dispose(); rings.splice( i, 1 ); continue;

			}

			const s = R.grow ? R.r * ( 0.15 + 0.85 * ( 1 - Math.pow( 1 - k, 3 ) ) ) : R.r;
			R.mesh.scale.set( s, 1, s );
			R.mesh.material.opacity = R.warn ? 0.35 + 0.35 * Math.sin( R.t * 18 ) : 0.9 * ( 1 - k );

		}

	}

	// ---------------- 屏幕弹字 ----------------
	const popLayer = document.getElementById( 'popups' );
	const _v = new THREE.Vector3();
	function screenOf( p ) {

		_v.copy( p ).project( camera );
		if ( _v.z > 1 ) return null;
		return { x: ( _v.x * 0.5 + 0.5 ) * innerWidth, y: ( - _v.y * 0.5 + 0.5 ) * innerHeight };

	}

	let popCount = 0;
	function pop( text, at, opts = {} ) {

		if ( popCount > 40 ) return;
		const s = at ? ( at.isVector3 ? screenOf( at ) : at ) : { x: innerWidth / 2, y: innerHeight * ( opts.y ?? 0.3 ) };
		if ( ! s ) return;
		const el = document.createElement( 'div' );
		el.className = opts.cls || 'pop';
		el.textContent = text;
		el.style.left = ( s.x + ( opts.jx ?? 0 ) * ( Math.random() - 0.5 ) ) + 'px';
		el.style.top = ( s.y + ( opts.jy ?? 0 ) * ( Math.random() - 0.5 ) ) + 'px';
		if ( opts.size ) el.style.fontSize = opts.size + 'px';
		if ( opts.color ) el.style.color = opts.color;
		if ( opts.dur ) el.style.animationDuration = opts.dur + 's';
		popLayer.appendChild( el );
		popCount ++;
		setTimeout( () => {

			el.remove(); popCount --;

		}, ( opts.dur ?? 0.9 ) * 1000 + 50 );

	}

	function dmg( v, p, crit ) {

		pop( String( Math.round( v ) ), p, { cls: crit ? 'dmg crit' : 'dmg', jx: 30, jy: 10, dur: 0.8 } );

	}

	// 大字梗：画面中间偏上，带颜色
	const memeColors = [ '#ffd34d', '#ff6ad5', '#6ad3ff', '#7dff9a', '#ff8a4d', '#ffffff' ];
	function meme( text, opts = {} ) {

		pop( text, null, { size: opts.size ?? 56, color: opts.color ?? memeColors[ Math.floor( Math.random() * memeColors.length ) ], y: opts.y ?? ( 0.24 + Math.random() * 0.12 ), dur: opts.dur ?? 1.4, jx: opts.jx ?? 240, jy: 0 } );

	}

	// ---------------- 镜头和屏幕效果 ----------------
	const shakeState = { a: 0, t: 0 };
	const fxState = { stop: 0, flash: 0, ca: 0, zoom: 0, slow: 0, slowK: 1 };
	function shake( a ) {

		shakeState.a = Math.min( 1.2, Math.max( shakeState.a, a ) );

	}

	function hitstop( t ) {

		fxState.stop = Math.max( fxState.stop, t );

	}

	function flash( a, color = 0xffffff ) {

		fxState.flash = Math.max( fxState.flash, a );
		post.final.uniforms.uFlashColor.value.set( color );

	}

	function slowmo( t, k = 0.25 ) {

		fxState.slow = t; fxState.slowK = k;

	}

	const shakeOffset = new THREE.Vector3();
	function update( dt, realDt ) {

		updateParticles( dt );
		updateRings( dt );
		shakeState.t += realDt;
		shakeState.a = Math.max( 0, shakeState.a - realDt * 2.6 );
		const a = shakeState.a * shakeState.a * 0.35;
		shakeOffset.set( Math.sin( shakeState.t * 71 ) * a, Math.sin( shakeState.t * 83 + 1 ) * a, Math.sin( shakeState.t * 67 + 2 ) * a );
		fxState.flash = Math.max( 0, fxState.flash - realDt * 3 );
		fxState.ca = Math.max( 0, fxState.ca - realDt * 2.5 );
		fxState.zoom = Math.max( 0, fxState.zoom - realDt * 1.5 );
		post.final.uniforms.uFlash.value = fxState.flash;
		post.final.uniforms.uCA.value = fxState.ca;
		post.final.uniforms.uZoom.value = fxState.zoom;
		if ( fxState.slow > 0 ) fxState.slow -= realDt;

	}

	// 游戏时间缩放（顿帧、慢动作）
	function timeScale( realDt ) {

		if ( fxState.stop > 0 ) {

			fxState.stop -= realDt;
			return 0.02;

		}

		return fxState.slow > 0 ? fxState.slowK : 1;

	}

	function clear() {

		n = 0;
		for ( const R of rings ) scene.remove( R.mesh );
		rings.length = 0;

	}

	return { emit, ring, pop, dmg, meme, shake, hitstop, flash, slowmo, update, timeScale, shakeOffset, screenOf, state: fxState, clear };

}
