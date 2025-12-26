import React from 'react';
// تصحيح: استبدال FaCheckCircle بـ FaCircleCheck
import { FaStar, FaCircleCheck, FaArrowLeft } from 'react-icons/fa6';

const BenefitsCard = () => {
  const benefits = [
    'إدارة مواعيدك بمرونة كاملة',
    'استقبال الحجوزات فوراً',
    'نظام دفع آمن ومضمون',
    'تقارير وإحصائيات تفصيلية',
    'دعم فني على مدار الساعة'
  ];

  return (
    <div className="bg-gradient-to-br from-[#2563EB] to-[#7C3AED] p-8 rounded-2xl text-white shadow-lg relative overflow-hidden group">
      <div className="absolute top-4 left-4 bg-white/20 p-2 rounded-lg backdrop-blur-sm">
        <FaStar className="w-6 h-6 text-white" />
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-1">لماذا تنضم إلينا؟</h2>
        <p className="text-blue-100 text-sm mb-6">مزايا حصرية للمستشارين</p>

        <ul className="space-y-4 mb-8">
          {benefits.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="bg-white/20 p-1 rounded-full">
                {/* استخدام الاسم الجديد للأيقونة */}
                <FaCircleCheck className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg">
          تعرف على المزيد
          <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default BenefitsCard;