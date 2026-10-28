import React from 'react';
import { PseoPage } from '../types';
import { ArrowLeft, Check, Shield, Wifi, Zap, Star, Tv, HelpCircle, MapPin, Share2 } from 'lucide-react';

interface PseoPageRendererProps {
  page: PseoPage;
  onBack: () => void;
  onOpenTrial: () => void;
  onSelectCity: (slug: string) => void;
}

export const PseoPageRenderer: React.FC<PseoPageRendererProps> = ({
  page,
  onBack,
  onOpenTrial,
  onSelectCity
}) => {
  return (
    <article className="py-10 bg-[#08090d] text-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </button>

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
            {page.breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-slate-600">/</span>}
                <span className={idx === page.breadcrumbs.length - 1 ? 'text-red-400 font-medium' : ''}>
                  {bc.name}
                </span>
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Technical SEO Inspector Badge Bar */}
        <div className="mb-6 p-4 rounded-xl bg-[#101420] border border-white/10 text-xs font-mono text-slate-400 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              pSEO Canonical:
            </span>
            <span className="text-slate-300 truncate max-w-sm sm:max-w-md">
              {page.canonical}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Sitemap Chunk: <strong className="text-amber-400">sitemap_{page.sitemapChunk}.xml</strong></span>
            <span>Priority: <strong className="text-white">{page.priority}</strong></span>
          </div>
        </div>

        {/* Hero Block of pSEO Page */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-xs font-medium text-red-400 uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Österreich · {page.location?.bundesland || 'Bundesweit'}</span>
            {page.location?.city && (
              <>
                <span>·</span>
                <span>{page.location.city}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            {page.h1}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {page.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenTrial}
              className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-xl shadow-lg shadow-red-900/40 flex items-center gap-2"
            >
              <Zap className="w-4 h-4 fill-current" />
              Zugang jetzt bestellen
            </button>
            <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4 text-emerald-400" />
              Keine Vertragsbindung · Sofortige Freischaltung
            </span>
          </div>
        </header>

        {/* Localized Datacenter Latency Node */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-[#141926] to-[#0e121d] border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                LOKALE PEERING INFRASTRUKTUR
              </span>
              <h3 className="text-lg font-bold text-white font-display mt-0.5">
                Direktanbindung: {page.localDatacenterNode}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Garantierte Antwortzeiten für bestehende Anschlüsse von Magenta, A1 Telekom und Drei.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-mono">Gemessene Latenz:</span>
                <span className="text-xl font-mono font-bold text-emerald-400 tabular-nums">
                  Ø {page.latencyMs} ms
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Wifi className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white font-display mb-6">
            Deine Vorteile mit IPTV Österreich
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.highlightFeatures.map((feat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#101420] border border-white/10 flex items-start gap-3">
                <div className="p-1 rounded bg-red-500/10 text-red-400 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm text-slate-200 leading-snug">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Localized FAQs */}
        {page.faqs.length > 0 && (
          <section className="mb-12 pt-8 border-t border-white/10">
            <h2 className="text-xl font-bold text-white font-display mb-6">
              Häufige Fragen zu {page.location?.city || page.location?.bundesland || 'IPTV Österreich'}
            </h2>
            <div className="space-y-3">
              {page.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#101420] border border-white/10">
                  <h3 className="font-semibold text-white text-sm mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA Card */}
        <section className="rounded-2xl p-8 bg-gradient-to-br from-red-950/40 via-[#101420] to-[#101420] border border-red-500/30 text-center">
          <h2 className="text-2xl font-bold text-white font-display">
            Bereit für 4K Fernsehen ohne Kabelsalat?
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Erhalte jetzt sofortigen Zugriff auf über 21.000 Live-Sender und über 120.000 Filme & Serien in bester 4K UHD Qualität auf deinem Fernseher oder Smartphone.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenTrial}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-xl shadow-lg transition-colors"
            >
              Jetzt Zugang Bestellen
            </button>
            <button
              onClick={onBack}
              className="px-5 py-3 text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
            >
              Andere Städte durchstöbern
            </button>
          </div>
        </section>

      </div>
    </article>
  );
};
