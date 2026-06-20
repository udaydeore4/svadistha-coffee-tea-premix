import React from 'react';
import { motion } from 'framer-motion';

const certs = [
  { icon: '🛡️', title: 'FSSAI Licensed' },
  { icon: '🏅', title: 'ISO Certified' },
  { icon: '🇮🇳', title: 'Start-Up India' },
  { icon: '⭐', title: 'Premium Quality' },
];

// Duplicate for infinite scroll
const marqueeItems = [...certs, ...certs, ...certs];

export const Certifications: React.FC = () => {
  return (
    <section className="py-24 bg-[#0c0806] relative overflow-hidden border-t border-b border-white/5" id="certifications">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#ffb960]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
        <h2 className="text-display-sm font-headline text-3xl md:text-5xl text-stone-100 tracking-tight">
          Certifications & <span className="text-primary italic">Trust</span>
        </h2>
        <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#ffb960] to-transparent mx-auto"></div>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full flex overflow-hidden">
        
        {/* Left/Right Edge Fade Masks */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#0c0806] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#0c0806] to-transparent z-20 pointer-events-none"></div>

        <motion.div
           className="flex gap-6 md:gap-10 w-max"
           animate={{ x: [0, "-33.333333%"] }} // Scroll exactly one segment length (3 duplicates)
           transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
           style={{ perspective: '1000px' }}
        >
          {marqueeItems.map((cert, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              className="relative w-56 h-36 md:w-64 md:h-40 bg-gradient-to-br from-[#1a110a] to-[#0a0604] rounded-2xl border border-white/5 shadow-2xl flex flex-col items-center justify-center p-6 shrink-0 cursor-pointer overflow-hidden group"
            >
              
              {/* Internal 3D Floating Motion */}
              <motion.div
                animate={{ y: [0, -5, 0], rotateZ: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                className="flex flex-col items-center justify-center pointer-events-none"
              >
                  <div className="text-3xl md:text-4xl mb-3 drop-shadow-[0_0_15px_rgba(255,185,96,0.5)] group-hover:scale-125 transition-transform duration-500">
                    {cert.icon}
                  </div>
                  <div className="text-[#ffb960] font-headline font-semibold text-sm md:text-base tracking-wide">
                    {cert.title}
                  </div>
              </motion.div>

              {/* Hover Glow Edge */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};
