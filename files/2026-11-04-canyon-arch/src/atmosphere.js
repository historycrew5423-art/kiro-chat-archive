import * as THREE from 'three';

// ---------------------------------------------------------------------------
// 全场景共用的“大气”：太阳方向、拱门洞口形状、高度雾。
// 太阳在拱门后面，整个峡谷是逆光的。
// 这里直接替换 three.js 的雾代码块，所以所有内置材质都会用同一套雾：
// 越靠近水面越浓，朝向太阳的方向雾会发出暖光。
// ---------------------------------------------------------------------------

export const SUN_DIR = new THREE.Vector3( 0.18, 0.11, - 1 ).normalize();
export const SUN_COLOR = new THREE.Color( 1.0, 0.72, 0.44 );

// 拱门洞口：下面是两条竖边，上面是半个椭圆。z 是拱门正面所在的位置。
export const ARCH = { z: - 400, x0: - 70, x1: 110, bottom: - 30, spring: 60, ry: 135, depth: 80 };

const f = ( v ) => v.toFixed( 5 );
const v3 = ( v ) => `vec3( ${ f( v.x ?? v.r ) }, ${ f( v.y ?? v.g ) }, ${ f( v.z ?? v.b ) } )`;

export const ATMOS = /* glsl */ `
	const vec3 SUN_DIR = ${ v3( SUN_DIR ) };
	const vec3 SUN_COLOR = ${ v3( SUN_COLOR ) };
	const vec3 ATM_HAZE = vec3( 0.075, 0.09, 0.09 );
	const vec3 ATM_SUN = vec3( 1.05, 0.74, 0.42 );
	const float ATM_DENSITY = 0.0008;
	const float ATM_FALLOFF = 0.008;

	// 洞口的有向距离：负数在洞里
	float archSDF( vec2 q ) {
		const float X0 = ${ f( ARCH.x0 ) };
		const float X1 = ${ f( ARCH.x1 ) };
		const float SP = ${ f( ARCH.spring ) };
		const float RY = ${ f( ARCH.ry ) };
		float cx = ( X0 + X1 ) * 0.5;
		float rx = ( X1 - X0 ) * 0.5;
		if ( q.y < SP ) return max( X0 - q.x, q.x - X1 );
		vec2 e = vec2( ( q.x - cx ) / rx, ( q.y - SP ) / RY );
		return ( length( e ) - 1.0 ) * min( rx, RY );
	}

	// 这个点能不能被太阳直接照到：从该点朝太阳看，视线是否穿过洞口。
	// 只用于半透明树叶、瀑布发光、水面闪光这些不走阴影贴图的效果。
	float sunMask( vec3 p ) {
		const float AZ = ${ f( ARCH.z ) };
		if ( p.z < AZ - 70.0 ) return 1.0;
		float t = ( AZ - p.z ) / SUN_DIR.z;
		if ( t < 0.0 ) return 1.0;
		vec2 q = p.xy + SUN_DIR.xy * t;
		return 1.0 - smoothstep( - 22.0, 8.0, archSDF( q ) );
	}

	float atmosDepth( vec3 wp ) {
		vec3 ro = cameraPosition;
		vec3 rd = wp - ro;
		float dist = length( rd );
		rd /= max( dist, 1e-4 );
		float k = rd.y * ATM_FALLOFF;
		float integ = abs( k ) < 1e-5 ? dist : ( 1.0 - exp( - dist * k ) ) / k;
		return ATM_DENSITY * exp( - ro.y * ATM_FALLOFF ) * max( integ, 0.0 ) + dist * 0.00011;
	}

	vec3 atmosColor( vec3 rd ) {
		float s = clamp( dot( rd, SUN_DIR ), 0.0, 1.0 );
		return mix( ATM_HAZE, ATM_SUN, pow( s, 12.0 ) ) + ATM_SUN * pow( s, 80.0 ) * 1.2;
	}

	vec3 atmos( vec3 col, vec3 wp ) {
		float fogF = 1.0 - exp( - atmosDepth( wp ) );
		vec3 rd = normalize( wp - cameraPosition );
		return mix( col, atmosColor( rd ), fogF );
	}

	// 给叠加混合的发光物用：只做衰减，不加雾色
	float atmosT( vec3 wp ) {
		return exp( - atmosDepth( wp ) );
	}
`;

THREE.ShaderChunk.fog_pars_vertex = /* glsl */ `
	#ifdef USE_FOG
		varying vec3 vFogWorldPos;
	#endif
`;

// 视图矩阵的旋转部分是正交的，所以世界坐标 = 相机位置 + 旋转的转置 × 视图坐标
THREE.ShaderChunk.fog_vertex = /* glsl */ `
	#ifdef USE_FOG
		vFogWorldPos = cameraPosition + transpose( mat3( viewMatrix ) ) * mvPosition.xyz;
	#endif
`;

THREE.ShaderChunk.fog_pars_fragment = /* glsl */ `
	#ifdef USE_FOG
		varying vec3 vFogWorldPos;
		${ ATMOS }
	#endif
`;

THREE.ShaderChunk.fog_fragment = /* glsl */ `
	#ifdef USE_FOG
		gl_FragColor.rgb = atmos( gl_FragColor.rgb, vFogWorldPos );
	#endif
`;
