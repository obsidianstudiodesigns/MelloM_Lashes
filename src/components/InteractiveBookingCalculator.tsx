import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  CheckCircle2,
  Trash2,
  AlertCircle,
  Copy,
  Check,
  ShieldAlert
} from 'lucide-react';
import { ServiceItem, LocationType } from '../types';
import { BUSINESS_INFO, HOUSE_CALL_TIERS, SERVICES } from '../data/servicesData';

interface InteractiveBookingCalculatorProps {
  selectedServices: ServiceItem[];
  onToggleService: (service: ServiceItem) => void;
  onClearServices: () => void;
}

export const InteractiveBookingCalculator: React.FC<InteractiveBookingCalculatorProps> = ({
  selectedServices,
  onToggleService,
  onClearServices,
}) => {
  const [locationType, setLocationType] = useState<LocationType>('studio');
  const [customLocationDetails, setCustomLocationDetails] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00');
  const [guestCount, setGuestCount] = useState(1);
  const [notes, setNotes] = useState('');
  const [wigDropoffAcknowledged, setWigDropoffAcknowledged] = useState(false);
  const [copied, setCopied] = useState(false);

  // Calculate pricing
  const servicesTotal = selectedServices.reduce((sum, s) => sum + s.price, 0) * guestCount;
  const currentTier = HOUSE_CALL_TIERS.find((t) => t.type === locationType) || HOUSE_CALL_TIERS[0];
  const travelFee = currentTier.surcharge;
  const grandTotal = servicesTotal + travelFee;
  const depositAmount = Math.round(grandTotal * 0.5);

  const hasWigService = selectedServices.some((s) => s.category === 'wigs' || s.requiresWigDropoff);

  // Generate formatted WhatsApp message
  const generateWhatsAppMessage = () => {
    let msg = `*✨ GLAM BOOKING INQUIRY — MELLOM LASHES & BEAUTY ✨*\n\n`;
    msg += `*Client Name:* ${clientName || 'Not specified'}\n`;
    msg += `*Contact Phone:* ${clientPhone || 'Not specified'}\n`;
    msg += `*Preferred Date:* ${preferredDate || 'To be confirmed'} at ${preferredTime}\n`;
    msg += `*Service Location:* ${currentTier.label}\n`;
    if (locationType !== 'studio' && customLocationDetails) {
      msg += `*Address / Area:* ${customLocationDetails}\n`;
    }
    if (guestCount > 1) {
      msg += `*Party Size:* ${guestCount} people (Group / Bridal)\n`;
    }

    msg += `\n*Selected Services:*\n`;
    if (selectedServices.length === 0) {
      msg += `_No services selected yet_\n`;
    } else {
      selectedServices.forEach((s) => {
        msg += `• ${s.name} — R${s.price}\n`;
      });
    }

    msg += `\n*Financial Summary:*\n`;
    msg += `• Services: R${servicesTotal}\n`;
    if (travelFee > 0) {
      msg += `• House Call Surcharge: R${travelFee} (${currentTier.label})\n`;
    }
    msg += `• *Estimated Total:* R${grandTotal}\n`;
    msg += `• *Required 50% Deposit:* R${depositAmount}\n`;

    if (hasWigService) {
      msg += `\n*Wig Drop-off Status:* ${
        wigDropoffAcknowledged
          ? 'Arranging drop-off 48-72h prior'
          : 'Pending drop-off scheduling'
      }\n`;
    }

    if (notes) {
      msg += `\n*Special Notes / Big Day Vision:* ${notes}\n`;
    }

    msg += `\n_Generated via MelloM Lashes & Beauty Web Studio_`;
    return msg;
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(generateWhatsAppMessage());
    const url = `https://wa.me/${BUSINESS_INFO.whatsappInternational}?text=${text}`;
    window.open(url, '_blank');
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="booking-calculator" className="py-16 sm:py-24 bg-stone-950 relative border-t border-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <Sparkles className="h-3 w-3 text-amber-400" />
            <span>Interactive Appointment Estimator</span>
          </div>

          <h2 className="mt-3 font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-100">
            Build Your Custom Glam Quote
          </h2>

          <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
            Choose your makeup, lashes, or wig care services. Select studio appointment or a private house call 
            (in town or surrounding locations). We calculate your quote and format an instant WhatsApp booking request!
          </p>
        </div>

        {/* Two Column Interactive Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & Configuration (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Selected Services Quick Picker */}
            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5 sm:p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-stone-950 text-xs font-bold">1</span>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-200">
                    Selected Services ({selectedServices.length})
                  </h3>
                </div>
                {selectedServices.length > 0 && (
                  <button
                    onClick={onClearServices}
                    className="text-xs text-stone-400 hover:text-rose-400 transition-colors flex items-center gap-1"
                  >
                    <Trash2 className="h-3 w-3" />
                    <span>Clear All</span>
                  </button>
                )}
              </div>

              {selectedServices.length === 0 ? (
                <div className="py-6 text-center">
                  <p className="text-sm text-stone-400">
                    You have not selected any services yet. Click below to add your favorites:
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {SERVICES.slice(0, 4).map((s) => (
                      <button
                        key={s.id}
                        onClick={() => onToggleService(s)}
                        className="rounded-lg border border-amber-500/30 bg-stone-950/80 px-3 py-1.5 text-xs text-amber-300 hover:bg-amber-500/20 transition-colors"
                      >
                        + {s.name} (R{s.price})
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-4 divide-y divide-stone-800/80">
                  {selectedServices.map((service) => (
                    <div key={service.id} className="py-2.5 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-stone-100">{service.name}</div>
                        <div className="text-xs text-stone-400">{service.duration}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-serif-luxury text-base font-bold text-amber-400">
                          R{service.price}
                        </span>
                        <button
                          onClick={() => onToggleService(service)}
                          className="text-stone-500 hover:text-rose-400 transition-colors p-1"
                          title="Remove service"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Step 2: Location & House Call Surcharge */}
            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5 sm:p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-stone-800 pb-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-stone-950 text-xs font-bold">2</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-200">
                  Location & House Call Travel
                </h3>
              </div>

              <p className="mt-3 text-xs text-stone-400">
                {BUSINESS_INFO.houseCallNote}
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HOUSE_CALL_TIERS.map((tier) => {
                  const isChecked = locationType === tier.type;
                  return (
                    <div
                      key={tier.type}
                      onClick={() => setLocationType(tier.type as LocationType)}
                      className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
                        isChecked
                          ? 'border-amber-400 bg-amber-950/20 shadow-md shadow-amber-500/10'
                          : 'border-stone-800 bg-stone-950/50 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="text-xs font-bold text-stone-200">{tier.label}</div>
                        <div className="font-serif-luxury text-sm font-bold text-amber-400">
                          {tier.surcharge === 0 ? 'Free' : `+R${tier.surcharge}`}
                        </div>
                      </div>
                      <p className="text-[11px] text-stone-400 mt-1 leading-snug">
                        {tier.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {locationType !== 'studio' && (
                <div className="mt-4">
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Specific House Call Address or Town / Location Area:
                  </label>
                  <input
                    type="text"
                    value={customLocationDetails}
                    onChange={(e) => setCustomLocationDetails(e.target.value)}
                    placeholder="e.g., Section B, House 412, Location or Hotel in Town"
                    className="w-full rounded-xl border border-stone-800 bg-stone-950 px-3.5 py-2.5 text-xs text-stone-100 placeholder-stone-600 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              )}
            </div>

            {/* Step 3: Date, Time & Client Information */}
            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5 sm:p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-stone-800 pb-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-stone-950 text-xs font-bold">3</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-200">
                  Appointment Schedule & Your Details
                </h3>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Lerato Khumalo"
                    className="w-full rounded-xl border border-stone-800 bg-stone-950 px-3.5 py-2.5 text-xs text-stone-100 placeholder-stone-600 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Phone / WhatsApp Number:
                  </label>
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="e.g. 071 234 5678"
                    className="w-full rounded-xl border border-stone-800 bg-stone-950 px-3.5 py-2.5 text-xs text-stone-100 placeholder-stone-600 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Preferred Date:
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full rounded-xl border border-stone-800 bg-stone-950 px-3.5 py-2.5 text-xs text-stone-100 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Preferred Time:
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full rounded-xl border border-stone-800 bg-stone-950 px-3.5 py-2.5 text-xs text-stone-100 focus:border-amber-500 focus:outline-none"
                  >
                    <option value="08:00 AM">08:00 AM (Early Bridal / Morning)</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="12:00 PM">12:00 PM (Midday)</option>
                    <option value="02:00 PM">02:00 PM (Afternoon)</option>
                    <option value="04:00 PM">04:00 PM (Event Prep)</option>
                    <option value="06:00 PM">06:00 PM (Evening Slay)</option>
                  </select>
                </div>
              </div>

              {/* Bridal / Group count */}
              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-stone-200">
                    Big Day / Bridal Party or Group Size:
                  </div>
                  <div className="text-[11px] text-stone-400">
                    Booking for more than 1 person (e.g. Bride + Bridesmaids)?
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    className="h-8 w-8 rounded-lg border border-stone-700 bg-stone-800 text-stone-200 font-bold hover:bg-stone-700"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-amber-400">
                    {guestCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestCount(guestCount + 1)}
                    className="h-8 w-8 rounded-lg border border-stone-700 bg-stone-800 text-stone-200 font-bold hover:bg-stone-700"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Special notes */}
              <div className="mt-4">
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Big Day Vision or Special Requests:
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., Soft glam with champagne sparkle for my sister's wedding; sensitive eyes."
                  className="w-full rounded-xl border border-stone-800 bg-stone-950 px-3.5 py-2 text-xs text-stone-100 placeholder-stone-600 focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Wig drop-off acknowledgement if applicable */}
              {hasWigService && (
                <div className="mt-4 rounded-xl border border-amber-500/40 bg-amber-950/30 p-3 flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="wig-ack"
                    checked={wigDropoffAcknowledged}
                    onChange={(e) => setWigDropoffAcknowledged(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-stone-700 text-amber-500 focus:ring-amber-500"
                  />
                  <label htmlFor="wig-ack" className="text-xs text-amber-200 leading-snug cursor-pointer">
                    <strong>Wig Drop-off Agreement:</strong> I acknowledge that wigs must be dropped off 48-72 hours prior to my installation date for proper washing, treatment, and styling.
                  </label>
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Live Estimate & WhatsApp Action (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl border-2 border-amber-500/50 bg-stone-900 p-6 shadow-2xl shadow-amber-950/30 backdrop-blur-xl">
              
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Live Booking Quote
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-bold text-stone-100">
                    Estimated Total
                  </h3>
                </div>
                <div className="text-right">
                  <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-amber-400">
                    R{grandTotal}
                  </div>
                  <div className="text-[11px] text-stone-400">South African Rand</div>
                </div>
              </div>

              {/* Itemized list */}
              <div className="mt-4 space-y-2 text-xs text-stone-300">
                <div className="flex justify-between py-1">
                  <span>Selected Services ({selectedServices.length} {guestCount > 1 ? `× ${guestCount}` : ''}):</span>
                  <span className="font-semibold text-stone-100">R{servicesTotal}</span>
                </div>

                <div className="flex justify-between py-1">
                  <span>House Call Travel ({currentTier.label}):</span>
                  <span className="font-semibold text-stone-100">
                    {travelFee === 0 ? 'R0 (Studio)' : `+R${travelFee}`}
                  </span>
                </div>

                <div className="border-t border-stone-800/80 pt-2 flex justify-between font-bold text-sm text-stone-100">
                  <span>Grand Total:</span>
                  <span className="text-amber-400 font-serif-luxury text-lg">R{grandTotal}</span>
                </div>

                <div className="rounded-lg bg-stone-950/80 p-2.5 border border-stone-800 text-[11px] text-stone-400 flex items-center justify-between">
                  <span>Required 50% Deposit to Confirm:</span>
                  <span className="font-bold text-amber-300">R{depositAmount}</span>
                </div>
              </div>

              {/* Deposit notice */}
              <div className="mt-4 flex items-start gap-2 text-[11px] text-stone-400 bg-stone-950/40 p-2.5 rounded-lg border border-stone-800/60">
                <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Dates are only secured upon deposit receipt. Balance payable on the glam day.
                </span>
              </div>

              {/* Main Action: Send to WhatsApp */}
              <div className="mt-6 space-y-2.5">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 py-3.5 text-sm font-bold text-stone-950 shadow-xl shadow-emerald-950/50 active:scale-98 transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Send Booking via WhatsApp ({BUSINESS_INFO.phone})</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleCopySummary}
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-stone-700 bg-stone-800/80 py-2 text-xs font-semibold text-stone-200 hover:bg-stone-800 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Summary</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-stone-700 bg-stone-800/80 py-2 text-xs font-semibold text-stone-200 hover:bg-stone-800 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-amber-400" />
                    <span>Call Artist</span>
                  </a>
                </div>
              </div>

              {/* Quick message preview */}
              <div className="mt-4 pt-3 border-t border-stone-800">
                <p className="text-[10px] text-stone-400 text-center">
                  Clicking WhatsApp opens a pre-filled message directly to Mamello Molise (067 641 0352).
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
