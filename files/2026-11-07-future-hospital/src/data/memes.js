// ---------------------------------------------------------------------------
// 梗和台词：全部集中在这一个文件，团队想换梗、改台词、改数值，只改这里。
// 内容红线（策划方案第 16 节）：不出现死亡、病床、病人；不用真人的形象、照片和声音（台词用浏览器朗读或团队重新配音）；
// 不用原曲；品牌不出 logo。
// 年份标注：2020 年的梗来自策划方案 v0.2 的示例卡池；2024~2026 年的是这次加的网络热梗，【待团队确认】。
// ---------------------------------------------------------------------------

// 梗卡。cat：攻击 attack / 防御 defense / 召唤 summon / 大招 ult；rare：0 普通、1 稀有、2 传说
// fx：效果键（在 game/cards.js 里实现），v：1 层的数值
export const CARDS = [
	// ---- 2020 年春天（策划方案 v0.2 第 6.4 节）----
	{ id: 'double', name: '戴两层口罩', year: 2020, cat: 'attack', rare: 0, src: '2020 年为了更保险，很多人一次戴两层口罩', desc: '每次扔出的口罩 +1，左右分开，每个伤害是原来的 70%', fx: 'maskCount', v: 1, say: '两层！双倍安心' },
	{ id: 'coffee', name: '400 次咖啡', year: 2020, cat: 'attack', rare: 1, src: '宅家期间流行手打“400 次咖啡”：搅拌约 400 下才能打出奶泡', desc: '按住攻击越久射速越快，按住 4 秒后射速翻倍', fx: 'coffee', v: 1, say: '搅！搅！搅！' },
	{ id: 'thermo', name: '额温枪', year: 2020, cat: 'attack', rare: 1, src: '2020 年进出小区、商店都要用额温枪测体温', desc: '每扔 5 个口罩，额外射出一道测温光束：穿透，伤害 30，打中冒出“36.5℃”', fx: 'thermo', v: 30, say: '滴，三十六度五' },
	{ id: 'mantou', name: '在家蒸馒头', year: 2020, cat: 'attack', rare: 0, src: '宅家期间，很多人第一次在家学蒸馒头', desc: '口罩有 10% 概率变成大馒头：伤害 ×3，把敌人撞飞', fx: 'mantou', v: 0.1, say: '馒头出锅了' },
	{ id: 'n95rare', name: '一罩难求', year: 2020, cat: 'attack', rare: 1, src: '2020 年初口罩紧缺，很难买到', desc: 'N95 冷却 +50%，伤害 ×2.5，打中的普通敌人直接被包住', fx: 'n95rare', v: 2.5, say: '一罩难求！' },
	{ id: 'nixing', name: '逆行者', year: 2020, cat: 'defense', rare: 1, src: '对逆着人流奔赴武汉的医护和志愿者的称呼', desc: '冲刺距离 +50%，冲刺穿过的敌人受到 30 伤害', fx: 'nixing', v: 30, say: '逆行！' },
	{ id: 'tangping', name: '躺着拯救世界', year: 2020, cat: 'defense', rare: 1, src: '2020 年春节流传的说法：人类第一次躺在家里就能拯救世界', desc: '站着不动 1 秒后进入躺平：口罩伤害 +50%，每秒回 1 点生命', fx: 'tangping', v: 0.5, say: '躺平，也是一种贡献' },
	{ id: 'fat10', name: '宅家胖十斤', year: 2020, cat: 'defense', rare: 0, src: '宅家几个月，很多人自嘲胖了十斤', desc: '最大生命 +30，体型变大 10%，移速 -5%', fx: 'fat', v: 30, say: '胖了，但更抗揍了' },
	{ id: 'banlan', name: '板蓝根', year: 2020, cat: 'defense', rare: 0, src: '2003 年和 2020 年都有人抢购板蓝根，当“万能药”', desc: '每清完一个房间，额外回 15 点生命', fx: 'banlan', v: 15, say: '冲一包板蓝根' },
	{ id: 'yunjiangong', name: '云监工', year: 2020, cat: 'summon', rare: 1, src: '2020 年 1 月，医院工地 24 小时直播，上千万网友在线“监工”', desc: '召唤一台挖掘机跟着你，每 3 秒往前铲一下（扇形 4 米，伤害 25，撞飞）', fx: 'digger', v: 25, say: '叉酱，铲它！' },
	{ id: 'ounijiang', name: '呕泥酱', year: 2020, cat: 'summon', rare: 1, src: '云监工的网友给水泥搅拌车起的外号', desc: '召唤一台水泥搅拌车，每 6 秒倒一滩水泥（半径 3 米，4 秒），水泥里的敌人减速 60%', fx: 'mixer', v: 0.6, say: '呕泥酱上线' },
	{ id: 'disco', name: '云蹦迪', year: 2020, cat: 'summon', rare: 1, src: '宅家期间很多人在直播间里“云蹦迪”', desc: '每 8 秒放一圈蹦迪冲击波（半径 6 米，伤害 20，推开敌人）', fx: 'disco', v: 20, say: '动次打次' },
	{ id: 'dagongren', name: '打工人', year: 2020, cat: 'summon', rare: 0, src: '2020 年下半年的问候语“早安，打工人”', desc: '所有召唤物伤害 +50%', fx: 'summonDmg', v: 0.5, say: '早安，打工人' },
	{ id: 'jiayou', name: '隔窗喊加油', year: 2020, cat: 'ult', rare: 2, src: '2020 年 1 月底，居民在夜里打开窗户，一栋楼接一栋楼地喊加油', desc: '大招放完后 8 秒内攻速翻倍，受到的伤害减半', fx: 'jiayou', v: 8, say: '加油！' },

	// ---- 2024~2026 年的网络热梗【待团队确认】----
	{ id: 'geju', name: '格局打开', year: 2021, cat: 'attack', rare: 0, src: '劝人别太计较、眼光放长远的流行语', desc: '飞踢和所有范围攻击的半径 +40%', fx: 'area', v: 0.4, say: '格局打开！' },
	{ id: 'yaoyao', name: '遥遥领先', year: 2023, cat: 'defense', rare: 1, src: '2023 年起流行的口头禅，形容领先一大截', desc: '移速 +20%，冲刺冷却 -25%', fx: 'yaoyao', v: 0.2, say: '遥遥领先！' },
	{ id: 'potian', name: '泼天的富贵', year: 2024, cat: 'defense', rare: 1, src: '2024 年流行语：突然砸下来的好运', desc: '金币掉落 ×2；击败敌人有 5% 概率下一场金币雨', fx: 'gold', v: 1, say: '泼天的富贵，接住了' },
	{ id: 'yingkong', name: '硬控', year: 2024, cat: 'attack', rare: 1, src: '2024 年流行语：被某个东西牢牢吸引、动不了', desc: '攻击有 15% 概率把敌人硬控 1.2 秒', fx: 'stun', v: 0.15, say: '硬控了属于是' },
	{ id: 'hongwen', name: '红温', year: 2024, cat: 'attack', rare: 1, src: '2024 年流行语：气得脸红、上头', desc: '生命低于一半时，伤害 +45%', fx: 'hongwen', v: 0.45, say: '我红温了！' },
	{ id: 'baode', name: '包的', year: 2024, cat: 'attack', rare: 2, src: '流行语“包的”：这事包在我身上', desc: '敌人被口罩包住时炸开，对周围 3 米造成 25 伤害，能连锁', fx: 'baode', v: 25, say: '包的！' },
	{ id: 'laoshi', name: '已老实，求放过', year: 2024, cat: 'defense', rare: 0, src: '2024 年流行语：被教训以后认怂', desc: '每个房间受到的第一次伤害无效', fx: 'laoshi', v: 1, say: '已老实，求放过' },
	{ id: 'jipai', name: '做完你的做你的', year: 2025, cat: 'defense', rare: 1, src: '2025 年走红的一段炸鸡排视频里的话：再忙也不慌', desc: '周围 8 米内有 8 个以上敌人时，伤害 +35%，受到的伤害 -25%', fx: 'calm', v: 0.35, say: '做完你的做你的' },
	{ id: 'xiexiu', name: '邪修', year: 2025, cat: 'attack', rare: 2, src: '2025 年流行语：用离谱的捷径解决问题', desc: '口罩变成回旋镖：飞出去再飞回来，穿透所有敌人', fx: 'boomerang', v: 1, say: '邪修，但是有用' },
	{ id: 'huoren', name: '活人感', year: 2025, cat: 'defense', rare: 1, src: '2025 年十大流行语之一：真实、鲜活，不像 NPC', desc: '每次升级回 15 点生命；大招充能 +25%', fx: 'huoren', v: 15, say: '活人感拉满' },
	{ id: 'hajimi', name: '哈基米', year: 2025, cat: 'summon', rare: 1, src: '网友对猫的昵称，2025 年随各种二创歌曲刷屏', desc: '召唤一只猫，扑向最近的敌人挠它（每次 18 伤害）', fx: 'cat', v: 18, say: '哈基米，上！' },
	{ id: 'gezi', name: '精神焕发的鸽子', year: 2026, cat: 'summon', rare: 1, src: '2026 年刷屏的魔性点头鸽', desc: '一只点头鸽绕着你飞，点到谁就啄谁（每次 12 伤害），点头跟着音乐节拍', fx: 'pigeon', v: 12, say: '你终于找到了这只精神焕发的鸽子' },
	{ id: 'muyu', name: '电子木鱼', year: 2022, cat: 'defense', rare: 0, src: '敲一下“功德 +1”的手机小程序', desc: '打中敌人 10% 概率功德 +1：回 1 点生命；功德每满 50，最大生命 +10', fx: 'muyu', v: 0.1, say: '功德 +1' },
	{ id: 'suchao', name: '苏超飞踢', year: 2025, cat: 'attack', rare: 1, src: '2025 年爆火的江苏城市足球联赛，口号“比赛第一，友谊第十四”', desc: '飞踢伤害 +60%，被踢飞的敌人会砸伤路上的其他敌人', fx: 'suchao', v: 0.6, say: '友谊第十四！' },
	{ id: 'dajieguo', name: '拿到大结果', year: 2026, cat: 'defense', rare: 2, src: '2026 年流行语：干成了一件大事', desc: '每击败 25 个敌人，掉一个大红包：金币 +30，回 20 点生命', fx: 'jackpot', v: 25, say: '拿到大结果了家人们' },
	// 大招换成别的（拿了就换，最后拿的那个生效）
	{ id: 'kemusan', name: '科目三', year: 2023, cat: 'ult', rare: 2, src: '2023 年底刷屏的魔性舞蹈', desc: '大招变成全场蹦迪：所有敌人被迫一起跳 5 秒，每一拍受到 30 伤害', fx: 'ultDance', v: 30, say: '科目三，走起' },
	{ id: 'daizhong', name: '袋中乾坤', year: 0, cat: 'ult', rare: 2, src: '袋鼠的育儿袋里什么都装得下', desc: '大招变成从育儿袋里掏东西：冰箱、大鹅、一整条鲲……砸下来造成大范围伤害（随机）', fx: 'ultPouch', v: 1, say: '让我看看袋里有什么' },
	{ id: 'doubao', name: '最直白最不绕弯子', year: 2026, cat: 'ult', rare: 2, src: '2026 年网友模仿 AI 助手的说话方式：“我将用最直白、最不绕弯子的方式告诉你”', desc: '大招变成一道横扫全场的大字光束，字越长伤害越高', fx: 'ultText', v: 1, say: '我将用最直白、最不绕弯子的方式告诉你' }
];

// 合体卡：两张前置卡都拿到以后，三选一有 50% 概率出现
export const FUSIONS = [
	{ id: 'jijian', name: '基建狂魔', need: [ 'yunjiangong', 'ounijiang' ], src: '网友对中国建设速度的调侃，2020 年十天建成医院时被大量使用', desc: '挖掘机和搅拌车合体成工程机甲：每 2 秒一铲（伤害 60），铲过的地方留下水泥', fx: 'mech', v: 60, say: '基建狂魔，启动！' },
	{ id: 'zhaijia', name: '宅家战神', need: [ 'tangping', 'fat10' ], src: '两个宅家梗合在一起', desc: '躺平时受到的伤害减半；躺平每持续 10 秒，体型和伤害各 +10%（最多 +50%）', fx: 'zhaijia', v: 0.1, say: '宅家战神' },
	{ id: 'dafa', name: '打发了', need: [ 'coffee', 'double' ], src: '“打发”既指把奶油打出泡，也有“把人打发走”的意思', desc: '射速翻倍以后，每次扔出的口罩数量再翻一倍', fx: 'dafa', v: 1, say: '打发了！' },
	{ id: 'shuangzi', name: '穷山恶水双子星', need: [ 'hajimi', 'gezi' ], src: '2026 年的梗：“低山臭水遇知音，穷山恶水双子星”', desc: '猫和鸽子组成双子星：两个都变大，伤害 ×2，攻击速度 +50%', fx: 'twins', v: 2, say: '低山臭水遇知音，穷山恶水双子星' }
];

// 弹字和台词（say：用浏览器朗读，同时显示字幕）
export const LINES = {
	start: [ '家人们谁懂啊，挂号不用排队了', '袋鼠医生，上班！', '早安，打工人' ],
	roomStart: [ '来了来了', '病毒退！退！退！', '准备好了吗家人们', '这房间有点东西' ],
	roomClear: [ '包的！', '拿捏了', '芭比Q了（说的是病毒）', '这波稳了', '清场！' ],
	combo10: '有点东西', combo25: '杀疯了', combo50: '遥遥领先', combo100: '泰裤辣！',
	crit: [ '暴击！', '这一下有点疼', '硬控！' ],
	hurt: [ '哎哟', '破防了', '我红温了' ],
	lowHp: '血条见底了家人们',
	death: [ '芭比Q了', '人生重开吧', '已老实，求放过' ],
	levelUp: [ '升级！', '变强了也变秃了', '来活了' ],
	elite: '精英怪：偏方怪 来了',
	boss: '冠状病毒国王 驾到',
	bossPhase2: '国王破防了',
	bossPhase3: '国王红温了！',
	bossDown: '国王被包住送走了',
	win: [ '拿到大结果了', '泰裤辣', '这一局，夯！' ],
	shop: [ '欢迎光临', '泼天的富贵' ],
	rest: [ '情绪价值拉满', '躺一会儿' ],
	treasure: [ '开箱！', '好运来' ],
	elevator: [ '电梯里的音乐有点上头', '下一站，病毒窝', '电梯：叮' ],
	rumor: [ '被谣言洗脑了！方向反了', '听说喝白酒能杀病毒（假的）', '偏方害人' ],
	dash: [ '遥遥领先', '溜了溜了' ],
	kick: [ '友谊第十四！', '起飞！', '踢！' ],
	ultName: '奶-蛙之波',
	pigeon: '真棒！你终于找到了这只精神焕发的鸽子',
	idle: [ '我真的会谢', '这是可以说的吗', '尊嘟假嘟' ]
};

// 偏方怪吐出来的谣言气泡
export const RUMORS = [ '喝白酒能杀病毒', '熏醋能消毒', '板蓝根包治百病', '吃大蒜防病毒', '多喝热水就好', '吹风机吹手能杀毒' ];

// 袋中乾坤：从育儿袋里掏出来的东西
export const POUCH = [
	{ name: '一台双开门冰箱', shape: 'fridge', dmg: 160, r: 6 },
	{ name: '一只大鹅', shape: 'goose', dmg: 120, r: 7 },
	{ name: '一整条鲲（一锅炖不下）', shape: 'kun', dmg: 220, r: 10 },
	{ name: '一个巨型馒头', shape: 'mantou', dmg: 140, r: 6 },
	{ name: '一箱板蓝根', shape: 'box', dmg: 130, r: 6 },
	{ name: '另一只袋鼠（它的袋里还有一只）', shape: 'kangaroo', dmg: 180, r: 8 }
];

// 从夯到拉：人生总结的评级（2025 年流行的排名梗）
export const TIERS = [ '夯', '顶级', '人上人', 'NPC', '拉完了' ];
