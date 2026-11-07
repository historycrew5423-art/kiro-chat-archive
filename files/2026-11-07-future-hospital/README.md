# 未来医院（暂名）· 袋鼠肉鸽

按参考图做的 three.js 第三人称肉鸽：夕阳、白色未来医院、红十字、垂直绿化、湖和远处的城市。
医院里面整个做出来了，可以走进去，一层一层往上打。
主角还是绿环之城的袋鼠火枪手。这次在 Blender 里重新绑了骨骼，能正常走路、跑、跳、攻击和跳舞。

**直接打开（电脑浏览器，推荐 Chrome）：**
[https://htmlpreview.github.io/?https://github.com/historycrew5423-art/kiro-chat-archive/blob/main/files/2026-11-07-future-hospital/index.html](https://htmlpreview.github.io/?https://github.com/historycrew5423-art/kiro-chat-archive/blob/main/files/2026-11-07-future-hospital/index.html)

**短局演示**（只打 2F，然后直接上屋顶打 Boss）：
[…/index.html?demo=1](https://htmlpreview.github.io/?https://github.com/historycrew5423-art/kiro-chat-archive/blob/main/files/2026-11-07-future-hospital/index.html?demo=1)

第一次打开要下载约 5 MB，等进度条走完。卡的话在链接末尾加 `?q=mid` 或 `?q=low`；要和演示一起用，写成 `?demo=1&q=low`。

## 操作

| 按键 | 作用 |
| --- | --- |
| WASD | 移动 |
| 鼠标 | 转镜头（点一下画面锁定鼠标，Esc 解锁并暂停） |
| 左键 | 扔口罩（按住连发） |
| 右键 | 按住蓄力，松开扔 N95（穿透，能打掉 Boss 的护盾） |
| F | 袋鼠飞踢（把怪踢飞） |
| Shift | 冲刺（袋鼠大跳，途中无敌） |
| 空格 | 跳（能躲 Boss 砸地的冲击波） |
| Q | 大招（圆圈充满后） |
| E | 互动：挂号、坐电梯、商店、休息室、药箱 |
| Tab | 展开本局梗卡的效果说明，再按一次收起 |
| 1 / 2 / 3 | 选卡 |

## 一局的流程

1. 标题画面用参考图的机位。点击开始，镜头飞到广场上的袋鼠身后。
2. 走进 1F 门诊大厅，在挂号处按 E 开局（大厅里还藏着一只鸽子彩蛋）。
3. 坐西北角的电梯上 2F。2F、3F、4F 每层是 2×2 的四个房间：电梯厅 → 二选一的门（门牌写着奖励偏向攻击、防御还是召唤）→ 房间 → 出口电梯。房间有战斗、精英、商店、休息室、药箱几种，每层的科室主题不同。
4. 屋顶花园打 Boss「冠状病毒国王（暂定）」。
5. 通关或倒下都会出“人生总结”，按得分分五档：夯、顶级、人上人、NPC、拉完了。然后可以人生重开。

## 肉鸽部分

- 梗卡分攻击、防御、召唤、大招四类。稀有度是普通 60%、稀有 30%、传说 10%，同一张最多叠 3 层。
- 凑齐指定的两张会出合体卡，例如云监工 + 呕泥酱 = 基建狂魔。
- 拿卡的途径：升级三选一、清完房间三选一、商店 30 金币一张、药箱白拿一张。休息室回 40% 生命。
- 连击到 10、25、50、100 会弹梗字、放音效。
- 大招有四种，拿到对应的大招卡就换：
  - 奶-蛙之波（默认）：镜头推到袋鼠眼前，慢放，金色冲击波扫过全场。
  - 科目三：迪斯科球降下来，全场的怪被迫一起跳 5 秒，每拍掉血。
  - 袋中乾坤：从育儿袋里掏出离谱的东西砸下去（双开门冰箱、大鹅、一锅炖不下的鲲……）。
  - 最直白最不绕弯子：一句大字台词变成光束横扫过去。
- Boss 一共三个阶段，2500 血：
  - 第一阶段：身上有 6 个护盾，N95 打一次掉一个。
  - 第二阶段：开始跳起来砸地，落地放冲击波，跳起来能躲。
  - 第三阶段：变大、变红，毒雾往里收，大招直接充满。
  - 打败以后，国王被一个巨大的口罩包住，飘上天。

## 内容红线（策划方案第 16 节）

- 不出现死亡、病床、病人。病毒是卡通怪，被打败的病毒会被口罩包住，飘到天花板上或天上。
- 不用真人的形象、照片和声音。台词用浏览器自带的中文朗读，同时出字幕。
- 不用原曲。音乐和音效全部用 Web Audio 在浏览器里现场合成。
- 不出现品牌 logo。
- 2024~2026 年的网络热梗都标了【待团队确认】，见 `src/data/memes.js`。

## 给队友：想改什么去哪个文件

| 想改 | 文件 |
| --- | --- |
| 梗卡、台词、Boss 喊话、育儿袋里的东西、结算档位 | `src/data/memes.js`（这些内容都集中在这一个文件） |
| 卡的效果 | `src/game/cards.js`（数值）、`src/game/combat.js`（攻击）、`src/game/abilities.js`（大招和召唤物） |
| 每层刷什么怪 | `src/game/game.js` 顶部的 `WAVES` |
| 怪的血量、速度、伤害 | `src/game/enemies.js` 的 `TYPES` |
| Boss | `src/game/boss.js` |
| 袋鼠的动作 | `src/game/kangaroo.js`（全部是代码算的程序动画） |
| 操作和镜头 | `src/game/player.js` |
| 音乐、音效、朗读 | `src/audio/audio.js` |
| 界面 | `index.html`（样式）、`src/game/hud.js` |
| 外景 | `src/world/` 里的 terrain、water、hospital、vegetation、city；开场机位和太阳方向在 `src/config.js` |
| 室内 | `src/world/interior.js`、`props.js`、`interiorMaterials.js`；每层房间怎么排在 `src/game/layout.js` |
| 画面后期（光束、泛光、调色、景深） | `src/render/post.js`、`atmosphere.js`、`sky.js` |

## 改完怎么重新打包

```bash
npm install
npm run build     # 压缩版 app.js，提交到 GitHub 用这个
npm run dev       # 不压缩、带 sourcemap，本地调试用
node serve.mjs    # 本地预览：http://localhost:8765
```

`app.js` 是打包出来的文件，改了 `src/` 一定要重新打包，否则网页上看不到变化。

网址参数：`demo=1` 短局；`q=high | mid | low` 画质；`debug` 左下角显示状态。

## 用到的素材

| 素材 | 来源 | 许可 |
| --- | --- | --- |
| 天空 `assets/sky_1k.hdr` | [Poly Haven · syferfontein_1d_clear_puresky](https://polyhaven.com/a/syferfontein_1d_clear_puresky) | CC0 |
| 树叶 `assets/leaves.webp` | 用 [Poly Haven · island_tree_02](https://polyhaven.com/a/island_tree_02) 的叶片贴图拼成的叶簇（沿用绿环之城） | CC0 |
| 岩石 `assets/mossy_rock_*.jpg` | [Poly Haven · mossy_rock](https://polyhaven.com/a/mossy_rock) | CC0 |
| 草地 `assets/leafy_grass_*.jpg` | [Poly Haven · leafy_grass](https://polyhaven.com/a/leafy_grass) | CC0 |
| 主角 `assets/kangaroo.glb` | 用户提供，Tripo 生成。这次用 Blender 5.2 绑了 25 根骨头 | 未注明，见下方说明 |

医院、室内、家具、病毒、Boss、召唤物、迪斯科球、城市的形状，还有全部音乐和音效，都是代码生成的。

主角模型的许可：模型是用户用 Tripo 生成后提供的，文件里没有写许可信息。仓库是公开的，如果模型不能公开，请告诉 Kiro 删掉。

袋鼠绑骨：Blender 自带的自动权重在这个模型上失败（模型大约一半的面不是封闭网格）。所以 `rig/rig.py` 按身体分区自己算权重，再平滑 4 遍。剑固定在 `sword` 骨头上，挂在胯部。
运行方法见 [files/2026-11-05-blender-headless](../2026-11-05-blender-headless)。

## 已知限制

- 沙盒里没有显卡，只在软件渲染下测过：完整流程能从挂号打到 Boss、通关、人生重开，没有报错。真机帧率没测过。如果卡，先用 `?q=low`。
- 只做了电脑版（键盘 + 鼠标），手机上不能玩。
- 台词用的是浏览器自带的朗读，Mac 上是系统的中文语音，以后可以换成团队配音。
- Boss 名字、大招名字都是暂定的。
