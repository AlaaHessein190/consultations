import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FaqCategorySection = ({ title, icon: Icon, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="space-y-4" data-aos="fade-up">
      <header className="flex items-center justify-between rounded-2xl border border-[#E2E8F0] bg-white px-5 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <span className="text-lg font-semibold text-[#0F172A]">{title}</span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F6FF] text-[#2563EB]">
          <Icon className="h-4 w-4" />
        </span>
      </header>
      <div className="space-y-3">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_12px_28px_rgba(15,23,42,0.10)]"
            >
              <button
                type="button"
                onClick={() => toggleQuestion(index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-3 text-right"
              >
                <div className="flex flex-col items-end gap-1 text-[#0F172A]">
                  <span className="text-sm font-medium">{item.question}</span>
                  <span className="text-xs text-[#94A3B8]">
                    {isOpen ? "إخفاء الإجابة" : "عرض الإجابة"}
                  </span>
                </div>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#CBD5F5] bg-[#F8FAFF] text-[#2563EB] transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                >
                  <FiChevronDown className="h-4 w-4" />
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed text-[#475569]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqCategorySection;
