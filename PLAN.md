# Plan de Desarrollo — AUDICOOP S.A.S.

> Sitio web corporativo para firma de auditoría especializada en el sector cooperativo y economía solidaria de Colombia.

---

## 1. Identidad de Marca

**Nombre:** AUDICOOP S.A.S.  
**Slogan:** *"Control y transparencia al servicio del cooperativismo"*  
**Descripción:** Firma de auditoría y revisoría fiscal especializada en cooperativas, precooperativas, asociaciones mutuales y fondos de empleados. Con domicilio en Bucaramanga, Santander.

---

## 2. Paleta de Colores

| Nombre         | Hex       | Uso                                              |
|----------------|-----------|--------------------------------------------------|
| Verde Oscuro   | `#1A4731` | Color principal — encabezados, botones, fondos   |
| Verde Medio    | `#2D6A4F` | Hover, acentos secundarios                       |
| Dorado         | `#C8932A` | Acento premium — CTA, detalles, íconos           |
| Dorado Suave   | `#E6B655` | Hover sobre dorado, bordes decorativos           |
| Blanco         | `#FFFFFF` | Fondos, texto sobre fondos oscuros               |
| Gris Claro     | `#F5F5F5` | Fondos de secciones alternas                     |
| Gris Texto     | `#444444` | Texto de cuerpo                                  |
| Gris Suave     | `#888888` | Subtítulos, metadatos                            |

---

## 3. Tipografía *(propuesta de diseño — pendiente de confirmar con el cliente)*

| Rol             | Fuente              | Peso       | Uso                                  |
|-----------------|---------------------|------------|---------------------------------|
| Display/Hero    | **Playfair Display**| 700 Bold   | Títulos principales en hero          |
| Headings (H2-H4)| **Montserrat**      | 600-700    | Títulos de secciones                 |
| Cuerpo          | **Inter**           | 400-500    | Párrafos, descripciones              |
| Botones/Badges  | **Montserrat**      | 600        | CTAs, etiquetas de servicios         |

> Propuesta basada en la estética del logo. Pendiente aprobación del cliente.

---

## 4. Header / Navegación

### Estructura *(pendiente de confirmar con el cliente)*
```
[Logo AUDICOOP S.A.S.]     Inicio | Nosotros | Servicios | Normatividad | Contacto     [CTA → pendiente]
```

### Comportamiento
- **Sticky** (fijo al hacer scroll)
- Fondo blanco con sombra suave al hacer scroll
- Logo a la izquierda (imagen SVG/PNG del logo)
- Menú centrado con links de navegación
- Botón CTA a la derecha *(texto y color pendiente de confirmar)*
- En móvil: hamburger menu con drawer lateral

### Componente: `src/components/layout/Header.tsx`

---

## 5. Footer

### Contenido
- Logo + slogan
- Links rápidos (mismas páginas del header)
- Información de contacto (dirección, teléfono, email) *(datos completos pendiente de confirmar)*
- Redes sociales: *(pendiente de confirmar cuáles maneja la firma)*
- Texto legal: `Política de privacidad | Tratamiento de datos`
- Copyright: `© 2026 AUDICOOP S.A.S. — Todos los derechos reservados`

### Componente: `src/components/layout/Footer.tsx`

---

## 6. Páginas

### 6.1 `Inicio` — `/`
Página principal con todas las secciones clave:

| Sección              | Descripción                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **Hero**             | Imagen de fondo profesional, titular grande, subtítulo y botón CTA verde    |
| **Nuestros Servicios** | Grid de 6 cards con ícono, título y descripción breve                     |
| **Sobre la Firma**   | Foto del equipo + texto Quiénes somos + Misión                             |
| **Valores** | 4 valores clave (Integridad, Transparencia, Objetividad, Independencia) con íconos |
| **CTA Final**        | Banda de color verde con frase motivacional y botón para agendar           |
| **Contacto rápido**  | Formulario + datos de contacto                                              |

---

### 6.2 `Nosotros` — `/nosotros`

| Sección               | Descripción                                                             |
|-----------------------|-------------------------------------------------------------------------|
| **Hero interior**     | Banner con título "Sobre la Firma" sobre fondo verde                    |
| **Quiénes Somos**     | Historia, misión, visión de AUDICOOP                                    |
| **Estructura Organizacional** | Organigrama visual: Asamblea → Junta → Gerente → Departamentos |
| **Nuestro Equipo**    | Cards del equipo con foto, nombre y cargo                               |
| **Cultura y Valores** | 6 principios éticos con íconos (Objetividad, Independencia, etc.)       |

---

### 6.3 `Servicios` — `/servicios`

| Sección              | Descripción                                                                  |
|----------------------|------------------------------------------------------------------------------|
| **Hero interior**    | Banner "Nuestros Servicios"                                                  |
| **Grid de servicios** | 6 tarjetas expandibles con descripción detallada de cada servicio           |
| **Detalle de cada servicio** | Subpágina o modal con: descripción, normativa aplicable, a quién va dirigido |
| **CTA**              | "¿Necesitas este servicio? Agenda una consultoría"                          |

**Servicios a mostrar:**
1. Auditoría Externa
2. Revisoría Fiscal
3. Auditoría de Cumplimiento
4. SARLAFT (Prevención lavado de activos)
5. Asesorías Tributarias
6. Consultoría Estratégica

---

### 6.4 `Normatividad` — `/normatividad`

| Sección              | Descripción                                                                  |
|----------------------|------------------------------------------------------------------------------|
| **Hero interior**    | Banner "Normatividad NAI / NIA"                                              |
| **¿Qué son las NIA?** | Explicación de Normas Internacionales de Auditoría                          |
| **¿Qué son las NAI?** | Explicación de Normas de Aseguramiento de la Información                   |
| **Marco normativo**  | Lista/acordeón con: Ley 1314/2009, DUR 2420/2015, Ley 79/1988, Código de Comercio |
| **Recursos**         | Links a documentos o normativas oficiales (SuperSolidaria, etc.)            |

---

### 6.5 `Contacto` — `/contacto`

| Sección              | Descripción                                                                  |
|----------------------|------------------------------------------------------------------------------|
| **Hero interior**    | Banner "Contáctanos"                                                         |
| **Formulario**       | Nombre, Email, Tipo de Servicio (select), Mensaje, botón Enviar             |
| **Datos de contacto** | Dirección, teléfono, email con íconos                                       |
| **Mapa**             | Embed de Google Maps — Centro Comercial Cacique, Bucaramanga *(confirmar ubicación exacta)* |
| **Redes sociales**   | *(pendiente de confirmar cuáles maneja la firma)*                            |

**Datos de contacto:**
- Centro Comercial Cacique, Bucaramanga, Santander *(dirección exacta pendiente de confirmar)*
- Tel: *(pendiente de confirmar)*
- Email: audicoop@gmail.com

---

### 6.6 `Trabaja con Nosotros` — `/trabaja-con-nosotros`

| Sección              | Descripción                                                                  |
|----------------------|------------------------------------------------------------------------------|
| **Hero interior**    | Banner "Únete a AUDICOOP"                                                    |
| **Por qué trabajar aquí** | Cultura, valores, beneficios de ser parte del equipo                    |
| **Áreas de trabajo** | Auditoría, Revisoría Fiscal, Consultoría, Financiero, Talento Humano        |
| **Proceso de selección** | Pasos: Postulación → Evaluación → Entrevista → Verificación → Vinculación → Inducción |
| **Formulario / CTA** | Botón para enviar hoja de vida a audicoop@gmail.com                         |

---

## 7. Componentes Reutilizables

```
src/components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PageHero.tsx          ← Banner interior reutilizable para páginas internas
├── ui/
│   ├── ServiceCard.tsx       ← Tarjeta de servicio (ícono + título + descripción)
│   ├── ValueCard.tsx         ← Tarjeta de valor ético
│   ├── TeamCard.tsx          ← Tarjeta de miembro del equipo
│   ├── ContactForm.tsx       ← Formulario de contacto
│   └── Button.tsx            ← Botón reutilizable (variantes: primary, secondary, outline)
└── sections/
    ├── HeroSection.tsx       ← Hero de la página de inicio
    ├── ServicesSection.tsx
    ├── AboutSection.tsx
    └── ValuesSection.tsx
```

---

## 8. Estructura de Rutas (App Router)

```
src/app/
├── layout.tsx                ← Layout raíz (Header + Footer)
├── page.tsx                  ← Inicio
├── nosotros/
│   └── page.tsx
├── servicios/
│   └── page.tsx
├── normatividad/
│   └── page.tsx
├── contacto/
│   └── page.tsx
└── trabaja-con-nosotros/
    └── page.tsx
```

---

## 9. Recursos y Assets

```
public/
├── logo/
│   ├── audicoop-logo.png          ← Logo horizontal (para header)
│   └── audicoop-logo-white.png    ← Versión blanca (para footer/dark bg)
├── images/
│   ├── hero-bg.jpg                ← Imagen hero principal
│   ├── team.jpg                   ← Foto del equipo
    └── clients/                   ← Logos de clientes *(pendiente confirmar con el cliente)*
└── icons/                         ← Íconos SVG de servicios
```

---

## 10. SEO y Metadatos

Cada página tendrá su propio `metadata` de Next.js:

- **Title**: `[Nombre de página] | AUDICOOP S.A.S.`
- **Description**: Descripción relevante por página
- **Open Graph**: Imagen, título y descripción para redes sociales
- **Keywords**: auditoría, revisoría fiscal, cooperativas, economía solidaria, Bucaramanga, SARLAFT, NIA, NAI

---

## 11. Funcionalidades Clave

| Funcionalidad         | Descripción                                                 | Prioridad |
|-----------------------|-------------------------------------------------------------|-----------|
| Formulario de contacto | Envío con validación (react-hook-form + zod)               | Alta      |
| Menú responsive       | Hamburger menu en móvil                                     | Alta      |
| Animaciones de entrada | Fade-in al hacer scroll (framer-motion o CSS)              | Media     |
| Botón WhatsApp flotante | Acceso directo por WhatsApp *(pendiente confirmar número)* | Media     |
| Acordeón normatividad | Expandir/contraer normativas                               | Media     |
| Organigrama interactivo | Visualización del organigrama corporativo                 | Baja      |

---

## 12. Stack Tecnológico

| Herramienta       | Uso                                  |
|-------------------|--------------------------------------|
| Next.js 15        | Framework principal (App Router)     |
| TypeScript        | Tipado estático                      |
| Tailwind CSS      | Estilos utilitarios                  |
| Google Fonts      | Tipografías (Playfair, Montserrat, Inter) |
| react-hook-form   | Manejo de formularios                |
| zod               | Validación de esquemas               |
| Lucide React      | Librería de íconos                   |

---

## 13. Orden de Desarrollo Sugerido

1. [ ] Configurar fuentes (Google Fonts) y variables de color en Tailwind
2. [ ] Crear componentes `Header` y `Footer`
3. [ ] Crear componente `PageHero` reutilizable
4. [ ] Desarrollar página **Inicio** (sección por sección)
5. [ ] Desarrollar página **Servicios**
6. [ ] Desarrollar página **Nosotros**
7. [ ] Desarrollar página **Normatividad**
8. [ ] Desarrollar página **Contacto** + formulario
9. [ ] Desarrollar página **Trabaja con Nosotros**
10. [ ] Ajustes responsive (móvil / tablet)
11. [ ] SEO y metadatos por página
12. [ ] Revisión final y optimización de imágenes
