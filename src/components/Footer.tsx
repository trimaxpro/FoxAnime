import React, { useState } from 'react';
import { ShieldCheck, FileText, Scale } from 'lucide-react';
import { LegalModal, LegalModalType } from './LegalModal';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<LegalModalType>(null);

  return (
    <>
      <footer className="bg-neutral-950 text-neutral-400 py-4 border-t border-neutral-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Footer Content Grid */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Brand Logo & Title */}
            <a href="#" className="flex items-center space-x-3.5 group">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img src="/assets/logo.png" alt="Fox Anime" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-oswald text-2xl font-bold tracking-wide leading-none text-neutral-100 uppercase group-hover:text-brand-red transition-colors">
                  Fox Anime
                </span>
                <p className="font-nunito text-[11px] font-extrabold text-brand-red tracking-[0.2em] uppercase mt-1">
                  Desktop Streaming Client
                </p>
              </div>
            </a>

            {/* Legal Pages with Header-Style Theme Icons */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base font-bold font-lato text-neutral-300">
              <button 
                onClick={() => setModalType('privacy')}
                className="flex items-center space-x-2 hover:text-brand-red transition-colors group cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-neutral-400 group-hover:text-brand-red transition-colors" />
                <span>Privacy Policy</span>
              </button>
              
              <button 
                onClick={() => setModalType('terms')}
                className="flex items-center space-x-2 hover:text-brand-red transition-colors group cursor-pointer"
              >
                <FileText className="w-4 h-4 text-neutral-400 group-hover:text-brand-red transition-colors" />
                <span>Terms of Service</span>
              </button>
              
              <button 
                onClick={() => setModalType('dmca')}
                className="flex items-center space-x-2 hover:text-brand-red transition-colors group cursor-pointer"
              >
                <Scale className="w-4 h-4 text-neutral-400 group-hover:text-brand-red transition-colors" />
                <span>DMCA</span>
              </button>
            </div>

          </div>

          {/* Crawler-Only Semantic Metadata for Search Indexing (Visually Hidden, Zero Layout Impact) */}
          <aside aria-label="SEO Indexing Topics" className="sr-only">
            <h3>Popular Anime Streaming Topics &amp; Features</h3>
            <p>
              Free desktop anime client for streaming subbed and dubbed anime series in full 1080p HD.
              Direct links and community directory for top anime platforms including HiAnime, Aniwatch, GogoAnime, Zoro,
              stream anime episodes, seasonal simulcasts, episode progress tracker, multi-server playback, and anime alternatives catalog.
            </p>
            <ul>
              <li>free anime website, free anime streaming website, new anime website, fox anime website, fox anime</li>
              <li>best free anime streaming website, free anime streaming websites, best free anime streaming website reddit</li>
              <li>free anime streaming websites reddit, free anime streaming websites 2026, free anime streaming websites online</li>
              <li>free anime streaming websites list, free anime streaming website reddit, free anime streaming website online</li>
              <li>free anime streaming sites with english subtitles, what is the best free anime streaming app, free anime streaming sites for tv</li>
              <li>anime streaming website for free, free anime streaming sites in japan, best free anime streaming sites in 2026</li>
              <li>free anime watch website name, online free anime streaming website, online places to watch anime</li>
              <li>free anime watch site reddit, best free anime streaming site reddit 2026, free anime streaming sites with subtitles</li>
              <li>free anime streaming sites that work, free streaming website to watch anime, what streaming service has anime</li>
              <li>free anime streaming website without ads, free anime streaming sites with english dub, free anime streaming sites without ads reddit</li>
              <li>free anime watch sites without ads, free anime streaming sites 2026 reddit, best free anime streaming websites 2025</li>
              <li>free anime websites, best free anime website reddit, free anime websites reddit, free anime websites app</li>
              <li>free anime websites to watch reddit, free anime website with no pop ups, free anime websites in hindi app apk</li>
              <li>free anime websites without login, free anime website with no ads, free anime website online, free anime website to watch online</li>
              <li>free anime website list, list of free anime website to watch, free anime website to watch one piece, free anime website list reddit</li>
              <li>free anime website app, free anime website apk, free anime website attack on titan, free anime websites app download</li>
              <li>ad free anime website reddit, any free anime website, another free anime website, free anime website cartoon</li>
              <li>free anime websites crunchyroll, free anime website with english subtitles, anime free website english dub</li>
              <li>free anime websites in english, free anime website github, free anime websites gachiakuta, good free anime website reddit</li>
              <li>best website to watch anime for free in google, free anime website in google, free anime websites hd, free anime website index</li>
              <li>free anime website with japanese subtitles, free anime website legal, free anime website like zoro, legal free anime website</li>
              <li>free website to watch anime on laptop, free legal website to watch anime, free anime website to watch solo leveling</li>
              <li>free anime website no pop ups, free anime website no ads 2026, free anime website naruto, new free anime website 2026</li>
              <li>free anime website online reddit, one piece free anime website, free app or website to watch anime</li>
              <li>free website to watch one piece anime, reddit free anime website, reddit best free anime website, anime free streaming website reddit</li>
              <li>best free anime streaming website reddit, free anime website streaming, free anime websites to watch online dub</li>
              <li>free anime websites that are still up, best free anime streaming website, free anime website to watch on tv</li>
              <li>top free anime website to watch, the best free anime website, top 5 free anime website, top 5 best free anime website</li>
              <li>free anime website without pop ups, free anime website with no pop up ads, free anime website with no ads reddit</li>
              <li>free anime website watch online, watch free anime website reddit, free anime watching website 2026</li>
            </ul>
          </aside>

        </div>
      </footer>

      {/* Interactive Legal Content Modal */}
      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </>
  );
};
