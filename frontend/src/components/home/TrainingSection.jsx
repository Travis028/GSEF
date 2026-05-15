import React from 'react';

const TrainingSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <div className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-4">MASTERCLASSES</div>
          <h2 className="section-title mb-6">Training & Workshops</h2>
          <p className="font-body text-[18px] text-gray-500">Accelerate your skills with specialized sessions led by industry experts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-2xl p-7 text-center border border-gray-200 hover:border-green hover:-translate-y-1.5 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300">
            <div className="text-[48px] mb-4">💡</div>
            <h3 className="font-display text-[18px] font-semibold text-navy mb-3 leading-snug">Pitch Perfect: Raising Capital</h3>
            <p className="font-body text-[13px] text-gray-500 flex items-center justify-center gap-1.5 mb-2">
              <span className="text-sm">📅</span> July 18, 2025
            </p>
            <div className="font-display text-[28px] font-bold text-green my-4">KES 5,000</div>
            <button className="bg-green text-white w-full py-3 rounded-xl font-body font-semibold text-sm hover:bg-green-light hover:-translate-y-0.5 transition-all">Book Spot</button>
          </div>

          <div className="bg-white rounded-2xl p-7 text-center border border-gray-200 hover:border-green hover:-translate-y-1.5 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300">
            <div className="text-[48px] mb-4">🚀</div>
            <h3 className="font-display text-[18px] font-semibold text-navy mb-3 leading-snug">Scaling Tech Startups</h3>
            <p className="font-body text-[13px] text-gray-500 flex items-center justify-center gap-1.5 mb-2">
              <span className="text-sm">📅</span> July 18, 2025
            </p>
            <div className="font-display text-[28px] font-bold text-green my-4">KES 5,000</div>
            <button className="bg-green text-white w-full py-3 rounded-xl font-body font-semibold text-sm hover:bg-green-light hover:-translate-y-0.5 transition-all">Book Spot</button>
          </div>

          <div className="bg-white rounded-2xl p-7 text-center border border-gray-200 hover:border-green hover:-translate-y-1.5 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300">
            <div className="text-[48px] mb-4">📱</div>
            <h3 className="font-display text-[18px] font-semibold text-navy mb-3 leading-snug">Digital Marketing Mastery</h3>
            <p className="font-body text-[13px] text-gray-500 flex items-center justify-center gap-1.5 mb-2">
              <span className="text-sm">📅</span> July 21, 2025
            </p>
            <div className="font-display text-[28px] font-bold text-green my-4">KES 4,000</div>
            <button className="bg-green text-white w-full py-3 rounded-xl font-body font-semibold text-sm hover:bg-green-light hover:-translate-y-0.5 transition-all">Book Spot</button>
          </div>

          <div className="bg-white rounded-2xl p-7 text-center border border-gray-200 hover:border-green hover:-translate-y-1.5 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300">
            <div className="text-[48px] mb-4">🌍</div>
            <h3 className="font-display text-[18px] font-semibold text-navy mb-3 leading-snug">Export & Global Trade</h3>
            <p className="font-body text-[13px] text-gray-500 flex items-center justify-center gap-1.5 mb-2">
              <span className="text-sm">📅</span> July 21, 2025
            </p>
            <div className="font-display text-[28px] font-bold text-green my-4">KES 6,000</div>
            <button className="bg-green text-white w-full py-3 rounded-xl font-body font-semibold text-sm hover:bg-green-light hover:-translate-y-0.5 transition-all">Book Spot</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
