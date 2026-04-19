# 17 - Lista de Tareas

## Índice

1. Introducción
2. Objetivo de la fase
3. Estado real de la rama
4. Qué se añade respecto a la fase 16
5. Componente `TaskList`
6. Datos de semilla
7. Flujo de renderizado
8. Aprendizajes clave

---

## Introducción

En esta fase la app deja de ser solo un título y empieza a mostrar una lista real de tareas usando datos de ejemplo.

Aquí ya se practican `useState`, `useEffect`, renderizado de listas con `map()` y uso de `key`.

## Objetivo de la fase

Mostrar una colección de tareas en pantalla y entender cómo cargar un array en estado para renderizarlo dinámicamente.

## Estado real de la rama

La rama `17-Lista-de-Tareas-v2` introduce estos elementos:

- `App.jsx` importa y renderiza `TaskListComponent`.
- `TaskList.jsx` usa `useState([])` para guardar tareas.
- `TaskList.jsx` usa `useEffect()` para cargar `tasksData` al montar.
- Si no hay tareas, muestra `No hay tareas disponibles`.
- `seedTasks.js` contiene `id`, `title`, `description` y `completed`.

## Qué se añade respecto a la fase 16

- Nuevo componente `TaskList.jsx`
- Nuevo archivo `seedTasks.js`
- Estado local para la lista
- Carga inicial con `useEffect`
- Renderizado de tareas con `map()`

## Componente `TaskList`

Responsabilidades principales:

- cargar las tareas iniciales
- mantenerlas en estado local
- decidir qué mostrar si la lista está vacía
- renderizar cada tarea

## Datos de semilla

El archivo de semillas permite desarrollar la interfaz sin depender todavía de API o base de datos. Cada tarea trae estructura suficiente para practicar renderizado dinámico.

## Flujo de renderizado

1. `App.jsx` renderiza `TaskListComponent`.
2. `TaskList` inicia con `tasks = []`.
3. `useEffect()` ejecuta `setTasks(tasksData)`.
4. React vuelve a renderizar.
5. `tasks.map()` pinta título y descripción de cada tarea.

## Aprendizajes clave

- Renderizar listas es una habilidad base en React.
- `useEffect` sirve muy bien para carga inicial.
- `key` ayuda a React a identificar elementos repetidos.
- El estado local funciona bien mientras la app sigue siendo pequeña.

## Siguiente fase

La siguiente etapa es `18 - Agregar Tarea desde Formulario`, donde el estado sube a `App.jsx` y aparece la comunicación por props.