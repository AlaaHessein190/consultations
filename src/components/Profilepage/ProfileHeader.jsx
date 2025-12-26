// src/components/ProfileHeader.jsx
import React from 'react';

const ProfileHeader = ({ name, title, rating, reviewsCount, experience, imageUrl }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm mb-4">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 rounded-full border-2 border-indigo-500 object-cover"
        />
        <span className="absolute bottom-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-full">متصل</span>
      </div>
      <div className="ml-4">
        <h1 className="text-xl font-bold text-gray-900">{name}</h1>
        <p className="text-sm text-gray-600">{title}</p>
        <div className="flex items-center mt-1">
          <span className="text-yellow-500 font-bold mr-1">{rating}</span>
          <span className="text-gray-500 text-sm">({reviewsCount} تقييم)</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-500 text-sm">{experience} سنة خبرة</span>
        </div>
        <p className="text-sm text-gray-700 mt-2 max-w-md">
          استشاري قانوني معتمد بخبرة {experience} عاماً في المجال القانوني التجاري والشركات، متخصص في صياغة ومراجعة العقود التجارية، والاستشارات القانونية للمؤسسات والشركات الناشئة.
        </p>
        <div className="mt-3 flex space-x-2">
          <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-md hover:bg-indigo-700">تواصل الآن</button>
          <button className="bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-300">رسالة</button>
          <button className="bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-300">متابعة</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;