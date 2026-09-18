import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, MessageCircle, Phone, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import { ASSETS } from '../data/assets';

interface WigDropoffNoticeProps {
  onSelectWigService: () => void;
}

export const WigDropoffNotice: React.FC<WigDropoffNoticeProps> = ({ onSelectWigService }) => {
  const steps = [
    {
      step: '01',
      title: 'Drop Off Early in the Week',
      desc: 'Drop off your wig Monday to Wednesday to avoid last-minute delays and ensure proper turnaround.',
    },
    {
      step: '02',
      title: 'Clarifying Wash & Detox',
      desc: 'Old adhesive, oils, and buildup are dissolved with professional clarifying shampoo.',
    },
    {
      step: '03',
      title: 'Deep Conditioning & Steam',
      desc: 'Intense moisture and protein masks restore natural bounce, softness, and radiant shine.',
    },
    {
      step: '04',
      title: 'Thermal Styling & Install',
      desc: 'Silk press bone-straight or bouncy body wave styling, customized lace plucking & scalp melt.',
    },
  ];

  return (
    <section id="wig-dropoff" className="relative py-12 sm:py-16 bg-stone-950 border-y border-stone-800/80">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial from-amber-600/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Urgent announcement card */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-amber-500/40 bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 p-6 sm:p-10 shadow-2xl shadow-amber-950/20">
          
          {/* Top highlight banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-stone-950 font-bold">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  Weekly Hair Care Notice
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-100">
                  Wig Drop-off Arrangements This Week
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Accepting Drop-offs Now
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            {/* Left explanation with exact user flyer quote */}
            <div className="lg:col-span-7">
              <blockquote className="border-l-4 border-amber-500 pl-4 py-1 text-base sm:text-lg italic text-amber-100 font-serif-luxury">
                "{BUSINESS_INFO.wigDropoffNotice}"
              </blockquote>

              <p className="mt-4 text-sm text-stone-300 leading-relaxed">
                Nothing ruins an installation faster than rushed preparation. When you drop off your unit early, 
                we take the required time to deeply treat the cuticles, strip old glues, tone or bleach knots, 
                and heat-style each bundle so your weekend install looks like hair naturally growing from your scalp.
              </p>

              {/* Step progression */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {steps.map((item) => (
                  <div key={item.step} className="rounded-xl border border-stone-800/80 bg-stone-950/60 p-3.5 flex gap-3">
                    <span className="font-serif-luxury text-lg font-bold text-amber-400/80">{item.step}</span>
                    <div>
                      <h4 className="text-xs font-bold text-stone-200">{item.title}</h4>
                      <p className="text-[11px] text-stone-400 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons for wig drop off */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=Hi%20Mamello!%20Have%20you%20made%20arrangements%20for%20wig%20drop%20off%20this%20week?%20I%20would%20like%20to%20arrange%20dropping%20off%20my%20wig%20for%20wash,%20treatment%20and%20styling.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-5 py-3 text-xs font-bold text-stone-950 shadow-lg shadow-emerald-500/20 active:scale-98 transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Arrange Drop-off via WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-2 rounded-xl border border-stone-700 bg-stone-800/80 hover:bg-stone-800 px-4 py-3 text-xs font-semibold text-stone-200 transition-colors"
                >
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  onClick={onSelectWigService}
                  className="flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 px-3 py-2 transition-colors ml-auto sm:ml-0"
                >
                  <span>View Wig Services & Packages</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Right photo showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-xl border border-amber-500/30 aspect-[4/3] shadow-lg">
                <img
                  src={ASSETS.wigStyling}
                  alt="Professional Wig Wash, Deep Treatment & Styling"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-stone-800 bg-stone-950/90 p-2.5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-200">Wig Treatment & Revamp</span>
                    <span className="text-xs font-semibold text-amber-400">From R250</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-stone-400 mt-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Includes steam hydration & heat styling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
