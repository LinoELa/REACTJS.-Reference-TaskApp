# 18 - Agregar Tarea desde Formulario

## Índice

1. Introducción
2. Objetivo de la fase
3. Estado real de la rama
4. Cambio de arquitectura
5. Componente `TaskForm`
6. Estado levantado a `App.jsx`
7. Flujo completo
8. Limitaciones reales
9. Aprendizajes clave

---

## Introducción

En esta fase la aplicación pasa de mostrar una lista estática a permitir interacción real. El usuario ya puede escribir una tarea y agregarla al estado.

Se practican formularios controlados, eventos en React, callbacks por props y lifting state up.

## Objetivo de la fase

Permitir que el usuario agregue tareas desde un formulario y que la lista se actualice automáticamente después del envío.

## Estado real de la rama

La rama `18-Agregar-Tarea-desde-Formulario-v2` añade dos cambios principales:

- `App.jsx` usa `useState` para guardar `tasks`.
- `App.jsx` usa `useEffect` para cargar `tasksData`.
- `App.jsx` define `createTask(task)`.
- `TaskForm.jsx` controla un input con `useState`.
- `TaskForm.jsx` ejecuta `handleSubmit()` con `event.preventDefault()`.
- La validación evita tareas vacías.

## Cambio de arquitectura

En la fase 17 el estado estaba dentro de `TaskList`. En esta fase el estado sube a `App.jsx`, porque tanto `TaskList` como `TaskForm` necesitan participar en la misma información.

Eso convierte a `App.jsx` en la fuente de verdad del array de tareas.

## Componente `TaskForm`

Responsabilidades:

- capturar el texto del usuario
- validar el formulario
- avisar al padre que debe crear una tarea

En la versión real de esta rama, `TaskForm` solo controla `title`.

## Estado levantado a `App.jsx`

`App.jsx` ahora:

- carga tareas iniciales
- pasa `tasks` a `TaskListComponent`
- pasa `createTask` a `TaskFormComponent`
- agrega una nueva tarea al array cuando recibe el callback

## Flujo completo

1. El usuario escribe un título.
2. `onChange` actualiza el estado local del formulario.
3. El usuario envía el formulario.
4. `handleSubmit()` llama a `createTask({ title })`.
5. `App.jsx` actualiza `tasks`.
6. `TaskList` recibe nuevas props.
7. React vuelve a pintar la lista.

## Limitaciones reales

- La nueva tarea solo guarda `title`.
- El `id` se basa en `tasks.length`.
- No hay eliminación de tareas.
- No hay edición.
- No hay persistencia.
- Todavía no se usa `Context API`.

## Aprendizajes clave

- Los formularios controlados son una base esencial en React.
- `preventDefault()` evita recargar la página.
- Un hijo puede pedir cambios al padre mediante callbacks.
- Lifting state up resuelve estado compartido entre hermanos.

## Siguiente fase

La siguiente etapa es `19 - Separación de Componentes`, donde la estructura se reorganiza en carpetas temáticas y aparece `TaskCard`.