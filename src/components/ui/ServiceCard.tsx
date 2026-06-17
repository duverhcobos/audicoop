import type { Service } from "@/lib/types/service";

const INDEX_LABELS = ["01", "02", "03", "04", "05", "06"];

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = service.icon;
  const num = INDEX_LABELS[index] ?? String(index + 1).padStart(2, "0");

  return (
    <article className="group relative bg-white p-8 lg:p-10 overflow-hidden transition-colors duration-500 hover:bg-brand-green">
      {/* Número fantasma de fondo */}
      <span
        className="absolute -top-2 right-4 font-title text-8xl font-bold text-brand-green/[0.1] select-none leading-none transition-colors duration-500 group-hover:text-white/[0.07]"
        aria-hidden="true"
      >
        {num}
      </span>

      {/* Ícono en contenedor cuadrado con borde */}
      <div className="mb-7 flex h-12 w-12 items-center justify-center border border-brand-green/20 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10">
        <Icon
          size={22}
          className="text-brand-gold transition-colors duration-500 group-hover:text-brand-gold"
          aria-hidden="true"
        />
      </div>

      {/* Contenido */}
      <h3 className="font-heading text-base font-bold text-brand-green leading-snug transition-colors duration-500 group-hover:text-white">
        {service.title}
      </h3>
      <p className="mt-3 font-body text-sm text-brand-gray-subtle leading-relaxed transition-colors duration-500 group-hover:text-white/65">
        {service.description}
      </p>

      {/* Línea de auditoría — se expande en hover */}
      <div
        className="mt-7 h-px w-8 bg-brand-gold/50 transition-all duration-500 group-hover:w-full group-hover:bg-white/15"
        aria-hidden="true"
      />
    </article>
  );
}
