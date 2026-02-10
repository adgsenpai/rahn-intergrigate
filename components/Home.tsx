import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHero from './SectionHero';
import SectionServices from './SectionServices';
import SectionFeatures from './SectionFeatures';
import SectionPricing from './SectionPricing';
import SectionDev from './SectionDev';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we navigated here with a scrollTo state (from Navbar)
    if (location.state && (location.state as any).scrollTo) {
        const elem = document.getElementById((location.state as any).scrollTo);
        if (elem) {
            setTimeout(() => {
                elem.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    } else {
        window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
        <SectionHero />
        <SectionServices />
        <SectionFeatures />
        <SectionPricing />
        <SectionDev />
    </>
  );
};

export default Home;