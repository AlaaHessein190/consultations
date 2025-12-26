// src/components/ConsultationCard.jsx
import React from 'react';
import { ClockIcon, ChatBubbleLeftRightIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/24/outline'; // للتوضيح، ستحتاج لتثبيت heroicons

const ConsultationCard = ({ type, description, duration, price, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center text-center">
      {Icon && <Icon className="w-10 h-10 text-indigo-600 mb-3" />}
      <h3 className="text-lg font-semibold text-gray-800">{type}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="flex items-center text-gray-700 text-sm mb-3">
        <ClockIcon className="w-4 h-4 ml-1" />
        <span>{duration}</span>
      </div>
      <p className="text-xl font-bold text-indigo-600 mb-4">{price}</p>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 w-full">احجز الآن</button>
    </div>
  );
};

export default ConsultationCard;