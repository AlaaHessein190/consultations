import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearAuthMessages } from "../../../redux/slices/authSlice";
import logo from "../../../assets/mo.png"; 
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-hot-toast'; 

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // جلب حالات التحميل فقط (لأننا سنتعامل مع النجاح والخطأ داخل onSubmit)
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearAuthMessages());
  }, [dispatch]);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("صيغة البريد الإلكتروني غير صحيحة")
      .required("البريد الإلكتروني مطلوب"),
    password: Yup.string()
      .min(6, "كلمة المرور يجب ألا تقل عن 6 أحرف")
      .required("كلمة المرور مطلوبة"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // ✅ إرسال البيانات الحقيقية للسيرفر
      dispatch(loginUser(values))
        .unwrap() // ننتظر الرد
        .then((payload) => {
          // ✅ نجاح العملية
          toast.success("تم تسجيل الدخول بنجاح");
          
          // 👇 استخراج نوع المستخدم من الرد (تأكد أن الباك إند يرجعه باسم accountType أو role)
          const role = payload.user?.accountType || payload.user?.role;

          // 👇 التوجيه الذكي
          if (role === 'expert') {
             navigate("/dashexpert"); // المستشار يذهب للوحة التحكم
          } else {
             navigate("/consultants"); // العميل يذهب للصفحة الرئيسية/المستشارين
          }
        })
        .catch((err) => {
          // ❌ فشل العملية
          console.error("Login Failed:", err);
          toast.error(err || "فشل تسجيل الدخول، تأكد من صحة البيانات");
        });
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 pb-5">
      {/* Logo + Title */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="شعار منصة استشاراتي" className="w-20 h-20 object-contain mt-5" />
          <div className="text-right">
            <h1 className="text-2xl font-semibold text-gray-800 leading-tight">استشاراتي</h1>
            <p className="text-[12px] text-gray-500 tracking-widest">ESTISHARATI</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mt-1">مرحباً بعودتك</h2>
        <p className="text-gray-500 mt-1 text-lg">سجل الدخول للوصول إلى حسابك</p>
      </div>

      {/* Form */}
      <div className="w-[360px] bg-white shadow-lg rounded-2xl p-6">
        <form onSubmit={formik.handleSubmit}>
          
          {/* Email */}
          <div className="mb-4 text-right">
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">البريد الإلكتروني</label>
            <div className="relative">
              <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
              <input
                type="email" id="email" {...formik.getFieldProps('email')}
                placeholder="example@domain.com"
                className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 text-left focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            {formik.touched.email && formik.errors.email ? (<p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>) : null}
          </div>

          {/* Password */}
          <div className="mb-2 text-right">
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">كلمة المرور</label>
            <div className="relative">
              <FaLock className="absolute right-3 top-3 text-gray-400" />
              <input
                type="password" id="password" {...formik.getFieldProps('password')}
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 text-left focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            {formik.touched.password && formik.errors.password ? (<p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>) : null}
          </div>

          <div className="text-left mb-4">
            <Link to="/forget" className="text-sm text-blue-600 hover:underline">نسيت كلمة المرور؟</Link>
          </div>

          <button type="submit" disabled={loading} className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg shadow transition ${loading ? "opacity-70 cursor-not-allowed" : "hover:from-blue-600 hover:to-blue-700 cursor-pointer"}`}>
            {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">أو</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 mb-2 hover:bg-gray-50 cursor-pointer">
          <FaGoogle className="text-black-500" /> تسجيل الدخول بواسطة Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 cursor-pointer">
          <FaFacebookF className="text-black-600" /> تسجيل الدخول بواسطة Facebook
        </button>

        <p className="text-center text-sm mt-4 text-gray-600">
          ليس لديك حساب؟
          <Link to="/regster" className="text-blue-600 hover:underline mx-1"> إنشاء حساب جديد</Link>
        </p>
      </div>
      <Link to="/" className="text-center text-xs text-gray-400 mt-4">العودة إلى الصفحة الرئيسية ←</Link>
    </div>
  );
}