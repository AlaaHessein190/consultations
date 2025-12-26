import React from "react";
import { FaClock } from "react-icons/fa";

const AvailabilityInfo = () => {
    const days = [
        { name: "الأحد", available: true },
        { name: "الاثنين", available: true },
        { name: "الثلاثاء", available: true },
        { name: "الأربعاء", available: true },
        { name: "الخميس", available: true },
        { name: "الجمعة", available: false },
        { name: "السبت", available: false },
    ];

    return (
        <div className="space-y-6 animate-fadeIn text-right">
            <div className="text-right">
                <h2 className="text-2xl font-bold text-gray-800 mb-1 flex items-center  gap-2">
                  <FaClock className="text-gray-800" />  الأوقات المتاحة 
                </h2>
                <p className="text-gray-500 text-sm">حدد الأيام والأوقات المتاحة لاستقبال الاستشارات</p>
            </div>

            <div className="space-y-3">
                {days.map((day, idx) => (
                    <div key={idx} className={`border ${day.available ? 'border-gray-100 bg-gray-50' : 'border-gray-100 bg-gray-50 opacity-60'} rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 `}>
                        <span className="font-bold text-gray-700 w-20 text-center md:text-right">{day.name}</span>
                        
                        {day.available ? (
                            <div className="flex items-center gap-4 flex-1 justify-center ">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500">من</span>
                                    <input type="time" defaultValue="09:00" className="bg-white border border-gray-200 rounded-lg px-2 py-1 text-sm outline-none focus:border-blue-400" />
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <span className="text-sm text-gray-500">إلى</span>
                                    <input type="time" defaultValue="17:00" className="bg-white border border-gray-200 rounded-lg px-2 py-1 text-sm outline-none focus:border-blue-400" />
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1 text-center">
                                <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">غير متاح</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailabilityInfo;