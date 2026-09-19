import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronRight, MapPin, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import { ASSETS } from '../data/assets';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToWig: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToWig }) => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] lg:min-h-[92vh] flex items-center py-16 sm:py-24 lg:py-28">
      
      {/* 1. DESKTOP BACKGROUND: "Landing page.jpg" - Prominently visible with airy, delicate scrim */}
      <div className="hidden sm:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.landingPage}
          alt="MelloM Lashes & Beauty Luxury Background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center scale-100 transition-transform duration-1000 ease-out brightness-100 contrast-[1.02]"
        />
        {/* Delicate, airy gradient allowing user's artwork to be vividly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfbf7]/75 via-[#fdfbf7]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] via-transparent to-transparent opacity-80" />
      </div>

      {/* 2. MOBILE BACKGROUND: "lanidng page mobile.jpg" - Prominently visible for mobile screens */}
      <div className="block sm:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.landingPageMobile}
          alt="MelloM Lashes & Beauty Mobile Background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-top brightness-100 contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/30 to-transparent" />
      </div>

      {/* Ambient soft warm accents */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-[600px] rounded-full bg-amber-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-rose-200/20 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Hero Card Container with Frosted Glass & Luxury Spacing */}
        <div className="max-w-2xl lg:max-w-3xl rounded-3xl border border-white/80 bg-white/80 sm:bg-white/75 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-amber-950/10 backdrop-blur-md">
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.14]"
          >
            Can’t wait to glam you up for{' '}
            <span className="text-gold-gradient italic">your big day.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-stone-700 leading-relaxed font-normal"
          >
            Premium <strong className="text-amber-800 font-semibold">Makeup Artistry</strong>, bespoke{' '}
            <strong className="text-amber-800 font-semibold">Lash Enhancements</strong>, and weekly{' '}
            <strong className="text-amber-800 font-semibold">Wig Care, Treatment & Installation</strong>. 
            Studio visits in town or private house calls brought straight to your doorstep.
          </motion.p>

          {/* Key feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2 rounded-xl border border-amber-200/90 bg-white/90 px-3.5 py-2 text-stone-800 shadow-xs">
              <MapPin className="h-4 w-4 text-amber-600 shrink-0" />
              <span>House calls permitted (Town & Locations)</span>
            </div>
            
            <div className="flex items-center gap-2 rounded-xl border border-amber-200/90 bg-white/90 px-3.5 py-2 text-stone-800 shadow-xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Weekly Wig Wash, Treat & Melt</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-amber-200/90 bg-white/90 px-3.5 py-2 text-stone-800 shadow-xs">
              <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0" />
              <span>Waterproof Long-wear Bridal Beats</span>
            </div>
          </motion.div>

          {/* CTA action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-amber-600/25 hover:brightness-105 active:scale-98 transition-all group"
            >
              <Calendar className="h-4 w-4 text-white" />
              <span>Book Your Glam Slot</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onScrollToWig}
              className="flex items-center justify-center gap-2 rounded-xl border border-amber-300 bg-white px-5 py-3.5 text-sm font-semibold text-stone-800 hover:border-amber-400 hover:text-amber-800 hover:bg-amber-50 transition-all shadow-xs"
            >
              <span>Wig Drop-off Schedule</span>
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=Hi%20Mamello!%20I%20saw%20your%20website%20and%20I%20want%20to%20book%20a%20glam%20session.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-600 px-4 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-emerald-700 transition-all sm:hidden"
            >
              <MessageCircle className="h-4 w-4 text-white" />
              <span>WhatsApp Directly</span>
            </a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center gap-6 sm:gap-10 border-t border-stone-200/80 pt-8 text-stone-600"
          >
            <div>
              <div className="font-serif-luxury text-2xl font-bold text-stone-900">100%</div>
              <div className="text-xs text-stone-500 mt-0.5">Bridal Satisfaction</div>
            </div>
            <div className="h-8 w-px bg-stone-200" />
            <div>
              <div className="font-serif-luxury text-2xl font-bold text-stone-900">500+</div>
              <div className="text-xs text-stone-500 mt-0.5">Clients Glams & Installs</div>
            </div>
            <div className="h-8 w-px bg-stone-200" />
            <div>
              <div className="font-serif-luxury text-2xl font-bold text-stone-900">Town/Loc</div>
              <div className="text-xs text-stone-500 mt-0.5">House Calls Allowed</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
