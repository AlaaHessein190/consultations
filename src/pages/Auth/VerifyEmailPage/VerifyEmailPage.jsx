// src/pages/Auth/VerifyEmailPage/VerifyEmailPage.jsx
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import VerifyEmailForm from '../../../components/Auth/VerifyEmailForm'; 
import { toast } from 'react-hot-toast';

export default function VerifyEmailPage() {
  const navigate = useNavigate(); 
  const location = useLocation();

  // 1. محاولة جلب البيانات من الـ State (القادم من التسجيل)
  let email = location.state?.email;
  let type = location.state?.type;

  // 2. إذا لم نجد البيانات (بسبب الريفريش)، نحاول جلبها من LocalStorage
  if (!email) {
    email = localStorage.getItem('temp_verify_email');
    type = localStorage.getItem('temp_verify_type') || 'client';
  }

  // 3. حفظ البيانات مؤقتاً لحين إتمام العملية (تحسباً للريفريش)
  useEffect(() => {
    if (email) {
      localStorage.setItem('temp_verify_email', email);
      if (type) localStorage.setItem('temp_verify_type', type);
    } else {
      // لو مفيش إيميل خالص، نرجعه يسجل دخول أو يسجل جديد
      toast.error("حدث خطأ، يرجى إعادة التسجيل أو تسجيل الدخول");
      navigate('/login');
    }
  }, [email, type, navigate]);

  const handleSuccessNavigation = (backendRole) => {
    // تحديد نوع المستخدم النهائي
    const finalRole = backendRole || type || 'client';

    console.log('User verified successfully. Role:', finalRole);

    // ✅ تنظيف الذاكرة المؤقتة الآن لأن العملية تمت
    localStorage.removeItem('temp_verify_email');
    localStorage.removeItem('temp_verify_type');
    localStorage.removeItem('temp_user_role');

    // التوجيه
    if (finalRole === 'expert' || finalRole === 'consultant') {
        navigate('/registrationportal'); 
    } else {
        navigate('/login'); 
    }
  };

  // إذا لم يكن هناك إيميل، لا نعرض الفورم (سيتم التوجيه في useEffect)
  if (!email) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <VerifyEmailForm 
        initialEmail={email} 
        onVerificationSuccess={handleSuccessNavigation} 
      />
    </div>
  );
}