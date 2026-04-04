# 11 - Third-Party Modules y React Icons

## 📑 Índice

- [11 - Third-Party Modules y React Icons](#11---third-party-modules-y-react-icons)
  - [📑 Índice](#-índice)
  - [Introducción](#introducción)
  - [¿Qué son Módulos de Terceros?](#qué-son-módulos-de-terceros)
  - [Cómo Instalar Librerías npm](#cómo-instalar-librerías-npm)
    - [Instalación básica](#instalación-básica)
    - [Instalar versión específica](#instalar-versión-específica)
    - [Diferentes tipos de dependencia](#diferentes-tipos-de-dependencia)
    - [Ver instaladas](#ver-instaladas)
    - [Actualizar](#actualizar)
    - [Desinstalar](#desinstalar)
  - [React Icons - Guía Completa](#react-icons---guía-completa)
    - [Instalación](#instalación)
    - [Uso Básico](#uso-básico)
    - [Conjuntos de Iconos Disponibles](#conjuntos-de-iconos-disponibles)
    - [Personalización de Iconos](#personalización-de-iconos)
    - [Ejemplos Prácticos](#ejemplos-prácticos)
      - [1. Barra de Navegación con Iconos](#1-barra-de-navegación-con-iconos)
      - [2. Botones con Iconos](#2-botones-con-iconos)
      - [3. Indicadores de Estado](#3-indicadores-de-estado)
      - [4. Línea de Progreso con Iconos](#4-línea-de-progreso-con-iconos)
  - [Material-UI (MUI)](#material-ui-mui)
    - [Instalación](#instalación-1)
    - [Uso Básico](#uso-básico-1)
  - [shadcn/ui](#shadcnui)
    - [Instalación](#instalación-2)
    - [Uso](#uso)
  - [Otras Librerías Populares](#otras-librerías-populares)
    - [Componentes UI](#componentes-ui)
    - [Formularios](#formularios)
    - [Estado y Datos](#estado-y-datos)
    - [Utilidades](#utilidades)
  - [Cómo Elegir la Librería Correcta](#cómo-elegir-la-librería-correcta)
    - [Preguntas a hacer:](#preguntas-a-hacer)
    - [Criterios de evaluación:](#criterios-de-evaluación)
  - [Mejores Prácticas](#mejores-prácticas)
    - [1. **Instala solo lo que necesitas**](#1-instala-solo-lo-que-necesitas)
    - [2. **Usa Dynamic Import para grandes librerías**](#2-usa-dynamic-import-para-grandes-librerías)
    - [3. **Audita dependencias regularmente**](#3-audita-dependencias-regularmente)
    - [4. **Documenta por qué usas cada librería**](#4-documenta-por-qué-usas-cada-librería)
  - [Rendimiento y Bundle Size](#rendimiento-y-bundle-size)
    - [Cómo medir](#cómo-medir)
    - [Tácticas para reducir](#tácticas-para-reducir)
    - [Tree-shaking](#tree-shaking)
  - [Debugging de Librerías](#debugging-de-librerías)
    - [1. Ver source maps](#1-ver-source-maps)
    - [2. Logging de librerías](#2-logging-de-librerías)
    - [3. React DevTools](#3-react-devtools)
  - [Ejemplos Completos](#ejemplos-completos)
    - [Proyecto con React Icons + Componentes Personalizados](#proyecto-con-react-icons--componentes-personalizados)
  - [Quick Reference - Resumen](#quick-reference---resumen)
    - [Comandos npm Esenciales](#comandos-npm-esenciales)
    - [React Icons - Quick Start](#react-icons---quick-start)
    - [Checklist de Evaluación](#checklist-de-evaluación)
  - [Próximos Pasos](#próximos-pasos)

---

## Introducción

En esta sección aprenderemos a usar **librerías externas (third-party)** en React. Estas son paquetes de código reutilizable que otros desarrolladores han creado y publicado en `npm` para que los uses en tus proyectos.

Aprenderemos:
- Qué son las librerías de terceros
- Cómo instalarlas con npm
- React Icons: librería de iconos más popular
- Alternativas populares (Material-UI, shadcn/ui)
- Mejores prácticas y patrones
- Cómo elegir la librería correcta

---

## ¿Qué son Módulos de Terceros?

**Módulos de terceros** son paquetes de código pre-hecho publicados en `npm` (Node Package Manager) que puedes descargar e instalar en tu proyecto.

**Ventajas:**
- ✅ No reinventar la rueda
- ✅ Código probado y mantenido
- ✅ Ahorra tiempo de desarrollo
- ✅ Comunidad activa
- ✅ Actualizaciones y bugfixes

**Desventajas:**
- ❌ Aumentan el tamaño del bundle
- ❌ Dependencia externa
- ❌ Pueden tener bugs
- ❌ Necesitan actualizarse

---

## Cómo Instalar Librerías npm

### Instalación básica

```bash
npm install nombre-libreria
```

Esto:
1. Descarga la librería desde npm
2. La guarda en `node_modules/`
3. Actualiza `package.json` y `package-lock.json`

### Instalar versión específica

```bash
npm install lodash@4.17.21    # Versión exacta
npm install lodash@^4.17.0   # Compatible 4.x
```

### Diferentes tipos de dependencia

```bash
npm install lodash             # Dependencia (se usa en producción)
npm install --save-dev eslint  # Dev dependency (solo desarrollo)
npm install -g typescript      # Global (en tu computadora)
```

### Ver instaladas

```bash
npm list                    # Todas
npm list --depth=0        # Solo top-level
```

### Actualizar

```bash
npm update                 # Actualizar todas
npm update lodash         # Actualizar específica
npm outdated              # Ver cuáles están desactualizadas
```

### Desinstalar

```bash
npm uninstall lodash
npm uninstall --save-dev eslint
```

---

## React Icons - Guía Completa

**React Icons** es la librería más popular para iconos en React. Ofrece acceso a **+20,000 iconos** de múltiples suites diseñadas.

### Instalación

```bash
npm install react-icons --save
```

Verificar en `package.json`:
```json
{
  "dependencies": {
    "react-icons": "^4.x.x"
  }
}
```

### Uso Básico

```jsx
// Importar un icono específico
import { FaReact, FaNode, FaGithub } from "react-icons/fa";
// FA = Font Awesome

function App() {
  return (
    <div>
      <FaReact size={30} />
      <FaNode size={30} />
      <FaGithub size={30} />
    </div>
  );
}
```

### Conjuntos de Iconos Disponibles

React Icons agrupa iconos por "suite" o conjunto. Cada uno tiene un prefijo:

| Suite           | Prefijo | Ejemplo               | URL |
| --------------- | ------- | --------------------- | --- |
| Font Awesome    | `Fa`    | `FaReact`, `FaHome`   | fa  |
| Feather         | `Fi`    | `FiHome`, `FiUser`    | fi  |
| Bootstrap       | `Bs`    | `BsGithub`, `BsHeart` | bs  |
| Material Design | `Md`    | `MdHome`, `MdEmail`   | md  |
| Ionicons        | `Io`    | `IoHome`, `IoSearch`  | io  |
| Tabler Icons    | `Tb`    | `TbBrandReact`        | tb  |

**Importar de diferentes suites:**
```jsx
import { FaReact } from "react-icons/fa";        // Font Awesome
import { FiHome } from "react-icons/fi";         // Feather
import { BsGithub } from "react-icons/bs";       // Bootstrap
import { MdEmail } from "react-icons/md";        // Material Design
import { IoSearch } from "react-icons/io";       // Ionicons
```

### Personalización de Iconos

```jsx
import { FaReact } from "react-icons/fa";

function Personalizacion() {
  return (
    <div>
      {/* Tamaño */}
      <FaReact size={20} />
      <FaReact size="2em" />

      {/* Color */}
      <FaReact color="blue" />
      <FaReact style={{ color: "#ff6b6b" }} />

      {/* Clase CSS */}
      <FaReact className="mi-icono" />

      {/* Combinar propiedades */}
      <FaReact 
        size={30} 
        color="green"
        title="React"
        className="icono-reactivo"
      />
    </div>
  );
}
```

**CSS para iconos:**
```css
.mi-icono {
  color: red;
  transition: all 0.3s ease;
}

.mi-icono:hover {
  transform: scale(1.2);
  color: darkred;
}
```

### Ejemplos Prácticos

#### 1. Barra de Navegación con Iconos

```jsx
import { FaHome, FaUser, FaGithub, FaBars } from "react-icons/fa";

function NavBar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px' }}>
      <div style={{ cursor: 'pointer', fontSize: '20px' }}>
        <FaBars />
      </div>
      
      <a href="/">
        <FaHome size={24} />
      </a>
      
      <a href="/perfil">
        <FaUser size={24} />
      </a>
      
      <a href="https://github.com">
        <FaGithub size={24} />
      </a>
    </nav>
  );
}

export default NavBar;
```

#### 2. Botones con Iconos

```jsx
import { FaSave, FaTrash, FaPencil } from "react-icons/fa";

function BotonesConIconos() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <FaSave /> Guardar
      </button>

      <button style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <FaPencil /> Editar
      </button>

      <button style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <FaTrash /> Eliminar
      </button>
    </div>
  );
}

export default BotonesConIconos;
```

#### 3. Indicadores de Estado

```jsx
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

function Indicadores() {
  return (
    <div>
      <div style={{ color: 'green', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaCheckCircle size={24} />
        <span>Éxito</span>
      </div>

      <div style={{ color: 'red', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaTimesCircle size={24} />
        <span>Error</span>
      </div>

      <div style={{ color: 'orange', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaExclamationTriangle size={24} />
        <span>Advertencia</span>
      </div>

      <div style={{ color: 'blue', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaInfoCircle size={24} />
        <span>Información</span>
      </div>
    </div>
  );
}

export default Indicadores;
```

#### 4. Línea de Progreso con Iconos

```jsx
import { FaCheckCircle, FaCircle } from "react-icons/fa";

function Progreso() {
  const pasos = ['Registro', 'Verificación', 'Completado'];
  const pasoActual = 1;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {pasos.map((paso, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {index <= pasoActual ? (
            <FaCheckCircle size={30} color="green" />
          ) : (
            <FaCircle size={30} color="gray" />
          )}
          <span>{paso}</span>
        </div>
      ))}
    </div>
  );
}

export default Progreso;
```

---

## Material-UI (MUI)

**Material-UI** es un framework completo de componentes siguiendo el diseño Material Design de Google.

### Instalación

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### Uso Básico

```jsx
import { Button, TextField, Card } from '@mui/material';
import { FaGithub } from 'react-icons/fa';

function MUIExample() {
  return (
    <Card style={{ padding: '20px' }}>
      <TextField label="Correo" type="email" />
      <Button variant="contained" color="primary">
        Enviar
      </Button>
    </Card>
  );
}

export default MUIExample;
```

**Ventajas:**
- ✅ Componentes profesionales pre-diseñados
- ✅ Soporte completo para temas (theming)
- ✅ Accesibilidad incluida
- ✅ Gran comunidad

**Desventajas:**
- ❌ Bundle size grande (~100kb+)
- ❌ Curva de aprendizaje
- ❌ Menos personalizable que otras

🔗 https://mui.com/

---

## shadcn/ui

**shadcn/ui** es una colección de componentes reutilizables construidos con Radix UI y Tailwind CSS.

### Instalación

```bash
# Primero instala Tailwind
npm install -D tailwindcss
npx tailwindcss init

# Luego usa shadcn/ui CLI
npx shadcn-ui@latest init

# Agregar componentes individuales
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

### Uso

```jsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function App() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  )
}
```

**Ventajas:**
- ✅ Componentes modernos y minimalistas
- ✅ Personalizable (copias el código)
- ✅ Integración perfecta con Tailwind
- ✅ Bundle size pequeño

**Desventajas:**
- ❌ Requiere Tailwind CSS
- ❌ Documentación menos completa que MUI
- ❌ Comunidad más pequeña

🔗 https://ui.shadcn.com/

---

## Otras Librerías Populares

### Componentes UI

| Librería            | Descripción                              | URL                       |
| ------------------- | ---------------------------------------- | ------------------------- |
| **Chakra UI**       | Componentes accesibles y personalizables | chakra-ui.com             |
| **React Bootstrap** | Bootstrap para React                     | react-bootstrap.github.io |
| **ReactStrap**      | Componentes Bootstrap más modernos       | reactstrap.github.io      |
| **Ant Design**      | Enterprise-grade UI library              | ant.design                |

### Formularios

| Librería            | Descripción                      | URL                    |
| ------------------- | -------------------------------- | ---------------------- |
| **React Hook Form** | Gestión eficiente de formularios | react-hook-form.com    |
| **Formik**          | Alternativa a React Hook Form    | formik.org             |
| **Yup**             | Validación de esquemas           | github.com/jquense/yup |

### Estado y Datos

| Librería                         | Descripción                    | URL                       |
| -------------------------------- | ------------------------------ | ------------------------- |
| **Redux**                        | Gestión de estado centralizada | redux.js.org              |
| **Zustand**                      | Estado más simple que Redux    | github.com/pmndrs/zustand |
| **Recoil**                       | Estado atómico de Facebook     | recoiljs.org              |
| **React Query / TanStack Query** | Gestión de datos server        | tanstack.com/query        |

### Utilidades

| Librería      | Descripción                         | URL            |
| ------------- | ----------------------------------- | -------------- |
| **Lodash**    | Utilidades JavaScript               | lodash.com     |
| **Axios**     | Requests HTTP alternativa a fetch   | axios-http.com |
| **date-fns**  | Manejo de fechas                    | date-fns.org   |
| **Moment.js** | Otra librería de fechas (deprecada) | momentjs.com   |

---

## Cómo Elegir la Librería Correcta

### Preguntas a hacer:

1. **¿Realmente la necesito?**
   - ¿Puedo hacerlo con React vanilla?
   - ¿Vale la pena aumentar el bundle?

2. **¿Es popular y mantenida?**
   - ¿Tiene stars en GitHub?
   - ¿Se actualiza regularmente?
   - ¿Comunidad activa?

3. **¿Encaja con mi proyecto?**
   - ¿Tamaño del proyecto?
   - ¿Requisitos de diseño?
   - ¿Personalización necesaria?

4. **¿Qué dice el bundle analysis?**
   - `npm install --save-dev webpack-bundle-analyzer`
   - Mide el tamaño real agregado

### Criterios de evaluación:

```
┌──────────────────────────────────────────┐
│       SCORECARD DE LIBRERÍAS             │
├──────────────────────────────────────────┤
│                                          │
│ Popularidad (GitHub stars)     ⭐⭐⭐⭐  │
│ Mantenimiento (actualizado)    ⭐⭐⭐⭐  │
│ Documentación                  ⭐⭐⭐⭐  │
│ Tamaño del bundle              ⭐⭐⭐    │
│ Facilidad de uso               ⭐⭐⭐⭐  │
│ Personalización                ⭐⭐⭐    │
│                                          │
│ SCORE TOTAL: 22/30 = ✅ BUENA OPCIÓN    │
│                                          │
└──────────────────────────────────────────┘
```

---

## Mejores Prácticas

### 1. **Instala solo lo que necesitas**

❌ **MAL:**
```bash
npm install lodash  # Toda la librería (~70kb)
```

✅ **BIEN:**
```bash
npm install lodash-es  # ESM moderna
# O importa solo lo que usas:
import { map, filter } from 'lodash';
```

### 2. **Usa Dynamic Import para grandes librerías**

```jsx
import { lazy, Suspense } from 'react';

// Carga la librería solo cuando se necesita
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### 3. **Audita dependencias regularmente**

```bash
npm audit                # Ver vulnerabilidades
npm audit fix            # Arreglara automáticamente
npm update              # Actualizar todo
```

### 4. **Documenta por qué usas cada librería**

```jsx
// En package.json o comentario:
{
  "dependencies": {
    "react-icons": "^4.x",        // Iconos: 20k+ opciones
    "date-fns": "^2.x",          // Fechas: ligero y moderno
    "@mui/material": "^5.x"      // UI completa: 100+ componentes
  }
}
```

---

## Rendimiento y Bundle Size

### Cómo medir

```bash
# 1. Ver tamaño de bundle
npm run build

# 2. Analizar detalladamente
npm install --save-dev source-map-explorer
source-map-explorer 'build/static/js/*.js'
```

### Tácticas para reducir

```jsx
// ❌ MAL: Importa toda la librería
import lodash from 'lodash';
const result = lodash.map([1,2,3], x => x * 2);

// ✅ BIEN: Solo lo que necesitas
import map from 'lodash/map';
const result = map([1,2,3], x => x * 2);
```

### Tree-shaking

Asegúrate de usar ES modules:
```json
{
  "module": "es/index.js",
  "sideEffects": false
}
```

---

## Debugging de Librerías

### 1. Ver source maps

```javascript
// En DevTools Console
// Puedes ver el código fuente de la librería
```

### 2. Logging de librerías

```javascript
// Muchas librerías soportan logging
localStorage.debug = 'react-query:*';
localStorage.debug = 'redux:*';
```

### 3. React DevTools

```
F12 → React DevTools → Profiler
Ver qué componentes de librerías se renderizaron
```

---

## Ejemplos Completos

### Proyecto con React Icons + Componentes Personalizados

```jsx
import { FaHome, FaUser, FaCog, FaSignOut } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import { useState } from 'react';

function Dashboard() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const items = [
    { icon: FaHome, label: 'Inicio' },
    { icon: FaUser, label: 'Perfil' },
    { icon: FaCog, label: 'Configuración' },
    { icon: FaSignOut, label: 'Salir' }
  ];

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{
        width: '250px',
        background: '#333',
        color: 'white',
        padding: '20px'
      }}>
        <h2>Mi App</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {items.map(item => (
            <button key={item.label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'transparent',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              padding: '10px',
              borderRadius: '5px'
            }}>
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1>Dashboard</h1>
          <MdNotifications size={30} />
        </div>
        <p>Contenido principal aquí...</p>
      </main>
    </div>
  );
}

export default Dashboard;
```

---

## Quick Reference - Resumen

### Comandos npm Esenciales

```bash
npm install lodash              # Instalar
npm install --save-dev jest     # Dev dependency
npm update                      # Actualizar
npm outdated                    # Ver desactualizadas
npm audit                       # Buscar vulnerabilidades
npm uninstall lodash            # Desinstalar
```

### React Icons - Quick Start

```jsx
import { FaReact } from 'react-icons/fa';

<FaReact size={30} color="blue" />
```

### Checklist de Evaluación

- ✅ ¿Realmente necesito esta librería?
- ✅ ¿Es popular y mantenida?
- ✅ ¿Aumenta demasiado el bundle?
- ✅ ¿Hay alternativas más ligeras?
- ✅ ¿Está documentada?
- ✅ ¿La comunidad es activa?

---

## Próximos Pasos

Cuando domine librerías de terceros, aprenderá:

1. **Crear tu propia librería** - Publicar en npm
2. **Gestión avanzada de dependencias** - Monorepos
3. **Performance optimization** - Code splitting
4. **Integración de UI frameworks** - Tailwind, Bootstrap
5. **Custom hooks reutilizables** - Compartir lógica

---

**🔗 Recursos Recomendados:**

- 📚 https://www.npmjs.com/ - Buscar librerías
- 📚 https://bundlephobia.com/ - Medir tamaño
- 📚 https://react-icons.github.io/react-icons/ - React Icons docs
- 📚 https://awesome-react.com/ - Curada lista de librerías

**¡Ahora tienes acceso a miles de librerías para potenciar tu React! 🚀**