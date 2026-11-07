# 给袋鼠火枪手绑骨（Blender 5.2 无界面运行）：
#   blender -b --factory-startup --python rig.py -- <Tripo 模型.glb> <输出目录>
# 1. 导入 Tripo 模型，按距离合并重复顶点（原模型按 UV 拆成了上千块）
# 2. 建 25 根骨头。Blender 的自动权重（热扩散）在这个模型上失败（大约一半的面不是封闭网格），
#    所以按身体部位分区自己算权重，再在网格上平滑 4 遍；剑整体固定在 sword 骨头上，跟着胯部走
# 3. 摆几个测试姿势渲染出来检查，最后导出带蒙皮的 GLB（游戏里用的是 assets/kangaroo.glb）
import bpy, sys, os, math, bmesh
from mathutils import Vector

argv = sys.argv[sys.argv.index('--') + 1:]
src, outdir = argv[0], argv[1]
os.makedirs(outdir, exist_ok=True)

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)
body = [o for o in bpy.context.scene.objects if o.type == 'MESH'][0]
body.name = 'Kangaroo'
for o in bpy.context.scene.objects:
    o.select_set(False)
bpy.context.view_layer.objects.active = body
body.select_set(True)
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='SELECT')
bpy.ops.mesh.remove_doubles(threshold=0.0003)
bpy.ops.object.mode_set(mode='OBJECT')
print('VERTS after merge', len(body.data.vertices))

# ---- 骨架（Blender 坐标：Z 向上，角色面朝 -Y，角色的左手在 +X）----
C = -0.03  # 身体中线
BONES = [
    ('root', (C, 0, 0), (C, 0, 0.1), None),
    ('hips', (C, 0.0, 0.40), (C, 0.0, 0.48), 'root'),
    ('spine', (C, 0.0, 0.48), (C, 0.0, 0.56), 'hips'),
    ('chest', (C, 0.0, 0.56), (C, 0.0, 0.67), 'spine'),
    ('neck', (C, 0.0, 0.67), (C, -0.01, 0.725), 'chest'),
    ('head', (C - 0.005, -0.01, 0.725), (C - 0.005, -0.02, 0.86), 'neck'),
    ('ear.R', (-0.055, -0.018, 0.865), (-0.088, -0.047, 0.971), 'head'),
    ('ear.L', (-0.019, -0.017, 0.87), (0.032, -0.039, 0.973), 'head'),
    ('shoulder.R', (C - 0.03, 0.0, 0.645), (-0.195, 0.0, 0.64), 'chest'),
    ('upper_arm.R', (-0.195, 0.0, 0.64), (-0.225, 0.0, 0.50), 'shoulder.R'),
    ('forearm.R', (-0.225, 0.0, 0.50), (-0.205, -0.03, 0.415), 'upper_arm.R'),
    ('hand.R', (-0.205, -0.03, 0.415), (-0.205, -0.045, 0.35), 'forearm.R'),
    ('shoulder.L', (C + 0.03, 0.0, 0.645), (0.135, 0.0, 0.64), 'chest'),
    ('upper_arm.L', (0.135, 0.0, 0.64), (0.17, 0.0, 0.50), 'shoulder.L'),
    ('forearm.L', (0.17, 0.0, 0.50), (0.183, -0.01, 0.41), 'upper_arm.L'),
    ('hand.L', (0.183, -0.01, 0.41), (0.186, -0.02, 0.345), 'forearm.L'),
    ('thigh.R', (-0.11, 0.0, 0.41), (-0.12, -0.005, 0.24), 'hips'),
    ('shin.R', (-0.12, -0.005, 0.24), (-0.137, 0.005, 0.07), 'thigh.R'),
    ('foot.R', (-0.137, 0.005, 0.07), (-0.16, -0.10, 0.02), 'shin.R'),
    ('thigh.L', (0.05, 0.0, 0.41), (0.06, -0.005, 0.24), 'hips'),
    ('shin.L', (0.06, -0.005, 0.24), (0.08, 0.005, 0.07), 'thigh.L'),
    ('foot.L', (0.08, 0.005, 0.07), (0.10, -0.11, 0.02), 'shin.L'),
    ('cape1', (0.0, 0.08, 0.64), (0.03, 0.12, 0.50), 'chest'),
    ('cape2', (0.03, 0.12, 0.50), (0.06, 0.145, 0.33), 'cape1'),
    ('sword', (0.08, -0.09, 0.47), (0.21, 0.04, 0.14), 'hips'),
]
DEFORM_SKIP_AUTO = {'root', 'sword'}  # 这两根不参与自动权重

bpy.ops.object.armature_add(enter_editmode=True, location=(0, 0, 0))
arm = bpy.context.object
arm.name = 'Rig'
eb = arm.data.edit_bones
for b in list(eb):
    eb.remove(b)
for name, h, t, parent in BONES:
    b = eb.new(name)
    b.head = Vector(h)
    b.tail = Vector(t)
    b.roll = 0
    if parent:
        b.parent = eb[parent]
        b.use_connect = (Vector(eb[parent].tail) - Vector(h)).length < 1e-4
bpy.ops.object.mode_set(mode='OBJECT')
for name in DEFORM_SKIP_AUTO:
    arm.data.bones[name].use_deform = False

# ---- 蒙皮权重：按身体部位分区，再在网格上平滑 ----
# Tripo 网格的面很乱（一半的边不是流形），Blender 的热扩散自动权重会失败，所以自己算。
def sm(a, b, x):
    t = max(0.0, min(1.0, (x - a) / (b - a)))
    return t * t * (3 - 2 * t)

a_sw = Vector((0.08, -0.09, 0.47)); b_sw = Vector((0.21, 0.04, 0.14))
ax_sw = b_sw - a_sw; L_sw = ax_sw.length; ax_sw.normalize()

def sword_d(p):
    t = max(-0.02, min(L_sw + 0.02, (p - a_sw).dot(ax_sw)))
    return (p - (a_sw + ax_sw * t)).length

names = [b[0] for b in BONES]
NB = len(names)
I = {n: i for i, n in enumerate(names)}
verts = body.data.vertices
W = []
for v in verts:
    x, y, z = v.co.x, v.co.y, v.co.z
    w = [0.0] * NB
    rest = 1.0
    # 剑：离剑轴很近、腰带以下
    sw = sm(0.024, 0.014, sword_d(v.co)) * sm(0.50, 0.46, z) * sm(0.04, 0.07, x)
    w[I['sword']] = sw
    rest -= sw
    # 披风：身体背后（y 大）或左侧最外面，肩膀以下
    behind = sm(0.055, 0.085, y)
    outer_left = sm(0.195, 0.215, x) * sm(0.30, 0.34, z)
    cape = max(behind, outer_left) * sm(0.69, 0.62, z) * sm(0.24, 0.29, z) * rest
    lower = sm(0.56, 0.44, z)
    w[I['cape2']] = cape * lower
    w[I['cape1']] = cape * (1 - lower)
    rest -= cape
    # 腿：裆部以下，按中线分左右；不包括披风
    leg = sm(0.43, 0.35, z) * rest
    left = sm(C - 0.012, C + 0.012, x)
    shin = sm(0.27, 0.21, z)
    foot = sm(0.10, 0.055, z)
    for side, f in (('L', left), ('R', 1 - left)):
        w[I['thigh.' + side]] += leg * f * (1 - shin)
        w[I['shin.' + side]] += leg * f * shin * (1 - foot)
        w[I['foot.' + side]] += leg * f * foot
    rest -= leg
    # 手臂：身体两侧，肩到手
    dx = abs(x - C)
    armf = sm(0.128, 0.162, dx) * sm(0.71, 0.63, z) * sm(0.30, 0.34, z) * sm(0.075, 0.045, y) * rest
    side = 'L' if x > C else 'R'
    fore = sm(0.535, 0.475, z)
    hand = sm(0.435, 0.395, z)
    sh = sm(0.17, 0.135, dx) * sm(0.60, 0.65, z)  # 肩头附近一部分给锁骨（shoulder）
    w[I['shoulder.' + side]] += armf * sh
    w[I['upper_arm.' + side]] += armf * (1 - sh) * (1 - fore)
    w[I['forearm.' + side]] += armf * (1 - sh) * fore * (1 - hand)
    w[I['hand.' + side]] += armf * (1 - sh) * hand
    rest -= armf
    # 头和耳朵
    head = sm(0.695, 0.735, z) * rest
    ear = sm(0.845, 0.875, z)
    eside = 'L' if x > -0.037 else 'R'
    w[I['ear.' + eside]] += head * ear
    w[I['head']] += head * (1 - ear)
    rest -= head
    # 躯干
    neck = sm(0.655, 0.695, z)
    chest = sm(0.53, 0.59, z)
    spine = sm(0.44, 0.50, z)
    w[I['neck']] += rest * neck
    w[I['chest']] += rest * (1 - neck) * chest
    w[I['spine']] += rest * (1 - neck) * (1 - chest) * spine
    w[I['hips']] += rest * (1 - neck) * (1 - chest) * (1 - spine)
    W.append(w)

# 在网格上平滑（剑保持刚性）：每个顶点和邻居取平均
nbrs = [[] for _ in verts]
for e in body.data.edges:
    i, j = e.vertices
    nbrs[i].append(j); nbrs[j].append(i)
SW = I['sword']
for it in range(4):
    NW = []
    for i, w in enumerate(W):
        if w[SW] > 0.5 or not nbrs[i]:
            NW.append(w); continue
        acc = [0.0] * NB
        for j in nbrs[i]:
            wj = W[j]
            for k in range(NB):
                acc[k] += wj[k]
        n = len(nbrs[i])
        NW.append([0.5 * w[k] + 0.5 * acc[k] / n for k in range(NB)])
    W = NW

groups = {n: body.vertex_groups.new(name=n) for n in names if n != 'root'}
for i, w in enumerate(W):
    top = sorted(range(NB), key=lambda k: -w[k])[:4]
    s = sum(w[k] for k in top)
    for k in top:
        if w[k] > 1e-4 and names[k] != 'root':
            groups[names[k]].add([i], w[k] / s, 'REPLACE')
print('SWORD verts', sum(1 for w in W if w[SW] > 0.5))
arm.data.bones['sword'].use_deform = True

body.parent = arm
am = body.modifiers.new('Armature', 'ARMATURE')
am.object = arm

# ---- 测试姿势渲染 ----
scene = bpy.context.scene
scene.render.engine = 'BLENDER_EEVEE'
scene.render.resolution_x = 480
scene.render.resolution_y = 600
world = bpy.data.worlds.new('w'); scene.world = world
world.use_nodes = True
world.node_tree.nodes['Background'].inputs[0].default_value = (0.55, 0.58, 0.62, 1)
bpy.ops.object.light_add(type='SUN', location=(0, 0, 5))
sun = bpy.context.object; sun.data.energy = 3.2; sun.rotation_euler = (math.radians(40), 0, math.radians(30))
bpy.ops.object.camera_add()
cam = bpy.context.object; scene.camera = cam; cam.data.type = 'ORTHO'; cam.data.ortho_scale = 1.15

def pose(rots):
    for pb in arm.pose.bones:
        pb.rotation_mode = 'XYZ'
        pb.rotation_euler = (0, 0, 0)
    for n, r in rots.items():
        arm.pose.bones[n].rotation_euler = tuple(math.radians(x) for x in r)
    bpy.context.view_layer.update()

def shoot(name):
    for view, loc, rot in (('front', (C, -5, 0.5), (90, 0, 0)), ('side', (5, 0, 0.5), (90, 0, 90))):
        cam.location = loc
        cam.rotation_euler = tuple(math.radians(x) for x in rot)
        scene.render.filepath = os.path.join(outdir, 'pose_%s_%s.png' % (name, view))
        bpy.ops.render.render(write_still=True)

pose({})
shoot('rest')
# 走路的一帧：左腿前、右腿后，手臂反向摆。骨头本地 X 轴转动 = 前后摆
pose({'thigh.L': (35, 0, 0), 'shin.L': (-10, 0, 0), 'thigh.R': (-25, 0, 0), 'shin.R': (-45, 0, 0), 'foot.R': (20, 0, 0),
      'upper_arm.R': (30, 0, 0), 'upper_arm.L': (-30, 0, 0), 'forearm.R': (20, 0, 0), 'forearm.L': (25, 0, 0)})
shoot('walk')
# 抬手：右手举过头顶扔东西，左手平伸
pose({'upper_arm.R': (150, 0, 0), 'forearm.R': (40, 0, 0), 'upper_arm.L': (0, 0, -80), 'head': (0, 30, 0), 'ear.L': (30, 0, 0), 'ear.R': (-30, 0, 0)})
shoot('throw')
pose({})

# ---- 导出 ----
bpy.ops.object.select_all(action='DESELECT')
body.select_set(True); arm.select_set(True)
bpy.context.view_layer.objects.active = arm
bpy.ops.export_scene.gltf(filepath=os.path.join(outdir, 'kangaroo.glb'), use_selection=True, export_format='GLB',
                          export_skins=True, export_animations=False, export_yup=True, export_apply=False,
                          export_image_format='JPEG', export_jpeg_quality=86, export_normals=True)
print('EXPORTED')
