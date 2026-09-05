# ONCE14 — Sitio web corporativo

Sitio de una sola página para **ONCE14**, firma de consultoría económica, financiera y estratégica con oficinas en Commerce, California (EE. UU.) y representación en Sonora, México.

## Estructura del proyecto

```
once14-site/
├── index.html          # Estructura del sitio
├── css/
│   └── style.css        # Estilos (design tokens, tipografía, layout, animaciones)
├── js/
│   └── main.js           # Interacciones: nav, servicios expandibles, FAQ, idioma ES/EN,
│                          # scroll reveal, barra de progreso, contadores animados
├── assets/
│   ├── logo-icon.png      # Ícono del logo (usado en nav, mockup del hero y footer)
│   └── logo-full.png      # Logo completo (disponible para usos futuros: og:image, favicon, etc.)
└── README.md
```

## Características

- **Diseño**: estética fintech moderna (bento grid, tarjetas redondeadas, mockup de "panel financiero" animado en el hero) — inspirado en productos como Stripe/Mercury/Ramp, con los colores de marca de ONCE14 (navy `#041D42` y dorado `#BC8319`).
- **Bilingüe (ES/EN)** — botón de idioma en el nav (desktop y móvil) que traduce todo el contenido del sitio mediante atributos `data-i18n` / `data-en`, sin recargar la página.
- **Responsive** — de escritorio a móvil, con menú hamburguesa y grids adaptables.
- **Animado pero accesible** — barra de progreso de scroll, reveal por sección, contador de estadísticas y tarjetas de servicio expandibles; todo respeta `prefers-reduced-motion`.
- **Sin dependencias de build** — HTML/CSS/JS planos. No requiere Node, npm ni bundler.
- **Tipografía**: Inter (todo el sitio) + IBM Plex Mono (solo para cifras/datos), vía Google Fonts.

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

1. Sube este contenido a un repositorio de GitHub (todo el contenido de esta carpeta, no la carpeta en sí, directo en la raíz del repo).
2. Ve a **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **Deploy from a branch**.
4. En **Branch**, elige `main` y la carpeta **/ (root)**. Guarda.
5. Espera uno o dos minutos y recarga Settings → Pages: ahí aparecerá el link público, con formato `https://<tu-usuario>.github.io/<nombre-del-repo>/`.

## Personalización rápida

- **Colores**: variables CSS en la parte superior de `css/style.css` (`:root`), basadas en el logo — `--navy: #041D42` y `--gold: #BC8319`.
- **Textos**: cada elemento traducible tiene un atributo `data-en` junto al texto en español (contenido por defecto de la etiqueta).
- **Contacto**: números, dirección y correo están en la sección `#contacto` de `index.html`, y repetidos en el `<footer>`.

## Créditos

Diseño y desarrollo del sitio realizados con asistencia de Claude (Anthropic).
