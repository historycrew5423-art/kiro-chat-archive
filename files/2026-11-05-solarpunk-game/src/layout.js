import * as THREE from 'three';

// ---------------------------------------------------------------------------
// 世界布局。所有主体建筑的位置都从参考图反推：
// 固定一个“参考镜头”，给出建筑在参考图里的像素位置和估计距离，算出世界坐标。
// 参考图尺寸 1024×573。城市地面 y = 0，山顶公园 y = 300。
// ---------------------------------------------------------------------------

export const REF = {
	width: 1024,
	height: 573,
	pos: new THREE.Vector3( 0, 362, 20 ),
	pitch: 1.5 * Math.PI / 180,
	hfov: 64
};

const T = Math.tan( REF.hfov / 2 * Math.PI / 180 );
const ASPECT = REF.width / REF.height;

// 参考图像素 (px, py) 方向上、水平距离 dist 处的世界坐标
export function refPos( px, py, dist ) {

	const u = ( px - REF.width / 2 ) / ( REF.width / 2 );
	const v = ( REF.height / 2 - py ) / ( REF.height / 2 );
	const dir = new THREE.Vector3( u * T, v * T / ASPECT, - 1 );
	dir.applyAxisAngle( new THREE.Vector3( 1, 0, 0 ), REF.pitch );
	dir.multiplyScalar( dist / - dir.z );
	return REF.pos.clone().add( dir );

}

// 参考图里 n 个像素在距离 dist 处对应多少米
export const refSize = ( px, dist ) => px / ( REF.width / 2 ) * T * dist;

// 阳光：从镜头右后方照过来，仰角约 32°（天空照片里的太阳也在这个方位）
export const SUN_DIR = new THREE.Vector3( 0.66, 0.53, 0.53 ).normalize();
export const SUN_COLOR = new THREE.Color( 1.0, 0.80, 0.58 );

export const PLATEAU_Y = 300;
export const DECK_Y = 300;

// 主体建筑
const ringC = refPos( 525, 268, 2300 );
const leftDisc = refPos( 368, 236, 1500 );
const rightDisc = refPos( 742, 208, 820 );

export const L = {
	ring: { center: ringC, radius: refSize( 65, 2300 ), tube: refSize( 13, 2300 ) },
	mega: { x: ringC.x + 4, z: ringC.z - 170, width: refSize( 120, 2450 ), height: 1650 },
	leftTower: { x: leftDisc.x, z: leftDisc.z, discY: leftDisc.y, discR: refSize( 67, 1500 ) },
	rightTower: { x: rightDisc.x, z: rightDisc.z, discY: rightDisc.y, discR: refSize( 150, 820 ) },
	aircraft: refPos( 175, 100, 300 ),
	avenue: { x0: - 8, z0: - 760, x1: ringC.x, z1: ringC.z + 40, width: 70 }
};

// 高架绿廊：可以走的一段从山顶车站到空中花园塔的连接站，之后继续伸向城市中心（不能走）
export const VIADUCT = {
	width: 26,
	walkHalf: 11.5,
	trackHalf: 4.2,
	points: [
		new THREE.Vector3( 40, DECK_Y, - 40 ),
		new THREE.Vector3( 0, 0, 0 ), // 连接站，下面算
		new THREE.Vector3( 0, 0, 0 ),
		new THREE.Vector3( 0, 0, 0 )
	]
};

{

	const rt = L.rightTower;
	VIADUCT.points[ 1 ].set( rt.x - 78, DECK_Y, rt.z + 30 );
	VIADUCT.points[ 2 ].set( rt.x - 105, DECK_Y - 4, rt.z - 900 );
	VIADUCT.points[ 3 ].set( ringC.x + 160, DECK_Y - 10, ringC.z + 250 );

}

// 连接站：高架旁边伸向塔身的平台，电梯在这里
export const STATION = ( () => {

	const rt = L.rightTower;
	const p = VIADUCT.points[ 1 ];
	return { deck: p.clone(), pad: new THREE.Vector3( rt.x - 40, DECK_Y, rt.z + 30 ), elevator: new THREE.Vector3( rt.x - 34, DECK_Y, rt.z + 30 ) };

} )();

// 山顶公园的形状：一个不规则的台地，前方是悬崖
export const PLATEAU = {
	center: new THREE.Vector3( 0, PLATEAU_Y, 70 ),
	radius: 120
};
