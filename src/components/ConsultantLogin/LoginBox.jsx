import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/authSlice'; // ✅ استيراد نفس الدالة
import { toast } from 'react-hot-toast';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUsers, FaUserShield, FaBriefcase, FaArrowLeft } from 'react-icons/fa6';

const LoginBox = () => {
  const [showPassword, setShowPassword] = useState(false);
  // ✅ الحالة الخاصة بالبيانات (تم إزالة القيم الافتراضية لتجنب خطأ 400 إذا كانت غير صحيحة)
  const [formData, setFormData] = useState({ email: '', password: '' });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // ✅ إرسال البيانات الحقيقية
    dispatch(loginUser(formData))
      .unwrap()
      .then((payload) => {
        toast.success('مرحباً بك!');
        
        // 👇 التوجيه الذكي
        const role = payload.user?.accountType || payload.user?.role;

        if (role === 'expert') {
            navigate('/dashexpert');
        } else {
            // لو عميل حاول يدخل من صفحة المستشارين، نوجهه لصفحته الصحيحة
            navigate('/consultants'); 
        }
      })
      .catch((err) => {
        toast.error(err || 'بيانات الدخول غير صحيحة');
      });
  };

  return (
    <div className="w-full lg:w-[45%] max-w-md mx-auto lg:max-w-none">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 relative border border-gray-100">
        
        <div className="absolute top-8 left-8">
            <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
               <FaUsers className="w-3 h-3" /> للمستشارين فقط
            </span>
        </div>

        <div className="text-center mb-8 mt-4">
          <h2 className="text-3xl font-bold text-[#5B4DFF] mb-2">مرحباً بعودتك!</h2>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني</label>
            <div className="relative">
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full bg-[#F9FAFB] border-none text-gray-600 text-sm rounded-xl py-4 px-4 pl-10 outline-none"
              />
              <FaEnvelope className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-bold text-gray-700">كلمة المرور</label>
            </div>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required
                className="w-full bg-[#F9FAFB] border-none text-gray-600 text-sm rounded-xl py-4 px-10 pl-10 outline-none"
              />
              <FaLock className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-4 text-gray-400">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <Link to="/forget" className="text-blue-600 hover:underline font-medium">نسيت كلمة المرور؟</Link>
          </div>

          <button type="submit" disabled={loading} className={`w-full bg-[#5B4DFF] text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${loading ? 'opacity-70' : 'hover:bg-[#4A3EDC]'}`}>
            <FaUserShield className="w-5 h-5" />
            {loading ? 'جارٍ الدخول...' : 'تسجيل الدخول'}
          </button>
        </form>

        <div className="my-8 border-t border-gray-100"></div>

        <div className="text-center">
          <p className="text-gray-600 text-sm mb-4">لست مستشاراً بعد؟</p>
          <Link to="/regster" state={{ type: 'expert' }} className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-50 flex items-center justify-center gap-2">
             <FaBriefcase className="w-4 h-4" /> إنشاء حساب مستشار
          </Link>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <Link to="/login" className="text-blue-600 font-bold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all ">
          تسجيل دخول العملاء <FaArrowLeft className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default LoginBox;