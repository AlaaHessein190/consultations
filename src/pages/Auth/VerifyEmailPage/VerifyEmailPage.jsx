import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import VerifyEmailForm from '../../../components/Auth/VerifyEmailForm'; 
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { clearAuthMessages } from '../../../redux/slices/authSlice';

export default function VerifyEmailPage() {
  const navigate = useNavigate(); 
  const location = useLocation();
  const dispatch = useDispatch();
  
  const { success, user, loading } = useSelector((state) => state.auth);

  const email = location.state?.email || localStorage.getItem('temp_verify_email');
  const type = location.state?.type || localStorage.getItem('temp_verify_type') || 'client';

  useEffect(() => {
    if (!email) {
      toast.error("حدث خطأ، يرجى إعادة التسجيل");
      navigate('/regster');
    }
    // ✅ نصفر الحالة عند دخول الصفحة لضمان عدم حدوث تحويل تلقائي
    dispatch(clearAuthMessages());
  }, [email, navigate, dispatch]);

  useEffect(() => {
    // التوجيه يتم فقط عند حدوث نجاح جديد (بعد الضغط على زر التأكيد)
    if (success && !loading) {
      const role = (user?.role || user?.accountType || type || 'client').toLowerCase();
      
      localStorage.removeItem('temp_verify_email');
      localStorage.removeItem('temp_verify_type');
      localStorage.removeItem('temp_user_role');

      if (role === 'expert' || role === 'consultant' || role === 'it') {
          navigate('/waiting-approval', { replace: true }); 
      } else {
          navigate('/login', { replace: true }); 
      }

      dispatch(clearAuthMessages());
    }
  }, [success, loading, user, navigate, type, dispatch]);

  if (!email) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <VerifyEmailForm initialEmail={email} />
    </div>
  );
}