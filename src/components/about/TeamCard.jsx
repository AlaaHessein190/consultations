const TeamCard = ({ image, name, role, description, delay = 0 }) => {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg shadow-sky-900/5 transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/70 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-6 py-6">
        <h3 className="text-2xl font-semibold text-slate-900">{name}</h3>
        <span className="text-sm font-medium text-sky-600">{role}</span>
        <p className="mt-2 text-slate-600 leading-relaxed">{description}</p>
      </div>
    </article>
  );
};

export default TeamCard;