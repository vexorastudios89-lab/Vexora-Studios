/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, MapPin, Quote } from "lucide-react";
import { REVIEWS } from "../data";

export default function Testimonials() {
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
    <section id="testimonials" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background radial overlays */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="testimonials-header">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Loved by Indian Businesses
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400">
            See how small business owners, startup creators, and professional consultants across major Indian hubs achieved growth with our layouts.
          </p>
        </div>

        {/* Reviews Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          id="testimonials-grid"
        >
          {REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="relative glass p-8 flex flex-col justify-between shadow-xl overflow-hidden group"
            >
              {/* Background ambient Quote Icon */}
              <Quote className="absolute -bottom-4 right-4 w-32 h-32 text-purple-500/5 rotate-12 group-hover:scale-110 group-hover:text-purple-500/10 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Five-star ratings */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Review Review description text */}
                <p className="font-sans text-gray-200 text-sm sm:text-base leading-relaxed mb-8 relative z-10">
                  "{review.text}"
                </p>
              </div>

              {/* User Bio and details */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5 relative z-10">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-display font-bold text-sm text-white shadow-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">
                      {review.name}
                    </h4>
                    <p className="text-[11px] font-mono text-gray-500">Business Client</p>
                  </div>
                </div>

                {/* Location indicator */}
                <div className="flex items-center text-xs font-mono text-purple-400 bg-purple-500/5 border border-purple-500/10 rounded-xl px-3 py-1.5">
                  <MapPin className="w-3 h-3 text-purple-400 mr-1" />
                  <span>{review.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
