# 🎨 Guía de Estilos CSS del Proyecto

Este documento actúa como referencia completa para el sistema de estilos del sitio web. Aquí se explica la finalidad, uso y estructura de los archivos CSS principales.

---

## 🧼 `_reset.css`

Archivo encargado de eliminar los estilos por defecto que los navegadores aplican a los elementos HTML. Esto permite trabajar desde una base consistente.

### Contenido típico:
- Eliminación de márgenes y paddings globales
- Normalización de tipografías y tamaños
- Estilos base para listas, botones y formularios
- Ajustes de caja (`box-sizing: border-box` en todos los elementos)

---

## 🎨 `_variables.css`

Define las variables CSS que usaremos a lo largo del proyecto. Estas variables permiten cambiar el diseño fácilmente sin modificar muchas líneas de código.

### Ejemplos de uso:
```css
:root {
  --primary: #0077ff;
  --primary-dark: #0055aa;
  --text: #1a1a1a;
  --bg: #ffffff;
  --bg-card: #f9f9f9;
}
```

- Variables para colores, sombras, tipografías, tamaños
- También se definen variables para **modo oscuro** dentro de `body.dark`

---

## 🧱 `_layout.css`

Contiene clases de utilidad para estructurar el contenido de la página.

### Incluye:
- `.container`: centra el contenido con padding lateral
- `.section`: padding vertical estándar para secciones
- `.grid`, `.grid-2`, `.grid-3`: sistemas de grid personalizados
- `.grid-responsive`: grilla adaptable con media queries
- `.row`, `.col`: sistema de flexbox tipo Bootstrap
- `.col-md-6`, `.col-md-4`: columnas responsivas

---

## 🔧 `_utils.css`

Clases utilitarias reutilizables para aplicar márgenes, padding, estilos de texto y comportamientos rápidos.

### Ejemplos:
```css
.mt-1 { margin-top: 0.25rem; }
.p-4  { padding: 2rem; }
.text-center { text-align: center; }
.uppercase { text-transform: uppercase; }
.bold { font-weight: bold; }
```

Incluye:
- Márgenes y paddings
- Alineaciones de texto
- Visibilidad (`.hidden`, `.visible`, `.sr-only`)
- Utilidades de accesibilidad

---

## 🧩 `_components.css`

Estilos base para componentes visuales reutilizables como botones y tarjetas.

### Incluye:
- `.btn`, `.btn-primary`, `.btn-outline`: estilos de botones
- `.card`, `.card-header`, `.card-body`: estructuras de tarjeta
- Transiciones, sombras y bordes redondeados
- Uso intensivo de variables para coherencia visual

---

## ✅ Cómo usar estas clases

- Usa `.container`, `.grid`, `.section` para maquetar tu sitio.
- Añade clases utilitarias como `.mt-4`, `.text-center` para ajustes rápidos sin escribir CSS extra.
- Reutiliza `.btn`, `.card`, y demás componentes como base para construir secciones visuales.
- Usa las variables CSS para mantener coherencia y facilitar el darkmode o futuras modificaciones de diseño.

---

Recuerda que **solo `main.css` se enlaza directamente en las páginas HTML**. Todos estos archivos son importados dentro de él para mantener el orden y la modularidad del proyecto.
