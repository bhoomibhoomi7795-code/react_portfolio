"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-black relative border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
            <Briefcase className="w-4 h-4" />
            <span>04 // Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Work Experience
          </h2>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-zinc-800 space-y-12">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-zinc-600 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] transition-colors" />

              {/* Entry Content Card */}
              <div className="p-6 sm:p-8 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl space-y-4 hover:border-zinc-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono">{item.role}</h3>
                    <div className="text-sm font-mono text-[var(--accent)] font-semibold">
                      {item.company}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 pt-2">
                  {item.achievements.map((achieve, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span>{achieve}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-black border border-zinc-800 text-[10px] font-mono text-zinc-400 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
