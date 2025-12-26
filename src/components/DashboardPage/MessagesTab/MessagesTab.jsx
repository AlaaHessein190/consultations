import React from "react";
import { FaRegCommentAlt, FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

const MessagesTab = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm min-h-[450px] flex flex-col items-center justify-center text-center p-8 border border-gray-100">
      
      {/* الأيقونة الكبيرة */}
      <div className="mb-6">
        <FaRegCommentAlt className="text-gray-300 text-8xl" strokeWidth={0.5} />
      </div>

      {/* العنوان والوصف */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">جميع رسائلك</h2>
      <p className="text-gray-500 text-sm mb-8 font-medium">
        تواصل مع عملائك بشكل مباشر
      </p>

      {/* زر فتح الرسائل */}
      <Link
        to="/messages" 
        className="flex items-center gap-2 bg-blue-600 text-white px-10 py-3 rounded-2xl hover:bg-blue-700 transition-all duration-300 font-bold shadow-md hover:shadow-lg transform hover:-translate-y-1"
      >
        <FaCommentDots className="text-lg" />
        <span>فتح الرسائل</span>
      </Link>
      
    </div>
  );
};

export default MessagesTab;