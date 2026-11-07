import * as THREE from 'three';
import { SUN_DIR, SUN_COLOR } from '../config.js';
import { ATMOS } from './atmosphere.js';

// ---------------------------------------------------------------------------
// 天空：Poly Haven 的 syferfontein_1d_clear_puresky（CC0，晴天日出，太阳贴着地平线）。
// 照片按太阳的方位转过来，让照片里的辉光落在 SUN_DIR；太阳圆盘用解析式画，比 1k 照片里的清楚。
// 同一个着色器也用来生成环境光贴图（envMode = 1 时去掉太阳圆盘并限制最大亮度，避免环境贴图里出现极亮的点）。
// ---------------------------------------------------------------------------

// 照片里太阳的位置：u = 0.600（等距柱状投影的横坐标）
const PHOTO_SUN_U = 0.600;

export function createSky( hdr ) {

	hdr.mapping = THREE.EquirectangularReflectionMapping;
	hdr.minFilter = THREE.LinearFilter;
	hdr.magFilter = THREE.LinearFilter;
	hdr.generateMipmaps = false;
	const sunU = Math.atan2( SUN_DIR.z, SUN_DIR.x ) / ( 2 * Math.PI ) + 0.5;
	const uniforms = {
		uSky: { value: hdr },
		uRot: { value: PHOTO_SUN_U - sunU },
		uGain: { value: 1.0 },
		uEnvMode: { value: 0 },
		uSunGain: { value: 1.0 }
	};
	const mat = new THREE.ShaderMaterial( {
		name: 'SkyHDR',
		side: THREE.BackSide,
		depthWrite: false,
		depthTest: false,
		uniforms,
		vertexShader: /* glsl */ `
			varying vec3 vDir;
			void main() {
				vDir = position;
				vec4 p = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				gl_Position = p.xyww;
			}
		`,
		fragmentShader: /* glsl */ `
			uniform sampler2D uSky;
			uniform float uRot;
			uniform float uGain;
			uniform float uEnvMode;
			uniform float uSunGain;
			varying vec3 vDir;
			${ ATMOS }
			vec3 skyPhoto( vec3 d ) {
				float u = atan( d.z, d.x ) * 0.15915494 + 0.5 + uRot;
				float v = asin( clamp( d.y, - 1.0, 1.0 ) ) * 0.31830989 + 0.5;
				return texture2D( uSky, vec2( fract( u ), v ) ).rgb;
			}
			void main() {
				vec3 d = normalize( vDir );
				// 地平线以下：照片里没有内容，用地平线的颜色往下延伸（地形会挡住大部分）
				vec3 dd = d;
				dd.y = max( dd.y, 0.004 );
				dd = normalize( dd );
				vec3 c = skyPhoto( dd );
				// 照片的太阳圆盘只有几个像素、亮度极高，先压住，再用解析式画一个干净的圆盘
				c = min( c, vec3( 40.0 ) );
				// 太阳附近的天空亮度压缩一下（否则泛光会把半个画面糊成白色）
				float lc = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
				c /= 1.0 + max( lc - 2.5, 0.0 ) * 0.35;
				float s = dot( d, SUN_DIR );
				// 像偏振镜：离太阳越远、仰角越高，天越蓝越深（参考图左上角是深蓝）
				// 按离太阳的角度算（开场长焦镜头只有 ±17°，所以过渡要陡：5° 以内不变，35° 以外最蓝）
				float ang = acos( clamp( s, - 1.0, 1.0 ) ) * 57.29578;
				float away = smoothstep( 3.0, 30.0, ang );
				c = mix( c, c * vec3( 0.44, 0.64, 1.16 ), away * smoothstep( 0.0, 0.14, d.y ) * 0.95 );
				vec3 sunCol = SUN_COLOR * vec3( 1.0, 0.92, 0.80 );
				if ( uEnvMode < 0.5 ) {
					float disk = smoothstep( 0.99994, 0.99998, s );
					c += sunCol * disk * 60.0 * uSunGain;
					c += sunCol * pow( max( s, 0.0 ), 900.0 ) * 6.0 * uSunGain;
				}
				// 地平线附近叠一层和场景雾一致的霾，让远山和天空接得上
				float h = clamp( d.y, 0.0, 1.0 );
				vec3 haze = atmosInscatter( d );
				c = mix( c, haze, exp( - h * 45.0 ) * 0.35 );
				if ( d.y < 0.0 ) c = mix( c, haze * 0.8, clamp( - d.y * 12.0, 0.0, 1.0 ) );
				c *= uGain;
				if ( uEnvMode > 0.5 ) c = min( c, vec3( 12.0 ) );
				gl_FragColor = vec4( c, 1.0 );
			}
		`
	} );
	const mesh = new THREE.Mesh( new THREE.SphereGeometry( 1, 64, 32 ), mat );
	mesh.frustumCulled = false;
	mesh.renderOrder = - 100;
	mesh.scale.setScalar( 5000 );

	// 环境光贴图：用同一个着色器渲染一个立方体，再做 PMREM
	function buildEnv( renderer ) {

		const scene = new THREE.Scene();
		const m2 = mat.clone();
		m2.uniforms = THREE.UniformsUtils.clone( uniforms );
		m2.uniforms.uSky.value = hdr;
		m2.uniforms.uEnvMode.value = 1;
		const s = new THREE.Mesh( new THREE.SphereGeometry( 1, 64, 32 ), m2 );
		s.scale.setScalar( 100 );
		scene.add( s );
		const pmrem = new THREE.PMREMGenerator( renderer );
		const rt = pmrem.fromScene( scene, 0, 0.1, 1000 );
		pmrem.dispose();
		m2.dispose();
		return rt.texture;

	}

	return { mesh, uniforms, buildEnv };

}
