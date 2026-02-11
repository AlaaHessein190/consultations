import React from 'react';
import { useSelector } from 'react-redux';
import ConsultantCard from '../ConsultantCard/ConsultantCard';

const ConsultantsGrid = () => {
  // التعديل: بنقرأ من allExperts (قائمة الكل) بدل topExperts
  const { allExperts, loading } = useSelector((state) => state.experts);

  if (loading) {
    return (
      <div className="w-full md:w-3/4 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <section className="w-full md:w-3/4">
      <div className="mb-6 flex justify-between items-center flex-row-reverse px-2">
        <span className="text-gray-700 font-bold">عرض {allExperts?.length || 0} مستشارًا</span>
        <select className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
          <option>الأعلى تقييماً</option>
          <option>الأقل سعراً</option>
          <option>الأحدث</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allExperts && allExperts.length > 0 ? (
          allExperts.map((expert) => (
            <ConsultantCard 
              key={expert._id} 
              id={expert._id} // ✅ هذا هو التعديل المطلوب لربط صفحة البروفايل
              name={expert.username}
              specialty={expert.hasExpertProfile?.specialty || "مستشار متخصص"}
              rating={expert.hasExpertProfile?.rating || 5}
              reviews={expert.hasExpertProfile?.numReviews || 0}
              price={expert.hasExpertProfile?.sessionPrice || 0}
              imageUrl={expert.avatar?.url}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-gray-100">
             <p className="text-gray-400 font-bold text-xl">لا يوجد مستشارين حالياً</p>
             <p className="text-gray-300 text-sm mt-2 font-medium">حاول تغيير فلاتر البحث أو التأكد من قبول المستشارين من الإدارة</p>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-300 transition font-bold text-sm">
          تحميل المزيد
        </button>
      </div>
    </section>
  );
};

export default ConsultantsGrid;