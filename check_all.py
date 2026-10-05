import os
from PIL import Image

dir_path = r'D:\VIBE CODING\Shambhoo Phalake\shambhoo-portfolio\public\media\projects_all'
for f in os.listdir(dir_path):
    if f.endswith('.jpeg') or f.endswith('.png'):
        img = Image.open(os.path.join(dir_path, f))
        print(f"{f}: {img.width}x{img.height}")
