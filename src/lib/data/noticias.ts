// Intención: Contador, revisor fiscal o gerente cooperativo buscando contexto normativo actualizado
//            antes de tomar decisiones o buscar un proveedor de auditoría.
// Sección: data/noticias — artículos extraídos de CORTINA Y NOTICIAS PAGINA.docx (única fuente)
// IMPORTANTE: Todo el texto proviene literalmente del Word. No se agregó información externa.

export interface Noticia {
  id: string;
  categoria: string;
  titulo: string;
  resumen: string;
  cuerpo: string[];
  fecha: string;
}

export const NOTICIAS: Noticia[] = [
  {
    id: "reforma-laboral-2026",
    categoria: "Laboral",
    titulo: "Reforma Laboral 2026 modifica jornada nocturna y recargos",
    resumen:
      "La reforma laboral 2026 introduce modificaciones importantes en las condiciones de trabajo en Colombia, incluyendo la reducción gradual de la jornada semanal y nuevos esquemas de recargos.",
    cuerpo: [
      "La reforma laboral 2026 introduce modificaciones importantes en las condiciones de trabajo en Colombia. Entre los principales cambios se encuentra la reducción gradual de la jornada laboral semanal hasta llegar a 42 horas semanales, así como nuevos esquemas de distribución de horarios laborales.",
      "También se establece que la jornada nocturna iniciará desde las 7:00 p.m., aumentando el pago de recargos nocturnos para trabajadores de distintos sectores económicos. Asimismo, los recargos dominicales y festivos tendrán incrementos progresivos hasta alcanzar el 100% en los próximos años.",
      "La reforma fortalece el contrato a término indefinido como modalidad principal de contratación laboral en Colombia. Los contratos a término fijo tendrán limitaciones respecto a renovaciones y duración máxima permitida.",
      "Adicionalmente, se incorporan medidas orientadas a reducir la tercerización excesiva y aumentar la estabilidad laboral de los trabajadores en sectores como vigilancia, comercio y servicios.",
      "Empresas de sectores intensivos en mano de obra han manifestado preocupación por el incremento de costos laborales derivados de la reforma, especialmente en vigilancia privada, comercio y servicios. Algunas organizaciones han comenzado procesos de automatización para reducir costos operativos y optimizar recursos humanos.",
    ],
    fecha: "2026",
  },
  {
    id: "colpensiones-cambios-2026",
    categoria: "Pensional",
    titulo: "Colpensiones implementa nuevos cambios pensionales",
    resumen:
      "Durante 2026 continúa la implementación gradual del nuevo modelo pensional colombiano, que busca ampliar la cobertura y fortalecer el sistema público.",
    cuerpo: [
      "Durante 2026 continúa la implementación gradual del nuevo modelo pensional colombiano, el cual busca ampliar la cobertura y fortalecer el sistema público administrado por Colpensiones.",
      "Entre los cambios más relevantes se encuentra la reducción gradual de semanas requeridas para algunas poblaciones y el fortalecimiento del pilar solidario para adultos mayores sin pensión.",
      "El Gobierno Nacional expidió nuevas disposiciones relacionadas con el traslado de recursos desde fondos privados hacia Colpensiones para afiliados cobijados por el nuevo régimen. Esta medida ha generado debates entre entidades financieras, gremios y organismos de control debido a sus impactos fiscales y financieros.",
      "En 2026 continuará el reconocimiento de la denominada \"mesada 14\" para grupos específicos de pensionados, incluyendo miembros retirados de Fuerzas Militares y ciertos pensionados cobijados por regímenes anteriores.",
    ],
    fecha: "2026",
  },
  {
    id: "sarlaft-riesgo-2026",
    categoria: "Sector Solidario",
    titulo: "SARLAFT y gestión del riesgo toman mayor relevancia en 2026",
    resumen:
      "La Superintendencia de la Economía Solidaria continúa fortaleciendo mecanismos de supervisión y cumplimiento para cooperativas, fondos de empleados y asociaciones mutuales.",
    cuerpo: [
      "La Superintendencia de la Economía Solidaria continúa fortaleciendo mecanismos de supervisión y cumplimiento para cooperativas, fondos de empleados y asociaciones mutuales.",
      "Se priorizan procesos relacionados con gestión de riesgos, solvencia financiera, protección del asociado, transparencia institucional y prevención de lavado de activos.",
      "Las entidades solidarias deben mantener sistemas actualizados de administración del riesgo de lavado de activos y financiación del terrorismo (SARLAFT), incluyendo debida diligencia, segmentación de riesgos, monitoreo de operaciones, capacitación institucional y reportes regulatorios.",
    ],
    fecha: "2026",
  },
  {
    id: "gobierno-corporativo-sector-solidario",
    categoria: "Sector Solidario",
    titulo: "Sector solidario fortalece gobierno corporativo",
    resumen:
      "Durante 2026 se fortalecen las exigencias relacionadas con buen gobierno corporativo, transparencia financiera, auditoría interna y cumplimiento normativo en el sector solidario.",
    cuerpo: [
      "Durante 2026 se fortalecen las exigencias relacionadas con buen gobierno corporativo, transparencia financiera, auditoría interna, revisoría fiscal, gestión documental y cumplimiento normativo.",
      "Estas exigencias aplican directamente a cooperativas, fondos de empleados y asociaciones mutuales supervisadas por la Superintendencia de la Economía Solidaria.",
    ],
    fecha: "2026",
  },
  {
    id: "auditoria-inteligencia-artificial",
    categoria: "Tecnología",
    titulo: "Auditoría e inteligencia artificial transforman procesos empresariales",
    resumen:
      "Las firmas de auditoría y organizaciones empresariales continúan incorporando herramientas de inteligencia artificial para automatización, análisis financiero y auditoría continua.",
    cuerpo: [
      "Las firmas de auditoría y organizaciones empresariales continúan incorporando herramientas de inteligencia artificial para automatización de procesos, validación documental, análisis financiero, auditoría continua, gestión de riesgos y detección de inconsistencias contables.",
    ],
    fecha: "2026",
  },
];

export const CATEGORIAS_COLOR: Record<string, string> = {
  "Laboral": "text-blue-600 bg-blue-50 border-blue-100",
  "Pensional": "text-purple-600 bg-purple-50 border-purple-100",
  "Sector Solidario": "text-brand-green bg-brand-green/5 border-brand-green/20",
  "Tecnología": "text-brand-gold bg-brand-gold/5 border-brand-gold/20",
};
