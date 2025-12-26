import React from 'react'
import { Outlet, useLocation } from 'react-router-dom' // 1. استيراد useLocation
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'

function Layout() {
  const location = useLocation(); // 2. الحصول على معلومات الرابط الحالي

  // 3. قائمة بالصفحات التي تريدين إخفاء الناف بار والفوتر فيها
  // هام جداً: استبدلي '/consultant-login' بالرابط الفعلي للصفحة في مشروعك
  const hideLayoutRoutes = ['/consultant-login', '/register']; 

  // التحقق مما إذا كان الرابط الحالي موجود داخل القائمة
  const isHiddenPage = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {/* 4. الشرط: لو الصفحة ليست مخفية، اظهر الناف بار */}
      {!isHiddenPage && <Navbar />}
      
      <div className="">
        <Outlet />
      </div>

      {/* 5. الشرط: لو الصفحة ليست مخفية، اظهر الفوتر */}
      {!isHiddenPage && <Footer />}
    </>
  )
}

export default Layout