import React from 'react';
import { X, CheckCircle2, TrendingUp, Clock, ShieldCheck, DollarSign, Sparkles } from 'lucide-react';

interface ClientValueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientValueModal: React.FC<ClientValueModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const benefits = [
    {
      icon: Clock,
      title: 'Stops 10+ Hours of DM Price Haggling Weekly',
      desc: 'Instead of typing out prices for lashes, bridal, and wig washes 20 times a day in WhatsApp and Instagram DMs, clients configure their own package and send a completed booking summary.',
    },
    {
      icon: DollarSign,
      title: 'Commands Premium Rates for Brides & Big Days',
      desc: 'High-paying brides spending R50,000+ on weddings don’t trust DM-only businesses. A bespoke, luxury web presence justifies charging R850 – R1,500+ without pushback.',
    },
    {
      icon: ShieldCheck,
      title: 'Eliminates Friday Wig Drop-Off Chaos',
      desc: 'The prominent weekly wig notice clearly enforces the 48-72h drop-off rule. Clients know to drop off Mon–Wed, protecting your weekends from stressful rush jobs.',
    },
    {
      icon: TrendingUp,
      title: 'Automates House Call Distance Surcharges',
      desc: 'No more uncomfortable back-and-forth about travel costs. Town (+R120) and location (+R180) rates are calculated instantly, eliminating client arguments.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div className="relative max-w-2xl w-full rounded-2xl border-2 border-amber-500/50 bg-stone-950 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-stone-300 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
          <Sparkles className="h-4 w-4" />
          <span>Business Growth Pitch for Mamello Molise</span>
        </div>

        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-100 mt-2">
          Why MelloM Lashes & Beauty Needs This Website
        </h3>

        <blockquote className="mt-3 rounded-xl border border-stone-800 bg-stone-900/60 p-3 text-xs italic text-stone-300">
          "To be honest with you, I don't really see the need for a website. Maybe I could be convinced to get a website if I can see what it could possibly look like."
        </blockquote>

        <div className="mt-6 space-y-4">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5 rounded-xl border border-stone-800 bg-stone-900/40 p-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-100">{b.title}</h4>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-stone-800">
          <button
            onClick={onClose}
            className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-xs font-bold text-stone-950 hover:brightness-110"
          >
            Explore Live Preview
          </button>
        </div>
      </div>
    </div>
  );
};
