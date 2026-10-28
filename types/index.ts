export interface PseoPage {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  canonical: string;
  h1: string;
  subheadline: string;
  type: 'city' | 'bundesland' | 'channel' | 'device' | 'sport' | 'use-case' | 'bundle';
  location?: {
    city?: string;
    bundesland: string;
    zipCode?: string;
    population?: string;
  };
  channelFocus?: string;
  deviceFocus?: string;
  sportFocus?: string;
  localDatacenterNode: string;
  latencyMs: number;
  highlightFeatures: string[];
  faqs: { question: string; answer: string }[];
  breadcrumbs: { name: string; url: string }[];
  sitemapChunk: number;
  lastmod: string;
  priority: number;
}

export interface CrawlLog {
  id: string;
  timestamp: string;
  bot: 'Googlebot' | 'Googlebot-Mobile' | 'Bingbot' | 'Applebot' | 'YandexBot' | 'DuckDuckBot';
  ip: string;
  userAgent: string;
  url: string;
  status: 200 | 304 | 404 | 500;
  latencyMs: number;
  bytes: number;
  sitemapChunk: string;
}

export interface RealtimeTraffic {
  activeVisitors: number;
  pageviewsToday: number;
  avgDurationSec: number;
  bounceRate: number;
  realtimeGraph: { time: string; visitors: number; requests: number }[];
  topLocations: { name: string; percent: number; visitors: number }[];
  topPages: { path: string; views: number; change: string }[];
  deviceBreakdown: { name: string; percent: number }[];
  organicKeywords: { keyword: string; position: number; clicks: number; impressions: number }[];
}

export interface ChannelItem {
  id: string;
  name: string;
  category: 'Österreich & ORF' | 'Sport & Live' | 'Filme & Serien' | 'Deutschland & Schweiz' | 'International 4K';
  resolution: '4K UHD' | 'FHD 60fps' | 'HD';
  currentShow: string;
  nextShow: string;
  logoText: string;
  streamBadge?: string;
}

export interface PricingPlan {
  id: string;
  months: number;
  title: string;
  priceTotal: number;
  pricePerMonth: string;
  discountBadge?: string;
  isPopular?: boolean;
  features: string[];
}
