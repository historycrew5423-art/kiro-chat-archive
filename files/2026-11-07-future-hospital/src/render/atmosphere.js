import * as THREE from 'three';
import { SUN_DIR, SUN_COLOR } from '../config.js';

// ---------------------------------------------------------------------------
// 空气透视：直接替换 three 的雾代码块，所有内置材质共用。
// 远处的东西按高度雾的光学深度变淡，朝太阳方向的空气发暖光（参考图里湖面和远山都罩着一层金色的雾）。
// 室内距离短，光学深度很小，几乎没有影响。
// ---------------------------------------------------------------------------

const f = ( v ) => v.toFixed( 5 );
export const ATMOS = /* glsl */ `
	const vec3 SUN_DIR = vec3( ${ f( SUN_DIR.x ) }, ${ f( SUN_DIR.y ) }, ${ f( SUN_DIR.z ) } );
	const vec3 SUN_COLOR = vec3( ${ f( SUN_COLOR.r ) }, ${ f( SUN_COLOR.g ) }, ${ f( SUN_COLOR.b ) } );
	const vec3 HAZE = vec3( 0.30, 0.34, 0.43 );
	const vec3 HAZE_SUN = vec3( 1.6, 0.92, 0.46 );
	const vec3 EXTINCT = vec3( 0.78, 0.96, 1.22 );
	const float ATM_DENSITY = 0.00024;
	const float ATM_SCALE_H = 260.0;
	vec3 atmosOptical( vec3 wp ) {
		vec3 ro = cameraPosition;
		vec3 rd = wp - ro;
		float dist = length( rd );
		rd /= max( dist, 1e-4 );
		float k = rd.y / ATM_SCALE_H;
		float integ = abs( k * dist ) < 1e-4 ? dist : ( 1.0 - exp( - k * dist ) ) / k;
		float depth = ATM_DENSITY * exp( - max( ro.y + 10.0, 0.0 ) / ATM_SCALE_H ) * max( integ, 0.0 );
		return depth * EXTINCT;
	}
	vec3 atmosInscatter( vec3 rd ) {
		float s = clamp( dot( rd, SUN_DIR ), 0.0, 1.0 );
		// 宽的暖色辉光 + 窄一点的亮核，背对太阳是偏紫的灰蓝
		vec3 c = mix( HAZE, HAZE_SUN, pow( s, 4.0 ) * 0.45 + pow( s, 30.0 ) * 0.55 );
		return c + SUN_COLOR * pow( s, 1500.0 ) * 3.0;
	}
	vec3 atmos( vec3 col, vec3 wp ) {
		vec3 T = exp( - atmosOptical( wp ) );
		vec3 rd = normalize( wp - cameraPosition );
		return col * T + atmosInscatter( rd ) * ( 1.0 - T );
	}
	vec3 atmosT( vec3 wp ) {
		return exp( - atmosOptical( wp ) );
	}
`;

THREE.ShaderChunk.fog_pars_vertex = /* glsl */ `
	#ifdef USE_FOG
		varying vec3 vFogWorldPos;
	#endif
`;
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
