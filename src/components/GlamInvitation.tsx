import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronRight, MapPin, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface GlamInvitationProps {
  onOpenBooking: () => void;
  onScrollToWig: () => void;
}

export const GlamInvitation: React.FC<GlamInvitationProps> = ({
  onOpenBooking,
  onScrollToWig,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#fdfbf7] border-b border-amber-200/60 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-200/80 bg-white p-6 sm:p-12 lg:p-14 shadow-xl shadow-amber-950/5 text-center">
          
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15]"
          >
            Can’t wait to glam you up for{' '}
            <span className="text-gold-gradient italic">your big day.</span>
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto font-normal"
          >
            Premium <strong className="text-amber-800 font-semibold">Makeup Artistry</strong>, bespoke{' '}
            <strong className="text-amber-800 font-semibold">Lash Enhancements</strong>, and weekly{' '}
            <strong className="text-amber-800 font-semibold">Wig Care, Treatment & Installation</strong>. 
            Studio visits in town or private house calls brought straight to your doorstep.
          </motion.p>

          {/* Key feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2 rounded-xl border border-amber-200/90 bg-amber-50/50 px-3.5 py-2 text-stone-800 shadow-2xs">
              <MapPin className="h-4 w-4 text-amber-600 shrink-0" />
              <span>House calls permitted (Town & Locations)</span>
            </div>
            
            <div className="flex items-center gap-2 rounded-xl border border-amber-200/90 bg-amber-50/50 px-3.5 py-2 text-stone-800 shadow-2xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Weekly Wig Wash, Treat & Melt</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-amber-200/90 bg-amber-50/50 px-3.5 py-2 text-stone-800 shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0" />
              <span>Waterproof Long-wear Bridal Beats</span>
            </div>
          </motion.div>

          {/* CTA action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-amber-600/25 hover:brightness-105 active:scale-98 transition-all group"
            >
              <Calendar className="h-4 w-4 text-white" />
              <span>Book Your Glam Slot</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onScrollToWig}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-amber-300 bg-white px-5 py-3.5 text-sm font-semibold text-stone-800 hover:border-amber-400 hover:text-amber-800 hover:bg-amber-50 transition-all shadow-xs"
            >
              <span>Wig Drop-off Schedule</span>
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=Hi%20Mamello!%20I%20saw%20your%20website%20and%20I%20want%20to%20book%20a%20glam%20session.`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-emerald-700 transition-all sm:hidden"
            >
              <MessageCircle className="h-4 w-4 text-white" />
              <span>WhatsApp Directly</span>
            </a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 border-t border-stone-200/80 pt-8 text-stone-600"
          >
            <div>
              <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900">100%</div>
              <div className="text-xs text-stone-500 mt-0.5">Bridal Satisfaction</div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-stone-200" />
            <div>
              <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900">500+</div>
              <div className="text-xs text-stone-500 mt-0.5">Clients Glams & Installs</div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-stone-200" />
            <div>
              <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900">Town/Loc</div>
              <div className="text-xs text-stone-500 mt-0.5">House Calls Allowed</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
