import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/servicesData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-stone-950 border-t border-stone-800 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <Sparkles className="h-3 w-3 text-amber-400" />
            <span>Verified Client Love</span>
          </div>

          <h2 className="mt-3 font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-100">
            Voices of Radiance
          </h2>

          <p className="mt-2 text-sm text-stone-400">
            Read what our gorgeous brides, event clients, and weekly wig care regulars say about their MelloM experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative rounded-2xl border border-stone-800 bg-stone-900/60 p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-amber-500/40"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-stone-400 font-medium">{t.date}</span>
              </div>

              <blockquote className="text-stone-300 text-sm sm:text-base leading-relaxed italic">
                "{t.comment}"
              </blockquote>

              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <div className="font-serif-luxury text-lg font-bold text-stone-100">
                    {t.clientName}
                  </div>
                  <div className="text-xs text-amber-400 font-medium">
                    {t.occasion} • {t.serviceType}
                  </div>
                </div>

                <Quote className="h-8 w-8 text-stone-800 shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
