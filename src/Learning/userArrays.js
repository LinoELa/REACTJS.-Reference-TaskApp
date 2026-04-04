import "./userArrays.css";

const userArrayObject = [
  {
    id: 1,
    name: "Alice Ray",
    image: "https://mockmind-api.uifaces.co/content/human/220.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    image: "https://mockmind-api.uifaces.co/content/human/80.jpg",
  },
];

export const UserArrayComponent = () => {
  return (
    <div className="user-array-container">
      <h3>👥 Usuarios (Array en React)</h3>
      {userArrayObject.map((userArray) => (
        <div key={userArray.id} className="user-card">
          <img
            src={userArray.image}
            alt={userArray.name}
            className="user-image"
          />
          <h4 className="user-name">{userArray.name}</h4>
        </div>
      ))}
    </div>
  );
};

// ======================= NOTAS ==================================

/**
 * CONCEPTOS CLAVE: Arrays, map() y Estilos CSS
 *
 * CARACTERÍSTICAS:
 * - Array de objetos con datos de usuarios
 * - map() para iterar y renderizar cada usuario
 * - Clases CSS externas para estilos organizados
 * - Key prop con ID único para cada elemento
 * - Imágenes generadas dinámicamente con ui-avatars.com
 *
 * IMPLEMENTACIONES APLICADAS:
 * - map(): transforma array en elementos JSX
 * - key={userArray.id}: identifica elementos en lista (NO usar index)
 * - Componente separado en archivo CSS (userArrays.css)
 * - Clases CSS profesionales: .user-card, .user-image, .user-name
 * - Estructura de datos: array de objetos con {id, name, image}
 * - Hover effects: transformaciones CSS al pasar mouse
 *
 * ESTRUCTURA DE DATOS:
 * const userArrayObject = [
 *   { id: 1, name: "Nombre", image: "URL" },
 *   { id: 2, name: "Nombre", image: "URL" }
 * ];
 *
 * MEJORES PRÁCTICAS APLICADAS:
 * - Avatares de imagen dinámica (ui-avatars.com API)
 * - Colores únicos por usuario
 * - Diseño responsive con flexbox
 * - Separación: lógica en .js, estilos en .css
 */
