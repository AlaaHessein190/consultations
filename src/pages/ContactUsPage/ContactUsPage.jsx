// pages/ContactPage.jsx
import React from 'react';
import Breadcrumbs from '../../components/ContactUspage/Breadcrumbs';
import ContactForm from '../../components/ContactUspage/ContactForm';
import AdditionalInfoSection from '../../components/ContactUspage/AdditionalInfoSection';
import LocationSection from '../../components/ContactUspage/LocationSection';
import ContactHero from '../../components/ContactUspage/ContactHero';


function ContactPage() {
  return (
    <div className="font-sans antialiased text-right bg-gray-50 min-h-screen" dir="rtl">
      <Breadcrumbs />
      <ContactHero />

      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <ContactForm />
        </div>
          <AdditionalInfoSection />
          
        

        
      </div>
      
      <LocationSection />
    </div>
  );
}

export default ContactPage;