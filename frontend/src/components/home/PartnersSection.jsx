import React from 'react';

const PartnersSection = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-display text-[24px] font-bold text-navy">Our Partners</h2>
        <a href="#" className="font-body text-[13px] text-gray-500 font-medium hover:text-navy">View all partners &rarr;</a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        <div className="bg-white rounded-2xl h-24 flex items-center justify-center border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform p-4">
          <span className="font-display font-bold text-blue text-lg">UN DP</span>
        </div>

        <div className="bg-white rounded-2xl h-24 flex items-center justify-center border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform p-4 text-center">
          <span className="font-display font-bold text-navy text-[15px] leading-tight"><span className="text-blue">SIMAD</span> iLab</span>
        </div>

        <div className="bg-white rounded-2xl h-24 flex items-center justify-center border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform p-4">
          <span className="font-display font-bold text-orange text-lg">KICC</span>
        </div>

        <div className="bg-white rounded-2xl h-24 flex items-center justify-center border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform p-4 text-center">
          <span className="font-body font-semibold text-gray-600 text-[11px] leading-tight">Ministry of<br/>Trade</span>
        </div>

      </div>
    </div>
  );
};

export default PartnersSection;
