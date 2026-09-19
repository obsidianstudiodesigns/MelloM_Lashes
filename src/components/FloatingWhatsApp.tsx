import React, { useState } from 'react';
import { MessageCircle, Phone, Calendar, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Expanded quick menu */}
      {expanded && (
        <div className="rounded-2xl border border-amber-200/80 bg-white/95 p-3.5 shadow-2xl backdrop-blur-xl flex flex-col gap-2 min-w-[220px] animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200 text-xs font-bold text-stone-900">
            <span>Fast Glam Connect</span>
            <button
              onClick={() => setExpanded(false)}
              className="text-stone-400 hover:text-stone-700 p-1"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=Hi%20Mamello!%20I%20would%20like%20to%20inquire%20about%20booking%20or%20wig%20drop-off.`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 rounded-xl bg-emerald-50 border border-emerald-200 p-2 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors"
          >
            <MessageCircle className="h-4 w-4 shrink-0 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-2.5 rounded-xl bg-stone-50 border border-stone-200 p-2 text-xs font-semibold text-stone-800 hover:bg-stone-100 transition-colors"
          >
            <Phone className="h-4 w-4 shrink-0 text-amber-600" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>

          <button
            onClick={() => {
              setExpanded(false);
              onOpenBooking();
            }}
            className="flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 p-2 text-xs font-bold text-white shadow-xs hover:brightness-105 transition-all"
          >
            <Calendar className="h-4 w-4 shrink-0" />
            <span>View Services & Book</span>
          </button>
        </div>
      )}

      {/* Main floating trigger pill / circle */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 hover:bg-emerald-500 active:scale-95 transition-all"
          aria-label="Contact via WhatsApp or Phone"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 -z-10 rounded-full bg-emerald-500/30 animate-ping opacity-75" />
          
          <MessageCircle className="h-7 w-7 text-white" />
        </button>
      </div>
    </div>
  );
};
