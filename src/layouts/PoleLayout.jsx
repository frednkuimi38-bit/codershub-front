import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { detectCurrentPole } from '../utils/domainDetector.js';
import PremiumHeader from '../components/shared/PremiumHeader.jsx';
import Footer from '../components/shared/Footer.jsx';
import SkipLink from '../components/shared/SkipLink.jsx';
import { useAccessibility } from '../hooks/useAccessibility.js';

const PoleLayout = () => {
  const { poleId } = useParams();
  const currentPole = detectCurrentPole() || { id: poleId };
  useAccessibility();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <SkipLink />
      <PremiumHeader currentPole={currentPole} />
      <main id="main-content" tabIndex="-1" className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PoleLayout;
