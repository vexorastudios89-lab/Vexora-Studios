/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare, Sparkles } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/919999999999?text=Hello%20Arman!%20I'm%20visiting%20Vexora%20Studios%20and%20would%20like%20to%20know%20more%20about%20your%20website%20design%20packages.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2" id="whatsapp-float-block">
      {/* Decorative tooltip */}
      <div className="bg-[#0c082e] border border-purple-500/20 text-white px-3 py-1.5 rounded-xl shadow-2xl flex items-center gap-1.5 opacity-0 hover:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-xs font-semibold">
        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        <span>Chat with Arman</span>
      </div>

      {/* Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/45 transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white text-emerald-500" />
      </a>
    </div>
  );
}
