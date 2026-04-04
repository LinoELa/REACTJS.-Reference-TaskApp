// ======================= NOTES ==================================

/**
 * Archivo: Tasks.js
 *
 * Este archivo define dos componentes funcionales de React.
 *
 * Componentes:
 * - `TasksCardComponent`: muestra una lista de tareas.
 * - `TasksReadyComponent`: muestra el estado de una tarea.
 *
 * Props usadas:
 * - `tasks`: array de objetos con `id` y `title`.
 * - `ready`: valor booleano para mostrar estado realizado o no realizado.
 *
 * Este archivo conecta con temas de componentes, props y renderizado condicional.
 */

// ======================= IMPORTS =========================================

import "./tasks.css";

// ======================= COMPONENT =========================================

// Task Card Component
export function TasksCardComponent({ tasks }) {
  return (
    <div className="card">
      <h2 className="card-title">Tasks</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Task Ready Component
export function TasksReadyComponent({ ready }) {
  return (
    <div className="ready ready-card">
      <h2 className="ready-title">Estado de tarea</h2>
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Tarea realizada" : "Tarea no realizada"}
      </span>
    </div>
  );
}

// ======================= NOTAS ==================================

/**
 * CONCEPTOS CLAVE: Renderizado de Listas y Renderizado Condicional
 *
 * CARACTERÍSTICAS:
 * - TasksCardComponent: renderiza lista de tareas con map()
 * - TasksReadyComponent: renderizado condicional con ternario
 * - Ambos componentes reutilizables con props
 * - Aplicación de clases CSS para estilos
 * - Key prop importante en el map (task.id)
 *
 * IMPLEMENTACIONES APLICADAS:
 * - map(): itera array de tareas y renderiza cada una
 * - key={task.id}: identifica elementos en listas (crucial para rendimiento)
 * - Renderizado condicional: `{ready ? "Sí" : "No"}`
 * - Clases condicionales: `className={ready ? "bg-green" : "bg-red"}`
 * - Props tipadas implícitamente (tasks es array, ready es boolean)
 *
 * ESTRUCTURAS DE DATOS ESPERADAS:
 * tasks = [{id: 1, title: "Tarea 1"}, {id: 2, title: "Tarea 2"}]
 * ready = true | false
 */
