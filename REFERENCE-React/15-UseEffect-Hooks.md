# 15 - useEffect Hook en React

## 📑 Índice

- [15 - useEffect Hook en React](#15---useeffect-hook-en-react)
  - [📑 Índice](#-índice)
  - [Introducción](#introducción)
  - [¿Qué es useEffect?](#qué-es-useeffect)
  - [Sintaxis Básica](#sintaxis-básica)
  - [Array de Dependencias](#array-de-dependencias)
  - [Sin Dependencias (Cada Render)](#sin-dependencias-cada-render)
  - [Con Array Vacío (Una Sola Vez)](#con-array-vacío-una-sola-vez)
  - [Con Dependencias (Cambios Específicos)](#con-dependencias-cambios-específicos)
  - [Cleanup Function](#cleanup-function)
  - [Ejemplos: Fetch de Datos](#ejemplos-fetch-de-datos)
    - [Básico con then()](#básico-con-then)
    - [Con async/await](#con-asyncawait)
    - [Con AbortController (cancelación)](#con-abortcontroller-cancelación)
  - [Ejemplos: Event Listeners](#ejemplos-event-listeners)
  - [Ejemplos: Timers e Intervals](#ejemplos-timers-e-intervals)
    - [setTimeout (ejecuta una vez después de delay)](#settimeout-ejecuta-una-vez-después-de-delay)
    - [setInterval (ejecuta repetidamente)](#setinterval-ejecuta-repetidamente)
  - [Múltiples useEffect](#múltiples-useeffect)
  - [useEffect vs Ciclo de Vida](#useeffect-vs-ciclo-de-vida)
  - [Errores Comunes ⚠️](#errores-comunes-️)
    - [1. Olvidar dependencias](#1-olvidar-dependencias)
    - [2. Dependencias innecesarias](#2-dependencias-innecesarias)
    - [3. No limpiar listeners/timers](#3-no-limpiar-listenerstimers)
    - [4. Async directamente en useEffect](#4-async-directamente-en-useeffect)
  - [Tips de Rendimiento 🚀](#tips-de-rendimiento-)
    - [1. Especificar dependencias correctas](#1-especificar-dependencias-correctas)
    - [2. Mover objetos fuera de dependencias](#2-mover-objetos-fuera-de-dependencias)
    - [3. Usar useMemo si dependencia es costosa](#3-usar-usememo-si-dependencia-es-costosa)
  - [Patrones Avanzados](#patrones-avanzados)
    - [Custom Hook: useAsync](#custom-hook-useasync)
    - [Custom Hook: useMount](#custom-hook-usemount)
  - [Quick Reference - Resumen Visual](#quick-reference---resumen-visual)
    - [Flujo de ejecución](#flujo-de-ejecución)
    - [Checklist de mejores prácticas](#checklist-de-mejores-prácticas)
  - [Próximos Temas](#próximos-temas)

---

## Introducción

**useEffect** es un Hook que te permite realizar efectos secundarios (side effects) en componentes funcionales. Reemplaza los métodos de ciclo de vida como `componentDidMount`, `componentDidUpdate`, y `componentWillUnmount` de las clases.

**Efectos secundarios son:**
- Fetching de datos
- Suscripción a eventos
- Timers/Intervals
- Cambiar el DOM directamente
- LocalStorage
- Analytics

Aprenderemos:
- Cómo funciona useEffect
- El array de dependencias
- Cleanup y desuscripción
- Patrones comunes
- Optimizaciones

---

## ¿Qué es useEffect?

**useEffect** ejecuta código **después** de que React renderiza el componente.

```jsx
useEffect(() => {
  // Este código se ejecuta después de renderizar
  console.log('Componente renderizado');
});
```

**Características principales:**
- ✅ Se ejecuta después del render (no bloquea)
- ✅ Puede ejecutarse en cada render, una vez, o cuando dependencias cambian
- ✅ Soporta cleanup (limpieza)
- ✅ Diseñado para efectos secundarios

**Comparación: Dónde ejecutar código**

```jsx
// ❌ MAL: En el cuerpo del componente (ejecuta cada render, bloqueador)
function Componente() {
  fetch('/datos');  // Fetch cada render!
  return <div>...</div>;
}

// ✅ BIEN: En useEffect (eficiente, desestructurado)
function Componente() {
  useEffect(() => {
    fetch('/datos');
  }, []);  // Una sola vez
  return <div>...</div>;
}
```

---

## Sintaxis Básica

```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Efecto: código que se ejecuta después de renderizar
  
  // Opcional: retorna cleanup
  return () => {
    // Cleanup: se ejecuta antes de desmontar o antes del próximo efecto
  };
}, []); // Dependencias: cuándo ejecutar el efecto
```

**Partes:**
1. **Función de efecto** - código a ejecutar
2. **Cleanup function** (opcional) - código de limpieza
3. **Array de dependencias** (opcional) - cuándo ejecutar

---

## Array de Dependencias

El array de dependencias controla cuándo se ejecuta el efecto:

```jsx
// Sin array: ejecuta en CADA render
useEffect(() => {
  console.log('Cada render');
});

// Array vacío []: ejecuta UNA SOLA VEZ (mount)
useEffect(() => {
  console.log('Solo al montar');
}, []);

// Con dependencias: ejecuta cuando dependen. cambian
useEffect(() => {
  console.log('Cuando id cambia');
}, [id]);

// Múltiples dependencias
useEffect(() => {
  console.log('Cuando id o nombre cambia');
}, [id, nombre]);
```

---

## Sin Dependencias (Cada Render)

```jsx
function Componente() {
  const [count, setCount] = useState(0);

  // ❌ CARO: se ejecuta en CADA render
  useEffect(() => {
    console.log('Rendered! Count:', count);
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

**Uso:** Raramente. Solo cuando necesitas hacer algo en cada render.

---

## Con Array Vacío (Una Sola Vez)

```jsx
function Componente() {
  const [usuarios, setUsuarios] = useState([]);

  // ✅ Se ejecuta UNA SOLA VEZ al montar (componente entra al DOM)
  useEffect(() => {
    fetch('/api/usuarios')
      .then(r => r.json())
      .then(data => setUsuarios(data));
  }, []); // Array vacío = mount

  return (
    <ul>
      {usuarios.map(u => <li key={u.id}>{u.nombre}</li>)}
    </ul>
  );
}
```

**Casos comunes:**
- ✅ Fetch de datos inicial
- ✅ Setup de event listeners
- ✅ LocalStorage inicial
- ✅ Inicialización una sola vez

---

## Con Dependencias (Cambios Específicos)

```jsx
function Perfil({ usuarioId }) {
  const [usuario, setUsuario] = useState(null);

  // Se ejecuta al montar Y cuando usuarioId cambia
  useEffect(() => {
    fetch(`/api/usuarios/${usuarioId}`)
      .then(r => r.json())
      .then(data => setUsuario(data));
  }, [usuarioId]); // Depende de usuarioId

  return usuario ? <h1>{usuario.nombre}</h1> : <p>Cargando...</p>;
}
```

**Regla de oro:**
> Si tu efecto usa un valor del componente, inclúyelo en dependencias.

---

## Cleanup Function

La cleanup function se ejecuta:
- Antes de desmontar el componente
- Antes de que se ejecute el próximo efecto
- Para limpiar listeners, timers, suscripciones

```jsx
function Chat() {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    // Setup: suscribirse
    const unsubscribe = chatAPI.subscribe(nuevosMensajes => {
      setMensajes(nuevosMensajes);
    });

    // Cleanup: desuscribirse
    return () => {
      unsubscribe();
    };
  }, []);

  return <div>{mensajes.map(m => <p key={m.id}>{m.texto}</p>)}</div>;
}
```

**Otro ejemplo: Event Listener**

```jsx
function Ventana() {
  useEffect(() => {
    // Setup
    const handleResize = () => console.log('Ventana redimensionada');
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>Redimensiona la ventana</div>;
}
```

---

## Ejemplos: Fetch de Datos

### Básico con then()

```jsx
function UsuariosList() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) throw new Error('Error en respuesta');
        return response.json();
      })
      .then(data => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {usuarios.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

### Con async/await

```jsx
function UsuariosListAsync() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <ul>
      {usuarios.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

### Con AbortController (cancelación)

```jsx
function BusquedaProductos({ searchTerm }) {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const buscar = async () => {
      try {
        const response = await fetch(
          `/api/productos?q=${searchTerm}`,
          { signal: controller.signal }
        );
        const data = await response.json();
        setResultados(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error:', error);
        }
      }
    };

    buscar();

    // Cancelar si cambia searchTerm o desmonta
    return () => controller.abort();
  }, [searchTerm]);

  return (
    <ul>
      {resultados.map(p => <li key={p.id}>{p.nombre}</li>)}
    </ul>
  );
}
```

---

## Ejemplos: Event Listeners

```jsx
function Posicion() {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosicion({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <p>Posición del mouse: ({posicion.x}, {posicion.y})</p>
    </div>
  );
}
```

---

## Ejemplos: Timers e Intervals

### setTimeout (ejecuta una vez después de delay)

```jsx
function Temporizador() {
  const [segundos, setSegundos] = useState(5);

  useEffect(() => {
    if (segundos <= 0) return;

    const timer = setTimeout(() => {
      setSegundos(s => s - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [segundos]);

  return <p>Tiempo restante: {segundos}s</p>;
}
```

### setInterval (ejecuta repetidamente)

```jsx
function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Hora: {hora.toLocaleTimeString()}</p>;
}
```

---

## Múltiples useEffect

Es mejor tener múltiples `useEffect` específicos que uno grande y complejo:

```jsx
function Componente({ userId }) {
  // Efecto 1: Fetch de usuario
  useEffect(() => {
    fetch(`/api/usuarios/${userId}`)
      .then(r => r.json())
      .then(user => console.log('Usuario:', user));
  }, [userId]);

  // Efecto 2: Setup de listeners
  useEffect(() => {
    const handleResize = () => console.log('Resized');
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Efecto 3: Cambiar título
  useEffect(() => {
    document.title = `Usuario ${userId}`;
  }, [userId]);

  return <div>Componente</div>;
}
```

**Ventajas:**
- Cada efecto tiene una responsabilidad
- Más fácil de debuggear
- Más fácil de mantener

---

## useEffect vs Ciclo de Vida

**Componentes de clase:**

```jsx
class Componente extends React.Component {
  componentDidMount() {
    // Al montar
    fetch('/datos');
  }

  componentDidUpdate(prevProps, prevState) {
    // Después de actualizar
    if (prevProps.id !== this.props.id) {
      fetch(`/datos/${this.props.id}`);
    }
  }

  componentWillUnmount() {
    // Al desmontar
    this.cleanup();
  }

  render() {
    return <div>...</div>;
  }
}
```

**Componentes funcionales con useEffect:**

```jsx
function Componente({ id }) {
  // Mount + Update (cuando id cambia)
  useEffect(() => {
    fetch(`/datos/${id}`);
  }, [id]);

  // Mount
  useEffect(() => {
    console.log('Montado');
  }, []);

  // Unmount
  useEffect(() => {
    return () => {
      console.log('Desmontado');
      this.cleanup();
    };
  }, []);

  return <div>...</div>;
}
```

---

## Errores Comunes ⚠️

### 1. Olvidar dependencias

❌ **MAL:**
```jsx
useEffect(() => {
  console.log(count);  // Usa 'count'
}, []); // ❌ 'count' nunca se actualiza
```

✅ **BIEN:**
```jsx
useEffect(() => {
  console.log(count);
}, [count]); // ✅ Incluye 'count'
```

### 2. Dependencias innecesarias

❌ **MAL:**
```jsx
const handleClick = () => console.log('click');

useEffect(() => {
  window.addEventListener('click', handleClick);
  return () => window.removeEventListener('click', handleClick);
}, [handleClick]); // ❌ 'handleClick' es nueva en cada render
```

✅ **BIEN:**
```jsx
useEffect(() => {
  const handleClick = () => console.log('click');
  window.addEventListener('click', handleClick);
  return () => window.removeEventListener('click', handleClick);
}, []); // ✅ Define handleClick dentro del efecto
```

### 3. No limpiar listeners/timers

❌ **MAL:**
```jsx
useEffect(() => {
  window.addEventListener('click', handleClick);
  // ❌ Listener se queda cuando desmonta
}, []);
```

✅ **BIEN:**
```jsx
useEffect(() => {
  window.addEventListener('click', handleClick);
  return () => {
    window.removeEventListener('click', handleClick);
  };
}, []);
```

### 4. Async directamente en useEffect

❌ **MAL:**
```jsx
useEffect(async () => {  // ❌ No puedes marcar useEffect como async
  const data = await fetch('/datos');
}, []);
```

✅ **BIEN:**
```jsx
useEffect(() => {
  const fetchData = async () => {
    const data = await fetch('/datos');
  };
  fetchData();
}, []);
```

---

## Tips de Rendimiento 🚀

### 1. Especificar dependencias correctas

```jsx
// ❌ Ejecuta en cada render
useEffect(() => {
  console.log('Se ejecutó');
});

// ✅ Ejecuta cuando id cambia
useEffect(() => {
  console.log('Se ejecutó');
}, [id]);

// ✅ Ejecuta una sola vez
useEffect(() => {
  console.log('Se ejecutó');
}, []);
```

### 2. Mover objetos fuera de dependencias

```jsx
// ❌ Crea nuevo objeto en cada render → ejecuta efecto siempre
const user = { id: 1, nombre: 'Juan' };
useEffect(() => {
  console.log(user.id);
}, [user]); // Nuevo objeto cada render!

// ✅ Usa solo el valor que necesitas
useEffect(() => {
  console.log(userId);
}, [userId]); // Ejecuta solo cuando userId cambia
```

### 3. Usar useMemo si dependencia es costosa

```jsx
// ❌ Cálculo costoso como dependencia
const objetos = items.map(i => ({ ...i }));
useEffect(() => {
  console.log(objetos);
}, [objetos]); // Recalcula siempre

// ✅ Memoizar el resultado
const objetos = useMemo(
  () => items.map(i => ({ ...i })),
  [items]
);
useEffect(() => {
  console.log(objetos);
}, [objetos]); // Solo cuando items cambia
```

---

## Patrones Avanzados

### Custom Hook: useAsync

```jsx
function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    setStatus('pending');
    setData(null);
    setError(null);
    try {
      const response = await asyncFunction();
      setData(response);
      setStatus('success');
      return response;
    } catch (error) {
      setError(error);
      setStatus('error');
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) execute();
  }, [execute, immediate]);

  return { execute, status, data, error };
}

// Uso:
function Usuarios() {
  const { data: usuarios, loading } = useAsync(
    () => fetch('/api/usuarios').then(r => r.json())
  );

  return (
    <div>
      {loading ? 'Cargando...' : usuarios.map(u => <div key={u.id}>{u.name}</div>)}
    </div>
  );
}
```

### Custom Hook: useMount

```jsx
function useMount(callback) {
  useEffect(callback, []);
}

// Uso:
function Componente() {
  useMount(() => {
    console.log('Componente montado');
    return () => console.log('Componente desmontado');
  });
}
```

---

## Quick Reference - Resumen Visual

```
┌──────────────────────────────────────┐
│      USEEFFECT RÁPIDO                │
├──────────────────────────────────────┤
│                                      │
│ SINTAXIS:                            │
│ useEffect(() => {                    │
│   // efecto                          │
│   return () => { /*cleanup*/ }       │
│ }, [dependencias])                   │
│                                      │
│ DEPENDENCIAS:                        │
│ • sin array: CADA render             │
│ • []: UNA VEZ (mount)                │
│ • [dep]: cuando dep cambia           │
│                                      │
│ CLEANUP:                             │
│ • return () => clean()               │
│ • Se ejecuta al desmontar            │
│ • Antes del próximo efecto           │
│                                      │
│ REGLA: Si usas un valor,             │
│ inclúyelo en dependencias            │
│                                      │
└──────────────────────────────────────┘
```

### Flujo de ejecución

```
Componente monta
        ↓
useEffect() se ejecuta
        ↓
Si hay dependencias:
  • Re-renders por cambios
  • Ejecuta cleanup del efecto anterior
  • Ejecuta nuevo efecto
        ↓
Componente desmonta
  • Ejecuta cleanup final
```

### Checklist de mejores prácticas

- ✅ ¿Incluí todas las dependencias necesarias?
- ✅ ¿Evité dependencias innecesarias?
- ✅ ¿Limpié listeners/timers/suscripciones?
- ✅ ¿Dividí en múltiples useEffect específicos?
- ✅ ¿Manejé errores de fetch?
- ✅ ¿Usé AbortController para cancelables?

---

## Próximos Temas

Cuando domine useEffect, aprenderá:

1. **useContext** - Estado global compartido
2. **useReducer** - Estado complejo con acciones
3. **Custom Hooks Avanzados** - Patrones reutilizables
4. **useMemo y useCallback** - Optimización de dependencias
5. **useRef** - Mantener valores entre renders
6. **Combinación de Hooks** - Patrones complejos

---

**🎯 Recuerda:**

- **useEffect = efectos secundarios después del render**
- **El array de dependencias controla cuándo ejecutar**
- **Siempre incluye las dependencias que usas**
- **Limpia listeners, timers, suscripciones**
- **Para async directa, crea función dentro del efecto**

¡useEffect es tu herramienta para sincronizar con el mundo externo! 🌍
