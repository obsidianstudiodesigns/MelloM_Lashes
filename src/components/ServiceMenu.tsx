import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Clock, Check, Plus, Minus, Info } from 'lucide-react';
import { ServiceCategory, ServiceItem } from '../types';
import { SERVICES } from '../data/servicesData';

interface ServiceMenuProps {
  selectedServiceIds: string[];
  onToggleService: (service: ServiceItem) => void;
  onGoToBooking: () => void;
}

export const ServiceMenu: React.FC<ServiceMenuProps> = ({
  selectedServiceIds,
  onToggleService,
  onGoToBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Offerings' },
    { id: 'makeup', label: 'Makeup Artistry' },
    { id: 'bridal', label: 'Bridal & Big Day' },
    { id: 'lashes', label: 'Lash Extensions' },
    { id: 'wigs', label: 'Wig Care & Installs' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#0c0a09] relative">
      {/* Subtle section background accents */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <Sparkles className="h-3 w-3 text-amber-400" />
            <span>Service Catalog & Transparent Rates</span>
          </div>
          
          <h2 className="mt-3 font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-100">
            Curated Beauty & Hair Experiences
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-stone-400 leading-relaxed">
            Every appointment is crafted with skin-loving cosmetics, meticulous hygiene, and personalized techniques. 
            Choose your services below to build your custom appointment package.
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

        {/* Selected Services Counter Bar */}
        {selectedServiceIds.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 mx-auto max-w-xl rounded-xl border border-amber-500/40 bg-amber-950/30 p-3.5 flex items-center justify-between backdrop-blur-md"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-200">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-stone-950 font-bold text-xs">
                {selectedServiceIds.length}
              </span>
              <span>services selected in your custom package</span>
            </div>
            
            <button
              onClick={onGoToBooking}
              className="rounded-lg bg-amber-500 px-3.5 py-1.5 text-xs font-bold text-stone-950 hover:bg-amber-400 transition-colors"
            >
              Review Estimate & Book →
            </button>
          </motion.div>
        )}

        {/* Services Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const isSelected = selectedServiceIds.includes(service.id);

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 ${
                    isSelected
                      ? 'border-amber-400 bg-stone-900/95 shadow-xl shadow-amber-500/10'
                      : 'border-stone-800/80 bg-stone-900/50 hover:border-stone-700 hover:bg-stone-900/80'
                  } p-5 sm:p-6`}
                >
                  {/* Top Bar */}
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        {service.popular && (
                          <span className="inline-block rounded-full bg-amber-500/20 border border-amber-500/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-2">
                            Most Requested
                          </span>
                        )}
                        {service.requiresWigDropoff && (
                          <span className="inline-block rounded-full bg-rose-500/20 border border-rose-500/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-300 mb-2 ml-1">
                            Drop-off 48h Prior
                          </span>
                        )}
                        <h3 className="font-serif-luxury text-xl font-bold text-stone-100 group-hover:text-amber-200 transition-colors">
                          {service.name}
                        </h3>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="font-serif-luxury text-2xl font-bold text-amber-400">
                          R{service.price}
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-stone-400 justify-end mt-0.5">
                          <Clock className="h-3 w-3" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* What's included checklist */}
                    <div className="mt-4 border-t border-stone-800/80 pt-3.5">
                      <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-2">
                        Includes:
                      </div>
                      <ul className="space-y-1.5 text-xs text-stone-300">
                        {service.included.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <button
                      onClick={() => onToggleService(service)}
                      className={`w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                          : 'border border-amber-500/40 bg-stone-950 text-amber-300 hover:bg-amber-500/10'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Minus className="h-3.5 w-3.5" />
                          <span>Remove From Selection</span>
                        </>
                      ) : (
                        <>
                          <Plus className="h-3.5 w-3.5" />
                          <span>Select This Service</span>
                        </>
                      )}
                    </button>
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
