// Intención: Cliente o candidato evaluando capacidades tecnológicas de la firma
// Sección: AplicativosIA — app propia + uso de IA en auditoría
// Fuente: Anexar a la página.docx — texto literal del documento
// Fondo: bg-white (aplicativos) / bg-brand-green-dark (IA)

export default function AplicativosIA() {
  return (
    <>
      {/* Aplicativos */}
      <section
        className="bg-white py-20 lg:py-32"
        aria-labelledby="aplicativos-title"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px bg-gray-100 lg:grid-cols-12">

            {/* Etiqueta lateral */}
            <div className="lg:col-span-3 bg-white p-10 lg:p-14 flex flex-col justify-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
                <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                  Aplicativos
                </span>
              </div>
              <h2
                id="aplicativos-title"
                className="font-title text-2xl font-bold text-brand-ink leading-tight lg:text-3xl"
              >
                Tecnología propia al servicio del análisis
              </h2>
            </div>

            {/* Contenido */}
            <div className="lg:col-span-9 bg-brand-cream p-10 lg:p-14 flex flex-col gap-10">

              {/* App Lovable + Gemini */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-5 bg-brand-gold shrink-0" aria-hidden="true" />
                  <h3 className="font-heading text-sm font-bold text-brand-ink uppercase tracking-[0.15em]">
                    Aplicativo de análisis documental
                  </h3>
                </div>
                <p className="font-body text-sm text-brand-gray-text leading-relaxed">
                  Nuestro aplicativo, desarrollado por nuestro equipo y construido en la plataforma
                  Lovable, es una herramienta de análisis documental impulsada por Gemini que permite
                  cargar archivos PDF, DOCX y XLSX para procesarlos de forma automática. A partir de
                  la información suministrada, genera un Resumen Ejecutivo, Hallazgos Detallados,
                  Análisis Estadístico, Visualización de Datos y una Lectura Completa del Documento.
                  Además, produce informes profesionales descargables con indicadores clave, gráficos,
                  conclusiones, recomendaciones y planes de acción, facilitando la toma de decisiones
                  y optimizando los procesos de auditoría y análisis empresarial.
                </p>
              </div>

              {/* Separador */}
              <div className="h-px w-full bg-brand-green/10" aria-hidden="true" />

              {/* Claude AI */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-5 bg-brand-gold shrink-0" aria-hidden="true" />
                  <h3 className="font-heading text-sm font-bold text-brand-ink uppercase tracking-[0.15em]">
                    Generación de informes con IA
                  </h3>
                </div>
                <p className="font-body text-sm text-brand-gray-text leading-relaxed">
                  Para la generación de informes profesionales utilizamos la tecnología de IA de Claude,
                  la cual permite estructurar la información de manera clara, precisa y ejecutiva.
                  Gracias a sus capacidades avanzadas de análisis y redacción, los reportes incluyen
                  conclusiones, recomendaciones, planes de acción e insights estratégicos presentados
                  en un formato profesional, facilitando la comprensión de los resultados y apoyando
                  la toma de decisiones empresariales.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* IA en la Auditoría */}
      <section
        className="bg-brand-green-dark py-20 lg:py-28"
        aria-labelledby="ia-title"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

            {/* Título */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
                <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                  Innovación
                </span>
              </div>
              <h2
                id="ia-title"
                className="font-title text-3xl font-bold text-white leading-tight lg:text-4xl"
              >
                La IA en la auditoría
              </h2>
            </div>

            {/* Texto */}
            <div className="lg:col-span-8">
              <p className="font-body text-base text-white/75 leading-relaxed">
                En AUDICOOP incorporamos herramientas de Inteligencia Artificial para fortalecer los
                procesos de auditoría y análisis de información. Estas tecnologías permiten procesar
                grandes volúmenes de datos de manera rápida y precisa, identificar patrones, detectar
                posibles inconsistencias y generar reportes que facilitan la toma de decisiones.
                La IA actúa como una herramienta de apoyo para el auditor, optimizando el análisis
                y mejorando la eficiencia, sin reemplazar el criterio profesional ni el juicio experto
                que caracteriza nuestro servicio.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
