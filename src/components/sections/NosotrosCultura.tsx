// Intención: Profesional evaluando la cultura de la firma antes de un primer contacto
// Sección: NosotrosCultura — cómo es trabajar en AUDICOOP, propósito organizacional
// Fondo: bg-brand-green-dark
// Jerarquía: declaración de propósito lidera → párrafo de cultura → cita sobre principios → enlace a trabaja con nosotros

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CULTURA_ITEMS = [
  "Decisiones estratégicas tomadas con transparencia",
  "Cultura de calidad desde la alta dirección hasta cada colaborador",
  "Desempeño reconocido con criterios objetivos",
  "Posibilidades reales de asumir mayores responsabilidades",
  "Evaluación periódica del equipo con miras al desarrollo del talento",
];

export default function NosotrosCultura() {
  return (
    <section
      className="relative bg-brand-green-dark overflow-hidden py-20 lg:py-32"
      aria-labelledby="cultura-title"
    >
      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden="true"
      />

      {/* Acento dorado izquierdo */}
      <div className="absolute left-0 top-0 h-full w-1 bg-brand-gold/40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">

          {/* Columna izquierda — declaración de propósito */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                Nuestra cultura
              </span>
            </div>

            <h2
              id="cultura-title"
              className="font-title text-3xl font-bold text-white leading-tight mb-8 lg:text-4xl"
            >
              Trabajar en AUDICOOP es trabajar con propósito.
            </h2>

            <p className="font-body text-base text-white/55 leading-relaxed mb-8">
              Somos una firma que nació del emprendimiento y la convicción de que los
              profesionales de la contaduría pueden generar valor real para las
              organizaciones solidarias de Colombia.
            </p>

            <Link
              href="/trabaja-con-nosotros"
              className="inline-flex items-center gap-3 bg-brand-gold px-7 py-4 font-heading text-[13px] font-bold text-white tracking-wide hover:bg-brand-gold-light transition-colors"
            >
              Únete al equipo
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Columna derecha — lista de cultura */}
          <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-white/10">
            <ul className="flex flex-col gap-0">
              {CULTURA_ITEMS.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-5 py-6 ${
                    i < CULTURA_ITEMS.length - 1 ? "border-b border-white/[0.07]" : ""
                  }`}
                >
                  {/* Número fantasma */}
                  <span
                    className="font-title text-4xl font-bold text-white/[0.05] leading-none shrink-0 select-none"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-base text-white/70 leading-relaxed pt-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
