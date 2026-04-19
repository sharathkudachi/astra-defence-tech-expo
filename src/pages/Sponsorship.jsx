import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sponsorTiers = [
  {
    tier: "Powered By",
    subtitle: "Official Platform Partner",
    isMain: true,
    sponsors: [
      {
        name: "Unstop",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg",
        link: "https://unstop.com",
        description: "Official Platform Partner for Astra Defence Tech Expo 2026."
      }
    ]
  },
  {
    tier: "Co-Powered By",
    slots: 2,
    sponsors: []
  },
  {
    tier: "Associate Sponsors",
    slots: 3,
    sponsors: []
  },
  {
    tier: "Silver Sponsors",
    slots: 4,
    sponsors: []
  },
  {
    tier: "Technology Partner",
    slots: 1,
    sponsors: []
  },
  {
    tier: "Community Partners",
    slots: 4,
    sponsors: []
  }
];

const PlaceholderCard = ({ tier }) => (
  <div className="border-2 border-dashed border-custom-border bg-bg-surface/50 p-8 flex flex-col items-center justify-center min-h-[180px] group transition-all duration-300">
    <div className="w-12 h-12 border border-dashed border-custom-border rounded-full flex items-center justify-center mb-4 group-hover:border-accent-orange/50 transition-colors">
      <span className="text-2xl text-text-muted/30 group-hover:text-accent-orange/50">+</span>
    </div>
    <p className="font-orbitron text-[10px] uppercase tracking-[0.2em] text-text-muted/40 mb-1">Coming Soon</p>
    <p className="font-rajdhani text-xs text-text-muted/30">Logo</p>
  </div>
);

const SponsorCard = ({ sponsor, isMain = false }) => (
  <motion.a
    href={sponsor.link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, scale: 1.02 }}
    className={`relative flex flex-col items-center justify-center p-8 bg-bg-surface border border-custom-border transition-all duration-300 hover:border-accent-orange/30 group ${isMain ? 'backdrop-blur-sm' : ''}`}
  >
    <div className={`relative z-10 w-full flex flex-col items-center justify-center ${!isMain ? 'grayscale hover:grayscale-0' : ''} transition-all duration-500`}>
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className={`${isMain ? 'h-24 md:h-32' : 'h-16'} w-auto object-contain mb-4`}
      />
      {isMain && (
        <h3 className="font-orbitron text-xl text-bg-base mt-4 tracking-widest">{sponsor.name}</h3>
      )}
    </div>
    {!isMain && (
      <div className="absolute inset-0 bg-accent-orange/0 group-hover:bg-accent-orange/[0.02] transition-colors pointer-events-none" />
    )}
  </motion.a>
);

const Sponsorship = () => {
  const mainTier = sponsorTiers.find(t => t.isMain);
  const otherTiers = sponsorTiers.filter(t => !t.isMain);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pb-20"
    >
      {/* Header */}
      <div className="container mx-auto px-6 pt-16 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="label-badge text-accent-orange mb-4 block">Event Partnerships</span>
          <h1 className="text-4xl md:text-6xl font-orbitron mb-6 tracking-widest">SPONSORS & PARTNERS</h1>
          <p className="text-text-muted font-rajdhani text-lg md:text-xl tracking-wide max-w-2xl mx-auto">
            Proudly supported by our partners and collaborators
          </p>
          <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-accent-orange to-transparent mx-auto mt-8 opacity-50" />
        </motion.div>
      </div>

      {/* Powered By Section - Light Theme */}
      {mainTier && (
        <section className="bg-white py-16 mb-20 relative overflow-hidden">
          {/* Subtle background pattern for the light section */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="font-orbitron text-bg-base text-xl md:text-2xl mb-8 tracking-[0.3em] uppercase opacity-80">
              {mainTier.tier}
            </h2>
            
            <div className="max-w-3xl mx-auto">
              {mainTier.sponsors.map((sponsor, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <a 
                    href={sponsor.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform duration-500 block mb-6"
                  >
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="h-20 md:h-28 w-auto object-contain drop-shadow-lg"
                    />
                  </a>
                  <p className="font-rajdhani text-bg-base/50 text-base md:text-lg uppercase tracking-[0.2em] font-medium">
                    {mainTier.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Tiers */}
      <div className="container mx-auto px-6">
        <div className="space-y-24">
          {otherTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-[1px] w-12 bg-custom-border" />
                <h2 className="font-orbitron text-xl md:text-2xl tracking-[0.2em]">{tier.tier}</h2>
                <div className="h-[1px] w-12 bg-custom-border" />
              </div>

              <div className={`grid gap-6 max-w-6xl mx-auto ${
                tier.slots === 1 ? 'grid-cols-1 max-w-md' : 
                tier.slots === 2 ? 'grid-cols-1 md:grid-cols-2' : 
                tier.slots === 3 ? 'grid-cols-1 md:grid-cols-3' : 
                'grid-cols-2 md:grid-cols-4'
              }`}>
                {/* Existing Sponsors */}
                {tier.sponsors.map((sponsor, sIdx) => (
                  <SponsorCard key={sIdx} sponsor={sponsor} />
                ))}
                
                {/* Placeholder Slots */}
                {Array.from({ length: Math.max(0, tier.slots - tier.sponsors.length) }).map((_, pIdx) => (
                  <PlaceholderCard key={`p-${pIdx}`} tier={tier.tier} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 border border-custom-border bg-bg-surface/30 text-center max-w-4xl mx-auto"
        >
          <h3 className="font-orbitron text-xl mb-6 tracking-widest">BECOME A PARTNER</h3>
          <p className="text-text-muted font-rajdhani text-lg mb-8 max-w-2xl mx-auto">
            Join the elite circle of technology leaders and innovators driving the future of defence technology.
          </p>
          <Link
            to="/contact#partner-contact"
            className="inline-block px-10 py-4 bg-accent-orange text-bg-base font-orbitron text-sm tracking-widest hover:bg-white transition-all duration-300"
          >
            GET IN TOUCH
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sponsorship;
