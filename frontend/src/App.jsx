import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Founders from './pages/Founders';
import Training from './pages/Training';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Reports from './pages/Reports';
import Membership from './pages/Membership';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/training" element={<Training />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/membership" element={<Membership />} />
          </Routes>
          <Toaster position="top-right" />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
