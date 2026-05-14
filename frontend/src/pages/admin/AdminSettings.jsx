import React, { useState } from 'react';

const AdminSettings = () => {
  const [siteName, setSiteName] = useState('GSEF');
  const [contactEmail, setContactEmail] = useState('info@gsef.com');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gsef-navy">Settings</h2>
        <p className="text-sm text-slate-600 mt-1">Global site configuration (UI scaffold)</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm max-w-3xl">
        <div className="grid grid-cols-1 gap-4 sm:gap-5">
          <label className="block">
            <span className="text-xs font-bold text-slate-700">Site name</span>
            <input
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-gsef-teal focus:border-gsef-teal"
            />
          </label>
          <label className="block">
            <span className="text-xs font-bold text-slate-700">Contact email</span>
            <input
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-gsef-teal focus:border-gsef-teal"
            />
          </label>
          <label className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 px-3 py-3">
            <span className="text-sm font-semibold text-slate-800">Maintenance mode</span>
            <input type="checkbox" className="h-4 w-4 accent-gsef-teal" />
          </label>
          <button type="button" className="rounded-xl bg-gsef-navy px-4 py-3 text-sm font-bold text-white hover:bg-gsef-navyDeep w-full sm:w-auto">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
