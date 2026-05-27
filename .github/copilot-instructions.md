# Copilot Instructions — AUDICOOP S.A.S.

Sitio web corporativo construido con Next.js 15, TypeScript y Tailwind CSS para una firma de auditoría especializada en el sector cooperativo colombiano.

---

## Stack y Versiones

- **Framework**: Next.js 15 con App Router (nunca usar Pages Router)
- **Lenguaje**: TypeScript estricto — nunca usar `any`, preferir tipos explícitos
- **Estilos**: Tailwind CSS — nunca usar CSS en línea ni archivos `.css` separados salvo `globals.css`
- **Íconos**: Lucide React exclusivamente
- **Formularios**: react-hook-form + zod para validación
- **Fuentes**: Google Fonts (Playfair Display, Montserrat, Inter) via `next/font/google`
- **Imágenes**: Siempre usar el componente `<Image>` de `next/image`, nunca `<img>`
- **Links**: Siempre usar el componente `<Link>` de `next/link`, nunca `<a>` para rutas internas

---

## Estructura de Archivos

```
src/
├── app/                  ← Rutas y páginas (App Router)
├── components/
│   ├── layout/           ← Header, Footer, PageHero
│   ├── ui/               ← Componentes reutilizables pequeños (Button, Card, etc.)
│   └── sections/         ← Secciones completas de páginas
└── lib/                  ← Utilidades, constantes, tipos compartidos
```

- Los componentes van en `src/components/`, **nunca** directamente en `src/app/`
- Cada componente en su propio archivo con el mismo nombre (PascalCase)
- Las constantes de contenido (textos, datos) van en `src/lib/data/` como arrays/objetos exportados

---

## Convenciones de Código

### Componentes
- Siempre **Server Components** por defecto
- Agregar `"use client"` solo cuando se necesite estado, efectos o eventos del navegador
- Exportar componentes como `export default function NombreComponente()`
- Props tipadas con `interface` nombrada como `NombreComponenteProps`

```tsx
// ✅ Correcto
interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (...)
}

// ❌ Incorrecto
export default function ServiceCard(props: any) { ... }
```

### TypeScript
- No usar `any` bajo ninguna circunstancia
- Preferir `interface` sobre `type` para props de componentes
- Usar `type` para uniones, aliases y tipos utilitarios

### Nombrado
- **Componentes y archivos de componentes**: PascalCase → `ServiceCard.tsx`
- **Funciones utilitarias y archivos lib**: camelCase → `formatDate.ts`
- **Rutas/carpetas en app/**: kebab-case → `trabaja-con-nosotros/`
- **Variables y funciones**: camelCase → `const serviceList`
- **Constantes globales**: SCREAMING_SNAKE_CASE → `const MAX_ITEMS = 6`

---

## Paleta de Colores (Tailwind)

Usar siempre las clases de color personalizadas definidas en `tailwind.config.ts`:

| Token                  | Valor     | Uso                                  |
|------------------------|-----------|--------------------------------------|
| `brand-green`          | `#1A4731` | Fondos principales, encabezados      |
| `brand-green-medium`   | `#2D6A4F` | Hover, acentos secundarios           |
| `brand-gold`           | `#C8932A` | CTAs, detalles de acento             |
| `brand-gold-light`     | `#E6B655` | Hover sobre dorado                   |
| `brand-gray-text`      | `#444444` | Texto de cuerpo                      |
| `brand-gray-subtle`    | `#888888` | Subtítulos, metadatos                |

```tsx
// ✅ Correcto
<button className="bg-brand-green text-white hover:bg-brand-green-medium">
// ❌ Incorrecto
<button className="bg-[#1A4731] text-white">
```

---

## Tipografía

```tsx
// ✅ Correcto — usar las clases de fuente configuradas
<h1 className="font-display">    // Playfair Display
<h2 className="font-heading">    // Montserrat
<p className="font-body">        // Inter (por defecto)
```

---

## Accesibilidad

- Todo `<Image>` debe tener un `alt` descriptivo
- Todo ícono decorativo debe tener `aria-hidden="true"`
- Todo ícono funcional debe tener `aria-label`
- Usar elementos semánticos: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- Cada `<section>` debe tener un `aria-labelledby` o `aria-label`

---

## SEO

Cada `page.tsx` debe exportar su propio objeto `metadata`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nombre Página | AUDICOOP S.A.S.",
  description: "Descripción específica de la página.",
};
```

---

## Formularios

- Validar siempre con **zod** antes de procesar
- Mostrar errores inline bajo cada campo
- El botón de envío debe deshabilitarse mientras se procesa (`isSubmitting`)
- Nunca exponer datos sensibles en el cliente

---

## Principios SOLID

Aplicar los cinco principios en cada componente, hook y función del proyecto:

### S — Single Responsibility (Responsabilidad Única)
Cada componente, función o módulo hace **una sola cosa**. Si un componente maneja lógica de negocio Y renderizado, hay que separarlo.

```tsx
// ✅ Correcto — cada pieza tiene una responsabilidad
// useContactForm.ts → solo maneja la lógica del formulario
// ContactForm.tsx   → solo renderiza el formulario

// ❌ Incorrecto — el componente mezcla lógica y presentación
export default function ContactForm() {
  const [data, setData] = useState();
  async function sendEmail() { /* lógica de negocio aquí */ }
  return <form onSubmit={sendEmail}>...</form>
}
```

### O — Open/Closed (Abierto/Cerrado)
Los componentes deben estar **abiertos para extensión, cerrados para modificación**. Usar props y composición en lugar de modificar el componente base.

```tsx
// ✅ Correcto — Button se extiende via props, no se modifica
<Button variant="primary" size="lg" />
<Button variant="outline" size="sm" />

// ❌ Incorrecto — crear ButtonPrimary, ButtonOutline como componentes separados
```

### L — Liskov Substitution (Sustitución de Liskov)
Los componentes derivados o variantes deben poder usarse donde se use el componente base sin romper el comportamiento esperado. Las props extendidas no deben contradecir las del tipo base.

```tsx
// ✅ Correcto — LinkButton extiende Button sin romper su contrato
interface LinkButtonProps extends ButtonProps {
  href: string;
}
```

### I — Interface Segregation (Segregación de Interfaces)
No forzar a un componente a depender de props que no usa. Preferir interfaces pequeñas y específicas sobre una interfaz gigante.

```tsx
// ✅ Correcto — interfaces específicas por contexto
interface ServiceCardProps { title: string; description: string; icon: LucideIcon; }
interface ServiceListProps { services: ServiceCardProps[]; }

// ❌ Incorrecto — una interfaz con todo mezclado
interface ServiceProps { title?: string; items?: string[]; showIcon?: boolean; columns?: number; }
```

### D — Dependency Inversion (Inversión de Dependencias)
Los módulos de alto nivel no deben depender de implementaciones concretas. Usar abstracciones (interfaces, props como funciones) para desacoplar.

```tsx
// ✅ Correcto — ContactForm recibe onSubmit como prop (no conoce la implementación)
<ContactForm onSubmit={handleSendEmail} />

// ❌ Incorrecto — ContactForm importa y llama directamente a sendEmail()
```

---

## Arquitectura Recomendada para Next.js

### Capas de la aplicación

```
┌─────────────────────────────────────────────┐
│              CAPA DE PRESENTACIÓN           │
│  src/components/ui/        → Átomos (Button, Badge, Input)
│  src/components/sections/  → Organismos (HeroSection, ServicesSection)
│  src/components/layout/    → Plantillas (Header, Footer, PageHero)
├─────────────────────────────────────────────┤
│              CAPA DE PÁGINAS                │
│  src/app/**/page.tsx       → Ensamblado de secciones + metadata SEO
│  src/app/layout.tsx        → Layout raíz con Header y Footer
├─────────────────────────────────────────────┤
│              CAPA DE LÓGICA                 │
│  src/hooks/                → Custom hooks (useContactForm, useScrolled)
│  src/lib/actions/          → Server Actions (envío de formularios)
│  src/lib/validations/      → Esquemas Zod reutilizables
├─────────────────────────────────────────────┤
│              CAPA DE DATOS                  │
│  src/lib/data/             → Constantes de contenido (servicios, valores, etc.)
│  src/lib/types/            → Interfaces y tipos TypeScript globales
│  src/lib/utils/            → Funciones utilitarias puras
└─────────────────────────────────────────────┘
```

### Reglas por capa

**Componentes UI (`/ui`)**
- Sin lógica de negocio, sin llamadas a datos
- Solo reciben props y renderizan
- Completamente reutilizables fuera del contexto del proyecto

**Secciones (`/sections`)**
- Pueden recibir datos como props desde la página
- No hacen fetch directamente — los datos les llegan desde el `page.tsx`
- Cada sección corresponde a un bloque visual de una página

**Páginas (`/app`)**
- Son Server Components por defecto
- Responsables de obtener datos (si aplica) y pasarlos a las secciones
- Exportan `metadata` para SEO
- No contienen JSX complejo — delegan a secciones y componentes

**Hooks (`/hooks`)**
- Solo lógica reutilizable con estado o efectos del lado cliente
- Nombre siempre con prefijo `use`
- Un hook por responsabilidad

**Server Actions (`/lib/actions`)**
- Toda mutación de datos o envío de formularios se hace con Server Actions
- Validar siempre con zod antes de procesar
- Nunca retornar datos sensibles al cliente

**Datos y constantes (`/lib/data`)**
- Arrays y objetos con el contenido del sitio (textos de servicios, valores, etc.)
- Tipados con las interfaces de `/lib/types`
- Si el contenido crece, migrar a un CMS o archivo JSON

### Flujo de datos (unidireccional)

```
lib/data  →  app/page.tsx  →  sections/  →  ui/
  ↑                                           |
  └───────── lib/types (tipado compartido) ───┘
```

### Server vs Client Components

| Situación                              | Tipo de componente  |
|----------------------------------------|---------------------|
| Solo renderiza datos estáticos         | Server Component    |
| Fetch de datos en el servidor          | Server Component    |
| Usa `useState`, `useEffect`            | Client Component    |
| Maneja eventos del DOM (onClick, etc.) | Client Component    |
| Usa hooks de terceros                  | Client Component    |
| Animaciones con estado                 | Client Component    |

> Regla de oro: mantener los Client Components lo más abajo posible en el árbol de componentes para maximizar el renderizado en servidor.

---

## Fuentes de Contenido (REGLA CRÍTICA)

**Toda información textual del sitio — sin excepción — debe provenir exclusivamente de los documentos Word ubicados en la raíz del proyecto** (`d:\PROYECTOS DESARROLLO\Consultoria\`).

Actualmente existe:
- `TRABAJA CON NOSOTROS.docx` — fuente principal de contenido corporativo

Se irán agregando más documentos con el tiempo. Antes de escribir cualquier texto de contenido, **leer el documento Word correspondiente** con la herramienta de lectura de archivos.

### Qué está prohibido inventar

- Nombres de leyes, decretos o circulares normativas (ej: "Ley 454", "Circular Básica")
- Beneficios o ventajas de los servicios
- Audiencias objetivo más allá de lo explícito en el documento
- Valores, principios o cultura organizacional
- Datos de contacto (teléfono, dirección exacta, redes sociales)
- Descripción de procesos internos
- Cifras, estadísticas o años de experiencia

### Procedimiento obligatorio al escribir contenido

1. Identificar qué documento Word cubre ese tema
2. Leer el documento completo antes de escribir
3. Usar únicamente información presente de forma explícita
4. Si algo no está en ningún documento → usar `[PENDIENTE]` como placeholder, **nunca inventar**

> Si un documento nuevo aparece en la raíz del proyecto, debe leerse antes de usarlo como fuente.

---

## Reglas Generales

- **No inventar datos**: si un dato (teléfono, dirección, redes sociales) está marcado como *pendiente*, usar un placeholder visible como `[PENDIENTE]` en el código, nunca inventar un valor
- **Idioma del código**: inglés (nombres de variables, funciones, props)
- **Idioma del contenido**: español (textos, labels, mensajes al usuario)
- **Idioma de comentarios**: español
- No crear archivos de estilos adicionales — todo va en Tailwind
- No instalar librerías nuevas sin mencionarlo explícitamente
- Mantener los componentes pequeños y con una sola responsabilidad

---

## Diseño de Interfaz

### Intención antes que código

Antes de escribir cualquier componente visual, responder estas tres preguntas:

1. **¿Quién es este usuario?** No "usuarios" — la persona concreta. Un revisor fiscal revisando informes a las 8am es distinto a un gerente de cooperativa buscando un proveedor de auditoría. El contexto de la persona determina el tono, la densidad y la jerarquía.
2. **¿Qué debe lograr aquí?** El verbo concreto: contactar la firma, entender el alcance del servicio, validar la credibilidad. La respuesta define qué lidera visualmente.
3. **¿Cómo debe sentirse?** No "limpio y moderno" — eso no significa nada. AUDICOOP debe sentirse: **institucional como un despacho de abogados, preciso como un informe NIA, y sobrio como el sector cooperativo colombiano**. Nunca amigable, nunca colorido, nunca juguetón.

Si no se pueden responder con especificidad, no proceder.

### Lenguaje visual de AUDICOOP

Este sitio es la tarjeta de presentación de una firma de auditoría especializada. El diseño es una declaración de posicionamiento:

- **Sin bordes redondeados** en botones ni contenedores — nunca `rounded-*` en elementos interactivos o secciones principales. Los ángulos rectos comunican rigor y precisión.
- **Grillas editoriales** — preferir `grid gap-px bg-gray-100` (divisores de 1px) sobre tarjetas con bordes y sombras individuales. Las divisiones de 1px son invisibles hasta que se necesitan.
- **Numeración fantasma** — usar números de serie (01–06) en Playfair Display a muy baja opacidad (`text-brand-green/[0.06]`, `text-white/[0.04]`) como elemento estructural, no decorativo.
- **Línea dorada de auditoría** — el acento `bg-brand-gold` de `h-px` o `w-1` es la firma visual del sistema. Aparece en separadores de sección, indicadores de ítem activo, bordes izquierdos de elementos expandidos.
- **Texto fantasma de fondo** — palabras clave grandes ("AUDICOOP", "CONTROL") a 2–3% de opacidad como textura de profundidad, nunca como contenido legible.

### Tokens de color (uso obligatorio)

| Token                  | Uso                                                         |
|------------------------|-------------------------------------------------------------|
| `brand-green-dark`     | Fondos de Hero, footer, secciones CTA, PageHero            |
| `brand-green`          | Paneles secundarios, íconos, hover de tarjetas              |
| `brand-green-medium`   | Hover de elementos sobre `brand-green`                      |
| `brand-gold`           | Acentos: líneas, íconos activos, botones CTA primarios      |
| `brand-gold-light`     | Hover sobre elementos dorados                               |
| `brand-cream`          | Fondo de acordeones expandidos, secciones de lectura        |
| `brand-ink`            | Títulos grandes sobre fondo claro                           |
| `brand-gray-text`      | Cuerpo de texto                                             |
| `brand-gray-subtle`    | Metadatos, subtítulos, labels secundarios                   |

Nunca usar valores hexadecimales directos. Siempre usar los tokens.

### Tipografía (jerarquía obligatoria)

```tsx
// Títulos principales, display, cifras estadísticas
<h1 className="font-display">  // Playfair Display — autoridad editorial

// Encabezados de sección, labels de navegación, botones
<h2 className="font-heading">  // Montserrat — claridad estructural

// Cuerpo de texto, listas, descripciones
<p className="font-body">      // Inter — legibilidad funcional
```

- Los labels de sección usan siempre: `font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold`
- Combinar tamaño + peso + tracking para crear jerarquía — no solo tamaño
- En secciones sobre fondo oscuro (`brand-green-dark`, `brand-green`): títulos en `text-white`, subtítulos en `text-white/55`, labels en `text-brand-gold`

### Profundidad y capas

El proyecto usa **exclusivamente bordes** para definir estructura — sin sombras (`shadow-*`). Esta decisión es intencional: comunica precisión técnica y densidad de información sin efectos de profundidad visual.

- Separadores: `border border-white/10` sobre fondos oscuros, `border border-gray-100` sobre fondos claros
- Inputs y contenedores activos: borde que cambia de color (`border-brand-gold`) en lugar de sombra
- Paneles de credenciales/stats: `bg-white/[0.04] border border-white/10`

### Checkpoint antes de escribir UI

Antes de cada componente o sección nueva, declarar:

```
// Intención: [quién, qué debe lograr, cómo debe sentirse]
// Sección: [nombre] — [descripción de una línea]
// Fondo: [token de color del contenedor padre]
// Jerarquía visual: [qué elemento lidera, qué sigue, qué queda en segundo plano]
```

### Sameness = error

Si el resultado podría pertenecer a cualquier sitio web corporativo genérico, hay que rediseñar. Cada componente debe poder ser identificado como parte del sistema visual de AUDICOOP. La prueba: quitar el nombre de la firma — ¿se sigue percibiendo como una firma de auditoría para el sector cooperativo colombiano? Si no, seguir trabajando.
