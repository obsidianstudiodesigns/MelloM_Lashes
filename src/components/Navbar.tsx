import React, { useState } from 'react';
import { Phone, MessageCircle, Instagram, Menu, X, Sparkles, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import { ASSETS } from '../data/assets';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services & Pricing', href: '#services' },
    { name: 'Wig Drop-off', href: '#wig-dropoff' },
    { name: 'House Calls', href: '#house-calls' },
    { name: 'Artistry Portfolio', href: '#portfolio' },
    { name: 'Client Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-200/60 bg-[#fdfbf7]/90 backdrop-blur-md shadow-xs">
      {/* Main navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3.5 sm:gap-4 group">
          <div className="relative h-15 w-15 sm:h-18 sm:w-18 md:h-20 md:w-20 overflow-hidden rounded-full border-2 border-amber-500/60 bg-white p-0.5 shadow-md shadow-amber-900/10 transition-all duration-300 group-hover:scale-105 group-hover:border-amber-600 shrink-0">
            <img
              src={ASSETS.logo}
              alt="MelloM Lashes & Beauty Logo"
              referrerPolicy="no-referrer"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-wide text-stone-900 group-hover:text-amber-700 transition-colors">
                MelloM
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-amber-700 font-semibold">
                Lashes & Beauty
              </span>
            </div>
            <span className="text-xs text-stone-500 tracking-wider">
              By Mamello Molise • Luxury Artistry
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-amber-700 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white/90 px-3.5 py-2 text-xs font-semibold text-stone-800 hover:bg-amber-50/70 hover:border-amber-300 transition-colors shadow-xs"
          >
            <Phone className="h-3.5 w-3.5 text-amber-600" />
            <span>Call</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-amber-600/20 hover:brightness-105 active:scale-95 transition-all"
          >
            <Calendar className="h-3.5 w-3.5 text-white" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="sm:hidden flex items-center gap-1 rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Book</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-stone-200 bg-white p-2 text-stone-700 hover:text-stone-900 shadow-xs"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="border-b border-amber-200/60 bg-[#fdfbf7]/98 px-4 py-4 backdrop-blur-xl lg:hidden shadow-lg">
          <nav className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-stone-800 hover:text-amber-700 font-medium"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-2 pt-3 border-t border-stone-200 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white py-2.5 text-xs font-semibold text-stone-800 shadow-xs"
                >
                  <Phone className="h-3.5 w-3.5 text-amber-600" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white py-2.5 text-xs font-semibold shadow-xs"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 py-3 text-sm font-bold text-white shadow-md shadow-amber-600/20"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
