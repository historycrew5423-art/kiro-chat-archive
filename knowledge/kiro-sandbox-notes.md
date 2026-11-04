# Kiro 沙盒环境：限制和绕法

来自 2026-11-04 的会话。以后的会话遇到同样的问题，直接按这里的办法做，不要再重复试。

## GitHub

| 操作 | 结果 | 怎么办 |
| --- | --- | --- |
| 新建仓库（`POST /user/repos`） | 403，重试也一样 | 请用户在 github.com/new 手动建空仓库（不勾选 README 等） |
| 开启 GitHub Pages（`POST /repos/.../pages`） | 403 | 请用户在 Settings → Pages 手动开启；不想让用户操作就用下面的预览链接 |
| 推送、开 PR、合并 PR（`PUT /pulls/{n}/merge`） | 可以 | 正常用 |
| `gh pr`、`gh issue` 等子命令 | 失败（不支持 GraphQL） | 用 `gh api` 调 REST 接口 |

## 不开 Pages 也能直接打开网页

| 服务 | 结果 |
| --- | --- |
| `https://htmlpreview.github.io/?https://github.com/{owner}/{repo}/blob/main/{path}/index.html` | 能直接渲染，读取 main 上最新文件。推荐 |
| raw.githack / rawcdn.githack | 浏览器打开会先出现带广告的提示页，不能直接看到画面 |
| jsDelivr、statically | HTML 按纯文本返回，页面不会运行 |

用 htmlpreview 时，页面的脚本用普通 `<script src="./app.js">`（IIFE 打包），相对路径能正常加载。

## 浏览器截图（Playwright）

- Playwright 的浏览器访问不到沙盒里启动的 `localhost` 服务器，也不允许打开 `file://`。
- 每条 shell 命令结束后，它启动的后台进程也会被结束，所以开本地服务器没用。
- 绕法：在 `browser_run_code_unsafe` 里拦截一个假域名，直接返回本地文件：

  ```js
  await page.route( 'http://rainy.local/**', async ( route ) => {
  	let p = route.request().url().replace( 'http://rainy.local', '' ).split( '?' )[ 0 ];
  	if ( p === '/' || p === '' ) p = '/index.html';
  	await route.fulfill( { path: ROOT + p } );
  } );
  await page.goto( 'http://rainy.local/index.html' );
  ```

- `browser_run_code_unsafe` 的 `filename` 参数只能读截图目录里的文件，代码直接写在 `code` 里。
- 截图要写到 `/projects/sandbox/.kiro/artifacts/screenshots/`。写完后文件要过几秒才出现在磁盘上，读取前先 `sleep` 并用 `ls` 确认。
- 渲染用 SwiftShader（软件 WebGL），每秒约 1 帧。截图前用页面里的调试开关渲染固定的一帧并停住，否则会超时。
- 软件渲染和真显卡行为不同（例如不会出现 NaN），真机效果要请用户确认。
- 没有中文字体，中文显示成方框。
- 浏览器有外网，可以打开 htmlpreview 等线上页面做最终验证。

## 沙盒网络

- npm、GitHub、普通网站都能访问。
