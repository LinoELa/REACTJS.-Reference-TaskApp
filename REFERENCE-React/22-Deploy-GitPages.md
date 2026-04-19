# 22 - Deploy GitPages

## Índice

1. Introducción
2. Objetivo de la fase
3. Estado real del proyecto
4. Qué tienes ya instalado y configurado
5. Opción A: deploy manual con `gh-pages`
6. Opción B: deploy automático con GitHub Actions
7. Configuración clave de Vite para GitHub Pages
8. Pasos recomendados para publicarlo correctamente
9. Errores comunes
10. Aprendizajes clave

---

## Introducción

Esta fase documenta cómo publicar `react-task-app` en GitHub Pages usando la configuración real que ya existe en tu repositorio.

Aquí no se habla de un deploy genérico. Se documenta lo que ya encontré en tu proyecto:

- script `deploy` con `gh-pages`
- dependencia `gh-pages` instalada
- `vite.config.js` con `base` dinámico para GitHub Actions
- workflow `.github/workflows/deploy.yml`
- build generado en `src/Projects/react-task-app/dist`

## Objetivo de la fase

Dejar claro qué has instalado, qué hace cada pieza y cuáles son los pasos necesarios para publicar correctamente la app en GitHub Pages.

## Estado real del proyecto

Al revisar el repositorio, el sistema de deploy del proyecto `src/Projects/react-task-app/` ya tiene varias piezas preparadas.

### En `src/Projects/react-task-app/package.json`

Ya existe:

- dependencia `gh-pages`
- script `build` con Vite
- script `deploy` con `gh-pages -d dist`
- Tailwind configurado en devDependencies

### En `src/Projects/react-task-app/vite.config.js`

Ya existe una configuración dinámica de `base` que detecta estas variables:

- `GITHUB_REPOSITORY`
- `GITHUB_ACTIONS`

Si el build corre dentro de GitHub Actions, Vite usa como base `/<repoName>/`. Si no, usa `/`.

### En `.github/workflows/deploy.yml`

Ya existe un workflow que:

- se ejecuta en push a `main`
- instala dependencias en `src/Projects/react-task-app`
- ejecuta `npm run build`
- sube el contenido de `dist` como artifact
- publica en GitHub Pages usando `actions/deploy-pages`

## Qué tienes ya instalado y configurado

### Dependencias y herramientas detectadas

Dentro de `src/Projects/react-task-app/package.json` tienes:

- `react`
- `react-dom`
- `vite`
- `@vitejs/plugin-react`
- `tailwindcss`
- `@tailwindcss/vite`
- `gh-pages`

### Scripts importantes detectados

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run deploy`

### Archivos importantes para deploy

- `src/Projects/react-task-app/package.json`
- `src/Projects/react-task-app/vite.config.js`
- `.github/workflows/deploy.yml`
- `src/Projects/react-task-app/dist/`

## Opción A: deploy manual con `gh-pages`

Esta opción publica manualmente el contenido de `dist` en la rama especial usada por GitHub Pages.

### Qué necesitas

- tener el proyecto ya subido a GitHub
- tener permisos de escritura en el repositorio
- haber ejecutado el build antes de desplegar

### Flujo manual recomendado

1. entrar en `src/Projects/react-task-app`
2. instalar dependencias si hace falta
3. ejecutar `npm run build`
4. ejecutar `npm run deploy`

### Comandos típicos

Desde la carpeta del proyecto Vite:

- `npm install`
- `npm run build`
- `npm run deploy`

### Qué hace `npm run deploy`

Ejecuta:

- `gh-pages -d dist`

Eso publica el contenido de `dist` en la rama que usa `gh-pages` para servir la aplicación.

### Cuándo usar esta opción

- cuando quieres publicar manualmente
- cuando todavía no quieres depender del workflow automático
- cuando estás probando el primer deploy

## Opción B: deploy automático con GitHub Actions

Esta es la opción más alineada con lo que ya tienes preparado en el repo.

El workflow `.github/workflows/deploy.yml` hace el despliegue cada vez que haces push a `main`.

### Qué hace el workflow

1. hace checkout del repo
2. configura Node.js 20
3. usa caché de npm con `package-lock.json` del proyecto
4. ejecuta `npm ci` en `src/Projects/react-task-app`
5. ejecuta `npm run build`
6. configura GitHub Pages
7. sube `dist` como artifact
8. publica el sitio con `actions/deploy-pages`

### Ventajas de esta opción

- no necesitas lanzar `gh-pages` desde tu máquina cada vez
- el deploy queda automatizado
- el build se hace en entorno limpio
- es más fácil mantener un flujo profesional

## Configuración clave de Vite para GitHub Pages

Tu `vite.config.js` es una parte muy importante del despliegue.

GitHub Pages no suele servir la app desde `/`, sino desde una subruta como `/<nombre-del-repo>/`.

Por eso tu proyecto usa lógica dinámica:

- si está corriendo en GitHub Actions y existe `GITHUB_REPOSITORY`, el `base` se ajusta automáticamente al nombre del repo
- si estás en local, el `base` es `/` para que el desarrollo funcione normal

Esto evita uno de los errores más comunes en Vite + GitHub Pages: que los assets carguen con rutas rotas después del deploy.

## Pasos recomendados para publicarlo correctamente

### Ruta recomendada: GitHub Actions

1. confirma que el repositorio está en GitHub
2. confirma que la rama principal es `main`
3. haz commit de los cambios
4. haz push a `main`
5. entra a `Settings > Pages` en GitHub
6. asegúrate de que la fuente de Pages esté en `GitHub Actions`
7. revisa la pestaña `Actions` para confirmar que el workflow terminó bien
8. abre la URL pública generada por Pages

### Ruta alternativa: manual con `gh-pages`

1. entra en `src/Projects/react-task-app`
2. ejecuta `npm run build`
3. ejecuta `npm run deploy`
4. en GitHub, revisa la rama publicada o la configuración de Pages

### Importante sobre la raíz del monorepo

Tu repo tiene una estructura híbrida: la raíz usa otro `package.json` para el proyecto general, pero el deploy documentado aquí corresponde específicamente a `src/Projects/react-task-app`.

Por eso conviene diferenciar:

- el `package.json` raíz
- el `package.json` interno del proyecto Vite

El deploy de GitHub Pages que documentamos en este tema pertenece al proyecto interno Vite.

## Errores comunes

### 1. Publicar sin hacer build

Si `dist` no existe o está desactualizado, el deploy manual no publicará lo correcto.

### 2. Base path incorrecto

En Vite, si el `base` no coincide con el nombre del repositorio, la app puede abrir pero sin CSS, JS o imágenes.

### 3. Configurar mal GitHub Pages

Si en `Settings > Pages` no usas la fuente correcta, el workflow puede completar bien pero la web no aparecer donde esperas.

### 4. Confundir el package.json raíz con el interno

El deploy real de esta app está ligado al proyecto `src/Projects/react-task-app`, no al root principal del repositorio.

### 5. Pensar que `gh-pages` y Actions son obligatorios a la vez

Puedes usar ambos, pero no es necesario depender de las dos rutas al mismo tiempo para cada publicación.

## Aprendizajes clave

- GitHub Pages puede publicarse manualmente o con automatización CI/CD.
- `gh-pages` sirve bien para deploy manual rápido.
- GitHub Actions ofrece un flujo más profesional y repetible.
- En Vite, la configuración de `base` es crítica para que GitHub Pages funcione.
- Documentar qué vive en la raíz y qué vive en `src/Projects/react-task-app` evita mucha confusión.

## Siguiente fase sugerida

Después del deploy, una mejora natural sería documentar:

- variables de entorno seguras para producción
- dominio personalizado en GitHub Pages
- estrategia de versionado o release
- checklist de QA antes de publicar