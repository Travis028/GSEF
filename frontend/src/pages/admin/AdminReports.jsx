import React from 'react';

const AdminReports = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gsef-navy">Reports</h2>
        <p className="text-sm text-slate-600 mt-1">Publish, replace, and track downloads (UI scaffold)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 mb-4">Sales overview</h3>
          <div className="h-56 sm:h-64 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-dashed border-slate-200 flex items-center justify-center text-sm text-slate-500">
            Chart placeholder
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 mb-4">Top downloads</h3>
          <div className="h-56 sm:h-64 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-dashed border-slate-200 flex items-center justify-center text-sm text-slate-500">
            Table placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
