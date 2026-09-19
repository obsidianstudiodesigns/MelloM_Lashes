import React, { useState } from 'react';
import { Sparkles, Eye, X, Instagram } from 'lucide-react';
import { PORTFOLIO_ITEMS, BUSINESS_INFO } from '../data/servicesData';
import { PortfolioItem } from '../types';

export const PortfolioGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'makeup' | 'lashes' | 'wigs' | 'bridal'>('all');

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-[#fdfbf7] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              The Art of Radiance
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-xl leading-relaxed">
              A curated lookbook of high-definition bridal transformations, melted lace installations, 
              and signature lash designs.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-rose-200 bg-white px-4 py-2.5 text-xs font-semibold text-rose-700 hover:bg-rose-50 hover:border-rose-300 transition-all self-start md:self-auto shadow-xs"
          >
            <Instagram className="h-4 w-4" />
            <span>Follow {BUSINESS_INFO.instagramHandle} on Instagram</span>
          </a>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Masterpieces' },
            { id: 'bridal', label: 'Bridal Beats' },
            { id: 'makeup', label: 'Glam Makeup' },
            { id: 'wigs', label: 'Wig Melts & Styling' },
            { id: 'lashes', label: 'Lash Extensions' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                activeFilter === tab.id
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'border border-amber-200/70 bg-white text-stone-700 hover:border-amber-300 shadow-2xs'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Grid with 3D hover effects */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-white/90 border border-stone-200 px-2.5 py-0.5 text-[10px] font-bold text-stone-800 backdrop-blur-md shadow-xs">
                    {item.tag}
                  </span>
                </div>

                {/* Hover Eye Icon */}
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-stone-700 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md shadow-xs">
                  <Eye className="h-4 w-4" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-serif-luxury text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-200 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Zoom Preview */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative max-w-2xl w-full rounded-3xl border border-amber-200 bg-white p-5 shadow-2xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="overflow-hidden rounded-2xl aspect-[4/3] w-full">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-4 px-1">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                {selectedItem.tag}
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-stone-900 mt-1">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-stone-600 mt-2">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
