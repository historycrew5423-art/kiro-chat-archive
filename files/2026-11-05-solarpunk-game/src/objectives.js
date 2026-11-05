import * as THREE from 'three';
import { DECK_Y, L } from './layout.js';

// ---------------------------------------------------------------------------
// 玩法：收集 10 颗阳光种子 → 连接站的电梯启动 → 坐电梯上空中花园 → 通关。
// 种子是会发光、上下浮动的小球，头顶有一道光柱，远处也能看见。
// ---------------------------------------------------------------------------

export function createObjectives( { scene, viaduct, hill, player, audio, ui, U } ) {

	const group = new THREE.Group();
	scene.add( group );
	const seedPos = [];
	const H = ( x, z ) => hill.height( x, z );
	// 山顶 3 颗
	for ( const [ x, z ] of [ [ - 24, 34 ], [ 22, 64 ], [ - 58, 92 ] ] ) seedPos.push( new THREE.Vector3( x, H( x, z ) + 1.2, z ) );
	// 高架 6 颗：两侧步道交替，有一颗放在长椅上方，要跳起来才够得着
	const deckSeed = ( s, l, lift = 1.2 ) => {

		const smp = viaduct.samples[ Math.min( viaduct.walkEnd, Math.round( s / 4 ) ) ];
		return smp.p.clone().addScaledVector( smp.B, l ).setY( DECK_Y + lift );

	};

	const W = viaduct.walkLen;
	seedPos.push( deckSeed( W * 0.12, - 8.5 ), deckSeed( W * 0.3, 8.5 ), deckSeed( W * 0.45, 7.5, 2.6 ), deckSeed( W * 0.6, - 8 ), deckSeed( W * 0.78, 8.8 ), deckSeed( W * 0.93, - 8 ) );
	// 连接平台上 1 颗
	{

		const p = viaduct.pad.from.clone().addScaledVector( viaduct.pad.dir, viaduct.pad.len * 0.45 ).setY( DECK_Y + 1.2 );
		seedPos.push( p );

	}

	const core = new THREE.MeshBasicMaterial( { color: new THREE.Color( 1.0, 0.82, 0.35 ).multiplyScalar( 6 ) } );
	const glowMat = new THREE.ShaderMaterial( {
		transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
		uniforms: { uTime: U.uTime },
		vertexShader: /* glsl */ `
			varying vec2 vUv;
			void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
		`,
		fragmentShader: /* glsl */ `
			uniform float uTime;
			varying vec2 vUv;
			void main() {
				float a = pow( 1.0 - abs( vUv.x - 0.5 ) * 2.0, 2.0 ) * pow( 1.0 - vUv.y, 1.5 ) * ( 0.7 + 0.3 * sin( uTime * 3.0 + vUv.y * 10.0 ) );
				gl_FragColor = vec4( vec3( 1.0, 0.75, 0.3 ) * a * 1.6, 1.0 );
			}
		`
	} );
	const seeds = seedPos.map( ( p, i ) => {

		const g = new THREE.Group();
		g.position.copy( p );
		const orb = new THREE.Mesh( new THREE.IcosahedronGeometry( 0.32, 2 ), core );
		const shell = new THREE.Mesh( new THREE.IcosahedronGeometry( 0.55, 1 ), new THREE.MeshStandardMaterial( { color: 0xf4e6c0, roughness: 0.1, metalness: 0.3, transparent: true, opacity: 0.35, wireframe: true } ) );
		const beam = new THREE.Mesh( new THREE.PlaneGeometry( 1.4, 40 ), glowMat );
		beam.geometry.translate( 0, 20, 0 );
		beam.onBeforeRender = ( r, s, camera ) => {

			// 光柱始终正对镜头（只绕竖轴转）
			const d = camera.position.clone().sub( g.position );
			beam.rotation.y = Math.atan2( d.x, d.z );

		};

		g.add( orb, shell, beam );
		group.add( g );
		return { g, orb, shell, beam, p: p.clone(), got: false, i };

	} );

	const total = seeds.length;
	let got = 0;
	let state = 'collect';
	let ride = 0;
	let startTime = 0;
	let elapsed = 0;
	const burst = [];

	function spawnBurst( p ) {

		for ( let k = 0; k < 24; k ++ ) {

			const m = new THREE.Mesh( new THREE.SphereGeometry( 0.06, 6, 4 ), core );
			m.position.copy( p );
			const v = new THREE.Vector3( Math.random() - 0.5, Math.random() * 0.8 + 0.2, Math.random() - 0.5 ).normalize().multiplyScalar( 3 + Math.random() * 4 );
			group.add( m );
			burst.push( { m, v, life: 0.8 + Math.random() * 0.5 } );

		}

	}

	const el = viaduct.elevator;
	function update( dt, t ) {

		if ( state === 'collect' || state === 'ready' ) elapsed = t - startTime;
		for ( const s of seeds ) {

			if ( s.got ) continue;
			s.g.position.y = s.p.y + Math.sin( t * 2 + s.i ) * 0.18;
			s.shell.rotation.y = t * 1.2 + s.i;
			s.shell.rotation.x = t * 0.7;
			if ( player.enabled && player.pos.distanceTo( s.g.position.clone().setY( s.g.position.y - 0.9 ) ) < 1.7 ) {

				s.got = true;
				s.g.visible = false;
				got ++;
				audio.pickup( got );
				spawnBurst( s.g.position );
				ui.seeds( got, total );
				if ( got === total ) {

					state = 'ready';
					ui.toast( '10 颗种子都找到了！电梯已经启动' );
					ui.objective( '走进连接站的电梯，上到空中花园' );
					el.glow.material.color.setRGB( 0.6, 1.6, 0.9 );

				} else ui.toast( `阳光种子 ${ got } / ${ total }` );

			}

		}

		for ( let i = burst.length - 1; i >= 0; i -- ) {

			const b = burst[ i ];
			b.life -= dt;
			b.v.y -= 6 * dt;
			b.m.position.addScaledVector( b.v, dt );
			if ( b.life <= 0 ) {

				group.remove( b.m );
				burst.splice( i, 1 );

			}

		}

		// 电梯
		const cabPos = el.cab.position;
		if ( state === 'collect' ) {

			if ( player.pos.distanceTo( cabPos ) < 5 && ! ui.hinted ) {

				ui.hinted = true;
				ui.toast( `电梯还没有能量：还差 ${ total - got } 颗阳光种子` );

			}

			if ( player.pos.distanceTo( cabPos ) > 8 ) ui.hinted = false;

		} else if ( state === 'ready' ) {

			const flat = Math.hypot( player.pos.x - cabPos.x, player.pos.z - cabPos.z );
			if ( flat < 3.6 && Math.abs( player.pos.y - DECK_Y ) < 1.5 ) {

				state = 'ride';
				ride = 0;
				player.enabled = false;
				player.carried = true;
				audio.elevator();
				ui.objective( '' );

			}

		} else if ( state === 'ride' ) {

			ride += dt;
			const dur = 10;
			const k = THREE.MathUtils.smoothstep( ride / dur, 0, 1 );
			const y = DECK_Y + ( L.rightTower.discY + 0.3 - DECK_Y ) * k;
			cabPos.y = y;
			player.pos.set( cabPos.x, y, cabPos.z );
			player.cam.yaw += dt * 0.25;
			player.cam.tDist = 16;
			if ( ride >= dur ) {

				state = 'won';
				player.disc = true;
				player.carried = false;
				player.enabled = true;
				player.pos.y = L.rightTower.discY + 0.3;
				player.cam.tDist = 7.5;
				audio.win();
				ui.win( elapsed );

			}

		}

	}

	return {
		group, update, seeds,
		get state() {

			return state;

		},
		start( t ) {

			startTime = t;
			ui.seeds( 0, total );
			ui.objective( '收集 10 颗阳光种子，沿高架绿廊走到空中花园塔' );

		},
		get got() {

			return got;

		},
		total
	};

}
