import React from 'react';

const ProfileHeader = ({ name, title, rating, reviewsCount, experience, imageUrl, about }) => {
  return (
    <div className="flex items-center p-6 bg-white rounded-2xl shadow-sm mb-4 text-right border border-gray-50" dir="rtl">
      <div className="relative shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-28 h-28 rounded-full border-2 border-indigo-500 object-cover shadow-md"
        />
        <span className="absolute bottom-1 right-1 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full border-2 border-white font-bold">متصل</span>
      </div>
      <div className="mr-6 flex-1">
        <h1 className="text-2xl font-black text-gray-900">{name}</h1>
        <p className="text-sm text-indigo-600 font-bold mb-2">{title || "مستشار متخصص"}</p>
        
        <div className="flex items-center text-sm mb-3">
          <span className="text-yellow-500 font-bold ml-1">★ {rating || 5}</span>
          <span className="text-gray-400">({reviewsCount || 0} تقييم)</span>
          <span className="mx-3 text-gray-200">|</span>
          <span className="text-gray-600 font-medium">{experience || 0} سنة خبرة</span>
        </div>
        
        <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
          {about || "لا توجد نبذة تعريفية متاحة حالياً."}
        </p>

        <div className="mt-4 flex gap-3">
          <button className="bg-indigo-600 text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-indigo-700 transition shadow-sm shadow-indigo-100">تواصل الآن</button>
          <button className="bg-gray-100 text-gray-700 text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-gray-200 transition">رسالة</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;