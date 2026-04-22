import React from 'react';
import { motion } from 'framer-motion';

const SponsorsSection = () => {
  return (
    <section className="py-24 bg-bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="label-badge text-brand-devfolio mb-4 block">Event Partnerships</span>
          <h2 className="text-4xl md:text-5xl font-orbitron tracking-tactical">OUR SPONSORS</h2>
          <div className="w-24 h-1 bg-brand-devfolio mx-auto mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Sponsor Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative p-12 bg-bg-elevated border border-brand-devfolio/20 group transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-devfolio" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-devfolio" />
            
            <div className="flex flex-col items-center">
              <span className="font-rajdhani text-xs tracking-badge text-brand-devfolio uppercase mb-8">
                Official systems partner
              </span>
              
              <a 
                href="https://devfolio.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mb-8 hover:scale-105 transition-transform relative group"
              >
                <div className="absolute -inset-4 bg-white/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src="https://raw.githubusercontent.com/devfolioco/brand-assets/main/Logo%20%2B%20Text%20-%20White/Devfolio%20-%20White.png" 
                  alt="Devfolio" 
                  className="h-24 md:h-40 w-auto object-contain relative z-10"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(55, 112, 255, 0.3))' }}
                />
              </a>
              
              <p className="text-text-muted max-w-lg mx-auto font-rajdhani text-lg leading-relaxed">
                Devfolio is India's largest and fastest-growing community of builders. We're proud to have them as our official partner for the Astra Defence Tech Expo 2026.
              </p>
            </div>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000">
            {/* Placeholders for future sponsors if needed, or just leave as is */}
            <div className="p-8 border border-custom-border border-dashed flex items-center justify-center">
              <span className="font-orbitron text-sm tracking-widest text-text-muted/50">Partnership Spot Available</span>
            </div>
            <div className="p-8 border border-custom-border border-dashed flex items-center justify-center">
              <span className="font-orbitron text-sm tracking-widest text-text-muted/50">Partnership Spot Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-devfolio/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-devfolio/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

export default SponsorsSection;
