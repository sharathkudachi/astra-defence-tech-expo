import React from 'react';
import { motion } from 'framer-motion';

const GuestCard = ({ label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.5 }}
    className="relative border border-accent-orange/40 bg-bg-surface overflow-hidden"
    style={{ boxShadow: '0 0 30px rgba(255,107,0,0.07)' }}
  >
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-orange" />
    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-orange" />
    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-orange" />
    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-orange" />

    {/* Radial glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.06)_0%,transparent_70%)] animate-pulse pointer-events-none" />

    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: 'linear-gradient(rgba(255,107,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.5) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
    />

    <div className="flex flex-col items-center justify-center py-20 px-10 text-center relative z-10">
      {/* Pulsing ? circle */}
      <div className="relative w-32 h-32 flex items-center justify-center mb-8">
        <span className="absolute inset-0 rounded-full border border-accent-orange/20 animate-ping" style={{ animationDuration: '2s' }} />
        <span className="absolute inset-2 rounded-full border border-accent-orange/30 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
        <div className="w-24 h-24 rounded-full border-2 border-accent-orange/60 bg-bg-elevated flex items-center justify-center backdrop-blur-sm">
          <span className="text-5xl font-orbitron text-accent-orange">?</span>
        </div>
      </div>

      <span className="label-badge text-accent-orange text-xs mb-3 block">{label}</span>
      <p className="font-orbitron text-lg text-text-primary tracking-widest mb-2 animate-pulse">Revealing Soon...</p>
      <p className="text-text-muted text-xs font-rajdhani uppercase tracking-[0.2em]">Identity Classified</p>
    </div>
  </motion.div>
);

const Guests = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
    >
      <div className="text-center mb-20">
        <span className="label-badge text-accent-orange mb-4 block">Official Delegates</span>
        <h1 className="text-4xl md:text-5xl font-orbitron mb-8 tracking-widest leading-tight">CHIEF GUESTS & SPEAKERS</h1>
        <div className="h-1 w-32 bg-accent-orange mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <GuestCard label="Chief Guest" />
        <GuestCard label="Guest Speaker" />
      </div>

      <div className="mt-20 text-center">
        <p className="text-text-muted text-xs uppercase tracking-[0.2em]">
          Guest details will be revealed closer to the event date.
        </p>
      </div>
    </motion.div>
  );
};

export default Guests;
