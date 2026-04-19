# 20 - useContext

## Índice

1. Introducción
2. Objetivo de la fase
3. Estado real de la rama
4. Qué aporta Context API
5. Implementación de `TaskContext`
6. Consumo del contexto
7. Eliminación de tareas
8. Notas importantes
9. Aprendizajes clave

---

## Introducción

En esta fase la app deja de depender del paso manual de props para compartir el estado de tareas y adopta `Context API`.

Esto es útil porque la lista necesita leer tareas, el formulario crearlas y cada tarjeta eliminarlas.

## Objetivo de la fase

Centralizar el estado de tareas en un proveedor global para evitar prop drilling y simplificar la comunicación entre componentes.

## Estado real de la rama

La rama `20-useContext` introduce:

- `src/context/TaskContext.jsx`
- estado global `tasks`
- función `createTask()`
- función `deleteTask()`
- carga inicial de datos con `useEffect`
- consumo del contexto en `TaskList`, `TaskForm` y `TaskCard`

## Qué aporta Context API

Antes `App.jsx` actuaba como intermediario para repartir estado y callbacks. Con `Context API`, cualquier descendiente puede leer o ejecutar acciones compartidas sin recibir props intermedias.

Ventajas:

- menos props encadenadas
- componentes más desacoplados
- acceso centralizado al estado compartido
- arquitectura más limpia para apps medianas

## Implementación de `TaskContext`

El provider hace cuatro cosas importantes:

1. guarda el estado global con `useState([])`
2. carga las semillas desde `TasksData.js` con `useEffect()`
3. expone `tasks`, `createTask` y `deleteTask` en `value`
4. envuelve la aplicación para que los hijos usen `useContext(TaskContext)`

## Consumo del contexto

- `TaskList` lee `tasks`.
- `TaskForm` ejecuta `createTask()`.
- `TaskCard` ejecuta `deleteTask(task.id)`.

## Eliminación de tareas

Cada tarjeta añade un botón `Eliminar`.

Flujo:

1. el usuario pulsa el botón
2. `TaskCard` llama a `deleteTask(task.id)`
3. el provider filtra el array
4. React vuelve a renderizar la lista

## Notas importantes

Hay dos observaciones reales en el estado actual del proyecto:

- `TaskContextProvider` se usa en `main.jsx` y también dentro de `App.jsx`, así que ahora mismo hay doble provider.
- La rama `21-TailwindCss` apunta al mismo commit que `20-useContext`, así que todavía no añade cambios propios.

## Aprendizajes clave

- `useContext` ayuda a evitar prop drilling.
- Un provider puede compartir datos y acciones.
- El diseño del estado afecta toda la arquitectura.
- Conviene revisar dónde colocar el provider para no duplicarlo sin necesidad.

## Siguiente fase

La siguiente etapa lógica es `21 - TailwindCss`, aunque en el repositorio actual todavía no está implementada como cambio real.