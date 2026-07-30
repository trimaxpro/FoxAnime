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
                <h1 className="font-oswald text-2xl font-bold tracking-wide leading-none text-neutral-100 uppercase group-hover:text-brand-red transition-colors">
                  Fox Anime
                </h1>
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

        </div>
      </footer>

      {/* Interactive Legal Content Modal */}
      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </>
  );
};
