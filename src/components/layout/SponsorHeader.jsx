import React from 'react';
import { motion } from 'framer-motion';

const SponsorHeader = () => {
  return (
    <div className="bg-brand-devfolio/10 border-b border-brand-devfolio/30 py-2 relative z-[60]">
      <div className="container mx-auto px-6 flex items-center justify-center space-x-4">
        <span className="font-rajdhani text-[10px] md:text-xs tracking-[0.2em] text-brand-devfolio uppercase font-bold">
          Official Systems Partner
        </span>
        <div className="h-4 w-[1px] bg-brand-devfolio/30 mx-2" />
        <a 
          href="https://devfolio.co" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group"
        >
          <img 
            src="https://raw.githubusercontent.com/devfolioco/brand-assets/main/Logo%20%2B%20Text%20-%20Colored/Devfolio%20-%20Normal.svg" 
            alt="Devfolio Logo" 
            className="h-6 md:h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105"
          />
        </a>
      </div>
      {/* Tactical scanline effect for the banner */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,var(--color-brand-devfolio)_1px,var(--color-brand-devfolio)_2px)] bg-[length:100%_2px]" />
      </div>
    </div>
  );
};

export default SponsorHeader;
