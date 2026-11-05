import * as THREE from 'three';
import { NOISE } from './glsl.js';
import { L, VIADUCT, PLATEAU, DECK_Y } from './layout.js';

// ---------------------------------------------------------------------------
// 城市：几万栋程序生成的楼（一个实例网格），楼间和森林里的树（实例网格）。
// 立面（窗带、网格窗、玻璃幕墙、竖向遮阳板）和屋顶花园都在着色器里按楼的尺寸画出来。
// ---------------------------------------------------------------------------

function segDist( px, pz, a, b ) {

	const abx = b.x - a.x, abz = b.z - a.z;
	const t = Math.max( 0, Math.min( 1, ( ( px - a.x ) * abx + ( pz - a.z ) * abz ) / ( abx * abx + abz * abz ) ) );
	return Math.hypot( px - a.x - abx * t, pz - a.z - abz * t );

}

const forestMask = ( x, z ) => {

	const edge = 150 + 0.10 * ( - z );
	const sm = ( a, b, v ) => {

		const t = Math.min( 1, Math.max( 0, ( v - a ) / ( b - a ) ) );
		return t * t * ( 3 - 2 * t );

	};

	return sm( edge, edge + 120, x ) * sm( - 250, - 600, z ) * ( 1 - sm( 2600, 3400, x - 0.18 * ( - z ) ) );

};

const isSea = ( x, z ) => x - ( 4200 + 0.3 * ( - z ) ) > 0;

export function buildingMaterial( envIntensity = 1 ) {

	const mat = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0.6, metalness: 0, envMapIntensity: envIntensity } );
	mat.onBeforeCompile = ( sh ) => {

		sh.vertexShader = sh.vertexShader
			.replace( '#include <common>', /* glsl */ `#include <common>
				attribute vec4 aB;
				varying vec3 vLocal;
				flat varying vec3 vObjN;
				flat varying vec3 vSize;
				flat varying vec4 vB;
			` )
			.replace( '#include <begin_vertex>', /* glsl */ `#include <begin_vertex>
				vSize = vec3( length( instanceMatrix[ 0 ].xyz ), length( instanceMatrix[ 1 ].xyz ), length( instanceMatrix[ 2 ].xyz ) );
				vLocal = position * vSize;
				vObjN = normal;
				vB = aB;
			` );
		sh.fragmentShader = sh.fragmentShader
			.replace( '#include <common>', `#include <common>
				varying vec3 vLocal;
				flat varying vec3 vObjN;
				flat varying vec3 vSize;
				flat varying vec4 vB;
				${ NOISE }
			` )
			.replace( '#include <color_fragment>', /* glsl */ `
				#include <color_fragment>
				float seed = vB.x;
				float style = vB.y;
				float green = vB.z;
				float floorH = vB.w;
				vec3 on = vObjN;
				float bMetal = 0.0;
				float bRough = 0.7;
				vec3 wall = mix( vec3( 0.80, 0.80, 0.77 ), vec3( 0.92, 0.91, 0.87 ), hash11( seed * 91.7 ) );
				vec3 col = wall;
				float dist = length( vFogWorldPos - cameraPosition );
				if ( abs( on.y ) < 0.5 ) {
					bool sx = abs( on.x ) > 0.5;
					float fw = sx ? vSize.z : vSize.x;
					float u = ( sx ? vLocal.z : vLocal.x ) + fw * 0.5;
					float y = vLocal.y;
					vec2 f = vec2( u / max( 1.0, fw / floor( max( 1.0, fw / 3.2 ) ) ), y / floorH );
					vec2 g = fract( f );
					vec2 fwd = fwidth( f ) + 1e-4;
					float lod = smoothstep( 0.25, 0.6, max( fwd.x, fwd.y ) );
					float glass = 0.0;
					if ( style < 0.5 ) {
						// 横向窗带
						glass = smoothstep( 0.30 - fwd.y, 0.30 + fwd.y, g.y ) * ( 1.0 - smoothstep( 0.78 - fwd.y, 0.78 + fwd.y, g.y ) );
					} else if ( style < 1.5 ) {
						// 网格窗
						glass = smoothstep( 0.18 - fwd.x, 0.18 + fwd.x, g.x ) * ( 1.0 - smoothstep( 0.82 - fwd.x, 0.82 + fwd.x, g.x ) )
							* smoothstep( 0.28 - fwd.y, 0.28 + fwd.y, g.y ) * ( 1.0 - smoothstep( 0.8 - fwd.y, 0.8 + fwd.y, g.y ) );
					} else if ( style < 2.5 ) {
						// 玻璃幕墙（细白框）
						glass = 1.0 - 0.75 * max( 1.0 - smoothstep( 0.0, 0.06 + fwd.x, g.x ), 1.0 - smoothstep( 0.0, 0.05 + fwd.y, g.y ) );
					} else {
						// 竖向遮阳板
						glass = smoothstep( 0.42 - fwd.x, 0.42 + fwd.x, g.x ) * ( 1.0 - smoothstep( 0.92 - fwd.x, 0.92 + fwd.x, g.x ) ) * step( 0.15, g.y );
					}
					// 远处窗格小于像素时取平均值，避免闪烁
					float avg = style < 0.5 ? 0.48 : ( style < 1.5 ? 0.33 : ( style < 2.5 ? 0.85 : 0.45 ) );
					glass = mix( glass, avg, lod );
					glass *= 1.0 - step( vSize.y - 1.5, y ) * ( 1.0 - lod );
					vec3 gCol = style > 1.5 && style < 2.5 ? vec3( 0.26, 0.36, 0.48 ) : vec3( 0.24, 0.29, 0.34 );
					gCol *= 0.8 + 0.4 * hash12( floor( f ) + seed * 13.0 );
					col = mix( wall, gCol, glass );
					bMetal = glass * 0.45;
					bRough = mix( 0.7, 0.2, glass );
					// 阳台上的植物（太阳朋克）
					float plant = step( 0.65, hash12( floor( f ) * vec2( 1.0, 3.1 ) + seed * 7.0 ) ) * smoothstep( 0.05, 0.0, g.y - 0.05 ) * step( green, 0.5 ) * ( 1.0 - lod );
					col = mix( col, vec3( 0.07, 0.14, 0.04 ), plant * 0.8 );
					// 贴近地面的地方更暗（街道里照不到天光）
					col *= mix( 0.55, 1.0, smoothstep( 0.0, 40.0, vFogWorldPos.y ) );
				} else if ( on.y > 0.5 ) {
					// 屋顶：一部分是屋顶花园
					float n = vnoise( vLocal.xz * 0.15 + seed * 31.0 );
					vec3 roofC = vec3( 0.55, 0.55, 0.53 ) * ( 0.85 + 0.3 * n );
					vec3 garden = vec3( 0.06, 0.12, 0.035 ) * ( 0.7 + 0.7 * n );
					col = mix( roofC, garden, green * smoothstep( 0.3, 0.5, n + 0.15 ) );
				}
				diffuseColor.rgb *= col;
			` )
			.replace( '#include <roughnessmap_fragment>', 'float roughnessFactor = bRough;' )
			.replace( '#include <metalnessmap_fragment>', 'float metalnessFactor = bMetal;' );

	};

	mat.customProgramCacheKey = () => 'building';
	return mat;

}

export function createCity( rng, Q ) {

	const group = new THREE.Group();
	const B = [];
	const trees = [];
	const ringC = L.ring.center;
	const vA = VIADUCT.points[ 0 ], vB = VIADUCT.points[ 1 ], vC = VIADUCT.points[ 2 ], vD = VIADUCT.points[ 3 ];
	const towers = [ L.rightTower, L.leftTower, { x: L.mega.x, z: L.mega.z } ];
	const cam = PLATEAU.center;

	const add = ( x, z, w, d, h, o = {} ) => {

		B.push( {
			x, z, w, d, h, y: o.y ?? 0, rot: o.rot ?? 0,
			seed: rng(), style: o.style ?? Math.floor( rng() * 4 ), green: o.green ?? ( rng() < 0.45 ? 1 : 0 ), floorH: o.floorH ?? ( 3.3 + rng() * 0.8 )
		} );

	};

	const avenueDist = ( x, z ) => segDist( x, z, { x: L.avenue.x0, z: L.avenue.z0 - 200 }, { x: L.avenue.x1, z: L.avenue.z1 } );

	const blocked = ( x, z, r ) => {

		if ( Math.hypot( x - cam.x, z - cam.z ) < 225 + r ) return true;
		if ( avenueDist( x, z ) < L.avenue.width / 2 + r && z < L.avenue.z0 + 100 && z > L.avenue.z1 - 60 ) return true;
		for ( const t of towers ) if ( Math.hypot( x - t.x, z - t.z ) < 110 + r ) return true;
		if ( Math.hypot( x - ringC.x, z - ( ringC.z - 120 ) ) < 260 + r ) return true;
		if ( isSea( x, z ) ) return true;
		return false;

	};

	// 高架下面的楼不能太高（不能顶穿桥面）
	const maxUnderViaduct = ( x, z ) => {

		const d = Math.min( segDist( x, z, vA, vB ), segDist( x, z, vB, vC ), segDist( x, z, vC, vD ) );
		return d < 40 ? DECK_Y - 60 : 1e9;

	};

	const R = Q.cityRange;
	for ( let gz = - R; gz < R * 0.6; ) {

		const distZ = Math.abs( gz - 0 );
		const pitchZ = distZ < 2600 ? 58 : ( distZ < 4500 ? 90 : 130 );
		for ( let gx = - R; gx < R; ) {

			const dc = Math.hypot( gx, gz );
			const pitch = dc < 2600 ? 58 : ( dc < 4500 ? 90 : 130 );
			const cx = gx + pitch / 2, cz = gz + pitchZ / 2;
			gx += pitch;
			if ( dc > R ) continue;
			if ( cz > 400 && rng() < 0.6 ) continue;
			const fm = forestMask( cx, cz );
			const forestKeep = rng() > fm * 0.93;
			// 列距随离镜头的距离变大，行距只看 z，所以地块是长方形（列距 ≥ 行距，不会重叠）
			const bx = pitch - 12, bz = pitchZ - 12;
			const parts = rng() < 0.35 ? 1 : ( rng() < 0.6 ? 2 : 4 );
			const lots = [];
			if ( parts === 1 ) lots.push( [ cx, cz, bx, bz ] );
			else if ( parts === 2 ) {

				const s = 0.4 + rng() * 0.2;
				if ( rng() < 0.5 ) {

					lots.push( [ cx - bx / 2 + bx * s / 2, cz, bx * s, bz ], [ cx + bx * s / 2, cz, bx * ( 1 - s ), bz ] );

				} else {

					lots.push( [ cx, cz - bz / 2 + bz * s / 2, bx, bz * s ], [ cx, cz + bz * s / 2, bx, bz * ( 1 - s ) ] );

				}

			} else {

				const qx = bx / 2, qz = bz / 2;
				lots.push( [ cx - qx / 2, cz - qz / 2, qx, qz ], [ cx + qx / 2, cz - qz / 2, qx, qz ], [ cx - qx / 2, cz + qz / 2, qx, qz ], [ cx + qx / 2, cz + qz / 2, qx, qz ] );

			}

			for ( const [ lx, lz, lw, ld ] of lots ) {

				const sb = 2 + rng() * 3;
				const w = lw - sb * 2, d = ld - sb * 2;
				if ( w < 8 || d < 8 ) continue;
				if ( blocked( lx, lz, Math.max( w, d ) / 2 ) ) continue;
				if ( dc < 3500 && rng() < 0.22 ) {

					// 口袋公园：一片树
					for ( let k = 0; k < 7; k ++ ) trees.push( [ lx + ( rng() - 0.5 ) * w, 0, lz + ( rng() - 0.5 ) * d, 5 + rng() * 5 ] );
					continue;

				}
				// 树：每个地块的边上种一圈
				if ( dc < Q.treeRange && rng() < 0.85 ) {

					const n = 2 + Math.floor( rng() * 4 );
					for ( let i = 0; i < n; i ++ ) {

						const side = Math.floor( rng() * 4 );
						const t = rng() - 0.5;
						const tx = lx + ( side < 2 ? t * lw : ( side === 2 ? - 1 : 1 ) * ( lw / 2 - 1.5 ) );
						const tz = lz + ( side >= 2 ? t * ld : ( side === 0 ? - 1 : 1 ) * ( ld / 2 - 1.5 ) );
						trees.push( [ tx, 0, tz, 5 + rng() * 4 ] );

					}

				}

				if ( ! forestKeep ) continue;
				if ( fm > 0.5 && rng() < 0.6 ) continue;
				// 高度：越靠近市中心（圆环）越高
				const dd = Math.hypot( lx - ringC.x, lz - ringC.z );
				const downtown = Math.exp( - dd * dd / ( 2 * 1300 * 1300 ) );
				let h = 22 + Math.pow( rng(), 1.8 ) * 70 + downtown * 110 * rng();
				if ( rng() < 0.05 + downtown * 0.25 ) h += 60 + rng() * 180 * ( 0.4 + downtown );
				h *= 1 - fm * 0.7;
				// 山脚下一圈是低矮的街区和绿地，真正的高楼从一公里以外开始（参考图里近处的楼也显得很远）
				const dh = Math.hypot( lx - cam.x, lz - cam.z );
				if ( dh < 950 ) {

					if ( rng() < 0.45 ) {

						for ( let k = 0; k < 5; k ++ ) trees.push( [ lx + ( rng() - 0.5 ) * w, 0, lz + ( rng() - 0.5 ) * d, 5 + rng() * 5 ] );
						continue;

					}
					h = Math.min( h, 14 + rng() * 22 );

				} else h *= 0.55 + 0.45 * Math.min( 1, ( dh - 950 ) / 1500 );
				// 正对圆环的视线上不要有太高的楼
				if ( avenueDist( lx, lz ) < 260 && lz > L.ring.center.z + 150 ) h = Math.min( h, 70 + ( - lz - 900 ) * 0.06 );
				h = Math.min( h, maxUnderViaduct( lx, lz ) );
				const style = Math.floor( rng() * 4 );
				add( lx, lz, w, d, h, { style } );
				if ( dc < 3000 ) {

					const nb = Math.floor( rng() * 3 );
					for ( let k = 0; k < nb; k ++ ) {

						const bw = 3 + rng() * w * 0.3, bd = 3 + rng() * d * 0.3;
						add( lx + ( rng() - 0.5 ) * ( w - bw ), lz + ( rng() - 0.5 ) * ( d - bd ), bw, bd, 2 + rng() * 4, { y: h, style: 1, green: 0 } );

					}
					if ( rng() < 0.35 ) trees.push( [ lx + ( rng() - 0.5 ) * w * 0.6, h, lz + ( rng() - 0.5 ) * d * 0.6, 3 + rng() * 3 ] );

				}
				// 高楼加退台或塔冠
				if ( h > 90 && rng() < 0.6 ) {

					const k = 0.55 + rng() * 0.25;
					const h2 = 10 + rng() * h * 0.35;
					add( lx + ( rng() - 0.5 ) * w * 0.15, lz + ( rng() - 0.5 ) * d * 0.15, w * k, d * k, h2, { y: h, style } );

				}

			}

		}

		gz += pitchZ;

	}

	// 圆环周围的一圈白色高楼（参考图里圆环右边层层叠叠的楼）
	for ( let i = 0; i < 26; i ++ ) {

		const a = rng() * Math.PI * 2;
		const r = 290 + rng() * 360;
		const x = ringC.x + Math.cos( a ) * r * 1.2, z = ringC.z - 120 + Math.sin( a ) * r;
		if ( Math.hypot( x - L.avenue.x1, z - L.avenue.z1 - 200 ) < 90 ) continue;
		const w = 30 + rng() * 40;
		add( x, z, w, w * ( 0.7 + rng() * 0.6 ), 160 + rng() * 300, { style: rng() < 0.4 ? 2 : 0 } );

	}

	// 实例网格
	const boxGeo = new THREE.BoxGeometry( 1, 1, 1 );
	boxGeo.translate( 0, 0.5, 0 );
	const attr = new Float32Array( B.length * 4 );
	const mesh = new THREE.InstancedMesh( boxGeo, buildingMaterial( 1 ), B.length );
	const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
	B.forEach( ( b, i ) => {

		q.setFromEuler( e.set( 0, b.rot, 0 ) );
		m.compose( new THREE.Vector3( b.x, b.y, b.z ), q, new THREE.Vector3( b.w, b.h, b.d ) );
		mesh.setMatrixAt( i, m );
		attr.set( [ b.seed, b.style, b.green, b.floorH ], i * 4 );

	} );
	boxGeo.setAttribute( 'aB', new THREE.InstancedBufferAttribute( attr, 4 ) );
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	mesh.computeBoundingSphere();
	group.add( mesh );

	// 林荫大道两侧的行道树
	{

		const a = { x: L.avenue.x0, z: L.avenue.z0 }, b = { x: L.avenue.x1, z: L.avenue.z1 };
		const len = Math.hypot( b.x - a.x, b.z - a.z );
		const dx = ( b.x - a.x ) / len, dz = ( b.z - a.z ) / len;
		for ( let s = 0; s < len; s += 7 ) for ( const off of [ - 26, - 18, 18, 26 ] ) {

			trees.push( [ a.x + dx * s - dz * off + ( rng() - 0.5 ) * 2, 0, a.z + dz * s + dx * off + ( rng() - 0.5 ) * 2, 5 + rng() * 3 ] );

		}

	}

	// 森林
	for ( let i = 0; i < Q.forestTrees; i ++ ) {

		const x = 100 + rng() * 2600, z = - 300 - rng() * 3000;
		const fm = forestMask( x, z );
		if ( rng() > fm ) continue;
		if ( Math.hypot( x - cam.x, z - cam.z ) > Q.treeRange * 1.2 ) continue;
		trees.push( [ x, 0, z, 6 + rng() * 6 ] );

	}

	return { group, buildings: mesh, trees, count: B.length };

}

// 远处的树：压扁的多面体，颜色有深有浅
export function createTreeBlobs( list, rng, detail, leafTex ) {

	const geo = new THREE.IcosahedronGeometry( 1, detail );
	geo.scale( 1, 0.8, 1 );
	geo.translate( 0, 0.75, 0 );
	const mat = leafyMaterial( leafTex, 0.35 );
	const mesh = new THREE.InstancedMesh( geo, mat, list.length );
	const m = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
	list.forEach( ( [ x, y, z, s ], i ) => {

		q.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), rng() * 6.28 );
		m.compose( new THREE.Vector3( x, y, z ), q, new THREE.Vector3( s * ( 0.8 + rng() * 0.4 ), s * ( 0.8 + rng() * 0.5 ), s * ( 0.8 + rng() * 0.4 ) ) );
		mesh.setMatrixAt( i, m );
		const t = rng();
		mesh.setColorAt( i, c.setRGB( 0.04 + t * 0.06, 0.08 + t * 0.08, 0.025 + t * 0.03 ) );

	} );
	mesh.computeBoundingSphere();
	mesh.receiveShadow = true;
	return mesh;

}

// 树团的材质：用照片叶簇做三向投影贴图，叶子之间的空隙画暗，看起来是一簇簇叶子而不是光滑的球
export function leafyMaterial( leafTex, scale ) {

	const mat = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0.85 } );
	const U = { tLeaf: { value: leafTex } };
	mat.onBeforeCompile = ( sh ) => {

		Object.assign( sh.uniforms, U );
		sh.vertexShader = sh.vertexShader
			.replace( '#include <common>', '#include <common>\nvarying vec3 vLN;' )
			.replace( '#include <beginnormal_vertex>', '#include <beginnormal_vertex>\nvLN = normalize( mat3( modelMatrix ) * mat3( instanceMatrix ) * objectNormal );' );
		sh.fragmentShader = sh.fragmentShader
			.replace( '#include <common>', `#include <common>\nvarying vec3 vLN;\nuniform sampler2D tLeaf;\n${ NOISE }` )
			.replace( '#include <color_fragment>', /* glsl */ `#include <color_fragment>
				vec3 lp = vFogWorldPos * ${ scale.toFixed( 3 ) };
				vec3 lw = pow( abs( normalize( vLN ) ), vec3( 3.0 ) );
				lw /= lw.x + lw.y + lw.z;
				vec4 l = texture2D( tLeaf, fract( lp.zy ) ) * lw.x + texture2D( tLeaf, fract( lp.xz + 0.37 ) ) * lw.y + texture2D( tLeaf, fract( lp.xy + 0.71 ) ) * lw.z;
				float lum = dot( l.rgb, vec3( 0.3, 0.6, 0.1 ) ) / 0.22;
				diffuseColor.rgb *= mix( 0.35, 0.75 + 0.6 * lum, l.a ) * ( 0.75 + 0.5 * vnoise( vFogWorldPos.xz * 0.3 ) );
			` );

	};

	mat.customProgramCacheKey = () => 'leafy-' + scale;
	return mat;

}
