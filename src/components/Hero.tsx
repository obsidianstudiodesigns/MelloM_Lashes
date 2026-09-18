import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, MessageCircle, MapPin, CheckCircle2, ChevronRight, ShieldCheck, Heart } from 'lucide-react';
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
    // Moderate tilt angles for subtle elegance
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
    <section className="relative overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-20">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-amber-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-80 w-80 rounded-full bg-rose-900/15 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left / Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>Mamello Molise • Luxury Artistry & Salon Services</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 leading-[1.15]"
            >
              Can’t wait to glam you up for{' '}
              <span className="text-gold-gradient italic">your big day.</span>
            </motion.h1>

            {/* Sub-headline from user details */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl"
            >
              Premium <strong className="text-stone-100 font-semibold">Makeup Artistry</strong>, bespoke{' '}
              <strong className="text-stone-100 font-semibold">Lash Enhancements</strong>, and weekly{' '}
              <strong className="text-stone-100 font-semibold">Wig Care, Treatment & Installation</strong>. 
              Studio visits in town or private house calls brought straight to your doorstep.
            </motion.p>

            {/* Key feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2 rounded-lg border border-stone-800 bg-stone-900/60 px-3 py-1.5 text-stone-300">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                <span>House calls permitted (Town & Locations)</span>
              </div>
              
              <div className="flex items-center gap-2 rounded-lg border border-stone-800 bg-stone-900/60 px-3 py-1.5 text-stone-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Weekly Wig Wash & Melt Service</span>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-stone-800 bg-stone-900/60 px-3 py-1.5 text-stone-300">
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
                className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 px-6 py-3.5 text-sm font-bold text-stone-950 shadow-xl shadow-amber-500/20 hover:brightness-105 active:scale-98 transition-all group"
              >
                <Calendar className="h-4 w-4 text-stone-950" />
                <span>Calculate Price & Book Slot</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onScrollToWig}
                className="flex items-center justify-center gap-2 rounded-xl border border-stone-700 bg-stone-900/80 px-5 py-3.5 text-sm font-semibold text-stone-200 hover:border-amber-500/40 hover:bg-stone-800 transition-all"
              >
                <span>Wig Drop-off Schedule</span>
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=Hi%20Mamello!%20I%20saw%20your%20website%20and%20I%20want%20to%20book%20a%20glam%20session.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/30 px-4 py-3.5 text-sm font-semibold text-emerald-300 hover:bg-emerald-900/40 transition-all sm:hidden"
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

          {/* Right / Visual Column (5 cols on lg) */}
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
                className="transform-style-3d relative rounded-2xl border border-amber-500/30 bg-stone-900/90 p-2 shadow-2xl shadow-black/80 backdrop-blur-xl"
              >
                {/* Main Visual Image (Wide 16:9 on desktop) */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                  <img
                    src={ASSETS.heroDesktop}
                    alt="MelloM Lashes & Makeup Artistry Showcase"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />

                  {/* Gradient Overlay for luxury feel */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                  {/* Floating 3D Badge on image */}
                  <div className="absolute top-3 right-3 rounded-full bg-stone-950/80 border border-amber-500/40 px-3 py-1 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                    <Heart className="h-3.5 w-3.5 text-rose-400 fill-rose-400" />
                    <span className="text-[11px] font-bold text-amber-200">Big Day Specialist</span>
                  </div>

                  {/* Bottom Image Caption Card */}
                  <div className="absolute bottom-3 inset-x-3 rounded-xl border border-stone-800 bg-stone-950/85 p-3.5 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                          Mamello Molise
                        </div>
                        <div className="font-serif-luxury text-lg font-bold text-stone-100">
                          Signature Editorial Glam
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block rounded-md bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-300">
                          Available
                        </span>
                        <div className="text-[11px] text-stone-400 mt-0.5">Town & Location</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating 3D Accent Badge bottom left */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-5 -left-5 rounded-xl border border-amber-500/30 bg-stone-950/95 p-3 shadow-xl backdrop-blur-xl flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 text-stone-950 font-bold">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-100">Wig Drop-off Open</div>
                    <div className="text-[11px] text-amber-300">Wash • Treat • Melt Install</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile Landing Page View (Phones < sm) */}
            {/* The user explicitly requested: "Use the attached lading page and landing page mobile as the landing page please use mobile image so it fits perfectly on mobile phones." */}
            <div className="block sm:hidden w-full relative">
              <div className="relative rounded-2xl border border-amber-500/30 bg-stone-900/90 overflow-hidden shadow-2xl">
                <div className="relative aspect-[9/16] w-full max-h-[520px]">
                  <img
                    src={ASSETS.heroMobile}
                    alt="MelloM Lashes & Beauty Mobile Showcase"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top"
                  />

                  {/* Gradient Overlay for high readability on phones */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                  {/* Mobile badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-stone-950/80 border border-amber-500/40 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md">
                      MelloM Beauty
                    </span>
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md">
                      Bookings Open
                    </span>
                  </div>

                  {/* Mobile Bottom overlay card */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-stone-800 bg-stone-950/90 p-4 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                      Big Day & Event Artistry
                    </p>
                    <h2 className="font-serif-luxury text-xl font-bold text-stone-100 mt-1">
                      Flawless Glam & Wig Installations
                    </h2>
                    <p className="text-xs text-stone-300 mt-1">
                      House calls permitted with distance fee. Studio visits available.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={onOpenBooking}
                        className="flex-1 rounded-lg bg-amber-500 py-2.5 text-xs font-bold text-stone-950 text-center"
                      >
                        Book Appointment
                      </button>
                      <a
                        href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-emerald-500/40 bg-emerald-950/50 px-3 py-2.5 text-xs font-semibold text-emerald-300 flex items-center justify-center"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
