import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { HiClipboardCheck, HiUserGroup, HiDocumentText, HiVideoCamera, HiShieldCheck, HiLockClosed } from 'react-icons/hi';
import { GiMedal, GiCrosshair } from 'react-icons/gi';

/**
 * Register Page
 * Tactical registration portal for ASTRA Defence Tech Expo 2026.
 * Features pre-registration checklist and visitor registration protocols.
 */
const Register = () => {
  const lockControls = useAnimation();

  const handleLockedClick = async () => {
    // Shake the lock icon
    await lockControls.start({
      x: [0, -8, 8, -6, 6, -4, 4, 0],
      transition: { duration: 0.5, ease: 'easeInOut' }
    });
  };
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

      <div className="flex flex-col gap-12 max-w-4xl mx-auto relative z-10">

        {/* Card 1: Panel Discussion */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <div className="bg-bg-surface border border-accent-orange/30 p-8 md:p-12 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <GiMedal className="text-[12rem] -rotate-12" />
            </div>
            <div className="relative z-10">
              <div className="inline-block px-4 py-1 bg-accent-orange/10 border-l-2 border-accent-orange mb-6">
                <span className="font-rajdhani text-accent-orange text-[10px] uppercase font-black tracking-[0.4em]">Open to All</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-orbitron text-text-primary mb-4 uppercase italic">
                Panel <span className="text-accent-orange">Discussion</span>
              </h2>
              <p className="text-text-muted font-inter text-base leading-relaxed mb-10">
                Register to attend the Panel Discussion at ASTRA Defence Tech Expo 2026. Engage with industry experts, defence professionals, and innovators in an open forum.
              </p>
              <a
                href="https://forms.gle/cCmDeJFwj4Jp93C17"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-accent-orange text-bg-base font-orbitron font-black text-center block tracking-tactical hover:bg-accent-amber transition-all shadow-[0_0_30px_rgba(255,107,0,0.2)] uppercase italic text-lg"
              >
                Register for Panel Discussion
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Visitor / Luma */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <div className="bg-bg-elevated border border-custom-border p-8 md:p-12 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <GiCrosshair className="text-[12rem] rotate-12" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-block px-4 py-1 bg-accent-orange/10 border-l-2 border-accent-orange mb-6">
                <span className="font-rajdhani text-accent-orange text-[10px] uppercase font-black tracking-[0.4em]">Tactical Advisory</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-orbitron text-text-primary mb-4 uppercase italic">
                Visitor <span className="text-accent-orange">Registry</span>
              </h2>
              <div className="space-y-4 text-text-muted font-inter text-base leading-relaxed font-medium mb-10">
                <p>
                  If you are not participating with a project but would like to explore the expo, interact with innovators, attend sessions, and experience the event in person, you can register as a visitor.
                </p>
                <p>
                  Visitor access is intended for attendees who want to witness the showcase, explore defence and technology projects, and be part of the event experience at <span className="text-text-primary">BMS Institute of Technology and Management, Bengaluru.</span>
                </p>
              </div>
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
        </motion.div>

        {/* Card 3: Unstop — Registration Closed / Locked */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <div
            className="bg-bg-surface border border-custom-border/40 p-8 md:p-12 relative overflow-hidden flex flex-col cursor-not-allowed"
            style={{ filter: 'grayscale(0.6)' }}
            onClick={handleLockedClick}
          >
            {/* Frosted overlay */}
            <div className="absolute inset-0 bg-bg-base/50 backdrop-blur-[2px] z-10 pointer-events-none" />

            {/* Lock icon centred */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none gap-3">
              <motion.div animate={lockControls}>
                <HiLockClosed className="text-6xl text-text-muted/60" />
              </motion.div>
              <span className="font-orbitron font-black text-base md:text-lg text-text-muted/70 uppercase tracking-[0.3em]">
                Registration Closed
              </span>
            </div>

            {/* Faded content behind */}
            <div className="relative z-0 opacity-40 select-none pointer-events-none">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <GiMedal className="text-[12rem] -rotate-12" />
              </div>

              <h2 className="text-2xl md:text-3xl font-orbitron text-text-muted mb-10 border-b border-custom-border/40 pb-6 uppercase italic">
                Participant Briefing
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-2 h-2 bg-text-muted rotate-45" />
                  <h3 className="font-rajdhani text-text-muted uppercase tracking-[0.2em] text-lg font-bold">
                    Pre-Registration Checklist
                  </h3>
                </div>
                <div className="space-y-6">
                  {checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-5">
                      <div className="mt-1 p-2 bg-bg-elevated border border-custom-border/40">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-text-muted font-orbitron text-sm uppercase mb-1 tracking-wider">{item.title}</h4>
                        <p className="text-text-muted/60 text-sm leading-relaxed font-inter font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <div className="w-full py-5 bg-text-muted/10 text-text-muted font-orbitron font-black text-center tracking-tactical uppercase italic text-lg">
                  Register on Unstop
                </div>
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
