import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { FaCamera, FaPlus, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// تم حذف updateMe من الاستيراد
import { updateAvatar, removeAvatar } from "../../redux/slices/userSlice"; 
import { toast } from "react-hot-toast";

const BasicInfo = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const { profileData, loading } = useSelector((state) => state.user);
  const expertInfo = profileData?.hasExpertProfile;

  // حالة محلية لإدارة بيانات الفورم (تبقي الحقول قابلة للكتابة والعرض)
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (profileData) {
      setFormData({
        username: profileData.username || "",
        phone: profileData.phone || "",
        role: profileData.role || "expert",
        specialty: expertInfo?.specialty || "business",
        aboutYou: expertInfo?.aboutYou || "",
        location: expertInfo?.location || "",
        yearsOfExperience: expertInfo?.yearsOfExperience || 0,
      });
    }
  }, [profileData, expertInfo]);

  // دالة الـ ref التي يستدعيها الأب (تم إفراغ منطق الإرسال للسيرفر)
  useImperativeHandle(ref, () => ({
    submitTab: () => {
      // هنا تم حذف الـ dispatch الخاص بـ updateMe
      console.log("تم ضغط حفظ، ولكن الربط مع API التحديث معطل حالياً.");
    }
  }));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- منطق الصورة (باقي كما هو تماماً مع حل مشكلة اختيار نفس الصورة) ---
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadToast = toast.loading("جاري رفع الصورة...");
      dispatch(updateAvatar(file)).unwrap()
        .then(() => {
          toast.success("تم التحديث بنجاح", { id: uploadToast });
          e.target.value = ""; // تصفير الـ input للسماح برفع نفس الصورة مرة أخرى
        })
        .catch((err) => {
          toast.error(err, { id: uploadToast });
          e.target.value = "";
        });
    }
  };

  const handleRemoveAvatar = () => {
    if (window.confirm("هل أنت متأكد من حذف الصورة الشخصية؟")) {
      const removeToast = toast.loading("جاري الحذف...");
      dispatch(removeAvatar()).unwrap()
        .then(() => {
          toast.success("تم الحذف بنجاح", { id: removeToast });
          if (fileInputRef.current) fileInputRef.current.value = "";
        })
        .catch((err) => toast.error(err, { id: removeToast }));
    }
  };

  const username = profileData?.username || "U";
  const fallbackAvatar = `https://ui-avatars.com/api/?name=${username}&background=random&color=fff`;
  const avatarSrc = (!profileData?.avatar?.url || profileData?.avatar?.url.includes('default')) ? fallbackAvatar : profileData.avatar.url;

  if (loading && !profileData) return <div className="p-10 text-center text-blue-600 font-bold">جاري تحميل بياناتك...</div>;

  return (
    <div className="space-y-8 animate-fadeIn text-right" dir="rtl">
      <h2 className="text-xl font-bold text-gray-800 mb-6">المعلومات الأساسية</h2>
      
      {/* تصميم قسم الصورة الشخصية - شغال بالكامل */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="relative order-1 md:order-1">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm">
             <img src={avatarSrc} alt="Profile" className="w-full h-full object-cover" onError={(e) => { e.target.src = fallbackAvatar; }} />
          </div>
          <button onClick={() => fileInputRef.current.click()} className="absolute bottom-1 right-1 bg-[#1E293B] text-white p-2 rounded-full hover:bg-black transition-colors cursor-pointer">
            <FaCamera size={14} />
          </button>
          <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
        </div>
        <div className="text-center md:text-right order-2 md:order-2">
            <h3 className="font-bold text-gray-700">الصورة الشخصية</h3>
            <p className="text-sm text-gray-500 mb-3">صورة احترافية واضحة تساعد العملاء على التعرف عليك</p>
            <div className="flex gap-2 justify-center md:justify-start">
                <button onClick={() => fileInputRef.current.click()} className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition cursor-pointer font-bold">تحميل صورة جديدة</button>
                {profileData?.avatar?.url && !profileData.avatar.url.includes('default') && (
                  <button onClick={handleRemoveAvatar} className="px-4 py-2 border border-red-100 rounded-lg text-sm text-red-600 hover:bg-red-50 transition cursor-pointer font-bold">حذف الصورة</button>
                )}
            </div>
        </div>
      </div>

      {/* تصميم الحقول - تعمل عرضاً فقط (دون حفظ للسيرفر) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">اسم المستخدم *</label>
            <input name="username" type="text" value={formData.username || ""} onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition text-right font-medium" />
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">نوع الحساب</label>
            <input 
              type="text" 
              value={formData.role === "expert" ? "مستشار / خبير" : "عميل"} 
              disabled 
              className="w-full bg-gray-100 border border-gray-100 rounded-xl px-4 py-3 text-gray-500 text-right cursor-not-allowed font-medium" 
            />
        </div>
        
        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">المسمى الوظيفي</label>
            <input type="text" value={formData.specialty ? `استشاري ${formData.specialty}` : ""} disabled className="w-full bg-gray-100 border border-gray-100 rounded-xl px-4 py-3 text-gray-400 text-right cursor-not-allowed font-medium" />
        </div>
        
        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">التخصص الرئيسي *</label>
            <select name="specialty" value={formData.specialty || ""} onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition text-right font-medium cursor-pointer">
                <option value="business">الاستشارات الإدارية (Business)</option>
                <option value="law">القانون التجاري</option>
                <option value="finance">الاستشارات المالية</option>
            </select>
        </div>

        <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">نبذة تعريفية *</label>
            <textarea name="aboutYou" rows="4" value={formData.aboutYou || ""} onChange={handleChange} placeholder="اكتب نبذة تعريفية مختصرة..." className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition resize-none text-right font-medium"></textarea>
            <div className="text-left text-xs text-gray-400 mt-1">{formData.aboutYou?.length || 0} / 500 حرف</div>
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">رقم الجوال *</label>
            <input name="phone" type="text" value={formData.phone || ""} onChange={handleChange} dir="ltr" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition font-medium" />
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني (مؤمن)</label>
            <input type="email" value={profileData?.email || ""} disabled className="w-full bg-gray-100 border border-gray-100 rounded-xl px-4 py-3 text-gray-400 text-right cursor-not-allowed font-medium" />
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">الموقع *</label>
            <input name="location" type="text" value={formData.location || ""} onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition text-right font-medium" />
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">سنوات الخبرة *</label>
            <input name="yearsOfExperience" type="number" value={formData.yearsOfExperience || 0} onChange={handleChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition text-right font-medium" />
        </div>

        <div className="md:col-span-2 pt-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">اللغات</label>
            <div className="flex flex-wrap items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl p-2 min-h-[50px]">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm flex items-center gap-2 font-bold">العربية <FaTimes className="text-gray-500 cursor-pointer" /></span>
                <input type="text" placeholder="أضف لغة جديدة" className="bg-transparent outline-none flex-1 min-w-[120px] px-2 text-right" />
            </div>
        </div>
      </div>
    </div>
  );
});

export default BasicInfo;