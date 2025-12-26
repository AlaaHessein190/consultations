import { FiSearch } from "react-icons/fi";

const FaqHero = () => {
  return (
    <section
      className="relative overflow-hidden rounded-[48px] bg-gradient-to-b from-[#F7FAFF] via-white to-white px-6 py-16 text-center sm:px-12"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[480px] w-[480px] rounded-full bg-[#D8ECFF] blur-[160px] opacity-80" />
      </div>
      <span className="inline-flex items-center justify-center rounded-full border border-[#C5D8F7] bg-white/80 px-4 py-1 text-sm font-medium text-[#1E3A8A]">
        مركز المساعدة
      </span>
      <h1 className="mt-6 text-3xl font-semibold text-[#0F172A] sm:text-4xl md:text-5xl">
        كيف يمكننا مساعدتك؟
      </h1>
      <p className="mt-4 text-base text-[#4C5A73] sm:text-lg">
        ابحث عن إجابات للأسئلة الشائعة أو تواصل مع فريق الدعم
      </p>
      <div className="mx-auto mt-8 w-full max-w-2xl">
        <label className="flex items-center gap-3 rounded-full border border-[#E2E8F0] bg-white px-5 py-3 shadow-[0_15px_35px_rgba(15,23,42,0.06)]">
          <FiSearch className="h-5 w-5 text-[#64748B]" />
          <input
            type="text"
            placeholder="ابحث عن سؤال..."
            className="w-full bg-transparent text-right text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none"
            dir="rtl"
          />
        </label>
      </div>
    </section>
  );
};

export default FaqHero;
