import React, { useState } from 'react';
import { Sparkles, Sliders } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const BeforeAfterGallery: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const offsetX = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0c0a09] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <Sparkles className="h-3 w-3 text-amber-400" />
            <span>Interactive Artistry Reveal</span>
          </div>

          <h2 className="mt-3 font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-100">
            The Transformative Glam Experience
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-stone-400">
            Slide horizontally to reveal the precision blending, luminous skin match, and signature fluttery lash density.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="mx-auto max-w-3xl">
          <div
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none overflow-hidden rounded-2xl border border-amber-500/30 shadow-2xl cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
          >
            {/* After Image (Full background) */}
            <img
              src={ASSETS.bridalGlam}
              alt="MelloM Signature Glam Beat & Lashes After"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute top-4 right-4 rounded-full bg-stone-950/80 border border-amber-500/40 px-3 py-1 text-xs font-bold text-amber-300 backdrop-blur-md">
              AFTER: Signature Glam & Lashes
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={ASSETS.heroDesktop}
                alt="Natural Canvas Before"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover max-w-none"
                style={{ width: '100%', minWidth: '100%' }}
              />
              <div className="absolute top-4 left-4 rounded-full bg-stone-950/80 border border-stone-700 px-3 py-1 text-xs font-semibold text-stone-300 backdrop-blur-md">
                BEFORE: Raw Skin Prep
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute inset-y-0 w-0.5 bg-amber-400 shadow-lg pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-amber-400 bg-stone-950 text-amber-300 shadow-xl">
                <Sliders className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-stone-400 px-2">
            <span>◄ Drag Left for After</span>
            <span className="text-amber-400/80 font-medium">Interactive Glam Reveal</span>
            <span>Drag Right for Before ►</span>
          </div>
        </div>

      </div>
    </section>
  );
};
