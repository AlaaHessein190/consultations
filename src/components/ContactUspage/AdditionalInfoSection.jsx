import { FiMessageCircle, FiSend } from "react-icons/fi";

const cardShadow = "shadow-[0px_18px_40px_rgba(13,38,76,0.08)]";

const AdditionalInfoSection = () => {
  return (
    <section className="space-y-6" dir="rtl">
      <header className="text-right space-y-2">
        <h1 className="text-[#1A1F36] text-3xl md:text-4xl font-semibold">معلومات إضافية</h1>
        <p className="text-[#5A6A85] text-base md:text-lg">
          نحن متواجدون دائماً لمساعدتك. اختر الطريقة الأنسب للتواصل معنا.
        </p>
      </header>

      <div className={`bg-[#F3F8FF] rounded-3xl border border-[#C6DAFF] p-6 md:p-8 flex flex-col gap-6 shadow-[0px_15px_38px_rgba(8,35,70,0.08)]`}>
        <div className="flex flex-row-reverse items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,86,255,0.18)] text-[#0057FF]">
            <FiMessageCircle className="w-6 h-6" />
          </div>
          <div className="flex-1 space-y-2 text-right">
            <p className="text-[#1A1F36] text-xl font-semibold">الدردشة المباشرة</p>
            <p className="text-[#5A6A85] text-sm md:text-base leading-relaxed">
              تواصل مع فريق الدعم الفني مباشرة عبر الدردشة المباشرة
            </p>
          </div>
        </div>
        <button
          className="bg-gradient-to-l from-[#0057FF] to-[#00A6FF] text-white text-base md:text-lg font-medium py-3 px-10 self-start rounded-xl flex items-center gap-2 shadow-[0px_20px_40px_rgba(0,86,255,0.25)] transition-transform duration-200 hover:scale-[1.01]"
        >
          <span>ابدأ المحادثة</span>
          <FiSend className="w-5 h-5" />
        </button>
      </div>

      <div className={`bg-white rounded-3xl border border-[#D4E0F7] p-6 md:p-8 space-y-5 ${cardShadow}`}>
        <p className="text-[#1A1F36] text-xl font-semibold">الأسئلة الشائعة</p>
        <p className="text-[#5A6A85] text-sm md:text-base leading-relaxed">
          قد تجد إجابة سؤالك في قسم الأسئلة الشائعة
        </p>
        <button className="w-full border border-[#BBD0F7] bg-white text-[#1A1F36] py-3 rounded-xl text-base font-medium hover:bg-[#EEF3FF] transition-colors duration-200">
          تصفح الأسئلة الشائعة
        </button>
      </div>

      <div className="bg-[#0B1A39] text-white rounded-3xl p-6 md:p-8 space-y-5 shadow-[0px_25px_55px_rgba(11,26,57,0.35)]">
        <p className="text-xl font-semibold">ساعات الدعم</p>
        <p className="text-white/80 text-sm md:text-base leading-relaxed">
          فريقنا جاهز لمساعدتك خلال الأوقات التالية:
        </p>
        <div className="space-y-2 text-sm md:text-base text-white/90">
          <div className="flex justify-between"><p>السبت - الخميس</p>
          <p>9:00 ص - 6:00 م</p></div>
          
          <div className="flex justify-between">
            <p>الجمعة: </p>
          <p>مغلق</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfoSection;
