import { ShieldCheck, Scale, Eye, Lock, BookOpen, Award } from "lucide-react";
import type { Value } from "@/lib/types/value";

// Fuente: documento "TRABAJA CON NOSOTROS" — seis principios éticos de AUDICOOP S.A.S.
export const VALUES: Value[] = [
  {
    id: "integridad",
    title: "Integridad",
    description: "Actuamos con honestidad y rectitud en todo momento.",
    icon: ShieldCheck,
  },
  {
    id: "objetividad",
    title: "Objetividad",
    description: "Nuestros juicios profesionales se basan en evidencia, no en conveniencias.",
    icon: Scale,
  },
  {
    id: "independencia",
    title: "Independencia",
    description: "Mantenemos autonomía total frente a nuestros clientes.",
    icon: Eye,
  },
  {
    id: "confidencialidad",
    title: "Confidencialidad",
    description: "La información de quienes confían en nosotros está segura.",
    icon: Lock,
  },
  {
    id: "competencia-profesional",
    title: "Competencia Profesional",
    description: "Nos actualizamos constantemente para dar lo mejor.",
    icon: BookOpen,
  },
  {
    id: "comportamiento-profesional",
    title: "Comportamiento Profesional",
    description: "Protegemos la reputación de la firma y de la profesión contable.",
    icon: Award,
  },
];
