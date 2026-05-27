import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import TrabajaAreas from "@/components/sections/TrabajaAreas";
import TrabajaActividades from "@/components/sections/TrabajaActividades";
import TrabajaProceso from "@/components/sections/TrabajaProceso";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Trabaja con Nosotros | AUDICOOP S.A.S.",
  description:
    "Únete al equipo de AUDICOOP S.A.S. Conoce las áreas de trabajo, lo que puedes desarrollar y nuestro proceso de vinculación.",
};

export default function TrabajaConNosotrosPage() {
  return (
    <main>
      <PageHero
        title="Trabaja con Nosotros"
        subtitle="Si compartes nuestra misión de fortalecer el control interno y la transparencia financiera del sector solidario, este es tu lugar."
      />
      <TrabajaAreas />
      <TrabajaActividades />
      <TrabajaProceso />
      <CtaSection />
    </main>
  );
}
