import React from "react";
import { FaPlus } from "react-icons/fa";

const PricesInfo = () => {
    return (
        <div className="space-y-6 animate-fadeIn text-right">
            <div className="text-right">
    {/* حاوية تجمع الأيقونة والعنوان بجانب بعض */}
    <div className="flex items-center gap-2 mb-1">
        {/* الأيقونة */}
        <span className="text-3xl font-bold text-gray-800">$</span>
        
        {/* العنوان */}
        <h2 className="text-2xl font-bold text-gray-800">الأسعار والخدمات</h2>
    </div>
    
    {/* الوصف أسفلهم */}
    <p className="text-gray-500 text-sm">حدد أسعار خدماتك ومدة كل استشارة</p>
</div>

            <div className="space-y-4">
                {/* خدمة 1 */}
                <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right ">
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">نوع الخدمة</p>
                        <h3 className="font-bold text-gray-800">استشارة نصية</h3>
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">المدة (دقيقة)</p>
                        <h3 className="font-bold text-gray-800">30</h3>
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">السعر (ر.س)</p>
                        <h3 className="font-bold text-gray-800">300</h3>
                    </div>
                </div>

                {/* خدمة 2 */}
                <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right ">
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">نوع الخدمة</p>
                        <h3 className="font-bold text-gray-800">استشارة صوتية</h3>
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">المدة (دقيقة)</p>
                        <h3 className="font-bold text-gray-800">45</h3>
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">السعر (ر.س)</p>
                        <h3 className="font-bold text-gray-800">500</h3>
                    </div>
                </div>

                {/* خدمة 3 */}
                <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right ">
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">نوع الخدمة</p>
                        <h3 className="font-bold text-gray-800">استشارة مرئية</h3>
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">المدة (دقيقة)</p>
                        <h3 className="font-bold text-gray-800">60</h3>
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">السعر (ر.س)</p>
                        <h3 className="font-bold text-gray-800">800</h3>
                    </div>
                </div>
            </div>

            <button className="w-full border border-dashed border-gray-300 rounded-2xl p-4 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition flex items-center justify-center gap-2">
                <FaPlus /> إضافة خدمة جديدة
            </button>
        </div>
    );
};

export default PricesInfo;