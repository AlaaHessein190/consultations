import React, { useEffect } from "react";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import there from "../../assets/there.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Choose() {
  const features = [
    {
      icon: one,
      title: "مستشارون معتمدون ومؤهلون",
      desc: "جميع المستشارين تم التحقق منهم ومؤهلون بشروط صارمة لضمان أعلى مستوى من الاحترافية.",
      animation: "fade-up",
    },
    {
      icon: two,
      title: "تغطية شاملة لجميع المجالات",
      desc: "تخصصات متنوعة: تقنية، قانونية، مالية، صحية، نفسية، وغيرها الكثير.",
      animation: "fade-up",
    },
    {
      icon: there,
      title: "سهولة الحجز والبدء السريع",
      desc: "احجز موعدك وابدأ استشارتك خلال دقائق معدودة بكل سهولة ويسر.",
      animation: "fade-up",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <div className="bg-white py-16">
      {/* ✅ العنوان الرئيسي */}
      <div className="text-center mb-12 px-4" data-aos="fade-down">
        <h2 className="text-[#0F172b] text-2xl sm:text-3xl md:text-[36px] font-bold mb-3">
          لماذا تختار منصتنا؟
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          نوفر لك بيئة استشارية موثوقة واحترافية بأعلى المعايير
        </p>
      </div>

      {/* ✅ الكروت */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos={feature.animation}
            data-aos-delay={index * 200}
            className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            {/* الصورة */}
            <div className="flex justify-center mb-6">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* النص */}
            <h3 className="text-[#0F172b] font-semibold text-lg mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Choose;
