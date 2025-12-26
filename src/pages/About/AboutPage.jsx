import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SectionHeading from "../../components/about/SectionHeading.jsx";
import StatItem from "../../components/about/StatItem.jsx";
import CoreValueCard from "../../components/about/CoreValueCard.jsx";
import TeamCard from "../../components/about/TeamCard.jsx";

import teamMember1 from "../../assets/—Pngtree—a female hands using mobile_15740558.jpg";
import teamMember2 from "../../assets/—Pngtree—a handsome man showing his_15426581.png";
import teamMember3 from "../../assets/—Pngtree—a female hands using mobile_15740558.jpg";
import teamMember4 from "../../assets/—Pngtree—a handsome man showing his_15426581.png";

const stats = [
  { value: "+500", label: "مستشار معتمد" },
  { value: "+10,000", label: "استشارة ناجحة" },
  { value: "98%", label: "رضا العملاء" },
  { value: "+50", label: "تخصص مختلف" },
];

const pillars = [
  {
    title: "رسالتنا",
    description:
      "نمكن الأفراد والمؤسسات من اتخاذ قرارات صحيحة ومستندة من خلال توفير منصة موثوقة تجمع بين أفضل المستشارين المعتمدين، لتقديم تجربة استشارية ثرية تدعم التغيير بالجودة والاحترافية والسرعة.",
    icon: "🎯",
  },
  {
    title: "رؤيتنا",
    description:
      "أن نكون المنصة الرائدة عربياً في مجال الاستشارات الاحترافية، نوفر بيئة استشارية متكاملة للجميع في الوصول إلى الخبرات المتخصصة لتحقيق أهدافهم وتطلعاتهم بكفاءة ورفعة.",
    icon: "👁️",
  },
];

const values = [
  {
    title: "الأمان والخصوصية",
    description:
      "نحمي بيانات شركائنا بآليات متقدمة لضمان أعلى معايير الأمان والخصوصية.",
    icon: "🛡️",
  },
  {
    title: "الجودة والاحترافية",
    description:
      "نوفر أفضل الخبرات المعتمدة لضمان تجربة استشارية عالية القيمة.",
    icon: "🏅",
  },
  {
    title: "السرعة والكفاءة",
    description:
      "استجابة سريعة وحلول فعالة لتغيير حقيقي في وقت قياسي.",
    icon: "⚡",
  },
  {
    title: "الاهتمام بالعملاء",
    description:
      "ندعم عملاؤنا بخطوات واضحة وخطط مدروسة للوصول إلى نتائج ملموسة.",
    icon: "🤝",
  },
];

const team = [
  {
    image: teamMember1,
    name: "أ. سارة حسن",
    role: "شريكة مؤسِسة ومديرة قطاع التطوير",
    description: "خبيرة في تطوير الأعمال وتمكين الشركات الناشئة، بخبرة تزيد عن 12 عاماً.",
  },
  {
    image: teamMember2,
    name: "د. خالد العلي",
    role: "رئيس قطاع الاستراتيجيات",
    description: "متخصص في الاستشارات الاستراتيجية وإدارة التحول للمؤسسات الكبرى محلياً وعالمياً.",
  },
  {
    image: teamMember3,
    name: "م. نورة أحمد",
    role: "مديرة الحلول الرقمية",
    description: "تجمع بين الخبرة التقنية والإدارية لقيادة مبادرات التحول الرقمي.",
  },
  {
    image: teamMember4,
    name: "أ. عبدالله محمد",
    role: "رئيس قطاع الشراكات",
    description: "خبير في بناء الشراكات الاستراتيجية والتوسع الدولي بأكثر من 20 عاماً من الخبرة.",
  },
];

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-50">
      <header className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#dbeafe,transparent_60%)]" />
        <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center gap-8 px-6 py-24 text-center">
          <SectionHeading
            eyebrow="من نحن"
            title="نربط بينك وبين أفضل المستشارين"
            description="منصة استشاراتي هي الوجهة الأولى للحصول على استشارات احترافية من نخبة الخبراء المعتمدين في جميع المجالات"
            center
          />
        </div>
      </header>

      <section className="relative mx-auto -mt-16 max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-6 rounded-3xl bg-slate-900 px-6 py-10 shadow-2xl shadow-slate-900/20 md:grid-cols-4">
          {stats.map((item, index) => (
            <StatItem key={item.label} {...item} delay={index * 100} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 px-8 py-10 shadow-lg shadow-sky-900/5 backdrop-blur-sm"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl text-sky-600">
                {pillar.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-slate-900">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-6">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="قيمنا"
            title="القيم التي نؤمن بها"
            description="نحن ملتزمون بمجموعة من القيم الأساسية التي توجه عملنا وخدماتنا"
            center
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <CoreValueCard key={value.title} {...value} delay={index * 120} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-6">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="فريق العمل"
            title="تعرّف على فريقنا"
            description="فريق من الخبراء المتخصصين لخدمتك وتحقيق أهدافك"
            center
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member, index) => (
              <TeamCard key={member.name} {...member} delay={index * 150} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 shadow-2xl shadow-slate-900/30">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-sky-500/40 to-transparent" />
          <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4" data-aos="fade-up">
              <span className="inline-flex items-center rounded-full bg-slate-800 px-4 py-1 text-sm font-medium text-sky-300">
                جاهز لتبدأ؟
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                انضم إلى آلاف العملاء الذين حققوا أهدافهم بمساعدة مستشارينا
              </h2>
              <p className="text-slate-300 leading-relaxed">
                احصل على استشارة مخصصة تلائم احتياجاتك وتضعك على طريق النجاح بثقة.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center sm:flex-row" data-aos="fade-up" data-aos-delay="150">
              <a
                href="#consultants"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-slate-900/10 transition-transform duration-200 hover:-translate-y-1"
              >
                تصفّح المستشارين
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-sky-300 px-8 py-3 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-sky-500/20"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
