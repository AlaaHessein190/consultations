import React from "react";
import { FaStar } from "react-icons/fa";

const RatingsTab = () => {
  // بيانات وهمية لتوزيع التقييمات (Progress Bars)
  const ratingBreakdown = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 3 },
  ];

  // بيانات وهمية للتعليقات
  const reviews = [
    {
      id: 1,
      name: "أحمد محمود",
      comment: "استشارة ممتازة وواضحة، ساعدتني كثيراً في اتخاذ القرارات المالية الصحيحة",
      rating: 5,
      date: "منذ يومين",
      img: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      name: "فاطمة علي",
      comment: "مستشار محترف جداً ومتعاون، أنصح بالتعامل معه",
      rating: 5,
      date: "منذ 3 أيام",
      img: "https://i.pravatar.cc/150?u=5",
    },
  ];

  // دالة مساعدة لرسم النجوم
  const renderStars = (count) => {
    return (
      <div className="flex text-yellow-400 text-sm gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < count ? "text-yellow-400" : "text-gray-200"} />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-8 min-h-[500px]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-gray-800">جميع التقييمات</h2>
      </div>

      {/* القسم العلوي: الملخص */}
      <div className="flex flex-col-reverse md:flex-row gap-8 mb-10">
        
        

        


        {/* الجزء الأيسر: أشرطة التقدم */}
        <div className="flex-1 space-y-3">
          {ratingBreakdown.map((item) => (
            <div key={item.stars} className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 w-8 font-bold text-gray-600">
                <span>{item.stars}</span>
                <FaStar className="text-yellow-400 text-xs" />
              </div>
              
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gray-900 rounded-full" 
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>

              <div className="w-8 text-left text-gray-400 text-xs">
                {item.percentage}%
              </div>
            </div>
          ))}
        </div>

        {/* الجزء الأيمن: بطاقة الرقم الكبير */}
        <div className="w-full md:w-1/3 border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-5xl font-bold text-gray-800 mb-2">4.9</h3>
            <div className="flex text-yellow-400 text-lg mb-2 gap-1">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-gray-500 text-sm">من 127 تقييم</p>
        </div>

      </div>

      {/* القسم السفلي: قائمة التعليقات */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-50 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                
                {/* صورة واسم العميل */}
                <div className="flex items-center gap-4">
                    <img 
                        src={review.img} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full object-cover" 
                    />
                    <div>
                        <h4 className="font-bold text-gray-800">{review.name}</h4>
                        {renderStars(review.rating)}
                    </div>
                </div>

                {/* التاريخ */}
                <span className="text-xs text-gray-400 md:self-start self-end">
                    {review.date}
                </span>
            </div>

            {/* نص التعليق */}
            <p className="text-gray-600 text-sm mt-4 leading-relaxed pr-16">
                {review.comment}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RatingsTab;