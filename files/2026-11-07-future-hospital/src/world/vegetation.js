import * as THREE from 'three';
import { mulberry32 } from '../core/rng.js';
import { foliageMaterial } from '../render/materials.js';
import { NOISE } from '../render/glsl.js';
import { heightAt, lakeAt, fbm } from './terrain.js';
import { LIGHT_DIR, SUN_COLOR, TITLE_CAM, HOSP } from '../config.js';
import { merge } from './geom.js';

// ---------------------------------------------------------------------------
// 植被：
//   近景树：树干是弯曲的圆柱，树冠是贴照片叶簇的面片，法线统一朝树冠外侧（看起来是一团体积，而不是一片片纸）
//   远处森林：噪声变形的二十面体实例，着色器里加叶团明暗和逆光透光（参考图远山是暗绿色，树梢有金边）
//   藤蔓：从楼板边缘垂下来的叶片条带，越往下摆得越厉害
//   花：开场镜头脚下的白花，配合景深糊成光斑
// ---------------------------------------------------------------------------

const f = ( v ) => v.toFixed( 5 );

function treeVariant( seed, opts = {} ) {

	const rng = mulberry32( seed );
	const H = opts.h ?? 1, trunkR = 0.028 * H;
	const trunk = [], leaves = [];
	const bend = new THREE.Vector3( rng.range( - 0.06, 0.06 ), 0, rng.range( - 0.06, 0.06 ) );
	// 主干：分 5 段
	const pts = [];
	for ( let i = 0; i <= 5; i ++ ) {

		const t = i / 5;
		pts.push( new THREE.Vector3( bend.x * t * t * H, t * H * 0.72, bend.z * t * t * H ) );

	}

	const curve = new THREE.CatmullRomCurve3( pts );
	const tg = new THREE.TubeGeometry( curve, 6, trunkR, 7, false );
	// 往上变细
	const p = tg.attributes.position;
	for ( let i = 0; i < p.count; i ++ ) {

		const y = p.getY( i ) / ( H * 0.72 );
		const c = curve.getPoint( Math.min( 1, Math.max( 0, y ) ) );
		const k = 1 - y * 0.6;
		p.setXYZ( i, c.x + ( p.getX( i ) - c.x ) * k, p.getY( i ), c.z + ( p.getZ( i ) - c.z ) * k );

	}

	trunk.push( tg );
	// 树冠中心和叶簇
	const crownC = new THREE.Vector3( bend.x * H, H * 0.66, bend.z * H );
	const crownR = H * ( opts.crown ?? 0.36 );
	const clusters = [];
	const nb = 4 + Math.floor( rng() * 3 );
	for ( let b = 0; b < nb; b ++ ) {

		const a = ( b / nb ) * Math.PI * 2 + rng() * 0.8;
		const start = curve.getPoint( 0.55 + rng() * 0.3 );
		const end = new THREE.Vector3( Math.cos( a ) * crownR * 0.75, crownC.y - start.y + rng.range( - 0.05, 0.18 ) * H, Math.sin( a ) * crownR * 0.75 ).add( start );
		const bc = new THREE.LineCurve3( start, end );
		trunk.push( new THREE.TubeGeometry( bc, 1, trunkR * 0.45, 5, false ) );
		clusters.push( end );

	}

	for ( let i = 0; i < 9; i ++ ) {

		const d = new THREE.Vector3( rng.range( - 1, 1 ), rng.range( - 0.4, 1 ), rng.range( - 1, 1 ) ).normalize().multiplyScalar( crownR * rng.range( 0.2, 0.75 ) );
		clusters.push( crownC.clone().add( d ) );

	}

	clusters.push( crownC.clone().add( new THREE.Vector3( 0, crownR * 0.55, 0 ) ) );
	const quad = new THREE.PlaneGeometry( 1, 1 );
	for ( const c of clusters ) {

		const s = crownR * rng.range( 1.0, 1.4 );
		for ( let k = 0; k < 3; k ++ ) {

			const q = quad.clone();
			q.rotateY( rng() * Math.PI );
			q.rotateX( rng.range( - 0.9, 0.9 ) );
			q.scale( s, s, s );
			q.translate( c.x, c.y, c.z );
			// 法线朝树冠外侧
			const qp = q.attributes.position, qn = q.attributes.normal;
			for ( let j = 0; j < qp.count; j ++ ) {

				const n = new THREE.Vector3( qp.getX( j ) - crownC.x, ( qp.getY( j ) - crownC.y ) * 0.8 + crownR * 0.25, qp.getZ( j ) - crownC.z ).normalize();
				qn.setXYZ( j, n.x, n.y, n.z );

			}

			leaves.push( q );

		}

	}

	return { trunk: merge( trunk ), leaves: merge( leaves ) };

}

function blobVariant( seed ) {

	const g = new THREE.IcosahedronGeometry( 1, 1 );
	const p = g.attributes.position;
	const rng = mulberry32( seed );
	const o = [ rng() * 10, rng() * 10 ];
	const v = new THREE.Vector3();
	const colors = new Float32Array( p.count * 3 );
	for ( let i = 0; i < p.count; i ++ ) {

		v.fromBufferAttribute( p, i );
		const n = fbm( v.x * 1.6 + o[ 0 ], v.z * 1.6 + v.y * 1.3 + o[ 1 ], 3 );
		const r = 0.78 + n * 0.45;
		v.multiplyScalar( r );
		if ( v.y < - 0.2 ) v.y = - 0.2 + ( v.y + 0.2 ) * 0.4;
		p.setXYZ( i, v.x, v.y, v.z );
		const ao = THREE.MathUtils.clamp( 0.45 + ( v.y + 0.3 ) * 0.6, 0.35, 1.1 );
		colors[ i * 3 ] = colors[ i * 3 + 1 ] = colors[ i * 3 + 2 ] = ao;

	}

	g.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
	g.computeVertexNormals();
	return g;

}

function blobMaterial() {

	const m = new THREE.MeshStandardMaterial( { color: 0x33622a, roughness: 0.9, metalness: 0, vertexColors: true, envMapIntensity: 0.5 } );
	m.onBeforeCompile = ( shader ) => {

		shader.vertexShader = shader.vertexShader.replace( '#include <common>', '#include <common>\nvarying vec3 vBW;\nvarying vec3 vBN;' )
			.replace( '#include <fog_vertex>', `#include <fog_vertex>
				vec4 bw = vec4( transformed, 1.0 );
				#ifdef USE_INSTANCING
					bw = instanceMatrix * bw;
				#endif
				vBW = ( modelMatrix * bw ).xyz;
				vBN = normalize( mat3( modelMatrix ) * mat3( instanceMatrix ) * objectNormal );` );
		shader.fragmentShader = shader.fragmentShader.replace( '#include <common>', `#include <common>\nvarying vec3 vBW;\nvarying vec3 vBN;\n${ NOISE }
			const vec3 L_DIR = vec3( ${ f( LIGHT_DIR.x ) }, ${ f( LIGHT_DIR.y ) }, ${ f( LIGHT_DIR.z ) } );
			const vec3 L_COL = vec3( ${ f( SUN_COLOR.r ) }, ${ f( SUN_COLOR.g ) }, ${ f( SUN_COLOR.b ) } );` )
			.replace( '#include <color_fragment>', `#include <color_fragment>
				float leafy = vnoise( vBW.xz * 1.3 + vBW.y * 1.7 ) * 0.6 + vnoise( vBW.xz * 4.1 - vBW.y * 3.3 ) * 0.4;
				float tint = hash12( floor( vBW.xz * 0.21 ) );
				diffuseColor.rgb *= mix( 0.62, 1.15, leafy ) * mix( vec3( 0.78, 1.0, 0.74 ), vec3( 1.06, 1.08, 0.72 ), tint );` )
			.replace( '#include <emissivemap_fragment>', `#include <emissivemap_fragment>
				{
					vec3 V = normalize( cameraPosition - vBW );
					float rim = pow( 1.0 - clamp( dot( normalize( vBN ), V ), 0.0, 1.0 ), 3.0 );
					float back = pow( clamp( dot( - V, L_DIR ), 0.0, 1.0 ), 4.0 );
					float up = clamp( vBN.y * 0.5 + 0.5, 0.0, 1.0 );
					totalEmissiveRadiance += diffuseColor.rgb * vec3( 0.85, 1.15, 0.6 ) * L_COL * ( rim * back * 3.2 * up + back * 0.18 );
				}` );

	};

	m.customProgramCacheKey = () => 'blob';
	return m;

}

function vineMaterial( map, time ) {

	const m = foliageMaterial( map, { time, trans: 0.8, color: 0x6f9d55 } );
	const base = m.onBeforeCompile;
	m.onBeforeCompile = ( shader ) => {

		base( shader );
		shader.vertexShader = shader.vertexShader.replace( '#include <common>', '#include <common>\nattribute float aHang;' )
			.replace( '#include <begin_vertex>', `#include <begin_vertex>
				transformed.x += sin( uTime * 0.9 + position.x * 0.3 + position.z * 0.2 ) * 0.012 * aHang * aHang;
				transformed.z += cos( uTime * 0.7 + position.x * 0.2 ) * 0.01 * aHang * aHang;` );

	};

	m.customProgramCacheKey = () => 'vine';
	return m;

}

// 藤蔓：一条一条竖着的叶片带，顶端挂在楼板边缘
function buildVines( specs, rng ) {

	const pos = [], nor = [], uv = [], hang = [], idx = [];
	let base = 0;
	for ( const s of specs ) {

		for ( let i = 0; i < s.n; i ++ ) {

			const t = ( i + rng() * 0.8 ) / s.n;
			const x = s.ax + ( s.bx - s.ax ) * t, z = s.az + ( s.bz - s.az ) * t;
			const len = rng.range( s.len[ 0 ], s.len[ 1 ] ) * ( 0.6 + 0.4 * Math.sin( t * 9.0 + rng() ) ** 2 );
			const w = rng.range( 0.9, 1.6 );
			const segs = Math.max( 2, Math.ceil( len / 1.5 ) );
			// 条带平行于墙面
			const tx = s.bx - s.ax, tz = s.bz - s.az, tl = Math.hypot( tx, tz ) || 1;
			const ux = tx / tl, uz = tz / tl;
			const off = rng.range( 0.1, 0.6 );
			for ( let k = 0; k <= segs; k ++ ) {

				const d = ( k / segs ) * len;
				const sway = Math.sin( d * 0.35 + i ) * 0.25;
				const out = off + d * 0.015;
				for ( const side of [ - 0.5, 0.5 ] ) {

					pos.push( x + ux * ( side * w + sway ) + s.nx * out, s.y - d, z + uz * ( side * w + sway ) + s.nz * out );
					nor.push( s.nx * 0.7, 0.3, s.nz * 0.7 );
					uv.push( side + 0.5, - d / 1.4 + i * 0.37 );
					hang.push( d );

				}

			}

			for ( let k = 0; k < segs; k ++ ) {

				const a = base + k * 2;
				idx.push( a, a + 2, a + 1, a + 1, a + 2, a + 3 );

			}

			base += ( segs + 1 ) * 2;

		}

	}

	const g = new THREE.BufferGeometry();
	g.setAttribute( 'position', new THREE.Float32BufferAttribute( pos, 3 ) );
	g.setAttribute( 'normal', new THREE.Float32BufferAttribute( nor, 3 ) );
	g.setAttribute( 'uv', new THREE.Float32BufferAttribute( uv, 2 ) );
	g.setAttribute( 'aHang', new THREE.Float32BufferAttribute( hang, 1 ) );
	g.setIndex( idx );
	g.computeBoundingSphere();
	return g;

}

// 花的贴图：五瓣白花，花瓣边缘带一点粉，中间黄色
function flowerTexture() {

	const c = document.createElement( 'canvas' );
	c.width = c.height = 128;
	const g = c.getContext( '2d' );
	g.translate( 64, 64 );
	for ( let i = 0; i < 6; i ++ ) {

		g.rotate( Math.PI / 3 );
		const grd = g.createLinearGradient( 0, 0, 0, - 58 );
		grd.addColorStop( 0, '#fff8ef' );
		grd.addColorStop( 1, '#fbe6d2' );
		g.fillStyle = grd;
		g.beginPath();
		g.ellipse( 0, - 30, 15, 30, 0, 0, Math.PI * 2 );
		g.fill();

	}

	g.fillStyle = '#e8b33a';
	g.beginPath(); g.arc( 0, 0, 11, 0, Math.PI * 2 ); g.fill();
	const t = new THREE.CanvasTexture( c );
	t.colorSpace = THREE.SRGBColorSpace;
	return t;

}

export function createVegetation( { tex, plant, isBuilt, time, Q } ) {

	const group = new THREE.Group();
	group.name = 'vegetation';
	const rng = mulberry32( 20261107 );
	const leafMat = foliageMaterial( tex.leaves, { time } );
	const barkMat = new THREE.MeshStandardMaterial( { color: 0x4a3a2c, roughness: 0.9 } );
	const variants = [ 11, 23, 37, 41 ].map( ( s, i ) => treeVariant( s, { h: 1, crown: [ 0.44, 0.38, 0.5, 0.4 ][ i ] } ) );
	const placements = variants.map( () => [] );
	const addTree = ( x, y, z, h, rot = rng() * 6.28 ) => placements[ Math.floor( rng() * variants.length ) ].push( [ x, y, z, h, rot ] );

	// 楼顶、平台上的树
	for ( const p of plant.trees ) {

		let placed = 0, tries = 0;
		while ( placed < p.n && tries < p.n * 20 ) {

			tries ++;
			const x = rng.range( p.x0, p.x1 ), z = rng.range( p.z0, p.z1 );
			if ( p.avoid && Math.hypot( x - p.avoid.x, z - p.avoid.z ) < p.avoid.r ) continue;
			if ( p.avoidRect && x > p.avoidRect[ 0 ] && x < p.avoidRect[ 1 ] && z > p.avoidRect[ 2 ] && z < p.avoidRect[ 3 ] ) continue;
			addTree( x, p.y, z, rng.range( 6, 10 ) * p.s );
			placed ++;

		}

	}

	// 台地四周的坡上、湖边：近景树
	for ( let i = 0; i < Q.nearTrees; i ++ ) {

		const x = rng.range( - 240, 260 ), z = rng.range( - 190, 150 );
		if ( isBuilt( x, z, 1.5 ) ) continue;
		if ( lakeAt( x, z ) > - 0.08 ) continue;
		const y = heightAt( x, z );
		addTree( x, y - 0.3, z, rng.range( 8, 15 ) );

	}

	// 广场上的树池
	for ( const [ x, z ] of [ [ - 46, 34 ], [ - 30, 46 ], [ 30, 46 ], [ 46, 34 ], [ - 60, 52 ], [ 60, 52 ], [ - 16, 50 ], [ 16, 50 ] ] ) addTree( x, 0.0, z, rng.range( 8, 11 ) );
	// 开场镜头前面的几棵（失焦的深色树冠，只放在画面左下角，不挡医院）
	const tc = TITLE_CAM.pos;
	for ( let i = 0; i < 10; i ++ ) {

		const a = rng.range( - 1.1, - 0.66 ), d = rng.range( 30, 80 );
		const dir = TITLE_CAM.look.clone().sub( tc ).setY( 0 ).normalize();
		const right = new THREE.Vector3( - dir.z, 0, dir.x );
		const x = tc.x + dir.x * d + right.x * Math.tan( a ) * d, z = tc.z + dir.z * d + right.z * Math.tan( a ) * d;
		if ( lakeAt( x, z ) > - 0.05 ) continue;
		addTree( x, heightAt( x, z ) - 0.5, z, rng.range( 10, 15 ) );

	}

	const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), pv = new THREE.Vector3(), up = new THREE.Vector3( 0, 1, 0 );
	variants.forEach( ( v, i ) => {

		const list = placements[ i ];
		if ( ! list.length ) return;
		const trunks = new THREE.InstancedMesh( v.trunk, barkMat, list.length );
		const leaves = new THREE.InstancedMesh( v.leaves, leafMat, list.length );
		list.forEach( ( [ x, y, z, h, r ], k ) => {

			q.setFromAxisAngle( up, r );
			m4.compose( pv.set( x, y, z ), q, sv.set( h, h * rng.range( 0.9, 1.1 ), h ) );
			trunks.setMatrixAt( k, m4 );
			leaves.setMatrixAt( k, m4 );

		} );
		trunks.castShadow = leaves.castShadow = true;
		trunks.receiveShadow = leaves.receiveShadow = true;
		trunks.computeBoundingSphere();
		leaves.computeBoundingSphere();
		group.add( trunks, leaves );

	} );

	// 远处森林
	const blobs = [ 3, 7, 13 ].map( blobVariant );
	const blobMat = blobMaterial();
	const blobPl = blobs.map( () => [] );
	const step = Q.forestStep;
	for ( let z = - 750; z < 1050; z += step ) {

		for ( let x = - 950; x < 850; x += step ) {

			const jx = x + ( rng() - 0.5 ) * step, jz = z + ( rng() - 0.5 ) * step;
			if ( isBuilt( jx, jz, 7 ) ) continue;
			// 主楼附近留给近景树
			if ( Math.abs( jx ) < 150 && jz > - 120 && jz < 70 ) continue;
			if ( lakeAt( jx, jz ) > - 0.04 ) continue;
			const dens = fbm( jx * 0.006 + 1.3, jz * 0.006 + 4.1, 3 );
			if ( dens < 0.4 ) continue;
			// 开场镜头脚下留出草坡和花
			const dc = Math.hypot( jx - tc.x, jz - tc.z );
			if ( dc < 70 ) continue;
			const y = heightAt( jx, jz );
			const r = rng.range( 4, 7.5 ) * ( 0.8 + dens * 0.4 );
			// 开场镜头的视线走廊：树顶高过“镜头 → 医院底部”这条视线的不种
			{

				const vx = - tc.x, vz = - tc.z, L2 = vx * vx + vz * vz;
				const t = ( ( jx - tc.x ) * vx + ( jz - tc.z ) * vz ) / L2;
				if ( t > 0 && t < 0.8 ) {

					const lat = Math.abs( ( jx - tc.x ) * vz - ( jz - tc.z ) * vx ) / Math.sqrt( L2 );
					const lineY = tc.y + ( - 4 - tc.y ) * t;
					if ( lat < 40 + t * 260 && y + r * 0.9 > lineY - 3 ) continue;

				}

			}
			blobPl[ Math.floor( rng() * blobs.length ) ].push( [ jx, y + r * 0.55, jz, r, r * rng.range( 1.0, 1.5 ) ] );

		}

	}

	blobs.forEach( ( g, i ) => {

		const list = blobPl[ i ];
		const im = new THREE.InstancedMesh( g, blobMat, list.length );
		list.forEach( ( [ x, y, z, r, h ], k ) => {

			q.setFromAxisAngle( up, rng() * 6.28 );
			m4.compose( pv.set( x, y, z ), q, sv.set( r, h * 0.62, r ) );
			im.setMatrixAt( k, m4 );

		} );
		im.castShadow = Q.blobShadows;
		im.receiveShadow = true;
		im.computeBoundingSphere();
		group.add( im );

	} );

	// 藤蔓
	const vines = new THREE.Mesh( buildVines( plant.vines, rng ), vineMaterial( tex.leaves, time ) );
	vines.castShadow = true;
	vines.receiveShadow = true;
	vines.name = 'vines';
	group.add( vines );

	// 开场镜头脚下的花和草
	const fl = flowerTexture();
	const flowerMat = new THREE.MeshStandardMaterial( { map: fl, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.6, emissive: 0xffd2a8, emissiveIntensity: 0.5, emissiveMap: fl } );
	const flowerGeo = merge( [ new THREE.PlaneGeometry( 1, 1 ), new THREE.PlaneGeometry( 1, 1 ).rotateY( Math.PI / 2 ) ] );
	// 参考图前景：镜头正前方一两米、比眼睛略低的一片白花，左下和右下最多，景深把它们糊成光斑
	const nF = 46;
	const flowers = new THREE.InstancedMesh( flowerGeo, flowerMat, nF );
	const dir = TITLE_CAM.look.clone().sub( tc ).normalize();
	const right = new THREE.Vector3().crossVectors( dir, up ).normalize();
	const camUp = new THREE.Vector3().crossVectors( right, dir ).normalize();
	for ( let i = 0; i < nF; i ++ ) {

		const d = rng.range( 1.6, 6.0 );
		// 画面上的位置：横向 -1..1，纵向偏下（-1 是画面底边）
		const sx = rng() < 0.5 ? rng.range( - 1.0, - 0.25 ) : rng.range( 0.35, 1.0 );
		const sy = rng.range( - 1.05, - 0.45 ) + ( Math.abs( sx ) > 0.7 ? 0.25 : 0 );
		const th = Math.tan( THREE.MathUtils.degToRad( TITLE_CAM.fov / 2 ) );
		const p = tc.clone().addScaledVector( dir, d ).addScaledVector( right, sx * th * d * 16 / 9 ).addScaledVector( camUp, sy * th * d );
		const s = rng.range( 0.028, 0.05 );
		q.setFromEuler( new THREE.Euler( rng.range( - 0.6, 0.2 ), rng() * 6.28, rng.range( - 0.3, 0.3 ) ) );
		m4.compose( p, q, sv.set( s, s, s ) );
		flowers.setMatrixAt( i, m4 );

	}

	flowers.name = 'flowers';
	group.add( flowers );

	return { group, leafMat, blobMat };

}
