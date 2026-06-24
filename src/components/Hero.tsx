/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Code2, Globe, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Hero Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left" id="hero-content">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-purple-500/20 rounded-full py-1.5 px-4 w-fit mb-6 shadow-[0_8px_32px_rgba(139,92,246,0.05)]"
          >
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              PREMIUM WEB DESIGN & DEVELOPMENT
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] mb-6"
            id="hero-headline"
          >
            Premium Websites For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Growing Businesses
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed mb-8"
            id="hero-subheadline"
          >
            We help businesses establish a powerful online presence with modern, fast and affordable websites. Tailored specifically for Indian businesses, creators, and startups.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
            id="hero-buttons"
          >
            <button
              onClick={() => handleScrollTo("#contact")}
              className="relative inline-flex items-center justify-center px-8 py-4 rounded-2xl font-sans text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <button
              onClick={() => handleScrollTo("#portfolio")}
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-sans text-base font-semibold text-gray-300 hover:text-white border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              View Portfolio
            </button>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8 max-w-md"
            id="hero-stats"
          >
            <div className="flex flex-col">
              <span className="text-white font-display font-bold text-xl sm:text-2xl flex items-center gap-1">
                ₹1,200<span className="text-xs text-purple-400 font-sans font-medium">start</span>
              </span>
              <span className="text-xs text-gray-500 font-sans">Highly Affordable</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-bold text-xl sm:text-2xl">
                100%
              </span>
              <span className="text-xs text-gray-500 font-sans">Mobile Friendly</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-bold text-xl sm:text-2xl flex items-center gap-1">
                24/7<span className="text-xs text-blue-400 font-sans font-medium">live</span>
              </span>
              <span className="text-xs text-gray-500 font-sans">Support Access</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual Block */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:mt-0" id="hero-graphic">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[450px] aspect-square glass p-4 shadow-2xl flex flex-col justify-between overflow-hidden group"
          >
            {/* Glossy Refraction Lines */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

            {/* Simulated UI Window */}
            <div className="w-full bg-[#050505]/80 rounded-2xl border border-white/5 overflow-hidden flex-1 flex flex-col shadow-inner">
              {/* Header */}
              <div className="bg-[#0a0a0a] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="w-40 h-5 rounded bg-white/5 flex items-center justify-center text-[10px] font-mono text-purple-400/60">
                  vexorastudios.com
                </div>
                <div className="w-4" />
              </div>

              {/* Mock Website Preview Area */}
              <div className="flex-1 p-5 flex flex-col justify-between relative bg-grid-pattern bg-repeat">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-blue-400 font-semibold mb-2">
                    <Globe className="w-3 h-3 text-blue-400" />
                    <span>LIVE STATUS</span>
                  </div>
                  <div className="h-4 w-32 bg-white/10 rounded mb-2 animate-pulse" />
                  <div className="h-3 w-48 bg-white/5 rounded" />
                </div>

                {/* Floating graphic box */}
                <div className="my-4 self-center relative w-full h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/5 flex items-center justify-around overflow-hidden">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-blue-500/10 border border-blue-500/20"
                  >
                    <Code2 className="w-5 h-5 text-blue-400" />
                    <span className="text-[8px] font-mono text-gray-400 mt-1">FAST CODE</span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut" }}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-purple-500/10 border border-purple-500/20"
                  >
                    <Zap className="w-5 h-5 text-purple-400" />
                    <span className="text-[8px] font-mono text-gray-400 mt-1">SEO BUILT</span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                  >
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="text-[8px] font-mono text-gray-400 mt-1">SSL FREE</span>
                  </motion.div>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold font-display">
                      A
                    </div>
                    <div>
                      <div className="text-[9px] font-semibold text-white">Arman</div>
                      <div className="text-[7px] text-gray-500">Founder & Chief Designer</div>
                    </div>
                  </div>
                  <div className="text-[10px] font-semibold text-purple-400">Vexora India</div>
                </div>
              </div>
            </div>

            {/* Glowing floating label */}
            <div className="absolute -bottom-4 -right-4 bg-[#0a0a0a] border border-white/10 rounded-2xl px-4 py-3 shadow-xl max-w-[160px] flex items-center space-x-2.5">
              <div className="p-1.5 rounded-lg bg-purple-500/20">
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-white uppercase">Affordable</div>
                <div className="text-[9px] text-gray-400 font-mono">Premium design</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
