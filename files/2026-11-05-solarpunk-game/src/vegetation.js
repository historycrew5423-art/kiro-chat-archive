import * as THREE from 'three';
import { NOISE } from './glsl.js';

// ---------------------------------------------------------------------------
// 近处的树：树干和树枝是圆柱，树叶是“叶簇面片”——每片面片贴一簇照片叶子（Poly Haven，CC0）。
// 面片的法线统一改成从树冠中心向外，这样整团树叶的明暗是连续的，不会一片片乱闪。
// 背光时叶子透光发亮。
// ---------------------------------------------------------------------------

export class Foliage {

	constructor( leafTex ) {

		this.leafTex = leafTex;
		this.cards = [];
		this.wood = [];

	}

	// 一张叶簇面片：位置、大小、朝向、外法线（世界坐标）、用哪一簇、颜色
	card( p, size, quat, outward, atlas, tint ) {

		this.cards.push( { p, size, quat, outward, atlas, tint } );

	}

	branch( a, b, r0, r1 ) {

		this.wood.push( { a, b, r0, r1 } );

	}

	// 一团叶子：在球形范围里撒 n 片
	clump( center, radius, n, rng, opts = {} ) {

		const tint = opts.tint || new THREE.Color( 1, 1, 1 );
		const flat = opts.flat ?? 0.75;
		const crown = opts.crown || center;
		for ( let i = 0; i < n; i ++ ) {

			const d = new THREE.Vector3( rng() * 2 - 1, ( rng() * 2 - 1 ) * flat, rng() * 2 - 1 );
			if ( d.lengthSq() > 1 ) {

				i --;
				continue;

			}

			const p = center.clone().addScaledVector( d, radius );
			const out = p.clone().sub( crown ).normalize();
			out.y += 0.35;
			out.normalize();
			const q = new THREE.Quaternion().setFromEuler( new THREE.Euler( rng() * Math.PI, rng() * Math.PI * 2, rng() * Math.PI ) );
			const s = ( opts.size || 2.2 ) * ( 0.7 + rng() * 0.6 );
			const t = 0.8 + rng() * 0.4;
			this.card( p, s, q, out, rng() < 0.5 ? 0 : 1, new THREE.Color( tint.r * t, tint.g * t, tint.b * t ) );

		}

	}

	// 一整棵树：树干 + 几根主枝，每根枝的末端和中段长一团叶子
	tree( base, height, rng, opts = {} ) {

		const lean = opts.lean || new THREE.Vector3( ( rng() - 0.5 ) * 0.15, 1, ( rng() - 0.5 ) * 0.15 ).normalize();
		const top = base.clone().addScaledVector( lean, height * 0.62 );
		const trunkR = opts.trunkR || height * 0.028;
		this.branch( base.clone().setY( base.y - 1 ), top, trunkR, trunkR * 0.55 );
		const crownC = base.clone().addScaledVector( lean, height * 0.72 );
		const crownR = opts.crownR || height * 0.36;
		const nb = opts.branches || 6;
		const tint = opts.tint;
		for ( let i = 0; i < nb; i ++ ) {

			const a = ( i / nb ) * Math.PI * 2 + rng() * 0.8;
			const up = 0.25 + rng() * 0.55;
			const dir = new THREE.Vector3( Math.cos( a ), up, Math.sin( a ) ).normalize();
			const from = base.clone().addScaledVector( lean, height * ( 0.4 + rng() * 0.25 ) );
			const len = crownR * ( 0.75 + rng() * 0.45 );
			const end = from.clone().addScaledVector( dir, len );
			this.branch( from, end, trunkR * 0.45, trunkR * 0.12 );
			const mid = from.clone().lerp( end, 0.55 );
			this.clump( end, crownR * 0.42, opts.cardsPerClump || 26, rng, { tint, crown: crownC, size: opts.cardSize } );
			this.clump( mid, crownR * 0.3, Math.round( ( opts.cardsPerClump || 26 ) * 0.5 ), rng, { tint, crown: crownC, size: opts.cardSize } );

		}

		this.clump( top.clone().addScaledVector( lean, crownR * 0.2 ), crownR * 0.55, ( opts.cardsPerClump || 26 ) * 1.4 | 0, rng, { tint, crown: crownC, size: opts.cardSize } );

	}

	bush( center, radius, rng, opts = {} ) {

		this.clump( center.clone().setY( center.y + radius * 0.45 ), radius, opts.n || Math.round( radius * radius * 3 + 6 ), rng, { flat: 0.55, crown: center.clone().setY( center.y - radius * 0.3 ), size: opts.size || Math.min( 2.2, radius * 0.9 ), tint: opts.tint } );

	}

	build( opts = {} ) {

		const group = new THREE.Group();

		// ---- 树叶 ----
		const n = this.cards.length;
		const geo = new THREE.InstancedBufferGeometry();
		const base = new THREE.PlaneGeometry( 1, 1 );
		geo.setIndex( base.index );
		geo.setAttribute( 'position', base.attributes.position );
		geo.setAttribute( 'normal', base.attributes.normal );
		geo.setAttribute( 'uv', base.attributes.uv );
		const atlas = new Float32Array( n );
		const outw = new Float32Array( n * 3 );
		this.cards.forEach( ( c, i ) => {

			atlas[ i ] = c.atlas;
			outw.set( [ c.outward.x, c.outward.y, c.outward.z ], i * 3 );

		} );
		geo.setAttribute( 'aAtlas', new THREE.InstancedBufferAttribute( atlas, 1 ) );
		geo.setAttribute( 'aOut', new THREE.InstancedBufferAttribute( outw, 3 ) );

		const mat = new THREE.MeshStandardMaterial( {
			map: this.leafTex, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.75, metalness: 0,
			color: 0xffffff
		} );
		const uvInject = /* glsl */ `
			#include <uv_vertex>
			#ifdef USE_MAP
				vMapUv = vec2( vMapUv.x * 0.5 + aAtlas * 0.5, vMapUv.y );
			#endif
		`;
		mat.onBeforeCompile = ( sh ) => {

			sh.uniforms.uTime = opts.uTime || { value: 0 };
			sh.vertexShader = sh.vertexShader
				.replace( '#include <common>', '#include <common>\nattribute float aAtlas;\nattribute vec3 aOut;\nuniform float uTime;\nvarying vec3 vOutW;' )
				.replace( '#include <uv_vertex>', uvInject )
				.replace( '#include <defaultnormal_vertex>', /* glsl */ `
					#include <defaultnormal_vertex>
					// 法线：面片自身法线和“树冠向外”的方向混合
					vOutW = normalize( aOut );
					transformedNormal = normalize( mix( transformedNormal, mat3( viewMatrix ) * vOutW, 0.8 ) );
				` )
				.replace( '#include <begin_vertex>', /* glsl */ `
					#include <begin_vertex>
					// 风：每片面片按自己的位置轻轻摆动
					vec3 ip = vec3( instanceMatrix[ 3 ] );
					float wv = sin( uTime * 1.3 + ip.x * 0.31 + ip.z * 0.27 ) * 0.5 + sin( uTime * 2.7 + ip.y * 0.9 ) * 0.25;
					transformed.xz += vec2( wv, wv * 0.6 ) * 0.04 * ( position.y + 0.5 );
				` );
			sh.fragmentShader = sh.fragmentShader
				.replace( '#include <common>', `#include <common>\nvarying vec3 vOutW;\n${ NOISE }` )
				// 双面材质会把背面的法线翻过来；这里的法线已经统一朝外，再翻回来
				.replace( '#include <normal_fragment_begin>', '#include <normal_fragment_begin>\n#ifdef DOUBLE_SIDED\nnormal *= faceDirection;\n#endif' )
				.replace( '#include <opaque_fragment>', /* glsl */ `
					{
						// 背光透光
						vec3 V = normalize( cameraPosition - vFogWorldPos );
						float back = pow( clamp( dot( - V, SUN_DIR ), 0.0, 1.0 ), 2.0 );
						float side = clamp( dot( normalize( vOutW ), SUN_DIR ) * 0.5 + 0.5, 0.0, 1.0 );
						outgoingLight += diffuseColor.rgb * SUN_COLOR * ( back * 0.9 + 0.22 ) * side + diffuseColor.rgb * vec3( 0.05, 0.07, 0.08 );
					}
					#include <opaque_fragment>
				` );

		};

		mat.customProgramCacheKey = () => 'leafcards';
		const depth = new THREE.MeshDepthMaterial( { depthPacking: THREE.RGBADepthPacking, map: this.leafTex, alphaTest: 0.45, side: THREE.DoubleSide } );
		depth.onBeforeCompile = ( sh ) => {

			sh.vertexShader = sh.vertexShader
				.replace( '#include <common>', '#include <common>\nattribute float aAtlas;' )
				.replace( '#include <uv_vertex>', uvInject );

		};

		depth.customProgramCacheKey = () => 'leafdepth';
		const mesh = new THREE.InstancedMesh( geo, mat, n );
		const m = new THREE.Matrix4();
		this.cards.forEach( ( c, i ) => {

			m.compose( c.p, c.quat, new THREE.Vector3( c.size, c.size, c.size ) );
			mesh.setMatrixAt( i, m );
			mesh.setColorAt( i, c.tint );

		} );
		mesh.customDepthMaterial = depth;
		mesh.castShadow = opts.castShadow !== false;
		mesh.receiveShadow = true;
		mesh.computeBoundingSphere();
		group.add( mesh );

		// ---- 树干、树枝 ----
		if ( this.wood.length ) {

			const wgeo = new THREE.CylinderGeometry( 1, 1, 1, 7, 1 );
			wgeo.translate( 0, 0.5, 0 );
			const wmat = new THREE.MeshStandardMaterial( { color: 0x4a3f33, roughness: 0.9 } );
			const wm = new THREE.InstancedMesh( wgeo, wmat, this.wood.length );
			const up = new THREE.Vector3( 0, 1, 0 );
			this.wood.forEach( ( w, i ) => {

				const d = w.b.clone().sub( w.a );
				const len = d.length();
				const q = new THREE.Quaternion().setFromUnitVectors( up, d.normalize() );
				const r = ( w.r0 + w.r1 ) / 2;
				m.compose( w.a, q, new THREE.Vector3( r, len, r ) );
				wm.setMatrixAt( i, m );

			} );
			wm.castShadow = true;
			wm.receiveShadow = true;
			wm.computeBoundingSphere();
			group.add( wm );

		}

		group.userData.cards = n;
		return group;

	}

}

// 从平台边缘垂下来的藤蔓：一串竖着的叶簇面片
export function hangingVines( foliage, points, rng, opts = {} ) {

	for ( const p of points ) {

		const len = ( opts.len || 30 ) * ( 0.4 + rng() * 0.8 );
		const steps = Math.max( 2, Math.round( len / 2.2 ) );
		for ( let i = 0; i < steps; i ++ ) {

			const y = p.y - i * ( len / steps );
			const q = new THREE.Quaternion().setFromEuler( new THREE.Euler( ( rng() - 0.5 ) * 0.6, rng() * Math.PI * 2, Math.PI + ( rng() - 0.5 ) * 0.6 ) );
			const out = p.clone().setY( 0 ).sub( opts.center.clone().setY( 0 ) ).normalize();
			const s = ( opts.size || 2.6 ) * ( 1 - 0.4 * i / steps ) * ( 0.8 + rng() * 0.4 );
			foliage.card( new THREE.Vector3( p.x + ( rng() - 0.5 ) * 1.2, y, p.z + ( rng() - 0.5 ) * 1.2 ), s, q, out, rng() < 0.5 ? 0 : 1, new THREE.Color( 0.75, 0.85, 0.7 ).multiplyScalar( 0.8 + rng() * 0.3 ) );

		}

	}

}
