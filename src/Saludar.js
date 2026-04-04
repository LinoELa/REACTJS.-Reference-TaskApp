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

// ======================= NOTAS ==================================

/**
 * CONCEPTOS CLAVE: Componentes de Clase (Legacy)
 *
 * CARACTERÍSTICAS:
 * - Componente de clase con herencia de React.Component
 * - Acceso a props a través de this.props
 * - Método render() obligatorio que devuelve JSX
 * - Ejemplo de sintaxis antigua de React
 *
 * IMPLEMENTACIONES APLICADAS:
 * - Class component: sintaxis pre-Hooks (desaconsejada para código nuevo)
 * - this.props: forma de acceder a props en clases
 * - render(): método que devuelve el JSX a renderizar
 * - Constructor comentado: alternativa de inicialización
 *
 * POR QUÉ ES LEGACY:
 * - Los componentes funcionales + Hooks son la forma moderna
 * - Las clases son más verbosas y complejas
 * - Se mantiene aquí como referencia histórica y aprendizaje
 * - Nueva sintaxis preferida: const Saludar = ({nombre}) => <h1>Hola, {nombre}!</h1>
 */
