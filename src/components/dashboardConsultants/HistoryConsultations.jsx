import { HiOutlineVideoCamera, HiOutlineChat, HiOutlineCalendar, HiOutlineClock, HiStar } from "react-icons/hi";

const HistoryConsultations = () => {
  const historyItems = [
    {
      name: "م. خالد حسن",
      role: "استشاري تقني",
      date: "2024-10-25",
      time: "11:00 ص",
      type: "مكالمة فيديو",
      rating: 5,
      status: "مكتمل",
      img: "https://i.pravatar.cc/150?u=10"
    },
    {
      name: "د. مريم علي",
      role: "استشارية نفسية",
      date: "2024-10-20",
      time: "03:00 م",
      type: "رسالة نصية",
      rating: 4,
      status: "مكتمل",
      img: "https://i.pravatar.cc/150?u=11"
    }
  ];

  return (
    <div className="animate-fadeIn">
      <h2 className="text-xl font-bold mb-8 text-right">السجل السابق</h2>
      <div className="space-y-6">
        {historyItems.map((item, idx) => (
          <div key={idx} className="bg-gray-50/30 rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* جهة اليمين: معلومات الطبيب والتقييم */}
            <div className="flex items-center gap-4 w-full md:w-auto ">
                              <img src={item.img} className="w-14 h-14 rounded-full object-cover border border-gray-100" alt="dr" />

              <div className="text-right">
                <div className="flex items-center gap-2  mb-1">
                    <h4 className="font-bold text-gray-800">{item.name}</h4>

                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-gray-100 text-gray-500 uppercase">
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{item.role}</p>
                
                {/* التقييم والتاريخ */}
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500 ">
                  
                <span className="flex items-center gap-1"><HiOutlineVideoCamera /> {item.type}</span>

                  <span className="flex items-center gap-1"><HiOutlineClock /> {item.time}</span>
                 <span className="flex items-center gap-1"><HiOutlineCalendar /> {item.date}</span>
                <span className="flex items-center gap-1 text-orange-400 font-bold">
                    {item.rating} <HiStar />
                  </span>
                </div>
              </div>
            </div>

            {/* جهة اليسار: الأزرار */}
            <div className="flex gap-2 w-full md:w-auto justify-center">
              <button className="border border-gray-200 bg-white text-gray-600 px-6 py-2 rounded-lg text-xs font-bold hover:bg-gray-50 transition-all">
                عرض التفاصيل
              </button>
              <button className="border border-gray-200 bg-white text-gray-600 px-6 py-2 rounded-lg text-xs font-bold hover:bg-gray-50 transition-all">
                حجز مرة أخرى
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryConsultations;