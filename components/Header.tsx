import React, { useState } from 'react';
import { Tv, Zap, BarChart2, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeView: 'home' | 'pseo-directory' | 'crawler-dashboard' | 'pseo-page' | 'payment-process';
  onNavigate: (view: 'home' | 'pseo-directory' | 'crawler-dashboard' | 'pseo-page' | 'payment-process') => void;
  onOpenTrial: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, onNavigate, onOpenTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: 'home' | 'pseo-directory' | 'crawler-dashboard' | 'pseo-page' | 'payment-process', hash?: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    if (hash && view === 'home') {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-18">
        
        {/* Zone 1: Single text element wordmark with Austrian flag accent */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group whitespace-nowrap shrink-0 focus:outline-none cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-white shadow-lg shadow-red-900/30 border border-red-500/30 group-hover:scale-105 transition-transform duration-200">
            <Tv className="w-5 h-5 text-white" />
            <div className="absolute -bottom-1 -right-1 flex h-3.5 w-5 overflow-hidden rounded-[2px] border border-white/30 shadow-xs">
              <span className="w-1/3 h-full bg-red-600"></span>
              <span className="w-1/3 h-full bg-white"></span>
              <span className="w-1/3 h-full bg-red-600"></span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white font-display">
                IPTV Österreich
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                4K UHD
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono tracking-wider">
              iptvaustriahd.com
            </p>
          </div>
        </button>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => handleNavClick('home', 'vorteile')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Vorteile
          </button>
          <button
            onClick={() => handleNavClick('home', 'preise')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Preise
          </button>
          <button
            onClick={() => handleNavClick('payment-process')}
            className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'payment-process' ? 'text-red-400 font-semibold' : ''
            }`}
          >
            Zahlungsablauf
          </button>
          <button
            onClick={() => handleNavClick('home', 'geraete')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Geräte
          </button>
          <button
            onClick={() => handleNavClick('home', 'faq')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            FAQ
          </button>
          <button
            onClick={() => handleNavClick('crawler-dashboard')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === 'crawler-dashboard' ? 'text-amber-400 font-semibold' : 'hover:text-white'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            Crawler & Traffic Monitor
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('home', 'preise')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg shadow-lg shadow-red-900/40 hover:shadow-red-800/60 active:scale-95 transition-all whitespace-nowrap shrink-0 border border-red-500/40"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            Jetzt Bestellen
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg border border-white/10 hover:bg-white/5 focus:outline-none"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0f17] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
            <button
              onClick={() => handleNavClick('home', 'vorteile')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              Vorteile für Österreich
            </button>
            <button
              onClick={() => handleNavClick('home', 'preise')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              Preise & Pakete
            </button>
            <button
              onClick={() => handleNavClick('payment-process')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/5 transition-colors text-red-400 font-medium"
            >
              Zahlungsablauf (Payment Process)
            </button>
            <button
              onClick={() => handleNavClick('home', 'geraete')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              Geräte & Apps
            </button>
            <button
              onClick={() => handleNavClick('home', 'faq')}
              className="text-left py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              Häufige Fragen (FAQ)
            </button>
            <button
              onClick={() => handleNavClick('crawler-dashboard')}
              className="flex items-center gap-2 py-2 px-3 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20"
            >
              <BarChart2 className="w-4 h-4 text-amber-400" />
              Crawler & Traffic Live Dashboard
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); handleNavClick('home', 'preise'); }}
              className="w-full flex items-center justify-center gap-2 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-red-600 rounded-lg shadow-lg shadow-red-900/50"
            >
              <Zap className="w-4 h-4 fill-current" />
              Jetzt Bestellen
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
