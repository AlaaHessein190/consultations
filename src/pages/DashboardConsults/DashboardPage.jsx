import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMe } from '../../redux/slices/userSlice';
import UserHeader from '../../components/dashboardConsultants/UserHeader';
import StatsCards from '../../components/dashboardConsultants/StatsCards';
import TabNavigation from '../../components/dashboardConsultants/TabNavigation';
import UpcomingConsultations from '../../components/dashboardConsultants/UpcomingConsultations';
import HistoryConsultations from '../../components/dashboardConsultants/HistoryConsultations';
import ProfileForm from '../../components/dashboardConsultants/ProfileForm';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(fetchMe()); // جلب بيانات اليوزر الحقيقية فور دخول الصفحة
    }
  }, [dispatch, token]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20" dir="rtl">
      {/* الجزء العلوي */}
      <UserHeader />

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-16">
        {/* إحصائيات سريعة */}
        <StatsCards />

        {/* أزرار التبديل */}
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* محتوى التبويبات المتغير */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 mt-8 min-h-[400px] animate-fadeIn">
          {activeTab === 'profile' && <ProfileForm />}
          {activeTab === 'consultations' && <UpcomingConsultations />}
          {activeTab === 'history' && <HistoryConsultations />}
          
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;