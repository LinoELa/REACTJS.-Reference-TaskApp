# 📚 Resource - Centro de Aprendizaje de React

> Carpeta centralizada con guías, tutoriales y recursos educativos para dominar React y el desarrollo de TaskApp.

---

## ¿Qué es esta carpeta?

`REFERENCE-React/` contiene material de estudio estructurado para aprender React paso a paso, usando como referencia tanto la parte de aprendizaje general como la evolución del proyecto `react-task-app`.

## ¿Para qué sirve?

- Aprender React desde conceptos básicos hasta temas de arquitectura
- Entender cómo fue creciendo `react-task-app` por fases
- Consultar ejemplos reales basados en tu propio repositorio
- Tener una referencia rápida de conceptos, ramas y refactors

## 📖 Guías de Estudio

Cada archivo es una lección independiente que puedes estudiar en orden:

| #   | Archivo | Tema |
| --- | --- | --- |
| 01 | [01-Intro.md](./01-Intro.md) | Introducción a React y conceptos fundamentales |
| 02 | [02-Estructura.md](./02-Estructura.md) | Estructura del proyecto y carpetas |
| 03 | [03-Componentes.md](./03-Componentes.md) | Componentes funcionales y Props |
| 04 | [04-JSX.md](./04-JSX.md) | Sintaxis JSX y Fragments |
| 05 | [05-EcmaScript.md](./05-EcmaScript.md) | Import/Export y módulos ES6+ |
| 06 | [06-Props.md](./06-Props.md) | Props profundo: tipos, validación y patrones |
| 07 | [07-Estilos.md](./07-Estilos.md) | Estilos en React |
| 08 | [08-Tipos-de-Componentes.md](./08-Tipos-de-Componentes.md) | Tipos de componentes |
| 09 | [09-Event-Handlers.md](./09-Event-Handlers.md) | Manejo de eventos |
| 10 | [10-Fetch-API.md](./10-Fetch-API.md) | Consumo de APIs con Fetch |
| 11 | [11-Third-Party-Modules-and-React-Icons copy.md](./11-Third-Party-Modules-and-React-Icons%20copy.md) | Módulos de terceros y React Icons |
| 12 | [12-Arrays.md](./12-Arrays.md) | Renderizado y transformación de arrays |
| 13 | [13-Hooks.md](./13-Hooks.md) | Introducción a los Hooks |
| 14 | [14-UseState-Hooks.md](./14-UseState-Hooks.md) | `useState` en detalle |
| 15 | [15-UseEffect-Hooks.md](./15-UseEffect-Hooks.md) | `useEffect` en detalle |
| 16 | [16-Basic-TaskApp.md](./16-Basic-TaskApp.md) | Inicio del proyecto `react-task-app` |
| 17 | [17-Lista-de-Tareas.md](./17-Lista-de-Tareas.md) | Primera lista dinámica con datos semilla |
| 18 | [18-Agregar-Tarea-desde-Formulario.md](./18-Agregar-Tarea-desde-Formulario.md) | Formulario controlado y creación de tareas |
| 19 | [19-Separacion-Componentes.md](./19-Separacion-Componentes.md) | Refactor y organización modular de componentes |
| 20 | [20-UseContext.md](./20-UseContext.md) | Estado global con `Context API` |
| 21 | [21-TailwindCss.md](./21-TailwindCss.md) | Fase Tailwind CSS documentada según estado real |
| 22 | [22-Deploy-GitPages.md](./22-Deploy-GitPages.md) | Deploy manual y automático en GitHub Pages |

---

## 🎯 Cómo usar esta carpeta

### 1️⃣ Paso a paso

Estudia las guías en orden. A partir del tema `16`, además de teoría React, ya entras en la evolución real del proyecto `react-task-app` por ramas.

### 2️⃣ Con ejemplos reales

Los temas avanzados usan código y decisiones tomadas dentro de tu propio repositorio, así que sirven como documentación viva del aprendizaje.

### 3️⃣ Consulta rápida

Si olvidaste un concepto, entra directamente al archivo correspondiente y usa su índice interno.

### 4️⃣ Comparación con Git

Las fases `16` a `21` están especialmente pensadas para compararse con ramas concretas del proyecto y entender qué cambió en cada etapa.

---

## 📋 Estructura habitual de cada guía

Cada archivo suele incluir:

- introducción conceptual
- objetivos del tema
- estado real del código o de la fase
- explicación de la arquitectura o del flujo
- aprendizajes clave
- siguiente paso recomendado

---

## 🎓 Niveles aproximados

| Bloque | Nivel |
| --- | --- |
| 01 → 06 | 🟢 Principiante |
| 07 → 12 | 🟡 Intermedio |
| 13 → 15 | 🟡 Intermedio / Avanzado |
| 16 → 21 | 🟠 Práctica guiada sobre proyecto real |

---

## 📚 Otras carpetas relacionadas

- `src/Learning/` - ejemplos de práctica y aprendizaje base
- `src/Projects/react-task-app/` - proyecto práctico principal
- `docs/` - documentación general del repositorio
- `README.md` - visión general del proyecto

---

## 🔗 Recursos Externos

- [React Oficial Docs](https://react.dev)
- [MDN - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/)
- [Vite Docs](https://vite.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 📝 Notas

- Todas las guías están enfocadas en React moderno con componentes funcionales y Hooks.
- Las fases `16` a `21` están alineadas con ramas reales de Git revisadas en el proyecto.
- La fase `21` se documenta tal como está hoy: rama creada, pero todavía sin implementación Tailwind versionada.
- Puedes seguir ampliando esta carpeta conforme avances con nuevas ramas o refactors.

---

## 🚀 Roadmap sugerido después de estas guías

- mejorar estilos base de `react-task-app`
- completar implementación real de Tailwind en la fase 21
- revisar el doble `TaskContextProvider` actual
- añadir persistencia con `localStorage` o backend
- incorporar edición y completado de tareas
- documentar futuras fases como `custom hooks`, `router` o mejoras de producción