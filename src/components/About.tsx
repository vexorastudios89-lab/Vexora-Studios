/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Zap, Smartphone, Palette, Search, LifeBuoy, Heart, Sparkles } from "lucide-react";
import { WHY_CHOOSE_US } from "../data";

// Dynamically resolve icon based on text
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "ShieldCheck":
      return <ShieldCheck className="w-6 h-6 text-blue-400" />;
    case "Zap":
      return <Zap className="w-6 h-6 text-amber-400" />;
    case "Smartphone":
      return <Smartphone className="w-6 h-6 text-indigo-400" />;
    case "Palette":
      return <Palette className="w-6 h-6 text-purple-400" />;
    case "SearchCheck":
      return <Search className="w-6 h-6 text-pink-400" />;
    case "LifeBuoy":
      return <LifeBuoy className="w-6 h-6 text-emerald-400" />;
    default:
      return <Sparkles className="w-6 h-6 text-purple-400" />;
  }
};

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[250px] h-[250px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* About Main Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20" id="about-intro">
          <div className="lg:col-span-6">
            <div className="flex items-center space-x-2 bg-purple-500/10 border border-purple-500/10 rounded-full px-3 py-1 w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase">
                MEET THE FOUNDER & VISION
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-6">
              Empowering Indian Startups with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Premium Code & Design
              </span>
            </h2>
            <p className="font-sans text-base text-gray-400 leading-relaxed mb-6">
              Vexora Studios is founded by <strong className="text-white font-semibold">Arman</strong> and specializes in creating highly affordable, modern and responsive websites for Indian businesses, creators, and startups.
            </p>
            <p className="font-sans text-base text-gray-400 leading-relaxed">
              We believe every local brand, professional, or aspiring startup deserves an exquisite digital showroom that loads instantly, converts visitors into customers, and operates with premium world-class design standards—without breaking the bank.
            </p>
          </div>

          <div className="lg:col-span-6 glass p-8 relative overflow-hidden shadow-2xl">
            {/* Visual shine */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-[50px] pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center font-display font-bold text-2xl text-white shadow-lg shadow-purple-500/20">
                A
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white">Arman</h4>
                <p className="text-xs font-mono text-purple-400">FOUNDER & LEAD ENGINEER</p>
              </div>
            </div>

            <blockquote className="font-sans italic text-gray-300 text-sm sm:text-base leading-relaxed mb-6 relative z-10">
              "We noticed that many Indian business owners are overcharged for slow, outdated templates. Vexora Studios is built to change that. We deliver handcrafted, highly-optimized websites in record times at prices that match startup budgets."
            </blockquote>

            <div className="flex items-center justify-between border-t border-white/5 pt-4">
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-purple-500 fill-purple-500" />
                <span className="text-xs font-mono text-gray-400">Crafted in India</span>
              </div>
              <span className="text-xs font-mono text-purple-400">Vexora India Setup</span>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div id="why-choose-us" className="border-t border-white/5 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-4">
              Why Indian Businesses Choose Vexora
            </h3>
            <p className="font-sans text-sm text-gray-400">
              We focus on premium execution, clear metrics, and zero technical jargon. We manage everything, so you can focus on scaling your business.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {WHY_CHOOSE_US.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative glass hover:border-purple-500/30 p-6 shadow-md transition-all duration-300"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-purple-500/10 transition-colors duration-300">
                  {getIcon(item.iconName)}
                </div>

                <h4 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-300 transition-all duration-300">
                  {item.title}
                </h4>
                
                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle border bottom line */}
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
