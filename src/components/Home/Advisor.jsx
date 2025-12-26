import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa";

function Advisor() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الحركة
      once: true, // تظهر مرة واحدة فقط
    });
  }, []);

  const stats = [
    { number: "500+", label: "مستشار نشط" },
    { number: "10K+", label: "استشارة شهرياً" },
    { number: "+$1000", label: "متوسط الدخل" },
    { number: "24/7", label: "دعم فني" },
  ];

  const benefits = [
    "وسع نطاق عملك واحصل على عملاء جدد",
    "جدول مواعيدك بمرونة كاملة",
    "احصل على عمولة تنافسية على كل استشارة",
    "انضم إلى شبكة من أفضل المستشارين",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2
          className="text-2xl md:text-3xl font-bold text-secondColor mb-8 text-center"
          data-aos="fade-up"
        >
          هل أنت مستشار مؤهل؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* المحتوى النصي */}
          <div data-aos="fade-left">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 leading-relaxed">
              انضم إلى شبكتنا ووسع نطاق عملك ووصولك إلى عملاء جدد من جميع أنحاء العالم العربي.
            </h3>

            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center transition-all duration-200 group-hover:bg-secondColor">
                    <FaCheck className="text-green-500 group-hover:text-white text-sm" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base group-hover:text-secondColor transition">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className="mt-6 px-6 py-3 bg-secondColor text-white rounded-lg hover:bg-[#0F172B] transition"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              انضم الآن كمستشار
            </button>
          </div>

          {/* الإحصائيات */}
          <div
            className="grid grid-cols-2 gap-4 border p-4 rounded-xl"
            data-aos="fade-right"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-secondColor text-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:bg-[#0F172B] transition"
              >
                <h5 className="text-2xl font-bold">{stat.number}</h5>
                <p className="text-sm mt-2 text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advisor;
