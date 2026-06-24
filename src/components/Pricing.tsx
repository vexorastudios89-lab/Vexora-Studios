/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, Calendar, ArrowRight, Flame, Sparkles } from "lucide-react";
import { PRICING_TIERS } from "../data";

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="pricing-header">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-blue-300 uppercase">
              REASONABLE TRANSPARENT RATES
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Affordable Website Packages
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400">
            No hidden costs. No recurring server-maintenance fees. Choose a transparent plan that perfectly fits your business timeline and budget.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          id="pricing-grid"
        >
          {PRICING_TIERS.map((tier) => (
            <motion.div
              key={tier.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`group relative glass p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl overflow-hidden pricing-card ${
                tier.popular
                  ? "border-2 border-purple-500/40 shadow-purple-500/10 scale-[1.03] lg:scale-[1.04] bg-[#050505]"
                  : "hover:border-purple-500/35 hover:bg-white/5"
              }`}
            >
              {/* Popular glow badge */}
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-white" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              {/* Title and Pricing */}
              <div>
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-4">
                  {tier.name}
                </span>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
                    {tier.price}
                  </span>
                  {tier.originalPrice && (
                    <span className="text-sm font-sans text-gray-500 line-through">
                      {tier.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-xs font-mono text-gray-400 mb-6 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>Delivery in <strong>{tier.delivery}</strong></span>
                </p>

                <div className="h-px bg-white/5 my-6" />

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-300">
                      <div className="p-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 mr-3 mt-0.5 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(tier.name)}
                className={`w-full py-4 rounded-xl font-sans text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  tier.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-xl shadow-purple-500/25 group-hover:scale-[1.01]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/5"
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Support assistance block */}
        <div className="mt-16 text-center max-w-xl mx-auto p-5 glass">
          <p className="font-sans text-xs text-gray-500 leading-relaxed">
            * All packages include free setup assistance and 1 year of support. To custom build additional pages, custom CMS portals, dynamic databases, or online storefronts, get in touch with Arman for a custom quotation.
          </p>
        </div>
      </div>
    </section>
  );
}
