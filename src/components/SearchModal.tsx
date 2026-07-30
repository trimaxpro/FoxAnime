import React, { useState } from 'react';
import { Search, X, Star, Play, Sparkles } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const sampleAnime = [
  { id: '1', title: 'Solo Leveling', genre: 'Action, Fantasy', rating: '8.9', status: 'Ongoing', episodes: 12 },
  { id: '2', title: 'Demon Slayer: Hashira Training Arc', genre: 'Action, Supernatural', rating: '8.7', status: 'Completed', episodes: 8 },
  { id: '3', title: 'Jujutsu Kaisen Season 2', genre: 'Action, Shounen', rating: '8.8', status: 'Completed', episodes: 23 },
  { id: '4', title: 'Attack on Titan: The Final Season', genre: 'Dark Fantasy', rating: '9.1', status: 'Completed', episodes: 28 },
  { id: '5', title: 'Chainsaw Man', genre: 'Action, Horror', rating: '8.5', status: 'Completed', episodes: 12 },
];

export const SearchModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim() === '' 
    ? sampleAnime 
    : sampleAnime.filter(a => a.title.toLowerCase().includes(query.toLowerCase()) || a.genre.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/85 backdrop-blur-xl animate-fade-in">
      
      {/* Modal Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-surface-card border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden z-10">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center space-x-3 bg-black/80">
          <Search className="w-5 h-5 text-brand-red" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 15,000+ anime titles by name or genre..."
            autoFocus
            className="w-full bg-transparent text-white text-base font-sans placeholder-slate-500 focus:outline-none"
          />
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-2">
          
          <div className="flex items-center justify-between text-[11px] text-slate-400 px-2 py-1 font-mono">
            <span className="flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-brand-red" />
              <span>Realtime Scraper Simulation</span>
            </span>
            <span>Debounce latency: <strong className="text-emerald-400">14ms</strong></span>
          </div>

          {filtered.map((anime) => (
            <div
              key={anime.id}
              onClick={() => alert(`Launching HLS stream player for ${anime.title}...`)}
              className="p-3 rounded-2xl bg-white/[0.02] hover:bg-white/10 border border-white/5 hover:border-brand-red/30 transition-all flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-bold">
                  <Play className="w-4 h-4 fill-brand-red group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-brand-red transition-colors font-lato">
                    {anime.title}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center space-x-2 font-nunito">
                    <span>{anime.genre}</span>
                    <span>•</span>
                    <span>{anime.episodes} Ep</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 font-ubuntu">
                <div className="flex items-center space-x-1 text-amber-400 text-xs font-bold bg-amber-400/10 px-2 py-1 rounded-lg">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>{anime.rating}</span>
                </div>
                <span className="px-2 py-0.5 text-[10px] rounded-md bg-white/5 border border-white/10 text-slate-300">
                  {anime.status}
                </span>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="py-12 text-center text-slate-500 text-sm font-nunito">
              No matching anime titles found for "{query}".
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="p-3 bg-black/90 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Press <kbd className="px-1 py-0.5 bg-white/10 rounded text-slate-300">ESC</kbd> to close search</span>
          <span>Fox Anime v1.0.0</span>
        </div>

      </div>
    </div>
  );
};
