// 键盘和鼠标。第一次点击画面时锁定鼠标；Esc 解锁（浏览器默认行为），游戏据此暂停。

export function createInput( canvas ) {

	const keys = new Set();
	const pressed = new Set(); // 这一帧刚按下
	const mouse = { dx: 0, dy: 0, left: false, right: false, leftPressed: false, rightPressed: false, rightReleased: false, wheel: 0 };
	const state = { locked: false, enabled: true };

	addEventListener( 'keydown', ( e ) => {

		if ( e.code === 'Tab' ) e.preventDefault();
		if ( ! keys.has( e.code ) ) pressed.add( e.code );
		keys.add( e.code );

	} );
	addEventListener( 'keyup', ( e ) => keys.delete( e.code ) );
	addEventListener( 'blur', () => {

		keys.clear();
		mouse.left = mouse.right = false;

	} );
	canvas.addEventListener( 'contextmenu', ( e ) => e.preventDefault() );
	canvas.addEventListener( 'mousedown', ( e ) => {

		if ( ! state.enabled ) return;
		if ( ! state.locked && state.wantLock ) {

			canvas.requestPointerLock?.();

		}

		if ( e.button === 0 ) {

			mouse.left = true;
			mouse.leftPressed = true;

		}

		if ( e.button === 2 ) {

			mouse.right = true;
			mouse.rightPressed = true;

		}

	} );
	addEventListener( 'mouseup', ( e ) => {

		if ( e.button === 0 ) mouse.left = false;
		if ( e.button === 2 ) {

			if ( mouse.right ) mouse.rightReleased = true;
			mouse.right = false;

		}

	} );
	addEventListener( 'mousemove', ( e ) => {

		if ( state.locked ) {

			mouse.dx += e.movementX;
			mouse.dy += e.movementY;

		}

	} );
	addEventListener( 'wheel', ( e ) => {

		mouse.wheel += Math.sign( e.deltaY );

	}, { passive: true } );
	document.addEventListener( 'pointerlockchange', () => {

		state.locked = document.pointerLockElement === canvas;
		state.onLockChange?.( state.locked );

	} );

	return {
		keys, pressed, mouse, state,
		down: ( code ) => keys.has( code ),
		hit: ( code ) => pressed.has( code ),
		axis() {

			const x = ( keys.has( 'KeyD' ) || keys.has( 'ArrowRight' ) ? 1 : 0 ) - ( keys.has( 'KeyA' ) || keys.has( 'ArrowLeft' ) ? 1 : 0 );
			const y = ( keys.has( 'KeyW' ) || keys.has( 'ArrowUp' ) ? 1 : 0 ) - ( keys.has( 'KeyS' ) || keys.has( 'ArrowDown' ) ? 1 : 0 );
			return { x, y };

		},
		// 每帧结束时调用，清掉“刚按下”的状态
		endFrame() {

			pressed.clear();
			mouse.dx = mouse.dy = 0;
			mouse.leftPressed = mouse.rightPressed = mouse.rightReleased = false;
			mouse.wheel = 0;

		},
		lock() {

			state.wantLock = true;
			canvas.requestPointerLock?.();

		},
		unlock() {

			state.wantLock = false;
			if ( document.pointerLockElement ) document.exitPointerLock();

		}
	};

}
