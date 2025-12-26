import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { FaArrowRight, FaWallet, FaChartLine, FaHistory, FaClock, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";
import StatCard from "../../components/PaymentsPage/StatCard";
import TransactionsTab from "../../components/PaymentsPage/TransactionsTab";
import AnalyticsTab from "../../components/PaymentsPage/AnalyticsTab";
import WithdrawalMethodsTab from "../../components/PaymentsPage/WithdrawalMethodsTab";
import WithdrawModal from "../../components/PaymentsPage/WithdrawModal";

// استيراد المكونات الفرعية


const PaymentsPage = () => {
  const [activeTab, setActiveTab] = useState("transactions");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // تعريف التابات
  const tabs = [
        { id: "methods", label: "طرق السحب" },
           { id: "analytics", label: "التحليلات" },

    { id: "transactions", label: "المعاملات" },
  ];
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20" dir="rtl">
      
      {/* Header */}
      <header className="bg-white py-6 px-4 md:px-8 border-b">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          

           {/* Right: Title & Back */}
          <div className="flex items-center justify-end gap-6 text-right w-full md:w-auto">
    
    {/* زر العودة */}
    <button
    onClick={() => navigate (-1)}
    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition font-medium cursor-pointer">
       <FaArrowRight className="text-sm" />
        <span>العودة</span>
        
    </button>

    {/* حاوية النصوص (العنوان + الوصف تحت بعض) */}
    <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800">المدفوعات والأرباح</h1>
        <p className="text-sm text-gray-500 mt-1">إدارة أرباحك وسحب الأموال</p>
    </div>

</div>


            {/* Left: Actions */}
           <div className="flex items-center gap-3 w-full md:w-auto">
             <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gray-900 text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition shadow-lg w-full md:w-auto"
             >
                <FaWallet size={14} />
                <span>سحب أرباح</span>
             </button>
             <select className="bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-xl text-sm outline-none cursor-pointer">
                 <option>هذا الشهر</option>
                 <option>الشهر الماضي</option>
                 <option>آخر 6 أشهر</option>
             </select>
           </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 space-y-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <StatCard 
             title="إجمالي" 
             value="45,800" 
             subText="إجمالي الأرباح" 
             icon={FaMoneyBillWave} 
             isPrimary={true} 
           />
           <StatCard 
             title="هذا الشهر" 
             value="12,400" 
             subText="أرباح هذا الشهر" 
             icon={FaChartLine} 
             trend="+26.5%"
           />
           <StatCard 
             title="معلقة" 
             value="3,200" 
             subText="أرباح معلقة" 
             icon={FaClock} 
             trend="قيد الانتظار"
           />
           <StatCard 
             title="متاح" 
             value="9,200" 
             subText="متاح للسحب" 
             icon={FaWallet} 
             trend="متاح"
           />
        </div>

        {/* Tab Navigation */}
        {/* Tab Navigation */}
<div className="w-full bg-white p-1.5 rounded-[20px] shadow-sm border border-gray-100 flex items-center justify-between">
     {tabs.map((tab) => (
        <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            // التعديل هنا: flex-1 لتأخذ كل زر مساحة متساوية وتملأ السطر
            className={`flex-1 py-2.5 rounded-2xl text-sm font-bold transition-all text-center ${
                activeTab === tab.id 
                ? "bg-gray-900 text-white shadow-md" // غيرت لون النشط لـ gray-900 ليكون واضحاً، أو يمكنك إعادته لـ bg-white حسب ذوقك
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
        >
            {tab.label}
        </button>
     ))}
</div>

        {/* Tab Content */}
        <div className="animate-fadeIn">
            {activeTab === "transactions" && <TransactionsTab />}
            {activeTab === "analytics" && <AnalyticsTab />}
            {activeTab === "methods" && <WithdrawalMethodsTab />}
        </div>

      </div>

      {/* Withdrawal Modal */}
      <WithdrawModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default PaymentsPage;