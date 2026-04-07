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

import TaskListComponent from "./components/tasks/TaskList";
import tasksData from "./components/data/TasksData";
import TaskFormComponent from "./components/tasks/TaskForm";

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
        id: Date.now(), // Genera ID único basado en timestamp
        title: task.title,
        description: task.description,
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
