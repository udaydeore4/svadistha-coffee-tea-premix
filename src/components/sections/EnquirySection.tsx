import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export const EnquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    productInterest: '',
    flavour: '',
    quantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    let value = e.target.value;
    
    // Strict 10-digit enforcement for phone numbers
    if (e.target.name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Connect to Firestore and save the data
      await addDoc(collection(db, 'enquiries'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new'
      });

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', city: '', productInterest: '', flavour: '', quantity: '', message: '' });
    } catch (error: any) {
      console.error("Error submitting enquiry: ", error);
      setSubmitStatus('error');
      alert(`Database Connection Failed! Please visit: https://console.firebase.google.com/project/svadistha-a7dad/firestore and click 'Create Database' in Test Mode.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-[#090604] relative overflow-hidden" id="enquiry">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-display-sm md:text-5xl font-headline text-stone-100 mb-4">
            Order / <span className="text-primary italic">Enquiry</span>
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#ffb960] to-transparent mx-auto mb-6"></div>
          <p className="text-stone-400 font-body">
            Fill in your details and we'll get back to you shortly.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="bg-[#110905] border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle top glow */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Top Row: Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#ffb960] font-headline text-sm font-medium">Name *</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-[#0a0503] border border-white/10 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-stone-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#ffb960] font-headline text-sm font-medium">Phone Number *</label>
                <input 
                  required
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  minLength={10}
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile number"
                  className="bg-[#0a0503] border border-white/10 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-stone-600"
                />
              </div>
            </div>

            {/* City */}
            <div className="flex flex-col gap-2">
              <label className="text-[#ffb960] font-headline text-sm font-medium">City *</label>
              <input 
                required
                type="text" 
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Your city"
                className="bg-[#0a0503] border border-white/10 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-stone-600"
              />
            </div>

            {/* Product Interest */}
            <div className="flex flex-col gap-2">
              <label className="text-[#ffb960] font-headline text-sm font-medium">Product Interest *</label>
              <select 
                required
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
                className="bg-[#0a0503] border border-white/10 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-stone-600">Select option</option>
                <option value="Coffee Premix">Coffee Premix</option>
                <option value="Tea Premix">Tea Premix</option>
                <option value="Both">Both</option>
              </select>
            </div>

            {/* Flavour */}
            <div className="flex flex-col gap-2">
              <label className="text-[#ffb960] font-headline text-sm font-medium">Flavour Selection</label>
              <input 
                type="text" 
                name="flavour"
                value={formData.flavour}
                onChange={handleChange}
                placeholder="e.g. Cappuccino, Masala Chai"
                className="bg-[#0a0503] border border-white/10 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-stone-600"
              />
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-2">
              <label className="text-[#ffb960] font-headline text-sm font-medium">Quantity Requirement</label>
              <input 
                type="text" 
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 50 sachets, 1 kg"
                className="bg-[#0a0503] border border-white/10 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-stone-600"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[#ffb960] font-headline text-sm font-medium">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Any additional details..."
                className="bg-[#0a0503] border border-white/10 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-stone-600 resize-none"
              ></textarea>
            </div>

            {/* Submit Status Feedback */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-center font-body">
                Thank you! Your enquiry has been sent successfully. We will contact you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-center font-body">
                There was an error sending your enquiry. Please try again.
              </div>
            )}

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 mt-6 bg-[#d98b42] hover:bg-[#ffb960] text-[#0a0503] font-headline font-bold text-lg rounded-xl transition-colors tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry →'}
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
};
