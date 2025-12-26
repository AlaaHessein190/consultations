import { HiOutlineUserCircle } from "react-icons/hi";
import { useSelector } from "react-redux"; // 1. استيراد useSelector

const ProfileForm = () => {
  // 2. الوصول لبيانات المستخدم من Redux
  // تأكد أن أسماء الحقول (name, email, phone) مطابقة لما يرسله الباك-إند في كائن الـ user
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="max-w-2xl ml-auto animate-fadeIn">
      <h2 className="text-xl font-bold mb-8 text-right">الملف الشخصي</h2>
      <div className="space-y-6">
        
        {/* حقل الاسم */}
        <div>
          <label className="block text-xs text-gray-400 mb-2 mr-2 text-right">الاسم الكامل</label>
          <input 
            type="text" 
            defaultValue={user?.username || "مستخدم"} 
            className="w-full bg-gray-50 p-4 rounded-xl border border-gray-100 outline-none focus:border-blue-400 text-right" 
          />
        </div>

        {/* حقل البريد الإلكتروني */}
        <div>
          <label className="block text-xs text-gray-400 mb-2 mr-2 text-right">البريد الإلكتروني</label>
          <input 
            type="email" 
            defaultValue={user?.email || "غير محدد"} 
            className="w-full bg-gray-50 p-4 rounded-xl border border-gray-100 outline-none text-right" 
            disabled // يفضل جعل الإيميل للقراءة فقط إذا كان التعديل يحتاج إجراءات أخرى
          />
        </div>

        {/* حقل رقم الهاتف */}
        <div>
          <label className="block text-xs text-gray-400 mb-2 mr-2 text-right">رقم الهاتف</label>
          <input 
            type="text" 
            defaultValue={user?.phone || user?.phoneNumber || "لا يوجد رقم"} 
            className="w-full bg-gray-50 p-4 rounded-xl border border-gray-100 outline-none text-left font-sans" 
            dir="ltr" 
          />
        </div>

        {/* زر التعديل */}
        <div className="flex justify-end">
          <button className="bg-[#1E293B] text-white px-8 py-3 rounded-xl flex items-center gap-2 font-bold mt-4 hover:bg-slate-800 transition-colors">
            حفظ التغييرات <HiOutlineUserCircle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;