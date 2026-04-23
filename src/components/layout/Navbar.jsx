import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import useActiveSection from '../../hooks/useActiveSection';

/**
 * Navbar Component
 * Transformed into a premium floating pill with active section highlighting.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'HOME', path: '/#home', id: 'home' },
    { name: 'ABOUT', path: '/#about', id: 'about' },
    { name: 'DOMAINS', path: '/#domains', id: 'domains' },
    { name: 'PRIZES', path: '/#prizes', id: 'prizes' },
    { name: 'SCHEDULE', path: '/#schedule', id: 'schedule' },
    { name: 'GUESTS', path: '/#guests', id: 'guests' },
    { name: 'SPONSORS', path: '/#sponsors', id: 'sponsors' },
    { name: 'REGISTER', path: '/#register', id: 'register' },
    { name: 'CONTACT', path: '/#contact', id: 'contact' },
  ];

  const activeSection = useActiveSection(navLinks.map(l => l.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path) => {
    setIsMobileMenuOpen(false);
    
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      
      if (element && location.pathname === '/') {
        // If we are on home page and element exists, smooth scroll
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else {
        // Otherwise, navigate to the home page with the hash
        navigate(path);
      }
    }
  };

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 md:px-6 pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border pointer-events-auto ${
          isScrolled 
            ? 'bg-bg-base/80 backdrop-blur-xl border-accent-orange/30 shadow-[0_4px_30px_rgba(255,107,0,0.1)] w-full max-w-7xl' 
            : 'bg-bg-surface/40 backdrop-blur-md border-white/10 w-full max-w-7xl'
        }`}
      >
        
        {/* Left: Branding */}
        <Link to="/" className="flex items-center space-x-3 group shrink-0" onClick={() => handleLinkClick('/#home')}>
          <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden">
            <img src="/astra-logo.png" alt="ASTRA Logo" className="w-full h-full object-contain" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-orbitron font-black text-xl tracking-tighter text-text-primary leading-none">ASTRA</span>
            <span className="font-rajdhani text-[9px] text-accent-orange tracking-[0.2em] font-black uppercase mt-1">BMSIT&M BENGALURU</span>
          </div>
        </Link>

        {/* Center: Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.path);
              }}
              className={`font-rajdhani text-[11px] xl:text-[12px] tracking-[0.1em] transition-all font-black relative px-3 py-1.5 rounded-full ${
                activeSection === link.id 
                  ? 'text-accent-orange bg-accent-orange/10' 
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Action Buttons */}
        <div className="hidden xl:flex items-center space-x-3 shrink-0">
          <a
            href="/brochure.pdf"
            download="brochure.pdf"
            className="px-4 py-2 border border-accent-orange/40 text-accent-orange font-orbitron text-[10px] font-black tracking-widest hover:bg-accent-orange/10 transition-all rounded-full"
          >
            BROCHURE
          </a>
          <button
            onClick={() => handleLinkClick('/#register')}
            className="px-4 py-2 bg-accent-orange text-bg-base font-orbitron text-[10px] font-black tracking-widest hover:scale-105 transition-all rounded-full shadow-[0_0_15px_rgba(255,107,0,0.15)]"
          >
            REGISTER
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-accent-orange text-2xl p-2 h-10 w-10 flex items-center justify-center border border-accent-orange/20 rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 lg:hidden bg-bg-base/98 backdrop-blur-3xl flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col items-center space-y-6 text-center w-full max-w-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.path);
                  }}
                  className={`font-orbitron text-xl font-bold tracking-widest transition-colors w-full py-2 rounded-xl ${
                    activeSection === link.id 
                      ? 'text-accent-orange bg-accent-orange/5' 
                      : 'text-text-primary hover:text-accent-orange'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex flex-col space-y-4 pt-6 w-full">
                <a
                  href="/brochure.pdf"
                  download="brochure.pdf"
                  className="w-full py-4 border border-accent-orange/40 text-accent-orange font-orbitron text-sm font-black text-center rounded-xl"
                >
                  BROCHURE
                </a>
                <button
                  onClick={() => handleLinkClick('/#register')}
                  className="w-full py-4 bg-accent-orange text-bg-base font-orbitron text-sm font-black rounded-xl"
                >
                  REGISTER NOW
                </button>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-10 z-[-1]">
              <div className="hex-grid-overlay opacity-20" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
