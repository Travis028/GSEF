import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-offwhite">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* We will add more routes here as we build them */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
