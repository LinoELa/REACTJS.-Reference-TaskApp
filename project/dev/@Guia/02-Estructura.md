# Estructura Basica de React (en este proyecto)

Este proyecto usa **Create React App (CRA)**.  
La estructura que tienes hoy es esta:

```text
taskapp-reference/
|-- build/
|-- node_modules/
|-- project/
|   |-- @project.md
|   |-- dev/
|   |   |-- @Guia/
|   |   |   |-- 01-Intro.md
|   |   |   `-- 02-Estructura.md
|   |   |-- arquitecture.md
|   |   |-- dev-flow.yaml
|   |   `-- preparar-todo.md
|   `-- notes/
|       |-- @General.md
|       `-- @Questions.md
|-- public/
|   |-- favicon.ico
|   |-- index.html
|   |-- logo192.png
|   |-- logo512.png
|   |-- manifest.json
|   `-- robots.txt
|-- src/
|   `-- index.js
|
|-- .gitignore
|-- package-lock.json
|-- package.json
`-- README.md
```

## Que hace cada carpeta

### `src/`
Carpeta principal de codigo React.  
Aqui vive la aplicacion, componentes, estilos y pruebas.

### `public/`
Archivos estaticos que no pasan por Babel/React directamente.  
Incluye la plantilla HTML base y assets publicos.

### `node_modules/`
Dependencias instaladas con npm.  
Se genera automaticamente con `npm install`.

### `build/`
Salida de produccion generada con `npm run build`.  
Es lo que se puede desplegar en un hosting.

### `project/`
Documentacion y plan de estudio del proyecto.  
No forma parte del runtime de React, pero te guia en el desarrollo.

## Que hace cada archivo (raiz)

### `package.json`
Define nombre del proyecto, dependencias y scripts (`start`, `build`, `test`, etc.).

### `package-lock.json`
Bloquea versiones exactas de dependencias para instalaciones reproducibles.

### `.gitignore`
Lista archivos/carpetas que Git no debe versionar (`node_modules`, `build`, `.env.*`, etc.).

### `README.md`
Descripcion general del proyecto: objetivo, stack y comandos principales.

## Que hace cada archivo de `public/`

### `public/index.html`
Plantilla HTML base.  
Tiene el `<div id="root"></div>` donde React monta la app.

### `public/manifest.json`
Metadatos de PWA (nombre, iconos, color de tema, modo de visualizacion).

### `public/robots.txt`
Reglas para bots/crawlers.

### `public/favicon.ico`
Icono pequeno que aparece en la pestana del navegador.

### `public/logo192.png` y `public/logo512.png`
Iconos usados para instalacion tipo app/PWA.

## Que hace cada archivo de `src/`

### `src/index.js`
Punto de entrada de React.  
Crea la raiz con `ReactDOM.createRoot(...)` y renderiza `<App />`.

### `src/App.js`
Componente principal de la UI actual.

### `src/App.css`
Estilos del componente `App` (plantilla inicial de CRA).

### `src/index.css`
Estilos globales base (body, fuentes, etc.).

### `src/logo.svg`
Asset de ejemplo usado por `App.js`.

### `src/App.test.js`
Prueba de ejemplo con React Testing Library.

### `src/setupTests.js`
Configuracion de testing (importa `@testing-library/jest-dom` para matchers extra).

### `src/reportWebVitals.js`
Utilidad opcional para medir metricas de rendimiento (CLS, FID, FCP, LCP, TTFB).

## Flujo basico de ejecucion

1. El navegador carga `public/index.html`.
2. React entra por `src/index.js`.
3. `index.js` renderiza `App.js` dentro de `#root`.
4. `App.js` usa sus estilos (`App.css`) y assets (`logo.svg`).

## Resumen rapido

- Si vas a programar React: trabaja casi siempre en `src/`.
- Si cambias estructura HTML base o metadatos globales: toca `public/index.html` y `manifest.json`.
- Si documentas/aprendes el proyecto: usa la carpeta `project/`.
