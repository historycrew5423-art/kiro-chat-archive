import * as THREE from 'three';
import { ATMOS } from './atmosphere.js';

// 在拱门洞口附近盘旋的一群鸟：每只是两片三角形翅膀，在顶点着色器里扇动、沿路径飞
export function createBirds( U, rng, count ) {

	const wing = new Float32Array( [
		0, 0, 0.6, - 1, 0.05, - 0.2, 0, 0, - 0.5,
		0, 0, 0.6, 0, 0, - 0.5, 1, 0.05, - 0.2
	] );
	const geo = new THREE.InstancedBufferGeometry();
	geo.setAttribute( 'position', new THREE.BufferAttribute( wing, 3 ) );
	const seed = new Float32Array( count * 4 );
	for ( let i = 0; i < count; i ++ ) seed.set( [ rng(), rng(), rng(), rng() ], i * 4 );
	geo.setAttribute( 'aSeed', new THREE.InstancedBufferAttribute( seed, 4 ) );
	geo.instanceCount = count;

	const mat = new THREE.ShaderMaterial( {
		name: 'Birds',
		side: THREE.DoubleSide,
		uniforms: { uTime: U.uTime },
		vertexShader: /* glsl */ `
			attribute vec4 aSeed;
			uniform float uTime;
			varying vec3 vWorld;
			void main() {
				float t = uTime * ( 0.05 + aSeed.x * 0.02 ) + aSeed.y * 6.283;
				vec3 c = vec3( 25.0, 175.0, - 560.0 );
				vec3 off = vec3( sin( t ) * 75.0, sin( t * 2.0 + aSeed.z * 3.0 ) * 18.0, cos( t ) * 45.0 );
				off += ( aSeed.xyz - 0.5 ) * vec3( 50.0, 25.0, 40.0 );
				vec3 vel = normalize( vec3( cos( t ) * 75.0, cos( t * 2.0 + aSeed.z * 3.0 ) * 36.0, - sin( t ) * 45.0 ) );
				float flap = sin( uTime * ( 9.0 + aSeed.w * 4.0 ) + aSeed.w * 20.0 );
				vec3 p = position;
				p.y += abs( p.x ) * flap * 0.7;
				float s = 1.8 + aSeed.w * 1.2;
				vec3 fwd = vel;
				vec3 side = normalize( cross( vec3( 0.0, 1.0, 0.0 ), fwd ) );
				vec3 upv = cross( fwd, side );
				vec3 wp = c + off + ( side * p.x + upv * p.y + fwd * p.z ) * s;
				vWorld = wp;
				gl_Position = projectionMatrix * viewMatrix * vec4( wp, 1.0 );
			}
		`,
		fragmentShader: /* glsl */ `
			varying vec3 vWorld;
			${ ATMOS }
			void main() {
				gl_FragColor = vec4( atmos( vec3( 0.02, 0.018, 0.015 ), vWorld ), 1.0 );
			}
		`
	} );

	const mesh = new THREE.Mesh( geo, mat );
	mesh.frustumCulled = false;
	return mesh;

}
