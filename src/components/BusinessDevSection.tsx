"use client";

import { motion } from "framer-motion";
import { Handshake, Network, TrendingUp } from "lucide-react";

export default function BusinessDevSection() {
  return (
    <section className="py-32 bg-secondary text-primary relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl leading-tight mb-8"
          >
            Good Business Starts <br />
            With the Right <span className="text-accent2 italic">Connection.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary/70 font-light"
          >
            Connecting creative capability with commercial opportunity.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-primary/20 pt-16">
          {[
            {
              icon: <Network className="w-8 h-8 text-accent2" />,
              title: "OPPORTUNITIES",
              desc: "Identifying emerging opportunities across animation, media, OTT, AI and entertainment."
            },
            {
              icon: <Handshake className="w-8 h-8 text-accent2" />,
              title: "PARTNERSHIPS",
              desc: "Building relationships between studios, producers, creators and platforms."
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-accent2" />,
              title: "GROWTH",
              desc: "Helping creative businesses identify where they can compete, collaborate and scale."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col gap-6"
            >
              {item.icon}
              <h3 className="text-sm font-bold tracking-[0.2em] text-primary">{item.title}</h3>
              <p className="text-primary/70 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
