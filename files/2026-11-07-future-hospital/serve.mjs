// 本地预览用的静态文件服务器：node serve.mjs，然后打开 http://localhost:8765
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath( new URL( '.', import.meta.url ) );
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.glb': 'model/gltf-binary', '.hdr': 'application/octet-stream', '.json': 'application/json' };
const port = Number( process.env.PORT || 8765 );

createServer( async ( req, res ) => {

	const path = normalize( decodeURIComponent( new URL( req.url, 'http://x' ).pathname ) ).replace( /^(\.\.[/\\])+/, '' );
	const file = join( root, path.endsWith( '/' ) ? path + 'index.html' : path );
	if ( ! file.startsWith( root ) ) {

		res.writeHead( 403 ).end();
		return;

	}

	try {

		const body = await readFile( file );
		res.writeHead( 200, { 'Content-Type': types[ extname( file ) ] || 'application/octet-stream', 'Cache-Control': 'no-store' } ).end( body );

	} catch {

		res.writeHead( 404 ).end( 'not found' );

	}

} ).listen( port, '127.0.0.1', () => console.log( `http://localhost:${ port }` ) );
