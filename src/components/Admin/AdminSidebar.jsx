import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUsers, FaUserCheck, FaChartBar, FaSignOutAlt, FaHome } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/slices/authSlice';
import logo from '../../assets/mo.png';

const AdminSidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const menuItems = [
    { id: 1, name: 'طلبات التوثيق', path: '/admin/dashboard', icon: <FaUserCheck /> },
    { id: 2, name: 'كل المستخدمين', path: '/admin/users', icon: <FaUsers /> },
    { id: 3, name: 'الإحصائيات', path: '/admin/stats', icon: <FaChartBar /> },
  ];

  return (
    <aside className="w-64 bg-white min-h-screen border-l border-gray-100 flex flex-col p-6 fixed right-0 top-0 shadow-sm" dir="rtl">
      {/* اللوجو */}
      <div className="flex items-center gap-2 mb-12 px-2">
        <img src={logo} alt="شعار" className="w-10 h-10 object-contain" />
        <div className="text-right">
          <h2 className="text-sm font-black text-gray-800 leading-tight">لوحة الإدارة</h2>
          <p className="text-[10px] text-blue-600 font-bold uppercase">Admin Panel</p>
        </div>
      </div>

      {/* الروابط */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ${
              location.pathname === item.path 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
              : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* أزرار سفلية */}
      <div className="pt-6 border-t border-gray-50 space-y-2">
        <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-500 font-bold hover:bg-gray-50 transition-all">
          <FaHome />
          <span className="text-sm">عرض الموقع</span>
        </Link>
        <button 
          onClick={() => dispatch(logoutUser())}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 font-bold hover:bg-red-50 transition-all cursor-pointer"
        >
          <FaSignOutAlt />
          <span className="text-sm">تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;