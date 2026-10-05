"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="font-serif text-5xl md:text-7xl text-secondary mb-6">
                Let&apos;s Create the <br />
                <span className="italic text-accent">Next Opportunity.</span>
              </h2>
              <p className="text-secondary/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                For partnerships, business opportunities, animation projects, strategic conversations and industry collaborations.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-4">
              <a 
                href="https://www.linkedin.com/in/shambhoophalke/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-secondary text-primary font-semibold tracking-widest text-sm hover:bg-accent transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
                CONNECT ON LINKEDIN
              </a>
              <a 
                href="mailto:shambhoo@shambhoofalke.com"
                className="flex items-center gap-3 px-8 py-4 border border-secondary/20 text-secondary font-semibold tracking-widest text-sm hover:border-accent hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                EMAIL SHAMBHOO
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-secondary/5 border border-secondary/10 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full blur-2xl"></div>
              
              <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest text-secondary/60">NAME</label>
                    <input type="text" className="bg-transparent border-b border-secondary/20 py-2 text-secondary focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest text-secondary/60">COMPANY</label>
                    <input type="text" className="bg-transparent border-b border-secondary/20 py-2 text-secondary focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest text-secondary/60">EMAIL</label>
                  <input type="email" className="bg-transparent border-b border-secondary/20 py-2 text-secondary focus:outline-none focus:border-accent transition-colors" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest text-secondary/60">PURPOSE</label>
                  <input type="text" className="bg-transparent border-b border-secondary/20 py-2 text-secondary focus:outline-none focus:border-accent transition-colors" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest text-secondary/60">MESSAGE</label>
                  <textarea rows={4} className="bg-transparent border-b border-secondary/20 py-2 text-secondary focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="mt-4 px-8 py-4 border border-accent text-accent font-semibold tracking-widest text-sm hover:bg-accent hover:text-primary transition-all self-start">
                  SEND MESSAGE
                </button>
              </form>
            </div>
            
            {/* Small decorative character element sticking out */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 opacity-20 pointer-events-none hidden md:block">
              <Image 
                src="/media/2.png"
                alt="Decorative"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
