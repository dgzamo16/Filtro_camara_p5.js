# Filtro de Cámara con p5.js

Aplicación web que captura video en tiempo real desde la cámara del dispositivo y permite aplicar filtros de color usando la librería **p5.js**.

## Funcionalidades

- Captura de video en vivo desde la cámara
- Aplicación de filtros de color personalizados
- Botón para quitar el filtro y restaurar la imagen original
- Captura de pantalla con nombre automático basado en la fecha y hora

## Cómo usar

1. Clona el repositorio o descarga los archivos
2. Abre `index.html` en tu navegador (requiere servidor local para acceso a la cámara)
3. Escribe un color en el campo de texto (ej: `red`, `blue`, `rgba(255,0,0,100)`)
4. Haz clic en **Aplicar filtro**
5. Usa **Quitar filtro** para volver a la imagen original
6. Usa **Tomar captura** para guardar una imagen

## 🛠️ Tecnologías

- [p5.js](https://p5js.org/) v1.0.0
- Bootstrap 3.4
- JavaScript vanilla

## Nota

Para que la cámara funcione, el archivo debe abrirse desde un servidor local (por ejemplo con la extensión **Live Server** de VS Code) o desde HTTPS. Los navegadores bloquean el acceso a la cámara en archivos abiertos directamente como `file://`.

## Autora

Giselle Leguizamo — [GitHub](https://github.com/dgzamo16)
