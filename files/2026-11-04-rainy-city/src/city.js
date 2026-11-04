import * as THREE from 'three';
import { NOISE } from './glsl.js';

export const STREET_Y = - 42;

// ---------------------------------------------------------------------------
// 楼的着色器：窗户、亮灯、底商、远处降细节，全部在片元着色器里按楼的尺寸算出来。
// 每栋楼是一个实例，aParams = (随机种子, 亮灯比例, 风格, 冷暖)
// 风格：0 普通格子窗  1 办公楼横向条窗  2 住宅小窗  3 无窗（屋顶设备、平台）
// ---------------------------------------------------------------------------

const buildingVertex = /* glsl */ `
	attribute vec4 aParams;
	varying vec3 vWorld;
	flat varying vec3 vObjN;
	varying vec3 vLocalM;
	flat varying vec3 vSize;
	flat varying vec4 vParams;
	varying vec3 vNormalW;
	#include <common>
	#include <fog_pars_vertex>
	void main() {
		mat4 im = instanceMatrix;
		vSize = vec3( length( im[ 0 ].xyz ), length( im[ 1 ].xyz ), length( im[ 2 ].xyz ) );
		vLocalM = position * vSize;
		vObjN = normal;
		vec4 wp = modelMatrix * im * vec4( position, 1.0 );
		vWorld = wp.xyz;
		vNormalW = normalize( mat3( modelMatrix ) * mat3( im ) * normal );
		vParams = aParams;
		vec4 mvPosition = viewMatrix * wp;
		gl_Position = projectionMatrix * mvPosition;
		#include <fog_vertex>
	}
`;

const buildingFragment = /* glsl */ `
	uniform float uTime;
	uniform float uFlash;
	uniform vec3 uAmbTop;
	uniform vec3 uAmbBottom;
	uniform vec3 uHaze;
	uniform float uStreetY;
	varying vec3 vWorld;
	flat varying vec3 vObjN;
	varying vec3 vLocalM;
	flat varying vec3 vSize;
	flat varying vec4 vParams;
	varying vec3 vNormalW;
	#include <common>
	#include <fog_pars_fragment>
	${ NOISE }

	void main() {
		float seed = floor( vParams.x * 997.0 + 0.5 ) / 997.0;
		float litRatio = vParams.y;
		float style = vParams.z;
		float warmth = vParams.w;
		vec3 n = normalize( vNormalW );
		vec3 on = vObjN;

		float hAbove = vWorld.y - uStreetY;
		float occl = 0.3 + 0.7 * smoothstep( 0.0, 140.0, hAbove );
		vec3 amb = mix( uAmbBottom, uAmbTop, n.y * 0.5 + 0.5 ) * occl;
		amb += uFlash * vec3( 0.45, 0.5, 0.7 ) * 0.5;

		vec3 wallAlb = vec3( 0.050, 0.056, 0.066 ) * ( 0.7 + 0.6 * hash11( seed * 71.3 ) );
		// 墙面上一点大尺度的脏污变化
		wallAlb *= 0.8 + 0.4 * vnoise( vLocalM.xy * 0.08 + vLocalM.zy * 0.08 + seed * 13.0 );
		vec3 col = wallAlb * amb;

		// 街灯从下往上照的暖光
		col += vec3( 1.0, 0.42, 0.14 ) * 0.07 * exp( - hAbove / 16.0 ) * ( 1.0 - step( 0.5, abs( on.y ) ) );

		vec3 emis = vec3( 0.0 );

		if ( abs( on.y ) < 0.5 && style < 2.5 ) {

			bool sideX = abs( on.x ) > 0.5;
			float fw = sideX ? vSize.z : vSize.x;
			float u = ( sideX ? vLocalM.z : vLocalM.x ) + fw * 0.5;
			float faceId = sideX ? ( on.x > 0.0 ? 1.0 : 2.0 ) : ( on.z > 0.0 ? 3.0 : 4.0 );

			float cellW = style < 0.5 ? 2.8 : ( style < 1.5 ? 1.7 : 3.4 );
			float floorH = style < 1.5 ? 3.6 : 3.0;
			float cols = max( 1.0, floor( fw / cellW ) );
			vec2 cell = vec2( fw / cols, floorH );
			vec2 f = vec2( u, vLocalM.y ) / cell;
			vec2 id = floor( f );
			vec2 g = fract( f );
			vec2 fwd = fwidth( f ) + 1e-4;

			vec4 rect = style < 0.5 ? vec4( 0.16, 0.30, 0.84, 0.86 )
				: ( style < 1.5 ? vec4( -0.2, 0.34, 1.2, 0.84 ) : vec4( 0.30, 0.32, 0.70, 0.80 ) );

			float wx = smoothstep( rect.x - fwd.x, rect.x + fwd.x, g.x ) * ( 1.0 - smoothstep( rect.z - fwd.x, rect.z + fwd.x, g.x ) );
			float wy = smoothstep( rect.y - fwd.y, rect.y + fwd.y, g.y ) * ( 1.0 - smoothstep( rect.w - fwd.y, rect.w + fwd.y, g.y ) );
			float win = wx * wy;
			// 女儿墙那一截不开窗
			win *= 1.0 - step( vSize.y - 1.6, vLocalM.y );

			vec2 sid = id + vec2( seed * 137.0 + faceId * 17.0, seed * 59.0 + faceId * 3.0 );
			float rnd = hash12( sid );
			float floorBias = hash12( vec2( id.y + seed * 31.0, faceId + seed * 7.0 ) );
			float lit = step( rnd, litRatio * ( 0.3 + 1.4 * floorBias ) );

			vec3 warmA = vec3( 1.0, 0.48, 0.16 );
			vec3 warmB = vec3( 1.0, 0.74, 0.44 );
			vec3 cool = vec3( 0.62, 0.80, 1.0 );
			vec3 wc = mix( warmA, warmB, hash12( sid * 1.73 + 4.1 ) );
			wc = mix( wc, cool, step( 0.84 + 0.14 * warmth, hash12( sid * 2.91 + 1.3 ) ) );
			float inten = mix( 0.45, 2.6, pow( hash12( sid * 3.7 + 9.2 ), 1.5 ) );
			inten *= 0.6 + 0.4 * smoothstep( 0.2, 0.95, g.y );
			// 一部分窗拉了半边窗帘
			float curtain = step( 0.72, hash12( sid * 5.1 ) );
			inten *= mix( 1.0, 0.25 + 0.75 * step( 0.45 + 0.2 * hash12( sid ), g.x ), curtain );
			// 极少数灯管在闪
			float flick = step( 0.994, hash12( sid * 7.7 ) );
			inten *= 1.0 - flick * step( 0.55, fract( sin( floor( uTime * 12.0 ) + rnd * 40.0 ) * 43758.5 ) ) * 0.85;

			// 底层商铺：更亮、更宽
			if ( id.y < 0.5 ) {
				float shopW = smoothstep( 0.04, 0.06, g.x ) * ( 1.0 - smoothstep( 0.94, 0.96, g.x ) ) * smoothstep( 0.05, 0.08, g.y ) * ( 1.0 - smoothstep( 0.8, 0.83, g.y ) );
				win = shopW;
				lit = step( 0.35, hash12( sid * 1.1 + 2.0 ) );
				inten = 2.8;
			}

			vec3 detailed = wc * inten * lit * win;
			vec3 glass = mix( uAmbBottom, uAmbTop, 0.75 ) * 0.07 * win * ( 1.0 - lit ) * ( 0.6 + 0.8 * hash12( sid * 0.37 ) );
			detailed += glass;

			// 远处窗格小于一两个像素时，换成按块平均的亮度，避免闪烁摩尔纹
			float px = max( fwd.x, fwd.y );
			float lod = smoothstep( 0.28, 0.7, px );
			vec2 bid = floor( f / vec2( 3.0, 2.0 ) );
			float bl = hash12( bid + seed * 19.0 + faceId );
			vec3 avg = mix( warmA, warmB, 0.55 ) * litRatio * ( 0.2 + 1.6 * bl ) * 0.5;
			emis = mix( detailed, avg, lod );

			// 楼板分隔线
			float slab = smoothstep( 0.0, 0.07 + fwd.y, g.y );
			col *= mix( 0.55, 1.0, mix( slab, 1.0, lod ) );

		} else if ( on.y > 0.5 ) {

			col = wallAlb * 0.9 * amb;

		}

		col += emis;

		// 贴近街面的一层暖色雾气
		float dist = length( vWorld - cameraPosition );
		float haze = ( 1.0 - smoothstep( 0.0, 75.0, hAbove ) ) * smoothstep( 25.0, 280.0, dist ) * 0.8;
		col = mix( col, uHaze, haze );

		gl_FragColor = vec4( col, 1.0 );
		#include <tonemapping_fragment>
		#include <colorspace_fragment>
		#include <fog_fragment>
	}
`;

// 远处小灯点：航空障碍灯（红色闪烁）、塔吊工作灯
const lightsVertex = /* glsl */ `
	attribute vec3 aColor;
	attribute float aSize;
	attribute float aPhase;
	attribute float aBlink;
	uniform float uTime;
	uniform float uPointScale;
	uniform float uFogDensity;
	varying vec3 vColor;
	void main() {
		vec4 mv = modelViewMatrix * vec4( position, 1.0 );
		gl_Position = projectionMatrix * mv;
		float d = - mv.z;
		float blink = aBlink > 0.5 ? mix( 0.05, 1.0, smoothstep( 0.0, 0.05, fract( uTime * 0.55 + aPhase ) ) * ( 1.0 - smoothstep( 0.18, 0.3, fract( uTime * 0.55 + aPhase ) ) ) ) : 1.0;
		float fogF = exp( - uFogDensity * uFogDensity * d * d * 0.55 );
		gl_PointSize = max( aSize * uPointScale / d, 2.0 );
		vColor = aColor * blink * fogF;
	}
`;

const lightsFragment = /* glsl */ `
	varying vec3 vColor;
	void main() {
		float d = length( gl_PointCoord - 0.5 );
		float a = smoothstep( 0.5, 0.0, d );
		a = a * a;
		gl_FragColor = vec4( vColor * a, 1.0 );
	}
`;

function pickStyle( rng ) {

	const r = rng();
	if ( r < 0.5 ) return 0;
	if ( r < 0.75 ) return 1;
	return 2;

}

// 用一个单位立方体实例表示任意一根杆件：给出两端点和粗细
export function buildBeams( list, material ) {

	const geo = new THREE.BoxGeometry( 1, 1, 1 );
	const mesh = new THREE.InstancedMesh( geo, material, list.length );
	const up = new THREE.Vector3( 0, 1, 0 );
	const dir = new THREE.Vector3();
	const mid = new THREE.Vector3();
	const q = new THREE.Quaternion();
	const s = new THREE.Vector3();
	const m = new THREE.Matrix4();
	list.forEach( ( [ a, b, t ], i ) => {

		dir.subVectors( b, a );
		const len = dir.length();
		dir.normalize();
		mid.addVectors( a, b ).multiplyScalar( 0.5 );
		q.setFromUnitVectors( up, dir );
		s.set( t, len, t );
		m.compose( mid, q, s );
		mesh.setMatrixAt( i, m );

	} );
	mesh.instanceMatrix.needsUpdate = true;
	mesh.computeBoundingSphere();
	return mesh;

}

// 方形格构塔：四根主肢 + 每段一圈横杆 + 每个面上的 X 形斜撑
function lattice( beams, base, height, w0, w1, seg, t ) {

	const corners = ( y ) => {

		const k = y / height;
		const hw = ( w0 + ( w1 - w0 ) * k ) / 2;
		return [ [ - hw, - hw ], [ hw, - hw ], [ hw, hw ], [ - hw, hw ] ].map( ( [ x, z ] ) => new THREE.Vector3( base.x + x, base.y + y, base.z + z ) );

	};

	const n = Math.ceil( height / seg );
	for ( let i = 0; i < n; i ++ ) {

		const y0 = i * seg;
		const y1 = Math.min( height, ( i + 1 ) * seg );
		const c0 = corners( y0 );
		const c1 = corners( y1 );
		for ( let k = 0; k < 4; k ++ ) {

			const k1 = ( k + 1 ) % 4;
			beams.push( [ c0[ k ], c1[ k ], t * 1.7 ] );
			beams.push( [ c1[ k ], c1[ k1 ], t ] );
			beams.push( [ c0[ k ], c1[ k1 ], t * 0.65 ] );
			beams.push( [ c0[ k1 ], c1[ k ], t * 0.65 ] );

		}

	}

}

// 塔吊：格构塔身 + 起重臂 + 平衡臂 + 塔帽拉索 + 吊钩
function crane( beams, boxes, lights, base, mastH, jibLen, rot ) {

	lattice( beams, base, mastH, 2.4, 2.4, 3.2, 0.2 );
	const top = base.clone().add( new THREE.Vector3( 0, mastH, 0 ) );
	const dir = new THREE.Vector3( Math.cos( rot ), 0, Math.sin( rot ) );
	const side = new THREE.Vector3( - dir.z, 0, dir.x );
	const jibEnd = top.clone().addScaledVector( dir, jibLen );
	const cEnd = top.clone().addScaledVector( dir, - jibLen * 0.32 );
	const upv = new THREE.Vector3( 0, 2.2, 0 );

	const b1 = top.clone().addScaledVector( side, 0.9 );
	const b2 = top.clone().addScaledVector( side, - 0.9 );
	beams.push( [ b1, b1.clone().addScaledVector( dir, jibLen ), 0.22 ] );
	beams.push( [ b2, b2.clone().addScaledVector( dir, jibLen ), 0.22 ] );
	beams.push( [ top.clone().add( upv ), jibEnd.clone().add( upv.clone().multiplyScalar( 0.3 ) ), 0.22 ] );
	const steps = Math.floor( jibLen / 3 );
	for ( let i = 0; i < steps; i ++ ) {

		const p0 = top.clone().addScaledVector( dir, i * 3 );
		const p1 = top.clone().addScaledVector( dir, ( i + 1 ) * 3 ).add( upv.clone().multiplyScalar( 1 - 0.7 * ( i + 1 ) / steps ) );
		beams.push( [ p0.clone().addScaledVector( side, 0.9 ), p1, 0.1 ] );
		beams.push( [ p0.clone().addScaledVector( side, - 0.9 ), p1, 0.1 ] );

	}

	// 平衡臂和配重
	beams.push( [ top.clone().addScaledVector( side, 0.9 ), cEnd.clone().addScaledVector( side, 0.9 ), 0.3 ] );
	beams.push( [ top.clone().addScaledVector( side, - 0.9 ), cEnd.clone().addScaledVector( side, - 0.9 ), 0.3 ] );
	boxes.push( { x: cEnd.x, z: cEnd.z, y: cEnd.y - 2.5, w: 3.5, d: 3.5, h: 3, rot: - rot } );

	// 塔帽和拉索
	const apex = top.clone().add( new THREE.Vector3( 0, 11, 0 ) );
	beams.push( [ top, apex, 0.5 ] );
	beams.push( [ apex, top.clone().addScaledVector( dir, jibLen * 0.7 ).add( upv ), 0.06 ] );
	beams.push( [ apex, cEnd, 0.06 ] );

	// 驾驶室
	boxes.push( { x: top.x + side.x * 2.2, z: top.z + side.z * 2.2, y: top.y - 3, w: 2.4, d: 2.4, h: 2.6, rot: - rot } );

	// 吊钩钢丝
	const hookTop = top.clone().addScaledVector( dir, jibLen * 0.55 );
	const hookBot = hookTop.clone().add( new THREE.Vector3( 0, - mastH * 0.35, 0 ) );
	beams.push( [ hookTop, hookBot, 0.05 ] );
	boxes.push( { x: hookBot.x, z: hookBot.z, y: hookBot.y - 1.2, w: 1.2, d: 1.2, h: 1.2, rot: 0 } );

	lights.push( { p: apex.clone().add( new THREE.Vector3( 0, 0.6, 0 ) ), c: [ 6, 0.25, 0.1 ], s: 2.2, blink: 1 } );
	lights.push( { p: jibEnd.clone(), c: [ 6, 0.25, 0.1 ], s: 2.0, blink: 1 } );
	lights.push( { p: top.clone().addScaledVector( dir, jibLen * 0.3 ).add( new THREE.Vector3( 0, - 0.5, 0 ) ), c: [ 5, 3.4, 2.0 ], s: 3.0, blink: 0 } );

}

export function createCity( U, rng, Q ) {

	const group = new THREE.Group();
	const B = [];
	const beams = [];
	const lights = [];
	const tanks = [];
	const extraBoxes = [];

	const add = ( x, z, w, d, h, o = {} ) => {

		B.push( {
			x, z, w, d, h,
			y: o.y ?? STREET_Y,
			rot: o.rot ?? 0,
			seed: o.seed ?? rng(),
			lit: o.lit ?? ( 0.1 + rng() * 0.3 ),
			style: o.style ?? pickStyle( rng ),
			warm: rng()
		} );

	};

	// 脚下这栋楼（观景平台所在的楼），从街面一直到平台下方
	add( 0, 12, 80, 37, - STREET_Y - 0.06, { style: 0, lit: 0.35 } );

	// 近处几栋“主角楼”，保证画面前景有分量
	const heroes = [
		[ - 64, - 92, 30, 26, 96, 0, 0.22 ],
		[ 60, - 104, 28, 30, 128, 0, 0.18 ],
		[ - 8, - 175, 36, 28, 56, 1, 0.3 ],
		[ 108, - 180, 30, 30, 165, 2, 0.15 ],
		[ - 125, - 160, 32, 30, 138, 0, 0.2 ],
		[ 30, - 275, 34, 30, 215, 1, 0.25 ]
	];
	for ( const [ x, z, w, d, h, s, lit ] of heroes ) add( x, z, w, d, h, { style: s, lit } );

	const keepOut = [
		...heroes.map( ( [ x, z, w, d ] ) => [ x, z, w / 2 + 6, d / 2 + 6 ] ),
		[ 78, - 235, 22, 22 ], // 格构塔
		[ - 150, - 330, 10, 10 ], // 塔吊
		[ 230, - 560, 10, 10 ]
	];
	const blocked = ( x, z, hw, hd ) => keepOut.some( ( [ kx, kz, kw, kd ] ) => Math.abs( x - kx ) < hw + kw && Math.abs( z - kz ) < hd + kd );

	// 程序化街区：沿网格切出地块，地块里再分 1~4 栋楼
	const pitch = 48;
	for ( let bz = - 112; bz > - 1500; bz -= pitch ) {

		for ( let bx = - 1100; bx < 1100; bx += pitch ) {

			const cx = bx + pitch / 2;
			const cz = bz - pitch / 2;
			if ( Math.abs( cx ) > 150 + Math.abs( cz ) * 1.25 ) continue;
			const bw = pitch - 12;
			const lots = [];
			const r = rng();
			if ( r < 0.28 ) {

				lots.push( [ cx, cz, bw, bw ] );

			} else if ( r < 0.62 ) {

				const s = 0.35 + rng() * 0.3;
				const w1 = bw * s;
				if ( rng() < 0.5 ) {

					lots.push( [ cx - bw / 2 + w1 / 2, cz, w1, bw ] );
					lots.push( [ cx + w1 / 2, cz, bw - w1, bw ] );

				} else {

					lots.push( [ cx, cz - bw / 2 + w1 / 2, bw, w1 ] );
					lots.push( [ cx, cz + w1 / 2, bw, bw - w1 ] );

				}

			} else {

				const sx = 0.35 + rng() * 0.3;
				const sz = 0.35 + rng() * 0.3;
				const wa = bw * sx;
				const wb = bw - wa;
				const da = bw * sz;
				const db = bw - da;
				const x0 = cx - bw / 2;
				const z0 = cz - bw / 2;
				lots.push( [ x0 + wa / 2, z0 + da / 2, wa, da ] );
				lots.push( [ x0 + wa + wb / 2, z0 + da / 2, wb, da ] );
				lots.push( [ x0 + wa / 2, z0 + da + db / 2, wa, db ] );
				lots.push( [ x0 + wa + wb / 2, z0 + da + db / 2, wb, db ] );

			}

			for ( const [ lx, lz, lw, ld ] of lots ) {

				const sb = 1 + rng() * 2.5;
				const w = lw - sb * 2;
				const d = ld - sb * 2;
				if ( w < 6 || d < 6 ) continue;
				if ( blocked( lx, lz, w / 2, d / 2 ) ) continue;

				const downtown = Math.exp( - ( ( cx - 60 ) ** 2 + ( cz + 480 ) ** 2 ) / ( 2 * 280 * 280 ) );
				let h = 16 + Math.pow( rng(), 2.2 ) * 75 + downtown * 90 * rng();
				if ( - cz > 230 && rng() < 0.035 + downtown * 0.2 ) h += 60 + rng() * 150;
				// 近处的楼压低一些，给天空和远处高楼留出位置
				h = Math.min( h, 40 + - cz * 0.34 );
				const r2 = rng();
				const lit = r2 < 0.15 ? 0.03 + rng() * 0.05 : 0.08 + rng() * 0.3;
				add( lx, lz, w, d, h, { lit } );
				const top = STREET_Y + h;

				// 高楼顶部收分
				if ( h > 110 && rng() < 0.55 ) {

					const h2 = 8 + rng() * h * 0.2;
					add( lx, lz, w * ( 0.55 + rng() * 0.2 ), d * ( 0.55 + rng() * 0.2 ), h2, { y: top } );

				}

				// 屋顶设备箱
				const nb = Math.floor( rng() * 3.2 );
				for ( let i = 0; i < nb; i ++ ) {

					const bw2 = 2 + rng() * 5;
					const bd2 = 2 + rng() * 5;
					extraBoxes.push( {
						x: lx + ( rng() - 0.5 ) * ( w - bw2 ), z: lz + ( rng() - 0.5 ) * ( d - bd2 ),
						y: top, w: bw2, d: bd2, h: 1.5 + rng() * 3.5, rot: 0
					} );

				}

				// 老式水塔
				if ( h < 90 && rng() < 0.16 ) {

					tanks.push( { x: lx + ( rng() - 0.5 ) * w * 0.5, z: lz + ( rng() - 0.5 ) * d * 0.5, y: top, r: 1.8 + rng() * 1.4, h: 3.5 + rng() * 2.5 } );

				}

				// 高楼天线和红色障碍灯
				if ( h > 120 ) {

					const ah = 8 + rng() * 26;
					const ax = lx + ( rng() - 0.5 ) * w * 0.4;
					const az = lz + ( rng() - 0.5 ) * d * 0.4;
					beams.push( [ new THREE.Vector3( ax, top, az ), new THREE.Vector3( ax, top + ah, az ), 0.35 + rng() * 0.3 ] );
					lights.push( { p: new THREE.Vector3( ax, top + ah + 0.4, az ), c: [ 7, 0.22, 0.08 ], s: 2.4, blink: 1 } );
					for ( const [ sx, sz ] of [ [ - 1, - 1 ], [ 1, 1 ] ] ) {

						lights.push( { p: new THREE.Vector3( lx + sx * w / 2, top + 0.5, lz + sz * d / 2 ), c: [ 5, 0.2, 0.08 ], s: 1.8, blink: 1 } );

					}

				}

			}

		}

	}

	// 画面中右侧的高耸格构塔
	const towerBase = new THREE.Vector3( 78, STREET_Y, - 235 );
	lattice( beams, towerBase, 310, 22, 5, 14, 0.55 );
	beams.push( [ towerBase.clone().add( new THREE.Vector3( 0, 310, 0 ) ), towerBase.clone().add( new THREE.Vector3( 0, 360, 0 ) ), 0.9 ] );
	for ( const ph of [ 118, 214 ] ) {

		const hw = ( 22 + ( 5 - 22 ) * ( ph / 310 ) ) + 6;
		extraBoxes.push( { x: towerBase.x, z: towerBase.z, y: STREET_Y + ph, w: hw, d: hw, h: 2.5, rot: 0 } );
		for ( const [ sx, sz ] of [ [ - 1, - 1 ], [ 1, - 1 ], [ 1, 1 ], [ - 1, 1 ] ] ) {

			lights.push( { p: new THREE.Vector3( towerBase.x + sx * hw / 2, STREET_Y + ph + 3, towerBase.z + sz * hw / 2 ), c: [ 5, 3.2, 1.8 ], s: 2.6, blink: 0 } );

		}

	}

	for ( let y = 40; y < 360; y += 55 ) {

		const k = Math.min( y, 310 ) / 310;
		const hw = ( 22 + ( 5 - 22 ) * k ) / 2;
		lights.push( { p: new THREE.Vector3( towerBase.x - hw, STREET_Y + y, towerBase.z + hw ), c: [ 7, 0.22, 0.08 ], s: 2.4, blink: 1 } );

	}

	// 两台塔吊
	crane( beams, extraBoxes, lights, new THREE.Vector3( - 150, STREET_Y, - 330 ), 150, 56, 0.5 );
	crane( beams, extraBoxes, lights, new THREE.Vector3( 230, STREET_Y, - 560 ), 195, 66, 2.5 );

	// ---- 楼体实例 ----
	for ( const b of extraBoxes ) {

		B.push( { x: b.x, z: b.z, y: b.y, w: b.w, d: b.d, h: b.h, rot: b.rot, seed: rng(), lit: 0, style: 3, warm: 0 } );

	}

	const boxGeo = new THREE.BoxGeometry( 1, 1, 1 );
	boxGeo.translate( 0, 0.5, 0 );
	const params = new Float32Array( B.length * 4 );
	const bMat = new THREE.ShaderMaterial( {
		name: 'Building',
		fog: true,
		uniforms: {
			...THREE.UniformsUtils.clone( THREE.UniformsLib.fog ),
			uTime: U.uTime,
			uFlash: U.uFlash,
			uAmbTop: U.uAmbTop,
			uAmbBottom: U.uAmbBottom,
			uHaze: U.uHaze,
			uStreetY: { value: STREET_Y }
		},
		vertexShader: buildingVertex,
		fragmentShader: buildingFragment
	} );
	const bMesh = new THREE.InstancedMesh( boxGeo, bMat, B.length );
	const m = new THREE.Matrix4();
	const q = new THREE.Quaternion();
	const e = new THREE.Euler();
	B.forEach( ( b, i ) => {

		q.setFromEuler( e.set( 0, b.rot, 0 ) );
		m.compose( new THREE.Vector3( b.x, b.y, b.z ), q, new THREE.Vector3( b.w, b.h, b.d ) );
		bMesh.setMatrixAt( i, m );
		params.set( [ b.seed, b.lit, b.style, b.warm ], i * 4 );

	} );
	boxGeo.setAttribute( 'aParams', new THREE.InstancedBufferAttribute( params, 4 ) );
	bMesh.instanceMatrix.needsUpdate = true;
	bMesh.computeBoundingSphere();
	group.add( bMesh );

	// ---- 杆件（塔、塔吊、天线）----
	const metal = new THREE.MeshStandardMaterial( { color: 0x15181c, metalness: 0.55, roughness: 0.5 } );
	group.add( buildBeams( beams, metal ) );

	// ---- 水塔 ----
	if ( tanks.length ) {

		const tGeo = new THREE.CylinderGeometry( 1, 1, 1, 14 );
		tGeo.translate( 0, 0.5, 0 );
		const tMat = new THREE.MeshStandardMaterial( { color: 0x1d1813, roughness: 0.85 } );
		const tMesh = new THREE.InstancedMesh( tGeo, tMat, tanks.length );
		tanks.forEach( ( t, i ) => {

			m.compose( new THREE.Vector3( t.x, t.y + 2.2, t.z ), new THREE.Quaternion(), new THREE.Vector3( t.r, t.h, t.r ) );
			tMesh.setMatrixAt( i, m );

		} );
		tMesh.computeBoundingSphere();
		group.add( tMesh );

	}

	// ---- 灯点 ----
	const lg = new THREE.BufferGeometry();
	const lp = new Float32Array( lights.length * 3 );
	const lc = new Float32Array( lights.length * 3 );
	const ls = new Float32Array( lights.length );
	const lph = new Float32Array( lights.length );
	const lb = new Float32Array( lights.length );
	lights.forEach( ( l, i ) => {

		lp.set( [ l.p.x, l.p.y, l.p.z ], i * 3 );
		lc.set( l.c, i * 3 );
		ls[ i ] = l.s;
		lph[ i ] = rng();
		lb[ i ] = l.blink;

	} );
	lg.setAttribute( 'position', new THREE.BufferAttribute( lp, 3 ) );
	lg.setAttribute( 'aColor', new THREE.BufferAttribute( lc, 3 ) );
	lg.setAttribute( 'aSize', new THREE.BufferAttribute( ls, 1 ) );
	lg.setAttribute( 'aPhase', new THREE.BufferAttribute( lph, 1 ) );
	lg.setAttribute( 'aBlink', new THREE.BufferAttribute( lb, 1 ) );
	const lMat = new THREE.ShaderMaterial( {
		name: 'CityLights',
		uniforms: { uTime: U.uTime, uPointScale: U.uPointScale, uFogDensity: U.uFogDensity },
		vertexShader: lightsVertex,
		fragmentShader: lightsFragment,
		blending: THREE.AdditiveBlending,
		depthWrite: false,
		transparent: true
	} );
	const pts = new THREE.Points( lg, lMat );
	pts.frustumCulled = false;
	group.add( pts );

	return { group, stats: { buildings: B.length, beams: beams.length, lights: lights.length } };

}
