import React, { useState, useEffect } from 'react';
import { Navbar, NavPage } from './components/Navbar';
import { Hero } from './components/Hero';
import { AdLeaderboard } from './components/AdLeaderboard';
import { AdSkyscraper } from './components/AdSkyscraper';
import { AppShowcaseTabs } from './components/AppShowcaseTabs';
import { AlternativesPage } from './components/AlternativesPage';
import { DownloadModal } from './components/DownloadModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const getInitialPage = (): NavPage => {
    if (
      typeof window !== 'undefined' &&
      (window.location.hash === '#alternatives' || window.location.hash === '#website')
    ) {
      // Immediately replace #website with #alternatives in address bar
      if (window.location.hash === '#website') {
        window.history.replaceState(null, '', '#alternatives');
      }
      return 'alternatives';
    }
    return 'home';
  };

  const [page, setPage] = React.useState<NavPage>(getInitialPage);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  React.useEffect(() => {
    // Sync browser tab title
    document.title =
      page === 'alternatives'
        ? 'Anime Streaming Sites & Direct Alternatives Directory | FoxAnime'
        : 'FoxAnime - Free Desktop Anime Client | Stream HD Anime Online';

    // If opened with #website, rewrite URL to #alternatives immediately
    if (window.location.hash === '#website') {
      window.history.replaceState(null, '', '#alternatives');
    }

    const onHashChange = () => {
      if (window.location.hash === '#website') {
        window.history.replaceState(null, '', '#alternatives');
        setPage('alternatives');
      } else if (window.location.hash === '#alternatives') {
        setPage('alternatives');
      } else {
        setPage('home');
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [page]);

  const handleNavigate = (next: NavPage) => {
    setPage(next);
    if (next === 'alternatives') {
      window.location.hash = '#alternatives';
    } else {
      window.location.hash = '#home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-brand-red selection:text-white">
      {/* Navigation Bar */}
      <Navbar page={page} onNavigate={handleNavigate} />

      {/* 160x600 Vertical Banner — fixed left */}
      <AdSkyscraper />

      {/* Main Sections */}
      <main>
        {page === 'home' ? (
          <>
            {/* 728x90 Leaderboard — under header, above hero */}
            <AdLeaderboard />
            <Hero onDownloadClick={() => setIsDownloadOpen(true)} />
            <AppShowcaseTabs />
          </>
        ) : (
          <AlternativesPage />
        )}
      </main>

      {/* Email Input Download Modal */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />

      {/* Spatial Dark Footer */}
      <Footer />
    </div>
  );
};

export default App;