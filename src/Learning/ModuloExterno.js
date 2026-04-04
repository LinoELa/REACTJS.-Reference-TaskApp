// ======================= NOTES ==================================

/**
 * Archivo: ModuloExterno.js
 *
 * Este archivo demuestra el uso de librerías externas (third-party modules).
 *
 * El componente:
 * - Importa iconos de la librería react-icons (Font Awesome)
 * - Renderiza un botón con un icono integrado
 * - Ejecuta un fetch al hacer click en el botón
 * - Muestra los resultados en la consola
 *
 * @ExternoComponent - Componente funcional que demuestra módulos externos e iconos
 *
 */

// ======================= IMPORTS ============

import { FaGlobeAmericas } from "react-icons/fa";

// ======================= COMPONENT ============

export const ExternoComponent = () => {
  return (
    <div>
      <button
        onClick={() => {
          fetch("https://json-placeholder.mock.beeceptor.com/posts")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error fetching posts:", error));
        }}
      >
        <FaGlobeAmericas /> Traer datos
      </button>
    </div>
  );
};

// ======================= NOTAS ==================================

/**
 * CONCEPTOS CLAVE: Librerías Externas y React Icons
 *
 * CARACTERÍSTICAS:
 * - Importación de icono Font Awesome desde react-icons
 * - Componente simple con un botón y evento onClick
 * - Uso de fetch API para obtener datos
 * - Manejo de promesas con .then() y .catch()
 * - Icono renderizado junto al texto del botón
 *
 * IMPLEMENTACIONES APLICADAS:
 * - react-icons: librería de +20k iconos disponibles
 * - Font Awesome (FaGlobeAmericas): icono específico del set FA
 * - Fetch API: realiza petición GET a un endpoint mock
 * - Promesas encadenadas: .then() para procesar respuesta
 * - Error handling: .catch() para capturar errores
 * - Console logging: debug en DevTools (F12)
 *
 * LIBRERÍAS USADAS:
 * - react-icons: proporciona componentes de iconos listos para usar
 *   Instalación: npm install react-icons --save
 *   Documentación: https://react-icons.github.io/react-icons/
 */
