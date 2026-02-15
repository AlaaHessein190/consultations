import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline'; 

const ConsultationCard = ({ type, description, duration, price, icon: Icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      {/* عرض الأيقونة الحقيقية أو أيقونة افتراضية */}
      <div className="bg-indigo-50 p-3 rounded-full mb-3">
        {Icon ? <Icon className="w-8 h-8 text-indigo-600" /> : <ClockIcon className="w-8 h-8 text-indigo-600" />}
      </div>
      
      <h3 className="text-lg font-bold text-gray-800 mb-1">{type || "جلسة استشارية"}</h3>
      <p className="text-xs text-gray-500 mb-4 line-clamp-2">{description || "استشارة مهنية متخصصة"}</p>
      
      <div className="flex items-center text-gray-600 text-sm mb-3 font-medium">
        <ClockIcon className="w-4 h-4 ml-1" />
        <span>{duration || "30 دقيقة"}</span>
      </div>
      
      <p className="text-xl font-black text-indigo-600 mb-4">{price} ج.م</p>
      
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 w-full text-sm font-bold transition-all active:scale-95">
        احجز الآن
      </button>
    </div>
  );
};

export default ConsultationCard;