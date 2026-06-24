/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    
    // Smooth scroll down to the contact form with offset
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleClearPlan = () => {
    setSelectedPlan("");
  };

  return (
    <div className="relative min-h-screen bg-[#050505] gradient-bg text-gray-200" id="top">
      {/* Absolute top grid mesh overlay */}
      <div className="absolute top-0 left-0 w-full h-[1200px] bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      {/* Global Navigation Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Grid Section */}
      <Services />

      {/* Portfolio Projects Showcase Section */}
      <Portfolio />

      {/* Detailed Vision & Founder Section */}
      <About />

      {/* Custom transparent Pricing Section */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* Bento Indian Reviews Panel */}
      <Testimonials />

      {/* Collapsible Accordion FAQs Section */}
      <FAQ />

      {/* Fully Connected Formspree Form Section */}
      <Contact selectedPlan={selectedPlan} onClearPlan={handleClearPlan} />

      {/* Elegant Editorial Footer */}
      <Footer />

      {/* Interactive Quick Floating Chat Channel */}
      <WhatsAppFloat />
    </div>
  );
}
