"use client";

import { motion } from "framer-motion";

const strengthsData = [
  {
    title: "OPERATIONS",
    items: [
      "NDA, Test, Contracting",
      "Manpower Evaluation",
      "Project Management",
      "Costing & Budgeting with Input breakdown",
      "Delivery Analysis",
      "Bottleneck Planning",
      "Conflict resolution"
    ]
  },
  {
    title: "BUSINESS DEVELOPMENT",
    items: [
      "International Marketing Preparation",
      "Product Development (IP)",
      "International Sales (IP)",
      "Co - Productions",
      "Business Development and Acquisition",
      "Business Analysis and Strategy",
      "Studio Acquisitions and Analysis"
    ]
  },
  {
    title: "MEDIA & SEGMENTS",
    items: [
      "Animation",
      "VFX",
      "2D & 3D",
      "AI Integration"
    ]
  },
  {
    title: "FORMATS & PRODUCTS",
    items: [
      "Feature Films",
      "Vertical OTT",
      "TV Series",
      "YouTube",
      "Social Media"
    ]
  }
];

export default function StrengthsSection() {
  return (
    <section className="py-24 bg-[#EBE7DF] relative border-t border-primary/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-primary">Strengths</h2>
          <div className="w-16 h-px bg-accent2 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengthsData.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-primary/5 p-8 rounded-xl border border-primary/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-sm font-bold tracking-widest text-accent2 uppercase mb-6 pb-4 border-b border-primary/10 text-center">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="text-primary/80 font-medium text-sm flex items-start gap-3">
                    <span className="text-accent2 mt-1 opacity-70">❖</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
