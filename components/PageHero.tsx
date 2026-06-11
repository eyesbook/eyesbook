type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-shell py-20 sm:py-24">
      <div className="max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-ink sm:text-6xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-9 text-stone">{description}</p>
      </div>
    </section>
  );
}
