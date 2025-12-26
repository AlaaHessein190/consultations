import React from "react";
import { FaEye, FaFileDownload, FaFilter, FaArrowUp, FaArrowDown } from "react-icons/fa";

const TransactionsTab = () => {
  const transactions = [
    { id: "TXN-001", type: "income", client: "أحمد محمود", service: "استشارة قانونية", amount: "800", fee: "-80", net: "720", date: "2024-11-08", time: "10:30 ص", status: "completed" },
    { id: "TXN-002", type: "income", client: "فاطمة علي", service: "استشارة مالية", amount: "500", fee: "-50", net: "450", date: "2024-11-07", time: "02:15 م", status: "completed" },
    { id: "TXN-003", type: "withdraw", client: "-", service: "سحب أرباح", amount: "5000", fee: "-", net: "5000", date: "2024-11-05", time: "11:00 ص", status: "processing" },
    { id: "TXN-004", type: "income", client: "خالد حسن", service: "استشارة تقنية", amount: "600", fee: "-60", net: "540", date: "2024-11-04", time: "04:45 م", status: "completed" },
    { id: "TXN-005", type: "income", client: "مريم سعيد", service: "استشارة إدارية", amount: "400", fee: "-40", net: "360", date: "2024-11-03", time: "09:20 ص", status: "pending" },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed": return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">مكتمل</span>;
      case "processing": return <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">قيد المعالجة</span>;
      case "pending": return <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">قيد الانتظار</span>;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-[30px] border border-gray-100 p-6 shadow-sm">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h3 className="text-xl font-bold text-gray-800">سجل المعاملات</h3>
        <div className="flex gap-3">
            <div className="relative">
                <input type="text" placeholder="بحث..." className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none w-64" />
            </div>
            <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-50 text-sm">
                <FaFileDownload /> تصدير
            </button>
            <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-50 text-sm">
                <FaFilter /> فلترة
            </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead>
            <tr className="text-gray-500 text-sm border-b border-gray-100">
              <th className="pb-4 font-medium">الإجراءات</th>
              <th className="pb-4 font-medium">الحالة</th>
              <th className="pb-4 font-medium">التاريخ</th>
              <th className="pb-4 font-medium">الصافي</th>
              <th className="pb-4 font-medium">العمولة</th>
              <th className="pb-4 font-medium">المبلغ</th>
              <th className="pb-4 font-medium">الخدمة</th>
              <th className="pb-4 font-medium">العميل/التفاصيل</th>
              <th className="pb-4 font-medium">النوع</th>
              <th className="pb-4 font-medium">رقم المعاملة</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {transactions.map((txn, idx) => (
              <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                <td className="py-4">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                        <FaEye /> عرض
                    </button>
                </td>
                <td className="py-4">{getStatusBadge(txn.status)}</td>
                <td className="py-4">
                    <div className="flex flex-col text-xs text-gray-500">
                        <span className="font-bold text-gray-700 text-sm">{txn.date}</span>
                        <span>{txn.time}</span>
                    </div>
                </td>
                <td className="py-4 font-bold">{txn.net} ج.م</td>
                <td className="py-4 text-red-500">{txn.fee} {txn.fee !== "-" && "ج.م"}</td>
                <td className="py-4">{txn.amount} ج.م</td>
                <td className="py-4">{txn.service}</td>
                <td className="py-4 font-medium">{txn.client}</td>
                <td className="py-4">
                    {txn.type === 'income' ? (
                        <span className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-lg text-xs w-fit">
                            <FaArrowDown size={10} /> دخل
                        </span>
                    ) : (
                        <span className="flex items-center gap-1 bg-red-50 text-red-600 px-2 py-1 rounded-lg text-xs w-fit">
                            <FaArrowUp size={10} /> سحب
                        </span>
                    )}
                </td>
                <td className="py-4 font-mono text-gray-500">{txn.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTab;