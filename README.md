# Task App Reference

Aplicación de práctica en React basada en el curso que estás siguiendo.

## Curso de referencia

- Video guía: https://www.youtube.com/watch?v=rLoWMU4L_qE

## Objetivo

Construir una Todo App para aprender y reforzar:

- JSX
- componentes -> Crear y reutilizar componentes en la aplicación
- props -> Pasar datos entre componentes
- eventos -> Manejo de eventos en React
- useState -> Manejo de estado local en componentes
- useEffect -> Manejo de estado y efectos secundarios
- Fetch API -> Permite hacer llamadas HTTP para obtener o enviar datos a un servidor
- Context API -> Permite manejar estado global de la aplicación 
- organización del proyecto -> Mantener el código limpio y estructurado

## Stack actual

Este repositorio fue creado con Create React App y actualmente usa:

- React
- React DOM
- react-scripts

## 🚀 Cómo empezar

Este repositorio contiene **2 proyectos React independientes** que comparten el mismo `package.json`:

### Instalación inicial

```bash
npm install
```

## 📂 Proyectos

### 1️⃣ Learning (Componentes educativos)
**Ubicación:** `src/Learning/`  
**Puerto:** http://localhost:3000

Contiene ejemplos de componentes para aprender React:
- useState, useEffect, useContext
- Array manipulation
- Event handlers
- Props & Components

**Comandos:**
```bash
npm run start:learning     # Inicia Learning
npm run build:learning     # Build de Learning
```

### 2️⃣ Projects (React App Task)
**Ubicación:** `src/Projects/react-task-app/`  
**Puerto:** http://localhost:3001

Aplicación completa de tareas (Todo App)

**Comandos:**
```bash
npm run start:project      # Inicia Projects
npm run build:project      # Build de Projects
```

## 🔄 Ejecutar ambos simultáneamente

```bash
npm run start:both         # Inicia Learning (3000) + Projects (3001)
```

## 📋 Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm start:learning` | Inicia Learning en puerto 3000 |
| `npm start:project` | Inicia Projects en puerto 3001 |
| `npm start:both` | Ejecuta ambos proyectos simultáneamente |
| `npm test` | Ejecuta las pruebas |
| `npm test:watch` | Pruebas en modo watch |
| `npm build:learning` | Build de Learning |
| `npm build:project` | Build de Projects |
| `npm run build` | Build general |
| `npm run safe-deploy` | Deploy seguro (verifica .env) |

## 📁 Estructura del proyecto

```
taskapp-reference/
├── src/
│   ├── Learning/                    # 📚 Componentes educativos (Puerto 3000)
│   │   ├── index.js                # Entry point Learning
│   │   ├── UseState.js             # Ejemplos useState
│   │   ├── UseEffect.js            # Ejemplos useEffect
│   │   ├── Button.js
│   │   ├── Tasks.js
│   │   ├── Posts.js
│   │   ├── userArrays.js
│   │   └── *.css                   # Estilos
│   │
│   └── Projects/                    # 🚀 Proyectos React (Puerto 3001)
│       └── react-task-app/
│           ├── src/
│           ├── public/
│           └── package.json
│
├── REFERENCE-React/                 # 📖 Guías de referencia
│   └── dev/Resource/
│       ├── 01-Intro.md
│       ├── 02-Estructura.md
│       ├── ... (14 guías)
│       ├── 15-UseEffect-Hooks.md
│       └── ... (más guías)
│
├── package.json                     # Dependencias compartidas
├── package-lock.json
├── .env.learning                    # Configuración Learning (Puerto 3000)
├── .env.project                     # Configuración Projects (Puerto 3001)
└── README.md
```

## 🎓 Referencia de aprendizaje

Las guías completas están en `REFERENCE-React/dev/Resource/`:

- **01-14**: Conceptos fundamentales (Intro, JSX, Props, Arrays, Hooks, etc.)
- **15**: UseEffect Hook (patrones, cleanup, ejemplos)

Cada guía incluye:
- Explicación conceptual
- Ejemplos MAL/BIEN
- Quick Reference visual
- Errores comunes
- Tips de rendimiento

## Alcance inicial de la app

- Crear tareas.
- Listar tareas.
- Marcar tareas completadas.
- Eliminar tareas.

## Nota de organización

Aunque el curso puede mostrar una base con Vite en algunos momentos, este proyecto está documentado y organizado sobre Create React App para mantener coherencia con el repositorio actual.
