import React, { useState } from 'react';
import Stepper from '../../components/booking/Stepper';
import Step1DateTime from '../../components/booking/Step1DateTime';
import Step2Type from '../../components/booking/Step2Type';
import Step3Payment from '../../components/booking/Step3Payment';
import Step4Success from '../../components/booking/Step4Success';
import BookingSidebar from '../../components/booking/BookingSidebar';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  // نحن نستخدم step و setStep هنا
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState({
    date: "17 جمادي الأولى، 12:00 م",
    type: "video",
    paymentMethod: "card"
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  
  // دالة إعادة التعيين للخطوة الأولى
  const resetToFirstStep = () => setStep(1);

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={() => step === 1 ? navigate(-1) : prevStep()} 
            className="text-gray-500 flex items-center gap-2 hover:text-gray-800"
          > 
            ← العودة 
          </button>
        </div>
        
        <div className="text-right mb-8">
          <h1 className="text-2xl font-bold text-gray-800">حجز استشارة</h1>
          <p className="text-sm text-gray-500">أكمل البيانات التالية لحجز موعدك</p>
        </div>

        {/* مؤشر الخطوات */}
        <Stepper currentStep={step} />

        <div className="flex flex-col lg:flex-row gap-8 mt-12 items-start">
          {/* Main Content Area - منطقة المحتوى المتغير */}
          <div className="flex-1 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm min-h-[500px] w-full">
            {step === 1 && <Step1DateTime onNext={nextStep} />}
            {step === 2 && <Step2Type onNext={nextStep} onPrev={prevStep} />}
            {step === 3 && <Step3Payment onNext={nextStep} onPrev={prevStep} />}
            
            {/* التعديل الصحيح هنا: مررنا دالة resetToFirstStep للمكون */}
            {step === 4 && <Step4Success onReset={resetToFirstStep} />}
          </div>

          {/* Sidebar - يظهر فقط في أول 3 خطوات */}
          {step < 4 && <BookingSidebar bookingDetails={bookingData} />}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;