// ================ NOTES ================

/**
 * Archivo: TaskForm.jsx
 *
 * Componente que renderiza un formulario para agregar nuevas tareas.
 * Recibe una función `createTask` desde App.jsx para agregar tareas al estado global.
 *
 * Props:
 * - createTask: Función callback para agregar tarea al estado de App
 *
 * Estado local:
 * - title: String del título de la tarea
 * - description: String de la descripción de la tarea
 */

// ================ IMPORTS ================

import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

// ================ COMPONENTE TASKFORM ================

function TaskFormComponent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext); // Accede al contexto de tareas

  console.log(createTask, "Task Form"); // Muestra el mensaje del contexto en la consola

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      alert("Por favor escribe una tarea");
      return;
    }

    createTask({ title, description }); // Llama a la función createTask con el nuevo título y descripción
    setTitle(""); // Limpiar campo después de agregar
    setDescription(""); // Limpiar campo de descripción después de agregar
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Nueva Tarea</h2>

      <input
        type="text"
        placeholder="Escribe tu tarea"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Escribe la descripción de tu tarea"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
      <button type="submit">Agregar (Guardar)</button>
    </form>
  );
}

// ================ EXPORTS ================

export default TaskFormComponent;
