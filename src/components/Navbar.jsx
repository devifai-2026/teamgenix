import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import navlogo from "../../src/assets/NavbarLogo.png"

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
      style={scrolled ? { background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' } : {}}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0" onClick={handleNavClick}>
          <div className="h-16 w-auto flex items-center shrink-0">
            <img src={navlogo} alt="TeamGenix Logo" className="h-full w-auto object-contain" />
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
                    : scrolled ? 'text-[#0f0f1e]/80 hover:text-[#0f0f1e]' : 'text-white/75 hover:text-white'
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
            className={`w-6 h-0.5 rounded-full block ${scrolled ? 'bg-black' : 'bg-white'}`}
          />
          <motion.span 
            animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className={`w-6 h-0.5 rounded-full block ${scrolled ? 'bg-black' : 'bg-white'}`}
          />
          <motion.span 
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className={`w-6 h-0.5 rounded-full block ${scrolled ? 'bg-black' : 'bg-white'}`}
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
