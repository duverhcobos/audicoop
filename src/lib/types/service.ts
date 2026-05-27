import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  // Campos de detalle — usados en la página /servicios
  fullDescription?: string;
  targetAudience?: string[];
  normativa?: string[];
  benefits?: string[];
}
