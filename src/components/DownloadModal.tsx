import React, { useState, useEffect, useRef } from 'react';
import { X, Mail, Download, CheckCircle, ShieldCheck, Loader2, ArrowRight } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloaded?: () => void;
}

const FALLBACK_DOWNLOAD_URL =
  'https://github.com/trimaxpro/FoxAnime/releases/download/v1.1.0/Fox-Anime-v1.1.0-Windows.zip';

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, onDownloaded }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setEmail('');
      setErrorMessage('');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const triggerDirectDownload = (url: string = FALLBACK_DOWNLOAD_URL) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Fox-Anime-v1.1.0-Windows.zip';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (onDownloaded) onDownloaded();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail || !cleanEmail.includes('@') || cleanEmail.length < 5) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail }),
      });

      let downloadUrl = FALLBACK_DOWNLOAD_URL;

      if (res.ok) {
        const data = await res.json();
        if (data.downloadUrl) {
          downloadUrl = data.downloadUrl;
        }
      }

      setStatus('success');
      triggerDirectDownload(downloadUrl);

      // Auto close after showing success animation
      setTimeout(() => {
        onClose();
      }, 2400);
    } catch {
      // In case of network error, still gracefully initiate download
      setStatus('success');
      triggerDirectDownload(FALLBACK_DOWNLOAD_URL);
      setTimeout(() => {
        onClose();
      }, 2400);
    }
  };

  const handleSkip = () => {
    triggerDirectDownload();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-md bg-neutral-950 border border-neutral-800/90 rounded-3xl shadow-[0_20px_60px_-15px_rgba(229,9,20,0.35)] p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Background Glow */}
        <div className="absolute -top-20 -left-20 w-44 h-44 bg-brand-red/15 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-brand-red/10 blur-3xl pointer-events-none rounded-full" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-brand-red/50 transition-all cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {status === 'success' ? (
          /* Success State */
          <div className="text-center py-6 animate-fadeIn">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h2 className="text-2xl font-bold font-oswald uppercase text-white tracking-wide mb-1.5">
              Download Started!
            </h2>
            <p className="text-sm font-ubuntu text-neutral-300 max-w-xs mx-auto leading-relaxed mb-4">
              Thank you for choosing FoxAnime. Your installation file is downloading now.
            </p>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400">
              <Download className="w-3.5 h-3.5 text-brand-red animate-bounce" />
              <span>Fox-Anime-v1.1.0-Windows.zip</span>
            </div>
          </div>
        ) : (
          /* Form State */
          <div>
            {/* Header with Fox Anime Mascot */}
            <div className="flex items-center space-x-3.5 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 p-2 flex items-center justify-center flex-shrink-0 shadow-inner">
                <img
                  src="/assets/logo.png"
                  alt="Fox Anime Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-oswald uppercase text-neutral-100 tracking-wide leading-none">
                  Get FoxAnime
                </h2>
                <p className="text-xs font-nunito font-semibold text-brand-red uppercase tracking-wider mt-1">
                  Free Desktop Anime Client
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 font-ubuntu leading-relaxed mb-5">
              Enter your email to receive major release alerts, new server mirrors, and start downloading the Windows desktop app.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="download-email" className="block text-xs font-semibold text-neutral-300 font-ubuntu mb-1.5">
                  Your Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    ref={inputRef}
                    id="download-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="otaku@example.com"
                    required
                    disabled={status === 'submitting'}
                    className={`w-full pl-10 pr-4 py-3 bg-neutral-900 border rounded-xl text-sm font-ubuntu text-neutral-100 placeholder-neutral-500 focus:outline-none transition-all ${
                      status === 'error'
                        ? 'border-brand-red focus:ring-1 focus:ring-brand-red'
                        : 'border-neutral-800 focus:border-brand-red focus:ring-1 focus:ring-brand-red'
                    }`}
                  />
                </div>
                {status === 'error' && errorMessage && (
                  <p className="mt-1.5 text-xs text-brand-red font-ubuntu">
                    {errorMessage}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 px-5 rounded-xl bg-brand-red hover:bg-brand-red/90 text-white font-bold font-ubuntu text-sm shadow-[0_10px_25px_-5px_rgba(229,9,20,0.4)] transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Connecting & Starting...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Enter Email & Download</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>

              {/* Direct Skip Link */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={handleSkip}
                  className="text-[11px] font-ubuntu text-neutral-500 hover:text-neutral-300 transition-colors underline underline-offset-4 cursor-pointer"
                >
                  Skip and download directly
                </button>
              </div>

              {/* Privacy Badge */}
              <div className="pt-2 border-t border-neutral-900 flex items-center justify-center space-x-1.5 text-[11px] text-neutral-500 font-lato">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                <span>Zero spam. Only essential release and security notes.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
