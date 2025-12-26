import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaKey } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmail, resendCode, clearAuthMessages } from '../../redux/slices/authSlice';
import { toast } from 'react-hot-toast';

export default function VerifyEmailForm({ onVerificationSuccess, initialEmail }) {
  const dispatch = useDispatch();
  const { loading, error, resendLoading } = useSelector((state) => state.auth);
  const [timer, setTimer] = useState(60);

  // إعدادات العداد التنازلي
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => { setTimer((prev) => prev - 1); }, 1000);
    } else { clearInterval(interval); }
    return () => clearInterval(interval);
  }, [timer]);

  const validationSchema = Yup.object().shape({
    code: Yup.string().matches(/^\d{6}$/, 'كود التأكيد يجب أن يتكون من 6 أرقام').required('كود التأكيد مطلوب'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    dispatch(clearAuthMessages());
    const resultAction = await dispatch(verifyEmail(values));
    setSubmitting(false);

    if (verifyEmail.fulfilled.match(resultAction)) {
      const response = resultAction.payload;
      
      // 1. استخراج رسالة الباك إند (مهم جداً للمستشارين)
      // حسب الرد الذي أرسلته: الرسالة موجودة داخل data.message
      const successMessage = response?.data?.message || response?.message || 'تم تأكيد البريد الإلكتروني بنجاح!';
      
      // عرض الرسالة للمستخدم
      toast.success(successMessage, { duration: 4000 }); // مدة أطول قليلاً ليقرأ الرسالة

      resetForm();

      // 2. محاولة استخراج الدور (سيكون null في حالة المستشار قيد المراجعة)
      const roleFromBackend = response?.user?.role || null;

      setTimeout(() => {
        if (onVerificationSuccess) {
            // نرسل الدور (حتى لو كان null، الصفحة الأب ستعتمد على localStorage)
            onVerificationSuccess(roleFromBackend);
        }
      }, 2000); // تأخير بسيط ليقرأ المستخدم رسالة "انتظار الأدمن"
    } else {
      console.error('فشل التأكيد:', resultAction.payload);
    }
  };

  const handleResendCode = async () => {
    if (!initialEmail) {
      toast.error("البريد الإلكتروني غير موجود");
      return;
    }
    const resultAction = await dispatch(resendCode({ email: initialEmail }));
    if (resendCode.fulfilled.match(resultAction)) {
      toast.success("تم إعادة إرسال الكود بنجاح.");
      setTimer(60);
    } else {
      toast.error(resultAction.payload || "فشل إعادة الإرسال");
    }
  };

  // عرض الأخطاء
  useEffect(() => {
    if (error && !loading && !resendLoading) {
      toast.error(typeof error === 'string' ? error : "حدث خطأ ما");
      dispatch(clearAuthMessages());
    }
  }, [error, loading, resendLoading, dispatch]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-right">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">تأكيد البريد الإلكتروني</h2>
      <p className="text-gray-500 text-sm mb-4">
        تم إرسال كود التفعيل إلى: <span className="font-semibold text-blue-600">{initialEmail}</span>
      </p>

      <Formik
        initialValues={{ email: initialEmail || '', code: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="hidden" name="email" />
            <div className="mb-6">
              <label htmlFor="code" className="block mb-1 text-sm font-medium text-gray-700">كود التأكيد</label>
              <div className="relative">
                <FaKey className="absolute right-3 top-3 text-gray-400" />
                <Field type="text" id="code" name="code" placeholder="أدخل كود التأكيد (6 أرقام)" className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <ErrorMessage name="code" component="p" className="text-red-500 text-xs mt-1" />
            </div>

            <button type="submit" disabled={isSubmitting || loading} className={`w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition ${isSubmitting || loading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}>
              {isSubmitting || loading ? 'جارٍ التأكيد...' : 'تأكيد البريد الإلكتروني'}
            </button>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600 ml-1">لم يصلك الكود؟</span>
              {timer > 0 ? (
                <span className="text-gray-400 font-medium">إعادة الإرسال خلال {timer} ثانية</span>
              ) : (
                <button type="button" onClick={handleResendCode} disabled={resendLoading} className={`font-semibold text-blue-600 hover:underline ${resendLoading ? 'opacity-50 cursor-wait' : ''}`}>
                  {resendLoading ? "جارٍ الإرسال..." : "إعادة إرسال الكود"}
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}