// ======================= NOTES ==================================

/**
 * Archivo: UseState.js
 *
 * useState es un Hook que viene con dos elementos:
 * - El estado actual (elemento)
 * - La función para actualizar ese estado
 * Se le asigna un valor inicial (en este caso 0)
 *
 * @CounterComponent - Componente funcional que demuestra el uso de useState
 * para gestionar un contador con operaciones básicas de incremento, decremento y reinicio
 * @MensajeComponent - Componente funcional que muestra un mensaje dinámico basado en la entrada del usuario
 *
 * Ambos componentes son ejemplos prácticos de cómo usar useState para manejar estados simples en React.
 *
 * Conceptos clave:
 * - useState: Hook para manejar estado en componentes funcionales
 * - Estado y función de actualización: el estado actual y la función para cambiarlo
 * - Renderizado dinámico: el componente se actualiza automáticamente cuando el estado cambia
 * - Eventos: onClick para botones y onChange para inputs
 *
 * Estos componentes se pueden usar en index.js para mostrar cómo funciona el estado en React.
 */

// ======================= IMPORTS ============
import React from "react";

// ======================= COMPONENT ============

// Counter Component    
export function CounterComponent() {
  /**
   * Count es el estado que se muestra en pantalla,
   * setCount es la función que se usa para actualizar ese estado,
   * El valor inicial del contador es 0.
   */
  const [count, setCount] = React.useState(0); // 0 es el valor inicial del contador

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
      <button onClick={() => setCount(100)}>Reiniciar</button>
    </div>
  );
}

// Mensaje Component
export function MensajeComponent() {
  const [mensaje, setMensaje] = React.useState("Escribe algo !");

  return (
    <div>
      <h2>{mensaje}</h2>
      <input
        type="text"
        onChange={(value) => setMensaje(value.target.value)}
        placeholder="Escribe un mensaje..."
      />
      <button
        onClick={() =>
          // alert(`El mensaje actual es: ${mensaje}`)
          console.log(mensaje)
        }
      >
        Save{" "}
      </button>
    </div>
  );
}
