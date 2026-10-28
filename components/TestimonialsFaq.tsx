import React, { useState } from 'react';
import { Star, ChevronDown, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface TestimonialsFaqProps {
  onOpenTrial: () => void;
}

const REVIEWS = [
  {
    name: 'Markus E.',
    city: 'Wien (Döbling)',
    rating: 5,
    title: 'Endlich alle ADMIRAL Bundesliga Spiele ohne ruckeln',
    comment: 'Hatte vorher ständig Probleme bei anderen Anbietern während der Wiener Derbys. Bei IPTV Österreich läuft Sky Sport Austria und ORF 1 UHD über meinen Firestick 4K absolut stabil. Setup hat keine 3 Minuten gedauert.',
    date: 'Vor 3 Tagen verifiziert'
  },
  {
    name: 'Christian P.',
    city: 'Graz (Steiermark)',
    rating: 5,
    title: 'Perfekt für die Skihütte in Schladming',
    comment: 'Wir nutzen den Zugang am Hauptwohnsitz in Graz und am Wochenende in der Steiermark in der Hütte über einen Drei 5G Router. Bildqualität auf dem LG OLED ist atemberaubend.',
    date: 'Vor 1 Woche verifiziert'
  },
  {
    name: 'Sophie W.',
    city: 'Linz (Oberösterreich)',
    rating: 5,
    title: 'Kein Abo, kein Techniker, einfach top',
    comment: 'Vermieter hat Satellitenschüssel am Balkon verboten. Mit diesem IPTV brauche ich weder Kabel noch Schüssel. Einmal im Jahr 59,95€ gezahlt und Ruhe ist. Sehr netter WhatsApp Support!',
    date: 'Vor 2 Wochen verifiziert'
  }
];

const FAQS = [
  {
    q: 'Funktioniert IPTV Österreich bei jedem Internetanbieter?',
    a: 'Ja. Unser Dienst ist zu 100% netzneutral und funktioniert mit jedem österreichischen Provider wie A1 Telekom, Magenta, Drei, Liwest, Salzburg AG, Energie Steiermark oder lokalen Glasfasernetzen. Du benötigst keine spezielle Hardware deines Anbieters.'
  },
  {
    q: 'Brauche ich eine Satellitenschüssel oder einen Kabelanschluss?',
    a: 'Nein, weder noch! Das ist der entscheidende Vorteil: Es wird nichts an die Hausfassade montiert, keine Kabel durch Wände gezogen und kein Techniker muss zu dir nach Hause kommen. Du installierst einfach eine App auf deinem vorhandenen Smart TV oder Streaming-Stick.'
  },
  {
    q: 'Welche Programme sind enthalten?',
    a: 'Du erhältst Zugriff auf über 21.000 Live-Sender aus über 50 Ländern. Enthalten sind sämtliche österreichischen Sender (ORF 1 UHD, ORF 2 mit allen 9 Regionalprogrammen, ServusTV, Puls 4, ATV, Sky Sport Austria), deutsche Premium-Sender in 4K, Schweizer Sender (SRF 1 & 2), sowie über 120.000 Filme und Serien auf Abruf.'
  },
  {
    q: 'Kann ich den Zugang in einer Ferienwohnung oder am Zweitwohnsitz nutzen?',
    a: 'Ja! Dein Zugang ist personengebunden und nicht an deine Wohnadresse gekoppelt. Du kannst ihn zu Hause, in deiner Ferienwohnung in den Bergen oder unterwegs auf dem Tablet nutzen.'
  },
  {
    q: 'Wie schnell muss meine Internetverbindung sein?',
    a: 'Für Full HD Sender reichen bereits etwa 10 Mbit/s. Für native 4K UHD Streams mit 60fps empfehlen wir mindestens 25 Mbit/s. Ein 5-GHz WLAN oder eine direkte LAN-Kabelverbindung zum Smart TV sorgt für beste Resultate.'
  },
  {
    q: 'Fällt ein Technikertermin oder eine Montage an?',
    a: 'Nein. Es kommt niemand zu dir nach Hause. Auf dem Amazon Fire TV Stick installierst du unsere App direkt über den Downloader Code 5320406. Auf allen anderen Geräten (Smart TV, Android, Apple TV) installierst du einfach IPTV Smarters Pro oder TiviMate. Zugangsdaten eintragen und sofort fernsehen – dauert keine 2 Minuten.'
  },
  {
    q: 'Wie bezahle ich und entsteht dabei ein Abo?',
    a: 'Du zahlst einmalig für die gewünschte Laufzeit (z.B. per PayPal, Kreditkarte, Klarna/Sofort oder Krypto). Ein Abonnement entsteht dabei nicht: Deine Daten werden für keine wiederkehrenden Abbuchungen hinterlegt und der Zugang läuft nach Ablauf der Zeit einfach aus.'
  }
];

export const TestimonialsFaq: React.FC<TestimonialsFaqProps> = ({ onOpenTrial }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Score Banner */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-white font-mono">4.9 / 5</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Zufriedene Kunden in ganz Österreich
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Über 3.840 verifizierte Kunden in ganz Österreich schauen bereits täglich über IPTV Österreich. Gestochen scharfes 4K Fernsehen ohne Vertrag und ohne Ausfälle.
          </p>
        </div>

        {/* Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#101420] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verifiziert
                  </span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">
                  "{rev.title}"
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="font-medium text-white">{rev.name}</span>
                <span className="text-slate-400 text-[11px]">{rev.city}</span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
              Häufige Fragen
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
              Häufige Fragen aus Österreich
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Das fragen uns österreichische Kunden am häufigsten vor der Bestellung.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#101420] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 text-white font-medium text-sm sm:text-base hover:text-red-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-red-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Support Direct */}
          <div className="mt-14 rounded-2xl p-8 bg-[#101420] border border-white/10 text-center">
            <h3 className="text-xl font-bold text-white font-display">
              Noch Fragen? Schreib uns direkt
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
              Unser deutschsprachiger Support ist täglich erreichbar – meist antworten wir innerhalb von wenigen Minuten.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/16614570833?text=Hallo%20IPTV%20Österreich,%20ich%20habe%20eine%20Frage%20zu%20einem%20Paket"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp (+1 661 457 0833)
              </a>
              <a
                href="https://t.me/Davidsimo1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
                Telegram (@Davidsimo1)
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
