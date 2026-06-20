import React, { useEffect, useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { HowToPrepare } from './components/sections/HowToPrepare';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { BulkOrders } from './components/sections/BulkOrders';
import { PremixSecret } from './components/sections/PremixSecret';
import { AboutUs } from './components/sections/AboutUs';
import { Certifications } from './components/sections/Certifications';
import { EnquirySection } from './components/sections/EnquirySection';
import { QuoteBanner } from './components/sections/QuoteBanner';
import { ProductList } from './components/products/ProductList';
import { AdminDashboard } from './components/admin/AdminDashboard';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  // Admin View Override
  if (isAdmin) {
    return <AdminDashboard />;
  }

  // Standard Public Site View
  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-primary selection:text-on-primary font-body overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <WhyChooseUs />
        <ProductList />
        <HowToPrepare />
        <BulkOrders />
        <PremixSecret />
        <AboutUs />
        <Certifications />
        <EnquirySection />
        <QuoteBanner />
      </main>

      <Footer />
    </div>
  );
};

export default App;
