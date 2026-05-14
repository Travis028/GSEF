import React, { useState } from 'react';
import SiteHero from '../components/common/SiteHero';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    q: 'How do I register for GSEF?',
    a: 'Choose your pass on the home page or open an event, then complete registration. You will receive a confirmation email with next steps.',
  },
  {
    q: 'Are tickets refundable?',
    a: 'Refund policies depend on the event organizer. Check the event detail page for the specific policy for that edition.',
  },
  {
    q: 'Will sessions be recorded?',
    a: 'Select sessions may be recorded for members. Availability will be announced in the program guide.',
  },
  {
    q: 'Is there a dress code?',
    a: 'Business or business-casual attire is recommended for plenary and networking sessions.',
  },
  {
    q: 'How do I become a partner?',
    a: 'Use the Companies page to start a conversation, or email partnerships from the footer contact block.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-16">
      <SiteHero
        eyebrow="Help"
        title="FAQ"
        description="Accordion answers stay compact on mobile and expand with clear focus states — consistent with the rest of the public site."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="rounded-2xl bg-white/95 backdrop-blur border border-slate-200/80 shadow-xl divide-y divide-slate-100 overflow-hidden">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={item.q} className="bg-white">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-slate-50 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">{item.q}</span>
                  <FiChevronDown
                    className={`shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen ? (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
