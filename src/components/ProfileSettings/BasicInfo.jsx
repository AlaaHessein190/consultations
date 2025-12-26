import React from "react";
import { FaCamera, FaPlus, FaTimes } from "react-icons/fa";

const BasicInfo = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-xl font-bold text-gray-800 mb-6">المعلومات الأساسية</h2>
      
      {/* الصورة الشخصية */}

      <div className="flex flex-col md:flex-row items-center gap-6 mb-8 ">

        <div className="relative order-1 md:order-1">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm">
             <img src="https://i.pravatar.cc/300?u=a042581f4e29026704d" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <button className="absolute bottom-1 right-1 bg-gray-900 text-white p-2 rounded-full hover:bg-black transition-colors">
            <FaCamera size={14} />
          </button>
        </div>
        <div className="text-center md:text-right order-2 md:order-2">
            <h3 className="font-bold text-gray-700">الصورة الشخصية</h3>
            <p className="text-sm text-gray-500 mb-3">صورة احترافية واضحة تساعد العملاء على التعرف عليك</p>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition">
                تحميل صورة جديدة
            </button>
        </div>
        
      </div>

      {/* الحقول */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        
        <div className="md:col-span-1">
            <label className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل *</label>
            <input type="text" defaultValue="د. أحمد السيد" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition text-right" />
        </div>
        <div className="md:col-span-1">
            <label className="block text-sm font-bold text-gray-700 mb-2">المسمى الوظيفي *</label>
            <input type="text" defaultValue="استشاري قانوني معتمد" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition text-right" />
        </div>
        
        <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">التخصص الرئيسي *</label>
            <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition text-right">
                <option>القانون التجاري</option>
                <option>الاستشارات المالية</option>
            </select>
        </div>

        <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">نبذة تعريفية *</label>
            <textarea 
                rows="4" 
                placeholder="اكتب نبذة تعريفية مختصرة عنك وعن خبراتك..." 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition resize-none text-right"
            ></textarea>
            <div className="text-left text-xs text-gray-400 mt-1">76 / 500 حرف</div>
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">رقم الجوال *</label>
            <input type="text" defaultValue="+966 50 123 4567" dir="ltr" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition" />
        </div>
        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني *</label>
            <input type="email" defaultValue="ahmed.elsayed@example.com" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition text-right" />
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">الموقع *</label>
            <input type="text" defaultValue="الرياض، السعودية" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition text-right" />
        </div>
        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">سنوات الخبرة *</label>
            <input type="number" defaultValue="15" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition text-right" />
        </div>

        <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">اللغات</label>
            <div className="flex flex-wrap items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl p-2 min-h-[50px]">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm flex items-center gap-2">
                    الإنجليزية <FaTimes className="text-gray-500 cursor-pointer hover:text-red-500" />
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm flex items-center gap-2">
                    العربية <FaTimes className="text-gray-500 cursor-pointer hover:text-red-500" />
                </span>
                <input type="text" placeholder="أضف لغة جديدة" className="bg-transparent outline-none flex-1 min-w-[120px] px-2 text-right" />
            </div>
            <button className="mt-3 flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-black transition">
                <FaPlus size={10} /> إضافة
            </button>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;