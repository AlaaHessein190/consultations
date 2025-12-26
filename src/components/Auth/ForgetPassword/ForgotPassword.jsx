import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword, resetPassword, resendPasswordCode } from '../../../redux/slices/authSlice';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaKey, FaArrowRight } from 'react-icons/fa6';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  // ✅ التعديل هنا في دالة handleForgetSubmit
  const handleForgetSubmit = (e) => {
    e.preventDefault();
    dispatch(forgetPassword({ email }))
      .unwrap()
      .then(() => {
        toast.success('تم إرسال كود التحقق لبريدك الإلكتروني');
        setStep(2);
      })
      .catch((err) => {
        // إذا كان err غير موجود أو فارغ، نظهر رسالة افتراضية واضحة
        // هذا يضمن أن التوستر سيظهر دائماً
        const errorMessage = err || 'عذراً، هذا البريد الإلكتروني غير مسجل لدينا أو حدث خطأ في الطلب';
        toast.error(errorMessage);
        console.error("Error Detail:", err);
      });
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email, code, newPassword }))
      .unwrap()
      .then(() => {
        toast.success('تم تغيير كلمة المرور بنجاح، يمكنك تسجيل الدخول الآن');
        navigate('/login');
      })
      .catch((err) => toast.error(err || 'فشل تغيير كلمة المرور'));
  };

  const handleResend = () => {
    dispatch(resendPasswordCode({ email }))
      .unwrap()
      .then(() => toast.success('تم إعادة إرسال الكود بنجاح'))
      .catch((err) => toast.error(err || 'فشل إعادة إرسال الكود'));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#5B4DFF]">
            {step === 1 ? 'نسيت كلمة المرور؟' : 'تعيين كلمة مرور جديدة'}
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            {step === 1 
              ? 'أدخل بريدك الإلكتروني المسجل لنرسل لك كود التحقق' 
              : 'أدخل الكود الذي وصلك وكلمة المرور الجديدة'}
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleForgetSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني</label>
              <div className="relative">
                <input 
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                  className="w-full bg-[#F9FAFB] border-none rounded-xl py-4 px-4 pl-10 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="example@mail.com"
                />
                <FaEnvelope className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-[#202D42] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#1a2536] transition-all disabled:opacity-70 cursor-pointer">
              {loading ? 'جارٍ التحقق...' : 'إرسال كود التحقق'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">كود التحقق</label>
              <div className="relative">
                <input 
                  type="text" value={code} onChange={(e) => setCode(e.target.value)} required
                  className="w-full bg-[#F9FAFB] border-none rounded-xl py-4 px-4 pl-10 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="أدخل الكود المكون من 6 أرقام"
                />
                <FaKey className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">كلمة المرور الجديدة</label>
              <div className="relative">
                <input 
                  type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required
                  className="w-full bg-[#F9FAFB] border-none rounded-xl py-4 px-4 pl-10 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
                <FaLock className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-[#5B4DFF] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#4A3EDC] transition-all cursor-pointer">
              {loading ? 'جارٍ التحديث...' : 'تحديث كلمة المرور'}
            </button>

            <button type="button" onClick={handleResend} className="w-full text-sm text-blue-600 font-medium hover:underline mt-2">
              لم يصلك الكود؟ إعادة إرسال
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <button onClick={() => navigate('/login')} className="text-gray-500 text-sm flex items-center justify-center gap-2 mx-auto hover:text-[#5B4DFF] transition-colors cursor-pointer">
            <FaArrowRight className="w-3 h-3" /> العودة لتسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;