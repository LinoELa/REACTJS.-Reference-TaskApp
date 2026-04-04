//  ======================= POSTS COMPONENT ==================================

/**
 * Archivo: Posts.js
 *
 * Este archivo define un componente funcional de React para demostrar el uso de fetch y onClick.
 *
 * El componente:
 * - Renderiza un botón que, al hacer click, realiza una petición fetch a una API de ejemplo.
 * - La respuesta se maneja con async/await para una sintaxis más limpia.
 * - Los datos se muestran en pantalla usando estado de React.
 *
 * @PostsComponent - Componente funcional que usa async/await y useState para manejar datos de la API.
 *
 */
import { useState } from "react";

export const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://json-placeholder.mock.beeceptor.com/posts",
      );
      if (!response.ok) throw new Error("Error en la respuesta de la API");
      const data = await response.json();
      setPosts(data);
      console.log(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleFetchPosts} disabled={loading}>
        {loading ? "Cargando..." : "Traer datos"}
      </button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {posts.length > 0 && (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ======================= NOTAS ==================================

/**
 * CONCEPTOS CLAVE: Async/Await y useState en React
 *
 * CARACTERÍSTICAS:
 * - Componente funcional con useState para manejar tres estados: posts, loading, error
 * - Botón con onClick que ejecuta handleFetchPosts para traer datos de la API
 * - Manejo de respuestas HTTP con validación de estado
 *
 * IMPLEMENTACIONES APLICADAS:
 * - Async/await para sintaxis más limpia y legible en peticiones asincrónicas
 * - useState para gestionar posts, loading, y errores
 * - Validación de respuesta con response.ok antes de procesar datos
 * - Try/catch/finally para manejo robusto de errores
 * - Indicador de carga mientras se obtienen datos (botón deshabilitado)
 * - Mostrar lista de posts en pantalla
 * - Mostrar mensajes de error en caso de fallo
 */
