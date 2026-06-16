// Intención: Contador o responsable tributario que necesita verificar fechas oficiales 2026
// Sección: CalendarioTributario — fechas de vencimiento DIAN 2026
// Fondo: bg-white
// Jerarquía: obligación → fechas → detalle de condición
// Fuente: CORTINA Y NOTICIAS PAGINA.docx — todas las fechas son de la DIAN 2026

interface ObligacionTributaria {
  id: string;
  numero: string;
  titulo: string;
  subtitulo: string;
  items: string[];
  nota?: string;
}

const OBLIGACIONES: ObligacionTributaria[] = [
  {
    id: "renta-naturales",
    numero: "01",
    titulo: "Declaración de Renta — Personas Naturales",
    subtitulo: "Año gravable 2025",
    items: [
      "Período: 12 de agosto al 26 de octubre de 2026",
      "Las fechas varían según los dos últimos dígitos de la cédula o NIT",
    ],
  },
  {
    id: "renta-juridicas",
    numero: "02",
    titulo: "Declaración de Renta — Personas Jurídicas",
    subtitulo: "Año gravable 2025",
    items: [
      "Período: 12 al 26 de mayo de 2026",
      "El pago se realiza en dos cuotas según el último dígito del NIT",
    ],
  },
  {
    id: "renta-grandes",
    numero: "03",
    titulo: "Declaración de Renta — Grandes Contribuyentes",
    subtitulo: "Tres cuotas 2026",
    items: [
      "Primera cuota: febrero 2026",
      "Segunda cuota y declaración: abril 2026",
      "Tercera cuota: junio 2026",
    ],
  },
  {
    id: "topes-renta",
    numero: "04",
    titulo: "Topes para Declarar Renta 2026",
    subtitulo: "Personas naturales obligadas",
    items: [
      "Patrimonio bruto superior a $235.683.000",
      "Ingresos anuales superiores a $73.323.600",
      "Consumos con tarjeta de crédito superiores a $73.323.600",
      "Compras y consumos superiores a $73.323.600",
      "Consignaciones bancarias superiores a $73.323.600",
    ],
    nota: "Basta con superar uno de estos límites para estar obligado a declarar.",
  },
  {
    id: "retencion-fuente",
    numero: "05",
    titulo: "Retención en la Fuente",
    subtitulo: "Presentación mensual",
    items: [
      "Vencimientos entre los días 8 y 23 de cada mes",
      "Las fechas exactas dependen de los dos últimos dígitos del NIT del contribuyente",
    ],
  },
];

interface FuenteOficial {
  nombre: string;
  descripcion: string;
  url: string;
}

const FUENTES: FuenteOficial[] = [
  {
    nombre: "DIAN",
    descripcion: "Dirección de Impuestos y Aduanas Nacionales",
    url: "https://www.dian.gov.co",
  },
  {
    nombre: "Supersolidaria",
    descripcion: "Superintendencia de la Economía Solidaria",
    url: "https://www.supersolidaria.gov.co",
  },
  {
    nombre: "JCC",
    descripcion: "Junta Central de Contadores",
    url: "https://www.jcc.gov.co",
  },
  {
    nombre: "CTCP",
    descripcion: "Consejo Técnico de la Contaduría Pública",
    url: "https://www.ctcp.gov.co",
  },
  {
    nombre: "Presidencia",
    descripcion: "Presidencia de Colombia — Noticias Oficiales",
    url: "https://www.presidencia.gov.co",
  },
  {
    nombre: "UGPP",
    descripcion: "Unidad de Gestión Pensional y Parafiscales",
    url: "https://www.ugpp.gov.co",
  },
];

export default function CalendarioTributario() {
  return (
    <>
      {/* Calendario Tributario */}
      <section
        className="bg-brand-cream py-20 lg:py-32"
        aria-labelledby="calendario-title"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                Calendario DIAN 2026
              </span>
            </div>
            <h2
              id="calendario-title"
              className="font-title text-3xl font-bold text-brand-ink leading-tight lg:text-4xl"
            >
              Vencimientos tributarios y obligaciones fiscales
            </h2>
          </div>

          <div className="flex flex-col gap-px bg-gray-200">
            {OBLIGACIONES.map((ob) => (
              <div
                key={ob.id}
                className="grid grid-cols-1 gap-px bg-gray-200 lg:grid-cols-12"
              >
                {/* Número + título */}
                <div className="lg:col-span-4 bg-white p-8 lg:p-10">
                  <span
                    className="font-title text-6xl font-bold text-brand-green/[0.07] leading-none select-none block mb-4"
                    aria-hidden="true"
                  >
                    {ob.numero}
                  </span>
                  <h3 className="font-heading text-sm font-bold text-brand-ink leading-snug mb-1">
                    {ob.titulo}
                  </h3>
                  <p className="font-body text-xs text-brand-gray-subtle">
                    {ob.subtitulo}
                  </p>
                </div>

                {/* Ítems */}
                <div className="lg:col-span-8 bg-brand-cream p-8 lg:p-10 flex flex-col justify-center gap-3">
                  {ob.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="mt-1.5 h-2.5 w-2.5 shrink-0 border border-brand-gold/50 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <div className="h-1 w-1 bg-brand-gold" />
                      </div>
                      <span className="font-body text-sm text-brand-gray-text leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                  {ob.nota && (
                    <p className="font-body text-xs text-brand-gray-subtle leading-relaxed mt-2 pl-6 border-t border-brand-green/10 pt-3">
                      {ob.nota}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fuentes Oficiales */}
      <section
        className="bg-white py-20 lg:py-24"
        aria-labelledby="fuentes-title"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-10 flex items-center gap-4">
            <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
            <h2
              id="fuentes-title"
              className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold"
            >
              Fuentes Oficiales Recomendadas
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-gray-100 sm:grid-cols-2 lg:grid-cols-3">
            {FUENTES.map(({ nombre, descripcion, url }) => (
              <a
                key={nombre}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-7 flex items-start gap-4 hover:bg-brand-cream transition-colors"
              >
                <div className="h-px w-5 bg-brand-gold shrink-0 mt-3 group-hover:w-8 transition-all" aria-hidden="true" />
                <div>
                  <p className="font-heading text-sm font-bold text-brand-ink mb-1">
                    {nombre}
                  </p>
                  <p className="font-body text-xs text-brand-gray-subtle leading-snug">
                    {descripcion}
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
