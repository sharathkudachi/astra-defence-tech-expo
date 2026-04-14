import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  {
    tier: "Powered By",
    name: "Unstop",
    description: "Unstop (formerly Dare2Compete) is India's largest platform for competitions, hackathons, and hiring. We're proud to have Unstop power the Astra Defence Tech Expo 2026.",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg",
    link: "https://unstop.com",
    color: "accent-orange",
  },
  {
    tier: "Sponsor Slot 2",
    name: "Coming Soon",
    description: "Partnership spot available. Contact us to become a sponsor.",
    logo: null,
    link: null,
    color: "custom-border",
    placeholder: true,
  },
  {
    tier: "Sponsor Slot 3",
    name: "Coming Soon",
    description: "Partnership spot available. Contact us to become a sponsor.",
    logo: null,
    link: null,
    color: "custom-border",
    placeholder: true,
  },
];

const Sponsorship = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
    >
      <div className="text-center mb-20">
        <span className="label-badge text-accent-orange mb-4 block">Event Partnerships</span>
        <h1 className="text-4xl md:text-5xl font-orbitron mb-6 tracking-widest">OUR SPONSORS</h1>
        <div className="h-1 w-24 bg-accent-orange mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {sponsors.map((sponsor, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className={`relative border ${sponsor.placeholder ? 'border-dashed border-custom-border' : 'border-accent-orange/40'} bg-bg-surface overflow-hidden group`}
          >
            {/* Corner accents for non-placeholder */}
            {!sponsor.placeholder && (
              <>
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent-orange" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent-orange" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.04)_0%,transparent_70%)] pointer-events-none" />
              </>
            )}

            <div className="px-6 py-3 border-b border-custom-border">
              <span className="label-badge text-accent-orange text-xs uppercase tracking-badge">{sponsor.tier}</span>
            </div>

            <div className="flex flex-col items-center justify-center p-10 text-center min-h-[280px]">
              {sponsor.placeholder ? (
                <>
                  <div className="w-16 h-16 border border-dashed border-custom-border flex items-center justify-center mb-6">
                    <span className="text-3xl text-text-muted/30">+</span>
                  </div>
                  <p className="font-orbitron text-sm text-text-muted/40 tracking-widest mb-2">Partnership Spot Available</p>
                  <p className="text-text-muted text-xs font-inter">Contact us at astra@bmsit.in</p>
                </>
              ) : (
                <>
                  <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="mb-6 group-hover:scale-105 transition-transform">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-16 w-auto object-contain"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </a>
                  <h3 className="font-orbitron text-xl text-text-primary mb-3 tracking-widest">{sponsor.name}</h3>
                  <p className="text-text-muted text-sm font-inter leading-relaxed">{sponsor.description}</p>
                  <a
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 px-6 py-2 border border-accent-orange text-accent-orange font-rajdhani text-xs uppercase tracking-badge hover:bg-accent-orange hover:text-bg-base transition-all"
                  >
                    Visit Unstop
                  </a>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-text-muted text-xs font-rajdhani uppercase tracking-[0.2em]">
          Interested in sponsoring? Reach out at astra@bmsit.in
        </p>
      </div>
    </motion.div>
  );
};

export default Sponsorship;
