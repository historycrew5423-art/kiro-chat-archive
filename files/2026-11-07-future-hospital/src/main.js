import * as THREE from 'three';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { SunLight } from 'three/addons/lights/SunLight.js';
import './render/atmosphere.js';
import { asset, PARAMS } from './core/assets.js';
import { createSky } from './render/sky.js';
import { createPost } from './render/post.js';
import { prepTexture } from './render/materials.js';
import { createTerrain } from './world/terrain.js';
import { createWater, LAYER_NO_REFLECT } from './world/water.js';
import { createHospital } from './world/hospital.js';
import { createVegetation } from './world/vegetation.js';
import { createCity } from './world/city.js';
import { createInterior } from './world/interior.js';
import { makeLayouts } from './game/layout.js';
import { TITLE_CAM, LIGHT_DIR, SUN_COLOR } from './config.js';
import { createGame } from './game/game.js';

// ---------------------------------------------------------------------------
// 入口：画质档位、渲染器、载入素材、搭场景、主循环、调试截图开关
// ---------------------------------------------------------------------------

const params = PARAMS;
const SHOT = params.has( 'shot' );
const coarse = matchMedia( '(pointer: coarse)' ).matches;
const TIERS = {
	high: { dpr: Math.min( devicePixelRatio, 1.5 ), msaa: 4, ao: true, aoSamples: 12, smaa: false, shadow: 2048, shadowFar: 220, reflScale: 0.5, terrainSeg: 360, nearTrees: 2600, forestStep: 9, blobShadows: false },
	mid: { dpr: Math.min( devicePixelRatio, 1.0 ), msaa: 2, ao: true, aoSamples: 8, smaa: false, shadow: 2048, shadowFar: 160, reflScale: 0.4, terrainSeg: 260, nearTrees: 1600, forestStep: 11, blobShadows: false },
	low: { dpr: Math.min( devicePixelRatio, 0.8 ), msaa: 0, ao: false, smaa: true, shadow: 1024, shadowFar: 110, reflScale: 0.3, terrainSeg: 180, nearTrees: 900, forestStep: 14, blobShadows: false }
};
const tier = TIERS[ params.get( 'q' ) ] ? params.get( 'q' ) : ( coarse ? 'low' : 'high' );
const Q = { ...TIERS[ tier ], tier };
if ( SHOT ) Q.dpr = 1;
Q.reflW = Math.round( innerWidth * Q.dpr * Q.reflScale );
Q.reflH = Math.round( innerHeight * Q.dpr * Q.reflScale );

const canvas = document.getElementById( 'c' );
const renderer = new THREE.WebGLRenderer( { canvas, antialias: false, powerPreference: 'high-performance', stencil: false } );
renderer.setPixelRatio( Q.dpr );
renderer.setSize( innerWidth, innerHeight, false );
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.85;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
scene.fog = new THREE.Fog( 0xffffff, 1, 2 ); // 只是打开雾的开关，算法在 atmosphere.js
const camera = new THREE.PerspectiveCamera( 50, innerWidth / innerHeight, 0.15, 12000 );
camera.layers.enable( LAYER_NO_REFLECT );
const time = { value: 0 };

const sun = new SunLight( SUN_COLOR, 5.0 );
sun.position.copy( LIGHT_DIR );
sun.castShadow = true;
sun.shadow.mapSize.set( Q.shadow, Q.shadow );
sun.shadow.camera.near = 1;
sun.shadow.camera.far = Q.shadowFar;
sun.shadow.bias = - 0.0002;
sun.shadow.normalBias = 0.5;
sun.shadow.radius = 2;
scene.add( sun );

const bar = document.querySelector( '#bar i' );
const loadText = document.getElementById( 'loadText' );
const manager = new THREE.LoadingManager();
manager.onProgress = ( url, done, total ) => {

	bar.style.width = ( 100 * done / total ).toFixed( 0 ) + '%';

};

async function load() {

	const tl = new THREE.TextureLoader( manager );
	const lt = ( n ) => tl.loadAsync( asset( n ) );
	const [ hdr, leaves, grass, grassNor, rock, gltf ] = await Promise.all( [
		new HDRLoader( manager ).loadAsync( asset( 'sky_1k.hdr' ) ),
		lt( 'leaves.webp' ), lt( 'leafy_grass_diff.jpg' ), lt( 'leafy_grass_nor_gl.jpg' ), lt( 'mossy_rock_diff.jpg' ),
		new GLTFLoader( manager ).loadAsync( asset( 'kangaroo.glb' ) )
	] );
	prepTexture( leaves, true, false );
	prepTexture( grass ); prepTexture( rock ); prepTexture( grassNor, false );
	return { hdr, gltf, tex: { leaves, grass, grassNor, rock } };

}

let world = null, post = null, game = null;

async function main() {

	const A = await load();
	loadText.textContent = '正在盖医院……';
	await new Promise( ( r ) => setTimeout( r, 30 ) );

	const sky = createSky( A.hdr );
	scene.add( sky.mesh );
	scene.environment = sky.buildEnv( renderer );
	scene.environmentIntensity = 0.55;

	const terrain = createTerrain( A.tex, Q );
	scene.add( terrain.group );
	const water = createWater( Q, time );
	scene.add( water );
	water.setup( camera );
	const hospital = createHospital();
	scene.add( hospital.group );
	const veg = createVegetation( { tex: A.tex, plant: hospital.plant, isBuilt: hospital.isBuilt, time, Q } );
	scene.add( veg.group );
	veg.group.getObjectByName( 'flowers' ).layers.set( LAYER_NO_REFLECT );
	const city = createCity();
	scene.add( city.group );
	const interior = createInterior( { leafMat: veg.leafMat } );
	scene.add( interior.root );
	interior.rebuild( makeLayouts( 20261108 ) );
	interior.setActive( 0 );
	world = { sky, terrain, water, hospital, veg, city, interior };

	post = createPost( renderer, scene, camera, Q );
	resize();

	game = createGame( { renderer, scene, camera, post, world, assets: A, Q, time, sun, SHOT } );
	// 开场是室外：先关 GTAO（进大厅和楼上时再开）
	if ( post.gtao ) post.gtao.enabled = false;

	setTitleCamera();
	renderer.compile( scene, camera );
	document.getElementById( 'loading' ).classList.add( 'hidden' );
	if ( ! SHOT ) game.showTitle();
	api.ready = true;
	requestAnimationFrame( loop );

}

function setTitleCamera() {

	camera.position.copy( TITLE_CAM.pos );
	camera.fov = TITLE_CAM.fov;
	camera.lookAt( TITLE_CAM.look );
	camera.updateProjectionMatrix();

}

function resize() {

	renderer.setPixelRatio( Q.dpr );
	renderer.setSize( innerWidth, innerHeight, false );
	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	post?.setSize( innerWidth, innerHeight, Q.dpr );

}

addEventListener( 'resize', resize );

// ---------------------------------------------------------------------------
// 主循环
// ---------------------------------------------------------------------------
const timer = new THREE.Timer();
let frozen = false;
let fpsAcc = 0, fpsN = 0, fps = 60;
const debugEl = document.getElementById( 'debug' );
if ( params.has( 'debug' ) ) debugEl.classList.remove( 'hidden' );

function renderFrame( dt ) {

	renderer.info.autoReset = false;
	renderer.info.reset();

	world.water.frame ++;
	world.city.update( time.value );
	world.interior.update( dt );
	post.render( dt );

}

function loop( ts ) {

	requestAnimationFrame( loop );
	if ( frozen ) return;
	timer.update( ts );
	const dt = Math.min( timer.getDelta(), 1 / 20 );
	time.value += dt;
	game.update( dt );
	renderFrame( dt );
	fpsAcc += dt; fpsN ++;
	if ( fpsAcc > 0.5 ) {

		fps = fpsN / fpsAcc; fpsAcc = 0; fpsN = 0;
		if ( ! debugEl.classList.contains( 'hidden' ) ) {

			const i = renderer.info.render;
			debugEl.textContent = `fps ${ fps.toFixed( 0 ) }  calls ${ i.calls }  tris ${ ( i.triangles / 1e6 ).toFixed( 2 ) }M  ${ game.debugText?.() || '' }`;

		}

	}

}

// ---------------------------------------------------------------------------
// 调试截图：__game.shot({ view: 'title' | { pos, look, fov }, t, state })，渲染几帧后停住
// ---------------------------------------------------------------------------
const api = window.__game = {
	ready: false,
	shotDone: false,
	shot( spec ) {

		api.shotDone = false;
		frozen = true;
		setTimeout( () => {

			try {

				shotInner( spec );

			} catch ( e ) {

				console.error( '[game] shot error', e.message, e.stack );
				api.shotDone = true;

			}

		}, 30 );

	},
	info() {

		const i = renderer.info.render;
		return { calls: i.calls, tris: i.triangles, cam: camera.position.toArray().map( ( v ) => + v.toFixed( 1 ) ) };

	},
	get game() {

		return game;

	}
};

function shotInner( spec ) {

	{
		{

			if ( spec.t !== undefined ) time.value = spec.t;
			game.applyShot?.( spec );
			if ( spec.view === 'title' ) setTitleCamera();
			else if ( spec.view && spec.view.pos ) {

				camera.position.set( ...spec.view.pos );
				camera.fov = spec.view.fov || 55;
				camera.lookAt( new THREE.Vector3( ...spec.view.look ) );
				camera.updateProjectionMatrix();

			}

			for ( let i = 0; i < ( spec.frames || 2 ); i ++ ) {

				game.update( spec.dt ?? 0.016, true );
				if ( spec.view === 'title' ) setTitleCamera();
				else if ( spec.view && spec.view.pos ) {

					camera.position.set( ...spec.view.pos );
					camera.lookAt( new THREE.Vector3( ...spec.view.look ) );

				}

				renderFrame( 0.016 );

			}

			// 读一个像素，等 GPU（沙盒里是软件渲染）真正画完再截图
			const gl = renderer.getContext();
			gl.readPixels( 0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array( 4 ) );
			api.shotDone = true;

		}

	}

}

main().catch( ( e ) => {

	console.error( e );
	loadText.textContent = '出错了：' + e.message;

} );
