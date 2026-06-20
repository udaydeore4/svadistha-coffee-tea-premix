import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const steps = [
  { id: 1, title: 'Add', description: 'Empty one sachet or scoop into your cup.', align: 'left' },
  { id: 2, title: 'Pour', description: 'Add hot boiling water according to taste.', align: 'right' },
  { id: 3, title: 'Stir', description: 'Stir slowly until fully dissolved.', align: 'left' },
  { id: 4, title: 'Enjoy', description: 'Relax and savour your delicious drink.', align: 'right' }
];

export const HowToPrepare: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the scroll line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-20 px-6 bg-[#0c0908] relative overflow-hidden" id="prepare">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Dynamic Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-display-md font-headline text-5xl md:text-6xl mb-6 text-stone-100 tracking-tight drop-shadow-2xl">
            How To <span className="text-primary italic">Prepare</span>
          </h2>
          <p className="text-stone-400 font-body text-lg md:text-xl tracking-widest uppercase">
            Your favourite beverage in 4 steps
          </p>
        </motion.div>

        {/* The Motion Timeline Wrapper */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Central Parallax Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,1)]">
            <motion.div 
              className="absolute top-0 left-0 right-0 w-full bg-gradient-to-b from-primary via-[#ffb960] to-transparent shadow-[0_0_20px_#ffb960]"
              style={{ scaleY, transformOrigin: 'top', height: '100%' }} 
            />
          </div>

          {/* Staggered Step Variations */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step) => {
              const isLeft = step.align === 'left';
              
              return (
                <div key={step.id} className={`relative flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Central Node Indicator (Desktop Only) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#120c08] border border-white/20 items-center justify-center z-20">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.5, 1] }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  {/* Motion Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, rotateY: isLeft ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`relative w-full md:w-[45%] group cursor-default`}
                    style={{ perspective: "1000px" }}
                  >
                    
                    {/* Floating Monumental Number */}
                    <motion.div 
                      className={`absolute top-0 -translate-y-1/3 ${isLeft ? '-right-6 md:-right-16' : '-left-6 md:-left-16'} text-[8rem] md:text-[12rem] font-headline font-black text-white/5 group-hover:text-primary/10 transition-colors duration-700 pointer-events-none select-none z-0`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 }}
                    >
                      {step.id}
                    </motion.div>

                    {/* Glass Panel */}
                    <div className="relative z-10 bg-[#1e1510]/60 backdrop-blur-2xl border border-white/5 group-hover:border-primary/30 p-10 md:p-14 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-500">
                      
                      {/* Interactive Hover Sweep */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                      <div className="relative z-20">
                        <h3 className="text-4xl md:text-5xl font-headline text-stone-100 mb-6 drop-shadow-md">
                          <span className="text-primary italic mr-4">{String(step.id).padStart(2, '0')}</span>
                          {step.title}
                        </h3>
                        <p className="text-stone-400 font-body text-lg leading-relaxed max-w-sm">
                          {step.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                  
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
