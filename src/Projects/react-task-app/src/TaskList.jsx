// ================ NOTES ================

/**
 * Archivo: TaskList.jsx
 *
 * Componente que renderiza y gestiona la visualización de la lista de tareas.
 * Responsable de mostrar todas las tareas con sus estados y permitir interacciones.
 *
 * Funcionalidad:
 * - useEffect: Carga las tareas desde los datos de semilla al montar el componente
 * - useState: Mantiene el array de tareas en estado local
 * - Validación: Si no hay tareas, muestra mensaje informativo
 * - map(): Itera sobre el array de tareas y renderiza cada una con key={task.id}
 *
 * Estructura de datos (task):
 * {
 *   id: número único identificador
 *   title: título de la tarea
 *   description: descripción detallada de la tarea
 *   completed: booleano (completada o pendiente)
 * }
 *
 * Props: Ninguna (utiliza datos de semilla)
 * Estado: [tasks, setTasks] - Array de tareas
 */

// ================ IMPORTS ================

import { useState, useEffect } from "react";
import tasksData from "./assets/seed/seedTasks";

// ================ COMPONENTE TASKLIST ================

console.log("Tareas de semilla:", tasksData);

function TaskListComponent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  if (tasks.length === 0) {
    return <div>No hay tareas disponibles</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

// ================ EXPORTS ================

export default TaskListComponent;
