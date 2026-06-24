/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Code2, Sparkles, Filter, X } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "Landing Page", "Business Website", "Portfolio Website", "Blog & Directory"];

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="portfolio-header">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase">
              OUR SHIPPED PROJECTS
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Elite Digital Work
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400">
            A hand-picked collection of premium layouts, responsive web interfaces, and high-performance digital spaces built for Indian innovators.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12" id="portfolio-filters">
          <div className="flex items-center space-x-2 text-xs font-mono text-purple-400/80 mr-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER BY:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-sans text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl border transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white shadow-lg shadow-purple-500/15 scale-[1.02]"
                  : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:border-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group relative glass p-0 border border-purple-500/10 hover:border-purple-500/30 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0c082c]">
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 z-10 bg-[#030014]/80 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider">
                    {project.category}
                  </span>

                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[0.85] group-hover:brightness-90"
                  />

                  {/* Dark gradient blur on image hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090522] via-transparent to-transparent opacity-80" />

                  {/* Interactive Button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/45 backdrop-blur-xs">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-5 py-2.5 rounded-xl bg-white text-black font-sans text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-300 transition-all duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-400 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-white/5 mt-auto">
                    <Code2 className="w-3.5 h-3.5 text-purple-400 mr-1" />
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono font-medium text-gray-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modular Case Study Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4" id="case-study-modal">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#050505] border border-white/10 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
              >
                {/* Top Close Button */}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 border border-white/10 text-gray-400 hover:text-white hover:bg-black/60 transition-colors"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Visual Header */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent" />
                  <span className="absolute bottom-6 left-6 bg-purple-600 border border-white/10 rounded-full px-3 py-1 text-xs font-mono font-bold text-white uppercase tracking-wider">
                    {activeModalProject.category}
                  </span>
                </div>

                {/* Modal Details Content */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                  <div className="flex items-center space-x-2 text-purple-400 font-semibold text-xs font-mono mb-2">
                    <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
                    <span>PREMIUM SHIPPED DEMO</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                    {activeModalProject.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                    {activeModalProject.description}
                  </p>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
                    <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest mb-3">
                      Development Core Specs:
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] font-semibold text-gray-500 uppercase block mb-1">
                          Delivery Time
                        </span>
                        <span className="text-sm text-gray-200 font-sans font-medium">
                          Completed in 3 Days
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold text-gray-500 uppercase block mb-1">
                          Responsive Scale
                        </span>
                        <span className="text-sm text-gray-200 font-sans font-medium">
                          100% Fluid Mobile
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold text-gray-500 uppercase block mb-1">
                          SEO Performance
                        </span>
                        <span className="text-sm text-gray-200 font-sans font-medium">
                          Green Google Indexing
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold text-gray-500 uppercase block mb-1">
                          Hosting Setup
                        </span>
                        <span className="text-sm text-gray-200 font-sans font-medium">
                          Deploy Vercel/SSL Free
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-gray-400 font-bold uppercase mr-1">
                      BUILD STACK:
                    </span>
                    {activeModalProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-xl"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="p-4 border-t border-white/5 bg-black/40 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-gray-300 hover:text-white text-sm font-semibold transition"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => {
                      setActiveModalProject(null);
                      const contactSec = document.querySelector("#contact");
                      if (contactSec) {
                        contactSec.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/20 transition flex items-center gap-1"
                  >
                    <span>Hire Us for Similar Site</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
