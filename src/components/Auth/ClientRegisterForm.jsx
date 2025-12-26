import React, { useState, useEffect } from 'react';
import { useFormikContext } from 'formik';
import { toast } from 'react-hot-toast';
import {
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaUser,
  FaEye,
  FaEyeSlash,
  FaGoogle, FaFacebookF,
  FaCheck, FaTimes
} from "react-icons/fa";

export default function ClientRegisterForm({ showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword }) {
  const formik = useFormikContext(); 

  // حالة للتحكم في ظهور قائمة الشروط
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  // كود إظهار الخطأ في توست (Toast)
  useEffect(() => {
    if (formik.submitCount > 0 && !formik.isValid) {
      const firstError = Object.values(formik.errors)[0];
      if (firstError) {
        toast.error(firstError, {
          position: "top-center",
          duration: 3000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            fontSize: '14px',
            direction: 'rtl'
          },
        });
      }
    }
  }, [formik.submitCount, formik.isValid, formik.errors]); 

  // حالة شروط كلمة المرور
  const [passwordCriteria, setPasswordCriteria] = useState({
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpecial: false,
  });

  useEffect(() => {
    const password = formik.values.password || '';
    setPasswordCriteria({
      hasUpper: /[A-Z]/.test(password),
      hasLower: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#\$%\^&\*\(\)\-_=+\[\]\{\};:'",.<>\/?\\|`~]/.test(password),
    });
  }, [formik.values.password]);

  return (
    <div className="animate-fade-in text-right">
      {/* اسم المستخدم */}
      <div className="mb-4">
        <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-700">اسم المستخدم</label>
        <div className="relative">
          <FaUser className="absolute right-3 top-3 text-gray-400" />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="أدخل اسم المستخدم"
            className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
        </div>
        {formik.touched.username && formik.errors.username ? (
          <p className="text-red-500 text-xs mt-1">{formik.errors.username}</p>
        ) : null}
      </div>

      {/* البريد والهاتف */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">البريد الإلكتروني</label>
          <div className="relative">
            <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@domain.com"
              className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">رقم الهاتف</label>
          <div className="relative">
            <FaPhoneAlt className="absolute right-3 top-3 text-gray-400" />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+966 xx xxx xxxx"
              className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </div>
          {formik.touched.phone && formik.errors.phone ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
          ) : null}
        </div>
      </div>

      {/* الجنس */}
      <div className="mb-4">
        <label htmlFor="gender" className="block mb-1 text-sm font-medium text-gray-700">الجنس</label>
        <select
          id="gender"
          name="gender"
          className="w-full border border-gray-300 rounded-lg py-2 pr-3 pl-3 focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gender}
        >
          <option value="">اختر الجنس</option>
          <option value="male">ذكر</option>
          <option value="female">أنثى</option>
          <option value="other">أخرى</option>
        </select>
        {formik.touched.gender && formik.errors.gender ? (
          <p className="text-red-500 text-xs mt-1">{formik.errors.gender}</p>
        ) : null}
      </div>

      {/* كلمة المرور */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <div>
          <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">كلمة المرور</label>
          <div className="relative">
            <FaLock className="absolute right-3 top-3 text-gray-400" />
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="أدخل كلمة المرور"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={formik.handleChange}
              // التعديل هنا لإخفاء الشروط عند الخروج من الحقل
              onBlur={(e) => {
                formik.handleBlur(e);
                setIsPasswordFocused(false);
              }}
              // إظهار الشروط عند الوقوف على الحقل
              onFocus={() => setIsPasswordFocused(true)}
              value={formik.values.password}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 left-3 flex items-center cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {/* التعديل: تظهر القائمة فقط عندما يكون الحقل نشطاً */}
          {isPasswordFocused && (
            <ul className="text-xs mt-2 space-y-1 bg-gray-50 p-2 rounded-lg border border-gray-100 animate-fade-in">
              <li className={passwordCriteria.hasUpper ? "text-green-600 flex items-center gap-1" : "text-red-500 flex items-center gap-1"}>
                {passwordCriteria.hasUpper ? <FaCheck /> : <FaTimes />} حرف كبير (A-Z)
              </li>
              <li className={passwordCriteria.hasLower ? "text-green-600 flex items-center gap-1" : "text-red-500 flex items-center gap-1"}>
                {passwordCriteria.hasLower ? <FaCheck /> : <FaTimes />} حرف صغير (a-z)
              </li>
              <li className={passwordCriteria.hasNumber ? "text-green-600 flex items-center gap-1" : "text-red-500 flex items-center gap-1"}>
                {passwordCriteria.hasNumber ? <FaCheck /> : <FaTimes />} رقم (0-9)
              </li>
              <li className={passwordCriteria.hasSpecial ? "text-green-600 flex items-center gap-1" : "text-red-500 flex items-center gap-1"}>
                {passwordCriteria.hasSpecial ? <FaCheck /> : <FaTimes />} رمز خاص (!@#$...)
              </li>
            </ul>
          )}

          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">تأكيد كلمة المرور</label>
          <div className="relative">
            <FaLock className="absolute right-3 top-3 text-gray-400" />
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="تأكيد كلمة المرور"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 left-3 flex items-center cursor-pointer text-gray-500"
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</p>
          ) : null}
        </div>
      </div>

      {/* الشروط والأزرار المتبقية تبقى كما هي */}
      <div className="flex flex-row-reverse items-center justify-end gap-2 mb-5 text-right">
        <label htmlFor="agreedToTermsClient" className="text-sm text-gray-600 cursor-pointer">أوافق على الشروط والأحكام وسياسة الخصوصية</label>
        <input
          type="checkbox"
          id="agreedToTermsClient"
          name="agreedToTerms"
          className="accent-blue-600 cursor-pointer"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.agreedToTerms}
        />
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <button type="button" className="w-full flex items-center justify-center gap-2 text-black border py-2 rounded-lg transition hover:bg-gray-50">
          <FaGoogle /> تسجيل باستخدام جوجل
        </button>
        <button type="button" className="w-full flex items-center justify-center gap-2 text-black border py-2 rounded-lg transition hover:bg-gray-50">
          <FaFacebookF /> تسجيل باستخدام فيسبوك
        </button>
      </div>

      <button
        type="submit"
        className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition mt-5 ${
          formik.isSubmitting ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "جارٍ التسجيل كعميل..." : "تسجيل كعميل"}
      </button>
    </div>
  );
}