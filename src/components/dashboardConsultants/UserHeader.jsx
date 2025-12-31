import React, { useRef } from "react";
import { HiOutlineArrowRight, HiOutlineBell, HiOutlineCog } from "react-icons/hi";
import { FaCamera, FaTrash } from "react-icons/fa"; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAvatar, removeAvatar } from "../../redux/slices/userSlice"; 
import { toast } from "react-hot-toast";

const UserHeader = () => {
  const { profileData, loading, uploading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileInputRef = useRef(null); 

  const formatMemberDate = (dateString) => {
    if (!dateString) return "ديسمبر 2024";
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', { month: 'long', year: 'numeric' });
  };

  const username = profileData?.username || "U";
  const fallbackAvatar = `https://ui-avatars.com/api/?name=${username}&background=random&color=fff`;

  const getAvatarSrc = () => {
    const url = profileData?.avatar?.url;
    if (!url || url.includes('default') || url.includes('placeholder')) {
      return fallbackAvatar;
    }
    return url;
  };

  // 1. معالجة رفع/تحديث الصورة
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadToast = toast.loading("جاري رفع الصورة...");
      dispatch(updateAvatar(file))
        .unwrap()
        .then(() => {
          toast.success("تم تحديث الصورة بنجاح", { id: uploadToast });
          // الحل هنا: تصفير قيمة الـ input بعد نجاح الرفع
          e.target.value = ""; 
        })
        .catch((err) => {
          toast.error(err || "فشل الرفع", { id: uploadToast });
          // نغيرها هنا برضه لو حصل خطأ عشان يقدر يحاول تاني بنفس الملف
          e.target.value = "";
        });
    }
  };

  // 2. معالجة حذف الصورة
  const handleDeleteAvatar = () => {
    if (window.confirm("هل أنت متأكد من حذف صورتك الشخصية؟")) {
      const deleteToast = toast.loading("جاري حذف الصورة...");
      dispatch(removeAvatar())
        .unwrap()
        .then(() => {
          toast.success("تم حذف الصورة بنجاح", { id: deleteToast });
          // نضمن إن الـ input فاضي تماماً
          if (fileInputRef.current) fileInputRef.current.value = "";
        })
        .catch((err) => toast.error(err || "فشل الحذف", { id: deleteToast }));
    }
  };

  if (loading && !profileData) return <div className="p-10 text-center">جاري التحميل...</div>;

  return (
    <div className="bg-white border-b border-gray-100 pt-6 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 text-sm font-medium hover:text-blue-600 transition-all cursor-pointer"
        >
          <HiOutlineArrowRight /> العودة 
        </button>
        <div className="flex items-center gap-4 text-gray-400">
          <HiOutlineCog size={22} className="cursor-pointer hover:text-gray-600" />
          <HiOutlineBell size={22} className="cursor-pointer hover:text-gray-600" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex items-center gap-6">
        <div className="relative group">
          <div className={`w-24 h-24 rounded-full border-4 border-gray-50 overflow-hidden shadow-sm bg-gray-100 transition-opacity ${uploading ? 'opacity-50' : 'opacity-100'}`}>
            <img 
              src={getAvatarSrc()} 
              alt="Profile" 
              className="w-full h-full object-cover" 
               referrerPolicy="no-referrer"
              onError={(e) => {
                if (e.target.src !== fallbackAvatar) e.target.src = fallbackAvatar;
              }}
            />
          </div>

          <button 
            onClick={() => fileInputRef.current.click()}
            className="absolute bottom-1 right-0 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-all cursor-pointer border-2 border-white"
            title="تحديث الصورة"
          >
            <FaCamera size={12} />
          </button>

          {profileData?.avatar?.url && !profileData.avatar.url.includes('default') && (
            <button 
              onClick={handleDeleteAvatar}
              className="absolute -top-1 -right-1 bg-red-500 text-white p-1.5 rounded-full shadow-sm hover:bg-red-600 transition-all cursor-pointer border border-white"
              title="حذف الصورة"
            >
              <FaTrash size={10} />
            </button>
          )}

          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
          />
        </div>

        <div className="text-right">
          <h1 className="text-2xl font-bold text-gray-800">
              { profileData?.username || "مستخدم"}
          </h1>
          <p className="text-gray-400 text-sm">{profileData?.email || "email@example.com"}</p>
          <span className="text-xs text-gray-400 mt-1 block">
             عضو منذ {formatMemberDate(profileData?.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;