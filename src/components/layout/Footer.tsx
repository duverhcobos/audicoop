import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { NAV_LINKS } from "@/lib/data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-green-dark text-white" aria-label="Pie de página">
      {/* Línea dorada superior */}
      <div className="h-px w-full bg-brand-gold/30" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

          {/* Columna 1 — Marca */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-baseline gap-2" aria-label="AUDICOOP S.A.S. — Inicio">
              <span className="font-title text-2xl font-bold tracking-tight text-white">AUDICOOP</span>
              <span className="font-heading text-[10px] font-semibold text-white/40 tracking-[0.25em] uppercase border-l border-brand-gold/30 pl-2">
                S.A.S.
              </span>
            </Link>
            <p className="font-body text-sm text-white/50 leading-relaxed max-w-xs italic">
              "Control y transparencia al servicio del cooperativismo"
            </p>
            <div className="flex items-center gap-3 mt-1">
              <div className="h-px w-6 bg-brand-gold/50" aria-hidden="true" />
              <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gold/70">
                Bucaramanga, Santander · Colombia
              </span>
            </div>
            {/* [PENDIENTE: redes sociales] */}
          </div>

          {/* Columna 2 — Navegación */}
          <div className="md:col-span-3">
            <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold mb-5">
              Navegación
            </h3>
            <nav className="flex flex-col gap-2.5" aria-label="Links del footer">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-white/55 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna 3 — Contacto */}
          <div className="md:col-span-4">
            <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold mb-5">
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-brand-gold/70" aria-hidden="true" />
                <span className="font-body text-sm text-white/55 leading-snug">
                  Centro Comercial Cacique,<br />
                  Bucaramanga, Santander
                  {/* [PENDIENTE: dirección exacta] */}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="shrink-0 text-brand-gold/70" aria-hidden="true" />
                <span className="font-body text-sm text-white/40">
                  {/* [PENDIENTE: teléfono] */}
                  3223606714      
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="shrink-0 text-brand-gold/70" aria-hidden="true" />
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "audicoop@gmail.com"}`}
                  className="font-body text-sm text-white/55 hover:text-white transition-colors duration-200"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "audicoop@gmail.com"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-white/30">
            © {year} AUDICOOP S.A.S. — Todos los derechos reservados
          </p>
          <div className="flex gap-5">
            <Link href="#" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors duration-200">
              Política de privacidad
            </Link>
            <Link href="#" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors duration-200">
              Tratamiento de datos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


