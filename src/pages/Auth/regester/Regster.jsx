import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearAuthMessages } from "../../../redux/slices/authSlice";
import { FaUser } from "react-icons/fa";
import logo from "../../../assets/mo.png";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from 'react-hot-toast';

import ClientRegisterForm from '../../../components/Auth/ClientRegisterForm';
import ConsultantRegisterForm from '../../../components/Auth/ConsultantRegisterForm';

export default function Register() {
  const [accountType, setAccountType] = useState("client"); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success, registeredEmail, registeredAccountType } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearAuthMessages());
  }, [dispatch]);

  useEffect(() => {
    if (success && !loading) {
      // ✅ التعديل: نصفر الـ success قبل الانتقال عشان صفحة الكود متفتحش تلاقيها true
      if (registeredAccountType === 'expert') {
          toast.success('تم إنشاء الحساب بنجاح! يرجى تأكيد بريدك الإلكتروني.');
          localStorage.setItem('temp_user_role', 'expert');
          localStorage.setItem('temp_verify_email', registeredEmail);
          localStorage.setItem('temp_verify_type', 'expert');
          
          dispatch(clearAuthMessages()); // تصفير الحالة
          navigate('/verify-email', { state: { email: registeredEmail, type: 'expert' } });
      } 
      else if (registeredAccountType === 'client') {
          toast.success('تم التسجيل كعميل بنجاح! يرجى تأكيد بريدك الإلكتروني.');
          localStorage.setItem('temp_user_role', 'client');
          localStorage.setItem('temp_verify_email', registeredEmail);
          localStorage.setItem('temp_verify_type', 'client');
          
          dispatch(clearAuthMessages()); // تصفير الحالة
          navigate('/verify-email', { state: { email: registeredEmail, type: 'client' } });
      }
    }

    if (error && !loading) {
      toast.error(typeof error === 'string' ? error : "حدث خطأ، يرجى مراجعة البيانات");
    }
  }, [success, loading, registeredAccountType, registeredEmail, navigate, dispatch, error]);

  const getValidationSchema = (type) => {
    return Yup.object().shape({
      username: Yup.string().required("اسم المستخدم مطلوب"),
      email: Yup.string().email("صيغة البريد الإلكتروني غير صحيحة").required("البريد الإلكتروني مطلوب"),
      phone: Yup.string()
        .matches(/^(\+?\d{1,4}?[-.\s]?)?(\(?\d{1,4}?\)?[-.\s]?)?(\d{1,4}[-.\s]?){1,4}\d{1,4}$/, "صيغة رقم الهاتف غير صحيحة")
        .required("رقم الهاتف مطلوب"),
      gender: Yup.string().oneOf(['male', 'female', 'other'], 'الجنس غير صحيح').required('الجنس مطلوب'),
      password: Yup.string().min(8, "كلمة المرور يجب ألا تقل عن 8 أحرف").required("كلمة المرور مطلوبة"),
      confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "كلمتا المرور غير متطابقتين").required("تأكيد كلمة المرور مطلوب"),
      agreedToTerms: Yup.boolean().oneOf([true], 'يجب الموافقة على الشروط والأحكام').required('يجب الموافقة على الشروط والأحكام'),
      specialty: type === "expert" ? Yup.string().required("التخصص مطلوب") : Yup.string().notRequired(),
      yearsOfExperience: type === "expert" ? Yup.number().required("سنوات الخبرة مطلوبة") : Yup.number().notRequired(),
      aboutYou: type === "expert" ? Yup.string().min(50, "النبذة قصيرة جداً").required("النبذة التعريفية مطلوبة") : Yup.string().notRequired(),
      cv: type === "expert" ? Yup.mixed().required("السيرة الذاتية مطلوبة") : Yup.mixed().notRequired(),
    });
  };

  const getInitialValues = () => ({
      username: '', email: '', phone: '', gender: '', password: '', confirmPassword: '', agreedToTerms: false, 
      accountType: accountType, specialty: '', yearsOfExperience: '', aboutYou: '', cv: null
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 font-sans pb-5">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="Logo" className="w-20 h-20 object-contain mt-5" />
          <div className="text-right">
            <h1 className="text-2xl font-semibold text-gray-800 leading-tight">استشاراتي</h1>
            <p className="text-[12px] text-gray-500 tracking-widest">ESTISHARATI</p>
          </div>
        </div>
      </div>

      <div className="w-[90%] sm:w-[450px] md:w-[600px] bg-white shadow-lg rounded-2xl p-6">
        <div className="mb-6 text-right">
          <label className="block text-sm font-medium text-gray-700 mb-3">نوع الحساب</label>
          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={() => setAccountType("client")} className={`flex flex-col items-center justify-center border rounded-xl py-4 ${accountType === "client" ? "border-blue-500 bg-blue-50 text-blue-600 shadow-sm" : "border-gray-200 text-gray-700"}`}>
              <FaUser className="text-lg mb-1" />
              <span className="text-sm font-medium">عميل</span>
            </button>
            <button type="button" onClick={() => setAccountType("expert")} className={`flex flex-col items-center justify-center border rounded-xl py-4 ${accountType === "expert" ? "border-blue-500 bg-blue-50 text-blue-600 shadow-sm" : "border-gray-200 text-gray-700"}`}>
              <FaUser className="text-lg mb-1" />
              <span className="text-sm font-medium">مستشار</span>
            </button>
          </div>
        </div>

        <Formik
          initialValues={getInitialValues()}
          validationSchema={getValidationSchema(accountType)}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(registerUser(values)).unwrap().finally(() => setSubmitting(false));
          }}
          enableReinitialize
        >
          {() => (
            <Form>
              {accountType === "client" ? 
                <ClientRegisterForm showPassword={showPassword} setShowPassword={setShowPassword} showConfirmPassword={showConfirmPassword} setShowConfirmPassword={setShowConfirmPassword} /> : 
                <ConsultantRegisterForm showPassword={showPassword} setShowPassword={setShowPassword} showConfirmPassword={showConfirmPassword} setShowConfirmPassword={setShowConfirmPassword} />
              }
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}