import { HiOutlineArrowRight, HiOutlineBell, HiOutlineCog } from "react-icons/hi";
import { useSelector } from "react-redux"; // لاستخراج البيانات
import { useNavigate } from "react-router-dom"; // لتفعيل زر العودة

const UserHeader = () => {
  // 1. جلب بيانات المستخدم من Redux
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-gray-100 pt-6 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-10">
        
        {/* زر العودة - يعود خطوة للخلف عند الضغط */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 text-sm font-medium cursor-pointer hover:text-blue-600 transition-colors"
        >
          <HiOutlineArrowRight /> العودة 
        </button>

        {/* أيقونات الإعدادات والتنبيهات */}
        <div className="flex items-center gap-4 text-gray-400">
          <HiOutlineCog size={22} className="cursor-pointer hover:text-gray-600" />
          <HiOutlineBell size={22} className="cursor-pointer hover:text-gray-600" />
        </div>
      </div>
      
      {/* عرض بيانات المستخدم الديناميكية */}
      <div className="max-w-7xl mx-auto flex items-center  gap-6">
        {/* صورة الملف الشخصي الحقيقية */}
        <img 
          src={user?.image || user?.profileImage || "https://ui-avatars.com/api/?name=" + (user?.name || "U") + "&background=random"} 
          alt="Profile" 
          className="w-20 h-20 rounded-full border-4 border-gray-50 object-cover shadow-sm" 
        />

        <div className="text-right">
          {/* عرض الاسم - نستخدم fullName أو name حسب ما يرسله الباك-إند */}
          <h1 className="text-2xl font-bold text-gray-800">
             { user?.username || "مستخدم"}
          </h1>
          {/* عرض البريد الإلكتروني */}
          <p className="text-gray-400 text-sm">{user?.email || "email@example.com"}</p>
          
          {/* تاريخ الانضمام - إذا كان موجوداً في البيانات، وإلا يظهر افتراضياً */}
          <span className="text-xs text-gray-300 mt-1 block">
             عضو منذ {user?.createdAt ? new Date(user.createdAt).getFullYear() : '2024'}
          </span>
        </div>

        
      </div>
    </div>
  );
};

export default UserHeader;