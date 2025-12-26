import React from "react";

const StatCard = ({ title, value, percentage, icon: Icon, colorClass, bgClass }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-2xl ${bgClass} ${colorClass}`}>
          <Icon size={24} />
        </div>
        {percentage && (
          <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
            {percentage}
          </span>
        )}
      </div>
      <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
};

export default StatCard;