import React from "react";
import { FaTimes, FaWallet } from "react-icons/fa";

const WithdrawModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[30px] w-full max-w-md p-6 relative shadow-2xl animate-fadeIn">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 left-6 text-gray-400 hover:text-gray-600">
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">سحب أرباح</h2>
            <p className="text-gray-500 text-sm">اطلب سحب أرباحك إلى حسابك البنكي أو محفظتك الرقمية</p>
        </div>

        {/* Current Balance */}
        <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full text-green-600">
                   <FaWallet />
                </div>
                <span className="text-gray-600 text-sm font-medium">الرصيد المتاح للسحب</span>
            </div>
            <span className="text-xl font-bold text-green-700 dir-ltr">9,200 ج.م</span>
        </div>

        {/* Form */}
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">المبلغ المطلوب *</label>
                <input type="text" placeholder="أدخل المبلغ" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition" />
                <p className="text-xs text-gray-400 mt-1">الحد الأدنى: 500 ج.م</p>
            </div>

            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">طريقة السحب *</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition appearance-none">
                    <option>اختر طريقة السحب</option>
                    <option>حساب بنكي - البنك الأهلي</option>
                    <option>STC Pay</option>
                </select>
            </div>
        </div>

        {/* Warning */}
        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-3 flex gap-2 mt-6">
             <span className="text-yellow-600 text-lg">⚠️</span>
             <p className="text-xs text-yellow-700 leading-relaxed">
                 سيتم معالجة طلب السحب خلال 3-5 أيام عمل. ستصلك رسالة تأكيد عند اكتمال التحويل.
             </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-8">
             <button className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-black transition">تأكيد السحب</button>
             <button onClick={onClose} className="flex-1 bg-white border border-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-50 transition">إلغاء</button>
        </div>

      </div>
    </div>
  );
};

export default WithdrawModal;