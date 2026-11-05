import * as THREE from 'three';
import { NOISE } from './glsl.js';
import { smooth } from './noise.js';
import { PLATEAU, PLATEAU_Y, VIADUCT, L } from './layout.js';

// ---------------------------------------------------------------------------
// 山顶台地（主角出发的地方）、城市地面、远处的海湾。
// ---------------------------------------------------------------------------

const KNOLL = { x: - 44, z: - 40, r: 26, h: 64 };
const PAD = { x: VIADUCT.points[ 0 ].x, z: VIADUCT.points[ 0 ].z + 8, r: 22 };

export function createHillField( N ) {

	const C = PLATEAU.center;
	const edgeR = ( th ) => {

		const front = Math.exp( - Math.pow( ( th + Math.PI / 2 ) / 0.3, 2 ) );
		return 128 - 24 * front + 7 * N.fbm( Math.cos( th ) * 1.4 + 3, Math.sin( th ) * 1.4, 0.5, 3 ) * 2;

	};

	// 台地顶面：中间基本平坦，略有起伏
	const top = ( x, z ) => PLATEAU_Y + 1.2 * N.fbm( x * 0.012, 0.3, z * 0.012, 3 ) * 2 + 0.25 * N.noise3( x * 0.08, 1.7, z * 0.08 );

	function height( x, z ) {

		const dx = x - C.x, dz = z - C.z;
		const d = Math.hypot( dx, dz );
		const th = Math.atan2( dz, dx );
		const R = edgeR( th );
		const t = R - d;
		let h;
		if ( t >= 0 ) {

			h = top( x, z ) + Math.max( 0, 6 - t ) * 0.25 * N.noise3( x * 0.1, 5.1, z * 0.1 );

		} else {

			const W = 70 + 40 * ( N.noise3( th * 3.0, 9.1, 0.3 ) * 0.5 + 0.5 );
			const s = Math.max( 0, 1 + t / W );
			// 陡崖 + 几道岩坎
			let prof = Math.pow( s, 0.32 );
			const ledge = Math.sin( s * 9.0 + N.noise3( th * 4.0, 1.3, 0 ) * 2.0 ) * 0.035 * s * ( 1 - s );
			prof = Math.min( 1, Math.max( 0, prof + ledge ) );
			h = - 4 + ( top( x, z ) + 4 ) * prof;
			h += ( N.fbm( x * 0.05, z * 0.05, 4.4, 3 ) * 10 + N.noise3( x * 0.2, z * 0.2, 1.1 ) * 2 ) * s * ( 1 - s ) * 4;

		}

		// 左前方的岩丘（参考图左下角那块长苔藓的岩石）
		const kd = Math.hypot( x - KNOLL.x, z - KNOLL.z );
		const kn = N.fbm( x * 0.06, z * 0.06, 7.7, 3 );
		const kk = smooth( KNOLL.r + 6 * kn, 6, kd );
		const ridge = 1 - Math.abs( N.noise3( x * 0.09, z * 0.09, 2.2 ) );
		h += KNOLL.h * Math.pow( kk, 0.7 ) * ( 0.8 + 0.25 * kn ) + kk * ( 1 - kk ) * 4 * ( ridge * 9 + N.noise3( x * 0.35, z * 0.35, 8.8 ) * 2.5 );

		// 车站平台：压平
		const pd = Math.hypot( x - PAD.x, z - PAD.z );
		const pk = smooth( PAD.r + 6, PAD.r, pd );
		h = h * ( 1 - pk ) + PLATEAU_Y * pk;

		return h;

	}

	// 可以走的地方：台地顶面和车站平台（悬崖和岩丘不能走）
	function walkable( x, z ) {

		const dx = x - C.x, dz = z - C.z;
		const t = edgeR( Math.atan2( dz, dx ) ) - Math.hypot( dx, dz );
		const pd = Math.hypot( x - PAD.x, z - PAD.z );
		return t > 2.5 || pd < PAD.r - 1;

	}

	const knollMask = ( x, z ) => smooth( KNOLL.r + 6, 10, Math.hypot( x - KNOLL.x, z - KNOLL.z ) );
	const walkable2 = ( x, z ) => walkable( x, z ) && knollMask( x, z ) < 0.08;

	return { height, walkable: walkable2, edgeR, KNOLL, PAD };

}

// 岩丘：变形的球体，竖向拉长，用脊状噪声刻出岩棱
export function createKnoll( field, N, material ) {

	const K = field.KNOLL;
	let geo = new THREE.IcosahedronGeometry( 1, 6 );
	const p = geo.attributes.position;
	const v = new THREE.Vector3();
	for ( let i = 0; i < p.count; i ++ ) {

		v.fromBufferAttribute( p, i );
		const ridge = 1 - Math.abs( N.noise3( v.x * 2.2, v.y * 1.1, v.z * 2.2 ) );
		const k = 1 + N.fbm( v.x * 1.6, v.y * 1.6, v.z * 1.6, 4 ) * 0.45 + ridge * 0.18 + N.noise3( v.x * 6, v.y * 6, v.z * 6 ) * 0.05;
		v.multiplyScalar( k );
		// 上面窄一点、下面宽一点，像一块立着的崖石
		const taper = 1 - Math.max( 0, v.y ) * 0.28;
		p.setXYZ( i, v.x * K.r * 1.05 * taper, v.y * 42, v.z * K.r * 0.9 * taper );

	}

	geo.computeVertexNormals();
	const mesh = new THREE.Mesh( geo, material );
	mesh.position.set( K.x - 3, PLATEAU_Y + 18, K.z - 2 );
	mesh.rotation.y = 0.6;
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	return mesh;

}

// 山体网格
export function createHill( field, tex, Q ) {

	const size = 560, res = Q.hillRes;
	const geo = new THREE.PlaneGeometry( size, size, res, res );
	geo.rotateX( - Math.PI / 2 );
	geo.translate( PLATEAU.center.x, 0, PLATEAU.center.z - 10 );
	const p = geo.attributes.position;
	for ( let i = 0; i < p.count; i ++ ) p.setY( i, field.height( p.getX( i ), p.getZ( i ) ) );
	geo.computeVertexNormals();

	const mat = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0.9, metalness: 0 } );
	const U = {
		tRockD: { value: tex.rockD }, tRockN: { value: tex.rockN }, tRockA: { value: tex.rockA },
		tGrassD: { value: tex.grassD }, tGrassN: { value: tex.grassN }
	};
	mat.onBeforeCompile = ( sh ) => {

		Object.assign( sh.uniforms, U );
		sh.vertexShader = sh.vertexShader
			.replace( '#include <common>', '#include <common>\nvarying vec3 vWN;' )
			.replace( '#include <beginnormal_vertex>', '#include <beginnormal_vertex>\nvWN = normalize( mat3( modelMatrix ) * objectNormal );' );
		sh.fragmentShader = sh.fragmentShader
			.replace( '#include <common>', `#include <common>
				varying vec3 vWN;
				uniform sampler2D tRockD, tRockN, tRockA, tGrassD, tGrassN;
				${ NOISE }
				vec3 triW( vec3 n ) { vec3 w = pow( abs( n ), vec3( 4.0 ) ); return w / ( w.x + w.y + w.z ); }
				vec4 tri( sampler2D t, vec3 p, vec3 w, float s ) {
					return texture2D( t, p.zy * s ) * w.x + texture2D( t, p.xz * s ) * w.y + texture2D( t, p.xy * s ) * w.z;
				}
				// 三向投影的法线贴图（whiteout 混合）
				vec3 triN( sampler2D t, vec3 p, vec3 n, vec3 w, float s ) {
					vec3 tx = texture2D( t, p.zy * s ).xyz * 2.0 - 1.0;
					vec3 ty = texture2D( t, p.xz * s ).xyz * 2.0 - 1.0;
					vec3 tz = texture2D( t, p.xy * s ).xyz * 2.0 - 1.0;
					tx = vec3( tx.xy + n.zy, abs( tx.z ) * n.x );
					ty = vec3( ty.xy + n.xz, abs( ty.z ) * n.y );
					tz = vec3( tz.xy + n.xy, abs( tz.z ) * n.z );
					return normalize( tx.zyx * w.x + ty.xzy * w.y + tz.xyz * w.z );
				}
			` )
			.replace( '#include <color_fragment>', /* glsl */ `
				#include <color_fragment>
				vec3 hP = vFogWorldPos;
				vec3 hN = normalize( vWN );
				vec3 hW = triW( hN );
				float hDist = length( hP - cameraPosition );
				float sc = 0.16;
				vec3 rock = tri( tRockD, hP, hW, sc ).rgb;
				vec3 rockFar = tri( tRockD, hP, hW, sc * 0.17 ).rgb;
				rock = mix( rock, rock * ( 0.6 + 0.8 * rockFar ), 0.6 );
				vec2 gUv = hP.xz * 0.16;
				vec3 grass = texture2D( tGrassD, gUv ).rgb * ( 0.75 + 0.5 * texture2D( tGrassD, gUv * 0.13 ).g );
				grass *= vec3( 0.92, 1.0, 0.82 );
				float n1 = fbm( hP.xz * 0.05 );
				float flat_ = smoothstep( 0.62, 0.86, hN.y + ( n1 - 0.5 ) * 0.25 );
				float isTop = smoothstep( ${ ( PLATEAU_Y - 6 ).toFixed( 1 ) }, ${ ( PLATEAU_Y - 1 ).toFixed( 1 ) }, hP.y ) * ( 1.0 - smoothstep( ${ ( PLATEAU_Y + 4 ).toFixed( 1 ) }, ${ ( PLATEAU_Y + 8 ).toFixed( 1 ) }, hP.y ) );
				// 崖面上的苔藓：朝上的面多、低处少
				float moss = smoothstep( 0.45, 0.85, hN.y + ( n1 - 0.5 ) * 0.7 ) * 0.8;
				vec3 mossC = vec3( 0.10, 0.16, 0.05 ) * ( 0.7 + 0.6 * vnoise( hP.xz * 0.4 + hP.y * 0.3 ) );
				vec3 cliff = mix( rock * rock * vec3( 1.5, 1.42, 1.3 ), mossC, moss );
				float g = max( flat_ * isTop, flat_ * 0.6 * smoothstep( 40.0, 120.0, hP.y ) * ( 1.0 - smoothstep( ${ ( PLATEAU_Y + 4 ).toFixed( 1 ) }, ${ ( PLATEAU_Y + 8 ).toFixed( 1 ) }, hP.y ) ) );
				diffuseColor.rgb = mix( cliff, grass, g );
				float hRough = mix( 0.85, 0.95, g );
			` )
			.replace( '#include <roughnessmap_fragment>', 'float roughnessFactor = hRough;' )
			.replace( '#include <normal_fragment_maps>', /* glsl */ `
				{
					vec3 wn = triN( tRockN, hP, hN, hW, sc );
					vec3 gn = texture2D( tGrassN, gUv ).xyz * 2.0 - 1.0;
					vec3 wg = normalize( vec3( gn.x, gn.z * 2.0, gn.y ) );
					wn = normalize( mix( wn, wg, g ) );
					wn = normalize( mix( wn, hN, smoothstep( 80.0, 600.0, hDist ) ) );
					normal = normalize( ( viewMatrix * vec4( wn, 0.0 ) ).xyz );
				}
			` );

	};

	mat.customProgramCacheKey = () => 'hill';
	const mesh = new THREE.Mesh( geo, mat );
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	mesh.userData.material = mat;
	return mesh;

}

// ---------------------------------------------------------------------------
// 城市地面：近处是街道、广场和树荫；远处（没有实体建筑的地方）画出密密麻麻的屋顶，
// 加上空气透视后看起来像一直延伸到天边的城市。右边地平线是海湾。
// ---------------------------------------------------------------------------
export const GROUND_GLSL = /* glsl */ `
	// 高架以东（画面右侧）是森林
	float forestMask( vec2 p ) {
		float edge = 150.0 + 0.10 * ( - p.y );
		float f = smoothstep( edge, edge + 120.0, p.x ) * smoothstep( - 250.0, - 600.0, p.y );
		f *= 1.0 - smoothstep( 2600.0, 3400.0, p.x - 0.18 * ( - p.y ) );
		return f;
	}
	float seaMask( vec2 p ) {
		return smoothstep( 0.0, 250.0, p.x - ( 4200.0 + 0.3 * ( - p.y ) ) );
	}
	float avenueMask( vec2 p ) {
		vec2 a = vec2( ${ L.avenue.x0.toFixed( 1 ) }, ${ L.avenue.z0.toFixed( 1 ) } );
		vec2 b = vec2( ${ L.avenue.x1.toFixed( 1 ) }, ${ L.avenue.z1.toFixed( 1 ) } );
		vec2 ab = b - a;
		float t = clamp( dot( p - a, ab ) / dot( ab, ab ), 0.0, 1.0 );
		float d = length( p - a - ab * t );
		return smoothstep( ${ ( L.avenue.width / 2 ).toFixed( 1 ) } + 4.0, ${ ( L.avenue.width / 2 ).toFixed( 1 ) }, d ) * step( 0.0, dot( p - a, ab ) ) * step( dot( p - a, ab ), dot( ab, ab ) );
	}
`;

export function createGround( U, Q ) {

	const geo = new THREE.CircleGeometry( 30000, 96 );
	geo.rotateX( - Math.PI / 2 );
	const mat = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0.95, metalness: 0 } );
	mat.onBeforeCompile = ( sh ) => {

		sh.fragmentShader = sh.fragmentShader
			.replace( '#include <common>', `#include <common>\n${ NOISE }\n${ GROUND_GLSL }` )
			.replace( '#include <color_fragment>', /* glsl */ `
				#include <color_fragment>
				vec2 gp = vFogWorldPos.xz;
				float gd = length( vFogWorldPos - cameraPosition );
				float fm = forestMask( gp );
				float sm = seaMask( gp );
				float am = avenueMask( gp );
				// 近处：街道网格 + 树荫
				vec2 cell = gp / 64.0;
				vec2 cf = abs( fract( cell ) - 0.5 );
				float street = smoothstep( 0.42, 0.46, max( cf.x, cf.y ) );
				float trees = smoothstep( 0.45, 0.62, fbm( gp * 0.02 ) + 0.25 * vnoise( gp * 0.15 ) );
				vec3 pave = mix( vec3( 0.36, 0.37, 0.37 ), vec3( 0.22, 0.23, 0.24 ), street );
				vec3 canopy = vec3( 0.05, 0.10, 0.035 ) * ( 0.7 + 0.6 * vnoise( gp * 0.08 ) );
				vec3 col = mix( pave, canopy, max( trees * 0.75, street * 0.5 ) );
				// 远处：没有实体建筑的区域画成密集的屋顶
				vec2 rc = floor( gp / 46.0 );
				vec2 rf = fract( gp / 46.0 );
				float rh = hash12( rc );
				float roof = step( 0.12, rf.x ) * step( rf.x, 0.88 ) * step( 0.12, rf.y ) * step( rf.y, 0.88 ) * step( 0.25, rh );
				float shade = step( rf.x, 0.35 ) * 0.5;
				vec3 roofs = mix( vec3( 0.20, 0.22, 0.20 ), vec3( 0.62, 0.62, 0.60 ) * ( 0.75 + 0.35 * rh ) * ( 1.0 - shade ), roof );
				roofs = mix( roofs, canopy * 1.2, step( 0.82, hash12( rc + 7.3 ) ) );
				float farK = smoothstep( ${ ( Q.cityRange * 0.75 ).toFixed( 1 ) }, ${ ( Q.cityRange * 1.05 ).toFixed( 1 ) }, gd );
				col = mix( col, roofs, farK );
				// 林荫大道：整条是绿地（路和行道树由实体模型负责）
				col = mix( col, canopy * 1.15, am );
				// 森林
				vec3 forest = vec3( 0.035, 0.075, 0.025 ) * ( 0.6 + 0.8 * fbm( gp * 0.012 ) ) * ( 0.8 + 0.4 * vnoise( gp * 0.09 ) );
				col = mix( col, forest, fm );
				// 海
				vec3 V = normalize( cameraPosition - vFogWorldPos );
				float fres = pow( 1.0 - clamp( V.y, 0.0, 1.0 ), 4.0 );
				vec3 sea = mix( vec3( 0.03, 0.08, 0.12 ), vec3( 0.32, 0.42, 0.55 ), fres );
				col = mix( col, sea, sm );
				diffuseColor.rgb = col;
				float gRough = mix( 0.95, 0.25, sm );
			` )
			.replace( '#include <roughnessmap_fragment>', 'float roughnessFactor = gRough;' );

	};

	mat.customProgramCacheKey = () => 'ground';
	const mesh = new THREE.Mesh( geo, mat );
	mesh.receiveShadow = false;
	return mesh;

}
