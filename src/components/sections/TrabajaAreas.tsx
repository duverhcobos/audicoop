// Intención: Profesional contable evaluando si AUDICOOP es el lugar correcto para su perfil
// Sección: TrabajaAreas — consejos por área de conocimiento (textual del Word)
// Fondo: bg-white
// Jerarquía: área lidera → descripción de perfil buscado

interface Area {
  numero: string;
  titulo: string;
  descripcion: string;
}

const AREAS: Area[] = [
  {
    numero: "01",
    titulo: "Auditoría Externa y de Cumplimiento",
    descripcion:
      "Domina las Normas Internacionales de Auditoría (NIA) y las Normas Internacionales de Aseguramiento (NAI). Familiarízate con el marco normativo colombiano, especialmente la Ley 1314 de 2009 y el DUR 2420 de 2015. Conocer la estructura y regulación del sector cooperativo (Ley 79 de 1988) será un diferencial importante en tu perfil.",
  },
  {
    numero: "02",
    titulo: "Revisoría Fiscal",
    descripcion:
      "Comprende a fondo el Código de Comercio y la normativa aplicable al sector solidario. El ejercicio de la revisoría fiscal exige independencia total, criterio profesional sólido y capacidad para documentar adecuadamente los papeles de trabajo. Si tienes tarjeta profesional vigente, vas un paso adelante.",
  },
  {
    numero: "03",
    titulo: "Consultoría y Asesoría",
    descripcion:
      "El conocimiento en control interno, gestión del riesgo, SARLAFT y planeación estratégica es clave. Si además tienes habilidades para comunicar hallazgos y recomendaciones con claridad, eso suma mucho.",
  },
  {
    numero: "04",
    titulo: "Área Financiera y Contable",
    descripcion:
      "Manejo de software contable (SIIGO, QuickBooks o similares), conocimiento en facturación electrónica y normativa tributaria vigente son competencias que valoramos. La precisión y el orden en el registro de operaciones son fundamentales.",
  },
  {
    numero: "05",
    titulo: "Talento Humano y Administración",
    descripcion:
      "Buscamos personas con habilidades en gestión de procesos, comunicación organizacional y manejo de herramientas digitales. Si tienes experiencia en procesos de selección, contratación o inducción, hay un espacio para ti en nuestra firma.",
  },
];

export default function TrabajaAreas() {
  return (
    <section
      className="bg-white py-20 lg:py-32"
      aria-labelledby="areas-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
            <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
              Perfiles que buscamos
            </span>
          </div>
          <h2
            id="areas-title"
            className="font-display text-3xl font-bold text-brand-ink leading-tight lg:text-4xl"
          >
            Antes de postularte, conoce el perfil de cada área
          </h2>
        </div>

        {/* Grid editorial */}
        <div className="flex flex-col gap-px bg-gray-100">
          {AREAS.map((area) => (
            <div
              key={area.numero}
              className="grid grid-cols-1 gap-px bg-gray-100 lg:grid-cols-12"
            >
              {/* Número + título */}
              <div className="lg:col-span-4 bg-brand-cream p-8 lg:p-10 flex flex-col justify-between">
                <span
                  className="font-display text-7xl font-bold text-brand-green/[0.07] leading-none select-none"
                  aria-hidden="true"
                >
                  {area.numero}
                </span>
                <h3 className="font-heading text-base font-bold text-brand-ink leading-snug mt-4">
                  {area.titulo}
                </h3>
              </div>

              {/* Descripción */}
              <div className="lg:col-span-8 bg-white p-8 lg:p-10 flex items-center">
                <div className="flex items-start gap-4">
                  <div className="h-px w-5 bg-brand-gold shrink-0 mt-3" aria-hidden="true" />
                  <p className="font-body text-base text-brand-gray-text leading-relaxed">
                    {area.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
