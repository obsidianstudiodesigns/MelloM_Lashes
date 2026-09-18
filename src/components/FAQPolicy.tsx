import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, Shield } from 'lucide-react';
import { FAQ_ITEMS } from '../data/servicesData';

export const FAQPolicy: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#0c0a09] relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <HelpCircle className="h-3 w-3 text-amber-400" />
            <span>Clear Studio Guidelines</span>
          </div>

          <h2 className="mt-3 font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-100">
            Frequently Asked Questions & Policies
          </h2>

          <p className="mt-2 text-sm text-stone-400">
            Everything you need to know about preparing for your session, wig drop-offs, and house call arrangements.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-800 bg-stone-900/50 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-stone-200 hover:text-amber-200 transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-amber-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/60 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Studio Hygiene Guarantee */}
        <div className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-950/20 p-5 flex items-start gap-3">
          <Shield className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-stone-300 leading-relaxed">
            <strong className="text-amber-200 font-semibold">Strict Sanitation & Quality Promise:</strong> All disposable mascara wands, lip applicators, and sponge blenders are used single-use. Premium sterilizers are utilized on all brushes and tweezers between every single client.
          </div>
        </div>

      </div>
    </section>
  );
};
