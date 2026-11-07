#!/usr/bin/env bash
# 在 Kiro 沙盒（Amazon Linux 2023，没有 root 写权限的家目录、没有 cpio）里装无界面 Blender。
# 用法：bash setup.sh [安装目录，默认 /projects/sandbox/_blender]
set -euo pipefail

DIR="${1:-/projects/sandbox/_blender}"
HERE="$(cd "$(dirname "$0")" && pwd)"
VER=5.2.3
MIRROR="https://mirrors.ocf.berkeley.edu/blender/release/Blender5.2"   # download.blender.org 在沙盒里被拦
mkdir -p "$DIR/rpms" "$DIR/libs" "$DIR/dnf"
cd "$DIR"

# 1. Blender 本体（约 400 MB 压缩包，解开 1.2 GB）
if [ ! -x "blender-$VER-linux-x64/blender" ]; then
  curl -fL --retry 3 -o blender.tar.xz "$MIRROR/blender-$VER-linux-x64.tar.xz"
  tar -xf blender.tar.xz && rm blender.tar.xz
fi

# 2. 系统缺的库：用 dnf 查到 rpm 地址，curl 下载，再自己解包（不需要 root）
PKGS="libSM libICE libXfixes libXi libXrender libXxf86vm libxkbcommon expat libdrm
      libglvnd libglvnd-egl libglvnd-glx libwayland-client libwayland-server
      mesa-libGL mesa-libEGL mesa-libgbm mesa-dri-drivers llvm-libs"
dnf repoquery -q --latest-limit 1 --arch x86_64 --location \
  --setopt=logdir="$DIR/dnf" --setopt=cachedir="$DIR/dnf" --setopt=persistdir="$DIR/dnf" \
  $PKGS > rpms/urls.txt
(cd rpms && xargs -n1 curl -fsSLO --retry 3 < urls.txt)
for r in rpms/*.rpm; do
  rpm2cpio "$r" | python3 "$HERE/cpio_extract.py" "$DIR/libs"
done

echo "装好了。运行方式见 README.md"
