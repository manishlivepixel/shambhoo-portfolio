import fitz
import os

pdf_path = r'D:\VIBE CODING\Shambhoo Phalake\media\About Me Shambhoo Phalke Ver 6.0 AI.pdf'
out_dir = r'D:\VIBE CODING\Shambhoo Phalake\shambhoo-portfolio\public\media\projects_all'
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)

# Pages 4 to 11 (0-indexed) are PDF pages 5 to 12
for page_num in range(0, 18):
    page = doc.load_page(page_num)
    images = page.get_images(full=True)
    img_count = 0
    for img_index, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image['image']
        image_ext = base_image['ext']
        
        # Don't filter out by size! But maybe filter out tiny ones < 2KB
        if len(image_bytes) > 2000:
            img_count += 1
            out_path = os.path.join(out_dir, f'page{page_num+1}_img{img_count}.{image_ext}')
            with open(out_path, 'wb') as f:
                f.write(image_bytes)

print('Extracted all images.')
