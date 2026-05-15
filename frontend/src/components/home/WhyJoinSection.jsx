import React from 'react';

const WhyJoinSection = () => {
  return (
    <div className="w-full">
      <h2 className="font-display text-[24px] font-bold text-navy mb-6">Why Join GSEF?</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex gap-4 items-start hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
            <span className="text-teal text-xl">🌐</span>
          </div>
          <div>
            <h3 className="font-display text-[16px] font-bold text-navy mb-1">Network</h3>
            <p className="font-body text-[13px] text-gray-500 leading-tight">Connect with 500+ entrepreneurs & investors</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex gap-4 items-start hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center shrink-0">
            <span className="text-blue text-xl">�‍🏫</span>
          </div>
          <div>
            <h3 className="font-display text-[16px] font-bold text-navy mb-1">Learn</h3>
            <p className="font-body text-[13px] text-gray-500 leading-tight">Access high-level panels & expert workshops</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex gap-4 items-start hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
            <span className="text-teal text-xl">�</span>
          </div>
          <div>
            <h3 className="font-display text-[16px] font-bold text-navy mb-1">Invest</h3>
            <p className="font-body text-[13px] text-gray-500 leading-tight">Discover funding & partnership opportunities</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex gap-4 items-start hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
            <span className="text-orange text-xl">📈</span>
          </div>
          <div>
            <h3 className="font-display text-[16px] font-bold text-navy mb-1">Grow</h3>
            <p className="font-body text-[13px] text-gray-500 leading-tight">Scale your business across East Africa & beyond</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinSection;
