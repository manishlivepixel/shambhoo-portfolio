import os
from rembg import remove
from PIL import Image

media_dir = r'D:\VIBE CODING\Shambhoo Phalake\shambhoo-portfolio\public\media'
for filename in os.listdir(media_dir):
    if filename.lower().endswith('.png'):
        input_path = os.path.join(media_dir, filename)
        output_path = os.path.join(media_dir, filename.replace('.PNG', '.png').replace('.png', '_temp.png'))
        
        print(f'Processing {filename}...')
        try:
            input_image = Image.open(input_path)
            output_image = remove(input_image)
            output_image.save(output_path)
            input_image.close()
            os.remove(input_path)
            os.rename(output_path, input_path)
            print(f'Success for {filename}')
        except Exception as e:
            print(f'Error on {filename}: {e}')
