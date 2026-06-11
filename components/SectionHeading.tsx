type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-stone">{description}</p>
      ) : null}
    </div>
  );
}
