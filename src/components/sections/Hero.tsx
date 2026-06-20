import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover opacity-40 grayscale-[0.2]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaWsok-cx2TAxkUyWqciGJifqsBBN8p9ioBrcaRLsKUrZLNiNYvP4N20nRHLJeJOSUkmTSig1spQkEGvkZIBwbor4-eiqn0q8JB9K1rzCZEklCz9eulKry71HYazJpvQ6VuPu9xMYlj0l2C6lnX3i_gQMkVz4u2fFAA9HYAeD8EhwCorCTT6SRCGN16-f_Bwn9Uw4LlSsFkbpyzIUJlGCMd8Kh0c4B5VoJWMsqYDjwCGIU3HefPmbeli_-5Csuh-iX1JpYHzg9p_c"
          alt="Coffee Beans Background"
        />
        <div className="absolute inset-0 editorial-gradient"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl text-center space-y-8 mt-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary tracking-[0.4em] uppercase text-xs font-bold block mb-4"
        >
          EST. 2018
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-display-lg font-headline italic text-6xl md:text-8xl leading-tight text-on-surface"
        >
          A Legacy Written <br/> <span className="text-primary-fixed-dim">in Liquid Gold</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed text-lg"
        >
          Beyond the grind and the steam lies a philosophy of patience. We invite you into the sensory world where every bean tells a story of the soil it left behind.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center pt-8"
        >
          <span className="material-symbols-outlined text-primary text-4xl animate-bounce">expand_more</span>
        </motion.div>
      </div>
    </section>
  );
};
