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
              <span className="text-2xl font-bold text-blue-900">GSEF</span>
              <span className="hidden md:inline text-sm text-gray-500">Global Somali Entrepreneurship Forum</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition">Events</Link>
            <Link to="/activities" className="text-gray-700 hover:text-blue-600 transition">Activities</Link>
            <Link to="/reports" className="text-gray-700 hover:text-blue-600 transition">Reports</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600 transition">Gallery</Link>
            <Link to="/founders" className="text-gray-700 hover:text-blue-600 transition">Founders</Link>
            <Link to="/companies" className="text-gray-700 hover:text-blue-600 transition">Companies</Link>
            <Link to="/membership" className="text-gray-700 hover:text-blue-600 transition">Membership</Link>
            <Link to="/training" className="text-gray-700 hover:text-blue-600 transition">Training</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</Link>
            <span className="text-gray-300">|</span>
            <button className="text-gray-700 hover:text-blue-600 transition">EN</button>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 transition ml-2">Login</Link>
            <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
              Register / Buy Ticket
            </Link>
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
            <Link to="/activities" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Activities</Link>
            <Link to="/reports" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Reports</Link>
            <Link to="/gallery" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Gallery</Link>
            <Link to="/founders" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Founders</Link>
            <Link to="/companies" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Companies</Link>
            <Link to="/membership" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Membership</Link>
            <Link to="/training" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Training</Link>
            <Link to="/faq" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">FAQ</Link>
            <Link to="/login" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Login</Link>
            <Link to="/register" className="block px-3 py-2 bg-blue-600 text-white rounded-md font-semibold">Register / Buy Ticket</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
