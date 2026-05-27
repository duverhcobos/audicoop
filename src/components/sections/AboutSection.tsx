import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "NIA", label: "Estándar internacional de auditoría" },
  { value: "100%", label: "Dedicación al sector solidario" },
  { value: "S.A.S.", label: "Constitución formal en Colombia" },
];

const DIFERENCIAL = [
  "Especialistas en normativa cooperativa colombiana",
  "Metodología alineada con NIA y NAI internacionales",
  "Herramientas digitales: Power BI, SIIGO, HubSpot",
  "Acompañamiento continuo durante todo el encargo",
];

export default function AboutSection() {
  return (
    <section
      className="bg-brand-cream py-20 lg:py-32"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* Panel izquierdo — verde oscuro con estadísticas */}
          <div className="lg:col-span-4 bg-brand-green p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <div className="h-px w-8 bg-brand-gold mb-8" aria-hidden="true" />
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold mb-4">
                Quiénes somos
              </p>
              <h2
                id="about-title"
                className="font-display text-3xl font-bold text-white leading-tight lg:text-4xl"
              >
                Una firma nacida del cooperativismo
              </h2>
            </div>

            {/* Estadísticas */}
            <div className="mt-14 flex flex-col gap-0">
              {STATS.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`py-7 ${i < STATS.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <p className="font-display text-4xl font-bold text-brand-gold leading-none lg:text-5xl">
                    {value}
                  </p>
                  <p className="font-body text-sm text-white/50 mt-2 leading-snug">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Panel derecho — teaser con diferencial y CTA a /nosotros */}
          <div className="lg:col-span-8 bg-white p-10 lg:p-14 flex flex-col justify-between gap-10">
            <div>
              <p className="font-display text-2xl font-bold text-brand-green leading-tight mb-7 lg:text-3xl border-b border-gray-100 pb-7">
                <em className="not-italic">AUDI</em>
                {" "}+{" "}
                <em className="not-italic">COOP</em>
                {" "}
                <span className="text-brand-gold">—</span>
                {" "}No es coincidencia.
              </p>

              <p className="font-body text-base text-brand-gray-text leading-relaxed">
                Somos una firma de auditoría especializada en el sector de la
                economía solidaria. Nuestro nombre refleja exactamente lo que
                hacemos:{" "}
                <strong className="text-brand-green font-semibold">auditoría, control
                y aseguramiento</strong>{" "}para el{" "}
                <strong className="text-brand-green font-semibold">sector cooperativo
                colombiano</strong>.
              </p>
            </div>

            {/* Diferencial */}
            <div className="border-t border-gray-100 pt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-6 bg-brand-gold shrink-0" aria-hidden="true" />
                <p className="font-heading text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                  Nuestro diferencial
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {DIFERENCIAL.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="mt-1.5 h-3 w-3 shrink-0 border border-brand-gold/60 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="h-1 w-1 bg-brand-gold" />
                    </div>
                    <span className="font-body text-sm text-brand-gray-text leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-3 font-heading text-[13px] font-bold uppercase tracking-[0.18em] text-brand-green hover:text-brand-gold transition-colors"
              >
                Conocer más sobre la firma
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
