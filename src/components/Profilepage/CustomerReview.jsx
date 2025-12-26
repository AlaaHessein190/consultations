// src/components/CustomerReview.jsx
import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid'; 

const CustomerReview = ({ name, date, rating, comment }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-3 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-2">{comment}</p>
      <p className="text-xs text-gray-500 text-left">{date}</p>
    </div>
  );
};

export default CustomerReview;