import React from 'react';
import { motion } from 'framer-motion';

const SponsorHeader = () => {
  return (
    <div className="bg-[#3770FF]/10 border-b border-[#3770FF]/30 py-2 relative z-[60]">
      <div className="container mx-auto px-6 flex items-center justify-center space-x-4">
        <span className="font-rajdhani text-[10px] md:text-xs tracking-[0.2em] text-[#3770FF] uppercase font-bold">
          Official Systems Partner
        </span>
        <div className="h-4 w-[1px] bg-[#3770FF]/30 mx-2" />
        <a 
          href="https://devfolio.co" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group"
        >
          <img 
            src="https://devfolio.co/blog/content/images/2021/04/Devfolio-Logo.png" 
            alt="Devfolio Logo" 
            className="h-4 md:h-5 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 2px rgba(55, 112, 255, 0.5))' }}
          />
        </a>
      </div>
      {/* Tactical scanline effect for the banner */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#3770FF_1px,#3770FF_2px)] bg-[length:100%_2px]" />
      </div>
    </div>
  );
};

export default SponsorHeader;
