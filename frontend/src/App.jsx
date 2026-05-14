import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/Home';
import Events from './pages/Events';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import EventDetail from './pages/EventDetail';
import Registration from './pages/Registration';
import Gallery from './pages/Gallery';
import Activities from './pages/Activities';
import Reports from './pages/Reports';
import Founders from './pages/Founders';
import Companies from './pages/Companies';
import Membership from './pages/Membership';
import Training from './pages/Training';
import FAQ from './pages/FAQ';
// Admin pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEvents from './pages/admin/AdminEvents';
import AdminUsers from './pages/admin/AdminUsers';
import AdminCheckins from './pages/admin/AdminCheckins';
import AdminReports from './pages/admin/AdminReports';
import AdminGallery from './pages/admin/AdminGallery';
import AdminFeedback from './pages/admin/AdminFeedback';
import AdminTraining from './pages/admin/AdminTraining';
import AdminSettings from './pages/admin/AdminSettings';

function App() {
  return (
    <Routes>
      {/* Public & User Routes with MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/register/:id" element={<Registration />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/training" element={<Training />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Admin Routes with AdminLayout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="events" element={<AdminEvents />} />
        <Route path="check-ins" element={<AdminCheckins />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="feedback" element={<AdminFeedback />} />
        <Route path="training" element={<AdminTraining />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
