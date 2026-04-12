import React from 'react';
import { Link } from 'react-router-dom';
import { HiMail, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="relative bg-bg-surface pt-16 pb-8 border-t border-accent-orange/30">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Col 1: Branding */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/astra-logo.png" alt="Astra Logo" className="h-12 w-auto object-contain" />
            <div>
              <span className="font-orbitron font-bold text-2xl tracking-tactical text-text-primary block">ASTRA</span>
              <span className="label-badge text-accent-orange text-[10px]">Innovation for National Security</span>
            </div>
          </Link>
          <p className="text-text-muted text-sm leading-relaxed max-w-xs font-inter">
            BMS Institute of Technology and Management's premier club for tactical readiness and awareness. Empowering students through defence innovation.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-text-primary uppercase tracking-badge text-sm mb-6 border-l-2 border-accent-orange pl-3">Quick Access</h4>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li><Link to="/" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">Home</Link></li>
              <li><Link to="/about" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">About</Link></li>
              <li><Link to="/event" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">Event</Link></li>
              <li><Link to="/schedule" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">Schedule</Link></li>
            </ul>
            <ul className="space-y-3">
              <li><Link to="/guests" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">Chief Guests</Link></li>
              <li><Link to="/contact" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">Contact</Link></li>
              <li><Link to="/register" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">Register</Link></li>
            </ul>
          </div>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h4 className="text-text-primary uppercase tracking-badge text-sm mb-6 border-l-2 border-accent-orange pl-3">CONTACT</h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 group">
              <HiMail className="text-accent-orange text-xl mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <span className="block text-xs uppercase tracking-badge text-text-muted mb-1">Email</span>
                <a href="mailto:astra@bmsit.in" className="text-text-primary hover:text-accent-orange transition-colors text-sm font-inter">astra@bmsit.in</a>
              </div>
            </div>
            <div className="flex items-start space-x-3 group">
              <HiLocationMarker className="text-accent-orange text-xl mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <span className="block text-xs uppercase tracking-badge text-text-muted mb-1">EVENT LOCATION</span>
                <p className="text-text-primary text-sm font-inter">
                  BMSIT&M, Yelahanka, Bengaluru – 560064, Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-custom-border/50 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center md:text-left">
        <p className="text-text-muted text-[10px] tracking-badge uppercase">
          &copy; 2026 ASTRA Club, BMSIT&M. Compiled for National Security Awareness.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="label-badge text-[10px] text-text-muted hover:text-accent-orange transition-colors">Privacy Protocol</a>
          <a href="#" className="label-badge text-[10px] text-text-muted hover:text-accent-orange transition-colors">Terms of Op</a>
        </div>
      </div>

      {/* Sponsor Credit */}
      <div className="mt-8 pt-8 border-t border-custom-border/30 text-center">
        <div className="flex flex-col items-center space-y-4">
          <span className="font-rajdhani text-[10px] tracking-[0.3em] text-text-muted uppercase">Official Systems Partner</span>
          <a href="https://devfolio.co" target="_blank" rel="noopener noreferrer" className="group transition-all duration-300 transform hover:scale-105">
            <img 
              src="/sponsor1.png" 
              alt="Devfolio" 
              className="h-8 md:h-10 w-auto object-contain"
              style={{ filter: 'drop-shadow(0 0 8px rgba(55, 112, 255, 0.2))' }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
