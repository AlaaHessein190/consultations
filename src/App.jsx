import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Login from './pages/Auth/Login/Login';
import Regster from './pages/Auth/regester/Regster';
import { useEffect } from 'react';
import AOS from 'aos';
import { Toaster } from 'react-hot-toast';
import Consultants from './pages/Consultants/Consultants';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import VerifyEmailPage from './pages/Auth/VerifyEmailPage/VerifyEmailPage';
import { useSelector } from 'react-redux';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import FaqPagee from './pages/FaqPagee/FaqPagee';
import AboutPage from './pages/About/AboutPage';
import RegistrationPortal from './pages/Registration Portal/RegistrationPortal';
import Dashexpertpage from './pages/Dashexpert/Dashexpertpage';
import ProfileSettings from './pages/ProfileSettings/ProfileSettings';
import PaymentsPage from './pages/Payments/PaymentsPage';
import BookingPage from './pages/BookingPage/BookingPage';
import DashboardPage from './pages/DashboardConsults/DashboardPage';
import ForgetPassword from './pages/Auth/ForgetPassword/ForgetPassword';

// ----------------------------------------------------
// 1. مكون حماية مسارات الخبير (Expert Only)
const ExpertRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const role = user?.accountType || user?.role;

  if (!token) return <Navigate to="/login" replace />;
  if (role !== 'expert') return <Navigate to="/consultants" replace />;
  
  return children;
};

// 2. مكون حماية مسارات العميل (Client Only)
const ClientRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const role = user?.accountType || user?.role;

  if (!token) return <Navigate to="/login" replace />;
  // إذا كان المستخدم خبيراً وحاول دخول صفحة العملاء، نرجعه للداشبورد الخاص به
  if (role === 'expert') return <Navigate to="/dash" replace />;
  
  return children;
};

// 3. مكون المسارات العامة (توجيه ذكي عند تسجيل الدخول)
// يمنع المستخدم المسجل من رؤية صفحة Login و Register
const PublicRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  
  if (token) {
    const role = user?.accountType || user?.role;
    // توجيه ذكي بناءً على النوع
    return role === 'expert' ? <Navigate to="/dash" replace /> : <Navigate to="/consultants" replace />;
  }
  return children;
};
// ----------------------------------------------------

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, 

        // مسارات عامة للجميع
        { path: "contact", element: <ContactUsPage /> }, 
        { path: "faq", element: <FaqPagee /> },
        { path: "aboutPage", element: <AboutPage /> },

        // مسارات تمنع المسجلين من العودة إليها (Login/Register)
        { path: "login", element: <PublicRoute><Login /></PublicRoute> },
        { path: "regster", element: <PublicRoute><Regster /></PublicRoute> },

        { path: "verify-email", element: <VerifyEmailPage /> }, 
        { path: "forget", element: <ForgetPassword /> }, 

        // مسارات العملاء فقط
        { 
          path: "consultants", 
          element: <ClientRoute><Consultants /></ClientRoute> 
        },
        { 
          path: "ProfilePage", 
          element: <ClientRoute><ProfilePage /></ClientRoute> 
        },
         { 
          path: "BookingPage", 
          element: <ClientRoute><BookingPage /></ClientRoute> 
        },
        { 
          path: "dashboardclient", 
          element: <ClientRoute><DashboardPage /></ClientRoute> 
        },
        
        // مسارات الخبراء فقط
        { 
          path: "dashexpert", 
          element: <ExpertRoute><Dashexpertpage /></ExpertRoute> 
        }, 

      ]
    },

    
    { 
      path: "registrationportal", 
      element: <RegistrationPortal /> 
    },
            { path: "profile-settings", element: <ExpertRoute><ProfileSettings /></ExpertRoute> },

            { path: "payments", element: <ExpertRoute><PaymentsPage /></ExpertRoute> },




    {
      path: "*",
      element: (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>404</h1>
          <p>الصفحة غير موجودة</p>
          <Navigate to="/" replace />
        </div>
      ),
    },
  ]);

return (
  <>
    <RouterProvider router={routers} />
    <Toaster position="top-center" reverseOrder={false} />
  </>
);
}

export default App;