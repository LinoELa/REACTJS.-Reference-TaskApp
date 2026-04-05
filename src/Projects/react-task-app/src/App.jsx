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
import React from "react";

import TaskListComponent from "./TaskList";

// ================ APP PRINCIPAL COMPONENTE ================
function App() {
  return (
    <div className="App">
      <h1>React Task App</h1>
      <TaskListComponent />
    </div>
  );
}

// ================ EXPORTS ================
export default App;
