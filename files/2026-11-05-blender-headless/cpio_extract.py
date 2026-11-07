# 没有 cpio 命令时，解开 rpm2cpio 输出的 newc 格式归档（只取普通文件和符号链接）
import os, sys

def extract(data, dest):
    i = 0
    while i + 110 <= len(data):
        h = data[i:i + 110]
        if h[:6] not in (b'070701', b'070702'):
            raise ValueError('bad magic at %d' % i)
        f = [int(h[6 + 8 * k:14 + 8 * k], 16) for k in range(13)]
        mode, filesize, namesize = f[1], f[6], f[11]
        i += 110
        name = data[i:i + namesize - 1].decode()
        i = (i + namesize + 3) & ~3
        body = data[i:i + filesize]
        i = (i + filesize + 3) & ~3
        if name == 'TRAILER!!!':
            break
        path = os.path.join(dest, name.lstrip('./'))
        kind = mode & 0o170000
        if kind == 0o040000:
            os.makedirs(path, exist_ok=True)
        elif kind == 0o100000:
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, 'wb') as fh:
                fh.write(body)
            os.chmod(path, mode & 0o777)
        elif kind == 0o120000:
            os.makedirs(os.path.dirname(path), exist_ok=True)
            if os.path.lexists(path):
                os.remove(path)
            os.symlink(body.decode(), path)

extract(sys.stdin.buffer.read(), sys.argv[1])
