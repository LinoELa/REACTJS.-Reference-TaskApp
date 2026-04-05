# React Task App - Lista de Tareas (17)

> **Última actualización:** 5 de abril de 2026

---

## 📋 Tabla de Contenidos

1. [Estado Actual](#-estado-actual)
2. [Estructura del Proyecto](#-estructura-del-proyecto)
3. [Stack Tecnológico](#%EF%B8%8F-stack-tecnológico)
4. [Avances Realizados](#-avances-realizados)
5. [Scripts Disponibles](#-scripts-disponibles)
6. [Componentes Actuales](#-componentes-actuales)
7. [Guía de Desarrollo](#-guía-de-desarrollo)

---

## 🎯 Estado Actual

**Estado:** 🚀 **EN DESARROLLO - FASE 1**

En esta fase estamos construyendo los componentes básicos de la **Lista de Tareas (TaskList)** con datos de semilla (seed data) para testing.

### Hitos Comenzados
- ✅ Componente `TaskList.jsx` creado
- ✅ Datos de semilla en `assets/seed/seedTasks.js`
- ✅ Scripts con modo watch habilitados
- ✅ Auto-reload (HMR) en desarrollo configurado
- ⏳ Lógica de tareas en progreso

---

## 📁 Estructura del Proyecto

```
react-task-app/
├── src/
│   ├── App.jsx                          # Componente principal
│   ├── TaskList.jsx                     # 🆕 Componente de lista de tareas
│   ├── main.jsx                         # Punto de entrada
│   ├── index.css                        # Estilos globales
│   └── assets/
│       └── seed/
│           └── seedTasks.js             # 🆕 Datos de prueba
├── public/                              # Archivos estáticos
├── package.json                         # Dependencias y scripts
├── vite.config.js                       # Configuración Vite
├── eslint.config.js                     # Configuración ESLint
├── index.html                           # HTML raíz
└── docs/
    ├── notes.md
    └── Resource/
        ├── 16-Basic-TaskApp.md
        └── 17-Lista-de-areas.md         # Este archivo
```

---

## 🛠️ Stack Tecnológico

### Dependencias de Producción
- **React:** v19.2.4
- **React-DOM:** v19.2.4

### Herramientas de Desarrollo
- **Vite:** v8.0.1 (Empaquetador y Bundle)
- **ESLint:** v9.39.4 (Linter)
- **@vitejs/plugin-react:** v6.0.1 (Plugin React para Vite)
- **eslint-plugin-react-hooks:** v7.0.1
- **eslint-plugin-react-refresh:** v0.5.2

### Características Habilitadas
- ✅ **HMR (Hot Module Replacement)** - Auto-reload en desarrollo
- ✅ **Fast Refresh** - Preserva estado al modificar componentes
- ✅ **Watch Mode** - Construcción automática en cambios
- ✅ **ESLint Watch** - Revisión automática de código

---

## ✅ Avances Realizados

### Fase 0: Configuración Base ✅
- ✅ Proyecto React con Vite inicializado
- ✅ Dependencias de React 19 instaladas
- ✅ ESLint configurado
- ✅ Estructura de carpetas creada

### Fase 1: Componentes Básicos (EN DESARROLLO)

#### 1. **TaskList.jsx** ✅
```javascript
import React from "react";
import tasks from "../src/assets/seed/seedTasks";

function TaskListComponent() {
  return <div>TaskList</div>;
}

export default TaskListComponent;
```

**Status:** Creado, lista para lógica de renderizado

#### 2. **seedTasks.js** ✅
Archivo con datos de prueba para llenar la aplicación sin dependencias externas.

**Estructura esperada:**
```javascript
const seedTasks = [
  { id: 1, title: "Aprender React", completed: false },
  { id: 2, title: "Crear componentes", completed: true },
  // ... más tareas
];

export default seedTasks;
```

### Scripts Mejorados ✅
- ✅ `npm run dev` ahora con `--host` para HMR completo
- ✅ `npm run watch` añadido para build continuo
- ✅ `npm run lint:watch` para verificación automática

---

## 🎮 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **dev** | `npm run dev` | ⚡ Inicia servidor con auto-reload |
| **watch** | `npm run watch` | 👀 Vigila cambios y reconstruye |
| **build** | `npm run build` | 🔨 Compila para producción |
| **lint** | `npm run lint` | ✓ Revisa código con ESLint |
| **lint:watch** | `npm run lint:watch` | 👀 ESLint automático |
| **preview** | `npm run preview` | 🔍 Previsualiza build |

### Recomendación de Desarrollo

**Opción 1: Desarrollo con Auto-Reload (RECOMENDADO)**
```bash
npm run dev
# Automáticamente recarga cambios en el navegador
```

**Opción 2: Con Watch para Errores**
```bash
# En Terminal 1
npm run dev

# En Terminal 2
npm run lint:watch
```

---

## 🏗️ Componentes Actuales

### App.jsx
```javascript
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>React Task App</h1>
    </div>
  );
}

export default App;
```

**Estado:** ✅ Básico, listo para integrar componentes

---

### TaskList.jsx
```javascript
import React from "react";
import tasks from "../src/assets/seed/seedTasks";

console.log("Tareas de semilla:", tasks);

function TaskListComponent() {
  return <div>TaskList</div>;
}

export default TaskListComponent;
```

**Estado:** 🚧 En desarrollo
- ✅ Importa datos de semilla
- ⏳ Pendiente: Renderizar lista
- ⏳ Pendiente: Agregar interactividad

---

##  Guía de Desarrollo

### Convenciones del Proyecto

```
✅ Usar .jsx para componentes con JSX
✅ Usar .js para lógica pura (helpers, constants)
✅ Nombres PascalCase para componentes
✅ Nombres camelCase para funciones/variables
✅ Comentarios descriptivos en puntos clave
```

### Estructura de Componentes

```javascript
// ================ NOTES ================
/**
 * Descripción del componente
 * Responsabilidades: ...
 */

// ================ IMPORTS ================
import React from "react";

// ================ COMPONENTE ================
function MiComponente() {
  return <div>Contenido</div>;
}

// ================ EXPORTS ================
export default MiComponente;
```

### Flujo de Desarrollo Recomendado

1. **Crear componente** en `src/` con estructura comentada
2. **Importar en App.jsx** o componente padre
3. **Ejecutar `npm run dev`** para ver cambios en tiempo real
4. **Usar `npm run lint`** para revisar errores
5. **Commitear cambios** cuando funcione

---

## 🔗 Recursos de Referencia

Consulta la carpeta `REFERENCE-React/` para:
- `13-Hooks.md` - Teoría de Hooks
- `14-UseState-Hooks.md` - useState en detalle
- `15-UseEffect-Hooks.md` - useEffect en detalle
- `09-Event-Handlers.md` - Manejo de eventos

---

## 📊 Progreso General

| Aspecto | Estado |
|---------|--------|
| **Configuración Base** | ✅ Completo |
| **Autoreload (HMR)** | ✅ Habilitado |
| **Watch Mode** | ✅ Disponible |
| **ESLint** | ✅ Configurado |
| **TaskList.jsx** | 🚧 En desarrollo |
| **Componentes** | 🚧 Fase 1 |
| **Estilos** | ⏳ Por hacer |
| **Persistencia** | ⏳ Por hacer |

---

## 💡 Consejos Útiles

### Para Debugging
```javascript
// Usar console.log en componentes
console.log("Estado actual:", tasks);

// Abrir DevTools del navegador (F12)
// Pestaña React Developer Tools para inspeccionar componentes
```

### Para Rendimiento
```javascript
// En desarrollo, React StrictMode ayuda a detectar problemas
// No afecta producción
```

### Para Commits
```bash
# Hacer commits pequeños y descriptivos
git add .
git commit -m "feat: Agregar renderizado de lista de tareas"
git push
```

---

## 📌 Resumen

**Donde estamos:**
- ✅ Proyecto base configurado con Vite
- ✅ Auto-reload habilitado
- ✅ Datos de semilla lista
- 🚧 Comenzando lista de tareas

**Para empezar ahora:**
```bash
npm run dev              # Inicia servidor
# Edita TaskList.jsx y verás cambios en tiempo real
```

---

*Documento actualizado continuamente durante el desarrollo. Última actualización: 5 de abril, 2026*
