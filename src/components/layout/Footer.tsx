import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="w-full bg-[#0a0503] border-t border-white/5 pt-16 pb-8 px-6 md:px-12 font-body relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col pt-4 md:flex-row justify-between items-start md:items-center gap-10 md:gap-0 border-b border-white/10 pb-12 mb-8">
          
          {/* Left Side Info */}
          <div className="flex flex-col gap-4 max-w-sm">
            <h3 className="text-2xl font-headline font-semibold flex items-center gap-3 text-stone-100">
              <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(255,185,96,0.5)]">☕</span> 
              Svadistha Venture Inc
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed tracking-wide">
              Crafting premium instant tea & coffee premixes for everyday enjoyment.
            </p>
          </div>

          {/* Right Side Contact */}
          <div className="flex flex-col gap-5 text-stone-400 text-sm">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#ffb960] text-xl mt-0.5">location_on</span>
              <p className="leading-relaxed">
                SDX, S - 86, Opp, Navjivan Hospital,<br/>
                Gandhidham - Kutch - Gujarat.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+919979855660" 
                className="flex items-center gap-3 hover:text-white transition-colors group w-fit"
              >
                <span className="material-symbols-outlined text-[#ffb960] text-xl group-hover:scale-110 transition-transform">smartphone</span>
                <span className="tracking-widest font-mono text-base group-hover:underline underline-offset-4">+91 9979855660</span>
              </a>

              <a 
                href="tel:02836230766" 
                className="flex items-center gap-3 hover:text-white transition-colors group w-fit"
              >
                <span className="material-symbols-outlined text-[#ffb960] text-xl group-hover:scale-110 transition-transform">phone</span>
                <span className="tracking-widest font-mono text-base group-hover:underline underline-offset-4">02836-230766</span>
              </a>

              <a 
                href="mailto:info@svadistha.com" 
                className="flex items-center gap-3 hover:text-white transition-colors group w-fit"
              >
                <span className="material-symbols-outlined text-[#ffb960] text-xl group-hover:scale-110 transition-transform">mail</span>
                <span className="tracking-widest font-body text-base group-hover:underline underline-offset-4">info@svadistha.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-stone-500 text-xs tracking-wider">
            © {new Date().getFullYear()} Svadistha Venture Inc. All rights reserved.
          </p>
          <div className="mt-4 flex flex-col gap-1 text-[11px] tracking-widest uppercase font-semibold text-primary">
            <p>Website Designed & Developed by Uday Deore</p>
            <a 
              href="mailto:udaydeore7@gmail.com" 
              className="text-[#ffddb8] hover:text-white transition-colors lowercase font-mono tracking-normal text-xs"
            >
              udaydeore7@gmail.com
            </a>
          </div>
        </div>
      </footer>

      {/* Persistent Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        
        {/* Call Button */}
        <motion.a 
          href="tel:+919979855660"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
          whileHover={{ scale: 1.1, translateY: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_10px_20px_rgba(37,99,235,0.4)] flex items-center justify-center border border-blue-400/30 backdrop-blur-md transition-colors"
          title="Call Us Directly"
        >
          <span className="material-symbols-outlined text-2xl">phone_in_talk</span>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a 
          href="https://wa.me/919979855660"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.7 }}
          whileHover={{ scale: 1.1, translateY: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.4)] flex items-center justify-center border border-white/20 backdrop-blur-md transition-colors"
          title="Chat on WhatsApp"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" 
            alt="WhatsApp" 
            className="w-8 h-8 object-contain filter brightness-0 invert" 
          />
        </motion.a>

      </div>
    </>
  );
};
