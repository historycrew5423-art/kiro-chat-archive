import { CARDS, FUSIONS } from '../data/memes.js';

// ---------------------------------------------------------------------------
// 梗卡系统（策划方案 v0.2 第 6 节）：
//   三选一，三张互不相同；稀有度 普通 60% / 稀有 30% / 传说 10%，抽不到就降一档
//   叠加：同一张最多 3 层。数值类 2 层 ×1.5、3 层 ×2；数量类每层 +1
//   合体：两张前置卡都有以后，每次三选一 50% 概率把其中一张换成合体卡；每局一次
//   门上的类别：清完房间那次三选一，3 张里至少 2 张属于这一类
// stats 每次拿卡后从基础值重新算一遍。
// ---------------------------------------------------------------------------

export const CAT_NAMES = { attack: '攻击', defense: '防御', summon: '召唤', ult: '大招', fusion: '合体' };
export const RARE_NAMES = [ '普通', '稀有', '传说' ];

export function baseStats() {

	return {
		maxHp: 100, speed: 6, dashDist: 7, dashTime: 0.2, dashCd: 1.2, dashIframe: 0.25,
		maskRate: 4, maskDmg: 10, maskSpeed: 22, maskRange: 25, maskCount: 1, maskSpread: 8, maskDmgMul: 1, homing: 0.12,
		n95Dmg: 60, n95Pierce: 3, n95Cd: 6, n95Wrap: false,
		kickDmg: 35, kickCd: 3.2, kickRadius: 3.2, kickKnock: 11,
		area: 1, dmgMul: 1, critChance: 0.08, critMul: 2, ultGain: 1, ult: 'wave',
		armor: 0, regen: 0, goldMul: 1, roomHeal: 0, summonDmg: 1, size: 1,
		f: {} // 各种开关和参数
	};

}

const scaleOf = ( n ) => [ 0, 1, 1.5, 2 ][ Math.min( 3, n ) ];

export function createCards( rng ) {

	const owned = new Map(); // id → 层数
	const fusionsTaken = new Set();
	let stats = baseStats();
	const all = new Map( [ ...CARDS, ...FUSIONS.map( ( f ) => ( { ...f, cat: 'fusion', rare: 2 } ) ) ].map( ( c ) => [ c.id, c ] ) );

	function recompute() {

		const s = baseStats();
		for ( const [ id, n ] of owned ) {

			const c = all.get( id );
			const k = scaleOf( n );
			const v = c.v;
			switch ( c.fx ) {

				case 'maskCount': s.maskCount += n; s.maskDmgMul *= 0.7; break;
				case 'coffee': s.f.coffee = k; break;
				case 'thermo': s.f.thermo = v * k; break;
				case 'mantou': s.f.mantou = v * k; break;
				case 'n95rare': s.n95Cd *= 1.5; s.n95Dmg *= 1 + ( v - 1 ) * k; s.n95Wrap = true; break;
				case 'nixing': s.dashDist *= 1 + 0.5 * k; s.f.nixing = v * k; break;
				case 'tangping': s.f.tangping = v * k; break;
				case 'fat': s.maxHp += v * k; s.size *= 1 + 0.1 * n; s.speed *= Math.pow( 0.95, n ); break;
				case 'banlan': s.roomHeal += v * k; break;
				case 'digger': s.f.digger = v * k; break;
				case 'mixer': s.f.mixer = v * k; break;
				case 'disco': s.f.disco = v * k; break;
				case 'summonDmg': s.summonDmg *= 1 + v * k; break;
				case 'jiayou': s.f.jiayou = v * k; break;
				case 'area': s.area *= 1 + v * k; break;
				case 'yaoyao': s.speed *= 1 + v * k; s.dashCd *= Math.pow( 0.75, n ); break;
				case 'gold': s.goldMul *= 1 + v * k; s.f.coinRain = 0.05 * k; break;
				case 'stun': s.f.stun = v * k; break;
				case 'hongwen': s.f.hongwen = v * k; break;
				case 'baode': s.f.baode = v * k; break;
				case 'laoshi': s.f.laoshi = n; break;
				case 'calm': s.f.calm = v * k; break;
				case 'boomerang': s.f.boomerang = true; s.maskDmgMul *= 1 + 0.25 * ( n - 1 ); break;
				case 'huoren': s.f.huoren = v * k; s.ultGain *= 1 + 0.25 * k; break;
				case 'cat': s.f.cat = v * k; break;
				case 'pigeon': s.f.pigeon = v * k; break;
				case 'muyu': s.f.muyu = v * k; break;
				case 'suchao': s.kickDmg *= 1 + v * k; s.f.suchao = true; break;
				case 'jackpot': s.f.jackpot = Math.max( 10, Math.round( v / k ) ); break;
				case 'ultDance': s.ult = 'dance'; s.f.ultDmg = v * k; break;
				case 'ultPouch': s.ult = 'pouch'; s.f.ultDmg = k; break;
				case 'ultText': s.ult = 'text'; s.f.ultDmg = k; break;
				case 'mech': s.f.mech = v; break;
				case 'zhaijia': s.f.zhaijia = v; break;
				case 'dafa': s.f.dafa = true; break;
				case 'twins': s.f.twins = v; break;

			}

		}

		// 大招：拿了多张换大招的卡，最后拿的生效
		const ultCards = [ ...owned.keys() ].filter( ( id ) => [ 'kemusan', 'daizhong', 'doubao' ].includes( id ) );
		if ( ultCards.length ) {

			const last = all.get( ultCards[ ultCards.length - 1 ] );
			s.ult = { ultDance: 'dance', ultPouch: 'pouch', ultText: 'text' }[ last.fx ];

		}

		stats = s;
		return s;

	}

	function available( c ) {

		return ( owned.get( c.id ) || 0 ) < 3;

	}

	function pickOne( exclude, cat ) {

		const roll = rng();
		let rare = roll < 0.1 ? 2 : roll < 0.4 ? 1 : 0;
		for ( ; rare >= 0; rare -- ) {

			const pool = CARDS.filter( ( c ) => c.rare === rare && available( c ) && ! exclude.has( c.id ) && ( ! cat || c.cat === cat ) );
			if ( pool.length ) return pool[ Math.floor( rng() * pool.length ) ];

		}

		if ( cat ) return pickOne( exclude, null );
		return null;

	}

	// 三选一
	function offer( bias = null, minRare = 0 ) {

		const out = [];
		const ex = new Set();
		for ( let i = 0; i < 3; i ++ ) {

			let c = null;
			const cat = bias && i < 2 ? bias : null;
			for ( let k = 0; k < 4 && ! c; k ++ ) {

				c = pickOne( ex, cat );
				if ( c && c.rare < minRare && k < 3 ) c = null;

			}

			if ( ! c ) break;
			ex.add( c.id );
			out.push( c );

		}

		// 合体卡
		for ( const fu of FUSIONS ) {

			if ( fusionsTaken.has( fu.id ) ) continue;
			if ( fu.need.every( ( id ) => owned.has( id ) ) && rng() < 0.5 && out.length ) {

				out[ Math.floor( rng() * out.length ) ] = { ...fu, cat: 'fusion', rare: 2 };
				break;

			}

		}

		return rng.shuffle ? rng.shuffle( out ) : out;

	}

	function take( c ) {

		const n = ( owned.get( c.id ) || 0 ) + 1;
		owned.set( c.id, n );
		if ( c.cat === 'fusion' ) fusionsTaken.add( c.id );
		recompute();
		return n;

	}

	recompute();
	return {
		get stats() {

			return stats;

		},
		owned, offer, take, recompute, all,
		stacks: ( id ) => owned.get( id ) || 0,
		list: () => [ ...owned ].map( ( [ id, n ] ) => ( { ...all.get( id ), n } ) )
	};

}
