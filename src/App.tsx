/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GlamInvitation } from './components/GlamInvitation';
import { WigDropoffNotice } from './components/WigDropoffNotice';
import { ServiceMenu } from './components/ServiceMenu';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { HouseCallGuide } from './components/HouseCallGuide';
import { PortfolioGallery } from './components/PortfolioGallery';
import { FAQPolicy } from './components/FAQPolicy';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWig = () => {
    const el = document.getElementById('wig-dropoff');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-stone-900 font-sans selection:bg-amber-500/20 selection:text-amber-900">
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={scrollToServices}
      />

      {/* Hero: Pure Unobstructed Wallpaper Showcase */}
      <Hero
        onScrollDown={() => {
          const el = document.getElementById('invitation');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Glam Invitation & Artistry Welcome Section */}
      <div id="invitation">
        <GlamInvitation
          onOpenBooking={scrollToServices}
          onScrollToWig={scrollToWig}
        />
      </div>

      {/* Wig Drop-off Announcement Banner */}
      <WigDropoffNotice
        onSelectWigService={scrollToServices}
      />

      {/* Comprehensive Service Catalog with Photorealistic Images */}
      <ServiceMenu
        onGoToBooking={scrollToServices}
      />

      {/* Interactive Before & After Glam Slider */}
      <BeforeAfterGallery />

      {/* House Call & Distance Information Guide */}
      <HouseCallGuide
        onBookHouseCall={scrollToServices}
      />

      {/* Visual Artistry Portfolio */}
      <PortfolioGallery />

      {/* FAQ & Policies */}
      <FAQPolicy />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp
        onOpenBooking={scrollToServices}
      />
    </div>
  );
}

