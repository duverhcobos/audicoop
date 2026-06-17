import { CheckCircle } from "lucide-react";
import type { Service } from "@/lib/types/service";

interface ServiceDetailFullProps {
  service: Service;
  index: number;
}

// Intención: profesional de cooperativas leyendo el catálogo de servicios.
// Debe entender de un vistazo qué hace el servicio, a quién aplica y qué entrega.
// Sin interacción — toda la información visible directamente.
export default function ServiceDetailFull({ service, index }: ServiceDetailFullProps) {
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      id={service.id}
      className="relative border-b border-gray-100 py-14 lg:py-20"
    >
      {/* Acento dorado izquierdo — ancla visual de cada servicio */}
      <div
        className="absolute left-0 top-0 h-full w-1 bg-brand-gold/20"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-10 pl-6 lg:grid-cols-12 lg:gap-16 lg:pl-8">

        {/* ── Columna izquierda: identidad del servicio ── */}
        <div className="lg:col-span-4">
          {/* Número fantasma */}
          <span
            className="block select-none font-title text-8xl font-bold leading-none text-brand-green"
            aria-hidden="true"
          >
            {num}
          </span>

          {/* Ícono — sin recuadro, directo sobre línea dorada */}
          <div className="mt-4 flex items-center gap-3">
            <div className="h-px w-6 bg-brand-gold shrink-0" aria-hidden="true" />
            <Icon size={20} className="text-brand-gold" aria-hidden="true" />
          </div>

          {/* Título */}
          <h3 className="mt-5 font-title text-xl font-bold leading-snug text-brand-ink">
            {service.title}
          </h3>

          {/* Descripción corta */}
          <p className="mt-3 font-body text-sm leading-relaxed text-brand-gray-subtle">
            {service.description}
          </p>
        </div>

        {/* ── Columna derecha: contenido completo ── */}
        <div className="lg:col-span-8">

          {/* Descripción extendida */}
          {service.fullDescription && (
            <p className="mb-8 border-b border-gray-100 pb-8 font-body text-[15px] leading-relaxed text-brand-gray-text">
              {service.fullDescription}
            </p>
          )}

          {/* Tres subcolumnas de datos */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">

            {/* Dirigido a */}
            {service.targetAudience && service.targetAudience.length > 0 && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-px w-4 shrink-0 bg-brand-gold" aria-hidden="true" />
                  <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                    Dirigido a
                  </span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {service.targetAudience.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      {/* Diamante */}
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-gold"
                        aria-hidden="true"
                      />
                      <span className="font-body text-sm text-brand-gray-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Normativa */}
            {service.normativa && service.normativa.length > 0 && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-px w-4 shrink-0 bg-brand-gold" aria-hidden="true" />
                  <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                    Normativa
                  </span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {service.normativa.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-px w-3 shrink-0 bg-brand-gray-subtle"
                        aria-hidden="true"
                      />
                      <span className="font-body text-sm text-brand-gray-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Qué incluye */}
            {service.benefits && service.benefits.length > 0 && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-px w-4 shrink-0 bg-brand-gold" aria-hidden="true" />
                  <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                    Incluye
                  </span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {service.benefits.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={12}
                        className="mt-0.5 shrink-0 text-brand-gold"
                        aria-hidden="true"
                      />
                      <span className="font-body text-sm text-brand-gray-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>

      </div>
    </article>
  );
}
