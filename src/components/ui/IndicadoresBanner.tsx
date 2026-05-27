// Intención: Contador o gerente cooperativo que abre el sitio — necesita saber de un vistazo
//            si los indicadores del año están actualizados antes de ir a servicios.
// Sección: IndicadoresBanner — franja compacta con indicadores económicos 2026
// Fondo: bg-brand-ink (máximo contraste, separa visualmente el hero del resto)
// Jerarquía: año/etiqueta de vigencia → valor monetario/porcentaje → descripción corta
// Fuente: CORTINA Y NOTICIAS PAGINA.docx — todos los valores son oficiales 2026

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Indicador {
  etiqueta: string;
  valor: string;
  detalle: string;
}

const INDICADORES: Indicador[] = [
  {
    etiqueta: "Salario Mínimo",
    valor: "$1.750.905",
    detalle: "SMMLV 2026 · +23%",
  },
  {
    etiqueta: "Auxilio de Transporte",
    valor: "$249.095",
    detalle: "Vigente 2026",
  },
  {
    etiqueta: "Total Salario Vital",
    valor: "$2.000.000",
    detalle: "Salario + auxilio",
  },
  {
    etiqueta: "Jornada Laboral",
    valor: "42 h/sem",
    detalle: "Transición Reforma 2026",
  },
  {
    etiqueta: "Aportes Salud",
    valor: "4% / 8.5%",
    detalle: "Trabajador / Empleador",
  },
  {
    etiqueta: "Aportes Pensión",
    valor: "4% / 12%",
    detalle: "Trabajador / Empleador",
  },
];

export default function IndicadoresBanner() {
  return (
    <aside
      className="bg-brand-ink border-b border-white/[0.06]"
      aria-label="Indicadores económicos 2026"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Encabezado de franja */}
        <div className="flex items-center justify-between gap-6 border-b border-white/[0.06] py-3">
          <div className="flex items-center gap-3">
            <div className="h-px w-5 bg-brand-gold shrink-0" aria-hidden="true" />
            <span className="font-heading text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold">
              Indicadores Económicos y Tributarios 2026
            </span>
          </div>
          <Link
            href="/noticias"
            className="hidden sm:inline-flex items-center gap-2 font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-white/30 hover:text-brand-gold transition-colors"
          >
            Ver novedades normativas
            <ArrowRight size={11} aria-hidden="true" />
          </Link>
        </div>

        {/* Grid de indicadores */}
        <div className="grid grid-cols-2 gap-px bg-white/[0.04] sm:grid-cols-3 lg:grid-cols-6">
          {INDICADORES.map((ind) => (
            <div
              key={ind.etiqueta}
              className="bg-brand-ink px-4 py-4 lg:px-5"
            >
              <p className="font-heading text-[9px] font-bold uppercase tracking-[0.18em] text-white/30 mb-1 leading-none">
                {ind.etiqueta}
              </p>
              <p className="font-display text-lg font-bold text-white leading-none mb-1">
                {ind.valor}
              </p>
              <p className="font-body text-[11px] text-white/35 leading-snug">
                {ind.detalle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </aside>
  );
}
