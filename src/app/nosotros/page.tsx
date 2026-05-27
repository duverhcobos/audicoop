import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import NosotrosIdentidad from "@/components/sections/NosotrosIdentidad";
import NosotrosCultura from "@/components/sections/NosotrosCultura";

export const metadata: Metadata = {
  title: "Quiénes Somos | AUDICOOP S.A.S.",
  description:
    "Firma de auditoría especializada en el sector de la economía solidaria. Constituida en Bucaramanga, Santander. Metodología NIA y NAI.",
};

export default function NosotrosPage() {
  return (
    <main>
      <PageHero
        title="Quiénes Somos"
        subtitle="Una firma de auditoría nacida del cooperativismo colombiano, con sede en Bucaramanga, Santander."
      />
      <NosotrosIdentidad />

      {/* Estructura Organizacional */}
      <section className="bg-white py-20 lg:py-32" aria-labelledby="organigrama-title">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                Estructura Organizacional
              </span>
            </div>
            <h2
              id="organigrama-title"
              className="font-display text-3xl font-bold text-brand-ink leading-tight lg:text-4xl"
            >
              Cómo está organizada la firma
            </h2>
          </div>
          <div className="border border-gray-100 overflow-hidden">
            <Image
              src="/organigrama.jpeg"
              alt="Organigrama de AUDICOOP S.A.S. — Asamblea, Junta Directiva, Gerente, y departamentos Financiero, Talento Humano y Servicios"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              quality={90}
            />
          </div>
        </div>
      </section>

      <NosotrosCultura />
      <CtaSection />
    </main>
  );
}
