import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiShield, GiDeliveryDrone, GiRobotLeg, GiSecurityGate, GiBrain } from 'react-icons/gi';

const About = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const images = ['/bmsit.jpg', '/bmsit1.jpg', '/bmsit2.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex(i => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const focusAreas = [
    { label: "Defence Systems", icon: <GiShield /> },
    { label: "UAVs & Drones", icon: <GiDeliveryDrone /> },
    { label: "Robotics", icon: <GiRobotLeg /> },
    { label: "Cybersecurity", icon: <GiSecurityGate /> },
    { label: "AI in Defence", icon: <GiBrain /> },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
    >
      {/* Section A - BMSIT */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <span className="label-badge text-accent-orange mb-4 block">The Institution</span>
            <h1 className="text-4xl md:text-5xl font-orbitron mb-8">BMS Institute of Technology & Management</h1>
            <p className="text-text-muted text-lg leading-relaxed font-inter mb-6">
              Located in Yelahanka, Bengaluru, BMSIT&M is a premier institution known for academic excellence and innovation. With a legacy of over two decades, we have been at the forefront of engineering education, fostering industry collaboration and research-driven learning.
            </p>
            <p className="text-text-muted text-lg leading-relaxed font-inter">
              Our commitment to excellence has consistently placed us among the top engineering colleges in Karnataka, producing graduates who contribute significantly to national growth and technological advancement.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-4 border border-accent-orange/20 group-hover:border-accent-orange/40 transition-colors pointer-events-none" />
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-orange" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-orange" />
            <div className="bg-bg-surface border border-custom-border aspect-video overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={images[imgIndex]}
                  alt="BMSIT Campus"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </AnimatePresence>
              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === imgIndex ? 'bg-accent-orange w-4' : 'bg-text-muted/50'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section B - ASTRA Club */}
      <section>
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="label-badge text-accent-amber mb-4 block">The Organization</span>
          <h2 className="text-4xl md:text-5xl font-orbitron mb-4">ASTRA CLUB</h2>
          <p className="font-rajdhani text-xl text-text-primary tracking-widest uppercase">
            Armed Squad for Tactical Readiness and Awareness
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-20">
          <div className="border-l-4 border-accent-orange bg-bg-surface p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <GiShield className="text-9xl" />
            </div>
            <h3 className="text-2xl font-rajdhani text-accent-orange uppercase tracking-badge mb-6">Mission Statement</h3>
            <p className="text-xl text-text-primary italic font-inter leading-relaxed">
              "To bridge the gap between engineering students and real-world defence applications, fostering a culture of tactical innovation and awareness that contributes to national security through indigenous technology."
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-6 mb-20"
        >
          {focusAreas.map((area, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-6 bg-bg-elevated border border-custom-border flex items-center space-x-4 transition-all hover:border-accent-orange"
            >
              <span className="text-2xl text-accent-orange">{area.icon}</span>
              <span className="font-rajdhani uppercase tracking-badge text-text-primary font-bold">{area.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center bg-bg-surface border border-custom-border p-12 max-w-2xl mx-auto">
          <h3 className="text-xl font-orbitron mb-4">CLUB VISION</h3>
          <p className="text-text-muted leading-relaxed">
            ASTRA serves as a specialized cell within BMSIT&M where theory meets the battlefield. We focus on hands-on development of systems that resonate with the requirements of the Indian Armed Forces and paramilitary organizations.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
