import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import NormatividadMarco from "@/components/sections/NormatividadMarco";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Marco Normativo | AUDICOOP S.A.S.",
  description:
    "Marco normativo que rige la auditoría y el sector cooperativo colombiano: NIA, NAI, Ley 1314 de 2009, DUR 2420, Ley 79 y Código de Comercio.",
};

export default function NormatividadPage() {
  return (
    <main>
      <PageHero
        title="Marco Normativo"
        subtitle="Las normas que rigen nuestro trabajo y el sector cooperativo colombiano."
        cta={{
          label: "Manual de Control de calidad",
          href: "https://drive.google.com/file/d/1dYK3Hb-uYStiDh3M0ZlCTPCdDhvApRpp/view?usp=drivesdk",
        }}
      />
      <NormatividadMarco />
      <CtaSection />
    </main>
  );
}
