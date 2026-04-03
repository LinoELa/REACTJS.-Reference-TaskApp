# Arquitectura: Task App con React

> Documento que describe la estructura y organización del código de la aplicación de tareas.

---

## 📋 Resumen ejecutivo

| Aspecto                  | Detalle                             |
| ------------------------ | ----------------------------------- |
| **Proyecto**             | Task App (Todo App educativa)       |
| **Stack**                | React, Create React App, JavaScript |
| **Puerto**               | 3000 (desarrollo)                   |
| **Punto de entrada**     | `src/index.js` → `src/App.js`       |
| **Estado**               | MVP en desarrollo                   |
| **Complejidad objetivo** | Simple y educativa (no enterprise)  |

---

## 📁 Estructura de carpetas

```text
src/
├── components/              # Componentes funcionales reutilizables
│   ├── TaskForm.js         # Formulario para crear tareas
│   ├── TaskItem.js         # Componente de una tarea individual
│   └── TaskList.js         # Lista que renderiza todas las tareas
│
├── hooks/                  # Lógica reutilizable con hooks
│   └── useTasks.js         # Hook personalizado para manejo de tareas
│
├── services/               # Funciones de utilidad y APIs
│   └── taskService.js      # Funciones para localStorage o APIs externas
│
├── context/                # Estado global (Fase 2 del curso)
│   └── TaskContext.js      # Contexto para compartir estado entre componentes
│
├── App.js                  # Componente raíz de la aplicación
├── App.css                 # Estilos globales
├── index.js                # Punto de entrada de React
└── index.css               # Estilos base del proyecto
```

---

## 🎯 Responsabilidad de cada carpeta

### `components/`
Componentes React funcionales que renderean la interfaz.

- **TaskForm.js**: Formulario con input y botón para crear tareas
- **TaskItem.js**: Renderiza una tarea individual (checkbox, texto, botón eliminar)
- **TaskList.js**: Mapea un array de tareas y las renderiza con TaskItem

```javascript
// Ejemplo: TaskItem.js
export function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <input 
        type="checkbox" 
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
}
```

### `hooks/`
Lógica reutilizable en forma de hooks personalizados.

- **useTasks.js**: Encapsula createElement, crear, actualizar y eliminar tareas

```javascript
// Ejemplo: useTasks.js
export function useTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask };
}
```

### `services/`
Funciones de utilidad para APIs, localStorage o transformación de datos.

- **taskService.js**: Funciones para guardar/cargar tareas de localStorage o una API

```javascript
// Ejemplo: taskService.js
export const taskService = {
  loadTasks: () => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  },

  saveTasks: (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },

  // Más adelante: consumir API
  // fetchTasksFromAPI: async () => { ... }
};
```

### `context/`
Estado global con Context API (se agrega en fase 2 del curso).

- **TaskContext.js**: Contexto que proporciona estado de tareas a toda la app

```javascript
// Ejemplo: TaskContext.js (Fase 2)
export const TaskContext = React.createContext();

export function TaskProvider({ children }) {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
```

---

## 🔄 Flujo de datos

```
App.js
  ├─ useTasks() → maneja estado de tareas
  │
  ├─ TaskForm → User input → addTask()
  │
  └─ TaskList
      └─ TaskItem[] → renderiza cada tarea
          ├─ onClick checkbox → toggleTask(id)
          └─ onClick delete → deleteTask(id)
```

### Fase 1: Estado local en App.js
```javascript
function App() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <>
      <TaskForm onAdd={addTask} />
      <TaskList 
        tasks={tasks} 
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </>
  );
}
```

### Fase 2: Estado global con Context
```javascript
function App() {
  return (
    <TaskProvider>
      <Container />
    </TaskProvider>
  );
}

function Container() {
  const { tasks, addTask, toggleTask, deleteTask } = useContext(TaskContext);
  // igual que antes, pero datos vienen del contexto
}
```

---

## 📐 Principios de diseño

### 1. **Componentes pequeños y enfocados**
- `TaskItem` solo renderiza 1 tarea
- `TaskForm` solo maneja el formulario
- `TaskList` solo mapea el array

### 2. **Props descendentes**
- Padre pasa datos y funciones hacia abajo
- Hijo no accede directamente al estado del padre
- Ejemplo: `<TaskItem task={task} onDelete={onDelete} />`

### 3. **Lógica separada de renderizado**
- `useTasks` = lógica pura
- `TaskItem` = renderizado puro
- `TaskService` = funciones de persistencia

### 4. **Escalable hacia Context API**
- La estructura permite agregar contexto sin refactorizar todo
- Cambiar de `useTasks()` local a `useContext(TaskContext)` es trivial

---

## 🛠️ Decisiones técnicas

| Decisión                        | Razón                                        |
| ------------------------------- | -------------------------------------------- |
| **Componentes funcionales**     | Son el estándar moderno de React             |
| **useState, no Redux**          | MVP simple no necesita gestor global pesado  |
| **useTasks personalizado**      | Permite reutilizar lógica y facilita testing |
| **localStorage inicialmente**   | Sin backend hasta que lo requiera el curso   |
| **CSS simple, no Tailwind aún** | Aprende React primero, estilos después       |

---

## 📝 Convenciones de nombres

| Tipo                    | Formato             | Ejemplo                         |
| ----------------------- | ------------------- | ------------------------------- |
| Archivos de componentes | `PascalCase.js`     | `TaskForm.js`, `TaskItem.js`    |
| Archivos de hooks       | `camelCase.js`      | `useTasks.js`                   |
| Archivos de servicios   | `camelCase.js`      | `taskService.js`                |
| Funciones               | `camelCase()`       | `addTask()`, `toggleTask()`     |
| Variables booleanas     | `is` o `has` prefix | `isCompleted`, `hasItems`       |
| Manejadores de eventos  | `on` + Acción       | `onDelete`, `onToggle`, `onAdd` |

---

## ✅ Checklist para el desarrollo

Cuando agregues una nueva feature, verifica:

- ☐ ¿El componente es pequeño y enfocado? (máx ~50 líneas)
- ☐ ¿La lógica está en `useTasks` o `taskService`, no en el componente?
- ☐ ¿Los props tienen nombres claros (`onDelete`, `task`)?
- ☐ ¿Probaste el componente en el navegador?
- ☐ ¿Documentaste cambios en este archivo si es estructura nueva?

---

## 🚀 Roadmap de refactorización

| Etapa  | Cambios                                    |
| ------ | ------------------------------------------ |
| **v1** | Estado local en App.js con hooks           |
| **v2** | Agregar Context API para estado global     |
| **v3** | Consumir API REST en lugar de localStorage |
| **v4** | Agregar estilos con Tailwind o similar     |
| **v5** | Deploy en Github Pages                     |

---

## 📚 Referencia rápida

**Pasar datos al componente hijo:**
```javascript
<TaskItem task={task} onDelete={handleDelete} />
```

**Recibir props en el hijo:**
```javascript
export function TaskItem({ task, onDelete }) { ... }
```

**Actualizar estado sin mutar:**
```javascript
setTasks(tasks.map(t => t.id === id ? {...t, completed: !t.completed} : t))
```

**Crear un hook personalizado:**
```javascript
export function useTasks() {
  // lógica aquí
  return { tasks, addTask, ... };
}
```