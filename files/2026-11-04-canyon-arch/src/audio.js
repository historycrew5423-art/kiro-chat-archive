// 环境声全部用 Web Audio 实时合成：远处瀑布的轰鸣、近处的流水声、偶尔的鸟叫。
export function createAmbience() {

	let ctx = null;
	let master = null;
	let birdTimer = 0;
	let on = false;

	function noiseBuffer( seconds ) {

		const len = ctx.sampleRate * seconds;
		const buf = ctx.createBuffer( 2, len, ctx.sampleRate );
		for ( let ch = 0; ch < 2; ch ++ ) {

			const d = buf.getChannelData( ch );
			let b = 0;
			for ( let i = 0; i < len; i ++ ) {

				const w = Math.random() * 2 - 1;
				b = 0.985 * b + 0.015 * w;
				d[ i ] = w * 0.35 + b * 4.0;

			}

		}

		return buf;

	}

	function loop( buf, type, freq, q, gain, offset ) {

		const src = ctx.createBufferSource();
		src.buffer = buf;
		src.loop = true;
		const f = ctx.createBiquadFilter();
		f.type = type;
		f.frequency.value = freq;
		f.Q.value = q;
		const g = ctx.createGain();
		g.gain.value = gain;
		src.connect( f ).connect( g ).connect( master );
		src.start( 0, offset );
		return g;

	}

	// 一声鸟叫：几个快速上下滑的音
	function chirp() {

		if ( ! ctx || ctx.state !== 'running' ) return;
		const t0 = ctx.currentTime + 0.05;
		const base = 2200 + Math.random() * 2200;
		const notes = 2 + Math.floor( Math.random() * 4 );
		const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
		const out = ctx.createGain();
		out.gain.value = 0.05 + Math.random() * 0.06;
		if ( pan ) {

			pan.pan.value = Math.random() * 1.6 - 0.8;
			out.connect( pan ).connect( master );

		} else {

			out.connect( master );

		}

		for ( let i = 0; i < notes; i ++ ) {

			const t = t0 + i * ( 0.09 + Math.random() * 0.05 );
			const o = ctx.createOscillator();
			o.type = 'sine';
			const f0 = base * ( 0.9 + Math.random() * 0.3 );
			o.frequency.setValueAtTime( f0, t );
			o.frequency.exponentialRampToValueAtTime( f0 * ( Math.random() < 0.5 ? 1.35 : 0.75 ), t + 0.07 );
			const g = ctx.createGain();
			g.gain.setValueAtTime( 0, t );
			g.gain.linearRampToValueAtTime( 1, t + 0.01 );
			g.gain.exponentialRampToValueAtTime( 0.001, t + 0.08 );
			o.connect( g ).connect( out );
			o.start( t );
			o.stop( t + 0.1 );

		}

	}

	function start() {

		ctx = new ( window.AudioContext || window.webkitAudioContext )();
		master = ctx.createGain();
		master.gain.value = 0;
		master.connect( ctx.destination );
		const buf = noiseBuffer( 4 );
		loop( buf, 'lowpass', 420, 0.7, 0.9, 0 );
		loop( buf, 'bandpass', 1400, 0.5, 0.22, 1.7 );
		loop( buf, 'highpass', 5200, 0.4, 0.04, 2.9 );
		master.gain.linearRampToValueAtTime( 0.6, ctx.currentTime + 3 );
		const schedule = () => {

			birdTimer = setTimeout( () => {

				chirp();
				if ( Math.random() < 0.4 ) setTimeout( chirp, 300 + Math.random() * 500 );
				schedule();

			}, 2500 + Math.random() * 6000 );

		};

		schedule();

	}

	return {

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

		dispose() {

			clearTimeout( birdTimer );

		}

	};

}
