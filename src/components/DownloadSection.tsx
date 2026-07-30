import React from 'react';
import { Download, Monitor, Github } from 'lucide-react';

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-neutral-950 text-neutral-100 relative overflow-hidden border-t border-neutral-800">
      
      {/* Background Radial Mask Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 radial-mask pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-brand-red text-xs font-bold uppercase tracking-wider mb-4 font-ubuntu">
            <Download className="w-4 h-4" />
            <span>Windows Desktop Application</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide uppercase text-neutral-100 mb-3 font-oswald">
            Get Fox Anime for Windows
          </h2>
          <p className="text-neutral-400 text-base font-medium font-nunito">
            Official desktop release. 100% free, ad-free, and open-source.
          </p>
        </div>

        {/* Download Card Container based on exact user card reference */}
        <div className="max-w-md mx-auto mb-12">
          <div className="group relative overflow-hidden rounded-2xl bg-neutral-950 p-6 font-sans border border-neutral-800 shadow-2xl hover:border-neutral-700 transition-all duration-500">
            
            {/* Ambient Top Glow Blur */}
            <div className="absolute -top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-red/10 blur-3xl transition-all duration-700 group-hover:bg-brand-red/20 pointer-events-none" />

            <div className="relative flex flex-col gap-5">
              
              {/* Header Row */}
              <div className="flex items-start justify-between border-b border-neutral-800 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10 border border-brand-red/20 text-brand-red">
                    <Monitor className="h-5 w-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-200 text-base font-lato">Fox Anime for Windows</p>
                    <p className="text-xs text-neutral-500 font-nunito">Windows 10 / 11 (64-bit)</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-brand-red/10 border border-brand-red/20 text-brand-red text-[11px] font-bold font-ubuntu">
                  Official
                </span>
              </div>

              {/* Divided Metrics Stats */}
              <div className="flex divide-x divide-neutral-800">
                <div className="flex-1 pr-4">
                  <p className="text-xs font-medium text-neutral-500">Performance</p>
                  <p className="text-xl font-semibold text-neutral-100 font-oswald">60 FPS</p>
                  <p className="mt-1 text-xs font-medium text-brand-red">+Ultra-Smooth</p>
                </div>
                <div className="flex-1 pl-4">
                  <p className="text-xs font-medium text-neutral-500">Ad Blocking</p>
                  <p className="text-xl font-semibold text-neutral-100 font-oswald">100%</p>
                  <p className="mt-1 text-xs font-medium text-emerald-400">Zero Ads</p>
                </div>
              </div>

              {/* SVG Stream Graph with Glowing Pulse Dot */}
              <div className="relative h-24 w-full my-1">
                <svg className="h-full w-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="aurora-gradient-red" x1={0} y1={0} x2={0} y2={1}>
                      <stop offset="0%" stopColor="#E50914" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#E50914" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <path d="M0,65 C50,20 80,80 150,70 S250,50 300,85" fill="none" stroke="#E50914" strokeWidth={2} />
                  <path d="M0,100 L0,65 C50,20 80,80 150,70 S250,50 300,85 L300,100 Z" fill="url(#aurora-gradient-red)" />
                </svg>
                <div className="absolute right-[-1px] top-[81px]">
                  <div className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red shadow-lg shadow-brand-red/50" />
                  <div className="animate-ping absolute h-full w-full rounded-full bg-brand-red/40" />
                </div>
              </div>

              {/* Action Button */}
              <div className="border-t border-neutral-800 pt-5">
                <button 
                  onClick={() => alert("Starting download for Fox-Anime-Setup-1.0.0.exe...")}
                  className="w-full rounded-lg border border-brand-red/50 bg-transparent px-4 py-3 text-sm font-semibold text-brand-red transition-colors duration-300 hover:bg-brand-red hover:text-white flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download for Windows</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* GitHub Source Note */}
        <div className="max-w-md mx-auto p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between text-xs font-nunito">
          <div className="flex items-center space-x-3 text-neutral-300">
            <Github className="w-4 h-4 text-neutral-100 flex-shrink-0" />
            <span className="font-medium">Open Source on GitHub</span>
          </div>
          <a 
            href="https://github.com/trimaxpro/FoxAnime" 
            target="_blank" 
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 font-ubuntu font-bold text-xs transition-colors"
          >
            View Repo
          </a>
        </div>

      </div>
    </section>
  );
};
