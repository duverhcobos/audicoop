// Intención: Contador o auditor verificando que AUDICOOP trabaja bajo los estándares correctos
// Sección: NormatividadMarco — leyes y normas explícitamente mencionadas en el Word
// Fondo: bg-white (grupos principales) / bg-brand-cream (detalle)
// Jerarquía: grupo normativo lidera → norma específica → aplicación en servicios
// IMPORTANTE: Solo leyes y normas mencionadas explícitamente en TRABAJA CON NOSOTROS.docx

interface Norma {
  codigo: string;
  nombre: string;
  descripcion: string;
  aplicaA: string[];
}

interface GrupoNormativo {
  numero: string;
  categoria: string;
  descripcion: string;
  normas: Norma[];
}

const GRUPOS: GrupoNormativo[] = [
  {
    numero: "01",
    categoria: "Normas Internacionales de Auditoría",
    descripcion:
      "Estándares internacionales que estructuran la metodología de nuestros encargos de auditoría y aseguramiento.",
    normas: [
      {
        codigo: "NIA",
        nombre: "Normas Internacionales de Auditoría",
        descripcion:
          "Marco metodológico para la planeación, ejecución, revisión y cierre de encargos de auditoría externa.",
        aplicaA: ["Auditoría Externa", "Auditoría de Cumplimiento"],
      },
      {
        codigo: "NAI",
        nombre: "Normas Internacionales de Aseguramiento",
        descripcion:
          "Estándares para encargos de aseguramiento distintos a la auditoría de estados financieros.",
        aplicaA: ["Auditoría Externa", "Auditoría de Cumplimiento"],
      },
    ],
  },
  {
    numero: "02",
    categoria: "Marco Normativo Colombiano — Contabilidad",
    descripcion:
      "Legislación colombiana que regula la información financiera y su convergencia con estándares internacionales.",
    normas: [
      {
        codigo: "Ley 1314 de 2009",
        nombre: "Ley de Convergencia a Normas Internacionales",
        descripcion:
          "Regula los principios y normas de contabilidad e información financiera y de aseguramiento en Colombia.",
        aplicaA: ["Auditoría Externa", "Auditoría de Cumplimiento"],
      },
      {
        codigo: "DUR 2420 de 2015",
        nombre: "Decreto Único Reglamentario — Sector Comercio",
        descripcion:
          "Compila la reglamentación de la Ley 1314 de 2009, incluyendo los marcos técnicos normativos de contabilidad.",
        aplicaA: ["Auditoría Externa", "Auditoría de Cumplimiento"],
      },
    ],
  },
  {
    numero: "03",
    categoria: "Marco Normativo Colombiano — Sector Solidario",
    descripcion:
      "Legislación que estructura y regula el sector cooperativo en Colombia.",
    normas: [
      {
        codigo: "Ley 79 de 1988",
        nombre: "Ley Básica del Cooperativismo Colombiano",
        descripcion:
          "Establece el marco fundamental para la organización y funcionamiento de las cooperativas en Colombia.",
        aplicaA: [
          "Auditoría Externa",
          "Auditoría de Cumplimiento",
          "Revisoría Fiscal",
        ],
      },
    ],
  },
  {
    numero: "04",
    categoria: "Marco Normativo — Ejercicio Profesional",
    descripcion:
      "Normas que rigen el ejercicio de la revisoría fiscal y la contaduría pública en Colombia.",
    normas: [
      {
        codigo: "Código de Comercio",
        nombre: "Código de Comercio de Colombia",
        descripcion:
          "Regula el ejercicio de la revisoría fiscal, sus obligaciones, responsabilidades e independencia.",
        aplicaA: ["Revisoría Fiscal"],
      },
    ],
  },
];

export default function NormatividadMarco() {
  return (
    <section
      className="bg-white py-20 lg:py-32"
      aria-labelledby="normatividad-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Encabezado */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
            <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
              Marco de referencia
            </span>
          </div>
          <h2
            id="normatividad-title"
            className="font-display text-3xl font-bold text-brand-ink leading-tight mb-5 lg:text-4xl"
          >
            Las normas que rigen nuestro trabajo
          </h2>
          <p className="font-body text-base text-brand-gray-text leading-relaxed">
            Cada encargo que ejecutamos está alineado con el marco normativo
            colombiano e internacional. Trabajamos con las normas que conocemos
            a fondo y que aplican directamente al sector cooperativo.
          </p>
        </div>

        {/* Grupos normativos */}
        <div className="flex flex-col gap-px bg-gray-100">
          {GRUPOS.map((grupo) => (
            <div
              key={grupo.numero}
              className="grid grid-cols-1 gap-px bg-gray-100 lg:grid-cols-12"
            >
              {/* Encabezado del grupo */}
              <div className="lg:col-span-4 bg-brand-green p-8 lg:p-10">
                <span
                  className="font-display text-6xl font-bold text-white/[0.05] leading-none select-none block mb-4"
                  aria-hidden="true"
                >
                  {grupo.numero}
                </span>
                <h3 className="font-heading text-base font-bold text-white leading-snug mb-3">
                  {grupo.categoria}
                </h3>
                <p className="font-body text-sm text-white/50 leading-relaxed">
                  {grupo.descripcion}
                </p>
              </div>

              {/* Normas del grupo */}
              <div className="lg:col-span-8 bg-white">
                {grupo.normas.map((norma, i) => (
                  <div
                    key={norma.codigo}
                    className={`p-8 lg:p-10 ${
                      i < grupo.normas.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="h-px w-5 bg-brand-gold shrink-0 mt-3" aria-hidden="true" />
                      <div>
                        <p className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gold mb-1">
                          {norma.codigo}
                        </p>
                        <h4 className="font-heading text-sm font-bold text-brand-ink">
                          {norma.nombre}
                        </h4>
                      </div>
                    </div>

                    <p className="font-body text-sm text-brand-gray-text leading-relaxed mb-4 pl-9">
                      {norma.descripcion}
                    </p>

                    {/* Servicios a los que aplica */}
                    <div className="pl-9 flex flex-wrap gap-2">
                      {norma.aplicaA.map((servicio) => (
                        <span
                          key={servicio}
                          className="font-heading text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gray-subtle border border-gray-200 px-3 py-1"
                        >
                          {servicio}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
