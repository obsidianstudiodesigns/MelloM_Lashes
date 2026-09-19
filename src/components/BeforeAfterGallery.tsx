import React, { useState, useRef, useEffect } from 'react';
import { Sliders } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const BeforeAfterGallery: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

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
    <section className="py-16 sm:py-24 bg-[#fcfaf7] relative overflow-hidden border-y border-amber-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            The Transformative Glam Experience
          </h2>

          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Slide horizontally to reveal the precision blending, luminous skin match, and signature fluttery lash density.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="mx-auto max-w-3xl">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none overflow-hidden rounded-3xl border border-amber-200/80 shadow-xl shadow-amber-950/5 cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
          >
            {/* After Image (Full background: African woman with makeup & lashes) */}
            <img
              src={ASSETS.africanGlamFace}
              alt="African woman with makeup and signature lashes - After"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Before Image (Clipped overlay: African woman without makeup) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={ASSETS.africanBareFace}
                alt="African woman natural bare face - Before"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full object-cover object-center max-w-none"
                style={{ width: containerWidth > 0 ? `${containerWidth}px` : '100%' }}
              />
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute inset-y-0 w-0.5 bg-amber-500 shadow-lg pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-500 bg-white text-amber-700 shadow-lg">
                <Sliders className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-stone-500 px-2 font-medium">
            <span>◄ Drag Left for Glam Face</span>
            <span className="text-amber-800 font-semibold">Interactive Glam Reveal</span>
            <span>Drag Right for Bare Face ►</span>
          </div>
        </div>

      </div>
    </section>
  );
};
