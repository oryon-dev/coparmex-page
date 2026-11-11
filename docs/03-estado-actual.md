# 03. Estado actual del proyecto

Revisión del código al 11 de noviembre de 2026. El build (`npm run build`) compila sin errores y genera 10 páginas.

## Stack real

Astro 7, Tailwind CSS 4, ESLint y Prettier. Despliegue automático a Cloudflare Pages (proyecto `coparmex-vall`) en cada push a `main`. **No hay backend, CMS ni base de datos.**

## Páginas: plan contra realidad

| Ruta planeada | Ruta real | Estado |
| :-- | :-- | :-- |
| `/` | `/` | Terminada (hero con fondo WebGL, carrusel de socios, secciones institucionales, CTA) |
| `/404` | `/404` | Terminada |
| `/coparmex/historia` | `/coparmex/nosotros` | Terminada |
| `/coparmex/directiva` | `/coparmex/mesa-directiva` | Diseño terminado; datos y fotos de la mayoría de colaboradores son temporales |
| `/servicios/juridica` | `/servicios/representacion-juridica` | Terminada |
| `/servicios/capacitacion` | `/servicios/capacitacion` | Diseño y código terminados; fotos y cursos son de muestra |
| `/servicios/networking` | no existe | **Pendiente** (enlazada en el menú, da 404) |
| `/socios/beneficios` | `/socios/afiliacion` | Terminada (con ajuste de información real) |
| `/socios/convenios` | no existe | **Pendiente** |
| `/socios/directorio` | `/socios/directorio` | Frontend terminado (búsqueda, filtros, tarjetas); 7 socios fijos en el código |
| `/contacto` | `/contacto` | Diseño terminado; **el formulario no envía nada** |
| `/comunicacion/noticias` | no existe | **Pendiente** (el menú apunta a `/proximamente`) |
| `/comunicacion/eventos` | no existe | **Pendiente** (el menú apunta a `/proximamente`) |
| (extra) | `/proximamente` | Página de "próximamente" con formulario de correo que tampoco envía |

Componentes globales terminados: Header y Footer con menús responsive, banner de sitio en construcción, tarjetas de socio, tarjeta de liderazgo, tarjeta de curso y carrusel de socios.

## Módulos del plan sin construir

- **CMS Directus** (módulo 4): no iniciado.
- **Conexión a API y directorio dinámico** (módulo 5): solo existe el frontend; los datos viven en `src/pages/socios/directorio.astro`.
- **Noticias y eventos** (módulo 6): no iniciado.
- **Envío real de formularios**: no implementado.

## Problemas conocidos

**Funcionalidad**
- El formulario de contacto solo muestra un `alert` de éxito, aunque no envía nada.
- El formulario de `/proximamente` hace lo mismo.
- El formulario de newsletter en Capacitación no tiene lógica.

**Enlaces rotos**
- `/servicios` (enlazado desde el inicio) y `/servicios/networking` (menú) no existen.
- El menú "Servicios" y "Comunicación" usan `href="#"`.
- Varios botones "Conocer más" en Capacitación apuntan a `#`.

**Contenido provisional**
- Mesa directiva: fotos placeholder, varios nombres y correos de ejemplo, y algunos correos con dominio inconsistente (`.org` frente a `.org.mx`).
- Capacitación: fechas fijas ya vencidas (por ejemplo, "15 Octubre, 2026") e imágenes alojadas en `lh3.googleusercontent.com`, que pueden dejar de cargar.
- Banner de "Sitio en construcción" activo en todas las páginas.

**Calidad y pulido**
- Sin SEO real: falta Open Graph, sitemap, `robots.txt`, analítica y la opción `site` en `astro.config.mjs`.
- `package.json` se llama `oryon-web`.
- Sin pruebas ni chequeo de tipos configurado.
- Imágenes pesadas: `directivos` (~950 kB) y `approach-juridico` (~850 kB) tras optimización.

## Conclusión

Aproximadamente el 50% del alcance original está construido (73 de 145 horas). Lo entregado es un frontend de buena calidad visual y estructura limpia, pero el sitio todavía no es autogestionable ni capta contactos.
