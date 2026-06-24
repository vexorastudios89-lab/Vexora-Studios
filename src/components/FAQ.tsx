/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle, ArrowUpRight } from "lucide-react";
import { FAQS } from "../data";

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleScrollToContact = () => {
    const contactSec = document.querySelector("#contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="faqs" className="py-24 relative overflow-hidden bg-transparent">
      {/* Glow overlays */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="faqs-header">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-blue-300 uppercase">
              GOT QUESTIONS? WE ANSWER
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm text-gray-400">
            Everything you need to know about payments, mobile configurations, timeline, and domain transfers.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4" id="faqs-accordion-list">
          {FAQS.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#050505] border-purple-500/40 shadow-[0_4px_24px_rgba(139,92,246,0.06)]"
                    : "glass border-purple-500/10 hover:border-purple-500/20"
                }`}
              >
                {/* Trigger line */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${isOpen ? "text-purple-400" : "text-gray-500"}`} />
                    <span className="font-display font-semibold text-sm sm:text-base text-white leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-xl border transition-all duration-200 ${isOpen ? "bg-purple-500/20 border-purple-500/30 text-purple-400" : "bg-white/5 border-white/5 text-gray-400"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible panel body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5">
                        <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Floating custom question box */}
        <div className="mt-12 text-center">
          <p className="font-sans text-xs sm:text-sm text-gray-400">
            Have another question about custom databases, blogs or server details?
          </p>
          <button
            onClick={handleScrollToContact}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
          >
            <span>Ask Founder Arman Directly</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
