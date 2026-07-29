"use client";

import { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp, Sparkles, Clock, Code2 } from "lucide-react";
import { soundManager } from "@/lib/audio";

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZoneName: "short"
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 bg-black border-t border-zinc-900 text-zinc-500 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Clock */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-2 text-zinc-300">
            <Code2 className="w-4 h-4 text-[var(--accent)]" />
            <span className="font-bold text-white">{PORTFOLIO_DATA.personal.name}</span>
          </div>

          <div className="flex items-center space-x-2 text-zinc-500">
            <Clock className="w-3.5 h-3.5" />
            <span>{time || "12:00:00 UTC"}</span>
          </div>
        </div>

        {/* Center: Easter Egg Hint */}
        <div className="flex items-center space-x-2 text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer select-none">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>Crafted with Next.js 15 & Framer Motion</span>
        </div>

        {/* Right: Scroll to Top */}
        <div className="flex items-center space-x-4">
          <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[var(--accent)] transition-colors"
            title="Back to Top"
            data-cursor="magnetic"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
