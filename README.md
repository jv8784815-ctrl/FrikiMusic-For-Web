# FrikiMusic Web

Primera versión visual adaptable inspirada en la app Android de FrikiMusic. El index, los estilos, el JavaScript y los recursos de marca están directamente en la raíz de este proyecto.

## Vista local

Desde esta carpeta, ejecuta `npm run dev` y abre `http://127.0.0.1:4173`.

## Vercel

Importa el repositorio en Vercel y elige `frikimusic-web` como **Root Directory**. Usa el preset **Other**; el proyecto ejecuta `npm run build` y publica el contenido estático de `dist`. No requiere variables de entorno.

La búsqueda y el catálogo de esta etapa usan datos de muestra. Los controles del reproductor son visuales; todavía no se conecta el backend ni el stream de YouTube.
