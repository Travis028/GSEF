import React from 'react';
import GsefLogo from './GsefLogo';

/**
 * Shared hero for public pages — matches Gallery-style navy band + glow accents.
 */
export default function SiteHero({
  eyebrow,
  title,
  description,
  meta,
  filters,
}) {
  return (
    <section className="relative overflow-hidden bg-gsef-navy text-white">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gsef-teal/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-gsef-orange/15 blur-3xl"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <GsefLogo asLink={false} theme="dark" showTagline={false} compact />
            {eyebrow ? (
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gsef-teal">
                {eyebrow}
              </span>
            ) : null}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">{title}</h1>
          {description ? (
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{description}</p>
          ) : null}
          {meta ? <div className="mt-4 text-sm text-slate-300">{meta}</div> : null}
        </div>
        {filters ? <div className="mt-8 sm:mt-10 flex flex-wrap gap-2">{filters}</div> : null}
      </div>
    </section>
  );
}
