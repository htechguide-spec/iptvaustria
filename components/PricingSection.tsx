import React from 'react';
import { Check, Zap, Sparkles, ShieldCheck, HelpCircle, MessageSquare } from 'lucide-react';
import { PRICING_PLANS } from '../data/pseoData';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onOpenTrial?: () => void;
  onSelectPlan?: (plan: PricingPlan) => void;
  onOpenPaymentProcess?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ 
  onOpenTrial, 
  onSelectPlan,
  onOpenPaymentProcess 
}) => {
  return (
    <section id="preise" className="py-16 sm:py-24 bg-[#0a0c13] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Button: How payment works (Zahlungsablauf) before PREISE & PAKETE section */}
        <div className="flex justify-center mb-8">
          <button
            onClick={onOpenPaymentProcess}
            type="button"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600/20 via-red-500/10 to-red-600/20 hover:from-red-600/30 hover:to-red-600/30 border border-red-500/40 hover:border-red-400 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-lg shadow-red-950/40 group cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
            <span>Wie funktioniert die Bezahlung? (Zahlungsablauf)</span>
            <span className="text-red-400 font-bold group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </button>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
            PREISE & PAKETE
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Ein Preis, keine <span className="text-red-500">Überraschungen</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Einmalzahlung, kein Abo, keine automatische Verlängerung. Wähle einfach deine gewünschte Laufzeit.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.slice(0, 4).map((plan) => {
            const isHighlight = plan.isPopular;
            const orderMessage = `Grüß Gott! Ich möchte dieses Paket bezahlen: ${plan.title} (${plan.priceTotal} €)`;
            const whatsappUrl = `https://wa.me/16614570833?text=${encodeURIComponent(orderMessage)}`;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlight
                    ? 'bg-gradient-to-b from-[#181d2c] to-[#121623] border-2 border-red-500 shadow-2xl shadow-red-950/40 lg:-translate-y-2'
                    : 'bg-[#101420] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular badge */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-mono text-[11px] font-bold tracking-wider uppercase shadow-md">
                    Bundesliga & Ski 2026/27
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white font-display">
                      {plan.title}
                    </h3>
                    {plan.discountBadge && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                        {plan.discountBadge.split('·')[0]}
                      </span>
                    )}
                  </div>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white font-display tracking-tight tabular-nums">
                        {plan.priceTotal} €
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      {plan.pricePerMonth}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8 text-xs text-slate-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA: Pay Now -> Redirects to WhatsApp in Austrian language */}
                <div className="space-y-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isHighlight
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-900/50 hover:from-red-500 hover:to-red-600 active:scale-98'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20 active:scale-98'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Jetzt bezahlen</span>
                  </a>
                  <p className="text-center text-[10px] text-slate-400 font-mono">
                    Direkte Freischaltung via WhatsApp
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Austrian Transparency Box */}
        <div className="mt-12 max-w-2xl mx-auto rounded-xl p-5 bg-[#101420] border border-white/10 text-center">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
            Preise für Österreich
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Abgerechnet wird einmalig in Euro für die gewählte Laufzeit – ohne Abo, ohne automatische Verlängerung und ohne hinterlegte Zahlungsdaten.
          </p>
        </div>

        {/* Direct Contact Support Callout */}
        <div className="mt-8 text-center flex flex-wrap items-center justify-center gap-3 text-xs">
          <span className="text-slate-400">Fragen vor der Bestellung? Kontaktiere uns direkt:</span>
          <a
            href="https://wa.me/16614570833?text=Hallo%20IPTV%20Österreich,%20ich%20möchte%20ein%20Paket%20bestellen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4 transition-colors"
          >
            WhatsApp (+1 661 457 0833)
          </a>
          <span className="text-slate-600">·</span>
          <a
            href="https://t.me/Davidsimo1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 font-semibold underline underline-offset-4 transition-colors"
          >
            Telegram (@Davidsimo1)
          </a>
        </div>

      </div>
    </section>
  );
};
