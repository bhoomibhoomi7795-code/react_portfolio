"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUpRight, Copy, Check, Terminal, Sparkles } from "lucide-react";
import { useState } from "react";
import { soundManager } from "@/lib/audio";

const ROTATING_TITLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "AWS Cloud Practitioner",
  "C / Python / Java Developer"
];

export function HeroSection({ onCopyEmail }: { onCopyEmail: () => void }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleCopy = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    onCopyEmail();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="space-y-8"
        >
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-zinc-950/90 border border-zinc-800 px-4 py-1.5 rounded-full text-xs font-mono text-zinc-300"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{PORTFOLIO_DATA.personal.status}</span>
          </motion.div>

          {/* Large Editorial Headline & Name */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white uppercase leading-[0.95]"
            >
              {PORTFOLIO_DATA.personal.name}
            </motion.h1>

            {/* Animated Dynamic Role Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-10 sm:h-14 overflow-hidden flex items-center"
            >
              <div className="text-xl sm:text-3xl font-mono text-[var(--accent)] font-semibold flex items-center space-x-3">
                <Terminal className="w-6 h-6 text-zinc-500 hidden sm:inline-block" />
                <motion.span
                  key={titleIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length)}
                  className="cursor-pointer select-none hover:underline"
                  data-cursor="magnetic"
                >
                  {ROTATING_TITLES[titleIndex]}
                </motion.span>
              </div>
            </motion.div>

            {/* Intro paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl text-base sm:text-xl text-zinc-400 font-light leading-relaxed pt-2"
            >
              {PORTFOLIO_DATA.personal.tagline}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#projects"
              onClick={() => soundManager.playClick()}
              className="px-7 py-3.5 bg-[#FAFAFA] text-black hover:bg-[var(--accent)] font-mono font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 group transition-all shadow-lg"
              data-cursor="magnetic"
            >
              <span>View Flagship Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={handleCopy}
              className="px-6 py-3.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all"
              data-cursor="magnetic"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-zinc-900"
          >
            {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Easter Egg Hint in corner */}
      <div className="absolute bottom-6 right-6 text-[10px] font-mono text-zinc-700 hidden lg:flex items-center gap-1 select-none">
        <Sparkles className="w-3 h-3 text-zinc-600" /> Tip: Press Konami keys or type &apos;hello&apos;
      </div>
    </section>
  );
}
