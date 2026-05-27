import ValueCard from "@/components/ui/ValueCard";
import { VALUES } from "@/lib/data/values";

export default function ValuesSection() {
  return (
    <section
      className="bg-brand-green py-20 lg:py-32"
      aria-labelledby="values-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Encabezado editorial */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                Nuestra esencia
              </span>
            </div>
            <h2
              id="values-title"
              className="font-display text-4xl font-bold text-white leading-tight sm:text-5xl"
            >
              Principios que nos guían
            </h2>
          </div>
          <p className="font-body text-base text-white/45 leading-relaxed max-w-sm lg:text-right">
            Cada encargo que asumimos está respaldado por un código ético que
            protege a nuestros clientes y la integridad de la profesión.
          </p>
        </div>

        {/* Grid con gap-px sobre fondo verde */}
        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, index) => (
            <ValueCard key={value.id} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
