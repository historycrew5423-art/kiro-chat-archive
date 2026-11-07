import * as THREE from 'three';

// ---------------------------------------------------------------------------
// 全局布局和光照常量。单位：米。Y 向上，-Z 是北，+X 是东。
// 医院主楼在原点，正门朝南（+Z），南边是广场和湖，开场镜头在湖对岸的西南山坡上。
// ---------------------------------------------------------------------------

// 开场镜头（按参考图构图）：山坡上，看向医院，太阳在医院右后方
// 长焦（竖直视角 18°）把医院、湖和远处的城市压在一起，和参考图一样；镜头略微朝下 0.5°
export const TITLE_CAM = ( () => {

	const pos = new THREE.Vector3( - 254, 22, 347 );
	const tx = 6, tz = 0;
	const d = Math.hypot( tx - pos.x, tz - pos.z );
	const look = new THREE.Vector3( tx, pos.y - d * Math.tan( THREE.MathUtils.degToRad( 0.15 ) ), tz );
	return { pos, look, fov: 20 };

} )();

function dirFromAzEl( fwdX, fwdZ, rightDeg, elevDeg ) {

	const f = new THREE.Vector2( fwdX, fwdZ ).normalize();
	const r = new THREE.Vector2( - f.y, f.x );
	const t = Math.tan( THREE.MathUtils.degToRad( rightDeg ) );
	const h = new THREE.Vector2( f.x + r.x * t, f.y + r.y * t ).normalize();
	const e = THREE.MathUtils.degToRad( elevDeg );
	return new THREE.Vector3( h.x * Math.cos( e ), Math.sin( e ), h.y * Math.cos( e ) );

}

const tf = TITLE_CAM.look.clone().sub( TITLE_CAM.pos );
// 画面里的太阳：在开场镜头中心偏右 4.5°，仰角和天空照片里的太阳一致（约 1.6°），正好落在东翼的鳍片后面
export const SUN_DIR = dirFromAzEl( tf.x, tf.z, 4.5, 1.6 );
// 真正投影的平行光：比画面里的太阳再往右偏 35°、抬高到 10°。这样顶部塔楼的影子不会盖住屋顶的 Boss 场地，
// 广场和朝东的立面能晒到太阳，室内能照出长长的光斑；观众看不出和画面里的太阳不一致
export const LIGHT_DIR = dirFromAzEl( tf.x, tf.z, 35, 10 );
export const SUN_COLOR = new THREE.Color( 1.0, 0.63, 0.36 );

// 主楼：能进去的部分
export const HOSP = {
	x0: - 32, x1: 32, z0: - 22, z1: 22,
	// 每层地面标高：1F 大厅、2F、3F、4F、屋顶
	levels: [ 0, 9, 15.5, 22, 28.5 ],
	slab: 0.6, // 楼板厚度
	wall: 0.35
};

export const FLOOR_NAMES = [ '1F 门诊大厅', '2F 门诊', '3F 检验影像', '4F 康复药房', '屋顶花园' ];

// 湖面高度、广场高度
export const WATER_Y = - 2.2;
export const PLAZA = { x0: - 70, x1: 70, z0: 22, z1: 58 };
