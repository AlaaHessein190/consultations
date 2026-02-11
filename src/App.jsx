import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
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
import { useSelector, useDispatch } from 'react-redux';
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

// استيراد مكونات الأدمن
import AdminDashboard from './pages/Admin/AdminDashboard'; 
import WaitingApproval from './pages/Auth/WaitingApproval/WaitingApproval';
import AdminSidebar from './components/Admin/AdminSidebar'; // جديد

// استيراد الأكشن من سلايس اليوزر
import { fetchMe } from './redux/slices/userSlice'; 

// ----------------------------------------------------
// 1. مكون حماية مسارات الأدمن
const AdminRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const role = user?.accountType || user?.role;

  if (!token) return <Navigate to="/login" replace />;
  if (role !== 'admin') return <Navigate to="/" replace />;
  
  return children;
};

// 2. مكون حماية مسارات الخبير
const ExpertRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const role = user?.accountType || user?.role;

  if (!token) return <Navigate to="/login" replace />;
  if (role !== 'expert') return <Navigate to="/consultants" replace />;
  
  return children;
};

// 3. مكون حماية مسارات العميل
const ClientRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const role = user?.accountType || user?.role;

  if (!token) return <Navigate to="/login" replace />;
  if (role === 'expert') return <Navigate to="/dashexpert" replace />;
  
  return children;
};

// 4. مكون المسارات العامة
const PublicRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  
  if (token) {
    const role = user?.accountType || user?.role;
    if (role === 'admin') return <Navigate to="/admin/dashboard" replace />;
    return role === 'expert' ? <Navigate to="/dashexpert" replace /> : <Navigate to="/consultants" replace />;
  }
  return children;
};

// 5. مكون لاي أوت الأدمن الجديد (Admin Layout)
const AdminLayout = () => {
  return (
    <div className="flex bg-[#F9FBFF] min-h-screen" dir="rtl">
      <AdminSidebar />
      <main className="flex-1 md:mr-64"> {/* الـ margin لضمان عدم تداخل السايد بار مع المحتوى */}
        <Outlet />
      </main>
    </div>
  );
};
// ----------------------------------------------------

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    if (token) { dispatch(fetchMe()); }
  }, [dispatch, token]); 

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, 
        { path: "contact", element: <ContactUsPage /> }, 
        { path: "faq", element: <FaqPagee /> },
        { path: "aboutPage", element: <AboutPage /> },
        { path: "login", element: <PublicRoute><Login /></PublicRoute> },
        { path: "regster", element: <PublicRoute><Regster /></PublicRoute> },
        { path: "verify-email", element: <VerifyEmailPage /> }, 
        { path: "forget", element: <ForgetPassword /> }, 
        { path: "waiting-approval", element: <WaitingApproval /> },

        // مسارات العملاء فقط
        { path: "consultants", element: <ClientRoute><Consultants /></ClientRoute> },
        { path: "ProfilePage", element: <ClientRoute><ProfilePage /></ClientRoute> },
        { path: "BookingPage", element: <ClientRoute><BookingPage /></ClientRoute> },
        { path: "dashboardclient", element: <ClientRoute><DashboardPage /></ClientRoute> },
        
        // مسارات الخبراء فقط
        { path: "dashexpert", element: <ExpertRoute><Dashexpertpage /></ExpertRoute> }, 
      ]
    },

    // مسارات الأدمن (بهيكل منفصل عن الـ Layout الرئيسي)
    {
      path: "/admin",
      element: <AdminRoute><AdminLayout /></AdminRoute>,
      children: [
        { path: "dashboard", element: <AdminDashboard /> },
        // مستقبلاً يمكنك إضافة /admin/users هنا
      ]
    },
    
    { path: "registrationportal", element: <RegistrationPortal /> },
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