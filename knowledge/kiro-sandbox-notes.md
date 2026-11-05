# Kiro 沙盒环境：限制和绕法

来自 2026-11-04 的会话。以后的会话遇到同样的问题，直接按这里的办法做，不要再重复试。

## GitHub

| 操作 | 结果 | 怎么办 |
| --- | --- | --- |
| 新建仓库（`POST /user/repos`） | 403，重试也一样 | 请用户在 github.com/new 手动建空仓库（不勾选 README 等） |
| 开启 GitHub Pages（`POST /repos/.../pages`） | 403 | 请用户在 Settings → Pages 手动开启；不想让用户操作就用下面的预览链接 |
| 推送、开 PR、合并 PR（`PUT /pulls/{n}/merge`） | 可以 | 正常用 |
| 往 PR 分支推送后马上合并 | HTTP 405，但 PR 其实可以合并：GitHub 还没处理完刚推上去的提交（2026-11-05 遇到） | 等几秒，查 `gh api repos/{owner}/{repo}/pulls/{n} --jq .mergeable_state` 是 `clean` 后再合并，并带上 `-f sha=$(git rev-parse HEAD)` |
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
- `read_file` 看图比 shell 晚：shell 里 `ls` 已经能看到的新文件，`read_file` 可能还要再等 10~30 秒才读得到，报 ENOENT 时不是截图失败。
  稳妥做法：用 shell 等文件出现 → 复制到工作区的临时目录 → 再等十几秒 → `read_file`。同一轮里可以先去写别的文件，回头再读。
  文件名不要和以前的截图重名，否则可能读到旧图；判断新图可以用 `find -newer app.js`。
- 页面渲染很慢时，`page.click()` 会因为等页面响应而超时。用 `page.evaluate(() => el.click())` 和 `page.dispatchEvent('#c', 'pointerdown', {...})` 代替。
- 重的场景用 `?q=low` 跑“实时运行 10 秒有没有报错”的检查，用 `?q=high` + 冻结帧截效果图。
- 渲染用 SwiftShader（软件 WebGL），每秒约 1 帧。截图前用页面里的调试开关渲染固定的一帧并停住，否则会超时。
- 软件渲染和真显卡行为不同（例如不会出现 NaN），真机效果要请用户确认。
- 没有中文字体，中文显示成方框。
- 浏览器有外网，可以打开 htmlpreview 等线上页面做最终验证。

## 沙盒网络

- npm、GitHub、普通网站都能访问。

## Python 工具和 ffmpeg（2026-11-05）

| 问题 | 怎么办 |
| --- | --- |
| `pip install` 报 `Read-only file system: '/root/.local/lib'` | `python3 -m venv /tmp/venv`，用 `/tmp/venv/bin/pip` 装 |
| 沙盒里没有 ffmpeg | 在 venv 里装 `imageio-ffmpeg`，用 `python -c "import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())"` 拿到静态版 ffmpeg 的路径 |
| 命令的 `cwd` 不是 `/tmp` 时，有时看不到 `/tmp/venv` 里的文件，报 `No such file or directory`；`cwd=/tmp` 时又正常 | 用到 `/tmp/venv` 的命令一律把 `cwd` 设成 `/tmp`，再在命令里 `cd` 到别处 |
| ffmpeg `drawtext` 的字体路径里有方括号（如 `NotoSans[wght].ttf`），滤镜解析失败 | 先把字体复制成没有特殊字符的文件名 |
| 视频、转写、截图帧这些中间文件 | 放 `/tmp`，不放工作区；需要 `read_file` 看的图再复制到工作区 `.work/` |

下载抖音视频、转写、逐个镜头看画面、用网页做动画视频的完整做法见 `video-production.md`。
