// Intención: Profesional evaluando qué hará concretamente en AUDICOOP
// Sección: TrabajaActividades — "Lo que puedes hacer aquí" (textual del Word)
// Fondo: bg-brand-green
// Jerarquía: número fantasma → actividad

const ACTIVIDADES: string[] = [
  "Participar en encargos de auditoría externa con metodología estructurada, desde la planeación hasta el informe final, aplicando las NIA y demás normas internacionales de aseguramiento.",
  "Ejecutar auditorías de cumplimiento verificando que las entidades cooperativas cumplan con las disposiciones legales, estatutarias y regulatorias que las rigen.",
  "Apoyar el ejercicio de la revisoría fiscal en cooperativas y fondos de empleados, contribuyendo a la transparencia financiera de estas organizaciones.",
  "Desarrollar y fortalecer sistemas de control interno en entidades del sector solidario, identificando riesgos y proponiendo mejoras concretas.",
  "Participar en procesos de implementación y evaluación de SARLAFT, acompañando a las entidades en el cumplimiento de la normativa de prevención del lavado de activos.",
  "Elaborar papeles de trabajo y documentar encargos con los estándares que exige nuestra firma, utilizando plantillas estandarizadas en todas las fases: planeación, ejecución, revisión y cierre.",
  "Crecer profesionalmente mediante capacitación continua en normas contables, tributarias, de auditoría y en temáticas del sector cooperativo.",
  "Usar herramientas tecnológicas como HubSpot, Power BI, SIIGO y otras plataformas digitales que optimizan la gestión de clientes, la visualización de datos y los procesos contables.",
];

export default function TrabajaActividades() {
  return (
    <section
      className="bg-brand-green py-20 lg:py-32"
      aria-labelledby="actividades-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                Lo que puedes hacer aquí
              </span>
            </div>
            <h2
              id="actividades-title"
              className="font-title text-3xl font-bold text-white leading-tight lg:text-4xl"
            >
              Un entorno especializado con impacto real en el sector solidario
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 font-body text-base text-white/45 leading-relaxed">
            En AUDICOOP S.A.S. tendrás la oportunidad de desarrollar tu carrera
            en un entorno profesional especializado, con impacto real en el
            sector solidario colombiano.
          </p>
        </div>

        {/* Grid de actividades */}
        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
          {ACTIVIDADES.map((actividad, i) => (
            <div key={i} className="bg-brand-green p-8 lg:p-10">
              <span
                className="font-title text-5xl font-bold text-white/[0.05] leading-none select-none block mb-5"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-body text-sm text-white/65 leading-relaxed">
                {actividad}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
