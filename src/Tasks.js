/*
    * Tasks.js
    * Componente que muestra una lista de tareas en una tarjeta.
     - Recibe una prop 'tasks' que es un array de objetos con id y title.
     - Renderiza cada tarea dentro de una lista. 

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
