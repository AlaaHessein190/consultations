import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, MapPinIcon, CalendarIcon } from '@heroicons/react/20/solid';

const ConsultantCard = ({ id, name, specialty, rating, reviews, price, imageUrl }) => {
  // حالة لمراقبة فشل تحميل الصورة
  const [imageError, setImageError] = useState(false);

  const displayName = name || "مستشار";
  
  // دالة متطورة لاستخراج الحروف وتنظيف الاسم من (د. ، _ ، -)
  const getInitials = (str) => {
    // إزالة لقب د. وتنظيف الشرطات والرموز وتحويلها لمسافات
    const clean = str.replace(/^د\.\s*|^د\s*/, '').replace(/[_-]/g, ' ').trim();
    const words = clean.split(/\s+/);
    
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return clean.substring(0, 2).toUpperCase();
  };

  // التحقق هل الرابط صالح مبدئياً
  const isValidUrl = imageUrl && imageUrl !== "" && imageUrl !== "null" && imageUrl !== "undefined" && imageUrl.includes('/');

  return (
    <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full" dir="rtl">
      
      {/* قسم الصورة أو الحروف */}
      <div className="relative h-64 w-full bg-[#F1F5F9] flex items-center justify-center overflow-hidden">
        
        {/* إذا كان الرابط صالحاً ولم يحدث خطأ في التحميل نعرض الصورة */}
        {isValidUrl && !imageError ? (
          <img 
            src={imageUrl} 
            alt={displayName} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            onError={() => setImageError(true)} // في حال فشل التحميل، سيتم تحويل العرض للحروف فوراً
          />
        ) : (
          /* في حال عدم وجود صورة أو فشل تحميلها، نعرض الحروف */
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#DBEAFE] to-[#EFF6FF]">
             <span className="text-[#3B82F6] text-6xl font-black select-none tracking-tighter">
                {getInitials(displayName)}
             </span>
          </div>
        )}
        
        {/* شارة معتمد */}
        <div className="absolute top-4 right-4 bg-[#00A78E] text-white text-[11px] font-bold px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-sm z-10">
           <span>معتمد</span>
           <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
           </svg>
        </div>
      </div>
      
      {/* محتوى البطاقة */}
      <div className="p-6 flex-1 flex flex-col items-start text-right w-full">
        {/* تنظيف الاسم المعروض أيضاً من الشرطات */}
        <h3 className="font-bold text-[24px] text-[#1E293B] mb-1">
            د. {displayName.replace(/[_-]/g, ' ')}
        </h3>
        <p className="text-[#3B82F6] text-[15px] font-bold mb-1">{specialty || "استشارية قانونية"}</p>
        <p className="text-[#94A3B8] text-[13px] mb-4">القانون التجاري</p>
        
        <div className="flex items-center gap-3 mb-4 w-full">
           <div className="flex items-center gap-1">
              <StarIcon className="w-5 h-5 text-[#FBBF24]" />
              <span className="text-[#1E293B] font-bold text-[14px]">{rating || 4.9}</span>
              <span className="text-[#94A3B8] text-[14px]">({reviews || 156})</span>
           </div>
           
           <div className="flex items-center gap-1 text-[#94A3B8]">
              <CalendarIcon className="w-5 h-5" />
              <span className="text-[14px] font-medium">320</span> 
           </div>
        </div>

        <div className="flex items-center gap-1 text-[#94A3B8] mb-6">
            <MapPinIcon className="w-5 h-5" />
            <span className="text-[14px] font-medium">الرياض</span>
        </div>

        <div className="w-full h-[1px] bg-[#F1F5F9] mb-6"></div>

        <div className="mt-auto w-full flex justify-between items-center">
           <div className="flex items-baseline gap-1">
              <span className="text-[28px] font-black text-[#1E293B]">{price || 300}</span>
              <span className="text-[13px] text-[#94A3B8] font-bold">ج.م</span>
           </div>

           <Link 
            to={`/ProfilePage/${id}`}
            className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-2.5 rounded-[16px] text-[14px] font-bold transition-all shadow-md shadow-blue-50"
           >
              عرض الملف
           </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultantCard;