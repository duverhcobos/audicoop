"use client";

// Intención: Gerente de cooperativa o representante que quiere iniciar contacto formal con AUDICOOP
// Componente: ContactoForm — formulario validado con react-hook-form + zod
// Fondo: bg-white
// Jerarquía: campos principales → submit → feedback de estado

import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enviarContacto } from "@/lib/actions/contacto";
import type { ContactoActionResult } from "@/lib/actions/contacto";
import { contactoSchema, type ContactoFormData } from "@/lib/validations/contacto";

const initialState: ContactoActionResult = { success: false, message: "" };

export default function ContactoForm() {
  const [state, formAction, isPending] = useActionState(enviarContacto, initialState);

  const {
    register,
    formState: { errors },
  } = useForm<ContactoFormData>({
    resolver: zodResolver(contactoSchema),
  });

  return (
    <form action={formAction} noValidate>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

        {/* Nombre */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="nombre"
            className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gray-subtle"
          >
            Nombre completo <span className="text-brand-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="nombre"
            type="text"
            autoComplete="name"
            {...register("nombre")}
            className="border border-gray-200 bg-white px-4 py-3 font-body text-sm text-brand-ink placeholder:text-brand-gray-subtle/50 focus:border-brand-green focus:outline-none"
            placeholder="Tu nombre"
            aria-required="true"
            aria-describedby={errors.nombre ? "nombre-error" : undefined}
          />
          {errors.nombre && (
            <p id="nombre-error" className="font-body text-xs text-red-600" role="alert">
              {errors.nombre.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gray-subtle"
          >
            Correo electrónico <span className="text-brand-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className="border border-gray-200 bg-white px-4 py-3 font-body text-sm text-brand-ink placeholder:text-brand-gray-subtle/50 focus:border-brand-green focus:outline-none"
            placeholder="correo@organización.com"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="font-body text-xs text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Teléfono */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="telefono"
            className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gray-subtle"
          >
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            autoComplete="tel"
            {...register("telefono")}
            className="border border-gray-200 bg-white px-4 py-3 font-body text-sm text-brand-ink placeholder:text-brand-gray-subtle/50 focus:border-brand-green focus:outline-none"
            placeholder="Número de contacto"
            aria-describedby={errors.telefono ? "telefono-error" : undefined}
          />
          {errors.telefono && (
            <p id="telefono-error" className="font-body text-xs text-red-600" role="alert">
              {errors.telefono.message}
            </p>
          )}
        </div>

        {/* Organización */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="organizacion"
            className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gray-subtle"
          >
            Organización
          </label>
          <input
            id="organizacion"
            type="text"
            autoComplete="organization"
            {...register("organizacion")}
            className="border border-gray-200 bg-white px-4 py-3 font-body text-sm text-brand-ink placeholder:text-brand-gray-subtle/50 focus:border-brand-green focus:outline-none"
            placeholder="Nombre de tu cooperativa o entidad"
            aria-describedby={errors.organizacion ? "organizacion-error" : undefined}
          />
          {errors.organizacion && (
            <p id="organizacion-error" className="font-body text-xs text-red-600" role="alert">
              {errors.organizacion.message}
            </p>
          )}
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label
            htmlFor="mensaje"
            className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gray-subtle"
          >
            Mensaje <span className="text-brand-gold" aria-hidden="true">*</span>
          </label>
          <textarea
            id="mensaje"
            rows={5}
            {...register("mensaje")}
            className="border border-gray-200 bg-white px-4 py-3 font-body text-sm text-brand-ink placeholder:text-brand-gray-subtle/50 focus:border-brand-green focus:outline-none resize-none"
            placeholder="Cuéntanos sobre tu organización y el servicio que necesitas"
            aria-required="true"
            aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
          />
          {errors.mensaje && (
            <p id="mensaje-error" className="font-body text-xs text-red-600" role="alert">
              {errors.mensaje.message}
            </p>
          )}
        </div>

      </div>

      {/* Feedback del servidor */}
      {state.message && (
        <div
          className={`mt-6 border px-5 py-4 font-body text-sm leading-relaxed ${
            state.success
              ? "border-brand-green/30 bg-brand-green/5 text-brand-green"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
          role="alert"
          aria-live="polite"
        >
          {state.message}
        </div>
      )}

      {/* Submit */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isPending}
          className="bg-brand-gold px-10 py-4 font-heading text-[13px] font-bold text-white tracking-wide hover:bg-brand-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Enviando…" : "Enviar mensaje"}
        </button>
      </div>

    </form>
  );
}
