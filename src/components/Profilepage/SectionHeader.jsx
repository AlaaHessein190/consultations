// src/components/SectionHeader.jsx
import React from 'react';

const SectionHeader = ({ title, icon: Icon }) => {
  return (
    <div className="flex items-center mb-4 mt-8">
      {Icon && <Icon className="w-6 h-6 text-gray-600 ml-2" />}
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
  );
};

export default SectionHeader;