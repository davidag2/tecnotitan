# Tecnotitan Corporate Website

Pagina corporativa estatica para Tecnotitan, con una direccion visual premium inspirada en sitios industriales y aeroespaciales: fondo oscuro, fotografia tecnica, acentos cian y composicion cinematografica.

## Vista previa

![Tecnotitan desktop preview](docs/screenshot-desktop.png)

## Estructura

```text
.
├── index.html
├── nosotros.html
├── productos.html
├── servicios.html
├── divisiones.html
├── inversionistas.html
├── contacto.html
├── styles.css
├── script.js
├── assets/
│   ├── bg-hero-tech.png
│   ├── bg-capabilities-tech.png
│   ├── bg-process-ai.png
│   ├── bg-games-experiences.png
│   ├── bg-closing-tech.png
│   ├── logo-tecnotitan.svg
│   └── favicon.svg
└── docs/
    ├── screenshot-desktop.png
    └── screenshot-mobile.png
```

## Uso local

Abre `index.html` directamente en el navegador para revisar el sitio. Para probar formularios, ejecuta el proyecto en Vercel o usa una emulacion compatible con funciones serverless.

## Backend de correo

Los formularios envian a `/api/contact`, una funcion serverless pensada para Vercel y Resend. Variables requeridas en Vercel:

```text
RESEND_API_KEY=...
RESEND_CONTACTS_API_KEY=...
MAIL_FROM=Tecnotitan <contacto@tecnotitan.com>
CONTACT_TO_EMAIL=info@tecnotitan.com
RESEND_NEWSLETTER_SEGMENT_ID=...
```

`MAIL_FROM` debe usar un dominio verificado en Resend para evitar marcas de terceros y mejorar entregabilidad.
`RESEND_API_KEY` puede ser de solo envio. `RESEND_CONTACTS_API_KEY` debe permitir administrar contactos/segmentos. Si el usuario marca el newsletter, el backend crea o actualiza el contacto en Resend y lo agrega al segmento configurado en `RESEND_NEWSLETTER_SEGMENT_ID`.

## Publicacion en GitHub Pages

1. En GitHub, abre `Settings > Pages`.
2. En `Build and deployment`, selecciona `Deploy from a branch`.
3. Elige la rama `main` y la carpeta `/root`.
4. Guarda la configuracion.

## Contenido

- Inicio como portada corporativa.
- Nosotros con vision, tesis y principios.
- Productos para software, IA, videojuegos y robotica.
- Servicios de consultoria en IA y transformacion tecnologica.
- Divisiones como estructura de portafolio.
- Inversionistas con tesis, mercado, modelo y ruta de crecimiento.
- Contacto para empresas, partners e inversionistas.
