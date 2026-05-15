import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GsefLogo from './GsefLogo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Activities', path: '/activities' },
  { name: 'Reports', path: '/reports' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Founders', path: '/founders' },
  { name: 'Companies', path: '/companies' },
  { name: 'Membership', path: '/membership' },
  { name: 'Training', path: '/training' },
  { name: 'FAQ', path: '/faq' },
  { name: 'EN', path: '#' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // If we are NOT on the homepage, the navbar should always have a white background so text is visible on offwhite backgrounds.
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${!isTransparent ? 'bg-white/95 backdrop-blur-md py-3 shadow-[0_1px_3px_rgba(0,0,0,0.1)]' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex flex-wrap justify-between items-center gap-y-4">
          
          <div className="flex items-center">
            <GsefLogo theme={!isTransparent ? 'light' : 'dark'} compact />
          </div>

          {/* Desktop Nav - Wrapping allowed to form 2 rows if needed */}
          <div className="hidden xl:flex flex-wrap items-center justify-end gap-x-6 gap-y-3 max-w-[70%]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`font-body text-[13px] font-semibold transition-colors ${!isTransparent ? 'text-navy hover:text-green' : 'text-white hover:text-gold'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden xl:flex items-center space-x-4">
            <Link to="/login" className={`font-body text-[13px] font-bold transition-colors ${!isTransparent ? 'text-navy hover:text-green' : 'text-white hover:text-gold'}`}>
              Login
            </Link>
            <Link to="/register" className="bg-green text-white px-5 py-2.5 rounded-full font-body text-[13px] font-bold hover:bg-green-light shadow-md transform hover:-translate-y-0.5 transition-all whitespace-nowrap">
              Register / Buy Ticket
            </Link>
            <button className={`p-2 rounded-full transition-colors ${!isTransparent ? 'text-navy hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={!isTransparent ? 'text-navy' : 'text-white'}>
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[70px] bg-white z-[999] overflow-y-auto pb-20">
          <div className="flex flex-col px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="font-display text-2xl font-semibold text-navy hover:text-green"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-gray-100 flex flex-col space-y-4">
              <Link to="/login" onClick={() => setIsOpen(false)} className="font-display text-xl font-semibold text-navy">
                Login
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="bg-green text-white text-center py-4 rounded-xl font-body text-lg font-semibold">
                Register / Buy Ticket
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
