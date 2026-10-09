# JC Training – APK para Android

Este proyecto convierte tu app en un APK. Se compila solo en GitHub (gratis), sin instalar nada en tu PC.

## Pasos
1. Crea una cuenta en github.com y un repositorio nuevo (privado está bien).
2. Sube TODO el contenido de esta carpeta (incluida la carpeta oculta `.github`) al repositorio.
3. Entra a la pestaña **Actions** → **Build APK**. Si no arrancó solo, pulsa **Run workflow**.
4. Cuando termine (unos 5-8 min), abre la ejecución y descarga **JC-Training-APK** (al final de la página). Dentro está `app-debug.apk`.
5. Pásalo al celular, ábrelo y acepta "instalar apps de origen desconocido".
6. Al abrir la app, acepta el permiso de notificaciones. En Ajustes del celular → Batería, pon JC Training en "Sin restricciones" para que los avisos no se retrasen.

## Cómo funciona
- Los datos se guardan automáticamente en el celular, sin internet.
- Las notificaciones (agua cada hora y turnos de entrenamiento) se programan en el sistema Android y llegan con la app cerrada.
- Para cambiar la app, edita `www/index.html` y vuelve a subirlo: se genera un APK nuevo.
