import React from 'react';
import { motion } from 'framer-motion';
import { HiClipboardCheck, HiUserGroup, HiDocumentText, HiVideoCamera, HiShieldCheck } from 'react-icons/hi';
import { GiMedal, GiCrosshair } from 'react-icons/gi';

/**
 * Register Page
 * Tactical registration portal for ASTRA Defence Tech Expo 2026.
 * Features pre-registration checklist and visitor registration protocols.
 */
const Register = () => {
  const checklist = [
    {
      title: "Students Only",
      desc: "Competition is open to students only",
      icon: <HiClipboardCheck className="text-3xl text-accent-orange" />
    },
    {
      title: "Team Size",
      desc: "Maximum 5 members per team (1 leader + 4)",
      icon: <HiUserGroup className="text-3xl text-accent-orange" />
    },
    {
      title: "Single Entry",
      desc: "One submission per team — duplicates will be rejected",
      icon: <HiDocumentText className="text-3xl text-accent-orange" />
    },
    {
      title: "Required Assets",
      desc: "Have your PPT, Video Demo, and Problem Statement ready before registering",
      icon: <HiVideoCamera className="text-3xl text-accent-orange" />
    },
    {
      title: "Data Accuracy",
      desc: "Ensure all team member details are accurate",
      icon: <HiShieldCheck className="text-3xl text-accent-orange" />
    }
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-32 relative"
      id="register"
    >
      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <motion.span 
          variants={itemVariants}
          className="font-rajdhani text-accent-orange/60 tracking-[0.4em] uppercase text-xs mb-4 block font-black font-italic"
        >
          Operation_Deployment_v2.6
        </motion.span>
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-7xl font-orbitron font-black mb-4 tracking-tighter italic"
        >
          MISSION <span className="text-accent-orange">REGISTRATION</span>
        </motion.h1>
        <div className="w-24 h-1 bg-accent-orange mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-7xl mx-auto relative z-10">
        
        {/* Left Column: Participant Registration */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <div className="bg-bg-surface border border-accent-orange/30 p-8 md:p-12 relative overflow-hidden flex-grow flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <GiMedal className="text-[12rem] -rotate-12" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-orbitron text-text-primary mb-10 border-b border-custom-border pb-6 uppercase italic">
                Participant Briefing
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-2 h-2 bg-accent-orange rotate-45" />
                  <h3 className="font-rajdhani text-accent-orange uppercase tracking-[0.2em] text-lg font-bold">
                    Pre-Registration Checklist
                  </h3>
                </div>

                <div className="space-y-6">
                  {checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-5 group">
                      <div className="mt-1 p-2 bg-accent-orange/5 border border-accent-orange/20 group-hover:border-accent-orange/60 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-text-primary font-orbitron text-sm uppercase mb-1 tracking-wider">{item.title}</h4>
                        <p className="text-text-muted text-sm leading-relaxed font-inter font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mt-auto">
                <a 
                  href="https://unstop.com/competitions/astra-defence-tech-expo-2026-project-competition-astra-defence-tech-expo-2026-bms-institute-of-technology-a-1673787" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-accent-orange text-bg-base font-orbitron font-black text-center block tracking-tactical hover:bg-accent-amber transition-all shadow-[0_0_30px_rgba(255,107,0,0.2)] uppercase italic text-lg"
                >
                  Register on Unstop
                </a>
                
                <div className="flex items-center justify-center space-x-4 py-2">
                  <div className="h-[1px] flex-grow bg-custom-border" />
                  <span className="text-text-muted text-[10px] uppercase font-rajdhani font-black tracking-[0.3em]">Backup Protocol</span>
                  <div className="h-[1px] flex-grow bg-custom-border" />
                </div>

                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfrf2HZz1omh_isv12rRtCNDg-oSMuezcYVGwwH3yZdCzcm7g/viewform?usp=send_form" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 border border-accent-orange/40 text-accent-orange font-orbitron font-bold text-center block tracking-tactical hover:bg-accent-orange/10 hover:border-accent-orange transition-all uppercase"
                >
                  Register on Google Form
                </a>
                
                <div className="bg-bg-elevated/50 p-4 border border-custom-border mt-6">
                  <p className="text-[11px] text-text-muted italic text-center font-inter leading-relaxed">
                    <span className="text-accent-orange font-bold uppercase not-italic mr-2">[NOTE]</span>
                    if unstop is not working please register on google form
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visitor Registration */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <div className="bg-bg-elevated border border-custom-border p-8 md:p-12 relative overflow-hidden flex-grow flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <GiCrosshair className="text-[12rem] rotate-12" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-2xl md:text-3xl font-orbitron text-text-primary mb-10 border-b border-custom-border pb-6 uppercase italic">
                Visitor Registry
              </h2>

              <div className="space-y-8 mb-12 flex-grow">
                <div className="inline-block px-4 py-1 bg-accent-orange/10 border-l-2 border-accent-orange mb-6">
                  <span className="font-rajdhani text-accent-orange text-[10px] uppercase font-black tracking-[0.4em]">Tactical Advisory</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-orbitron text-text-primary uppercase mb-6 leading-tight">
                  Join the Expo as an <span className="text-accent-orange">Observer</span>
                </h3>
                
                <div className="space-y-6 text-text-muted font-inter text-base md:text-lg leading-relaxed font-medium">
                  <p>
                    If you are not participating with a project but would like to explore the expo, interact with innovators, attend sessions, and experience the event in person, you can register as a visitor.
                  </p>
                  
                  <p>
                    Visitor access is intended for attendees who want to witness the showcase, explore defence and technology projects, and be part of the event experience at <span className="text-text-primary">BMS Institute of Technology and Management, Bengaluru.</span>
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-custom-border mt-auto">
                <a 
                  href="https://luma.com/yo9famb7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-5 border-2 border-white/10 text-text-primary font-orbitron font-black text-center block tracking-tactical hover:border-accent-orange hover:bg-accent-orange/5 transition-all text-lg uppercase italic"
                >
                  Register as a Visitor
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-px h-64 bg-gradient-to-b from-transparent via-accent-orange/20 to-transparent" />
        <div className="absolute bottom-20 right-10 w-px h-64 bg-gradient-to-t from-transparent via-accent-orange/20 to-transparent" />
      </div>
    </motion.div>
  );
};

export default Register;
