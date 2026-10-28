import React, { useState } from 'react';
import { X, Zap, Check, Copy, MessageSquare, Send, ShieldCheck, Tv, Smartphone, Monitor } from 'lucide-react';
import { PricingPlan } from '../types';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: PricingPlan | null;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [device, setDevice] = useState('Fire TV Stick 4K');
  const [format, setFormat] = useState<'m3u' | 'xtream'>('m3u');
  const [email, setEmail] = useState('');
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const demoCredentials = {
    serverUrl: 'http://stream.iptvaustriahd.com:8080',
    username: 'test_at_' + Math.floor(100000 + Math.random() * 900000),
    password: 'vix_' + Math.floor(1000 + Math.random() * 9000),
    m3uUrl: `http://stream.iptvaustriahd.com:8080/get.php?username=test_at_demo&password=vix2026&type=m3u_plus&output=ts`,
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setGenerated(true);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#101420] border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        {!generated ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-red-400 mb-2 uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-current" />
              <span>{selectedPlan ? `Bestellung: ${selectedPlan.title}` : 'IPTV Österreich Zugang'}</span>
            </div>

            <h3 className="text-2xl font-bold text-white font-display">
              {selectedPlan ? `${selectedPlan.title} (${selectedPlan.priceTotal} €) bestellen` : 'IPTV Österreich Zugang einrichten'}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedPlan
                ? `Schließe deine Bestellung für ${selectedPlan.title} ab. Einmalige Zahlung, kein Abonnement. Dein Zugang wird sofort für dein Gerät konfiguriert.`
                : 'Erhalte sofortigen Zugriff auf über 21.000 Live-TV-Sender, ORF 1 UHD, Sky Sport Austria und 120.000 Filme & Serien. Keine Vertragsbindung.'}
            </p>

            <form onSubmit={handleGenerate} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Dein Gerät:
                </label>
                <select
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b10] border border-white/10 text-white text-xs focus:outline-none focus:border-red-500"
                >
                  <option value="Fire TV Stick 4K">Amazon Fire TV Stick 4K / Max</option>
                  <option value="Samsung Smart TV">Samsung Smart TV (Tizen)</option>
                  <option value="LG Smart TV">LG Smart TV (webOS)</option>
                  <option value="Apple TV 4K / iOS">Apple TV 4K / iPhone / iPad</option>
                  <option value="Android TV / Sony / Philips">Android TV / Google TV (Sony, Philips)</option>
                  <option value="PC / Mac / VLC">PC / Laptop / Mac / VLC</option>
                  <option value="MAG Box / Formuler">MAG Box / Formuler (Stalker Portal)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Deine E-Mail Adresse (für Zugangsdaten):
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@beispiel.at"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b10] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Format:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormat('m3u')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-colors ${
                      format === 'm3u'
                        ? 'bg-red-600/20 border-red-500 text-white'
                        : 'bg-[#090b10] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    M3U Plus Playlist
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormat('xtream')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-colors ${
                      format === 'xtream'
                        ? 'bg-red-600/20 border-red-500 text-white'
                        : 'bg-[#090b10] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    Xtream Codes API
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-900/40 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-current" />
                {selectedPlan ? 'Zur Bezahlung & Freischaltung' : 'Zugang Jetzt Bestellen'}
              </button>

              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Einmalzahlung
                </span>
                <span>·</span>
                <span>Kein Abonnement</span>
                <span>·</span>
                <span>Sofortige Aktivierung</span>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white font-display">
              Dein Zugang ist eingerichtet!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Eine Bestätigung wurde an <strong>{email}</strong> gesendet. Du kannst die Daten sofort in deine IPTV App eintragen:
            </p>

            <div className="mt-6 p-4 rounded-xl bg-[#090b10] border border-white/10 space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/5">
                <span>GERÄT:</span>
                <span className="text-white">{device}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">SERVER URL:</span>
                <span className="text-slate-200">{demoCredentials.serverUrl}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">BENUTZERNAME:</span>
                <span className="text-emerald-400 font-bold">{demoCredentials.username}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">PASSWORT:</span>
                <span className="text-amber-400 font-bold">{demoCredentials.password}</span>
              </div>
            </div>

            {/* App Installation Guide Info Box */}
            {device.includes('Fire TV') ? (
              <div className="mt-4 p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-amber-400 font-bold block text-[11px] font-mono">
                    FIRE TV STICK DOWNLOADER CODE:
                  </span>
                  <p className="text-slate-300 mt-0.5 text-[11px]">
                    Öffne <strong>Downloader</strong> und gib den Code <strong>5320406</strong> ein.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('5320406')}
                  className="px-2.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs shrink-0 flex items-center gap-1 shadow-xs"
                >
                  <Copy className="w-3.5 h-3.5" />
                  5320406
                </button>
              </div>
            ) : (
              <div className="mt-4 p-3 rounded-xl bg-[#090b10] border border-white/10 text-xs text-slate-300">
                <span className="text-slate-400 block text-[11px] font-mono mb-0.5">
                  APP EMPFEHLUNG FÜR {device.toUpperCase()}:
                </span>
                Installiere bitte <strong className="text-white">IPTV Smarters Pro</strong> oder <strong className="text-white">TiviMate</strong> aus dem App Store deines Geräts und trage die obigen Daten ein.
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleCopy(demoCredentials.m3uUrl)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-white/10"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied ? 'Kopiert!' : 'M3U Link kopieren'}
              </button>

              <a
                href={`https://wa.me/16614570833?text=${encodeURIComponent(
                  selectedPlan
                    ? `Grüß Gott! Ich möchte dieses Paket bezahlen: ${selectedPlan.title} (${selectedPlan.priceTotal} €) für mein Gerät (${device})`
                    : `Grüß Gott! Bitte hilf mir bei der Freischaltung für mein Gerät (${device})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp (+1 661 457 0833)
              </a>

              <a
                href="https://t.me/Davidsimo1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                Telegram (@Davidsimo1)
              </a>
            </div>

            <button
              onClick={onClose}
              className="w-full mt-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              Fenster schließen
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
