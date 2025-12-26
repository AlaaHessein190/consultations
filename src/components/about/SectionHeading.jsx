const SectionHeading = ({ eyebrow, title, description, center = false }) => {
  return (
    <div className={`space-y-3 ${center ? "text-center mx-auto" : ""}`} data-aos="fade-up">
      {eyebrow && (
        <span className="inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-600">
          {eyebrow}
        </span>
      )}
      <div className={`space-y-3 ${center ? "mx-auto max-w-2xl" : ""}`}>
        <h2 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeading;