import React from 'react';
import { Cpu, Play, Search, History, Palette, CheckCircle2, Zap } from 'lucide-react';

export const FeatureBentoGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#09090D] text-slate-100 relative overflow-hidden border-t border-white/10">
      
      {/* Background Radial Mask Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 radial-mask pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-brand-red text-xs font-semibold uppercase tracking-wider mb-4 font-ubuntu">
            <Zap className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-lato">
            Engineered for Unmatched Performance
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-nunito">
            Every feature in Fox Anime is optimized for smooth streaming, zero advertisement interruptions, and responsive navigation.
          </p>
        </div>

        {/* Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Card 1: Multi-Server Streaming */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-surface-card border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-brand-red/10 border border-brand-red/20 text-brand-red">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 font-ubuntu">
                  Multi-Server Engine
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 font-lato">
                Multi-Server Streaming Experience
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-nunito">
                Intelligent streaming system that delivers direct high-speed video playback, bypassing ad wrappers and annoying popups with seamless server fallback for zero stream buffering.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 font-ubuntu text-xs">
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">Instant Server Fallback</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">Ad-Free Direct Streams</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">Multi-Quality Selection</span>
            </div>
          </div>

          {/* Bento Card 2: High-Definition Video Player */}
          <div className="p-8 rounded-3xl bg-surface-card border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all group">
            <div>
              <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit mb-6">
                <Play className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-lato">
                High-Definition Video Player
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 font-nunito">
                Hardware-accelerated 60FPS video playback with gesture controls, skip intro/outro, quality selection, and mini-player support.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              <span className="px-2.5 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-slate-300 font-ubuntu">1080p60</span>
              <span className="px-2.5 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-slate-300 font-ubuntu">Auto-Next</span>
              <span className="px-2.5 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-slate-300 font-ubuntu">Skip Intro</span>
            </div>
          </div>

          {/* Bento Card 3: Realtime Instant Search */}
          <div className="p-8 rounded-3xl bg-surface-card border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all group">
            <div>
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-lato">
                Realtime Instant Search
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 font-nunito">
                Instant title search engine with low-latency debouncing, auto-suggestions, and category genre filter chips.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-400 font-ubuntu">
              <span>Search speed:</span>
              <span className="font-mono text-cyan-400 font-bold">Instant</span>
            </div>
          </div>

          {/* Bento Card 4: Watch History Tracker */}
          <div className="p-8 rounded-3xl bg-surface-card border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all group">
            <div>
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 w-fit mb-6">
                <History className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-lato">
                Watch History Memory
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 font-nunito">
                Persistent watch history tracking exact episode timestamps, completion percentages, and favorite watchlists.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs text-amber-400 font-ubuntu">
              <CheckCircle2 className="w-4 h-4" />
              <span>Offline Progress Storage</span>
            </div>
          </div>

          {/* Bento Card 5: Custom Dark Visual Style */}
          <div className="p-8 rounded-3xl bg-surface-card border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all group">
            <div>
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-6">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-lato">
                Custom Dark Visual Style
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 font-nunito">
                Built-in modern dark interface with Fox Red accent styling, glassmorphic panels, and smooth transitions.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[#E50914] ring-2 ring-white/20" />
              <div className="w-4 h-4 rounded-full bg-[#8B5CF6]" />
              <div className="w-4 h-4 rounded-full bg-[#FF2A55]" />
              <div className="w-4 h-4 rounded-full bg-[#00E599]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
