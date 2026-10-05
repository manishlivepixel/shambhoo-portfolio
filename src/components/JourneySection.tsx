"use client";

import { motion } from "framer-motion";

const journeyData = [
  {
    phase: "1989 - 1999",
    role: "Foundations in Production & Operations",
    org: "Manufacturing & Early Animation",
    desc: "Built a technical foundation starting in computer electronics, evolving into multimedia and animation production in the mid-90s, setting the stage for a career managing complex workflows."
  },
  {
    phase: "2000 - 2004",
    role: "General Manager & Production Head",
    org: "Pentamedia Graphics / Kingdom Animasia (Manila)",
    desc: "Led traditional animation studios, managing large-scale operations and navigating the transition of the Asian animation industry onto the global stage."
  },
  {
    phase: "2005 - 2013",
    role: "Senior Vice President / COO",
    org: "Reliance MediaWorks / Maya / Colorchips",
    desc: "Oversaw feature film and television animation projects, driving operations, strategy, and business development across multiple major studios, balancing creative vision with operational realities."
  },
  {
    phase: "2014 - 2021",
    role: "VP Strategy & Business Development",
    org: "Anibrain Digital Solutions / Consulting",
    desc: "Focused on building international relationships, studio acquisitions, co-productions, and identifying long-term strategic opportunities for animation and VFX studios."
  },
  {
    phase: "2022 - Present",
    role: "Industry Consultant & Strategist",
    org: "Global Media & Entertainment",
    desc: "Connecting creative capabilities with commercial opportunity across animation, OTT, AI, and international partnerships, consulting for leading studios worldwide."
  }
];

export default function JourneySection() {
  return (
    <section id="experience" className="py-40 relative bg-primary text-secondary overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}></div>
      <div className="absolute top-0 w-full h-px bg-secondary/10 shadow-[0_1px_10px_rgba(0,0,0,0.1)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 text-center"
        >
          <span className="text-[10px] tracking-[0.4em] text-accent2 font-bold mb-6 block uppercase">SCENE 03 — THE JOURNEY</span>
          <h2 className="font-serif text-6xl md:text-7xl drop-shadow-sm">A Journey Through Animation</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-secondary/20 -translate-x-1/2"></div>
          
          <div className="space-y-32">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.phase} className="group relative flex flex-col md:flex-row items-center gap-10 md:gap-0">
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-6 md:left-1/2 w-4 h-4 bg-accent2 rounded-full -translate-x-1/2 z-10 outline outline-8 outline-primary group-hover:bg-secondary group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(168,117,74,0.6)] transition-all duration-500"
                  ></motion.div>
                  
                  {/* Content Container */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-24 md:text-right" : "md:pl-24 md:ml-auto"}`}
                  >
                    <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"}`}>
                      <span className="text-[10px] font-bold tracking-[0.3em] text-accent2 mb-4 block uppercase bg-accent2/10 px-3 py-1 rounded-sm w-max">{item.phase}</span>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-secondary group-hover:text-accent2 transition-colors duration-300">{item.org}</h3>
                      <h4 className="text-secondary/70 font-semibold mb-6 text-lg tracking-wide uppercase">{item.role}</h4>
                      <p className="text-secondary/70 font-light leading-[1.8] text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
