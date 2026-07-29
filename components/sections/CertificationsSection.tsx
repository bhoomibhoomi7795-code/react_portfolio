"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { soundManager } from "@/lib/audio";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6 bg-black relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
            <Award className="w-4 h-4" />
            <span>06 // Credentials & Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Certifications
          </h2>
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl space-y-4 hover:border-zinc-700 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-black border border-zinc-800 rounded-md text-[var(--accent)]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500">{cert.date}</span>
                </div>
                <h3 className="text-base font-bold text-white font-mono leading-snug group-hover:text-[var(--accent)] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">{cert.issuer}</p>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono">
                <span className="text-[10px] text-zinc-600 truncate max-w-[140px]">
                  ID: {cert.credentialId}
                </span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="text-[var(--accent)] font-bold flex items-center gap-1 hover:underline"
                  data-cursor="magnetic"
                >
                  Verify <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
