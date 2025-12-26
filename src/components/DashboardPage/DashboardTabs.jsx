import React from "react";
import { FaChartPie, FaCommentAlt, FaCalendarAlt, FaStar } from "react-icons/fa";

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "overview", label: "نظرة عامة", icon: <FaChartPie /> },
    { id: "messages", label: "الرسائل", icon: <FaCommentAlt />, badge: 2 },
    { id: "appointments", label: "المواعيد", icon: <FaCalendarAlt /> },
    { id: "ratings", label: "التقييمات", icon: <FaStar /> },
  ];

  return (
    // التعديل هنا: w-full و justify-between لتوزيع التابات
    <div className="flex items-center justify-between w-full gap-2 overflow-x-auto pb-2 md:pb-0">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          // التعديل هنا: flex-1 لتأخذ الأزرار مساحات متساوية و justify-center لتوسيط المحتوى
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 whitespace-nowrap
            ${
              activeTab === tab.id
                ? "bg-white shadow-sm text-blue-600 font-bold"
                : "text-gray-500 hover:bg-gray-100"
            }
          `}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
          {/* Badge */}
          {tab.badge && (
            <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2">
              {tab.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default DashboardTabs;