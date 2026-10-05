"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const expertiseData = [
  {
    num: "01",
    slug: "business-development",
    title: "BUSINESS DEVELOPMENT",
    desc: "Building relationships, identifying opportunities and creating meaningful business partnerships across the media ecosystem.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "02",
    slug: "strategy",
    title: "STRATEGY",
    desc: "Connecting creative capabilities with commercial objectives and long-term business opportunities.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "03",
    slug: "animation",
    title: "ANIMATION",
    desc: "Deep understanding of animation production, creative workflows and the realities of bringing animated content to life.",
    img: "/media/projects_all/page6_img3.jpeg"
  },
  {
    num: "04",
    slug: "media-entertainment",
    title: "MEDIA & ENTERTAINMENT",
    desc: "Experience navigating the rapidly evolving entertainment landscape across production, content and distribution.",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "05",
    slug: "industry-network",
    title: "INDUSTRY NETWORK",
    desc: "Connecting studios, producers, creators, platforms and business opportunities.",
    img: "https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&w=800&q=80"
  },
  {
    num: "06",
    slug: "emerging-technology",
    title: "EMERGING TECHNOLOGY",
    desc: "Exploring how AI and new technologies are changing animation, storytelling and entertainment production.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ExpertiseSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section id="expertise" ref={targetRef} className="relative h-[300vh] bg-primary">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-primary to-primary pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] tracking-[0.4em] text-accent font-bold mb-6 block drop-shadow-md uppercase">SCENE 02 - THE BUSINESS</span>
            <h2 className="font-serif text-6xl md:text-8xl text-secondary drop-shadow-xl">What I Bring to the Table</h2>
          </motion.div>
        </div>

        <motion.div style={{ x, opacity }} className="flex gap-10 px-6 lg:px-12 pb-12 w-max relative z-10">
          {expertiseData.map((item) => (
            <Link
              href={`/expertise/${item.slug}`}
              key={item.num}
              className="group relative w-[380px] md:w-[500px] h-[550px] bg-secondary/5 border border-secondary/10 hover:border-accent/40 transition-all duration-700 flex flex-col overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 rounded-lg cursor-pointer"
            >
              {/* Clear, sharp image at the top */}
              <div className="relative w-full h-[250px] overflow-hidden bg-primary">
                {item.img.includes('/media/projects_all/') && (
                  <Image 
                    src={item.img} 
                    alt="" 
                    fill 
                    className="object-cover opacity-30 blur-xl scale-125"
                  />
                )}
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className={`${item.img.includes('/media/projects_all/') ? 'object-contain p-2 drop-shadow-2xl' : 'object-cover'} group-hover:scale-105 transition-transform duration-1000`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/0"></div>
                <span className="absolute bottom-4 left-6 text-5xl font-serif font-bold text-secondary/30 group-hover:text-accent transition-colors duration-500 drop-shadow-lg">
                  {item.num}
                </span>
              </div>
              
              {/* Content area */}
              <div className="relative z-10 flex flex-col flex-grow p-8 pt-4 bg-primary">
                <h3 className="text-xl tracking-wider mb-4 text-secondary uppercase font-bold group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-secondary/70 font-light leading-relaxed text-base flex-grow">
                  {item.desc}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">View Detailed Info</span>
                  <div className="w-8 h-px bg-accent group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
