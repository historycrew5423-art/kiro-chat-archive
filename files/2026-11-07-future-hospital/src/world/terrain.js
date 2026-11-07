import * as THREE from 'three';
import { NOISE } from '../render/glsl.js';
import { WATER_Y } from '../config.js';

// ---------------------------------------------------------------------------
// 地形：高度场。医院所在的台地 → 南边的湖 → 湖对岸西南的山坡（开场镜头站在这里）→ 四周长满树的丘陵。
// heightAt() 在 JS 里也能调，用来放树、放镜头。
// ---------------------------------------------------------------------------

function hash( x, y ) {

	const s = Math.sin( x * 127.1 + y * 311.7 ) * 43758.5453;
	return s - Math.floor( s );

}

function vnoise( x, y ) {

	const ix = Math.floor( x ), iy = Math.floor( y );
	const fx = x - ix, fy = y - iy;
	const ux = fx * fx * ( 3 - 2 * fx ), uy = fy * fy * ( 3 - 2 * fy );
	const a = hash( ix, iy ), b = hash( ix + 1, iy ), c = hash( ix, iy + 1 ), d = hash( ix + 1, iy + 1 );
	return a + ( b - a ) * ux + ( c - a ) * uy + ( a - b - c + d ) * ux * uy;

}

export function fbm( x, y, oct = 5 ) {

	let s = 0, a = 0.5;
	for ( let i = 0; i < oct; i ++ ) {

		s += a * vnoise( x, y );
		x = x * 2.03 + 17.1; y = y * 2.03 + 9.2; a *= 0.5;

	}

	return s;

}

const sm = ( a, b, x ) => {

	const t = Math.min( 1, Math.max( 0, ( x - a ) / ( b - a ) ) );
	return t * t * ( 3 - 2 * t );

};

// 湖的形状：几个椭圆拼起来，边缘加噪声。返回 >0 表示在湖里（越大越深）
export function lakeAt( x, z ) {

	const e = ( cx, cz, rx, rz ) => 1 - Math.hypot( ( x - cx ) / rx, ( z - cz ) / rz );
	let v = Math.max( e( - 40, 200, 300, 125 ), e( - 230, 150, 150, 95 ), e( 150, 170, 170, 80 ), e( 330, 120, 220, 60 ), e( 600, 60, 260, 70 ) );
	v += ( fbm( x * 0.012, z * 0.012, 3 ) - 0.5 ) * 0.32;
	// 开场镜头所在的山坡伸进湖里
	v -= Math.max( 0, 1 - Math.hypot( ( x + 272 ) / 120, ( z - 372 ) / 95 ) ) * 1.6;
	return v;

}

export function heightAt( x, z ) {

	// 大尺度丘陵
	let h = ( fbm( x * 0.0042 + 3.1, z * 0.0042 + 7.7, 5 ) - 0.42 ) * 70;
	// 西边、北边的山更高
	h += sm( - 120, - 420, x ) * 55 + sm( - 100, - 420, z ) * 40;
	// 东边往城市方向低下去
	h -= sm( 160, 700, x ) * 25;
	// 开场镜头和医院之间的视线走廊：地形压低，从镜头脚下的山坡一路降到湖面，免得山挡住医院
	{

		const ax = - 254, az = 347, bx = 0, bz = 0;
		const dx = bx - ax, dz = bz - az, L2 = dx * dx + dz * dz;
		const t = Math.max( 0, Math.min( 1, ( ( x - ax ) * dx + ( z - az ) * dz ) / L2 ) );
		const d = Math.hypot( x - ( ax + dx * t ), z - ( az + dz * t ) );
		const w = 1 - sm( 50, 190, d + Math.max( 0, - t ) * 0 );
		const cap = 20.2 - 24 * sm( 0.0, 0.28, t ) + 4 * sm( 0.8, 1.0, t );
		h = h * ( 1 - w ) + Math.min( h, cap ) * w;

	}

	// 开场镜头的山坡：顶在 (-270, 368) 附近，高约 21 米，镜头站在朝湖的一侧
	const hill = Math.max( 0, 1 - Math.hypot( ( x + 270 ) / 130, ( z - 368 ) / 110 ) );
	h = Math.max( h, hill * hill * ( 3 - 2 * hill ) * 21.5 + ( fbm( x * 0.03, z * 0.03, 3 ) - 0.5 ) * 2.5 );
	// 湖
	const lk = lakeAt( x, z );
	const shore = sm( - 0.06, 0.08, lk );
	h = h * ( 1 - shore ) + ( WATER_Y - 1.0 - Math.min( lk, 0.6 ) * 12 ) * shore;
	h = Math.min( h, h * ( 1 - sm( - 0.25, 0.0, lk ) ) + ( WATER_Y + 1.8 ) * sm( - 0.25, 0.0, lk ) );
	// 医院台地：主楼、广场、东西两翼一带压平到 0，往外平滑过渡
	const px = Math.max( 0, Math.abs( x - 5 ) - 118 ), pz = Math.max( 0, z - 60, - 70 - z );
	const pd = Math.hypot( px, pz );
	const flat = 1 - sm( 0, 70, pd );
	h = h * ( 1 - flat ) + - 0.3 * flat;
	// 广场南侧到湖边是台阶式下降（广场边缘 z=58 以南）
	if ( z > 58 && Math.abs( x ) < 120 ) h = Math.min( h, - 0.3 - ( z - 58 ) * 0.25 );
	return h;

}

export function createTerrain( tex, Q ) {

	const group = new THREE.Group();
	// 近处：1800 x 1800 米，每格 ~5 米；远处：一圈低精度
	const make = ( size, seg, cx, cz, hole ) => {

		const g = new THREE.PlaneGeometry( size, size, seg, seg );
		g.rotateX( - Math.PI / 2 );
		const p = g.attributes.position;
		for ( let i = 0; i < p.count; i ++ ) {

			const x = p.getX( i ) + cx, z = p.getZ( i ) + cz;
			p.setXYZ( i, x, heightAt( x, z ), z );

		}

		if ( hole ) {

			// 远处那块：中间和近处重叠的部分往下压，免得两层打架
			for ( let i = 0; i < p.count; i ++ ) {

				const x = p.getX( i ), z = p.getZ( i );
				if ( Math.abs( x - hole.cx ) < hole.r && Math.abs( z - hole.cz ) < hole.r ) p.setY( i, p.getY( i ) - 30 );

			}

		}

		g.computeVertexNormals();
		return g;

	};

	const mat = new THREE.MeshStandardMaterial( {
		map: tex.grass, normalMap: tex.grassNor, roughness: 0.95, metalness: 0, envMapIntensity: 0.6
	} );
	mat.onBeforeCompile = ( shader ) => {

		shader.uniforms.tRock = { value: tex.rock };
		shader.vertexShader = shader.vertexShader.replace( '#include <common>', '#include <common>\nvarying vec3 vTW;\nvarying vec3 vTN;' )
			.replace( '#include <fog_vertex>', '#include <fog_vertex>\nvTW = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;\nvTN = normalize( mat3( modelMatrix ) * objectNormal );' );
		shader.fragmentShader = shader.fragmentShader.replace( '#include <common>', `#include <common>\nuniform sampler2D tRock;\nvarying vec3 vTW;\nvarying vec3 vTN;\n${ NOISE }` )
			.replace( '#include <map_fragment>', `
				vec2 tuv = vTW.xz * 0.16;
				vec3 grass = texture2D( map, tuv ).rgb;
				vec3 grass2 = texture2D( map, tuv * 0.21 + 0.37 ).rgb;
				grass = mix( grass, grass2, 0.45 );
				vec3 rock = texture2D( tRock, vTW.xz * 0.06 + vTW.y * 0.05 ).rgb;
				float slope = 1.0 - clamp( vTN.y, 0.0, 1.0 );
				float n = fbm3( vTW.xz * 0.02 );
				vec3 c = grass * mix( vec3( 0.62, 0.74, 0.42 ), vec3( 0.95, 0.88, 0.58 ), n );
				c = mix( c, rock * vec3( 0.85, 0.82, 0.76 ), smoothstep( 0.32, 0.55, slope + ( n - 0.5 ) * 0.2 ) );
				// 湖边：湿泥和沙
				float shore = smoothstep( ${ ( WATER_Y + 2.2 ).toFixed( 2 ) }, ${ ( WATER_Y + 0.2 ).toFixed( 2 ) }, vTW.y );
				c = mix( c, vec3( 0.36, 0.31, 0.24 ), shore * 0.85 );
				// 林下：远处整体压暗、偏蓝绿（被树冠遮住的地面）
				float forest = smoothstep( 0.45, 0.62, fbm3( vTW.xz * 0.008 + 3.0 ) ) * smoothstep( 120.0, 260.0, length( vTW.xz - vec2( 0.0, 20.0 ) ) );
				c *= mix( 1.0, 0.55, forest );
				diffuseColor.rgb *= c;
			` )
			// 法线贴图也按世界坐标取（平面几何体自带的 uv 横跨 1800 米，直接用会被拉得很开）
			.replace( '#include <normal_fragment_begin>', THREE.ShaderChunk.normal_fragment_begin.replaceAll( 'vNormalMapUv', '( vTW.xz * 0.16 )' ) )
			.replace( '#include <normal_fragment_maps>', THREE.ShaderChunk.normal_fragment_maps.replaceAll( 'vNormalMapUv', '( vTW.xz * 0.16 )' ) );

	};

	mat.normalScale = new THREE.Vector2( 0.8, 0.8 );
	mat.customProgramCacheKey = () => 'terrain';
	const near = new THREE.Mesh( make( 1800, Q.terrainSeg, - 50, 150 ), mat );
	near.receiveShadow = true;
	near.name = 'terrain_near';
	group.add( near );
	const far = new THREE.Mesh( make( 9000, 160, - 50, 150, { cx: - 50, cz: 150, r: 880 } ), mat );
	far.receiveShadow = false;
	far.name = 'terrain_far';
	group.add( far );
	return { group, mat };

}
