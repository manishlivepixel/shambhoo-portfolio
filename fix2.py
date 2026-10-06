with open('src/components/ProjectsSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Corporates
start_corp = content.find('"Corporates": [')
end_corp = content.find('],', start_corp) + 2

replacement_corp = '''"Corporates": [
      { title: "Pentamedia Graphics", org: "Chennai", role: "Assistant to General Manager", img: "/media/projects_all/page4_img3.png" },
      { title: "Colorchips India", org: "Hyderabad", role: "COO", img: "/media/projects_all/page4_img2.jpeg" },
      { title: "Kingdom Animasia", org: "Manila", role: "General Manager", img: "/media/projects_all/page4_img9.png" },
      { title: "Reliance Media Works", org: "Pune and Mumbai", role: "Sr. VP Feature Films", img: "/media/projects_all/page4_img5.png" },
      { title: "Maya Entertainment", org: "Mumbai", role: "Sr. VP Operations", img: "/media/projects_all/page4_img4.png" },
      { title: "Anibrain Digital Solutions", org: "Pune", role: "VP Strategy & Business Dev", img: "/media/projects_all/page4_img6.png" }
    ],'''

content = content[:start_corp] + replacement_corp + content[end_corp:]

# Replace Markets
start_mark = content.find('"Markets": [')
end_mark = content.find('],', start_mark) + 2

replacement_mark = '''"Markets": [
      { title: "Cartoons on the bay", org: "Market", role: "Event", img: "/media/projects_all/page13_img3.jpeg" },
      { title: "Kid Screen", org: "Market", role: "Event", img: "/media/projects_all/page13_img7.png" },
      { title: "MIPCOM", org: "Market", role: "OCT 13-16", img: "/media/projects_all/page13_img10.png" },
      { title: "MIP Junior", org: "Market", role: "OCT 11-12", img: "/media/projects_all/page13_img6.jpeg" },
      { title: "Filmart", org: "Market", role: "MAR 17-20", img: "/media/projects_all/page13_img5.png" },
      { title: "ACE Fair", org: "Market", role: "SEP 17-20", img: "/media/projects_all/page13_img11.jpeg" },
      { title: "Cartoon Forum", org: "Market", role: "SEP 15-18", img: "/media/projects_all/page13_img9.png" },
      { title: "AniMela Festival", org: "Market", role: "Feb 19-22", img: "/media/projects_all/page13_img13.png" },
      { title: "Desi Toons", org: "Market", role: "Nov 1-2", img: "/media/projects_all/page13_img2.png" },
      { title: "ATF", org: "Market", role: "DEC 2-5", img: "/media/projects_all/page13_img14.png" },
      { title: "FICCI", org: "Market", role: "Apr 14-19", img: "/media/projects_all/page13_img12.png" },
      { title: "TIFFCOM", org: "Market", role: "OCT 29-31", img: "/media/projects_all/page13_img15.png" },
      { title: "MIP TV", org: "Market", role: "FEB 22-24", img: "/media/projects_all/page14_img12.jpeg" },
      { title: "Annecy Festival", org: "Market", role: "Jun 21-27", img: "/media/projects_all/page13_img4.png" },
      { title: "Comic Con India", org: "Market", role: "Event", img: "/media/projects_all/page13_img8.png" }
    ],'''

content = content[:start_mark] + replacement_mark + content[end_mark:]

with open('src/components/ProjectsSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
