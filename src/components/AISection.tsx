"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AISection() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[60vh] flex items-center justify-center border border-accent/20 bg-primary p-8 rounded-lg"
        >
          {/* Conceptual Tech Overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4F0E8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <Image
            src="/media/3.png"
            alt="AI and the Future of Animation"
            fill
            className="object-contain p-8 z-10"
          />

          <div className="absolute top-4 left-4 border border-accent/40 text-accent/80 text-[10px] px-2 py-1 tracking-widest uppercase">
            PROCESSING FRAME 404...
          </div>
          <div className="absolute bottom-4 right-4 flex gap-1">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-[10px] text-secondary/50 tracking-widest">AI SYS ONLINE</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs tracking-[0.3em] text-accent font-semibold mb-6 block">SCENE 04 — THE FUTURE</span>
          
          <h2 className="font-serif text-5xl md:text-7xl text-secondary mb-8">
            The Next Frame <br />
            <span className="italic text-accent font-light">Is AI.</span>
          </h2>
          
          <p className="text-xl text-secondary/70 font-light leading-relaxed mb-12">
            The animation and entertainment industry is entering a major technological transformation. Exploring new production models, volume episodic content, and generative media to shape the next era of storytelling.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm font-medium tracking-wide text-secondary/90">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> AI-Assisted Animation
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> AI Storytelling
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> Production Pipelines
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> Virtual Characters
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> Micro-Drama
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> Generative Media
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
