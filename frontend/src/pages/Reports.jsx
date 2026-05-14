import React from 'react';
import SiteHero from '../components/common/SiteHero';
import { FiDownload } from 'react-icons/fi';

const reports = [
  { title: 'GSEF 2024 Impact Report', date: 'Oct 2024', type: 'PDF', accent: 'from-gsef-teal to-gsef-blue' },
  { title: 'East Africa Innovation Trends', date: 'Jul 2025', type: 'PDF', accent: 'from-gsef-purple to-gsef-magenta' },
  { title: 'Women in Somali Entrepreneurship', date: 'Jul 2025', type: 'PDF', accent: 'from-gsef-orange to-gsef-purple' },
  { title: 'SME Policy Brief — Nairobi', date: 'May 2025', type: 'PDF', accent: 'from-slate-700 to-gsef-navy' },
  { title: 'Diaspora Investment Outlook', date: 'Mar 2025', type: 'PDF', accent: 'from-gsef-blue to-gsef-teal' },
  { title: 'Startup Funding Landscape', date: 'Jan 2025', type: 'PDF', accent: 'from-gsef-teal to-gsef-orange' },
];

const Reports = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-16">
      <SiteHero
        eyebrow="Knowledge"
        title="Reports"
        description="Downloadable briefings and research aligned with GSEF themes — presented in a uniform card grid that scales cleanly on phones, tablets, and desktops."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="rounded-2xl bg-white/95 backdrop-blur border border-slate-200/80 shadow-xl p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {reports.map((r) => (
              <article
                key={r.title}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-lg transition group"
              >
                <div className={`h-28 sm:h-32 bg-gradient-to-br ${r.accent} relative`}>
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_55%)]" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-semibold uppercase tracking-widest drop-shadow">
                    {r.type}
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">{r.title}</h2>
                  <p className="text-sm text-slate-500 mb-4">{r.date}</p>
                  <button
                    type="button"
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gsef-navy text-white px-4 py-2.5 text-sm font-semibold hover:bg-gsef-navyDeep transition"
                  >
                    <FiDownload />
                    Download
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
