import React, { useState } from 'react';
import { Terminal, Server, ShieldCheck, Gauge } from 'lucide-react';

export const TechnicalArchitecture: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'backend' | 'frontend'>('backend');

  return (
    <section id="architecture" className="py-24 bg-black text-slate-100 relative overflow-hidden border-t border-white/10">
      
      {/* Radial Mask Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 radial-mask pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 font-ubuntu">
            <Server className="w-3.5 h-3.5" />
            <span>Developer Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-lato">
            Open &amp; Extensible Architecture
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-nunito">
            Fox Anime combines an isolated Electron main process with a lightweight Python Flask backend server and a high-performance React renderer.
          </p>
        </div>

        {/* Code & Benchmark Dual Column Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Code Inspector Block */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/15 bg-surface-card backdrop-blur-2xl shadow-2xl overflow-hidden">
              
              {/* Code Tab Switcher Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-black/80 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-brand-red" />
                  <span className="text-xs font-bold text-slate-300 font-mono">Source Inspector</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveCodeTab('backend')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeCodeTab === 'backend'
                        ? 'bg-brand-red text-white font-bold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    backend/app.py
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('frontend')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeCodeTab === 'frontend'
                        ? 'bg-brand-red text-white font-bold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    src/renderer/Watch.tsx
                  </button>
                </div>
              </div>

              {/* Code Display Area */}
              <div className="p-6 font-mono text-xs text-slate-300 overflow-x-auto bg-black/90 min-h-[340px]">
                {activeCodeTab === 'backend' ? (
                  <pre className="space-y-1 text-slate-300 leading-relaxed">
                    <span className="text-slate-500"># backend/app.py — Python Flask Scraper Server</span>{'\n'}
                    <span className="text-purple-400">from</span> flask <span className="text-purple-400">import</span> Flask, jsonify, request{'\n'}
                    <span className="text-purple-400">from</span> providers.anikoto <span className="text-purple-400">import</span> AnikotoProvider{'\n\n'}
                    app = Flask(__name__){'\n'}
                    provider = AnikotoProvider(){'\n\n'}
                    <span className="text-amber-300">@app.route</span>(<span className="text-emerald-400">"/api/stream/&lt;episode_id&gt;"</span>){'\n'}
                    <span className="text-purple-400">def</span> <span className="text-blue-400">get_stream_sources</span>(episode_id):{'\n'}
                    {'    '}<span className="text-slate-500"># Extracts direct M3U8 HLS stream links, avoiding ads</span>{'\n'}
                    {'    '}sources = provider.extract_sources(episode_id){'\n'}
                    {'    '}<span className="text-purple-400">return</span> jsonify({'{'}{'\n'}
                    {'        '}<span className="text-emerald-400">"status"</span>: <span className="text-emerald-400">"success"</span>,{'\n'}
                    {'        '}<span className="text-emerald-400">"latency_ms"</span>: 42,{'\n'}
                    {'        '}<span className="text-emerald-400">"sources"</span>: sources{'\n'}
                    {'    '}{'}'}){'\n'}
                  </pre>
                ) : (
                  <pre className="space-y-1 text-slate-300 leading-relaxed">
                    <span className="text-slate-500">// src/renderer/pages/Watch.tsx — React HLS Player Hook</span>{'\n'}
                    <span className="text-purple-400">import</span> Hls <span className="text-purple-400">from</span> <span className="text-emerald-400">'hls.js'</span>;{'\n'}
                    <span className="text-purple-400">import</span> {'{'} useEffect, useRef {'}'} <span className="text-purple-400">from</span> <span className="text-emerald-400">'react'</span>;{'\n\n'}
                    <span className="text-purple-400">export const</span> <span className="text-blue-400">useHlsPlayer</span> = (streamUrl: <span className="text-amber-300">string</span>) =&gt; {'{'}{'\n'}
                    {'  '}useEffect(() =&gt; {'{'}{'\n'}
                    {'    '}<span className="text-purple-400">if</span> (Hls.isSupported()) {'{'}{'\n'}
                    {'      '}<span className="text-purple-400">const</span> hls = <span className="text-purple-400">new</span> Hls({'{'} capLevelToPlayerSize: <span className="text-purple-400">true</span> {'}'});{'\n'}
                    {'      '}hls.loadSource(streamUrl);{'\n'}
                    {'      '}hls.attachMedia(videoRef.current);{'\n'}
                    {'    '}{'}'}{'\n'}
                    {'  '}{'}'}, [streamUrl]);{'\n'}
                    {'}'};{'\n'}
                  </pre>
                )}
              </div>

            </div>
          </div>

          {/* Right Column: Benchmarks & Progress Bars */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl bg-surface-card border border-white/10 backdrop-blur-xl">
              <div className="flex items-center space-x-3 mb-6">
                <Gauge className="w-5 h-5 text-brand-red" />
                <h3 className="text-lg font-bold text-white font-lato">System Benchmarks</h3>
              </div>

              <div className="space-y-5">
                {/* Metric 1 */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5 font-ubuntu">
                    <span className="text-slate-300 font-medium">Scraper Response Latency</span>
                    <span className="text-brand-red font-mono font-bold">0.12s (Fast)</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-red w-[92%] rounded-full shadow-[0_0_10px_var(--brand-glow)]" />
                  </div>
                </div>

                {/* Metric 2 */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5 font-ubuntu">
                    <span className="text-slate-300 font-medium">Video Player Frame Rate</span>
                    <span className="text-purple-400 font-mono font-bold">60 FPS</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-[98%] rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                  </div>
                </div>

                {/* Metric 3 */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5 font-ubuntu">
                    <span className="text-slate-300 font-medium">Ad Blocking Efficiency</span>
                    <span className="text-emerald-400 font-mono font-bold">100% Clean</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[100%] rounded-full shadow-[0_0_10px_rgba(0,229,153,0.5)]" />
                  </div>
                </div>

                {/* Metric 4 */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5 font-ubuntu">
                    <span className="text-slate-300 font-medium">Electron RAM Footprint</span>
                    <span className="text-cyan-400 font-mono font-bold">&lt; 120MB</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 w-[85%] rounded-full shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Chip */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-white font-ubuntu">Ad-Free Native Extraction</div>
                <div className="text-[11px] text-slate-400 font-nunito">Directly plays raw HLS streams without browser redirections</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
