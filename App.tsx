import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BenefitsBento } from './components/BenefitsBento';
import { DeviceGuides } from './components/DeviceGuides';
import { SpeedLatencyTool } from './components/SpeedLatencyTool';
import { PricingSection } from './components/PricingSection';
import { TestimonialsFaq } from './components/TestimonialsFaq';
import { Footer } from './components/Footer';
import { PseoDirectory } from './components/PseoDirectory';
import { PseoPageRenderer } from './components/PseoPageRenderer';
import { CrawlerDashboard } from './components/CrawlerDashboard';
import { FreeTrialModal } from './components/FreeTrialModal';
import { PaymentProcessPage } from './components/PaymentProcessPage';
import { ALL_PSEO_PAGES } from './data/pseoData';
import { PseoPage, PricingPlan } from './types';
import { Zap, MessageSquare } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'pseo-directory' | 'crawler-dashboard' | 'pseo-page' | 'payment-process'>('home');
  const [selectedPseoPage, setSelectedPseoPage] = useState<PseoPage | null>(null);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  // Handle client-side hash or slug routing if user clicks external pSEO link
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/payment-process' || path === '/zahlungsablauf') {
      setActiveView('payment-process');
      return;
    }
    if (path && path !== '/') {
      const match = ALL_PSEO_PAGES.find(p => p.path === path || p.slug === path.replace('/', ''));
      if (match) {
        setSelectedPseoPage(match);
        setActiveView('pseo-page');
      }
    }
  }, []);

  const handleSelectPseoPage = (page: PseoPage) => {
    setSelectedPseoPage(page);
    setActiveView('pseo-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setTrialModalOpen(true);
  };

  const handleOpenTrialOnly = () => {
    setSelectedPlan(null);
    setTrialModalOpen(true);
  };

  const handleScrollToPricing = () => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById('preise');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById('preise');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 flex flex-col font-sans selection:bg-red-600/30 selection:text-white">
      {/* Top Bar */}
      <Header
        activeView={activeView === 'pseo-page' ? 'pseo-directory' : activeView}
        onNavigate={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenTrial={handleOpenTrialOnly}
      />

      {/* Main View Router */}
      <main className="flex-1 pb-16 lg:pb-0">
        {activeView === 'home' && (
          <>
            <HeroSection
              onOpenTrial={handleOpenTrialOnly}
              onScrollToPricing={handleScrollToPricing}
            />
            <BenefitsBento onOpenTrial={handleOpenTrialOnly} />
            <SpeedLatencyTool />
            <PricingSection
              onOpenTrial={handleOpenTrialOnly}
              onSelectPlan={handleSelectPlan}
              onOpenPaymentProcess={() => {
                setActiveView('payment-process');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <DeviceGuides onOpenTrial={handleOpenTrialOnly} />
            <TestimonialsFaq onOpenTrial={handleOpenTrialOnly} />
          </>
        )}

        {activeView === 'payment-process' && (
          <PaymentProcessPage
            onBackToHome={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToPricing={handleScrollToPricing}
          />
        )}

        {activeView === 'pseo-directory' && (
          <PseoDirectory
            onSelectPage={handleSelectPseoPage}
            onOpenDashboard={() => {
              setActiveView('crawler-dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeView === 'pseo-page' && selectedPseoPage && (
          <PseoPageRenderer
            page={selectedPseoPage}
            onBack={() => {
              setActiveView('pseo-directory');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenTrial={handleOpenTrialOnly}
            onSelectCity={(slug) => {
              const match = ALL_PSEO_PAGES.find(p => p.slug === slug);
              if (match) setSelectedPseoPage(match);
            }}
          />
        )}

        {activeView === 'crawler-dashboard' && (
          <CrawlerDashboard />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenTrial={handleOpenTrialOnly}
      />

      {/* 24h Free Trial / Order Modal */}
      <FreeTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        selectedPlan={selectedPlan}
      />

      {/* Mobile Sticky Quick Action Bar (Under 15% mobile viewport cap) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0e15]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href="https://wa.me/16614570833?text=Hallo%20IPTV%20Österreich,%20ich%20habe%20eine%20Frage"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          WhatsApp (+1 661 457 0833)
        </a>

        <button
          onClick={handleScrollToPricing}
          className="flex-1 py-2.5 px-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-red-950/50"
        >
          <Zap className="w-3.5 h-3.5 fill-current" />
          Jetzt Bestellen
        </button>
      </div>
    </div>
  );
}
