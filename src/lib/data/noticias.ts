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
  {
    id: "control-interno-sector-solidario",
    categoria: "Sector Solidario",
    titulo: "Cooperativas fortalecen sus sistemas de control interno para afrontar los retos actuales del sector solidario",
    resumen:
      "En un entorno cada vez más exigente desde el punto de vista regulatorio, financiero y tecnológico, las cooperativas, fondos de empleados y asociaciones mutuales han incrementado sus esfuerzos para fortalecer sus sistemas de control interno, considerados actualmente una herramienta fundamental para garantizar la transparencia, la eficiencia operativa y la sostenibilidad institucional.",
    cuerpo: [
      "El control interno permite a las organizaciones identificar oportunamente riesgos financieros, operativos y de cumplimiento, facilitando la implementación de medidas preventivas que protejan los recursos de los asociados y mejoren la toma de decisiones por parte de los órganos de administración y vigilancia.",
      "Especialistas del sector señalan que las entidades que cuentan con procedimientos documentados, políticas claras y mecanismos permanentes de supervisión logran una mayor capacidad para enfrentar cambios normativos y adaptarse a las nuevas exigencias del mercado. Asimismo, estos sistemas contribuyen al fortalecimiento de la confianza de los asociados, proveedores y demás grupos de interés.",
      "Dentro de este proceso, la auditoría y la revisoría fiscal desempeñan un papel fundamental al proporcionar una evaluación independiente sobre la efectividad de los controles implementados y la adecuada gestión de los recursos institucionales.",
      "Las tendencias actuales muestran que las organizaciones solidarias están migrando hacia modelos de control más preventivos que correctivos, orientados a anticipar situaciones de riesgo antes de que generen impactos financieros o reputacionales significativos.",
      "Expertos coinciden en que fortalecer el control interno ya no constituye únicamente una obligación normativa, sino una estrategia que contribuye directamente al crecimiento sostenible y a la permanencia de las entidades en el largo plazo.",
    ],
    fecha: "2026",
  },
  {
    id: "capacitacion-sarlaft-sector-solidario",
    categoria: "Sector Solidario",
    titulo: "La capacitación en SARLAFT adquiere mayor relevancia dentro del sector de la economía solidaria",
    resumen:
      "La gestión adecuada de los riesgos relacionados con el lavado de activos y la financiación del terrorismo continúa posicionándose como una de las principales prioridades para las organizaciones pertenecientes al sector solidario.",
    cuerpo: [
      "Durante los últimos años, cooperativas, fondos de empleados y asociaciones mutuales han fortalecido sus programas de capacitación interna con el propósito de garantizar que directivos, empleados y órganos de control conozcan sus responsabilidades frente a la prevención de actividades ilícitas y el cumplimiento de las disposiciones regulatorias vigentes.",
      "El Sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo (SARLAFT) se ha convertido en una herramienta esencial para la identificación, evaluación, control y monitoreo de riesgos que puedan afectar la estabilidad y reputación de las organizaciones.",
      "Los especialistas destacan que la capacitación continua constituye uno de los elementos más importantes dentro de cualquier sistema SARLAFT, debido a que permite desarrollar una cultura organizacional basada en la prevención, la transparencia y el cumplimiento normativo.",
      "Adicionalmente, el uso de nuevas tecnologías para el monitoreo de operaciones y la identificación de señales de alerta ha permitido mejorar significativamente la capacidad de respuesta de las entidades frente a posibles riesgos.",
      "Las organizaciones que mantienen programas permanentes de actualización no solo fortalecen sus procesos internos, sino que también generan mayor confianza entre asociados, autoridades de supervisión y demás actores vinculados al sector solidario.",
      "De acuerdo con expertos en gestión del riesgo, la prevención sigue siendo la mejor herramienta para proteger la integridad institucional y garantizar el adecuado desarrollo de las actividades económicas y sociales de las entidades solidarias.",
    ],
    fecha: "2026",
  },
  {
    id: "ia-transforma-auditoria-consultoria",
    categoria: "Tecnología",
    titulo: "La inteligencia artificial transforma los procesos de auditoría y consultoría empresarial",
    resumen:
      "La transformación digital continúa generando cambios significativos en la forma en que las organizaciones gestionan sus procesos administrativos, financieros y de control. Dentro de este contexto, la inteligencia artificial se ha convertido en una herramienta estratégica que está revolucionando los servicios de auditoría, revisoría fiscal y consultoría.",
    cuerpo: [
      "Actualmente, las herramientas basadas en inteligencia artificial permiten analizar grandes volúmenes de información en menor tiempo, identificar patrones inusuales, detectar inconsistencias y facilitar la elaboración de informes más completos y oportunos.",
      "Los profesionales del área destacan que estas tecnologías no buscan reemplazar el juicio profesional del auditor, sino complementar su labor mediante el fortalecimiento de los procesos de análisis y evaluación de riesgos.",
      "Asimismo, la implementación de soluciones tecnológicas contribuye a optimizar los tiempos de respuesta, mejorar la experiencia de los clientes y aumentar la eficiencia operativa de las organizaciones.",
      "En el caso del sector solidario, la incorporación de herramientas digitales representa una oportunidad importante para fortalecer la transparencia, mejorar los mecanismos de supervisión y promover una gestión más eficiente de los recursos institucionales.",
      "Las proyecciones indican que la inteligencia artificial continuará ganando protagonismo en los próximos años, convirtiéndose en un aliado fundamental para las firmas auditoras y consultoras que buscan ofrecer servicios innovadores y de alto valor agregado.",
      "La combinación entre conocimiento profesional, experiencia técnica y tecnología avanzada permitirá a las organizaciones enfrentar de manera más efectiva los desafíos de un entorno cada vez más dinámico y competitivo.",
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
