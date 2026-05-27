// Intención: Profesional contable buscando contexto normativo y sectorial actualizado
// Página: /noticias — listado de novedades 2026 relevantes para el sector solidario
// Fondo: bg-white (tarjetas) / bg-brand-cream (página)
// Jerarquía: categoría → título → resumen → "Leer más"

import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import NoticiasGrid from "@/components/sections/NoticiasGrid";
import CalendarioTributario from "@/components/sections/CalendarioTributario";

export const metadata: Metadata = {
  title: "Novedades Normativas 2026 | AUDICOOP S.A.S.",
  description:
    "Novedades normativas y tributarias de 2026 relevantes para cooperativas y entidades de la economía solidaria colombiana.",
};

export default function NoticiasPage() {
  return (
    <main>
      <PageHero
        title="Novedades Normativas 2026"
        subtitle="Cambios en materia laboral, pensional, tributaria y del sector solidario que impactan a cooperativas y entidades de la economía solidaria."
      />
      <NoticiasGrid />
      <CalendarioTributario />
      <CtaSection />
    </main>
  );
}
