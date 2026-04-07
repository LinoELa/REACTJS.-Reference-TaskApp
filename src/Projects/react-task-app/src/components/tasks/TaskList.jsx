// ================ NOTES ================

/**
 * Archivo: TaskList.jsx
 *
 * Componente que renderiza y gestiona la visualización de la lista de tareas.
 * IMPORTANTE: Este componente NO maneja estado, solo recibe tareas como prop desde App.jsx
 *
 * Props:
 * - tasks: Array de tareas a renderizar
 *
 * Estructura de datos (task):
 * {
 *   id: número único identificador
 *   title: título de la tarea
 *   description: descripción detallada de la tarea
 *   completed: booleano (completada o pendiente)
 * }
 */

// ================ IMPORTS ================

import React from "react";
import TaskCard from "./TaskCard";

// ================ COMPONENTE TASKLIST ================

function TaskListComponent({ tasks }) {
  // Validación: Si no hay tareas, muestra mensaje informativo
  if (!tasks || tasks.length === 0) {
    return <div>No hay tareas disponibles</div>;
  }

  // Renderiza la lista de tareas mapeando el array
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

// ================ EXPORTS ================

export default TaskListComponent;
