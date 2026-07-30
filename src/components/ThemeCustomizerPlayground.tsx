import React from 'react';
import { Palette, Sparkles, Check } from 'lucide-react';

interface ThemeOption {
  id: string;
  name: string;
  color: string;
  glow: string;
  description: string;
}

const themes: ThemeOption[] = [
  {
    id: 'red',
    name: 'Fox Red',
    color: '#E50914',
    glow: 'rgba(229, 9, 20, 0.45)',
    description: 'Signature vibrant OLED crimson red glowing theme'
  },
  {
    id: 'violet',
    name: 'Cyber Violet',
    color: '#8B5CF6',
    glow: 'rgba(139, 92, 246, 0.45)',
    description: 'Deep neon purple theme for night sessions'
  },
  {
    id: 'crimson',
    name: 'Crimson Flame',
    color: '#FF2A55',
    glow: 'rgba(255, 42, 85, 0.45)',
    description: 'High-intensity electric red spatial theme'
  },
  {
    id: 'emerald',
    name: 'Emerald Mist',
    color: '#00E599',
    glow: 'rgba(0, 229, 153, 0.45)',
    description: 'Fresh cyber mint green glowing aesthetics'
  },
];

interface Props {
  currentTheme: string;
  onSelectTheme: (themeId: string) => void;
}

export const ThemeCustomizerPlayground: React.FC<Props> = ({ currentTheme, onSelectTheme }) => {
  return (
    <section id="customizer" className="py-24 bg-surface text-slate-100 relative overflow-hidden border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-brand-red text-xs font-semibold uppercase tracking-wider mb-4 font-ubuntu">
            <Palette className="w-3.5 h-3.5" />
            <span>Interactive Spatial UI Theme Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-lato">
            Custom Accent Themes in Real-Time
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-nunito">
            Test the spatial UI theme switcher right now on this landing page! Click any color swatch below to transform the site's primary accent color.
          </p>
        </div>

        {/* Theme Swatch Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {themes.map((t) => {
            const isSelected = currentTheme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => onSelectTheme(t.id)}
                className={`p-6 rounded-3xl border transition-all duration-300 text-left cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-white/10 border-brand-red shadow-[0_0_30px_var(--brand-glow)] scale-105'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                      style={{ backgroundColor: t.color, boxShadow: `0 0 20px ${t.glow}` }}
                    >
                      {isSelected && <Check className="w-5 h-5 text-white stroke-[3]" />}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      HEX {t.color}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-red transition-colors font-lato">
                    {t.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-nunito">
                    {t.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-ubuntu">
                  <span className="text-slate-400">Status:</span>
                  <span className={`font-semibold ${isSelected ? 'text-brand-red' : 'text-slate-500'}`}>
                    {isSelected ? 'Active Theme' : 'Click to Apply'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Theme Preview Box */}
        <div className="max-w-xl mx-auto p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl flex items-center justify-between">
          <div className="flex items-center space-x-3 text-left">
            <Sparkles className="w-5 h-5 text-brand-red" />
            <div>
              <div className="text-xs font-bold text-white font-ubuntu">Live CSS Variable Synchronizer</div>
              <div className="text-[11px] text-slate-400 font-nunito">All glows, buttons, and badges respond instantly to theme switching</div>
            </div>
          </div>
          <span className="px-3 py-1 bg-brand-red/20 text-brand-red rounded-lg text-xs font-mono font-bold">
            --brand-accent
          </span>
        </div>

      </div>
    </section>
  );
};
