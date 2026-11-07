// 可复现的随机数：同一个种子 + 同样的选择 = 同一局。
// 门、抽卡、刷怪、掉落各用独立的序列，互不影响（策划方案 14.5）。

export function mulberry32( seed ) {

	let a = seed >>> 0;
	const f = function () {

		a |= 0; a = a + 0x6D2B79F5 | 0;
		let t = Math.imul( a ^ a >>> 15, 1 | a );
		t = t + Math.imul( t ^ t >>> 7, 61 | t ) ^ t;
		return ( ( t ^ t >>> 14 ) >>> 0 ) / 4294967296;

	};

	f.range = ( lo, hi ) => lo + ( hi - lo ) * f();
	f.int = ( lo, hi ) => Math.floor( lo + ( hi - lo + 1 ) * f() );
	f.pick = ( arr ) => arr[ Math.floor( f() * arr.length ) ];
	f.chance = ( p ) => f() < p;
	f.shuffle = ( arr ) => {

		for ( let i = arr.length - 1; i > 0; i -- ) {

			const j = Math.floor( f() * ( i + 1 ) );
			[ arr[ i ], arr[ j ] ] = [ arr[ j ], arr[ i ] ];

		}

		return arr;

	};

	return f;

}

export function hashSeed( seed, name ) {

	let h = 2166136261 ^ seed;
	for ( let i = 0; i < name.length; i ++ ) h = Math.imul( h ^ name.charCodeAt( i ), 16777619 );
	return h >>> 0;

}

export function makeStreams( seed ) {

	return {
		seed,
		doors: mulberry32( hashSeed( seed, 'doors' ) ),
		cards: mulberry32( hashSeed( seed, 'cards' ) ),
		spawn: mulberry32( hashSeed( seed, 'spawn' ) ),
		loot: mulberry32( hashSeed( seed, 'loot' ) ),
		layout: mulberry32( hashSeed( seed, 'layout' ) ),
		fx: mulberry32( hashSeed( seed, 'fx' ) )
	};

}
