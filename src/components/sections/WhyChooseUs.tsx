import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { 
    id: 1,
    icon: '🏆', 
    title: 'Premium Taste', 
    description: 'Immerse yourself in authentic, artisanal flavours that perfectly rival your favorite luxury cafe experience. Every sip is crafted for absolute perfection.',
    bg: 'from-[#1c120c] to-[#0a0604]',
    border: 'border-amber-500/20',
    topOffset: 'top-[100px] md:top-[120px]'
  },
  { 
    id: 2,
    icon: '⚡', 
    title: 'Quick & Easy', 
    description: 'No complex machinery required. Just add hot water, stir, and your premium beverage is ready in seconds. The ultimate convenience without compromising quality.',
    bg: 'from-[#1a0f0a] to-[#080402]',
    border: 'border-orange-500/20',
    topOffset: 'top-[130px] md:top-[160px]'
  },
  { 
    id: 3,
    icon: '🎯', 
    title: 'Wide Variety', 
    description: 'Explore over 20+ distinct flavours meticulously blended for every single mood, preference, and season. A universe of taste awaits you.',
    bg: 'from-[#140b12] to-[#060205]',
    border: 'border-rose-500/20',
    topOffset: 'top-[160px] md:top-[200px]'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-[#0c0806] relative" id="why-choose-us">
      
      {/* Immersive Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="w-full max-w-3xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs md:text-sm mb-4">The Svadistha Difference</p>
          <h2 className="text-display-lg font-headline text-5xl md:text-6xl font-black text-stone-100 tracking-tighter">
            Why Choose Us
          </h2>
        </motion.div>

        {/* The Stacking Deck (Perfect for Mobile Scrolling) */}
        <div className="relative pb-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
              className={`sticky ${feature.topOffset} w-full mb-12`}
            >
              {/* Massive Glassmorphism Panel */}
              <div 
                className={`w-full bg-gradient-to-br ${feature.bg} overflow-hidden rounded-[2.5rem] border ${feature.border} p-8 md:p-12 shadow-[0_-15px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl relative flex flex-col items-start`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                
                {/* Glowing Top Edge Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Number Watermark */}
                <div className="absolute -top-4 -right-2 font-headline text-[10rem] md:text-[14rem] font-black text-white/[0.02] pointer-events-none select-none z-0 leading-none">
                  {feature.id}
                </div>

                {/* Icon Container with continuous orbital floating */}
                <motion.div 
                  className="mb-8 relative z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.3 }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-4xl md:text-5xl shadow-[0_0_30px_rgba(255,185,96,0.1)]">
                    {feature.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 w-full md:w-4/5">
                  <h3 className="font-headline font-black text-3xl md:text-4xl text-stone-100 mb-4 tracking-tight drop-shadow-md">
                    {feature.title}
                  </h3>
                  <p className="font-body text-stone-300 md:text-stone-400 text-lg md:text-xl leading-relaxed">
                    {feature.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
