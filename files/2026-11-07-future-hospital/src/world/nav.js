// ---------------------------------------------------------------------------
// 导航网格：每层楼一张 0.5 米的占用格子图（墙、家具、锁着的门都是障碍）。
// 主角和怪都按“圆 vs 格子”碰撞；怪物用流场寻路：从主角所在格子做一次 BFS，
// 每个格子记下离主角的步数，怪物往步数更小的邻格走。几百只怪也只要算一次。
// ---------------------------------------------------------------------------

export function createNav( x0, x1, z0, z1, cell = 0.5 ) {

	const W = Math.ceil( ( x1 - x0 ) / cell ), H = Math.ceil( ( z1 - z0 ) / cell );
	const block = new Uint8Array( W * H ); // 0 可走，1 墙，2 家具（矮，可以跳过去的不算），3 门（可开关）
	const dist = new Uint16Array( W * H );
	const doorCells = new Map();
	const nav = {
		x0, z0, x1, z1, W, H, cell, block, dist,
		ix: ( x ) => Math.floor( ( x - x0 ) / cell ),
		iz: ( z ) => Math.floor( ( z - z0 ) / cell ),
		inside( i, j ) {

			return i >= 0 && j >= 0 && i < W && j < H;

		},
		blocked( x, z ) {

			const i = nav.ix( x ), j = nav.iz( z );
			if ( ! nav.inside( i, j ) ) return true;
			return block[ j * W + i ] !== 0;

		},
		fillRect( ax, bx, az, bz, v = 1 ) {

			const i0 = Math.max( 0, nav.ix( Math.min( ax, bx ) ) ), i1 = Math.min( W - 1, nav.ix( Math.max( ax, bx ) - 1e-4 ) );
			const j0 = Math.max( 0, nav.iz( Math.min( az, bz ) ) ), j1 = Math.min( H - 1, nav.iz( Math.max( az, bz ) - 1e-4 ) );
			for ( let j = j0; j <= j1; j ++ ) for ( let i = i0; i <= i1; i ++ ) block[ j * W + i ] = v;

		},
		fillCircle( cx, cz, r, v = 2 ) {

			nav.fillRect( cx - r, cx + r, cz - r, cz + r, 0 === v ? 0 : v );

		},
		// 旋转过的矩形（家具）
		fillOBB( cx, cz, hw, hd, rot, v = 2 ) {

			const c = Math.cos( rot ), s = Math.sin( rot );
			const ex = Math.abs( c ) * hw + Math.abs( s ) * hd, ez = Math.abs( s ) * hw + Math.abs( c ) * hd;
			const i0 = Math.max( 0, nav.ix( cx - ex ) ), i1 = Math.min( W - 1, nav.ix( cx + ex ) );
			const j0 = Math.max( 0, nav.iz( cz - ez ) ), j1 = Math.min( H - 1, nav.iz( cz + ez ) );
			for ( let j = j0; j <= j1; j ++ ) {

				for ( let i = i0; i <= i1; i ++ ) {

					const px = x0 + ( i + 0.5 ) * cell - cx, pz = z0 + ( j + 0.5 ) * cell - cz;
					const lx = px * c - pz * s, lz = px * s + pz * c;
					if ( Math.abs( lx ) <= hw + cell * 0.3 && Math.abs( lz ) <= hd + cell * 0.3 ) block[ j * W + i ] = v;

				}

			}

		},
		// 门：记下格子，之后可以整体开关
		addDoor( id, ax, bx, az, bz ) {

			const cells = [];
			const i0 = Math.max( 0, nav.ix( Math.min( ax, bx ) ) ), i1 = Math.min( W - 1, nav.ix( Math.max( ax, bx ) - 1e-4 ) );
			const j0 = Math.max( 0, nav.iz( Math.min( az, bz ) ) ), j1 = Math.min( H - 1, nav.iz( Math.max( az, bz ) - 1e-4 ) );
			for ( let j = j0; j <= j1; j ++ ) for ( let i = i0; i <= i1; i ++ ) cells.push( j * W + i );
			doorCells.set( id, cells );

		},
		setDoor( id, open ) {

			const cells = doorCells.get( id );
			if ( ! cells ) return;
			for ( const k of cells ) block[ k ] = open ? 0 : 3;

		},
		// 圆形角色移动：先走 x 再走 z，碰到格子就停在边上（贴墙滑动）
		move( p, dx, dz, r ) {

			const tryAxis = ( nx, nz ) => ! nav.circleBlocked( nx, nz, r );
			if ( tryAxis( p.x + dx, p.z ) ) p.x += dx;
			else {

				const step = Math.sign( dx ) * Math.min( Math.abs( dx ), 0.05 );
				for ( let k = 0; k < 6 && tryAxis( p.x + step, p.z ); k ++ ) p.x += step;

			}

			if ( tryAxis( p.x, p.z + dz ) ) p.z += dz;
			else {

				const step = Math.sign( dz ) * Math.min( Math.abs( dz ), 0.05 );
				for ( let k = 0; k < 6 && tryAxis( p.x, p.z + step ); k ++ ) p.z += step;

			}

		},
		circleBlocked( x, z, r ) {

			for ( const [ ox, oz ] of [ [ 0, 0 ], [ r, 0 ], [ - r, 0 ], [ 0, r ], [ 0, - r ], [ r * 0.7, r * 0.7 ], [ - r * 0.7, r * 0.7 ], [ r * 0.7, - r * 0.7 ], [ - r * 0.7, - r * 0.7 ] ] ) {

				if ( nav.blocked( x + ox, z + oz ) ) return true;

			}

			return false;

		},
		// 从目标点做 BFS，得到流场（步数）
		flow( tx, tz ) {

			dist.fill( 65535 );
			const ti = nav.ix( tx ), tj = nav.iz( tz );
			if ( ! nav.inside( ti, tj ) ) return;
			const q = nav._q || ( nav._q = new Int32Array( W * H ) );
			let head = 0, tail = 0;
			q[ tail ++ ] = tj * W + ti;
			dist[ tj * W + ti ] = 0;
			while ( head < tail ) {

				const k = q[ head ++ ];
				const i = k % W, j = ( k / W ) | 0;
				const d = dist[ k ] + 1;
				if ( i > 0 && block[ k - 1 ] === 0 && dist[ k - 1 ] > d ) {

					dist[ k - 1 ] = d; q[ tail ++ ] = k - 1;

				}

				if ( i < W - 1 && block[ k + 1 ] === 0 && dist[ k + 1 ] > d ) {

					dist[ k + 1 ] = d; q[ tail ++ ] = k + 1;

				}

				if ( j > 0 && block[ k - W ] === 0 && dist[ k - W ] > d ) {

					dist[ k - W ] = d; q[ tail ++ ] = k - W;

				}

				if ( j < H - 1 && block[ k + W ] === 0 && dist[ k + W ] > d ) {

					dist[ k + W ] = d; q[ tail ++ ] = k + W;

				}

			}

		},
		// 流场方向：看周围 8 格哪个步数最小
		flowDir( x, z, out ) {

			const i = nav.ix( x ), j = nav.iz( z );
			if ( ! nav.inside( i, j ) ) {

				out.x = out.z = 0; return false;

			}

			let best = dist[ j * W + i ], bx = 0, bz = 0;
			for ( let dj = - 1; dj <= 1; dj ++ ) {

				for ( let di = - 1; di <= 1; di ++ ) {

					if ( ! di && ! dj ) continue;
					const ni = i + di, nj = j + dj;
					if ( ! nav.inside( ni, nj ) ) continue;
					// 斜着走不能穿墙角
					if ( di && dj && ( block[ j * W + ni ] || block[ nj * W + i ] ) ) continue;
					const d = dist[ nj * W + ni ];
					if ( d < best ) {

						best = d; bx = di; bz = dj;

					}

				}

			}

			const l = Math.hypot( bx, bz ) || 1;
			out.x = bx / l; out.z = bz / l;
			return best < 65535;

		},
		// 随机找一个可走的点（刷怪用）
		randomFree( rng, ax, bx, az, bz, minFrom, minDist ) {

			for ( let k = 0; k < 200; k ++ ) {

				const x = ax + ( bx - ax ) * rng(), z = az + ( bz - az ) * rng();
				if ( nav.circleBlocked( x, z, 0.8 ) ) continue;
				if ( minFrom && Math.hypot( x - minFrom.x, z - minFrom.z ) < minDist ) continue;
				return { x, z };

			}

			return null;

		},
		// 视线（直线上没有墙）
		los( ax, az, bx, bz ) {

			const n = Math.ceil( Math.hypot( bx - ax, bz - az ) / ( cell * 0.8 ) );
			for ( let k = 1; k < n; k ++ ) {

				const t = k / n;
				const i = nav.ix( ax + ( bx - ax ) * t ), j = nav.iz( az + ( bz - az ) * t );
				if ( ! nav.inside( i, j ) ) return false;
				const v = block[ j * W + i ];
				if ( v === 1 || v === 3 ) return false;

			}

			return true;

		}
	};
	return nav;

}
