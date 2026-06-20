import React from 'react';
import { motion } from 'framer-motion';

const businesses = [
  { icon: 'business', name: 'Offices', subtitle: 'Pantry Solutions', image: '/images/office_pantry.png' },
  { icon: 'local_cafe', name: 'Cafes', subtitle: 'Barista Quality', image: '/images/cafe_barista.png' },
  { icon: 'bed', name: 'Hotels', subtitle: 'In-Room Luxury', image: '/images/hotel_luxury.png' },
  { icon: 'storefront', name: 'Resellers', subtitle: 'Retail Partnering', image: '/images/retail_reseller.png' },
  { icon: 'inventory_2', name: 'Distributors', subtitle: 'Global Supply', image: '/images/global_distributor.png' },
];

export const BulkOrders: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-12 bg-[#060403] relative overflow-hidden" id="bulk-orders">
      
      {/* Intense Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[600px] bg-gradient-to-r from-[#ffb960]/5 via-amber-600/10 to-[#ffb960]/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Aesthetic Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffb9600a_1px,transparent_1px),linear-gradient(to_bottom,#ffb9600a_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 opacity-50"></div>

      {/* Infinite Scrolling Giant Watermark */}
      <div className="absolute top-20 md:top-32 whitespace-nowrap opacity-[0.03] text-[6rem] md:text-[8rem] font-headline font-black text-white pointer-events-none z-0 flex overflow-hidden w-full">
        <motion.div
           animate={{ x: [0, "-50%"] }}
           transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
           className="flex gap-12 md:gap-24 w-max"
        >
          <span>WHOLESALE</span><span>•</span><span>B2B</span><span>•</span><span>PARTNERS</span><span>•</span>
          <span>WHOLESALE</span><span>•</span><span>B2B</span><span>•</span><span>PARTNERS</span><span>•</span>
          <span>WHOLESALE</span><span>•</span><span>B2B</span><span>•</span><span>PARTNERS</span><span>•</span>
          <span>WHOLESALE</span><span>•</span><span>B2B</span><span>•</span><span>PARTNERS</span><span>•</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Dynamic Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center justify-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary font-body tracking-[0.2em] uppercase text-[10px] md:text-xs">B2B Network</span>
          </div>
          <h2 className="text-display-md font-headline text-5xl md:text-7xl mb-6 text-white tracking-tighter drop-shadow-2xl">
            Powering Your <br className="hidden md:block"/> <span className="text-primary italic">Business</span>
          </h2>
          <p className="text-stone-400 font-body text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
             We engineer custom scale solutions and supply authentic coffee and tea experiences—from intimate boutique cafes to vast global distributors.
          </p>
        </motion.div>

        {/* 3D Floating Grid Wrapper */}
        <div 
          style={{ perspective: '1600px' }} 
          className="flex flex-wrap items-stretch justify-center gap-6 md:gap-8 w-full"
        >
          {businesses.map((business, index) => {
            const delay = index * 0.2;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, z: -200, rotateY: 20 }}
                whileInView={{ opacity: 1, z: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                className="relative cursor-pointer group w-[45%] md:w-[18%]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Continuous 3D Floating Animation */}
                <motion.div
                  animate={{ 
                    rotateX: [3, -3, 3], 
                    rotateY: [-3, 3, -3], 
                    y: [-5, 5, -5] 
                  }}
                  transition={{ 
                    duration: Math.random() * 2 + 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: delay
                  }}
                  className="w-full h-full min-h-[350px] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(255,185,96,0.3)] border border-white/5 hover:border-primary/40 flex flex-col justify-between transition-all duration-700 relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  
                  {/* Background Image */}
                  <img 
                    src={business.image!} 
                    alt={business.name}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.5] group-hover:brightness-[0.7] group-hover:scale-110 transition-all duration-1000 z-0"
                  />

                  {/* Top and Bottom Gradients for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-0"></div>

                  {/* Top Level Meta */}
                  <div className="w-full p-5 flex justify-between items-center z-10 relative opacity-70 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: "translateZ(20px)" }}>
                    <span className="text-[10px] font-body text-[#ffb960] tracking-[0.2em] uppercase">No.{index + 1}</span>
                    <span className="material-symbols-outlined text-[16px] text-white/50 group-hover:text-primary transition-colors">arrow_outward</span>
                  </div>
                  
                  {/* 3D Elevated Text Floor */}
                  <div 
                    style={{ transform: "translateZ(30px)" }} 
                    className="w-full text-center p-6 relative z-10 flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                      <span className="material-symbols-outlined text-primary text-xl drop-shadow-[0_0_8px_rgba(255,185,96,0.5)]">{business.icon}</span>
                    </div>

                    <h3 className="text-white font-headline text-lg md:text-xl font-bold tracking-wide mb-1 transition-colors duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                      {business.name}
                    </h3>
                    <p className="text-stone-400 text-[10px] md:text-xs font-body tracking-wider uppercase group-hover:text-[#ffb960] transition-colors duration-500">
                      {business.subtitle}
                    </p>
                  </div>

                </motion.div>
              </motion.div>
            );
          })}
        </div>


        
      </div>
    </section>
  );
};
