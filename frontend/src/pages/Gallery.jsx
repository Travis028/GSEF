import React, { useMemo, useState } from 'react';
import galleryFilenames from '../data/galleryManifest.json';
import SiteHero from '../components/common/SiteHero';

const YEAR_TABS = ['All', '2026', '2025', '2024', '2023', '2022'];

function yearFromFilename(name) {
  const m = String(name).match(/WhatsApp_Image_(\d{4})/);
  return m ? m[1] : '2026';
}

const Gallery = () => {
  const [year, setYear] = useState('All');

  const items = useMemo(() => {
    const list = galleryFilenames.map((file) => ({
      file,
      src: `/gallery/${file}`,
      y: yearFromFilename(file),
    }));
    if (year === 'All') return list;
    return list.filter((x) => x.y === year);
  }, [year]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-16">
      <SiteHero
        eyebrow="Media"
        title="Gallery"
        description="Moments from GSEF forums, partners, and community — curated from your shared album. Images are shown as provided."
        meta={
          <span>
            <span className="font-mono text-gsef-orange font-semibold">{items.length}</span> photos in this view
          </span>
        }
        filters={
          <>
            {YEAR_TABS.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setYear(y)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  year === y
                    ? 'bg-gradient-to-r from-gsef-orange to-gsef-purple text-white shadow-lg'
                    : 'bg-white/10 text-slate-200 hover:bg-white/15'
                }`}
              >
                {y}
              </button>
            ))}
          </>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200/80 shadow-xl p-3 sm:p-4 md:p-6">
          {items.length === 0 ? (
            <p className="text-center text-slate-600 py-16">No photos for this year yet.</p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 [column-gap:0.75rem] sm:[column-gap:1rem]">
              {items.map(({ file, src }) => (
                <figure
                  key={file}
                  className="group relative mb-3 sm:mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-black/5"
                >
                  <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-tr from-gsef-teal/25 via-transparent to-gsef-purple/25" />
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="relative z-0 block w-full h-auto transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-full group-hover:translate-y-0 transition duration-300">
                    <div className="m-2 rounded-xl bg-black/55 px-3 py-2 text-[11px] font-medium text-white backdrop-blur-sm">
                      GSEF moment
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
