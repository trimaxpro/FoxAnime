import React, { useState } from 'react';
import { Home, Compass, Clock, Settings, Sparkles } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  image: string;
}

const tabs: TabItem[] = [
  {
    id: 'home',
    label: 'Anime',
    icon: <Home className="w-4 h-4" />,
    image: '/assets/homepage.png',
  },
  {
    id: 'browse',
    label: 'Browse',
    icon: <Compass className="w-4 h-4" />,
    image: '/assets/browsepage.png',
  },
  {
    id: 'history',
    label: 'History',
    icon: <Clock className="w-4 h-4" />,
    image: '/assets/historypage.png',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings className="w-4 h-4" />,
    image: '/assets/settingpage.png',
  },
];

export const AppShowcaseTabs: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('home');
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section id="showcase" className="pt-6 pb-16 sm:pt-8 sm:pb-20 bg-neutral-950 text-neutral-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-brand-red text-xs font-semibold uppercase tracking-wider mb-2.5 font-ubuntu">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Software Preview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-wide uppercase text-neutral-100 mb-2 font-oswald">
            Designed for Desktop Perfection
          </h2>
        </div>

        {/* Radio Island Control with exact original colors (#000 island, #222 indicator, #aaa text, #fff active) */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="inline-flex items-center p-[6px] rounded-full bg-black border border-neutral-800 shadow-2xl gap-1">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm transition-all duration-300 cursor-pointer font-ubuntu ${
                    isActive
                      ? 'bg-[#222222] text-white font-bold shadow-md -translate-y-[1px]'
                      : 'text-[#aaaaaa] hover:text-white'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 16:9 Full Width Display Stage */}
        <div className="relative w-full max-w-7xl mx-auto rounded-2xl bg-neutral-950 p-5 border border-neutral-800 shadow-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300">
          
          {/* Window Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              Fox Anime — {activeTab.label}
            </div>
            <div className="text-[11px] text-brand-red font-mono font-bold">100% Full View</div>
          </div>

          {/* Complete Full Uncropped Image View */}
          <div className="relative z-10 w-full rounded-xl overflow-hidden border border-neutral-800 bg-black">
            <img
              src={activeTab.image}
              alt={activeTab.label}
              className="w-full h-auto object-contain block rounded-xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
