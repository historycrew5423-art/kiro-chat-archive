import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { SunLight } from 'three/addons/lights/SunLight.js';
import './atmosphere.js';
import { asset } from './assets.js';
import { REF, SUN_DIR, SUN_COLOR, L, DECK_Y } from './layout.js';
import { makeNoise } from './noise.js';
import { createSky } from './sky.js';
import { createHillField, createHill, createGround, createKnoll } from './terrain.js';
import { createCity, createTreeBlobs } from './city.js';
import { createTowers } from './towers.js';
import { createViaduct } from './viaduct.js';
import { Foliage } from './vegetation.js';
import { createPark } from './park.js';
import { createFlyers } from './flyers.js';
import { createCharacter } from './character.js';
import { createPlayer } from './player.js';
import { createObjectives } from './objectives.js';
import { createPost } from './post.js';
import { createAudio } from './audio.js';

async function main() {

// ---------------------------------------------------------------------------
// 画质档位：电脑默认 high，手机默认 low。网址加 ?q=high / mid / low 可以强制指定
// ---------------------------------------------------------------------------
const params = new URLSearchParams( location.search );
const coarse = matchMedia( '(pointer: coarse)' ).matches;
const TIERS = {
	high: { dpr: Math.min( devicePixelRatio, 1.5 ), msaa: 4, shadow: 4096, shadowFar: 2200, cityRange: 7000, treeRange: 3200, forestTrees: 60000, hillRes: 280, discTrees: 80, sky: 'sky_8k.jpg' },
	mid: { dpr: 1, msaa: 2, shadow: 2048, shadowFar: 1600, cityRange: 5500, treeRange: 2400, forestTrees: 35000, hillRes: 220, discTrees: 50, sky: 'sky_8k.jpg' },
	low: { dpr: 1, msaa: 0, shadow: 1024, shadowFar: 900, cityRange: 4000, treeRange: 1600, forestTrees: 15000, hillRes: 160, discTrees: 30, sky: 'sky_4k.jpg' }
};
const tier = TIERS[ params.get( 'q' ) ] ? params.get( 'q' ) : ( coarse ? 'low' : 'high' );
const Q = TIERS[ tier ];
const debug = params.has( 'debug' );

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
const D2R = Math.PI / 180;

const U = {
	uTime: { value: 0 },
	uSkyRot: { value: 0 },
	uSkyGain: { value: 1.0 }
};

// ---------------------------------------------------------------------------
// 渲染器
// ---------------------------------------------------------------------------
const canvas = document.getElementById( 'c' );
const renderer = new THREE.WebGLRenderer( { canvas, antialias: false, powerPreference: 'high-performance', stencil: false } );
let dpr = Q.dpr;
renderer.setPixelRatio( dpr );
renderer.setSize( innerWidth, innerHeight, false );
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
// 雾的算法在 atmosphere.js 里替换掉了；这里只是打开雾的开关
scene.fog = new THREE.Fog( 0xffffff, 1, 2 );
const camera = new THREE.PerspectiveCamera( 40, innerWidth / innerHeight, 0.4, 36000 );

// 阳光：three r186 新增的 SunLight，两级级联阴影跟着镜头走（近处细、远处粗），城市里的楼也能互相投影
const sun = new SunLight( SUN_COLOR, 5.4 );
sun.position.copy( SUN_DIR );
sun.castShadow = true;
sun.shadow.mapSize.set( Q.shadow, Q.shadow );
sun.shadow.camera.near = 1;
sun.shadow.camera.far = Q.shadowFar;
sun.shadow.bias = - 0.0003;
sun.shadow.normalBias = 0.6;
sun.shadow.radius = 2;
scene.add( sun );

function placeShadow() {}

// ---------------------------------------------------------------------------
// 载入素材
// ---------------------------------------------------------------------------
const bar = document.querySelector( '#bar i' );
const manager = new THREE.LoadingManager();
manager.onProgress = ( url, done, total ) => {

	bar.style.width = ( 100 * done / total ).toFixed( 0 ) + '%';

};

const texLoader = new THREE.TextureLoader( manager );
texLoader.setCrossOrigin( 'anonymous' );
const loadTex = ( name, srgb = false ) => new Promise( ( res, rej ) => texLoader.load( asset( name ), ( t ) => {

	if ( srgb ) t.colorSpace = THREE.SRGBColorSpace;
	t.wrapS = t.wrapT = THREE.RepeatWrapping;
	t.anisotropy = 8;
	res( t );

}, undefined, rej ) );
const gltfLoader = new GLTFLoader( manager );
gltfLoader.setCrossOrigin( 'anonymous' );

const [ skyTex, envTex, leafTex, rockD, rockN, rockA, grassD, grassN, gltf ] = await Promise.all( [
	loadTex( Q.sky, true ), loadTex( 'sky_env.jpg', true ), loadTex( 'leaves.webp', true ),
	loadTex( 'mossy_rock_diff.jpg', true ), loadTex( 'mossy_rock_nor_gl.jpg' ), loadTex( 'mossy_rock_arm.jpg' ),
	loadTex( 'leafy_grass_diff.jpg', true ), loadTex( 'leafy_grass_nor_gl.jpg' ),
	gltfLoader.loadAsync( asset( 'character.glb' ) )
] );
leafTex.wrapS = leafTex.wrapT = THREE.ClampToEdgeWrapping;

// 环境光：用天空照片生成
{

	envTex.mapping = THREE.EquirectangularReflectionMapping;
	const pm = new THREE.PMREMGenerator( renderer );
	scene.environment = pm.fromEquirectangular( envTex ).texture;
	scene.environmentIntensity = 0.34;
	scene.environmentRotation.y = 0;
	pm.dispose();

}

// ---------------------------------------------------------------------------
// 场景
// ---------------------------------------------------------------------------
const tBuild = performance.now();
const sky = createSky( skyTex, U );
scene.add( sky );
const hillField = createHillField( N );
const hillMesh = createHill( hillField, { rockD, rockN, rockA, grassD, grassN }, Q );
scene.add( hillMesh );
scene.add( createKnoll( hillField, N, hillMesh.userData.material ) );
scene.add( createGround( U, Q ) );
const city = createCity( rng, Q );
scene.add( city.group );

const nearFoliage = new Foliage( leafTex );
const frameFoliage = new Foliage( leafTex );
const farFoliage = new Foliage( leafTex );
const towers = createTowers( farFoliage, rng, Q );
scene.add( towers.group );
const viaduct = createViaduct( nearFoliage, rng, Q, U, leafTex );
scene.add( viaduct.group );
const park = createPark( nearFoliage, hillField, rng, frameFoliage );
scene.add( park.group );
scene.add( nearFoliage.build( { uTime: U.uTime } ) );
// 框景的树叶不接收阴影：它们正好在大树冠的阴影里，会变成黑色剪影
const frameGroup = frameFoliage.build( { uTime: U.uTime } );
frameGroup.traverse( ( o ) => {

	o.receiveShadow = false;

} );
scene.add( frameGroup );
scene.add( farFoliage.build( { uTime: U.uTime, castShadow: false } ) );

// 树：近处 80 面、远处 20 面
{

	const all = city.trees.concat( towers.blobs.map( ( [ x, y, z, s ] ) => [ x, y - s * 0.75, z, s ] ) );
	const nearT = [], farT = [];
	for ( const t of all ) ( Math.hypot( t[ 0 ], t[ 2 ] ) < 1400 ? nearT : farT ).push( t );
	const nb = createTreeBlobs( nearT, rng, 1, leafTex );
	nb.castShadow = true;
	nb.receiveShadow = true;
	scene.add( nb );
	scene.add( createTreeBlobs( farT, rng, 0, leafTex ) );

}

const flyers = createFlyers( L.aircraft, rng );
scene.add( flyers.group );

const character = createCharacter( gltf, 1.6 );
scene.add( character.root );

const obstacles = park.obstacles.concat( viaduct.obstacles.map( ( o ) => ( { ...o, base: DECK_Y } ) ) );
obstacles.forEach( ( o ) => {

	o.disc = false;

} );
const player = createPlayer( { character, hill: hillField, viaduct, obstacles, camera, dom: canvas } );
player.place( park.spawn, Math.PI );
const audio = createAudio();
player.onJump = ( p ) => audio.hop( p );
player.onLand = ( i ) => audio.land( i );
const buildMs = Math.round( performance.now() - tBuild );

// ---------------------------------------------------------------------------
// 界面
// ---------------------------------------------------------------------------
const $ = ( s ) => document.querySelector( s );
let toastTimer = 0;
const ui = {
	hinted: false,
	seeds( n, total ) {

		$( '#seedCount' ).innerHTML = `阳光种子 <b>${ n }</b> / ${ total }`;

	},
	objective( t ) {

		$( '#objective' ).textContent = t;

	},
	toast( t ) {

		const el = $( '#toast' );
		el.textContent = t;
		el.classList.add( 'show' );
		clearTimeout( toastTimer );
		toastTimer = setTimeout( () => el.classList.remove( 'show' ), 2600 );

	},
	win( sec ) {

		const m = Math.floor( sec / 60 ), s = Math.round( sec % 60 );
		$( '#winText' ).textContent = `用时 ${ m } 分 ${ s } 秒。阳光种子已经种进花园。`;
		$( '#win' ).classList.add( 'show' );
		document.exitPointerLock && document.exitPointerLock();

	}
};
$( '#stay' ).addEventListener( 'click', () => $( '#win' ).classList.remove( 'show' ) );
const objectives = createObjectives( { scene, viaduct, hill: hillField, player, audio, ui, U } );
const soundBtn = $( '#sound' );
const setSoundLabel = () => {

	soundBtn.textContent = audio.on ? '关闭声音' : '开启声音';

};

soundBtn.addEventListener( 'click', () => {

	audio.toggle();
	setSoundLabel();

} );

// ---------------------------------------------------------------------------
// 后期、尺寸
// ---------------------------------------------------------------------------
const post = createPost( renderer, scene, camera, Q );

// 参考镜头的竖直视角：按当前画面比例保持水平视角 64°
function refFov( aspect ) {

	const a = Math.max( aspect, 1.0 );
	return 2 * Math.atan( Math.tan( REF.hfov / 2 * D2R ) / a ) / D2R;

}

const playFov = ( aspect ) => clamp( 2 * Math.atan( Math.tan( 36 * D2R ) / aspect ) / D2R, 45, 75 );

function resize() {

	renderer.setPixelRatio( dpr );
	renderer.setSize( innerWidth, innerHeight, false );
	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	post.setSize( innerWidth, innerHeight, dpr );

}

resize();
addEventListener( 'resize', resize );

// ---------------------------------------------------------------------------
// 状态：intro（参考图镜头）→ fly（镜头飞到主角身后）→ play
// ---------------------------------------------------------------------------
let mode = 'intro';
let flyT = 0;
const flyFrom = { pos: new THREE.Vector3(), quat: new THREE.Quaternion(), fov: 40 };

function setRefCamera() {

	camera.position.copy( REF.pos );
	camera.rotation.set( REF.pitch, 0, 0, 'YXZ' );
	camera.fov = refFov( camera.aspect );
	camera.updateProjectionMatrix();

}

$( '#go' ).addEventListener( 'click', () => {

	if ( mode !== 'intro' ) return;
	audio.ensure();
	setSoundLabel();
	mode = 'fly';
	flyT = 0;
	flyFrom.pos.copy( camera.position );
	flyFrom.quat.copy( camera.quaternion );
	flyFrom.fov = camera.fov;
	document.body.classList.remove( 'intro' );

} );

// ---------------------------------------------------------------------------
// 主循环
// ---------------------------------------------------------------------------
const timer = new THREE.Timer();
timer.connect( document );
let frames = 0;
let lastSafe = park.spawn.clone();
let perfAcc = 0, perfN = 0, perfChecks = 0;
const fpsEl = $( '#fps' );
if ( debug ) fpsEl.style.display = 'block';

let frozen = null;
window.__game = {
	tier, buildMs, renderer, player, objectives, viaduct, hill: hillField, character,
	frames: 0,
	stats: { buildings: city.count, cards: nearFoliage.cards.length + farFoliage.cards.length },
	// 调试截图：shot({ view: 'ref' | 'player' | { pos:[x,y,z], look:[x,y,z], fov }, t })
	shot( o = {} ) {

		frozen = { o, pending: true, done: false };

	},
	get shotDone() {

		return frozen ? frozen.done : false;

	},
	resume() {

		frozen = null;

	},
	start() {

		$( '#go' ).click();

	}
};

function step( dt, T ) {

	U.uTime.value = T;
	flyers.update( T );
	viaduct.update( dt, T );

	if ( mode === 'play' ) {

		player.update( dt );
		objectives.update( dt, T );
		player.updateCamera( dt );
		// 被电车撞到：送回最近的安全位置
		if ( ! player.disc && viaduct.tramHit( player.pos.x, player.pos.z ) && player.enabled ) {

			player.place( lastSafe, player.yaw );
			ui.toast( '小心电车！' );

		} else if ( player.onGround && ! player.disc ) {

			const q = viaduct.query( player.pos.x, player.pos.z );
			if ( Math.abs( q.l ) > 5.5 || viaduct.stationZone( q.s ) === false || q.s < 0 ) lastSafe.copy( player.pos );

		}

		placeShadow( player.pos );

	} else if ( mode === 'fly' ) {

		flyT += dt / 3.2;
		const k = THREE.MathUtils.smootherstep( Math.min( 1, flyT ), 0, 1 );
		player.update( dt );
		player.updateCamera( 1 );
		const toPos = camera.position.clone(), toQuat = camera.quaternion.clone();
		camera.position.lerpVectors( flyFrom.pos, toPos, k );
		camera.quaternion.slerpQuaternions( flyFrom.quat, toQuat, k );
		camera.fov = flyFrom.fov + ( playFov( camera.aspect ) - flyFrom.fov ) * k;
		camera.updateProjectionMatrix();
		placeShadow( player.pos.clone().lerp( player.pos, k ) );
		if ( flyT >= 1 ) {

			mode = 'play';
			player.enabled = true;
			objectives.start( T );
			document.body.classList.add( 'playing' );
			camera.fov = playFov( camera.aspect );
			camera.updateProjectionMatrix();

		}

	} else {

		player.update( dt );
		setRefCamera();
		placeShadow( new THREE.Vector3( 0, DECK_Y + 5, - 10 ) );

	}

	sky.position.copy( camera.position );

}

function renderFrozen() {

	const o = frozen.o;
	const T = o.t ?? 20;
	U.uTime.value = T;
	flyers.update( T );
	if ( o.view === 'ref' || ! o.view ) {

		setRefCamera();
		placeShadow( new THREE.Vector3( 0, DECK_Y + 5, - 10 ) );

	} else if ( o.view === 'player' ) {

		if ( o.playerPos ) player.place( new THREE.Vector3( ...o.playerPos ), o.playerYaw ?? 0, o.disc ?? false );
		if ( o.camYaw !== undefined ) player.cam.yaw = o.camYaw;
		if ( o.camPitch !== undefined ) player.cam.pitch = o.camPitch;
		if ( o.camDist !== undefined ) player.cam.dist = player.cam.tDist = o.camDist;
		if ( o.pose ) character.pose( o.pose );
		else player.update( 1 / 60 );
		player.cam.look.copy( player.pos ).add( new THREE.Vector3( 0, 1.5, 0 ) );
		player.updateCamera( 1 );
		camera.fov = playFov( camera.aspect );
		camera.updateProjectionMatrix();
		placeShadow( player.pos );

	} else {

		camera.position.set( ...o.view.pos );
		camera.lookAt( new THREE.Vector3( ...o.view.look ) );
		camera.fov = o.view.fov ?? 50;
		camera.updateProjectionMatrix();
		placeShadow( new THREE.Vector3( ...( o.view.shadow || o.view.look ) ) );

	}

	sky.position.copy( camera.position );
	post.final.uniforms.uTime.value = T;
	post.composer.render( 1 / 60 );
	frozen.pending = false;
	frozen.done = true;

}

document.body.classList.add( 'loaded', 'intro' );
setRefCamera();

renderer.setAnimationLoop( ( time ) => {

	if ( frozen ) {

		if ( frozen.pending ) renderFrozen();
		return;

	}

	timer.update( time );
	const dt = Math.min( timer.getDelta(), 0.05 );
	const T = timer.getElapsed() + 20;
	step( dt, T );
	post.final.uniforms.uTime.value = T;
	post.composer.render( dt );
	frames ++;
	window.__game.frames = frames;

	// 前几秒明显掉帧就降低分辨率
	if ( frames > 30 && perfChecks < 2 ) {

		perfAcc += dt;
		perfN ++;
		if ( perfN === 90 ) {

			if ( perfAcc / perfN > 1 / 30 && dpr > 1 ) {

				dpr = Math.max( 1, dpr * 0.75 );
				resize();

			}

			perfAcc = 0;
			perfN = 0;
			perfChecks ++;

		}

	}

	if ( debug && frames % 20 === 0 ) {

		const p = player.pos;
		fpsEl.textContent = `${ tier } · ${ ( 1 / Math.max( dt, 1e-3 ) ).toFixed( 0 ) } fps · dpr ${ dpr.toFixed( 2 ) } · ${ renderer.info.render.calls } draws · ${ ( renderer.info.render.triangles / 1e6 ).toFixed( 2 ) }M tris · (${ p.x.toFixed( 0 ) }, ${ p.y.toFixed( 1 ) }, ${ p.z.toFixed( 0 ) })`;

	}

} );

}

main().catch( ( e ) => {

	console.error( e );
	const box = document.querySelector( '#loading .box' );
	if ( box ) box.textContent = '载入失败：' + e.message;

} );
