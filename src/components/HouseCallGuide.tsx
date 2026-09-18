import React from 'react';
import { MapPin, Home, Sparkles, CheckCircle2, ShieldCheck, Sun, Zap, ArrowRight } from 'lucide-react';
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
    <section id="house-calls" className="py-16 sm:py-24 bg-stone-950 border-t border-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: House Call Overview */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
              <MapPin className="h-3 w-3 text-amber-400" />
              <span>Mobile Beauty Concierge</span>
            </div>

            <h2 className="mt-3 font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-100 leading-tight">
              House Calls in Town & Surrounding Locations
            </h2>

            <p className="mt-4 text-sm sm:text-base text-stone-300 leading-relaxed">
              Prefer getting ready in the peaceful comfort of your home, bridal suite, or hotel room? 
              <strong className="text-amber-200"> House calls are permitted upon request</strong> with a transparent 
              travel fee tailored to your distance.
            </p>

            {/* Travel Tier Cards */}
            <div className="mt-6 space-y-3">
              {HOUSE_CALL_TIERS.map((tier) => (
                <div
                  key={tier.type}
                  className="rounded-xl border border-stone-800/80 bg-stone-900/60 p-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="text-sm font-bold text-stone-100">{tier.label}</div>
                    <div className="text-xs text-stone-400 mt-0.5">{tier.description}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="font-serif-luxury text-lg font-bold text-amber-400">
                      {tier.surcharge === 0 ? 'Studio Free' : `+R${tier.surcharge}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={onBookHouseCall}
                className="flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 px-6 py-3.5 text-xs sm:text-sm font-bold text-stone-950 shadow-lg shadow-amber-500/20 active:scale-98 transition-all"
              >
                <span>Calculate Your House Call Rate & Book</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Setup checklist */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-amber-500/30 bg-stone-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-bold mb-4">
                <ShieldCheck className="h-4 w-4" />
                <span>House Call Preparation Guide</span>
              </div>

              <h3 className="font-serif-luxury text-2xl font-bold text-stone-100">
                What to Prepare Before Your Artist Arrives
              </h3>

              <div className="mt-6 space-y-4">
                {preparationTips.map((tip, idx) => {
                  const Icon = tip.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5 rounded-xl border border-stone-800 bg-stone-950/60 p-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-stone-100">{tip.title}</h4>
                        <p className="text-[11px] text-stone-400 mt-0.5 leading-snug">{tip.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Punctual arrival with hospital-grade brush sanitization between every client.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
