import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppShowcaseTabs } from './components/AppShowcaseTabs';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-brand-red selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Showcase Landing Page Sections */}
      <main>
        <Hero />
        <AppShowcaseTabs />
      </main>

      {/* Spatial Dark Footer */}
      <Footer />
    </div>
  );
};

export default App;
