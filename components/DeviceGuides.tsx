import React, { useState } from 'react';
import { Smartphone, Monitor, HardDrive, Check, Copy, ArrowRight, Zap, ExternalLink } from 'lucide-react';

interface DeviceGuidesProps {
  onOpenTrial: () => void;
}

const DEVICES_DATA = [
  {
    id: 'firetv',
    title: 'Amazon Fire TV Stick',
    subtitle: 'Fire OS · 4K, 4K Max & Lite',
    icon: HardDrive,
    downloaderCode: '5320406',
    recommendedApp: 'Offizielle IPTV Österreich App (Code: 5320406)',
    badge: 'Code: 5320406',
    steps: [
      'Installiere die kostenlose App "Downloader" direkt aus dem Amazon Appstore auf deinem Fire TV Stick.',
      'Öffne den Downloader und tippe den Code 5320406 in das URL-/Code-Eingabefeld ein.',
      'Unsere offizielle IPTV Österreich App wird sofort automatisch heruntergeladen und installiert.',
      'Starte die App, trage deine Zugangsdaten ein und streame über 21.000 Sender in 4K UHD.'
    ]
  },
  {
    id: 'samsung',
    title: 'Samsung Smart TV',
    subtitle: 'Tizen OS (Alle Modellreihen)',
    icon: Monitor,
    recommendedApp: 'IPTV Smarters Pro oder TiviMate',
    badge: 'App Store',
    steps: [
      'Öffne den Samsung Smart TV App Store und suche nach "IPTV Smarters Pro" oder "TiviMate".',
      'Installiere die App und wähle beim ersten Start "Login with Xtream Codes API".',
      'Trage deinen Benutzernamen, Passwort und die Server-URL ein – deine Senderliste lädt sofort.'
    ]
  },
  {
    id: 'lg',
    title: 'LG Smart TV',
    subtitle: 'webOS (OLED, QNED & 4K TVs)',
    icon: Monitor,
    recommendedApp: 'IPTV Smarters Pro',
    badge: 'LG Content Store',
    steps: [
      'Öffne den LG Content Store auf deinem Fernseher und lade die App "IPTV Smarters Pro" herunter.',
      'Öffne die installierte App und klicke auf "Add User / Xtream Codes API".',
      'Gib deine Zugangsdaten ein und genieße alle über 21.000 Sender sowie über 120.000 Filme & Serien auf Abruf.'
    ]
  },
  {
    id: 'android',
    title: 'Android TV & Google TV',
    subtitle: 'Sony Bravia, Philips, Xiaomi, Chromecast',
    icon: Monitor,
    recommendedApp: 'TiviMate IPTV Player oder IPTV Smarters Pro',
    badge: 'Google Play Store',
    steps: [
      'Öffne den Google Play Store auf deinem TV-Gerät oder deiner Streaming-Box.',
      'Installiere "TiviMate IPTV Player" oder "IPTV Smarters Pro".',
      'Wähle "Playlist hinzufügen", trage deine Zugangsdaten ein und starte dein Fernseherlebnis.'
    ]
  },
  {
    id: 'apple',
    title: 'Apple TV 4K & iOS',
    subtitle: 'tvOS, iPhone & iPad',
    icon: Smartphone,
    recommendedApp: 'IPTV Smarters Pro (Smarters Player Lite) oder TiviMax',
    badge: 'Apple App Store',
    steps: [
      'Öffne den Apple App Store auf deinem Apple TV 4K oder iPhone/iPad.',
      'Lade "IPTV Smarters Pro" (Smarters Player Lite) oder "TiviMax" herunter.',
      'Füge deine Zugangsdaten per Xtream Codes oder M3U hinzu – EPG Daten aktualisieren sich automatisch.'
    ]
  },
];

export const DeviceGuides: React.FC<DeviceGuidesProps> = ({ onOpenTrial }) => {
  const [activeDevice, setActiveDevice] = useState(DEVICES_DATA[0]);
  const [copiedCode, setCopiedCode] = useState(false);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="geraete" className="py-16 sm:py-24 bg-[#0a0c13] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
            Multi-Device Kompatibilität
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            IPTV läuft auf den Geräten, die du schon hast
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Ob Fernseher mit Stick, Smart TV, Tablet, Handy oder Laptop: Für jedes gängige Gerät in Österreich gibt es eine minutenschnelle Schritt-für-Schritt Einrichtung.
          </p>
        </div>

        {/* 2-Column Layout with Device visual and Tabbed Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Device Selection Tabs */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider px-2 block mb-1">
              Wähle dein Endgerät:
            </span>
            {DEVICES_DATA.map((dev) => {
              const Icon = dev.icon;
              const isSelected = activeDevice.id === dev.id;
              return (
                <button
                  key={dev.id}
                  onClick={() => setActiveDevice(dev)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#141926] border-red-500/40 shadow-lg shadow-red-950/20 text-white'
                      : 'bg-[#0e111a] border-white/5 hover:border-white/10 hover:bg-[#121622] text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-red-600 text-white' : 'bg-white/5 text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{dev.title}</h4>
                      <p className="text-[11px] text-slate-400">{dev.subtitle}</p>
                    </div>
                  </div>
                  {isSelected && <ArrowRight className="w-4 h-4 text-red-400" />}
                </button>
              );
            })}
          </div>

          {/* Right: Step-by-Step Instructions & Visual Showcase */}
          <div className="lg:col-span-8 rounded-2xl bg-[#101420] border border-white/10 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-emerald-400">
                  SCHRITT-FÜR-SCHRITT ANLEITUNG
                </span>
                <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                  {activeDevice.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Empfohlene Player-App: <strong className="text-slate-200">{activeDevice.recommendedApp}</strong>
                </p>
              </div>

              <button
                onClick={onOpenTrial}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                Zugang jetzt bestellen
              </button>
            </div>

            {/* Dedicated Downloader Code Box for Amazon Fire TV Stick */}
            {activeDevice.id === 'firetv' && (
              <div className="mt-6 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-red-950/50 via-[#181d2c] to-[#121623] border border-red-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg shadow-red-950/20">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                      Offizieller Downloader Code (Fire TV)
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                    Öffne die <strong>Downloader App</strong> auf deinem Fire TV Stick und gib den folgenden Code direkt ein:
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-[#090b10] border border-red-500/40 rounded-xl p-2 shrink-0">
                  <span className="text-2xl font-mono font-black text-white tracking-widest px-2 tabular-nums">
                    5320406
                  </span>
                  <button
                    onClick={() => copyCode('5320406')}
                    className="p-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                    title="Code kopieren"
                  >
                    {copiedCode ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white" />}
                    <span className="text-[11px]">{copiedCode ? 'Kopiert' : 'Kopieren'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Recommendation Callout for Other Devices */}
            {activeDevice.id !== 'firetv' && (
              <div className="mt-6 p-4 rounded-xl bg-[#0a0d14] border border-white/10 flex items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px] font-mono">EMPFOHLENE APPS FÜR DIESES GERÄT:</span>
                  <p className="text-slate-200 mt-0.5">
                    Installiere <strong className="text-white">IPTV Smarters Pro</strong> oder <strong className="text-white">TiviMate</strong> aus dem App Store deines Geräts.
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10 text-[11px] font-mono shrink-0">
                  {activeDevice.badge}
                </span>
              </div>
            )}

            {/* Steps List */}
            <div className="mt-6 space-y-4">
              {activeDevice.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#0a0d14] border border-white/5">
                  <span className="w-7 h-7 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-slate-200 text-sm leading-relaxed pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Generated Device Ecosystem Asset Display (Lazy loaded) */}
            <div className="mt-8 rounded-xl overflow-hidden border border-white/10 relative group">
              <img
                src="/src/assets/images/device_ecosystem_1793024691502.jpg"
                alt="IPTV Österreich auf Smart TV, Firestick und mobilen Endgeräten"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-slate-300 font-medium">
                  Flüssiges 4K Streaming auf Samsung Tizen, LG webOS, Firestick 4K und Apple TV
                </span>
              </div>
            </div>

            {/* Connection formats info */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
                Unterstützte Zugangsformate:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-[#0a0d14] border border-white/5">
                  <span className="text-xs font-semibold text-white block">M3U Plus URL</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Kompatibel mit allen Playlist-Playern</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0a0d14] border border-white/5">
                  <span className="text-xs font-semibold text-white block">Xtream Codes API</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Server URL + User + Passwort</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0a0d14] border border-white/5">
                  <span className="text-xs font-semibold text-white block">MAC / Stalker Portal</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Für MAG & Formuler Boxen</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
