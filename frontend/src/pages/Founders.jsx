import React from 'react';
import SiteHero from '../components/common/SiteHero';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';

const founders = [
  { name: 'Amina Elmi', role: 'Founder & Chair', org: 'GSEF', initials: 'AE' },
  { name: 'Hassan Abdi', role: 'Co-founder & Strategy', org: 'GSEF', initials: 'HA' },
  { name: 'Sahra M.', role: 'Partnerships Lead', org: 'GSEF', initials: 'SM' },
  { name: 'Omar Yusuf', role: 'Programs Director', org: 'GSEF', initials: 'OY' },
];

const Founders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-16">
      <SiteHero
        eyebrow="Leadership"
        title="Founders"
        description="Profiles are laid out as responsive cards with consistent spacing, typography, and social actions — mirroring the reference design language."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="rounded-2xl bg-white/95 backdrop-blur border border-slate-200/80 shadow-xl p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
            {founders.map((f) => (
              <article
                key={f.name}
                className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 text-center shadow-sm hover:shadow-md hover:border-gsef-teal/30 transition"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-gsef-teal/20 to-gsef-purple/20 text-xl sm:text-2xl font-bold text-gsef-navy ring-2 ring-white shadow-inner">
                  {f.initials}
                </div>
                <h2 className="text-lg font-bold text-slate-900">{f.name}</h2>
                <p className="text-sm text-gsef-teal font-semibold mt-1">{f.role}</p>
                <p className="text-xs text-slate-500 mt-1">{f.org}</p>
                <div className="mt-5 flex justify-center gap-3 text-slate-500">
                  <a href="#" className="rounded-full p-2 ring-1 ring-slate-200 hover:text-gsef-teal hover:ring-gsef-teal/40 transition" aria-label="LinkedIn">
                    <FiLinkedin />
                  </a>
                  <a href="#" className="rounded-full p-2 ring-1 ring-slate-200 hover:text-gsef-purple hover:ring-gsef-purple/40 transition" aria-label="X">
                    <FiTwitter />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
