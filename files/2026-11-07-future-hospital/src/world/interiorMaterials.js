import * as THREE from 'three';
import { NOISE } from '../render/glsl.js';

// ---------------------------------------------------------------------------
// 室内材质。地面三种：水磨石（大厅）、PVC 卷材（诊区）、木地板（康复）。
// 都在着色器里按世界坐标画（水磨石的彩色碎石、卷材的接缝、木板的纹理），不用贴图。
// 室内材质的环境光强度调低：屋里看不到天，天空的环境光会让房间发平发灰。
// ---------------------------------------------------------------------------

function patch( m, key, frag ) {

	m.onBeforeCompile = ( shader ) => {

		shader.vertexShader = shader.vertexShader.replace( '#include <common>', '#include <common>\nvarying vec3 vIW;' )
			.replace( '#include <fog_vertex>', `#include <fog_vertex>
				vec4 iw = vec4( transformed, 1.0 );
				#ifdef USE_INSTANCING
					iw = instanceMatrix * iw;
				#endif
				vIW = ( modelMatrix * iw ).xyz;` );
		shader.fragmentShader = shader.fragmentShader.replace( '#include <common>', `#include <common>\nvarying vec3 vIW;\n${ NOISE }` )
			.replace( '#include <color_fragment>', `#include <color_fragment>\n${ frag }` );

	};

	m.customProgramCacheKey = () => key;
	return m;

}

export function createInteriorMaterials( leafMat ) {

	const env = 0.35;
	const std = ( o ) => new THREE.MeshStandardMaterial( { envMapIntensity: env, ...o } );
	const M = {
		terrazzo: patch( std( { color: 0xeee9e0, roughness: 0.3, metalness: 0 } ), 'terrazzo', `
			{
				vec2 p = vIW.xz;
				float chips = 0.0;
				vec3 cc = vec3( 0.0 );
				for ( int i = 0; i < 3; i ++ ) {
					// 碎石 1~4 厘米；远处一个格子不到一个像素时淡掉，免得闪
					float sc = 7.0 + float( i ) * 7.0;
					vec2 g = floor( p * sc ), f = fract( p * sc );
					vec2 o = 0.25 + 0.5 * hash22( g + float( i ) * 17.0 );
					float d = length( f - o );
					float r = 0.12 + 0.16 * hash12( g + 3.1 );
					float px = length( fwidth( p * sc ) );
					float aa = max( 0.04, px * 1.2 );
					float m = smoothstep( r, r - aa, d ) * step( 0.45, hash12( g + 9.7 ) ) * ( 1.0 - smoothstep( 0.25, 0.6, px ) );
					vec3 col = mix( vec3( 0.55, 0.62, 0.6 ), vec3( 0.86, 0.55, 0.42 ), hash12( g + 5.3 ) );
					col = mix( col, vec3( 0.35, 0.38, 0.4 ), step( 0.75, hash12( g + 1.7 ) ) );
					cc = mix( cc, col, m * ( 1.0 - chips ) );
					chips = max( chips, m );
				}
				diffuseColor.rgb = mix( diffuseColor.rgb * ( 0.96 + 0.06 * vnoise( p * 0.7 ) ), cc, chips * 0.75 );
				// 每 3 米一道铜色分隔条
				vec2 gl = abs( fract( p / 3.0 + 0.5 ) - 0.5 ) * 3.0;
				float line = 1.0 - smoothstep( 0.012, 0.025, min( gl.x, gl.y ) );
				diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.62, 0.46, 0.3 ), line );
			}` ),
		vinyl: patch( std( { color: 0xd9e4df, roughness: 0.32, metalness: 0 } ), 'vinyl', `
			{
				vec2 p = vIW.xz;
				diffuseColor.rgb *= 0.95 + 0.07 * fbm3( p * 1.3 ) + 0.03 * vnoise( p * 9.0 );
				float seam = 1.0 - smoothstep( 0.006, 0.014, abs( fract( p.x / 2.0 ) - 0.5 ) * 2.0 * 1.0 - 0.995 + 0.006 );
				diffuseColor.rgb *= 1.0 - 0.06 * ( 1.0 - smoothstep( 0.0, 0.02, abs( fract( p.x / 2.0 ) - 0.002 ) ) );
			}` ),
		vinylBlue: patch( std( { color: 0xb9cede, roughness: 0.3, metalness: 0 } ), 'vinylBlue', `
			{ diffuseColor.rgb *= 0.94 + 0.08 * fbm3( vIW.xz * 1.1 ) + 0.03 * vnoise( vIW.xz * 8.0 ); }` ),
		vinylKids: patch( std( { color: 0xf2e6c8, roughness: 0.35, metalness: 0 } ), 'vinylKids', `
			{
				vec2 g = floor( vIW.xz / 1.5 );
				float h = hash12( g );
				vec3 c = h < 0.25 ? vec3( 1.0, 0.78, 0.55 ) : h < 0.5 ? vec3( 0.7, 0.9, 0.85 ) : h < 0.75 ? vec3( 1.0, 0.92, 0.6 ) : vec3( 0.95, 0.95, 0.92 );
				diffuseColor.rgb *= c;
			}` ),
		woodFloor: patch( std( { color: 0xc89a6c, roughness: 0.42, metalness: 0 } ), 'woodFloor', `
			{
				vec2 p = vIW.xz;
				float plank = floor( p.x / 0.18 );
				float off = hash11( plank ) * 7.0;
				float row = floor( ( p.y + off ) / 1.8 );
				float h = hash12( vec2( plank, row ) );
				float grain = vnoise( vec2( p.x * 40.0, ( p.y + off ) * 2.0 ) + h * 30.0 );
				diffuseColor.rgb *= ( 0.82 + 0.25 * h ) * ( 0.9 + 0.15 * grain );
				float gap = smoothstep( 0.0, 0.01, abs( fract( p.x / 0.18 ) - 0.0 ) ) * smoothstep( 0.0, 0.01, abs( fract( ( p.y + off ) / 1.8 ) ) );
				diffuseColor.rgb *= mix( 0.7, 1.0, gap );
			}` ),
		ceiling: std( { color: 0xf3f2ef, roughness: 0.85 } ),
		// 广场铺装：浅灰石板，错缝，偶尔一块深色
		paving: patch( new THREE.MeshStandardMaterial( { color: 0xd6d2ca, roughness: 0.75, envMapIntensity: 0.8 } ), 'paving', `
			{
				vec2 p = vIW.xz / vec2( 1.2, 0.6 );
				p.x += step( 1.0, mod( floor( p.y ), 2.0 ) ) * 0.5;
				vec2 g = floor( p ), f = fract( p );
				float h = hash12( g );
				float edge = smoothstep( 0.0, 0.03, f.x ) * smoothstep( 1.0, 0.97, f.x ) * smoothstep( 0.0, 0.06, f.y ) * smoothstep( 1.0, 0.94, f.y );
				diffuseColor.rgb *= ( 0.86 + 0.18 * h ) * mix( 0.62, 1.0, edge ) * ( 0.95 + 0.08 * vnoise( vIW.xz * 3.0 ) );
				diffuseColor.rgb *= mix( vec3( 1.0 ), vec3( 0.78, 0.8, 0.82 ), step( 0.93, h ) );
			}` ),
		wall: patch( std( { color: 0xf1efea, roughness: 0.7 } ), 'iwall', `{ diffuseColor.rgb *= 0.97 + 0.05 * vnoise( vIW.xy * 0.8 + vIW.zy * 0.8 ); }` ),
		wallSage: std( { color: 0xa9bba3, roughness: 0.75 } ),
		wood: patch( std( { color: 0xc7996b, roughness: 0.45 } ), 'iwood', `
			{
				vec3 p = vIW;
				float g = vnoise( vec2( ( p.x + p.z ) * 30.0, p.y * 3.0 ) ) * 0.6 + vnoise( vec2( ( p.x + p.z ) * 6.0, p.y * 0.8 ) ) * 0.4;
				diffuseColor.rgb *= 0.85 + 0.25 * g;
			}` ),
		woodSlat: patch( std( { color: 0xb88a5c, roughness: 0.5 } ), 'islat', `
			{
				float s = fract( ( vIW.x + vIW.z ) / 0.12 );
				diffuseColor.rgb *= mix( 0.55, 1.0, smoothstep( 0.0, 0.18, s ) * smoothstep( 1.0, 0.82, s ) );
			}` ),
		metal: std( { color: 0xc9ccce, roughness: 0.32, metalness: 0.85, envMapIntensity: 0.8 } ),
		metalDark: std( { color: 0x33373b, roughness: 0.45, metalness: 0.6, envMapIntensity: 0.6 } ),
		chrome: std( { color: 0xe6e8ea, roughness: 0.12, metalness: 1.0, envMapIntensity: 1.0 } ),
		plasticWhite: std( { color: 0xf3f3f0, roughness: 0.3 } ),
		accentTeal: std( { color: 0x2f9e95, roughness: 0.35 } ),
		accentOrange: std( { color: 0xf08a3c, roughness: 0.4 } ),
		accentYellow: std( { color: 0xf3c94b, roughness: 0.4 } ),
		fabricTeal: std( { color: 0x3c8f8a, roughness: 0.85 } ),
		fabricOrange: std( { color: 0xd9733a, roughness: 0.85 } ),
		rubber: std( { color: 0x1e2022, roughness: 0.9 } ),
		mat: std( { color: 0x4f7fa8, roughness: 0.9 } ),
		soil: std( { color: 0x3a2e24, roughness: 1 } ),
		bark: std( { color: 0x5a4636, roughness: 0.9 } ),
		boxes: std( { color: 0xffffff, roughness: 0.55, vertexColors: true } ),
		liquidRed: std( { color: 0xc93a3a, roughness: 0.15, emissive: 0x400808 } ),
		liquidBlue: std( { color: 0x3a7ac9, roughness: 0.15, emissive: 0x081840 } ),
		glassFrost: new THREE.MeshStandardMaterial( { color: 0xdfe9ee, roughness: 0.4, transparent: true, opacity: 0.55, depthWrite: false, envMapIntensity: 0.5 } ),
		glassPart: new THREE.MeshStandardMaterial( { color: 0xcfe3e6, roughness: 0.05, transparent: true, opacity: 0.18, depthWrite: false, envMapIntensity: 0.9, side: THREE.DoubleSide } ),
		lightPanel: new THREE.MeshStandardMaterial( { color: 0xffffff, emissive: 0xfff4e6, emissiveIntensity: 2.5, roughness: 1 } ),
		screenBlue: new THREE.MeshStandardMaterial( { color: 0x0a1a2a, emissive: 0x3a8fd8, emissiveIntensity: 1.6, roughness: 0.2 } ),
		vendGlow: new THREE.MeshStandardMaterial( { color: 0x111111, emissive: 0xbfe8ff, emissiveIntensity: 2.4, roughness: 0.2 } ),
		guideGreen: new THREE.MeshStandardMaterial( { color: 0x2fb36a, emissive: 0x1d8a4c, emissiveIntensity: 0.6, roughness: 0.3 } ),
		guideBlue: new THREE.MeshStandardMaterial( { color: 0x3a8be0, emissive: 0x1d4c8a, emissiveIntensity: 0.6, roughness: 0.3 } ),
		guideOrange: new THREE.MeshStandardMaterial( { color: 0xf08a3c, emissive: 0x8a3d10, emissiveIntensity: 0.6, roughness: 0.3 } ),
		leaf: leafMat
	};
	return M;

}
