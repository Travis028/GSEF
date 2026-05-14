import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GsefLogo from './GsefLogo';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('EN');
  const [searchOpen, setSearchOpen] = useState(false);

  const linkClass =
    'text-slate-700 hover:text-gsef-teal transition font-semibold whitespace-nowrap';

  const NavLinks = ({ onNavigate }) => (
    <>
      <Link to="/" className={linkClass} onClick={onNavigate}>Home</Link>
      <Link to="/events" className={linkClass} onClick={onNavigate}>Events</Link>
      <Link to="/activities" className={linkClass} onClick={onNavigate}>Activities</Link>
      <Link to="/reports" className={linkClass} onClick={onNavigate}>Reports</Link>
      <Link to="/gallery" className={linkClass} onClick={onNavigate}>Gallery</Link>
      <Link to="/founders" className={linkClass} onClick={onNavigate}>Founders</Link>
      <Link to="/companies" className={linkClass} onClick={onNavigate}>Companies</Link>
      <Link to="/membership" className={linkClass} onClick={onNavigate}>Membership</Link>
      <Link to="/training" className={linkClass} onClick={onNavigate}>Training</Link>
      <Link to="/faq" className={linkClass} onClick={onNavigate}>FAQ</Link>
    </>
  );

  const mobileLink = 'block px-3 py-2 text-slate-800 hover:bg-slate-50 rounded-lg font-semibold';

  return (
    <nav className="bg-white/95 backdrop-blur border-b border-slate-200/80 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-16 md:h-[4.25rem]">
          <GsefLogo className="shrink-0 min-w-0" />

          {/* Tablet/desktop: horizontal scroll keeps every link reachable */}
          <div className="hidden md:flex flex-1 min-w-0 justify-end">
            <div className="flex items-center gap-3 lg:gap-4 xl:gap-5 overflow-x-auto whitespace-nowrap px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-xs lg:text-sm">
              <NavLinks onNavigate={() => {}} />
              <span className="text-slate-300 select-none">|</span>
              <button
                type="button"
                className={`${linkClass} px-0`}
                onClick={() => setLang((l) => (l === 'EN' ? 'FR' : 'EN'))}
                aria-label="Toggle language"
              >
                {lang}
              </button>
              <button
                type="button"
                className={`${linkClass} px-0 inline-flex items-center gap-1`}
                aria-label="Search"
                onClick={() => setSearchOpen((v) => !v)}
              >
                <FiSearch />
                <span className="hidden xl:inline">Search</span>
              </button>
              <Link to="/login" className={linkClass}>Login</Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-gsef-orange to-gsef-purple text-white px-4 lg:px-5 py-2.5 rounded-full hover:opacity-95 transition shadow-md font-bold text-xs lg:text-sm shrink-0"
              >
                Register / Buy Ticket
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2 shrink-0">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-800"
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <FiSearch />
            </button>
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="text-slate-800 p-2" aria-label="Menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {searchOpen ? (
          <div className="border-t border-slate-100 py-3">
            <label className="block">
              <span className="sr-only">Search</span>
              <input
                type="search"
                placeholder="Search events, reports, partners…"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:ring-2 focus:ring-gsef-teal focus:border-gsef-teal"
              />
            </label>
          </div>
        ) : null}
      </div>

      {isOpen ? (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-4 space-y-0.5 max-h-[75vh] overflow-y-auto">
            <Link to="/" className={mobileLink} onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/events" className={mobileLink} onClick={() => setIsOpen(false)}>Events</Link>
            <Link to="/activities" className={mobileLink} onClick={() => setIsOpen(false)}>Activities</Link>
            <Link to="/reports" className={mobileLink} onClick={() => setIsOpen(false)}>Reports</Link>
            <Link to="/gallery" className={mobileLink} onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/founders" className={mobileLink} onClick={() => setIsOpen(false)}>Founders</Link>
            <Link to="/companies" className={mobileLink} onClick={() => setIsOpen(false)}>Companies</Link>
            <Link to="/membership" className={mobileLink} onClick={() => setIsOpen(false)}>Membership</Link>
            <Link to="/training" className={mobileLink} onClick={() => setIsOpen(false)}>Training</Link>
            <Link to="/faq" className={mobileLink} onClick={() => setIsOpen(false)}>FAQ</Link>
            <div className="flex items-center gap-2 px-3 py-2">
              <button
                type="button"
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-800"
                onClick={() => setLang((l) => (l === 'EN' ? 'FR' : 'EN'))}
              >
                Language: {lang}
              </button>
            </div>
            <Link to="/login" className={mobileLink} onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/register" className="block px-3 py-3 mt-1 text-center rounded-xl bg-gradient-to-r from-gsef-orange to-gsef-purple text-white font-bold" onClick={() => setIsOpen(false)}>Register / Buy Ticket</Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
