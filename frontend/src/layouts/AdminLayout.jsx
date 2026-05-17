import React from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AdminSidebar from '../components/admin/AdminSidebar';
import { FiLogOut } from 'react-icons/fi';

const AdminLayout = () => {
  const { user, isAuthenticated, logout } = useAuth();

  const adminPreview = import.meta.env.VITE_ALLOW_ADMIN_PREVIEW === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const allowed =
    adminPreview || user?.role === 'admin' || user?.role === 'organizer';

  if (!allowed) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-xl font-bold text-gsef-navy mb-2">Admin access required</h1>
          <p className="text-sm text-slate-600 mb-6">
            Your account does not have an organizer role yet. For local demos, set{' '}
            <span className="font-mono text-gsef-teal">VITE_ALLOW_ADMIN_PREVIEW=true</span> in{' '}
            <span className="font-mono">frontend/.env.development</span> and restart the dev server.
          </p>
          <Link to="/" className="text-gsef-teal font-semibold hover:underline">
            Back to site
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      <aside className="hidden lg:block w-72 shrink-0">
        <AdminSidebar />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-5 shadow-sm">
          <div>
            <h1 className="text-base font-bold text-gsef-navy">GSEF Admin</h1>
            <p className="text-xs text-slate-500">Manage events, media, training, and settings</p>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/" className="text-xs font-semibold text-gsef-teal hover:text-gsef-purple">
              View site
            </Link>
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50"
            >
              <FiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
