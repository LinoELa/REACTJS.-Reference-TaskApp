# 19 - Separación de Componentes

## Índice

1. Introducción
2. Objetivo de la fase
3. Estado real de la rama
4. Nueva organización del proyecto
5. Responsabilidad de cada archivo
6. Beneficios de esta separación
7. Flujo de datos
8. Aprendizajes clave

---

## Introducción

Cuando una aplicación crece, tener todos los componentes en la raíz de `src/` deja de ser cómodo. En esta fase se refactoriza la estructura para volverla más modular y mantenible.

## Objetivo de la fase

Separar la aplicación por responsabilidades para que cada tipo de archivo viva en una ubicación lógica.

## Estado real de la rama

La rama `19-Separacion-Componentes` reorganiza la app así:

- `components/tasks/` contiene `TaskList.jsx`, `TaskForm.jsx` y `TaskCard.jsx`.
- `components/data/` contiene `TasksData.js`.
- `App.jsx` sigue manejando el estado de `tasks`.
- `TaskForm.jsx` ya controla `title` y `description`.
- `TaskCard.jsx` renderiza una tarea individual.

## Nueva organización del proyecto

- `src/App.jsx`
- `src/main.jsx`
- `src/index.css`
- `src/components/data/TasksData.js`
- `src/components/tasks/TaskList.jsx`
- `src/components/tasks/TaskForm.jsx`
- `src/components/tasks/TaskCard.jsx`

## Responsabilidad de cada archivo

### `App.jsx`
- mantiene `tasks`
- carga datos iniciales
- define `createTask()`
- conecta formulario y lista

### `TaskList.jsx`
- recibe `tasks` por props
- valida si hay datos
- renderiza varias tarjetas

### `TaskCard.jsx`
- recibe una sola tarea
- pinta `title` y `description`

### `TaskForm.jsx`
- maneja el estado local del formulario
- recoge `title` y `description`
- llama a `createTask()`

### `TasksData.js`
- contiene las tareas semilla
- separa datos y UI

## Beneficios de esta separación

- mejor legibilidad
- estructura más escalable
- componentes más reutilizables
- menor acoplamiento
- mantenimiento más simple

## Flujo de datos

1. `App.jsx` mantiene `tasks`.
2. `App.jsx` pasa `tasks` a `TaskList`.
3. `TaskList` renderiza varias `TaskCard`.
4. `App.jsx` pasa `createTask` a `TaskForm`.
5. `TaskForm` envía nuevas tareas hacia arriba.
6. `App.jsx` actualiza el estado.

## Aprendizajes clave

- Organizar por responsabilidad mejora el proyecto.
- Los componentes pequeños son más manejables.
- La estructura también comunica arquitectura.
- Refactorizar es parte normal del desarrollo.

## Siguiente fase

La siguiente etapa es `20 - useContext`, donde el estado deja de viajar por props y se centraliza en un contexto.