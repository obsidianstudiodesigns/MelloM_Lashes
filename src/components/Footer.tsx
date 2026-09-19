import React from 'react';
import { Phone, Mail, Instagram, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import { ASSETS } from '../data/assets';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-amber-200/70 bg-[#faf7f2] text-stone-700">
      
      {/* Main footer section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <div className="h-18 w-18 sm:h-20 sm:w-20 overflow-hidden rounded-full border-2 border-amber-400 bg-white p-0.5 shadow-md shrink-0">
                <img
                  src={ASSETS.logo}
                  alt="MelloM Lashes & Beauty Logo"
                  referrerPolicy="no-referrer"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-wide text-stone-900">
                  MelloM
                </span>
                <span className="block text-xs sm:text-sm uppercase tracking-widest text-amber-700 font-bold">
                  Lashes & Beauty
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-stone-600 leading-relaxed max-w-sm">
              Exclusive Makeup Artistry, Lash Enhancements, Wig Care, Treatments and Installations by Mamello Molise. 
              Studio visits & private house calls in town and local locations.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-amber-800 font-medium">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>Page · {BUSINESS_INFO.category}</span>
            </div>
          </div>

          {/* Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-serif-luxury text-lg font-bold text-stone-900">
              Get in Touch Directly
            </h3>

            <ul className="space-y-2.5 text-xs text-stone-600">
              <li>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>WhatsApp & Calls: {BUSINESS_INFO.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-2 hover:text-amber-800 transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-amber-600" />
                  <span>Call: {BUSINESS_INFO.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-2 hover:text-amber-800 transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-amber-600" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </li>

              <li>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-rose-700 font-medium hover:text-rose-800 transition-colors"
                >
                  <Instagram className="h-4 w-4 shrink-0" />
                  <span>Instagram: {BUSINESS_INFO.instagramHandle}</span>
                </a>
              </li>

              <li className="flex items-center gap-2 text-stone-500 pt-1">
                <MapPin className="h-4 w-4 shrink-0 text-stone-400" />
                <span>House Calls: Town & Locations Upon Request</span>
              </li>
            </ul>
          </div>

          {/* Operating hours & Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif-luxury text-lg font-bold text-stone-900">
              Glam Schedule
            </h3>

            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span>Mon – Wed:</span>
                <span className="text-amber-800 font-semibold">Wig Drop-off & Prep</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span>Thu – Sat:</span>
                <span className="text-stone-800">Glam & Installs (08:00 - 18:00)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span>Sunday:</span>
                <span className="text-stone-800">Bridal & Big Day Bookings</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#wig-dropoff"
                className="text-xs text-amber-800 hover:text-amber-900 font-semibold underline underline-offset-4"
              >
                Weekly Wig Drop-off Details →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-stone-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} MelloM Lashes & Beauty. All rights reserved.</p>
          
          <div className="flex items-center gap-2 text-stone-600">
            <span>Built by</span>
            <span className="text-stone-800 font-semibold">Obsidian Studio Designs</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
