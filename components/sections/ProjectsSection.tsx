"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { ArrowUpRight, FolderGit2, Layers, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import Image from "next/image";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { soundManager } from "@/lib/audio";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
            <FolderGit2 className="w-4 h-4" />
            <span>03 // Flagship Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Selected Works
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-[#08080A] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Zoom & Mask Reveal */}
              <div
                onClick={() => {
                  soundManager.playClick();
                  setSelectedProject(project);
                }}
                className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-950 cursor-pointer"
                data-cursor="view"
                data-cursor-text="Explore"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-black/20 to-transparent" />

                {/* Category & Year Tag */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-black/80 border border-zinc-800 text-[10px] font-mono text-[var(--accent)] rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3
                      onClick={() => {
                        soundManager.playClick();
                        setSelectedProject(project);
                      }}
                      className="text-xl sm:text-2xl font-bold font-mono text-white group-hover:text-[var(--accent)] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-zinc-600">{project.year}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light line-clamp-2">
                    {project.description}
                  </p>

                  {/* Metrics Badge */}
                  {project.metrics && (
                    <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 text-[11px] font-mono text-zinc-300 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>{project.metrics}</span>
                    </div>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-black border border-zinc-800/80 text-[10px] font-mono text-zinc-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2.5 py-1 bg-black text-[10px] font-mono text-zinc-500">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-900 text-xs font-mono">
                    <button
                      onClick={() => {
                        soundManager.playClick();
                        setSelectedProject(project);
                      }}
                      className="text-[var(--accent)] font-bold flex items-center gap-1 hover:underline"
                      data-cursor="magnetic"
                    >
                      <Layers className="w-3.5 h-3.5" /> Case Study
                    </button>
                    <div className="flex items-center space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                        data-cursor="hover"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-[var(--accent)] transition-colors"
                        data-cursor="hover"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
