import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, Shield } from 'lucide-react';
import { FAQ_ITEMS } from '../data/servicesData';

export const FAQPolicy: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#fcfaf7] border-t border-amber-200/60 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Frequently Asked Questions & Policies
          </h2>

          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
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
                className="rounded-2xl border border-amber-200/70 bg-white overflow-hidden transition-colors shadow-2xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-stone-900 hover:text-amber-800 transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-amber-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-amber-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Studio Hygiene Guarantee */}
        <div className="mt-10 rounded-2xl border border-amber-300/80 bg-amber-50/70 p-5 flex items-start gap-3 shadow-xs">
          <Shield className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-stone-700 leading-relaxed">
            <strong className="text-amber-900 font-semibold">Strict Sanitation & Quality Promise:</strong> All disposable mascara wands, lip applicators, and sponge blenders are used single-use. Premium sterilizers are utilized on all brushes and tweezers between every single client.
          </div>
        </div>

      </div>
    </section>
  );
};
