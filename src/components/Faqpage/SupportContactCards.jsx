import { FiPhoneCall, FiMail, FiMessageSquare } from "react-icons/fi";

const contacts = [
  {
    title: "اتصل بنا",
    description: "+201012345678",
    actionLabel: "اتصل الآن",
    icon: FiPhoneCall,
  },
  {
    title: "البريد الإلكتروني",
    description: "support@estisharati.com",
    actionLabel: "أرسل رسالة",
    icon: FiMail,
  },
  {
    title: "الدردشة المباشرة",
    description: "تحدث مع فريق الدعم فوراً",
    actionLabel: "ابدأ المحادثة",
    icon: FiMessageSquare,
  },
];

const SupportContactCards = () => {
  return (
    <section
      className="rounded-[36px] bg-white px-6 py-12 shadow-[0_24px_65px_rgba(15,23,42,0.12)]"
      data-aos="fade-up"
    >
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-[#0F172A] sm:text-3xl">
          لم تجد ما تبحث عنه؟
        </h2>
        <p className="mt-2 text-sm text-[#4C5A73] sm:text-base">
          تواصل مع فريق الدعم وسنكون سعداء بمساعدتك
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {contacts.map(({ title, description, actionLabel, icon: Icon }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-4 rounded-3xl border border-[#E2E8F0] bg-[#F8FAFF] px-6 py-8 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#2563EB] shadow-[0_12px_30px_rgba(37,99,235,0.25)]">
              <Icon className="h-5 w-5" />
            </span>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#0F172A]">{title}</h3>
              <p className="text-sm text-[#475569]">{description}</p>
            </div>
            <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#2563EB] shadow-[0_10px_25px_rgba(37,99,235,0.18)] transition-transform hover:scale-[1.02]">
              {actionLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportContactCards;
