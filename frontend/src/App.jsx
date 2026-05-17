import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Gallery from './pages/Gallery';
import Speakers from './pages/Speakers';
import Reports from './pages/Reports';
import Training from './pages/Training';
import Membership from './pages/Membership';
import Founders from './pages/Founders';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEvents from './pages/admin/AdminEvents';
import AdminCheckins from './pages/admin/AdminCheckins';
import AdminReports from './pages/admin/AdminReports';
import AdminGallery from './pages/admin/AdminGallery';
import AdminFeedback from './pages/admin/AdminFeedback';
import AdminTraining from './pages/admin/AdminTraining';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';
import Activities from './pages/Activities';
import Companies from './pages/Companies';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-offwhite via-white to-slate-100">
        <Navbar />
        <main className="flex-grow pt-[5.5rem]">
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/training" element={<Training />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Pages */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/registration/:eventId" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Admin Pages */}
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
