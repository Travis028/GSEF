import React, { useState } from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AdminSidebar from '../components/admin/AdminSidebar';
import { FiLogOut, FiMenu } from 'react-icons/fi';

const AdminLayout = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

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
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <AdminSidebar onNavigate={() => setMobileOpen(false)} />
      </aside>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/50 transition ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-[min(88vw,320px)] bg-gsef-navy shadow-2xl transition-transform ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <AdminSidebar onNavigate={() => setMobileOpen(false)} />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-14 sm:h-16 items-center gap-3 border-b border-slate-200 bg-white/90 px-3 sm:px-5 backdrop-blur">
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <FiMenu />
          </button>

          <div className="flex-1 min-w-0">
            <h1 className="text-sm sm:text-lg font-bold text-gsef-navy truncate">GSEF Admin</h1>
            <p className="hidden sm:block text-xs text-slate-500 truncate">Manage events, media, training, and settings</p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="hidden sm:inline text-xs font-semibold text-slate-600 max-w-[10rem] truncate">
              {user?.names || user?.email || 'Admin'}
            </span>
            <Link to="/" className="hidden sm:inline-flex text-xs font-semibold text-gsef-teal hover:text-gsef-purple">
              View site
            </Link>
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50"
            >
              <FiLogOut />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
