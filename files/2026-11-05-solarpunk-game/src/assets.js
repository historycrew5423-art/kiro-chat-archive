// 素材地址。
// 直接打开（本地服务器、GitHub Pages）时用相对路径。
// 通过 htmlpreview.github.io 打开时，相对路径会指向 htmlpreview 自己的域名，
// 所以从地址里解析出仓库和目录，改成从 raw.githubusercontent.com 读取（它允许跨域）。
function resolveBase() {

	if ( location.hostname === 'htmlpreview.github.io' ) {

		const m = decodeURIComponent( location.search ).match( /github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.*\/)[^/]*$/ );
		if ( m ) return `https://raw.githubusercontent.com/${ m[ 1 ] }/${ m[ 2 ] }/${ m[ 3 ] }/${ m[ 4 ] }`;

	}

	return './';

}

export const BASE = resolveBase();
export const asset = ( name ) => BASE + 'assets/' + name;
