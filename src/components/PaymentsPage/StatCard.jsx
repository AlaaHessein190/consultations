import React from "react";

const StatCard = ({ title, value, subText, icon: Icon, isPrimary = false, trend }) => {
  return (
    <div
      className={`p-6 rounded-3xl flex flex-col justify-between h-40 shadow-sm transition-all hover:shadow-md
      ${isPrimary ? "bg-blue-600 text-white" : "bg-white border border-gray-100 text-gray-800"}`}
    >
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-2xl ${isPrimary ? "bg-white/20 text-white" : "bg-green-50 text-green-600"}`}>
          <Icon size={24} />
        </div>
        {trend && (
          <span className={`text-xs px-2 py-1 rounded-full ${isPrimary ? "bg-white/20" : "bg-green-100 text-green-700"}`}>
            {trend}
          </span>
        )}
        {/* Label for Primary Card */}
        {isPrimary && <span className="text-xs bg-white/20 px-2 py-1 rounded-full">إجمالي</span>}
      </div>

      <div>
        <h3 className={`text-3xl font-bold mb-1 ${isPrimary ? "text-white" : "text-gray-800"}`} dir="ltr">
          {value} <span className="text-lg font-normal">ج.م</span>
        </h3>
        <p className={`text-sm ${isPrimary ? "text-blue-100" : "text-gray-500"}`}>{subText}</p>
      </div>
    </div>
  );
};

export default StatCard;