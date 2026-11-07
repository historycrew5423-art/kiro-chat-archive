# 测试：用 Python 在 Blender 里搭一座带圆盘平台的白塔，渲染一张图，再导出 GLB
import bpy, math, os, sys, random

engine = sys.argv[sys.argv.index('--') + 1] if '--' in sys.argv else 'CYCLES'
out = os.path.join(os.getcwd(), 'out')  # 结果写到当前目录的 out/
os.makedirs(out, exist_ok=True)

bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene

def mat(name, color, rough=0.5, metal=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*color, 1)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Metallic'].default_value = metal
    return m

white = mat('white', (0.85, 0.84, 0.8), 0.4)
copper = mat('copper', (0.7, 0.3, 0.1), 0.35, 0.8)
green = mat('green', (0.05, 0.18, 0.04), 0.8)
ground = mat('ground', (0.25, 0.3, 0.2), 0.9)

def add(obj, m):
    obj.data.materials.append(m)
    bpy.ops.object.shade_smooth()
    return obj

bpy.ops.mesh.primitive_plane_add(size=200)
add(bpy.context.object, ground)
bpy.ops.mesh.primitive_cylinder_add(radius=3, depth=40, vertices=64, location=(0, 0, 20))
add(bpy.context.object, white)
bpy.ops.mesh.primitive_cylinder_add(radius=3.2, depth=0.6, vertices=64, location=(0, 0, 14))
add(bpy.context.object, copper)
# 圆盘平台：压扁的圆锥 + 斜角
bpy.ops.mesh.primitive_cone_add(radius1=12, radius2=3, depth=4, vertices=96, location=(0, 0, 28))
disc = add(bpy.context.object, white)
disc.rotation_euler.x = math.pi
bevel = disc.modifiers.new('bevel', 'BEVEL')
bevel.width = 0.4
bevel.segments = 3
# 平台上的树团
random.seed(3)
for i in range(60):
    a = random.random() * math.tau
    r = math.sqrt(random.random()) * 10
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=2, radius=1.2 + random.random() * 1.5, location=(math.cos(a) * r, math.sin(a) * r, 31 + random.random() * 1.5))
    o = add(bpy.context.object, green)
    d = o.modifiers.new('disp', 'DISPLACE')
    d.texture = bpy.data.textures.get('n') or bpy.data.textures.new('n', 'CLOUDS')
    d.strength = 0.6

# 太阳和天空
bpy.ops.object.light_add(type='SUN', location=(0, 0, 50))
sun = bpy.context.object
sun.data.energy = 3
sun.rotation_euler = (math.radians(50), 0, math.radians(35))
world = bpy.data.worlds.new('w')
scene.world = world
world.use_nodes = True
nt = world.node_tree
sky = nt.nodes.new('ShaderNodeTexSky')
nt.links.new(sky.outputs[0], nt.nodes['Background'].inputs[0])
nt.nodes['Background'].inputs[1].default_value = 0.25
scene.view_settings.view_transform = 'AgX'

bpy.ops.object.camera_add(location=(55, -60, 30))
cam = bpy.context.object
bpy.ops.object.empty_add(location=(0, 0, 24))
tgt = bpy.context.object
c = cam.constraints.new('TRACK_TO')
c.target = tgt
c.track_axis = 'TRACK_NEGATIVE_Z'
c.up_axis = 'UP_Y'
scene.camera = cam

scene.render.resolution_x, scene.render.resolution_y = 960, 540
if engine == 'CYCLES':
    scene.render.engine = 'CYCLES'
    scene.cycles.device = 'CPU'
    scene.cycles.samples = 32
    scene.cycles.use_denoising = True
else:
    scene.render.engine = 'BLENDER_EEVEE'
scene.render.filepath = f'{out}/test_{engine.lower()}.png'
bpy.ops.render.render(write_still=True)
bpy.ops.export_scene.gltf(filepath=f'{out}/test_tower.glb', export_apply=True)
print('DONE', engine)
