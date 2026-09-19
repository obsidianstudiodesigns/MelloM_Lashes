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
    <header className="sticky top-0 z-50 w-full border-b border-stone-800/80 bg-[#0c0a09]/90 backdrop-blur-md">
      {/* Top micro bar with contact info */}
      <div className="border-b border-stone-900 bg-stone-950/60 px-4 py-1.5 text-xs text-stone-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-300/90 font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Glam bookings open for weddings, events & weekly wig drop-offs</span>
            </span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span className="hidden md:inline text-stone-400">House calls available in Town & Locations</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=Hi%20Mamello!%20I%20would%20like%20to%20inquire%20about%20a%20glam%20appointment.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span className="font-medium">{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-rose-300/80 hover:text-rose-200 transition-colors"
            >
              <Instagram className="h-3.5 w-3.5" />
              <span>{BUSINESS_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3.5 sm:gap-4 group">
          <div className="relative h-15 w-15 sm:h-18 sm:w-18 md:h-20 md:w-20 overflow-hidden rounded-full border-2 border-amber-500/50 bg-stone-950 p-0.5 shadow-xl shadow-amber-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-amber-400 shrink-0">
            <img
              src={ASSETS.logo}
              alt="MelloM Lashes & Beauty Logo"
              referrerPolicy="no-referrer"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-wide text-stone-100 group-hover:text-amber-200 transition-colors">
                MelloM
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-semibold">
                Lashes & Beauty
              </span>
            </div>
            <span className="text-xs text-stone-400 tracking-wider">
              By Mamello Molise • Luxury Artistry
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-amber-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 rounded-lg border border-stone-800 bg-stone-900/80 px-3.5 py-2 text-xs font-semibold text-stone-200 hover:bg-stone-800 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-amber-400" />
            <span>Call</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-bold text-stone-950 shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all"
          >
            <Calendar className="h-3.5 w-3.5 text-stone-950" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="sm:hidden flex items-center gap-1 rounded-md bg-amber-500 px-2.5 py-1.5 text-xs font-bold text-stone-950"
          >
            <Calendar className="h-3 w-3" />
            <span>Book</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-stone-800 bg-stone-900 p-2 text-stone-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="border-b border-stone-800 bg-stone-950/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-stone-300 hover:text-amber-300 font-medium"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-2 pt-3 border-t border-stone-800/80 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 rounded-lg border border-stone-800 bg-stone-900 py-2.5 text-xs font-semibold text-stone-200"
                >
                  <Phone className="h-3.5 w-3.5 text-amber-400" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600/20 border border-emerald-500/30 py-2.5 text-xs font-semibold text-emerald-300"
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
                className="w-full mt-1 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-sm font-bold text-stone-950 shadow-md shadow-amber-500/20"
              >
                <Calendar className="h-4 w-4" />
                <span>Instant Booking & Price Calculator</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
