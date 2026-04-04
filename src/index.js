import React from "react";
import ReactDOM from "react-dom/client";

import { TasksCardComponent, TasksReadyComponent } from "./Tasks";
import { Saludar } from "./Saludar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="tasks-layout">
    {/* Renderizamos el componente TasksCard con una lista de tareas de ejemplo */}
    <TasksCardComponent
      tasks={[
        { id: 1, title: "Task 1" },
        { id: 2, title: "Task 2" },
        { id: 3, title: "Task 3" },
      ]}
    />
    {/* Componente de estado de tarea */}
    <TasksReadyComponent ready={true} />, 
    
    
    
    {/* | DESACONSEJADO USAR | Componente de saludo */}
    <Saludar nombre="Usuario" />
  </div>,
);

// sHIFT + ALT + A comentar en  linea asi

/* 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 */
