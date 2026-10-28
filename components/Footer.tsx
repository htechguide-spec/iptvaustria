import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'pseo-directory' | 'crawler-dashboard' | 'payment-process') => void;
  onOpenTrial?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050608] border-t border-white/10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600 text-white font-bold text-xs shadow-md">
                AT
              </div>
              <span className="text-base font-bold text-white font-display">
                IPTV Österreich
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Der führende 4K IPTV Anbieter für Österreich (iptvaustriahd.com). Über 21.000 Live-Sender, ORF 1 UHD, Sky Sport Austria, ADMIRAL Bundesliga, ServusTV und über 120.000 Filme & Serien ohne Vertragslaufzeit.
            </p>
            <div className="flex items-center gap-4 text-[11px] font-mono text-slate-500">
              <span>Domain: iptvaustriahd.com</span>
              <span>·</span>
              <span>Vienna VIX Direct Node</span>
            </div>
          </div>

          {/* Navigation Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate?.('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Startseite
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('payment-process')}
                  className="hover:text-red-400 text-slate-300 font-medium transition-colors cursor-pointer"
                >
                  Zahlungsablauf (Payment Process)
                </button>
              </li>
              <li>
                <a href="#vorteile" className="hover:text-white transition-colors">
                  Vorteile für Österreich
                </a>
              </li>
              <li>
                <a href="#preise" className="hover:text-white transition-colors">
                  Preise & Pakete
                </a>
              </li>
              <li>
                <a href="#geraete" className="hover:text-white transition-colors">
                  Geräte & Apps
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Häufige Fragen (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Support Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Kontakt & Support
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/16614570833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp (+1 661 457 0833)
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/Davidsimo1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Telegram (@Davidsimo1)
                </a>
              </li>
              <li>
                <a
                  href="#preise"
                  className="text-red-400 hover:text-red-300 font-semibold transition-colors"
                >
                  Paket jetzt bestellen &rarr;
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © 2026 IPTV Österreich (iptvaustriahd.com). Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <span>Datenschutz</span>
            <span>·</span>
            <span>AGB</span>
            <span>·</span>
            <span>Impressum</span>
            <span>·</span>
            <span className="text-slate-400">Österreich Server: VIX Wien</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
