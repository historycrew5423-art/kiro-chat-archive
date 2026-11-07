import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// ---------------------------------------------------------------------------
// 室内家具：全部用代码拼（圆角盒、圆柱、管子），按材质放进 bucket，最后每层每种材质合并成一个网格。
// 每件家具同时在导航格子里占位（家具 = 2，主角和怪都绕着走）。
// 风格：未来医院 —— 白色圆角、浅木色、鼠尾草绿、点缀橙色和青色。
// ---------------------------------------------------------------------------

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _s = new THREE.Vector3( 1, 1, 1 ), _p = new THREE.Vector3();
const rbCache = new Map();

function rbox( w, h, d, r = 0.04 ) {

	const k = [ w, h, d, r ].map( ( v ) => v.toFixed( 3 ) ).join( ',' );
	if ( ! rbCache.has( k ) ) rbCache.set( k, new RoundedBoxGeometry( w, h, d, 2, Math.min( r, w / 2.01, h / 2.01, d / 2.01 ) ) );
	return rbCache.get( k );

}

export function createBuckets() {

	const map = new Map();
	return {
		map,
		add( key, geo, x = 0, y = 0, z = 0, ry = 0, rx = 0, rz = 0, sx = 1, sy = 1, sz = 1 ) {

			_e.set( rx, ry, rz );
			_q.setFromEuler( _e );
			_m.compose( _p.set( x, y, z ), _q, _s.set( sx, sy, sz ) );
			const g = geo.clone().applyMatrix4( _m );
			if ( ! map.has( key ) ) map.set( key, [] );
			map.get( key ).push( g );
			return g;

		}
	};

}

export function createProps( B, nav, y0 ) {

	// 局部坐标 → 世界坐标（绕 Y 旋转 rot）
	const L = ( x, z, rot, lx, lz ) => {

		const c = Math.cos( rot ), s = Math.sin( rot );
		return [ x + lx * c + lz * s, z - lx * s + lz * c ];

	};

	const add = ( key, g, x, y, z, rot = 0, rx = 0, rz = 0 ) => B.add( key, g, x, y0 + y, z, rot, rx, rz );
	// 局部坐标 (lx, y, lz) → add 需要的 (x, y, z)
	const W3 = ( x, z, rot, lx, y, lz ) => {

		const [ wx, wz ] = L( x, z, rot, lx, lz );
		return [ wx, y, wz ];

	};
	const block = ( x, z, hw, hd, rot = 0 ) => nav && nav.fillOBB( x, z, hw, hd, rot, 2 );

	const P = {
		// 候诊椅：一根横梁上一排座位
		chairRow( x, z, rot, n = 5, fabric = 'fabricTeal' ) {

			const w = 0.62;
			const len = n * w;
			add( 'metal', rbox( len, 0.06, 0.08, 0.02 ), x, 0.42, z, rot );
			for ( const s of [ - 1, 1 ] ) {

				const [ lx, lz ] = L( x, z, rot, s * ( len / 2 - 0.25 ), 0 );
				add( 'metal', rbox( 0.06, 0.42, 0.42, 0.02 ), lx, 0.21, lz, rot );

			}

			for ( let i = 0; i < n; i ++ ) {

				const [ sx, sz ] = L( x, z, rot, - len / 2 + w * ( i + 0.5 ), 0.0 );
				add( fabric, rbox( 0.54, 0.08, 0.5, 0.035 ), sx, 0.48, sz, rot );
				const [ bx, bz ] = L( x, z, rot, - len / 2 + w * ( i + 0.5 ), - 0.24 );
				add( fabric, rbox( 0.54, 0.46, 0.07, 0.03 ), bx, 0.76, bz, rot, - 0.12 );

			}

			block( x, z, len / 2, 0.32, rot );

		},
		bench( x, z, rot, len = 2.4 ) {

			add( 'wood', rbox( len, 0.09, 0.5, 0.03 ), x, 0.46, z, rot );
			for ( const s of [ - 1, 1 ] ) {

				const [ lx, lz ] = L( x, z, rot, s * ( len / 2 - 0.2 ), 0 );
				add( 'metalDark', rbox( 0.08, 0.44, 0.44, 0.02 ), lx, 0.22, lz, rot );

			}

			block( x, z, len / 2, 0.28, rot );

		},
		// 花池：白色圆角池 + 土 + 灌木叶簇（叶片面片放进 leaf）
		planter( x, z, w, d, h = 0.55, rot = 0, shrubs = 4 ) {

			add( 'plasticWhite', rbox( w, h, d, 0.08 ), x, h / 2, z, rot );
			add( 'soil', rbox( w - 0.12, 0.05, d - 0.12, 0.02 ), x, h + 0.005, z, rot );
			for ( let i = 0; i < shrubs; i ++ ) {

				const [ px, pz ] = L( x, z, rot, ( ( i + 0.5 ) / shrubs - 0.5 ) * ( w - 0.3 ), ( Math.sin( i * 7.3 ) * 0.25 ) * ( d - 0.3 ) );
				for ( let k = 0; k < 3; k ++ ) {

					const s = 0.7 + ( ( i * 13 + k * 7 ) % 5 ) * 0.08;
					add( 'leaf', new THREE.PlaneGeometry( s, s ), px, h + s * 0.42, pz, k * 1.05 + i, 0.2 * ( k - 1 ), 0 );

				}

			}

			block( x, z, w / 2, d / 2, rot );

		},
		// 室内树：圆形木箱 + 细树干 + 树冠叶簇
		indoorTree( x, z, s = 1 ) {

			add( 'wood', new THREE.CylinderGeometry( 0.7 * s, 0.6 * s, 0.6, 20 ), x, 0.3, z );
			add( 'soil', new THREE.CylinderGeometry( 0.64 * s, 0.64 * s, 0.04, 20 ), x, 0.61, z );
			add( 'bark', new THREE.CylinderGeometry( 0.05 * s, 0.09 * s, 2.6 * s, 7 ), x, 0.6 + 1.3 * s, z );
			const q = new THREE.PlaneGeometry( 1.6 * s, 1.6 * s );
			for ( let k = 0; k < 9; k ++ ) {

				const a = k * 2.39, r = 0.5 * s * ( k % 3 ) / 2;
				add( 'leaf', q, x + Math.cos( a ) * r, 0.6 + 2.4 * s + ( k % 3 ) * 0.35 * s, z + Math.sin( a ) * r, a, ( k % 2 ? 0.6 : - 0.5 ), 0 );

			}

			block( x, z, 0.7 * s, 0.7 * s );

		},
		// 柜子：白色，门缝用深色细条
		cabinet( x, z, rot, w = 1.2, h = 0.9, d = 0.55, top = 'plasticWhite' ) {

			add( 'plasticWhite', rbox( w, h, d, 0.03 ), x, h / 2, z, rot );
			add( top, rbox( w + 0.04, 0.04, d + 0.04, 0.015 ), x, h + 0.02, z, rot );
			const doors = Math.max( 1, Math.round( w / 0.5 ) );
			for ( let i = 1; i < doors; i ++ ) {

				const [ gx, gz ] = L( x, z, rot, - w / 2 + ( w / doors ) * i, d / 2 + 0.002 );
				add( 'metalDark', new THREE.BoxGeometry( 0.012, h - 0.12, 0.006 ), gx, h / 2, gz, rot );

			}

			block( x, z, w / 2, d / 2, rot );

		},
		// 药架：格子里放彩色药盒（药盒用顶点色，一种材质）
		shelf( x, z, rot, w = 2.0, h = 2.0, d = 0.45, seed = 1 ) {

			add( 'plasticWhite', rbox( w, 0.04, d, 0.01 ), x, h, z, rot );
			for ( const s of [ - 1, 1 ] ) {

				const [ lx, lz ] = L( x, z, rot, s * w / 2, 0 );
				add( 'plasticWhite', rbox( 0.04, h, d, 0.01 ), lx, h / 2, lz, rot );

			}

			const [ bx, bz ] = L( x, z, rot, 0, - d / 2 + 0.01 );
			add( 'plasticWhite', new THREE.BoxGeometry( w, h, 0.02 ), bx, h / 2, bz, rot );
			let r = ( Math.abs( Math.floor( seed ) ) * 9301 + 49297 ) % 233280;
			const rnd = () => ( r = ( r * 9301 + 49297 ) % 233280 ) / 233280;
			const palette = [ [ 0.9, 0.35, 0.25 ], [ 0.2, 0.55, 0.85 ], [ 0.95, 0.8, 0.3 ], [ 0.95, 0.95, 0.92 ], [ 0.35, 0.7, 0.5 ], [ 0.75, 0.45, 0.8 ] ];
			for ( let row = 0; row < 4; row ++ ) {

				const yy = 0.1 + row * ( h / 4 );
				add( 'plasticWhite', new THREE.BoxGeometry( w, 0.025, d ), x, yy, z, rot );
				let cx = - w / 2 + 0.08;
				while ( cx < w / 2 - 0.15 ) {

					const bw = 0.08 + rnd() * 0.14, bh = 0.1 + rnd() * 0.22;
					const [ px, pz ] = L( x, z, rot, cx + bw / 2, ( rnd() - 0.5 ) * 0.08 );
					const g = add( 'boxes', new THREE.BoxGeometry( bw, bh, d * 0.7 ), px, yy + 0.0125 + bh / 2, pz, rot );
					const c = palette[ Math.floor( rnd() * palette.length ) ];
					const col = new Float32Array( g.attributes.position.count * 3 );
					for ( let i = 0; i < g.attributes.position.count; i ++ ) col.set( c, i * 3 );
					g.setAttribute( 'color', new THREE.BufferAttribute( col, 3 ) );
					cx += bw + 0.015;

				}

			}

			block( x, z, w / 2, d / 2 + 0.05, rot );

		},
		// 诊桌 + 显示器 + 椅子
		desk( x, z, rot, w = 1.6, d = 0.75 ) {

			add( 'wood', rbox( w, 0.05, d, 0.02 ), x, 0.75, z, rot );
			for ( const s of [ - 1, 1 ] ) {

				const [ lx, lz ] = L( x, z, rot, s * ( w / 2 - 0.05 ), 0 );
				add( 'plasticWhite', rbox( 0.05, 0.73, d - 0.05, 0.015 ), lx, 0.365, lz, rot );

			}

			const [ mx, mz ] = L( x, z, rot, 0.2, - d / 2 + 0.15 );
			add( 'metalDark', rbox( 0.6, 0.36, 0.03, 0.01 ), mx, 1.05, mz, rot );
			add( 'screenBlue', new THREE.PlaneGeometry( 0.56, 0.32 ), ...W3( mx, mz, rot, 0, 1.05, 0.017 ), rot );
			add( 'metalDark', new THREE.CylinderGeometry( 0.02, 0.02, 0.25, 6 ), mx, 0.8, mz, rot );
			const [ cx, cz ] = L( x, z, rot, 0, d / 2 + 0.4 );
			add( 'fabricOrange', rbox( 0.5, 0.08, 0.48, 0.03 ), cx, 0.47, cz, rot );
			add( 'fabricOrange', rbox( 0.5, 0.5, 0.07, 0.03 ), ...W3( cx, cz, rot, 0, 0.76, 0.24 ), rot );
			add( 'metalDark', new THREE.CylinderGeometry( 0.03, 0.03, 0.42, 6 ), cx, 0.22, cz );
			block( x, z, w / 2, d / 2, rot );

		},
		// 挂号台：弧形长台，前面木饰面，台面白色
		reception( x, z, r = 5, arc = 2.2, rot = 0 ) {

			const shape = new THREE.Shape();
			shape.absarc( 0, 0, r + 0.45, - arc / 2, arc / 2, false );
			shape.absarc( 0, 0, r - 0.45, arc / 2, - arc / 2, true );
			const body = new THREE.ExtrudeGeometry( shape, { depth: 1.05, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 2, curveSegments: 40 } );
			body.rotateX( - Math.PI / 2 );
			add( 'wood', body, x, 0, z, rot - Math.PI / 2 );
			const top = new THREE.Shape();
			top.absarc( 0, 0, r + 0.55, - arc / 2 - 0.02, arc / 2 + 0.02, false );
			top.absarc( 0, 0, r - 0.5, arc / 2 + 0.02, - arc / 2 - 0.02, true );
			const tg = new THREE.ExtrudeGeometry( top, { depth: 0.06, bevelEnabled: false, curveSegments: 40 } );
			tg.rotateX( - Math.PI / 2 );
			add( 'plasticWhite', tg, x, 1.08, z, rot - Math.PI / 2 );
			// 台子后面的显示器
			for ( let i = 0; i < 4; i ++ ) {

				const a = - arc / 2 + arc * ( i + 0.5 ) / 4;
				const px = x + Math.sin( a + rot ) * ( r - 0.15 ), pz = z - Math.cos( a + rot ) * ( r - 0.15 );
				add( 'metalDark', rbox( 0.55, 0.34, 0.03, 0.01 ), px, 1.38, pz, - a - rot );

			}

			// 导航：沿弧线一串小方块
			for ( let i = 0; i <= 12; i ++ ) {

				const a = - arc / 2 + arc * i / 12;
				nav && nav.fillOBB( x + Math.sin( a + rot ) * r, z - Math.cos( a + rot ) * r, 0.6, 0.55, - a - rot, 2 );

			}

		},
		// 检验台：长台面 + 下柜 + 离心机、试管架、显微镜
		labBench( x, z, rot, len = 3.6 ) {

			add( 'plasticWhite', rbox( len, 0.86, 0.7, 0.03 ), x, 0.43, z, rot );
			add( 'metalDark', rbox( len + 0.04, 0.04, 0.74, 0.01 ), x, 0.88, z, rot );
			for ( let i = 0; i < 3; i ++ ) {

				const [ px, pz ] = L( x, z, rot, - len / 2 + 0.6 + i * ( len - 1.2 ) / 2, 0 );
				if ( i === 0 ) {

					add( 'plasticWhite', new THREE.CylinderGeometry( 0.22, 0.24, 0.32, 20 ), px, 1.06, pz );
					add( 'chrome', new THREE.CylinderGeometry( 0.18, 0.18, 0.02, 20 ), px, 1.23, pz );

				} else if ( i === 1 ) {

					add( 'metal', rbox( 0.36, 0.05, 0.16, 0.01 ), px, 0.93, pz, rot );
					for ( let k = 0; k < 6; k ++ ) {

						const [ tx, tz ] = L( px, pz, rot, - 0.14 + k * 0.056, 0 );
						add( k % 2 ? 'liquidRed' : 'liquidBlue', new THREE.CylinderGeometry( 0.014, 0.014, 0.16, 8 ), tx, 1.02, tz );

					}

				} else {

					add( 'metalDark', rbox( 0.16, 0.06, 0.22, 0.01 ), px, 0.93, pz, rot );
					add( 'metalDark', new THREE.CylinderGeometry( 0.02, 0.02, 0.32, 8 ), px, 1.12, pz );
					add( 'plasticWhite', new THREE.CylinderGeometry( 0.035, 0.03, 0.14, 10 ), px, 1.3, pz, 0, 0.5 );

				}

			}

			block( x, z, len / 2, 0.38, rot );

		},
		// CT 机：圆环机架 + 检查床（空的）
		ct( x, z, rot ) {

			const ring = new THREE.TorusGeometry( 1.05, 0.42, 20, 48 );
			add( 'plasticWhite', ring, x, 1.35, z, rot );
			const base = rbox( 2.7, 0.45, 0.9, 0.12 );
			add( 'plasticWhite', base, x, 0.22, z, rot );
			add( 'accentTeal', new THREE.TorusGeometry( 1.05, 0.05, 8, 48 ), ...W3( x, z, rot, 0, 1.35, 0.43 ), rot );
			const [ tx, tz ] = L( x, z, rot, 0, 1.6 );
			add( 'plasticWhite', rbox( 0.6, 0.62, 2.6, 0.08 ), tx, 0.31, tz, rot );
			add( 'fabricTeal', rbox( 0.52, 0.08, 2.4, 0.04 ), tx, 0.66, tz, rot );
			block( x, z, 1.5, 0.55, rot );
			block( tx, tz, 0.35, 1.3, rot );

		},
		treadmill( x, z, rot ) {

			add( 'metalDark', rbox( 0.8, 0.22, 1.9, 0.05 ), x, 0.11, z, rot );
			add( 'rubber', new THREE.BoxGeometry( 0.62, 0.02, 1.6 ), x, 0.23, z, rot );
			for ( const s of [ - 1, 1 ] ) {

				const [ px, pz ] = L( x, z, rot, s * 0.36, - 0.75 );
				add( 'metal', new THREE.CylinderGeometry( 0.025, 0.025, 1.2, 8 ), px, 0.8, pz );

			}

			const [ cx, cz ] = L( x, z, rot, 0, - 0.78 );
			add( 'plasticWhite', rbox( 0.8, 0.28, 0.12, 0.04 ), cx, 1.38, cz, rot, 0.3 );
			add( 'screenBlue', new THREE.PlaneGeometry( 0.3, 0.16 ), ...W3( cx, cz, rot, 0, 1.4, 0.065 ), rot, - 0.3 );
			block( x, z, 0.42, 0.98, rot );

		},
		ball( x, z, r = 0.32, mat = 'accentOrange' ) {

			add( mat, new THREE.SphereGeometry( r, 24, 16 ), x, r, z );
			block( x, z, r * 0.9, r * 0.9 );

		},
		bars( x, z, rot, len = 3.2 ) {

			for ( const s of [ - 0.35, 0.35 ] ) {

				const [ px, pz ] = L( x, z, rot, s, 0 );
				add( 'wood', new THREE.CylinderGeometry( 0.025, 0.025, len, 10 ).rotateZ( Math.PI / 2 ), px, 0.9, pz, rot + Math.PI / 2 );
				for ( const e of [ - 1, 1 ] ) {

					const [ qx, qz ] = L( x, z, rot, s, e * ( len / 2 - 0.1 ) );
					add( 'metal', new THREE.CylinderGeometry( 0.03, 0.03, 0.9, 8 ), qx, 0.45, qz );

				}

			}

			add( 'mat', rbox( 1.2, 0.04, len + 0.3, 0.02 ), x, 0.02, z, rot );
			block( x, z, 0.5, len / 2, rot );

		},
		// 自动售货机：发光的面板 + 一排排饮料
		vending( x, z, rot, mat = 'vendGlow' ) {

			add( 'accentTeal', rbox( 1.1, 1.95, 0.85, 0.06 ), x, 0.975, z, rot );
			const [ fx, fz ] = L( x, z, rot, - 0.1, 0.43 );
			add( mat, new THREE.PlaneGeometry( 0.7, 1.3 ), fx, 1.15, fz, rot );
			for ( let row = 0; row < 5; row ++ ) {

				for ( let i = 0; i < 5; i ++ ) {

					const [ bx, bz ] = L( x, z, rot, - 0.38 + i * 0.14, 0.4 );
					add( [ 'liquidRed', 'liquidBlue', 'accentOrange', 'plasticWhite', 'accentTeal' ][ ( row + i * 2 ) % 5 ], new THREE.CylinderGeometry( 0.04, 0.04, 0.17, 8 ), bx, 0.62 + row * 0.24, bz );

				}

			}

			block( x, z, 0.58, 0.45, rot );

		},
		// 输液架（空的，当道具）
		ivStand( x, z ) {

			add( 'chrome', new THREE.CylinderGeometry( 0.015, 0.015, 1.9, 8 ), x, 0.95, z );
			for ( let k = 0; k < 5; k ++ ) add( 'chrome', new THREE.CylinderGeometry( 0.012, 0.012, 0.32, 6 ).rotateZ( Math.PI / 2 ), x, 0.04, z, k * 1.26 );
			add( 'chrome', new THREE.TorusGeometry( 0.06, 0.008, 6, 12 ), x, 1.92, z );
			add( 'glassFrost', rbox( 0.12, 0.2, 0.04, 0.02 ), x + 0.07, 1.75, z );
			block( x, z, 0.2, 0.2 );

		},
		// 圆柱
		column( x, z, r, h ) {

			add( 'plasticWhite', new THREE.CylinderGeometry( r, r, h, 32 ), x, h / 2, z );
			add( 'wood', new THREE.CylinderGeometry( r + 0.02, r + 0.02, 1.0, 32 ), x, 0.5, z );
			block( x, z, r + 0.1, r + 0.1 );

		},
		// 儿科游乐：软积木、小滑梯
		play( x, z, rot ) {

			const cols = [ 'accentOrange', 'accentTeal', 'accentYellow', 'liquidRed' ];
			for ( let i = 0; i < 7; i ++ ) {

				const [ px, pz ] = L( x, z, rot, - 1.4 + ( i % 4 ) * 0.9, i < 4 ? - 0.5 : 0.5 );
				const s = 0.4 + ( i % 3 ) * 0.15;
				add( cols[ i % 4 ], rbox( s, s, s, 0.08 ), px, s / 2 + ( i >= 4 ? 0 : 0 ), pz, rot + i * 0.4 );

			}

			const [ sx, sz ] = L( x, z, rot, 0.4, 2.0 );
			add( 'accentYellow', rbox( 0.8, 0.1, 2.8, 0.05 ), sx, 0.8, sz, rot, 0.55 );
			add( 'accentTeal', rbox( 0.9, 1.6, 0.9, 0.1 ), ...W3( sx, sz, rot, 0, 0.8, - 1.6 ), rot );
			block( x, z, 2.0, 0.9, rot );
			block( sx, sz, 0.5, 1.8, rot );

		}
	};
	return P;

}
