import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/common/CountdownTimer';
import { 
  GiRobotLeg, 
  GiArtificialIntelligence, 
  GiLockSpy, 
  GiCctvCamera, 
  GiProcessor, 
  GiRadarSweep, 
  GiDeliveryDrone 
} from 'react-icons/gi';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const domains = [
    { id: 2, title: "Robotics & Autonomous Systems in Defence Technology", icon: <GiRobotLeg />, desc: "Ground-based robotics and automation." },
    { id: 3, title: "AI & Machine Learning in Defence Technology", icon: <GiArtificialIntelligence />, desc: "Intelligence systems for tactical decision making." },
    { id: 4, title: "Cybersecurity & Ethical Hacking in Defence Technology", icon: <GiLockSpy />, desc: "Securing national digital infrastructure." },
    { id: 5, title: "IoT & Smart Surveillance in Defence Technology", icon: <GiCctvCamera />, desc: "Connected sensors for perimeter monitoring." },
    { id: 6, title: "Embedded Systems in Defence Technology", icon: <GiProcessor />, desc: "Specialized computing modules for defence." },
    { id: 7, title: "Communication Technologies in Defence Technology", icon: <GiRadarSweep />, desc: "Secure and resilient field communications." },
    { id: 8, title: "UAVs & Drones in Defence Technology", icon: <GiDeliveryDrone />, desc: "Aerial surveillance and payload delivery." }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="w-full"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div variants={itemVariants} className="mb-4">
          <span className="font-rajdhani text-accent-amber tracking-[0.2em] uppercase text-sm font-semibold">
            ASTRA CLUB · BMSIT&M BENGALURU
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-text-primary tracking-tactical mb-2 leading-none"
        >
          DEFENCE TECHNOLOGY
        </motion.h1>

        <motion.h2 
          variants={itemVariants} 
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-accent-orange mb-4 tracking-tighter"
        >
          EXPO 2026
        </motion.h2>

        <motion.div variants={itemVariants} className="mb-10">
          <span className="text-2xl md:text-3xl font-orbitron text-accent-amber tracking-widest">30 APR 2026 · BMSIT&M, Bengaluru</span>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <CountdownTimer />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link 
            to="/register" 
            className="px-10 py-4 border border-accent-orange text-accent-orange font-orbitron font-bold tracking-tactical uppercase hover:bg-accent-orange hover:text-bg-base transition-all"
          >
            Register now
          </Link>
          <a
            href="/ASTRA DEFNCE TECH EXPO'26 BROCHURE (1).pdf"
            download="ASTRA DEFNCE TECH EXPO'26 BROCHURE (1).pdf"
            className="px-10 py-4 border border-accent-orange text-accent-orange font-orbitron font-bold tracking-tactical uppercase hover:bg-accent-orange hover:text-bg-base transition-all"
          >
            Download Brochure
          </a>
          <Link 
            to="/event" 
            className="px-10 py-4 border border-accent-orange text-accent-orange font-orbitron font-bold tracking-tactical uppercase hover:bg-accent-orange hover:text-bg-base transition-all"
          >
            Explore the Expo
          </Link>
        </motion.div>

      </section>

      {/* Prize Pool Bar */}
      <section className="bg-bg-surface border-y border-custom-border/50 py-12">
        <div className="container mx-auto px-6 flex items-center justify-center">
          <div className="text-center">
            <span className="text-5xl md:text-7xl font-orbitron text-accent-orange font-black tracking-tighter">₹50,000+</span>
            <span className="block text-sm uppercase tracking-[0.3em] text-text-muted font-rajdhani mt-3">Total Prize Pool</span>
          </div>
        </div>
      </section>

      {/* Domain Preview */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
          <div>
            <span className="label-badge text-accent-orange">Strategy</span>
            <h2 className="text-4xl font-orbitron mt-2">COMPETITION DOMAINS</h2>
          </div>
          <Link to="/event" className="flex items-center text-accent-orange font-rajdhani uppercase tracking-badge group">
            View All Domains <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <motion.div
              key={domain.id}
              whileHover={{ y: -5, borderColor: 'var(--accent-orange)' }}
              className="bg-bg-surface border border-custom-border p-8 group transition-all duration-300"
            >
              <div className="text-4xl text-accent-orange mb-6 group-hover:scale-110 transition-transform">
                {domain.icon}
              </div>
              <h3 className="text-xl font-rajdhani uppercase tracking-badge mb-3 text-text-primary">
                {domain.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {domain.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chief Guests - Coming Soon */}
      <section className="bg-bg-elevated py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="label-badge text-accent-amber mb-4 block">Official Delegates</span>
            <h2 className="text-4xl font-orbitron">CHIEF GUESTS & SPEAKERS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Chief Guest - Revealed */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative border border-accent-orange/40 bg-bg-surface overflow-hidden group h-full"
              style={{ boxShadow: '0 0 20px rgba(255,107,0,0.08)' }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.05)_0%,transparent_70%)] animate-pulse pointer-events-none" />
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent-orange" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent-orange" />
              <div className="flex flex-col h-full">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src="/guest1.1.jpeg" 
                    alt="Brigadier B. M. Cariappa" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 via-bg-base/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="label-badge text-accent-orange text-[10px] mb-2 block">Chief Guest Confirmed</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-orbitron text-text-primary text-base tracking-widest leading-tight mb-2">
                    Brigadier B. M. Cariappa, <br/> VrC, SM (Retd.)
                  </h3>
                  <p className="text-accent-amber text-[10px] font-rajdhani uppercase tracking-badge">
                    Kargil War Veteran · Vir Chakra Awardee
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Guest Speaker - Still Classified */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative border border-accent-orange/40 bg-bg-surface overflow-hidden group h-full"
              style={{ boxShadow: '0 0 20px rgba(255,107,0,0.08)' }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.05)_0%,transparent_70%)] animate-pulse pointer-events-none" />
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent-orange" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent-orange" />
              <div className="aspect-[4/5] flex flex-col items-center justify-center p-10 text-center">
                <div className="w-24 h-24 rounded-full border-2 border-accent-orange/50 flex items-center justify-center mb-6 relative">
                  <span className="absolute inset-0 rounded-full border border-accent-orange/30 animate-ping" />
                  <span className="text-5xl font-orbitron text-accent-orange/60">?</span>
                </div>
                <span className="label-badge text-accent-orange/80 text-[10px] mb-3 block">Guest Speaker</span>
                <p className="font-orbitron text-accent-orange tracking-widest text-sm animate-pulse">Revealing Soon...</p>
                <p className="text-text-muted text-xs font-rajdhani uppercase tracking-badge mt-2">Identity Classified</p>
              </div>
            </motion.div>
          </div>
          <div className="text-center mt-10">
            <Link to="/guests" className="flex items-center justify-center text-accent-orange font-rajdhani uppercase tracking-badge group">
              View Details <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
