import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft, FaCheck } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [customerSatisfaction, setCustomerSatisfaction] = useState(0);
  const [successfulConsultations, setSuccessfulConsultations] = useState(0);
  const [approvedAdvisors, setApprovedAdvisors] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });

    // Customer Satisfaction
    let csInterval = setInterval(() => {
      setCustomerSatisfaction((prev) => {
        if (prev < 98) return prev + 1;
        clearInterval(csInterval);
        return prev;
      });
    }, 20);

    // Successful Consultations
    let scInterval = setInterval(() => {
      setSuccessfulConsultations((prev) => {
        if (prev < 10000) return prev + 200;
        clearInterval(scInterval);
        return 10000;
      });
    }, 20);

    // Approved Advisors
    let aaInterval = setInterval(() => {
      setApprovedAdvisors((prev) => {
        if (prev < 500) return prev + 5;
        clearInterval(aaInterval);
        return 500;
      });
    }, 20);

    return () => {
      clearInterval(csInterval);
      clearInterval(scInterval);
      clearInterval(aaInterval);
    };
  }, []);

  const handleBrowseConsultants = () => {
  navigate('/consultants'); // هنا نقول لـ React Router: اذهب إلى المسار '/consultants'
};
  return (
    <div className="space-y-6 px-4 sm:px-6 md:px-0">
      {/* ✅ المربع الصغير */}
      <div
        className="inline-flex gap-2 items-center bg-white rounded-2xl p-2 w-max shadow-sm"
        data-aos="fade-down"
      >
        <div className="w-6 h-6 rounded-full border border-green-600 flex items-center justify-center">
          <FaCheck className="text-green-600" />
        </div>
        <p className="text-[#314158] text-sm sm:text-base">أكثر من 500 مستشار معتمد</p>
      </div>

      {/* ✅ العنوان */}
      <h1
        className="text-secondColor text-2xl sm:text-4xl md:text-[60px] font-bold leading-snug md:leading-tight"
        data-aos="fade-right"
      >
        <span className="text-black">استشر خبيراً الآن:</span>{' '}
        <br className="hidden sm:block" />
        قرارات مضمونة، نتائج سريعة
      </h1>

      {/* ✅ الوصف */}
      <p
        className="text-gray-700 text-sm sm:text-base md:text-lg max-w-lg"
        data-aos="fade-up"
      >
        منصة تجمع أفضل المستشارين المعتمدين بشروط صارمة في جميع التخصصات لمساعدتك في اتخاذ الخطوة الصحيحة
      </p>

      {/* ✅ الأزرار */}
      <div
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
        data-aos="zoom-in"
      >
        <button className="cursor-pointer w-full sm:w-auto p-3 border rounded-2xl hover:bg-secondColor hover:text-white duration-200 flex items-center justify-center gap-2" onClick={handleBrowseConsultants}>
          تصفح المستشارين <FaArrowAltCircleLeft />
        </button>
        <button className="cursor-pointer w-full sm:w-auto p-3 bg-secondColor rounded-2xl text-white hover:bg-white hover:text-black hover:border duration-200" >
          كيف نعمل؟
        </button>
      </div>

      {/* ✅ الأرقام (عداد) */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center pt-4 sm:pt-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-secondColor">
            {customerSatisfaction}%
          </h3>
          <p className="text-[#314158] text-sm sm:text-base">رضا العملاء</p>
        </div>
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-secondColor">
            +{successfulConsultations.toLocaleString()}
          </h3>
          <p className="text-[#314158] text-sm sm:text-base">استشارة ناجحة</p>
        </div>
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-secondColor">
            +{approvedAdvisors}
          </h3>
          <p className="text-[#314158] text-sm sm:text-base">مستشار معتمد</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
