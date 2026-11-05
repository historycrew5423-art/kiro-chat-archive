// 声音全部用 Web Audio 实时合成：高处的风、远处城市的低鸣、鸟叫、蹦跳声、拾取声、电梯声、通关和弦。
export function createAudio() {

	let ctx = null, master = null, noise = null, on = false, birdTimer = 0;

	function noiseBuffer() {

		const len = ctx.sampleRate * 3;
		const b = ctx.createBuffer( 2, len, ctx.sampleRate );
		for ( let ch = 0; ch < 2; ch ++ ) {

			const d = b.getChannelData( ch );
			let v = 0;
			for ( let i = 0; i < len; i ++ ) {

				const w = Math.random() * 2 - 1;
				v = 0.98 * v + 0.02 * w;
				d[ i ] = w * 0.3 + v * 3.5;

			}

		}

		return b;

	}

	function loop( type, f, q, gain, lfo ) {

		const s = ctx.createBufferSource();
		s.buffer = noise;
		s.loop = true;
		const flt = ctx.createBiquadFilter();
		flt.type = type;
		flt.frequency.value = f;
		flt.Q.value = q;
		const g = ctx.createGain();
		g.gain.value = gain;
		s.connect( flt ).connect( g ).connect( master );
		s.start( 0, Math.random() * 2 );
		if ( lfo ) {

			const o = ctx.createOscillator();
			o.frequency.value = lfo;
			const og = ctx.createGain();
			og.gain.value = gain * 0.6;
			o.connect( og ).connect( g.gain );
			o.start();

		}

	}

	function tone( freq, t0, dur, vol, type = 'sine', slide = 1 ) {

		const o = ctx.createOscillator();
		o.type = type;
		o.frequency.setValueAtTime( freq, t0 );
		if ( slide !== 1 ) o.frequency.exponentialRampToValueAtTime( freq * slide, t0 + dur );
		const g = ctx.createGain();
		g.gain.setValueAtTime( 0, t0 );
		g.gain.linearRampToValueAtTime( vol, t0 + 0.01 );
		g.gain.exponentialRampToValueAtTime( 0.0005, t0 + dur );
		o.connect( g ).connect( master );
		o.start( t0 );
		o.stop( t0 + dur + 0.05 );

	}

	function chirp() {

		if ( ! ctx || ctx.state !== 'running' ) return;
		const t = ctx.currentTime + 0.02;
		const base = 2500 + Math.random() * 2000;
		const n = 2 + Math.floor( Math.random() * 4 );
		for ( let i = 0; i < n; i ++ ) tone( base * ( 0.9 + Math.random() * 0.3 ), t + i * 0.1, 0.08, 0.025, 'sine', Math.random() < 0.5 ? 1.3 : 0.75 );

	}

	function start() {

		ctx = new ( window.AudioContext || window.webkitAudioContext )();
		master = ctx.createGain();
		master.gain.value = 0;
		master.connect( ctx.destination );
		noise = noiseBuffer();
		loop( 'lowpass', 320, 0.7, 0.35, 0.07 );
		loop( 'bandpass', 900, 0.4, 0.06, 0.11 );
		loop( 'lowpass', 90, 1.0, 0.25, 0 );
		master.gain.linearRampToValueAtTime( 0.8, ctx.currentTime + 2 );
		const sched = () => {

			birdTimer = setTimeout( () => {

				chirp();
				sched();

			}, 2000 + Math.random() * 5000 );

		};

		sched();

	}

	const api = {
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
		ensure() {

			if ( ! ctx ) {

				start();
				on = true;

			}

		},
		hop( power ) {

			if ( ! ctx || ! on ) return;
			const t = ctx.currentTime;
			tone( 140 + power * 60, t, 0.12, 0.05 * power, 'triangle', 0.6 );

		},
		land( impact ) {

			if ( ! ctx || ! on ) return;
			const t = ctx.currentTime;
			const s = ctx.createBufferSource();
			s.buffer = noise;
			const f = ctx.createBiquadFilter();
			f.type = 'lowpass';
			f.frequency.value = 500;
			const g = ctx.createGain();
			g.gain.setValueAtTime( 0.15 * ( 0.3 + impact ), t );
			g.gain.exponentialRampToValueAtTime( 0.001, t + 0.12 );
			s.connect( f ).connect( g ).connect( master );
			s.start( t, Math.random() * 2 );
			s.stop( t + 0.15 );

		},
		pickup( k ) {

			if ( ! ctx || ! on ) return;
			const t = ctx.currentTime;
			const base = 660 * Math.pow( 2, ( k % 5 ) / 12 * 2 );
			tone( base, t, 0.35, 0.08 );
			tone( base * 1.5, t + 0.08, 0.4, 0.06 );
			tone( base * 2, t + 0.16, 0.5, 0.04 );

		},
		elevator() {

			if ( ! ctx || ! on ) return;
			const t = ctx.currentTime;
			tone( 110, t, 10, 0.06, 'sawtooth', 1.6 );
			tone( 220, t, 10, 0.02, 'sine', 1.6 );

		},
		win() {

			if ( ! ctx || ! on ) return;
			const t = ctx.currentTime;
			[ 523, 659, 784, 1047 ].forEach( ( f, i ) => tone( f, t + i * 0.12, 2.5, 0.06 ) );

		}
	};
	return api;

}
