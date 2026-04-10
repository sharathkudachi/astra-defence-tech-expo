import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCheckCircle } from 'react-icons/hi';

const Register = () => {
  const checklist = [
    "Competition is open to students only",
    "Maximum 5 members per team (1 leader + 4)",
    "One submission per team — duplicates will be rejected",
    "Have your PPT, Video Demo, and Problem Statement ready before registering",
    "Ensure all team member details are accurate"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20 min-h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="text-center mb-16 max-w-2xl">
        <span className="label-badge text-accent-orange mb-4 block">Deployment Phase</span>
        <h1 className="text-4xl md:text-5xl font-orbitron mb-6">REGISTER YOUR TEAM</h1>
        <p className="text-text-muted text-lg font-inter leading-relaxed">
          All registrations are handled exclusively via Unstop. Please ensure you have read the tactical briefing below before proceeding to the registration portal.
        </p>
      </div>

      <div className="w-full max-w-3xl bg-bg-surface border border-custom-border p-8 md:p-12 mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-accent-orange" />
        <h2 className="text-2xl font-rajdhani text-text-primary uppercase tracking-badge mb-8 flex items-center">
          <span className="w-8 h-8 bg-accent-orange/10 border border-accent-orange text-accent-orange flex items-center justify-center mr-4 text-sm">01</span>
          Pre-Registration Checklist
        </h2>
        
        <ul className="space-y-6 mb-10">
          {checklist.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-4 group">
              <HiCheckCircle className="text-accent-orange text-2xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-text-primary font-inter text-lg">{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-8 border-t border-custom-border">
          <motion.a
            href="https://unstop.com/o/YOUR_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-accent-orange text-bg-base py-5 px-8 font-orbitron text-xl font-bold tracking-widest uppercase flex items-center justify-center animate-glow-pulse"
          >
            Register Now on Unstop <HiExternalLink className="ml-3 text-2xl" />
          </motion.a>
        </div>
      </div>

      <div className="text-center">
        <div className="inline-block border border-accent-amber/30 bg-accent-amber/5 px-6 py-3">
          <p className="text-accent-amber font-rajdhani text-sm uppercase tracking-[0.2em] font-bold">
            Registration deadline: 10:00 AM · 25 April 2026
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
