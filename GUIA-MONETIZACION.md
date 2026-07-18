# 💰 Guía para publicar y monetizar TecnoGuía

Tu sitio ya está construido. Esta guía te lleva paso a paso desde "tengo los archivos en mi computadora" hasta "estoy generando ingresos". Sigue los pasos en orden.

---

## Paso 1 — Publica tu sitio en internet (gratis)

La opción más fácil es **Netlify**:

1. Entra a [netlify.com](https://www.netlify.com) y crea una cuenta gratis.
2. Ve a **Sites → Add new site → Deploy manually**.
3. Arrastra la carpeta `pagina WEB` completa a la zona de carga.
4. En menos de un minuto tendrás una dirección tipo `tunombre.netlify.app`.

Alternativas igual de buenas: **Vercel** y **GitHub Pages** (también gratuitas).

### Compra un dominio propio (muy recomendado)

Un dominio propio (ej. `tecnoguia.net`) cuesta entre $10 y $15 USD al año en [Namecheap](https://www.namecheap.com) o [Porkbun](https://porkbun.com). Es **casi obligatorio** para que Google AdSense te apruebe y da mucha más confianza a tus visitantes. En Netlify: **Domain settings → Add custom domain**.

> Cuando tengas tu dominio, reemplaza `tudominio.com` en los archivos `sitemap.xml` y `robots.txt`.

---

## Paso 2 — Amazon Afiliados (tu ingreso principal)

1. Regístrate en [affiliate-program.amazon.com](https://affiliate-program.amazon.com) (programa de Amazon US, ideal para público hispano en general).
2. Al registrarte te pedirán la URL de tu sitio: usa la dirección de Netlify o tu dominio.
3. Recibirás tu **ID de afiliado** (algo como `tunombre-20`).
4. **Reemplaza el marcador `TUTAG-20` en todos los archivos HTML por tu ID real.** En la terminal de Mac puedes hacerlo con un solo comando:

```bash
cd "/Users/willmanmiranda/pagina WEB"
# Reemplaza tunombre-20 por tu ID real antes de ejecutar:
sed -i '' 's/TUTAG-20/tunombre-20/g' *.html
```

### Importante para no perder la cuenta

- Amazon exige que hagas **al menos 3 ventas en los primeros 180 días** o cierran la cuenta (puedes volver a abrirla).
- El aviso legal ya está incluido en tu página [afiliados.html](afiliados.html) y en el pie de página — no lo elimines, es obligatorio.
- Los enlaces actuales apuntan a búsquedas de Amazon (funcionan siempre). Cuando tengas cuenta aprobada, usa la barra **SiteStripe** que Amazon te muestra sobre cada producto para generar enlaces directos e imágenes oficiales del producto, y reemplaza los emojis por fotos reales.
- Los precios mostrados son aproximados a propósito: Amazon no permite mostrar precios exactos desactualizados. La nota "*Precios aproximados" que ya incluye el sitio te protege.

---

## Paso 3 — Google AdSense (ingresos por publicidad)

AdSense **no aprueba sitios vacíos ni recién creados**. Requisitos realistas:

- Dominio propio (paso 1).
- 15–25 artículos originales publicados (tienes 3; sigue escribiendo — abajo te digo cómo).
- Páginas de privacidad, cookies y contacto ✅ (ya las tienes).
- Algo de tráfico real (no hay cifra oficial, pero espera 2–3 meses de vida del sitio).

Cuando cumplas eso:

1. Solicita la revisión en [adsense.google.com](https://adsense.google.com).
2. Al aprobarte, te darán un script global: pégalo en el `<head>` de cada página (hay un comentario `ADSENSE:` marcando el lugar exacto).
3. Crea bloques de anuncio y pega su código dentro de los recuadros punteados (`<div class="ad-slot">`) que ya están distribuidos por el sitio.

---

## Paso 4 — Newsletter (captar suscriptores)

El formulario de suscripción ya está en todas las páginas, pero ahora mismo no guarda correos. Para activarlo:

1. Crea una cuenta gratis en [Brevo](https://www.brevo.com) (permite 300 correos/día gratis) o Mailchimp.
2. Crea un formulario y copia el código de integración.
3. Reemplaza el `<form class="newsletter-form">` de tus páginas con ese código, o conecta el envío por API.

¿Por qué importa? Porque los suscriptores son tráfico **tuyo**: cada correo con ofertas que envíes genera clics de afiliado sin depender de Google.

### Formulario de contacto

En [contacto.html](contacto.html), reemplaza `tu-correo@ejemplo.com` por tu correo real en el atributo `action` del formulario (usa el servicio gratuito FormSubmit, ya está configurado).

---

## Paso 5 — Consigue tráfico (la parte más importante)

Sin visitas no hay ingresos. Plan realista:

1. **Google Search Console**: date de alta en [search.google.com/search-console](https://search.google.com/search-console), verifica tu dominio y envía tu `sitemap.xml`. Así Google indexa tu sitio.
2. **Publica 1–2 artículos nuevos por semana.** Los artículos de comparativa ("los mejores X de 2026") y las guías ("cómo elegir X") son los que traen tráfico de Google. Copia la estructura de los 3 artículos que ya tienes.
3. **Actualiza los artículos cada 3–6 meses** (precios, modelos nuevos) — Google premia el contenido fresco.
4. **Redes sociales**: TikTok e Instagram Reels con mini-reseñas de gadgets funcionan muy bien en español y traen tráfico rápido mientras el SEO madura.

---

## Expectativas realistas

| Etapa | Tiempo | Qué esperar |
|---|---|---|
| Lanzamiento | Mes 0 | Publicar el sitio, alta en Amazon Afiliados y Search Console |
| Crecimiento | Meses 1–4 | 15–30 artículos, primeras visitas de Google, primeras comisiones |
| Aprobación AdSense | Meses 3–5 | Solicitar AdSense con el sitio ya rodado |
| Ingresos estables | Meses 6–12 | Con 10.000+ visitas/mes: $100–$500 USD/mes combinando afiliados y anuncios |

Los sitios de afiliados son un **maratón, no un sprint**: casi todos los que fracasan es porque dejan de publicar contenido en el mes 2.

---

## Resumen de marcadores que debes reemplazar

| Marcador | Dónde está | Reemplázalo por |
|---|---|---|
| `TUTAG-20` | Todos los enlaces de Amazon | Tu ID de Amazon Afiliados |
| `tudominio.com` | `sitemap.xml`, `robots.txt` | Tu dominio real |
| `tu-correo@ejemplo.com` | `contacto.html` y páginas legales | Tu correo real |
| Comentario `ADSENSE:` | `<head>` de cada página | Script de AdSense al ser aprobado |
| Emojis de productos | Tarjetas de producto | Fotos reales vía SiteStripe de Amazon |
