// Intención: Candidato que quiere saber exactamente cómo aplicar
// Sección: TrabajaProceso — proceso de vinculación paso a paso (textual del Word)
// Fondo: bg-brand-cream
// Jerarquía: número de paso + título + descripción + email al final

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Paso {
  numero: string;
  titulo: string;
  descripcion: string;
  detalle?: string[];
}

const PASOS: Paso[] = [
  {
    numero: "01",
    titulo: "Identificación de la vacante",
    descripcion:
      "Publicamos nuestras necesidades de personal a través de portales de empleo, redes profesionales y convenios con universidades. También realizamos reclutamiento interno cuando hay oportunidades de ascenso o traslado para nuestro equipo actual.",
  },
  {
    numero: "02",
    titulo: "Postulación",
    descripcion:
      `Envía tu hoja de vida a ${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "audicoop@gmail.com"} indicando el cargo al que aplicas. Asegúrate de incluir tu formación académica, experiencia profesional y certificaciones relevantes en auditoría, contabilidad o áreas afines.`,
  },
  {
    numero: "03",
    titulo: "Evaluación integral",
    descripcion:
      "Tu perfil será evaluado en varias dimensiones a través de nuestros formatos institucionales y un proceso de entrevista:",
    detalle: [
      "Formación académica (FFA): título profesional, estudios de posgrado, cursos y certificaciones relevantes (NIIF, NIA, impuestos, etc.).",
      "Experiencia profesional (FEP): cargos desempeñados, logros y responsabilidades en empresas anteriores.",
      "Conocimientos técnicos y habilidades (FCTH): comunicación, trabajo en equipo, resolución de problemas, liderazgo, adaptabilidad y gestión del tiempo.",
      "Entrevista técnica y de idoneidad con el equipo de Talento Humano y/o el socio responsable del área.",
    ],
  },
  {
    numero: "04",
    titulo: "Verificación de información",
    descripcion:
      "Validamos referencias laborales y personales, y revisamos antecedentes para garantizar la integridad del equipo que representa a nuestra firma ante los clientes.",
  },
  {
    numero: "05",
    titulo: "Selección y vinculación",
    descripcion:
      "Los candidatos seleccionados recibirán una propuesta formal. La vinculación se formaliza mediante contrato de trabajo a término indefinido o, para servicios especializados temporales, mediante Orden de Prestación de Servicios (OPS), siempre conforme a la legislación laboral colombiana vigente.",
  },
  {
    numero: "06",
    titulo: "Inducción",
    descripcion:
      "Todo nuevo integrante del equipo pasa por un proceso de inducción en el que conoce nuestra estructura organizacional, el Manual de Control de Calidad, las políticas internas, las normas éticas aplicables y las responsabilidades de su cargo. Queremos que desde el primer día te sientas parte de AUDICOOP.",
  },
];

export default function TrabajaProceso() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "audicoop@gmail.com";
  return (
    <section
      className="bg-brand-cream py-20 lg:py-32"
      aria-labelledby="proceso-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
            <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
              Proceso de vinculación
            </span>
          </div>
          <h2
            id="proceso-title"
            className="font-title text-3xl font-bold text-brand-ink leading-tight lg:text-4xl"
          >
            Claro, estructurado y transparente
          </h2>
        </div>

        {/* Pasos */}
        <div className="flex flex-col gap-px bg-gray-200">
          {PASOS.map((paso, i) => (
            <div
              key={paso.numero}
              className="grid grid-cols-1 gap-px bg-gray-200 lg:grid-cols-12"
            >
              {/* Número */}
              <div className="lg:col-span-2 bg-brand-cream p-8 flex items-start justify-between lg:flex-col lg:justify-start lg:gap-4">
                <span
                  className="font-title text-5xl font-bold text-brand-green/[0.12] leading-none select-none"
                  aria-hidden="true"
                >
                  {paso.numero}
                </span>
                {/* Línea dorada horizontal en mobile / vertical indicator en desktop */}
                <div className="h-px w-8 bg-brand-gold lg:hidden" aria-hidden="true" />
              </div>

              {/* Contenido */}
              <div className="lg:col-span-10 bg-white p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-px w-5 bg-brand-gold shrink-0 mt-3" aria-hidden="true" />
                  <h3 className="font-heading text-base font-bold text-brand-ink">
                    {paso.titulo}
                  </h3>
                </div>
                <p className="font-body text-sm text-brand-gray-text leading-relaxed pl-9 mb-4">
                  {paso.descripcion}
                </p>
                {paso.detalle && (
                  <ul className="pl-9 flex flex-col gap-2">
                    {paso.detalle.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div
                          className="mt-1.5 h-2 w-2 shrink-0 border border-brand-gold/50 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <div className="h-0.5 w-0.5 bg-brand-gold" />
                        </div>
                        <span className="font-body text-sm text-brand-gray-text leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA de postulación */}
        <div className="mt-14 border border-brand-green/20 bg-white p-8 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-brand-gold shrink-0" aria-hidden="true" />
                <span className="font-heading text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                  ¿Listo para postularte?
                </span>
              </div>
              <p className="font-body text-sm text-brand-gray-text leading-relaxed">
                Envía tu hoja de vida indicando el área de interés.
              </p>
            </div>
            <Link
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-3 bg-brand-green px-8 py-4 font-heading text-[13px] font-bold text-white tracking-wide hover:bg-brand-green-medium transition-colors shrink-0"
            >
              {contactEmail}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
