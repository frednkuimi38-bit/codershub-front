import React from 'react';
import { Outlet } from 'react-router-dom';
import PremiumHeader from '../components/shared/PremiumHeader.jsx';
import Footer from '../components/shared/Footer.jsx';
import SkipLink from '../components/shared/SkipLink.jsx';
import { useAccessibility } from '../hooks/useAccessibility.js';

const MainLayout = () => {
  useAccessibility();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <SkipLink />
      <PremiumHeader />
      <main id="main-content" tabIndex="-1" className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
