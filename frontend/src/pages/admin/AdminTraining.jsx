import React from 'react';

const courses = [
  { title: 'Digital Marketing for Entrepreneurs', price: 'KES 1,500', status: 'Published' },
  { title: 'Founder Mentoring Workshop', price: 'KES 2,500', status: 'Draft' },
];

const AdminTraining = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gsef-navy">Training</h2>
          <p className="text-sm text-slate-600 mt-1">Create, price, and publish workshops (UI scaffold)</p>
        </div>
        <button type="button" className="rounded-xl bg-gradient-to-r from-gsef-orange to-gsef-purple px-4 py-2 text-xs font-bold text-white hover:opacity-95">
          New workshop
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[640px] w-full text-sm">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {courses.map((c) => (
                <tr key={c.title} className="hover:bg-slate-50/70">
                  <td className="px-4 py-3 font-semibold text-slate-900">{c.title}</td>
                  <td className="px-4 py-3 font-mono text-xs">{c.price}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-[11px] font-bold ${
                        c.status === 'Published'
                          ? 'bg-gsef-teal/10 text-gsef-teal'
                          : 'bg-amber-50 text-amber-900'
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">
                    <button type="button" className="text-xs font-bold text-slate-500 hover:text-gsef-purple">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminTraining;
