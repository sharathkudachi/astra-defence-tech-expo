import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate, label, expiredMessage = "THE EXPO IS LIVE!" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft(prev => ({ ...prev, isExpired: true }));
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          isExpired: false
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimerBlock = ({ value, blockLabel }) => (
    <div className="flex flex-col items-center px-4 md:px-6 first:pl-0 last:pr-0">
      <motion.span 
        key={value}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-2xl md:text-4xl font-orbitron text-accent-orange mb-1"
      >
        {value.toString().padStart(2, '0')}
      </motion.span>
      <span className="text-[8px] md:text-[10px] font-rajdhani text-text-muted tracking-widest uppercase">
        {blockLabel}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      {label && (
        <span className="text-[10px] md:text-xs font-orbitron text-accent-amber tracking-[0.3em] uppercase mb-4 opacity-70">
          {label}
        </span>
      )}
      
      {timeLeft.isExpired ? (
        <div className="text-accent-orange font-orbitron text-sm md:text-lg tracking-widest animate-pulse border border-accent-orange/30 px-6 py-2">
          {expiredMessage}
        </div>
      ) : (
        <div className="flex items-center justify-center divide-x divide-custom-border/50 bg-bg-surface/30 p-4 border border-custom-border/30">
          <TimerBlock value={timeLeft.days} blockLabel="Days" />
          <TimerBlock value={timeLeft.hours} blockLabel="Hrs" />
          <TimerBlock value={timeLeft.minutes} blockLabel="Min" />
          <TimerBlock value={timeLeft.seconds} blockLabel="Sec" />
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
