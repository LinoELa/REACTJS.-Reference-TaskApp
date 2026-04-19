# 21 - TailwindCss

## Índice

1. Introducción
2. Estado real actual de la rama
3. Qué debería incluir una fase Tailwind
4. Comprobaciones hechas en el proyecto
5. Pasos recomendados para implementarlo
6. Aprendizajes clave

---

## Introducción

Esta fase está pensada para incorporar Tailwind CSS al proyecto `react-task-app` y empezar a estilizar la interfaz usando utilidades.

Pero hay un punto importante: la rama `21-TailwindCss` existe, aunque ahora mismo no contiene cambios propios respecto a `20-useContext`.

## Estado real actual de la rama

Al revisar Git se observa que:

- `21-TailwindCss` está en el mismo commit que `20-useContext`
- no hay diferencias de archivos entre ambas ramas
- la app sigue usando la misma base funcional con `TaskContext`
- no hay configuración Tailwind añadida todavía

En otras palabras: la rama está creada, pero la implementación de Tailwind aún no aparece en el código versionado.

## Qué debería incluir una fase Tailwind

Cuando esta fase se complete, lo normal sería ver:

- dependencias `tailwindcss`, `postcss` y `autoprefixer`
- archivo `tailwind.config.js`
- archivo `postcss.config.js`
- directivas Tailwind en `src/index.css`
- clases utility aplicadas en `App`, `TaskForm`, `TaskList` y `TaskCard`

## Comprobaciones hechas en el proyecto

- `package.json` no incluye dependencias de Tailwind
- no existen archivos de configuración Tailwind o PostCSS
- `src/index.css` no contiene directivas Tailwind
- `20-useContext..21-TailwindCss` no devuelve cambios en Git

Esto confirma que la fase todavía no está implementada en el repositorio.

## Pasos recomendados para implementarlo

1. instalar Tailwind y su toolchain
2. generar los archivos de configuración
3. configurar `content` con rutas de `index.html` y `src/**/*`
4. cargar `@tailwind base`, `@tailwind components` y `@tailwind utilities`
5. refactorizar visualmente los componentes principales
6. mantener separada la lógica del contexto respecto a la capa visual

## Aprendizajes clave

- Crear una rama no significa que la fase ya esté terminada.
- Documentar el estado real evita confusiones futuras.
- Tailwind encaja muy bien con componentes React pequeños y reutilizables.
- Después de resolver la lógica, la siguiente mejora natural suele ser la presentación visual.