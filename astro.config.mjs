// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["https://lh3.googleusercontent.com"],
  },
  // Sitio temporalmente fuera de servicio: todas las rutas conocidas van a /aviso.
  // Aplica en desarrollo y en build. Las rutas desconocidas se cubren en
  // public/_redirects (comodín /* en Cloudflare Pages).
  redirects: {
    "/": { status: 302, destination: "/aviso" },
    "/proximamente": { status: 302, destination: "/aviso" },
    "/contacto": { status: 302, destination: "/aviso" },
    "/coparmex/mesa-directiva": { status: 302, destination: "/aviso" },
    "/coparmex/nosotros": { status: 302, destination: "/aviso" },
    "/servicios/capacitacion": { status: 302, destination: "/aviso" },
    "/servicios/representacion-juridica": { status: 302, destination: "/aviso" },
    "/socios/afiliacion": { status: 302, destination: "/aviso" },
    "/socios/directorio": { status: 302, destination: "/aviso" },
  },
});
