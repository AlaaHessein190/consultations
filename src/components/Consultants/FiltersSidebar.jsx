import React from 'react';

const FiltersSidebar = () => {
  const specialties = ['استشاري أسري', 'استشاري نفسي', 'استشاري مالي', 'استشاري مهني', 'استشاري أعمال', 'استشاري تغذية'];
  const ratings = [5, 4, 3, 2, 1];

  return (
    <aside className="w-full md:w-1/4 bg-gray-50 p-6 rounded-lg shadow-sm">
      <h2 className="font-semibold text-xl text-gray-800 mb-4">الفلاتر</h2>

      <div className="mb-6">
        <label htmlFor="price-range" className="block text-gray-700 font-medium mb-2">النطاق السعري</label>
        <input type="range" id="price-range" min="0" max="1000" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0ج.م</span>
          <span>2000ج.م</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="block text-gray-700 font-medium mb-2">التخصص</h3>
        <div className="space-y-2">
          {specialties.map((specialty) => (
            <div key={specialty} className="flex items-center">
              <input type="checkbox" id={specialty} className="h-4 w-4 text-blue-600 rounded" />
              <label htmlFor={specialty} className="ml-2 text-gray-700">{specialty}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="block text-gray-700 font-medium mb-2">التقييم</h3>
        <div className="space-y-2">
          {ratings.map((star) => (
            <div key={star} className="flex items-center">
              <input type="checkbox" id={`star-${star}`} className="h-4 w-4 text-blue-600 rounded" />
              <label htmlFor={`star-${star}`} className="ml-2 text-gray-700">
                {'⭐'.repeat(star)} فما فوق
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
        تطبيق الفلاتر
      </button>
    </aside>
  );
};

export default FiltersSidebar;