import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  fetchAllExperts } from '../../redux/slices/expertsSlice';
import FiltersSidebar from '../../components/Consultants/FiltersSidebar'; 
import ConsultantsGrid from '../../components/Consultants/ConsultantsGrid';

const Consultants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // تشغيل الـ API بمجرد فتح الصفحة
    dispatch( fetchAllExperts());
  }, [dispatch]);

  return (
    <div className="font-sans bg-gray-50 min-h-screen pb-10" dir="rtl">
      <main className="container mx-auto px-4 py-12">
        <div className="text-right mb-10">
           <h1 className="text-4xl font-black text-gray-900 mb-4">تصفح جميع الاستشاريين</h1>
           <p className="text-lg text-gray-500">اختر المستشار الأنسب لك من بين نخبة من الخبراء المعتمدين</p>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8">
          <FiltersSidebar />
          <ConsultantsGrid />
        </div>
      </main>
    </div>
  );
};

export default Consultants;