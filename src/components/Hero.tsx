import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronRight, MapPin, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import { ASSETS } from '../data/assets';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToWig: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToWig }) => {
  // 3D card tilt state
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rY = ((x - centerX) / centerX) * 8;
    const rX = -((y - centerY) / centerY) * 8;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center pt-8 pb-14 sm:py-16">
      
      {/* 1. DESKTOP BACKGROUND: "Landing page.jpg" - High visibility with luminous light dreamy veil */}
      <div className="hidden sm:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.landingPage}
          alt="MelloM Lashes & Beauty Luxury Background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center scale-102 transition-transform duration-1000 ease-out brightness-100 contrast-[1.02]"
        />
        {/* Soft, airy light dreamy gradient veil allowing user's artwork to be prominently visible while keeping text ultra-legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfbf7]/92 via-[#fdfbf7]/70 to-[#fdfbf7]/20 sm:from-[#fdfbf7]/92 sm:via-[#fdfbf7]/60 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] via-transparent to-[#fdfbf7]/40" />
      </div>

      {/* 2. MOBILE BACKGROUND: "lanidng page mobile.jpg" - High visibility for mobile screens */}
      <div className="block sm:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.landingPageMobile}
          alt="MelloM Lashes & Beauty Mobile Background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-top brightness-100 contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7]/90 via-[#fdfbf7]/60 to-[#fdfbf7]" />
      </div>

      {/* Ambient soft warm glow */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-[600px] rounded-full bg-amber-400/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-rose-200/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left / Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-2 font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12]"
            >
              Can’t wait to glam you up for{' '}
              <span className="text-gold-gradient italic">your big day.</span>
            </motion.h1>

            {/* Sub-headline from user details */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-normal"
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
              className="mt-6 flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2 rounded-xl border border-amber-200/90 bg-white/90 px-3.5 py-1.5 text-stone-800 backdrop-blur-md shadow-xs">
                <MapPin className="h-4 w-4 text-amber-600 shrink-0" />
                <span>House calls permitted (Town & Locations)</span>
              </div>
              
              <div className="flex items-center gap-2 rounded-xl border border-amber-200/90 bg-white/90 px-3.5 py-1.5 text-stone-800 backdrop-blur-md shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Weekly Wig Wash, Treat & Melt</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-amber-200/90 bg-white/90 px-3.5 py-1.5 text-stone-800 backdrop-blur-md shadow-xs">
                <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0" />
                <span>Waterproof Long-wear Bridal Beats</span>
              </div>
            </motion.div>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
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
                className="flex items-center justify-center gap-2 rounded-xl border border-amber-300 bg-white/90 px-5 py-3.5 text-sm font-semibold text-stone-800 hover:border-amber-400 hover:text-amber-800 hover:bg-amber-50 transition-all shadow-xs backdrop-blur-md"
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
              className="mt-8 flex items-center gap-6 border-t border-stone-200/90 pt-6 text-stone-600"
            >
              <div>
                <div className="font-serif-luxury text-2xl font-bold text-stone-900">100%</div>
                <div className="text-xs text-stone-500">Bridal Satisfaction</div>
              </div>
              <div className="h-8 w-px bg-stone-200" />
              <div>
                <div className="font-serif-luxury text-2xl font-bold text-stone-900">500+</div>
                <div className="text-xs text-stone-500">Clients Glams & Installs</div>
              </div>
              <div className="h-8 w-px bg-stone-200" />
              <div>
                <div className="font-serif-luxury text-2xl font-bold text-stone-900">Town/Loc</div>
                <div className="text-xs text-stone-500">House Calls Allowed</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Tile block with ONLY logo.jpg (no text as requested) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-sm sm:max-w-md perspective-1000"
            >
              <motion.div
                animate={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                className="transform-style-3d relative rounded-3xl border-2 border-amber-300/80 bg-white/95 p-4 sm:p-6 shadow-2xl shadow-amber-950/10 backdrop-blur-xl group transition-all hover:border-amber-400 hover:shadow-amber-500/20"
              >
                {/* Elegant frame containing ONLY logo.jpg */}
                <div className="relative overflow-hidden rounded-2xl border border-amber-200/80 bg-white aspect-square flex items-center justify-center shadow-inner">
                  <img
                    src={ASSETS.logo}
                    alt="MelloM Lashes & Beauty Logo"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

