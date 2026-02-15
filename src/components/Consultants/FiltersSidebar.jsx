import React from 'react';

const FiltersSidebar = () => {
  const specialties = [
    'القانون التجاري', 'الاستشارات المالية', 'التقنية والبرمجة', 
    'الصحة النفسية', 'التسويق والإعلام', 'الموارد البشرية', 
    'إدارة الأعمال', 'التعليم والتدريب'
  ];

  return (
    <aside className="w-full md:w-[300px] bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm h-fit sticky top-4">
      <div className="flex items-center gap-2 mb-8 border-b border-gray-50 pb-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
          <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
          <line x1="2" y1="14" x2="6" y2="14" /><line x1="10" y1="8" x2="14" y2="8" /><line x1="18" y1="16" x2="22" y2="16" />
        </svg>
        <h2 className="font-bold text-lg text-gray-800">الفلاتر</h2>
      </div>

      {/* النطاق السعري */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-800 mb-6">النطاق السعري</h3>
        <div className="relative h-2 bg-slate-900 rounded-full mb-4">
            <div className="absolute -top-1 right-0 w-4 h-4 bg-white border-2 border-slate-900 rounded-full shadow-sm"></div>
            <div className="absolute -top-1 left-0 w-4 h-4 bg-white border-2 border-slate-900 rounded-full shadow-sm"></div>
        </div>
        <div className="flex justify-between text-[11px] font-bold text-gray-400">
          <span>0 ج.م</span>
          <span>2000 ج.م</span>
        </div>
      </div>

      {/* التخصص */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-800 mb-4">التخصص</h3>
        <div className="space-y-3">
          {specialties.map((s) => (
            <div key={s} className="flex items-center justify-between group cursor-pointer">
              <label className="text-xs font-medium text-gray-500 group-hover:text-blue-600 transition-colors">{s}</label>
              <input type="checkbox" className="w-4 h-4 border-gray-200 rounded text-blue-600 focus:ring-blue-500" />
            </div>
          ))}
        </div>
      </div>

      {/* التقييم */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-800 mb-4">التقييم</h3>
        {[5, 4, 3].map((star) => (
          <div key={star} className="flex items-center justify-between mb-3">
             <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-gray-600">+{star}</span>
                <span className="text-yellow-400">★</span>
             </div>
             <input type="checkbox" className="w-4 h-4 border-gray-200 rounded text-blue-600" />
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
         <span className="text-xs font-bold text-gray-600">مستشارين معتمدين فقط</span>
         <input type="checkbox" defaultChecked className="w-4 h-4 rounded-md text-blue-600" />
      </div>
    </aside>
  );
};

export default FiltersSidebar;