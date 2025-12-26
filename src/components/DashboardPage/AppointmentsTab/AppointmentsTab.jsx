import React from "react";
import { 
  FaVideo, 
  FaPhoneAlt, 
  FaCalendarAlt, 
  FaClock, 
  FaRegCommentDots, 
  FaCheck, 
  FaTimes 
} from "react-icons/fa";

const AppointmentsTab = () => {
  // بيانات تجريبية مطابقة للصورة
  const appointments = [
    {
      id: 1,
      name: "أحمد محمود",
      type: "استشارة مالية",
      callType: "video", // video or audio
      date: "2024-11-08",
      time: "10:00 ص",
      duration: "60 دقيقة",
      status: "confirmed", // confirmed or pending
      img: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      name: "فاطمة علي",
      type: "استشارة استثمارية",
      callType: "audio",
      date: "2024-11-08",
      time: "02:00 م",
      duration: "45 دقيقة",
      status: "pending",
      img: "https://i.pravatar.cc/150?u=5",
    },
    {
      id: 3,
      name: "خالد حسن",
      type: "استشارة تخطيط مالي",
      callType: "video",
      date: "2024-11-09",
      time: "11:30 ص",
      duration: "90 دقيقة",
      status: "confirmed",
      img: "https://i.pravatar.cc/150?u=6",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm p-8 min-h-[500px]">
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-right">جميع المواعيد</h2>

      <div className="space-y-4">
        {appointments.map((app) => (
          <div 
            key={app.id} 
            className="bg-gray-50 rounded-2xl p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative"
          >
            
            {/* 1. قسم بيانات العميل (يمين) */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <img 
                src={app.img} 
                alt={app.name} 
                className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-white" 
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800">{app.name}</h3>
                <p className="text-sm text-gray-500">{app.type}</p>
                
                {/* نوع المكالمة يظهر تحت الاسم في الموبايل أو بجانبه */}
                <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                   {app.callType === 'video' ? <FaVideo className="text-blue-500"/> : <FaPhoneAlt className="text-green-600"/>}
                   <span>{app.callType === 'video' ? "مكالمة فيديو" : "مكالمة هاتفية"}</span>
                </div>
              </div>
            </div>

            {/* 2. قسم التوقيت والتاريخ (وسط) */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 w-full lg:w-auto justify-start lg:justify-center">
               <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-lg border border-gray-100">
                  <FaClock className="text-gray-400" />
                  <span > {app.time}- {app.duration}</span>
               </div>
               <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-lg border border-gray-100">
                  <FaCalendarAlt className="text-gray-400" />
                  <span dir="ltr">{app.date}</span>
               </div>
            </div>

            {/* 3. حالة الطلب (بادج أعلى اليسار) */}
            <div className="absolute top-5 left-5">
                {app.status === 'confirmed' ? (
                    <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                        مؤكد
                    </span>
                ) : (
                    <span className="bg-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
                        قيد الانتظار
                    </span>
                )}
            </div>

            {/* 4. أزرار التحكم (أسفل اليسار - تختلف حسب الحالة) */}
            <div className="w-full lg:w-auto flex justify-end mt-6 lg:mt-10">
                {app.status === 'confirmed' ? (
                    // أزرار الحالة المؤكدة
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-white hover:shadow-sm transition-all text-sm font-medium">
                            <FaRegCommentDots />
                            مراسلة
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-sm font-medium shadow-blue-200 shadow-md">
                            <FaVideo />
                            بدء المكالمة
                        </button>
                    </div>
                ) : (
                    // أزرار حالة الانتظار
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 text-red-500 border border-transparent hover:bg-red-50 rounded-xl transition-all text-sm font-bold">
                            <FaTimes />
                            رفض
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all text-sm font-medium shadow-green-200 shadow-md">
                            <FaCheck />
                            تأكيد
                        </button>
                    </div>
                )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsTab;