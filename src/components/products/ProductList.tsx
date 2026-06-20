import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { fetchProducts } from '../../services/productService';
import type { Product } from '../../services/productService';

type CategoryType = 'Coffee' | 'Tea';

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<CategoryType>('Coffee');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    
    getProducts();
  }, []);

  const visibleProducts = products.filter(p => p.category === activeTab);

  // Tab switching animations for the entire grid wrapper
  const pageVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" } as any
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" } as any
    })
  };

  // Staggered children for cards inside the active grid
  const containerVariants: Variants = {
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 } as any
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 } as any
    }
  };

  if (loading) {
    return (
      <section className="py-24 px-6 max-w-7xl mx-auto min-h-[50vh] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-stone-400 font-headline">Preparing flavours...</p>
      </section>
    );
  }

  // Direction logic for sliding animation
  const slideDirection = activeTab === 'Coffee' ? -1 : 1;

  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto overflow-hidden" id="products">
      
      {/* Title Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-display-md font-headline text-5xl mb-6 text-stone-100 tracking-tight">
          Our Collection
        </h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-6"></div>
        <p className="text-stone-400 font-body tracking-wide mb-12">
          Discover a symphony of flavours designed for the perfect brew.
        </p>

        {/* Dynamic Mobile-First Tab Switcher */}
        <div className="relative inline-flex bg-[#120c08] border border-stone-800 rounded-full p-2 mx-auto justify-center shadow-inner">
          <button 
            onClick={() => setActiveTab('Coffee')}
            className={`relative px-8 py-3 rounded-full font-body font-semibold tracking-wide transition-colors duration-300 z-10 ${
              activeTab === 'Coffee' ? 'text-stone-950' : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            {activeTab === 'Coffee' && (
              <motion.div 
                layoutId="activeTabPill" 
                className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_15px_rgba(255,185,96,0.5)]"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              />
            )}
            Coffee <span className="ml-1 hidden sm:inline">Flavours</span>
          </button>
          
          <button 
             onClick={() => setActiveTab('Tea')}
            className={`relative px-8 py-3 rounded-full font-body font-semibold tracking-wide transition-colors duration-300 z-10 ${
              activeTab === 'Tea' ? 'text-stone-950' : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            {activeTab === 'Tea' && (
              <motion.div 
                layoutId="activeTabPill" 
                className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_15px_rgba(255,185,96,0.5)]"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              />
            )}
            Tea <span className="ml-1 hidden sm:inline">Flavours</span>
          </button>
        </div>
      </motion.div>

      {/* Grid Canvas with AnimatePresence */}
      <div className="relative min-h-[600px]">
        <AnimatePresence mode="wait" custom={slideDirection}>
          <motion.div
            key={activeTab}
            custom={slideDirection}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 pb-10"
              style={{ perspective: 1200 }}
            >
              {visibleProducts.map((product, idx) => (
                <motion.div key={product.id} variants={itemVariants} style={{ transformStyle: 'preserve-3d' }}>
                  <ProductCard product={product} index={idx} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
};
