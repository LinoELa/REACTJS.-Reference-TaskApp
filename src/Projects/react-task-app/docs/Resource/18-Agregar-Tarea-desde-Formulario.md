# 18 - Agregar Tarea desde Formulario

## Objetivo
Implementar un formulario que permita a los usuarios agregar nuevas tareas a la lista de manera interactiva.

## Conceptos Clave

### 1. Componentes Necesarios
- **TaskForm.jsx**: Componente de formulario para capturar entrada del usuario
- **App.jsx**: Componente principal que gestiona el estado de tareas
- **TaskList.jsx**: Componente que renderiza la lista de tareas

### 2. Flujo de Datos (Unidireccional)

```
App.jsx (Estado)
    ↓
createTask() ← callback (función)
    ↓
TaskFormComponent (recibe createTask como prop)
    ↓
handleSubmit() → createTask({ title })
    ↓
setTasks() actualiza estado en App
    ↓
TaskListComponent recibe tasks actualizado
    ↓
Re-renderiza la lista
```

## Implementación

### TaskForm.jsx - Captura de Entrada

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

    // Enviar solo el título, App genera el ID
    createTask({ title });
    setTitle(""); // Limpiar campo
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

**Características:**
- Estado local `title` para el input
- Validación: No permite tareas vacías
- `handleSubmit()` previene recarga de página con `preventDefault()`
- Limpia el input después de enviar

### App.jsx - Gestión de Estado

```jsx
import { useEffect, useState } from "react";
import TaskListComponent from "./TaskList";
import tasksData from "./assets/seed/seedTasks";
import TaskFormComponent from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  // Función callback que actualiza el estado
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
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

**Responsabilidades:**
- Mantiene el estado central de `tasks`
- Define `createTask()` - único lugar donde se agregan tareas
- Propaga el estado a TaskList y el callback a TaskForm
- Genera IDs únicos para cada tarea

### TaskList.jsx - Renderizado de Lista

```jsx
function TaskListComponent({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return <div>No hay tareas disponibles</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskListComponent;
```

## Conceptos Importantes

### Props vs Estado
- **Estado (State)**: Datos que cambian y controlan el componente
  - Vive en `App.jsx`
  - Se actualiza con `setTasks()`
  
- **Props**: Datos que se pasan de padre a hijo
  - `tasks`: Array de tareas (de App → TaskList)
  - `createTask`: Función callback (de App → TaskForm)

### Event Handling
```jsx
<form onSubmit={handleSubmit}>      // Trigger: submit del formulario
<input onChange={(e) => setTitle(e.target.value)} />  // Trigger: cambio en input
```

### Validación
```jsx
if (!title.trim()) {
  alert("Por favor escribe una tarea");
  return;  // No ejecutar createTask si está vacío
}
```

## Flujo Completo de Ejecución

1. Usuario escribe texto en el input
   - `onChange` actualiza estado local `title`

2. Usuario hace click en "Agregar"
   - `onSubmit` dispara `handleSubmit()`

3. `handleSubmit()` valida y llama a `createTask()`
   - Pasa objeto `{ title: "Mi tarea" }`

4. `createTask()` en App actualiza `tasks`
   - Spread operator: `[...tasks, newTask]`
   - Re-renderiza componentes

5. TaskList recibe nuevo array y renderiza las tareas
   - Cada tarea tiene `key={task.id}` para identificación

6. Input se limpia: `setTitle("")`

## Lecciones Aprendidas

✅ **Single Responsibility**: Cada componente tiene un rol claro
✅ **Lifting State Up**: El estado vive en el componente más alto
✅ **Callbacks**: El formulario comunica cambios al padre
✅ **Validación**: Prevenir datos inválidos desde el inicio
✅ **Unidirectional Data Flow**: Los datos fluyen de arriba hacia abajo

## Próximos Pasos

- [ ] Agregar edición de tareas
- [ ] Agregar eliminación de tareas
- [ ] Marcar tareas como completadas
- [ ] Persistencia en localStorage
- [ ] Backend API integration
