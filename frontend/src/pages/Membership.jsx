import React from 'react';
import SiteHero from '../components/common/SiteHero';
import { FiCheck } from 'react-icons/fi';

const tiers = [
  {
    name: 'Community',
    price: 'Free',
    cadence: 'forever',
    theme: 'border-gsef-teal/40 shadow-md',
    btn: 'bg-gsef-teal hover:bg-gsef-tealBright text-white',
    outline: false,
    features: ['Community forum access', 'Monthly newsletter', 'Public event livestream'],
  },
  {
    name: 'Professional',
    price: 'KES 2,500',
    cadence: '/ month',
    theme: 'border-gsef-purple/50 ring-2 ring-gsef-purple/15 shadow-xl md:-translate-y-1',
    btn: 'bg-gradient-to-r from-gsef-orange to-gsef-purple text-white hover:opacity-95',
    outline: false,
    featured: true,
    features: ['Workshop discounts', 'Mentor office hours', 'Member directory', 'Priority tickets'],
  },
  {
    name: 'Corporate',
    price: 'KES 10,000',
    cadence: '/ month',
    theme: 'border-amber-200',
    btn: 'border-2 border-amber-400 text-amber-900 hover:bg-amber-50',
    outline: true,
    features: ['Team seats (5)', 'Brand visibility pack', 'Private roundtable', 'Dedicated liaison'],
  },
];

const Membership = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-16">
      <SiteHero
        eyebrow="Plans"
        title="Membership"
        description="Three clear tiers with distinct color accents — responsive columns stack on mobile and expand into a polished comparison row on large screens."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="rounded-2xl bg-white/95 backdrop-blur border border-slate-200/80 shadow-xl p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 items-stretch">
            {tiers.map((t) => (
              <article
                key={t.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-6 sm:p-7 transition ${t.theme}`}
              >
                {t.featured ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gsef-orange to-gsef-purple px-4 py-1 text-xs font-bold text-white shadow-md">
                    Popular
                  </div>
                ) : null}
                <h2 className="text-xl font-bold text-slate-900">{t.name}</h2>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-gsef-navy">{t.price}</span>
                  <span className="text-sm text-slate-500">{t.cadence}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <FiCheck className="mt-0.5 shrink-0 text-gsef-teal" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`mt-8 w-full rounded-xl py-3 text-sm font-bold transition shadow-sm ${t.btn} ${t.outline ? 'bg-white' : ''}`}
                >
                  Join now
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
