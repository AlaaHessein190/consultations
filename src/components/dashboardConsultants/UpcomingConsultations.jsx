import { HiOutlineVideoCamera, HiOutlineChat, HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";

const UpcomingConsultations = () => {
  const items = [
    { name: "د. ندى السيد", role: "استشاري قانوني", time: "10:00 ص", date: "2024-11-15", status: "مؤكد", type: "مكالمة فيديو", img: "https://i.pravatar.cc/150?u=3" },
    { name: "د. سارة محمد", role: "استشارية مالية", time: "02:00 م", date: "2024-11-18", status: "قيد الانتظار", type: "مكالمة صوتية", img: "https://i.pravatar.cc/150?u=4" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-8">الاستشارات القادمة</h2>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
                              <img src={item.img} className="w-14 h-14 rounded-full object-cover" alt="dr" />

              <div className="text-right">
                <div className="flex justify-between items-center gap-2 mb-1">
                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${item.status === 'مؤكد' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>{item.status}</span>

                </div>
                <p className="text-xs text-gray-400 mb-2">{item.role}</p>
                <div className="flex items-center gap-4 text-[11px] text-gray-500">
                                       <span className="flex items-center gap-1"><HiOutlineVideoCamera /> {item.type}</span>
                   <span className="flex items-center gap-1"><HiOutlineClock /> {item.time}</span>

                   <span className="flex items-center gap-1"><HiOutlineCalendar /> {item.date}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
               <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-bold">الانضمام للاستشارة</button>
               <button className="border border-gray-200 bg-white text-gray-600 px-4 py-2 rounded-lg text-xs flex items-center gap-1"><HiOutlineChat /> مراسلة</button>
               <button className="border border-gray-200 bg-white text-gray-600 px-4 py-2 rounded-lg text-xs">إعادة جدولة</button>
               <button className="text-red-500 text-xs font-bold px-2">إلغاء</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingConsultations;