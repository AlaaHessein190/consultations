import React from 'react';

// استدعاء المكونات من مجلد واحد
import PageHeader from '../../components/ConsultantLogin/PageHeader';
import StatsGrid from '../../components/ConsultantLogin/StatsGrid';
import BenefitsCard from '../../components/ConsultantLogin/BenefitsCard';
import Testimonial from '../../components/ConsultantLogin/Testimonial';
import SecurityFooter from '../../components/ConsultantLogin/SecurityFooter';
import LoginBox from '../../components/ConsultantLogin/LoginBox'; // هنا الفورم معهم

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FD] font-sans" >
      {/* Global Font Style */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap'); body { font-family: 'Cairo', sans-serif; }`}
      </style>

      <PageHeader />

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row gap-8 justify-center items-start">
         {/* Right Form Section */}
        <LoginBox />
        {/* Left Content Section */}
        <div className="w-full lg:w-[55%] space-y-6">
          <StatsGrid />
          <BenefitsCard />
          <Testimonial />
          <SecurityFooter />
        </div>

       

      </main>
    </div>
  );
};

export default LoginPage;