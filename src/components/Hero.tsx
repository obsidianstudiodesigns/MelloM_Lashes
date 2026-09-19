import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, MessageCircle, MapPin, CheckCircle2, ChevronRight, ShieldCheck, Heart, Clock, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import { ASSETS } from '../data/assets';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToWig: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToWig }) => {
  // 3D card tilt state for senior dev feel
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
    <section className="relative overflow-hidden min-h-[90vh] lg:min-h-[94vh] flex items-center pt-8 pb-16 sm:py-20">
      
      {/* 1. DESKTOP BACKGROUND: "Landing page.jpg" (User uploaded background for first page) */}
      <div className="hidden sm:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.landingPage}
          alt="MelloM Lashes & Beauty Luxury Background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Luxury gradient overlays for senior developer readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09] via-[#0c0a09]/90 to-[#0c0a09]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-[#0c0a09]/80" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </div>

      {/* 2. MOBILE BACKGROUND: "lanidng page mobile.jpg" (User uploaded background for mobile phones) */}
      <div className="block sm:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.landingPageMobile}
          alt="MelloM Lashes & Beauty Mobile Background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-top"
        />
        {/* Seamless mobile dark vignette ensuring ultra-crisp contrast for mobile users */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/85 via-[#0c0a09]/65 to-[#0c0a09]" />
        <div className="absolute inset-0 bg-[#0c0a09]/40 backdrop-blur-[1px]" />
      </div>

      {/* Ambient warm champagne glow */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-[600px] rounded-full bg-amber-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-rose-950/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left / Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-2 font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 leading-[1.12]"
            >
              Can’t wait to glam you up for{' '}
              <span className="text-gold-gradient italic">your big day.</span>
            </motion.h1>

            {/* Sub-headline from user details */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl drop-shadow-sm"
            >
              Premium <strong className="text-amber-200 font-semibold">Makeup Artistry</strong>, bespoke{' '}
              <strong className="text-amber-200 font-semibold">Lash Enhancements</strong>, and weekly{' '}
              <strong className="text-amber-200 font-semibold">Wig Care, Treatment & Installation</strong>. 
              Studio visits in town or private house calls brought straight to your doorstep.
            </motion.p>

            {/* Key feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2 rounded-xl border border-stone-800/90 bg-stone-950/80 px-3 py-1.5 text-stone-200 backdrop-blur-md shadow-md">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                <span>House calls permitted (Town & Locations)</span>
              </div>
              
              <div className="flex items-center gap-2 rounded-xl border border-stone-800/90 bg-stone-950/80 px-3 py-1.5 text-stone-200 backdrop-blur-md shadow-md">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Weekly Wig Wash, Treat & Melt</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-stone-800/90 bg-stone-950/80 px-3 py-1.5 text-stone-200 backdrop-blur-md shadow-md">
                <ShieldCheck className="h-4 w-4 text-amber-400 shrink-0" />
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
                className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 px-6 py-3.5 text-sm font-bold text-stone-950 shadow-xl shadow-amber-500/25 hover:brightness-105 active:scale-98 transition-all group"
              >
                <Calendar className="h-4 w-4 text-stone-950" />
                <span>Book Your Glam Slot</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onScrollToWig}
                className="flex items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-stone-950/85 px-5 py-3.5 text-sm font-semibold text-stone-200 hover:border-amber-500/60 hover:text-amber-200 hover:bg-stone-900 transition-all backdrop-blur-md"
              >
                <span>Wig Drop-off Schedule</span>
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=Hi%20Mamello!%20I%20saw%20your%20website%20and%20I%20want%20to%20book%20a%20glam%20session.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/70 px-4 py-3.5 text-sm font-semibold text-emerald-300 hover:bg-emerald-900/60 transition-all backdrop-blur-md sm:hidden"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp Directly</span>
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-6 border-t border-stone-800/80 pt-6 text-stone-400"
            >
              <div>
                <div className="font-serif-luxury text-2xl font-bold text-stone-100">100%</div>
                <div className="text-xs text-stone-400">Bridal Satisfaction</div>
              </div>
              <div className="h-8 w-px bg-stone-800" />
              <div>
                <div className="font-serif-luxury text-2xl font-bold text-stone-100">500+</div>
                <div className="text-xs text-stone-400">Clients Glams & Installs</div>
              </div>
              <div className="h-8 w-px bg-stone-800" />
              <div>
                <div className="font-serif-luxury text-2xl font-bold text-stone-100">Town/Loc</div>
                <div className="text-xs text-stone-400">House Calls Allowed</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Big Day Specialist Spotlight Tile */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            
            {/* Desktop 3D Tilt Card (Visible on md and up) */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="hidden sm:block relative w-full max-w-md perspective-1000"
            >
              <motion.div
                animate={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                className="transform-style-3d relative rounded-3xl border-2 border-amber-500/40 bg-stone-950/95 p-5 shadow-2xl shadow-black/90 backdrop-blur-xl group"
              >
                {/* Header inside the Card */}
                <div className="flex items-center justify-between pb-3.5 border-b border-stone-800/80">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-amber-500/50 bg-stone-900 p-0.5 shadow-lg shadow-amber-500/15 shrink-0">
                      <img
                        src={ASSETS.logo}
                        alt="MelloM Lashes Logo"
                        referrerPolicy="no-referrer"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-serif-luxury text-lg font-bold text-stone-100 tracking-wide">
                        MelloM Lashes
                      </div>
                      <div className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold">
                        Beauty & Cosmetic Care
                      </div>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-[11px] font-bold text-emerald-300">
                    Bookings Open
                  </span>
                </div>

                {/* 3D Photorealistic Image Showcase of African Woman with Makeup & Lashes */}
                <div className="relative mt-4 overflow-hidden rounded-2xl border border-amber-500/30 bg-stone-900 shadow-inner">
                  <img
                    src={ASSETS.africanBrideGlam}
                    alt="African woman with luxury bridal makeup and lash extensions"
                    referrerPolicy="no-referrer"
                    className="h-72 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Luxury soft gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                  {/* The "Big Day Specialist" Badge directly attached to the tile */}
                  <div className="absolute top-3 left-3 rounded-full border border-amber-500/50 bg-stone-950/90 px-3.5 py-1.5 text-xs font-bold text-amber-200 shadow-xl backdrop-blur-md flex items-center gap-2">
                    <Heart className="h-4 w-4 text-rose-400 fill-rose-400" />
                    <span>Big Day Specialist</span>
                  </div>

                  {/* Lash & Makeup highlights badge */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-stone-700/60 bg-stone-950/85 p-2.5 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                        <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                        HD Makeup & Volume Mink Lashes
                      </span>
                      <span className="text-xs font-bold text-stone-200">From R500</span>
                    </div>
                    <p className="text-[11px] text-stone-300 mt-1 leading-snug">
                      Waterproof camera-ready bridal beat, sculpted brows & fluffy custom lash fans.
                    </p>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-4 flex items-center gap-2.5">
                  <button
                    onClick={onOpenBooking}
                    className="flex-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-xs font-bold text-stone-950 shadow-md hover:brightness-110 transition-all text-center"
                  >
                    View Services & Book
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=Hi%20Mamello!%20I%20love%20the%20Big%20Day%20glam%20look%20on%20your%20website%20and%20want%20to%20book%20my%20session.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-xl border border-emerald-500/40 bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900/60 transition-colors shrink-0"
                    aria-label="WhatsApp Mamello Molise"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Mobile Hero Card overlay (Phones < sm) */}
            <div className="block sm:hidden w-full relative">
              <div className="relative rounded-2xl border-2 border-amber-500/40 bg-stone-950/95 p-4 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <div className="flex items-center gap-2.5">
                    <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-amber-500/50 p-0.5 shrink-0">
                      <img
                        src={ASSETS.logo}
                        alt="MelloM Logo"
                        referrerPolicy="no-referrer"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-serif-luxury text-base font-bold text-stone-100">
                        MelloM Lashes & Beauty
                      </h2>
                      <p className="text-[11px] text-amber-400 font-medium">
                        Big Day Specialist
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                    Open
                  </span>
                </div>

                {/* Mobile image preview */}
                <div className="relative mt-3 overflow-hidden rounded-xl border border-amber-500/30">
                  <img
                    src={ASSETS.africanBrideGlam}
                    alt="African woman with bridal makeup and lashes"
                    referrerPolicy="no-referrer"
                    className="h-52 w-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 rounded-full border border-amber-500/50 bg-stone-950/90 px-3 py-1 text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                    <Heart className="h-3 w-3 text-rose-400 fill-rose-400" />
                    <span>Big Day Specialist</span>
                  </div>
                </div>

                <div className="mt-3 flex gap-2">
                  <button
                    onClick={onOpenBooking}
                    className="flex-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-2.5 text-xs font-bold text-stone-950 text-center"
                  >
                    View Offerings & Book
                  </button>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=Hi%20Mamello!%20I%20want%20to%20book%20a%20glam%20session.`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-emerald-500/40 bg-emerald-950/70 px-3.5 py-2.5 text-xs font-semibold text-emerald-300 flex items-center justify-center"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

