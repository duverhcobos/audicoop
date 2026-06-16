import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ServiceDetailFull from "@/components/ui/ServiceDetailFull";
import CtaSection from "@/components/sections/CtaSection";
import AplicativosIA from "@/components/sections/AplicativosIA";
import { SERVICES } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Servicios | AUDICOOP S.A.S.",
  description:
    "Auditoría externa, revisoría fiscal, SARLAFT, auditoría de cumplimiento, asesorías tributarias y consultoría estratégica para el sector cooperativo colombiano.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        title="Nuestros Servicios"
        subtitle="Soluciones especializadas para cooperativas y entidades de la economía solidaria."
      />

      {/* Lista de servicios */}
      <section
        className="bg-white py-16 lg:py-24"
        aria-labelledby="services-list-title"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 id="services-list-title" className="sr-only">
            Lista de servicios
          </h2>

          {/* Lista de servicios — layout editorial completo */}
          <div className="border-t border-gray-100">
            {SERVICES.map((service, index) => (
              <ServiceDetailFull key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* CTA intermedio */}
          <div className="mt-14 bg-brand-green-dark p-8 lg:p-10 relative overflow-hidden">
            {/* Acento dorado */}
            <div className="absolute left-0 top-0 h-full w-1 bg-brand-gold" aria-hidden="true" />

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="pl-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-6 bg-brand-gold shrink-0" aria-hidden="true" />
                  <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                    ¿Necesita asesoría?
                  </span>
                </div>
                <p className="font-title text-lg font-bold text-white leading-snug">
                  Cuéntenos sobre su organización
                </p>
                <p className="mt-1 font-body text-sm text-white/50">
                  Le orientamos sin compromiso sobre el servicio que mejor se adapta a su caso.
                </p>
              </div>
              <Link
                href="/contacto"
                className="group inline-flex shrink-0 items-center justify-center gap-3 bg-brand-gold px-7 py-3.5 font-heading text-[13px] font-bold text-white tracking-wide transition-all duration-300 hover:bg-brand-gold-light"
              >
                Agendar consultoría
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AplicativosIA />
      <CtaSection />
    </>
  );
}
