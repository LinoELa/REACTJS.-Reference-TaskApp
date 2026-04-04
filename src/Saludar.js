// ======================= NOTES ==================================

/**
 * Archivo: Saludar.js
 *
 * Este archivo define un componente de clase en React.
 *
 * El componente:
 * - Recibe la prop `nombre`.
 * - Renderiza un saludo en pantalla.
 *
 * Nota:
 * - Los componentes de clase si existen y funcionan.
 * - Hoy estan desaconsejados para codigo nuevo.
 * - Se usan sobre todo en proyectos legacy o para aprender esa sintaxis.
 */

/* // ======================= IMPORTS ===================== */

import { Component } from "react";

/* //============== SALUDAR COMPONENT =============*/

export class Saludar extends Component {
  render() {
    return <h1>Hola, {this.props.nombre}!</h1>;
  }
}

/* export class Saludar extends Component {
  constructor(props) {
    super(props);
    this.nombre = props.nombre;
  }

  decirHola() {
    return `Hola, ${this.nombre}!`;
  }
}
 */
