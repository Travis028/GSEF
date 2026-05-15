import React from 'react';

const TicketCards = () => {
  return (
    <div className="w-full">
      <h2 className="font-display text-[24px] font-bold text-navy mb-6">Choose Your Pass</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Regular */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 border-t-[4px] border-t-teal shadow-md hover:-translate-y-1 transition-transform relative text-center flex flex-col h-full">
          <div className="w-12 h-12 mx-auto bg-teal/10 rounded-full flex items-center justify-center mb-3">
             <span className="text-teal text-xl">👥</span>
          </div>
          <h3 className="font-display text-[18px] font-bold text-navy mb-1">Regular</h3>
          <div className="font-display text-[24px] font-extrabold text-teal mb-4">KES 3,000</div>
          <ul className="text-left space-y-3 font-body text-[12px] text-gray-500 mb-6 flex-grow">
            <li className="flex items-start gap-2"><span className="text-teal font-bold">✓</span> General Session Access</li>
            <li className="flex items-start gap-2"><span className="text-teal font-bold">✓</span> Panel Discussions</li>
            <li className="flex items-start gap-2"><span className="text-teal font-bold">✓</span> Networking Lunch</li>
            <li className="flex items-start gap-2"><span className="text-teal font-bold">✓</span> Digital Certificate</li>
          </ul>
          <button className="bg-white border-2 border-gray-200 hover:border-teal hover:text-teal text-navy font-body font-semibold text-[13px] py-2 rounded-full transition-all w-full mt-auto">Select Pass</button>
        </div>

        {/* VIP */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 border-t-[4px] border-t-gold shadow-md hover:-translate-y-1 transition-transform relative text-center flex flex-col h-full transform md:-translate-y-2">
          <div className="w-12 h-12 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-3">
             <span className="text-gold text-xl">👑</span>
          </div>
          <h3 className="font-display text-[18px] font-bold text-navy mb-1">VIP</h3>
          <div className="font-display text-[24px] font-extrabold text-navy mb-4">KES 10,000</div>
          <ul className="text-left space-y-3 font-body text-[12px] text-gray-500 mb-6 flex-grow">
            <li className="flex items-start gap-2"><span className="text-gold font-bold">✓</span> All Regular Benefits</li>
            <li className="flex items-start gap-2"><span className="text-gold font-bold">✓</span> VIP Lounge Access</li>
            <li className="flex items-start gap-2"><span className="text-gold font-bold">✓</span> Meet-the-Speakers</li>
            <li className="flex items-start gap-2"><span className="text-gold font-bold">✓</span> Priority Seating</li>
            <li className="flex items-start gap-2"><span className="text-gold font-bold">✓</span> Exclusive Roundtable</li>
          </ul>
          <button className="bg-navy hover:bg-[#2a2a4a] text-white font-body font-semibold text-[13px] py-2 rounded-full transition-all w-full mt-auto">Select VIP</button>
        </div>

        {/* Premium VIP */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 border-t-[4px] border-t-purple shadow-md hover:-translate-y-1 transition-transform relative text-center flex flex-col h-full">
          <div className="w-12 h-12 mx-auto bg-purple/10 rounded-full flex items-center justify-center mb-3">
             <span className="text-purple text-xl">💎</span>
          </div>
          <h3 className="font-display text-[18px] font-bold text-navy mb-1">Premium VIP</h3>
          <div className="font-display text-[24px] font-extrabold text-purple mb-4">KES 25,000</div>
          <ul className="text-left space-y-3 font-body text-[12px] text-gray-500 mb-6 flex-grow">
            <li className="flex items-start gap-2"><span className="text-purple font-bold">✓</span> All VIP Benefits</li>
            <li className="flex items-start gap-2"><span className="text-purple font-bold">✓</span> Investor Pitching Slot</li>
            <li className="flex items-start gap-2"><span className="text-purple font-bold">✓</span> 1-on-1 Meetings</li>
            <li className="flex items-start gap-2"><span className="text-purple font-bold">✓</span> Event Merchandise Pack</li>
            <li className="flex items-start gap-2"><span className="text-purple font-bold">✓</span> Post-Event Directory</li>
          </ul>
          <button className="bg-white border-2 border-gray-200 hover:border-purple hover:text-purple text-navy font-body font-semibold text-[13px] py-2 rounded-full transition-all w-full mt-auto">Select Premium</button>
        </div>

      </div>
    </div>
  );
};

export default TicketCards;
