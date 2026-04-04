// ================ NOTES ================

/**
 * Archivo: index.js
 *
 * Punto de entrada principal de la aplicación React.
 *
 * Responsabilidades:
 * - Crear la raíz de React con ReactDOM.
 * - Importar componentes principales (Tasks, Saludar, Button).
 * - Renderizar la interfaz dentro del elemento #root en HTML.
 * - Demostrar cómo usar múltiples event handlers (onClick, onChange, onSubmit).
 *
 * Estructura del Componente App:
 * ├── @TasksCardComponent - Lista de tareas (sin eventos)
 * ├── @TasksReadyComponent - Indicador de estado (sin eventos)
 * ├── @Saludar - Componente de clase legacy (sin eventos)
 * ├── @ButtonComponent - Botón con onClick
 * ├── @input - Entrada con onChange
 * ├── @form #basic-form - Formulario con onSubmit (sin input)
 * ├── @form #basic-form-2 - Formulario con onChange + onSubmit
 * ├── @PostsComponent - Botón para traer datos con fetch (onClick)
 * ├── @ExternoComponent - Componente que usa un módulo externo (React Icons)
 * ├── @UserArrayComponent -  Lista de usuarios o elementos de un array renderizados en React (map)
 * └── *----------------------------------------------------------*
 *
 *
 * Event Handlers Definidos:
 * handlerChange - onChange: Registra valor del input en consola
 * handleSubmit - onSubmit: Previene recarga y registra envío del formulario
 * handleButtonClick - onClick: Registra qué botón fue clickeado
 * handleFetchPosts - onClick: Fetch posts desde API y registra en consola
 *
 * INSTRUCCIONES PARA PROBAR:
 * 1. Abre el navegador (npm start)
 * 2. Presiona F12 o Ctrl+Shift+I para abrir DevTools
 * 3. Ve a la pestaña "Console"
 * 4. Interactúa con los inputs y botones
 * 5. Observa los mensajes en la consola
 *
 */

// ================ IMPORTS ================

import React from "react";
import ReactDOM from "react-dom/client";
import "./tasks.css";

import { TasksCardComponent, TasksReadyComponent } from "./Tasks";
import { Saludar } from "./Saludar";
import { ButtonComponent } from "./Button";
import { PostsComponent } from "./Posts";
import { ExternoComponent } from "./ModuloExterno";
import { UserArrayComponent } from "./userArrays";
import { CounterComponent, MensajeComponent } from "./UseState";
import { UseEffectComponent } from "./UseEffect";

// ================ APP ================

function App() {
  // ============ EVENT HANDLERS ============

  /**
   * handlerChange: onChange event handler
   * Se ejecuta cada vez que el usuario escribe en un input.
   * Accede al valor actual con event.target.value
   */
  const handlerChange = (event) => {
    console.log("Input:", event.target.value);
  };

  /**
   * handleSubmit: onSubmit event handler para formularios
   * Se ejecuta cuando se envía un formulario (click en submit o Enter en input)
   * event.preventDefault() evita el comportamiento por defecto (recarga de página)
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado");
  };

  /**
   * handleButtonClick: onClick event handler para botones
   * Se ejecuta cuando se hace clic en un botón
   * Recibe parámetros adicionales si es necesario
   */
  const handleButtonClick = (buttonName) => {
    console.log(`Botón clickeado: ${buttonName}`);
  };

  return (
    <div className="tasks-layout">
      {/* ============ COMPONENTES ORIGINALES ============ */}

      {/* TasksCardComponent: Muestra lista de tareas - Sin event handlers */}
      <TasksCardComponent
        tasks={[
          { id: 1, title: "Task 1" },
          { id: 2, title: "Task 2" },
          { id: 3, title: "Task 3" },
        ]}
      />

      {/* TasksReadyComponent: Indicador de estado de tarea - Sin event handlers */}
      <TasksReadyComponent ready={true} />

      {/* Saludar: Componente de clase legacy - Sin event handlers */}
      <Saludar nombre="Usuario" />

      {/* ButtonComponent: Botón reutilizable con onClick handler */}
      <ButtonComponent
        text="Click me"
        name="exampleButton"
        onClick={() => handleButtonClick("exampleButton")}
      />

      {/* ============ EJEMPLOS DE EVENT HANDLERS ============ */}

      {/* onChange: Input SIN estado - Solo registra valor en consola */}
      <input
        id="input-example"
        onChange={handlerChange}
        placeholder="Escribe algo para ver onChange en consola..."
      />

      {/* onSubmit: Formulario SIN input - Solo botón submit */}
      <form id="basic-form" onSubmit={handleSubmit}>
        <h3>Formulario: Solo Submit (onSubmit)</h3>
        <button type="submit">Submit</button>
      </form>

      {/* onSubmit + onChange: Formulario COMPLETO - Input + submit */}
      <form id="basic-form-2" onSubmit={handleSubmit}>
        <h3>Formulario: Input + Submit (onChange + onSubmit)</h3>
        <input
          id="input-example-2"
          onChange={handlerChange}
          placeholder="Escribe y presiona Submit..."
        />
        <button type="submit">Submit</button>
      </form>

      {/* onClick: Botón para traer datos con fetch */}
      <PostsComponent />

      {/* Uso de modulo Externo */}
      <ExternoComponent />

      {/* Arrays en React */}
      <UserArrayComponent />


      {/* Counter - Mensaje en React */}
      <CounterComponent />
      <MensajeComponent />
      
      {/* useEffect: Efectos secundarios */}
      <UseEffectComponent />
    </div>
  );
}

// ================ ROOT RENDERING ================

/**
 * Crear la raíz de React y renderizar el componente App
 * en el elemento con id="root" del HTML
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// ======================= NOTAS ==================================

/**
 * CONCEPTOS CLAVE: Punto de Entrada y Composición de Componentes
 *
 * CARACTERÍSTICAS:
 * - index.js: punto de entrada de la aplicación React
 * - Importación de todos los componentes reutilizables
 * - Componente App principal que renderiza todo
 * - Múltiples event handlers definidos en el nivel superior
 * - Composición de componentes originales + ejemplos de handlers
 *
 * IMPLEMENTACIONES APLICADAS:
 * - ReactDOM.createRoot(): crea raíz de React en el DOM
 * - root.render(): renderiza el componente en el elemento #root
 * - Props drilling: paso de handlers a componentes hijos
 * - Manejo de estado local con useState (posts, emails, etc)
 * - Event handlers múltiples: onChange, onSubmit, onClick
 * - Composición: combina 8+ componentes en una sola App
 *
 * ESTRUCTURA JERÁRQUICA:
 * App
 * ├── TasksCardComponent
 * ├── TasksReadyComponent
 * ├── Saludar
 * ├── ButtonComponent (con onClick)
 * ├── Input (onChange)
 * ├── Form básico (onSubmit)
 * ├── Form completo (onChange + onSubmit)
 * ├── PostsComponent (fetch async)
 * ├── ExternoComponent (icons + fetch)
 * └── UserArrayComponent (arrays + map)
 *
 * PUNTOS IMPORTANTES:
 * - Este es el punto único de entrada de la aplicación
 * - Todos los componentes se renderizan aquí
 * - Los handlers se definen a nivel de App y se pasan a hijos
 * - Es donde se controla el flujo general de la aplicación
 * - Conexión con el DOM real a través del id="root" en HTML
 */

// COMENTAR UNA LÍNEA: Shift + Alt + A

// ================ LEGACY (Código antiguo - NO USAR) ================

/*
// Forma antigua de renderizar React (con StrictMode)
// Ya no es necesaria en React 19
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
