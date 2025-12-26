import React from 'react';
import { FiUsers, FiTrendingUp, FiDollarSign, FiAward } from 'react-icons/fi';

// مكون داخلي صغير لا نحتاج لتصديره
const SingleStat = ({ icon: Icon, value, label, colorClass, bgClass }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <div className={`p-3 rounded-full mb-3 ${bgClass}`}>
      <Icon className={`w-6 h-6 ${colorClass}`} />
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-1 dir-ltr">{value}</h3>
    <p className="text-sm text-gray-500 font-medium">{label}</p>
  </div>
);

const StatsGrid = () => {
  const stats = [
    { icon: FiUsers, value: "+500", label: "مستشار نشط", bg: "bg-blue-50", color: "text-blue-600" },
    { icon: FiTrendingUp, value: "+10K", label: "استشارة شهرياً", bg: "bg-green-50", color: "text-green-600" },
    { icon: FiDollarSign, value: "$1000+", label: "متوسط الدخل", bg: "bg-purple-50", color: "text-purple-600" },
    { icon: FiAward, value: "4.8/5", label: "تقييم المنصة", bg: "bg-orange-50", color: "text-orange-600" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {stats.map((stat, idx) => (
        <SingleStat 
          key={idx}
          icon={stat.icon} 
          value={stat.value} 
          label={stat.label} 
          bgClass={stat.bg} 
          colorClass={stat.color}
        />
      ))}
    </div>
  );
};

export default StatsGrid;
