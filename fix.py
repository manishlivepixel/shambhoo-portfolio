with open('src/components/ProjectsSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('"Consulting Studios": [')
end = content.find(']', start) + 1

replacement = '''"Consulting Studios": [
      { title: "Shemaroo Entertainment", org: "Mumbai", role: "Consulting", img: "/media/projects_all/page14_img6.jpeg" },
      { title: "Sony Yay", org: "Mumbai", role: "Consulting", img: "/media/projects_all/page14_img5.png" },
      { title: "Contiloe Pictures", org: "Mumbai", role: "Consulting", img: "/media/projects_all/page14_img11.png" },
      { title: "Live Pixel", org: "Mumbai", role: "Consulting", img: "/media/projects_all/page14_img9.png" },
      { title: "Artha Animation", org: "Mumbai", role: "Consulting", img: "/media/projects_all/page14_img12.jpeg" },
      { title: "Crossover Media", org: "Mumbai", role: "Consulting", img: "/media/projects_all/page14_img12.jpeg" },
      { title: "Quintessential Studio", org: "Mumbai", role: "Consulting", img: "/media/projects_all/page14_img8.png" },
      { title: "Reflection Studio", org: "Mumbai", role: "Consulting", img: "/media/projects_all/page14_img10.png" },
      { title: "Venuss Digital Arts", org: "Pune", role: "Consulting", img: "/media/projects_all/page14_img12.jpeg" },
      { title: "Verve Corporation", org: "Pune", role: "Consulting", img: "/media/projects_all/page14_img12.jpeg" },
      { title: "Kaizen Studio", org: "Pune", role: "Consulting", img: "/media/projects_all/page15_img5.jpeg" },
      { title: "Big Animation", org: "Pune", role: "Consulting", img: "/media/projects_all/page15_img6.png" },
      { title: "Tripixel Studio", org: "Pune", role: "Consulting", img: "/media/projects_all/page15_img13.png" },
      { title: "Girgit Studios", org: "Pune", role: "Consulting", img: "/media/projects_all/page15_img9.png" },
      { title: "Animaworks", org: "Pune", role: "Consulting", img: "/media/projects_all/page15_img7.png" },
      { title: "Pop Corn", org: "Pune", role: "Consulting", img: "/media/projects_all/page15_img8.png" },
      { title: "Envision VFX", org: "Pune", role: "Consulting", img: "/media/projects_all/page15_img10.jpeg" },
      { title: "Nectar Pixels Media", org: "Pune", role: "Consulting", img: "/media/projects_all/page15_img14.png" },
      { title: "Tavrohi Animation", org: "Delhi", role: "Consulting", img: "/media/projects_all/page16_img4.png" },
      { title: "Mandala Studios", org: "Delhi", role: "Consulting", img: "/media/projects_all/page16_img5.png" },
      { title: "Prismart Studio", org: "Delhi", role: "Consulting", img: "/media/projects_all/page16_img7.png" },
      { title: "CDL Studios", org: "Delhi", role: "Consulting", img: "/media/projects_all/page16_img8.png" },
      { title: "Indie Rise", org: "Chennai", role: "Consulting", img: "/media/projects_all/page14_img12.jpeg" },
      { title: "DREAMS", org: "Hyderabad", role: "Consulting", img: "/media/projects_all/page17_img12.png" },
      { title: "Just Animation", org: "Hyderabad", role: "Consulting", img: "/media/projects_all/page17_img5.png" },
      { title: "Sun Aniamtics", org: "Hyderabad", role: "Consulting", img: "/media/projects_all/page17_img6.png" },
      { title: "Freebird Animation Studio", org: "Vadodara", role: "Consulting", img: "/media/projects_all/page17_img7.jpeg" },
      { title: "Mavi Baykus", org: "Türkiye", role: "Consulting", img: "/media/projects_all/page17_img9.png" },
      { title: "Dawsen Infotech", org: "Kolkata", role: "Consulting", img: "/media/projects_all/page14_img12.jpeg" },
      { title: "Cloud House", org: "Kolkata", role: "Consulting", img: "/media/projects_all/page14_img12.jpeg" }
    ]'''

new_content = content[:start] + replacement + content[end:]

with open('src/components/ProjectsSection.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
