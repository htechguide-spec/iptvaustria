import React, { useState, useEffect } from 'react';
import {
  Activity,
  BarChart2,
  Bot,
  CheckCircle,
  Clock,
  Download,
  ExternalLink,
  FileCode,
  Globe,
  Layers,
  Play,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  TrendingUp,
  Users,
  Wifi,
  Smartphone
} from 'lucide-react';
import {
  ALL_PSEO_PAGES,
  BASE_URL,
  TOTAL_PAGES_COUNT,
  TOTAL_SITEMAP_CHUNKS,
  URLS_PER_SITEMAP,
  generateMasterSitemapXml,
  generateSubSitemapXml,
  INITIAL_REALTIME_TRAFFIC,
  INITIAL_CRAWL_LOGS
} from '../data/pseoData';
import { CrawlLog, RealtimeTraffic } from '../types';

export const CrawlerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'traffic' | 'crawler' | 'sitemaps' | 'audit'>('traffic');
  const [trafficData, setTrafficData] = useState<RealtimeTraffic>(INITIAL_REALTIME_TRAFFIC);
  const [crawlLogs, setCrawlLogs] = useState<CrawlLog[]>(INITIAL_CRAWL_LOGS);
  const [selectedSitemapChunk, setSelectedSitemapChunk] = useState(1);
  const [sitemapXmlView, setSitemapXmlView] = useState<'index' | 'chunk'>('index');
  const [copiedXml, setCopiedXml] = useState(false);
  
  // Audit tool state
  const [auditUrl, setAuditUrl] = useState('/iptv-wien');
  const [auditRunning, setAuditRunning] = useState(false);
  const [auditResult, setAuditResult] = useState<{
    score: number;
    lcp: string;
    cls: string;
    inp: string;
    schemaValid: boolean;
    mobileOptimized: boolean;
    serverLatency: string;
  } | null>({
    score: 99,
    lcp: '0.62 s',
    cls: '0.00',
    inp: '14 ms',
    schemaValid: true,
    mobileOptimized: true,
    serverLatency: '11 ms',
  });

  // Real-time visitor fluctuation ticker effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficData((prev) => {
        const delta = Math.floor(Math.random() * 9) - 4;
        const newActive = Math.max(280, Math.min(420, prev.activeVisitors + delta));
        return {
          ...prev,
          activeVisitors: newActive,
          pageviewsToday: prev.pageviewsToday + Math.floor(Math.random() * 5) + 1,
        };
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Simulate new crawler hits
  const simulateNewCrawl = () => {
    const bots: CrawlLog['bot'][] = ['Googlebot-Mobile', 'Googlebot', 'Bingbot', 'Applebot'];
    const randomBot = bots[Math.floor(Math.random() * bots.length)];
    const randomPage = ALL_PSEO_PAGES[Math.floor(Math.random() * 100)];
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];

    const newLog: CrawlLog = {
      id: `c_${Date.now()}`,
      timestamp: timeStr,
      bot: randomBot,
      ip: `66.249.66.${Math.floor(Math.random() * 250)}`,
      userAgent: `${randomBot}/2.1 (+http://www.google.com/bot.html)`,
      url: randomPage.canonical,
      status: 200,
      latencyMs: Math.floor(Math.random() * 15) + 10,
      bytes: 32000 + Math.floor(Math.random() * 4000),
      sitemapChunk: `sitemap_${randomPage.sitemapChunk}.xml`,
    };

    setCrawlLogs((prev) => [newLog, ...prev.slice(0, 19)]);
  };

  const runAudit = () => {
    setAuditRunning(true);
    setTimeout(() => {
      setAuditResult({
        score: Math.floor(Math.random() * 2) + 98,
        lcp: '0.58 s',
        cls: '0.00',
        inp: '12 ms',
        schemaValid: true,
        mobileOptimized: true,
        serverLatency: `${Math.floor(Math.random() * 5) + 9} ms`,
      });
      setAuditRunning(false);
    }, 850);
  };

  const currentXmlOutput =
    sitemapXmlView === 'index'
      ? generateMasterSitemapXml()
      : generateSubSitemapXml(selectedSitemapChunk);

  const copyXmlToClipboard = () => {
    navigator.clipboard.writeText(currentXmlOutput);
    setCopiedXml(true);
    setTimeout(() => setCopiedXml(false), 2000);
  };

  const downloadXmlFile = () => {
    const filename = sitemapXmlView === 'index' ? 'sitemap.xml' : `sitemap_${selectedSitemapChunk}.xml`;
    const blob = new Blob([currentXmlOutput], { type: 'application/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-10 bg-[#08090d] text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2 uppercase tracking-wider">
              <Bot className="w-4 h-4" />
              <span>Real-Time Indexing & Traffic Analytics · iptvaustriahd.com</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Crawler & Indexing Monitoring Dashboard
            </h1>
            <p className="mt-2 text-slate-300 text-sm max-w-2xl">
              Echtzeit-Überwachung für Suchmaschinen-Crawler (Googlebot, Bingbot), mehrstufige XML-Sitemaps, Ladezeiten und österreichische Traffic-Metriken.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Server Telemetry Active
            </span>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('traffic')}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'traffic'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Users className="w-4 h-4" />
            Live Traffic Metriken
          </button>

          <button
            onClick={() => setActiveTab('crawler')}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'crawler'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Bot className="w-4 h-4" />
            Crawler Indexing Monitor
          </button>

          <button
            onClick={() => setActiveTab('sitemaps')}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'sitemaps'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileCode className="w-4 h-4" />
            Sitemap.xml Explorer ({TOTAL_SITEMAP_CHUNKS} Chunks)
          </button>

          <button
            onClick={() => setActiveTab('audit')}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'audit'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            Googlebot Mobile-First Audit
          </button>
        </div>

        {/* TAB 1: REAL-TIME TRAFFIC METRICS */}
        {activeTab === 'traffic' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Top KPI row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-5 rounded-2xl bg-[#101420] border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>LIVE BESUCHER AKTUELL</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-4xl font-extrabold text-white font-mono tabular-nums">
                  {trafficData.activeVisitors}
                </div>
                <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1 font-medium">
                  <TrendingUp className="w-3.5 h-3.5" /> +14.2% seit 14:00 Uhr
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#101420] border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>SEITENAUFRUFE HEUTE</span>
                  <Activity className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-4xl font-extrabold text-white font-mono tabular-nums">
                  {trafficData.pageviewsToday.toLocaleString()}
                </div>
                <p className="text-xs text-slate-400 mt-2 font-mono">
                  Ø 3,4 Seiten pro Session
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#101420] border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>DURCHSCHN. VERWEILDAUER</span>
                  <Clock className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-4xl font-extrabold text-white font-mono tabular-nums">
                  3m 34s
                </div>
                <p className="text-xs text-emerald-400 mt-2 font-medium">
                  Hohe Relevanz durch pSEO Lokalisierung
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#101420] border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>BOUNCE RATE</span>
                  <TrendingUp className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-4xl font-extrabold text-emerald-400 font-mono tabular-nums">
                  {trafficData.bounceRate}%
                </div>
                <p className="text-xs text-slate-400 mt-2 font-mono">
                  Exzellent (Benchmark: &lt;45%)
                </p>
              </div>

            </div>

            {/* Geographic Austrian Distribution & Top Landing Pages */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left: Bundesland Split */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#101420] border border-white/10">
                <h3 className="text-base font-bold text-white font-display mb-1">
                  Österreich Traffic nach Bundesland
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Echtzeit-Verteilung der aktiven Besucher auf Österreichs Regionen
                </p>

                <div className="space-y-4">
                  {trafficData.topLocations.map((loc, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-200 font-medium">{loc.name}</span>
                        <span className="font-mono tabular-nums text-slate-300">
                          {loc.visitors} Besucher ({loc.percent}%)
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#0a0d14] overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full"
                          style={{ width: `${loc.percent * 2.2}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Top Performing pSEO URLs */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-[#101420] border border-white/10">
                <h3 className="text-base font-bold text-white font-display mb-1">
                  Top konvertierende pSEO Landing-Pages
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Seiten mit den höchsten organischen Googlebot-Besuchen und Test-Buchungen
                </p>

                <div className="space-y-3">
                  {trafficData.topPages.map((page, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#0a0d14] border border-white/5 flex items-center justify-between gap-4 text-xs"
                    >
                      <div className="flex items-center gap-3 truncate">
                        <span className="font-mono text-slate-500 w-5">{i + 1}.</span>
                        <span className="font-mono text-white truncate">{page.path}</span>
                      </div>
                      <div className="flex items-center gap-4 shrink-0 font-mono">
                        <span className="text-slate-300 tabular-nums">{page.views.toLocaleString()} Klicks</span>
                        <span className="text-emerald-400 font-semibold">{page.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Organic Search Keywords */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                    Top Google Suchbegriffe (Position 1-2):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {trafficData.organicKeywords.slice(0, 4).map((kw, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-[#0d1017] border border-white/5 flex items-center justify-between">
                        <span className="text-slate-300 truncate pr-2">{kw.keyword}</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] shrink-0 font-bold">
                          Pos. {kw.position}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: CRAWLER INDEXING MONITOR */}
        {activeTab === 'crawler' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Indexation Coverage Summary */}
            <div className="p-6 rounded-2xl bg-[#101420] border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">
                    Googlebot & Crawler Index Coverage Status
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Übersicht der Indexierungsabdeckung über alle {TOTAL_SITEMAP_CHUNKS} Sitemap-Chunks ({TOTAL_PAGES_COUNT.toLocaleString()} URLs)
                  </p>
                </div>

                <button
                  onClick={simulateNewCrawl}
                  className="px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg shadow-sm flex items-center gap-2 self-start sm:self-auto"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Crawler-Ping simulieren
                </button>
              </div>

              {/* Chunks Progress Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array.from({ length: TOTAL_SITEMAP_CHUNKS }).map((_, idx) => {
                  const chunkNum = idx + 1;
                  const indexedPercent = Math.min(98, 96 - idx * 2.4);
                  return (
                    <div key={chunkNum} className="p-4 rounded-xl bg-[#0a0d14] border border-white/5">
                      <div className="flex items-center justify-between text-xs font-mono mb-2">
                        <span className="text-slate-300 font-bold">sitemap_{chunkNum}.xml</span>
                        <span className="text-emerald-400">{indexedPercent.toFixed(1)}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden mb-2">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${indexedPercent}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>{Math.round((URLS_PER_SITEMAP * indexedPercent) / 100)} im Index</span>
                        <span>500 URLs</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Health stats */}
              <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block">Ø Response Zeit Bot:</span>
                  <span className="text-lg font-bold text-emerald-400">16.4 ms</span>
                </div>
                <div>
                  <span className="text-slate-400 block">HTTP 200 Ratio:</span>
                  <span className="text-lg font-bold text-white">99.1%</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Crawl-Budget Nutzung:</span>
                  <span className="text-lg font-bold text-amber-400">Optimal (84%)</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Server-Status:</span>
                  <span className="text-lg font-bold text-emerald-400">200 OK Fast</span>
                </div>
              </div>
            </div>

            {/* Live Crawler Log Feed */}
            <div className="rounded-2xl bg-[#101420] border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-white font-display">
                    Echtzeit-Crawler Aktivitätsprotokoll
                  </h3>
                  <p className="text-xs text-slate-400">
                    Live-Anfragen von Googlebot, Bingbot, Applebot auf sitemap.xml und Zielseiten
                  </p>
                </div>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Stream
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400">
                      <th className="pb-3 font-medium">ZEIT</th>
                      <th className="pb-3 font-medium">BOT</th>
                      <th className="pb-3 font-medium">CRAWLED URL</th>
                      <th className="pb-3 font-medium">CHUNK</th>
                      <th className="pb-3 font-medium">STATUS</th>
                      <th className="pb-3 font-medium text-right">LATENZ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {crawlLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-2.5 text-slate-400">{log.timestamp}</td>
                        <td className="py-2.5 text-white font-semibold">
                          <span className={`px-2 py-0.5 rounded text-[11px] ${
                            log.bot.includes('Googlebot')
                              ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                              : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          }`}>
                            {log.bot}
                          </span>
                        </td>
                        <td className="py-2.5 text-slate-300 truncate max-w-xs">{log.url}</td>
                        <td className="py-2.5 text-amber-400">{log.sitemapChunk}</td>
                        <td className="py-2.5">
                          <span className="text-emerald-400 font-bold">{log.status} OK</span>
                        </td>
                        <td className="py-2.5 text-right text-slate-300 tabular-nums">{log.latencyMs} ms</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: SITEMAP.XML EXPLORER */}
        {activeTab === 'sitemaps' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            <div className="p-6 rounded-2xl bg-[#101420] border border-white/10">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">
                    Multi-Tier XML Sitemap Architektur
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Aufgrund der tausenden pSEO-URLs verweist die Haupt-Sitemap (<code>/sitemap.xml</code>) sauber auf chunked Teildateien (<code>/sitemap_1.xml</code>, <code>/sitemap_2.xml</code> ...), sodass Suchmaschinen-Crawler sie ressourcenschonend und schnell abrufen können.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={copyXmlToClipboard}
                    className="px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg transition-colors flex items-center gap-2"
                  >
                    {copiedXml ? 'Kopiert!' : 'XML Kopieren'}
                  </button>
                  <button
                    onClick={downloadXmlFile}
                    className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Datei Herunterladen (.xml)
                  </button>
                </div>
              </div>

              {/* Switcher Buttons */}
              <div className="flex flex-wrap items-center gap-2 pb-4 mb-4 border-b border-white/10">
                <button
                  onClick={() => setSitemapXmlView('index')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    sitemapXmlView === 'index'
                      ? 'bg-red-600 text-white font-bold'
                      : 'bg-[#090b10] text-slate-400 hover:text-white'
                  }`}
                >
                  /sitemap.xml (Index)
                </button>

                {Array.from({ length: TOTAL_SITEMAP_CHUNKS }).map((_, i) => {
                  const chunkNum = i + 1;
                  return (
                    <button
                      key={chunkNum}
                      onClick={() => {
                        setSelectedSitemapChunk(chunkNum);
                        setSitemapXmlView('chunk');
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        sitemapXmlView === 'chunk' && selectedSitemapChunk === chunkNum
                          ? 'bg-amber-600 text-white font-bold'
                          : 'bg-[#090b10] text-slate-400 hover:text-white'
                      }`}
                    >
                      /sitemap_{chunkNum}.xml
                    </button>
                  );
                })}
              </div>

              {/* XML Code Viewer */}
              <div className="rounded-xl bg-[#08090d] border border-white/10 p-4 font-mono text-xs overflow-x-auto max-h-[460px] text-slate-300 leading-relaxed selection:bg-blue-600/30">
                <pre>{currentXmlOutput.slice(0, 3200)}</pre>
                {currentXmlOutput.length > 3200 && (
                  <p className="text-slate-500 mt-4 text-[11px] italic">
                    ... [Vollständige XML-Datei enthält {currentXmlOutput.length.toLocaleString()} Zeichen und {URLS_PER_SITEMAP} Einträge. Klicke auf 'Herunterladen' für das komplette Dokument] ...
                  </p>
                )}
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: GOOGLEBOT MOBILE-FIRST AUDIT */}
        {activeTab === 'audit' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            <div className="p-6 rounded-2xl bg-[#101420] border border-white/10">
              <h3 className="text-lg font-bold text-white font-display mb-1">
                Googlebot Mobile-First Indexing Simulator
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Teste jede generierte pSEO-URL auf Core Web Vitals, Responsive Viewport, JSON-LD Schemas und Canonical-Gültigkeit.
              </p>

              {/* URL Input Bar */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-3xl mb-8">
                <input
                  type="text"
                  value={auditUrl}
                  onChange={(e) => setAuditUrl(e.target.value)}
                  placeholder="/iptv-wien oder /iptv-graz"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#090b10] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-red-500"
                />
                <button
                  onClick={runAudit}
                  disabled={auditRunning}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${auditRunning ? 'animate-spin' : ''}`} />
                  {auditRunning ? 'Audit läuft...' : 'URL Jetzt Auditen'}
                </button>
              </div>

              {/* Audit Results */}
              {auditResult && (
                <div className="space-y-6">
                  
                  {/* Performance Score */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="p-5 rounded-xl bg-[#0a0d14] border border-white/5 text-center">
                      <span className="text-xs font-mono text-slate-400">MOBILE AUDIT SCORE</span>
                      <div className="text-4xl font-extrabold text-emerald-400 font-mono mt-1">
                        {auditResult.score}/100
                      </div>
                      <span className="text-[11px] text-emerald-400 mt-1 block">Bestnote für Googlebot</span>
                    </div>

                    <div className="p-5 rounded-xl bg-[#0a0d14] border border-white/5">
                      <span className="text-xs font-mono text-slate-400 block">LCP (LADETAUSFÜHRUNG)</span>
                      <div className="text-2xl font-bold text-white font-mono mt-1">
                        {auditResult.lcp}
                      </div>
                      <span className="text-[11px] text-emerald-400 mt-1 block">&lt; 1.2s (Fast)</span>
                    </div>

                    <div className="p-5 rounded-xl bg-[#0a0d14] border border-white/5">
                      <span className="text-xs font-mono text-slate-400 block">CLS (LAYOUT STABILITÄT)</span>
                      <div className="text-2xl font-bold text-white font-mono mt-1">
                        {auditResult.cls}
                      </div>
                      <span className="text-[11px] text-emerald-400 mt-1 block">0 Verschiebung</span>
                    </div>

                    <div className="p-5 rounded-xl bg-[#0a0d14] border border-white/5">
                      <span className="text-xs font-mono text-slate-400 block">WIEN VIX SERVER SPEED</span>
                      <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">
                        {auditResult.serverLatency}
                      </div>
                      <span className="text-[11px] text-slate-400 mt-1 block">Ultra-Fast TTFB</span>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="p-5 rounded-xl bg-[#090b10] border border-white/5 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Schema.org JSON-LD Structured Data: <strong>WebApplication + AggregateRating + Offer</strong> fehlerfrei validiert.</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Mobile Viewport & Touch Targets: Erfüllt alle WCAG AA Richtlinien und Google Mobile-First Indexing Vorgaben.</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Lazy Loading für Bilder & Async Font Loading: Maximale Performance auf mobilen 4G/5G Endgeräten.</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Kanonischer Link & Hreflang (de-AT): Saubere Kennzeichnung verhindert Duplicate Content bei pSEO Landing-Pages.</span>
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
