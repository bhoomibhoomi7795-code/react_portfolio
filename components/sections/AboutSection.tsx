"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Compass, Lightbulb, Zap, Smile } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3"
          >
            <Compass className="w-4 h-4" />
            <span>01 // Architecture & Biography</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            Engineering With Precision
          </motion.h2>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-zinc-300 font-light text-base sm:text-lg leading-relaxed"
          >
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[var(--accent)] first-letter:mr-3 first-letter:float-left">
              {PORTFOLIO_DATA.personal.bio}
            </p>
            <p className="text-zinc-400">
              I specialize in scaling web applications from zero to millions of active users while guaranteeing sub-second response times, zero cumulative layout shifts, and 60fps animations.
            </p>
            
            {/* Current Focus Highlight Box */}
            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl space-y-2">
              <div className="text-xs uppercase font-mono text-[var(--accent)] flex items-center gap-2">
                <Zap className="w-4 h-4" /> Current Engineering Focus
              </div>
              <p className="text-sm text-zinc-300 font-mono">
                Investigating offline-first synchronization protocols using WebSockets, IndexedDB CRDTs, and WebAssembly audio processors.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Engineering Philosophy & Fun Facts */}
          <div className="lg:col-span-6 space-y-8">
            {/* Engineering Philosophy Cards */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-zinc-400" /> Core Engineering Philosophy
              </h3>
              <div className="space-y-3">
                {PORTFOLIO_DATA.personal.philosophy.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="p-5 bg-zinc-950/70 border border-zinc-800/80 rounded-xl hover:border-zinc-700 transition-colors"
                  >
                    <h4 className="text-base font-bold text-white font-mono mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fun Facts Cards */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <Smile className="w-4 h-4 text-zinc-400" /> Beyond The Code
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PORTFOLIO_DATA.personal.funFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-black border border-zinc-800/60 rounded-lg text-xs font-mono text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
                  >
                    <span className="text-[var(--accent)] font-bold mr-2">0{idx + 1}.</span>
                    {fact}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
