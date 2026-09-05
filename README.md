# ONCE14 — Sitio web corporativo

Sitio de una sola página para **ONCE14**, firma de consultoría económica, financiera y estratégica con oficinas en Commerce, California (EE. UU.) y representación en Sonora, México.

## Estructura del proyecto

```
once14-site/
├── index.html          # Estructura del sitio
├── css/
│   └── style.css        # Estilos (design tokens, tipografía, layout, animaciones)
├── js/
│   └── main.js           # Interacciones: nav, servicios, filosofía, FAQ, idioma ES/EN,
│                          # scroll reveal, contadores animados, spotlight de cursor
├── assets/
│   ├── logo-icon.png      # Ícono del logo (usado en nav, velo de apertura y footer)
│   └── logo-full.png      # Logo completo (disponible para usos futuros: og:image, favicon, etc.)
└── README.md
```

## Características

- **Bilingüe (ES/EN)** — botón de idioma en el nav (desktop y móvil) que traduce todo el contenido del sitio mediante atributos `data-i18n` / `data-en`, sin recargar la página.
- **Responsive** — de escritorio a móvil, con menú hamburguesa y grids adaptables.
- **Animado pero accesible** — animaciones de entrada, scroll-reveal por sección, contador de estadísticas y spotlight de cursor en el hero; todo respeta `prefers-reduced-motion`.
- **Sin dependencias de build** — HTML/CSS/JS planos. No requiere Node, npm ni bundler.
- **Tipografía**: Bricolage Grotesque (display), Inter (texto), IBM Plex Mono (datos/etiquetas), vía Google Fonts.

## Cómo verlo localmente

No requiere instalación. Basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático:

```bash
# Opción 1: Python
python3 -m http.server 8000

# Opción 2: Node (si tienes serve instalado)
npx serve .
```

Luego visita `http://localhost:8000`.

## Publicar en GitHub Pages

1. Sube este contenido a un repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. En **Source**, selecciona la rama (`main`) y la carpeta raíz (`/root`).
4. Guarda — GitHub Pages publicará el sitio en `https://<usuario>.github.io/<repositorio>/`.

## Personalización rápida

- **Colores**: variables CSS en la parte superior de `css/style.css` (`:root`), basadas en el logo — `--navy: #041D42` y `--gold: #BC8319`.
- **Textos**: cada elemento traducible tiene un atributo `data-en` junto al texto en español (contenido por defecto de la etiqueta).
- **Contacto**: números, dirección y correo están en la sección `#contacto` de `index.html`, y repetidos en el `<footer>`.

## Créditos

Diseño y desarrollo del sitio realizados con asistencia de Claude (Anthropic).
