import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import NosotrosIdentidad from "@/components/sections/NosotrosIdentidad";
import NosotrosCultura from "@/components/sections/NosotrosCultura";
import ConveniosSection from "@/components/sections/ConveniosSection";

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

      {/* Banner equipo — dos columnas: imagen izquierda, texto derecha */}
      <section className="grid grid-cols-1 lg:grid-cols-2" aria-label="Nuestro equipo">
        {/* Imagen — columna izquierda */}
        <div className="relative h-72 lg:h-auto min-h-[420px]">
          <Image
            src="/nosotros.jpeg"
            alt="Equipo AUDICOOP S.A.S. — Bucaramanga, Santander"
            fill
            className="object-cover object-center"
            quality={90}
          />
        </div>
        {/* Texto — columna derecha */}
        <div className="bg-brand-green-dark flex flex-col justify-center px-10 py-16 lg:px-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
            <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
              Nuestro equipo
            </span>
          </div>
          <h2 className="font-title text-3xl font-bold text-white leading-tight mb-5 lg:text-4xl">
            Personas comprometidas con el cooperativismo
          </h2>
          <p className="font-body text-sm text-white/70 leading-relaxed">
            Un equipo joven y especializado, con sede en Bucaramanga, dedicado a
            la auditoría, la revisoría fiscal y la consultoría para el sector solidario colombiano.
          </p>
        </div>
      </section>

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
              className="font-title text-3xl font-bold text-brand-ink leading-tight lg:text-4xl"
            >
              Cómo está organizada la firma
            </h2>
          </div>
          <div className="border border-gray-100 overflow-hidden">
            <Image
              src="/organigrama.png"
              alt="Organigrama de AUDICOOP S.A.S. — Asamblea, Junta Directiva, Gerente, y departamentos Financiero, Talento Humano y Servicios"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              quality={90}
            />
          </div>
        </div>
      </section>

      <ConveniosSection />
      <NosotrosCultura />
      <CtaSection />
    </main>
  );
}
