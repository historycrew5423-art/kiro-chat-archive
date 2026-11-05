import * as THREE from 'three';
import { SUN_DIR, SUN_COLOR } from './layout.js';

// ---------------------------------------------------------------------------
// 空气透视：远处的东西变淡、变蓝，朝太阳方向的空气发暖光。
// 直接替换 three 的雾代码块，所有内置材质共用这一套。
// 透过率按波长不同（蓝光散射得多），所以远处的城市会偏蓝。
// ---------------------------------------------------------------------------

const f = ( v ) => v.toFixed( 5 );

export const ATMOS = /* glsl */ `
	const vec3 SUN_DIR = vec3( ${ f( SUN_DIR.x ) }, ${ f( SUN_DIR.y ) }, ${ f( SUN_DIR.z ) } );
	const vec3 SUN_COLOR = vec3( ${ f( SUN_COLOR.r ) }, ${ f( SUN_COLOR.g ) }, ${ f( SUN_COLOR.b ) } );
	const vec3 HAZE = vec3( 0.56, 0.66, 0.80 );
	const vec3 HAZE_SUN = vec3( 1.0, 0.80, 0.56 );
	const vec3 EXTINCT = vec3( 0.80, 0.95, 1.20 );
	const float ATM_DENSITY = 0.00019;
	const float ATM_SCALE_H = 650.0;

	vec3 atmosOptical( vec3 wp ) {
		vec3 ro = cameraPosition;
		vec3 rd = wp - ro;
		float dist = length( rd );
		rd /= max( dist, 1e-4 );
		float k = rd.y / ATM_SCALE_H;
		float integ = abs( k * dist ) < 1e-4 ? dist : ( 1.0 - exp( - k * dist ) ) / k;
		float depth = ATM_DENSITY * exp( - max( ro.y, 0.0 ) / ATM_SCALE_H ) * max( integ, 0.0 );
		return depth * EXTINCT;
	}

	vec3 atmosInscatter( vec3 rd ) {
		float s = clamp( dot( rd, SUN_DIR ), 0.0, 1.0 );
		return mix( HAZE, HAZE_SUN, pow( s, 6.0 ) * 0.6 );
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
