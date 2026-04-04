# 📚 React Task App Reference

> Aplicación de referencia completa para aprender React con 2 proyectos independientes + 15 guías profesionales

![React](https://img.shields.io/badge/React-19.2.4-blue?logo=react)
![Node](https://img.shields.io/badge/Node-ES6+-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🎯 ¿Qué es esto?

Un repositorio completo con:
- **📚 Learning**: Componentes interactivos para aprender React (UseState, UseEffect, Arrays, etc.)
- **🚀 Projects**: Aplicación Real Task App (Todo App) con arquitectura profesional
- **📖 15 Guías**: Documentación profesional cubriendo React desde 0 hasta avanzado
- **📦 Setup compartido**: Ambos proyectos usan el mismo package.json

**Objetivo**: Aprender React construyendo mientras lees la documentación y ves ejemplos funcionando.

---

## ⚡ Quick Start (30 segundos)

```bash
# 1. Clonar repositorio
git clone https://github.com/LinoELa/REACTJS-REFERENCE.git
cd taskapp-reference

# 2. Instalar dependencias
npm install

# 3. Ejecutar ambos proyectos
npm run start:both

# ✅ Learning estará en: http://localhost:3000
# ✅ Projects estará en: http://localhost:3001
```

---

## 📂 Estructura de 2 Proyectos

### 1️⃣ Learning - Componentes Educativos

**Ubicación:** `src/Learning/`  
**Puerto:** 🔵 `http://localhost:3000`  
**Propósito:** Aprender conceptos React con ejemplos interactivos

```bash
npm run start:learning      # Inicia Learning en puerto 3000
npm run build:learning      # Build optimizado
```

**Incluye:**
```
src/Learning/
├── index.js              # 📌 Entry point con todos los componentes
├── UseState.js           # useState - Estados simples (contador, toggle)
├── UseEffect.js          # useEffect - Efectos secundarios (fetch, timers)
├── Button.js             # Props & Event Handlers
├── Tasks.js              # Array rendering con map()
├── Posts.js              # Fetch API + async/await
├── userArrays.js         # Manipulación avanzada de arrays
├── Saludar.js            # Componentes legacy (clase - para referencia)
└── *.css                 # Estilos separados por componente
```

### 2️⃣ Projects - React Task App

**Ubicación:** `src/Projects/react-task-app/`  
**Puerto:** 🟠 `http://localhost:3001`  
**Propósito:** Aplicación real implementando conceptos completos

```bash
npm run start:project      # Inicia Projects en puerto 3001
npm run build:project      # Build optimizado
```

**Features:**
- ✅ Crear, listar, editar, eliminar tareas
- ✅ Estado con useState + useReducer
- ✅ Context API para estado global (próximamente)
- ✅ Arquitectura escalable

---

## 🎮 Cómo Usar

### Opción 1: Ejecutar Learning solo
```bash
npm run start:learning
# Abre http://localhost:3000
```

### Opción 2: Ejecutar Projects solo
```bash
npm run start:project
# Abre http://localhost:3001
```

### Opción 3: Ambos juntos (RECOMENDADO)
```bash
npm run start:both
# Learning: http://localhost:3000
# Projects: http://localhost:3001
```

---

## 📋 Scripts Disponibles

| Script | Descripción | Puerto |
|--------|-------------|--------|
| `npm start` | Alias de start:learning | 3000 |
| `npm run start:learning` | Inicia Learning | 3000 |
| `npm run start:project` | Inicia Projects | 3001 |
| `npm run start:both` | Ambos simultáneamente | 3000 + 3001 |
| `npm run build:learning` | Build de Learning | - |
| `npm run build:project` | Build de Projects | - |
| `npm run build` | Build general | - |
| `npm test` | Ejecuta pruebas | - |
| `npm run test:watch` | Pruebas en modo watch | - |
| `npm run safe-deploy` | Deploy seguro (verifica .env) | - |

---

## 📖 15 Guías de Referencia

Ubicación: `REFERENCE-React/dev/Resource/`

Cada guía incluye: explicaciones, ejemplos MAL/BIEN, quick reference visual, errores comunes y tips de rendimiento.

```
01-Intro                              # Introducción a React
02-Estructura                         # Arquitectura de proyectos
03-Componentes                        # Crear componentes funcionales
04-JSX                                # Sintaxis JSX
05-EcmaScript                         # ES6+ en React
06-Props                              # Props y comunicación entre componentes
07-Estilos                            # CSS en React (inline, CSS, clases)
08-Tipos-de-Componentes               # Componentes funcionales vs clase
09-Event-Handlers                     # Manejo de eventos (onClick, onChange, etc.)
10-Fetch-API                          # HTTP requests (GET, POST, DELETE)
11-Third-Party-Modules                # npm packages y React Icons
12-Arrays                             # Métodos de array en React (map, filter, reduce)
13-Hooks                              # Todos los Hooks disponibles
14-UseState-Hooks                     # useState en profundidad
15-UseEffect-Hooks                    # useEffect en profundidad
```

---

## 📁 Estructura Completa

```
taskapp-reference/
├── src/
│   ├── Learning/                           # 📚 Componentes educativos
│   │   ├── index.js                       # Entry - Renderiza todos los componentes
│   │   ├── UseState.js                    # 3 ejemplos useState
│   │   ├── UseEffect.js                   # 6 ejemplos useEffect
│   │   ├── Posts.js                       # Fetch + async/await
│   │   ├── Tasks.js                       # Array rendering (map)
│   │   ├── userArrays.js                  # Array manipulation avanzada
│   │   ├── Button.js                      # Props + onClick
│   │   ├── Saludar.js                     # Clase (referencia)
│   │   ├── ModuloExterno.js               # React Icons (npm package)
│   │   ├── tasks.css
│   │   └── userArrays.css
│   │
│   └── Projects/                           # 🚀 Proyectos React
│       └── react-task-app/
│           ├── src/
│           ├── public/
│           ├── package.json
│           └── README.md
│
├── REFERENCE-React/                        # 📖 Guías profesionales
│   ├── @learning-resource.md               # Índice de recursos
│   └── dev/Resource/
│       ├── 01-Intro.md                    # Guías 01-15 (15 archivos)
│       ├── 02-Estructura.md
│       ├── ... (13 guías más)
│       └── 15-UseEffect-Hooks.md
│
├── docs/                                   # Utilidades y configuración
├── package.json                            # 📦 Dependencias compartidas
├── package-lock.json
├── .env.learning                           # Config Learning (3000)
├── .env.project                            # Config Projects (3001)
└── README.md                               # Este archivo
```

---

## 🎓 Flujo de Aprendizaje Recomendado

```
1. Lee la guía (REFERENCE-React/)
   ↓
2. Ve el ejemplo en Learning (http://localhost:3000)
   ↓
3. Implementa en Projects (http://localhost:3001)
   ↓
4. Consulta cuando tengas dudas
```

---

## 🛠 Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|----------|-----|
| **React** | 19.2.4 | Framework UI |
| **React DOM** | 19.2.4 | Rendering |
| **React Icons** | 5.6.0 | Iconos |
| **React Scripts** | 5.0.1 | Build & Dev server |
| **Testing Library** | 16.3.2 | Testing (React) |
| **env-cmd** | 10.1.0 | Variables de entorno |
| **concurrently** | 8.2.2 | Ejecutar múltiples comandos |

---

## 📚 Recursos

- **Video guía original**: https://www.youtube.com/watch?v=rLoWMU4L_qE
- **Documentación React**: https://react.dev
- **Create React App**: https://create-react-app.dev

---

## ✅ Checklist de Conceptos

- [ ] Entiendo JSX y componentes
- [ ] Puedo usar props y destructuring
- [ ] Domino useState
- [ ] Entiendo useEffect y cleanup
- [ ] Manejo arrays con map/filter
- [ ] Hago fetch de datos
- [ ] Uso React Icons (npm packages)
- [ ] Entiendo Event Handlers
- [ ] Puedo escalar la app con Context/useReducer

---

## 📝 Notas

- Ambos proyectos comparten `package.json` y `node_modules`
- Las dependencias se instalan una sola vez
- Cada proyecto tiene su puerto (3000/3001)
- Los `.env` archivos configuran cada proyecto
- Puedes ejecutarlos independientemente o juntos

---

## 🤝 Contribuir

Si encuentras errores en las guías o ejemplos, puedes hacer un pull request. Todo feedback es bienvenido.

---

**Última actualización**: 5 de abril de 2026  
**Versión**: 1.0.0  
**Licencia**: MIT
