import Link from "next/link";
import { ArrowRight, Shield, BookOpen, Award } from "lucide-react";

const CREDENTIALS = [
  {
    label: "Metodología",
    value: "NIA & NAI",
    detail: "Normas Internacionales de Auditoría",
    icon: BookOpen,
  },
  {
    label: "Especialización",
    value: "Sector Solidario",
    detail: "Cooperativas · Fondos · Mutuales",
    icon: Shield,
  },
  {
    label: "Sede",
    value: "Colombia",
    detail: "Bucaramanga, Santander",
    icon: Award,
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center bg-brand-green-dark overflow-hidden"
      aria-labelledby="hero-title"
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

      {/* Texto fantasma de marca */}
      <div
        className="absolute inset-0 flex items-end justify-end pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-title font-bold text-white leading-none pb-8 pr-4 lg:pr-8"
          style={{ fontSize: "clamp(5rem, 18vw, 22rem)", opacity: 0.025 }}
        >
          AUDICOOP
        </span>
      </div>

      {/* Acento dorado vertical izquierdo */}
      <div className="absolute left-0 top-0 h-full w-1 bg-brand-gold" aria-hidden="true" />

      {/* Acento dorado horizontal inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-gold/20" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-28 w-full">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10 items-center">

          {/* Columna izquierda — Declaración editorial */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Etiqueta con línea */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-brand-gold shrink-0" aria-hidden="true" />
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                Firma de Auditoría · Sector Cooperativo
              </span>
            </div>

            {/* Titular */}
            <h1
              id="hero-title"
              className="font-title font-bold text-white leading-[1.04]"
              style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
            >
              Control.
              <br />
              Transparencia.
              <br />
              <em className="not-italic text-brand-gold">Confianza.</em>
            </h1>

            {/* Descripción */}
            <p className="font-body text-lg text-white/60 leading-relaxed max-w-lg">
              AUDICOOP S.A.S. es la firma especializada en auditoría externa,
              revisoría fiscal y cumplimiento normativo para el sector cooperativo
              colombiano.
            </p>

            {/* Separador */}
            <div className="h-px w-full max-w-xs bg-white/10" aria-hidden="true" />

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/servicios"
                className="group inline-flex items-center justify-center gap-3 bg-brand-gold px-8 py-4 font-heading text-[13px] font-bold text-white tracking-wide transition-all duration-300 hover:bg-brand-gold-light"
              >
                Nuestros servicios
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center border border-white/20 px-8 py-4 font-heading text-[13px] font-semibold text-white/80 tracking-wide transition-all duration-300 hover:border-white/50 hover:text-white"
              >
                Agendar consultoría
              </Link>
            </div>
          </div>

          {/* Columna derecha — Panel de credenciales */}
          <div className="lg:col-span-5">
            <div className="border border-white/10 bg-white/[0.04] p-8 lg:p-10">
              {/* Cabecera del panel */}
              <div className="mb-7 pb-7 border-b border-white/10">
                <p className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-2">
                  Perfil de la firma
                </p>
                <p className="font-title text-2xl font-bold text-white leading-tight">
                  AUDICOOP S.A.S.
                </p>
                <p className="font-body text-sm text-white/40 mt-1.5">
                  Bucaramanga, Santander · Colombia
                </p>
              </div>

              {/* Lista de credenciales */}
              <div className="flex flex-col gap-6">
                {CREDENTIALS.map(({ label, value, detail, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-brand-gold/25 bg-brand-gold/10 text-brand-gold mt-0.5">
                      <Icon size={17} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                        {label}
                      </p>
                      <p className="font-heading text-sm font-bold text-white mt-0.5">
                        {value}
                      </p>
                      <p className="font-body text-xs text-white/40 mt-0.5">
                        {detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Nota legal */}
              <div className="mt-8 pt-7 border-t border-white/10">
                <p className="font-body text-xs text-white/30 leading-relaxed">
                  Registrada ante la Superintendencia de la Economía Solidaria.
                  Metodología alineada con NIA y NAI vigentes en Colombia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
