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
 */

// ================ IMPORTS ================

import { useState } from "react";

// ================ COMPONENTE TASKFORM ================

function TaskFormComponent({ createTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      alert("Por favor escribe una tarea");
      return;
    }

    createTask({ title }); // Llama a la función createTask con el nuevo título
    setTitle(""); // Limpiar campo después de agregar
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Nueva Tarea</h2>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Agregar (Guardar)</button>
    </form>
  );
}

// ================ EXPORTS ================

export default TaskFormComponent;
