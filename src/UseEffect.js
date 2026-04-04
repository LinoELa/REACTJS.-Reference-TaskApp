// ======================= NOTES ==================================

/**
 * Archivo: UseEffect.js
 *
 * Este archivo demuestra el uso de useEffect Hook para efectos secundarios.
 *
 * El componente:
 * - Renderiza ejemplos de useEffect con diferentes dependencias
 * - Muestra fetching de datos desde una API
 * - Demuestra limpieza de efectos (cleanup)
 * - Ejemplos de useEffect sin, con array vacío, y con dependencias
 *
 * @UseEffectComponent - Componente funcional que enseña useEffect patterns
 *
 */

// ======================= IMPORTS ============

import { useState, useEffect } from 'react';

// ======================= COMPONENT ============

export const UseEffectComponent = () => {
  // Estado para title (efecto cada render)
  const [titulo, setTitulo] = useState('Título inicial');

  // Estado para contador (efecto con dependencia)
  const [contador, setContador] = useState(0);

  // Estado para datos de API (efecto una sola vez)
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  // ============ EFECTO 1: Sin dependencias (cada render) ============
  useEffect(() => {
    console.log('Efecto SIN dependencias - Se ejecuta en CADA render');
  });

  // ============ EFECTO 2: Una sola vez (mount) ============
  useEffect(() => {
    console.log('Efecto CON array vacío - Se ejecuta UNA SOLA VEZ');
    document.title = 'React useEffect Demo';
  }, []);

  // ============ EFECTO 3: Con dependencia (cuando contador cambia) ============
  useEffect(() => {
    console.log(`Contador cambió a: ${contador}`);
  }, [contador]);

  // ============ EFECTO 4: Fetch data (mount) ============
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Error fetching:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  // ============ EFECTO 5: Con cleanup (interval) ============
  useEffect(() => {
    const intervalo = setInterval(() => {
      console.log('Interval ejecutándose...');
    }, 3000);

    // Cleanup: se ejecuta antes de desmontar o antes del próximo efecto
    return () => {
      clearInterval(intervalo);
      console.log('Interval limpiado');
    };
  }, []);

  // ============ EFECTO 6: Actualizar título cuando cambia ============
  useEffect(() => {
    document.title = titulo;
  }, [titulo]);

  return (
    <div style={{ padding: '20px', border: '2px solid #4A90E2', borderRadius: '8px' }}>
      <h3>🎣 Ejemplos de useEffect</h3>

      {/* Ejemplo 1: Cambiar título */}
      <div style={{ marginBottom: '15px' }}>
        <h4>Ejemplo 1: Cambiar título del navegador</h4>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Escribe para cambiar el título"
          style={{ marginRight: '10px' }}
        />
        <p>(Mira la pestaña del navegador)</p>
      </div>

      {/* Ejemplo 2: Contador con dependencia */}
      <div style={{ marginBottom: '15px' }}>
        <h4>Ejemplo 2: Efecto con dependencia</h4>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>
          Incrementar (abre DevTools Console)
        </button>
      </div>

      {/* Ejemplo 3: Fetch de datos */}
      <div style={{ marginBottom: '15px' }}>
        <h4>Ejemplo 3: Fetch de API (una sola vez)</h4>
        {loading ? (
          <p>Cargando usuarios...</p>
        ) : (
          <ul>
            {usuarios.map((user) => (
              <li key={user.id}>{user.name} ({user.email})</li>
            ))}
          </ul>
        )}
      </div>

      {/* Ejemplo 4: Info */}
      <div>
        <h4>📋 Info</h4>
        <p>Abre la consola (F12) para ver los logs de useEffect</p>
        <ul>
          <li>Efecto sin dependencias: en CADA render</li>
          <li>Efecto con []: UNA SOLA VEZ al montar</li>
          <li>Efecto con [contador]: cuando contador cambia</li>
          <li>Cleanup: se ejecuta antes de desmontar</li>
        </ul>
      </div>
    </div>
  );
};

// ======================= NOTAS ==================================

/**
 * CONCEPTOS CLAVE: Efectos Secundarios y Ciclo de Vida
 *
 * CARACTERÍSTICAS:
 * - useEffect ejecuta código después de que React renderiza el componente
 * - Puede ejecutarse en cada render, una sola vez, o cuando dependencias cambian
 * - Soporta cleanup (limpieza) para desuscribirse, limpiar timers, etc.
 * - El array de dependencias controla cuándo se ejecuta
 *
 * IMPLEMENTACIONES APLICADAS:
 * - Sin dependencias: se ejecuta en CADA render (caro!)
 * - Con []: se ejecuta UNA SOLA VEZ al montar (fetch data)
 * - Con [contador]: se ejecuta cuando contador cambia (observar cambios)
 * - Cleanup function: return () => {} limpia efectos al desmontar
 * - Async/await: fetching de datos desde API (JSONPlaceholder)
 * - Document API: cambiar title del navegador
 * - setInterval: ejemplo de efecto que necesita cleanup
 *
 * PATRONES COMUNES:
 * 1. Fetch data al montar:
 *    useEffect(() => { fetch(...) }, [])
 * 2. Escuchar cambios:
 *    useEffect(() => { doSomething() }, [dependency])
 * 3. Cleanup (desuscribir):
 *    useEffect(() => { return () => cleanup() }, [])
 * 4. Múltiples efectos es OK:
 *    Es mejor tener varios useEffect específicos que uno grande
 *
 * REGLA DE ORO:
 * Si tu efecto usa un valor del componente, incluye en dependencias
 * Si no incluyes, puede causar bugs difíciles de encontrar
 */
