import React, { useMemo } from 'react';
import galleryFilenames from '../../data/galleryManifest.json';

const AdminGallery = () => {
  const rows = useMemo(() => galleryFilenames.slice(0, 12), []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gsef-navy">Gallery</h2>
          <p className="text-sm text-slate-600 mt-1">
            Total assets: <span className="font-mono font-bold text-gsef-teal">{galleryFilenames.length}</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="rounded-xl bg-gsef-navy px-4 py-2 text-xs font-bold text-white hover:bg-gsef-navyDeep">
            Sync folder
          </button>
          <button type="button" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50">
            Regenerate manifest
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[720px] w-full text-sm">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">File</th>
                <th className="px-4 py-3">Public URL</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((f) => (
                <tr key={f} className="hover:bg-slate-50/70">
                  <td className="px-4 py-3 font-mono text-xs text-slate-700 max-w-[260px] truncate">{f}</td>
                  <td className="px-4 py-3 font-mono text-xs text-gsef-teal truncate">{`/gallery/${f}`}</td>
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
        <p className="px-4 py-3 text-xs text-slate-500 border-t border-slate-100">
          Showing first 12 rows for performance. Hook this table to your storage + metadata service.
        </p>
      </div>
    </div>
  );
};

export default AdminGallery;
