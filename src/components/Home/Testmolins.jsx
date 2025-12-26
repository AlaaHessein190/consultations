import "aos/dist/aos.css";
import to1 from "../../assets/to1.png";
import to2 from "../../assets/to2.png";
import to3 from "../../assets/to3.png";
import to4 from "../../assets/to4.png";
import ico from "../../assets/TestimonialsSection.png";
import icon from "../../assets/icon.png";

function Testmolins() {


  const consultants = [
    {
      imega: to1,
      icon2: ico,
      icon: icon,
      name: "محمد أحمد",
      title1: "مؤسس شركة ناشئة",
      desc: "استشارة نفسية ساعدتني كثيراً في تجاوز فترة صعبة. الدكتورة كانت متفهمة ومحترفة والمنصة توفر خصوصية تامة.",
    },
    {
      imega: to2,
      icon2: ico,
      icon: icon,
      name: "ليلى السيد",
      title1: "مديرة مشروع",
      desc: "تجربة رائعة! استشارة تقنية مع مهندس خبير ساعدتني في اختيار الأدوات المناسبة لمشروعي. أنصح الجميع باستخدام المنصة.",
    },
    {
      imega: to3,
      icon2: ico,
      icon: icon,
      name: "عمر حسن",
      title1: "رائد أعمال",
      desc: "المنصة سهلة الاستخدام والمستشارون محترفون للغاية. حصلت على استشارة مالية ساعدتني في تنظيم ميزانيتي وبدء الاستثمار.",
    },
    {
      imega: to4,
      icon2: ico,
      icon: icon,
      name: "فاطمة علي",
      title1: "موظفة",
      desc: "حصلت على استشارة قانونية ممتازة ساعدتني في تأسيس شركتي بشكل صحيح. المستشار كان محترفاً جداً وأجاب على جميع أسئلتي بوضوح.",
    },
  ];

  return (
    <section className="bg-white py-16">
      {/* العنوان */}
      <div className="text-center mb-12 px-4" data-aos="fade-up">
        <h2 className="text-[#0F172b] text-2xl sm:text-3xl md:text-[36px] font-bold mb-3">
          ماذا يقول عملاؤنا؟
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          آراء حقيقية من عملائنا الذين استفادوا من خدمات المنصة
        </p>
      </div>

      {/* الكروت */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {consultants.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="group border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 
                       h-full flex flex-col justify-between bg-white hover:bg-secondColor hover:scale-[1.03]"
          >
            {/* الأيقونات */}
            <div className="flex items-center justify-between mb-4">
              <img src={item.icon2} alt="" className="w-35" />
              <img src={item.icon} alt="" className="w-6 h-6 sm:w-7 sm:h-7 opacity-80 group-hover:invert" />
            </div>

            {/* النص */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
              “{item.desc}”
            </p>

            {/* الاسم والوظيفة */}
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={item.imega}
                alt={item.name}
                className="rounded-full w-10 h-10 object-cover border border-gray-300"
              />
              <div>
                <h4 className="text-secondColor font-semibold text-base group-hover:text-white transition-colors">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-sm group-hover:text-gray-200 transition-colors">
                  {item.title1}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testmolins;
