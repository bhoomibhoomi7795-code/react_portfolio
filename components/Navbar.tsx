"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { soundManager } from "@/lib/audio";
import { Volume2, VolumeX, Menu, X, Sparkles } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "tech-stack", label: "Stack" },
  { id: "blog", label: "Writings" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const activeSection = useScrollSpy(NAV_ITEMS.map((item) => item.id));
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    soundManager.playClick();
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSound = () => {
    const state = soundManager.toggleMute();
    setIsMuted(!state);
    soundManager.playClick();
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-zinc-900 py-4 shadow-xl"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center space-x-2 group focus:outline-none"
            data-cursor="magnetic"
          >
            <div className="w-8 h-8 rounded-full border border-zinc-700 bg-zinc-950 flex items-center justify-center font-mono text-xs font-bold text-white group-hover:border-[var(--accent)] transition-colors">
              BM
            </div>
            <span className="font-mono text-sm font-semibold tracking-tight text-zinc-200 group-hover:text-[var(--accent)] transition-colors hidden sm:inline-block">
              bhoomika.dev
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-zinc-950/80 border border-zinc-800/80 px-3 py-1.5 rounded-full shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 text-xs font-mono transition-colors rounded-full ${
                    isActive ? "text-black font-bold" : "text-zinc-400 hover:text-white"
                  }`}
                  data-cursor="magnetic"
                  onMouseEnter={() => soundManager.playHover()}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[var(--accent)] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Tools: Sound Mute & Mobile Hamburger */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleSound}
              className="p-2 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-[var(--accent)] transition-colors"
              title={isMuted ? "Enable Sound" : "Mute Sound"}
              data-cursor="hover"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[var(--accent)]" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                soundManager.playClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-200 hover:text-white"
              data-cursor="hover"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 flex flex-col justify-center px-8 md:hidden"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" /> Navigation Menu
              </span>
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-3xl font-bold font-sans tracking-tight ${
                    activeSection === item.id ? "text-[var(--accent)]" : "text-zinc-300"
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
