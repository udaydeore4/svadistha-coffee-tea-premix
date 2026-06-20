import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Secret query parameter check (?admin=portal)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'portal') {
      setIsLoginModalOpen(true);
      // Clean up the URL search params so the secret is not displayed in the address bar
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'Svadistha@9960') {
      localStorage.setItem('isAdmin', 'true');
      window.location.reload();
    } else {
      setLoginError(true);
    }
  };

  return (
    <>
      <nav className={`fixed left-0 right-0 z-40 flex justify-between items-center px-6 md:px-10 py-4 
        ${scrolled ? 'bg-stone-900/80' : 'bg-stone-900/40'} 
        backdrop-blur-xl border border-stone-100/10 rounded-full mx-auto w-[95%] max-w-5xl shadow-2xl shadow-stone-950/50 font-headline tracking-wider text-sm uppercase transition-all duration-300
        ${scrolled ? 'top-2' : 'top-6'}`}>
        <div className="text-xl md:text-2xl font-headline italic text-primary font-bold tracking-tight">Svadistha</div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a className="text-stone-300 hover:text-primary transition-colors duration-300 hover:scale-105" href="#products">Products</a>
          <a className="text-stone-300 hover:text-primary transition-colors duration-300 hover:scale-105" href="#about-us">About Us</a>
          <a className="text-stone-300 hover:text-primary transition-colors duration-300 hover:scale-105" href="#enquiry">Enquiry</a>
        </div>
        
        <a href="#enquiry" className="hidden md:block">
           <Button variant="primary">Order Now</Button>
        </a>
        <button className="md:hidden text-primary material-symbols-outlined">menu</button>
      </nav>

      {/* Admin Login Modal overlay */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#110905] border border-white/10 p-8 rounded-3xl shadow-2xl w-full max-w-sm relative overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsLoginModalOpen(false)}
                className="absolute top-4 right-4 text-stone-500 hover:text-white transition-colors"
              >
                ✕
              </button>

              <h3 className="text-2xl font-headline text-stone-100 mb-6 font-bold">Admin <span className="text-primary italic">Access</span></h3>
              
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Username" 
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full bg-[#0a0503] border border-white/10 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-primary/50"
                  required 
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-[#0a0503] border border-white/10 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-primary/50"
                  required 
                />
                {loginError && <p className="text-red-400 text-xs font-body">Invalid credentials.</p>}
                
                <button 
                  type="submit" 
                  className="w-full py-3 mt-4 bg-primary hover:bg-[#ffb960] text-[#0a0503] font-headline font-bold rounded-xl transition-colors"
                >
                  Login
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
