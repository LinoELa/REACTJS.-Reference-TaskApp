# 13 - Hooks en React

## 📑 Índice

1. [Introducción](#introducción)
2. [¿Qué son los Hooks?](#qué-son-los-hooks)
3. [Reglas de los Hooks](#reglas-de-los-hooks)
4. [useState - Gestionar Estado](#usestate---gestionar-estado)
5. [useEffect - Efectos Secundarios](#useeffect---efectos-secundarios)
6. [useContext - Compartir Estado](#usecontext---compartir-estado)
7. [useReducer - Estado Complejo](#usereducer---estado-complejo)
8. [useRef - Acceder al DOM](#useref---acceder-al-dom)
9. [useMemo - Optimizar Cálculos](#usememo---optimizar-cálculos)
10. [useCallback - Optimizar Funciones](#usecallback---optimizar-funciones)
11. [Custom Hooks - Reutilizar Lógica](#custom-hooks---reutilizar-lógica)
12. [Combinando Hooks](#combinando-hooks)
13. [Errores Comunes](#errores-comunes-)
14. [Tips de Rendimiento](#tips-de-rendimiento-)
15. [Quick Reference](#quick-reference---resumen-visual)
16. [Próximos Temas](#próximos-temas)

---

## Introducción

**Hooks** son funciones especiales de React que te permiten "enganchar" funcionalidades de React en componentes funcionales. Antes de React 16.8, solo los componentes de clase podían tener estado y ciclo de vida. Los Hooks cambiaron eso.

Aprenderemos:
- Qué son los Hooks y por qué son importantes
- Los Hooks básicos (useState, useEffect)
- Hooks para estado avanzado (useContext, useReducer)
- Hooks de optimización (useMemo, useCallback)
- Crear tus propios Hooks (Custom Hooks)
- Mejores prácticas

---

## ¿Qué son los Hooks?

**Hooks** son funciones que React proporciona para usar características de React sin escribir clases.

**Ventajas:**
- ✅ Código más simple y legible
- ✅ Reutilizar lógica entre componentes
- ✅ No necesitas clases
- ✅ Mejor separación de preocupaciones

**Tipos de Hooks:**

```
┌────────────────────────────────────┐
│          TIPOS DE HOOKS            │
├────────────────────────────────────┤
│                                    │
│ BÁSICOS (siempre usas)            │
│ • useState - Gestionar estado      │
│ • useEffect - Efectos laterales    │
│                                    │
│ CONTEXTO                           │
│ • useContext - Compartir datos     │
│                                    │
│ ESTADO AVANZADO                    │
│ • useReducer - Estado complejo     │
│ • useRef - Mantener valores        │
│                                    │
│ OPTIMIZACIÓN                       │
│ • useMemo - Cachear cálculos       │
│ • useCallback - Cachear funciones  │
│                                    │
│ CUSTOM                             │
│ • Tu propio Hook personalizado     │
│                                    │
└────────────────────────────────────┘
```

---

## Reglas de los Hooks

Los Hooks tienen reglas estrictas que debes seguir:

### ✅ Regla 1: Llama Hooks en el nivel superior

```jsx
// ✅ BIEN: Hook en el nivel superior
function Componente() {
  const [count, setCount] = useState(0);
  // ...
}

// ❌ MAL: Hook dentro de condicional
function Componente() {
  if (condition) {
    const [count, setCount] = useState(0); // ❌ ERROR
  }
}
```

### ✅ Regla 2: Llama Hooks solo desde componentes funcionales

```jsx
// ✅ BIEN: En componente funcional
function Componente() {
  const [count, setCount] = useState(0);
}

// ✅ BIEN: En Custom Hook
function useCustom() {
  const [count, setCount] = useState(0);
}

// ❌ MAL: En función normal
function funcionNormal() {
  const [count, setCount] = useState(0); // ❌ ERROR
}
```

---

## useState - Gestionar Estado

**useState** es el Hook más básico. Te permite agregar estado a componentes funcionales.

### Sintaxis básica

```jsx
const [valor, setValor] = useState(valorInicial);
```

- `valor`: el estado actual
- `setValor`: función para actualizar el estado
- `valorInicial`: valor con el que comienza

### Ejemplo simple

```jsx
import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

### Múltiples estados

```jsx
function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState(0);

  return (
    <div>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        placeholder="Edad"
      />
    </div>
  );
}
```

### setState con función (función actualizadora)

```jsx
function Contador() {
  const [count, setCount] = useState(0);

  // Actualización basada en estado anterior
  const incrementar = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementar}>+1</button>
    </div>
  );
}
```

---

## useEffect - Efectos Secundarios

**useEffect** te permite ejecutar efectos secundarios (fetch, setTimeout, cambiar DOM, etc.) en componentes funcionales.

### Sintaxis básica

```jsx
useEffect(() => {
  // Efecto: se ejecuta después de renderizar
  return () => {
    // Cleanup: se ejecuta antes de desmontar o antes del próximo efecto
  };
}, []); // Dependencias: cuándo ejecutar el efecto
```

### Sin dependencias (ejecuta en cada render)

```jsx
useEffect(() => {
  console.log('Se ejecuta en CADA render');
});
```

### Con array vacío (ejecuta una sola vez)

```jsx
useEffect(() => {
  console.log('Se ejecuta UNA SOLA VEZ al montar');
  fetch('https://api.example.com/data')
    .then(r => r.json())
    .then(data => console.log(data));
}, []); // Array vacío = una sola vez
```

### Con dependencias (ejecuta cuando dependen. cambian)

```jsx
function Usuario({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Se ejecuta cuando userId cambia
    fetch(`https://api.example.com/users/${userId}`)
      .then(r => r.json())
      .then(data => setUser(data));
  }, [userId]); // Depende de userId

  return <div>{user?.name}</div>;
}
```

### Cleanup (limpiar efectos)

```jsx
function Chat() {
  useEffect(() => {
    const subscription = chatAPI.subscribe();
    
    // Cleanup: desuscribirse al desmontar
    return () => {
      chatAPI.unsubscribe(subscription);
    };
  }, []);

  return <div>Chat</div>;
}
```

### useEffect para estado

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/todos')
      .then(r => r.json())
      .then(data => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? 'Cargando...' : todos.map(t => <div key={t.id}>{t.title}</div>)}
    </div>
  );
}
```

---

## useContext - Compartir Estado

**useContext** permite compartir estado entre componentes sin pasar props a través de cada nivel (prop drilling).

### Crear un Context

```jsx
import { createContext } from 'react';

export const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
}
```

### Usar el Context

```jsx
import { useContext } from 'react';
import { TemaContext } from './TemaContext';

function Boton() {
  const { tema, setTema } = useContext(TemaContext);

  return (
    <button
      style={{
        background: tema === 'claro' ? '#fff' : '#333',
        color: tema === 'claro' ? '#000' : '#fff'
      }}
      onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}
    >
      Cambiar tema
    </button>
  );
}
```

### Envolver la aplicación

```jsx
function App() {
  return (
    <TemaProvider>
      <Boton />
    </TemaProvider>
  );
}
```

---

## useReducer - Estado Complejo

**useReducer** es para estados más complejos con múltiples acciones. Es como Redux pero integrado en React.

### Sintaxis

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### Ejemplo: Contador

```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENTAR':
      return { count: state.count + 1 };
    case 'DECREMENTAR':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function Contador() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
```

### Ejemplo: TodoApp con useReducer

```jsx
function todoReducer(state, action) {
  switch(action.type) {
    case 'AGREGAR':
      return [...state, { id: Date.now(), texto: action.payload, completado: false }];
    case 'ELIMINAR':
      return state.filter(t => t.id !== action.payload);
    case 'MARCAR_COMPLETADO':
      return state.map(t => 
        t.id === action.payload ? { ...t, completado: !t.completado } : t
      );
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'AGREGAR', payload: 'Nueva tarea' })}>
        Agregar
      </button>
      {todos.map(todo => (
        <div key={todo.id}>
          <span style={{ textDecoration: todo.completado ? 'line-through' : 'none' }}>
            {todo.texto}
          </span>
          <button onClick={() => dispatch({ type: 'MARCAR_COMPLETADO', payload: todo.id })}>
            ✓
          </button>
          <button onClick={() => dispatch({ type: 'ELIMINAR', payload: todo.id })}>
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
```

---

## useRef - Acceder al DOM

**useRef** crea una referencia mutable que persiste entre renders, sin causar re-renders.

### Casos de uso

```jsx
import { useRef } from 'react';

// 1. Acceder a elementos del DOM
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Enfocar input</button>
    </>
  );
}

// 2. Mantener valor mutable que NO causa re-render
function Timer() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current++;
    console.log(countRef.current); // 1, 2, 3... NO causa re-render
  };

  return <button onClick={increment}>Incrementar (sin re-render)</button>;
}

// 3. Guardar ID de interval
function Stopwatch() {
  const intervalRef = useRef(null);
  const [time, setTime] = useState(0);

  const start = () => {
    intervalRef.current = setInterval(() => setTime(t => t + 1), 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <p>{time}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}
```

---

## useMemo - Optimizar Cálculos

**useMemo** memoriza un valor calculado para que no se recalcule en cada render.

### Sintaxis

```jsx
const valor = useMemo(() => {
  return calcularAlgoExpensivo();
}, [dependencias]);
```

### Ejemplo

```jsx
import { useMemo, useState } from 'react';

function ListaUsuarios({ usuarios, filtro }) {
  // ❌ Sin useMemo: se recalcula en CADA render
  // const usuariosFiltrados = usuarios.filter(u => 
  //   u.nombre.includes(filtro)
  // );

  // ✅ Con useMemo: se recalcula solo cuando usuarios o filtro cambia
  const usuariosFiltrados = useMemo(() => {
    console.log('Filtrando usuarios...');
    return usuarios.filter(u => u.nombre.includes(filtro));
  }, [usuarios, filtro]);

  return (
    <ul>
      {usuariosFiltrados.map(u => <li key={u.id}>{u.nombre}</li>)}
    </ul>
  );
}
```

---

## useCallback - Optimizar Funciones

**useCallback** memoriza una función para evitar que las funciones hijas se re-rendericen innecesariamente.

### Sintaxis

```jsx
const memoFuncion = useCallback(() => {
  // hacer algo
}, [dependencias]);
```

### Ejemplo

```jsx
import { useCallback, useState } from 'react';

function Padre() {
  const [count, setCount] = useState(0);

  // ❌ Sin useCallback: crea nueva función en cada render
  // const handleClick = () => console.log('Clickeado');

  // ✅ Con useCallback: la función se crea una sola vez
  const handleClick = useCallback(() => {
    console.log('Clickeado');
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <Hijo onClick={handleClick} />
    </>
  );
}

// Hijo usa React.memo para evitar re-render si props no cambian
const Hijo = React.memo(({ onClick }) => {
  console.log('Hijo renderizado');
  return <button onClick={onClick}>Click</button>;
});
```

---

## Custom Hooks - Reutilizar Lógica

**Custom Hooks** son funciones que reutilizan lógica de otros Hooks.

### Crear un Custom Hook

```jsx
// useFormulario.js
import { useState } from 'react';

export function useFormulario(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setValues(initialValues);
  };

  return { values, handleChange, reset };
}
```

### Usar el Custom Hook

```jsx
function Formulario() {
  const { values, handleChange, reset } = useFormulario({
    nombre: '',
    email: ''
  });

  return (
    <form>
      <input name="nombre" value={values.nombre} onChange={handleChange} />
      <input name="email" value={values.email} onChange={handleChange} />
      <button type="button" onClick={reset}>Limpiar</button>
    </form>
  );
}
```

### Otro ejemplo: useFetch

```jsx
// useFetch.js
import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Usado así:
function App() {
  const { data: posts, loading } = useFetch('https://api.example.com/posts');
  
  return loading ? 'Cargando...' : <div>{/* mostrar posts */}</div>;
}
```

---

## Combinando Hooks

Los Hooks se pueden combinar para crear comportamientos complejos.

### Ejemplo: Autosave con Debounce

```jsx
import { useState, useEffect, useRef } from 'react';

function Editor() {
  const [content, setContent] = useState('');
  const timerRef = useRef(null);

  useEffect(() => {
    // Limpiar timer anterior
    if (timerRef.current) clearTimeout(timerRef.current);

    // Crear nuevo timer (debounce)
    timerRef.current = setTimeout(() => {
      // Guardar en servidor
      console.log('Guardando:', content);
      fetch('/api/save', { method: 'POST', body: content });
    }, 1000);

    // Cleanup
    return () => clearTimeout(timerRef.current);
  }, [content]);

  return (
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Escribe aquí (se autoguarda)..."
    />
  );
}
```

---

## Errores Comunes ⚠️

### 1. Llamar Hooks dentro de condicionales

❌ **MAL:**
```jsx
function Componente() {
  if (condition) {
    const [state, setState] = useState(0); // ❌ ERROR
  }
}
```

✅ **BIEN:**
```jsx
function Componente() {
  const [state, setState] = useState(0);
  if (condition) {
    // usar state aquí
  }
}
```

### 2. Olvidar dependencias en useEffect

❌ **MAL:**
```jsx
useEffect(() => {
  fetchData(id); // usa id pero no está en dependencias
}, []); // ❌ id nunca se actualiza
```

✅ **BIEN:**
```jsx
useEffect(() => {
  fetchData(id);
}, [id]); // ✅ se ejecuta cuando id cambia
```

### 3. No actualizar estado correctamente

❌ **MAL:**
```jsx
const [user, setUser] = useState({ name: 'Juan' });
user.name = 'María'; // ❌ Mutando estado
setUser(user);
```

✅ **BIEN:**
```jsx
const [user, setUser] = useState({ name: 'Juan' });
setUser({ ...user, name: 'María' }); // ✅ Nuevo objeto
```

### 4. Crear Hooks sin seguir reglas

❌ **MAL:**
```jsx
function randomHook() {
  if (Math.random() > 0.5) {
    useState(0); // ❌ Orden inconsistente
  }
}
```

✅ **BIEN:**
```jsx
function myHook() {
  const [count, setCount] = useState(0); // ✅ Siempre mismo orden
  return [count, setCount];
}
```

---

## Tips de Rendimiento 🚀

### 1. Usar useCallback para props que se pasan a niños

```jsx
const memoCallback = useCallback(() => {
  // hacer algo
}, []);

return <Hijo callback={memoCallback} />;
```

### 2. Usar useMemo para cálculos costosos

```jsx
const resultado = useMemo(() => {
  return operacionPesada(datos);
}, [datos]);
```

### 3. Usar React.memo para componentes que no cambian

```jsx
export default React.memo(Componente);
```

### 4. Separar estados que cambian por separado

```jsx
// ❌ MAL: Todo se re-renderiza
const [nombre, setNombre] = useState('');
const [edad, setEdad] = useState(0);
const [ciudad, setCiudad] = useState('');

// ✅ BIEN: Cada estado independiente
const [user, setUser] = useState({ nombre: '', edad: 0, ciudad: '' });
```

---

## Quick Reference - Resumen Visual

```
┌──────────────────────────────────────────────────────┐
│                HOOKS RÁPIDO                          │
├──────────────────────────────────────────────────────┤
│                                                      │
│ useState(inicial)                                    │
│   → [valor, setValor]                                │
│                                                      │
│ useEffect(efecto, deps)                              │
│   → Ejecuta efecto cuando deps cambia                │
│                                                      │
│ useContext(Context)                                  │
│   → Obtiene valor del Context                        │
│                                                      │
│ useReducer(reducer, initial)                         │
│   → [estado, dispatch]                               │
│                                                      │
│ useRef(inicial)                                      │
│   → { current: valor }                               │
│                                                      │
│ useMemo(calcular, deps)                              │
│   → Valor memorizado                                 │
│                                                      │
│ useCallback(fn, deps)                                │
│   → Función memorizada                               │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### Flowchart: Elegir qué Hook usar

```
¿Necesitas guardar un valor que cambia?
  → SÍ → ¿Es estado simple?
         → SÍ → useState
         → NO → ¿Múltiples acciones?
                → SÍ → useReducer
                → NO → useState (multiple)

¿Necesitas hacer algo después de renderizar?
  → SÍ → useEffect

¿Necesitas compartir estado globalmente?
  → SÍ → useContext

¿Necesitas acceder al DOM directamente?
  → SÍ → useRef

¿Tienes un cálculo costoso?
  → SÍ → useMemo

¿Pasas funciones a componentes hijos?
  → SÍ → useCallback
```

---

## Próximos Temas

Cuando domine Hooks, aprenderá:

1. **Patrones Avanzados** - Composición de Hooks
2. **React Router** - Navegación en SPA
3. **State Management** - Redux, Zustand
4. **Testing** - Jest y React Testing Library
5. **Rendimiento** - Code splitting, lazy loading
6. **TypeScript + Hooks** - Type-safe Hooks

---

**🎯 Recuerda:**

- **Hooks solo en componentes funcionales y custom hooks**
- **Siempre en el nivel superior**
- **useEffect es tu herramienta para efectos laterales**
- **useContext para estado global simple**
- **useReducer para lógica compleja**

¡Los Hooks son la base moderna de React! 🚀