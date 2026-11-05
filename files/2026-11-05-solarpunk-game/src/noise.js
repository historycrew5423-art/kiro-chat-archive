// CPU 端的 Perlin 噪声，用来在生成几何体时做岩壁起伏、植被分布等。
export function makeNoise( seed ) {

	let s = seed >>> 0;
	const rnd = () => {

		s = ( s + 0x6D2B79F5 ) | 0;
		let t = Math.imul( s ^ ( s >>> 15 ), 1 | s );
		t = ( t + Math.imul( t ^ ( t >>> 7 ), 61 | t ) ) ^ t;
		return ( ( t ^ ( t >>> 14 ) ) >>> 0 ) / 4294967296;

	};

	const p = Array.from( { length: 256 }, ( _, i ) => i );
	for ( let i = 255; i > 0; i -- ) {

		const j = Math.floor( rnd() * ( i + 1 ) );
		[ p[ i ], p[ j ] ] = [ p[ j ], p[ i ] ];

	}

	const perm = new Uint8Array( 512 );
	for ( let i = 0; i < 512; i ++ ) perm[ i ] = p[ i & 255 ];

	const fade = ( t ) => t * t * t * ( t * ( t * 6 - 15 ) + 10 );
	const lerp = ( a, b, t ) => a + ( b - a ) * t;
	const grad = ( h, x, y, z ) => {

		h &= 15;
		const u = h < 8 ? x : y;
		const v = h < 4 ? y : ( h === 12 || h === 14 ? x : z );
		return ( ( h & 1 ) ? - u : u ) + ( ( h & 2 ) ? - v : v );

	};

	function noise3( x, y, z ) {

		const fx = Math.floor( x ), fy = Math.floor( y ), fz = Math.floor( z );
		const X = fx & 255, Y = fy & 255, Z = fz & 255;
		x -= fx;
		y -= fy;
		z -= fz;
		const u = fade( x ), v = fade( y ), w = fade( z );
		const A = perm[ X ] + Y, AA = perm[ A ] + Z, AB = perm[ A + 1 ] + Z;
		const B = perm[ X + 1 ] + Y, BA = perm[ B ] + Z, BB = perm[ B + 1 ] + Z;
		return lerp(
			lerp( lerp( grad( perm[ AA ], x, y, z ), grad( perm[ BA ], x - 1, y, z ), u ),
				lerp( grad( perm[ AB ], x, y - 1, z ), grad( perm[ BB ], x - 1, y - 1, z ), u ), v ),
			lerp( lerp( grad( perm[ AA + 1 ], x, y, z - 1 ), grad( perm[ BA + 1 ], x - 1, y, z - 1 ), u ),
				lerp( grad( perm[ AB + 1 ], x, y - 1, z - 1 ), grad( perm[ BB + 1 ], x - 1, y - 1, z - 1 ), u ), v ),
			w );

	}

	function fbm( x, y, z, oct = 4 ) {

		let a = 0.5, f = 1, sum = 0;
		for ( let i = 0; i < oct; i ++ ) {

			sum += a * noise3( x * f, y * f, z * f );
			f *= 2.03;
			a *= 0.5;

		}

		return sum;

	}

	return { noise3, fbm, rnd };

}

export const smooth = ( a, b, x ) => {

	const t = Math.min( 1, Math.max( 0, ( x - a ) / ( b - a ) ) );
	return t * t * ( 3 - 2 * t );

};
