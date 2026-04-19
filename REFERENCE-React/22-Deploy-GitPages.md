# 22 - Deploy GitPages

## Índice

1. Introducción
2. Qué proyecto se publica
3. Estado final que sí funcionó
4. Preparación antes del deploy
5. Paso 1 - Revisar `vite.config.js`
6. Paso 2 - Hacer build correcto
7. Paso 3 - Hacer deploy con `gh-pages`
8. Paso 4 - Configurar GitHub Pages
9. Paso 5 - Comprobar la web
10. Qué no debes hacer
11. Errores comunes
12. Resumen rápido para futuro

---

## Introducción

Esta guía explica el proceso real que seguimos para publicar `react-task-app` en GitHub Pages dentro de un repositorio que contiene más de un proyecto.

La idea es que en el futuro puedas repetir el deploy tú mismo sin volver a confundirte entre el repo, el README, la rama `main`, la rama `gh-pages` o la configuración de Pages.

---

## Qué proyecto se publica

El proyecto que sí se publica es este:

- `src/Projects/react-task-app`

No se publica:

- el `README.md` de la raíz
- la carpeta `src/Learning/`
- la raíz del repositorio como si fuera la web

---

## Estado final que sí funcionó

El método que quedó funcionando fue este:

- build del proyecto `src/Projects/react-task-app`
- deploy manual con `gh-pages`
- rama publicada: `gh-pages`
- GitHub Pages configurado en `Deploy from a branch`
- branch elegida: `gh-pages`
- carpeta elegida: `/ (root)`

URL pública esperada:

- `https://linoela.github.io/REACTJS-REFERENCE/`

---

## Preparación antes del deploy

Antes de publicar, revisa siempre esto:

1. estás trabajando dentro del repo `taskapp-reference`
2. el proyecto correcto es `src/Projects/react-task-app`
3. tienes dependencias instaladas
4. sabes diferenciar la URL del repo de la URL del sitio publicado

Recuerda:

- repo: `https://github.com/LinoELa/REACTJS-REFERENCE`
- sitio: `https://linoela.github.io/REACTJS-REFERENCE/`

---

## Paso 1 - Revisar `vite.config.js`

Este paso es muy importante.

GitHub Pages no sirve la app desde `/`, sino desde una subruta con el nombre del repositorio. En este caso:

- `/REACTJS-REFERENCE/`

Si Vite genera rutas como estas:

- `/assets/...`
- `/favicon.svg`

la app puede romperse en producción aunque funcione en local.

La idea correcta es:

- en desarrollo usar `base: "/"`
- en build usar `base: "/REACTJS-REFERENCE/"` o una versión dinámica basada en el nombre del repo

Cuando el build quedó bien, el `dist/index.html` terminó apuntando a rutas como:

- `/REACTJS-REFERENCE/assets/...`
- `/REACTJS-REFERENCE/favicon.svg`

---

## Paso 2 - Hacer build correcto

Desde la raíz del repo, el comando correcto es:

- `npm --prefix src/Projects/react-task-app run build`

Este comando:

- usa el proyecto correcto
- genera `dist/` en `src/Projects/react-task-app`
- prepara los archivos que después se publican en GitHub Pages

Después del build, conviene revisar que exista:

- `src/Projects/react-task-app/dist/index.html`

y que las rutas dentro apunten a `REACTJS-REFERENCE`.

---

## Paso 3 - Hacer deploy con `gh-pages`

Cuando el build ya está bien, publica con este comando, también desde la raíz del repo:

- `npm --prefix src/Projects/react-task-app run deploy`

Ese script ejecuta:

- `gh-pages -d dist`

Su función es subir el contenido de `dist` a la rama `gh-pages`.

Cuando el deploy sale bien, normalmente verás algo como:

- `Published`

Después de eso, la rama `gh-pages` debe contener archivos como:

- `index.html`
- `assets/`
- `favicon.svg`

---

## Paso 4 - Configurar GitHub Pages

En GitHub entra a:

- `Settings > Pages`

Y usa esta configuración si vas a mantener el deploy manual con `gh-pages`:

- **Source:** `Deploy from a branch`
- **Branch:** `gh-pages`
- **Folder:** `/ (root)`

Esta fue la configuración que sí funcionó al final.

### Qué no debes seleccionar para este método

No uses esto si tu deploy actual depende de la rama `gh-pages`:

- `GitHub Actions`
- `Jekyll`
- `Static HTML`

Eso pertenece a otros flujos distintos.

---

## Paso 5 - Comprobar la web

Después de guardar la configuración de Pages:

1. espera 1 a 3 minutos
2. abre la URL pública
3. si hace falta, haz `Ctrl + F5`
4. si sigue igual, prueba incógnito

La URL correcta es:

- `https://linoela.github.io/REACTJS-REFERENCE/`

Si abres la URL del repo de GitHub, verás el `README`, no la app.

---

## Qué no debes hacer

### 1. No confundas repo con sitio

- repo: muestra código y README
- Pages: muestra la aplicación publicada

### 2. No publiques el proyecto equivocado

No publiques la raíz del repo ni `src/Learning/`. El proyecto correcto es `src/Projects/react-task-app`.

### 3. No hagas `merge gh-pages -> main`

`gh-pages` es una rama de publicación. No se debe mezclar dentro de `main`.

Si lo haces, puedes meter archivos compilados como `index.html` o `assets/` dentro de la rama fuente principal y crear más confusión.

### 4. No mezcles dos métodos de deploy sin control

Si usas `gh-pages`, deja Pages apuntando a `gh-pages`. Si quieres usar Actions en el futuro, cambia el método de forma consciente y deja uno solo activo.

---

## Errores comunes

### Error 1 - Se ve el README en vez de la app

Causa probable:

- abriste la URL del repo
- o Pages apunta al origen equivocado

Solución:

- abrir la URL del sitio
- revisar `Settings > Pages`
- confirmar `gh-pages` + `/ (root)`

### Error 2 - La app abre sin estilos o sin JS

Causa probable:

- `base` mal configurado en Vite

Solución:

- revisar `vite.config.js`
- repetir build
- repetir deploy

### Error 3 - Se ejecuta build del root en lugar del proyecto Vite

Causa probable:

- usar `npm run build` en la raíz pensando que compila `react-task-app`

Solución:

usar siempre:

- `npm --prefix src/Projects/react-task-app run build`

### Error 4 - Se publica un `dist` viejo

Causa probable:

- lanzar deploy sin haber generado un build nuevo

Solución:

seguir siempre este orden:

1. build
2. deploy

---

## Resumen rápido para futuro

Cada vez que quieras hacer deploy manual de este proyecto, sigue esta receta:

### Checklist

1. revisar `vite.config.js`
2. confirmar que el proyecto es `src/Projects/react-task-app`
3. ejecutar build
4. ejecutar deploy
5. revisar GitHub Pages
6. abrir la URL correcta

### Comandos a recordar

Desde la raíz del repo:

- `npm --prefix src/Projects/react-task-app run build`
- `npm --prefix src/Projects/react-task-app run deploy`

### Configuración a recordar en GitHub

- `Settings > Pages`
- `Deploy from a branch`
- `gh-pages`
- `/ (root)`

---

## Resumen final

El deploy correcto de este repo no consiste en publicar todo el repositorio ni en tomar el `README` como referencia visual del sitio.

El flujo correcto es:

- compilar `src/Projects/react-task-app`
- publicar `dist` con `gh-pages`
- hacer que GitHub Pages apunte a la rama `gh-pages`
- abrir la URL pública correcta

Si vuelves a seguir estos pasos, podrás repetir el deploy tú mismo sin perderte entre ramas, proyectos o configuraciones de GitHub Pages.