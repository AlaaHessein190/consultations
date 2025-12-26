import React from 'react';
// 1. استيراد Link من مكتبة التوجيه
import { Link, useNavigate,} from 'react-router-dom';
import { FaArrowRight, FaBriefcase } from 'react-icons/fa6';
const PageHeader = () => {
const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#5B4DFF] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
           <FaBriefcase className="text-white w-5 h-5" />
        </div>
        <div className="text-left hidden sm:block">
          <h1 className="text-gray-800 font-bold text-lg leading-tight">بوابة المستشارين</h1>
          <p className="text-gray-400 text-xs">منصة استشاراتي</p>
        </div>
        
      </div>

      {/* 2. تحويل الزر إلى رابط */}
      {/* تأكدي أن "/" هو مسار الصفحة الرئيسية عندك */}
      <button
        onClick={() => navigate (-1)}
        className="text-gray-600 text-sm font-medium hover:text-gray-900 flex items-center gap-2 transition-colors"
      >
        <FaArrowRight className="w-4 h-4" />
        العودة 
      </button>

    </header>
  );
};

export default PageHeader;