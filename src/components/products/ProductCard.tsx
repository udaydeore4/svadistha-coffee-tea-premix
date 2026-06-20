import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { Product } from '../../services/productService';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const ref = useRef<HTMLDivElement>(null);

  // 3D Tilt Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Add springs for smooth physics interactions
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse positions to rotation angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate percentage from center (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isPhotographic = product.image.startsWith('/');

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group w-full cursor-pointer aspect-[3/4.5] z-10"
    >
      {/* Aurora Glow Backdrop (on hover) */}
      <motion.div 
        className={`absolute -inset-2 bg-primary/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-0`}
      />
      
      {/* Main Full-Bleed Card */}
      <div 
        className="relative h-full w-full bg-[#0d0805] rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.8)] group-hover:border-primary/30 transition-all duration-500"
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
      >
        
        {/* Background Layer: Image or Gradient Fallback */}
        {isPhotographic ? (
           <img 
              src={product.image} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover brightness-[0.5] group-hover:brightness-[0.7] group-hover:scale-110 transition-all duration-1000 z-0"
           />
        ) : (
           <div className={`absolute inset-0 bg-gradient-to-br ${
             product.category === 'Coffee' 
               ? 'from-[#1c120c] via-[#0d0805] to-[#0a0604]' 
               : 'from-[#0d1c0c] via-[#080d05] to-[#040a04]'
           } z-0 opacity-100`}></div>
        )}

        {/* Immersive Gradients for Text Legibility */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

        {/* Top Level Meta */}
        <div className="w-full p-6 flex justify-between items-center z-20 relative opacity-60 group-hover:opacity-100 transition-all duration-500" style={{ transform: "translateZ(20px)" }}>
           <span className="text-[10px] font-headline text-[#ffb960] tracking-widest uppercase font-bold">No. {String(index + 1).padStart(2, '0')}</span>
           <span className="material-symbols-outlined text-[16px] text-white/50 group-hover:text-primary transition-colors">arrow_outward</span>
        </div>

        {/* Bottom Content Area */}
        <div 
          style={{ transform: "translateZ(40px)" }} 
          className="w-full p-8 relative z-20 flex flex-col items-center mt-auto"
        >
          {/* Floating Action Pill / Icon */}
          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center mb-5 group-hover:-translate-y-2 group-hover:border-primary/30 transition-all duration-500"
          >
             {isPhotographic ? (
                <span className="material-symbols-outlined text-primary text-xl drop-shadow-[0_0_8px_rgba(255,185,96,0.5)]">
                  {product.category === 'Coffee' ? 'local_cafe' : 'eco'}
                </span>
             ) : (
                <span className="text-2xl drop-shadow-[0_5px_8px_rgba(0,0,0,0.5)]">{product.image}</span>
             )}
          </motion.div>

          {/* Product Info */}
          <h3 className="text-white font-headline text-xl md:text-2xl font-bold tracking-tight text-center mb-2 group-hover:text-primary transition-colors duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-3">
             <div className="h-[1px] w-8 bg-primary/30 group-hover:w-12 transition-all" />
             <p className="text-stone-400 text-[10px] font-body tracking-[0.2em] uppercase group-hover:text-[#ffb960] transition-colors duration-500">
               {product.category} Premix
             </p>
             <div className="h-[1px] w-8 bg-primary/30 group-hover:w-12 transition-all" />
          </div>
        </div>

      </div>
    </motion.div>
  );
};
