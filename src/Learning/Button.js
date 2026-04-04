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

export function ButtonComponent({ text, name = "", onClick }) {
  return (
    <button
      className="btn"
      name={name}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

// ======================= NOTAS ==================================

/**
 * CONCEPTOS CLAVE: Props y Event Handlers
 *
 * CARACTERÍSTICAS:
 * - Componente funcional reutilizable que acepta props (text, name, onClick)
 * - Props desestructuradas en la firma de la función
 * - Valor por defecto para la prop `name` (empty string)
 * - Event handler onClick recibido desde el componente padre
 *
 * IMPLEMENTACIONES APLICADAS:
 * - Composición: componente diseñado para ser reutilizable en múltiples lugares
 * - Props drilling: el evento onClick se pasa desde index.js
 * - Default parameters: `name = ""` para evitar undefined
 * - Aplicación de clase CSS para estilos consistentes
 *
 * USO:
 * <ButtonComponent text="Mi Botón" name="btn1" onClick={handleClick} />
 */
