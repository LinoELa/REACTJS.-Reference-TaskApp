//  =========== IMPORTS ============

import VscGlobe from "@react-icons/vsc ";
//  =========== USO MODULO EXTERNO ============
/**
 * Archivo: ModuloExterno.js
 *

 *
 * @PostsComponent - Componente funcional que usa async/await y useState para manejar datos de la API.
 *
 */
import { useState } from "react";

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
        {/* Aquí podrías agregar un icono de React Icons si lo deseas */}
        <VscGlobe /> Traer datos
      </button>
    </div>
  );
};
