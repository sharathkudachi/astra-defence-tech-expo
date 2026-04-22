import React from 'react';
import { motion } from 'framer-motion';
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

const Event = () => {
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
    { acronym: "HAL", full: "Hindustan Aeronautics Limited", role: "Aerial platforms & avionics" },
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

      {/* Callout Split */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border-2 border-accent-orange bg-bg-surface p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <GiShield className="text-8xl" />
            </div>
            <h3 className="text-3xl font-orbitron text-accent-orange mb-4 uppercase">Student Competition</h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              Exclusively for students from engineering institutions. Compete for major prizes and receive evaluation from experts.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-text-primary text-sm font-rajdhani uppercase"><GiCheckMark className="text-accent-orange mr-2" /> Open to Students Only</li>
              <li className="flex items-center text-text-primary text-sm font-rajdhani uppercase"><GiCheckMark className="text-accent-orange mr-2" /> Prize Eligibility</li>
              <li className="flex items-center text-text-primary text-sm font-rajdhani uppercase"><GiCheckMark className="text-accent-orange mr-2" /> Expert Mentorship</li>
            </ul>
          </div>
          <div className="border border-accent-amber/50 bg-bg-surface p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <GiShield className="text-8xl text-accent-amber" />
            </div>
            <h3 className="text-3xl font-orbitron text-accent-amber mb-4 uppercase">Industry Exhibition</h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              Private companies and startups showcasing tactical solutions. Opportunity for stalls and live demonstrations of commercial defence products.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-text-primary text-sm font-rajdhani uppercase"><GiCheckMark className="text-accent-amber mr-2" /> Display Only</li>
              <li className="flex items-center text-text-primary text-sm font-rajdhani uppercase"><GiCheckMark className="text-accent-amber mr-2" /> Non-Competitive</li>
              <li className="flex items-center text-text-primary text-sm font-rajdhani uppercase"><GiCheckMark className="text-accent-amber mr-2" /> Networking Priority</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 bg-bg-elevated p-4 border border-accent-amber/30 text-center">
            <p className="text-accent-amber font-orbitron text-xs tracking-[0.15em] uppercase">
              Important: Companies are present for exhibition purposes only. The competition is exclusively for students.
            </p>
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
