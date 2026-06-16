import type { Value } from "@/lib/types/value";

const INDEX_LABELS = ["01", "02", "03", "04"];

interface ValueCardProps {
  value: Value;
  index?: number;
}

export default function ValueCard({ value, index = 0 }: ValueCardProps) {
  const Icon = value.icon;
  const num = INDEX_LABELS[index] ?? String(index + 1).padStart(2, "0");

  return (
    <article className="group relative bg-brand-green p-8 lg:p-10 overflow-hidden transition-colors duration-500 hover:bg-brand-green-medium">
      {/* Número fantasma de fondo */}
      <span
        className="absolute -bottom-3 -right-2 font-title text-9xl font-bold text-white/[0.04] select-none leading-none"
        aria-hidden="true"
      >
        {num}
      </span>

      {/* Ícono en contenedor cuadrado */}
      <div className="mb-8 flex h-12 w-12 items-center justify-center border border-brand-gold/30 transition-colors duration-500 group-hover:border-brand-gold/60">
        <Icon size={22} className="text-brand-gold" aria-hidden="true" />
      </div>

      {/* Línea de auditoría */}
      <div
        className="h-px w-6 bg-brand-gold mb-5 transition-all duration-500 group-hover:w-14"
        aria-hidden="true"
      />

      {/* Contenido */}
      <h3 className="font-heading text-base font-bold text-white leading-snug">
        {value.title}
      </h3>
      <p className="mt-3 font-body text-sm text-white/50 leading-relaxed group-hover:text-white/65 transition-colors duration-500">
        {value.description}
      </p>
    </article>
  );
}
