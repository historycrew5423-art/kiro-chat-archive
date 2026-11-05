import * as THREE from 'three';

// ---------------------------------------------------------------------------
// 主角：用户提供的袋鼠火枪手模型（Tripo 生成）。模型是一整块静态网格，没有骨骼。
// 这里按身体部位自动算出蒙皮权重，绑一套 11 根骨头的简单骨架，再用代码做跳跃动画。
// 模型原始高度约 0.98，面朝 +Z。
// ---------------------------------------------------------------------------

const sm = ( a, b, x ) => {

	const t = Math.min( 1, Math.max( 0, ( x - a ) / ( b - a ) ) );
	return t * t * ( 3 - 2 * t );

};

// 骨骼：名字、父骨骼、静止时的位置（模型坐标）
const BONES = [
	[ 'root', - 1, [ 0, 0, 0 ] ],
	[ 'hips', 0, [ 0, 0.45, 0 ] ],
	[ 'chest', 1, [ 0, 0.60, 0 ] ],
	[ 'head', 2, [ 0, 0.71, 0.0 ] ],
	[ 'thighL', 1, [ - 0.075, 0.42, 0 ] ],
	[ 'shinL', 4, [ - 0.08, 0.21, 0.01 ] ],
	[ 'thighR', 1, [ 0.075, 0.42, 0 ] ],
	[ 'shinR', 6, [ 0.08, 0.21, 0.01 ] ],
	[ 'armL', 2, [ - 0.165, 0.645, 0 ] ],
	[ 'armR', 2, [ 0.165, 0.645, 0 ] ],
	[ 'cape', 2, [ 0, 0.67, - 0.10 ] ]
];

function computeWeights( pos ) {

	const n = pos.count;
	const idx = new Uint16Array( n * 4 );
	const wts = new Float32Array( n * 4 );
	const w = new Float32Array( BONES.length );
	for ( let i = 0; i < n; i ++ ) {

		const x = pos.getX( i ), y = pos.getY( i ), z = pos.getZ( i );
		const ax = Math.abs( x );
		w.fill( 0 );
		// 腿：腰带以下、身体中线两侧、不在披风后面
		const leg = sm( 0.47, 0.37, y ) * ( 1 - sm( 0.145, 0.175, ax ) ) * sm( - 0.135, - 0.09, z );
		const shin = sm( 0.25, 0.17, y );
		const left = sm( 0.015, - 0.015, x );
		w[ 4 ] = leg * ( 1 - shin ) * left;
		w[ 5 ] = leg * shin * left;
		w[ 6 ] = leg * ( 1 - shin ) * ( 1 - left );
		w[ 7 ] = leg * shin * ( 1 - left );
		let rest = 1 - leg;
		// 手臂：肩膀到手，身体两侧
		const arm = sm( 0.13, 0.175, ax ) * sm( 0.33, 0.42, y ) * sm( 0.73, 0.64, y ) * sm( - 0.12, - 0.07, z ) * rest;
		if ( x < 0 ) w[ 8 ] = arm;
		else w[ 9 ] = arm;
		rest -= arm;
		// 披风：背后、肩膀以下
		const cape = sm( - 0.075, - 0.125, z ) * sm( 0.69, 0.6, y ) * rest;
		w[ 10 ] = cape;
		rest -= cape;
		// 头
		const head = sm( 0.68, 0.74, y ) * rest;
		w[ 3 ] = head;
		rest -= head;
		const chest = sm( 0.5, 0.6, y );
		w[ 2 ] = rest * chest;
		w[ 1 ] = rest * ( 1 - chest );
		// 取最大的 4 个
		const order = [ ...w.keys() ].sort( ( a, b ) => w[ b ] - w[ a ] ).slice( 0, 4 );
		let sum = 0;
		for ( const k of order ) sum += w[ k ];
		order.forEach( ( k, j ) => {

			idx[ i * 4 + j ] = k;
			wts[ i * 4 + j ] = sum > 0 ? w[ k ] / sum : ( j === 0 ? 1 : 0 );

		} );

	}

	return { idx, wts };

}

export function createCharacter( gltf, height = 1.6 ) {

	let src = null;
	gltf.scene.traverse( ( o ) => {

		if ( o.isMesh && ! src ) src = o;

	} );
	const geo = src.geometry.clone();
	geo.applyMatrix4( src.matrixWorld );
	const { idx, wts } = computeWeights( geo.attributes.position );
	geo.setAttribute( 'skinIndex', new THREE.Uint16BufferAttribute( idx, 4 ) );
	geo.setAttribute( 'skinWeight', new THREE.Float32BufferAttribute( wts, 4 ) );

	const bones = [];
	BONES.forEach( ( [ name, parent, p ] ) => {

		const b = new THREE.Bone();
		b.name = name;
		const pp = parent >= 0 ? BONES[ parent ][ 2 ] : [ 0, 0, 0 ];
		b.position.set( p[ 0 ] - pp[ 0 ], p[ 1 ] - pp[ 1 ], p[ 2 ] - pp[ 2 ] );
		if ( parent >= 0 ) bones[ parent ].add( b );
		bones.push( b );

	} );

	const mat = src.material;
	const mesh = new THREE.SkinnedMesh( geo, mat );
	mesh.add( bones[ 0 ] );
	mesh.bind( new THREE.Skeleton( bones ) );
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	mesh.frustumCulled = false;

	const root = new THREE.Group();
	const scale = height / 0.977;
	mesh.scale.setScalar( scale );
	root.add( mesh );

	const B = Object.fromEntries( bones.map( ( b ) => [ b.name, b ] ) );
	const restHips = B.hips.position.clone();

	// ---- 动画 ----
	// state: { ground, air, airT, airDur, speed, crouch, t }
	function pose( st ) {

		const t = st.t;
		for ( const b of bones ) b.rotation.set( 0, 0, 0 );
		B.hips.position.copy( restHips );
		const run = THREE.MathUtils.clamp( st.speed / 9, 0, 1 );
		const crouch = st.crouch;
		// 起跳和落地时下蹲：大腿前抬、小腿后弯、身体降低
		const k = crouch * ( 0.9 + run * 0.3 );
		B.hips.position.y -= 0.07 * k;
		B.thighL.rotation.x = B.thighR.rotation.x = - 0.75 * k;
		B.shinL.rotation.x = B.shinR.rotation.x = 1.2 * k;
		B.chest.rotation.x = 0.25 * k + run * 0.12;
		B.head.rotation.x = - 0.18 * k;
		if ( st.air ) {

			// 空中：腿往后伸，手臂往后扬，披风飘起
			const p = THREE.MathUtils.clamp( st.airT / Math.max( 0.1, st.airDur ), 0, 1 );
			const ext = Math.sin( p * Math.PI );
			B.thighL.rotation.x += 0.35 * ext * ( 0.6 + run );
			B.thighR.rotation.x += 0.35 * ext * ( 0.6 + run );
			B.shinL.rotation.x += 0.35 * ext;
			B.shinR.rotation.x += 0.35 * ext;
			B.armL.rotation.x = B.armR.rotation.x = 0.5 * ext * ( 0.5 + run );
			B.armL.rotation.z = - 0.25 * ext;
			B.armR.rotation.z = 0.25 * ext;
			B.cape.rotation.x = - 0.25 - 0.5 * ext * ( 0.5 + run );
			B.chest.rotation.x += 0.15 * run * ext;

		} else {

			// 站着：呼吸、轻轻转头、披风随风摆
			const breathe = Math.sin( t * 1.8 );
			B.chest.rotation.x += 0.02 * breathe;
			B.head.rotation.y = Math.sin( t * 0.37 ) * 0.25 * ( 1 - run );
			B.head.rotation.x += Math.sin( t * 0.53 ) * 0.05;
			B.armL.rotation.z = - 0.04 - 0.02 * breathe;
			B.armR.rotation.z = 0.04 + 0.02 * breathe;
			B.cape.rotation.x = - 0.08 - 0.05 * Math.sin( t * 1.3 ) - 0.3 * run;
			B.cape.rotation.z = 0.04 * Math.sin( t * 0.9 );

		}

	}

	pose( { t: 0, air: false, crouch: 0, speed: 0 } );
	return { root, mesh, bones: B, pose };

}
