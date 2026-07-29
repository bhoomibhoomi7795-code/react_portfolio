"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Cpu, Layout, Server, Database, Sparkles } from "lucide-react";
import { soundManager } from "@/lib/audio";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...PORTFOLIO_DATA.skillCategories.map((c) => c.title)];

  const getIcon = (title: string) => {
    switch (title) {
      case "Frontend Engineering":
        return <Layout className="w-5 h-5 text-[var(--accent)]" />;
      case "Backend & Systems":
        return <Server className="w-5 h-5 text-[var(--accent)]" />;
      case "AI & Data Architecture":
        return <Cpu className="w-5 h-5 text-[var(--accent)]" />;
      case "Databases & Cloud":
        return <Database className="w-5 h-5 text-[var(--accent)]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
              <Cpu className="w-4 h-4" />
              <span>02 // Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
              Technical Mastery
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 text-xs font-mono rounded-full border transition-all ${
                  selectedCategory === cat
                    ? "bg-[var(--accent)] text-black font-bold border-[var(--accent)]"
                    : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
                data-cursor="magnetic"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.skillCategories
            .filter((cat) => selectedCategory === "All" || cat.title === selectedCategory)
            .map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl hover:border-accent-hover transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-[var(--accent)] transition-colors">
                    {getIcon(cat.title)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">{cat.title}</h3>
                    <p className="text-xs text-zinc-500 font-light">{cat.description}</p>
                  </div>
                </div>

                {/* Animated Skill Pills Grid */}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.06 }}
                      onMouseEnter={() => soundManager.playHover()}
                      className={`px-3.5 py-2 rounded-lg border text-xs font-mono transition-all flex items-center justify-between gap-3 ${
                        skill.highlight
                          ? "bg-zinc-900 border-zinc-700 text-white shadow-sm hover:border-[var(--accent)]"
                          : "bg-black/60 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                      }`}
                      data-cursor="hover"
                    >
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-[10px] text-[var(--accent)] font-bold">
                        {skill.level}%
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
