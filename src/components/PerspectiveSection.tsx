"use client";

import { motion } from "framer-motion";

export default function PerspectiveSection() {
  return (
    <section className="py-40 bg-secondary text-primary relative flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, #0B0B0D 1px, #0B0B0D 2px)' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-12 max-w-5xl mx-auto text-primary/90">
            &quot;Animation is not only about creating frames. It is about creating <span className="italic text-accent2">possibilities</span>.&quot;
          </h2>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-px bg-primary/20"></div>
            <span className="text-sm font-bold tracking-[0.3em] text-primary/80 uppercase">
              Creative Thinking × Business Strategy
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
