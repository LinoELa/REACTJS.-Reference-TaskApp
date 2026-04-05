// ================ NOTES ================

/**
 * Archivo: TaskList.jsx
 *
 * Componente que renderiza y gestiona la visualización de la lista de tareas.
 * Responsable de mostrar todas las tareas con sus estados y permitir interacciones.
 *
 * Estructura del Componente TaskList:
 * ├── @TaskListComponent
 * │   ├─ Renderiza la lista de tareas desde el estado/props
 * │   ├─ Maneja la visualización de tareas vacías
 * │   └─ Proporciona interfaz para eliminación y actualización
 * └── *
 *
 */

// ================ IMPORTS ================

import { useState, useEffect } from "react";
import tasksData from "./assets/seed/seedTasks";

// ================ COMPONENTE TASKLIST ================

// Log para verificar que los datos de semilla se importen correctamente desde el archivo seedTasks
console.log("Tareas de semilla:", tasksData);

/**
 * Componente funcional TaskListComponent
 * Renderiza una lista de tareas obtenidas desde los datos de semilla
 * @returns {JSX.Element} Lista de tareas o mensaje de lista vacía
 */
function TaskListComponent() {
  // Estado local para almacenar el array de tareas
  // tasks: array actual de tareas | setTasks: función para actualizar el estado
  const [tasks, setTasks] = useState([]);

  // Hook useEffect que se ejecuta una única vez al montar el componente (dependencias vacías)
  // Simula la carga de tareas desde una fuente externa (API, datos de semilla, etc.)
  useEffect(() => {
    setTasks(tasksData);
  }, []);

  // Validación: Si no hay tareas disponibles, renderiza mensaje informativo
  if (tasks.length === 0) {
    return <div>No hay tareas disponibles</div>;
  }

  // Renderiza contenedor principal con lista de tareas
  return (
    <div>
      {/* 
        Itera sobre el array de tareas y renderiza cada una
        - key={task.id} es necesario para que React identifique cada elemento
        - task.title: título de la tarea
        - task.description: descripción detallada de la tarea
      */}
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskListComponent;
