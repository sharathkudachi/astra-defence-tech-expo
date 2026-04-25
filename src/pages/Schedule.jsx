import React from 'react';
import { motion } from 'framer-motion';

const Schedule = () => {
  const timeline = [
    { time: "09:00 AM", event: "Expo Begins / Gates Open" },
    { time: "10:00 AM", event: "Registration Closes" },
    { time: "10:00–10:30 AM", event: "Inauguration Ceremony" },
    { time: "10:30 AM–01:00 PM", event: "Expo + Evaluation (Phase 1)" },
    { time: "10:30–11:30 AM", event: "Guest Address 1" },
    { time: "01:00–02:00 PM", event: "Lunch Break" },
    { time: "02:00–04:00 PM", event: "Evaluation Continues (Phase 2)" },
    { time: "04:30 PM", event: "Results Announcement & Prize Distribution" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
      id="schedule"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-orbitron mb-8">EVENT SCHEDULE</h1>
        <div className="bg-accent-orange text-bg-base py-3 px-8 inline-block font-orbitron text-lg tracking-widest uppercase">
          30 APRIL 2026 · BMSIT&M, BENGALURU
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-[34px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-accent-orange/30" />

        <div className="space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row items-center md:justify-center">
              {/* Dot */}
              <div className="absolute left-[29px] md:left-1/2 md:-ml-[6px] w-3 h-3 rounded-full z-10 bg-accent-orange ring-4 ring-bg-base shadow-[0_0_10px_rgba(255,107,0,0.4)]" />

              <div className="flex w-full flex-col md:flex-row items-start md:items-center">
                {/* Time */}
                <div className="md:w-1/2 md:pr-16 text-left md:text-right pl-16 md:pl-0 mb-2 md:mb-0">
                  <span className="font-orbitron text-lg text-text-primary">{item.time}</span>
                </div>

                {/* Event */}
                <div className="md:w-1/2 md:pl-16 pl-16">
                  <div className="p-6 border border-accent-orange/40 bg-accent-orange/5 relative">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent-orange" />
                    <h3 className="font-rajdhani text-xl font-bold uppercase tracking-badge text-text-primary">
                      {item.event}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center max-w-2xl mx-auto">
        <p className="text-text-muted text-sm italic border-t border-custom-border pt-8">
          The schedule is dynamic and subject to adjustments based on requirements and guest availability.
        </p>
      </div>
    </motion.div>
  );
};

export default Schedule;
