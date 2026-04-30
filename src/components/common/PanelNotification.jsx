import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { GiLaurelCrown } from 'react-icons/gi';

const PanelNotification = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 1200);
    const hideTimer = setTimeout(() => setVisible(false), 16000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleView = () => {
    setVisible(false);
    // scroll to the top-10 banner inside the results section
    setTimeout(() => {
      const el = document.getElementById('top10');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // fallback — scroll to results section
        const results = document.getElementById('results');
        if (results) results.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-4 md:right-6 z-[999] w-[calc(100vw-2rem)] md:w-96"
        >
          <div className="relative bg-bg-surface border border-yellow-400/50 shadow-[0_0_40px_rgba(250,204,21,0.15)] overflow-hidden">

            {/* Countdown bar */}
            <motion.div
              className="absolute top-0 left-0 h-[2px] bg-yellow-400"
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 14.8, ease: 'linear', delay: 1.2 }}
            />

            <div className="absolute inset-0 bg-yellow-400/[0.02] pointer-events-none" />

            <div className="p-5 pr-10">
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', repeatDelay: 2 }}
                >
                  <GiLaurelCrown className="text-yellow-400 text-xl" />
                </motion.div>
                <span className="font-orbitron text-[10px] font-black tracking-[0.3em] text-yellow-400 uppercase">
                  Results Out
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                  className="ml-auto text-[9px] font-rajdhani text-yellow-400 uppercase tracking-widest font-black"
                >
                  ● LIVE
                </motion.span>
              </div>

              {/* Message */}
              <p className="font-rajdhani text-text-primary text-base font-semibold leading-snug mb-1">
                The <span className="text-yellow-400 font-black">Top 10 Teams</span> of ASTRA Defence Tech Expo 2026 are out!
              </p>
              <p className="font-rajdhani text-text-muted text-sm mb-4">
                Check if your team made it to the final rankings.
              </p>

              {/* CTA */}
              <button
                onClick={handleView}
                className="w-full py-2.5 bg-yellow-400 text-bg-base font-orbitron font-black text-[11px] tracking-widest uppercase hover:bg-yellow-300 transition-colors"
              >
                View Top 10 →
              </button>
            </div>

            {/* Close */}
            <button
              onClick={() => setVisible(false)}
              className="absolute top-3 right-3 text-text-muted hover:text-text-primary transition-colors p-1"
              aria-label="Dismiss"
            >
              <HiX className="text-lg" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PanelNotification;
