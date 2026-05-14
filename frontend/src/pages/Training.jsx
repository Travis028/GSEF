import React from 'react';
import SiteHero from '../components/common/SiteHero';

const courses = [
  { title: 'Digital Marketing for Entrepreneurs', date: 'June 10, 2025', price: 'KES 1,500', tag: 'Marketing' },
  { title: 'Founder Mentoring Workshop', date: 'July 1, 2025', price: 'KES 2,500', tag: 'Leadership' },
  { title: 'Business Planning Bootcamp', date: 'August 1, 2025', price: 'KES 2,500', tag: 'Strategy' },
  { title: 'Leadership & Team Building', date: 'September 1, 2025', price: 'KES 2,500', tag: 'People' },
  { title: 'Pitch Clinic: Investor Ready', date: 'October 5, 2025', price: 'KES 3,000', tag: 'Fundraising' },
];

const Training = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-16">
      <SiteHero
        eyebrow="Learning"
        title="Training & Workshops"
        description="A clean list layout with strong typographic rhythm — each row becomes a stacked card on very small screens for easier tapping."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="rounded-2xl bg-white/95 backdrop-blur border border-slate-200/80 shadow-xl divide-y divide-slate-100 overflow-hidden">
          {courses.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-4 p-4 sm:p-5 md:flex-row md:items-center md:justify-between hover:bg-slate-50/80 transition"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="rounded-full bg-gsef-teal/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-gsef-teal">
                    {c.tag}
                  </span>
                  <span className="text-xs text-slate-500">{c.date}</span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">{c.title}</h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:text-right">
                <div className="text-lg font-extrabold text-gsef-navy">{c.price}</div>
                <button
                  type="button"
                  className="rounded-xl bg-gsef-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-gsef-navyDeep transition whitespace-nowrap"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
