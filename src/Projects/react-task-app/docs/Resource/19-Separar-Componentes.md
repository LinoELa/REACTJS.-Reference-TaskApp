# 19 - Separar Componentes

## Objetivo
Refactorizar la estructura del proyecto para mejorar la organización y mantenibilidad, separando los componentes en carpetas temáticas y creando una estructura escalable.

## Estructura Anterior
```
src/
├── App.jsx
├── TaskForm.jsx         ❌ Raíz desorganizada
├── TaskList.jsx
└── assets/
```

## Estructura Nueva ✅

```
src/
├── App.jsx
├── components/
│   ├── tasks/              # Componentes de tareas
│   │   ├── TaskList.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskCard.jsx
│   └── data/               # Datos y configuración
│       └── TasksData.js
└── assets/
```

## Ventajas de esta Estructura

✅ **Escalabilidad**: Fácil agregar nuevos componentes
✅ **Mantenibilidad**: Cada componente en su lugar lógico
✅ **Claridad**: Estructura jerárquica clara
✅ **Reutilización**: Fácil compartir componentes
✅ **Separación de Responsabilidades**: Datos, UI, lógica separados

## Pasos de Migración

### 1. Crear Estructura de Carpetas

```bash
mkdir src/components
mkdir src/components/tasks
mkdir src/components/data
```

### 2. Mover Componentes

```bash
# Mover componentes a carpeta tasks
mv src/TaskList.jsx src/components/tasks/
mv src/TaskForm.jsx src/components/tasks/

# Crear datos en carpeta data
mv src/assets/seed/seedTasks.js src/components/data/TasksData.js
```

### 3. Actualizar Imports en App.jsx

**Antes:**
```jsx
import TaskListComponent from "./TaskList";
import tasksData from "./assets/seed/seedTasks";
import TaskFormComponent from "./TaskForm";
```

**Después:**
```jsx
import TaskListComponent from "./components/tasks/TaskList";
import tasksData from "./components/data/TasksData";
import TaskFormComponent from "./components/tasks/TaskForm";
```

### 4. App.jsx Actualizado

```jsx
// ================ IMPORTS ================
import { useEffect, useState } from "react";

import TaskListComponent from "./components/tasks/TaskList";
import tasksData from "./components/data/TasksData";
import TaskFormComponent from "./components/tasks/TaskForm";

// ================ APP PRINCIPAL COMPONENTE ================
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: task.title,
        description: task.description,
      },
    ]);
  }

  return (
    <div className="App">
      <h1>React Task App</h1>
      <TaskListComponent tasks={tasks} />
      <TaskFormComponent createTask={createTask} />
    </div>
  );
}

export default App;
```

## Componentes Separados

### components/tasks/TaskList.jsx
```jsx
import TaskCard from "./TaskCard";

function TaskListComponent({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return <div>No hay tareas disponibles</div>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskListComponent;
```

### components/tasks/TaskCard.jsx
```jsx
function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;
```

### components/tasks/TaskForm.jsx
```jsx
import { useState } from "react";

function TaskFormComponent({ createTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      alert("Por favor escribe una tarea");
      return;
    }

    createTask({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Nueva Tarea</h2>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Agregar (Guardar)</button>
    </form>
  );
}

export default TaskFormComponent;
```

### components/data/TasksData.js
```jsx
const tasksData = [
  {
    id: 1,
    title: "Aprender React",
    description: "Estudiar los conceptos fundamentales de React",
  },
  {
    id: 2,
    title: "Hacer un proyecto",
    description: "Crear una aplicación con React",
  },
  // ...más tareas
];

export default tasksData;
```

## Beneficios de Cada Carpeta

### `/components/tasks/`
- **Propósito**: Componentes UI relacionados con tareas
- **Contiene**: TaskList, TaskForm, TaskCard
- **Ventaja**: Agrupación lógica de componentes relacionados

### `/components/data/`
- **Propósito**: Datos, constantes y configuración
- **Contiene**: TasksData, posibles APIs, constantes
- **Ventaja**: Separación de datos de la lógica de UI

### `/src/`
- **Propósito**: Punto de entrada principal
- **Contiene**: App.jsx, main.jsx, index.css
- **Ventaja**: Limpio y enfocado en la orquestación

## Patrones Utilizados

### 1. **Container/Presentational Pattern**
- `App.jsx` = Container (gestiona estado)
- `TaskList`, `TaskForm` = Presentational (solo renderiza)

### 2. **Separation of Concerns**
- Datos: `TasksData.js`
- Lógica: `App.jsx`
- Presentación: Componentes en `tasks/`

### 3. **Module Organization**
- Carpetas temáticas
- Imports claros
- Fácil de navegar

## Próximos Pasos

- [ ] Agregar carpeta `components/UI/` para componentes reutilizables
- [ ] Crear `components/hooks/` para custom hooks
- [ ] Agregar `components/utils/` para funciones auxiliares
- [ ] Implementar carpeta `styles/` para CSS modular
- [ ] Crear `pages/` para las diferentes vistas

## Lecciones Aprendidas

✅ La estructura importa para proyectos escalables
✅ Agrupar por funcionalidad, no por tipo
✅ Imports claros mejoran la legibilidad
✅ Fácil de expandir con nuevas funcionalidades