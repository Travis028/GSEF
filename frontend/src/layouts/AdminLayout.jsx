import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
// import Sidebar from '../components/admin/Sidebar'; # To be created

const AdminLayout = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Assuming role is checked here
  if (user?.role !== 'admin' && user?.role !== 'organizer') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar Placeholder */}
      <div className="w-64 bg-slate-900 text-white h-full hidden md:block">
        <div className="p-4 text-xl font-bold border-b border-slate-800">GSEF Admin</div>
        <nav className="p-4 space-y-2">
          <a href="/admin" className="block py-2 px-4 rounded hover:bg-slate-800">Dashboard</a>
          <a href="/admin/events" className="block py-2 px-4 rounded hover:bg-slate-800">Events</a>
          <a href="/admin/users" className="block py-2 px-4 rounded hover:bg-slate-800">Users</a>
        </nav>
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white shadow-sm flex items-center px-6 justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Admin Portal</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">{user?.names || 'Admin'}</span>
            <a href="/" className="text-sm text-blue-600 hover:underline">Back to Site</a>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
