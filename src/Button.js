// ======================= NOTES ==================================

/**
 * Archivo: Button.js
 *
 * Este archivo define un componente reutilizable de boton para React.
 *
 * El componente:
 * - Recibe la prop `text` para mostrar el texto del boton.
 * - Recibe la prop `name` para asignarla al atributo `name` del boton.
 * - Recibe la prop `onClick` como event handler.
 *
 * Evento:
 * - `onClick` se ejecuta cuando el usuario hace click en el boton.
 * - La funcion del evento se pasa desde el componente padre.
 *
 * Esto conecta el componente con el tema de event handlers en React.
 *
 * @ButtonComponent - Este componente es un ejemplo de un componente funcional en React.
 *
 */

/* //============== BUTTON COMPONENT =============*/

export function ButtonComponent({ text, name = "" }) {
  return (
    <button
      className="btn"
      name={name}
      onClick={function () {
        console.log(`Button ${name} clicked!`);
      }}
    >
      {text}
    </button>
  );
}
