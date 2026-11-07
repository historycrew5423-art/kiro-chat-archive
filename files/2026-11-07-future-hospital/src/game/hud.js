import { CAT_NAMES, RARE_NAMES } from './cards.js';
import { TIERS } from '../data/memes.js';

// ---------------------------------------------------------------------------
// 界面（DOM）：血条、金币、经验、大招条、技能冷却、连击、楼层和房间、小地图、Boss 血条、提示、
// 三选一梗卡、暂停菜单、人生总结、电梯过场、字幕。
// ---------------------------------------------------------------------------

const $ = ( id ) => document.getElementById( id );

export function createHud() {

	const el = {
		hud: $( 'hud' ), hpBar: $( 'hpBar' ), hpNum: $( 'hpNum' ), coin: $( 'coinNum' ), xpBar: $( 'xpBar' ), lv: $( 'lvText' ),
		ult: $( 'ult' ), ultText: $( 'ultText' ), combo: $( 'combo' ), floor: $( 'floorName' ), room: $( 'roomName' ), mini: $( 'minimap' ),
		boss: $( 'boss' ), bossBar: $( 'bossBar' ), bossName: $( 'bossName' ), prompt: $( 'prompt' ), toast: $( 'toast' ), cardsRow: $( 'cardsRow' ),
		subtitle: $( 'subtitle' ), cards: $( 'cards' ), cardRow: $( 'cardRow' ), cardsTitle: $( 'cardsTitle' ), cardsSub: $( 'cardsSub' ),
		pause: $( 'pause' ), pauseCards: $( 'pauseCards' ), summary: $( 'summary' ), fade: $( 'fade' ), elev: $( 'elevator' ), elevDisp: $( 'elevDisp' ), elevCap: $( 'elevCap' ),
		crosshair: $( 'crosshair' ), skN95: document.querySelector( '#skN95 i' ), skKick: document.querySelector( '#skKick i' ), skDash: document.querySelector( '#skDash i' )
	};
	let toastT = 0, subT = 0;
	const cache = {};
	const set = ( k, v, fn ) => {

		if ( cache[ k ] !== v ) {

			cache[ k ] = v; fn( v );

		}

	};

	function update( g, dt ) {

		const P = g.player.p, s = g.cards.stats, c = g.combat.state;
		const maxHp = s.maxHp + c.bonusHp;
		set( 'hp', Math.ceil( P.hp ) + '/' + maxHp, ( v ) => {

			el.hpNum.textContent = v;
			el.hpBar.style.width = ( 100 * P.hp / maxHp ).toFixed( 1 ) + '%';

		} );
		set( 'coin', c.gold, ( v ) => ( el.coin.textContent = v ) );
		const need = g.xpNeed();
		set( 'xp', Math.floor( c.xp ) + '/' + need, () => ( el.xpBar.style.width = ( 100 * Math.min( 1, c.xp / need ) ).toFixed( 1 ) + '%' ) );
		set( 'lv', c.level, ( v ) => ( el.lv.textContent = 'Lv.' + v ) );
		set( 'ult', Math.floor( c.ult ), ( v ) => {

			el.ult.style.setProperty( '--p', v + '%' );
			el.ultText.innerHTML = v >= 100 ? '大招<br>按 Q' : '大招<br>' + v + '%';
			el.ult.classList.toggle( 'ready', v >= 100 );

		} );
		el.skN95.style.height = ( 100 * P.n95Cd / s.n95Cd ).toFixed( 0 ) + '%';
		el.skKick.style.height = ( 100 * P.kickCd / s.kickCd ).toFixed( 0 ) + '%';
		el.skDash.style.height = ( 100 * P.dashCd / s.dashCd ).toFixed( 0 ) + '%';
		el.crosshair.classList.toggle( 'charge', P.charging && P.charge >= 0.4 );
		// 连击
		if ( c.combo >= 3 ) {

			const col = c.combo >= 100 ? '#ff4d4d' : c.combo >= 50 ? '#ff6ad5' : c.combo >= 25 ? '#ffd34d' : c.combo >= 10 ? '#6ad3ff' : '#ffffff';
			set( 'combo', c.combo, ( v ) => ( el.combo.innerHTML = v + '<small>连击</small>' ) );
			el.combo.style.color = col;
			el.combo.style.opacity = Math.min( 1, c.comboT * 1.5 ).toFixed( 2 );

		} else el.combo.style.opacity = 0;
		// Boss
		const b = g.boss.B;
		el.boss.classList.toggle( 'hidden', ! ( b.alive && g.boss.mesh.visible ) );
		if ( b.alive ) el.bossBar.style.width = ( 100 * b.hp / b.maxHp ).toFixed( 1 ) + '%';
		if ( toastT > 0 ) {

			toastT -= dt;
			if ( toastT <= 0 ) el.toast.textContent = '';

		}

		if ( subT > 0 ) {

			subT -= dt;
			if ( subT <= 0 ) el.subtitle.classList.add( 'hidden' );

		}

	}

	function minimap( floor, current, cleared, locked ) {

		if ( ! floor || ! floor.rooms || floor.index === 0 || floor.index === 4 ) {

			el.mini.innerHTML = '';
			return;

		}

		const at = {};
		for ( const r of Object.values( floor.rooms ) ) at[ r.cell[ 0 ] + ',' + r.cell[ 1 ] ] = r;
		let html = '';
		for ( const [ cx, cz ] of [ [ 0, 0 ], [ 1, 0 ], [ 0, 1 ], [ 1, 1 ] ] ) {

			const r = at[ cx + ',' + cz ];
			const label = r.id === 'A' ? '梯' : r.id === 'D' ? '出' : ( { fight: '战', elite: '精', shop: '店', rest: '休', treasure: '箱' }[ r.type ] || '?' );
			const cls = r.id === current ? 'cur' : cleared.has( r.id ) ? 'done' : locked.has( r.id ) ? 'locked' : '';
			html += `<div class="${ cls }">${ label }</div>`;

		}

		el.mini.innerHTML = html;

	}

	function cardsOwned( list ) {

		// 平时只显示卡名；按 Tab 展开成带效果说明的列表
		el.cardsRow.innerHTML = list.length ? list.map( ( c ) => `<span class="${ c.cat === 'fusion' ? 'fu' : 'r' + c.rare }"><b>${ c.name }${ c.n > 1 ? ' ×' + c.n : '' }</b><em>${ c.desc || '' }</em></span>` ).join( '' ) : '<span class="none"><b>还没有梗卡</b></span>';

	}

	// 三选一
	function pickCard( list, title, sub, stacksOf ) {

		return new Promise( ( resolve ) => {

			el.cardsTitle.textContent = title;
			el.cardsSub.textContent = sub || '按 1 / 2 / 3 或点击';
			el.cardRow.innerHTML = '';
			list.forEach( ( c, i ) => {

				const d = document.createElement( 'div' );
				d.className = 'card ' + ( c.cat === 'fusion' ? 'fusion' : 'r' + c.rare );
				const n = stacksOf( c.id );
				d.innerHTML = `<div class="key">${ i + 1 }</div><div class="kind">${ CAT_NAMES[ c.cat ] } · ${ c.cat === 'fusion' ? '合体' : RARE_NAMES[ c.rare ] }${ c.year ? ' · ' + c.year : '' }</div>
					<div class="nm">${ c.name }</div><div class="lv">${ n ? '已有 ' + n + ' 层 → ' + ( n + 1 ) + ' 层' : '新' }</div>
					<div class="fx">${ c.desc }</div><div class="src">出处：${ c.src }</div>`;
				d.onclick = () => done( c );
				el.cardRow.appendChild( d );

			} );
			el.cards.classList.remove( 'hidden' );
			const onKey = ( e ) => {

				const k = [ 'Digit1', 'Digit2', 'Digit3' ].indexOf( e.code );
				if ( k >= 0 && list[ k ] ) done( list[ k ] );

			};

			addEventListener( 'keydown', onKey );
			function done( c ) {

				removeEventListener( 'keydown', onKey );
				el.cards.classList.add( 'hidden' );
				resolve( c );

			}

		} );

	}

	function prompt( html ) {

		set( 'prompt', html || '', ( v ) => {

			el.prompt.classList.toggle( 'hidden', ! v );
			el.prompt.innerHTML = v;

		} );

	}

	function toast( text, t = 2.5 ) {

		el.toast.textContent = text;
		toastT = t;

	}

	function subtitle( who, text, t = 2.6 ) {

		el.subtitle.innerHTML = ( who ? `<em>${ who }</em>` : '' ) + text;
		el.subtitle.classList.remove( 'hidden' );
		subT = t;

	}

	function where( floor, room ) {

		el.floor.textContent = floor;
		el.room.textContent = room;

	}

	function fade( v ) {

		el.fade.style.opacity = v;

	}

	function elevator( show, disp, cap ) {

		el.elev.classList.toggle( 'hidden', ! show );
		if ( disp !== undefined ) el.elevDisp.textContent = disp;
		if ( cap !== undefined ) el.elevCap.textContent = cap;

	}

	function pause( show, list ) {

		el.pause.classList.toggle( 'hidden', ! show );
		if ( show ) el.pauseCards.innerHTML = list.length ? '本局梗卡：' + list.map( ( c ) => c.name + ( c.n > 1 ? '×' + c.n : '' ) ).join( '、' ) : '还没有梗卡';

	}

	function summary( win, rank, lines ) {

		$( 'sumTitle' ).textContent = win ? '通关！人生总结' : '芭比Q了 · 人生总结';
		$( 'sumRank' ).textContent = TIERS[ rank ];
		$( 'sumTiers' ).innerHTML = TIERS.map( ( t, i ) => `<span class="${ i === rank ? 'on' : '' }">${ t }</span>` ).join( '' );
		$( 'sumStats' ).innerHTML = lines.join( '<br>' );
		el.summary.classList.remove( 'hidden' );

	}

	function toggleCards() {

		el.cardsRow.classList.toggle( 'big' );

	}

	return { el, update, minimap, cardsOwned, toggleCards, pickCard, prompt, toast, subtitle, where, fade, elevator, pause, summary, show: ( v ) => el.hud.classList.toggle( 'hidden', ! v ) };

}
