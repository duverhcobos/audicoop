// Intención: Profesional buscando la noticia relevante para su área de trabajo
// Sección: NoticiasGrid — grid editorial de artículos con expandir inline
// Fondo: bg-brand-cream exterior / bg-white tarjetas
// Jerarquía: número fantasma + categoría → título → resumen → lista de puntos del cuerpo

import { NOTICIAS, CATEGORIAS_COLOR } from "@/lib/data/noticias";

export default function NoticiasGrid() {
  return (
    <section
      className="bg-brand-cream py-20 lg:py-32"
      aria-labelledby="noticias-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                Actualizaciones 2026
              </span>
            </div>
            <h2
              id="noticias-title"
              className="font-title text-3xl font-bold text-brand-ink leading-tight lg:text-4xl"
            >
              Lo que necesita saber su organización
            </h2>
          </div>
          <p className="font-body text-sm text-brand-gray-subtle leading-relaxed max-w-xs lg:text-right">
            Información extraída de fuentes oficiales colombianas.
          </p>
        </div>

        {/* Artículos */}
        <div className="flex flex-col gap-px bg-gray-200">
          {NOTICIAS.map((noticia, index) => (
            <article
              key={noticia.id}
              className="grid grid-cols-1 gap-px bg-gray-200 lg:grid-cols-12"
              aria-labelledby={`noticia-${noticia.id}`}
            >
              {/* Columna izquierda — número + categoría */}
              <div className="lg:col-span-3 bg-white p-8 lg:p-10 flex flex-col justify-between">
                <span
                  className="font-title text-7xl font-bold text-brand-green/[0.06] leading-none select-none"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`self-start mt-4 font-heading text-[10px] font-bold uppercase tracking-[0.15em] border px-3 py-1 ${
                    CATEGORIAS_COLOR[noticia.categoria] ??
                    "text-brand-gray-subtle bg-gray-50 border-gray-200"
                  }`}
                >
                  {noticia.categoria}
                </span>
              </div>

              {/* Columna derecha — contenido */}
              <div className="lg:col-span-9 bg-white p-8 lg:p-10">
                <h3
                  id={`noticia-${noticia.id}`}
                  className="font-title text-xl font-bold text-brand-ink leading-snug mb-4"
                >
                  {noticia.titulo}
                </h3>

                <p className="font-body text-sm text-brand-gray-subtle leading-relaxed mb-6 border-b border-gray-100 pb-6">
                  {noticia.resumen}
                </p>

                {/* Párrafos del cuerpo */}
                <div className="flex flex-col gap-4">
                  {noticia.cuerpo.map((parrafo, i) => (
                    <p
                      key={i}
                      className="font-body text-sm text-brand-gray-text leading-relaxed"
                    >
                      {parrafo}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Nota de fuentes */}
        <div className="mt-10 border border-brand-gold/20 bg-brand-gold/[0.03] px-6 py-5">
          <div className="flex items-start gap-4">
            <div className="h-px w-5 bg-brand-gold shrink-0 mt-2" aria-hidden="true" />
            <p className="font-body text-xs text-brand-gray-subtle leading-relaxed">
              Información de referencia basada en fuentes oficiales colombianas: DIAN, Superintendencia
              de la Economía Solidaria, Junta Central de Contadores, CTCP y Presidencia de Colombia.
              Consulte siempre las fuentes primarias o asesórese con un profesional antes de tomar
              decisiones basadas en esta información.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
