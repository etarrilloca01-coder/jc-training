# Alarma con el celular bloqueado o la app cerrada

Una página web (navegador/PWA) NO puede sonar con la pantalla apagada ni con la app cerrada.
Eso solo lo hace una app instalada (APK). Tu código ya está listo para eso (Capacitor + LocalNotifications).

## Pasos en tu proyecto Capacitor
1. Copia `alarma.mp3` a `android/app/src/main/res/raw/alarma.mp3`.
2. En `android/app/src/main/AndroidManifest.xml` confirma estos permisos:
   - `android.permission.POST_NOTIFICATIONS`
   - `android.permission.SCHEDULE_EXACT_ALARM`
   - `android.permission.USE_EXACT_ALARM`
   - `android.permission.WAKE_LOCK`
   - `android.permission.RECEIVE_BOOT_COMPLETED` (para que sigan sonando tras reiniciar)
   - `android.permission.VIBRATE`
3. Pon `index.html` y `sw.js` en la carpeta web y ejecuta: `npx cap sync android` y vuelve a generar el APK.
4. En el celular, abre la app > Agua y alertas > "Dar permisos del celular" y acepta todo.
5. Ajustes del celular > Apps > JC Training > Batería > "Sin restricciones", y sube el volumen de alarmas.

## Si no usas APK
En Agua y alertas pulsa "Descargar alarmas y agua para el calendario (.ics)" y ábrelo con Google Calendar:
esas alarmas suenan con el celular bloqueado, aunque la app esté cerrada (con el sonido del calendario).

# Cuentas
Sube `firestore.rules` en Firebase Console > Firestore Database > Reglas > Publicar.
Sin estas reglas, el bloqueo de cuentas pendientes solo lo hace la app y se podría saltar.
