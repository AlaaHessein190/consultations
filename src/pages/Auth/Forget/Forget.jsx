import React from "react";
import { FaEnvelope } from "react-icons/fa";
import logo from "../../../assets/mo.png"; 
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 font-sans px-4">
      {/* Logo + Title */}
       <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2">
                <img
                  src={logo}
                  alt="شعار منصة استشاراتي"
                  className="w-20 h-20 object-contain mt-5"
                />
                <div className="text-right">
                  <h1 className="text-2xl font-semibold text-gray-800 leading-tight">
                    استشاراتي
                  </h1>
                  <p className="text-[12px] text-gray-500 tracking-widest">
                    ESTISHARATI
                  </p>
                </div>
              </div>
        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          نسيت كلمة المرور؟
        </h2>
        <p className="text-gray-500 text-sm mt-1">
        </p>
      </div>

      {/* Box */}
      <div className="bg-white shadow-lg rounded-2xl w-full sm:w-[400px] p-6">
        <label className="block mb-1 text-sm font-medium text-gray-700 text-right">
          البريد الإلكتروني
        </label>
        <div className="relative mb-4">
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 text-left focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition">
          إرسال رابط إعادة التعيين
        </button>

        <div className="text-center mt-4">
       
        </div>
      </div>
       <div className="text-center mt-4">
        <Link
            to="/login"
            className="text-gray-600 text-sm hover:underline"
          >
            ← العودة إلى تسجيل الدخول
          </Link>
        </div>
        
    </div>
  );
}
