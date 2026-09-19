/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WigDropoffNotice } from './components/WigDropoffNotice';
import { ServiceMenu } from './components/ServiceMenu';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { HouseCallGuide } from './components/HouseCallGuide';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Testimonials } from './components/Testimonials';
import { FAQPolicy } from './components/FAQPolicy';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceItem } from './types';
import { SERVICES } from './data/servicesData';

export default function App() {
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([SERVICES[0]]);

  const handleToggleService = (service: ServiceItem) => {
    setSelectedServices((prev) => {
      const exists = prev.some((s) => s.id === service.id);
      if (exists) {
        return prev.filter((s) => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

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

  const handleSelectWigService = () => {
    const wigService = SERVICES.find((s) => s.id === 'wig-wash-treat-style');
    if (wigService && !selectedServices.some((s) => s.id === wigService.id)) {
      setSelectedServices((prev) => [...prev, wigService]);
    }
    scrollToServices();
  };

  const selectedServiceIds = selectedServices.map((s) => s.id);

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={scrollToServices}
      />

      {/* Hero Section with Big Day Specialist 3D Tile */}
      <Hero
        onOpenBooking={scrollToServices}
        onScrollToWig={scrollToWig}
      />

      {/* Wig Drop-off Announcement Banner */}
      <WigDropoffNotice
        onSelectWigService={handleSelectWigService}
      />

      {/* Comprehensive Service Catalog with Photorealistic Images */}
      <ServiceMenu
        selectedServiceIds={selectedServiceIds}
        onToggleService={handleToggleService}
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

      {/* Client Reviews & Testimonials */}
      <Testimonials />

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

