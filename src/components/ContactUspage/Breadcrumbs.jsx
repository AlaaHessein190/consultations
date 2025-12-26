import React from 'react';
import { useNavigate } from 'react-router-dom'; // للتحكم في التنقل
import { HiOutlineArrowRight } from 'react-icons/hi'; // أيقونة العودة

const Breadcrumbs = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white py-4 px-6 md:px-12 shadow-sm border-b border-gray-100" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto flex items-center justify-end"> {/* المحاذاة لليمين لليناسب العربية */}
        <button
          onClick={() => navigate(-1)} // العودة للصفحة السابقة في المتصفح
          className="text-gray-600 hover:text-blue-600 flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer"
        >
          <span>العودة  </span>
          <HiOutlineArrowRight size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Breadcrumbs;