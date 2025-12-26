import "aos/dist/aos.css";
import hero from "../../assets/hero.png";
import { FaCheck } from "react-icons/fa";

function Hero() {


  return (
    <div className="relative" data-aos="zoom-in">
      <img
        src={hero}
        alt="Hero"
        className="rounded-2xl w-full shadow-lg"
      />

      {/* نص ودائرة */}
      <div
        className="
          absolute bottom-5 left-1/2 transform -translate-x-1/2
          md:right-5 md:bottom-5 md:left-auto md:translate-x-0
          bg-mainColor p-6 rounded-xl shadow-lg
          text-center md:text-right
          flex items-center gap-3
          w-80
          transition-all duration-500
        "
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* الدائرة مع أيقونة */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center group transition-all duration-200 bg-secondColor hover:bg-white">
          <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center transition-all duration-200 group-hover:bg-secondColor group-hover:text-white">
            <FaCheck className="text-white group-hover:text-white" />
          </div>
        </div>

        {/* النصوص */}
        <div>
          <h4 className="text-[#45556c] text-sm font-semibold">آخر استشارة</h4>
          <h3 className="text-secondColor text-lg font-bold">استشارة قانونية ناجحة</h3>
          <p className="text-[#009966] text-sm">تم الحل في 24 ساعة</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
