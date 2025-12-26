import React from 'react';
// استبدال Lucide بـ React Icons
import { FaShieldHalved } from 'react-icons/fa6';

const SecurityFooter = () => {
  return (
    <div className="bg-[#F0FDF4] border border-[#DCFCE7] p-4 rounded-xl flex items-center justify-between">
      <div className="text-right">
        <h4 className="text-[#166534] font-bold text-sm mb-1">تسجيل دخول آمن ومشفر</h4>
        <p className="text-[#15803d] text-xs">نحمي بياناتك بأحدث معايير الأمان والتشفير SSL 256-bit</p>
      </div>
      <div className="bg-[#DCFCE7] p-2 rounded-lg">
        {/* استخدام أيقونة الدرع */}
        <FaShieldHalved className="w-6 h-6 text-[#166534]" />
      </div>
    </div>
  );
};

export default SecurityFooter;