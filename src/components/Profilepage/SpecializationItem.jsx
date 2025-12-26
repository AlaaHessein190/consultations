// src/components/SpecializationItem.jsx
import React from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline'; 

const SpecializationItem = ({ name }) => {
  return (
    <div className="flex items-center p-3 bg-gray-50 rounded-lg mb-2">
      <DocumentTextIcon className="w-5 h-5 text-indigo-500 ml-2" />
      <p className="text-md text-gray-800">{name}</p>
    </div>
  );
};

export default SpecializationItem;