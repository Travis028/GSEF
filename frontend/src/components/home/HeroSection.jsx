import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-navy relative pt-24 pb-28 md:pt-32 md:pb-36 rounded-b-[3rem] md:rounded-b-[4rem] z-0 overflow-hidden">
      {/* Background Graphic/Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1326] to-navy"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="text-left flex flex-col items-start">
            <h1 className="font-display text-[48px] md:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-4">
              Empowering Somali Entrepreneurs. Connecting a <span className="text-orange">Global Community.</span>
            </h1>
            <p className="font-body text-[18px] md:text-[20px] leading-[1.6] text-white/80 max-w-[600px] mb-8">
              Join innovators, investors & leaders shaping the future of the Somali entrepreneurship ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="bg-green hover:bg-green-light text-white font-body font-semibold text-[15px] px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(0,107,63,0.4)] transition-all flex items-center gap-2">
                Explore GSEF 2025 &rarr;
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-body font-semibold text-[15px] px-8 py-3.5 rounded-full backdrop-blur-sm transition-all flex items-center gap-2">
                <span className="text-lg">▶</span> Watch Highlights
              </button>
            </div>
            
            {/* Countdown Timer nested in Hero */}
            <div className="mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center divide-x divide-white/10 overflow-hidden shadow-2xl">
              {[
                { value: '45', label: 'Days' },
                { value: '12', label: 'Hours' },
                { value: '30', label: 'Minutes' },
                { value: '22', label: 'Seconds' }
              ].map((time, idx) => (
                <div key={idx} className="px-6 py-4 flex flex-col items-center justify-center min-w-[100px]">
                  <span className="font-display text-[28px] font-bold text-white leading-none">{time.value}</span>
                  <span className="font-body text-[11px] font-medium text-white/60 uppercase tracking-widest mt-1">{time.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Abstract Placeholder for Image & Cards */}
          <div className="relative h-[500px] w-full hidden lg:block">
            {/* Main Image Placeholder */}
            <div className="absolute right-0 top-0 w-[450px] h-[450px] bg-gradient-to-tr from-purple-dark/40 to-blue/40 rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
              <div className="text-white/40 font-body text-lg flex flex-col items-center gap-4">
                 <span className="text-4xl">📸</span>
                 <span>Speaker Image Placeholder</span>
              </div>
            </div>
            
            {/* Floating Card 1: Next Forum */}
            <div className="absolute top-8 left-12 bg-white rounded-2xl p-4 shadow-xl flex items-start gap-4 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="bg-green/10 p-2 rounded-full"><span className="text-green text-sm">✓</span></div>
              <div>
                <p className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-wider">Next Forum</p>
                <p className="font-display text-[18px] font-bold text-navy leading-tight">GSEF 2025</p>
                <p className="font-body text-[12px] text-gray-500 mt-1 flex items-center gap-1"><span>📅</span> July 19-20, 2025</p>
                <p className="font-body text-[12px] text-gray-500 mt-0.5 flex items-center gap-1"><span>📍</span> Radisson Blu, Nairobi</p>
              </div>
            </div>

            {/* Floating Card 2: Ticket QR */}
            <div className="absolute bottom-16 -left-4 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 flex flex-col items-center">
              <div className="flex justify-between items-center w-full mb-3">
                <span className="font-display font-bold text-navy text-[15px]">Your Ticket</span>
                <span className="text-gray-400">×</span>
              </div>
              <div className="w-[140px] h-[140px] bg-gray-100 rounded-xl mb-3 flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-4xl">📱</span>
              </div>
              <div className="bg-green text-white font-body text-[12px] font-bold px-4 py-1.5 rounded-full mb-2 w-full text-center shadow-md">
                VIP Access
              </div>
              <div className="font-mono text-[10px] text-gray-500 tracking-wider">GSEF2025-VIP-001234</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
