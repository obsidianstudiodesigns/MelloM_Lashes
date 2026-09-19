import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, MessageCircle, Heart } from 'lucide-react';
import { ServiceCategory, ServiceItem } from '../types';
import { SERVICES, BUSINESS_INFO } from '../data/servicesData';

interface ServiceMenuProps {
  selectedServiceIds?: string[];
  onToggleService?: (service: ServiceItem) => void;
  onGoToBooking?: () => void;
}

export const ServiceMenu: React.FC<ServiceMenuProps> = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Offerings' },
    { id: 'bridal', label: 'Bridal & Big Day' },
    { id: 'makeup', label: 'Makeup Artistry' },
    { id: 'lashes', label: 'Lash Extensions' },
    { id: 'wigs', label: 'Wig Care & Installs' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const createWhatsAppLink = (service: ServiceItem) => {
    const text = `Hi Mamello! I would like to book your "${service.name}" service. Could you please share your available dates and times?`;
    return `https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#fdfbf7] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Curated Beauty & Hair Experiences
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Every session is performed with professional hygiene, skin-loving luxury products, and bespoke artistry. 
            Tap any offering to book directly with Mamello on WhatsApp.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                    : 'border border-amber-200/80 bg-white/90 text-stone-700 hover:border-amber-300 hover:text-stone-900 shadow-2xs'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid with Photorealistic Images */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/90 bg-white/95 hover:border-amber-300 hover:shadow-xl shadow-xs transition-all duration-300"
              >
                {/* Card Content Top */}
                <div>
                  {/* Photorealistic Image for each offering */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-stone-100">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-stone-100 flex items-center justify-center text-stone-400">
                        <Sparkles className="h-8 w-8" />
                      </div>
                    )}
                    
                    {/* Gradient vignette for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/10 to-transparent" />

                    {/* Top badges over image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1">
                        {service.popular && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-2.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                            <Heart className="h-3 w-3 fill-white" />
                            <span>Most Requested</span>
                          </span>
                        )}
                        {service.requiresWigDropoff && (
                          <span className="inline-flex rounded-full bg-rose-600 px-2.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                            Wig Drop-off
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="p-5">
                    <h3 className="font-serif-luxury text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {service.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* What's included checklist */}
                    <div className="mt-4 border-t border-stone-200 pt-3.5">
                      <div className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold mb-2">
                        Treatment Details:
                      </div>
                      <ul className="space-y-1.5 text-xs text-stone-700">
                        {service.included.slice(0, 4).map((inc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Booking Button ONLY */}
                <div className="p-5 pt-0">
                  <a
                    href={createWhatsAppLink(service)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 py-3 text-xs font-bold text-white shadow-md shadow-emerald-600/20 active:scale-98 transition-all"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
