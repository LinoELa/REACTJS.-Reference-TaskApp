# 🚀 React Task App - Projects

> Aplicación profesional de tareas (Todo App) construida con React

Parte del repositorio **React Task App Reference** que incluye también componentes educativos en Learning.

---

## ⚡ Quick Start

Desde la carpeta raíz del proyecto (`taskapp-reference/`):

```bash
# 1. Instalar dependencias (si no lo hiciste)
npm install

# 2. Inicia solo Projects (puerto 3001)
npm run start:project

# O inicia ambos proyectos (Learning + Projects)
npm run start:both
```

✅ Projects estará disponible en: **http://localhost:3001**

---

## ⚙️ Vite y Extensiones de Archivo (.jsx vs .js)

### ¿Es obligatorio usar .jsx en Vite?

**NO, no es obligatorio.** En Vite puedes usar tanto **`.jsx`** como **`.js`** para archivos con React.

#### Diferencias

| Aspecto | `.jsx` | `.js` |
|---------|--------|-------|
| **JSX válido** | ✅ Sí | ✅ Sí |
| **Recomendación** | ⭐ Sí (buena práctica) | ⚠️ Funciona pero confuso |
| **Claridad** | ✅ Indica componente React | ❌ No es obvio |
| **Editor** | ✅ Mejor syntax highlighting | ⚠️ Limitado |
| **Rendimiento** | ✅ Igual | ✅ Igual |

#### 🎯 Nuestra Convención

En este proyecto usamos:
- **`.jsx`** → Componentes React (con JSX)
- **`.js`** → Lógica pura (helpers, utilities, config)

```javascript
// ✅ RECOMENDADO
App.jsx          // Componentes React
Button.jsx       // Componentes React
utils.js         // Funciones auxiliares
constants.js     // Constantes
```

#### ⚡ Consejo

Aunque Vite acepta ambos, usar **`.jsx`** es mejor porque:
1. **Clarifica** que el archivo contiene JSX/React
2. **Mejora** el syntax highlighting en editores
3. **Sigue** estándares de la comunidad React
4. **Facilita** la búsqueda de componentes

---

## 📂 Sistema de 2 Proyectos

Este proyecto es parte de un sistema educativo con 2 aplicaciones independientes:

### 1️⃣ Learning (Componentes educativos)
- **Puerto**: http://localhost:3000
- **Ubicación**: `src/Learning/`
- **Propósito**: Aprender React con ejemplos interactivos
- **Start**: `npm run start:learning`

**Incluye:**
- useState - Estados simples
- useEffect - Efectos secundarios
- Array manipulation (map, filter, reduce)
- Fetch API basics
- Event handlers
- Props & Components

### 2️⃣ Projects (Esta app - Todo App)
- **Puerto**: http://localhost:3001
- **Ubicación**: `src/Projects/react-task-app/`
- **Propósito**: Aplicación real implementando todos los conceptos
- **Start**: `npm run start:project`

**Features:**
- ✅ Crear tareas
- ✅ Listar tareas
- ✅ Marcar completadas
- ✅ Eliminar tareas
- ✅ Estado persistente (próximamente)
- ✅ Context API para estado global (próximamente)

---

## 🎮 Métodos de Ejecución

### Opción 1: Solo Projects
```bash
npm run start:project
# http://localhost:3001
```

### Opción 2: Solo Learning
```bash
npm run start:learning
# http://localhost:3000
```

### Opción 3: Ambos juntos (RECOMENDADO)
```bash
npm run start:both
# Learning: http://localhost:3000
# Projects: http://localhost:3001
```

---

## 📋 Scripts Disponibles

Ejecuta desde la carpeta raíz (`taskapp-reference/`):

```bash
# Development
npm run start:project           # Inicia Projects (3001)
npm run start:learning          # Inicia Learning (3000)
npm run start:both              # Ambos simultáneamente

# Building
npm run build:project           # Build optimizado de Projects
npm run build:learning          # Build de Learning
npm run build                   # Build general

# Testing
npm test                        # Ejecuta pruebas
npm run test:watch              # Pruebas en modo watch

# Deploy
npm run safe-deploy             # Deploy seguro (verifica .env)
```

---

## 📖 Documentación

Antes de escribir código, lee las guías en `REFERENCE-React/dev/Resource/`:

| Guía | Tópico |
|------|--------|
| **01-Intro** | Introducción a React |
| **02-Estructura** | Arquitectura de proyectos |
| **03-Componentes** | Crear componentes |
| **06-Props** | Props y comunicación |
| **09-Event-Handlers** | Manejo de eventos |
| **12-Arrays** | Métodos de array en React |
| **14-UseState-Hooks** | useState en profundidad |
| **15-UseEffect-Hooks** | useEffect en profundidad |

---

## 🏗 Estructura del Proyecto

```
taskapp-reference/                       # Raíz (package.json compartido)
├── src/
│   ├── Learning/                        # Componentes educativos
│   │   ├── index.js                    # Entry con todos los ejemplos
│   │   ├── UseState.js
│   │   ├── UseEffect.js
│   │   └── ... (más componentes)
│   │
│   └── Projects/
│       └── react-task-app/             # 👈 Aquí estamos
│           ├── src/
│           │   ├── components/         # Componentes de la app
│           │   ├── hooks/              # Custom hooks
│           │   ├── App.jsx
│           │   └── main.jsx
│           ├── public/
│           ├── README.md               # Este archivo
│           └── package.json
│
├── REFERENCE-React/                     # Guías (01-15)
├── .env.learning                        # Config Learning (Puerto 3000)
├── .env.project                         # Config Projects (Puerto 3001)
├── package.json                         # Dependencias compartidas
└── README.md                            # Documentación principal
```

---

## 🛠 Stack Tecnológico

- **React** 19.2.4 - UI Framework
- **React DOM** 19.2.4 - Rendering
- **Vite** - Build tool (en Projects)
- **Create React App** - En Learning
- **env-cmd** - Variables de entorno
- **concurrently** - Ejecutar múltiples comandos

---

## 💡 Flujo de Aprendizaje

```
1. Lee la guía en REFERENCE-React/
   ↓
2. Ve el ejemplo en Learning (3000)
   ↓
3. Implementa el concepto aquí en Projects (3001)
   ↓
4. Repite con el siguiente concepto
```

---

## 🌐 Ubicación en el Repositorio

**Repositorio principal**: https://github.com/LinoELa/REACTJS-REFERENCE

Este proyecto es `src/Projects/react-task-app/` dentro del repositorio completo.

---

## 📝 Notas Importantes

1. **Ambos proyectos comparten `package.json`**
   - Se instala una sola vez desde la raíz
   - Las dependencias son exactas para ambos

2. **Puertos específicos**
   - Learning: `3000` (configurado en `.env.learning`)
   - Projects: `3001` (configurado en `.env.project`)

3. **Cómo levantar correctamente**
   - Siempre ejecuta desde la raíz (`taskapp-reference/`)
   - Usa `npm run start:project` (no npm start)
   - O usa `npm run start:both` para ambos

4. **Cambios de código**
   - Se recargan automáticamente en desarrollo
   - No necesitas reiniciar el servidor

---

## ❓ Preguntas Frecuentes

**P: ¿Por qué 2 proyectos en uno?**  
A: Para aprender conceptos en Learning y aplicarlos en Projects sin perder contexto educativo.

**P: ¿Puedo ejecutar solo Projects?**  
A: Sí, pero necesitas estar en la carpeta raíz: `npm run start:project`

**P: ¿Dónde están las dependencias?**  
A: En la carpeta raíz. Ambos proyectos las comparten.

**P: ¿Qué versión de Node necesito?**  
A: 14+ recomendado. Verifica con `node --version`

---

**Última actualización**: 5 de abril de 2026  
**Versión**: 1.0.0
