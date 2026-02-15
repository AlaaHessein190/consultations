import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllExperts } from '../../redux/slices/expertsSlice';
import FiltersSidebar from '../../components/Consultants/FiltersSidebar'; 
import ConsultantsGrid from '../../components/Consultants/ConsultantsGrid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Consultants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllExperts());
  }, [dispatch]);

  return (
    <div className="font-sans bg-[#F8FAFC] min-h-screen pb-10" dir="rtl">
      {/* قسم العنوان والبحث العلوي */}
      <div className="bg-white border-b border-gray-100 py-12 mb-8">
        <div className="container mx-auto px-4 text-center">
           <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
             +50 مستشار معتمد
           </span>
           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">تصفح جميع المستشارين</h1>
           
           {/* النص المضاف من الصورة */}
           <p className="text-gray-500 text-lg mb-8">
             اختر المستشار الأنسب لك من بين نخبة من الخبراء المعتمدين
           </p>

           <div className="max-w-2xl mx-auto relative flex items-center gap-2">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="ابحث عن مستشار أو تخصص..." 
                  className="w-full pl-4 pr-12 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-right"
                />
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
              </div>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                بحث
              </button>
           </div>
        </div>
      </div>

      <main className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          <FiltersSidebar />
          <ConsultantsGrid />
        </div>
      </main>
    </div>
  );
};

export default Consultants;