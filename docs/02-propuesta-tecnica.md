# 02. Propuesta técnica original

**Arquitectura:** headless (Astro + Directus CMS)
**Alcance:** MVP completo (Fases 1, 2 y 3 del sitemap)

## Stack

| Capa | Tecnología |
| :-- | :-- |
| Frontend | Astro (estático, componentes modulares) |
| CMS | Directus headless: socios, noticias y eventos |
| Despliegue | GitHub Actions (CI/CD) |
| Búsqueda y filtrado | Búsqueda predictiva y filtro por sector sobre la API de Directus |
| Contacto | Formulario con envío a correo o WhatsApp, mapa de oficinas |
| Multimedia | Procesamiento y optimización de activos gráficos |

## Desglose de módulos y horas

| # | Módulo | Contenido | Horas |
| :-- | :-- | :-- | --: |
| 1 | Arquitectura, configuración y DevOps | Tooling (ESLint, Prettier, EditorConfig, VSCode) 7 h; CI/CD 5 h; sistema de diseño y base SEO 10 h | 22 |
| 2 | Home y 404 | Home 17 h; 404 5 h | 22 |
| 3 | Contenido institucional estático | Coparmex 10 h; Servicios 11 h; Socios (beneficios y convenios) 8 h; Contacto 7 h | 36 |
| 4 | CMS Directus | Instalación y modelos de datos 12 h; roles y panel 8 h | 20 |
| 5 | Directorio dinámico | Conexión Astro ↔ API 7 h; buscador y filtros 10 h; grilla y perfiles 10 h | 27 |
| 6 | Noticias y eventos | Noticias 10 h; eventos con registro 8 h | 18 |
| | **Total** | | **145** |

## Presupuesto original

Tarifa: $300 MXN/hora. Total del MVP: **$43,500 MXN** (el rango mencionado internamente era $40,000 a $45,000).

| Módulo | Costo |
| :-- | --: |
| 1. Arquitectura y DevOps | $6,600 |
| 2. Home y 404 | $6,600 |
| 3. Contenido institucional | $10,800 |
| 4. CMS Directus | $6,000 |
| 5. Directorio dinámico | $8,100 |
| 6. Noticias y eventos | $5,400 |

## Esquema de pagos recomendado

1. **35% anticipo (semana 1):** arquitectura base, DevOps, Home y 404, inicio del contenido institucional.
2. **35% segundo hito (~semana 5):** contenido institucional completo y Directus configurado.
3. **30% entrega final (~semana 8):** directorio dinámico, noticias, eventos, pruebas y despliegue.

## Calendario (~7 semanas)

| Fase | Duración |
| :-- | :-: |
| Desarrollo (sprints, módulos 1 a 6) | ~5 semanas |
| QA interno | ~1 semana |
| Pruebas de aceptación con el cliente | ~1 semana |
| Despliegue, capacitación y cierre | ~1 semana |

## Fase 2 (roadmap diferido)

- Portal de afiliación con pago en línea.
- Área de socios con login (beneficios, convenios, estado de membresía).
- Multilenguaje (español, maya, inglés).
- Newsletter y automatización de marketing por sector.
