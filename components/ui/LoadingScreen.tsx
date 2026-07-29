"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black text-[#FAFAFA] flex flex-col items-center justify-center p-6 select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Monogram Logo Build */}
          <div className="relative flex items-center justify-center mb-8">
            <motion.div
              className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center font-mono text-xl font-bold tracking-tighter"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[var(--accent)] font-mono">BM</span>
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full border border-[var(--accent)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{
                borderTopColor: "transparent",
                borderRightColor: "transparent",
              }}
            />
          </div>

          {/* Loading Headline */}
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Architecting Experience
          </div>

          {/* Counter */}
          <div className="font-mono text-4xl sm:text-6xl font-bold tracking-tight text-white flex items-baseline">
            <span>{Math.min(progress, 100)}</span>
            <span className="text-sm font-mono text-[var(--accent)] ml-1">%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-48 h-[2px] bg-zinc-900 rounded-full mt-6 overflow-hidden relative">
            <motion.div
              className="h-full bg-[var(--accent)]"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
