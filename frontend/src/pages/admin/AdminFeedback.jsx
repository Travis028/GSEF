import React from 'react';

const items = [
  { who: 'Attendee', msg: 'Loved the networking lunch — more investor tables next year please.', when: '2h ago' },
  { who: 'Partner', msg: 'Can we get a sponsor deck v3 with updated logos?', when: 'Yesterday' },
];

const AdminFeedback = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gsef-navy">Feedback</h2>
        <p className="text-sm text-slate-600 mt-1">Triage inbound messages (UI scaffold)</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-100">
        {items.map((x) => (
          <div key={x.msg} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="min-w-0">
              <div className="text-xs font-bold text-gsef-teal">{x.who}</div>
              <div className="mt-1 text-sm text-slate-800">{x.msg}</div>
            </div>
            <div className="text-xs text-slate-500 sm:text-right shrink-0">{x.when}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFeedback;
