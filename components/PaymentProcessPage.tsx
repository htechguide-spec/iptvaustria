import React from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  CreditCard, 
  CheckCircle2, 
  Zap, 
  MessageSquare, 
  Lock, 
  ExternalLink,
  ChevronRight,
  HelpCircle,
  Tv
} from 'lucide-react';

interface PaymentProcessPageProps {
  onBackToHome: () => void;
  onGoToPricing: () => void;
}

export const PaymentProcessPage: React.FC<PaymentProcessPageProps> = ({
  onBackToHome,
  onGoToPricing
}) => {
  return (
    <article className="py-12 lg:py-16 bg-[#08090d] text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={onBackToHome}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Startseite</span>
            </button>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-red-400 font-medium">Zahlungsablauf</span>
          </div>

          <button
            onClick={onGoToPricing}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition-colors cursor-pointer"
          >
            <Zap className="w-3 h-3 fill-current" />
            <span>Direkt zu den Paketen</span>
          </button>
        </div>

        {/* Page Hero */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Offizielle Anleitung · IPTV Österreich</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Zahlungsablauf <span className="text-red-500">(Payment Process)</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Hier erfährst du Schritt für Schritt, wie einfach, sicher und transparent die Bezahlung und Freischaltung deines IPTV Österreich Abos abläuft. Ohne automatische Vertragsverlängerung, ohne versteckte Kosten.
          </p>

          {/* Quick Trust Highlights */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-[#101420] border border-white/10 flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-bold text-white">SSL-Verschlüsselt</p>
                <p className="text-[10px] text-slate-400">100% sicher</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#101420] border border-white/10 flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-bold text-white">Sofort-Aktivierung</p>
                <p className="text-[10px] text-slate-400">In 2 Minuten</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#101420] border border-white/10 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-bold text-white">Kein Abonnement</p>
                <p className="text-[10px] text-slate-400">Einmalige Zahlung</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#101420] border border-white/10 flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-bold text-white">WhatsApp Support</p>
                <p className="text-[10px] text-slate-400">+1 661 457 0833</p>
              </div>
            </div>
          </div>
        </header>

        {/* Steps Container */}
        <div className="space-y-12">
          
          {/* Step 1 */}
          <section className="rounded-2xl p-6 sm:p-8 bg-[#101420] border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-600 text-white font-bold text-xs font-mono">
                1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Schritt 1: Zu den Paketen scrollen (Go to the Packages Section)
              </h2>
            </div>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Wenn du die Startseite aufrufst, scrolle nach unten, bis du den Bereich <strong>Preise & Pakete</strong> erreichst. Hier siehst du alle verfügbaren Laufzeiten (1 Monat, 3 Monate, 6 Monate oder das beliebte 12-Monate-Paket für 59,95 €) mit Preisen und Leistungsdetails.
            </p>

            {/* Official Website Packages Image */}
            <div className="rounded-xl overflow-hidden border border-white/15 bg-black/40 shadow-xl">
              <img 
                src="/assets/payment-process/my-packages-austria.svg" 
                alt="IPTV Österreich Preise & Pakete (1 Monat 10€, 3 Monate 25€, 6 Monate 45€, 12 Monate 59.95€)"
                className="w-full h-auto object-contain mx-auto"
                loading="lazy"
              />
            </div>
          </section>

          {/* Step 2 */}
          <section className="rounded-2xl p-6 sm:p-8 bg-[#101420] border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-600 text-white font-bold text-xs font-mono">
                2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Schritt 2: Auf &quot;Jetzt bezahlen&quot; klicken (Click on Subscribe Now)
              </h2>
            </div>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Sobald du das Paket gefunden hast, das deinen Bedürfnissen entspricht (z. B. <strong>12 Monate für 59,95 €</strong>), klicke auf die Schaltfläche <strong>Jetzt bezahlen</strong>. Dadurch wirst du direkt und sicher weitergeleitet.
            </p>
          </section>

          {/* Step 3 */}
          <section className="rounded-2xl p-6 sm:p-8 bg-[#101420] border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-600 text-white font-bold text-xs font-mono">
                3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Schritt 3: Weiterleitung zur Bezahlseite (You Will Be Redirected to Payment Page)
              </h2>
            </div>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Nach dem Klick wirst du zu unserer offiziellen Zahlungsplattform weitergeleitet, auf der alle Transaktionen sicher und verschlüsselt abgewickelt werden.
            </p>

            <div className="rounded-xl overflow-hidden border border-white/15 bg-black/40 shadow-xl">
              <img 
                src="/assets/payment-process/Screenshot-2026-05-05-220139.png" 
                alt="Schritt 3: Bezahlseite Weiterleitung"
                className="w-full h-auto object-cover max-h-[380px] mx-auto"
                loading="lazy"
              />
            </div>
          </section>

          {/* Step 4 */}
          <section className="rounded-2xl p-6 sm:p-8 bg-[#101420] border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-600 text-white font-bold text-xs font-mono">
                4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Schritt 4: Auf &quot;Order Now&quot; klicken, falls erforderlich (Click on Order Now if Needed)
              </h2>
            </div>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Sollten die Produkte nicht sofort automatisch auf dem Bildschirm erscheinen, klicke einfach auf die Schaltfläche <strong>Order Now</strong> (Jetzt Bestellen), um die verfügbaren Pakete zu laden.
            </p>
          </section>

          {/* Step 5 */}
          <section className="rounded-2xl p-6 sm:p-8 bg-[#101420] border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-600 text-white font-bold text-xs font-mono">
                5
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Schritt 5: Dein gewünschtes Paket auswählen (Select Your Package)
              </h2>
            </div>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Wähle aus den angezeigten Optionen das Paket deiner Wahl aus. Du kannst vor der Bestätigung alle Details und Preise nochmals in Ruhe überprüfen.
            </p>

            <div className="rounded-xl overflow-hidden border border-white/15 bg-black/40 shadow-xl">
              <img 
                src="/assets/payment-process/Screenshot-2026-05-05-220200.png" 
                alt="Schritt 5: Paket auswählen"
                className="w-full h-auto object-cover max-h-[460px] mx-auto"
                loading="lazy"
              />
            </div>
          </section>

          {/* Step 6 */}
          <section className="rounded-2xl p-6 sm:p-8 bg-[#101420] border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-600 text-white font-bold text-xs font-mono">
                6
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Schritt 6: Bezahlung abschließen (Complete Your Payment)
              </h2>
            </div>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Nachdem du dein Paket ausgewählt hast, setze den Bezahlvorgang fort. Gib deine Angaben ein und schließe die Zahlung sicher ab.
            </p>

            <div className="rounded-xl overflow-hidden border border-white/15 bg-black/40 shadow-xl">
              <img 
                src="/assets/payment-process/Screenshot-2026-05-05-220210.png" 
                alt="Schritt 6: Bezahlung abschließen"
                className="w-full h-auto object-cover max-h-[440px] mx-auto"
                loading="lazy"
              />
            </div>
          </section>

          {/* Completion Card */}
          <section className="rounded-2xl p-8 bg-gradient-to-br from-emerald-950/40 via-[#101420] to-[#101420] border border-emerald-500/30 text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Fertig! Du bist startklar (You Are Done)
            </h2>

            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Sobald die Zahlung abgeschlossen ist, wird dein Abonnement sofort aktiviert. Du erhältst deine Zugangsdaten und kannst dich direkt einloggen und deine Lieblingskanäle und Filme in bester 4K UHD Qualität genießen.
            </p>

            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Dieser Ablauf ist schnell, unkompliziert und absolut sicher konzipiert, damit du ohne Verzögerung oder Technikertermine sofort loslegen kannst.
            </p>

            {/* Direct Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onGoToPricing}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-xl shadow-lg shadow-red-900/50 transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-current" />
                Jetzt Paket auswählen & bestellen
              </button>

              <a
                href="https://wa.me/16614570833?text=Gr%C3%BC%C3%9F%20Gott%20IPTV%20%C3%96sterreich%2C%20ich%20habe%20eine%20Frage%20zum%20Zahlungsablauf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 rounded-xl border border-emerald-500/30 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Hilfe (+1 661 457 0833)
              </a>
            </div>
          </section>

        </div>

      </div>
    </article>
  );
};
