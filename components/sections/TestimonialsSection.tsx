"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { MessageSquareQuote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { soundManager } from "@/lib/audio";

export function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    soundManager.playClick();
    setCurrentIdx((old) => (old === 0 ? PORTFOLIO_DATA.testimonials.length - 1 : old - 1));
  };

  const next = () => {
    soundManager.playClick();
    setCurrentIdx((old) => (old === PORTFOLIO_DATA.testimonials.length - 1 ? 0 : old + 1));
  };

  const activeTestimonial = PORTFOLIO_DATA.testimonials[currentIdx];

  return (
    <section id="testimonials" className="py-24 px-6 bg-black relative border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
            <MessageSquareQuote className="w-4 h-4" />
            <span>07 // Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Client & Executive Praise
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="relative p-8 sm:p-12 bg-zinc-950/90 border border-zinc-800/80 rounded-3xl space-y-8">
          <MessageSquareQuote className="w-12 h-12 text-[var(--accent)] opacity-40" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg sm:text-2xl font-light text-zinc-200 leading-relaxed italic">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </p>

              <div className="flex items-center space-x-4 pt-4 border-t border-zinc-900">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900">
                  <Image
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-mono text-sm font-bold text-white">
                    {activeTestimonial.author}
                  </div>
                  <div className="font-mono text-xs text-zinc-500">
                    {activeTestimonial.role} — <span className="text-[var(--accent)]">{activeTestimonial.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex space-x-2">
              {PORTFOLIO_DATA.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    soundManager.playClick();
                    setCurrentIdx(i);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIdx === i ? "bg-[var(--accent)] w-8" : "bg-zinc-800 hover:bg-zinc-600"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-zinc-800 bg-black text-zinc-400 hover:text-white hover:border-[var(--accent)] transition-colors"
                data-cursor="hover"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full border border-zinc-800 bg-black text-zinc-400 hover:text-white hover:border-[var(--accent)] transition-colors"
                data-cursor="hover"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
