// ================ NOTES ================

/**
 * Archivo: App.js
 *
 * Punto de entrada principal de la aplicación React.
 *
 * Responsabilidades:
 *
 * Estructura del Componente App:
 * ├── @App -  Componente principal que renderiza la estructura básica de la aplicación (sin eventos)
 * └── *
 *
 */

// ================ IMPORTS ================
import { useEffect, useState } from "react";

import TaskListComponent from "./TaskList";
import tasksData from "./assets/seed/seedTasks";
import TaskFormComponent from "./TaskForm";

// ================ APP PRINCIPAL COMPONENTE ================
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  function createTask(task) {
    // Función para agregar una nueva tarea al estado
    setTasks([
      ...tasks,
      {
        id: tasks.length, // Genera ID basado en la longitud del array de tareas
        title: task.title,
      },
    ]);
  }

  return (
    <div className="App">
      <h1>React Task App</h1>

      <TaskListComponent tasks={tasks} />

      <TaskFormComponent createTask={createTask} />
    </div>
  );
}

// ================ EXPORTS ================
export default App;
