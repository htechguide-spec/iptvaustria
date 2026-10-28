import React, { useState, useMemo } from 'react';
import { ALL_PSEO_PAGES, TOTAL_PAGES_COUNT, TOTAL_SITEMAP_CHUNKS, BUNDESLAENDER, URLS_PER_SITEMAP } from '../data/pseoData';
import { PseoPage } from '../types';
import { Search, Globe, Filter, ExternalLink, ArrowRight, Layers, Database, CheckCircle } from 'lucide-react';

interface PseoDirectoryProps {
  onSelectPage: (page: PseoPage) => void;
  onOpenDashboard: () => void;
}

export const PseoDirectory: React.FC<PseoDirectoryProps> = ({ onSelectPage, onOpenDashboard }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState<string>('Alle');
  const [selectedType, setSelectedType] = useState<string>('Alle');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const filteredPages = useMemo(() => {
    return ALL_PSEO_PAGES.filter((p) => {
      const matchSearch =
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.h1.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.location?.city && p.location.city.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchState =
        selectedState === 'Alle' ||
        p.location?.bundesland === selectedState;

      const matchType =
        selectedType === 'Alle' ||
        p.type === selectedType;

      return matchSearch && matchState && matchType;
    });
  }, [searchTerm, selectedState, selectedType]);

  const totalPages = Math.ceil(filteredPages.length / itemsPerPage);
  const paginatedPages = filteredPages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="py-12 bg-[#08090d] text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-red-400 mb-2 uppercase">
              <Globe className="w-4 h-4" />
              <span>Programmatic SEO Engine · iptvaustriahd.com</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Österreich pSEO Landing Page Hub
            </h1>
            <p className="mt-2 text-slate-300 text-sm max-w-2xl">
              Generiert automatisch tausende suchmaschinenoptimierte Landing-Pages für alle österreichischen Bundesländer, Städte, Senderpakete und Endgeräte. Alle URLs sind in chunked XML-Sitemaps aufgeteilt.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDashboard}
              className="px-4 py-2 text-xs font-semibold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-colors"
            >
              Crawler & Indexing Dashboard &rarr;
            </button>
          </div>
        </div>

        {/* Overview Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[#101420] border border-white/10">
            <span className="text-xs text-slate-400 font-mono">SEITEN IM INDEX</span>
            <div className="text-2xl font-bold text-white font-mono mt-1 tabular-nums">
              {TOTAL_PAGES_COUNT.toLocaleString()}
            </div>
            <span className="text-[11px] text-emerald-400 mt-1 block">100% dynamisch generiert</span>
          </div>

          <div className="p-4 rounded-xl bg-[#101420] border border-white/10">
            <span className="text-xs text-slate-400 font-mono">SITEMAP CHUNKS</span>
            <div className="text-2xl font-bold text-white font-mono mt-1 tabular-nums">
              {TOTAL_SITEMAP_CHUNKS} Dateien
            </div>
            <span className="text-[11px] text-slate-400 mt-1 block">max. {URLS_PER_SITEMAP} URLs/Chunk</span>
          </div>

          <div className="p-4 rounded-xl bg-[#101420] border border-white/10">
            <span className="text-xs text-slate-400 font-mono">BUNDESLÄNDER</span>
            <div className="text-2xl font-bold text-white font-mono mt-1 tabular-nums">
              9 / 9
            </div>
            <span className="text-[11px] text-slate-400 mt-1 block">Alle Regionalsender</span>
          </div>

          <div className="p-4 rounded-xl bg-[#101420] border border-white/10">
            <span className="text-xs text-slate-400 font-mono">CRAWLER STATUS</span>
            <div className="text-2xl font-bold text-emerald-400 font-mono mt-1 flex items-center gap-1.5">
              <CheckCircle className="w-5 h-5" />
              200 OK
            </div>
            <span className="text-[11px] text-slate-400 mt-1 block">Googlebot & Bingbot ready</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-5 rounded-xl bg-[#101420] border border-white/10 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                placeholder="Stadt, Bundesland, Sender oder Slug suchen (z.B. Wien, Graz, Sky)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#090b10] border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-red-500"
              />
            </div>

            {/* State Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs text-slate-400 whitespace-nowrap">Bundesland:</span>
              <select
                value={selectedState}
                onChange={(e) => { setSelectedState(e.target.value); setCurrentPage(1); }}
                className="bg-[#090b10] border border-white/10 text-xs text-white rounded-lg px-3 py-2 focus:outline-none focus:border-red-500"
              >
                <option value="Alle">Alle Bundesländer</option>
                {BUNDESLAENDER.map((b) => (
                  <option key={b.name} value={b.name}>{b.name}</option>
                ))}
              </select>

              <span className="text-xs text-slate-400 whitespace-nowrap ml-2">Typ:</span>
              <select
                value={selectedType}
                onChange={(e) => { setSelectedType(e.target.value); setCurrentPage(1); }}
                className="bg-[#090b10] border border-white/10 text-xs text-white rounded-lg px-3 py-2 focus:outline-none focus:border-red-500"
              >
                <option value="Alle">Alle Typen</option>
                <option value="city">Städte</option>
                <option value="bundesland">Bundesländer</option>
                <option value="channel">Sender & Pakete</option>
                <option value="device">Geräte</option>
                <option value="sport">Sport & Live</option>
                <option value="bundle">City + Channel Bundle</option>
              </select>
            </div>
          </div>

          <div className="text-xs text-slate-400 flex items-center justify-between pt-2 border-t border-white/5 font-mono">
            <span>Gefunden: <strong className="text-white">{filteredPages.length.toLocaleString()}</strong> Seiten</span>
            <span>Zeige Seite {currentPage} von {Math.max(1, totalPages)}</span>
          </div>
        </div>

        {/* Programmatic Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {paginatedPages.map((page) => (
            <div
              key={page.slug}
              onClick={() => onSelectPage(page)}
              className="p-5 rounded-xl bg-[#101420] border border-white/10 hover:border-red-500/40 hover:bg-[#141926] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 text-[11px] font-mono">
                  <span className="text-red-400 uppercase tracking-wider">
                    {page.location?.bundesland || page.type}
                  </span>
                  <span className="text-slate-500">
                    sitemap_{page.sitemapChunk}.xml
                  </span>
                </div>

                <h3 className="font-semibold text-white text-sm group-hover:text-red-400 transition-colors line-clamp-2">
                  {page.h1}
                </h3>

                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {page.metaDescription}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px] truncate max-w-[200px]">
                  {page.path}
                </span>
                <span className="text-red-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                  Vorschau &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-xs bg-[#101420] border border-white/10 rounded-lg text-slate-300 hover:text-white disabled:opacity-40"
            >
              &larr; Vorherige
            </button>
            <span className="text-xs font-mono px-3 text-slate-400">
              Seite {currentPage} von {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-xs bg-[#101420] border border-white/10 rounded-lg text-slate-300 hover:text-white disabled:opacity-40"
            >
              Nächste &rarr;
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
