import React from "react";
import "aos/dist/aos.css";
import { FaMedal, FaStar } from "react-icons/fa";
import { LuClipboard } from "react-icons/lu";
import b1 from "../../assets/B1.png";
import b2 from "../../assets/B2.png";
import b3 from "../../assets/B3.png";
import b4 from "../../assets/b4.png";

function BestConsultants() {
  const consultants = [
    {
      icon: b1,
      name: "د. مريم علي",
      title1: "استشارية نفسية",
      title2: "العلاج المعرفي السلوكي",
      sessions: 520,
      rating: 4.9,
      reviews: 245,
      desc: "أخصائية نفسية معتمدة في العلاج المعرفي السلوكي. متخصصة في علاج القلق والاكتئاب وتطوير الذات.",
      delay: 100,
    },
    {
      icon: b2,
      name: "م. خالد حسن",
      title1: "استشاري تقني",
      title2: "التحول الرقمي والأمن السيبراني",
      sessions: 290,
      rating: 4.8,
      reviews: 187,
      desc: "مهندس معتمد في الأمن السيبراني والحوسبة السحابية. أساعد الشركات في التحول الرقمي الآمن وحماية بياناتها.",
      delay: 200,
    },
    {
      icon: b3,
      name: "د. سارة محمد",
      title1: "استشارية مالية",
      title2: "الاستثمار والتخطيط المالي",
      sessions: 450,
      rating: 5,
      reviews: 203,
      desc: "خبيرة في التخطيط المالي الشخصي والاستثمار. ساعدت المئات في تحقيق أهدافهم المالية وبناء محافظ استثمارية ناجحة.",
      delay: 300,
    },
    {
      icon: b4,
      name: "د. ندى السيد",
      title1: "مستشارة قانونية",
      title2: "القانون التجاري والعقود",
      sessions: 320,
      rating: 5,
      reviews: 156,
      desc: "خبرة 15 عاماً في القانون التجاري والشركات. متخصص في صياغة ومراجعة العقود التجارية والاستشارات القانونية للمؤسسات.",
      delay: 400,
    },
  ];

  return (
    <div className="bg-mainColor py-16">
      {/* العنوان */}
      <div className="text-center mb-12 px-4" data-aos="fade-down">
        <h2 className="text-[#0F172b] text-2xl sm:text-3xl md:text-[36px] font-bold mb-3">
          أفضل المستشارين
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          تعرف على نخبة من أفضل المستشارين المعتمدين في مختلف المجالات
        </p>
      </div>

      {/* الكروت */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {consultants.map((c, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group min-h-[500px]"
            data-aos="zoom-in"
            data-aos-delay={c.delay}
          >
            <div>
              {/* الصورة */}
              <div className="flex justify-center mb-4 relative overflow-hidden rounded-t-2xl">
                <img
                  src={c.icon}
                  alt={c.name}
                  className=" object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 bg-[#00BC7D] text-mainColor px-2 py-1 right-2 rounded-2xl flex items-center gap-1 text-xs font-semibold">
                  <FaMedal />
                  <p>معتمدة</p>
                </div>
              </div>

              {/* النص */}
              <div className="p-4 text-center sm:text-right">
                <h3 className="text-[#0F172b] font-bold text-lg">{c.name}</h3>
                <p className="text-gray-600 text-sm">{c.title1}</p>
                <p className="text-gray-500 text-xs mb-3">{c.title2}</p>

                <div className="flex justify-center sm:justify-start gap-4 text-gray-700 mb-3">
                  <span className="flex items-center gap-1 text-sm">
                    <FaStar className="text-yellow-500" /> {c.rating} ({c.reviews})
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <LuClipboard className="text-secondColor" /> {c.sessions} جلسة
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {c.desc}
                </p>
              </div>
            </div>

            {/* الزر */}
            <button
              className="m-2 text-mainColor bg-secondColor hover:text-secondColor hover:bg-mainColor 
              hover:border hover:border-secondColor transition-all duration-300 
              px-10 py-2 rounded-xl font-semibold mt-auto"
            >
              احجز الآن
            </button>
          </div>
        ))}
      </div>

      {/* زر عرض المزيد */}
      <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="500">
        <button className="border border-secondColor text-secondColor hover:bg-secondColor hover:text-white transition-all duration-300 px-6 py-2 rounded-xl font-semibold">
          عرض جميع المستشارين
        </button>
      </div>
    </div>
  );
}

export default BestConsultants;
