import React from "react";
import StatCard from "../StatCard";
import { FaDollarSign, FaStar, FaCalendarCheck, FaUserFriends, FaClock, FaCommentAlt, FaCheckCircle } from "react-icons/fa";

// بيانات وهمية (Mock Data) لمحاكاة التصميم
const statsData = [
  { id: 1, title: "الأرباح هذا الشهر", value: "12,500 ر.س", percent: "+15%", icon: FaDollarSign, color: "text-purple-600", bg: "bg-purple-100" },
  { id: 2, title: "متوسط التقييم", value: "4.9", percent: "+0.2", icon: FaStar, color: "text-orange-500", bg: "bg-orange-100" },
  { id: 3, title: "الاستشارات هذا الشهر", value: "42", percent: "+8%", icon: FaCalendarCheck, color: "text-green-600", bg: "bg-green-100" },
  { id: 4, title: "إجمالي الاستشارات", value: "284", percent: "+12%", icon: FaUserFriends, color: "text-blue-600", bg: "bg-blue-100" },
];

const messages = [
  { id: 1, name: "سارة محمد", msg: "شكراً على الاستشارة، كانت مفيدة جداً", time: "منذ 10 دقائق", img: "https://i.pravatar.cc/150?u=1", isNew: true },
  { id: 2, name: "محمد عبدالله", msg: "متى يمكننا ترتيب الجلسة القادمة؟", time: "منذ 1 ساعة", img: "https://i.pravatar.cc/150?u=2", isNew: true },
  { id: 3, name: "نور أحمد", msg: "تم استلام المستندات، شكراً", time: "منذ 2 ساعة", img: "https://i.pravatar.cc/150?u=3", isNew: false },
];

const appointments = [
  { id: 1, name: "أحمد محمود", type: "استشارة مالية", date: "2024-11-08", time: "10:00 ص", duration: "60 دقيقة", status: "confirmed", img: "https://i.pravatar.cc/150?u=4" },
  { id: 2, name: "فاطمة علي", type: "استشارة استثمارية", date: "2024-11-08", time: "02:00 م", duration: "45 دقيقة", status: "pending", img: "https://i.pravatar.cc/150?u=5" },
  { id: 3, name: "خالد حسن", type: "استشارة تخطيط مالي", date: "2024-11-09", time: "11:30 ص", duration: "90 دقيقة", status: "confirmed", img: "https://i.pravatar.cc/150?u=6" },
];

const reviews = [
  { id: 1, name: "أحمد محمود", comment: "استشارة ممتازة وواضحة، ساعدتني كثيراً في اتخاذ القرارات المالية الصحيحة", rating: 5, time: "منذ يومين", img: "https://i.pravatar.cc/150?u=4" },
  { id: 2, name: "فاطمة علي", comment: "مستشار محترف جداً ومتعاون، أنصح بالتعامل معه", rating: 5, time: "منذ 3 أيام", img: "https://i.pravatar.cc/150?u=5" },
];

const OverviewTab = () => {
  return (
    <div className="space-y-6">
      
      {/* القسم الأول: بطاقات الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            percentage={stat.percent}
            icon={stat.icon}
            colorClass={stat.color}
            bgClass={stat.bg}
          />
        ))}
      </div>

      {/* القسم الثاني: الشبكة المزدوجة (الرسائل والمواعيد) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* الرسائل الأخيرة */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
               <FaCommentAlt className="text-gray-400" /> الرسائل الأخيرة
            </h3>
            <button className="text-sm text-gray-500 hover:text-blue-600">عرض الكل</button>
          </div>
          
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group">
                 {/* Dot notification */}
                 {msg.isNew && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                 
                 <img src={msg.img} alt={msg.name} className="w-10 h-10 rounded-full object-cover" />
                 
                 <div className="flex-1">
                    <div className="flex justify-between">
                        <h4 className="font-bold text-sm text-gray-800">{msg.name}</h4>
                        <span className="text-xs text-gray-400">{msg.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {msg.msg}
                    </p>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* المواعيد القادمة */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
               <FaCalendarCheck className="text-gray-400" /> المواعيد القادمة
            </h3>
            <button className="text-sm text-gray-500 hover:text-blue-600">عرض الكل</button>
          </div>

          <div className="space-y-4">
            {appointments.map((app) => (
              <div key={app.id} className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={app.img} alt={app.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h4 className="font-bold text-sm text-gray-800">{app.name}</h4>
                        <p className="text-xs text-blue-500 font-medium">{app.type}</p>
                        <div className="flex items-center gap-3 mt-2 text-gray-400 text-xs">
                            <span className="flex items-center gap-1"><FaCalendarCheck /> {app.date}</span>
                            <span className="flex items-center gap-1"><FaClock /> {app.time} ({app.duration})</span>
                        </div>
                    </div>
                </div>
                <div>
                    {app.status === 'confirmed' ? (
                        <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">مؤكد</span>
                    ) : (
                        <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">قيد الانتظار</span>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* القسم الثالث: التقييمات الأخيرة */}
      <div className="bg-white p-6 rounded-3xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
               <FaStar className="text-gray-400" /> التقييمات الأخيرة
            </h3>
        </div>

        <div className="space-y-4">
            {reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 p-4 rounded-2xl">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                            <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                                <h4 className="font-bold text-sm text-gray-800">{review.name}</h4>
                                <div className="flex text-yellow-400 text-xs mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <span className="text-xs text-gray-400">{review.time}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                        {review.comment}
                    </p>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default OverviewTab;