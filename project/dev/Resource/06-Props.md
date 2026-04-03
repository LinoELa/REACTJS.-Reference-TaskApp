# 06 - Props en React

---
## Índice de Contenidos

- [06 - Props en React](#06---props-en-react)
  - [Índice de Contenidos](#índice-de-contenidos)
  - [¿Qué son Props?](#qué-son-props)
    - [Analogía](#analogía)
  - [Características de Props](#características-de-props)
    - [1. Props son de Solo Lectura](#1-props-son-de-solo-lectura)
    - [2. Props Descienden (One-Way Data Flow)](#2-props-descienden-one-way-data-flow)
    - [3. Cambios en Props Causan Re-render](#3-cambios-en-props-causan-re-render)
  - [Tipos de Props comunes](#tipos-de-props-comunes)
    - [Props Simples (Primitivos)](#props-simples-primitivos)
    - [Props Complejos (Objetos y Arrays)](#props-complejos-objetos-y-arrays)
  - [Destructuring de Props](#destructuring-de-props)
    - [Opción 1: Sin Destructuring (Verbose)](#opción-1-sin-destructuring-verbose)
    - [Opción 2: Con Destructuring (Recomendado)](#opción-2-con-destructuring-recomendado)
    - [Opción 3: Destructuring Parcial + Rest](#opción-3-destructuring-parcial--rest)
  - [Props por defecto](#props-por-defecto)
    - [Opción 1: Parámetro por Defecto](#opción-1-parámetro-por-defecto)
    - [Opción 2: defaultProps](#opción-2-defaultprops)
  - [Props especiales](#props-especiales)
    - [1. children - Props implícita](#1-children---props-implícita)
    - [Casos de uso comunes](#casos-de-uso-comunes)
    - [2. key - Para listas](#2-key---para-listas)
    - [3. ref - Acceso directo al DOM](#3-ref---acceso-directo-al-dom)
  - [Validación de Props (PropTypes)](#validación-de-props-proptypes)
    - [¿Qué es PropTypes?](#qué-es-proptypes)
    - [¿Por qué es importante?](#por-qué-es-importante)
    - [Ejemplo de error que PropTypes detecta](#ejemplo-de-error-que-proptypes-detecta)
    - [Instalación](#instalación)
    - [Uso](#uso)
    - [Tipos comunes](#tipos-comunes)
    - [Ejemplo con validación completa](#ejemplo-con-validación-completa)
  - [🎯 Patrones comunes en TaskApp](#-patrones-comunes-en-taskapp)
    - [Patrón 1: Props Simples](#patrón-1-props-simples)
    - [Patrón 2: Props Destructuradas](#patrón-2-props-destructuradas)
    - [Patrón 3: Props con Valores por Defecto](#patrón-3-props-con-valores-por-defecto)
    - [Patrón 4: Componente Envoltorio (Wrapper)](#patrón-4-componente-envoltorio-wrapper)
    - [Patrón 5: Props de Callback](#patrón-5-props-de-callback)
  - [📋 Checklist: Buenas prácticas](#-checklist-buenas-prácticas)
  - [🚀 Siguientes temas](#-siguientes-temas)

---
## ¿Qué son Props?

**Props** (abreviación de "properties") son argumentos que se pasan a los componentes React. Son la forma principal de **pasar datos de un componente padre a un componente hijo**. Props son **de solo lectura** (immutable).

### Analogía

Imagina que un componente es una función:
```javascript
// Función normal
function sumar(a, b) {
  return a + b;
}
sumar(5, 3); // argumentos: 5, 3

// Componente React
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}
<Saludo nombre="Ela" /> // props: { nombre: "Ela" }
```

**Props** = argumentos del componente
**Valores de Props** = valores pasados al componente

---

## Características de Props

### 1. Props son de Solo Lectura
No puedes modificar directamente las props dentro del componente:

```javascript
// ❌ Incorrecto: No hagas esto
function TaskItem(props) {
  props.title = "Nuevo título"; // ❌ Error!
}

// ✅ Correcto: Usa variables locales
function TaskItem(props) {
  const [editedTitle, setEditedTitle] = useState(props.title);
  // Ahora puedes modificar editedTitle
}
```

### 2. Props Descienden (One-Way Data Flow)
Los datos fluyen del padre al hijo, nunca al revés:

```javascript
function App() {
  const tareas = ["Tarea 1", "Tarea 2"];
  return <TaskList tareas={tareas} />; // Padre → Hijo
}

function TaskList(props) {
  return <ul>{props.tareas.map(t => ...)}</ul>; // Recibe datos
}
```

### 3. Cambios en Props Causan Re-render
Cuando un prop cambia, el componente se renderiza nuevamente:

```javascript
function App() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <Contador valor={contador} /> {/* Se re-renderiza cuando contador cambia */}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </>
  );
}
```

---

## Tipos de Props comunes

### Props Simples (Primitivos)

```javascript
// String
<Welcome mensaje="Hola React" />

// Number
<TaskForm maxTarea={10} />

// Boolean
<Modal abierto={true} />

// Null/Undefined
<Component dato={null} />
```

### Props Complejos (Objetos y Arrays)

```javascript
// Objeto
const usuario = { nombre: "Ela", edad: 25 };
<Perfil usuario={usuario} />

// Array
const tareas = ["Tarea 1", "Tarea 2"];
<Lista tareas={tareas} />

// Función
<Boton onClick={handleClick} />

// JSX
<Contenedor contenido={<h1>Título</h1>} />
```

---

## Destructuring de Props

Es más limpio destructurar props en la firma del componente:

### Opción 1: Sin Destructuring (Verbose)

```javascript
function TaskItem(props) {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={props.completed}
        onChange={() => props.onToggle(props.id)}
      />
      <span>{props.text}</span>
      <button onClick={() => props.onDelete(props.id)}>Eliminar</button>
    </div>
  );
}
```

### Opción 2: Con Destructuring (Recomendado)

```javascript
function TaskItem({ id, text, completed, onToggle, onDelete }) {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
}
```

### Opción 3: Destructuring Parcial + Rest

```javascript
function TaskItem({ id, text, ...resto }) {
  // id y text están accesibles directamente
  // resto contiene { completed, onToggle, onDelete }
  return <div>{text}</div>;
}
```

---

## Props por defecto

Define valores por defecto cuando una prop no se pasa:

### Opción 1: Parámetro por Defecto

```javascript
function Saludo({ nombre = "Visitante", edad = 0 }) {
  return <p>Hola {nombre}, tienes {edad} años</p>;
}

<Saludo /> // Usa valores por defecto
<Saludo nombre="Ela" /> // nombre = "Ela", edad = 0 por defecto
<Saludo nombre="Ela" edad={25} /> // Ambos especificados
```

### Opción 2: defaultProps

```javascript
function Saludo({ nombre, edad }) {
  return <p>Hola {nombre}, tienes {edad} años</p>;
}

Saludo.defaultProps = {
  nombre: "Visitante",
  edad: 0
};
```

---

## Props especiales

### 1. children - Props implícita

`children` es una prop especial que contiene lo que está entre las etiquetas de apertura y cierre:

```javascript
// Definición
function Container({ children, titulo }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <div className="contenido">
        {children}
      </div>
    </div>
  );
}

// Uso
<Container titulo="Mi Contenedor">
  <p>Primer párrafo</p>
  <p>Segundo párrafo</p>
  <button>Click aquí</button>
</Container>

// "children" recibe:
// [<p>Primer párrafo</p>, <p>Segundo párrafo</p>, <button>Click aquí</button>]
```

### Casos de uso comunes

```javascript
// Modal
<Modal titulo="Confirmar">
  ¿Estás seguro de eliminar?
</Modal>

// Card
<Card>
  <h3>Título</h3>
  <p>Contenido</p>
</Card>

// Botón con icono
<Button icono={<Star />}>
  Favorito
</Button>
```

### 2. key - Para listas

`key` ayuda a React a identificar qué elementos cambiaron:

```javascript
// ❌ Incorrecto: Usar índice como key
function TaskList({ tareas }) {
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <li key={index}>{tarea.text}</li>
      ))}
    </ul>
  );
}

// ✅ Correcto: Usar ID único
function TaskList({ tareas }) {
  return (
    <ul>
      {tareas.map(tarea => (
        <li key={tarea.id}>{tarea.text}</li>
      ))}
    </ul>
  );
}
```

### 3. ref - Acceso directo al DOM

`ref` permite acceder directamente a elementos del DOM (avanzado):

```javascript
import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Enfocar Input</button>
    </>
  );
}
```

---

## Validación de Props (PropTypes)

### ¿Qué es PropTypes?

**PropTypes** es un paquete de validación que ayuda a verificar que los `props` que recibe un componente tengan el tipo correcto. Es como un "sistema de tipos" para React que detecta errores durante el desarrollo.

### ¿Por qué es importante?

PropTypes es **especialmente importante** por que:

- ✅ **Detecta errores temprano** - Si pases un prop del tipo incorrecto, verás un warning en la consola
- ✅ **Documentación automática** - Los propTypes sirven como documentación del componente
- ✅ **Debugging fácil** - Error clear en la consola te dice exactamente qué prop está mal
- ✅ **Solo en desarrollo** - Se elimina automáticamente en producción, sin impacto en performance
- ✅ **Previene bugs** - Evita errores como pasar un string cuando esperas un número

### Ejemplo de error que PropTypes detecta

```javascript
// ❌ Sin PropTypes: El componente acepta cualquier cosa
<TaskItem id="abc" text={123} completed="no" /> // Nadie te avisa que está mal

// ✅ Con PropTypes: Warnings claros en consola
<TaskItem id="abc" text={123} completed="no" /> 
// ⚠️ Warning: Failed prop type: Invalid prop `id` of type `string` supplied to `TaskItem`, expected `number`.
// ⚠️ Warning: Failed prop type: Invalid prop `text` of type `number` supplied to `TaskItem`, expected `string`.
// ⚠️ Warning: Failed prop type: Invalid prop `completed` of type `string` supplied to `TaskItem`, expected `boolean`.
```

### Instalación

```bash
npm install prop-types
```

Este paquete viene preinstalado en proyectos de **Create React App**, así que generalmente no necesitas instalarlo.

### Uso

```javascript
import PropTypes from 'prop-types';

function TaskItem({ id, text, completed, onToggle, onDelete }) {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,        // Número, obligatorio
  text: PropTypes.string.isRequired,      // String, obligatorio
  completed: PropTypes.bool.isRequired,   // Boolean, obligatorio
  onToggle: PropTypes.func.isRequired,    // Función, obligatoria
  onDelete: PropTypes.func.isRequired     // Función, obligatoria
};

// Si alguien pasa props incorrectos:
<TaskItem id="1" text={123} /> // ⚠️ Warnings en consola
```

### Tipos comunes

```javascript
PropTypes.string        // String
PropTypes.number        // Número
PropTypes.bool          // Boolean
PropTypes.func          // Función
PropTypes.array         // Array
PropTypes.object        // Objeto
PropTypes.node          // Cualquier elemento JSX
PropTypes.element       // Elemento React
PropTypes.arrayOf()     // Array de tipo específico
PropTypes.oneOf()       // Uno de varios valores
PropTypes.shape()       // Objeto con estructura específica
.isRequired             // Hace que sea obligatorio
```

### Ejemplo con validación completa

```javascript
import PropTypes from 'prop-types';

function Perfil({ nombre, edad, rol, habilidades }) {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>Edad: {edad}</p>
      <p>Rol: {rol}</p>
      <ul>
        {habilidades.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    </div>
  );
}

Perfil.propTypes = {
  nombre: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
  rol: PropTypes.oneOf(['admin', 'user', 'moderator']),
  habilidades: PropTypes.arrayOf(PropTypes.string).isRequired
};

Perfil.defaultProps = {
  rol: 'user'
};
```

---

## 🎯 Patrones comunes en TaskApp

### Patrón 1: Props Simples

```javascript
// ✅ TaskItem.js
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <input 
        type="checkbox" 
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>×</button>
    </div>
  );
}
```

### Patrón 2: Props Destructuradas

```javascript
// ✅ TaskForm.js
function TaskForm({ onAdd }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button>Agregar</button>
    </form>
  );
}
```

### Patrón 3: Props con Valores por Defecto

```javascript
// ✅ TaskList.js
function TaskList({ tareas = [], onToggle, onDelete, titulo = "Mis Tareas" }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <ul>
        {tareas.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
```

### Patrón 4: Componente Envoltorio (Wrapper)

```javascript
// ✅ Card.js
function Card({ titulo, children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <h3>{titulo}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Uso
<Card titulo="Tareas Completadas">
  <p>Felicidades, completaste todas tus tareas!</p>
</Card>
```

### Patrón 5: Props de Callback

```javascript
// ✅ App.js
function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  return (
    <div>
      <TaskForm onAdd={handleAddTask} />
      <TaskList 
        tareas={tasks}
        onToggle={handleToggleTask}
        onDelete={(id) => setTasks(tasks.filter(t => t.id !== id))}
      />
    </div>
  );
}
```

---

## 📋 Checklist: Buenas prácticas

- ✅ **Nombra props claramente**: `onDelete`, `isCompleted`, no `del`, `comp`
- ✅ **Destructura props** en la firma del componente
- ✅ **Define valores por defecto** para props opcionales
- ✅ **Usa PropTypes** para validación en desarrollo
- ✅ **Pasa callbacks como props**: `onDelete`, `onToggle`, `onAdd`
- ✅ **Usa `key` con ID único** en listas
- ✅ **children para componentes reutilizables**: Modal, Card, Container
- ❌ No modifiques props directamente
- ❌ No hagas props de más de 5-7 (considera refactorizar)
- ❌ No uses índice como `key` en listas dinámicas
- ❌ No pases funciones anónimas en cada render (usa useCallback)

---

## 🚀 Siguientes temas

- State (useState) - Datos que cambian dentro del componente
- useEffect - Efectos secundarios y ciclo de vida
- Hooks personalizados - Reutilizar lógica con hooks
- Context API - Pasar datos sin prop drilling
- Formularios en React - Inputs controlados
