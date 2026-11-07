import { mulberry32 } from '../core/rng.js';

// ---------------------------------------------------------------------------
// 一局的楼层布局：每层 2x2 四个房间。到达房间 A 是安全的电梯厅；
// 两扇门通往 B1、B2（二选一，门牌上写着房间和奖励）；B 打完通往 D；D 打完开出口电梯。
// 奇数层从西北角进、东南角出，偶数层反过来。
// ---------------------------------------------------------------------------

export const ROOM_KINDS = {
	attack: { type: 'fight', reward: 'attack', sub: '奖励偏向：攻击梗', color: '#b03a2e' },
	defense: { type: 'fight', reward: 'defense', sub: '奖励偏向：防御梗', color: '#2c6fb0' },
	summon: { type: 'fight', reward: 'summon', sub: '奖励偏向：召唤梗', color: '#7d3c98' },
	elite: { type: 'elite', reward: 'rare', sub: '精英怪 · 稀有梗卡', color: '#3d1f4f' },
	shop: { type: 'shop', reward: 'shop', sub: '用金币买梗卡', color: '#1e8449', theme: 'shop' },
	rest: { type: 'rest', reward: 'rest', sub: '回血 · 情绪价值拉满', color: '#117a65', theme: 'garden' },
	treasure: { type: 'treasure', reward: 'treasure', sub: '药箱：白拿一张梗卡', color: '#b9770e', theme: 'storage' }
};

const THEMES = {
	1: [ 'waiting', 'consult', 'kids' ],
	2: [ 'lab', 'ct', 'consult' ],
	3: [ 'rehab', 'pharmacy', 'lab' ]
};

const NAMES = { waiting: '候诊区', consult: '诊室', kids: '儿科游乐区', lab: '检验科', ct: '影像科', rehab: '康复中心', pharmacy: '药房', shop: '便利店', garden: '中庭花园', storage: '药品仓库', hall: '电梯厅' };

export function makeLayouts( seed ) {

	const rng = mulberry32( seed ^ 0x5bd1e995 );
	const out = {};
	for ( let i = 1; i <= 3; i ++ ) {

		const odd = i % 2 === 1;
		const arrive = odd ? [ 0, 0 ] : [ 1, 1 ];
		const depart = odd ? [ 1, 1 ] : [ 0, 0 ];
		const themes = rng.shuffle( [ ...THEMES[ i ] ] );
		// 两扇门：一扇一定是战斗，另一扇随机（战斗、精英、商店、休息、药箱）
		const fights = rng.shuffle( [ 'attack', 'defense', 'summon' ] );
		const special = rng.pick( i === 1 ? [ 'shop', 'treasure', 'attack', 'defense' ] : [ 'shop', 'rest', 'elite', 'treasure', 'summon' ] );
		const pair = rng.shuffle( [ fights[ 0 ], special === fights[ 0 ] ? fights[ 1 ] : special ] );
		const spec = ( kind, theme ) => {

			const k = ROOM_KINDS[ kind ];
			const th = k.theme || theme;
			return { kind, type: k.type, reward: k.reward, theme: th, label: NAMES[ th ], sub: k.sub, color: k.color };

		};

		out[ i ] = {
			seed, arrive, depart, b1: [ 1, 0 ], b2: [ 0, 1 ],
			rooms: {
				A: { kind: 'hall', type: 'safe', theme: 'hall', label: NAMES.hall, sub: '', color: '#1e6f5c' },
				B1: spec( pair[ 0 ], themes[ 0 ] ),
				B2: spec( pair[ 1 ], themes[ 1 ] ),
				D: spec( i === 3 ? 'elite' : rng.pick( [ 'attack', 'defense', 'summon', 'elite' ] ), themes[ 2 ] )
			}
		};
		out[ i ].rooms.D.sub = ( out[ i ].rooms.D.type === 'elite' ? '精英怪 · ' : '' ) + '打完开电梯上楼';

	}

	return out;

}
