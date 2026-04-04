# Introducción a React

---
## Índice de Contenidos
- [Introducción a React](#introducción-a-react)
  - [¿Qué es React?](#qué-es-react)
    - [Características Principales](#características-principales)
  - [Conceptos Clave](#conceptos-clave)
    - [JSX](#jsx)
    - [Componentes](#componentes)
    - [Props](#props)
    - [State (Estado)](#state-estado)
    - [Hooks](#hooks)
  - [Ventajas de React](#ventajas-de-react)
  - [Ecosystem Relacionado](#ecosystem-relacionado)
  - [Instalación Básica](#instalación-básica)
  - [Primeros Pasos](#primeros-pasos)

---

## ¿Qué es React?

React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario (UI) de forma eficiente y reactiva. Se utiliza para crear aplicaciones web modernas y rápidas mediante componentes reutilizables.

### Características Principales

- **Basado en Componentes**: React utiliza componentes como unidades básicas que encapsulan lógica y interfaz
- **Virtual DOM**: React mantiene una representación virtual del DOM para optimizar el rendimiento
- **Unidireccional**: El flujo de datos es unidireccional, haciendo el código más predecible
- **Declarativo**: Describes cómo debe verse la UI, no cómo cambiarla
- **Reutilizable**: Los componentes pueden ser reutilizados en diferentes partes de la aplicación

## Conceptos Clave

### JSX
JSX es una extensión de sintaxis que permite escribir código similar a HTML dentro de JavaScript:
```jsx
const elemento = <h1>Hola React</h1>;
```

### Componentes
Existen dos tipos de componentes:
- **Componentes Funcionales**: Funciones que retornan JSX
- **Componentes de Clase**: Clases que extienden React.Component

### Props
Props son argumentos pasados a componentes, permitiendo personalizar su comportamiento.

### State (Estado)
El estado es datos que pueden cambiar y causar re-renders:
```jsx
const [count, setCount] = useState(0);
```

### Hooks
Los Hooks son funciones que permiten usar estado y otras características en componentes funcionales:
- `useState`: Gestiona estado
- `useEffect`: Maneja efectos secundarios
- `useContext`: Accede al contexto
- `useReducer`: Maneja estado complejo

## Ventajas de React

✓ Renderizado rápido gracias al Virtual DOM
✓ Curva de aprendizaje moderada
✓ Gran comunidad y ecosistema
✓ Fácil testing de componentes
✓ SEO friendly con SSR
✓ Componentes reutilizables

## Ecosystem Relacionado

- **React Router**: Navegación entre páginas
- **Redux**: Gestión de estado global
- **Next.js**: Framework full-stack basado en React
- **React Native**: Desarrollo de aplicaciones móviles
- **Material-UI**: Librería de componentes UI
- **Axios/Fetch**: Llamadas HTTP
- **Jest**: Testing

## Instalación Básica

```bash
npx create-react-app mi-aplicacion
cd mi-aplicacion
npm start
```

## Primeros Pasos

1. Comprender JSX y componentes
2. Aprender sobre Props y State
3. Dominar los Hooks más comunes
4. Implementar enrutamiento con React Router
5. Gestionar estado global
6. Conectar APIs
7. Optimizar rendimiento