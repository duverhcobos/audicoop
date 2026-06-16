// Intención: Contador o directivo cooperativo evaluando credibilidad de la firma
// Sección: NosotrosIdentidad — origen del nombre, identidad de color, visión de crecimiento
// Fondo: bg-white (izq) / bg-brand-cream (der)
// Jerarquía: declaración AUDI+COOP lidera → párrafos Word → identidad cromática → visión

const IDENTIDAD_CROMATICA = [
  {
    color: "bg-brand-green",
    nombre: "Verde",
    significado: "Transparencia, estabilidad y cooperativismo",
  },
  {
    color: "bg-brand-gold",
    nombre: "Dorado",
    significado: "Excelencia y calidad en cada encargo",
  },
];

const VISION_ITEMS = [
  "Consolidarse como firma líder en la región en los próximos cinco años",
  "Crecimiento del talento humano y mejora continua",
  "Desarrollo profesional de cada colaborador",
  "Cultura basada en ética, capacitación constante y compromiso con la excelencia",
];

export default function NosotrosIdentidad() {
  return (
    <section
      className="bg-white py-20 lg:py-32"
      aria-labelledby="identidad-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-px bg-gray-100 lg:grid-cols-12">

          {/* Panel izquierdo — declaración fundacional */}
          <div className="lg:col-span-7 bg-white p-10 lg:p-16">

            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                Nuestra identidad
              </span>
            </div>

            <h2
              id="identidad-title"
              className="font-title text-3xl font-bold text-brand-ink leading-tight mb-8 lg:text-4xl"
            >
              <span className="text-brand-green">AUDI</span>
              {" "}+{" "}
              <span className="text-brand-green">COOP</span>
              {" "}
              <span className="text-brand-gold">—</span>
              {" "}No es coincidencia.
            </h2>

            <p className="font-body text-base text-brand-gray-text leading-relaxed mb-5">
              Somos una firma de auditoría especializada en el sector de la economía
              solidaria, constituida como Sociedad por Acciones Simplificada con
              domicilio en{" "}
              <strong className="text-brand-ink font-semibold">Bucaramanga, Santander</strong>.
            </p>
            <p className="font-body text-base text-brand-gray-text leading-relaxed mb-5">
              Nuestro nombre lo dice todo:{" "}
              <strong className="text-brand-green font-semibold">AUDI</strong> representa
              el corazón de lo que hacemos — auditoría, control y aseguramiento — y{" "}
              <strong className="text-brand-green font-semibold">COOP</strong> refleja
              nuestra dedicación al sector cooperativo, al que servimos con principios
              de solidaridad, equidad y transparencia.
            </p>
            <p className="font-body text-base text-brand-gray-text leading-relaxed">
              Ofrecemos servicios de auditoría externa, auditoría de cumplimiento,
              revisoría fiscal, consultoría y asesoría especializada a cooperativas,
              precooperativas, asociaciones mutuales y fondos de empleados.
            </p>

           
          </div>

          {/* Panel derecho — visión */}
          <div className="lg:col-span-5 bg-brand-cream p-10 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
                <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                  Nuestra visión
                </span>
              </div>

              <p className="font-title text-xl font-bold text-brand-ink leading-snug mb-10">
                Un equipo joven, con visión de crecimiento, que busca consolidarse
                como firma líder en la región.
              </p>

              <ul className="flex flex-col gap-0">
                {VISION_ITEMS.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-4 py-5 ${
                      i < VISION_ITEMS.length - 1 ? "border-b border-brand-green/10" : ""
                    }`}
                  >
                    <div
                      className="mt-1.5 h-3 w-3 shrink-0 border border-brand-gold/60 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="h-1 w-1 bg-brand-gold" />
                    </div>
                    <span className="font-body text-sm text-brand-gray-text leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sede */}
            <div className="mt-12 pt-8 border-t border-brand-green/10">
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gray-subtle mb-2">
                Sede principal
              </p>
              <p className="font-body text-sm text-brand-gray-text leading-snug">
                Centro Comercial Cacique<br />
                Bucaramanga, Santander<br />
                Colombia
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
