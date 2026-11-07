// ---------------------------------------------------------------------------
// 声音：全部用 Web Audio 现场合成，不用任何录音素材和原曲（策划方案 16 节：音乐自己做）。
// 音乐：几段自己写的循环（大厅 lo-fi、战斗 phonk 牛铃、Boss、电梯 bossa nova、科目三风的五声音阶舞曲）。
// 音效：口罩“啵”、命中“咚”、飞踢“duang”、低音“咚——”、喇叭三连、搓碟、金币、电梯“叮”、悲伤长号……
// 台词：浏览器自带的中文朗读（Mac 上是 Tingting / 美佳等系统声音），同时显示字幕；说话时音乐自动压低。
// ---------------------------------------------------------------------------

const NOTE = ( n ) => 440 * Math.pow( 2, ( n - 69 ) / 12 );

export function createAudio() {

	let ctx = null, master, musicBus, sfxBus, comp, reverb, revSend, noiseBuf;
	let muted = false;
	let musicGain = 0.42, duck = 1;
	const voices = { list: [], zh: null };

	function init() {

		if ( ctx ) return;
		const AC = window.AudioContext || window.webkitAudioContext;
		if ( ! AC ) return;
		ctx = new AC();
		master = ctx.createGain();
		master.gain.value = 0.9;
		comp = ctx.createDynamicsCompressor();
		comp.threshold.value = - 16; comp.ratio.value = 4; comp.attack.value = 0.004; comp.release.value = 0.18;
		master.connect( comp ).connect( ctx.destination );
		musicBus = ctx.createGain(); musicBus.gain.value = musicGain; musicBus.connect( master );
		sfxBus = ctx.createGain(); sfxBus.gain.value = 0.8; sfxBus.connect( master );
		// 混响：用衰减噪声做冲激响应
		reverb = ctx.createConvolver();
		const len = ctx.sampleRate * 2.2;
		const ir = ctx.createBuffer( 2, len, ctx.sampleRate );
		for ( let c = 0; c < 2; c ++ ) {

			const d = ir.getChannelData( c );
			for ( let i = 0; i < len; i ++ ) d[ i ] = ( Math.random() * 2 - 1 ) * Math.pow( 1 - i / len, 3.2 );

		}

		reverb.buffer = ir;
		revSend = ctx.createGain(); revSend.gain.value = 0.25;
		revSend.connect( reverb ).connect( master );
		noiseBuf = ctx.createBuffer( 1, ctx.sampleRate * 2, ctx.sampleRate );
		const nd = noiseBuf.getChannelData( 0 );
		for ( let i = 0; i < nd.length; i ++ ) nd[ i ] = Math.random() * 2 - 1;
		pickVoice();
		if ( 'speechSynthesis' in window ) speechSynthesis.onvoiceschanged = pickVoice;

	}

	function pickVoice() {

		if ( ! ( 'speechSynthesis' in window ) ) return;
		voices.list = speechSynthesis.getVoices();
		const zh = voices.list.filter( ( v ) => /^zh(-|_)?(CN|Hans)?/i.test( v.lang ) || /Chinese|普通话|Ting|Mei|Li-mu|Yu-shu/i.test( v.name ) );
		voices.zh = zh.find( ( v ) => /CN/i.test( v.lang ) ) || zh[ 0 ] || null;

	}

	// ---------------- 基础发声 ----------------
	function env( g, t, a, d, peak = 1, sus = 0 ) {

		g.gain.cancelScheduledValues( t );
		g.gain.setValueAtTime( 0.0001, t );
		g.gain.linearRampToValueAtTime( peak, t + a );
		g.gain.exponentialRampToValueAtTime( Math.max( 0.0001, sus || 0.0001 ), t + a + d );

	}

	function tone( { type = 'sine', f = 440, f2 = null, t = 0, a = 0.005, d = 0.2, vol = 0.3, bus = sfxBus, rev = 0, detune = 0, glide = null, filter = null, q = 1 } ) {

		const o = ctx.createOscillator();
		o.type = type;
		o.frequency.setValueAtTime( f, t );
		o.detune.value = detune;
		if ( f2 ) o.frequency.exponentialRampToValueAtTime( Math.max( 1, f2 ), t + ( glide ?? a + d ) );
		const g = ctx.createGain();
		env( g, t, a, d, vol );
		let node = o;
		if ( filter ) {

			const fl = ctx.createBiquadFilter();
			fl.type = filter.type || 'lowpass';
			fl.frequency.setValueAtTime( filter.f, t );
			if ( filter.f2 ) fl.frequency.exponentialRampToValueAtTime( filter.f2, t + ( filter.t ?? d ) );
			fl.Q.value = q;
			node.connect( fl ); node = fl;

		}

		node.connect( g ).connect( bus );
		if ( rev ) {

			const s = ctx.createGain(); s.gain.value = rev; g.connect( s ).connect( revSend );

		}

		o.start( t ); o.stop( t + a + d + 0.05 );
		return o;

	}

	function noise( { t = 0, a = 0.002, d = 0.1, vol = 0.3, f = 2000, f2 = null, type = 'bandpass', q = 1, bus = sfxBus, rev = 0 } ) {

		const s = ctx.createBufferSource();
		s.buffer = noiseBuf;
		s.playbackRate.value = 0.8 + Math.random() * 0.4;
		const fl = ctx.createBiquadFilter();
		fl.type = type; fl.frequency.setValueAtTime( f, t ); fl.Q.value = q;
		if ( f2 ) fl.frequency.exponentialRampToValueAtTime( f2, t + a + d );
		const g = ctx.createGain();
		env( g, t, a, d, vol );
		s.connect( fl ).connect( g ).connect( bus );
		if ( rev ) {

			const sg = ctx.createGain(); sg.gain.value = rev; g.connect( sg ).connect( revSend );

		}

		s.start( t, Math.random() * 1.5 ); s.stop( t + a + d + 0.05 );

	}

	const distCurve = ( k ) => {

		const n = 1024, c = new Float32Array( n );
		for ( let i = 0; i < n; i ++ ) {

			const x = i / n * 2 - 1;
			c[ i ] = ( ( 1 + k ) * x ) / ( 1 + k * Math.abs( x ) );

		}

		return c;

	};

	let distNode = null;
	function dist() {

		if ( ! distNode ) {

			distNode = ctx.createWaveShaper(); distNode.curve = distCurve( 30 );
			const g = ctx.createGain(); g.gain.value = 0.5;
			distNode.connect( g ).connect( sfxBus );

		}

		return distNode;

	}

	// ---------------- 音效 ----------------
	const S = {
		throw( t ) {

			noise( { t, d: 0.09, vol: 0.12, f: 1800, f2: 5000, q: 2 } );
			tone( { type: 'sine', f: 900, f2: 1500, t, d: 0.06, vol: 0.06 } );

		},
		hit( t, big ) {

			tone( { type: 'sine', f: big ? 420 : 680, f2: big ? 120 : 220, t, d: big ? 0.22 : 0.12, vol: big ? 0.35 : 0.2 } );
			noise( { t, d: 0.04, vol: 0.12, f: 3000, q: 0.7 } );

		},
		pop( t, size = 1 ) {

			// 病毒被包住：“啵”+ 玩具吱一声
			tone( { type: 'sine', f: 300 / size, f2: 900 / size, t, d: 0.08, vol: 0.3 } );
			tone( { type: 'square', f: 900 / size, f2: 1600 / size, t: t + 0.05, d: 0.12, vol: 0.06, filter: { f: 2500 } } );

		},
		crit( t ) {

			tone( { type: 'triangle', f: 1760, t, d: 0.5, vol: 0.18, rev: 0.4 } );
			tone( { type: 'sine', f: 2637, t, d: 0.35, vol: 0.08 } );

		},
		boom( t, vol = 0.9 ) {

			// 低音“咚——”（自己合成的，致敬 vine boom 那种感觉）
			const o = tone( { type: 'sine', f: 120, f2: 38, t, a: 0.004, d: 1.3, vol, glide: 0.35 } );
			const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.setValueAtTime( 240, t ); o2.frequency.exponentialRampToValueAtTime( 50, t + 0.3 );
			const g = ctx.createGain(); env( g, t, 0.003, 0.9, vol * 0.5 );
			o2.connect( g ).connect( dist() ); o2.start( t ); o2.stop( t + 1 );
			noise( { t, d: 0.08, vol: 0.3, f: 300, type: 'lowpass' } );
			const s = ctx.createGain(); s.gain.value = 0.5; g.connect( s ).connect( revSend );
			return o;

		},
		horn( t ) {

			// 三连喇叭
			for ( let k = 0; k < 3; k ++ ) {

				const tt = t + k * 0.16 + ( k === 2 ? 0.08 : 0 );
				const dd = k === 2 ? 0.6 : 0.12;
				for ( const det of [ - 12, 0, 9 ] ) tone( { type: 'sawtooth', f: NOTE( 70 ), t: tt, a: 0.01, d: dd, vol: 0.07, detune: det, filter: { f: 2600 }, q: 2 } );
				for ( const det of [ - 8, 6 ] ) tone( { type: 'square', f: NOTE( 77 ), t: tt, a: 0.01, d: dd, vol: 0.04, detune: det, filter: { f: 3000 } } );

			}

		},
		scratch( t ) {

			for ( let k = 0; k < 3; k ++ ) noise( { t: t + k * 0.07, d: 0.06, vol: 0.25, f: k % 2 ? 1200 : 400, f2: k % 2 ? 300 : 1800, q: 4 } );

		},
		coin( t ) {

			tone( { type: 'square', f: NOTE( 83 ), t, d: 0.06, vol: 0.07 } );
			tone( { type: 'square', f: NOTE( 88 ), t: t + 0.06, d: 0.25, vol: 0.07 } );

		},
		level( t ) {

			[ 72, 76, 79, 84, 88 ].forEach( ( n, i ) => tone( { type: 'triangle', f: NOTE( n ), t: t + i * 0.06, d: 0.3, vol: 0.12, rev: 0.3 } ) );

		},
		kick( t ) {

			// “duang”：弹簧一样的颤音往下滑
			const o = tone( { type: 'sine', f: 520, f2: 140, t, d: 0.45, vol: 0.32, glide: 0.4 } );
			const lfo = ctx.createOscillator(); lfo.frequency.value = 28;
			const lg = ctx.createGain(); lg.gain.value = 60;
			lfo.connect( lg ).connect( o.frequency ); lfo.start( t ); lfo.stop( t + 0.5 );
			noise( { t, d: 0.1, vol: 0.25, f: 500, type: 'lowpass' } );

		},
		dash( t ) {

			noise( { t, d: 0.18, vol: 0.16, f: 600, f2: 4000, q: 3 } );
			tone( { type: 'sine', f: 300, f2: 1200, t, d: 0.15, vol: 0.08 } );

		},
		jump( t ) {

			tone( { type: 'sine', f: 260, f2: 620, t, d: 0.18, vol: 0.12 } );

		},
		hurt( t ) {

			tone( { type: 'sawtooth', f: 160, f2: 70, t, d: 0.25, vol: 0.18, filter: { f: 900 } } );
			noise( { t, d: 0.12, vol: 0.2, f: 800 } );

		},
		door( t ) {

			noise( { t, d: 0.4, vol: 0.08, f: 3000, type: 'highpass' } );
			tone( { type: 'sine', f: NOTE( 79 ), t: t + 0.05, d: 0.6, vol: 0.12, rev: 0.4 } );
			tone( { type: 'sine', f: NOTE( 76 ), t: t + 0.32, d: 0.8, vol: 0.12, rev: 0.4 } );

		},
		ding( t ) {

			tone( { type: 'sine', f: NOTE( 88 ), t, d: 1.6, vol: 0.18, rev: 0.6 } );
			tone( { type: 'sine', f: NOTE( 100 ), t, d: 0.8, vol: 0.05 } );

		},
		sneeze( t ) {

			noise( { t, a: 0.3, d: 0.05, vol: 0.05, f: 1500, f2: 3000, q: 1 } );
			noise( { t: t + 0.35, d: 0.25, vol: 0.32, f: 2500, f2: 700, q: 0.8 } );

		},
		bloop( t ) {

			tone( { type: 'sine', f: 200, f2: 700, t, d: 0.2, vol: 0.15 } );

		},
		roar( t ) {

			for ( const det of [ 0, 13, - 9 ] ) tone( { type: 'sawtooth', f: 70, f2: 45, t, a: 0.08, d: 1.3, vol: 0.12, detune: det, filter: { f: 300, f2: 1400, t: 0.5 }, q: 3 } );
			noise( { t, a: 0.1, d: 1.2, vol: 0.2, f: 400, q: 0.5 } );

		},
		dundun( t ) {

			// “噔噔咚”：三声铜管，最后一声长
			[ [ 62, 0, 0.18 ], [ 62, 0.24, 0.18 ], [ 55, 0.52, 1.0 ] ].forEach( ( [ n, dt, d ] ) => {

				for ( const det of [ - 10, 0, 10 ] ) tone( { type: 'sawtooth', f: NOTE( n ), t: t + dt, a: 0.02, d, vol: 0.08, detune: det, filter: { f: 1600 }, rev: 0.3 } );
				tone( { type: 'sine', f: NOTE( n - 24 ), t: t + dt, d, vol: 0.2 } );

			} );

		},
		sadTrombone( t ) {

			// 悲伤长号：哇 哇 哇 哇——
			[ [ 58, 0, 0.35 ], [ 57, 0.4, 0.35 ], [ 56, 0.8, 0.35 ], [ 55, 1.2, 1.2 ] ].forEach( ( [ n, dt, d ], i ) => {

				const o = tone( { type: 'sawtooth', f: NOTE( n ), t: t + dt, a: 0.04, d, vol: 0.12, filter: { f: 900 }, rev: 0.25 } );
				if ( i === 3 ) {

					const lfo = ctx.createOscillator(); lfo.frequency.value = 5.5;
					const lg = ctx.createGain(); lg.gain.value = 8;
					lfo.connect( lg ).connect( o.frequency ); lfo.start( t + dt ); lfo.stop( t + dt + d );

				}

			} );

		},
		stun( t ) {

			[ 84, 91, 96 ].forEach( ( n, i ) => tone( { type: 'triangle', f: NOTE( n ), t: t + i * 0.05, d: 0.2, vol: 0.06 } ) );

		},
		charge( t, k ) {

			tone( { type: 'sawtooth', f: 200 + k * 500, t, d: 0.06, vol: 0.03, filter: { f: 1200 + k * 3000 } } );

		},
		bigThrow( t ) {

			noise( { t, d: 0.35, vol: 0.3, f: 400, f2: 6000, q: 1.5 } );
			S.boom( t, 0.4 );

		},
		cash( t ) {

			S.coin( t );
			noise( { t: t + 0.1, d: 0.3, vol: 0.12, f: 6000, type: 'highpass' } );

		},
		muyu( t ) {

			// 木鱼“笃”
			tone( { type: 'sine', f: 720, f2: 680, t, d: 0.12, vol: 0.3 } );
			tone( { type: 'triangle', f: 1450, t, d: 0.05, vol: 0.08 } );

		},
		quack( t ) {

			tone( { type: 'sawtooth', f: 520, f2: 380, t, d: 0.16, vol: 0.12, filter: { type: 'bandpass', f: 1200 }, q: 5 } );

		}
	};

	// ---------------- 音乐 ----------------
	// 每首：bpm、每小节的步数（16 分音符）、几轨 pattern
	const SONGS = {
		lobby: {
			bpm: 84, bars: 4,
			chords: [ [ 65, 69, 72, 76 ], [ 64, 67, 71, 74 ], [ 62, 65, 69, 72 ], [ 60, 64, 67, 71 ] ],
			step( i, t, bar ) {

				const s = i % 16;
				if ( s === 0 || s === 10 ) kick( t, 0.5 );
				if ( s === 4 || s === 12 ) rim( t );
				if ( s % 2 === 0 ) hat( t, 0.03 );
				if ( s === 0 ) for ( const n of this.chords[ bar % 4 ] ) keys( t, n, 2.6 );
				if ( s === 0 || s === 7 ) bass( t, this.chords[ bar % 4 ][ 0 ] - 24, 0.5, 0.18 );
				if ( s === 14 && bar % 2 ) keys( t, this.chords[ bar % 4 ][ 3 ] + 12, 0.4, 0.05 );

			}
		},
		fight: {
			// phonk 风：808 + 牛铃旋律（旋律是自己写的）
			bpm: 128, bars: 4,
			mel: [ 81, 0, 79, 81, 0, 84, 81, 0, 79, 0, 76, 79, 0, 76, 74, 0 ],
			mel2: [ 77, 0, 76, 77, 0, 81, 77, 0, 76, 0, 72, 74, 0, 72, 69, 0 ],
			step( i, t, bar ) {

				const s = i % 16;
				if ( s === 0 || s === 6 || s === 10 ) kick( t, 0.9 );
				if ( s === 4 || s === 12 ) clap( t );
				hat( t, s % 4 === 2 ? 0.06 : 0.03 );
				if ( bar % 4 === 3 && s >= 12 ) hat( t + 60 / 128 / 8, 0.04 );
				const m = ( bar % 2 ? this.mel2 : this.mel )[ s ];
				if ( m ) cowbell( t, m );
				if ( s === 0 || s === 6 || s === 10 ) bass808( t, ( bar % 2 ? 41 : 45 ) - ( s === 10 ? 2 : 0 ), 0.34 );

			}
		},
		boss: {
			bpm: 150, bars: 4,
			riff: [ 57, 57, 69, 57, 67, 57, 65, 64, 57, 57, 69, 57, 72, 71, 69, 67 ],
			step( i, t, bar ) {

				const s = i % 16;
				if ( s % 4 === 0 || s === 14 ) kick( t, 1 );
				if ( s === 4 || s === 12 ) clap( t );
				hat( t, 0.04 );
				lead( t, this.riff[ s ] - ( bar % 4 === 2 ? 2 : 0 ), 0.12 );
				if ( s % 2 === 0 ) bass808( t, 33, 0.2 );
				// 救护车“滴嘟”当和声
				if ( bar % 2 === 1 && ( s === 0 || s === 8 ) ) {

					tone( { type: 'square', f: NOTE( 76 ), t, d: 0.36, vol: 0.025, bus: musicBus, filter: { f: 2000 } } );
					tone( { type: 'square', f: NOTE( 72 ), t: t + 0.4, d: 0.36, vol: 0.025, bus: musicBus, filter: { f: 2000 } } );

				}

			}
		},
		elevator: {
			// 电梯音乐：bossa nova
			bpm: 116, bars: 4,
			chords: [ [ 62, 65, 69, 72 ], [ 67, 71, 74, 77 ], [ 60, 64, 67, 71 ], [ 57, 61, 64, 67 ] ],
			mel: [ 76, 0, 0, 74, 0, 72, 0, 0, 74, 0, 76, 0, 79, 0, 0, 0 ],
			step( i, t, bar ) {

				const s = i % 16;
				if ( [ 0, 3, 6, 10, 13 ].includes( s ) ) for ( const n of this.chords[ bar % 4 ] ) pluck( t, n, 0.035 );
				if ( s === 0 || s === 8 ) bass( t, this.chords[ bar % 4 ][ 0 ] - 24, 0.4, 0.15 );
				if ( s === 6 || s === 14 ) bass( t, this.chords[ bar % 4 ][ 2 ] - 24, 0.3, 0.12 );
				if ( s % 2 === 0 ) noise( { t, d: 0.05, vol: 0.02, f: 6000, type: 'highpass', bus: musicBus } );
				const m = this.mel[ s ];
				if ( m && bar % 2 === 0 ) tone( { type: 'sine', f: NOTE( m ), t, a: 0.03, d: 0.5, vol: 0.08, bus: musicBus, rev: 0.4 } );

			}
		},
		dance: {
			// 科目三风：四拍底鼓 + 五声音阶唢呐风旋律（自己写的）
			bpm: 132, bars: 2,
			mel: [ 74, 76, 79, 76, 81, 79, 76, 74, 76, 79, 81, 84, 81, 79, 76, 79 ],
			step( i, t, bar ) {

				const s = i % 16;
				if ( s % 4 === 0 ) kick( t, 1 );
				if ( s % 4 === 2 ) hat( t, 0.07 );
				if ( s === 4 || s === 12 ) clap( t );
				suona( t, this.mel[ s ] + ( bar % 2 ? 2 : 0 ) );
				if ( s % 4 === 2 ) bass808( t, 38, 0.15 );

			}
		},
		win: {
			bpm: 120, bars: 2,
			step( i, t, bar ) {

				const s = i % 16;
				const ch = bar % 2 ? [ 67, 71, 74 ] : [ 60, 64, 67 ];
				if ( s === 0 || s === 8 ) for ( const n of ch ) lead( t, n + 12, 0.4 );
				if ( s % 4 === 0 ) kick( t, 0.7 );
				hat( t, 0.03 );

			}
		}
	};

	function kick( t, v ) {

		tone( { type: 'sine', f: 150, f2: 42, t, d: 0.32, vol: 0.5 * v, bus: musicBus, glide: 0.12 } );

	}

	function clap( t ) {

		noise( { t, d: 0.12, vol: 0.18, f: 1500, q: 0.8, bus: musicBus, rev: 0.2 } );

	}

	function rim( t ) {

		noise( { t, d: 0.03, vol: 0.12, f: 2500, q: 3, bus: musicBus } );
		tone( { type: 'triangle', f: 800, t, d: 0.03, vol: 0.05, bus: musicBus } );

	}

	function hat( t, v ) {

		noise( { t, d: 0.03, vol: v, f: 8000, type: 'highpass', bus: musicBus } );

	}

	function bass( t, n, d, v ) {

		tone( { type: 'triangle', f: NOTE( n ), t, a: 0.01, d, vol: v, bus: musicBus } );

	}

	function bass808( t, n, d ) {

		tone( { type: 'sine', f: NOTE( n + 12 ), f2: NOTE( n ), t, a: 0.005, d: d * 1.6, vol: 0.38, bus: musicBus, glide: 0.08 } );

	}

	function keys( t, n, d, v = 0.035 ) {

		tone( { type: 'sine', f: NOTE( n ), t, a: 0.02, d, vol: v, bus: musicBus, rev: 0.3 } );
		tone( { type: 'triangle', f: NOTE( n ), t, a: 0.02, d: d * 0.5, vol: v * 0.4, bus: musicBus, detune: 7 } );

	}

	function pluck( t, n, v ) {

		tone( { type: 'triangle', f: NOTE( n ), t, a: 0.003, d: 0.35, vol: v, bus: musicBus, filter: { f: 2400, f2: 600, t: 0.3 } } );

	}

	function cowbell( t, n ) {

		const f = NOTE( n );
		tone( { type: 'square', f, t, a: 0.002, d: 0.16, vol: 0.05, bus: musicBus, filter: { type: 'bandpass', f: f * 1.5 }, q: 2 } );
		tone( { type: 'square', f: f * 1.48, t, a: 0.002, d: 0.12, vol: 0.035, bus: musicBus, filter: { type: 'bandpass', f: f * 1.5 }, q: 2 } );

	}

	function lead( t, n, d ) {

		for ( const det of [ - 9, 9 ] ) tone( { type: 'sawtooth', f: NOTE( n ), t, a: 0.005, d, vol: 0.035, bus: musicBus, detune: det, filter: { f: 2200 } } );

	}

	function suona( t, n ) {

		const o = tone( { type: 'sawtooth', f: NOTE( n ), t, a: 0.01, d: 0.12, vol: 0.05, bus: musicBus, filter: { type: 'bandpass', f: NOTE( n ) * 2.5 }, q: 1.5 } );
		const lfo = ctx.createOscillator(); lfo.frequency.value = 7;
		const lg = ctx.createGain(); lg.gain.value = 12;
		lfo.connect( lg ).connect( o.detune ); lfo.start( t ); lfo.stop( t + 0.15 );

	}

	// 调度器：提前 0.12 秒排下一批音符
	let song = null, nextT = 0, stepI = 0, songName = '';
	function tick() {

		if ( ! ctx || ! song ) return;
		const spb = 60 / song.bpm / 4;
		while ( nextT < ctx.currentTime + 0.12 ) {

			const bar = Math.floor( stepI / 16 );
			song.step( stepI, nextT, bar );
			nextT += spb;
			stepI ++;

		}

	}

	setInterval( tick, 40 );

	function music( name ) {

		if ( ! ctx || name === songName ) return;
		songName = name;
		song = SONGS[ name ] || null;
		stepI = 0;
		nextT = ctx.currentTime + 0.08;
		// 换歌时淡入
		musicBus.gain.cancelScheduledValues( ctx.currentTime );
		musicBus.gain.setValueAtTime( 0.0001, ctx.currentTime );
		musicBus.gain.linearRampToValueAtTime( muted ? 0 : musicGain * duck, ctx.currentTime + 0.6 );

	}

	// ---------------- 朗读 ----------------
	let speaking = false, lastSay = 0;
	function say( text, opts = {} ) {

		if ( muted || ! ( 'speechSynthesis' in window ) ) return false;
		const now = performance.now();
		if ( speaking && ! opts.force ) return false;
		if ( now - lastSay < ( opts.gap ?? 900 ) && ! opts.force ) return false;
		lastSay = now;
		if ( opts.force ) speechSynthesis.cancel();
		const u = new SpeechSynthesisUtterance( text );
		u.lang = 'zh-CN';
		if ( voices.zh ) u.voice = voices.zh;
		u.rate = opts.rate ?? 1.15;
		u.pitch = opts.pitch ?? 1.1;
		u.volume = 1;
		u.onstart = () => {

			speaking = true; setDuck( 0.4 );

		};

		u.onend = u.onerror = () => {

			speaking = false; setDuck( 1 );

		};

		speechSynthesis.speak( u );
		return true;

	}

	function setDuck( v ) {

		duck = v;
		if ( ctx && ! muted ) musicBus.gain.setTargetAtTime( musicGain * duck, ctx.currentTime, 0.15 );

	}

	return {
		init,
		resume() {

			init();
			if ( ctx && ctx.state !== 'running' ) ctx.resume();

		},
		get ready() {

			return !! ctx;

		},
		play( name, ...args ) {

			if ( ! ctx || muted || ! S[ name ] ) return;
			S[ name ]( ctx.currentTime + 0.005, ...args );

		},
		music,
		say,
		setMuted( m ) {

			muted = m;
			if ( ctx ) master.gain.setTargetAtTime( m ? 0 : 0.9, ctx.currentTime, 0.05 );
			if ( m && 'speechSynthesis' in window ) speechSynthesis.cancel();

		},
		get muted() {

			return muted;

		},
		beat() {

			// 当前拍子相位（0~1），给跳舞、点头鸽对节拍用
			if ( ! ctx || ! song ) return 0;
			const spb = 60 / song.bpm;
			return ( ( ctx.currentTime ) / spb ) % 1;

		}
	};

}
