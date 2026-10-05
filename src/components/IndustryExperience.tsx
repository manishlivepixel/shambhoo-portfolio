"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IndustryExperience() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
        <Image
          src="/media/4.png"
          alt="Animation Framework"
          fill
          className="object-cover md:object-contain grayscale blur-sm"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-7xl text-secondary mb-6">
            Built Inside the <br />
            <span className="italic font-light">Animation Industry.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-7xl md:text-8xl text-secondary/90 font-bold mb-4 block">7</span>
            <span className="text-sm tracking-[0.2em] text-accent font-semibold">FEATURE FILMS EXECUTED</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center md:border-l md:border-r border-secondary/20"
          >
            <span className="font-serif text-7xl md:text-8xl text-secondary/90 font-bold mb-4 block">30</span>
            <span className="text-sm tracking-[0.2em] text-accent font-semibold">NATIONS EXPOSURE</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-7xl md:text-8xl text-secondary/90 font-bold mb-4 block">$6M</span>
            <span className="text-sm tracking-[0.2em] text-accent font-semibold">EDB SINGAPORE PROJECT</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
