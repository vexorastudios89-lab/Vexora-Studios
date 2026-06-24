/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQs", href: "#faqs" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center space-x-2 group"
          id="logo-link"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-300">
            <Terminal className="w-5 h-5 text-white" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300 -z-10" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
              VEXORA
            </span>
            <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-bold">
              STUDIOS
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center" id="desktop-cta">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-sans text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Let's Talk
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-200 focus:outline-none"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-[#050505]/95 backdrop-blur-xl border-l border-white/10 z-50 p-6 shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-drawer"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-white">VEXORA</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col space-y-6" id="mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-sans text-base font-medium text-gray-300 hover:text-white transition-colors py-1"
            >
              {item.name}
            </a>
          ))}
          <div className="h-px bg-white/5 my-2" />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex items-center justify-center w-full py-3 rounded-xl font-sans text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 text-center shadow-lg shadow-purple-500/25"
          >
            Let's Talk
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </a>
        </nav>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
          id="mobile-overlay"
        />
      )}
    </header>
  );
}
