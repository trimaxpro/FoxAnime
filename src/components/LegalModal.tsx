import React from 'react';
import { X, ShieldCheck, FileText, Scale } from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | 'dmca' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      icon: <ShieldCheck className="w-6 h-6 text-brand-red" />,
      date: 'Effective Date: July 2026',
      sections: [
        {
          heading: '1. Zero Personal Data Collection',
          body: 'Fox Anime operates strictly as a privacy-first standalone desktop client. We do not harvest, track, record, store, or sell any personal user information, telemetry data, or IP addresses.',
        },
        {
          heading: '2. Local Device Storage',
          body: 'All your app settings, episode watch history timestamps, and saved favorites are saved locally on your Windows PC inside local storage. None of this data is ever transmitted to external servers.',
        },
        {
          heading: '3. No Advertising or Telemetry Trackers',
          body: 'Fox Anime is 100% free desktop software. The application contains zero ad trackers, analytics scripts, background logging, or third-party advertising modules.',
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      icon: <FileText className="w-6 h-6 text-brand-red" />,
      date: 'Effective Date: July 2026',
      sections: [
        {
          heading: '1. Personal Use License',
          body: 'Fox Anime is provided as free desktop software for personal, non-commercial entertainment. All rights, titles, and software branding remain the property of Fox Anime.',
        },
        {
          heading: '2. "As-Is" Software Disclaimer',
          body: 'Fox Anime is provided "AS IS", without warranties or guarantees of any kind, express or implied. The developers are not liable for any service interruptions or third-party web content availability.',
        },
        {
          heading: '3. User Conduct & Compliance',
          body: 'Users are solely responsible for ensuring their usage of media indexers aligns with local digital copyright regulations and internet laws in their respective jurisdiction.',
        },
      ],
    },
    dmca: {
      title: 'DMCA Copyright Disclaimer',
      icon: <Scale className="w-6 h-6 text-brand-red" />,
      date: 'Effective Date: July 2026',
      sections: [
        {
          heading: '1. Non-Hosting Notice',
          body: 'Fox Anime does not host, stream, store, or upload any video files or media content on its own servers. All video links displayed within the client interface are indexed from publicly available internet sources.',
        },
        {
          heading: '2. Aggregator Functionality',
          body: 'Fox Anime functions purely as a web browser client and search interface indexer. The software has zero control over third-party media server content or availability.',
        },
        {
          heading: '3. Copyright Takedown Requests',
          body: 'If you are a copyright owner or authorized representative and wish to request removal of media content, please send takedown notices directly to the hosting provider hosting the file.',
        },
      ],
    },
  };

  const activeContent = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-5 mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-brand-red/10 border border-brand-red/20">
              {activeContent.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold font-oswald text-neutral-100 uppercase tracking-wide">
                {activeContent.title}
              </h2>
              <p className="text-xs font-mono text-neutral-400 mt-0.5">
                {activeContent.date}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-100 hover:border-brand-red/40 transition-all cursor-pointer"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {activeContent.sections.map((sec, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
              <h3 className="text-sm font-bold font-lato text-neutral-200 mb-1.5">
                {sec.heading}
              </h3>
              <p className="text-xs text-neutral-400 font-nunito leading-relaxed">
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Close CTA */}
        <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            style={{ backgroundColor: '#E50914', color: '#ffffff' }}
            className="px-6 py-2.5 rounded-xl text-xs font-bold font-ubuntu hover:bg-red-600 transition-all shadow-lg shadow-red-600/30 border border-red-500/50 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Agree
          </button>
        </div>

      </div>
    </div>
  );
};
