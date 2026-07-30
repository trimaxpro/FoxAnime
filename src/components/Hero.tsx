import React from 'react';
import { Download, Shield, Clock, Search, Zap } from 'lucide-react';
import { SakugabooruBackground } from './SakugabooruBackground';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-6 md:pt-32 md:pb-8 flex flex-col justify-center items-center overflow-hidden bg-neutral-950">
      
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
              Stream Your Favorite Anime <span className="text-brand-red">Ad-Free</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-6 font-medium font-nunito leading-relaxed drop-shadow">
              High-definition anime streaming with zero ad interruptions, automated episode progress tracking, and instant title search.
            </p>

            {/* Crisp Point-to-Point Feature Chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8 font-ubuntu text-xs">
              <div className="px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-neutral-800 text-neutral-200 flex items-center space-x-1.5 hover:border-brand-red/40 transition-colors backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 text-brand-red" />
                <span>Full HD 1080p</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-neutral-800 text-neutral-200 flex items-center space-x-1.5 hover:border-brand-red/40 transition-colors backdrop-blur-md">
                <Shield className="w-3.5 h-3.5 text-brand-red" />
                <span>100% Ad-Free</span>
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

            {/* Action Buttons: Red Comic Button + Interactive Red Heart Like Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-2">
              
              {/* Primary Comic Button in Fox Red Theme */}
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); alert("Starting download for Fox-Anime-Setup-1.0.0.exe..."); }}
                className="comic-button group shadow-xl"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Download for Windows</span>
              </a>

              {/* Interactive Animated Red Heart Like Button */}
              <div className="like-button">
                <input className="on" id="heart" type="checkbox" />
                <label className="like" htmlFor="heart">
                  <svg className="like-icon" fillRule="nonzero" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                  <span className="like-text">Likes</span>
                </label>
                <span className="like-count one">68</span>
                <span className="like-count two">69</span>
              </div>

            </div>

          </div>
        </SakugabooruBackground>

      </div>
    </section>
  );
};
