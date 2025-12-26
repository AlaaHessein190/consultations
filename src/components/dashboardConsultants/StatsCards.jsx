import { HiOutlineCheckCircle, HiOutlineCalendar, HiOutlineChatAlt2, HiOutlineStar } from "react-icons/hi";

const StatsCards = () => {
  const stats = [
    { label: "الاستشارات المكتملة", value: "12", icon: <HiOutlineCheckCircle />, color: "text-green-500", bg: "bg-green-50" },
    { label: "الاستشارات القادمة", value: "2", icon: <HiOutlineCalendar />, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "الرسائل الجديدة", value: "3", icon: <HiOutlineChatAlt2 />, color: "text-indigo-500", bg: "bg-indigo-50" },
    { label: "متوسط التقييم", value: "4.8", icon: <HiOutlineStar />, color: "text-orange-500", bg: "bg-orange-50" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start gap-4">
          <div className={`p-3 rounded-xl text-2xl ${item.bg} ${item.color}`}>{item.icon}</div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">{item.value}</h3>
            <p className="text-xs text-gray-400 font-medium mt-1">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;