# 05 - ECMAScript (ES6+) en React

---
## Indice de Contenidos
- [05 - ECMAScript (ES6+) en React](#05---ecmascript-es6-en-react)
  - [Indice de Contenidos](#indice-de-contenidos)
  - [📋 Resumen: Import vs Export](#-resumen-import-vs-export)
  - [✅ Checklist: Buenas prácticas](#-checklist-buenas-prácticas)
  - [¿Qué es ECMAScript?](#qué-es-ecmascript)
  - [📦 Módulos: Import y Export](#-módulos-import-y-export)
    - [¿Por qué usar módulos?](#por-qué-usar-módulos)
  - [📤 EXPORT: Compartir código desde un archivo](#-export-compartir-código-desde-un-archivo)
    - [1. Export Default (Exportación por defecto)](#1-export-default-exportación-por-defecto)
    - [2. Export Named (Exportación nombrada)](#2-export-named-exportación-nombrada)
    - [3. Mezclar Export Default y Named](#3-mezclar-export-default-y-named)
    - [4. Export de Variables y Constantes](#4-export-de-variables-y-constantes)
  - [📥 IMPORT: Traer código desde otros archivos](#-import-traer-código-desde-otros-archivos)
    - [1. Import Default](#1-import-default)
    - [2. Import Named](#2-import-named)
    - [3. Import Default + Named en el mismo archivo](#3-import-default--named-en-el-mismo-archivo)
    - [4. Import con Alias (as)](#4-import-con-alias-as)
    - [5. Import \* as (Namespace)](#5-import--as-namespace)
    - [6. Import de Módulos Externos](#6-import-de-módulos-externos)
  - [🎯 Patrones comunes en TaskApp](#-patrones-comunes-en-taskapp)
    - [Patrón 1: Componente Default + Constantes Nombradas](#patrón-1-componente-default--constantes-nombradas)
    - [Patrón 2: Hook Personalizado](#patrón-2-hook-personalizado)
    - [Patrón 3: Servicios con Múltiples Funciones](#patrón-3-servicios-con-múltiples-funciones)
    - [Patrón 4: Contexto Global](#patrón-4-contexto-global)
  - [🚀 Siguientes temas](#-siguientes-temas)


---

## 📋 Resumen: Import vs Export

| Acción               | Sintaxis                              | Ejemplo                                 |
| -------------------- | ------------------------------------- | --------------------------------------- |
| **Export Default**   | `export default elemento;`            | `export default TaskForm;`              |
| **Export Named**     | `export const/function nombre = ...;` | `export function loadTasks()`           |
| **Import Default**   | `import Nombre from './archivo';`     | `import TaskForm from './TaskForm'`     |
| **Import Named**     | `import { nombre } from './archivo';` | `import { loadTasks } from './service'` |
| **Import con Alias** | `import nombre as Alias from ...`     | `import TaskForm as TF from ...`        |
| **Import Namespace** | `import * as obj from './archivo';`   | `import * as service from './service'`  |
| **Import Múltiple**  | `import Default, { named } from ...`  | `import TaskForm, { MAX } from ...`     |

---

## ✅ Checklist: Buenas prácticas

- ✅ Use `export default` para **componentes principales**
- ✅ Use `export const/function` para **funciones, hooks, constantes reutilizables**
- ✅ **Organizar por carpetas**: `components/`, `hooks/`, `services/`, `constants/`
- ✅ **Usar alias** cuando haya conflictos de nombres
- ✅ **Centralizar constantes** en un archivo `constants.js`
- ✅ **Un componente por archivo** (generalmente)
- ❌ Evitar `export *` sin motivo
- ❌ No mezclar default y named exports sin necesidad
- ❌ Importaciones circulares (Archivo A importa B, B importa A)




---
## ¿Qué es ECMAScript?

ECMAScript (ES) es el estándar de JavaScript. **ES6 (ES2015)** fue una actualización mayor que introdujo sintaxis moderna y características que se usan extensamente en React. Las características principales incluyen **módulos (import/export)**, arrow functions, `const/let`, destructuring, y mucho más.

En el contexto de React y TaskApp, nos enfocamos en:
- **Módulos**: Importar y exportar código entre archivos
- **Sintaxis moderna**: Variables con `const/let`, arrow functions, spread operator
- **Destructuring**: Extraer valores de objetos y arrays

---

## 📦 Módulos: Import y Export

Los módulos permiten **organizar el código en archivos separados** y reutilizarlos en diferentes partes de la aplicación. Cada archivo es un módulo independiente.

### ¿Por qué usar módulos?

- **Organización**: Código más limpio y estructurado
- **Reutilización**: Importa el mismo componente en múltiples lugares
- **Mantenimiento**: Cambios en un archivo no afectan otros innecesariamente
- **Escalabilidad**: Fácil agregar nuevas funcionalidades

---

## 📤 EXPORT: Compartir código desde un archivo

### 1. Export Default (Exportación por defecto)

Cada archivo **solo puede tener un `export default`**. Es útil cuando el archivo tiene **un único elemento principal** a compartir.

```javascript
// ✅ archivo: TaskForm.js
function TaskForm({ onAdd }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onAdd("Nueva tarea");
    }}>
      <input type="text" placeholder="Nueva tarea" />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;
```

**En otro archivo:**
```javascript
// Importar como quieras (el nombre no importa)
import TaskForm from './components/TaskForm';
import FormularioTareas from './components/TaskForm'; // ✅ También funciona
```

### 2. Export Named (Exportación nombrada)

Permite exportar **múltiples elementos** desde un archivo. Cada elemento tiene un nombre específico que debe coincidir al importar.

```javascript
// ✅ archivo: taskService.js
export function loadTasks() {
  const stored = localStorage.getItem('tasks');
  return stored ? JSON.parse(stored) : [];
}

export function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const MAX_TASKS = 100;
```

**En otro archivo:**
```javascript
// Importar elementos específicos
import { loadTasks, saveTasks, MAX_TASKS } from './services/taskService';

// Usar las funciones
const misTareas = loadTasks();
saveTasks(misTareas);
console.log(`Máximo de tareas: ${MAX_TASKS}`);
```

### 3. Mezclar Export Default y Named

Un archivo puede tener **un default y múltiples named exports**:

```javascript
// ✅ archivo: helpers.js
export default function formatJson(obj) {
  return JSON.stringify(obj, null, 2);
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function parseError(error) {
  return error.message || 'Error desconocido';
}
```

**En otro archivo:**
```javascript
import formatJson, { validateEmail, parseError } from './helpers';

// El default es formatJson, los otros son named
const json = formatJson({ nombre: 'Tarea' });
const esValido = validateEmail('test@example.com');
```

### 4. Export de Variables y Constantes

```javascript
// ✅ archivo: constants.js
export const API_URL = 'https://api.ejemplo.com';
export const LOCAL_STORAGE_KEY = 'tasks-app-data';
export const TASK_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  ARCHIVED: 'archived'
};

export let currentUser = null;

export function setCurrentUser(user) {
  currentUser = user;
}
```

---

## 📥 IMPORT: Traer código desde otros archivos

### 1. Import Default

Importa el `export default` de un archivo. **El nombre puede ser cualquiera**:

```javascript
// archivo: App.js
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import useTasks from './hooks/useTasks';

function App() {
  const { tasks, addTask } = useTasks();
  return (
    <>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </>
  );
}
```

### 2. Import Named

Importa elementos específicos exportados con `export const` o `export function`. **El nombre DEBE coincidir exactamente**:

```javascript
// Importar uno
import { loadTasks } from './services/taskService';

// Importar varios
import { loadTasks, saveTasks, MAX_TASKS } from './services/taskService';

// Usar en el componente
function App() {
  const tasks = loadTasks();
  console.log(`Máximo permitido: ${MAX_TASKS}`);
  return <div>Tareas: {tasks.length}</div>;
}
```

### 3. Import Default + Named en el mismo archivo

```javascript
// archivo: App.js
import TaskForm, { MAX_TASKS } from './components/TaskForm';

// TaskForm es el default, MAX_TASKS es named
```

### 4. Import con Alias (as)

Renombra los imports para evitar conflictos o usar nombres más cortos:

```javascript
// Dar un alias a un default import
import TF from './components/TaskForm'; // TF = TaskForm

// Dar alias a named imports
import { loadTasks as cargarTareas, saveTasks as guardarTareas } from './services/taskService';

// Usar los alias
const misTareas = cargarTareas();
guardarTareas(misTareas);
```

### 5. Import * as (Namespace)

Importa **todos los exports nombrados** en un objeto:

```javascript
// archivo: taskService.js
export function loadTasks() { ... }
export function saveTasks(tasks) { ... }
export const MAX_TASKS = 100;

// En otro archivo:
import * as taskService from './services/taskService';

// Acceder como propiedades del objeto
const tasks = taskService.loadTasks();
taskService.saveTasks(tasks);
console.log(taskService.MAX_TASKS);
```

### 6. Import de Módulos Externos

React y librerías externas se importan igual:

```javascript
// Librerías del proyecto
import React, { useState, useEffect } from 'react';

// Módulos propios
import TaskForm from './components/TaskForm';

// Combinar ambas
import React from 'react';
import { useState } from 'react';
```

---

## 🎯 Patrones comunes en TaskApp

### Patrón 1: Componente Default + Constantes Nombradas

```javascript
// ✅ archivo: TaskItem.js
import { TASK_STATUS } from '../constants';

export default function TaskItem({ task, onToggle, onDelete }) {
  const isCompleted = task.status === TASK_STATUS.COMPLETED;
  
  return (
    <div className={`task-item ${isCompleted ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={isCompleted}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
}
```

### Patrón 2: Hook Personalizado

```javascript
// ✅ archivo: hooks/useTasks.js
import { useState } from 'react';

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  return { tasks, addTask };
}

// En el componente:
import useTasks from '../hooks/useTasks';

function App() {
  const { tasks, addTask } = useTasks();
  return <div>Tienes {tasks.length} tareas</div>;
}
```

### Patrón 3: Servicios con Múltiples Funciones

```javascript
// ✅ archivo: services/taskService.js
import { LOCAL_STORAGE_KEY } from '../constants';

export function loadTasks() {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveTasks(tasks) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}

export function deleteTask(tasks, taskId) {
  return tasks.filter(t => t.id !== taskId);
}

// En el componente:
import { loadTasks, saveTasks } from '../services/taskService';

function App() {
  const tasks = loadTasks();
  // hacer cambios...
  saveTasks(tasks);
}
```

### Patrón 4: Contexto Global

```javascript
// ✅ archivo: context/TaskContext.js
import React, { createContext } from 'react';
import useTasks from '../hooks/useTasks';

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const { tasks, addTask, deleteTask } = useTasks();

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

// En el componente:
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskList() {
  const { tasks, deleteTask } = useContext(TaskContext);
  return <ul>{tasks.map(t => ...)}</ul>;
}
```


## 🚀 Siguientes temas

- Variables con `const/let` vs `var`
- Arrow functions `() => {}`
- Destructuring de objetos y arrays
- Spread operator `...`
- Template literals `` `string ${variable}` ``
