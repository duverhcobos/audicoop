// Intención: Directivo cooperativo evaluando credibilidad y respaldo institucional de la firma
// Sección: ConveniosSection — aliados estratégicos e institucionales de AUDICOOP S.A.S.
// Fuente: Anexar a la página.docx — todas las descripciones son literales del documento
// Fondo: bg-brand-cream

import Image from "next/image";

interface Convenio {
  id: string;
  nombre: string;
  logo: string;
  descripcion: string;
  tipo: "institucional" | "tecnologico";
}

const CONVENIOS: Convenio[] = [
  {
    id: "dian",
    nombre: "DIAN",
    logo: "/convenios/dian.png",
    descripcion:
      "Aliado estratégico que fortalece la gestión tributaria mediante actualización normativa, herramientas digitales y apoyo en el cumplimiento de obligaciones fiscales.",
    tipo: "institucional",
  },
  {
    id: "jcc",
    nombre: "Junta Central de Contadores",
    logo: "/convenios/jcc.jpg",
    descripcion:
      "Entidad que garantiza el cumplimiento ético y legal de la profesión contable, fortaleciendo la credibilidad, transparencia y confianza de los servicios prestados por AUDICOOP S.A.S.",
    tipo: "institucional",
  },
  {
    id: "camara",
    nombre: "Cámara de Comercio de Bucaramanga",
    logo: "/convenios/camara-comercio.jpg",
    descripcion:
      "Impulsa el fortalecimiento empresarial mediante capacitación, networking y acceso a servicios de apoyo para el desarrollo organizacional.",
    tipo: "institucional",
  },
  {
    id: "powerbi",
    nombre: "Power BI",
    logo: "/convenios/powerbi.png",
    descripcion:
      "Herramienta tecnológica que fortalece la presentación de informes mediante reportes dinámicos, interactivos y basados en datos.",
    tipo: "tecnologico",
  },
  {
    id: "supersolidaria",
    nombre: "Supersolidaria",
    logo: "/convenios/supersolidaria.png",
    descripcion:
      "Aliado tecnológico que permite integrar servicios de analítica de datos, inteligencia de negocios y visualización de información, fortaleciendo la toma de decisiones y el valor agregado para los clientes.",
    tipo: "tecnologico",
  },
];

export default function ConveniosSection() {
  return (
    <section
      className="bg-brand-cream py-20 lg:py-32"
      aria-labelledby="convenios-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
            <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
              Alianzas estratégicas
            </span>
          </div>
          <h2
            id="convenios-title"
            className="font-title text-3xl font-bold text-brand-ink leading-tight lg:text-4xl"
          >
            Convenios con otras instituciones para el desarrollo del trabajo
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white sm:grid-cols-2 lg:grid-cols-3 border border-gray-200">
          {CONVENIOS.map((convenio) => (
            <div
              key={convenio.id}
              className="bg-white p-8 lg:p-10 flex flex-col gap-6"
            >
              {/* Logo */}
              <div className="h-14 flex items-center">
                <Image
                  src={convenio.logo}
                  alt={`Logo ${convenio.nombre}`}
                  width={180}
                  height={56}
                  className="h-12 w-auto object-contain object-left"
                />
              </div>

              {/* Separador */}
              <div className="h-px w-full bg-gray-100" aria-hidden="true" />

              {/* Nombre + descripción */}
              <div>
                <p className="font-heading text-sm font-bold text-brand-ink mb-3">
                  {convenio.nombre}
                </p>
                <p className="font-body text-sm text-brand-gray-text leading-relaxed">
                  {convenio.descripcion}
                </p>
              </div>

              {/* Badge tipo */}
              <div className="mt-auto pt-2">
                <span
                  className={`inline-block font-heading text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 ${
                    convenio.tipo === "institucional"
                      ? "bg-brand-green/8 text-brand-green"
                      : "bg-brand-gold/10 text-brand-gold"
                  }`}
                >
                  {convenio.tipo === "institucional" ? "Aliado institucional" : "Aliado tecnológico"}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
