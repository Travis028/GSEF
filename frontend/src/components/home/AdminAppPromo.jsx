import React from 'react';

const AdminAppPromo = () => {
  return (
    <div className="w-full relative mt-4">
      {/* Mobile App mockup frame */}
      <div className="bg-navy rounded-[36px] w-[260px] h-[520px] mx-auto border-[8px] border-[#2a2a4a] relative overflow-hidden shadow-2xl flex flex-col">
        
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-[#2a2a4a] rounded-b-xl w-32 mx-auto z-20"></div>
        
        {/* App Content */}
        <div className="bg-white flex-1 overflow-hidden relative">
          
          {/* Header */}
          <div className="bg-navy text-white px-5 pt-10 pb-5">
            <h3 className="font-display font-semibold text-[15px]">Admin Dashboard</h3>
          </div>
          
          <div className="p-4 bg-gray-50 h-full flex flex-col items-center justify-center text-center opacity-50">
            {/* Empty state placeholder */}
            <div className="w-16 h-16 mb-4 text-gray-300">
               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
               </svg>
            </div>
            <p className="font-body text-sm text-gray-400">Dashboard Empty</p>
          </div>
          
        </div>
      </div>
      
      {/* Glow effect behind the phone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[400px] bg-blue/20 rounded-full blur-[60px] -z-10"></div>
    </div>
  );
};

export default AdminAppPromo;
