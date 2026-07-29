"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/portfolioData";
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import Image from "next/image";
import { soundManager } from "@/lib/audio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          className="relative w-full max-w-4xl bg-[#09090B] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl text-zinc-100 my-auto"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          {/* Top Banner Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black border-b border-zinc-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-90" />
            
            {/* Category Pill */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <span className="px-3 py-1 bg-black/80 border border-zinc-700 text-xs font-mono text-[var(--accent)] rounded-full uppercase tracking-wider">
                {project.category} — {project.year}
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-black/80 border border-zinc-700 text-zinc-400 hover:text-white hover:border-[var(--accent)] transition-all"
              data-cursor="hover"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                {project.title}
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base font-light">
                {project.tagline}
              </p>
            </div>

            {/* Metrics highlight bar */}
            {project.metrics && (
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center space-x-3 text-xs sm:text-sm font-mono text-[var(--accent)]">
                <Cpu className="w-5 h-5 flex-shrink-0" />
                <span>{project.metrics}</span>
              </div>
            )}

            {/* Deep Description */}
            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>{project.fullDescription}</p>
            </div>

            {/* Key Features */}
            {project.keyFeatures && (
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-widest font-mono text-zinc-400 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" /> Key Engineering Innovations
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-300">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-zinc-950/60 p-2.5 rounded border border-zinc-800/50">
                      <span className="text-[var(--accent)] font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Notes */}
            {project.architectureNotes && (
              <div className="p-4 bg-black/60 rounded-xl border border-zinc-800 space-y-1">
                <h4 className="text-xs uppercase font-mono text-zinc-400 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[var(--accent)]" /> Architecture & Performance Strategy
                </h4>
                <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                  {project.architectureNotes}
                </p>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono text-zinc-500">Technologies Used</span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div className="pt-4 border-t border-zinc-800 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-xs font-mono font-medium text-white flex items-center gap-2 transition-colors"
                  data-cursor="magnetic"
                >
                  <GithubIcon className="w-4 h-4" /> Source Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-black hover:opacity-90 text-xs font-mono font-bold flex items-center gap-2 transition-opacity"
                  data-cursor="magnetic"
                >
                  <ExternalLink className="w-4 h-4" /> Live Application
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
