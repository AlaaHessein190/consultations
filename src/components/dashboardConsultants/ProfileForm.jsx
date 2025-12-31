import { HiOutlineUserCircle } from "react-icons/hi";
import { useSelector } from "react-redux";

const ProfileForm = () => {
  const { profileData } = useSelector((state) => state.user);

  return (
    <div className="max-w-2xl ml-auto animate-fadeIn">
      <h2 className="text-xl font-bold mb-8 text-right text-gray-800">الملف الشخصي</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-xs text-gray-400 mb-2 mr-1 text-right">اسم المستخدم</label>
          <input 
            type="text" 
            key={profileData?.username} 
            defaultValue={profileData?.username || "جاري التحميل..."} 
            className="w-full bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-100 outline-none focus:border-blue-400 text-right font-medium text-sm" 
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-2 mr-1 text-right">البريد الإلكتروني</label>
          <input 
            type="email" 
            key={profileData?.email}
            defaultValue={profileData?.email} 
            className="w-full bg-gray-100 p-3 md:p-4 rounded-xl border border-gray-100 outline-none text-right text-gray-400 text-sm" 
            disabled 
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-2 mr-1 text-right">رقم الهاتف</label>
          <input 
            type="text" 
            key={profileData?.phone}
            defaultValue={profileData?.phone || "لا يوجد رقم مسجل"}  
            className="w-full bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-100 outline-none text-left font-sans text-sm" 
            dir="ltr" 
          />
        </div>

        <div className="flex justify-end pt-4">
          <button className="w-full md:w-auto bg-[#1E293B] text-white px-8 py-3 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg hover:bg-slate-800 transition-all active:scale-95">
            حفظ التغييرات <HiOutlineUserCircle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;