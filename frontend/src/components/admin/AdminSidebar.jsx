import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiActivity,
  FiBarChart2,
  FiCalendar,
  FiHome,
  FiImage,
  FiMessageSquare,
  FiSettings,
  FiUsers,
  FiVideo,
} from 'react-icons/fi';
import GsefLogo from '../common/GsefLogo';

const linkBase =
  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition text-slate-200 hover:bg-white/5 hover:text-white';

const AdminSidebar = ({ onNavigate }) => {
  const item = ({ to, icon: Icon, label }) => (
    <NavLink
      to={to}
      end={to === '/admin'}
      onClick={onNavigate}
      className={({ isActive }) =>
        `${linkBase} ${isActive ? 'bg-white/10 text-white ring-1 ring-white/10' : ''}`
      }
    >
      <Icon className="text-gsef-teal shrink-0" />
      <span className="truncate">{label}</span>
    </NavLink>
  );

  return (
    <div className="flex h-full flex-col bg-gsef-navy text-white border-r border-white/10">
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <GsefLogo to="/" theme="dark" showTagline={false} compact />
        </div>
        <p className="mt-2 text-[11px] uppercase tracking-widest text-slate-400">Admin console</p>
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {item({ to: '/admin', icon: FiHome, label: 'Dashboard' })}
        {item({ to: '/admin/events', icon: FiCalendar, label: 'Events' })}
        {item({ to: '/admin/check-ins', icon: FiActivity, label: 'Check-ins' })}
        {item({ to: '/admin/reports', icon: FiBarChart2, label: 'Reports' })}
        {item({ to: '/admin/gallery', icon: FiImage, label: 'Gallery' })}
        {item({ to: '/admin/feedback', icon: FiMessageSquare, label: 'Feedback' })}
        {item({ to: '/admin/training', icon: FiVideo, label: 'Training' })}
        {item({ to: '/admin/users', icon: FiUsers, label: 'Users' })}
        {item({ to: '/admin/settings', icon: FiSettings, label: 'Settings' })}
      </nav>
    </div>
  );
};

export default AdminSidebar;
