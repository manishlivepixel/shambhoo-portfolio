"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-primary">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="storyboard-lines absolute inset-0 opacity-[0.15]"></div>
        <div className="film-grain"></div>
        {/* Abstract cinematic lights */}
        <div className="absolute top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-accent/15 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-accent2/10 rounded-full blur-[130px] mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 lg:col-span-7 pt-12 lg:pt-0"
        >
          <div className="flex items-center gap-4 text-accent/90">
            <span className="w-16 h-px bg-accent/60"></span>
            <span className="text-[10px] tracking-[0.4em] font-medium uppercase drop-shadow-md">ANIMATION &bull; MEDIA &bull; ENTERTAINMENT</span>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[1.05] text-secondary drop-shadow-2xl">
            Where Creativity <br />
            <span className="text-accent italic font-light drop-shadow-lg">Meets Business.</span>
          </h1>

          <p className="text-secondary/70 text-lg md:text-xl max-w-xl font-light leading-relaxed tracking-wide drop-shadow-md">
            Three decades of experience shaping opportunities across animation, media and entertainment.
          </p>

          <div className="pt-6 flex flex-col gap-3 border-l-2 border-accent/40 pl-6 mt-4">
            <h2 className="text-2xl font-serif tracking-wide text-secondary/90">Shambhoo Phalake</h2>
            <p className="text-xs text-secondary/50 tracking-[0.25em] uppercase">Business Development &bull; Strategy &bull; Animation &bull; Media</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-10">
            <Link
              href="#contact"
              className="px-10 py-4 bg-accent/90 backdrop-blur-sm text-primary text-xs font-bold tracking-[0.2em] hover:bg-secondary hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(198,161,91,0.2)]"
            >
              LET&apos;S CONNECT
            </Link>
            <Link
              href="#experience"
              className="px-10 py-4 border border-secondary/20 text-secondary text-xs font-bold tracking-[0.2em] hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-500 bg-primary/20 backdrop-blur-sm"
            >
              EXPLORE MY JOURNEY
            </Link>
          </div>
        </motion.div>

        {/* Hero Character */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[65vh] lg:h-[90vh] lg:col-span-5 flex justify-center items-end"
        >
          {/* Character backglow */}
          <div className="absolute inset-0 top-1/4 bg-accent/10 blur-[90px] rounded-full z-0 pointer-events-none"></div>
          
          <Image
            src="/media/1021A426-4019-4C07-993B-CF8795F9FC1A.PNG"
            alt="Shambhoo Phalke"
            fill
            className="object-contain object-bottom drop-shadow-2xl z-10"
            priority
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[9px] font-medium tracking-[0.5em] text-secondary/40 uppercase">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-accent/80 to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
}
