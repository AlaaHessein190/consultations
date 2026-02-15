import React from 'react';
import { useSelector } from 'react-redux';
import ConsultantCard from '../ConsultantCard/ConsultantCard';

const ConsultantsGrid = () => {
  const { allExperts, loading } = useSelector((state) => state.experts);

  if (loading) {
    return (
      <div className="flex-1 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <section className="flex-1">
      {/* شريط الإحصائيات العلوي */}
      <div className="mb-6 flex flex-row-reverse justify-between items-center px-2">
        <div className="text-gray-400 text-sm">
          عرض <span className="text-gray-900 font-bold mx-1">{allExperts?.length || 12}</span> 
          من <span className="text-gray-900 font-bold mx-1">50</span> مستشار
        </div>
       
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allExperts && allExperts.length > 0 ? (
          allExperts.map((expert) => (
            <ConsultantCard 
              key={expert._id} 
              id={expert._id} 
              name={expert.username}
              specialty={expert.expertProfile?.specialty} 
              rating={expert.expertProfile?.rateing} 
              reviews={expert.expertProfile?.numReviews}
              price={expert.expertProfile?.sessionPrice}
              imageUrl={expert.avatar?.url}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-white rounded-[32px] border border-dashed border-gray-200">
             <p className="text-gray-400 font-bold">لا يوجد مستشارين حالياً</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConsultantsGrid;