// components/LocationSection.jsx
import React from 'react';

const LocationSection = () => {
  return (
    <div className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">موقعنا</h2>
      <p className="text-center text-gray-600 mb-10">زورنا في مقرنا الرئيسي بالرياض</p>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center h-80 border border-gray-200">
        <div className="text-gray-400 text-6xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <p className="text-gray-500 text-lg">هنا سيتم عرض الخريطة</p>
        <p className="text-sm text-gray-400 mt-2">شارع الملك فهد، حي العليا، الرياض</p>
      </div>
    </div>
  );
};

export default LocationSection;