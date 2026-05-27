import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section
      className="relative bg-brand-green-dark overflow-hidden py-24 lg:py-36"
      aria-labelledby="cta-title"
    >
      {/* Grid sutil de fondo */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Línea superior dorada */}
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-gold/30" aria-hidden="true" />

      {/* Acento vertical derecho */}
      <div className="absolute right-0 top-0 h-full w-1 bg-brand-gold/40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10 items-end">

          {/* Declaración principal */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                Próximo paso
              </span>
            </div>
            <h2
              id="cta-title"
              className="font-display font-bold text-white leading-[1.04]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              ¿Listo para fortalecer el control en su organización?
            </h2>
            <p className="mt-6 font-body text-lg text-white/50 leading-relaxed max-w-2xl">
              Acompañamos a cooperativas y entidades solidarias con metodologías
              sólidas, criterio profesional y compromiso con la transparencia.
            </p>
          </div>

          {/* Acciones */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-3 bg-brand-gold px-8 py-4 font-heading text-[13px] font-bold text-white tracking-wide transition-all duration-300 hover:bg-brand-gold-light"
            >
              Agendar consultoría
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center border border-white/20 px-8 py-4 font-heading text-[13px] font-semibold text-white/75 tracking-wide transition-all duration-300 hover:border-white/45 hover:text-white"
            >
              Conocer servicios
            </Link>
            <p className="font-body text-xs text-white/25 text-center mt-1">
              Bucaramanga, Santander · Colombia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
