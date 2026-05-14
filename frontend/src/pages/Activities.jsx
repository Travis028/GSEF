import React, { useState } from 'react';
import SiteHero from '../components/common/SiteHero';
import { FiClock, FiMapPin } from 'react-icons/fi';

const DAYS = ['Day 1 — July 19', 'Day 2 — July 20'];

const schedule = [
  { time: '08:30', title: 'Registration & Coffee', location: 'Main Lobby', tag: 'Arrival', tone: 'slate' },
  { time: '09:30', title: 'Opening Keynote: Building Resilient Ventures', location: 'Plenary Hall', tag: 'Keynote', tone: 'teal' },
  { time: '11:00', title: 'Panel: Fintech & Diaspora Capital', location: 'Plenary Hall', tag: 'Panel', tone: 'blue' },
  { time: '12:30', title: 'Networking Lunch', location: 'Garden Terrace', tag: 'Networking', tone: 'purple' },
  { time: '14:00', title: 'Workshop Tracks (3 rooms)', location: 'Breakout Wing', tag: 'Workshop', tone: 'orange' },
  { time: '16:30', title: 'Investor Office Hours', location: 'VIP Lounge', tag: 'Investors', tone: 'teal' },
  { time: '18:30', title: 'Welcome Reception', location: 'Sky Lounge', tag: 'Networking', tone: 'purple' },
];

const tagStyles = {
  slate: 'bg-slate-100 text-slate-700 ring-slate-200',
  teal: 'bg-gsef-teal/15 text-gsef-teal ring-gsef-teal/25',
  blue: 'bg-blue-50 text-blue-800 ring-blue-100',
  purple: 'bg-purple-50 text-purple-800 ring-purple-100',
  orange: 'bg-amber-50 text-amber-900 ring-amber-100',
};

const Activities = () => {
  const [day, setDay] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-16">
      <SiteHero
        eyebrow="Programme"
        title="Activities"
        description="A clear, hour-by-hour schedule so attendees can plan networking, learning, and breaks — styled to match the GSEF experience."
        filters={
          <>
            {DAYS.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => setDay(i)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  day === i
                    ? 'bg-gradient-to-r from-gsef-orange to-gsef-purple text-white shadow-lg'
                    : 'bg-white/10 text-slate-200 hover:bg-white/15'
                }`}
              >
                {label}
              </button>
            ))}
          </>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="rounded-2xl bg-white/95 backdrop-blur border border-slate-200/80 shadow-xl p-4 sm:p-6 md:p-8">
          <p className="text-sm text-slate-500 mb-6 md:mb-8">
            Showing sample agenda for <span className="font-semibold text-gsef-navy">{DAYS[day]}</span>. Swap days to preview layout — connect your CMS when ready.
          </p>

          <div className="space-y-4 md:space-y-5">
            {schedule.map((row) => (
              <article
                key={row.time + row.title}
                className="group relative flex flex-col sm:flex-row sm:items-stretch gap-4 rounded-2xl border border-slate-100 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-gsef-teal/25 transition"
              >
                <div className="sm:w-28 shrink-0 flex sm:flex-col sm:justify-center gap-2 text-gsef-navy">
                  <span className="inline-flex items-center gap-2 text-sm font-bold">
                    <FiClock className="text-gsef-teal shrink-0" />
                    {row.time}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900">{row.title}</h2>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ring-1 ${tagStyles[row.tone]}`}
                    >
                      {row.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 inline-flex items-center gap-2">
                    <FiMapPin className="text-gsef-orange shrink-0" />
                    {row.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
