import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const QuoteBanner: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center px-6 relative z-10"
      >
        <h2 className="text-display-md font-headline italic mb-8 text-4xl leading-relaxed">
          "Coffee and tea are not just beverages. They are moments of curated stillness."
        </h2>
        <p className="text-label-lg tracking-widest uppercase text-on-surface-variant">
          — THE SVADISTHA MANIFESTO
        </p>
        
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
          <a href="#products">
            <Button variant="primary" className="w-full">Shop Collections</Button>
          </a>
          <a href="#enquiry">
            <Button variant="glass" className="w-full">Join the Guild</Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
