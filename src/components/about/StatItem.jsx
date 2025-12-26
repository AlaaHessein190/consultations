const StatItem = ({ icon, label, value, delay = 0 }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col items-center justify-center gap-2 text-white"
    >
      <div className="text-4xl font-semibold">{value}</div>
      <div className="text-sm font-medium text-sky-100">{label}</div>
    </div>
  );
};

export default StatItem;