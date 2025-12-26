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
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearAuthMessages());
  }, [dispatch]);

  const validationSchema = Yup.object({
    email: Yup.string().email("صيغة البريد الإلكتروني غير صحيحة").required("البريد الإلكتروني مطلوب"),
    password: Yup.string().min(6, "كلمة المرور يجب ألا تقل عن 6 أحرف").required("كلمة المرور مطلوبة"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values))
        .unwrap()
        .then((payload) => {
          toast.success("تم تسجيل الدخول بنجاح");
          const role = payload.user?.accountType || payload.user?.role;
          if (role === 'expert') {
             navigate("/dashexpert");
          } else {
             navigate("/consultants");
          }
        })
        .catch((err) => {
          // ✅ هنا سيتم عرض "البريد الإلكتروني أو كلمة المرور غير صحيحة"
          toast.error(err || "فشل تسجيل الدخول، تأكد من صحة البيانات");
          console.error("Login Failed Detail:", err);
        });
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 pb-5 px-4">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="شعار منصة استشاراتي" className="w-20 h-20 object-contain mt-5" />
          <div className="text-right">
            <h1 className="text-2xl font-semibold text-gray-800 leading-tight">استشاراتي</h1>
            <p className="text-[12px] text-gray-500 tracking-widest uppercase">ESTISHARATI</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mt-1">مرحباً بعودتك</h2>
        <p className="text-gray-500 mt-1 text-lg">سجل الدخول للوصول إلى حسابك</p>
      </div>

      <div className="w-full max-w-[360px] bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        <form onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div className="mb-4 text-right">
            <label className="block mb-1 text-sm font-medium text-gray-700">البريد الإلكتروني</label>
            <div className="relative">
              <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
              <input
                type="email" {...formik.getFieldProps('email')}
                placeholder="example@domain.com"
                className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 text-left focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            {formik.touched.email && formik.errors.email && <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-2 text-right">
            <label className="block mb-1 text-sm font-medium text-gray-700">كلمة المرور</label>
            <div className="relative">
              <FaLock className="absolute right-3 top-3 text-gray-400" />
              <input
                type="password" {...formik.getFieldProps('password')}
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 text-left focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            {formik.touched.password && formik.errors.password && <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>}
          </div>

          <div className="text-left mb-6">
            <Link to="/forget" className="text-sm text-blue-600 hover:underline font-medium">نسيت كلمة المرور؟</Link>
          </div>

          <button type="submit" disabled={loading} className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg shadow-md transition-all font-bold ${loading ? "opacity-70 cursor-not-allowed" : "hover:from-blue-600 hover:to-blue-700 active:scale-[0.98]"}`}>
            {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="px-3 text-gray-400 text-sm">أو</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 mb-3 hover:bg-gray-50 transition-colors cursor-pointer text-sm font-medium text-gray-700">
          <FaGoogle className="text-red-500" /> تسجيل الدخول بواسطة Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors cursor-pointer text-sm font-medium text-gray-700">
          <FaFacebookF className="text-blue-600" /> تسجيل الدخول بواسطة Facebook
        </button>

        <p className="text-center text-sm mt-6 text-gray-600">
          ليس لديك حساب؟
          <Link to="/regster" className="text-blue-600 font-bold hover:underline mx-1"> إنشاء حساب جديد</Link>
        </p>
      </div>
      <Link to="/" className="text-center text-xs text-gray-400 mt-6 hover:text-blue-500 transition-colors">العودة إلى الصفحة الرئيسية ←</Link>
    </div>
  );
}