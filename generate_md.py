import os

def create_markdown():
    media_dir = "public/media/projects_all"
    files = sorted([f for f in os.listdir(media_dir) if f.endswith(('.jpeg', '.png'))])
    
    md_content = "# Project Images\n\n"
    for f in files:
        md_content += f"## {f}\n"
        md_content += f"![{f}](/d:/VIBE%20CODING/Shambhoo%20Phalake/shambhoo-portfolio/public/media/projects_all/{f})\n\n"
        
    with open("D:/VIBE CODING/Shambhoo Phalake/shambhoo-portfolio/images.md", "w") as f:
        f.write(md_content)

if __name__ == "__main__":
    create_markdown()
