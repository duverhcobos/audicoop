"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data/navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Barra de identidad superior */}
      <div className="w-full bg-brand-green-dark py-1.5 hidden lg:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Firma especializada · Sector Cooperativo Colombiano
          </p>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "audicoop@gmail.com"}`}
            className="font-heading text-[10px] font-semibold tracking-wide text-brand-gold/70 hover:text-brand-gold transition-colors duration-200"
          >
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "audicoop@gmail.com"}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "border-b border-gray-100/80"
        }`}
      >
        {/* Línea de acento dorado */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-brand-gold/20" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" aria-label="AUDICOOP S.A.S. — Inicio">
              {/* Símbolo AC — recorte del ícono superior del logo */}
              <div className="h-10 w-10 overflow-hidden shrink-0 relative">
                <Image
                  src="/logo.jpeg"
                  alt=""
                  aria-hidden="true"
                  width={200}
                  height={200}
                  className="absolute top-0 left-0 w-full object-cover object-top"
                  style={{ height: "220%" }}
                  priority
                />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-xl font-bold text-brand-green tracking-tight">
                  AUDICOOP
                </span>
                <span className="font-heading text-[10px] font-semibold text-brand-gray-subtle tracking-[0.25em] uppercase border-l border-brand-gold/40 pl-2">
                  S.A.S.
                </span>
              </div>
            </Link>

            {/* Navegación escritorio */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-heading text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-brand-green"
                      : "text-brand-gray-text hover:text-brand-green"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-[29px] left-0 right-0 h-0.5 bg-brand-gold" aria-hidden="true" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA escritorio */}
            <div className="hidden lg:block">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-brand-green px-6 py-2.5 font-heading text-[13px] font-bold text-white tracking-wide transition-all duration-200 hover:bg-brand-green-medium"
              >
                Agendar Consultoría
              </Link>
            </div>

            {/* Botón hamburger móvil */}
            <button
              type="button"
              className="lg:hidden p-2 text-brand-gray-text hover:text-brand-green transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 shadow-lg">
            <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 font-heading text-sm font-semibold transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-brand-green border-l-2 border-brand-gold pl-3"
                      : "text-brand-gray-text hover:text-brand-green hover:border-l-2 hover:border-brand-gold/40 hover:pl-3"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="mt-3 flex justify-center bg-brand-green px-5 py-3 font-heading text-sm font-bold text-white tracking-wide hover:bg-brand-green-medium"
              >
                Agendar Consultoría
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
