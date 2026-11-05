# kiro-chat-archive

Kiro 会话中产生的文件、完整聊天记录和经验总结。

> 这是公开仓库，任何人都能看到。请不要在聊天里发送密码、密钥、身份证号等敏感信息。

## 目录结构

```
chat-history/            每次会话的完整聊天记录，文件名为 YYYY-MM-DD[-主题].md
files/YYYY-MM-DD-主题/    该次会话产生的文件（代码、文档等）
knowledge/               从会话里总结出来的经验：工作流、踩过的坑、环境限制
.kiro/steering/          Kiro 的同步规则
```

## 经验（knowledge）

| 文档 | 内容 |
| --- | --- |
| [threejs-scene-workflow.md](knowledge/threejs-scene-workflow.md) | 用代码做 Three.js 场景的工作流、技术清单、踩过的坑和修法 |
| [kiro-sandbox-notes.md](knowledge/kiro-sandbox-notes.md) | Kiro 沙盒里 GitHub 权限、网页预览、浏览器截图的限制和绕法 |
| [game-design-notes.md](knowledge/game-design-notes.md) | 游戏设计：方案写得很细却像“看演出”的坑和改法；黑客松游戏的当前方向和疫情题材的取材边界 |
| [writing-preferences.md](knowledge/writing-preferences.md) | 帮用户写简介、报名表等文字的要求 |
| [archive-workflow.md](knowledge/archive-workflow.md) | 归档同步：用户确认过的隐私处理办法；怎样让最后一轮回复也存全文 |
| [video-production.md](knowledge/video-production.md) | 视频：怎么下载和“看完”抖音视频；参考教程的结构；我们教程视频的现状；用网页代码做动画素材 |

## 会话

| 日期 | 主题 | 聊天记录 | 文件 |
| --- | --- | --- | --- |
| 2026-11-04 | 建立归档仓库；Three.js 雨夜城市场景（[直接打开](https://htmlpreview.github.io/?https://github.com/historycrew5423-art/kiro-chat-archive/blob/main/files/2026-11-04-rainy-city/index.html)） | [chat-history/2026-11-04-setup-archive.md](chat-history/2026-11-04-setup-archive.md) | [files/2026-11-04-rainy-city](files/2026-11-04-rainy-city) |
| 2026-11-04 | Three.js 峡谷拱门场景（[直接打开](https://htmlpreview.github.io/?https://github.com/historycrew5423-art/kiro-chat-archive/blob/main/files/2026-11-04-canyon-arch/index.html)） | 同上（第 14 轮起） | [files/2026-11-04-canyon-arch](files/2026-11-04-canyon-arch) |
| 2026-11-05 | 黑客松游戏设计：自我介绍、报名表文字、玩法讨论（记忆穿越方向）、从进入界面到结局的画面流程、选年龄和职业的方向、素材候选表、目标玩家年龄 | [chat-history/2026-11-05-hackathon-game-design.md](chat-history/2026-11-05-hackathon-game-design.md) | 无 |
| 2026-11-05 | 教程视频脚本：看完参考的抖音教程，按 nai 游戏的真实过程写真人出镜教程的分镜脚本、口播稿和剪辑规范；动画样片 | [chat-history/2026-11-05-tutorial-video-script.md](chat-history/2026-11-05-tutorial-video-script.md) | [files/2026-11-05-tutorial-video](files/2026-11-05-tutorial-video) |

## 同步方式

每次 Kiro 会话结束前，Kiro 会把聊天记录全文、产生的文件和新的经验提交到这个仓库，并直接合并到 `main`。
新会话开始时，Kiro 会先读 `knowledge/`。
规则见 [.kiro/steering/archive-sync.md](.kiro/steering/archive-sync.md)。

## 保存不了的东西

- 聊天里发的图片：Kiro 拿不到原文件，只能在聊天记录里用文字描述。想保留原图，需要自己上传到仓库。
- Kiro 的内部思考过程：只保存回复和工具步骤的记录。
- 不同会话之间，Kiro 不会自动记得聊过什么，靠的是这个仓库和一条全局偏好设置。
