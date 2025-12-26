import React, { useState } from 'react';
import UserHeader from '../../components/dashboardConsultants/UserHeader';
import StatsCards from '../../components/dashboardConsultants/StatsCards';
import TabNavigation from '../../components/dashboardConsultants/TabNavigation';
import UpcomingConsultations from '../../components/dashboardConsultants/UpcomingConsultations';
import ProfileForm from '../../components/dashboardConsultants/ProfileForm';
import HistoryConsultations from '../../components/dashboardConsultants/HistoryConsultations';


const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('consultations'); // التبويب الافتراضي

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20" dir="rtl">
      {/* الرأس الهيدر */}
      <UserHeader />

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-16">
        {/* بطاقات الإحصائيات */}
        <StatsCards />

        {/* أزرار التنقل بين التبويبات */}
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* المحتوى المتغير بناءً على التبويب */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 mt-8 min-h-[400px] ">
          {activeTab === 'consultations' && <UpcomingConsultations />}
          {activeTab === 'history' && <HistoryConsultations />}
          {activeTab === 'profile' && <ProfileForm />}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;