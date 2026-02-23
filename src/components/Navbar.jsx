import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/why-teamgenix', label: 'Why Teamgenix' },
  { to: '/industries', label: 'Industries' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 py-4 ${
        scrolled 
          ? 'shadow-md py-3' 
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,0,40,0.08)' } : {}}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={handleNavClick}>
          <div className="w-10 h-10 shrink-0">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="8" fill="#0f0f1e" fillOpacity="0.9"/>
              <text y="27" x="18" textAnchor="middle" fontSize="22" fontFamily="Outfit, sans-serif" fontWeight="800" fill="white">T</text>
              <rect x="7" y="30" width="22" height="3" rx="1.5" fill="#f5d060"/>
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`text-xl font-extrabold tracking-tight font-heading ${scrolled ? 'text-[#0f0f1e]' : 'text-white'}`}>Teamgenix</span>
            <span className={`text-[0.65rem] font-medium uppercase tracking-widest hidden sm:block ${scrolled ? 'text-gray-400' : 'text-white/70'}`}>Services Solution</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto mr-4">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `relative py-2 text-base font-semibold transition-all duration-300 whitespace-nowrap tracking-wide font-heading ${
                  isActive
                    ? scrolled ? 'text-[#0f0f1e]' : 'text-white'
                    : scrolled ? 'text-gray-500 hover:text-[#0f0f1e]' : 'text-white/75 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                        style={{ background: '#f5d060', boxShadow: '0 0 8px rgba(245,208,96,0.6)' }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <Link to="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold font-heading transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, #f5d060, #e8b840)', color: 'var(--color-navy)', boxShadow: '0 0 20px rgba(245,208,96,0.25)' }}
          onClick={handleNavClick}>
          Get a Quote
        </Link>

        {/* Hamburger */}
        <button
          className={`lg:hidden flex flex-col gap-1.5 p-2 rounded-lg border ml-auto ${scrolled ? 'border-gray-200 bg-gray-50' : 'bg-white/5 border-white/10'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span 
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className={`w-6 h-0.5 rounded-full block ${scrolled ? 'bg-gray-700' : 'bg-white'}`}
          />
          <motion.span 
            animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className={`w-6 h-0.5 rounded-full block ${scrolled ? 'bg-gray-700' : 'bg-white'}`}
          />
          <motion.span 
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className={`w-6 h-0.5 rounded-full block ${scrolled ? 'bg-gray-700' : 'bg-white'}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t"
            style={{ background: 'rgba(255,255,255,0.98)', borderColor: 'rgba(0,0,40,0.08)', backdropFilter: 'blur(20px)' }}
          >
            <nav className="flex flex-col p-6 gap-2">
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-2 py-4 text-lg font-semibold transition-all duration-300 whitespace-nowrap font-heading ${
                      isActive ? 'text-[#0f0f1e]' : 'text-gray-400 hover:text-[#0f0f1e]'
                    }`
                  }
                  onClick={handleNavClick}
                >
                  {({ isActive }) => (
                    <div className="relative inline-block">
                      <span>{label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeUnderlineMobile"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                          style={{ background: '#f5d060' }}
                        />
                      )}
                    </div>
                  )}
                </NavLink>
              ))}
              <Link to="/contact" className="btn btn-primary mt-4 py-4 w-full" onClick={handleNavClick}>
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
