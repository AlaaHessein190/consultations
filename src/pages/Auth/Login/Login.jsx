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
          const user = payload.user;
          const role = user?.accountType || user?.role;

          // التحقق: هل المستشار مفعل من الأدمن؟
          if (role === 'expert' && !user.isVerified) {
            toast.error("عذراً، حسابك لا يزال قيد المراجعة من قبل الإدارة.");
            return; // التوقف عن التوجيه
          }

          toast.success("تم تسجيل الدخول بنجاح");
          
          if (role === 'admin') {
             navigate("/admin/dashboard");
          } else if (role === 'expert') {
             navigate("/dashexpert");
          } else {
             navigate("/consultants");
          }
        })
        .catch((err) => {
          toast.error(err || "فشل تسجيل الدخول، تأكد من صحة البيانات");
        });
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pb-5 px-4" dir="rtl">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="شعار" className="w-20 h-20 object-contain mt-5" />
          <div className="text-right">
            <h1 className="text-2xl font-bold text-gray-800 leading-tight">استشاراتي</h1>
            <p className="text-[10px] text-gray-400 tracking-widest uppercase font-bold">ESTISHARATI</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">مرحباً بعودتك</h2>
        <p className="text-gray-500 mt-1">سجل الدخول للوصول إلى حسابك</p>
      </div>

      <div className="w-full max-w-[380px] bg-white shadow-xl rounded-[32px] p-8 border border-gray-100">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4 text-right">
            <label className="block mb-2 text-sm font-bold text-gray-700">البريد الإلكتروني</label>
            <div className="relative">
              <FaEnvelope className="absolute right-3 top-3.5 text-gray-400" />
              <input
                type="email" {...formik.getFieldProps('email')}
                placeholder="example@domain.com"
                className="w-full border border-gray-200 rounded-2xl py-3 pr-10 pl-3 text-left focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            {formik.touched.email && formik.errors.email && <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>}
          </div>

          <div className="mb-2 text-right">
            <label className="block mb-2 text-sm font-bold text-gray-700">كلمة المرور</label>
            <div className="relative">
              <FaLock className="absolute right-3 top-3.5 text-gray-400" />
              <input
                type="password" {...formik.getFieldProps('password')}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-2xl py-3 pr-10 pl-3 text-left focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            {formik.touched.password && formik.errors.password && <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>}
          </div>

          <div className="text-left mb-8">
            <Link to="/forget" className="text-sm text-blue-600 hover:underline font-bold">نسيت كلمة المرور؟</Link>
          </div>

          <button type="submit" disabled={loading} className={`w-full bg-blue-600 text-white py-4 rounded-2xl shadow-lg shadow-blue-100 transition-all font-bold text-lg ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700 active:scale-95"}`}>
            {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
          </button>
        </form>

        <p className="text-center text-sm mt-8 text-gray-600 font-medium">
          ليس لديك حساب؟
          <Link to="/regster" className="text-blue-600 font-black hover:underline mx-1"> إنشاء حساب جديد</Link>
        </p>
      </div>
    </div>
  );
}