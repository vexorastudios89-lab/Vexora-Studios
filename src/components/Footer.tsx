/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Terminal, Instagram, Send, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#020010] relative overflow-hidden" id="footer">
      {/* Decorative linear overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-2 mb-6" id="footer-brand">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Terminal className="w-4.5 h-4.5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white tracking-tight">
                  VEXORA
                </span>
                <span className="text-[9px] font-mono tracking-widest text-purple-400 uppercase font-bold">
                  STUDIOS
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed mb-6">
              Handcrafting premium, responsive, and affordable websites for Indian startups, creators, and business visionaries. Founded and engineered by Arman.
            </p>

            {/* Direct Social Channels */}
            <div className="flex items-center space-x-3" id="social-channels">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:bg-purple-500/10 hover:border-purple-500/30 text-gray-400 hover:text-purple-400 flex items-center justify-center transition"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://wa.me/919999999999?text=Hello%20Arman!%20I'm%20interested%20in%20ordering%20a%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 text-gray-400 hover:text-blue-400 flex items-center justify-center transition"
                aria-label="WhatsApp Profile"
              >
                <Send className="w-4.5 h-4.5" />
              </a>
              <a
                href="mailto:vexorastudios89@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 text-gray-400 hover:text-emerald-400 flex items-center justify-center transition"
                aria-label="Direct Email"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Jump links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-6">
              Agency Navigation
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm font-sans font-medium text-gray-500">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Elite Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Arman
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Indian Operations info */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-6">
              India Operations
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
              Providing digital coverage across all Indian hubs. Standard response rates apply. Fully compatible with Netlify, Vercel, and Hostinger.
            </p>
            <div className="inline-flex items-center space-x-2 bg-purple-500/5 border border-purple-500/10 rounded-xl px-3 py-1.5 text-xs text-purple-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>UPI & Netbanking Active</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-gray-600 flex items-center gap-1">
            <span>&copy; {currentYear} Vexora Studios. Founder: Arman. All Rights Reserved.</span>
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-gray-600 flex items-center gap-1.5">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span>in India</span>
            </span>
            
            {/* Scroll back to top button */}
            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
