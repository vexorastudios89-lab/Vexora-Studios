/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Briefcase,
  FolderGit,
  Rocket,
  FileText,
  Mail,
  Server,
  RefreshCw,
  TrendingUp,
  ArrowUpRight
} from "lucide-react";
import { SERVICES } from "../data";

// Resolve icon components dynamically
const getServiceIcon = (iconName: string) => {
  const iconClasses = "w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300";
  switch (iconName) {
    case "Briefcase":
      return <Briefcase className={iconClasses} />;
    case "FolderGit":
      return <FolderGit className={iconClasses} />;
    case "Rocket":
      return <Rocket className={iconClasses} />;
    case "FileText":
      return <FileText className={iconClasses} />;
    case "Mail":
      return <Mail className={iconClasses} />;
    case "Server":
      return <Server className={iconClasses} />;
    case "RefreshCw":
      return <RefreshCw className={iconClasses} />;
    case "TrendingUp":
      return <TrendingUp className={iconClasses} />;
    default:
      return <Briefcase className={iconClasses} />;
  }
};

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-transparent">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="services-header">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-blue-300 uppercase">
              WHAT WE EXCEL AT
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Our Premium Services
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400">
            From single landing pages to high-speed blogs and responsive corporate architectures, we design modern solutions specifically tailored to grow your revenue.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          id="services-grid"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative glass hover:border-purple-500/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Card visual highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/20 border border-white/5 flex items-center justify-center mb-6 group-hover:border-blue-500/30 transition-all duration-300 shadow-md">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Action indicator */}
              <button
                onClick={handleScrollToContact}
                className="flex items-center space-x-1.5 text-xs font-mono font-bold text-purple-400 group-hover:text-blue-400 transition-colors duration-200 mt-auto text-left cursor-pointer"
              >
                <span>Request Setup</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic CTA panel */}
        <div className="relative glass p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between shadow-2xl overflow-hidden">
          {/* Ambient visual overlay */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[60px] pointer-events-none" />

          <div className="max-w-xl text-center sm:text-left mb-6 sm:mb-0 relative z-10">
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
              Have a custom requirement or need a web portal?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gray-400">
              Founder Arman is ready to construct custom databases, API endpoints, web dashboards, and tailor-made modules.
            </p>
          </div>

          <button
            onClick={handleScrollToContact}
            className="relative z-10 inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-sans text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-purple-500/25 cursor-pointer whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
