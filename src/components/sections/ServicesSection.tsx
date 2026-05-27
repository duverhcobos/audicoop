import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/data/services";

export default function ServicesSection() {
  return (
    <section
      className="bg-white py-20 lg:py-32"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Encabezado editorial — asimétrico */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                Líneas de servicio
              </span>
            </div>
            <h2
              id="services-title"
              className="font-display text-4xl font-bold text-brand-green leading-tight sm:text-5xl"
            >
              Lo que hacemos
            </h2>
            <p className="mt-4 font-body text-base text-brand-gray-subtle leading-relaxed">
              Soluciones especializadas con metodología certificada para el sector
              solidario colombiano.
            </p>
          </div>
          <Link
            href="/servicios"
            className="group flex items-center gap-2 self-start lg:self-end font-heading text-[13px] font-bold text-brand-green tracking-wide border-b border-brand-green/25 pb-0.5 transition-all duration-200 hover:border-brand-gold hover:text-brand-gold whitespace-nowrap"
          >
            Ver todos los servicios
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Grid con gap-px — superficie unificada */}
        <div className="grid grid-cols-1 gap-px bg-gray-100 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
