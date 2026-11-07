# 在 Kiro 沙盒里跑无界面 Blender

用户电脑上什么都不用装。Kiro 在自己的云端沙盒里装 Blender 5.2.3（Linux 版），用 Python 脚本建模、渲染、导出 GLB。

## 文件

| 文件 | 说明 |
| --- | --- |
| `setup.sh` | 安装脚本：从镜像下载 Blender，再下载并解开系统缺的库（不需要 root） |
| `cpio_extract.py` | 沙盒没有 `cpio` 命令，用它解开 rpm 包 |
| `test_scene.py` | 测试场景：白塔、圆盘平台、树团、天空；渲染一张 960×540 的图，再导出 `test_tower.glb` |
| `test_cycles.png` | Cycles 渲染结果（CPU，32 采样，降噪），约 6 秒 |
| `test_eevee.png` | EEVEE 渲染结果（Mesa 软件 OpenGL），约 9 秒 |
| `test_tower.glb` | 导出的模型，可以直接给 three.js 的 GLTFLoader 用 |

## 用法

```bash
bash setup.sh /projects/sandbox/_blender
cd /projects/sandbox/_blender
L=$PWD/libs/usr

# Cycles（CPU）
LD_LIBRARY_PATH=$L/lib64 ./blender-5.2.3-linux-x64/blender -b --factory-startup \
  --python /path/to/test_scene.py -- CYCLES

# EEVEE（要多设两个变量，让它找到 Mesa 的软件渲染驱动）
LD_LIBRARY_PATH=$L/lib64 LIBGL_DRIVERS_PATH=$L/lib64/dri \
  __EGL_VENDOR_LIBRARY_DIRS=$L/share/glvnd/egl_vendor.d \
  ./blender-5.2.3-linux-x64/blender -b --factory-startup \
  --python /path/to/test_scene.py -- EEVEE
```

结果写到当前目录的 `out/`。EEVEE 会刷几行 `EGL_BAD_MATCH`，不影响出图。
