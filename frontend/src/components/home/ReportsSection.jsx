import React from 'react';

const ReportsSection = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-display text-[24px] font-bold text-navy">Latest Reports</h2>
        <a href="#" className="font-body text-[13px] text-teal font-medium hover:underline">View All &rarr;</a>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex gap-4 items-center hover:-translate-y-1 transition-transform">
          <div className="w-[60px] h-[80px] bg-navy rounded-lg shrink-0 overflow-hidden relative">
            <div className="absolute top-1 right-1 text-white text-[10px]">PDF</div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue to-transparent"></div>
          </div>
          <div className="flex-grow">
            <h3 className="font-display text-[14px] font-bold text-navy mb-1 leading-snug">GSEF 2024 Impact Report</h3>
            <p className="font-body text-[11px] text-gray-500">Oct 2024 • PDF</p>
          </div>
          <button className="text-teal hover:text-green transition-colors"><span className="text-xl">⬇</span></button>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex gap-4 items-center hover:-translate-y-1 transition-transform">
          <div className="w-[60px] h-[80px] bg-navy rounded-lg shrink-0 overflow-hidden relative">
            <div className="absolute top-1 right-1 text-white text-[10px]">PDF</div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-orange to-transparent"></div>
          </div>
          <div className="flex-grow">
            <h3 className="font-display text-[14px] font-bold text-navy mb-1 leading-snug">East Africa Innovation & Investment Trends</h3>
            <p className="font-body text-[11px] text-gray-500">Jul 2025 • PDF</p>
          </div>
          <button className="text-teal hover:text-green transition-colors"><span className="text-xl">⬇</span></button>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex gap-4 items-center hover:-translate-y-1 transition-transform">
          <div className="w-[60px] h-[80px] bg-navy rounded-lg shrink-0 overflow-hidden relative">
            <div className="absolute top-1 right-1 text-white text-[10px]">PDF</div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-purple to-transparent"></div>
          </div>
          <div className="flex-grow">
            <h3 className="font-display text-[14px] font-bold text-navy mb-1 leading-snug">Women in Somali Entrepreneurship</h3>
            <p className="font-body text-[11px] text-gray-500">Jul 2025 • PDF</p>
          </div>
          <button className="text-teal hover:text-green transition-colors"><span className="text-xl">⬇</span></button>
        </div>
      </div>
    </div>
  );
};

export default ReportsSection;
