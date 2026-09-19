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
    <section className="relative w-full h-[85vh] sm:h-[90vh] lg:h-[94vh] overflow-hidden flex items-end justify-center pb-8 sm:pb-12">
      
      {/* 1. DESKTOP WALLPAPER: "Landing page.jpg" - Full, unobstructed visibility */}
      <div className="hidden sm:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.landingPage}
          alt="MelloM Lashes & Beauty Wallpaper"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Very soft bottom transition to blend gracefully into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fdfbf7] to-transparent opacity-90" />
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
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fdfbf7] to-transparent opacity-90" />
      </div>

      {/* Subtle floating down indicator to invite scrolling into the studio content */}
      <div className="relative z-10">
        <motion.button
          onClick={handleScrollClick}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
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
