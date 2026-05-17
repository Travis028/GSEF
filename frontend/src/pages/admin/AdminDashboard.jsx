import React from 'react';
import { FiUsers, FiCalendar, FiDollarSign, FiActivity } from 'react-icons/fi';

const AdminDashboard = () => {
  const stats = [
    { title: 'Tickets sold', value: '1,245', sub: '+12% vs last month', icon: FiUsers, pill: 'bg-blue-50 text-blue-700' },
    { title: 'Check-ins today', value: '142', sub: 'Live desk', icon: FiActivity, pill: 'bg-emerald-50 text-emerald-700' },
    { title: 'Revenue', value: 'KES 2.4M', sub: 'Gross ticket sales', icon: FiDollarSign, pill: 'bg-amber-50 text-amber-900' },
    { title: 'Active members', value: '890', sub: 'Community + Pro', icon: FiCalendar, pill: 'bg-purple-50 text-purple-800' },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gsef-navy">Dashboard overview</h2>
            <p className="text-sm text-slate-600 mt-1">Responsive admin cards — ready to wire to your analytics endpoints.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
            <span className="h-2.5 w-2.5 rounded-full bg-gsef-teal" /> Live data sync enabled
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl bg-gsef-navy/5 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Next event</p>
            <p className="mt-2 font-semibold text-slate-900">GSEF Nairobi 2026</p>
            <p className="mt-1 text-sm text-slate-500">Planning review due in 4 days</p>
          </div>
          <div className="rounded-3xl bg-gsef-purple/5 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Pending approvals</p>
            <p className="mt-2 font-semibold text-slate-900">16 requests</p>
            <p className="mt-1 text-sm text-slate-500">Speakers, sponsors, media passes</p>
          </div>
          <div className="rounded-3xl bg-gsef-teal/5 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">New leads</p>
            <p className="mt-2 font-semibold text-slate-900">247</p>
            <p className="mt-1 text-sm text-slate-500">Visitor registrations since yesterday</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{stat.title}</p>
                <p className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-500">{stat.sub}</p>
              </div>
              <div className={`rounded-xl p-3 ${stat.pill}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 mb-4">Sales overview</h3>
          <div className="h-56 sm:h-64 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-dashed border-slate-200 flex items-center justify-center text-sm text-slate-500">
            Line chart placeholder
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 mb-4">Tickets by tier</h3>
          <div className="h-56 sm:h-64 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-dashed border-slate-200 flex items-center justify-center text-sm text-slate-500">
            Donut chart placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
