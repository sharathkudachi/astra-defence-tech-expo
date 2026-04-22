import React from 'react';
import { motion } from 'framer-motion';
import { GiTrophy, GiLaurels, GiMedal, GiSiren } from 'react-icons/gi';

const Prizes = () => {
  const prizeCards = [
    {
      rank: "2nd",
      title: "Silver Excellence",
      amount: "₹15,000",
      description: "Awarded to the team showcasing exceptional innovation and technical feasibility.",
      icon: <GiMedal className="text-6xl text-accent-amber/80" />,
      style: "border-custom-border bg-bg-surface order-2 lg:order-1",
      rankStyle: "text-accent-amber/20"
    },
    {
      rank: "1st",
      title: "Gold Vanguard",
      amount: "₹25,000",
      description: "The grand champion award for the most revolutionary defence technology solution.",
      icon: <GiTrophy className="text-8xl text-accent-orange" />,
      style: "border-accent-orange bg-bg-elevated order-1 lg:order-2 lg:scale-105 lg:z-10 shadow-[0_0_40px_rgba(255,107,0,0.15)]",
      isGrand: true,
      rankStyle: "text-accent-orange/20"
    },
    {
      rank: "3rd",
      title: "Bronze Honor",
      amount: "₹10,000",
      description: "Recognizing outstanding prototype development and presentation skills.",
      icon: <GiLaurels className="text-6xl text-accent-amber/60" />,
      style: "border-custom-border bg-bg-surface order-3 lg:order-3",
      rankStyle: "text-accent-amber/10"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
      id="prizes"
    >
      {/* Header Section */}
      <div className="text-center mb-24">
        <span className="label-badge text-accent-orange mb-4 block">Deployment Rewards</span>
        <h1 className="text-4xl md:text-6xl font-orbitron mb-12 tracking-tighter">AWARDS & RECOGNITION</h1>
        
        <div className="bg-bg-elevated border border-accent-orange/30 inline-flex flex-col md:flex-row items-center p-2 rounded-sm">
            <div className="px-10 py-4 bg-accent-orange text-bg-base font-orbitron text-2xl font-black tracking-widest">
              ₹50,000
            </div>
            <div className="px-10 py-4 font-rajdhani text-xl text-text-primary tracking-[0.2em] uppercase font-bold">
              TOTAL PRIZE POOL
            </div>
        </div>
      </div>

      {/* Prize Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-32 px-4">
        {prizeCards.map((prize, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className={`relative p-8 md:p-12 border-2 text-center flex flex-col items-center justify-between transition-all duration-500 rounded-sm ${prize.style}`}
          >
            {/* Background HUD Marker */}
            <div className={`absolute top-6 right-8 font-orbitron text-5xl font-black pointer-events-none select-none ${prize.rankStyle}`}>
              {prize.rank}
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="mb-10 relative mt-4">
                 {prize.icon}
              </div>
              
              <h3 className={`text-xl font-orbitron mb-2 tracking-[0.2em] uppercase font-black ${prize.isGrand ? 'text-accent-orange' : 'text-text-primary'}`}>
                {prize.title}
              </h3>
              
              <div className="flex items-center space-x-2 mb-8">
                <span className="text-accent-orange text-2xl font-orbitron">₹</span>
                <span className="text-4xl md:text-5xl font-orbitron text-text-primary font-black tracking-tight">
                  {prize.amount.replace('₹', '')}
                </span>
              </div>
            </div>
            
            <p className="text-text-muted text-sm leading-relaxed font-inter italic border-t border-custom-border/50 pt-8 mt-auto">
              {prize.description}
            </p>

            {prize.isGrand && (
              <div className="absolute top-0 left-0 w-full h-1.5 bg-accent-orange animate-pulse" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Benchmarks Section */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-bg-surface border border-custom-border p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <GiSiren className="text-[12rem] -rotate-12" />
          </div>
          
          <h2 className="text-2xl font-orbitron mb-10 border-l-4 border-accent-orange pl-6 tracking-widest uppercase">ADDITIONAL BENCHMARKS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-4">
              <div className="flex items-start space-x-5">
                <div className="w-2 h-2 bg-accent-orange mt-2 flex-shrink-0 animate-pulse" />
                <p className="text-text-primary font-rajdhani uppercase tracking-[0.1em] text-sm font-bold leading-relaxed">
                  All participating teams receive a certificate of participation signed by ASTRA and BMSIT Officials.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-5">
                <div className="w-2 h-2 bg-accent-orange mt-2 flex-shrink-0 animate-pulse" />
                <p className="text-text-primary font-rajdhani uppercase tracking-[0.1em] text-sm font-bold leading-relaxed">
                  Shortlisted teams gain direct exposure to DRDO, HAL, BEL, and BDL experts for potential mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
         <p className="text-text-muted text-[10px] label-badge py-2 px-6">
           TERMS OF ENGAGEMENT: PRIZES ARE SUBJECT TO FINAL EVALUATION SCORES BY THE ASTRA COMMAND COMMITTEE.
         </p>
      </div>
    </motion.div>
  );
};

export default Prizes;
