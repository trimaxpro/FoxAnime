import React, { useState, useEffect } from 'react';
import { Sparkles, Monitor } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState<'hero' | 'showcase'>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const showcaseElem = document.getElementById('showcase');
      if (showcaseElem) {
        const rect = showcaseElem.getBoundingClientRect();
        if (rect.top <= 200) {
          setActiveNav('showcase');
        } else {
          setActiveNav('hero');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
      ? 'bg-neutral-950/90 backdrop-blur-xl py-3.5 shadow-2xl'
      : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-11 h-11 flex items-center justify-center flex-shrink-0">
            <img
              src="/assets/logo.png"
              alt="Fox Anime Logo"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-oswald text-2xl font-bold tracking-wide leading-none text-neutral-100 uppercase group-hover:text-brand-red transition-colors">
              Fox
            </h1>
            <p className="font-nunito text-[11px] font-extrabold text-brand-red tracking-[0.2em] uppercase mt-0.5 leading-none">
              Anime
            </p>
          </div>
        </a>

        {/* Refined Comic Radio Navigation Pill for Home & Preview */}
        <nav className="hidden md:flex items-center">
          <div className="comic-radio-wrapper">
            <div className="comic-radio-option">
              <input
                type="radio"
                name="nav-btn"
                id="nav-home"
                className="comic-radio-input"
                checked={activeNav === 'hero'}
                onChange={() => {
                  setActiveNav('hero');
                  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
              <div className="comic-radio-btn">
                <Sparkles className="w-4 h-4 text-neutral-400 transition-colors flex-shrink-0" />
                <span className="comic-radio-span">Home</span>
              </div>
            </div>

            <div className="comic-radio-option">
              <input
                type="radio"
                name="nav-btn"
                id="nav-preview"
                className="comic-radio-input"
                checked={activeNav === 'showcase'}
                onChange={() => {
                  setActiveNav('showcase');
                  document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
              <div className="comic-radio-btn">
                <Monitor className="w-4 h-4 text-neutral-400 transition-colors flex-shrink-0" />
                <span className="comic-radio-span">Preview</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Custom Rotating Glowing Star GitHub Button */}
        <div className="flex items-center">
          <a
            href="https://github.com/trimaxpro/FoxAnime"
            target="_blank"
            rel="noreferrer"
            className="github-star-pill-btn group"
          >
            <span className="text">Star on GitHub</span>
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 47.94 47.94"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
            </svg>
          </a>
        </div>

      </div>
    </header>
  );
};
