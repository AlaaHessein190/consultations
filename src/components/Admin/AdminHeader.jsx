import React from 'react';

const AdminHeader = ({ count }) => {
  return (
    <header className="mb-10 flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-[35px] shadow-sm border border-gray-50 gap-4">
      <div className="text-right">
        <h1 className="text-3xl font-black text-gray-900">طلبات التوثيق</h1>
        <p className="text-gray-500 font-medium">مراجعة واعتماد حسابات المستشارين الجدد</p>
      </div>
      <div className="bg-gray-900 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2">
        <span className="bg-blue-500 w-2 h-2 rounded-full animate-pulse"></span>
        {count} طلبات بانتظار الرد
      </div>
    </header>
  );
};

export default AdminHeader;