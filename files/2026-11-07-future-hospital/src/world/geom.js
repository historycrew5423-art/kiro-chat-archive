import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// ---------------------------------------------------------------------------
// 建模用的小工具：圆角矩形、沿轮廓的竖向条带、按轮廓等距摆放、合并。
// ---------------------------------------------------------------------------

export function roundedRectShape( x0, x1, z0, z1, r, shape = new THREE.Shape() ) {

	r = Math.min( r, ( x1 - x0 ) / 2 - 1e-3, ( z1 - z0 ) / 2 - 1e-3 );
	// Shape 的 (x, y) 对应世界的 (x, -z)，挤出后绕 X 轴转 -90°，y 变成高度
	shape.moveTo( x0 + r, - z1 );
	shape.lineTo( x1 - r, - z1 );
	shape.absarc( x1 - r, - z1 + r, r, - Math.PI / 2, 0, false );
	shape.lineTo( x1, - z0 - r );
	shape.absarc( x1 - r, - z0 - r, r, 0, Math.PI / 2, false );
	shape.lineTo( x0 + r, - z0 );
	shape.absarc( x0 + r, - z0 - r, r, Math.PI / 2, Math.PI, false );
	shape.lineTo( x0, - z1 + r );
	shape.absarc( x0 + r, - z1 + r, r, Math.PI, Math.PI * 1.5, false );
	return shape;

}

// 圆角矩形的“板”：从 y0 到 y1 的实心块（可以带一个洞），边缘倒圆
export function slab( x0, x1, z0, z1, r, y0, y1, bevel = 0.0, hole = null ) {

	const s = roundedRectShape( x0 + bevel, x1 - bevel, z0 + bevel, z1 - bevel, Math.max( 0.01, r - bevel ) );
	if ( hole ) {

		const h = new THREE.Path();
		const hs = roundedRectShape( hole[ 0 ], hole[ 1 ], hole[ 2 ], hole[ 3 ], hole[ 4 ] );
		h.curves = hs.curves;
		h.currentPoint = hs.currentPoint;
		s.holes.push( h );

	}

	const depth = Math.max( 0.01, y1 - y0 - bevel * 2 );
	const g = new THREE.ExtrudeGeometry( s, {
		depth, curveSegments: 10, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3
	} );
	g.rotateX( - Math.PI / 2 );
	g.translate( 0, y0 + bevel, 0 );
	return g;

}

// 沿圆角矩形（逆时针，从南边中点开始）均匀采样：返回点、外法线、累计弧长
export function rectPath( x0, x1, z0, z1, r, step = 0.5 ) {

	const shape = roundedRectShape( x0, x1, z0, z1, r );
	const len = shape.getLength();
	const n = Math.max( 8, Math.ceil( len / step ) );
	const pts = shape.getSpacedPoints( n );
	const out = [];
	for ( let i = 0; i < pts.length; i ++ ) {

		const p = pts[ i ];
		const q = pts[ ( i + 1 ) % pts.length ];
		const pr = pts[ ( i - 1 + pts.length ) % pts.length ];
		const tx = q.x - pr.x, ty = q.y - pr.y;
		const tl = Math.hypot( tx, ty ) || 1;
		// shape 坐标 (x, y) → 世界 (x, -y)；逆时针轮廓的外法线 = (ty, -tx)
		out.push( { x: p.x, z: - p.y, nx: ty / tl, nz: tx / tl, tx: tx / tl, tz: - ty / tl, s: ( i / n ) * len } );

	}

	out.length = n + 1;
	out.len = len;
	return out;

}

// 沿轮廓的竖向条带（玻璃幕墙、实墙）。u = 弧长（米），v = 高度（米）
export function pathWall( path, y0, y1, from = 0, to = 1, offset = 0, flip = false ) {

	const pos = [], nor = [], uv = [], idx = [];
	const n = path.length - 1;
	const i0 = Math.floor( from * n ), i1 = Math.ceil( to * n );
	for ( let i = i0; i <= i1; i ++ ) {

		const p = path[ Math.min( i, n ) ];
		const x = p.x + p.nx * offset, z = p.z + p.nz * offset;
		pos.push( x, y0, z, x, y1, z );
		const s = flip ? - 1 : 1;
		nor.push( p.nx * s, 0, p.nz * s, p.nx * s, 0, p.nz * s );
		uv.push( p.s, y0, p.s, y1 );

	}

	for ( let i = 0; i < i1 - i0; i ++ ) {

		const a = i * 2, b = a + 1, c = a + 2, d = a + 3;
		if ( flip ) idx.push( a, b, c, b, d, c );
		else idx.push( a, c, b, b, c, d );

	}

	const g = new THREE.BufferGeometry();
	g.setAttribute( 'position', new THREE.Float32BufferAttribute( pos, 3 ) );
	g.setAttribute( 'normal', new THREE.Float32BufferAttribute( nor, 3 ) );
	g.setAttribute( 'uv', new THREE.Float32BufferAttribute( uv, 2 ) );
	g.setIndex( idx );
	return g;

}

// 沿轮廓每隔 spacing 摆一个东西：回调拿到位置、外法线和切线
export function along( path, spacing, cb, from = 0, to = 1 ) {

	const L = path.len;
	const s0 = from * L, s1 = to * L;
	let k = 0;
	for ( let s = s0 + spacing * 0.5; s < s1; s += spacing ) {

		const f = s / L * ( path.length - 1 );
		const i = Math.floor( f ), t = f - i;
		const a = path[ i ], b = path[ Math.min( i + 1, path.length - 1 ) ];
		const x = a.x + ( b.x - a.x ) * t, z = a.z + ( b.z - a.z ) * t;
		let nx = a.nx + ( b.nx - a.nx ) * t, nz = a.nz + ( b.nz - a.nz ) * t;
		const nl = Math.hypot( nx, nz ) || 1;
		nx /= nl; nz /= nl;
		cb( x, z, nx, nz, k ++, s );

	}

}

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3(), _e = new THREE.Euler();

// 盒子：中心、尺寸、绕 Y 的角度
export function box( cx, cy, cz, sx, sy, sz, ry = 0 ) {

	const g = new THREE.BoxGeometry( sx, sy, sz );
	if ( ry ) g.rotateY( ry );
	g.translate( cx, cy, cz );
	return g;

}

export function cyl( cx, cy, cz, r0, r1, h, seg = 16 ) {

	const g = new THREE.CylinderGeometry( r1, r0, h, seg );
	g.translate( cx, cy + h / 2, cz );
	return g;

}

// 把几何体按矩阵变换后放进列表
export function put( list, g, x, y, z, ry = 0, sx = 1, sy = sx, sz = sx, rx = 0, rz = 0 ) {

	_e.set( rx, ry, rz );
	_q.setFromEuler( _e );
	_m.compose( _p.set( x, y, z ), _q, _s.set( sx, sy, sz ) );
	const c = g.clone();
	c.applyMatrix4( _m );
	list.push( c );
	return c;

}

// 合并：自动去掉不一致的属性（例如有的几何体没有 uv）
export function merge( list ) {

	if ( ! list.length ) return new THREE.BufferGeometry();
	const names = new Set( Object.keys( list[ 0 ].attributes ) );
	for ( const g of list ) for ( const n of [ ...names ] ) if ( ! g.attributes[ n ] ) names.delete( n );
	const clean = list.map( ( g ) => {

		let h = g.index ? g.toNonIndexed() : g;
		for ( const n of Object.keys( h.attributes ) ) if ( ! names.has( n ) ) h.deleteAttribute( n );
		h.morphAttributes = {};
		return h;

	} );
	const m = mergeGeometries( clean, false );
	return m || new THREE.BufferGeometry();

}

// 方盒按世界坐标生成 UV（贴图不随盒子大小拉伸）
export function worldUV( g, scale = 1 ) {

	const p = g.attributes.position, n = g.attributes.normal;
	const uv = new Float32Array( p.count * 2 );
	for ( let i = 0; i < p.count; i ++ ) {

		const ax = Math.abs( n.getX( i ) ), ay = Math.abs( n.getY( i ) ), az = Math.abs( n.getZ( i ) );
		let u, v;
		if ( ay >= ax && ay >= az ) {

			u = p.getX( i ); v = p.getZ( i );

		} else if ( ax >= az ) {

			u = p.getZ( i ); v = p.getY( i );

		} else {

			u = p.getX( i ); v = p.getY( i );

		}

		uv[ i * 2 ] = u * scale;
		uv[ i * 2 + 1 ] = v * scale;

	}

	g.setAttribute( 'uv', new THREE.BufferAttribute( uv, 2 ) );
	return g;

}

// 简单的弯管（扶手、栏杆）
export function tube( points, r, seg = 8, radial = 8 ) {

	const curve = new THREE.CatmullRomCurve3( points.map( ( p ) => new THREE.Vector3( ...p ) ) );
	return new THREE.TubeGeometry( curve, seg, r, radial, false );

}
