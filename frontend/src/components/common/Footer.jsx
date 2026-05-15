import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="container-custom">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="mb-6">
              <span className="font-display text-[28px] font-bold text-white tracking-tight">GSEF</span>
              <p className="font-mono text-[10px] font-semibold text-white/70 tracking-[0.14em] uppercase mt-1">
                Global Somali<br/>Entrepreneurship Forum
              </p>
            </div>
            <p className="font-body text-[14px] text-gray-400 leading-relaxed mb-6">
              Connecting innovators, investors, and leaders shaping the future of the Somali entrepreneurship ecosystem.
            </p>
          </div>

          <div>
            <h4 className="font-display text-[20px] font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 font-body text-[14px]">
              <li><Link to="/events" className="text-gray-400 hover:text-gold transition-colors">Events</Link></li>
              <li><Link to="/founders" className="text-gray-400 hover:text-gold transition-colors">Founders</Link></li>
              <li><Link to="/training" className="text-gray-400 hover:text-gold transition-colors">Training</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/reports" className="text-gray-400 hover:text-gold transition-colors">Reports</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[20px] font-bold text-white mb-5">Contact</h4>
            <ul className="space-y-3 font-body text-[14px]">
              <li className="text-gray-400 flex items-start gap-2">
                <span className="mt-0.5">✉️</span> 
                <a href="mailto:info@gsef.co.ke" className="hover:text-gold transition-colors">info@gsef.co.ke</a>
              </li>
              <li className="text-gray-400 flex items-start gap-2">
                <span className="mt-0.5">📞</span> 
                <a href="tel:+254700000000" className="hover:text-gold transition-colors">+254 700 000 000</a>
              </li>
              <li className="text-gray-400 flex items-start gap-2">
                <span className="mt-0.5">📍</span> 
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[20px] font-bold text-white mb-5">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all">
                in
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all">
                f
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all">
                ig
              </a>
            </div>
            <div className="mt-6">
              <h5 className="font-body text-[14px] font-semibold text-white mb-2">Subscribe to Newsletter</h5>
              <div className="flex">
                <input type="email" placeholder="Your email" className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 font-body text-sm text-white w-full focus:outline-none focus:border-green" />
                <button className="bg-green hover:bg-green-light text-white px-4 py-2 rounded-r-lg font-body text-sm font-semibold transition-colors">→</button>
              </div>
            </div>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left font-body text-[13px] text-gray-500">
          <p>&copy; 2025 GSEF - Global Somali Entrepreneurship Forum. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
