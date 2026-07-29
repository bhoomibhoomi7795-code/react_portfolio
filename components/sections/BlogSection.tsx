"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { BookOpen, ArrowUpRight, Clock } from "lucide-react";
import { soundManager } from "@/lib/audio";

export function BlogSection() {
  return (
    <section id="blog" className="py-24 px-6 bg-black relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
            <BookOpen className="w-4 h-4" />
            <span>08 // Publications & Research</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Technical Writings
          </h2>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-4 hover:border-zinc-700 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span className="text-[var(--accent)] uppercase font-semibold">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-mono leading-snug group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-zinc-400 font-light line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>{post.date}</span>
                <span
                  onClick={() => soundManager.playClick()}
                  className="text-[var(--accent)] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  data-cursor="magnetic"
                >
                  Read Essay <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
