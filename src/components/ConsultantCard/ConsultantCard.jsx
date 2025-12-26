import React from 'react';
// 1. استيراد Link من مكتبة الراوتر
import { Link } from 'react-router-dom';

const ConsultantCard = ({ name, specialty, rating, reviews, price, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* تغليف الصورة بمكون Link للذهاب لبروفايل المستشار */}
      <Link to="/ProfilePage" className="cursor-pointer block hover:opacity-90 transition-opacity">
        <img 
          src={imageUrl || "https://via.placeholder.com/400x300"} 
          alt={name} 
          className="w-full h-40 object-cover" 
        />
      </Link>

      <div className="p-4 text-right" dir="rtl"> {/* أضفت تنسيق اليمين ليتناسب مع اللغة العربية */}
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{specialty}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-sm">{'⭐'.repeat(Math.floor(rating))}</span>
          <span className="text-gray-500 text-xs mr-1">({reviews} مراجعات)</span>
        </div>
        <p className="text-gray-700 font-bold mt-2">{price} ج.م</p>

        {/* 2. تحويل الزر إلى Link وتوجيهه لصفحة الحجز */}
        <Link 
          to="/BookingPage" 
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 block text-center font-medium"
        >
          احجز الآن
        </Link>
      </div>
    </div>
  );
};

export default ConsultantCard;