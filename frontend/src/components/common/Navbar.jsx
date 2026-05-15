import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GsefLogo from './GsefLogo';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { 
    name: 'Network', 
    dropdown: [
      { name: 'Founders', path: '/founders' },
      { name: 'Companies', path: '/companies' },
      { name: 'Membership', path: '/membership' }
    ]
  },
  { 
    name: 'Resources', 
    dropdown: [
      { name: 'Activities', path: '/activities' },
      { name: 'Reports', path: '/reports' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Training', path: '/training' },
      { name: 'FAQ', path: '/faq' }
    ]
  },
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
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="flex justify-between items-center">

          <div className="flex items-center">
            <GsefLogo theme={!isTransparent ? 'light' : 'dark'} compact />
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="flex items-center cursor-pointer py-2">
                    <span className={`font-body text-[14px] font-semibold transition-colors flex items-center gap-1 ${!isTransparent ? 'text-navy group-hover:text-green' : 'text-white group-hover:text-gold'}`}>
                      {item.name}
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 p-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2.5 text-sm font-body font-medium text-gray-600 hover:text-green hover:bg-green/5 rounded-xl transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-body text-[14px] font-semibold transition-colors py-2 block ${!isTransparent ? 'text-navy hover:text-green' : 'text-white hover:text-gold'}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden xl:flex items-center space-x-5">
            <Link to="/login" className={`font-body text-[14px] font-bold transition-colors ${!isTransparent ? 'text-navy hover:text-green' : 'text-white hover:text-gold'}`}>
              Login
            </Link>
            <Link to="/register" className="bg-green text-white px-6 py-2.5 rounded-full font-body text-[14px] font-bold hover:bg-green-light shadow-[0_4px_14px_rgba(0,107,63,0.3)] transform hover:-translate-y-0.5 transition-all">
              Register / Buy Ticket
            </Link>
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
            
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="flex flex-col space-y-3">
                    <span className="font-display text-[14px] font-bold text-gray-400 uppercase tracking-wider">{item.name}</span>
                    <div className="flex flex-col space-y-4 pl-4 border-l-2 border-gray-100">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className="font-display text-[20px] font-semibold text-navy hover:text-green"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-[24px] font-semibold text-navy hover:text-green block"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-8 border-t border-gray-100 flex flex-col space-y-4">
              <Link to="/login" onClick={() => setIsOpen(false)} className="font-display text-[20px] font-semibold text-navy text-center py-2">
                Login
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="bg-green text-white text-center py-4 rounded-xl font-body text-[18px] font-bold shadow-md">
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
