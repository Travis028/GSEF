import React from 'react';
import SiteHero from '../components/common/SiteHero';

const companies = [
  { name: 'SIMAD iLab', blurb: 'Innovation & entrepreneurship programs' },
  { name: 'KICC Nairobi', blurb: 'Venue partner for flagship forums' },
  { name: 'Ministry of Trade', blurb: 'Policy & SME ecosystem collaboration' },
  { name: 'UNDP', blurb: 'Development & inclusive growth initiatives' },
  { name: 'Qatar Airways', blurb: 'Travel partner for international delegates' },
  { name: 'Aster Healthcare', blurb: 'Wellness support for large events' },
];

const Companies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-16">
      <SiteHero
        eyebrow="Ecosystem"
        title="Companies"
        description="Partners and organizations that power GSEF programming — shown as a responsive logo wall that collapses gracefully on small screens."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="rounded-2xl bg-white/95 backdrop-blur border border-slate-200/80 shadow-xl p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {companies.map((c) => (
              <article
                key={c.name}
                className="flex flex-col rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-gsef-orange/30 transition"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gsef-navy text-sm font-bold text-white shadow-md">
                  {c.name.slice(0, 2).toUpperCase()}
                </div>
                <h2 className="text-lg font-bold text-slate-900">{c.name}</h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.blurb}</p>
                <button
                  type="button"
                  className="mt-5 self-start rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:border-gsef-teal hover:text-gsef-teal transition"
                >
                  View profile
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
