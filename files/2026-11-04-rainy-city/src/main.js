import * as THREE from 'three';
import { createSky, createSkyMaterial } from './sky.js';
import { createCity } from './city.js';
import { createTerrace, RAIN_LAYER, STEAM_LAYER } from './terrace.js';
import { createRain } from './rain.js';
import { createSteam } from './steam.js';
import { createPost } from './post.js';
import { createRainAudio } from './audio.js';

// ---------------------------------------------------------------------------
// 画质档位。手机默认 mobile；可以用 ?q=high / ?q=mobile / ?q=low 强制指定
// ---------------------------------------------------------------------------
const params = new URLSearchParams( location.search );
const coarse = matchMedia( '(pointer: coarse)' ).matches;
const small = Math.min( screen.width, screen.height ) < 700;
const TIERS = {
	high: { dpr: Math.min( devicePixelRatio, 2 ), msaa: 4, rainNear: 7000, rainFar: 12000, splashes: 500, steam: 44, reflScale: 0.5, bloomScale: 0.5 },
	mobile: { dpr: Math.min( devicePixelRatio, 1.5 ), msaa: 0, rainNear: 4000, rainFar: 6500, splashes: 300, steam: 28, reflScale: 0.35, bloomScale: 0.35 },
	low: { dpr: 1, msaa: 0, rainNear: 2500, rainFar: 3500, splashes: 150, steam: 16, reflScale: 0.25, bloomScale: 0.25 }
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

const rng = mulberry32( 20261104 );
const clamp = ( v, a, b ) => Math.min( b, Math.max( a, v ) );
const damp = ( a, b, k, dt ) => a + ( b - a ) * ( 1 - Math.exp( - k * dt ) );
const D2R = Math.PI / 180;

// ---------------------------------------------------------------------------
// 调色板和共享 uniform（多个材质共用同一个对象，改一处全场景生效）
// ---------------------------------------------------------------------------
const fogColor = new THREE.Color( 0.11, 0.125, 0.155 );
const U = {
	uTime: { value: 0 },
	uFlash: { value: 0 },
	uSkyZenith: { value: new THREE.Color( 0.026, 0.036, 0.058 ) },
	uSkyHorizon: { value: fogColor.clone() },
	uSkyGlow: { value: new THREE.Color( 0.075, 0.05, 0.032 ) },
	uAmbTop: { value: new THREE.Color( 0.22, 0.27, 0.35 ) },
	uAmbBottom: { value: new THREE.Color( 0.05, 0.05, 0.06 ) },
	uHaze: { value: new THREE.Color( 0.17, 0.11, 0.07 ) },
	uFogColor: { value: fogColor },
	uFogDensity: { value: 0.003 },
	uPointScale: { value: 1000 },
	uWind: { value: new THREE.Vector3( 0.12, 0, 0.05 ) },
	uLampPos: { value: [] },
	uLampCol: { value: [] },
	uRainIntensity: { value: 1 }
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

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2( fogColor, U.uFogDensity.value );

const camera = new THREE.PerspectiveCamera( 50, innerWidth / innerHeight, 0.1, 6000 );
camera.layers.enable( RAIN_LAYER );
camera.layers.enable( STEAM_LAYER );

// 环境贴图：用天空材质加几块暖色“城市灯光”面板生成，给金属栏杆一点反光
{

	const pmrem = new THREE.PMREMGenerator( renderer );
	const envScene = new THREE.Scene();
	envScene.add( new THREE.Mesh( new THREE.SphereGeometry( 100, 32, 16 ), createSkyMaterial( U ) ) );
	const glowMat = new THREE.MeshBasicMaterial( { color: new THREE.Color( 1.0, 0.55, 0.25 ).multiplyScalar( 0.5 ), side: THREE.DoubleSide } );
	for ( let i = 0; i < 7; i ++ ) {

		const a = ( i / 7 ) * Math.PI * 2;
		const p = new THREE.Mesh( new THREE.PlaneGeometry( 30, 8 ), glowMat );
		p.position.set( Math.sin( a ) * 80, - 6 + ( i % 3 ) * 5, Math.cos( a ) * 80 );
		p.lookAt( 0, 0, 0 );
		envScene.add( p );

	}

	scene.environment = pmrem.fromScene( envScene, 0.03 ).texture;
	scene.environmentIntensity = 0.55;
	pmrem.dispose();

}

const hemi = new THREE.HemisphereLight( 0x8090a8, 0x201812, 0.35 );
scene.add( hemi );
const flashLight = new THREE.DirectionalLight( 0xb0c0ff, 0 );
flashLight.position.set( - 0.4, 1, - 1 );
scene.add( flashLight );

// ---------------------------------------------------------------------------
// 场景内容
// ---------------------------------------------------------------------------
scene.add( createSky( U ) );
const city = createCity( U, rng, Q );
scene.add( city.group );
const terrace = createTerrace( U, rng, Q );
scene.add( terrace.group );
U.uLampPos.value = terrace.lampPos;
U.uLampCol.value = terrace.lampCol;
scene.add( createRain( U, Q ) );
scene.add( createSteam( U, rng, Q ) );

// 倒影里不画雨丝（真实世界里也几乎看不到），手机上连蒸汽也省掉
const reflCam = terrace.floor.getReflectionCamera( camera );
reflCam.layers.disable( RAIN_LAYER );
if ( tier !== 'high' ) reflCam.layers.disable( STEAM_LAYER );

const post = createPost( renderer, scene, camera, Q );
const audio = createRainAudio();

// ---------------------------------------------------------------------------
// 尺寸：横屏保持约 75° 水平视角，竖屏时把垂直视角放大，避免画面太窄
// ---------------------------------------------------------------------------
function resize() {

	const w = innerWidth;
	const h = innerHeight;
	renderer.setPixelRatio( dpr );
	renderer.setSize( w, h, false );
	camera.aspect = w / h;
	const v = 2 * Math.atan( Math.tan( 37 * D2R ) / camera.aspect ) / D2R;
	camera.fov = clamp( v, 48, 82 );
	camera.updateProjectionMatrix();
	post.setSize( w, h, dpr );
	terrace.floor.getRenderTarget().setSize(
		Math.max( 256, Math.round( w * dpr * Q.reflScale ) ),
		Math.max( 256, Math.round( h * dpr * Q.reflScale ) )
	);
	U.uPointScale.value = ( h * dpr ) / ( 2 * Math.tan( camera.fov * D2R / 2 ) );

}

resize();
addEventListener( 'resize', resize );

// ---------------------------------------------------------------------------
// 交互：拖动环顾（有范围限制），一段时间不操作就恢复缓慢的自动摇镜
// ---------------------------------------------------------------------------
const base = new THREE.Vector3( 0, 1.62, 2.6 );
let yaw = 0, pitch = 0.07, tYaw = 0, tPitch = 0.07;
let dragging = false, lx = 0, ly = 0, lastInput = - 100, autoBlend = 1;
let now = 0;

canvas.addEventListener( 'pointerdown', ( e ) => {

	dragging = true;
	lx = e.clientX;
	ly = e.clientY;
	canvas.setPointerCapture( e.pointerId );

} );
canvas.addEventListener( 'pointermove', ( e ) => {

	if ( ! dragging ) return;
	const k = 1.5 / innerHeight;
	tYaw = clamp( tYaw + ( e.clientX - lx ) * k, - 0.85, 0.85 );
	tPitch = clamp( tPitch + ( e.clientY - ly ) * k, - 0.38, 0.55 );
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

	const on = audio.toggle();
	soundBtn.textContent = on ? '关闭雨声' : '开启雨声';
	soundBtn.classList.toggle( 'on', on );

} );

// ---------------------------------------------------------------------------
// 闪电：每隔十几到三十秒一次，两三下闪烁，过一两秒后打雷
// ---------------------------------------------------------------------------
let nextFlash = 7 + Math.random() * 6;
let flashStart = - 100;
let flashPower = 1;

function flashCurve( ft ) {

	if ( ft < 0 || ft > 1.5 ) return 0;
	let f = Math.exp( - ft * 16 );
	if ( ft > 0.17 ) f += 0.75 * Math.exp( - ( ft - 0.17 ) * 9 );
	if ( ft > 0.5 ) f += 0.3 * Math.exp( - ( ft - 0.5 ) * 12 );
	return f;

}

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
// 调试用：__rainy.shot({ t, yaw, pitch, flash }) 用固定参数渲染一帧后停住，便于截图对比
let frozen = null;
window.__rainy = {
	tier, frames: 0, stats: city.stats, renderer,
	shot( o = {} ) {

		frozen = { T: o.t ?? 20, yaw: o.yaw ?? 0, pitch: o.pitch ?? 0.07, flash: o.flash ?? 0, pending: true, done: false };

	},
	get shotDone() {

		return frozen ? frozen.done : false;

	},
	resume() {

		frozen = null;

	}
};

function renderFrozen() {

	const s = frozen;
	U.uTime.value = s.T;
	U.uFlash.value = s.flash;
	flashLight.intensity = s.flash * 2.5;
	hemi.intensity = 0.35 + s.flash * 0.8;
	camera.position.set( base.x + Math.sin( s.T * 0.06 ) * 0.45, base.y, base.z + Math.sin( s.T * 0.037 ) * 0.25 );
	camera.rotation.set( s.pitch, s.yaw, 0, 'YXZ' );
	post.final.uniforms.uFade.value = 1;
	post.final.uniforms.uTime.value = s.T;
	post.composer.render( 1 / 60 );
	document.body.classList.add( 'ready' );
	s.pending = false;
	s.done = true;

}

renderer.setAnimationLoop( ( time ) => {

	if ( frozen ) {

		if ( frozen.pending ) renderFrozen();
		return;

	}

	timer.update( time );
	const dt = Math.min( timer.getDelta(), 0.1 );
	const t = timer.getElapsed();
	now = t;
	const T = t + t0;
	U.uTime.value = T;

	// 闪电
	if ( t > nextFlash ) {

		flashStart = t;
		flashPower = 0.6 + Math.random() * 0.5;
		nextFlash = t + 14 + Math.random() * 18;
		audio.thunder( 1.0 + Math.random() * 2.2, flashPower );

	}

	const f = flashCurve( t - flashStart ) * flashPower;
	U.uFlash.value = f;
	flashLight.intensity = f * 2.5;
	hemi.intensity = 0.35 + f * 0.8;

	// 镜头
	const idle = t - lastInput > 5 && ! dragging;
	autoBlend = damp( autoBlend, idle ? 1 : 0, 0.6, dt );
	const autoYaw = Math.sin( T * 0.045 ) * 0.16 * autoBlend;
	const autoPitch = Math.sin( T * 0.07 + 1.0 ) * 0.02 * autoBlend;
	yaw = damp( yaw, tYaw + autoYaw, 3.5, dt );
	pitch = damp( pitch, tPitch + autoPitch, 3.5, dt );
	camera.position.set(
		base.x + Math.sin( T * 0.06 ) * 0.45,
		base.y + Math.sin( T * 0.5 ) * 0.01,
		base.z + Math.sin( T * 0.037 ) * 0.25
	);
	camera.rotation.set( pitch, yaw, Math.sin( T * 0.11 ) * 0.004, 'YXZ' );

	// 淡入
	if ( firstFrameAt < 0 && frames > 1 ) firstFrameAt = t;
	post.final.uniforms.uFade.value = firstFrameAt < 0 ? 0 : clamp( ( t - firstFrameAt ) / 2.5, 0, 1 );
	post.final.uniforms.uTime.value = T;

	post.composer.render( dt );
	frames ++;
	window.__rainy.frames = frames;

	if ( frames === 2 ) document.body.classList.add( 'ready' );

	// 自适应：前几秒如果明显掉帧，就降低渲染分辨率
	if ( frames > 30 && perfChecks < 2 ) {

		perfAcc += dt;
		perfN ++;
		if ( perfN === 90 ) {

			const avg = perfAcc / perfN;
			if ( avg > 1 / 28 && dpr > 1 ) {

				dpr = Math.max( 1, dpr * 0.75 );
				resize();

			}

			perfAcc = 0;
			perfN = 0;
			perfChecks ++;

		}

	}

	if ( debug && frames % 20 === 0 ) {

		fpsEl.textContent = `${ tier } · ${ ( 1 / Math.max( dt, 1e-3 ) ).toFixed( 0 ) } fps · dpr ${ dpr.toFixed( 2 ) } · ${ renderer.info.render.calls } draws`;

	}

} );
