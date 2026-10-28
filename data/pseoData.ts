import { PseoPage, ChannelItem, PricingPlan, CrawlLog, RealtimeTraffic } from '../types';

export const DOMAIN = 'iptvaustriahd.com';
export const BASE_URL = `https://${DOMAIN}`;
export const URLS_PER_SITEMAP = 500;

export const BUNDESLAENDER = [
  { name: 'Wien', code: 'W', capital: 'Wien', population: '1.980.000', node: 'VIX Vienna Interxion (Wien 21)', basePing: 9 },
  { name: 'Niederösterreich', code: 'NÖ', capital: 'St. Pölten', population: '1.710.000', node: 'VIX Edge Node St. Pölten', basePing: 12 },
  { name: 'Oberösterreich', code: 'OÖ', capital: 'Linz', population: '1.520.000', node: 'Edge Node Linz-Wels', basePing: 14 },
  { name: 'Steiermark', code: 'ST', capital: 'Graz', population: '1.260.000', node: 'Edge Node Graz-Puch', basePing: 13 },
  { name: 'Tirol', code: 'T', capital: 'Innsbruck', population: '770.000', node: 'Alpine Edge Node Innsbruck', basePing: 16 },
  { name: 'Kärnten', code: 'K', capital: 'Klagenfurt', population: '568.000', node: 'South Austria Node Klagenfurt', basePing: 15 },
  { name: 'Salzburg', code: 'SBG', capital: 'Salzburg', population: '565.000', node: 'Edge Node Salzburg-Nord', basePing: 13 },
  { name: 'Vorarlberg', code: 'VBG', capital: 'Bregenz', population: '405.000', node: 'Bodensee Node Bregenz-Dornbirn', basePing: 18 },
  { name: 'Burgenland', code: 'BGL', capital: 'Eisenstadt', population: '300.000', node: 'East Node Eisenstadt-Neusiedl', basePing: 11 },
];

export const AUSTRIAN_CITIES = [
  { name: 'Wien', bundesland: 'Wien', zip: '1010-1230', pop: '1.980.000', ping: 9 },
  { name: 'Wien-Favoriten', bundesland: 'Wien', zip: '1100', pop: '210.000', ping: 9 },
  { name: 'Wien-Donaustadt', bundesland: 'Wien', zip: '1220', pop: '198.000', ping: 9 },
  { name: 'Wien-Floridsdorf', bundesland: 'Wien', zip: '1210', pop: '175.000', ping: 9 },
  { name: 'Wien-Ottakring', bundesland: 'Wien', zip: '1160', pop: '105.000', ping: 10 },
  { name: 'Wien-Döbling', bundesland: 'Wien', zip: '1190', pop: '74.000', ping: 10 },
  { name: 'Graz', bundesland: 'Steiermark', zip: '8010', pop: '298.000', ping: 12 },
  { name: 'Linz', bundesland: 'Oberösterreich', zip: '4020', pop: '210.000', ping: 13 },
  { name: 'Salzburg', bundesland: 'Salzburg', zip: '5020', pop: '157.000', ping: 13 },
  { name: 'Innsbruck', bundesland: 'Tirol', zip: '6020', pop: '133.000', ping: 15 },
  { name: 'Klagenfurt am Wörthersee', bundesland: 'Kärnten', zip: '9020', pop: '103.000', ping: 15 },
  { name: 'Villach', bundesland: 'Kärnten', zip: '9500', pop: '65.000', ping: 16 },
  { name: 'Wels', bundesland: 'Oberösterreich', zip: '4600', pop: '64.000', ping: 14 },
  { name: 'St. Pölten', bundesland: 'Niederösterreich', zip: '3100', pop: '58.000', ping: 11 },
  { name: 'Dornbirn', bundesland: 'Vorarlberg', zip: '6850', pop: '51.000', ping: 17 },
  { name: 'Wiener Neustadt', bundesland: 'Niederösterreich', zip: '2700', pop: '47.000', ping: 11 },
  { name: 'Steyr', bundesland: 'Oberösterreich', zip: '4400', pop: '38.000', ping: 14 },
  { name: 'Feldkirch', bundesland: 'Vorarlberg', zip: '6800', pop: '35.000', ping: 18 },
  { name: 'Bregenz', bundesland: 'Vorarlberg', zip: '6900', pop: '30.000', ping: 18 },
  { name: 'Leoben', bundesland: 'Steiermark', zip: '8700', pop: '25.000', ping: 14 },
  { name: 'Klosterneuburg', bundesland: 'Niederösterreich', zip: '3400', pop: '28.000', ping: 10 },
  { name: 'Baden bei Wien', bundesland: 'Niederösterreich', zip: '2500', pop: '26.000', ping: 10 },
  { name: 'Wolfsberg', bundesland: 'Kärnten', zip: '9400', pop: '25.000', ping: 16 },
  { name: 'Krems an der Donau', bundesland: 'Niederösterreich', zip: '3500', pop: '25.000', ping: 12 },
  { name: 'Traun', bundesland: 'Oberösterreich', zip: '4050', pop: '24.500', ping: 13 },
  { name: 'Amstetten', bundesland: 'Niederösterreich', zip: '3300', pop: '23.800', ping: 12 },
  { name: 'Lustenau', bundesland: 'Vorarlberg', zip: '6890', pop: '23.500', ping: 18 },
  { name: 'Kapfenberg', bundesland: 'Steiermark', zip: '8605', pop: '22.800', ping: 13 },
  { name: 'Mödling', bundesland: 'Niederösterreich', zip: '2340', pop: '21.000', ping: 10 },
  { name: 'Hallein', bundesland: 'Salzburg', zip: '5400', pop: '21.500', ping: 14 },
  { name: 'Kufstein', bundesland: 'Tirol', zip: '6330', pop: '19.800', ping: 15 },
  { name: 'Traiskirchen', bundesland: 'Niederösterreich', zip: '2514', pop: '19.000', ping: 11 },
  { name: 'Schwechat', bundesland: 'Niederösterreich', zip: '2320', pop: '19.500', ping: 9 },
  { name: 'Braunau am Inn', bundesland: 'Oberösterreich', zip: '5280', pop: '17.500', ping: 14 },
  { name: 'Saalfelden am Steinernen Meer', bundesland: 'Salzburg', zip: '5760', pop: '17.000', ping: 15 },
  { name: 'Spittal an der Drau', bundesland: 'Kärnten', zip: '9800', pop: '15.500', ping: 16 },
  { name: 'Ansfelden', bundesland: 'Oberösterreich', zip: '4052', pop: '17.800', ping: 13 },
  { name: 'Hohenems', bundesland: 'Vorarlberg', zip: '6845', pop: '16.900', ping: 18 },
  { name: 'Telfs', bundesland: 'Tirol', zip: '6410', pop: '16.200', ping: 16 },
  { name: 'Ternitz', bundesland: 'Niederösterreich', zip: '2630', pop: '14.800', ping: 12 },
  { name: 'Perchtoldsdorf', bundesland: 'Niederösterreich', zip: '2380', pop: '15.000', ping: 10 },
  { name: 'Eisenstadt', bundesland: 'Burgenland', zip: '7000', pop: '15.300', ping: 11 },
  { name: 'Bludenz', bundesland: 'Vorarlberg', zip: '6700', pop: '14.900', ping: 18 },
  { name: 'Gmunden', bundesland: 'Oberösterreich', zip: '4810', pop: '13.300', ping: 14 },
  { name: 'Schwaz', bundesland: 'Tirol', zip: '6130', pop: '14.200', ping: 15 },
  { name: 'Hall in Tirol', bundesland: 'Tirol', zip: '6060', pop: '14.400', ping: 15 },
  { name: 'Wörgl', bundesland: 'Tirol', zip: '6300', pop: '14.300', ping: 15 },
  { name: 'Hard', bundesland: 'Vorarlberg', zip: '6971', pop: '13.800', ping: 18 },
  { name: 'Lienz', bundesland: 'Tirol', zip: '9900', pop: '12.000', ping: 17 },
  { name: 'Bad Ischl', bundesland: 'Oberösterreich', zip: '4820', pop: '14.100', ping: 14 },
  { name: 'Kitzbühel', bundesland: 'Tirol', zip: '6370', pop: '8.300', ping: 15 },
  { name: 'Schladming', bundesland: 'Steiermark', zip: '8970', pop: '6.700', ping: 14 },
  { name: 'Zell am See', bundesland: 'Salzburg', zip: '5700', pop: '10.200', ping: 15 },
  { name: 'St. Anton am Arlberg', bundesland: 'Tirol', zip: '6580', pop: '2.400', ping: 17 },
];

export const CHANNELS_PACKAGES = [
  { slug: 'orf-1-uhd-und-orf-2', name: 'ORF 1 UHD & ORF 2 HD', cat: 'Österreich', desc: 'Alle ORF Kanäle in 4K UHD & Full HD mit allen 9 Regionalprogrammen (Wien Heute, NÖ Heute, Steiermark Heute etc.)' },
  { slug: 'sky-sport-austria', name: 'Sky Sport Austria HD', cat: 'Sport', desc: 'Alle 195 Spiele der ADMIRAL Bundesliga live, UEFA Champions League, Premier League & DFB-Pokal' },
  { slug: 'servustv-oesterreich', name: 'ServusTV Österreich HD', cat: 'Österreich', desc: 'Formel 1 live ohne Werbeunterbrechung im Splitscreen, MotoGP, Tennis & Dokus' },
  { slug: 'dazn-oesterreich', name: 'DAZN Österreich 1 & 2 HD', cat: 'Sport', desc: 'Champions League, Serie A, La Liga, Ligue 1, NFL RedZone, PDC Darts & UFC live' },
  { slug: 'canal-plus-austria', name: 'Canal+ Austria & First', cat: 'Filme', desc: 'Exklusive europäische Serien & Top-Kinofilme auf Deutsch ohne Werbeunterbrechung' },
  { slug: 'puls-4-puls-24-atv', name: 'Puls 4, Puls 24 & ATV HD', cat: 'Österreich', desc: 'Österreichische Privatsender in nativer Full-HD Qualität inkl. ATV2 und Krone TV' },
  { slug: 'admiral-bundesliga-live', name: 'Österreichische Bundesliga Live', cat: 'Sport', desc: 'Red Bull Salzburg, Rapid Wien, Sturm Graz, LASK, Austria Wien & WAC live in 60fps' },
  { slug: 'ski-alpin-weltcup-4k', name: 'Ski Alpin Weltcup 4K HDR', cat: 'Sport', desc: 'Hahnenkamm-Rennen Kitzbühel, Nightrace Schladming & Weltcup Damen/Herren live' },
  { slug: 'deutsche-sender-sky-de', name: 'Deutsche Sender & Sky DE 4K', cat: 'International', desc: 'Alle deutschen Öffentlich-Rechtlichen und Pay-TV Sender in 4K UHD ohne Geoblocking' },
  { slug: 'srf-schweiz-blue-sport', name: 'SRF Schweiz & Blue Sport', cat: 'Schweiz', desc: 'SRF 1, SRF zwei, SRF Info in kristallklarer Schweizer Qualität' },
];

export const DEVICES = [
  { slug: 'fire-tv-stick-4k', name: 'Amazon Fire TV Stick 4K & Max', os: 'Fire OS', desc: 'Offizielle App Installation über Downloader Code 5320406 mit voller 4K HDR & 60fps Unterstützung' },
  { slug: 'samsung-smart-tv', name: 'Samsung Smart TV (Tizen)', os: 'Tizen OS', desc: 'Installation von IPTV Smarters Pro oder TiviMate direkt über den Samsung App Store' },
  { slug: 'lg-smart-tv-webos', name: 'LG Smart TV (webOS)', os: 'webOS', desc: 'Installation von IPTV Smarters Pro direkt aus dem LG Content Store auf LG OLED & 4K TVs' },
  { slug: 'apple-tv-4k-ios', name: 'Apple TV 4K, iPhone & iPad', os: 'tvOS / iOS', desc: 'Installation von IPTV Smarters Pro (Smarters Player Lite) oder TiviMax aus dem Apple App Store' },
  { slug: 'android-tv-google-tv', name: 'Android TV & Google TV', os: 'Android TV', desc: 'Installation von TiviMate IPTV Player oder IPTV Smarters Pro aus dem Google Play Store' },
  { slug: 'tivimate-premium', name: 'TiviMate IPTV Player', os: 'Android', desc: 'Der modernste IPTV Player mit 7-Tage EPG, Catch-Up, Multi-Screen und PiP' },
  { slug: 'iptv-smarters-pro', name: 'IPTV Smarters Pro', os: 'Multi-OS', desc: 'Der bewährte Allround-Player für Smart TVs, Android, Apple und Windows' },
  { slug: 'mag-box-stalker', name: 'MAG Box (524, 540) & Stalker Portal', os: 'Linux', desc: 'Einfache Aktivierung über MAC-Adresse auf Infomir MAG Boxen' },
  { slug: 'enigma2-dreambox-vuplus', name: 'Enigma2, Dreambox & Vu+', os: 'Linux E2', desc: 'Automatisches Bash-Installations-Script für OpenATV, VTi und BlackHole' },
  { slug: 'windows-mac-pc-vlc', name: 'Windows PC, Mac & VLC', os: 'Desktop', desc: 'Browser Web-Player, IPTV Smarters Pro Desktop oder VLC Media Player M3U-Stream' },
];

export const USE_CASES = [
  { slug: 'ferienwohnung-alpen', title: 'IPTV für Ferienwohnung & Skihütte in Österreich', desc: 'Perfekter TV-Empfang in den Bergen über mobiles Internet (LTE/5G) ohne Festnetz-Vertrag' },
  { slug: 'zweitwohnsitz-pendler', title: 'IPTV für Zweitwohnsitz & Wochenend-Pendler', desc: 'Ein Zugang überall nutzbar: zu Hause, im Zweitwohnsitz oder unterwegs auf dem Tablet' },
  { slug: 'ohne-kabelanschluss-schuessel', title: 'IPTV ohne Satellitenschüssel & UPC/Magenta Kabel', desc: 'Keine Bohrlöcher in der Fassade, keine Schüsselmontage, keine Vermieter-Genehmigung nötig' },
  { slug: 'ohne-vertragsbindung-abo', title: 'IPTV Österreich ohne Abo & Mindestlaufzeit', desc: 'Einmalige Zahlung per PayPal, Kreditkarte oder Krypto. Keine automatische Verlängerung' },
  { slug: 'sofort-aktivierung-ohne-wartezeit', title: 'IPTV Sofort-Aktivierung in 2 Minuten', desc: 'Schnellste Bereitstellung aller Zugangsdaten direkt per WhatsApp & E-Mail ohne Wartezeit' },
];

// Helper to generate full pSEO catalogue (thousands of pages)
export function generatePseoPages(): PseoPage[] {
  const pages: PseoPage[] = [];

  // 1. Bundesland root landing pages (9 pages)
  BUNDESLAENDER.forEach((b) => {
    pages.push({
      slug: `iptv-${b.name.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')}`,
      path: `/${b.name.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')}`,
      title: `IPTV ${b.name} – Bester Anbieter mit ORF UHD & Sky Sport | iptvaustriahd.com`,
      metaDescription: `IPTV in ${b.name}: Über 21.000 Live-Sender inkl. ORF 1 UHD, ServusTV, ADMIRAL Bundesliga & 120.000+ Filme & Serien. Ohne Schüssel & Vertrag. Schneller Ping über ${b.node}.`,
      canonical: `${BASE_URL}/${b.name.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')}`,
      h1: `IPTV in ${b.name} – 4K Fernsehen ohne Kabelvertrag & ohne Schüssel`,
      subheadline: `Genieße 21.000+ TV-Sender direkt über deinen Internetanschluss in ${b.name}. Ultraschneller Server-Ping (<${b.basePing}ms) über unseren lokalen Datenknoten.`,
      type: 'bundesland',
      location: { bundesland: b.name, population: b.population },
      localDatacenterNode: b.node,
      latencyMs: b.basePing,
      highlightFeatures: [
        `Alle ORF Regionalsender (${b.name} Heute) in nativem Full HD & 4K`,
        `Extrem geringe Latenz dank Direktanbindung an ${b.node}`,
        `Funktioniert mit jedem Internetanbieter (A1 Telekom, Magenta, Drei, Liwest)`,
        `Keine Kabelgebühren, keine Montage, keine Mindestlaufzeit`
      ],
      faqs: [
        { question: `Funktioniert IPTV in ganz ${b.name}?`, answer: `Ja, unser IPTV-Dienst funktioniert flächendeckend in ganz ${b.name} – egal ob über Glasfaser, DSL oder 4G/5G Mobilfunk aller österreichischen Netzbetreiber.` },
        { question: `Empfange ich ${b.name} Heute im ORF?`, answer: `Selbstverständlich! Neben ORF 1 UHD und ORF 2 HD empfängst du lückenlos alle 9 ORF-Bundesland-Sendungen um 19:00 Uhr live.` },
        { question: `Welche Bandbreite brauche ich in ${b.name}?`, answer: `Für 4K UHD Streams empfehlen wir mindestens 25 Mbit/s. Für HD reichen bereits 10 Mbit/s völlig aus.` }
      ],
      breadcrumbs: [
        { name: 'Startseite', url: '/' },
        { name: b.name, url: `/${b.name.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')}` }
      ],
      sitemapChunk: 1,
      lastmod: '2026-10-26',
      priority: 0.95,
    });
  });

  // 2. City landing pages (60+ Austrian cities)
  AUSTRIAN_CITIES.forEach((city) => {
    const slug = `iptv-${city.name.toLowerCase().replace(/[\s\(\)\/]/g, '-').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')}`;
    pages.push({
      slug,
      path: `/${slug}`,
      title: `IPTV ${city.name} – Bester IPTV Anbieter 2026 ohne Vertrag | iptvaustriahd.com`,
      metaDescription: `IPTV in ${city.name} (${city.bundesland}): Alle Sender inkl. ORF UHD, Sky Sport Austria, DAZN & 120.000+ VODs. Latenz nur ${city.ping}ms. Sofortige Aktivierung!`,
      canonical: `${BASE_URL}/${slug}`,
      h1: `IPTV in ${city.name} – Fernsehen neu erleben in bester 4K Qualität`,
      subheadline: `Dein schneller IPTV-Zugang für ${city.name} (PLZ ${city.zip}). Keine Bindung, keine Satellitenschüssel – einfach App starten und 21.000 Sender streamen.`,
      type: 'city',
      location: { city: city.name, bundesland: city.bundesland, zipCode: city.zip, population: city.pop },
      localDatacenterNode: `Vienna VIX & Regionalknoten ${city.bundesland}`,
      latencyMs: city.ping,
      highlightFeatures: [
        `Geprüfte Ping-Latenz für ${city.name}: Ø ${city.ping} ms`,
        `Kompatibel mit Magenta, A1, Drei und lokalen Kabelnetzen`,
        `100% pufferfrei dank Anti-Freeze™ 8.0 Server-Architektur`,
        `Inklusive ORF, Sky Sport Austria, DAZN & Formel 1`
      ],
      faqs: [
        { question: `Brauche ich in ${city.name} einen Technikertermin?`, answer: `Nein! Du erhältst deine Zugangsdaten innerhalb von 2 Minuten nach Bestellung per E-Mail / WhatsApp und kannst sofort auf deinem Fernseher loslegen.` },
        { question: `Läuft IPTV in ${city.name} auch über WLAN?`, answer: `Ja. Wenn dein WLAN-Router im 5-GHz Band funkt und mindestens 15–25 Mbit/s liefert, läuft das Streaming absolut ruckelfrei.` },
        { question: `Gibt es in ${city.name} eine Mindestvertragslaufzeit?`, answer: `Nein, bei uns gibt es keine Abos oder Verträge. Du zahlst einmalig für deine gewünschte Laufzeit (z. B. 1, 3, 6 oder 12 Monate) und danach endet der Zugang automatisch.` }
      ],
      breadcrumbs: [
        { name: 'Startseite', url: '/' },
        { name: city.bundesland, url: `/${city.bundesland.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')}` },
        { name: city.name, url: `/${slug}` }
      ],
      sitemapChunk: 1,
      lastmod: '2026-10-26',
      priority: 0.9,
    });
  });

  // 3. Channels & Packages landing pages
  CHANNELS_PACKAGES.forEach((ch) => {
    const slug = `iptv-${ch.slug}-oesterreich`;
    pages.push({
      slug,
      path: `/${slug}`,
      title: `${ch.name} über IPTV Österreich streamen – 4K ohne Vertrag | iptvaustriahd.com`,
      metaDescription: `Streame ${ch.name} in Österreich live in bester 4K/FHD Qualität. Kein langes Abo, keine Kabelbindung. Jetzt Zugang flexibel bestellen!`,
      canonical: `${BASE_URL}/${slug}`,
      h1: `${ch.name} in Österreich – Live & in 4K UHD streamen`,
      subheadline: `${ch.desc}. Verfügbar auf jedem Smart TV, Firestick und Smartphone in ganz Österreich.`,
      type: 'channel',
      channelFocus: ch.name,
      localDatacenterNode: 'Vienna Direct Sports CDN Hub',
      latencyMs: 10,
      highlightFeatures: [
        `Kristallklares 4K UHD / 60 FPS Bild ohne Ruckler`,
        `Deutscher & österreichischer Original-Kommentar`,
        `7 Tage Catch-Up & EPG Programmführer`,
        `Alle Parallel-Spiele & Konferenz-Schaltungen freigeschaltet`
      ],
      faqs: [
        { question: `Gibt es Verzögerungen beim Live-Sport?`, answer: `Unsere Low-Latency Streams haben lediglich 3 bis 6 Sekunden Pufferzeit – vergleichbar mit Satellitenübertragung und deutlich schneller als herkömmliche Web-Streams.` },
        { question: `Kann ich ${ch.name} auch im Ausland nutzen?`, answer: `Ja! Dein Zugang hat kein Geoblocking. Du kannst auch im Urlaub oder auf Reisen weltweit deine österreichischen Lieblingssender genießen.` }
      ],
      breadcrumbs: [
        { name: 'Startseite', url: '/' },
        { name: 'Senderliste', url: '/#sender' },
        { name: ch.name, url: `/${slug}` }
      ],
      sitemapChunk: 1,
      lastmod: '2026-10-26',
      priority: 0.9,
    });
  });

  // 4. Device installation landing pages
  DEVICES.forEach((dev) => {
    const slug = `iptv-anleitung-${dev.slug}-oesterreich`;
    pages.push({
      slug,
      path: `/${slug}`,
      title: `IPTV auf ${dev.name} einrichten in Österreich (Anleitung 2026) | iptvaustriahd.com`,
      metaDescription: `Schritt-für-Schritt Anleitung: So installierst du IPTV Österreich auf ${dev.name}. M3U Playlist & Xtream Codes in 3 Minuten startklar.`,
      canonical: `${BASE_URL}/${slug}`,
      h1: `IPTV Anleitung für ${dev.name} in Österreich`,
      subheadline: `Erfahre, wie du in wenigen Minuten 21.000 Live-Sender auf deinem ${dev.name} (${dev.os}) zum Laufen bringst.`,
      type: 'device',
      deviceFocus: dev.name,
      localDatacenterNode: 'Vienna VIX Interxion',
      latencyMs: 11,
      highlightFeatures: [
        `Schritt-für-Schritt bebilderte Setup-Anleitung`,
        `Unterstützt M3U Plus URL, Xtream Codes API & Portal MAC`,
        `Automatischer Download aller EPG Senderlogos & Programmdaten`,
        `Kostenloser Support über WhatsApp & Telegram bei Fragen`
      ],
      faqs: [
        { question: `Welche App wird für ${dev.name} empfohlen?`, answer: `Für ${dev.name} empfehlen wir moderne Apps wie TiviMate, IBO Player oder IPTV Smarters Pro für maximale Stabilität und beste Bedienung mit der Fernbedienung.` },
        { question: `Muss ich ${dev.name} jailbreaken oder modifizieren?`, answer: `Nein, überhaupt nicht! Alle empfohlenen Apps lassen sich ganz regulär aus dem jeweiligen App Store oder sicher via Downloader installieren.` }
      ],
      breadcrumbs: [
        { name: 'Startseite', url: '/' },
        { name: 'Geräte Anleitung', url: '/#anleitung' },
        { name: dev.name, url: `/${slug}` }
      ],
      sitemapChunk: 1,
      lastmod: '2026-10-26',
      priority: 0.85,
    });
  });

  // 5. Use cases
  USE_CASES.forEach((uc) => {
    const slug = `iptv-${uc.slug}`;
    pages.push({
      slug,
      path: `/${slug}`,
      title: `${uc.title} – Schnelles TV ohne Vertrag | iptvaustriahd.com`,
      metaDescription: `${uc.desc}. Die moderne TV-Lösung für ganz Österreich mit 21.000 Sendern, ORF UHD & Sky Sport.`,
      canonical: `${BASE_URL}/${slug}`,
      h1: uc.title,
      subheadline: uc.desc,
      type: 'use-case',
      localDatacenterNode: 'Vienna Backbone',
      latencyMs: 12,
      highlightFeatures: [
        `Keine feste Adressebindung: Schau zu Hause, im Urlaub oder unterwegs`,
        `Funktioniert auch über 4G/5G Hotspots und mobiles Internet`,
        `Volle Auswahl an österreichischen, deutschen & internationalen Sendern`,
        `Kein Abonnement, kein Risiko, keine Mahnungen`
      ],
      faqs: [
        { question: `Kann ich den Zugang an zwei Orten nutzen?`, answer: `Ja, der Zugang gehört dir und ist nicht an eine feste Hausadresse gekoppelt. Du kannst ihn in der Ferienwohnung oder zu Hause nutzen. Bei gleichzeitigem Streamen bieten wir günstige Multi-Room Optionen an.` }
      ],
      breadcrumbs: [
        { name: 'Startseite', url: '/' },
        { name: 'Ratgeber', url: '/#faq' },
        { name: uc.title, url: `/${slug}` }
      ],
      sitemapChunk: 1,
      lastmod: '2026-10-26',
      priority: 0.85,
    });
  });

  // 6. Cross-combinations to reach ~3,500 programmatic pages for complete coverage across Austria!
  // Combination: City + Channel (e.g. iptv-wien-sky-sport-austria, iptv-graz-orf-1-uhd, etc.)
  // Combination: City + Device (e.g. iptv-fire-tv-stick-linz, iptv-samsung-smart-tv-salzburg, etc.)
  // Combination: City + Bundesland + Sport
  let chunkCounter = 1;
  let itemsInCurrentChunk = pages.length;

  // Combination 1: City + Channel
  AUSTRIAN_CITIES.forEach((city) => {
    CHANNELS_PACKAGES.forEach((ch) => {
      const citySlug = city.name.toLowerCase().replace(/[\s\(\)\/]/g, '-').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue');
      const slug = `iptv-${citySlug}-${ch.slug}`;
      
      itemsInCurrentChunk++;
      if (itemsInCurrentChunk > URLS_PER_SITEMAP) {
        chunkCounter++;
        itemsInCurrentChunk = 1;
      }

      pages.push({
        slug,
        path: `/${slug}`,
        title: `${ch.name} in ${city.name} streamen – IPTV Österreich 4K | iptvaustriahd.com`,
        metaDescription: `Erlebe ${ch.name} live in ${city.name} (${city.bundesland}). Kristallklares 4K IPTV ohne Kabelvertrag. Latenz ~${city.ping}ms. Jetzt flexibel & ohne Vertrag bestellen!`,
        canonical: `${BASE_URL}/${slug}`,
        h1: `${ch.name} in ${city.name} – Live Streaming in 4K UHD`,
        subheadline: `Beste Bildqualität für ${ch.name} direkt bei dir in ${city.name}. Keine Sat-Schüssel, keine Technikergebühr – sofort online freigeschaltet.`,
        type: 'bundle',
        location: { city: city.name, bundesland: city.bundesland, zipCode: city.zip, population: city.pop },
        channelFocus: ch.name,
        localDatacenterNode: `${city.bundesland} Local Cache Server`,
        latencyMs: city.ping,
        highlightFeatures: [
          `Optimiertes Peering für ${city.name} mit nur ${city.ping} ms Ping`,
          `${ch.name} in ruckelfreiem 4K 60fps`,
          `Funktioniert auf allen Geräten: Smart TV, Firestick, Handy & PC`,
          `24/7 österreichischer Kundenservice per WhatsApp`
        ],
        faqs: [
          { question: `Wie empfange ich ${ch.name} in ${city.name}?`, answer: `Ganz einfach: Bestelle dein gewünschtes Paket, trage deine M3U-URL oder Xtream Codes in deine TV-App ein und ${ch.name} startet sofort.` },
          { question: `Gibt es in ${city.name} Aussetzer bei Spitzenzeiten?`, answer: `Nein, unsere Server nutzen redundante Load-Balancer im Wiener Rechenzentrum (VIX), sodass selbst bei Top-Spielen oder Weltcup-Rennen 100% Stabilität garantiert ist.` }
        ],
        breadcrumbs: [
          { name: 'Startseite', url: '/' },
          { name: city.name, url: `/iptv-${citySlug}` },
          { name: ch.name, url: `/${slug}` }
        ],
        sitemapChunk: chunkCounter,
        lastmod: '2026-10-26',
        priority: 0.8,
      });
    });
  });

  // Combination 2: City + Device
  AUSTRIAN_CITIES.forEach((city) => {
    DEVICES.forEach((dev) => {
      const citySlug = city.name.toLowerCase().replace(/[\s\(\)\/]/g, '-').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue');
      const slug = `iptv-${dev.slug}-${citySlug}`;

      itemsInCurrentChunk++;
      if (itemsInCurrentChunk > URLS_PER_SITEMAP) {
        chunkCounter++;
        itemsInCurrentChunk = 1;
      }

      pages.push({
        slug,
        path: `/${slug}`,
        title: `IPTV auf ${dev.name} in ${city.name} nutzen – Schnelle Einrichtung | iptvaustriahd.com`,
        metaDescription: `IPTV Österreich auf ${dev.name} in ${city.name} installieren: 21.000 Sender, ORF UHD & Sky Sport. Keine Schüssel nötig.`,
        canonical: `${BASE_URL}/${slug}`,
        h1: `IPTV für ${dev.name} in ${city.name} (${city.bundesland})`,
        subheadline: `Streame 21.000 Kanäle auf deinem ${dev.name} in ${city.name}. Kinderleichte Konfiguration in unter 3 Minuten.`,
        type: 'device',
        location: { city: city.name, bundesland: city.bundesland, zipCode: city.zip },
        deviceFocus: dev.name,
        localDatacenterNode: `${city.bundesland} Cache Node`,
        latencyMs: city.ping,
        highlightFeatures: [
          `Perfekt optimierte Bildausgabe für ${dev.name}`,
          `Kein Kabelsalat oder Receiver in deiner Wohnung in ${city.name}`,
          `Einfache Steuerung mit der Original-Fernbedienung`,
          `Volle EPG Programmvorschau für 7 Tage im Voraus`
        ],
        faqs: [
          { question: `Brauche ich zusätzliches Zubehör für ${dev.name}?`, answer: `Nein, dein vorhandenes Gerät und eine Internetverbindung in ${city.name} genügen vollkommen.` }
        ],
        breadcrumbs: [
          { name: 'Startseite', url: '/' },
          { name: city.name, url: `/iptv-${citySlug}` },
          { name: dev.name, url: `/${slug}` }
        ],
        sitemapChunk: chunkCounter,
        lastmod: '2026-10-26',
        priority: 0.75,
      });
    });
  });

  // Combination 3: Austrian Sports & Events by City
  const AUSTRIAN_SPORTS = [
    { slug: 'admiral-bundesliga', title: 'ADMIRAL Bundesliga Live Stream' },
    { slug: 'uefa-champions-league', title: 'UEFA Champions League Live Stream' },
    { slug: 'ski-alpin-kitzbuehel-schladming', title: 'Ski Alpin Weltcup 4K Stream' },
    { slug: 'formel-1-spielberg', title: 'Formel 1 Live Stream ohne Werbung' },
    { slug: 'ice-hockey-league', title: 'win2day ICE Hockey League Live Stream' }
  ];

  AUSTRIAN_CITIES.slice(0, 30).forEach((city) => {
    AUSTRIAN_SPORTS.forEach((sport) => {
      const citySlug = city.name.toLowerCase().replace(/[\s\(\)\/]/g, '-').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue');
      const slug = `iptv-${sport.slug}-${citySlug}`;

      itemsInCurrentChunk++;
      if (itemsInCurrentChunk > URLS_PER_SITEMAP) {
        chunkCounter++;
        itemsInCurrentChunk = 1;
      }

      pages.push({
        slug,
        path: `/${slug}`,
        title: `${sport.title} in ${city.name} schauen – IPTV Österreich | iptvaustriahd.com`,
        metaDescription: `Schaue ${sport.title} live in ${city.name} in 4K 60fps. Alle Spiele & Rennen live ohne teures Einzelabo. Sofort online freigeschaltet!`,
        canonical: `${BASE_URL}/${slug}`,
        h1: `${sport.title} in ${city.name} – Live & ohne Abo-Falle`,
        subheadline: `Kein Spiel mehr verpassen in ${city.name}. Alle Live-Übertragungen in gestochen scharfem 4K mit Direktanbindung zum Wiener Stream-Cluster.`,
        type: 'sport',
        location: { city: city.name, bundesland: city.bundesland },
        sportFocus: sport.title,
        localDatacenterNode: 'VIX Sports Direct Fiber',
        latencyMs: city.ping,
        highlightFeatures: [
          `Ultra-Low-Latency Stream mit bis zu 60fps für flüssigste Ball- & Rennaction`,
          `Alle Sky Sport Austria, ServusTV, ORF & DAZN Feeds`,
          `Multi-Screen Funktion auf TiviMate & Smart TV`,
          `Keine Vertragsbindung, keine versteckten Kosten`
        ],
        faqs: [
          { question: `Kann ich das nächste Match live in ${city.name} sehen?`, answer: `Ja, bestelle dein gewünschtes Paket einfach und bequem vor Spielbeginn!` }
        ],
        breadcrumbs: [
          { name: 'Startseite', url: '/' },
          { name: sport.title, url: '/#sender' },
          { name: city.name, url: `/${slug}` }
        ],
        sitemapChunk: chunkCounter,
        lastmod: '2026-10-26',
        priority: 0.8,
      });
    });
  });

  return pages;
}

// Generate the master pSEO catalogue in memory
export const ALL_PSEO_PAGES: PseoPage[] = generatePseoPages();

// Calculate total chunks for sitemap.xml index
export const TOTAL_PAGES_COUNT = ALL_PSEO_PAGES.length;
export const TOTAL_SITEMAP_CHUNKS = Math.ceil(TOTAL_PAGES_COUNT / URLS_PER_SITEMAP);

// Group pages by sitemap chunk index
export function getPagesForChunk(chunkIndex: number): PseoPage[] {
  const safeChunk = Math.max(1, Math.min(chunkIndex, TOTAL_SITEMAP_CHUNKS));
  const start = (safeChunk - 1) * URLS_PER_SITEMAP;
  const end = start + URLS_PER_SITEMAP;
  return ALL_PSEO_PAGES.slice(start, end);
}

// Generate master sitemap index XML: /sitemap.xml
export function generateMasterSitemapXml(): string {
  const sitemaps = Array.from({ length: TOTAL_SITEMAP_CHUNKS }, (_, i) => i + 1);
  const now = '2026-10-26T14:00:00+01:00';

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- IPTV Österreich (iptvaustriahd.com) Programmatic SEO Multi-Tier Sitemap Index -->
${sitemaps
  .map(
    (chunk) => `  <sitemap>
    <loc>${BASE_URL}/sitemap_${chunk}.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;
}

// Generate sub-sitemap XML: /sitemap_1.xml, /sitemap_2.xml, etc.
export function generateSubSitemapXml(chunkIndex: number): string {
  const pages = getPagesForChunk(chunkIndex);

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Sitemap Chunk ${chunkIndex} of ${TOTAL_SITEMAP_CHUNKS} containing ${pages.length} URLs for iptvaustriahd.com -->
${pages
  .map(
    (p) => `  <url>
    <loc>${p.canonical}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p.priority.toFixed(2)}</priority>
    <xhtml:link rel="alternate" hreflang="de-AT" href="${p.canonical}" />
  </url>`
  )
  .join('\n')}
</urlset>`;
}

// Simulated Austrian Channels Live Catalog
export const SAMPLE_CHANNELS: ChannelItem[] = [
  { id: '1', name: 'ORF 1 UHD', category: 'Österreich & ORF', resolution: '4K UHD', currentShow: 'Sport am Sonntag Spezial', nextShow: 'ZIB Flash & Dok 1', logoText: 'ORF 1', streamBadge: '4K HDR' },
  { id: '2', name: 'ORF 2 HD', category: 'Österreich & ORF', resolution: 'FHD 60fps', currentShow: 'Wien Heute / Regional', nextShow: 'Bundesland im Blick', logoText: 'ORF 2', streamBadge: 'Regional' },
  { id: '3', name: 'Sky Sport Austria 1', category: 'Sport & Live', resolution: 'FHD 60fps', currentShow: 'ADMIRAL Bundesliga: Konferenz Live', nextShow: 'Die Abstauber Talk', logoText: 'SKY AT 1', streamBadge: 'LIVE' },
  { id: '4', name: 'ServusTV Österreich HD', category: 'Österreich & ORF', resolution: 'FHD 60fps', currentShow: 'Formel 1: Vorberichte & Qualifying', nextShow: 'Sport und Talk aus dem Hangar-7', logoText: 'SERVUS', streamBadge: 'F1 EXCLUSIV' },
  { id: '5', name: 'DAZN 1 Österreich', category: 'Sport & Live', resolution: 'FHD 60fps', currentShow: 'UEFA Champions League Gruppenphase', nextShow: 'El Clásico Highlights', logoText: 'DAZN 1', streamBadge: 'UCL' },
  { id: '6', name: 'Canal+ First HD', category: 'Filme & Serien', resolution: '4K UHD', currentShow: 'Dune: Part Two (Deutsche Fassung)', nextShow: 'Babylon Berlin Staffel 4', logoText: 'CANAL+', streamBadge: 'KINO' },
  { id: '7', name: 'Puls 4 HD', category: 'Österreich & ORF', resolution: 'FHD 60fps', currentShow: '2 Minuten 2 Millionen', nextShow: 'Puls 24 Newsroom', logoText: 'PULS 4' },
  { id: '8', name: 'Sky Sport Bundesliga UHD', category: 'Sport & Live', resolution: '4K UHD', currentShow: 'Top-Spiel der Woche in nativem 4K', nextShow: 'Alle Spiele, Alle Tore', logoText: 'SKY BULI 4K', streamBadge: '4K UHD' },
  { id: '9', name: 'SRF zwei HD', category: 'Deutschland & Schweiz', resolution: 'FHD 60fps', currentShow: 'FIS Ski Alpin Weltcup Abfahrt', nextShow: 'Sportpanorama Live', logoText: 'SRF 2' },
  { id: '10', name: 'RTL UHD', category: 'Deutschland & Schweiz', resolution: '4K UHD', currentShow: 'UEFA Europa League Live', nextShow: 'RTL Aktuell', logoText: 'RTL UHD', streamBadge: '4K HDR' },
  { id: '11', name: 'Sky Cinema Premiere 4K', category: 'Filme & Serien', resolution: '4K UHD', currentShow: 'Oppenheimer (4K HDR)', nextShow: 'Barbie (Blockbuster)', logoText: 'CINEMA 4K', streamBadge: '4K DOLBY' },
  { id: '12', name: 'Eurosport 1 4K', category: 'Sport & Live', resolution: '4K UHD', currentShow: 'Australian Open / Tour de France', nextShow: 'Motorsport Live', logoText: 'ES 4K' },
];

// Official Pricing Plans
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan_1m',
    months: 1,
    title: '1 Monat',
    priceTotal: 10,
    pricePerMonth: '10,00 €/Monat',
    features: [
      '21.000+ Live-Sender in 4K & FHD',
      '120.000+ Filme & Serien auf Abruf',
      'ORF 1 UHD, ServusTV & Sky Sport AT',
      'Anti-Freeze™ 8.0 Technologie',
      'Kein Vertrag & keine Kündigung nötig',
      'Sofortige Freischaltung per E-Mail/WhatsApp'
    ]
  },
  {
    id: 'plan_3m',
    months: 3,
    title: '3 Monate',
    priceTotal: 25,
    pricePerMonth: '8,33 €/Monat',
    discountBadge: '16% Sparen',
    features: [
      'Alle Vorteile aus 1 Monat',
      'Voller 7-Tage EPG Programmführer',
      'Alle europäischen Ligen & Formel 1',
      'Auf allen Geräten nutzbar',
      'Bevorzugter 24/7 WhatsApp Support',
      'Keine automatische Verlängerung'
    ]
  },
  {
    id: 'plan_6m',
    months: 6,
    title: '6 Monate',
    priceTotal: 45,
    pricePerMonth: '7,50 €/Monat',
    discountBadge: '25% Sparen',
    features: [
      'Alle Vorteile aus 3 Monaten',
      'Kostenlose Playlist-Konfiguration',
      'Optimierte Wiener VIX Server-Routen',
      'Filme & Serien in Dolby 5.1 & 4K',
      'Multi-Room Rabatt inklusive',
      'Einmalzahlung ohne Abonnement'
    ]
  },
  {
    id: 'plan_12m',
    months: 12,
    title: '12 Monate',
    priceTotal: 59.95,
    pricePerMonth: '4,99 €/Monat',
    discountBadge: '50% Sparen · Beliebtestes Paket',
    isPopular: true,
    features: [
      'Bestpreis für Österreich (4,99 €/Mo)',
      'ADMIRAL Bundesliga Saison 2026/27 komplett',
      'FIS Ski Alpin Weltcup & Formel 1 komplett',
      'Kostenloser VIP Serverzugang mit 99.9% Uptime',
      'Kostenlose App-Aktivierungshilfe (IBO / TiviMate)',
      'Einmalzahlung · Keine automatische Verlängerung'
    ]
  },
  {
    id: 'plan_24m',
    months: 24,
    title: '24 Monate',
    priceTotal: 135,
    pricePerMonth: '5,62 €/Monat',
    discountBadge: '44% Rabatt · Premium Plus',
    features: [
      'Maximaler Preisvorteil für Langzeit-Nutzer',
      'Zwei Verbindungen gleichzeitig (Dual-Stream)',
      'Lebenslange Update-Garantie für alle Sender',
      'Priorisierter VIP Kundendienst rund um die Uhr',
      'Zweitwohnsitz & Ferienwohnung inklusive',
      'Einmalige Zahlung · Absolut risikofrei'
    ]
  }
];

// Simulated initial real-time analytics data
export const INITIAL_REALTIME_TRAFFIC: RealtimeTraffic = {
  activeVisitors: 342,
  pageviewsToday: 48920,
  avgDurationSec: 214,
  bounceRate: 18.6,
  realtimeGraph: [
    { time: '14:40', visitors: 310, requests: 1420 },
    { time: '14:45', visitors: 325, requests: 1580 },
    { time: '14:50', visitors: 338, requests: 1690 },
    { time: '14:55', visitors: 342, requests: 1720 },
    { time: '15:00', visitors: 350, requests: 1850 },
  ],
  topLocations: [
    { name: 'Wien', percent: 38.5, visitors: 132 },
    { name: 'Oberösterreich (Linz/Wels)', percent: 18.2, visitors: 62 },
    { name: 'Steiermark (Graz)', percent: 15.4, visitors: 53 },
    { name: 'Niederösterreich', percent: 12.1, visitors: 41 },
    { name: 'Tirol (Innsbruck/Kitzbühel)', percent: 7.9, visitors: 27 },
    { name: 'Salzburg', percent: 5.2, visitors: 18 },
    { name: 'Kärnten', percent: 2.7, visitors: 9 },
  ],
  topPages: [
    { path: '/iptv-wien', views: 8420, change: '+24%' },
    { path: '/iptv-sky-sport-austria-oesterreich', views: 7190, change: '+31%' },
    { path: '/iptv-graz', views: 5410, change: '+18%' },
    { path: '/iptv-linz', views: 4890, change: '+15%' },
    { path: '/iptv-fire-tv-stick-4k-wien', views: 4120, change: '+22%' },
    { path: '/iptv-salzburg', views: 3780, change: '+19%' },
    { path: '/iptv-admiral-bundesliga-live-oesterreich', views: 3650, change: '+45%' },
  ],
  deviceBreakdown: [
    { name: 'Smart TV (Samsung/LG/Android)', percent: 46 },
    { name: 'Amazon Fire TV Stick', percent: 32 },
    { name: 'Smartphone / Tablet (iOS/Android)', percent: 14 },
    { name: 'PC & Laptop (VLC/Desktop)', percent: 8 },
  ],
  organicKeywords: [
    { keyword: 'iptv österreich bester anbieter', position: 1, clicks: 1450, impressions: 8900 },
    { keyword: 'iptv wien orf sky sport', position: 1, clicks: 980, impressions: 5600 },
    { keyword: 'iptv graz legal ohne vertrag', position: 2, clicks: 820, impressions: 4800 },
    { keyword: 'fire tv stick iptv anleitung österreich', position: 1, clicks: 1120, impressions: 7100 },
    { keyword: 'iptv linz 4k fernsehen', position: 2, clicks: 640, impressions: 3900 },
    { keyword: 'admiral bundesliga iptv live stream', position: 1, clicks: 1890, impressions: 11400 },
  ]
};

// Simulated crawler logs
export const INITIAL_CRAWL_LOGS: CrawlLog[] = [
  { id: 'c1', timestamp: '15:02:14', bot: 'Googlebot-Mobile', ip: '66.249.66.1', userAgent: 'Mozilla/5.0 (Linux; Android 10; Googlebot/2.1)', url: 'https://iptvaustriahd.com/sitemap.xml', status: 200, latencyMs: 14, bytes: 1420, sitemapChunk: 'sitemap.xml (index)' },
  { id: 'c2', timestamp: '15:02:18', bot: 'Googlebot-Mobile', ip: '66.249.66.1', userAgent: 'Mozilla/5.0 (Linux; Android 10; Googlebot/2.1)', url: 'https://iptvaustriahd.com/sitemap_1.xml', status: 200, latencyMs: 22, bytes: 48200, sitemapChunk: 'sitemap_1.xml' },
  { id: 'c3', timestamp: '15:02:25', bot: 'Googlebot', ip: '66.249.79.4', userAgent: 'Googlebot/2.1 (+http://www.google.com/bot.html)', url: 'https://iptvaustriahd.com/iptv-wien', status: 200, latencyMs: 18, bytes: 34100, sitemapChunk: 'sitemap_1.xml' },
  { id: 'c4', timestamp: '15:02:33', bot: 'Googlebot-Mobile', ip: '66.249.66.2', userAgent: 'Mozilla/5.0 (Linux; Android 10; Googlebot/2.1)', url: 'https://iptvaustriahd.com/iptv-sky-sport-austria-oesterreich', status: 200, latencyMs: 16, bytes: 32500, sitemapChunk: 'sitemap_1.xml' },
  { id: 'c5', timestamp: '15:02:41', bot: 'Bingbot', ip: '157.55.39.12', userAgent: 'Mozilla/5.0 (compatible; bingbot/2.0)', url: 'https://iptvaustriahd.com/sitemap_2.xml', status: 200, latencyMs: 28, bytes: 49100, sitemapChunk: 'sitemap_2.xml' },
  { id: 'c6', timestamp: '15:02:50', bot: 'Googlebot-Mobile', ip: '66.249.66.4', userAgent: 'Mozilla/5.0 (Linux; Android 10; Googlebot/2.1)', url: 'https://iptvaustriahd.com/iptv-graz', status: 200, latencyMs: 19, bytes: 33800, sitemapChunk: 'sitemap_1.xml' },
  { id: 'c7', timestamp: '15:03:02', bot: 'Applebot', ip: '17.58.99.24', userAgent: 'Mozilla/5.0 (compatible; Applebot/0.1)', url: 'https://iptvaustriahd.com/iptv-linz', status: 200, latencyMs: 21, bytes: 34000, sitemapChunk: 'sitemap_1.xml' },
  { id: 'c8', timestamp: '15:03:15', bot: 'Googlebot', ip: '66.249.79.7', userAgent: 'Googlebot/2.1 (+http://www.google.com/bot.html)', url: 'https://iptvaustriahd.com/sitemap_3.xml', status: 200, latencyMs: 24, bytes: 48900, sitemapChunk: 'sitemap_3.xml' },
  { id: 'c9', timestamp: '15:03:28', bot: 'Googlebot-Mobile', ip: '66.249.66.5', userAgent: 'Mozilla/5.0 (Linux; Android 10; Googlebot/2.1)', url: 'https://iptvaustriahd.com/iptv-salzburg', status: 200, latencyMs: 17, bytes: 33500, sitemapChunk: 'sitemap_1.xml' },
  { id: 'c10', timestamp: '15:03:40', bot: 'DuckDuckBot', ip: '50.16.241.114', userAgent: 'DuckDuckBot/1.1; (+http://duckduckgo.com/duckduckbot.html)', url: 'https://iptvaustriahd.com/iptv-innsbruck', status: 200, latencyMs: 23, bytes: 33900, sitemapChunk: 'sitemap_1.xml' },
];
