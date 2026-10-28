import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  Zap,
  Wifi,
  Check,
  Radio,
  Tv,
  Loader2,
  AlertCircle,
  Clock,
  Lock,
  Unlock,
  Key,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import Hls from 'hls.js';

interface HeroSectionProps {
  onOpenTrial: () => void;
  onScrollToPricing: () => void;
}

interface ChannelInfo {
  id: string;
  streamId: string;
  name: string;
  badge: string;
  event: string;
  fps: string;
  bitrate: string;
  audio: string;
  poster: string;
}

const PREVIEW_CHANNELS: ChannelInfo[] = [
  {
    id: 'orf2',
    streamId: '258146',
    name: 'ORF 2 UHD',
    badge: '4K HDR',
    event: 'ZIB 2 & Bundesland heute · Wien, Graz & Salzburg',
    fps: '60 FPS',
    bitrate: '22.4 Mbps',
    audio: 'Dolby Digital 5.1',
    poster: '/src/assets/images/sports_broadcast_austria_1793024690282.jpg',
  },
  {
    id: 'skyat',
    streamId: '258153',
    name: 'Sky Sport Austria 1',
    badge: 'FHD 60FPS',
    event: 'ADMIRAL Bundesliga: FC Red Bull Salzburg vs. SK Rapid Wien',
    fps: '60 FPS',
    bitrate: '14.8 Mbps',
    audio: 'Stereo HD / Originalkommentar',
    poster: '/src/assets/images/hero_iptv_stream_1793024689437.jpg',
  },
  {
    id: 'servus',
    streamId: '258150',
    name: 'ServusTV HD',
    badge: 'FHD 60FPS',
    event: 'Formel 1 Großer Preis von Österreich (Red Bull Ring Spielberg)',
    fps: '60 FPS',
    bitrate: '15.2 Mbps',
    audio: 'Dolby 5.1',
    poster: '/src/assets/images/device_ecosystem_1793024691502.jpg',
  },
  {
    id: 'orf1',
    streamId: '258145',
    name: 'ORF 1 UHD',
    badge: '4K HDR',
    event: 'Sport am Sonntag · Ski Alpin Weltcup Kitzbühel',
    fps: '60 FPS',
    bitrate: '22.4 Mbps',
    audio: 'Dolby Digital 5.1',
    poster: '/src/assets/images/sports_broadcast_austria_1793024690282.jpg',
  },
];

const SECRET_ACCESS_KEY = 'htechguide@gmail.com';
const ADMIN_EMAIL = SECRET_ACCESS_KEY;
const PREVIEW_LIMIT_SECONDS = 120; // 2 minutes visitor limit

function getIsAdminFromStorage(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const adminParam = urlParams.get('admin');
    const emailParam = urlParams.get('email');
    const keyParam = urlParams.get('key');
    if (
      adminParam === 'true' ||
      adminParam?.toLowerCase() === SECRET_ACCESS_KEY.toLowerCase() ||
      emailParam?.toLowerCase() === SECRET_ACCESS_KEY.toLowerCase() ||
      keyParam?.toLowerCase() === SECRET_ACCESS_KEY.toLowerCase()
    ) {
      localStorage.setItem('iptv_admin_email', SECRET_ACCESS_KEY);
      localStorage.setItem('iptv_vip_key', SECRET_ACCESS_KEY);
      document.cookie = `iptv_admin_email=${encodeURIComponent(SECRET_ACCESS_KEY)}; path=/; max-age=31536000; SameSite=Lax`;
      document.cookie = `iptv_vip_key=${encodeURIComponent(SECRET_ACCESS_KEY)}; path=/; max-age=31536000; SameSite=Lax`;
      return true;
    }
    const saved = (localStorage.getItem('iptv_vip_key') || localStorage.getItem('iptv_admin_email'))?.toLowerCase();
    const hasCookie =
      document.cookie.includes(`iptv_admin_email=${encodeURIComponent(SECRET_ACCESS_KEY)}`) ||
      document.cookie.includes(`iptv_vip_key=${encodeURIComponent(SECRET_ACCESS_KEY)}`);
    return saved === SECRET_ACCESS_KEY.toLowerCase() || hasCookie;
  } catch {
    return false;
  }
}

function getIsExpiredFromStorage(isAdminActive: boolean): boolean {
  if (isAdminActive) return false;
  if (typeof window === 'undefined') return false;
  try {
    const isLockedFlag = localStorage.getItem('iptv_preview_expired') === 'true';
    const isVisitorLocked = localStorage.getItem('iptv_visitor_locked') === 'true';
    const watched = parseInt(localStorage.getItem('iptv_preview_watched_seconds') || '0', 10);
    const hasCookie = document.cookie.includes('iptv_preview_expired=1');
    const hasSession = sessionStorage.getItem('iptv_preview_expired') === 'true';
    return isLockedFlag || isVisitorLocked || watched >= PREVIEW_LIMIT_SECONDS || hasCookie || hasSession;
  } catch {
    return false;
  }
}

function persistExpirationLock() {
  try {
    localStorage.setItem('iptv_preview_expired', 'true');
    localStorage.setItem('iptv_visitor_locked', 'true');
    localStorage.setItem('iptv_preview_watched_seconds', PREVIEW_LIMIT_SECONDS.toString());
    sessionStorage.setItem('iptv_preview_expired', 'true');
    document.cookie = 'iptv_preview_expired=1; path=/; max-age=31536000; SameSite=Lax';
  } catch {}
}

function clearExpirationLock() {
  try {
    localStorage.removeItem('iptv_preview_expired');
    localStorage.removeItem('iptv_visitor_locked');
    localStorage.removeItem('iptv_preview_watched_seconds');
    sessionStorage.removeItem('iptv_preview_expired');
    document.cookie = 'iptv_preview_expired=0; path=/; max-age=0; SameSite=Lax';
  } catch {}
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTrial, onScrollToPricing }) => {
  const initialAdmin = getIsAdminFromStorage();
  const initialExpired = getIsExpiredFromStorage(initialAdmin);

  const [selectedChannel, setSelectedChannel] = useState<ChannelInfo>(PREVIEW_CHANNELS[0]);
  const [isAdmin, setIsAdmin] = useState<boolean>(initialAdmin);
  const [isTimeExpired, setIsTimeExpired] = useState<boolean>(initialExpired);
  const [isPlaying, setIsPlaying] = useState<boolean>(!initialExpired);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(!initialExpired);
  const [isBuffering, setIsBuffering] = useState(false);
  const [streamError, setStreamError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const [watchedSeconds, setWatchedSeconds] = useState<number>(() => {
    if (initialExpired) return PREVIEW_LIMIT_SECONDS;
    try {
      const saved = localStorage.getItem('iptv_preview_watched_seconds');
      return saved ? Math.min(PREVIEW_LIMIT_SECONDS, parseInt(saved, 10) || 0) : 0;
    } catch {
      return 0;
    }
  });

  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminEmailInput, setAdminEmailInput] = useState('');
  const [adminError, setAdminError] = useState('');

  const remainingSeconds = Math.max(0, PREVIEW_LIMIT_SECONDS - watchedSeconds);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const hideControlsTimeout = useRef<number | null>(null);

  // Auto-detect admin query params on mount or change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const adminParam = urlParams.get('admin');
      const emailParam = urlParams.get('email');
      const keyParam = urlParams.get('key');
      if (
        adminParam === 'true' ||
        adminParam?.toLowerCase() === SECRET_ACCESS_KEY.toLowerCase() ||
        emailParam?.toLowerCase() === SECRET_ACCESS_KEY.toLowerCase() ||
        keyParam?.toLowerCase() === SECRET_ACCESS_KEY.toLowerCase()
      ) {
        setIsAdmin(true);
        setIsTimeExpired(false);
        clearExpirationLock();
        localStorage.setItem('iptv_admin_email', SECRET_ACCESS_KEY);
        localStorage.setItem('iptv_vip_key', SECRET_ACCESS_KEY);
      }
    } catch {}
  }, []);

  // When expired, lock firmly into storage, destroy HLS and unload video
  useEffect(() => {
    if (isTimeExpired) {
      persistExpirationLock();
      setIsPlaying(false);
      setIsLoading(false);
      setIsBuffering(false);
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.removeAttribute('src');
        videoRef.current.load();
      }
    }
  }, [isTimeExpired]);

  // 2-minute timer for visitors while video is actively playing
  useEffect(() => {
    if (isAdmin || isTimeExpired) return;

    let intervalId: any = null;
    if (isPlaying && !isLoading && !isBuffering && !streamError) {
      intervalId = setInterval(() => {
        setWatchedSeconds((prev) => {
          const next = prev + 1;
          try {
            localStorage.setItem('iptv_preview_watched_seconds', next.toString());
          } catch {}
          if (next >= PREVIEW_LIMIT_SECONDS) {
            persistExpirationLock();
            setIsTimeExpired(true);
            setIsPlaying(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
          return next;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, isLoading, isBuffering, streamError, isAdmin, isTimeExpired]);

  // VIP Key / Admin unlock handler
  const handleAdminAuth = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const inputClean = adminEmailInput.trim().toLowerCase();
    if (inputClean === SECRET_ACCESS_KEY.toLowerCase()) {
      setIsAdmin(true);
      setIsTimeExpired(false);
      clearExpirationLock();
      try {
        localStorage.setItem('iptv_admin_email', SECRET_ACCESS_KEY);
        localStorage.setItem('iptv_vip_key', SECRET_ACCESS_KEY);
        document.cookie = `iptv_admin_email=${encodeURIComponent(SECRET_ACCESS_KEY)}; path=/; max-age=31536000; SameSite=Lax`;
        document.cookie = `iptv_vip_key=${encodeURIComponent(SECRET_ACCESS_KEY)}; path=/; max-age=31536000; SameSite=Lax`;
      } catch {}
      setShowAdminModal(false);
      setAdminError('');
      // Resume playback
      if (videoRef.current) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    } else {
      setAdminError('Ungültiger VIP-Schlüssel. Bitte überprüfe deinen Zugangscode.');
    }
  };

  // Switch between admin mode and visitor testing mode
  const handleToggleAdminVisitorTest = () => {
    if (isAdmin) {
      setIsAdmin(false);
      const expiredNow = getIsExpiredFromStorage(false);
      setIsTimeExpired(expiredNow);
      if (expiredNow) {
        setIsPlaying(false);
      }
    } else {
      setIsAdmin(true);
      setIsTimeExpired(false);
      clearExpirationLock();
      if (videoRef.current) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const handleResetPreviewTimer = () => {
    setWatchedSeconds(0);
    clearExpirationLock();
    setIsTimeExpired(false);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // Helper formatting for remaining seconds mm:ss
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Initialize and switch HLS stream
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // If regular visitor and 2 minutes already reached, do not auto-play
    if (isTimeExpired) {
      setIsLoading(false);
      setIsPlaying(false);
      return;
    }

    setIsLoading(true);
    setStreamError(false);
    setIsBuffering(false);

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    const streamUrl = `/api/stream/${selectedChannel.streamId}.m3u8`;

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 30,
        maxBufferLength: 10,
        manifestLoadingTimeOut: 12000,
        levelLoadingTimeOut: 12000,
        fragLoadingTimeOut: 15000,
      });

      hlsRef.current = hls;
      hls.loadSource(streamUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        video.muted = isMuted;
        video.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // If browser policy blocks unmuted autoplay, mute and retry
          video.muted = true;
          setIsMuted(true);
          video.play().then(() => setIsPlaying(true)).catch(() => {});
        });
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.warn('HLS Network Error, attempting recovery...');
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.warn('HLS Media Error, attempting recovery...');
              hls.recoverMediaError();
              break;
            default:
              console.warn('HLS stream notice:', data.details || data.type);
              setStreamError(true);
              setIsLoading(false);
              break;
          }
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native Apple HLS (Safari)
      video.src = streamUrl;
      video.muted = isMuted;
      video.play().then(() => {
        setIsLoading(false);
        setIsPlaying(true);
      }).catch(() => {
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    } else {
      setStreamError(true);
      setIsLoading(false);
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [selectedChannel.streamId, isTimeExpired]);

  // Video event handlers
  const handleWaiting = () => setIsBuffering(true);
  const handlePlaying = () => {
    setIsBuffering(false);
    setIsLoading(false);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (isTimeExpired) {
      onScrollToPricing();
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleReload = () => {
    const video = videoRef.current;
    if (!video) return;
    setIsLoading(true);
    setStreamError(false);
    if (hlsRef.current) {
      hlsRef.current.destroy();
    }
    const streamUrl = `/api/stream/${selectedChannel.streamId}.m3u8`;
    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hlsRef.current = hls;
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        video.play().catch(() => {});
      });
    }
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (hideControlsTimeout.current) {
      window.clearTimeout(hideControlsTimeout.current);
    }
    hideControlsTimeout.current = window.setTimeout(() => {
      if (isPlaying && !isBuffering) {
        setShowControls(false);
      }
    }, 3500);
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-red-800/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Anti-Slop Unboxed Editorial Kicker */}
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-red-400 mb-5 tracking-widest uppercase">
          <span>Österreichisches Qualitäts-IPTV</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Wien</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Graz</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Linz</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Salzburg</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Innsbruck</span>
        </div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display text-balance leading-[1.12]">
            IPTV Österreich – über{' '}
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-300 bg-clip-text text-transparent">
              21.000 Sender
            </span>{' '}
            ohne Vertrag
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            IPTV über deine bestehende Internetleitung – ohne Montage, ohne Mindestlaufzeit und ohne teure Kabelpakete. Sofortige Freischaltung für deinen Smart TV, Firestick oder Smartphone.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onScrollToPricing}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-xl shadow-xl shadow-red-900/40 hover:shadow-red-800/60 active:scale-98 transition-all border border-red-500/40 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-current" />
              Pakete & Preise ansehen
            </button>
            <a
              href="https://wa.me/16614570833?text=Hallo%20IPTV%20Österreich,%20ich%20habe%20eine%20Frage%20zu%20den%20Paketen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 rounded-xl border border-emerald-500/30 hover:border-emerald-500/50 transition-all"
            >
              WhatsApp Support (+1 661 457 0833)
            </a>
          </div>

          {/* Trust proof inline */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" /> Keine Vertragsbindung · Kein Abo
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" /> In 2 Minuten eingerichtet
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" /> Vienna VIX Server (&lt;12ms Ping)
            </span>
          </div>
        </div>

        {/* Interactive 4K Stream Simulator / Player Showcase */}
        <div className="mt-8 lg:mt-12 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl shadow-black/80">
            <div className="rounded-xl overflow-hidden bg-[#0c0e15] border border-white/10">
              
              {/* Stream Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#11141e] border-b border-white/10 text-xs">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-semibold text-white tracking-wide">
                    LIVE STREAM VORSCHAU (4K DEMO)
                  </span>
                  <span className="text-slate-500">|</span>
                  <span className="font-mono text-slate-300">{selectedChannel.name}</span>

                  {/* Admin Status Pill or discrete Admin trigger */}
                  {isAdmin ? (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono ml-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Admin: Unbegrenzt</span>
                      <button
                        onClick={handleToggleAdminVisitorTest}
                        className="ml-1 text-[10px] text-slate-400 hover:text-white underline cursor-pointer"
                        title="Besucher-Modus mit 2-Minuten-Limit testen"
                      >
                        (Testen)
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setAdminEmailInput('');
                        setAdminError('');
                        setShowAdminModal(true);
                      }}
                      className="ml-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[11px] text-slate-400 hover:text-slate-200 border border-white/10 transition-colors cursor-pointer"
                      title="VIP Zugangsschlüssel"
                    >
                      <Key className="w-3 h-3 text-amber-400" />
                      <span>VIP Key</span>
                    </button>
                  )}
                </div>

                {/* Channel Switcher Buttons */}
                <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                  {PREVIEW_CHANNELS.map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => {
                        if (isTimeExpired) {
                          onScrollToPricing();
                          return;
                        }
                        setSelectedChannel(ch);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                        isTimeExpired
                          ? 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                          : selectedChannel.id === ch.id
                          ? 'bg-red-600 text-white shadow-sm shadow-red-900/50'
                          : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                      title={isTimeExpired ? 'Sender gesperrt · Paket wählen' : ch.name}
                    >
                      <span>{ch.name}</span>
                      {isTimeExpired && <span className="ml-1 text-[10px] text-red-400">🔒</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main TV Screen Frame with Live Video Player */}
              <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                className="relative aspect-video w-full bg-black overflow-hidden group select-none"
              >
                {/* Fallback Poster Background */}
                <img
                  src={selectedChannel.poster}
                  alt={selectedChannel.event}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    !isLoading && !streamError && !isTimeExpired ? 'opacity-0 pointer-events-none' : 'opacity-100 brightness-50'
                  }`}
                />

                {/* Live Video Element - completely hidden and unplayed if expired */}
                <video
                  ref={videoRef}
                  playsInline
                  autoPlay={!isTimeExpired}
                  muted={isMuted}
                  onWaiting={handleWaiting}
                  onPlaying={handlePlaying}
                  className={`w-full h-full object-cover relative z-10 ${
                    isTimeExpired ? 'hidden pointer-events-none' : ''
                  }`}
                />

                {/* Buffering or Loading Spinner Overlay */}
                {(isLoading || isBuffering) && !streamError && !isTimeExpired && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/50 backdrop-blur-[2px] transition-opacity">
                    <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-black/80 border border-white/10 text-white shadow-xl">
                      <Loader2 className="w-5 h-5 text-red-500 animate-spin" />
                      <div className="text-left">
                        <p className="text-xs font-semibold text-white">Live Stream wird geladen...</p>
                        <p className="text-[10px] text-slate-400 font-mono">Verbindung mit VIX Wien Edge Cluster</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Stream Error Notice with Retry */}
                {streamError && !isTimeExpired && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/75 backdrop-blur-sm p-4 text-center">
                    <div className="max-w-md p-5 rounded-2xl bg-[#141824] border border-red-500/30 shadow-2xl">
                      <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                      <p className="text-sm font-bold text-white mb-1">
                        Live Stream kurzzeitig ausgelastet
                      </p>
                      <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                        Das Quellsignal für {selectedChannel.name} wird aktualisiert. Klicke auf &quot;Neu verbinden&quot; oder wähle einen anderen Sender.
                      </p>
                      <button
                        onClick={handleReload}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-md transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Neu verbinden
                      </button>
                    </div>
                  </div>
                )}

                {/* 2-MINUTE PAYWALL OVERLAY FOR VISITORS - ROCK SOLID & FIXED */}
                {isTimeExpired && (
                  <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md text-center select-auto">
                    <div className="max-w-lg w-full p-6 sm:p-8 rounded-2xl bg-[#0f121d] border border-red-500/50 shadow-2xl shadow-red-950/80 relative">
                      {/* Subtle accent glow */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-red-600/30 blur-2xl pointer-events-none" />

                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Lock className="w-3.5 h-3.5" />
                        <span>2-Minuten Live-Vorschau abgelaufen</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-2.5 tracking-tight">
                        Jetzt IPTV Österreich dauerhaft freischalten
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                        Deine 2-minütige Testphase ist beendet. Sichere dir jetzt sofortigen 4K UHD Zugang zu über <strong className="text-white font-semibold">21.000 Live-Sendern</strong> und <strong className="text-white font-semibold">120.000 Filmen & Serien</strong> ohne Bindung.
                      </p>

                      {/* Benefits recap */}
                      <div className="grid grid-cols-2 gap-2 text-left text-xs text-slate-300 mb-6 bg-white/[0.04] p-3 rounded-xl border border-white/5">
                        <div className="flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>ORF UHD & Sky Sport Austria</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Firestick App-Code: 5320406</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Kein Vertrag · Einmalzahlung</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Tivimate & Smarters Pro</span>
                        </div>
                      </div>

                      {/* Primary and secondary CTAs - Buy Button Stays Still */}
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                          onClick={onScrollToPricing}
                          className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-xl shadow-xl shadow-red-900/60 active:scale-98 transition-all cursor-pointer"
                        >
                          <Zap className="w-4 h-4 fill-current" />
                          Jetzt Paket wählen & freischalten
                        </button>
                        <a
                          href="https://wa.me/16614570833?text=Hallo%20IPTV%20Österreich,%20meine%20Live-Vorschau%20ist%20abgelaufen.%20Ich%20möchte%20ein%20Paket%20kaufen."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 text-xs font-semibold text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/60 rounded-xl border border-emerald-500/30 transition-all"
                        >
                          WhatsApp Express
                        </a>
                      </div>

                      {/* VIP Key footnote */}
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                        <span>VIP-Freischaltcode vorhanden?</span>
                        <button
                          onClick={() => {
                            setAdminEmailInput('');
                            setAdminError('');
                            setShowAdminModal(true);
                          }}
                          className="text-amber-400 hover:text-amber-300 hover:underline inline-flex items-center gap-1.5 cursor-pointer font-medium"
                        >
                          <Key className="w-3.5 h-3.5" />
                          Schlüssel eingeben
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Ambient Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none z-10" />

                {/* Top Corner Watermark & Stream Quality */}
                <div className={`absolute top-4 left-4 z-20 flex items-center gap-2 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="bg-red-600/90 backdrop-blur-md text-white font-bold text-[11px] px-2.5 py-1 rounded tracking-wider shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    LIVE
                  </span>
                  <span className="bg-black/70 backdrop-blur-md text-amber-300 font-mono text-[11px] px-2.5 py-1 rounded border border-white/10">
                    {selectedChannel.badge}
                  </span>
                  <span className="hidden sm:inline-flex bg-black/70 backdrop-blur-md text-slate-300 text-[11px] px-2.5 py-1 rounded border border-white/10">
                    M3U8 HLS Feed
                  </span>
                </div>

                <div className={`absolute top-4 right-4 z-20 flex items-center gap-2 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                  {/* Visitor Live Countdown Timer or Permanent Expired Indicator */}
                  {!isAdmin && (
                    isTimeExpired ? (
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-950/90 backdrop-blur-md border border-red-500/50 text-red-300 text-xs shadow-lg">
                        <Lock className="w-3.5 h-3.5 text-red-400" />
                        <span className="text-[11px] font-bold">Vorschau abgelaufen</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs shadow-lg">
                        <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                        <span className="text-[11px] font-medium hidden sm:inline">Vorschau:</span>
                        <span className="font-mono font-bold text-white bg-amber-500/20 px-1.5 py-0.5 rounded text-[11px]">
                          {formatTime(remainingSeconds)}
                        </span>
                      </div>
                    )
                  )}

                  <span className="bg-black/70 backdrop-blur-md text-emerald-400 font-mono text-[11px] px-2.5 py-1 rounded border border-white/10 flex items-center gap-1.5">
                    <Wifi className="w-3 h-3" />
                    VIX Interxion: 9ms
                  </span>
                </div>

                {/* Center Big Play Button (if paused) */}
                {!isPlaying && !isLoading && !streamError && !isTimeExpired && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <button
                      onClick={togglePlay}
                      className="w-16 h-16 rounded-full bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer"
                      title="Wiedergabe starten"
                    >
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    </button>
                  </div>
                )}

                {/* Bottom TV OSD / EPG Info bar & Interactive Player Controls */}
                <div className={`absolute bottom-4 left-4 right-4 z-20 bg-black/80 backdrop-blur-md rounded-xl p-3.5 border border-white/10 flex flex-wrap items-center justify-between gap-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}>
                  <div className="flex items-center gap-3">
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlay}
                      className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                      title={isPlaying ? 'Pausieren' : 'Abspielen'}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current translate-x-0.5" />
                      )}
                    </button>

                    {/* Mute/Unmute Audio Toggle */}
                    <button
                      onClick={toggleMute}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                        isMuted
                          ? 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/30'
                          : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30'
                      }`}
                      title={isMuted ? 'Ton aktivieren' : 'Stummschalten'}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-4 h-4 text-amber-300" />
                          <span>Ton an</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4 text-emerald-300" />
                          <span>Live Ton</span>
                        </>
                      )}
                    </button>

                    {/* Fullscreen Button */}
                    <button
                      onClick={toggleFullscreen}
                      className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                      title="Vollbild"
                    >
                      {isFullscreen ? (
                        <Minimize2 className="w-4 h-4" />
                      ) : (
                        <Maximize2 className="w-4 h-4" />
                      )}
                    </button>

                    {/* Channel & EPG info */}
                    <div className="ml-1 hidden sm:block">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">
                          {selectedChannel.name}
                        </span>
                        <span className="text-slate-400 text-xs">·</span>
                        <span className="text-slate-300 text-xs font-medium truncate max-w-[280px]">
                          {selectedChannel.event}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-0.5 text-[11px] text-slate-400 font-mono">
                        <span>Bitrate: {selectedChannel.bitrate}</span>
                        <span>·</span>
                        <span>{selectedChannel.fps}</span>
                        <span>·</span>
                        <span>{selectedChannel.audio}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onScrollToPricing}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-md shadow-red-900/40 transition-colors whitespace-nowrap cursor-pointer ml-auto"
                  >
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    Auf deinem TV freischalten
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* VIP Key Access Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-md w-full bg-[#111420] border border-amber-500/30 rounded-2xl p-6 shadow-2xl relative text-left">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5 text-white font-bold text-base">
                <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Key className="w-4 h-4" />
                </div>
                <span>VIP Zugangsschlüssel</span>
              </div>
              <button
                onClick={() => {
                  setShowAdminModal(false);
                  setAdminError('');
                }}
                className="text-slate-400 hover:text-white text-base cursor-pointer p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Gib deinen persönlichen VIP-Zugangsschlüssel ein, um die Live-Vorschau ohne 2-Minuten-Limit dauerhaft und unterbrechungsfrei freizuschalten.
            </p>

            <form onSubmit={handleAdminAuth} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                  Zugangsschlüssel / VIP-Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={adminEmailInput}
                    onChange={(e) => {
                      setAdminEmailInput(e.target.value);
                      setAdminError('');
                    }}
                    placeholder="Zugangsschlüssel eingeben..."
                    className="w-full px-3.5 py-2.5 pl-10 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:border-amber-400 focus:outline-none placeholder:text-slate-600 font-mono tracking-wide"
                    autoFocus
                    required
                  />
                  <Key className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {adminError && (
                <p className="text-xs text-red-400 flex items-center gap-1.5 bg-red-950/30 border border-red-500/20 px-3 py-2 rounded-lg">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  {adminError}
                </p>
              )}

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-950/40 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Unlock className="w-4 h-4" />
                  Stream jetzt freischalten
                </button>
              </div>

              {isAdmin && (
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={handleResetPreviewTimer}
                    className="text-amber-400 hover:text-amber-300 underline cursor-pointer text-[11px]"
                  >
                    Besucher-Timer zurücksetzen
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAdmin(false);
                      setShowAdminModal(false);
                    }}
                    className="text-slate-400 hover:text-white underline cursor-pointer text-[11px]"
                  >
                    Abmelden (Besucher-Modus)
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};


