import React, { useState } from "react";
import DashboardTabs from "../../components/DashboardPage/DashboardTabs";
import OverviewTab from "../../components/DashboardPage/OverviewTab/OverviewTab";
import MessagesTab from "../../components/DashboardPage/MessagesTab/MessagesTab";
import AppointmentsTab from "../../components/DashboardPage/AppointmentsTab/AppointmentsTab";
import RatingsTab from "../../components/DashboardPage/RatingsTab/RatingsTab";


const Dashboardpage = () => {
  // الحالة لتحديد التاب النشط، الافتراضي هو "overview"
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      

      {/* 2. محتوى الصفحة */}
      <div className="container mx-auto px-4 py-8">
        
        {/* شريط التابات */}
        <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* عرض المحتوى بناءً على التاب المختار */}
        <div className="mt-6">
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "messages" && <MessagesTab />}
          {activeTab === "appointments" && <AppointmentsTab />}
          {activeTab === "ratings" && <RatingsTab />}
        </div>
      </div>
    </div>
  );
};

export default Dashboardpage;