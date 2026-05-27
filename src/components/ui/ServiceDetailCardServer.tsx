import { CheckCircle, BookOpen, Users } from "lucide-react";
import { ServiceAccordion } from "./ServiceDetailCard";
import type { Service } from "@/lib/types/service";

interface ServiceDetailCardProps {
  service: Service;
  index?: number;
}

const INDEX_LABELS = ["01", "02", "03", "04", "05", "06"];

export default function ServiceDetailCard({ service, index = 0 }: ServiceDetailCardProps) {
  const Icon = service.icon;
  const num = INDEX_LABELS[index] ?? String(index + 1).padStart(2, "0");

  const header = (
    <>
      {/* Número de servicio */}
      <span className="font-display text-2xl font-bold text-brand-green/20 leading-none shrink-0 w-8">
        {num}
      </span>

      {/* Ícono en contenedor cuadrado */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-brand-green/20">
        <Icon size={20} className="text-brand-gold" aria-hidden="true" />
      </div>

      {/* Título y descripción */}
      <div className="min-w-0">
        <h3 className="font-heading text-base font-bold text-brand-green">
          {service.title}
        </h3>
        <p className="mt-0.5 font-body text-sm text-brand-gray-subtle line-clamp-1">
          {service.description}
        </p>
      </div>
    </>
  );

  const body = (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Descripción completa */}
      {service.fullDescription && (
        <div className="lg:col-span-3">
          <p className="font-body text-sm text-brand-gray-text leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
      )}

      {/* A quién va dirigido */}
      {service.targetAudience && service.targetAudience.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-4 bg-brand-gold shrink-0" aria-hidden="true" />
            <h4 className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              A quién va dirigido
            </h4>
          </div>
          <ul className="flex flex-col gap-2">
            {service.targetAudience.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <div className="mt-1.5 h-2 w-2 shrink-0 border border-brand-green/40 flex items-center justify-center">
                  <div className="h-1 w-1 bg-brand-green/60" aria-hidden="true" />
                </div>
                <span className="font-body text-sm text-brand-gray-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Normativa aplicable */}
      {service.normativa && service.normativa.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-4 bg-brand-gold shrink-0" aria-hidden="true" />
            <h4 className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Normativa aplicable
            </h4>
          </div>
          <ul className="flex flex-col gap-2">
            {service.normativa.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-2 h-1 w-4 shrink-0 bg-brand-gold/50" aria-hidden="true" />
                <span className="font-body text-sm text-brand-gray-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Qué incluye */}
      {service.benefits && service.benefits.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-4 bg-brand-gold shrink-0" aria-hidden="true" />
            <h4 className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Qué incluye
            </h4>
          </div>
          <ul className="flex flex-col gap-2">
            {service.benefits.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle size={13} className="mt-0.5 shrink-0 text-brand-gold" aria-hidden="true" />
                <span className="font-body text-sm text-brand-gray-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <ServiceAccordion id={service.id} header={header}>
      {body}
    </ServiceAccordion>
  );
}

