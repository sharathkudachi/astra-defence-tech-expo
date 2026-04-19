import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slideshowImages = [
  { url: '/guest1.1.jpeg', caption: 'Brigadier B. M. Cariappa (Retd.) · Vir Chakra Awardee' },
  { url: '/guest1.2.jpeg', caption: 'After Leading the Capture of Enemy Post Point 5203 · Kargil War' },
  { url: '/guest1.3.jpeg', caption: 'National Security Guard (NSG) · Counter-Terror Operations' },
  { url: '/guest1.4.jpeg', caption: 'Capture of Point 5203 · Kargil War' },
  { url: '/guest1.5.jpeg', caption: 'Public Address & Leadership Engagements' }
];

const GuestSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img
            src={slideshowImages[index].url}
            alt={slideshowImages[index].caption}
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/20 to-transparent" />

          {/* Caption Overlay */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute bottom-6 left-6 right-6 text-left border-l-2 border-accent-orange pl-4"
          >
            <p className="font-rajdhani text-accent-orange text-[10px] uppercase tracking-[0.2em] mb-1">Confidential Archive</p>
            <p className="font-orbitron text-text-primary text-xs tracking-widest leading-relaxed">{slideshowImages[index].caption}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute top-6 right-6 flex space-x-2">
        {slideshowImages.map((_, i) => (
          <div
            key={i}
            className={`h-[2px] w-4 transition-all duration-500 ${i === index ? 'bg-accent-orange' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

const GuestCard = ({ label, revealed = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`relative border border-accent-orange/40 bg-bg-surface overflow-hidden group ${revealed ? 'md:col-span-2' : ''}`}
    style={{ boxShadow: '0 0 30px rgba(255,107,0,0.07)' }}
  >
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-orange z-20" />
    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-orange z-20" />
    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-orange z-20" />
    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-orange z-20" />

    {/* Radial glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.06)_0%,transparent_70%)] animate-pulse pointer-events-none z-10" />

    <div className="flex flex-col relative z-10 w-full h-full">
      {revealed ? (
        <div className="flex flex-col lg:flex-row lg:items-stretch w-full h-full">
          <div className="w-full lg:w-1/2 flex items-stretch">
            <div className="relative w-full aspect-[3/4] lg:aspect-auto">
              <GuestSlideshow />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:pt-12 bg-bg-surface flex flex-col justify-start">
            <div className="mb-8">
              <span className="label-badge text-accent-orange text-[10px] mb-4 inline-block">Chief Guest 1</span>
              <h2 className="font-orbitron text-text-primary text-2xl md:text-3xl tracking-widest mb-3 leading-tight uppercase">
                Brigadier B. M. Cariappa, <br /> VrC, SM (Retd.)
              </h2>
              <p className="text-accent-orange font-rajdhani text-sm uppercase tracking-[.2em] mb-6">
                Kargil War Veteran · Vir Chakra Awardee
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 border border-accent-orange/30 text-accent-orange font-rajdhani text-[10px] uppercase tracking-widest">Kargil Veteran</span>
                <span className="px-3 py-1 border border-accent-orange/30 text-accent-orange font-rajdhani text-[10px] uppercase tracking-widest">Vir Chakra</span>
                <span className="px-3 py-1 border border-accent-orange/30 text-accent-orange font-rajdhani text-[10px] uppercase tracking-widest">Strategic Command</span>
              </div>
            </div>

            <div className="space-y-4 text-text-muted font-inter text-sm leading-relaxed border-t border-custom-border pt-8 mt-auto lg:mt-0">
              <p>
                Brigadier B. M. Cariappa is a highly decorated officer of the Indian Army with over three decades of distinguished service. Commissioned into the Parachute Regiment in 1993, he has led troops in some of the most challenging operational environments, including the Siachen Glacier, Kargil, and counter-terror operations.
              </p>
              <p>
                A recipient of the Vir Chakra for gallantry during the Kargil War, he most recently served as the Force Commander of the National Security Guard (NSG), India’s premier counter-terrorism unit, leading the elite Black Cat Commandos in high-risk, no-fail operations.
              </p>
              <p className="hidden md:block">
                His global exposure, combined with extensive experience alongside international Special Forces units, provides him with a unique perspective on leadership, resilience, and decision-making under extreme conditions.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-24 px-10 text-center flex flex-col items-center min-h-[400px] justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center mb-8">
            <span className="absolute inset-0 rounded-full border border-accent-orange/20 animate-ping" style={{ animationDuration: '2s' }} />
            <span className="absolute inset-2 rounded-full border border-accent-orange/30 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
            <div className="w-24 h-24 rounded-full border-2 border-accent-orange/60 bg-bg-elevated flex items-center justify-center backdrop-blur-sm">
              <span className="text-5xl font-orbitron text-accent-orange">?</span>
            </div>
          </div>
          <span className="label-badge text-accent-orange text-xs mb-3 block">{label}</span>
          <p className="font-orbitron text-lg text-text-primary tracking-widest mb-2 animate-pulse uppercase">Revealing Soon</p>
          <p className="text-text-muted text-xs font-rajdhani uppercase tracking-[0.2em]">Identity Classified</p>
        </div>
      )}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
        <GuestCard label="Chief Guest" revealed={true} />
        <GuestCard label="Guest Speaker" />
      </div>

      <div className="mt-20 text-center">
        <p className="text-text-muted text-xs uppercase tracking-[0.2em]">
          Guest Speaker details will be revealed closer to the event date.
        </p>
      </div>
    </motion.div>
  );
};

export default Guests;
