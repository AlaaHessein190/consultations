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

  const { loading, error, success, registeredEmail, registeredAccountType, user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearAuthMessages());
  }, [dispatch]);

  useEffect(() => {
    if (success && !loading) {
      
      // 1. حالة المستشار (Expert)
      if (registeredAccountType === 'expert') {
          toast.success('تم إنشاء الحساب بنجاح! يرجى تأكيد بريدك الإلكتروني.');
          // 👇 التعديل هنا: بعتنا type: 'expert'
              localStorage.setItem('temp_user_role', 'expert'); // ✅ إضافة هذا السطر
              localStorage.setItem('temp_verify_email', registeredEmail); // ✅ ضيف دي
              localStorage.setItem('temp_verify_type', 'expert');  
          navigate('/verify-email', { state: { email: registeredEmail, type: 'expert' } });
      } 
      
      // 2. حالة العميل (Client)
      else if (registeredAccountType === 'client') {
          toast.success('تم التسجيل كعميل بنجاح! يرجى تأكيد بريدك الإلكتروني.');
          // 👇 التعديل هنا: بعتنا type: 'client'
              localStorage.setItem('temp_user_role', 'client'); // ✅ إضافة هذا السطر
              localStorage.setItem('temp_verify_email', registeredEmail); // ✅ ضيف دي
              localStorage.setItem('temp_verify_type', 'client');
          navigate('/verify-email', { state: { email: registeredEmail, type: 'client' } });
      }
      
      setTimeout(() => {
        dispatch(clearAuthMessages());
      }, 1000);
    }

    if (error && !loading) {
      toast.error(typeof error === 'string' ? error : "حدث خطأ، يرجى مراجعة البيانات");
    }

  }, [success, loading, registeredAccountType, registeredEmail, user, token, navigate, dispatch, error]);

  const getValidationSchema = (type) => {
    return Yup.object().shape({
      username: Yup.string().required("اسم المستخدم مطلوب"),
      email: Yup.string().email("صيغة البريد الإلكتروني غير صحيحة").required("البريد الإلكتروني مطلوب"),
      phone: Yup.string()
        .matches(/^(\+?\d{1,4}?[-.\s]?)?(\(?\d{1,4}?\)?[-.\s]?)?(\d{1,4}[-.\s]?){1,4}\d{1,4}$/, "صيغة رقم الهاتف غير صحيحة")
        .required("رقم الهاتف مطلوب"),
      gender: Yup.string()
        .oneOf(['male', 'female', 'other'], 'الجنس غير صحيح')
        .required('الجنس مطلوب'),
      
      password: Yup.string()
        .min(8, "كلمة المرور يجب ألا تقل عن 8 أحرف")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/,
          "يجب أن تحتوي كلمة المرور على حرف كبير، حرف صغير، رقم، ورمز خاص (مثل @#$)"
        )
        .required("كلمة المرور مطلوبة"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "كلمتا المرور غير متطابقتين")
        .required("تأكيد كلمة المرور مطلوب"),
      agreedToTerms: Yup.boolean().oneOf([true], 'يجب الموافقة على الشروط والأحكام').required('يجب الموافقة على الشروط والأحكام'),

      specialty: type === "expert" ? Yup.string().required("التخصص مطلوب") : Yup.string().notRequired(),
      yearsOfExperience: type === "expert" ? Yup.number().typeError("يجب أن تكون سنوات الخبرة رقمًا").min(0, "الخبرة لا يمكن أن تكون سالبة").required("سنوات الخبرة مطلوبة") : Yup.number().notRequired(),
      
      aboutYou: type === "expert" 
        ? Yup.string().min(50, "النبذة التعريفية قصيرة جداً، يجب أن تكون 50 حرفاً على الأقل").required("النبذة التعريفية مطلوبة") 
        : Yup.string().notRequired(),
        
      cv: type === "expert" ? Yup.mixed().required("السيرة الذاتية مطلوبة") : Yup.mixed().notRequired(),
    });
  };

  const getInitialValues = () => {
    if (accountType === 'client') {
      return {
        username: '', email: '', phone: '', gender: '', password: '', confirmPassword: '', agreedToTerms: false, accountType: 'client',
      };
    } else {
      return {
        username: '', email: '', phone: '', gender: '', password: '', confirmPassword: '', specialty: '', yearsOfExperience: '', aboutYou: '', cv: null, agreedToTerms: false, accountType: 'expert',
      };
    }
  };

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
        <div className="mb-6">
          <label className="block text-right text-sm font-medium text-gray-700 mb-3">نوع الحساب</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => { setAccountType("client"); dispatch(clearAuthMessages()); }}
              className={`flex flex-col items-center justify-center border rounded-xl py-4 transition-all duration-200 ${accountType === "client" ? "border-blue-500 bg-blue-50 text-blue-600 shadow-sm" : "border-gray-200 hover:bg-gray-50 text-gray-700"}`}
            >
              <FaUser className={`text-lg mb-1 ${accountType === "client" ? "text-blue-600" : "text-gray-400"}`} />
              <span className="text-sm font-medium">عميل</span>
              <span className="text-[11px] text-gray-400">أبحث عن استشارات</span>
            </button>

            <button
              type="button"
              onClick={() => { setAccountType("expert"); dispatch(clearAuthMessages()); }}
              className={`flex flex-col items-center justify-center border rounded-xl py-4 transition-all duration-200 ${accountType === "expert" ? "border-blue-500 bg-blue-50 text-blue-600 shadow-sm" : "border-gray-200 hover:bg-gray-50 text-gray-700"}`}
            >
              <FaUser className={`text-lg mb-1 ${accountType === "expert" ? "text-blue-600" : "text-gray-400"}`} />
              <span className="text-sm font-medium">مستشار</span>
              <span className="text-[11px] text-gray-400">أقدم استشارات</span>
            </button>
          </div>
        </div>

        {loading && <p className="mt-4 text-blue-600 text-center">جارٍ إرسال البيانات...</p>}

        <Formik
          initialValues={getInitialValues()}
          validationSchema={getValidationSchema(accountType)}
          onSubmit={(values, { setSubmitting }) => {
            const dataToSend = { ...values };
            delete dataToSend.confirmPassword;
            delete dataToSend.agreedToTerms;

            dispatch(registerUser(dataToSend))
              .unwrap()
              .then(() => {
                setSubmitting(false);
              })
              .catch((err) => {
                setSubmitting(false);
                console.error("خطأ التسجيل:", err);
              });
          }}
          enableReinitialize={true}
        >
          {() => (
            <Form>
              {accountType === "client" ? (
                <ClientRegisterForm
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  showConfirmPassword={showConfirmPassword}
                  setShowConfirmPassword={setShowConfirmPassword}
                />
              ) : (
                <ConsultantRegisterForm
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  showConfirmPassword={showConfirmPassword}
                  setShowConfirmPassword={setShowConfirmPassword}
                />
              )}
            </Form>
          )}
        </Formik>
      </div>
      <Link to="/" className="text-center text-xs text-gray-400 mt-4">العودة إلى الصفحة الرئيسية ←</Link>
    </div>
  );
}