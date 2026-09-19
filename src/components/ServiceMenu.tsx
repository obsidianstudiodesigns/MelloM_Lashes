import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Clock, Check, MessageCircle, Heart, ArrowRight } from 'lucide-react';
import { ServiceCategory, ServiceItem } from '../types';
import { SERVICES, BUSINESS_INFO } from '../data/servicesData';

interface ServiceMenuProps {
  selectedServiceIds?: string[];
  onToggleService?: (service: ServiceItem) => void;
  onGoToBooking?: () => void;
}

export const ServiceMenu: React.FC<ServiceMenuProps> = ({
  selectedServiceIds = [],
  onToggleService,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [localSelected, setLocalSelected] = useState<string[]>(selectedServiceIds);

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

  const toggleSelect = (service: ServiceItem) => {
    if (onToggleService) {
      onToggleService(service);
    }
    setLocalSelected((prev) =>
      prev.includes(service.id) ? prev.filter((id) => id !== service.id) : [...prev, service.id]
    );
  };

  const selectedServicesList = SERVICES.filter((s) => localSelected.includes(s.id));
  const selectedTotal = selectedServicesList.reduce((acc, curr) => acc + curr.price, 0);

  const createWhatsAppLink = (service: ServiceItem) => {
    const text = `Hi Mamello! I would like to book your "${service.name}" service (R${service.price}). Could you please share your available dates and times?`;
    return `https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=${encodeURIComponent(text)}`;
  };

  const createMultiServiceWhatsAppLink = () => {
    const serviceNames = selectedServicesList.map((s) => `• ${s.name} (R${s.price})`).join('\n');
    const text = `Hi Mamello! I would like to book the following beauty services on your website:\n\n${serviceNames}\n\nTotal Estimated: R${selectedTotal}\n\nPlease let me know your available slots!`;
    return `https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#0c0a09] relative">
      {/* Subtle section background accents */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Service Catalog & Transparent Rates</span>
          </div>
          
          <h2 className="mt-3 font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-100">
            Curated Beauty & Hair Experiences
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
            Every session is performed with professional hygiene, skin-loving luxury products, and bespoke artistry. 
            Tap any offering to book directly on WhatsApp or select multiple services.
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
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                    : 'border border-stone-800 bg-stone-900/60 text-stone-300 hover:border-stone-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Multi-service floating booking summary */}
        {localSelected.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 mx-auto max-w-2xl rounded-2xl border-2 border-amber-500/40 bg-stone-950/95 p-4 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            <div>
              <div className="flex items-center gap-2 text-sm text-stone-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-stone-950 font-bold text-xs">
                  {localSelected.length}
                </span>
                <span className="font-semibold text-amber-200">
                  Services Selected: Total R{selectedTotal}
                </span>
              </div>
              <p className="text-xs text-stone-400 mt-0.5">
                {selectedServicesList.map((s) => s.name).join(', ')}
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setLocalSelected([])}
                className="text-xs text-stone-400 hover:text-stone-200 px-2 py-1"
              >
                Clear
              </button>
              <a
                href={createMultiServiceWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-lg hover:bg-emerald-500 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Book All {localSelected.length} on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}

        {/* Services Cards Grid with Photorealistic Images */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const isSelected = localSelected.includes(service.id);

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isSelected
                      ? 'border-amber-400 bg-stone-900/95 shadow-2xl shadow-amber-500/15'
                      : 'border-stone-800/90 bg-stone-900/60 hover:border-amber-500/50 hover:bg-stone-900/85 hover:shadow-xl'
                  }`}
                >
                  {/* Card Content Top */}
                  <div>
                    {/* Photorealistic Image for each offering */}
                    <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-stone-950">
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.name}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-stone-900 flex items-center justify-center text-stone-600">
                          <Sparkles className="h-8 w-8" />
                        </div>
                      )}
                      
                      {/* Gradient vignette for legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

                      {/* Top badges over image */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <div>
                          {service.popular && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/90 px-2.5 py-0.5 text-[11px] font-bold text-stone-950 shadow-md">
                              <Heart className="h-3 w-3 fill-stone-950" />
                              <span>Most Requested</span>
                            </span>
                          )}
                          {service.requiresWigDropoff && (
                            <span className="inline-flex rounded-full bg-rose-950/90 border border-rose-500/50 px-2.5 py-0.5 text-[11px] font-bold text-rose-200 shadow-md ml-1">
                              Wig Drop-off
                            </span>
                          )}
                        </div>

                        <div className="rounded-full bg-stone-950/85 border border-stone-700/60 px-2.5 py-0.5 text-[11px] font-semibold text-stone-300 backdrop-blur-md flex items-center gap-1">
                          <Clock className="h-3 w-3 text-amber-400" />
                          <span>{service.duration}</span>
                        </div>
                      </div>

                      {/* Price badge anchored in image bottom */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                        <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-300 drop-shadow-md">
                          R{service.price}
                        </div>

                        <button
                          onClick={() => toggleSelect(service)}
                          className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-colors ${
                            isSelected
                              ? 'bg-amber-400 text-stone-950'
                              : 'bg-stone-950/80 border border-stone-700 text-stone-300 hover:text-white'
                          }`}
                        >
                          {isSelected ? '✓ Selected' : '+ Select'}
                        </button>
                      </div>
                    </div>

                    {/* Service Info */}
                    <div className="p-5">
                      <h3 className="font-serif-luxury text-xl font-bold text-stone-100 group-hover:text-amber-200 transition-colors">
                        {service.name}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed line-clamp-3">
                        {service.shortDesc}
                      </p>

                      {/* What's included checklist */}
                      <div className="mt-4 border-t border-stone-800/80 pt-3.5">
                        <div className="text-[11px] uppercase tracking-wider text-amber-400/90 font-semibold mb-2">
                          Treatment Details:
                        </div>
                        <ul className="space-y-1.5 text-xs text-stone-300">
                          {service.included.slice(0, 4).map((inc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Direct WhatsApp Booking Button */}
                  <div className="p-5 pt-0">
                    <a
                      href={createWhatsAppLink(service)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-3 text-xs font-bold text-white shadow-lg hover:brightness-110 active:scale-98 transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Book on WhatsApp (R{service.price})</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

