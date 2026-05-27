import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ContactoForm from "@/components/ui/ContactoForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | AUDICOOP S.A.S.",
  description:
    "Comunícate con AUDICOOP S.A.S. Estamos en el Centro Comercial Cacique, Bucaramanga, Santander.",
};

// Intención: Gerente de cooperativa o representante que quiere iniciar contacto formal
// Página: Contacto — información de contacto + formulario
// Fondo: bg-brand-cream (exterior) / bg-white (formulario) / bg-brand-green (info)
// Jerarquía: datos de contacto directos → formulario

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "audicoop@gmail.com";

const DATOS_CONTACTO = [
  {
    icono: Mail,
    label: "Correo electrónico",
    valor: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    icono: Phone,
    label: "Teléfono",
    valor: "[PENDIENTE]",
    href: undefined,
  },
  {
    icono: MapPin,
    label: "Dirección",
    valor: "Centro Comercial Cacique\nBucaramanga, Santander\nColombia",
    href: undefined,
  },
];

export default function ContactoPage() {
  return (
    <main>
      <PageHero
        title="Contacto"
        subtitle="Cuéntanos sobre tu organización. Evaluamos cada caso y respondemos a la brevedad."
      />

      <section className="bg-brand-cream py-20 lg:py-32" aria-labelledby="contacto-title">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px bg-gray-200 lg:grid-cols-12">

            {/* Panel izquierdo — datos de contacto */}
            <div className="lg:col-span-4 bg-brand-green p-10 lg:p-14 flex flex-col gap-10">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
                  <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                    Datos de contacto
                  </span>
                </div>
                <h2
                  id="contacto-title"
                  className="font-display text-2xl font-bold text-white leading-snug"
                >
                  Estamos en Bucaramanga, Santander.
                </h2>
              </div>

              <ul className="flex flex-col gap-0">
                {DATOS_CONTACTO.map(({ icono: Icono, label, valor, href }, i) => (
                  <li
                    key={label}
                    className={`flex items-start gap-4 py-6 ${
                      i < DATOS_CONTACTO.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <Icono size={18} className="text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-body text-sm text-white/80 leading-relaxed hover:text-white transition-colors whitespace-pre-line"
                        >
                          {valor}
                        </a>
                      ) : (
                        <p className="font-body text-sm text-white/80 leading-relaxed whitespace-pre-line">
                          {valor}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Panel derecho — formulario */}
            <div className="lg:col-span-8 bg-white p-10 lg:p-14">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-brand-gold shrink-0" aria-hidden="true" />
                <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                  Envíanos un mensaje
                </span>
              </div>
              <ContactoForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
