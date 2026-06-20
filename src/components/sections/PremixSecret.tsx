import React from 'react';
import { motion } from 'framer-motion';

export const PremixSecret: React.FC = () => {
  return (
    <section className="py-24 bg-surface-container-low/50" id="science">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-headline-lg font-headline text-5xl mb-4">The Secret of Premix</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            An alchemical balance between science and soul. Our proprietary blending technique ensures every cup is a signature performance.
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-3xl h-[500px] w-full shadow-2xl"
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmDpVV3BCTxq8ky4jvACRCFfFxDBj_7FRcmRYWnNJH1dv8qkpmzqKZYjD4aSyqNQDUjeA6PheqApAdXzW7MlKCP8wVmAaympYZ7008phNE_xGzdzw0Lexi2YxNMzDJC6ST56BRRpEfFF1A5cMz2yiZjCpEEcgabFJVevbQYwNfSXR8mnZP5TIBH4_4AHvghWItiYdwJznkv_dUKYvm0uhMWWPk2-FkH908DhMnM_mZ2BFBy918cKuAfRvtzRWzeXhnZNEvdKEa9vs"
              alt="Chemistry representation"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent opacity-90"></div>
            <div className="absolute inset-y-0 left-0 p-8 md:p-16 flex flex-col justify-center max-w-2xl">
              <h3 className="text-4xl font-headline text-primary mb-4">Molecular Balance</h3>
              <p className="text-xl text-on-surface-variant">
                We analyze the chemical composition of each harvest to ensure consistent acidity levels and lipid concentration. Every gram is scrutinized under laboratory precision to maintain our standard of excellence.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Thermal Memory Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-3xl h-[300px] md:h-full shadow-lg"
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="/images/thermal_memory.png"
                alt="Thermal Memory"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0503] via-[#0a0503]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-xl">thermostat</span>
                  <h3 className="text-xl font-headline text-primary">Thermal Memory</h3>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Our beans are 'tempered' after roasting to lock in volatile aromatic compounds that usually escape standard cooling processes.
                </p>
              </div>
            </motion.div>

            {/* Hydration Mapping Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group overflow-hidden rounded-3xl h-[300px] md:h-full shadow-lg"
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="/images/hydration_mapping.png"
                alt="Hydration Mapping"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0503] via-[#0a0503]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-xl">water_drop</span>
                  <h3 className="text-xl font-headline text-primary">Hydration Mapping</h3>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Every premix is optimized for specific water hardness ranges, ensuring the perfect extraction regardless of your location.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-3xl h-[300px] md:h-full shadow-lg"
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfy3-wb3HJ0WYuVU6BW0zzNHN4jO4OEELLxr_7hDiLJhGDZbV7Z0HK8b4N3hkPNet7AQWaLUMyJacuzITwMhvg8qakeMSqHBb-FP7DS2eThln6GY5_oyoJMzrhYSIQNtV9XUBStPOh5gSgjcoN3HSt2sQSR7Z2aRztv_vaLN2pWu045V1bDbKWkEVM8gdAiUUxG12UYigOxgnYRVfHOtJseihf6SK7xojpD0jmlALB9zYGzNzsPcEF-tJIbrqZcypWvfQSjmRnF7Y"
                alt="Sensory Check"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-xl font-headline text-primary mb-2">The Sensory Check</h3>
                <p className="text-xs text-on-surface-variant">Dual blind-tasting by our Master Sommelier.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
