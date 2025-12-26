import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaSave } from "react-icons/fa";

// استيراد المكونات الفرعية
import BasicInfo from "../../components/ProfileSettings/BasicInfo";
import ProfessionalInfo from "../../components/ProfileSettings/ProfessionalInfo";
import PricesInfo from "../../components/ProfileSettings/PricesInfo";
import AvailabilityInfo from "../../components/ProfileSettings/AvailabilityInfo";
import MediaInfo from "../../components/ProfileSettings/MediaInfo";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("basic");

  const tabs = [
    { id: "basic", label: "المعلومات الأساسية" },
    { id: "professional", label: "المعلومات المهنية" },
    { id: "prices", label: "الأسعار" },
    { id: "availability", label: "الأوقات المتاحة" },
    { id: "media", label: "الصور والمرفقات" },
  ];

  const Navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20" dir="rtl">
      
      {/* Header */}
      <header className="bg-white py-6 px-4 md:px-8 border-b sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center flex-row-reverse">
           {/* Left Side: Save Button */}
           <button className="bg-gray-900 text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-black transition shadow-lg hover:shadow-xl flex-row-reverse">
             <FaSave />
             <span>حفظ التغييرات</span>
           </button>

           {/* Right Side: Title & Back */}
           <div className="flex items-center gap-6 flex-row-reverse">
             <div className="text-right hidden md:block">
               <h1 className="text-2xl font-bold text-gray-800">تعديل الملف الشخصي</h1>
               <p className="text-sm text-gray-500">قم بتحديث معلوماتك المهنية</p>
             </div>
             <button
             onClick={()=> Navigate(-1)}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition font-medium cursor-pointer">
               <FaArrowRight />
               <span>العودة</span>
             </button>
           </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        
        {/* Navigation Tabs - التعديل تم هنا */}
        <div className="w-full mb-8 overflow-x-auto pb-2 no-scrollbar">
            {/* 
                1. w-full: لتأخذ المساحة كاملة
                2. justify-between: لتوزيع العناصر على طول المساحة
                3. min-w-max: لضمان عدم انكماش التابات في الشاشات الصغيرة جداً
            */}
            <div className="flex items-center justify-between w-full min-w-max gap-4 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap text-center ${
                            activeTab === tab.id 
                            ? "bg-gray-900 text-white shadow-md" 
                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-12 max-w-5xl mx-auto min-h-[600px]">
            {activeTab === "basic" && <BasicInfo />}
            {activeTab === "professional" && <ProfessionalInfo />}
            {activeTab === "prices" && <PricesInfo />}
            {activeTab === "availability" && <AvailabilityInfo />}
            {activeTab === "media" && <MediaInfo />}
        </div>

      </div>
    </div>
  );
};

export default ProfileSettings;