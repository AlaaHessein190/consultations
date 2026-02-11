import React from 'react';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WaitingApproval = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center" dir="rtl">
      <div className="bg-white p-10 rounded-[40px] shadow-lg max-w-md border border-gray-100">
        <FaClock className="text-6xl text-blue-500 mx-auto mb-6 animate-bounce" />
        <h1 className="text-2xl font-black text-gray-800 mb-4">طلبك قيد المراجعة</h1>
        <p className="text-gray-500 mb-8 leading-relaxed font-medium">
          شكراً لتسجيلك معنا. حسابك الآن بانتظار مراجعة وتفعيل الإدارة. 
          بمجرد الموافقة، ستتمكن من تسجيل الدخول والوصول إلى لوحة التحكم الخاصة بك.
        </p>
        <Link to="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
};

export default WaitingApproval;