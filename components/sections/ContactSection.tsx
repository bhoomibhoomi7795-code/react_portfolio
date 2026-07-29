"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Mail, Send, Check, Copy, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/BrandIcons";
import { soundManager } from "@/lib/audio";

export function ContactSection({ onCopyEmail }: { onCopyEmail: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setEmailCopied(true);
    onCopyEmail();
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
            <Mail className="w-4 h-4" />
            <span>09 // Contact & Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Let&apos;s Build Something Extraordinary
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-mono text-white">Direct Communication</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Have an ambitious project in mind, need technical architecture review, or looking to hire a lead engineer? Send me a message directly.
              </p>
            </div>

            {/* Quick Copy Box */}
            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl space-y-3">
              <span className="text-xs uppercase font-mono text-zinc-500">Official Direct Email</span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-sm text-white font-semibold truncate">
                  {PORTFOLIO_DATA.personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-black border border-zinc-700 hover:border-[var(--accent)] text-zinc-300 hover:text-white rounded text-xs font-mono flex items-center gap-1.5 transition-colors"
                  data-cursor="magnetic"
                >
                  {emailCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase font-mono text-zinc-500">Connect Elsewhere</span>
              <div className="flex items-center space-x-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:border-[var(--accent)] transition-colors"
                  data-cursor="hover"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:border-[var(--accent)] transition-colors"
                  data-cursor="hover"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:border-[var(--accent)] transition-colors"
                  data-cursor="hover"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-zinc-950/90 border border-zinc-800/80 rounded-2xl space-y-6"
            >
              {isSubmitted && (
                <div className="p-4 bg-emerald-950/50 border border-emerald-800 text-emerald-300 rounded-xl text-xs font-mono flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Message transmitted successfully! I will respond within 24 hours.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-zinc-400">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-sm text-white focus:outline-none focus:border-[var(--accent)] font-mono transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-zinc-400">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-sm text-white focus:outline-none focus:border-[var(--accent)] font-mono transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-zinc-400">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry / Frontend Architecture"
                  className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-sm text-white focus:outline-none focus:border-[var(--accent)] font-mono transition-colors"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono uppercase text-zinc-400">
                  <label>Message Detail</label>
                  <span className="text-[10px] text-zinc-600">{formData.message.length} chars</span>
                </div>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project scope, timeline, and tech stack..."
                  className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-sm text-white focus:outline-none focus:border-[var(--accent)] font-mono transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[var(--accent)] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                data-cursor="magnetic"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
