import React from "react";
import { FaChartLine, FaCalendarAlt } from "react-icons/fa";

const AnalyticsTab = () => {
  const monthlyStats = [
    { month: "يناير", value: 8500, percentage: 80 },
    { month: "فبراير", value: 9200, percentage: 85 },
    { month: "مارس", value: 7800, percentage: 70 },
    { month: "أبريل", value: 10500, percentage: 95 },
    { month: "مايو", value: 11200, percentage: 100 },
    { month: "يونيو", value: 9800, percentage: 90 },
  ];

  const services = [
    { name: "استشارة مالية", amount: "24,000", percentage: 52, color: "bg-green-500" },
    { name: "استشارة صوتية", amount: "15,800", percentage: 35, color: "bg-emerald-500" },
    { name: "استشارة نصية", amount: "6,000", percentage: 13, color: "bg-green-400" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Services Breakdown */}
        <div className="bg-white rounded-[30px] border border-gray-100 p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800">الأرباح حسب نوع الخدمة</h3>
           </div>
           <div className="space-y-6">
              {services.map((service, idx) => (
                  <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">{service.name}</span>
                          <span className="text-sm font-bold text-gray-800 dir-ltr">{service.amount} ج.م</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${service.color}`} 
                                style={{ width: `${service.percentage}%` }}
                              ></div>
                          </div>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded-lg text-gray-600">{service.percentage}%</span>
                      </div>
                  </div>
              ))}
           </div>
        </div>


        
        {/* Monthly Earnings Chart */}
        <div className="bg-white rounded-[30px] border border-gray-100 p-8 shadow-sm">
           <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800">الأرباح الشهرية</h3>
           </div>
           <div className="space-y-4">
              {monthlyStats.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                      <span className="w-12 text-sm text-gray-500">{item.month}</span>
                      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-600 rounded-full transition-all duration-500" 
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                      </div>
                      <span className="w-16 text-sm font-bold text-gray-700 text-left dir-ltr">{item.value} ج.م</span>
                  </div>
              ))}
           </div>
        </div>

        


      </div>

      {/* Small Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <div className="bg-white p-6 rounded-[25px] border border-gray-100 flex items-center justify-between">
            <div>
                <p className="text-gray-500 text-sm mb-1">نمو الأرباح</p>
                <h4 className="text-2xl font-bold text-gray-800">+26%</h4>
            </div>
            <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl"><FaChartLine size={24}/></div>
         </div>
         <div className="bg-white p-6 rounded-[25px] border border-gray-100 flex items-center justify-between">
            <div>
                <p className="text-gray-500 text-sm mb-1">متوسط سعر الجلسة</p>
                <h4 className="text-2xl font-bold text-gray-800">369 ج.م</h4>
            </div>
            <div className="p-3 bg-green-100 text-green-600 rounded-2xl"><span className="text-xl font-bold">$</span></div>
         </div>
         <div className="bg-white p-6 rounded-[25px] border border-gray-100 flex items-center justify-between">
            <div>
                <p className="text-gray-500 text-sm mb-1">إجمالي الجلسات</p>
                <h4 className="text-2xl font-bold text-gray-800">124</h4>
            </div>
            <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl"><FaCalendarAlt size={24}/></div>
         </div>
      </div>
    </div>
  );
};

export default AnalyticsTab;