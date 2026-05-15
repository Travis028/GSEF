import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsStrip from '../components/home/StatsStrip';
import FeaturedEvent from '../components/home/FeaturedEvent';
import TicketCards from '../components/home/TicketCards';
import ReportsSection from '../components/home/ReportsSection';
import WhyJoinSection from '../components/home/WhyJoinSection';
import PartnersSection from '../components/home/PartnersSection';
import AdminAppPromo from '../components/home/AdminAppPromo';

const Home = () => {
  // Simple scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-scroll]');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      <main className="flex-grow">
        
        <HeroSection />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-20">
          <StatsStrip />
          
          {/* Main Dashboard / Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 mb-24 items-start">
            
            {/* Left Column - 4 cols */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              <div data-scroll><FeaturedEvent /></div>
              <div data-scroll><WhyJoinSection /></div>
            </div>

            {/* Middle Column - 5 cols */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div data-scroll><TicketCards /></div>
              <div data-scroll className="mt-4"><PartnersSection /></div>
            </div>

            {/* Right Column - 3 cols */}
            <div className="lg:col-span-3 flex flex-col gap-10">
              <div data-scroll><ReportsSection /></div>
              <div data-scroll className="hidden lg:block">
                <AdminAppPromo />
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
};

export default Home;
