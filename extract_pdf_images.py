import fitz
import os

pdf_path = r'D:\VIBE CODING\Shambhoo Phalake\media\About Me Shambhoo Phalke Ver 6.0 AI.pdf'
out_dir = r'D:\VIBE CODING\Shambhoo Phalake\shambhoo-portfolio\public\media\projects'
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
img_count = 0

# Pages 4 to 11 are 0-indexed 4 to 11 (which correspond to PDF pages 5 to 12)
for page_num in range(4, 12):
    page = doc.load_page(page_num)
    images = page.get_images(full=True)
    for img_index, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image['image']
        image_ext = base_image['ext']
        
        # Filter out tiny images (like icons or UI elements)
        if len(image_bytes) > 20000:
            img_count += 1
            out_path = os.path.join(out_dir, f'page{page_num+1}_img{img_count}.{image_ext}')
            with open(out_path, 'wb') as f:
                f.write(image_bytes)
            print(f'Saved {out_path}')

print(f'Total images extracted: {img_count}')
