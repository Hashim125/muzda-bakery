interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  media?: React.ReactNode;
}

export default function PageHero({ eyebrow, title, description, media }: PageHeroProps) {
  return (
    <section className="hero-grain overflow-hidden bg-[#6a2a38] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className={`grid items-center gap-10 ${media ? 'lg:grid-cols-[1fr_0.92fr]' : ''}`}>
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f0d0a3]">
              {eyebrow}
            </span>
            <h1 className="fancy-title mt-6 text-5xl font-semibold leading-none text-balance sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f3e6e1]">{description}</p>
          </div>
          {media}
        </div>
      </div>
    </section>
  );
}
