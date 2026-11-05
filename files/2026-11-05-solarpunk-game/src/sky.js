import * as THREE from 'three';

// 天空：一张真实拍摄的天空照片（Poly Haven，CC0），裁掉了地平线以下的部分。
// 照片的上边缘是天顶（仰角 90°），下边缘是仰角 -8°。
export const SKY_LOW_DEG = - 8;

export function createSky( texture, U ) {

	texture.colorSpace = THREE.SRGBColorSpace;
	texture.wrapS = THREE.RepeatWrapping;
	texture.minFilter = THREE.LinearMipmapLinearFilter;
	texture.anisotropy = 4;

	const mat = new THREE.ShaderMaterial( {
		name: 'SkyPhoto',
		side: THREE.BackSide,
		depthWrite: false,
		depthTest: false,
		uniforms: {
			uSky: { value: texture },
			uRot: U.uSkyRot,
			uGain: U.uSkyGain
		},
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
			varying vec3 vDir;
			void main() {
				vec3 d = normalize( vDir );
				float u = atan( d.z, d.x ) * 0.15915494 + 0.5 + uRot;
				float e = degrees( asin( clamp( d.y, - 1.0, 1.0 ) ) );
				float v = clamp( ( e - ( ${ SKY_LOW_DEG.toFixed( 1 ) } ) ) / ( 90.0 - ( ${ SKY_LOW_DEG.toFixed( 1 ) } ) ), 0.002, 0.999 );
				// 天顶附近经线汇聚，用梯度控制 mip 级别，避免接缝处出现一条线
				vec2 uv = vec2( u, v );
				vec3 c = textureGrad( uSky, uv, dFdx( vec2( fract( u + 0.5 ), v ) ), dFdy( vec2( fract( u + 0.5 ), v ) ) ).rgb;
				// 输出前会做 Neutral 色调映射，它会先把三个通道都减掉约 0.04，这里提前补上
				c = c * uGain + 0.04;
				gl_FragColor = vec4( c, 1.0 );
			}
		`
	} );

	const mesh = new THREE.Mesh( new THREE.SphereGeometry( 1, 64, 32 ), mat );
	mesh.frustumCulled = false;
	mesh.renderOrder = - 100;
	// 天空球必须一直以相机为中心（主循环里每帧挪过去），方向才对
	mesh.scale.setScalar( 1000 );
	return mesh;

}
