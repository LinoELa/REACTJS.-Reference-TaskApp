# 16 - Basic Task App

## Índice

1. Introducción
2. Objetivo de la fase
3. Estado real de la rama
4. Estructura base
5. Qué se logró
6. Qué falta
7. Aprendizajes clave

---

## Introducción

Esta fase marca el arranque de `react-task-app` dentro de `src/Projects/`. El objetivo principal es tener una base mínima, limpia y funcional antes de añadir lógica de tareas.

Se deja preparado el entorno con React, React DOM, Vite y ESLint.

## Objetivo de la fase

Construir una aplicación mínima que confirme que el proyecto arranca correctamente y que `App.jsx` ya puede actuar como raíz visual.

## Estado real de la rama

La rama `16-Basic-TaskApp-v2` contiene una versión muy básica del proyecto:

- `App.jsx` solo renderiza el título `React Task App`.
- No usa `useState`, `useEffect` ni props.
- `main.jsx` monta `<App />` dentro de `StrictMode`.
- `index.css` queda listo para estilos globales.

En esta fase la app ya inicia, pero todavía no existe una lista de tareas real.

## Estructura base

- `src/App.jsx`
- `src/main.jsx`
- `src/index.css`
- `src/assets/`
- `public/`
- `package.json`
- `vite.config.js`
- `eslint.config.js`

## Qué se logró

- Proyecto React funcionando
- Estructura inicial clara
- Integración con Vite lista
- Punto de entrada moderno con React 19
- Base limpia para seguir creciendo

## Qué falta

Todavía no existen:

- `TaskList`
- datos semilla
- estado con `useState`
- carga inicial con `useEffect`
- formulario para crear tareas
- separación de componentes
- `Context API`
- Tailwind CSS

## Aprendizajes clave

- Primero se asegura la base del proyecto.
- `App.jsx` puede empezar muy simple.
- `main.jsx` conecta React con el nodo `root`.
- Vite facilita el arranque y el flujo de desarrollo.

## Siguiente fase

La siguiente etapa es `17 - Lista de Tareas`, donde aparece el primer render dinámico con datos semilla y `map()`.
