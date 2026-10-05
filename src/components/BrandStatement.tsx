"use client";

import { motion } from "framer-motion";

export default function BrandStatement() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden border-t border-b border-secondary/10">
      <div className="storyboard-lines absolute inset-0 opacity-10"></div>
      <div className="film-grain"></div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-secondary leading-tight mb-16 max-w-6xl mx-auto">
            Creative enough to understand the story.<br />
            <span className="text-accent italic font-light">Commercial enough to understand the opportunity.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-4 border-t border-accent/20 pt-8 w-max mx-auto px-16">
            <h3 className="text-xl tracking-[0.2em] font-medium text-secondary uppercase">Shambhoo Phalke</h3>
            <p className="text-xs tracking-widest text-secondary/60">ANIMATION • STRATEGY • BUSINESS DEVELOPMENT • MEDIA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
