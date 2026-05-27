import { z } from "zod";

export const contactoSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede superar 100 caracteres"),
  email: z
    .string()
    .email("Ingresa un correo electrónico válido"),
  telefono: z
    .string()
    .regex(/^[0-9\s\+\-\(\)]{7,20}$/, "Ingresa un número de teléfono válido")
    .optional()
    .or(z.literal("")),
  organizacion: z
    .string()
    .max(150, "El nombre de la organización no puede superar 150 caracteres")
    .optional()
    .or(z.literal("")),
  mensaje: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede superar 1000 caracteres"),
});

export type ContactoFormData = z.infer<typeof contactoSchema>;
