import {
  ClipboardCheck,
  Scale,
  ShieldCheck,
  AlertTriangle,
  Calculator,
  TrendingUp,
} from "lucide-react";
import type { Service } from "@/lib/types/service";

export const SERVICES: Service[] = [
  {
    id: "auditoria-externa",
    title: "Auditoría Externa",
    description:
      "Encargos de auditoría externa con metodología estructurada, desde la planeación hasta el informe final, aplicando Normas Internacionales de Auditoría (NIA).",
    icon: ClipboardCheck,
    fullDescription:
      "Participamos en encargos de auditoría externa con metodología estructurada, desde la planeación hasta la emisión del informe final, aplicando las NIA y demás normas internacionales de aseguramiento.",
    targetAudience: [
      "Cooperativas y precooperativas",
      "Asociaciones mutuales",
      "Fondos de empleados",
    ],
    normativa: [
      "NIA — Normas Internacionales de Auditoría",
      "NAI — Normas Internacionales de Aseguramiento",
      "Ley 1314 de 2009",
      "DUR 2420 de 2015",
      "Ley 79 de 1988",
    ],
  },
  {
    id: "revisoria-fiscal",
    title: "Revisoría Fiscal",
    description:
      "Ejercicio de control con independencia total, criterio profesional sólido y documentación rigurosa de los papeles de trabajo en cooperativas y fondos de empleados.",
    icon: Scale,
    fullDescription:
      "El ejercicio de la revisoría fiscal exige independencia total, criterio profesional sólido y capacidad para documentar adecuadamente los papeles de trabajo. Apoyamos a cooperativas y fondos de empleados en el cumplimiento de esta responsabilidad.",
    targetAudience: [
      "Cooperativas y precooperativas",
      "Asociaciones mutuales",
      "Fondos de empleados",
    ],
    normativa: [
      "Código de Comercio",
      "Ley 79 de 1988",
    ],
  },
  {
    id: "auditoria-cumplimiento",
    title: "Auditoría de Cumplimiento",
    description:
      "Verificación del cumplimiento de las disposiciones legales, estatutarias y regulatorias que rigen a las entidades del sector solidario.",
    icon: ShieldCheck,
    fullDescription:
      "Ejecutamos auditorías de cumplimiento verificando que las entidades cooperativas cumplan con las disposiciones legales, estatutarias y regulatorias que las rigen.",
    targetAudience: [
      "Cooperativas y precooperativas",
      "Asociaciones mutuales",
      "Fondos de empleados",
    ],
    normativa: [
      "NIA — Normas Internacionales de Auditoría",
      "NAI — Normas Internacionales de Aseguramiento",
      "Ley 1314 de 2009",
      "DUR 2420 de 2015",
      "Ley 79 de 1988",
    ],
  },
  {
    id: "sarlaft",
    title: "SARLAFT",
    description:
      "Implementación y evaluación del Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo.",
    icon: AlertTriangle,
    fullDescription:
      "Acompañamos a las entidades en procesos de implementación y evaluación de su SARLAFT, apoyando el cumplimiento de la normativa de prevención del lavado de activos.",
    targetAudience: [
      "Cooperativas y precooperativas",
      "Asociaciones mutuales",
      "Fondos de empleados",
    ],
  },
  {
    id: "asesorias-tributarias",
    title: "Asesorías Tributarias",
    description:
      "Orientación en facturación electrónica y normativa tributaria vigente, apoyados en herramientas como SIIGO y QuickBooks.",
    icon: Calculator,
    fullDescription:
      "Brindamos asesoría en facturación electrónica y normativa tributaria vigente, con manejo de software contable como SIIGO y QuickBooks para garantizar precisión y orden en el registro de las operaciones.",
    targetAudience: [
      "Cooperativas y precooperativas",
      "Asociaciones mutuales",
      "Fondos de empleados",
    ],
  },
  {
    id: "consultoria-asesoria",
    title: "Consultoría y Asesoría",
    description:
      "Fortalecimiento de sistemas de control interno, gestión del riesgo, SARLAFT y planeación estratégica para el sector solidario.",
    icon: TrendingUp,
    fullDescription:
      "Desarrollamos y fortalecemos sistemas de control interno en entidades del sector solidario, identificando riesgos y proponiendo mejoras concretas. Apoyamos procesos de planeación estratégica con herramientas como Power BI y HubSpot.",
    targetAudience: [
      "Cooperativas y precooperativas",
      "Asociaciones mutuales",
      "Fondos de empleados",
    ],
  },
];

