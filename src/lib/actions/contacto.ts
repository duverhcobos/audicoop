"use server";

import { Resend } from "resend";
import { contactoSchema } from "@/lib/validations/contacto";

export interface ContactoActionResult {
  success: boolean;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function enviarContacto(
  _prevState: ContactoActionResult,
  formData: FormData
): Promise<ContactoActionResult> {
  const raw = {
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    telefono: formData.get("telefono"),
    organizacion: formData.get("organizacion"),
    mensaje: formData.get("mensaje"),
  };

  const parsed = contactoSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Por favor revisa los campos del formulario.",
    };
  }

  const { nombre, email, telefono, organizacion, mensaje } = parsed.data;

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Formulario AUDICOOP <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL_TO ?? "duverhernandezcobos@gmail.com",
    replyTo: email,
    subject: `Nuevo mensaje de contacto — ${nombre}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1A4731; border-bottom: 2px solid #C8932A; padding-bottom: 8px;">
          Nuevo mensaje de contacto — AUDICOOP S.A.S.
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; color: #888; width: 160px; vertical-align: top;">Nombre</td>
            <td style="padding: 8px 0; color: #1C1C1E; font-weight: 600;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888; vertical-align: top;">Correo</td>
            <td style="padding: 8px 0; color: #1C1C1E;">${email}</td>
          </tr>
          ${telefono ? `
          <tr>
            <td style="padding: 8px 0; color: #888; vertical-align: top;">Teléfono</td>
            <td style="padding: 8px 0; color: #1C1C1E;">${telefono}</td>
          </tr>` : ""}
          ${organizacion ? `
          <tr>
            <td style="padding: 8px 0; color: #888; vertical-align: top;">Organización</td>
            <td style="padding: 8px 0; color: #1C1C1E;">${organizacion}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px 0; color: #888; vertical-align: top;">Mensaje</td>
            <td style="padding: 8px 0; color: #1C1C1E; white-space: pre-wrap;">${mensaje}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; font-size: 12px; color: #aaa;">
          Enviado desde el formulario de contacto de audicoop.com
        </p>
      </div>
    `,
  });

  if (error) {
    return {
      success: false,
      message: `No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos directamente a ${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "audicoop@gmail.com"}.`,
    };
  }

  return {
    success: true,
    message:
      "Tu mensaje fue recibido. Nos pondremos en contacto contigo a la brevedad.",
  };
}
