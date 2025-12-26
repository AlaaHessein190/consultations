import React from 'react';
 import FiltersSidebar from '../../components/Consultants/FiltersSidebar'; 
 import ConsultantsGrid from '../../components/Consultants/ConsultantsGrid';

const Consultants = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-8 mt-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">تصفح جميع الاستشاريين</h1>
        <p className="text-gray-600 mb-8">اختر المستشار الأنسب لك من بين نخبة من الخبراء المعتمدين</p>

        <div className="flex flex-col md:flex-row gap-8">
          { <FiltersSidebar /> }
          { <ConsultantsGrid /> }
        </div>
      </main>
    </div>
  );
};

export default Consultants;