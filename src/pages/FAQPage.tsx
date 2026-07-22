import React from 'react';
import FAQSection from '../components/faq/FAQSection';
import Footer from '../components/ui/Footer';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Add some top padding to account for the fixed navbar */}
      <div className="pt-20">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
