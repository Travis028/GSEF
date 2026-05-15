import React from 'react';

const StatsStrip = () => {
  return (
    <div className="w-full relative z-20 flex justify-center -mt-16">
      <div className="bg-white rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-4 px-8 md:px-12 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 md:gap-12 mx-4 w-full max-w-[1200px]">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center text-green text-xl">👥</div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-navy text-[20px] leading-tight">500+</span>
            <span className="font-body text-[12px] text-gray-500 font-medium">Expected Attendees</span>
          </div>
        </div>

        <div className="hidden lg:block w-px h-10 bg-gray-200"></div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange text-xl">🎤</div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-navy text-[20px] leading-tight">30+</span>
            <span className="font-body text-[12px] text-gray-500 font-medium">Speakers</span>
          </div>
        </div>

        <div className="hidden lg:block w-px h-10 bg-gray-200"></div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue text-xl">🌍</div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-navy text-[20px] leading-tight">20+</span>
            <span className="font-body text-[12px] text-gray-500 font-medium">Countries</span>
          </div>
        </div>

        <div className="hidden lg:block w-px h-10 bg-gray-200"></div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal text-xl">🏢</div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-navy text-[20px] leading-tight">100+</span>
            <span className="font-body text-[12px] text-gray-500 font-medium">Companies</span>
          </div>
        </div>

        <div className="hidden lg:block w-px h-10 bg-gray-200"></div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple text-xl">📊</div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-navy text-[20px] leading-tight">6</span>
            <span className="font-body text-[12px] text-gray-500 font-medium">Sectors Covered</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsStrip;
