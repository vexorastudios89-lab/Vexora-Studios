/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Phone, Mail, Clock, MessageSquare, CheckCircle, Sparkles, AlertCircle, ChevronDown, MessageCircle } from "lucide-react";

interface ContactProps {
  selectedPlan: string;
  onClearPlan: () => void;
}

export default function Contact({ selectedPlan, onClearPlan }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    details: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Whenever selectedPlan is chosen, pre-populate values elegantly
  useEffect(() => {
    if (selectedPlan) {
      let mappedType = "";
      let mappedBudget = "";
      
      const planLower = selectedPlan.toLowerCase();
      if (planLower.includes("launchpad") || planLower.includes("starter")) {
        mappedType = "Custom Premium Website";
        mappedBudget = "Under $1,000";
      } else if (planLower.includes("growth") || planLower.includes("elite") || planLower.includes("professional")) {
        mappedType = "E-Commerce Platform";
        mappedBudget = "$1,000 - $2,500";
      } else if (planLower.includes("cloud") || planLower.includes("enterprise")) {
        mappedType = "Custom Premium Website";
        mappedBudget = "$5,000+";
      } else {
        mappedType = "Custom Premium Website";
        mappedBudget = "$1,000 - $2,500";
      }

      setFormData((prev) => ({
        ...prev,
        projectType: mappedType,
        budget: mappedBudget,
        details: `Hello Vexora Studios! I'm interested in the ${selectedPlan} plan. Please get in touch with me to discuss my requirements.`
      }));
    }
  }, [selectedPlan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    onClearPlan();
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      details: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validations
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your Full Name.");
      return;
    }
    
    if (!formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your Email Address.");
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid Email Address.");
      return;
    }

    if (!formData.projectType) {
      setStatus("error");
      setErrorMessage("Please select a Project Type.");
      return;
    }

    if (!formData.budget) {
      setStatus("error");
      setErrorMessage("Please select an Estimated Budget.");
      return;
    }

    if (!formData.details.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your Message / Project Details.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xpqgqwvj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not Provided",
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.details
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", projectType: "", budget: "", details: "" });
        onClearPlan();
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "An error occurred while submitting your brief to Formspree.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong while sending your request. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Decorative ambient spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="contact-info">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/10 rounded-full px-3 py-1 w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase">
                  START YOUR PROJECT TODAY
                </span>
              </div>
              
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
                Let's Craft Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Magnificent
                </span>
              </h2>
              
              <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed mb-8">
                Ready to stand out in the digital landscape? Drop us a query. Vexora Studios replies to all requests within 4 hours with standard wireframes and initial mockups.
              </p>

              {/* Direct Channels */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase block">
                      EMAIL DIRECTLY
                    </span>
                    <a
                      href="mailto:vexorastudios89@gmail.com"
                      className="text-sm sm:text-base font-sans font-semibold text-white hover:text-purple-400 transition-colors"
                    >
                      vexorastudios89@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase block">
                      WHATSAPP DIRECT
                    </span>
                    <a
                      href="https://wa.me/919999999999?text=Hello%20Vexora%20Studios!%20I'm%20interested%20in%20a%20website."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-sans font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      Instant Chat Live
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase block">
                      RESPONSE METRIC
                    </span>
                    <span className="text-sm sm:text-base font-sans font-semibold text-white">
                      Within 4 Hours (Standard IST)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Formspree note */}
            <div className="glass p-6 rounded-2xl mt-12">
              <p className="font-sans text-xs text-gray-400 leading-relaxed flex items-start gap-2.5">
                <MessageSquare className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Formspree Routing:</strong> Responses are delivered directly to our secure inbox through Formspree (configured for <strong>vexorastudios89@gmail.com</strong>). No database logs are leaked, keeping your project brief 100% confidential.
                </span>
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form and WhatsApp below */}
          <div className="lg:col-span-7 flex flex-col gap-6" id="contact-form-block">
            <div className="glass p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              
              {/* Decorative light circle */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-[55px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-500/5">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-3">
                      Brief Received!
                    </h3>
                    <p className="font-sans text-sm text-gray-300 max-w-sm mb-8 leading-relaxed">
                      Thank you! Your message has been sent successfully.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-gray-300 hover:text-white font-semibold text-xs font-mono uppercase transition"
                    >
                      Send Another Query
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="active-form"
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/xpqgqwvj"
                    method="POST"
                    className="space-y-6"
                    noValidate
                  >
                    {/* Error indicator */}
                    {status === "error" && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm rounded-xl flex items-center gap-2.5">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Notice if a plan is pre-filled */}
                    {selectedPlan && (
                      <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-between">
                        <span className="text-[11px] font-mono text-purple-300 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 animate-spin" />
                          <span>Selected Plan: <strong>{selectedPlan}</strong></span>
                        </span>
                        <button
                          type="button"
                          onClick={handleClear}
                          className="text-[10px] font-mono font-bold text-gray-500 hover:text-white uppercase"
                        >
                          Clear Selection
                        </button>
                      </div>
                    )}

                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest block mb-2">
                        Full Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Rohit Sharma"
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/60 placeholder-gray-600 transition"
                      />
                    </div>

                    {/* Contact details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest block mb-2">
                          Email Address <span className="text-purple-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="name@company.com"
                          className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/60 placeholder-gray-600 transition"
                        />
                      </div>

                      {/* Phone Number Field */}
                      <div>
                        <label htmlFor="phone" className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest block mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/60 placeholder-gray-600 transition"
                        />
                      </div>
                    </div>

                    {/* Project Type & Budget Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Project Type Dropdown */}
                      <div>
                        <label htmlFor="projectType" className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest block mb-2">
                          Project Type <span className="text-purple-400">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/60 transition appearance-none cursor-pointer pr-10"
                          >
                            <option value="" disabled className="text-gray-500">Select project type</option>
                            <option value="Custom Premium Website">Custom Premium Website</option>
                            <option value="E-Commerce Platform">E-Commerce Platform</option>
                            <option value="SaaS Landing Page">SaaS Landing Page</option>
                            <option value="UI/UX Design / Mockups">UI/UX & Brand Design</option>
                            <option value="Other Services">Other Custom Services</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Budget Dropdown */}
                      <div>
                        <label htmlFor="budget" className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest block mb-2">
                          Estimated Budget <span className="text-purple-400">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/60 transition appearance-none cursor-pointer pr-10"
                          >
                            <option value="" disabled className="text-gray-500">Select budget range</option>
                            <option value="Under $1,000">Under $1,000</option>
                            <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                            <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                            <option value="$5,000+">$5,000+</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details Field */}
                    <div>
                      <label htmlFor="details" className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest block mb-2">
                        Message / Project Details <span className="text-purple-400">*</span>
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={4}
                        value={formData.details}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your business, preferred page count, and key goals..."
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/60 placeholder-gray-600 transition resize-none leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-4 rounded-xl font-sans text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 cursor-pointer disabled:opacity-50 transition-all duration-300"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Delivering brief...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Brief (Formspree)</span>
                        </>
                      )}
                    </button>

                    {/* Direct disclosure text */}
                    <p className="text-[11px] font-mono text-center text-gray-500 tracking-wide mt-4 leading-relaxed">
                      Your details will be sent directly to Vexora Studios through Formspree.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* WhatsApp CTA Option below the form container */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass p-5 border border-emerald-500/20 hover:border-emerald-500/40 shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5 text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">Need a faster response?</h4>
                  <p className="font-sans text-xs text-gray-400">Start an instant direct thread with our team.</p>
                </div>
              </div>
              <a
                href="https://wa.me/919999999999?text=Hello%20Vexora%20Studios!%20I'm%20interested%20in%20a%20website%20design."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all duration-300 text-center"
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
