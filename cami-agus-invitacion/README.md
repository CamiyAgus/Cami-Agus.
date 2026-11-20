# Cami & Agus — Invitación digital

Invitación web estática, adaptable a celulares, tablets y computadoras. No requiere instalación ni dependencias de JavaScript.

## Archivos
- `index.html`: estructura y contenido de la invitación.
- `styles.css`: estética, diseño responsive y animaciones.
- `script.js`: cuenta regresiva, WhatsApp, Google Maps y copia del alias.
- `assets/cami-agus.jpg`: fotografía proporcionada por los novios, optimizada para web.
- `favicon.svg`: ícono de la invitación.

## Visualizar localmente
1. Descomprimí el ZIP.
2. Abrí la carpeta `cami-agus-invitacion`.
3. Hacé doble clic en `index.html` para abrirla en el navegador.

Para probar la copia del alias con mayor compatibilidad, podés iniciar un servidor local desde esa carpeta con `python -m http.server 8000` y abrir `http://localhost:8000`.

## Publicar gratis con Netlify
1. Entrá a https://app.netlify.com/drop
2. Descomprimí el ZIP.
3. Arrastrá la carpeta `cami-agus-invitacion` (la que contiene `index.html`) a la zona de carga.

## Datos configurados
- Fecha: 3 de abril de 2027. El contador apunta a las 00:00 de Argentina (UTC−3), ya que no se indicó horario de inicio.
- WhatsApp: `5493547546814`.
- Ubicación: coordenadas GPS exactas `-31.7464167, -64.3921389`.
- Lista de regalos: Wishbob.
- Alias: `CAMIAGUSINVITACIONES`.
- Fecha límite de contribución: 20 de febrero de 2027.

La invitación no exige el pago para confirmar asistencia. El botón de WhatsApp precarga el mensaje con campos para nombre y estado de pago.
