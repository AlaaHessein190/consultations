import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { FaCloudUploadAlt, FaPlus, FaVideo, FaFilePdf, FaTrashAlt, FaExternalLinkAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateCV, removeCV } from "../../redux/slices/userSlice"; 

const MediaInfo = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const { profileData, uploading } = useSelector((state) => state.user);
    const fileInputRef = useRef(null);

    // استخراج رابط الـ CV من المسار الجديد بناءً على الـ Console Log
    const cvUrl = profileData?.hasExpertProfile?.cv?.url;

    useImperativeHandle(ref, () => ({
        submitTab: () => {
            console.log("Media tab saved");
        }
    }));

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(updateCV(file));
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="space-y-8 animate-fadeIn text-right" dir="rtl">
            <h2 className="text-xl font-bold text-gray-800 text-right">الصور والمرفقات</h2>

            {/* السيرة الذاتية */}
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 text-right">السيرة الذاتية (PDF)</label>
                
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    accept=".pdf" 
                    className="hidden" 
                />

                {/* التحقق من وجود الرابط في المسار العميق */}
                {cvUrl ? (
                    <div className="border-2 border-solid border-blue-100 rounded-3xl p-6 bg-blue-50 flex items-center justify-between transition group">
                        <div className="flex items-center gap-4">
                            <div className="bg-white p-3 rounded-2xl text-red-500 shadow-sm">
                                <FaFilePdf className="text-3xl" />
                            </div>
                            <div className="text-right">
                                <p className="text-gray-800 font-bold text-sm">السيرة الذاتية المرفوعة</p>
                                <a 
                                    href={cvUrl} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="text-blue-600 text-xs flex items-center gap-1 hover:underline mt-1 font-bold"
                                >
                                    عرض الملف الحالي <FaExternalLinkAlt className="text-[10px]" />
                                </a>
                            </div>
                        </div>
                        
                        <div className="flex gap-2">
                            <button 
                                onClick={triggerFileInput}
                                disabled={uploading}
                                className="bg-white text-gray-700 px-4 py-2 rounded-xl text-xs font-bold border border-gray-200 hover:bg-gray-100 transition shadow-sm"
                            >
                                {uploading ? "جاري الرفع..." : "تحديث"}
                            </button>
                            <button 
                                onClick={() => dispatch(removeCV())}
                                className="bg-red-50 text-red-600 px-3 py-2 rounded-xl text-xs font-bold hover:bg-red-100 transition shadow-sm"
                                title="حذف الملف"
                            >
                                <FaTrashAlt />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div 
                        onClick={triggerFileInput}
                        className="border-2 border-dashed border-gray-300 rounded-3xl p-10 text-center hover:bg-gray-50 transition cursor-pointer group relative overflow-hidden"
                    >
                        {uploading && (
                            <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                            </div>
                        )}
                        <FaCloudUploadAlt className="mx-auto text-4xl text-gray-400 mb-4 group-hover:text-blue-500 transition" />
                        <p className="text-gray-500 mb-4 font-medium">اسحب وأفلت السيرة الذاتية هنا أو اضغط للتحميل</p>
                        <button className="bg-white border border-gray-300 px-6 py-2 rounded-xl text-sm font-bold hover:shadow-md transition">
                            اختر ملف
                        </button>
                    </div>
                )}
            </div>

            {/* باقي المكونات تظل كما هي */}
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

            <div>
                <div className="flex justify-between items-center mb-3 flex-row-reverse">
                    <label className="text-sm font-bold text-gray-700">فيديو تعريفي (اختياري)</label>
                    <span className="text-xs text-gray-400 font-medium">فيديو قصير (1-2 دقيقة) للتعريف بنفسك</span>
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
});

export default MediaInfo;