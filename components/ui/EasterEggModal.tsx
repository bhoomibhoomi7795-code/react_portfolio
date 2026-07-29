"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Sparkles, Command } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundManager } from "@/lib/audio";

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
  accent: string;
}

export function EasterEggModal({ isOpen, onClose, accent }: EasterEggModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
        <motion.div
          className="relative w-full max-w-lg bg-[#0A0A0A] border border-[var(--accent)] rounded-xl p-6 shadow-2xl text-zinc-200 overflow-hidden font-mono"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-xs uppercase tracking-widest font-bold text-white">
                SECRET_TERMINAL.sh
              </span>
            </div>
            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="text-zinc-500 hover:text-white p-1 transition-colors"
              data-cursor="hover"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Output Body */}
          <div className="space-y-3 text-xs leading-relaxed">
            <p className="text-zinc-400">
              <span className="text-[var(--accent)]">&gt;</span> SYSTEM.INIT_EASTER_EGG()
            </p>
            <p className="text-emerald-400">
              [SUCCESS] You unlocked the hidden terminal session by typing &apos;hello&apos;!
            </p>
            <div className="p-3 bg-black border border-zinc-800 rounded text-zinc-300 space-y-1">
              <p className="text-white font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" /> Developer Profile Summary:
              </p>
              <p>Name: {PORTFOLIO_DATA.personal.name}</p>
              <p>Current Theme Accent: <span className="text-[var(--accent)] font-bold">{accent.toUpperCase()}</span></p>
              <p>Konami Trick: Try pressing <span className="text-zinc-400 font-bold">↑ ↑ ↓ ↓ ← → ← → B A</span> on desktop!</p>
            </div>

            <div className="pt-2 text-zinc-500 text-[11px]">
              <p className="flex items-center gap-1">
                <Command className="w-3 h-3" /> Tip: Click anywhere or press ESC to dismiss.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="px-4 py-2 bg-[var(--accent)] text-black font-bold text-xs uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
              data-cursor="magnetic"
            >
              Resume Exploring
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
