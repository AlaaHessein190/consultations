import React from 'react'
import "aos/dist/aos.css"
import t1 from "../../assets/t1.png"
import t2 from "../../assets/t2.png"
import t3 from "../../assets/t3.png"
import t4 from "../../assets/t4.png"
import t5 from "../../assets/t5.png"
import t6 from "../../assets/t6.png"
import t7 from "../../assets/t7.png"
import t8 from "../../assets/t8.png"

function Specialization() {
  const specialization = [
    { icon: t1, title: 'الموارد البشرية', desc: '65+ مستشار', aos: "fade-up", delay: 100 },
    { icon: t2, title: 'الاستشارات التقنية', desc: '150+ مستشار', aos: "fade-up", delay: 200 },
    { icon: t3, title: 'الاستشارات المالية', desc: '85+ مستشار', aos: "fade-up", delay: 300 },
    { icon: t4, title: 'الاستشارات القانونية', desc: '120+ مستشار', aos: "fade-up", delay: 400 },
    { icon: t5, title: 'التعليم والتدريب', desc: '55+ مستشار', aos: "fade-up", delay: 500 },
    { icon: t6, title: 'إدارة الأعمال', desc: '100+ مستشار', aos: "fade-up", delay: 600 },
    { icon: t7, title: 'التسويق والإعلام', desc: "75+ مستشار", aos: "fade-up", delay: 700 },
    { icon: t8, title: 'الصحة النفسية', desc: '90+ مستشار', aos: "fade-up", delay: 800 },
  ]

  return (
    <div className='bg-white py-16'>
      {/* العنوان */}
      <div className="text-center mb-12 px-4" data-aos="fade-down">
        <h2 className="text-[#0F172b] text-2xl sm:text-3xl md:text-[36px] font-bold mb-3">
          التخصصات المتاحة
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          نخبة من الخبراء في مختلف المجالات لمساعدتك على اتخاذ القرار الصحيح
        </p>
      </div>

      {/* الكروت */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
          {specialization.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 hover:border-secondColor shadow-sm hover:shadow-md 
              transition-all duration-300 p-6 cursor-pointer text-center"
              data-aos={item.aos}
              data-aos-delay={item.delay}
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-[#0F172b] font-semibold text-base md:text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* الزرّ */}
        <div className="text-center" data-aos="zoom-in" data-aos-delay="900">
          <button className="border border-secondColor text-secondColor hover:bg-secondColor hover:text-white transition-all duration-300 px-6 py-2 rounded-xl font-semibold">
            عرض جميع التخصصات
          </button>
        </div>
      </div>
    </div>
  )
}

export default Specialization
