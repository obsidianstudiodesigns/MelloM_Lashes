import React from 'react';
import { MapPin, Home, Sparkles, CheckCircle2, ShieldCheck, Sun, Zap, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, HOUSE_CALL_TIERS } from '../data/servicesData';

interface HouseCallGuideProps {
  onBookHouseCall: () => void;
}

export const HouseCallGuide: React.FC<HouseCallGuideProps> = ({ onBookHouseCall }) => {
  const preparationTips = [
    {
      icon: Sun,
      title: 'Natural Light or Well-Lit Space',
      desc: 'Set up near a window or well-lit room. Artist also brings professional portable studio ring lighting.',
    },
    {
      icon: Home,
      title: 'Flat Table or Surface',
      desc: 'A clean table, vanity, or counter space for sanitized makeup palettes, brushes, and hot styling tools.',
    },
    {
      icon: Zap,
      title: 'Electrical Outlet Access',
      desc: 'An available wall socket for flat irons, hair steamers, and professional glam lights.',
    },
    {
      icon: Sparkles,
      title: 'Clean, Prepped Skin & Bundles',
      desc: 'Arrive with freshly cleansed bare skin (no oils or old makeup) and clean braided foundation for wig installs.',
    },
  ];

  return (
    <section id="house-calls" className="py-16 sm:py-24 bg-[#faf7f2] border-t border-amber-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: House Call Overview */}
          <div className="lg:col-span-6">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              House Calls in Town & Surrounding Locations
            </h2>

            <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
              Prefer getting ready in the peaceful comfort of your home, bridal suite, or hotel room? 
              <strong className="text-amber-800 font-semibold"> House calls are permitted upon request</strong> with a transparent 
              travel fee tailored to your distance.
            </p>

            {/* Travel Tier Cards */}
            <div className="mt-6 space-y-3">
              {HOUSE_CALL_TIERS.map((tier) => (
                <div
                  key={tier.type}
                  className="rounded-xl border border-amber-200/70 bg-white p-4 flex items-center justify-between gap-4 shadow-2xs"
                >
                  <div>
                    <div className="text-sm font-bold text-stone-900">{tier.label}</div>
                    <div className="text-xs text-stone-500 mt-0.5">{tier.description}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="font-serif-luxury text-lg font-bold text-amber-700">
                      {tier.surcharge === 0 ? 'Studio Free' : `+R${tier.surcharge}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=Hi%20Mamello!%20I%20would%20like%20to%20request%20a%20house%20call%20for%20a%20glam%20session.%20Here%20is%20my%20location:`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/20 active:scale-98 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Request House Call on WhatsApp</span>
              </a>

              <button
                onClick={onBookHouseCall}
                className="flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white px-5 py-3.5 text-xs sm:text-sm font-semibold text-stone-800 hover:bg-stone-50 shadow-xs transition-all"
              >
                <span>Browse Services</span>
              </button>
            </div>
          </div>

          {/* Right Column: Setup checklist */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-amber-200/80 bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-amber-950/5">
              <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                What to Prepare Before Your Artist Arrives
              </h3>

              <div className="mt-6 space-y-3.5">
                {preparationTips.map((tip, idx) => {
                  const Icon = tip.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5 rounded-xl border border-amber-100 bg-[#fdfbf7] p-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-700 border border-amber-500/20">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-stone-900">{tip.title}</h4>
                        <p className="text-[11px] text-stone-600 mt-0.5 leading-snug">{tip.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-50 p-3 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Punctual arrival with hospital-grade brush sanitization between every client.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
