"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="py-40 relative overflow-hidden bg-primary">
      {/* Background cinematic elements */}
      <div className="absolute inset-0 bg-primary z-0 pointer-events-none">
        <div className="absolute top-1/2 -right-1/4 w-[70vw] h-[70vw] bg-accent/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      </div>
      
      {/* Intro large text */}
      <div className="container mx-auto px-6 mb-40 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="font-serif text-6xl md:text-7xl leading-[1.1] mb-10 text-secondary drop-shadow-xl">
              30+ Years.<br />
              One Industry.<br />
              <span className="text-accent italic font-light drop-shadow-lg">Many Stories.</span>
            </h2>
            <div className="flex items-end gap-6">
              <span className="text-8xl md:text-[10rem] font-serif text-secondary/5 font-bold leading-none drop-shadow-sm select-none">30+</span>
              <span className="text-xs tracking-[0.3em] text-accent font-bold mb-6 w-32 leading-[1.8] drop-shadow-md">
                YEARS OF INDUSTRY EXPERIENCE
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pl-16 border-l-2 border-secondary/10"
          >
            <p className="text-xl md:text-3xl text-secondary/80 font-light leading-relaxed drop-shadow-sm">
              Shambhoo Phalake brings more than three decades of experience across the animation and media ecosystem, combining creative understanding with business strategy, production knowledge and long-standing industry relationships.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Editorial Split */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            style={{ y, opacity }}
            className="relative h-[80vh] flex items-end justify-center drop-shadow-2xl"
          >
            <Image
              src="/media/2.png"
              alt="Shambhoo Phalke - Beyond the Business Card"
              fill
              className="object-contain object-bottom opacity-95 z-0"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-px bg-accent/80 shadow-[0_0_10px_rgba(198,161,91,0.5)]"></div>
              <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase">The Man Behind the Frames</span>
            </div>
            
            <h3 className="font-serif text-5xl md:text-6xl drop-shadow-lg text-secondary">Beyond the Business Card.</h3>
            
            <div className="space-y-8 text-secondary/70 text-xl font-light leading-relaxed">
              <p>
                Shambhoo Phalke has built his career at the intersection of creativity, production and business. His experience across animation and media has given him a practical understanding of how creative ideas evolve into commercially viable content.
              </p>
              <p>
                From production environments to business development and strategic relationships, his work has involved connecting people, ideas, capabilities and opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
