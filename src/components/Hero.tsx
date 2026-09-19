import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ASSETS } from '../data/assets';

interface HeroProps {
  onScrollDown?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  const handleScrollClick = () => {
    if (onScrollDown) {
      onScrollDown();
    } else {
      const el = document.getElementById('invitation') || document.getElementById('wig-dropoff') || document.getElementById('services');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] lg:h-[95vh] overflow-hidden flex flex-col items-center justify-between py-8 sm:py-12">
      
      {/* 1. DESKTOP WALLPAPER: "Landing page.jpg" - Full, unobstructed visibility */}
      <div className="hidden sm:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.landingPage}
          alt="MelloM Lashes & Beauty Wallpaper"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Soft bottom transition to blend gracefully into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#fdfbf7] to-transparent opacity-90" />
      </div>

      {/* 2. MOBILE WALLPAPER: "lanidng page mobile.jpg" - Full, unobstructed visibility */}
      <div className="block sm:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.landingPageMobile}
          alt="MelloM Lashes & Beauty Mobile Wallpaper"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-top"
        />
        {/* Soft bottom transition for mobile */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fdfbf7] to-transparent opacity-90" />
      </div>

      {/* Spacer for top balance */}
      <div className="h-6 sm:h-10 relative z-10" />

      {/* Centered Brand Logo Appearing Slowly in the Middle */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
          className="relative group"
        >
          {/* Ambient golden halo glow behind the logo */}
          <div className="absolute -inset-4 rounded-full bg-amber-400/30 blur-2xl transition-all duration-1000 group-hover:bg-amber-400/40" />

          {/* Majestic Circular Logo Container */}
          <div className="relative h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 overflow-hidden rounded-full border-4 border-amber-400/80 bg-white/95 p-1.5 shadow-2xl shadow-amber-950/30 backdrop-blur-md transition-transform duration-700 hover:scale-105">
            <img
              src={ASSETS.logo}
              alt="MelloM Lashes & Beauty Luxury Emblem"
              referrerPolicy="no-referrer"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Subtle floating down indicator to invite scrolling into the studio content */}
      <div className="relative z-10 pt-4">
        <motion.button
          onClick={handleScrollClick}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="group flex flex-col items-center gap-2 rounded-full border border-amber-300/80 bg-white/90 px-5 py-2.5 text-xs font-semibold text-stone-800 backdrop-blur-md shadow-lg shadow-amber-950/10 hover:bg-white hover:border-amber-400 hover:text-amber-800 transition-all cursor-pointer"
          aria-label="Scroll to explore studio experiences"
        >
          <span className="tracking-wider uppercase text-[11px] font-bold text-amber-800">Explore Studio</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-4 w-4 text-amber-600 group-hover:text-amber-800" />
          </motion.div>
        </motion.button>
      </div>

    </section>
  );
};
