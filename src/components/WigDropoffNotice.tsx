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
    <section id="wig-dropoff" className="relative py-12 sm:py-16 bg-[#fcfaf7] border-y border-amber-200/60">
      {/* Background soft warm glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial from-amber-400/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Urgent announcement card */}
        <div className="relative overflow-hidden rounded-3xl border border-amber-200/80 bg-white/95 p-6 sm:p-10 shadow-xl shadow-amber-950/5">
          
          {/* Top highlight banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-5">
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-white font-bold shadow-xs">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900">
                  Wig Drop-off Arrangements This Week
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            {/* Left explanation with exact user flyer quote */}
            <div className="lg:col-span-7">
              <blockquote className="rounded-2xl border-l-4 border-amber-500 bg-amber-50/70 p-4 text-base sm:text-lg italic text-stone-900 font-serif-luxury">
                "{BUSINESS_INFO.wigDropoffNotice}"
              </blockquote>

              <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                Nothing ruins an installation faster than rushed preparation. When you drop off your unit early, 
                we take the required time to deeply treat the cuticles, strip old glues, tone or bleach knots, 
                and heat-style each bundle so your weekend install looks like hair naturally growing from your scalp.
              </p>

              {/* Step progression */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {steps.map((item) => (
                  <div key={item.step} className="rounded-xl border border-amber-200/60 bg-[#faf8f5] p-3.5 flex gap-3 shadow-2xs">
                    <span className="font-serif-luxury text-lg font-bold text-amber-600">{item.step}</span>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">{item.title}</h4>
                      <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">{item.desc}</p>
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
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-3 text-xs font-bold text-white shadow-md shadow-emerald-600/20 active:scale-98 transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Arrange Drop-off via WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 px-4 py-3 text-xs font-semibold text-stone-800 transition-colors shadow-xs"
                >
                  <Phone className="h-4 w-4 text-amber-600" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  onClick={onSelectWigService}
                  className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 px-3 py-2 transition-colors ml-auto sm:ml-0"
                >
                  <span>View Wig Services & Packages</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Right photo showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-2xl border border-amber-200/80 aspect-[4/3] shadow-md">
                <img
                  src={ASSETS.wigStyling}
                  alt="Professional Wig Wash, Deep Treatment & Styling"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/40 bg-white/90 p-3 backdrop-blur-md shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-900">Wig Treatment & Revamp</span>
                    <span className="text-xs font-semibold text-amber-700">Wash, Treat & Melt</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-stone-600 mt-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
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
