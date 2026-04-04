/* // ======================= IMPORTS ===================== */

import { Component } from "react";

/* // ======================= SALUDAR COMPONENT ===================== */

// | DESACONSEJADO USAR |
export class Saludar extends Component {
  render() {
    return <h1>Hola, {this.props.nombre}!</h1>;
  }
}

// | DESACONSEJADO USAR |
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
