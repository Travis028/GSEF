import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GsefLogo from './GsefLogo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Speakers', path: '/speakers' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Training', path: '/training' },
  { name: 'Membership', path: '/membership' },
  { name: 'Reports', path: '/reports' },
  { name: 'Companies', path: '/companies' },
  { name: 'Activities', path: '/activities' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false);
      }
      
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 60);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const primaryLinks = navLinks.slice(0, 7);
  const extraLinks = navLinks.slice(7);

  const linkClass = (path) => {
    const active = location.pathname === path;
    return `font-body text-[13px] font-semibold transition-all ${isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-gsef-green'} ${active ? (isTransparent ? 'bg-white/10 text-white rounded-full px-3 py-2' : 'bg-gsef-green/10 text-gsef-green rounded-full px-3 py-2') : 'px-1 py-2'}`;
  };

  return (
    <nav className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 transform ${!navVisible ? '-translate-y-full' : 'translate-y-0'} ${!isTransparent ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg shadow-slate-900/10' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <GsefLogo theme={!isTransparent ? 'light' : 'dark'} compact />
            <span className={`hidden sm:inline text-[11px] font-semibold tracking-[0.24em] uppercase ${isTransparent ? 'text-white/70' : 'text-slate-500'}`}>
              Forum collective
            </span>
          </div>

          <div className="hidden xl:flex items-center gap-1">
            {primaryLinks.map((link) => (
              <Link key={link.name} to={link.path} className={linkClass(link.path)}>
                {link.name}
              </Link>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowMore((current) => !current)}
                className={`font-body text-[13px] font-semibold transition-all ${isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-gsef-green'} px-3 py-2 rounded-full ${showMore ? (isTransparent ? 'bg-white/15 text-white' : 'bg-slate-100 text-gsef-navy') : 'hover:bg-slate-100/80'}`}
              >
                More
              </button>
              {showMore && (
                <div className="absolute right-0 mt-3 w-48 rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
                  {extraLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setShowMore(false)}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-3">
            <Link
              to="/login"
              className={`font-body text-[13px] font-semibold transition ${isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-gsef-green'}`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-full bg-gsef-green px-5 py-2.5 text-[13px] font-bold text-white shadow-md shadow-gsef-green/20 transition hover:bg-gsef-green-dark"
            >
              Register / Buy Ticket
            </Link>
          </div>

          <div className="xl:hidden flex items-center justify-between w-full">
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className={`${isTransparent ? 'text-white' : 'text-slate-900'} p-3 rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-sm transition-all`}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <div className="flex-1 flex justify-center">
              <GsefLogo theme={!isTransparent ? 'light' : 'dark'} compact />
            </div>
          </div>
        </div>
      </div>

      <div className={`xl:hidden fixed inset-y-0 left-0 z-[999] w-[85vw] max-w-sm bg-white border-r border-slate-200 shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col p-6 overflow-y-auto">
          <div className="mb-8 flex items-center justify-between">
            <GsefLogo theme="dark" compact />
            <button type="button" onClick={() => setIsOpen(false)} className="p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block rounded-3xl border border-slate-200 px-5 py-4 text-lg font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-slate-200">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block rounded-3xl border border-slate-200 px-5 py-4 text-center text-lg font-semibold text-slate-900 hover:bg-slate-50 transition mb-3"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="block rounded-3xl bg-gsef-green px-5 py-4 text-center text-lg font-bold text-white shadow-lg shadow-gsef-green/20 transition hover:bg-gsef-green-dark"
            >
              Register / Buy Ticket
            </Link>
          </div>
        </div>
      </div>

      {isOpen && <div className="xl:hidden fixed inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity duration-300" onClick={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Navbar;
