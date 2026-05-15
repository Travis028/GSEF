import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-navy">GSEF</span>
              <span className="hidden md:inline text-sm text-gray-500">Global Somali Entrepreneurship Forum</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green transition">Home</Link>
            <Link to="/events" className="text-gray-700 hover:text-green transition">Events</Link>
            <Link to="/founders" className="text-gray-700 hover:text-green transition">Founders</Link>
            <Link to="/training" className="text-gray-700 hover:text-green transition">Training</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-green transition">Gallery</Link>
            <Link to="/reports" className="text-gray-700 hover:text-green transition">Reports</Link>
            <Link to="/membership" className="text-gray-700 hover:text-green transition">Membership</Link>
            <Link to="/login" className="text-gray-700 hover:text-green transition">Login</Link>
            <Link to="/register" className="bg-green text-white px-4 py-2 rounded-lg hover:bg-green/90 transition">Register</Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Home</Link>
            <Link to="/events" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Events</Link>
            <Link to="/founders" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Founders</Link>
            <Link to="/training" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Training</Link>
            <Link to="/login" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Login</Link>
            <Link to="/register" className="block px-3 py-2 bg-green text-white rounded-md">Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
