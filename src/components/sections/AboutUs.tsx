import React from 'react';
import { motion } from 'framer-motion';

const values = [
  { id: 1, icon: '🌿', title: 'Premium Ingredients', gradient: 'from-green-500/10 via-green-500/5 to-transparent' },
  { id: 2, icon: '⚖️', title: 'Balanced Taste', gradient: 'from-amber-500/10 via-amber-500/5 to-transparent' },
  { id: 3, icon: '⚡', title: 'Easy Preparation', gradient: 'from-orange-500/10 via-orange-500/5 to-transparent' },
  { id: 4, icon: '✅', title: 'Consistent Quality', gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent' }
];

export const AboutUs: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#090604] relative overflow-hidden" id="about-us">
      
      {/* Immersive Dark Atmosphere */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ffb960]/5 rounded-full blur-[150px] pointer-events-none -z-0 translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Section (Text Content) */}
        <div className="flex-1 w-full text-center lg:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary font-body tracking-[0.2em] uppercase text-[10px] md:text-xs">Our Heritage</span>
            </div>
            <h2 className="text-display-md font-headline text-5xl md:text-6xl mb-6 text-stone-100 tracking-tighter">
              About <span className="text-primary italic">Svadistha</span>
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-primary via-primary/50 to-transparent mx-auto lg:mx-0 mb-8"></div>
          </motion.div>

          {/* Staggered Paragraph Entries */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-stone-300 font-body text-lg md:text-xl leading-relaxed text-left"
          >
            <p>
              Svadistha Venture Inc is dedicated to creating high-quality instant tea and coffee premixes that combine authentic taste with modern convenience. Our products are carefully developed to deliver rich flavour, smooth texture, and consistent quality in every cup.
            </p>
            <p className="text-stone-400">
              Whether you want a quick coffee at work or a comforting cup of chai at home, Svadistha premixes make it effortless.
            </p>
          </motion.div>
          
        </div>

        {/* Right Section (Astounding Overlapping Floating Layout) */}
        <div className="flex-1 w-full relative h-[450px] md:h-[600px] perspective-1000 hidden md:block mt-12 lg:mt-0">
          
          {/* Central Anchor Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-[60px] animate-pulse"></div>

          {values.map((val, index) => {
            // Assign specific positions for an asymmetrical overlapping look
            const positions = [
              { top: '0', left: '0', size: 'w-48 h-48 md:w-56 md:h-56', zRange: [0, 20] },
              { top: '10%', right: '0', size: 'w-44 h-44 md:w-52 md:h-52', zRange: [40, 60] },
              { bottom: '15%', left: '10%', size: 'w-40 h-40 md:w-48 md:h-48', zRange: [20, 0] },
              { bottom: '0', right: '5%', size: 'w-52 h-52 md:w-60 md:h-60', zRange: [60, 40] },
            ];
            const pos = positions[index];
            const delay = index * 0.5;

            return (
              <motion.div 
                key={val.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`absolute ${pos.top ? `top-[${pos.top}]` : ''} ${pos.bottom ? `bottom-[${pos.bottom}]` : ''} ${pos.left ? `left-[${pos.left}]` : ''} ${pos.right ? `right-[${pos.right}]` : ''}`}
                style={{ 
                  ...(pos.top && { top: pos.top }), 
                  ...(pos.bottom && { bottom: pos.bottom }), 
                  ...(pos.left && { left: pos.left }), 
                  ...(pos.right && { right: pos.right }) 
                }}
              >
                {/* Continuous 3D Floating Animation */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0], 
                    x: [0, index % 2 === 0 ? 10 : -10, 0],
                    rotateZ: [0, index % 2 === 0 ? 3 : -3, 0],
                  }}
                  transition={{ 
                    duration: 7 + index, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: delay
                  }}
                  whileHover={{ scale: 1.1, zIndex: 50 }}
                  className={`group relative ${pos.size} rounded-[2.5rem] bg-[#1a0f0a]/60 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center p-6 cursor-pointer overflow-hidden transition-all duration-500`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  
                  {/* Reactive Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${val.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                  {/* Levitating Icon */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay + 1 }}
                    className="text-5xl md:text-6xl mb-4 drop-shadow-2xl relative z-10"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {val.icon}
                  </motion.div>
                  
                  {/* Elevated Text */}
                  <div 
                    className="text-stone-300 group-hover:text-white font-headline font-semibold tracking-wide text-center transition-colors duration-500 z-10 text-sm md:text-base"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {val.title}
                  </div>

                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Mobile Fallback Grid (Since precise absolute positioning can break on very thin screens) */}
        <div className="flex-1 w-full grid grid-cols-2 gap-4 md:hidden mt-8 perspective-1000">
             {values.map((val, index) => (
                <motion.div 
                  key={val.id}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                  className="group relative h-40 rounded-[2rem] bg-[#1a0f0a]/80 backdrop-blur-lg border border-white/10 flex flex-col items-center justify-center p-4"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${val.gradient} opacity-30`}></div>
                  <div className="text-4xl mb-2 z-10">{val.icon}</div>
                  <div className="text-stone-300 font-headline font-semibold text-center z-10 text-xs">{val.title}</div>
                </motion.div>
             ))}
        </div>

      </div>
    </section>
  );
};
