import React from 'react';

const FeaturedEvent = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-display text-[24px] font-bold text-navy">Featured Event</h2>
        <span className="bg-purple/10 text-purple font-mono text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">Upcoming</span>
      </div>
      
      <div className="bg-gradient-to-br from-[#4c1d95] via-[#9d174d] to-[#ea580c] rounded-3xl p-8 relative overflow-hidden shadow-lg h-full min-h-[300px] flex flex-col justify-between group">
        {/* Subtle overlay patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange/20 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10">
          <h3 className="font-display text-[32px] md:text-[40px] font-bold text-white leading-tight mb-2">GSEF 2025</h3>
          <p className="font-body text-[16px] text-white/90 mb-6 font-medium">Global Somali Entrepreneurship Forum</p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-white/80 font-body text-[14px] bg-white/10 backdrop-blur-sm w-max px-4 py-2 rounded-lg border border-white/10">
              <span>📅</span> July 19–20, 2025
            </div>
            <div className="flex items-center gap-3 text-white/80 font-body text-[14px] bg-white/10 backdrop-blur-sm w-max px-4 py-2 rounded-lg border border-white/10">
              <span>📍</span> Radisson Blu, Nairobi
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-4">
          <button className="bg-white text-navy hover:bg-gray-50 font-body font-semibold text-[14px] px-6 py-3 rounded-full transition-all flex items-center gap-2 w-max">
            View Event Details &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvent;
