import React from 'react';
import { useFormikContext } from 'formik';
import { Link } from 'react-router-dom';
import {
  FaEnvelope, FaLock, FaPhoneAlt, FaUser, FaEye, FaEyeSlash, FaGoogle, FaFacebookF,
} from "react-icons/fa";

export default function ConsultantRegisterForm({ showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword }) {
  const formik = useFormikContext();

  return (
    <div className="animate-fade-in text-right">
      {/* اسم المستخدم */}
      <div className="mb-4">
        <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-700">اسم المستخدم</label>
        <div className="relative">
          <FaUser className="absolute right-3 top-3 text-gray-400" />
          <input
            type="text" id="username" name="username" placeholder="أدخل اسم المستخدم" autoComplete="username"
            className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username || ""}
          />
        </div>
        {formik.touched.username && formik.errors.username ? (<p className="text-red-500 text-xs mt-1">{formik.errors.username}</p>) : null}
      </div>

      {/* البريد والهاتف */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">البريد الإلكتروني</label>
          <div className="relative">
            <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
            <input
              type="email" id="email" name="email" placeholder="example@domain.com" autoComplete="email"
              className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email || ""}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (<p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>) : null}
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">رقم الهاتف</label>
          <div className="relative">
            <FaPhoneAlt className="absolute right-3 top-3 text-gray-400" />
            <input
              type="tel" id="phone" name="phone" placeholder="+966 xx xxx xxxx" autoComplete="tel"
              className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone || ""}
            />
          </div>
          {formik.touched.phone && formik.errors.phone ? (<p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>) : null}
        </div>
      </div>

      {/* الجنس */}
      <div className="mb-4">
        <label htmlFor="gender" className="block mb-1 text-sm font-medium text-gray-700">الجنس</label>
        <select
          id="gender" name="gender"
          className="w-full border border-gray-300 rounded-lg py-2 pr-3 pl-3 focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gender || ""}
        >
          <option value="">اختر الجنس</option>
          <option value="male">ذكر</option>
          <option value="female">أنثى</option>
          <option value="other">أخرى</option>
        </select>
        {formik.touched.gender && formik.errors.gender ? (<p className="text-red-500 text-xs mt-1">{formik.errors.gender}</p>) : null}
      </div>

      {/* كلمة المرور */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <div>
          <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">كلمة المرور</label>
          <div className="relative">
            <FaLock className="absolute right-3 top-3 text-gray-400" />
            <input
              id="password" name="password" type={showPassword ? "text" : "password"} placeholder="أدخل كلمة المرور" autoComplete="new-password"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password || ""}
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 left-3 flex items-center cursor-pointer text-gray-500">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {formik.touched.password && formik.errors.password ? (<p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>) : null}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">تأكيد كلمة المرور</label>
          <div className="relative">
            <FaLock className="absolute right-3 top-3 text-gray-400" />
            <input
              id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="تأكيد كلمة المرور" autoComplete="new-password"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword || ""}
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 left-3 flex items-center cursor-pointer text-gray-500">
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<p className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</p>) : null}
        </div>
      </div>

      {/* التخصص */}
      <div className="mb-4">
        <label htmlFor="specialty" className="block text-gray-700 mb-2">التخصص</label>
        <select
          id="specialty" name="specialty"
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200 text-gray-700"
          onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.specialty || ""}
        >
          <option value="">اختر التخصص</option>
          <option value="it">تقنية المعلومات (IT)</option>
          <option value="medical">الطبية (Medical)</option>
          <option value="business">إدارة أعمال (Business)</option>
        </select>
        {formik.touched.specialty && formik.errors.specialty ? (<p className="text-red-500 text-xs mt-1">{formik.errors.specialty}</p>) : null}
      </div>

      {/* سنوات الخبرة */}
      <div className="mb-4">
        <label htmlFor="yearsOfExperience" className="block text-gray-700 mb-2">سنوات الخبرة</label>
        <input
          type="number" id="yearsOfExperience" name="yearsOfExperience" placeholder="مثال: 5"
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200 text-gray-700"
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          value={formik.values.yearsOfExperience === 0 ? 0 : formik.values.yearsOfExperience || ""}
        />
        {formik.touched.yearsOfExperience && formik.errors.yearsOfExperience ? (<p className="text-red-500 text-xs mt-1">{formik.errors.yearsOfExperience}</p>) : null}
      </div>

      {/* نبذة تعريفية */}
      <div className="mb-4">
        <label htmlFor="aboutYou" className="block text-gray-700 mb-2">نبذة تعريفية عنك</label>
        <textarea
          id="aboutYou" name="aboutYou" placeholder="اكتب نبذة مختصرة (50 حرف على الأقل)..." rows="4"
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200 text-gray-700 resize-none"
          onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.aboutYou || ""}
        />
        {formik.touched.aboutYou && formik.errors.aboutYou ? (<p className="text-red-500 text-xs mt-1">{formik.errors.aboutYou}</p>) : null}
      </div>

      {/* رفع السيرة الذاتية */}
      <div className="mb-4">
        <label htmlFor="cv" className="block text-gray-700 mb-2">السيرة الذاتية (CV)</label>
        <input
          id="cv" name="cv" type="file" accept=".pdf,.doc,.docx"
          onChange={(event) => { formik.setFieldValue("cv", event.currentTarget.files[0]); }}
          onBlur={formik.handleBlur}
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {formik.values.cv && <p className="mt-2 text-sm text-green-600">تم اختيار الملف: {formik.values.cv.name}</p>}
        {formik.touched.cv && formik.errors.cv ? (<p className="text-red-500 text-xs mt-1">{formik.errors.cv}</p>) : null}
      </div>

      {/* الشروط */}
      <div className="flex flex-row-reverse items-center justify-end gap-2 mb-5 text-right">
        <label htmlFor="agreedToTermsConsultant" className="text-sm text-gray-600 cursor-pointer">أوافق على الشروط والأحكام وسياسة الخصوصية</label>
        <input
          type="checkbox" id="agreedToTermsConsultant" name="agreedToTerms"
          className="accent-blue-600 cursor-pointer"
          onChange={formik.handleChange} onBlur={formik.handleBlur} checked={formik.values.agreedToTerms}
        />
      </div>
      {formik.touched.agreedToTerms && formik.errors.agreedToTerms ? (<p className="text-red-500 text-xs mt-1 text-right">{formik.errors.agreedToTerms}</p>) : null}

      {/* الأزرار */}
      <div className="flex flex-col gap-3 mt-3">
        <button type="button" className="w-full flex items-center justify-center gap-2 border text-black py-2 rounded-lg transition"><FaGoogle /> تسجيل باستخدام جوجل</button>
        <button type="button" className="w-full flex items-center justify-center gap-2 border text-black py-2 rounded-lg transition"><FaFacebookF /> تسجيل باستخدام فيسبوك</button>
      </div>

      <button
        type="submit"
        className={`w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg shadow hover:from-green-600 hover:to-green-700 transition mt-5 ${formik.isSubmitting ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "جارٍ التسجيل كمستشار..." : "تسجيل كمستشار"}
      </button>

      <div className="mt-4 text-center text-sm text-gray-600">
        لديك حساب بالفعل؟{" "}
        <Link to="/registrationportal" className="text-blue-600 font-semibold hover:underline">
          تسجيل الدخول
        </Link>
      </div>
    </div>
  );
}