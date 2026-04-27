import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiSpeakerphone } from 'react-icons/hi';
import { GiTrophy } from 'react-icons/gi';

const PanelNotification = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 1500);
    const hideTimer = setTimeout(() => setVisible(false), 14000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-4 md:right-6 z-[999] max-w-sm w-[calc(100vw-2rem)] md:w-96"
        >
          <div className="relative bg-bg-surface border border-accent-orange/50 shadow-[0_0_40px_rgba(255,107,0,0.2)] overflow-hidden">

            {/* Countdown bar */}
            <motion.div
              className="absolute top-0 left-0 h-[2px] bg-accent-orange"
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 12.5, ease: 'linear', delay: 1.5 }}
            />

            <div className="absolute inset-0 bg-accent-orange/[0.03] pointer-events-none" />

            <div className="p-5 pr-10 space-y-4">

              {/* Results alert */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                  >
                    <GiTrophy className="text-accent-orange text-xl" />
                  </motion.div>
                  <span className="font-orbitron text-[10px] font-black tracking-[0.3em] text-accent-orange uppercase">
                    Results Announced
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
                    className="ml-auto text-[9px] font-rajdhani text-accent-orange uppercase tracking-widest font-black"
                  >
                    ● LIVE
                  </motion.span>
                </div>
                <p className="font-rajdhani text-text-primary text-sm font-semibold leading-snug mb-2">
                  Round 2 results are <span className="text-accent-orange font-black">out now</span>! Check if your team made it — fast!
                </p>
                <a
                  href="#results"
                  onClick={() => setVisible(false)}
                  className="inline-block w-full text-center py-2.5 bg-accent-orange text-bg-base font-orbitron font-black text-[11px] tracking-widest uppercase hover:bg-accent-amber transition-colors"
                >
                  View Results →
                </a>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-custom-border" />
                <span className="text-[9px] font-rajdhani text-text-muted uppercase tracking-widest">Also</span>
                <div className="h-px flex-1 bg-custom-border" />
              </div>

              {/* Panel Discussion alert */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <HiSpeakerphone className="text-accent-orange/80 text-lg" />
                  <span className="font-orbitron text-[10px] font-black tracking-[0.3em] text-accent-orange/80 uppercase">
                    Panel Discussion
                  </span>
                  <span className="ml-auto text-[9px] font-rajdhani text-text-muted uppercase tracking-widest">
                    Seats Limited
                  </span>
                </div>
                <p className="font-rajdhani text-text-muted text-sm font-semibold leading-snug mb-2">
                  Registrations are <span className="text-text-primary font-black">now open</span>. Join fast before seats fill up!
                </p>
                <a
                  href="https://forms.gle/cCmDeJFwj4Jp93C17"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setVisible(false)}
                  className="inline-block w-full text-center py-2 border border-accent-orange/40 text-accent-orange font-orbitron font-black text-[11px] tracking-widest uppercase hover:bg-accent-orange/10 transition-colors"
                >
                  Register Now →
                </a>
              </div>

            </div>

            {/* Close */}
            <button
              onClick={() => setVisible(false)}
              className="absolute top-3 right-3 text-text-muted hover:text-text-primary transition-colors p-1"
              aria-label="Dismiss notification"
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
