import React from 'react';

const AdminAppPromo = () => {
  return (
    <div className="w-full relative mt-4">
      {/* Mobile App mockup frame */}
      <div className="bg-navy rounded-[36px] w-[260px] h-[520px] mx-auto border-[8px] border-navy-mid relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col transform hover:-translate-y-2 transition-transform duration-500">
        
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-navy-mid rounded-b-xl w-32 mx-auto z-20 shadow-sm"></div>
        
        {/* App Content */}
        <div className="bg-offwhite flex-1 overflow-hidden relative">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-navy via-navy to-purple-dark text-white px-5 pt-10 pb-5 shadow-md relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple/20 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="font-display font-bold text-[16px] tracking-wide relative z-10">Admin Dashboard</h3>
            <p className="font-body text-[10px] text-white/70 relative z-10">GSEF 2025 Live</p>
          </div>
          
          <div className="p-4 bg-offwhite h-full overflow-y-auto pb-10 scrollbar-hide">
            
            {/* Stats Card */}
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-4 text-center mb-4 border border-gray-100 relative overflow-hidden">
               <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-pale rounded-full blur-xl"></div>
               <h4 className="font-body text-[12px] font-bold text-gray-500 mb-3 uppercase tracking-wider relative z-10">Live Check-ins</h4>
               <div className="w-[100px] h-[100px] rounded-full border-[6px] border-green flex flex-col items-center justify-center mx-auto relative z-10 bg-white shadow-inner">
                  <span className="font-display text-[28px] font-extrabold text-navy leading-none mt-2">142</span>
                  <span className="text-[11px] font-body text-gray-400 font-medium">/ 500</span>
               </div>
            </div>

            {/* Scans List */}
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-4 border border-gray-100">
              <h4 className="font-body text-[12px] font-bold text-gray-500 mb-3 uppercase tracking-wider flex justify-between items-center">
                <span>Recent Scans</span>
                <span className="bg-blue/10 text-blue px-2 py-0.5 rounded text-[9px]">Live</span>
              </h4>
              
              <div className="space-y-3">
                {/* Item 1 */}
                <div className="flex items-center gap-3 border-b border-gray-50 pb-3">
                  <div className="w-9 h-9 bg-gold/20 text-gold rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold border border-gold/30">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-body font-bold text-[12px] text-navy">VIP Pass</span>
                      <span className="bg-gold/10 text-gold text-[8px] font-bold px-1.5 rounded uppercase">001231</span>
                    </div>
                    <div className="font-body text-[10px] text-gray-400">10:21 AM • Gate A</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-green-pale text-green flex items-center justify-center text-[10px] shadow-sm">✓</div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-3 border-b border-gray-50 pb-3">
                  <div className="w-9 h-9 bg-teal/20 text-teal rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold border border-teal/30">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-body font-bold text-[12px] text-navy">Regular Pass</span>
                      <span className="bg-teal/10 text-teal text-[8px] font-bold px-1.5 rounded uppercase">001232</span>
                    </div>
                    <div className="font-body text-[10px] text-gray-400">10:22 AM • Gate B</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-green-pale text-green flex items-center justify-center text-[10px] shadow-sm">✓</div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-3 pb-1">
                  <div className="w-9 h-9 bg-orange/20 text-orange rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold border border-orange/30">
                    S
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-body font-bold text-[12px] text-navy">Premium VIP</span>
                      <span className="bg-purple/10 text-purple text-[8px] font-bold px-1.5 rounded uppercase">001233</span>
                    </div>
                    <div className="font-body text-[10px] text-gray-400">10:23 AM • VIP Lounge</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-green-pale text-green flex items-center justify-center text-[10px] shadow-sm">✓</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Glow effect behind the phone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[400px] bg-blue/30 rounded-full blur-[70px] -z-10 mix-blend-multiply"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[300px] bg-purple/20 rounded-full blur-[50px] -z-10 mix-blend-multiply"></div>
    </div>
  );
};

export default AdminAppPromo;
