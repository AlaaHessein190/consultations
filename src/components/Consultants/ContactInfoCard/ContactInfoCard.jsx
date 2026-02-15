import React from 'react';
import { Link } from 'react-router-dom';

const ConsultantCard = ({ id, name, specialty, rating, reviews, price, imageUrl }) => {
  const displayName = name || "مستشار";
  // منطق الصورة الاحتياطية
  const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=6366f1&color=fff&bold=true`;
  const avatarSrc = (!imageUrl || imageUrl === "" || imageUrl === "null") ? fallbackAvatar : imageUrl;

  return (
    // ✅ هنا يُضاف الرابط للانتقال لصفحة البروفايل باستخدام الـ id الحقيقي
    <Link to={`/ProfilePage/${id}`} className="block transition-transform hover:scale-[1.02]">
      <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group duration-300 h-full">
        <div className="relative h-56 overflow-hidden bg-gray-50 flex items-center justify-center">
          <img 
            src={avatarSrc} 
            alt={displayName} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => { e.target.src = fallbackAvatar; }} 
          />
        </div>
        
        <div className="p-6 text-center">
          <h3 className="font-bold text-xl text-gray-800 mb-1 text-right">د. {displayName}</h3>
          <p className="text-blue-600 font-bold text-sm mb-4 text-right">{specialty || "مستشار متخصص"}</p>
          
          <div className="flex justify-start items-center gap-1 mb-6 flex-row-reverse">
             <span className="text-yellow-400 text-sm">
               {'★'.repeat(Math.floor(rating || 5))}
             </span>
             <span className="text-gray-400 text-xs font-medium">({reviews || 0} مراجعات)</span>
          </div>

          <div className="flex justify-between items-center pt-5 border-t border-gray-50">
             <div className="text-right">
                {/* عرض السعر الحقيقي */}
                <span className="block text-2xl font-black text-gray-900">{price || 0}</span>
                <span className="text-[10px] text-gray-400 font-bold">ج.م</span>
             </div>
             <button className="bg-blue-600 text-white px-6 py-2.5 rounded-2xl text-sm font-bold hover:bg-blue-700 transition-all">
                احجز الآن
             </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ConsultantCard;