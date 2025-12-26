const CoreValueCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 px-6 py-8 shadow-lg shadow-sky-900/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 text-2xl">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default CoreValueCard;
