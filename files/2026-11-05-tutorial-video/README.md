# 教程视频：0 基础用 AI 做游戏

2026-11-05 会话产生的文件。聊天记录见 [chat-history/2026-11-05-tutorial-video-script.md](../../chat-history/2026-11-05-tutorial-video-script.md)。

| 文件 | 内容 |
| --- | --- |
| [教程视频脚本.md](教程视频脚本.md) | 参考视频拆解、我们的定位、分段脚本（每句口播配画面）、剪辑规范、拍摄清单、提词器口播稿、60 秒竖屏切片、要用户决定的事 |
| [sample-chapter.mp4](sample-chapter.mp4) | 动画样片：第一步的章节卡，1920×1080，30 帧，2.5 秒 |
| [chapter.html](chapter.html) | 样片的源文件 |
| [rj-compare.jpg](rj-compare.jpg) | 三版游戏封面并排：青蛙版（nai 提交 7fc649e）→ 人类少年版（f5624fc）→ 奶娃版（b0ed1a4），脚本第 7 段用 |

## 样片怎么重新渲染

1. 把 Noto Sans SC 字体（SIL OFL 许可）下载到 `chapter.html` 同一个文件夹，文件名 `NotoSansSC.ttf`：
   `https://github.com/google/fonts/raw/main/ofl/notosanssc/NotoSansSC%5Bwght%5D.ttf`
   字体有 17 MB，没有放进仓库。
2. 用浏览器打开页面，调用 `window.seek(毫秒)` 跳到某一帧，逐帧截图，再用 ffmpeg 合成视频。具体做法见 [knowledge/video-production.md](../../knowledge/video-production.md)。

## 没有放进仓库的东西

参考视频本身、它的语音转写全文和截图帧都是别人的作品，只在会话里用来分析，没有上传。脚本第一节是 Kiro 自己的拆解和转述。
