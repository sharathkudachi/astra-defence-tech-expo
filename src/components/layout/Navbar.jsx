import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Event', path: '/event' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Guests', path: '/guests' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-base/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      } border-b border-custom-border/50`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="h-12 w-auto flex items-center justify-center relative overflow-hidden">
            <img src="/astra-logo.png" alt="Astra Logo" className="h-full w-auto object-contain" />
          </div>
          <div>
            <span className="font-orbitron font-bold text-xl tracking-tactical text-text-primary block leading-none">ASTRA</span>
            <span className="font-rajdhani text-[10px] tracking-badge text-accent-orange block uppercase">BMSIT&M BENGALURU</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-rajdhani uppercase tracking-badge text-sm transition-all relative py-1 ${
                isActive(link.path) ? 'text-accent-orange' : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-orange"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <a
            href="/ASTRA DEFENCE TECH EXPO'26 BROCHURE.pdf"
            download="ASTRA DEFENCE TECH EXPO'26 BROCHURE.pdf"
            className="px-6 py-2 border border-accent-orange text-accent-orange font-orbitron text-xs tracking-tactical uppercase hover:bg-accent-orange hover:text-bg-base transition-all duration-300"
          >
            Brochure
          </a>
          <Link
            to="/register"
            className="px-6 py-2 border border-accent-orange text-accent-orange font-orbitron text-xs tracking-tactical uppercase hover:bg-accent-orange hover:text-bg-base transition-all duration-300"
          >
            Register on unstop
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-accent-orange p-2"
          onClick={() => setIsOpen(true)}
        >
          <HiMenuAlt4 className="text-3xl" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-bg-base flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-8 right-8 text-accent-orange"
              onClick={() => setIsOpen(false)}
            >
              <HiX className="text-4xl" />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-orbitron text-2xl tracking-tactical uppercase ${
                    isActive(link.path) ? 'text-accent-orange' : 'text-text-primary hover:text-accent-orange'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 bg-accent-orange text-bg-base font-orbitron text-lg tracking-tactical uppercase animate-glow-pulse"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
