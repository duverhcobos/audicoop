import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import IndicadoresBanner from "@/components/ui/IndicadoresBanner";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ValuesSection from "@/components/sections/ValuesSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "AUDICOOP S.A.S. | Auditoría y Revisoría Fiscal para el Sector Cooperativo",
  description:
    "Firma especializada en auditoría externa, revisoría fiscal, SARLAFT y consultoría estratégica para cooperativas y entidades de economía solidaria en Colombia.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IndicadoresBanner />
      <ServicesSection />
      <AboutSection />
      <ValuesSection />
      <CtaSection />
    </>
  );
}
