"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const categories = ["Feature Films", "2D Projects", "3D Projects", "VFX Projects", "Original Products", "AI"];

const projectData = {
  "Feature Films": [
    { title: "Legend of Buddha", org: "Pentamedia", role: "Director / India Oscar Entry", img: "/media/projects_all/page5_img3.jpeg" },
    { title: "Krishana Aur Kamsa", org: "Reliance Animation", role: "2D FLASH", img: "/media/projects_all/page5_img4.jpeg" },
    { title: "Ghatatkoch", org: "Sun Animatics", role: "Consultant", img: "/media/projects_all/page5_img5.jpeg" },
    { title: "Mahayoddha Rama", org: "Contiloe Pictures", role: "Consultant", img: "/media/projects_all/page5_img6.jpeg" },
    { title: "Shakuntala", org: "Dawsen Infotech", role: "Not Released - Consultant", img: "/media/projects_all/page5_img7.jpeg" },
    { title: "Ramayana: The Epic", org: "Maya Entertainment", role: "3D", img: "/media/projects_all/page5_img8.jpeg" },
    { title: "Hanuman Da Damdaar", org: "Percept Pictures", role: "Consultant", img: "/media/projects_all/page5_img4.jpeg" }, // Using placeholder
  ],
  "2D Projects": [
    { title: "George the Little Dragon", org: "Sweden", role: "Teaser & Bible", img: "/media/projects_all/page6_img3.jpeg" },
    { title: "Ninja Hattori", org: "TV Asahi, Shin-Ei-Doga", role: "200 Ep X 11 min", img: "/media/projects_all/page6_img4.jpeg" },
    { title: "La DaVincibles", org: "Italy, Australia", role: "52 Ep X 11 Min", img: "/media/projects_all/page6_img5.jpeg" },
    { title: "Legend of Dragon", org: "BKN Kids", role: "52 Ep X 24 min", img: "/media/projects_all/page6_img6.jpeg" },
    { title: "Chi Chi Love", org: "Kid E Media", role: "6 Ep X 8 Min", img: "/media/projects_all/page6_img7.jpeg" },
    { title: "Pak Pak Pakau", org: "Nick India", role: "2 Seasons", img: "/media/projects_all/page6_img8.jpeg" },
    { title: "Babblarna", org: "Sweden", role: "Ep 26 x 3 Min", img: "/media/projects_all/page6_img9.jpeg" },
    { title: "Kiki Monochichi", org: "USA", role: "13 Ep X 5 Min", img: "/media/projects_all/page6_img10.jpeg" },
    { title: "Tortel", org: "Caligari Films", role: "26 Ep X 22 min", img: "/media/projects_all/page7_img6.jpeg" },
    { title: "Captain Discovery", org: "Animation Yoboho Kids", role: "Animation", img: "/media/projects_all/page7_img7.jpeg" },
    { title: "Sholay Telefilms", org: "India", role: "Shard Devarajan", img: "/media/projects_all/page7_img8.jpeg" },
    { title: "Mavi Bykus: Dumper and Skoop", org: "Dumper and Skoop", role: "6 epi X 11 min", img: "/media/projects_all/page7_img3.jpeg" },
    { title: "Futuirkon", org: "Chrono Kids", role: "26 Episodes X 11 min", img: "/media/projects_all/page7_img4.jpeg" },
    { title: "Ena Mina dika", org: "Animation", role: "2D Series", img: "/media/projects_all/page7_img5.jpeg" },
    { title: "Kong", org: "Philippines PASI", role: "13 Ep x 22 min", img: "/media/projects_all/page7_img9.jpeg" }
  ],
  "3D Projects": [
    { title: "Freej Season 4", org: "Dubai", role: "15 Ep X 15 Min", img: "/media/projects_all/page8_img5.jpeg" },
    { title: "NASCAR", org: "UAE", role: "26 Ep X 11 Min", img: "/media/projects_all/page8_img3.jpeg" },
    { title: "Heroes of the City", org: "Sweden", role: "2 Seasons", img: "/media/projects_all/page8_img6.jpeg" },
    { title: "King Shakir", org: "Animation LRC", role: "300 characters/sc", img: "/media/projects_all/page8_img7.jpeg" },
    { title: "Sheara", org: "Shorts Italy", role: "Chris Bangles Associate", img: "/media/projects_all/page8_img4.jpeg" },
    { title: "Drone Cats", org: "Germany", role: "26 Ep X 11 Min", img: "/media/projects_all/page8_img8.jpeg" },
    { title: "The Girl who Cried flowers", org: "USA", role: "13 Ep X 5 Min", img: "/media/projects_all/page8_img9.jpeg" },
  ],
  "VFX Projects": [
    { title: "The Goatlife", org: "Director David Blessy", role: "VFX Production", img: "/media/projects_all/page9_img3.jpeg" },
    { title: "Kunjalli Marakkar", org: "Director", role: "VFX Leadership", img: "/media/projects_all/page9_img4.jpeg" }
  ],
  "Original Products": [
    { title: "Three Musketeers 3D", org: "Pitch MIPJR & Mipcom", role: "2024", img: "/media/projects_all/page10_img5.jpeg" },
    { title: "Pakadam Pakdai", org: "Nick India", role: "2D", img: "/media/projects_all/page10_img4.jpeg" },
    { title: "Shaktiman", org: "Reliance Animation", role: "Production", img: "/media/projects_all/page10_img6.jpeg" },
    { title: "Jimmy Jimmy Jam Jam 2D", org: "Pitch Annecy 2025", role: "2D", img: "/media/projects_all/page10_img3.jpeg" },
    { title: "Area 51 3D", org: "Sitcom News", role: "3D", img: "/media/projects_all/page10_img7.jpeg" },
  ],
  "AI": [
    { title: "Raakh Ke Raahi", org: "AI Generation", role: "Ep. 15 X 3 Min", img: "/media/projects_all/page11_img8.jpeg" },
    { title: "Krishna - Antim Yatra", org: "AI Generation", role: "Ep.15 X 2 Min", img: "/media/projects_all/page11_img9.jpeg" },
    { title: "Shadows of Mumbai", org: "AI Generation", role: "Ep. 24 X 3 Min", img: "/media/projects_all/page11_img10.jpeg" },
    { title: "Raavan", org: "AI Generation", role: "Ep. 10 X 2 Min", img: "/media/projects_all/page11_img11.jpeg" },
    { title: "Vishwamitra", org: "AI Generation", role: "Ep. 15 X 3 Min", img: "/media/projects_all/page11_img12.jpeg" },
    { title: "Kaalrajya", org: "AI Generation", role: "Ep.25 X 3 Min", img: "/media/projects_all/page11_img13.jpeg" },
    { title: "Kaisa Zombie", org: "AI Generation", role: "Ep. 30 X 3 Min", img: "/media/projects_all/page12_img8.jpeg" },
    { title: "Parashuram", org: "AI Generation", role: "Ep.24 X 2 Min", img: "/media/projects_all/page12_img9.jpeg" },
    { title: "Kaliyug ka Chanakya", org: "AI Generation", role: "Ep. 24 X 3 Min", img: "/media/projects_all/page12_img10.jpeg" },
    { title: "Karmik Zulu", org: "AI Generation", role: "Ep. 30 X 3 Min", img: "/media/projects_all/page12_img11.jpeg" },
    { title: "Ghamand", org: "AI Generation", role: "Ep.24 X 3 Min", img: "/media/projects_all/page12_img12.jpeg" },
    { title: "Konsi Duniya", org: "AI Generation", role: "Ep. 30 X 3 Min", img: "/media/projects_all/page12_img13.jpeg" }
  ]
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="work" className="py-32 bg-primary relative min-h-screen flex flex-col justify-center">
      <div className="storyboard-lines absolute inset-0 opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[10px] tracking-widest text-accent uppercase mb-4 block font-bold">
            SCENE 04 - THE PORTFOLIO
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-secondary mb-6">
            Stories, Productions <br />
            <span className="text-accent italic">& Industry Chapters</span>
          </h2>
        </motion.div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-sm border ${
                activeCategory === cat
                  ? "bg-accent/10 border-accent text-accent shadow-[0_0_20px_rgba(198,161,91,0.2)]"
                  : "bg-transparent border-secondary/10 text-secondary/50 hover:border-secondary/40 hover:text-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projectData[activeCategory as keyof typeof projectData].map((project, index) => (
            <div
              key={index}
              className="group relative bg-primary border border-secondary/10 hover:border-accent/40 transition-all duration-500 overflow-hidden rounded-md shadow-xl flex flex-col"
            >
              {/* Image Area */}
              <div className="relative w-full h-[320px] overflow-hidden bg-primary">
                {/* Blurred background to fill letterbox space smoothly */}
                <Image 
                  src={project.img} 
                  alt="" 
                  fill 
                  className="object-cover opacity-20 blur-xl scale-110"
                />
                {/* Crisp contained image */}
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-contain p-4 drop-shadow-2xl opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/0 to-primary/0 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-xl text-secondary mb-1 group-hover:text-accent transition-colors drop-shadow-md">
                  {project.title}
                </h3>
                <p className="text-secondary/80 text-[10px] font-bold tracking-wider uppercase mb-3">
                  <span className="text-accent/60 mr-1">STUDIO:</span> {project.org}
                </p>
                <div className="pt-3 border-t border-secondary/20 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-secondary/60 font-light text-xs italic">
                    {project.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
