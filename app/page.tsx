"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { EasterEggModal } from "@/components/ui/EasterEggModal";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { useEasterEggs } from "@/hooks/useEasterEggs";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { isSecretModalOpen, setIsSecretModalOpen, toastMessage, accent } = useEasterEggs();
  const [copiedToast, setCopiedToast] = useState(false);

  const triggerCopyToast = () => {
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 3000);
  };

  return (
    <>
      {/* 1. Loading Screen Animation */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* 2. Custom Follower Cursor */}
      <CustomCursor />

      {/* 3. Interactive Mouse-Reactive Particle Backdrop */}
      <ParticleBackground />

      {/* Main Page Layout Container */}
      <div className="relative min-h-screen bg-black text-[#FAFAFA] selection:bg-[var(--accent)] selection:text-black">
        {/* Navigation Bar */}
        <Navbar />

        {/* Portfolio Sections */}
        <main>
          <HeroSection onCopyEmail={triggerCopyToast} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <TechStackSection />
          <CertificationsSection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection onCopyEmail={triggerCopyToast} />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* 4. Easter Egg Secret Terminal Modal */}
      <EasterEggModal
        isOpen={isSecretModalOpen}
        onClose={() => setIsSecretModalOpen(false)}
        accent={accent}
      />

      {/* Toast Notifications */}
      <AnimatePresence>
        {(toastMessage || copiedToast) && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[130] bg-[#0A0A0C] border border-[var(--accent)] text-white px-5 py-3 rounded-xl shadow-2xl font-mono text-xs flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
            <span>{toastMessage || "Copied to clipboard!"}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
