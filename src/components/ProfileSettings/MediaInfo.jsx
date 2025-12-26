import React from "react";
import { FaCloudUploadAlt, FaPlus, FaVideo } from "react-icons/fa";

const MediaInfo = () => {
    return (
        <div className="space-y-8 animate-fadeIn text-right">
            <h2 className="text-xl font-bold text-gray-800 text-right">الصور والمرفقات</h2>

            {/* السيرة الذاتية */}
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 text-right">السيرة الذاتية (PDF)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-3xl p-10 text-center hover:bg-gray-50 transition cursor-pointer group">
                    <FaCloudUploadAlt className="mx-auto text-4xl text-gray-400 mb-4 group-hover:text-blue-500 transition" />
                    <p className="text-gray-500 mb-4">اسحب وأفلت السيرة الذاتية هنا أو اضغط للتحميل</p>
                    <button className="bg-white border border-gray-300 px-6 py-2 rounded-xl text-sm font-bold hover:shadow-md transition">
                        اختر ملف
                    </button>
                </div>
            </div>

            {/* نماذج الأعمال */}
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 text-right">نماذج من الأعمال السابقة</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="border-2 border-dashed border-gray-300 rounded-3xl aspect-square flex items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                            <FaPlus className="text-gray-400 text-2xl" />
                        </div>
                    ))}
                </div>
            </div>

            {/* فيديو تعريفي */}
            <div>
                <div className="flex justify-between items-center mb-3 flex-row-reverse">
                    <label className="text-sm font-bold text-gray-700">فيديو تعريفي (اختياري)</label>
                    <span className="text-xs text-gray-400">فيديو قصير (1-2 دقيقة) للتعريف بنفسك وخدماتك</span>
                </div>
                <div className="border-2 border-gray-200 rounded-3xl p-10 text-center">
                    <FaVideo className="mx-auto text-4xl text-gray-400 mb-4" />
                    <p className="text-gray-700 font-bold mb-4">حمّل فيديو تعريفي</p>
                    <button className="bg-white border border-gray-300 px-6 py-2 rounded-xl text-sm font-bold hover:shadow-md transition">
                        اختر فيديو
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MediaInfo;