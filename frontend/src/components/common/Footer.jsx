import React from 'react';
import { Link } from 'react-router-dom';
import GsefLogo from './GsefLogo';

const Footer = () => {
  return (
    <footer className="bg-gsef-navy text-white mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <GsefLogo theme="dark" className="mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering Somali entrepreneurs and connecting a global community through forums, training, and partnerships.
            </p>
            <div className="mt-6 flex items-center gap-2 opacity-90">
              <GsefLogo asLink={false} theme="dark" showTagline={false} compact />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gsef-teal">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/events" className="text-slate-300 hover:text-white transition">Events</Link></li>
              <li><Link to="/gallery" className="text-slate-300 hover:text-white transition">Gallery</Link></li>
              <li><Link to="/reports" className="text-slate-300 hover:text-white transition">Reports</Link></li>
              <li><Link to="/membership" className="text-slate-300 hover:text-white transition">Membership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gsef-orange">Contact</h4>
            <p className="text-slate-300 text-sm">Email: info@gsef.com</p>
            <p className="text-slate-300 text-sm">Phone: +254 700 000 000</p>
            <p className="text-slate-300 text-sm">Nairobi, Kenya</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gsef-purple">Follow Us</h4>
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="#" className="text-slate-300 hover:text-gsef-teal transition">Twitter</a>
              <a href="#" className="text-slate-300 hover:text-gsef-teal transition">LinkedIn</a>
              <a href="#" className="text-slate-300 hover:text-gsef-teal transition">Facebook</a>
              <a href="#" className="text-slate-300 hover:text-gsef-teal transition">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>&copy; 2026 GSEF. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-widest">Presented by</span>
            <GsefLogo asLink={false} theme="dark" showTagline={false} compact className="opacity-80" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
