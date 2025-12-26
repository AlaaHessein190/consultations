// src/components/CertificateItem.jsx
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline'; 

const CertificateItem = ({ name }) => {
  return (
    <div className="flex items-center p-3 bg-gray-50 rounded-lg mb-2">
      <CheckCircleIcon className="w-5 h-5 text-green-500 ml-2" />
      <p className="text-md text-gray-800">{name}</p>
    </div>
  );
};

export default CertificateItem;