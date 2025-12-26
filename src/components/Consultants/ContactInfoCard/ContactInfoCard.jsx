// components/ContactInfoCard.jsx
import React from 'react';

const ContactInfoCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center justify-center ${className}`}>
      <div className="text-blue-500 mb-4 text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      {Array.isArray(description) ? (
        description.map((line, index) => (
          <p key={index} className="text-gray-600 text-sm leading-relaxed">{line}</p>
        ))
      ) : (
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default ContactInfoCard;