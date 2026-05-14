import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">GSEF</h3>
            <p className="text-gray-400">Global Somali Entrepreneurship Forum</p>
            <p className="text-gray-400 mt-2">Empowering entrepreneurs worldwide</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-gray-400 hover:text-white transition">Events</Link></li>
              <li><Link to="/speakers" className="text-gray-400 hover:text-white transition">Speakers</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition">Gallery</Link></li>
              <li><Link to="/reports" className="text-gray-400 hover:text-white transition">Reports</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@gsef.com</p>
            <p className="text-gray-400">Phone: +254 700 000 000</p>
            <p className="text-gray-400">Nairobi, Kenya</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 GSEF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
