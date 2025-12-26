import React from 'react'
import { FaRegCheckSquare, FaSearch, FaVideo } from 'react-icons/fa'

function Work() {
  const works = [
    {
      counter: "1",
      icon: <FaSearch />,
      title: "اختر التخصص والمستشار",
      desc: "تصفح قائمة المستشارين المعتمدين واختر الأنسب لاحتياجاتك.",
      aos: "fade-up",
      delay: 100,
    },
    {
      counter: "2",
      icon: <FaRegCheckSquare />,
      title: "راجع الملف واملأ التفاصيل",
      desc: "اطلع على الملف الشخصي للمستشار واملأ ملخص استشارتك.",
      aos: "fade-up",
      delay: 200,
    },
    {
      counter: "3",
      icon: <FaVideo />,
      title: "ابدأ جلستك وحقق هدفك",
      desc: "ابدأ الجلسة الاستشارية واحصل على الحلول الاحترافية.",
      aos: "fade-up",
      delay: 300,
    },
  ]

  return (
    <div className="bg-mainColor py-16">
      {/* العنوان */}
      <div className="text-center mb-12 px-4" data-aos="fade-down">
        <h2 className="text-[#0F172b] text-2xl sm:text-3xl md:text-[36px] font-bold mb-3">
          كيف تعمل المنصة؟
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          ثلاث خطوات بسيطة للحصول على الاستشارة التي تحتاجها
        </p>
      </div>

      {/* الكروت */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {works.map((work, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center p-8 bg-white"
            data-aos={work.aos}
            data-aos-delay={work.delay}
          >
            {/* رقم داخل دائرة + أيقونة متحركة */}
            <div
              className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full relative bg-secondColor text-white text-2xl font-bold"
              data-aos="zoom-in"
              data-aos-delay={work.delay + 100}
            >
              <div className="absolute w-8 h-8 rounded-full bg-white text-secondColor flex items-center justify-center font-bold -right-4 -top-4 shadow">
                {work.counter}
              </div>
              {work.icon}
            </div>

            {/* العنوان */}
            <h4 className="text-[#0F172b] font-semibold text-lg mb-3">
              {work.title}
            </h4>

            {/* الوصف */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {work.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
