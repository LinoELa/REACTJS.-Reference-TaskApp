# 14 - useState Hook en React

## 📑 Índice

1. [Introducción](#introducción)
2. [¿Qué es useState?](#qué-es-usestate)
3. [Syntaxis Básica](#syntaxis-básica)
4. [Estado Simple](#estado-simple)
5. [Múltiples Estados](#múltiples-estados)
6. [Actualización con Función](#actualización-con-función)
7. [Estado Basado en Estado Anterior](#estado-basado-en-estado-anterior)
8. [Estado Objeto](#estado-objeto)
9. [Estado Array](#estado-array)
10. [Inputs Controlados](#inputs-controlados)
11. [Formularios](#formularios)
12. [Toggle Estado](#toggle-estado)
13. [Contadores y Operaciones](#contadores-y-operaciones)
14. [Lazy Initialization](#lazy-initialization)
15. [Errores Comunes](#errores-comunes-)
16. [Tips de Rendimiento](#tips-de-rendimiento-)
17. [Patrones Avanzados](#patrones-avanzados)
18. [Quick Reference](#quick-reference---resumen-visual)
19. [Próximos Temas](#próximos-temas)

---

## Introducción

**useState** es el Hook más fundamental y usado en React. Te permite agregar estado (mutable) a componentes funcionales sin necesidad de convertirlos a clases.

Antes de Hooks (React pre-16.8):
- Solo los componentes de clase podían tener estado
- Necesitabas `this.state` y `this.setState()`
- Código más verbose

Con **useState** (React 16.8+):
- Componentes funcionales pueden tener estado
- Sintaxis simple y clara
- Mejor composición de lógica

Aprenderemos:
- Cómo usar useState básicamente
- Gestión de múltiples estados
- Patrones comunes
- Errores a evitar
- Optimizaciones

---

## ¿Qué es useState?

**useState** es una función que React proporciona para agregar estado a componentes funcionales.

```jsx
import { useState } from 'react';

function Componente() {
  const [estado, setEstado] = useState(valorInicial);
  
  return (
    <div>
      <p>Valor actual: {estado}</p>
      <button onClick={() => setEstado(nuevoValor)}>
        Cambiar
      </button>
    </div>
  );
}
```

**Partes:**
- `estado`: variable que contiene el valor actual
- `setEstado`: función para actualizar el estado
- `valorInicial`: valor con el que comienza el estado
- `useState()`: Hook que retorna `[estado, setter]`

---

## Syntaxis Básica

### Destructuring

```jsx
const [valor, setValor] = useState(inicial);
```

**También puedes:**

```jsx
const estadoCompleto = useState(0);
const valor = estadoCompleto[0];      // 0
const setValor = estadoCompleto[1];   // función
```

### Tipos de datos iniciales

```jsx
// Número
const [count, setCount] = useState(0);

// String
const [nombre, setNombre] = useState('');

// Boolean
const [activo, setActivo] = useState(false);

// Array
const [items, setItems] = useState([]);

// Objeto
const [usuario, setUsuario] = useState({ name: '', email: '' });

// Null
const [datos, setDatos] = useState(null);
```

---

## Estado Simple

### Contador básico

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
      <button onClick={() => setCount(count - 1)}>
        Decrementar
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Contador;
```

### Toggle booleano

```jsx
function Switch() {
  const [encendido, setEncendido] = useState(false);

  return (
    <div>
      <p>Estado: {encendido ? 'ON' : 'OFF'}</p>
      <button onClick={() => setEncendido(!encendido)}>
        Toggle
      </button>
    </div>
  );
}
```

### Input de texto

```jsx
function InputNombre() {
  const [nombre, setNombre] = useState('');

  return (
    <div>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>Hola, {nombre || 'visitante'}!</p>
    </div>
  );
}
```

---

## Múltiples Estados

### Varios useState

```jsx
function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState('');

  return (
    <form>
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
      <input
        value={pais}
        onChange={(e) => setPais(e.target.value)}
        placeholder="País"
      />
    </form>
  );
}
```

### Alternativa: Estado objeto único

```jsx
function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: 0,
    pais: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input name="nombre" value={formData.nombre} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <input name="edad" type="number" value={formData.edad} onChange={handleChange} />
      <input name="pais" value={formData.pais} onChange={handleChange} />
    </form>
  );
}
```

**Ventajas del segundo enfoque:**
- ✅ Menos líneas de código
- ✅ Más fácil de pasar como prop
- ✅ Más fácil de guardar/enviar a API

---

## Actualización con Función

### Forma 1: Valor directo

```jsx
setCount(5);  // Asigna 5 directamente
```

### Forma 2: Función actualizadora

```jsx
setCount(prevCount => prevCount + 1);  // Basado en valor anterior
```

**¿Cuándo usar cada una?**

```jsx
function Contador() {
  const [count, setCount] = useState(0);

  // ✅ BIEN: Cuando necesitas el valor anterior
  const incrementar = () => setCount(prev => prev + 1);

  // ❌ MALO: Si lo llamas rápido dos veces
  const incrementarMalo = () => {
    setCount(count + 1);  // Puede perder actualizaciones
    setCount(count + 1);  // Ambas usan el mismo 'count'
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
```

---

## Estado Basado en Estado Anterior

### Ejemplo: Suma acumulativa

```jsx
function Suma() {
  const [total, setTotal] = useState(0);

  const sumar = (cantidad) => {
    // Opción 1: Usar función actualizadora (recomendado)
    setTotal(prevTotal => prevTotal + cantidad);
  };

  const restar = (cantidad) => {
    setTotal(prevTotal => prevTotal - cantidad);
  };

  return (
    <div>
      <p>Total: ${total}</p>
      <button onClick={() => sumar(10)}>+$10</button>
      <button onClick={() => restar(5)}>-$5</button>
    </div>
  );
}
```

### Múltiples actualizaciones

```jsx
function MultiUpdate() {
  const [count, setCount] = useState(0);

  const incrementarTresveces = () => {
    // Cada setCount usa el valor anterior del anterior
    setCount(prev => prev + 1);  // count = 1
    setCount(prev => prev + 1);  // count = 2
    setCount(prev => prev + 1);  // count = 3
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementarTresveces}>+3</button>
    </div>
  );
}
```

---

## Estado Objeto

### Actualizar objeto parcialmente

```jsx
function Perfil() {
  const [usuario, setUsuario] = useState({
    nombre: 'Juan',
    email: 'juan@example.com',
    edad: 25
  });

  // ✅ BIEN: Spread operator
  const actualizarNombre = (nuevoNombre) => {
    setUsuario(prev => ({ ...prev, nombre: nuevoNombre }));
  };

  // ❌ MAL: Mutar directo
  const actualizarNombreMalo = (nuevoNombre) => {
    usuario.nombre = nuevoNombre;  // ❌ Mutación
    setUsuario(usuario);           // ❌ React no detecta cambio
  };

  return (
    <div>
      <p>Nombre: {usuario.nombre}</p>
      <p>Email: {usuario.email}</p>
      <input
        value={usuario.nombre}
        onChange={(e) => actualizarNombre(e.target.value)}
      />
    </div>
  );
}
```

### Nested objects

```jsx
function Ubicacion() {
  const [datos, setDatos] = useState({
    usuario: {
      nombre: 'Ana',
      contacto: {
        ciudad: 'Madrid'
      }
    }
  });

  const cambiarCiudad = (nuevaCiudad) => {
    setDatos(prev => ({
      ...prev,
      usuario: {
        ...prev.usuario,
        contacto: {
          ...prev.usuario.contacto,
          ciudad: nuevaCiudad
        }
      }
    }));
  };

  return <div>{datos.usuario.contacto.ciudad}</div>;
}
```

---

## Estado Array

### Agregar elemento

```jsx
function ListaTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (textoTarea) => {
    const nuevaTarea = { id: Date.now(), texto: textoTarea };
    setTareas(prev => [...prev, nuevaTarea]);
  };

  return (
    <div>
      <button onClick={() => agregarTarea('Nueva tarea')}>Agregar</button>
      <ul>
        {tareas.map(t => <li key={t.id}>{t.texto}</li>)}
      </ul>
    </div>
  );
}
```

### Eliminar elemento

```jsx
function ListaConDelete() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const eliminarItem = (id) => {
    setItems(prev => prev.filter(item => item !== id));
  };

  return (
    <div>
      {items.map(item => (
        <div key={item}>
          {item}
          <button onClick={() => eliminarItem(item)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
```

### Actualizar elemento

```jsx
function ListaConUpdate() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'María' }
  ]);

  const cambiarNombre = (id, nuevoNombre) => {
    setUsuarios(prev => 
      prev.map(u => u.id === id ? { ...u, nombre: nuevoNombre } : u)
    );
  };

  return (
    <div>
      {usuarios.map(u => (
        <div key={u.id}>
          {u.nombre}
          <button onClick={() => cambiarNombre(u.id, 'Nuevo nombre')}>
            Cambiar
          </button>
        </div>
      ))}
    </div>
  );
}
```

---

## Inputs Controlados

### Input text

```jsx
function TextInput() {
  const [texto, setTexto] = useState('');

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe aquí"
      />
      <p>Escribiste: {texto}</p>
    </div>
  );
}
```

### Checkbox

```jsx
function CheckboxExample() {
  const [aceptarTerminos, setAceptarTerminos] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={aceptarTerminos}
          onChange={(e) => setAceptarTerminos(e.target.checked)}
        />
        Acepto los términos
      </label>
      <p>Estado: {aceptarTerminos ? 'Aceptado' : 'No aceptado'}</p>
    </div>
  );
}
```

### Select (dropdown)

```jsx
function SelectExample() {
  const [opcion, setOpcion] = useState('');

  return (
    <div>
      <select value={opcion} onChange={(e) => setOpcion(e.target.value)}>
        <option value="">Selecciona una opción</option>
        <option value="opt1">Opción 1</option>
        <option value="opt2">Opción 2</option>
        <option value="opt3">Opción 3</option>
      </select>
      <p>Seleccionaste: {opcion}</p>
    </div>
  );
}
```

### Textarea

```jsx
function TextareaExample() {
  const [mensaje, setMensaje] = useState('');

  return (
    <div>
      <textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        placeholder="Escribe tu mensaje"
      />
      <p>Caracteres: {mensaje.length}</p>
    </div>
  );
}
```

### Radio buttons

```jsx
function RadioExample() {
  const [genero, setGenero] = useState('otro');

  return (
    <div>
      <label>
        <input
          type="radio"
          value="masculino"
          checked={genero === 'masculino'}
          onChange={(e) => setGenero(e.target.value)}
        />
        Masculino
      </label>

      <label>
        <input
          type="radio"
          value="femenino"
          checked={genero === 'femenino'}
          onChange={(e) => setGenero(e.target.value)}
        />
        Femenino
      </label>

      <label>
        <input
          type="radio"
          value="otro"
          checked={genero === 'otro'}
          onChange={(e) => setGenero(e.target.value)}
        />
        Otro
      </label>
    </div>
  );
}
```

---

## Formularios

### Formulario completo

```jsx
import { useState } from 'react';

function FormularioRegistro() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    aceptaTerminos: false
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    setEnviado(true);
    
    // Reset del formulario
    setFormData({
      nombre: '',
      email: '',
      contraseña: '',
      aceptaTerminos: false
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />

      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />

      <input
        name="contraseña"
        type="password"
        value={formData.contraseña}
        onChange={handleChange}
        placeholder="Contraseña"
        required
      />

      <label>
        <input
          name="aceptaTerminos"
          type="checkbox"
          checked={formData.aceptaTerminos}
          onChange={handleChange}
        />
        Acepto los términos
      </label>

      <button type="submit" disabled={!formData.aceptaTerminos}>
        Registrarse
      </button>

      {enviado && <p>¡Formulario enviado!</p>}
    </form>
  );
}
```

---

## Toggle Estado

### Botón toggle

```jsx
function ToggleButton() {
  const [abierto, setAbierto] = useState(false);

  const toggle = () => setAbierto(prev => !prev);

  return (
    <div>
      <button onClick={toggle}>
        {abierto ? 'Cerrar' : 'Abrir'}
      </button>
      {abierto && <div>¡Menu abierto!</div>}
    </div>
  );
}
```

### Mostrar/Ocultar contraseña

```jsx
function MostrarContraseña() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <input
        type={mostrar ? 'text' : 'password'}
        placeholder="Contraseña"
      />
      <button onClick={() => setMostrar(prev => !prev)}>
        {mostrar ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
}
```

---

## Contadores y Operaciones

### Contador con múltiples botones

```jsx
function ContadorCompleto() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+1</button>
      <button onClick={() => setCount(prev => prev - 1)}>-1</button>
      <button onClick={() => setCount(prev => prev + 10)}>+10</button>
      <button onClick={() => setCount(prev => prev - 10)}>-10</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prev => -prev)}>Inverso</button>
    </div>
  );
}
```

### Carrito de compras

```jsx
function Carrito() {
  const [items, setItems] = useState([
    { id: 1, nombre: 'Laptop', precio: 1000, cantidad: 0 },
    { id: 2, nombre: 'Mouse', precio: 30, cantidad: 0 }
  ]);

  const agregarAlCarrito = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const total = items.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.nombre} - ${item.precio}</h3>
          <p>Cantidad: {item.cantidad}</p>
          <button onClick={() => agregarAlCarrito(item.id)}>Agregar</button>
        </div>
      ))}
      <h2>Total: ${total}</h2>
    </div>
  );
}
```

---

## Lazy Initialization

### Problema: Cálculo en cada render

```jsx
// ❌ MALO: expensiveCalculation() se ejecuta en CADA render
function Componente() {
  const [valor, setValor] = useState(expensiveCalculation());
}
```

### Solución: Funcion inicializadora

```jsx
// ✅ BIEN: expensiveCalculation() se ejecuta UNA SOLA VEZ
function Componente() {
  const [valor, setValor] = useState(() => {
    return expensiveCalculation();
  });
}
```

### Ejemplo real

```jsx
function LocalStorage() {
  // ✅ localStorage.getItem() se ejecuta solo una vez al montar
  const [nombre, setNombre] = useState(() => {
    return localStorage.getItem('nombre') || '';
  });

  const handleChange = (e) => {
    const valor = e.target.value;
    setNombre(valor);
    localStorage.setItem('nombre', valor);
  };

  return <input value={nombre} onChange={handleChange} />;
}
```

---

## Errores Comunes ⚠️

### 1. Mutar state directamente

❌ **MAL:**
```jsx
const [usuario, setUsuario] = useState({ nombre: 'Juan' });

usuario.nombre = 'María';  // ❌ Mutando state
setUsuario(usuario);       // ❌ React no detecta cambio
```

✅ **BIEN:**
```jsx
setUsuario(prev => ({ ...prev, nombre: 'María' }));
```

### 2. Actualizar state en bucle infinito

❌ **MAL:**
```jsx
function Componente() {
  const [count, setCount] = useState(0);

  setCount(count + 1);  // ❌ Bucle infinito!
  // setCount causa re-render → vuelve a correr → setCount de nuevo...

  return <p>{count}</p>;
}
```

✅ **BIEN:**
```jsx
import { useEffect } from 'react';

function Componente() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(prev => prev + 1);
  }, []); // Dependencias vacías = una sola vez

  return <p>{count}</p>;
}
```

### 3. Llamar setState fuera de componentes/Hooks

❌ **MAL:**
```jsx
// ❌ No puedes usar Hooks aquí
const [state, setState] = useState(0);

function Componente() {
  // ...
}
```

✅ **BIEN:**
```jsx
// ✅ Dentro del componente
function Componente() {
  const [state, setState] = useState(0);
}
```

### 4. Olvidar dependencias de useEffect

❌ **MAL:**
```jsx
useEffect(() => {
  setCount(count + 1);  // ❌ Usa 'count' pero no está en dependencias
}, []); // Array vacío = nunca se actualiza
```

✅ **BIEN:**
```jsx
useEffect(() => {
  setCount(count + 1);
}, [count]); // ✅ Incluye 'count' en dependencias
```

---

## Tips de Rendimiento 🚀

### 1. Separar estados que cambian por separado

```jsx
// ❌ MALO: Todo re-renderiza junto
const [formulario, setFormulario] = useState({
  nombre: '',
  email: '',
  messages: []
});

// Cambiar nombre → re-renderiza todo incluyendo messages

// ✅ BIEN: Estados separados
const [nombre, setNombre] = useState('');
const [email, setEmail] = useState('');
const [messages, setMessages] = useState([]);

// Cambiar nombre → solo re-renderiza lo de nombre
```

### 2. Usar React.memo para componentes hijos

```jsx
// Sin memo: hijo se re-renderiza aunque props no cambien
function Padre() {
  const [count, setCount] = useState(0);
  return <Hijo count={count} />;
}

function Hijo({ count }) {
  console.log('Hijo renderizado');
  return <div>{count}</div>;
}

// Con memo: hijo se re-renderiza solo si count cambia
const Hijo = React.memo(({ count }) => {
  console.log('Hijo renderizado');
  return <div>{count}</div>;
});
```

### 3. Usar useCallback para no recrear funciones

```jsx
function Padre() {
  const [count, setCount] = useState(0);

  // ❌ Crea nueva función en cada render
  const handleClick = () => console.log('clickeado');

  // ✅ Reutiliza la misma función
  const handleClickMemo = useCallback(() => {
    console.log('clickeado');
  }, []);

  return <Hijo onClick={handleClickMemo} />;
}
```

---

## Patrones Avanzados

### Custom Hook useForm

```jsx
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const reset = () => setValues(initialValues);

  return { values, handleChange, reset };
}

// Uso:
function MiFormulario() {
  const { values, handleChange, reset } = useForm({
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

### Custom Hook useLocalStorage

```jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      console.error(e);
    }
  };

  return [storedValue, setValue];
}

// Uso:
function App() {
  const [nombre, setNombre] = useLocalStorage('nombre', '');

  return (
    <input
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
    />
  );
}
```

---

## Quick Reference - Resumen Visual

```
┌──────────────────────────────────┐
│      USESTATE RÁPIDO             │
├──────────────────────────────────┤
│                                  │
│ const [estado, setEstado] =      │
│   useState(valorInicial);        │
│                                  │
│ setEstado(nuevoValor);           │
│ setEstado(prev => prev + 1);     │
│                                  │
│ NUNCA: estado = nuevoValor;      │
│        (mutación)                │
│                                  │
│ SIEMPRE: crear nuevo estado      │
│ - Objetos: {...prev, prop}       │
│ - Arrays: [...prev, new]         │
│                                  │
└──────────────────────────────────┘
```

### APIs de Entry

```jsx
// Básico
useState(valorInicial)

// Lazy init
useState(() => calcular())

// Reset
setEstado(valorInicial)

// Condicional
setEstado(condition ? valor : otro)

// Acumulativo
setEstado(prev => prev + incremento)
```

### Checklist de mejores prácticas

- ✅ ¿Usé función actualizadora para basarme en valor anterior?
- ✅ ¿Evité mutaciones de state?
- ✅ ¿Creé nuevos objetos/arrays al actualizar?
- ✅ ¿Separé estados que cambian por separado?
- ✅ ¿Un useState por dato independiente?
- ✅ ¿Considero Custom Hooks para lógica reutilizable?

---

## Próximos Temas

Cuando domine useState, aprenderá:

1. **useEffect** - Efectos secundarios y ciclo de vida
2. **useContext** - Estado global compartido
3. **useReducer** - Estado complejo con acciones
4. **Combinación de Hooks** - Patrones avanzados
5. **Custom Hooks** - Crear Hooks reutilizables
6. **Testing Hooks** - Jest y React Testing Library

---

**🎯 Recuerda:**

- **useState es para guardar datos que pueden cambiar**
- **Siempre crea nuevo estado, nunca mutes**
- **Una línea de useState por dato independiente**
- **Usa funcion actualizadora si necesitas valor anterior**
- **Para estado complejo, considera useReducer**

¡useState es tu herramienta fundamental en React! 🚀
