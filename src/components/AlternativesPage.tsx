import React, { useEffect, useState } from 'react';
import {
  Globe,
  RefreshCw,
  Copy,
  Check,
  Database,
} from 'lucide-react';
import { AdLeaderboard } from './AdLeaderboard';
import { FALLBACK_SITES, AnimeSite } from '../data/fallbackSites';

type LoadState = 'loading' | 'ready' | 'error';

const DEFAULT_THEME_FAVICON = '/assets/logo.png';

// Domain-level favicon overrides for sites that provide their own verified crisp icons
const FAVICON_OVERRIDES: Record<string, string> = {
  'theindex.moe': 'https://theindex.moe/favicon.ico',
  'anify.to': 'https://anify.to/favicon.ico',
  'kitsu.app': 'https://kitsu.io/favicon.ico',
  'kitsu.io': 'https://kitsu.io/favicon.ico',
  'animekai.com.ro': 'https://animekai.to/favicon.ico',
};

// Explicit domains requested to use the FoxAnime themed default favicon
const THEMED_DEFAULT_HOSTS = new Set([
  'thewiki.moe',
  'fmhy.net',
  'anikoto.site',
  'animesuge.bid',
]);

const faviconFor = (url: string): string => {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    if (THEMED_DEFAULT_HOSTS.has(host)) {
      return DEFAULT_THEME_FAVICON;
    }
    if (FAVICON_OVERRIDES[host]) {
      return FAVICON_OVERRIDES[host];
    }
    return `https://www.google.com/s2/favicons?sz=64&domain=${host}`;
  } catch {
    return DEFAULT_THEME_FAVICON;
  }
};

export const AlternativesPage: React.FC = () => {
  const [sites, setSites] = useState<AnimeSite[]>([]);
  const [state, setState] = useState<LoadState>('loading');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const load = async () => {
    setState('loading');
    try {
      // 1. Try local dev SQLite API or Cloudflare Pages D1 function
      const res = await fetch('/api/sites');
      if (res.ok) {
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setSites(data);
            setState('ready');
            return;
          }
        }
      }

      // 2. Fallback to exported static JSON data
      const jsonRes = await fetch('/data/sites.json');
      if (jsonRes.ok) {
        const jsonData = await jsonRes.json();
        if (Array.isArray(jsonData) && jsonData.length > 0) {
          setSites(jsonData);
          setState('ready');
          return;
        }
      }

      // 3. Fallback to bundled fallback dataset
      if (FALLBACK_SITES && FALLBACK_SITES.length > 0) {
        setSites(FALLBACK_SITES);
        setState('ready');
        return;
      }

      setState('error');
    } catch {
      if (FALLBACK_SITES && FALLBACK_SITES.length > 0) {
        setSites(FALLBACK_SITES);
        setState('ready');
      } else {
        setState('error');
      }
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleCopy = (e: React.MouseEvent, site: AnimeSite) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(site.url);
    setCopiedId(site.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 1800);
  };

  // Clean single string 2-line description
  const cleanDescription = (desc: string): string => {
    return desc.split('\n').join(' ').replace(/\s+/g, ' ').trim();
  };

  return (
    <section id="alternatives" className="pt-24 md:pt-28 pb-28 bg-neutral-950 text-neutral-100 min-h-screen relative overflow-hidden">
      
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase text-neutral-100 mb-4 font-oswald leading-none drop-shadow-md">
            Watch Online <span className="text-brand-red">Everywhere</span>
          </h1>

          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-brand-red text-xs font-semibold uppercase tracking-wider font-ubuntu shadow-xl backdrop-blur-md">
            <Database className="w-3.5 h-3.5 text-brand-red animate-pulse" />
            <span className="text-neutral-200">Anime Alternatives Directory</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span className="text-brand-red font-mono font-bold tracking-normal">
              {sites.length > 0 ? `${sites.length} Platforms Online` : 'Connecting...'}
            </span>
          </div>

          {/* Banner Leaderboard directly under Anime Alternatives Directory */}
          <div className="mt-7 flex justify-center">
            <AdLeaderboard className="w-full flex justify-center" />
          </div>
        </div>

        {/* Loading Skeleton (4 Columns x 3 Rows = 12 Cards) */}
        {state === 'loading' && (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-neutral-900/50 border border-neutral-800/70 p-4 h-[106px] flex flex-col justify-between animate-pulse w-full min-w-0"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded bg-neutral-800 flex-shrink-0" />
                  <div className="h-4 w-3/5 bg-neutral-800 rounded-full" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-2.5 w-full bg-neutral-800/80 rounded-full" />
                  <div className="h-2.5 w-4/5 bg-neutral-800/80 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {state === 'error' && (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-neutral-900/40 border border-neutral-800/80 rounded-3xl max-w-xl mx-auto p-8 shadow-2xl backdrop-blur-md">
            <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 mb-4 shadow-inner">
              <Globe className="w-7 h-7 text-brand-red" />
            </div>
            <h3 className="text-base font-ubuntu font-bold text-white mb-1.5">
              Database Connection Failed
            </h3>
            <p className="text-neutral-400 text-xs font-nunito mb-5 max-w-md leading-relaxed">
              We couldn't connect to the local SQLite database or Cloudflare D1 index. Please ensure the dev server is active and retry.
            </p>
            <button
              onClick={load}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-red text-white text-xs font-semibold font-ubuntu hover:bg-brand-red/90 transition-all cursor-pointer shadow-lg"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Database Link</span>
            </button>
          </div>
        )}

        {/* 4 Cards in a Row Grid (Strictly 4 Columns on lg/xl Screens) */}
        {state === 'ready' && sites.length > 0 && (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
            {sites.map((site) => {
              const isCopied = copiedId === site.id;
              const desc = cleanDescription(site.description);
              const initials = site.name.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2).toUpperCase() || 'AN';

              return (
                <a
                  key={site.id}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/95 border border-neutral-800/80 hover:border-brand-red/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(229,9,20,0.22)] cursor-pointer block overflow-hidden flex flex-col justify-between min-h-[104px] w-full min-w-0"
                  title={`${site.name} — ${site.url}`}
                >
                  {/* Top-Right Faint Watermark (Oswald display font monogram) */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 pointer-events-none select-none overflow-hidden flex items-center justify-end pr-2 opacity-[0.05] group-hover:opacity-[0.14] transition-all duration-300">
                    <span className="font-oswald font-extrabold text-3xl uppercase tracking-tighter text-white group-hover:text-brand-red transition-colors">
                      {initials}
                    </span>
                  </div>

                  {/* Top Row: Raw Favicon + Title (Ubuntu) + Category/Copy (Lato) */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center space-x-2.5 min-w-0 flex-1">
                        {/* Raw Favicon (No background circle, clean 20px icon, automatic fallback to theme icon on 404/error) */}
                        <img
                          src={faviconFor(site.url)}
                          alt=""
                          width={20}
                          height={20}
                          loading="lazy"
                          className="w-5 h-5 object-contain flex-shrink-0"
                          onError={(e) => {
                            const imgEl = e.currentTarget;
                            if (!imgEl.src.endsWith(DEFAULT_THEME_FAVICON)) {
                              imgEl.src = DEFAULT_THEME_FAVICON;
                            }
                          }}
                        />

                        {/* Title (Ubuntu Font - bold, clean, tech curved) */}
                        <h3 className="font-bold text-neutral-100 text-[14.5px] font-ubuntu truncate group-hover:text-brand-red transition-colors leading-tight tracking-tight">
                          {site.name}
                        </h3>
                      </div>

                      {/* Hover Actions & Category Badge (Lato Font - link icon removed) */}
                      <div className="flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 z-10">
                        <span className="font-lato text-[9.5px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-950/80 px-1.5 py-0.5 rounded border border-neutral-800/80">
                          {site.category || 'Stream'}
                        </span>
                        <button
                          onClick={(e) => handleCopy(e, site)}
                          className={`p-1 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer ${
                            isCopied ? 'text-emerald-400' : ''
                          }`}
                          title={isCopied ? 'URL copied!' : 'Copy URL'}
                        >
                          {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>

                    {/* Exact 2-Line Description (Inter Font - ultra-crisp, professional readability) */}
                    <p className="text-[12.5px] leading-snug text-neutral-400 font-sans line-clamp-2 group-hover:text-neutral-300 transition-colors">
                      {desc}
                    </p>
                  </div>

                </a>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default AlternativesPage;
