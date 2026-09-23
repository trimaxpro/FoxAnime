import React, { useRef } from 'react';
import { useAdsterra } from '../hooks/useAdsterra';

const AT_OPTIONS = {
  key: '8a1f759dc251660b370526e05de7ce79',
  format: 'iframe',
  height: 600,
  width: 160,
  params: {},
};

export const AdSkyscraper: React.FC = () => {
  const holderRef = useRef<HTMLDivElement>(null);
  useAdsterra(holderRef, AT_OPTIONS);

  return (
    <aside
      aria-label="Advertisement"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden min-[1600px]:block pointer-events-none"
    >
      <div
        ref={holderRef}
        className="w-[160px] h-[600px] overflow-hidden flex justify-center items-start pointer-events-auto"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)' }}
      />
    </aside>
  );
};