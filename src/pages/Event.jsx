import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GiRobotLeg, 
  GiArtificialIntelligence, 
  GiLockSpy, 
  GiCctvCamera, 
  GiProcessor, 
  GiRadarSweep, 
  GiDeliveryDrone,
  GiCheckMark,
  GiShield
} from 'react-icons/gi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Event = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const sappersImages = [
    "/sappiers1.webp",
    "/sappiers2.webp",
    "/sappiers3.webp",
    "/sappiers4.webp",
    "/sappiers5.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sappersImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const domains = [
    { title: "Robotics & Autonomous Systems in Defence Technology", icon: <GiRobotLeg />, desc: "UGVs, rescue robots, and automated surveillance systems. Emphasis on navigation in unstructured environments and task automation." },
    { title: "AI & Machine Learning in Defence Technology", icon: <GiArtificialIntelligence />, desc: "Predictive analytics, target recognition, and intelligent command systems. Using data to stay three steps ahead of the adversary." },
    { title: "Cybersecurity & Ethical Hacking in Defence Technology", icon: <GiLockSpy />, desc: "Offensive and defensive digital operations. Securing communication channels and protecting critical national assets from digital threats." },
    { title: "IoT & Smart Surveillance in Defence Technology", icon: <GiCctvCamera />, desc: "Networked sensor arrays, smart perimeters, and wearable tech for soldiers. Enhancing situational awareness through connectivity." },
    { title: "Embedded Systems in Defence Technology", icon: <GiProcessor />, desc: "High-performance computing in compact form factors. Designing the brains behind advanced sensors, munitions, and telemetry." },
    { title: "Communication Technologies in Defence Technology", icon: <GiRadarSweep />, desc: "SDRs, encrypted protocols, and jam-resistant signals. Ensuring reliable communication in electronic warfare scenarios." },
    { title: "UAVs & Drones in Defence Technology", icon: <GiDeliveryDrone />, desc: "Multi-rotors, fixed-wings, and swarming tech for recon and logistics. Redefining aerial superiority through student-led innovation." }
  ];

  const steps = [
    {
      step: "Round 1",
      title: "Online Screening",
      details: [
        "Problem Statement submission",
        "Detailed Project Description & PPT",
        "Video Demonstration (3-5 mins)",
        "Supporting Technical Documents"
      ],
    },
    {
      step: "Round 2",
      title: "Final Expo at BMSIT&M",
      details: [
        "Live physical demonstration",
        "Presentation to Expert Evaluation Panel",
        "Q&A session with industry veterans",
        "Final scoring and ranking"
      ],
      note: "Judged on innovation, feasibility, presentation, and defence relevance."
    }
  ];

  const evaluators = [
    { acronym: "DRDO", full: "Defence Research & Development Org", role: "Weapon systems & strategic hardware" },
    { acronym: "BEL", full: "Bharat Electronics Limited", role: "Radar & communication systems" },
    { acronym: "BDL", full: "Bharat Dynamics Limited", role: "Guided missiles & munitions" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
      id="domains"
    >
      {/* Overview */}
      <section className="mb-24 text-center max-w-3xl mx-auto">
        <span className="label-badge text-accent-orange mb-4 block">Operational Overview</span>
        <h1 className="text-4xl md:text-5xl font-orbitron mb-8">EVENT DETAILS</h1>
        <p className="text-text-muted text-lg leading-relaxed font-inter">
          The Defence Technology Expo 2026 is a premier platform designed to showcase the next generation of tactical innovation. Hosted at BMSIT&M, the event brings together the brightest student minds and seasoned experts from India's elite defence organizations to witness the future of national security.
        </p>
      </section>

      {/* Domain Cards */}
      <section className="mb-32">
        <h2 className="text-2xl font-orbitron mb-12 border-l-4 border-accent-orange pl-4">COMPETITION DOMAINS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, idx) => (
            <div key={idx} className="bg-bg-surface border border-custom-border p-8 hover:border-accent-orange transition-all group">
              <div className="text-4xl text-accent-orange mb-6 group-hover:scale-110 transition-transform">
                {domain.icon}
              </div>
              <h3 className="text-xl font-rajdhani uppercase tracking-badge mb-4 text-text-primary">
                {domain.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed border-t border-custom-border pt-4">
                {domain.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Feature: Madras Sappers */}
      <section className="mb-32">
        <div className="border border-accent-orange/50 bg-bg-surface p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(255,107,0,0.05)]">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <GiShield className="text-[200px] text-accent-orange translate-x-20 -translate-y-20" />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
            <div className="w-full lg:w-1/2">
              <span className="label-badge text-accent-orange mb-4 inline-block">Special Combat Engineering Display</span>
              <h3 className="text-3xl md:text-4xl font-orbitron text-text-primary mb-8 uppercase tracking-widest leading-tight">
                Madras Sappers <br /><span className="text-accent-orange">(MEG & Centre)</span>
              </h3>
              
              <div className="space-y-6 text-text-muted font-inter leading-relaxed text-sm md:text-base border-l-2 border-accent-orange/30 pl-6">
                <p>
                  The Madras Engineer Group (MEG & Centre), popularly known as the Madras Sappers, is one of the oldest and most distinguished regiments of the Indian Army’s Corps of Engineers. With a legacy that dates back to the 18th century, the Madras Sappers have played a critical role in shaping India’s military engineering capabilities across generations.
                </p>
                <p>
                  Renowned for their expertise in combat engineering, infrastructure development, and battlefield support, the regiment has contributed significantly in areas such as mobility, counter-mobility, fortifications, and disaster response operations.
                </p>
                <p>
                  At ASTRA Defence Tech Expo 2026, the Madras Sappers (MEG & Centre) will be showcasing a range of their engineering equipment, field technologies, and operational capabilities, offering participants a rare opportunity to witness real-world defence systems up close.
                </p>
                <p className="text-text-primary font-bold italic">
                  Their presence bridges the gap between academic innovation and practical defence applications, giving students direct exposure to the technologies and systems used by the Indian Army.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
               <div className="relative group">
                 <div className="aspect-[16/10] relative overflow-hidden border border-accent-orange/20 bg-black/40">
                   <AnimatePresence mode="wait">
                     <motion.img
                       key={currentImage}
                       src={sappersImages[currentImage]}
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, x: -20 }}
                       transition={{ duration: 0.5 }}
                       className="w-full h-full object-cover"
                     />
                   </AnimatePresence>
                   
                   {/* Navigation Dots */}
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                     {sappersImages.map((_, idx) => (
                       <button
                         key={idx}
                         onClick={() => setCurrentImage(idx)}
                         className={`w-2 h-2 rounded-full transition-all ${
                           currentImage === idx ? 'bg-accent-orange w-6' : 'bg-white/30 hover:bg-white/50'
                         }`}
                       />
                     ))}
                   </div>

                   {/* Arrows */}
                   <button 
                     onClick={() => setCurrentImage((prev) => (prev - 1 + sappersImages.length) % sappersImages.length)}
                     className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                   >
                     <HiChevronLeft size={24} />
                   </button>
                   <button 
                     onClick={() => setCurrentImage((prev) => (prev + 1) % sappersImages.length)}
                     className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                   >
                     <HiChevronRight size={24} />
                   </button>
                 </div>
               </div>
               
               <div className="mt-8 p-6 bg-accent-orange/5 border border-accent-orange/20">
                  <p className="font-orbitron text-[10px] tracking-widest text-accent-orange uppercase mb-2">Operational Status</p>
                  <p className="text-text-primary font-rajdhani text-sm uppercase font-bold tracking-widest">
                    Live Display · Equipment Showcase · Interactive Session
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="mb-32 max-w-4xl mx-auto">
        <h2 className="text-2xl font-orbitron mb-16 text-center">SELECTION PROTOCOL</h2>
        <div className="relative border-l-2 border-custom-border ml-4 space-y-20">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-12">
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-accent-orange border-4 border-bg-base" />
              <div className="bg-bg-surface border border-custom-border p-8">
                <span className="label-badge text-accent-orange mb-2 block">{step.step}</span>
                <h3 className="text-2xl font-orbitron mb-6">{step.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                   <ul className="space-y-3">
                     {step.details.map((detail, i) => (
                       <li key={i} className="text-text-muted text-sm flex items-center">
                         <span className="w-1.5 h-1.5 bg-accent-orange mr-3" /> {detail}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </motion.div>
  );
};

export default Event;
