import * as THREE from 'three';
import { SUN_DIR, SUN_COLOR } from './atmosphere.js';
import { makeNoise } from './noise.js';
import { createRock } from './rock.js';
import { createVegetation } from './vegetation.js';
import { createWater } from './water.js';
import { createFalls } from './falls.js';
import { createCity } from './city.js';
import { createVillage } from './village.js';
import { createBirds } from './birds.js';
import { createSky, createEnvScene } from './sky.js';
import { createPost } from './post.js';
import { createAmbience } from './audio.js';

// ---------------------------------------------------------------------------
// 画质档位：电脑默认 high，手机默认 mobile。可用 ?q=high / mobile / low 指定
// ---------------------------------------------------------------------------
const params = new URLSearchParams( location.search );
const coarse = matchMedia( '(pointer: coarse)' ).matches;
const small = Math.min( screen.width, screen.height ) < 700;
const TIERS = {
	high: { dpr: Math.min( devicePixelRatio, 2 ), msaa: 4, shadow: 4096, foliage: 0.55, foliageShadow: true, trees: 160, cards: 1, mist: 140, reflScale: 0.5, raySamples: 64, rayScale: 0.5, wallRes: [ 160, 140 ], farRes: [ 210, 125 ], birds: 40, pointLights: 4 },
	mobile: { dpr: Math.min( devicePixelRatio, 1.5 ), msaa: 0, shadow: 2048, foliage: 0.3, foliageShadow: false, trees: 90, cards: 0.6, mist: 80, reflScale: 0.35, raySamples: 40, rayScale: 0.35, wallRes: [ 120, 100 ], farRes: [ 140, 84 ], birds: 25, pointLights: 2 },
	low: { dpr: 1, msaa: 0, shadow: 1024, foliage: 0.16, foliageShadow: false, trees: 50, cards: 0.35, mist: 40, reflScale: 0.25, raySamples: 28, rayScale: 0.3, wallRes: [ 90, 80 ], farRes: [ 100, 60 ], birds: 15, pointLights: 1 }
};
const tier = TIERS[ params.get( 'q' ) ] ? params.get( 'q' ) : ( coarse || small ? 'mobile' : 'high' );
const Q = TIERS[ tier ];
const debug = params.has( 'debug' );
const t0 = parseFloat( params.get( 't0' ) || '0' );

function mulberry32( a ) {

	return function () {

		a |= 0;
		a = a + 0x6D2B79F5 | 0;
		let t = Math.imul( a ^ a >>> 15, 1 | a );
		t = t + Math.imul( t ^ t >>> 7, 61 | t ) ^ t;
		return ( ( t ^ t >>> 14 ) >>> 0 ) / 4294967296;

	};

}

const rng = mulberry32( 20261105 );
const N = makeNoise( 1105 );
const clamp = ( v, a, b ) => Math.min( b, Math.max( a, v ) );
const damp = ( a, b, k, dt ) => a + ( b - a ) * ( 1 - Math.exp( - k * dt ) );
const D2R = Math.PI / 180;

const U = {
	uTime: { value: 0 },
	uPointScale: { value: 1000 }
};

// ---------------------------------------------------------------------------
// 渲染器、场景、相机
// ---------------------------------------------------------------------------
const canvas = document.getElementById( 'c' );
const renderer = new THREE.WebGLRenderer( { canvas, antialias: false, powerPreference: 'high-performance', stencil: false } );
let dpr = Q.dpr;
renderer.setPixelRatio( dpr );
renderer.setSize( innerWidth, innerHeight, false );
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
// 雾的具体算法在 atmosphere.js 里替换掉了，这里只是打开雾的开关
scene.fog = new THREE.FogExp2( 0x8899aa, 0.001 );

const camera = new THREE.PerspectiveCamera( 50, innerWidth / innerHeight, 0.5, 9000 );

{

	const pmrem = new THREE.PMREMGenerator( renderer );
	scene.environment = pmrem.fromScene( createEnvScene( U ), 0.04 ).texture;
	scene.environmentIntensity = 2.2;
	pmrem.dispose();

}

// 太阳：从拱门后面低低地照进来。
// 灯光方向比画面里太阳圆盘的方向更偏右、更高一点（美术上的取巧），这样左侧岩壁能被照亮
const LIGHT_DIR = new THREE.Vector3( 0.42, 0.2, - 1 ).normalize();
const sun = new THREE.DirectionalLight( SUN_COLOR, 7.5 );
sun.target.position.set( 20, 170, - 150 );
sun.position.copy( sun.target.position ).addScaledVector( LIGHT_DIR, 950 );
sun.castShadow = true;
sun.shadow.mapSize.set( Q.shadow, Q.shadow );
const sc = sun.shadow.camera;
sc.left = - 330;
sc.right = 330;
sc.top = 330;
sc.bottom = - 330;
sc.near = 10;
sc.far = 2100;
sun.shadow.bias = - 0.0008;
sun.shadow.normalBias = 1.4;
sun.shadow.radius = 3;
scene.add( sun, sun.target );

// ---------------------------------------------------------------------------
// 场景内容
// ---------------------------------------------------------------------------
const tBuild = performance.now();
scene.add( createSky( U ) );
const rock = createRock( N, rng, Q );
scene.add( rock.group );
const veg = createVegetation( rock, N, rng, Q );
scene.add( veg.group );
const water = createWater( U, rock, Q );
scene.add( water.group );
scene.add( createFalls( U, rock, rng, Q ).group );
const city = createCity( rock, rng );
scene.add( city.group );
const village = createVillage( U, rock, rng, Q );
scene.add( village.group );
scene.add( createBirds( U, rng, Q.birds ) );
const buildMs = Math.round( performance.now() - tBuild );

const post = createPost( renderer, scene, camera, SUN_DIR, Q );
const ambience = createAmbience();

// ---------------------------------------------------------------------------
// 尺寸：横屏保持约 76° 水平视角；竖屏把垂直视角放大
// ---------------------------------------------------------------------------
function resize() {

	const w = innerWidth;
	const h = innerHeight;
	renderer.setPixelRatio( dpr );
	renderer.setSize( w, h, false );
	camera.aspect = w / h;
	const v = 2 * Math.atan( Math.tan( 38 * D2R ) / camera.aspect ) / D2R;
	camera.fov = clamp( v, 50, 84 );
	camera.updateProjectionMatrix();
	post.setSize( w, h, dpr );
	water.lake.getRenderTarget().setSize(
		Math.max( 256, Math.round( w * dpr * Q.reflScale ) ),
		Math.max( 256, Math.round( h * dpr * Q.reflScale ) )
	);
	U.uPointScale.value = ( h * dpr ) / ( 2 * Math.tan( camera.fov * D2R / 2 ) );

}

resize();
addEventListener( 'resize', resize );

// ---------------------------------------------------------------------------
// 交互：拖动环顾（有范围限制），不操作时镜头缓慢漂移
// ---------------------------------------------------------------------------
const base = new THREE.Vector3( 4, 5, 86 );
const baseYaw = - 0.03;
const basePitch = 0.11;
let yaw = baseYaw, pitch = basePitch, tYaw = baseYaw, tPitch = basePitch;
let dragging = false, lx = 0, ly = 0, lastInput = - 100, autoBlend = 1, now = 0;

canvas.addEventListener( 'pointerdown', ( e ) => {

	dragging = true;
	lx = e.clientX;
	ly = e.clientY;
	canvas.setPointerCapture( e.pointerId );

} );
canvas.addEventListener( 'pointermove', ( e ) => {

	if ( ! dragging ) return;
	const k = 1.5 / innerHeight;
	tYaw = clamp( tYaw + ( e.clientX - lx ) * k, baseYaw - 0.75, baseYaw + 0.75 );
	tPitch = clamp( tPitch + ( e.clientY - ly ) * k, - 0.25, 0.6 );
	lx = e.clientX;
	ly = e.clientY;
	lastInput = now;

} );
const endDrag = () => {

	dragging = false;

};

canvas.addEventListener( 'pointerup', endDrag );
canvas.addEventListener( 'pointercancel', endDrag );

const soundBtn = document.getElementById( 'sound' );
soundBtn.addEventListener( 'click', () => {

	const on = ambience.toggle();
	soundBtn.textContent = on ? '关闭声音' : '开启声音';
	soundBtn.classList.toggle( 'on', on );

} );

// ---------------------------------------------------------------------------
// 主循环
// ---------------------------------------------------------------------------
const timer = new THREE.Timer();
timer.connect( document );
let frames = 0;
let firstFrameAt = - 1;
let perfAcc = 0, perfN = 0, perfChecks = 0;
const fpsEl = document.getElementById( 'fps' );
if ( debug ) fpsEl.style.display = 'block';

let frozen = null;
window.__scene = {
	tier, frames: 0, buildMs, renderer,
	stats: { veg: veg.stats, city: city.stats, village: village.stats },
	shot( o = {} ) {

		frozen = { T: o.t ?? 20, yaw: o.yaw ?? baseYaw, pitch: o.pitch ?? basePitch, pending: true, done: false };

	},
	get shotDone() {

		return frozen ? frozen.done : false;

	},
	resume() {

		frozen = null;

	}
};

function placeCamera( T, y, p, roll ) {

	camera.position.set( base.x + Math.sin( T * 0.05 ) * 3.0, base.y + Math.sin( T * 0.13 ) * 0.4, base.z + Math.sin( T * 0.031 ) * 2.0 );
	camera.rotation.set( p, y, roll, 'YXZ' );

}

renderer.setAnimationLoop( ( time ) => {

	if ( frozen ) {

		if ( frozen.pending ) {

			U.uTime.value = frozen.T;
			placeCamera( frozen.T, frozen.yaw, frozen.pitch, 0 );
			post.final.uniforms.uFade.value = 1;
			post.final.uniforms.uTime.value = frozen.T;
			post.composer.render( 1 / 60 );
			document.body.classList.add( 'ready' );
			frozen.pending = false;
			frozen.done = true;

		}

		return;

	}

	timer.update( time );
	const dt = Math.min( timer.getDelta(), 0.1 );
	const t = timer.getElapsed();
	now = t;
	const T = t + t0;
	U.uTime.value = T;

	const idle = t - lastInput > 5 && ! dragging;
	autoBlend = damp( autoBlend, idle ? 1 : 0, 0.6, dt );
	yaw = damp( yaw, tYaw + Math.sin( T * 0.04 ) * 0.09 * autoBlend, 3.5, dt );
	pitch = damp( pitch, tPitch + Math.sin( T * 0.06 + 1.0 ) * 0.02 * autoBlend, 3.5, dt );
	placeCamera( T, yaw, pitch, Math.sin( T * 0.09 ) * 0.003 );

	if ( firstFrameAt < 0 && frames > 1 ) firstFrameAt = t;
	post.final.uniforms.uFade.value = firstFrameAt < 0 ? 0 : clamp( ( t - firstFrameAt ) / 2.5, 0, 1 );
	post.final.uniforms.uTime.value = T;

	post.composer.render( dt );
	frames ++;
	window.__scene.frames = frames;
	if ( frames === 2 ) document.body.classList.add( 'ready' );

	if ( frames > 30 && perfChecks < 2 ) {

		perfAcc += dt;
		perfN ++;
		if ( perfN === 90 ) {

			if ( perfAcc / perfN > 1 / 28 && dpr > 1 ) {

				dpr = Math.max( 1, dpr * 0.75 );
				resize();

			}

			perfAcc = 0;
			perfN = 0;
			perfChecks ++;

		}

	}

	if ( debug && frames % 20 === 0 ) {

		fpsEl.textContent = `${ tier } · ${ ( 1 / Math.max( dt, 1e-3 ) ).toFixed( 0 ) } fps · dpr ${ dpr.toFixed( 2 ) } · 构建 ${ buildMs } ms`;

	}

} );
