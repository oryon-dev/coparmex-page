# 05. Opciones de cierre con alcance reducido

> Documento comercial. Retirar de este repositorio antes de compartirlo con terceros.

COPARMEX no cuenta con presupuesto para el plan completo. Las horas son estimaciones a partir del estado del código, a $300 MXN/h. Todos los totales incluyen la liquidación por lo ya construido ($21,900).

## Paquetes evaluados

| Paquete | Incluye | Horas extra | Total con liquidación |
| :-- | :-- | :-: | --: |
| **A. Publicable** | Formulario de contacto que envía correo, enlaces rotos corregidos, banner retirado, SEO básico, dominio y publicación. | ~14 h | ~$26,100 |
| **B. Autogestionable ligero** | Todo lo de A, más panel para editar socios, noticias y eventos con un CMS ligero (Decap). | ~32 h | ~$31,500 |
| **C. Plan original (Directus)** | Directus, directorio dinámico, noticias, eventos con registro, y páginas `networking`, `convenios` y `beneficios`. | ~87 h | ~$48,000 |

Corrección: una versión previa de este documento estimaba C en ~$42,000 a $44,000. El cálculo correcto suma A (14 h) más 73 h adicionales.

## Decisión tomada

Se desarrolla un paquete a medida, equivalente a **A más gestión de socios**, construido por Oryon con apoyo de IA y reutilizando una API de Express propia que ya tiene autenticación.

**Dentro del alcance**
- Todo el Plan A.
- Gestión de socios (alta, edición, baja y subida de logo) con dos roles: `admin` y `editor`.
- Directorio público alimentado por la API.

**Fuera del alcance (ampliaciones cobradas aparte)**
- Bolsa de trabajo (implica moderación y datos personales de candidatos, con aviso de privacidad bajo la LFPDPPP).
- Noticias y eventos.
- Almacenamiento de logos en R2.
- Consulta de datos en tiempo de build (opción 1 de abajo).
- Fase 2 original: pago en línea, login de socios, multilenguaje, newsletter.

## Diseño técnico

### API (Express, instancia dedicada a COPARMEX en VPS propio)

- `GET /public/socios`: solo lectura, solo socios activos y campos públicos.
- `POST`, `PUT` y `DELETE /socios`: protegidos por autenticación. La baja es lógica, no borrado.
- **RBAC a nivel de middleware de rutas:** `editor` crea y edita; `admin` además da de baja y gestiona usuarios.
- **Subida de logos** al disco del servidor, servidos como estáticos por nginx. Límite de tamaño (~1 MB), solo PNG, JPG y WebP validados por contenido, nombre de archivo generado por el servidor.
- **CORS** restringido al dominio de COPARMEX (y `localhost` en desarrollo).
- **Sesión** con cookie `httpOnly`.
- **Rate limiting y caché** (~60 s) delante de `/public/socios`.
- **Respaldos** de la base de datos y de la carpeta de logos.

### Sitio (Astro)

- Directorio público que consulta `/public/socios` desde el navegador. Búsqueda y filtros existentes se aplican sobre esos datos.
- Si la API falla, el directorio muestra un mensaje claro de error con datos de respaldo.
- `/admin` como mini-aplicación del cliente (login, listado, alta, edición, baja, logo), con `noindex` y fuera del sitemap.

### Cuándo consulta el sitio los datos

| Opción | Cómo funciona | Pros | Contras |
| :-- | :-- | :-- | :-- |
| **1. En el build** | Astro pide los socios a la API al compilar; la API dispara un deploy hook de Cloudflare al editar. | Sitio 100% estático, rápido, buen SEO y sin depender de la API en cada visita. | Los cambios tardan 1 a 2 minutos en verse. |
| **2. En el navegador (elegida por ahora)** | El directorio hace `fetch` a la API en cada visita. | Cambios instantáneos y la más rápida de construir. | Depende de la API en cada visita, peor SEO y más tráfico para el servidor. |
| 3. SSR en Astro | Cada visita se renderiza en servidor. | Instantáneo y con SEO. | Se pierde el hosting estático gratuito. |

Se empieza con la opción 2. Migrar a la 1 solo cambia dónde se ejecuta el `fetch`; queda como ampliación.

## Estimación del paquete elegido

| Bloque | Horas |
| :-- | :-: |
| Plan A | ~14 |
| Endpoints de socios en la API (menos si ya existen) | 2 a 4 |
| Panel `/admin` | 8 a 10 |
| Directorio público conectado a la API, con estado de falla | 3 a 4 |
| Pruebas y revisión de seguridad | 3 a 4 |
| **Total** | **~30 a 36** |

## Esquema de cobro

Hosting y dominio se cobran aparte (anualidad). La mensualidad es solo por el desarrollo.

| Qué se paga | Total | Meses a $1,000 | A $1,500 | A $2,000 |
| :-- | --: | :-: | :-: | :-: |
| Solo la liquidación | $21,900 | 22 | 15 | 11 |
| Plan A | $26,100 | 27 | 18 | 14 |
| Plan B | $31,500 | 32 | 21 | 16 |
| Plan B con anticipo de $6,300 | $25,200 restante | 26 | 17 | 13 |

**Recomendación:** anticipo de $5,000 a $6,000 y $1,000 mensuales por un máximo de 24 meses (~$29,000 a $30,000 recuperados). Sin anticipo, $1,500 mensuales por 18 a 21 meses. Un plazo de 32 meses expone demasiado: riesgo de impago y pérdida de valor por inflación (~10%).

**Condiciones sugeridas**
- Propiedad intelectual a nombre de Oryon hasta el último pago.
- Suspensión del sitio tras dos mensualidades vencidas, con el código siguiendo siendo de Oryon.
- Entrega por etapas: primero el Plan A publicado y el panel de socios cuando los pagos estén al corriente.
- Contrato firmado con cláusulas de mora y terminación anticipada. Revisar antes el convenio original por posibles cláusulas de cesión o exclusividad.

## Pendientes

- Revisar el repositorio de la API: modelo de usuarios, rutas existentes y subida de archivos.
- Definir con el cliente quién aporta contenido real (mesa directiva, lista completa de socios y logos, cursos vigentes).
- Decidir a nombre de quién queda el dominio.
