import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const scans = [
  { name: 'Amina Ali', time: '09:12', tier: 'VIP' },
  { name: 'Omar H.', time: '09:14', tier: 'Regular' },
  { name: 'Sahra M.', time: '09:18', tier: 'VIP' },
];

const AdminCheckins = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gsef-navy">Check-ins</h2>
        <p className="text-sm text-slate-600 mt-1">Live desk + scanner workflow (UI scaffold)</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        <div className="xl:col-span-1 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 mb-4">Live check-ins</h3>
          <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-gsef-teal/15 to-gsef-purple/15 ring-8 ring-slate-50">
            <div className="text-center">
              <div className="text-3xl font-black text-gsef-navy">142</div>
              <div className="text-xs font-semibold text-slate-500">/ 500</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500 text-center">
            Wire this gauge to your check-in API. The layout is responsive for tablets used at venue doors.
          </p>
        </div>

        <div className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 px-4 sm:px-6 py-4">
            <h3 className="text-sm font-bold text-slate-900">Recent scans</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {scans.map((s) => (
              <div key={s.name + s.time} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 sm:px-6 py-4">
                <div className="min-w-0">
                  <div className="font-semibold text-slate-900 truncate">{s.name}</div>
                  <div className="text-xs text-slate-500">{s.time}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-gsef-teal/10 px-2.5 py-1 text-[11px] font-bold text-gsef-teal">{s.tier}</span>
                  <FiCheckCircle className="text-gsef-teal" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCheckins;
