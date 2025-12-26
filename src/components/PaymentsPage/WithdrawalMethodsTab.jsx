import React from "react";
import { FaPlus, FaTrashAlt, FaPen, FaInfoCircle, FaUniversity, FaWallet } from "react-icons/fa";

const WithdrawalMethodsTab = () => {
  return (
    <div className="space-y-6">
      
      <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">طرق السحب</h3>
          <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-gray-600 hover:bg-white bg-gray-50 text-sm font-medium transition">
             <FaPlus /> إضافة طريقة جديدة
          </button>
      </div>
      <p className="text-gray-500 text-sm -mt-4">أضف وأدر طرق سحب الأرباح الخاصة بك</p>

      {/* Methods List */}
      <div className="space-y-4">
        {/* Method 1: Bank */}
        <div className="bg-white border border-blue-500 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                    <FaUniversity size={24} />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h4 className="font-bold text-gray-800">حساب بنكي - البنك الأهلي</h4>
                        <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full">موثّق</span>
                        <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full">افتراضي</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1 dir-ltr text-right">SA** **** **** **1234</p>
                </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto justify-end">
                <button className="px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">تعديل</button>
                <button className="px-4 py-2 rounded-xl text-sm text-red-500 hover:bg-red-50">حذف</button>
            </div>
        </div>

        {/* Method 2: Wallet */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl">
                    <FaWallet size={24} />
                </div>
                <div>
                     <div className="flex items-center gap-2">
                        <h4 className="font-bold text-gray-800">محفظة رقمية - STC Pay</h4>
                        <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full">موثّق</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1 dir-ltr text-right">+20109 *** **67</p>
                </div>
            </div>
             <div className="flex gap-2 w-full md:w-auto justify-end">
                <button className="px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">تعديل</button>
                <button className="px-4 py-2 rounded-xl text-sm text-red-500 hover:bg-red-50">حذف</button>
            </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-3">
         <FaInfoCircle className="text-blue-500 mt-1 shrink-0" size={20} />
         <div className="text-sm text-blue-800 space-y-1">
            <h5 className="font-bold mb-2">معلومات هامة</h5>
            <ul className="list-disc list-inside space-y-1 text-blue-700/80">
                <li>يتم معالجة طلبات السحب خلال 3-5 أيام عمل</li>
                <li>الحد الأدنى للسحب: 500 ر.س</li>
                <li>عمولة المنصة: 10% من قيمة كل جلسة</li>
                <li>يتم تحويل الأرباح بعد انتهاء الجلسة بـ 48 ساعة</li>
            </ul>
         </div>
      </div>

    </div>
  );
};

export default WithdrawalMethodsTab;