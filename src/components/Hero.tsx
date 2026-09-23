import React, { useState, useEffect } from 'react';
import { Download, Clock, Search, Zap, Server } from 'lucide-react';
import { SakugabooruBackground } from './SakugabooruBackground';

interface HeroProps {
  onDownloadClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
  const [downloadCount, setDownloadCount] = useState<number | null>(190);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      fetch('https://api.github.com/repos/trimaxpro/FoxAnime/releases/tags/v1.0.0').then(r => r.json()),
      fetch('https://api.github.com/repos/trimaxpro/FoxAnime/releases/tags/v1.1.0').then(r => r.json()),
    ])
      .then(results => {
        const total = results.reduce(
          (sum: number, data: { assets?: { download_count: number }[] }) =>
            sum + (data.assets || []).reduce((s: number, a) => s + (a.download_count || 0), 0),
          0
        );
        if (!cancelled) setDownloadCount(total > 0 ? total : 190);
      })
      .catch(() => { if (!cancelled) setDownloadCount(190); });
    return () => { cancelled = true; };
  }, []);

  const handleDownloadClick = (e: React.MouseEvent) => {
    setDownloadCount(prev => (prev !== null ? prev + 1 : 1));
    if (onDownloadClick) {
      e.preventDefault();
      onDownloadClick();
    }
  };

  return (
    <section id="hero" className="relative pt-6 pb-6 md:pt-8 md:pb-8 flex flex-col justify-center items-center overflow-hidden bg-neutral-950">
      
      {/* Full-bleed Red Accent Grid Background Pattern for Outer Hero Section */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 radial-mask pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
        
        {/* Sakugabooru Dynamic Video Background confined STRICTLY to the Graph/Card Hero Area */}
        <SakugabooruBackground 
          initialBlur="md"
          className="hero-grid-card rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden mb-0"
        >
          <div className="p-6 sm:p-10 text-center">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide uppercase text-neutral-100 mb-4 max-w-5xl mx-auto leading-[1.12] font-oswald drop-shadow-md">
              Stream Your Favorite Anime <span className="text-brand-red">In Full HD</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-6 font-medium font-nunito leading-relaxed drop-shadow">
              High-definition anime streaming with automated episode progress tracking and instant title search. Anime pages run clean; the adult section may show ads.
            </p>

            {/* Crisp Point-to-Point Feature Chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8 font-ubuntu text-xs">
              <div className="px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-neutral-800 text-neutral-200 flex items-center space-x-1.5 hover:border-brand-red/40 transition-colors backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 text-brand-red" />
                <span>Full HD 1080p</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-neutral-800 text-neutral-200 flex items-center space-x-1.5 hover:border-brand-red/40 transition-colors backdrop-blur-md">
                <Server className="w-3.5 h-3.5 text-brand-red" />
                <span>Multi-Server</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-neutral-800 text-neutral-200 flex items-center space-x-1.5 hover:border-brand-red/40 transition-colors backdrop-blur-md">
                <Clock className="w-3.5 h-3.5 text-brand-red" />
                <span>Auto Progress Resume</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-neutral-800 text-neutral-200 flex items-center space-x-1.5 hover:border-brand-red/40 transition-colors backdrop-blur-md">
                <Search className="w-3.5 h-3.5 text-brand-red" />
                <span>Instant Title Search</span>
              </div>
            </div>

            {/* Action Buttons: Download Button + Download Counter */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-2">
              
              {/* Primary Comic Button in Fox Red Theme */}
              <a 
                href="https://github.com/trimaxpro/FoxAnime/releases/download/v1.1.0/Fox-Anime-v1.1.0-Windows.zip"
                download="Fox-Anime-v1.1.0-Windows.zip"
                rel="noopener noreferrer"
                className="comic-button group shadow-xl"
                onClick={handleDownloadClick}
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-ubuntu font-bold">Download</span>
              </a>

              {/* Download Counter Badge */}
              <div className="download-counter">
                <div className="download-counter-label">
                  <Download className="w-4 h-4" />
                  <span>Downloads</span>
                </div>
                <div className="download-counter-count">
                  {downloadCount !== null ? downloadCount.toLocaleString() : '—'}
                </div>
              </div>

            </div>

          </div>
        </SakugabooruBackground>

      </div>
    </section>
  );
};
