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
- **`read_file` 读不到新截图时**：在同一个目录里用 `fs_write` 随便写一个小文件，再 `read_file` 就能读到。等再久也没用，写一次文件会触发同步。
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

## 沙盒的文件系统

- 命令的 `cwd` 不是 `/tmp` 时，上一条命令写进 `/tmp` 的文件可能看不到（见上一节）。想跨命令保留的临时文件，放在 `/projects/sandbox/` 下面。
- 另一个装 Python 包的办法：`python3 -m pip install --target /projects/sandbox/<目录>/py <包名>`，运行时加 `PYTHONPATH`。Pillow 这样装可以用。
- 没有 ImageMagick、xxd。图片处理用 Pillow。

## 下载用户给的临时文件

- tmpfiles.org 的分享链接是一个网页。真正的下载链接在页面里，形如 `https://tmpfiles.org/dl/<时间戳>.<签名>/<id>/<文件名>`，用 `grep -o 'href="https://tmpfiles.org/dl/[^"]*"'` 取出来，带上 `-e <分享链接>`（Referer）下载。
- 这类文件会过期，拿到后马上存进仓库。

## 免费素材

- Poly Haven（全部 CC0）有接口：`https://api.polyhaven.com/assets?t=hdris|models|textures`、`https://api.polyhaven.com/files/<id>`；缩略图 `https://cdn.polyhaven.com/asset_img/thumbs/<id>.png?width=512&height=256`。
- 它的树模型都是几百万面，不能直接用在网页里；但模型的贴图（比如叶片贴图）可以单独下载使用。

## 网页通过 htmlpreview 打开时加载素材

- htmlpreview 会处理 `<script src>`，但页面里 JS 用相对路径加载的文件（贴图、模型）会指向 htmlpreview.github.io 自己，加载失败。
- 做法：检测 `location.hostname === 'htmlpreview.github.io'`，从地址里解析出仓库和目录，改从 `raw.githubusercontent.com/<owner>/<repo>/<branch>/<dir>/` 加载。raw.githubusercontent.com 返回 `Access-Control-Allow-Origin: *`，贴图和 GLB 都能跨域加载。见 `files/2026-11-05-solarpunk-game/src/assets.js`。

## 连外部机器（比如用户租的 GPU 电脑）

2026-11-05 第 22 轮测过：

- 沙盒能用 SSH 连出去：`ssh -T git@github.com` 能连上，因为没有密钥返回 `Permission denied (publickey)`。网络模式是 `OPEN_INTERNET`，普通 TCP（80 端口）和 HTTPS 也都通。
- 用 bash 的 `/dev/tcp` 读 SSH 欢迎信息的测试会误报“连不上”，要用真正的 `ssh` 命令测。
- 登录凭据不能经过聊天：聊天记录会同步到公开仓库。做法是在沙盒里生成密钥对，只把公钥给用户加到机器上；私钥不进仓库。机器的 IP 和用户名也不写进归档。
- 沙盒在会话之间可能不保留文件，下次会话可能要重新生成密钥。

## 在有显卡的机器上让无头 Chrome 跑 WebGPU

- Linux 容器里要处理：Vulkan 加载器版本要够新（NVIDIA 570 以上驱动要 Vulkan 1.4）、装和驱动版本配套的 `libnvidia-gl-<版本>`、页面必须是安全上下文（`http://localhost`，不能是 `about:blank` 或 `file://`）、Puppeteer 默认会加 `--use-angle=swiftshader-webgl` 要去掉、Dawn 自己的显卡黑名单要用 `--enable-dawn-features=allow_unsafe_apis,disable_adapter_blocklist` 关掉。完整步骤见 [How to get WebGPU in Headless Chrome on Cloud GPUs](https://tigerabrodi.blog/how-to-get-webgpu-in-headless-chrome-on-cloud-gpus)（作者在 RunPod、Colab、Modal 上验证过）。
- Browserbase、Browserless 免费档、AWS Lambda、Vercel 这类没有显卡，只能软件渲染。
- Middle-earth 项目的经验：无头 Chrome 里直接截 WebGPU 页面可能是黑的，要从渲染目标读像素再存图。
- 云游戏电脑一类通常只给远程桌面客户端，不一定能 SSH；这种机器可以走“GitHub 中转”：机器上跑脚本拉分支、渲染截图、推回仓库。

## 显卡租用平台（2026-11-05 第 23 轮调研）

| | AutoDL | RunPod |
| --- | --- | --- |
| 地区 | 国内 | 海外 |
| 付款 | 人民币充值；开放 API 要实名认证 | 先充值后扣费，信用卡或加密货币；国际卡交易容易被风控拒绝 |
| 价格 | 第三方指南（2026-03）：RTX 3090 约 ¥1.20/时，4090D 约 ¥1.88/时 | 官网（2026-11）：A5000 $0.27、3090 $0.50、A40 $0.59、4090 $0.89 每小时，按秒计费 |
| 从沙盒能不能连 | 官网能访问，SSH 域名（`connect.<地区>.seetacloud.com`）能解析 | 官网和 REST API（`rest.runpod.io`，无密钥返回 401）能访问 |
| 无头 Chrome 跑 WebGPU | 没找到验证记录，要实测 | 有人在 A40（驱动 570）上验证过 |
| 给 AI 用的工具 | 非官方 [AutoDL-cli](https://github.com/Minato-Aqukin/AutoDL-cli)：命令行 + MCP，开关机、TTL 自动关机，需要开发者 Token；[autodl-guide](https://github.com/JoeyYu23/autodl-guide) 讲怎么配合 AI 编程助手用 | 官方 API 和命令行；还有带显卡加速的远程桌面模板 |

- AutoDL 访问 GitHub 要先 `source /etc/network_turbo`（它自带的加速）。
- 不推荐：云游戏电脑（一般只有远程桌面，不能 SSH）、Colab（能跑 WebGPU 但不能 SSH、会断）、Browserbase 一类云浏览器（没有显卡）。
- 接入方式：用户在网页控制台开机，打开 JupyterLab 终端粘贴一行命令把 Kiro 的公钥加进 `authorized_keys`，再把 SSH 地址和端口告诉 Kiro。不要在聊天里发 root 密码或开发者 Token（Token 能直接花账户的钱，聊天又会同步到公开仓库）。
- 第一次用先做便宜的测试：`nvidia-smi`、`vulkaninfo --summary`，再用无头 Chrome 检查 `navigator.gpu.requestAdapter()` 能不能拿到真显卡（不是 fallback）。
