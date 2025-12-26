import React from 'react';
// تم تغيير الاستيراد هنا
import { FaStar, FaBriefcase, FaUsers } from 'react-icons/fa6';

const Testimonial = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 bg-[#5B4DFF] rounded-full flex items-center justify-center text-white font-bold text-lg">
            د.م
          </div>
          <div>
            <h4 className="font-bold text-gray-800">د. محمد أحمد</h4>
            <p className="text-xs text-gray-500">مستشار مالي</p>
            <div className="flex text-yellow-400 mt-1">
               {/* FaStar هي أيقونة النجمة الممتلئة */}
               {[1,2,3,4,5].map(i => <FaStar key={i} className="w-3 h-3" />)}
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        "منصة استشاراتي غيرت حياتي المهنية! أدير وقتي بمرونة كاملة وأحصل على حجوزات مستمرة. النظام سهل والدعم ممتاز."
      </p>
      <div className="flex gap-3 border-t border-gray-100 pt-4">
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md flex items-center gap-1">
          <FaBriefcase className="w-3 h-3" /> +2 سنوات في المنصة
        </span>
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md flex items-center gap-1">
          <FaUsers className="w-3 h-3" /> +500 عميل
        </span>
      </div>
    </div>
  );
};

export default Testimonial;