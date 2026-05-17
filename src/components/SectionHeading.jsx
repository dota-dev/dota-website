export default function SectionHeading({ tag, title, subtitle, id }) {
  return (
    <div className="mb-12 text-center md:mb-16" id={id}>
      {tag && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest gradient-text">
          {tag}
        </span>
      )}
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-text-muted">{subtitle}</p>
      )}
    </div>
  );
}
