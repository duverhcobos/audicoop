interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative bg-brand-green-dark overflow-hidden py-16 lg:py-24"
      aria-labelledby="page-hero-title"
    >
      {/* Grid pattern sutil */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden="true"
      />

      {/* Acento dorado vertical izquierdo */}
      <div className="absolute left-0 top-0 h-full w-1 bg-brand-gold" aria-hidden="true" />

      {/* Línea inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-gold/20" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Etiqueta con línea */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
          <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
            AUDICOOP S.A.S.
          </span>
        </div>

        <h1
          id="page-hero-title"
          className="font-display text-3xl font-bold text-white leading-tight sm:text-4xl lg:text-5xl"
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 font-body text-base text-white/55 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
