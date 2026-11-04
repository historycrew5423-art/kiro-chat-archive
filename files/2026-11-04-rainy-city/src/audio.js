// 雨声全部用 Web Audio 实时合成：低频雨幕 + 高频沙沙声 + 随机雨滴 + 闪电后的雷声。
// 浏览器要求用户点一下才能出声，所以由按钮触发。
export function createRainAudio() {

	let ctx = null;
	let master = null;
	let noiseBuf = null;
	let dropTimer = 0;
	let on = false;

	function noiseSource() {

		const src = ctx.createBufferSource();
		src.buffer = noiseBuf;
		src.loop = true;
		return src;

	}

	function start() {

		ctx = new ( window.AudioContext || window.webkitAudioContext )();
		master = ctx.createGain();
		master.gain.value = 0;
		master.connect( ctx.destination );

		const len = ctx.sampleRate * 4;
		noiseBuf = ctx.createBuffer( 2, len, ctx.sampleRate );
		for ( let ch = 0; ch < 2; ch ++ ) {

			const d = noiseBuf.getChannelData( ch );
			let b = 0;
			for ( let i = 0; i < len; i ++ ) {

				const w = Math.random() * 2 - 1;
				b = 0.97 * b + 0.03 * w;
				d[ i ] = w * 0.55 + b * 3.0;

			}

		}

		// 低沉的雨幕
		const s1 = noiseSource();
		const lp = ctx.createBiquadFilter();
		lp.type = 'lowpass';
		lp.frequency.value = 900;
		const g1 = ctx.createGain();
		g1.gain.value = 0.55;
		s1.connect( lp ).connect( g1 ).connect( master );
		s1.start();

		// 高频沙沙声
		const s2 = noiseSource();
		const hp = ctx.createBiquadFilter();
		hp.type = 'bandpass';
		hp.frequency.value = 5200;
		hp.Q.value = 0.6;
		const g2 = ctx.createGain();
		g2.gain.value = 0.16;
		s2.connect( hp ).connect( g2 ).connect( master );
		s2.start( 0, 1.3 );

		master.gain.linearRampToValueAtTime( 0.7, ctx.currentTime + 2.5 );
		scheduleDrops();

	}

	// 近处雨滴打在栏杆、积水上的“嗒嗒”声
	function scheduleDrops() {

		clearInterval( dropTimer );
		dropTimer = setInterval( () => {

			if ( ! ctx || ctx.state !== 'running' ) return;
			const n = 1 + Math.floor( Math.random() * 3 );
			for ( let i = 0; i < n; i ++ ) {

				const t = ctx.currentTime + Math.random() * 0.08;
				const src = noiseSource();
				const bp = ctx.createBiquadFilter();
				bp.type = 'bandpass';
				bp.frequency.value = 1400 + Math.random() * 5000;
				bp.Q.value = 6 + Math.random() * 10;
				const g = ctx.createGain();
				const amp = 0.05 + Math.random() * 0.25;
				g.gain.setValueAtTime( 0, t );
				g.gain.linearRampToValueAtTime( amp, t + 0.002 );
				g.gain.exponentialRampToValueAtTime( 0.0001, t + 0.03 + Math.random() * 0.07 );
				const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
				if ( pan ) {

					pan.pan.value = Math.random() * 2 - 1;
					src.connect( bp ).connect( g ).connect( pan ).connect( master );

				} else {

					src.connect( bp ).connect( g ).connect( master );

				}

				src.start( t, Math.random() * 3 );
				src.stop( t + 0.15 );

			}

		}, 70 );

	}

	return {

		get on() {

			return on;

		},

		toggle() {

			if ( ! ctx ) {

				start();
				on = true;

			} else if ( on ) {

				ctx.suspend();
				on = false;

			} else {

				ctx.resume();
				on = true;

			}

			return on;

		},

		thunder( delay, power ) {

			if ( ! ctx || ! on ) return;
			const t = ctx.currentTime + delay;
			const src = noiseSource();
			const lp = ctx.createBiquadFilter();
			lp.type = 'lowpass';
			lp.frequency.setValueAtTime( 260, t );
			lp.frequency.exponentialRampToValueAtTime( 70, t + 4 );
			const g = ctx.createGain();
			g.gain.setValueAtTime( 0, t );
			g.gain.linearRampToValueAtTime( 1.1 * power, t + 0.25 );
			g.gain.linearRampToValueAtTime( 0.7 * power, t + 0.9 );
			g.gain.exponentialRampToValueAtTime( 0.001, t + 5.5 );
			src.connect( lp ).connect( g ).connect( master );
			src.start( t, Math.random() * 3 );
			src.stop( t + 6 );

		}

	};

}
