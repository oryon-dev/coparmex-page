# 01. Definición del proyecto (Fase MVP)

## Objetivo

Plataforma institucional moderna, rápida y **autogestionable** para la delegación COPARMEX Valladolid. Propósito principal:

- Dar visibilidad digital a las empresas afiliadas.
- Atraer nuevos socios mostrando con claridad los beneficios y servicios de la cámara.
- Establecer un canal de contacto directo y profesional.

## Funcionalidades principales

1. **Directorio interactivo de socios (tarjetas).** Cada empresa se muestra en una tarjeta con logotipo, nombre, categoría, descripción breve y botones de contacto directo (WhatsApp, web, correo). Sin páginas individuales complejas.
2. **Búsqueda y filtrado.** Barra de búsqueda por nombre y filtros por sector (turismo, comercio, servicios).
3. **Autogestión de socios (CMS).** Panel administrativo para que el personal de la cámara dé de alta, edite o baje socios mediante formularios, sin tocar código.
4. **Diseño responsivo y SEO.** Adaptable a móviles, con carga ultrarrápida para buen posicionamiento local.

## Sitemap por fases

### Fase 1: lanzamiento inmediato (base)

- `/` Inicio: hero (liderazgo empresarial), carrusel infinito de socios (estático), "Nuestra Esencia" y "Visión Estratégica", bloque de impacto con 3 servicios core, CTA de afiliación.
- `/404` Manejador de errores con CTA de retorno al inicio.

### Fase 2: contenido institucional y de apoyo (estático)

- **Coparmex:** `/historia` (reseña e hitos) y `/directiva` (organigrama, fotos y perfiles de la mesa directiva).
- **Servicios:** `/juridica` (respaldo legal), `/capacitacion` (talleres, cursos y formación ejecutiva), `/networking` (vinculación y eventos de negocios).
- **Socios:** `/beneficios` (propuesta de valor, retorno de inversión, respaldo nacional) y `/convenios` (descuentos y acuerdos B2B).
- **Contacto:** formulario formal, mapa de oficinas en Valladolid y redes sociales.

### Fase 3: módulos dinámicos (backend con Directus CMS headless)

- **`/socios/directorio`:** buscador predictivo por nombre, filtrado avanzado por sector o giro, grilla de tarjetas conectada a Directus con perfiles expandibles.
- **`/comunicacion/noticias`:** feed dinámico vía API de Directus, categorías por relevancia económica local y nacional, rutas generadas automáticamente para cada artículo.
- **`/comunicacion/eventos`:** calendario interactivo de asambleas, ruedas de prensa y sesiones de networking, con registro para empresarios.

## Diferido a una fase posterior (fuera del MVP)

- Portal de afiliación con pago en línea de cuotas.
- Área de socios con autenticación (login).
- Multilenguaje (español, inglés).
- Newsletter y automatización de marketing.
