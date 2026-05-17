import { useState, useEffect } from 'react';
import SiteHero from '../components/common/SiteHero';
import galleryImages from '../data/galleryImages';

const Gallery = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 200);
    return () => window.clearTimeout(timer);
  }, []);

  const imagesByYear = galleryImages.reduce((groups, image) => {
    const yearMatch = image.match(/whatsapp-(\d{4})-/);
    const year = yearMatch?.[1] ?? 'Other';
    if (!groups[year]) groups[year] = [];
    groups[year].push(image);
    return groups;
  }, {});

  const sortedYears = Object.keys(imagesByYear).sort((a, b) => b.localeCompare(a));

  return (
    <div className="bg-offwhite min-h-screen pb-24">
      <SiteHero
        eyebrow="Moments"
        title="Gallery"
        description="Browse official forum highlights using only the actual WhatsApp event photos grouped by year."
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] mb-10">
          <div className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-gsef-navy to-gsef-purple p-6 text-white shadow-2xl">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-gsef-teal/80 font-semibold">Official WhatsApp Gallery</p>
              <h2 className="text-4xl font-bold">Real event moments from the forum.</h2>
              <p className="max-w-xl text-slate-100/90 leading-7">This gallery is built from the actual WhatsApp photos only, with no Unsplash or placeholder stock images.</p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white border border-white/20">Real photos</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-gsef-teal/15 px-4 py-2 text-sm font-semibold text-gsef-teal">Event highlights</span>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {galleryImages.slice(0, 2).map((img, idx) => (
              <div key={idx} className="aspect-[5/4] overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg">
                <img src={img} alt={`GSEF highlight ${idx + 1}`} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className={`space-y-16 transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {sortedYears.map((year) => (
            <section key={year} className="space-y-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gsef-teal/80 font-semibold">Year</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gsef-navy">{year}</h2>
                </div>
                <p className="text-sm text-slate-500">Showing {imagesByYear[year].length} official WhatsApp images.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {imagesByYear[year].map((img, index) => (
                  <div key={img} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg">
                    <img
                      src={img}
                      alt={`GSEF ${year} photo ${index + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/gsef-vip-hero.png';
                      }}
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
