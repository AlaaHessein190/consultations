import { FiSend } from "react-icons/fi";

const gradientButton = "bg-gradient-to-l from-[#0057FF] to-[#00A6FF]";
const cardShadow = "shadow-[0px_12px_38px_rgba(8,35,70,0.12)]";

const ContactForm = () => {
  return (
    <section
      className={`bg-white rounded-3xl border border-[#DFE8FB] px-6 py-7 md:px-7 md:py-8 space-y-5 ${cardShadow}`}
      dir="rtl"
    >
      <header className="space-y-1 text-right">
        <h2 className="text-[#1A1F36] text-3xl md:text-4xl font-semibold">أرسل لنا رسالة</h2>
        <p className="text-[#5A6A85] text-sm md:text-base">
          املأ النموذج وسنتواصل معك خلال 24 ساعة
        </p>
      </header>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-3 text-right">
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-[#1A1F36] text-sm font-medium">
            الاسم الكامل <span className="text-[#0057FF]">*</span>
          </label>
          <input
            type="text"
            placeholder="أدخل اسمك الكامل"
            className="w-full h-11 rounded-xl border border-[#DFE8FB] bg-[#F9FBFF] px-4 text-sm text-[#1A1F36] placeholder:text-[#93A4BC] focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[#1A1F36] text-sm font-medium">رقم الهاتف</label>
          <input
            type="tel"
            placeholder="+966 xx xxx xxxx"
            className="w-full h-11 rounded-xl border border-[#DFE8FB] bg-[#F9FBFF] px-4 text-sm text-[#1A1F36] placeholder:text-[#93A4BC] focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[#1A1F36] text-sm font-medium">
            البريد الإلكتروني <span className="text-[#0057FF]">*</span>
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full h-11 rounded-xl border border-[#DFE8FB] bg-[#F9FBFF] px-4 text-sm text-[#1A1F36] placeholder:text-[#93A4BC] focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[#1A1F36] text-sm font-medium">
            الموضوع <span className="text-[#0057FF]">*</span>
          </label>
          <input
            type="text"
            placeholder="ما هو موضوع رسالتك؟"
            className="w-full h-11 rounded-xl border border-[#DFE8FB] bg-[#F9FBFF] px-4 text-sm text-[#1A1F36] placeholder:text-[#93A4BC] focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-colors"
          />
        </div>
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-[#1A1F36] text-sm font-medium">
            الرسالة <span className="text-[#0057FF]">*</span>
          </label>
          <textarea
            placeholder="اكتب رسالتك هنا..."
            className="w-full min-h-[110px] rounded-xl border border-[#DFE8FB] bg-[#F9FBFF] px-4 py-2.5 text-sm text-[#1A1F36] placeholder:text-[#93A4BC] focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-colors resize-none"
          />
        </div>
        <div className="md:col-span-2 pt-1">
          <button
            type="submit"
            className={`${gradientButton} text-white text-base font-medium py-3 rounded-xl w-full flex items-center justify-center gap-3 shadow-[0px_10px_28px_rgba(0,86,255,0.25)] transition-transform duration-200 hover:scale-[1.01]`}
          >
            <span>إرسال الرسالة</span>
            <FiSend className="w-5 h-5" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
