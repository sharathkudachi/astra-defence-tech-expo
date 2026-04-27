import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { GiTrophy } from 'react-icons/gi';

const ResultsBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ opacity: 0, y: -48 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -48 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.5 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-accent-orange text-bg-base"
        >
          <div className="flex items-center justify-center gap-3 px-4 pr-12 py-2.5 text-center">
            <motion.div
              animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', repeatDelay: 2 }}
            >
              <GiTrophy className="text-bg-base text-lg shrink-0" />
            </motion.div>
            <p className="font-orbitron font-black text-[11px] md:text-xs tracking-widest uppercase">
              Round 2 Results Announced!
            </p>
            <span className="hidden sm:inline font-rajdhani text-sm font-semibold">
              — Check if your team qualified
            </span>
            <a
              href="#results"
              onClick={() => setDismissed(true)}
              className="ml-2 px-3 py-1 bg-bg-base text-accent-orange font-orbitron font-black text-[10px] tracking-widest uppercase hover:bg-bg-surface transition-colors shrink-0"
            >
              View →
            </a>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
            aria-label="Dismiss"
          >
            <HiX className="text-bg-base text-base" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultsBanner;
