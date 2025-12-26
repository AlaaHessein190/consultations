// src/components/EducationItem.jsx
import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/outline'; // للتوضيح، ستحتاج لتثبيت heroicons

const EducationItem = ({ degree, university, year }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-2">
      <div className="flex items-center">
        <AcademicCapIcon className="w-5 h-5 text-indigo-500 ml-2" />
        <div>
          <h3 className="text-md font-semibold text-gray-800">{degree}</h3>
          <p className="text-sm text-gray-600">{university}</p>
        </div>
      </div>
      <span className="text-sm text-gray-500">{year}</span>
    </div>
  );
};

export default EducationItem;