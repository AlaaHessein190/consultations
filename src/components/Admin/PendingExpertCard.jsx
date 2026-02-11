import React, { useState } from 'react';
import { FaCheck, FaTimes, FaFilePdf, FaUserCircle, FaExternalLinkAlt } from 'react-icons/fa';

const PendingExpertCard = ({ expert, onAccept, onReject }) => {
  // حالة لمتابعة إذا كانت الصورة المحملة تالفة (Broken Link)
  const [isImgError, setIsImgError] = useState(false);

  // استخراج أول حرفين من اسم المستخدم
  const getInitials = () => {
    if (!expert.username) return "؟؟";
    return expert.username.slice(0, 2).toUpperCase();
  };

  // معالجة رابط الـ PDF (التأكد من وجود رابط حقيقي)
  const cvUrl = expert.hasExpertProfile?.cv?.url || expert.hasExpertProfile?.cv;
  const hasValidCv = typeof cvUrl === 'string' && cvUrl.startsWith('http');

  return (
    <div className="bg-white rounded-[35px] p-6 shadow-sm border border-gray-50 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-lg transition-all duration-300 group">
      
      {/* المعلومات الشخصية */}
      <div className="flex items-center gap-5 flex-1 text-right w-full">
        <div className="relative">
          {/* عرض الصورة فقط إذا كان الرابط موجوداً ولم يحدث فيه خطأ تحميل */}
          {(expert.avatar?.url && !isImgError) ? (
            <img 
              src={expert.avatar.url} 
              className="w-16 h-16 rounded-2xl object-cover shadow-sm" 
              alt={expert.username}
              onError={() => setIsImgError(true)} // في حال فشل تحميل الصورة، يتم تفعيل الحالة لإظهار الحروف
            />
          ) : (
            // المربع الذي يظهر فيه أول حرفين من الاسم في حال غياب الصورة
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl border border-blue-100 shadow-sm">
              {getInitials()}
            </div>
          )}
          <span className="absolute -top-1 -right-1 bg-blue-500 w-4 h-4 rounded-full border-2 border-white"></span>
        </div>
        <div>
          <h3 className="text-xl font-black text-gray-800">{expert.username}</h3>
          <p className="text-blue-600 font-bold text-sm">{expert.hasExpertProfile?.specialty || "تخصص غير محدد"}</p>
          <p className="text-gray-400 text-xs mt-0.5">{expert.email}</p>
        </div>
      </div>

      {/* رابط السيرة الذاتية */}
      <div className="flex-1 text-center w-full lg:w-auto">
        {hasValidCv ? (
          <a 
            href={cvUrl} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all"
          >
            <FaFilePdf /> مراجعة الـ PDF <FaExternalLinkAlt className="text-[10px]" />
          </a>
        ) : (
          <div className="bg-gray-50 text-gray-400 px-4 py-2 rounded-xl text-xs border border-gray-100 italic inline-block">
             لا توجد سيرة ذاتية صالحة
          </div>
        )}
      </div>

      {/* أزرار الإجراءات */}
      <div className="flex items-center gap-3 w-full lg:w-auto">
        <button 
          onClick={() => onAccept(expert._id)}
          className="flex-1 lg:flex-none bg-green-600 text-white px-8 py-3 rounded-xl flex items-center justify-center gap-2 font-bold hover:bg-green-700 shadow-lg shadow-green-100 transition-all active:scale-95"
        >
          <FaCheck /> قبول
        </button>
        <button 
          onClick={() => onReject(expert._id)}
          className="flex-1 lg:flex-none bg-white text-red-500 border border-red-100 px-8 py-3 rounded-xl flex items-center justify-center gap-2 font-bold hover:bg-red-50 transition-all shadow-sm"
        >
          <FaTimes /> رفض
        </button>
      </div>
    </div>
  );
};

export default PendingExpertCard;