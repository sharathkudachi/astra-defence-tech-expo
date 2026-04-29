import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mic2, 
  ClipboardCheck, 
  User, 
  Utensils, 
  Users, 
  Trophy,
  MapPin,
  Clock,
  Info
} from 'lucide-react';

const Schedule = () => {
  const scheduleData = [
    {
      time: "9:00 AM – 10:30 AM",
      type: "single",
      events: [
        {
          title: "INAUGURATION",
          location: "BSN Auditorium",
          description: "Formal Inauguration Ceremony & Opening Address",
          icon: <Mic2 className="w-6 h-6" />
        }
      ]
    },
    {
      time: "10:30 AM – 1:00 PM",
      type: "parallel",
      label: "PARALLEL EVENTS",
      events: [
        {
          title: "PROJECT EVALUATION",
          location: "In front of Sir MV Block",
          description: "Academic Project Judging & Review",
          icon: <ClipboardCheck className="w-6 h-6" />
        },
        {
          title: "GUEST SESSION",
          location: "BSN Auditorium",
          timeSub: "10:30 AM – 12:30 PM",
          description: "Expert Talk by Brig. B M Cariappa",
          icon: <User className="w-6 h-6" />
        }
      ]
    },
    {
      time: "1:00 PM – 2:00 PM",
      type: "single",
      events: [
        {
          title: "LUNCH BREAK",
          icon: <Utensils className="w-6 h-6" />,
          isFullWidth: true
        }
      ]
    },
    {
      time: "2:00 PM – 3:00 PM",
      type: "single",
      events: [
        {
          title: "PROJECT EVALUATION CONTINUES",
          icon: <ClipboardCheck className="w-6 h-6" />
        }
      ]
    },
    {
      time: "3:00 PM – 4:00 PM",
      type: "single",
      events: [
        {
          title: "PANEL DISCUSSION",
          description: "Insights from Industry & Defence Experts",
          icon: <Users className="w-6 h-6" />
        }
      ]
    },
    {
      time: "4:00 PM – 4:30 PM",
      type: "single",
      events: [
        {
          title: "PRIZE DISTRIBUTION & VALEDICTORY",
          description: "Awards, Recognition & Closing Ceremony",
          icon: <Trophy className="w-6 h-6" />
        }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-24 relative overflow-hidden bg-bg-base">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-orange rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-orange rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-4 tracking-tighter">
            EVENT <span className="text-accent-orange italic">SCHEDULE</span>
          </h2>
          <div className="h-1 w-24 bg-accent-orange mx-auto mb-8" />
          <p className="font-rajdhani text-xl text-text-muted uppercase tracking-[0.2em]">
            30 APRIL 2026 • BMSIT&M, BENGALURU
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {scheduleData.map((slot, slotIdx) => (
            <motion.div 
              key={slotIdx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: slotIdx * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Time Sidebar */}
                <div className="md:w-1/4 flex flex-col pt-2">
                  <div className="flex items-center gap-3 text-accent-orange mb-1">
                    <Clock className="w-5 h-5" />
                    <span className="font-orbitron text-lg font-bold tracking-wider">{slot.time}</span>
                  </div>
                  {slot.label && (
                    <span className="text-[10px] font-orbitron text-text-muted tracking-[0.3em] uppercase mt-1">
                      ({slot.label})
                    </span>
                  )}
                </div>

                {/* Event Cards */}
                <div className={`md:w-3/4 grid gap-4 ${slot.type === 'parallel' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                  {slot.events.map((event, eventIdx) => (
                    <div 
                      key={eventIdx}
                      className={`group relative overflow-hidden bg-white/5 border border-white/10 p-6 transition-all duration-300 hover:border-accent-orange/50 hover:bg-white/10 ${event.isFullWidth ? 'md:col-span-2 lg:col-span-3' : ''}`}
                    >
                      {/* Accent corner */}
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-orange/0 group-hover:border-accent-orange/50 transition-all duration-300" />
                      
                      <div className="flex items-start gap-4">
                        <div className="mt-1 p-2 bg-accent-orange/10 text-accent-orange rounded-sm group-hover:bg-accent-orange group-hover:text-bg-base transition-colors duration-300">
                          {event.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-orbitron text-lg font-bold mb-2 group-hover:text-accent-orange transition-colors">
                            {event.title}
                          </h3>
                          
                          {event.timeSub && (
                            <div className="flex items-center gap-2 text-sm text-accent-orange/80 mb-2 font-rajdhani font-bold">
                              <Clock className="w-3 h-3" />
                              {event.timeSub}
                            </div>
                          )}

                          {event.location && (
                            <div className="flex items-center gap-2 text-sm text-text-muted mb-2 font-rajdhani">
                              <MapPin className="w-3 h-3 text-accent-orange" />
                              {event.location}
                            </div>
                          )}

                          {event.description && (
                            <p className="text-sm text-text-muted leading-relaxed font-rajdhani">
                              {event.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-text-muted text-sm font-rajdhani italic">
            <Info className="w-4 h-4 text-accent-orange" />
            Note: This schedule is subject to change based on requirements and guest availability.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;

