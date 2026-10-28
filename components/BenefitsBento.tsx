import React from 'react';
import { Radio, MapPin, Zap, CreditCard, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';

interface BenefitsBentoProps {
  onOpenTrial: () => void;
}

export const BenefitsBento: React.FC<BenefitsBentoProps> = ({ onOpenTrial }) => {
  return (
    <section id="vorteile" className="py-16 sm:py-24 bg-[#0a0c13] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3">
            Die Vorteile für Österreich
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            IPTV in Österreich – ohne Schüssel, Kabelvertrag und Technikertermin
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Wer in Österreich fernsehen möchte, hängt bislang meist an teuren Kabelnetzbetreibern oder festen 24-Monats-Verträgen. Wir gehen einen moderneren Weg: Du nutzt einfach dein bestehendes Internet und streamst in bester 4K Qualität.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Weder Schüssel noch Kabelvertrag (Col Span 2) */}
          <div className="lg:col-span-2 rounded-2xl p-7 sm:p-9 bg-[#101420] border border-white/10 hover:border-red-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-105 transition-transform">
              <Radio className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
              Weder Satellitenschüssel noch Kabelvertrag
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Du benötigst keinen Satellitenempfang, keine hässliche Schüssel auf dem Balkon und keinen teuren Kabelanschluss. Eine stabile Internetverbindung (egal ob A1, Magenta, Drei, Liwest oder Glasfaser) genügt vollkommen. Alles Weitere läuft nahtlos über eine App auf deinem Fernseher oder Streaming-Stick.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="text-slate-300">· Keine Bohrlöcher in der Fassade</span>
              <span className="text-slate-300">· Keine Vermietergenehmigung</span>
              <span className="text-slate-300">· Keine GIS/Haushaltsabgabe-Bindung</span>
            </div>
          </div>

          {/* Card 2: Nicht an die Wohnung gebunden */}
          <div className="rounded-2xl p-7 sm:p-9 bg-[#101420] border border-white/10 hover:border-red-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-105 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">
              Nicht an die Adresse gebunden
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Dein IPTV-Zugang gehört dir, nicht deiner Wohnung. Beim Umzug, am Zweitwohnsitz oder in der Ferienwohnung in den Alpen nimmst du deine TV-Sender einfach mit. Sogar im Urlaub im Ausland streamst du ohne Geoblocking.
            </p>
          </div>

          {/* Card 3: In Minuten selbst eingerichtet */}
          <div className="rounded-2xl p-7 sm:p-9 bg-[#101420] border border-white/10 hover:border-red-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">
              In 2 Minuten eingerichtet
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Kein Monteur, kein Warten auf den Techniker zwischen 8 und 14 Uhr. App herunterladen (Smart TV, Fire TV, Apple TV oder Smartphone), Zugangsdaten eintragen, fertig – auch ohne technisches Vorwissen.
            </p>
          </div>

          {/* Card 4: Anti-Freeze 8.0 & Vienna VIX Node (Col Span 2) */}
          <div className="lg:col-span-2 rounded-2xl p-7 sm:p-9 bg-[#101420] border border-white/10 hover:border-red-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
              Anti-Freeze™ 8.0 & Direktanbindung ans Wiener VIX Rechenzentrum
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Während billige Anbieter bei Top-Spielen der ADMIRAL Bundesliga oder Formel 1 puffern, läuft unsere Infrastruktur auf dedizierten 10-Gbit-Clustern mit direkter Kopplung an den Vienna Internet eXchange (VIX). Ultrageringe Latenz von unter 12ms für ganz Österreich.
            </p>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-300 font-medium">
              <span>Ø 9–14 ms Latenz in AT</span>
              <span>·</span>
              <span>99.98% Server-Uptime</span>
              <span>·</span>
              <span>60 FPS Native Sports Feeds</span>
            </div>
          </div>

          {/* Card 5: Einmal zahlen, nichts läuft weiter */}
          <div className="rounded-2xl p-7 sm:p-9 bg-[#101420] border border-white/10 hover:border-red-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-105 transition-transform">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">
              Einmal zahlen, kein Abo
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Keine versteckten Gebühren, keine Vertragsfallen und keine automatische Verlängerung. Du buchst eine feste Laufzeit (z.B. 1, 6 oder 12 Monate). Läuft die Zeit ab, endet der Zugang automatisch. Du musst nichts kündigen.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
