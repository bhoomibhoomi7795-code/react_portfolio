"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Layers, Terminal } from "lucide-react";
import { soundManager } from "@/lib/audio";

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-black relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)]">
            <Layers className="w-4 h-4" />
            <span>05 // Ecosystem & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Architectural Tech Stack
          </h2>
          <p className="text-sm text-zinc-400 font-mono max-w-xl mx-auto">
            Battle-tested technologies leveraged daily for maximum runtime reliability and performance.
          </p>
        </div>

        {/* Animated Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {PORTFOLIO_DATA.techStackGrid.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.08, y: -4 }}
              onMouseEnter={() => soundManager.playHover()}
              className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col items-center justify-center space-y-2 hover:border-[var(--accent)] hover:shadow-lg transition-all cursor-pointer group"
              data-cursor="hover"
            >
              <div className="w-10 h-10 rounded-full bg-black border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
