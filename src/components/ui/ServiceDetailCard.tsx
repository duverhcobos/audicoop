"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ServiceAccordionProps {
  id: string;
  header: React.ReactNode;
  children: React.ReactNode;
}

export function ServiceAccordion({ id, header, children }: ServiceAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={`relative border-b border-gray-100 transition-colors duration-300 ${
        open ? "bg-brand-cream" : "bg-white hover:bg-brand-gray-bg/40"
      }`}
    >
      {/* Cabecera — siempre visible */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={`detail-${id}`}
        className="w-full flex items-center gap-5 px-6 py-6 lg:px-8 lg:py-7 text-left"
      >
        {/* Línea de acento izquierda */}
        <div
          className={`absolute left-0 top-0 h-full w-1 transition-all duration-300 ${
            open ? "bg-brand-gold" : "bg-transparent"
          }`}
          aria-hidden="true"
        />

        <div className="flex-1 min-w-0 flex items-center gap-5">
          {header}
        </div>

        <ChevronDown
          size={18}
          className={`shrink-0 text-brand-gray-subtle transition-transform duration-300 ${
            open ? "rotate-180 text-brand-gold" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Contenido expandible */}
      {open && (
        <div
          id={`detail-${id}`}
          className="border-t border-gray-100 px-6 pb-8 pt-6 lg:px-8"
        >
          {children}
        </div>
      )}
    </article>
  );
}
