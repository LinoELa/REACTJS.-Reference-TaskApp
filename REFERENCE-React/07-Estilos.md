# 07 - Estilos en React

---
## Índice de Contenidos

- [07 - Estilos en React](#07---estilos-en-react)
  - [Índice de Contenidos](#índice-de-contenidos)
  - [¿Por qué los estilos en React son importantes?](#por-qué-los-estilos-en-react-son-importantes)
  - [En este proyecto: CSS directo](#en-este-proyecto-css-directo)
  - [Formas de aplicar estilos en React](#formas-de-aplicar-estilos-en-react)
    - [1. CSS externo (`className`)](#1-css-externo-classname)
    - [2. Estilos en línea (inline styles)](#2-estilos-en-línea-inline-styles)
    - [3. Clases condicionales](#3-clases-condicionales)
    - [4. CSS Modules](#4-css-modules)
    - [5. Librerías y frameworks CSS (futuro)](#5-librerías-y-frameworks-css-futuro)
  - [Diferencias clave: `className` vs `style`](#diferencias-clave-classname-vs-style)
  - [Ejemplo aplicado a tu TaskApp](#ejemplo-aplicado-a-tu-taskapp)
    - [Versión actual (tu código real)](#versión-actual-tu-código-real)
    - [Versión recomendada (más limpia y escalable)](#versión-recomendada-más-limpia-y-escalable)
  - [Buenas prácticas para estilos en React](#buenas-prácticas-para-estilos-en-react)
  - [Errores comunes](#errores-comunes)
  - [📋 Checklist rápido](#-checklist-rápido)
  - [🚀 Siguientes temas](#-siguientes-temas)

---

## ¿Por qué los estilos en React son importantes?

React se enfoca en componentes, y cada componente representa una parte visual de la UI. Por eso, saber aplicar estilos correctamente te ayuda a:

- Mantener una interfaz clara y consistente
- Reutilizar estilos entre componentes
- Escalar el proyecto sin desordenar el CSS
- Mejorar la mantenibilidad del código

---

## En este proyecto: CSS directo

Actualmente estamos trabajando con **CSS directo**:

- Archivo de estilos: `tasks.css`
- Aplicación de estilos: `className` en los componentes
- Sin framework CSS adicional por ahora

Esto es ideal para aprender la base y entender bien cómo se conectan React + CSS.

---

## Formas de aplicar estilos en React

### 1. CSS externo (`className`)

Es la forma más común. Defines clases en un archivo `.css` y las usas en JSX con `className`.

```css
/* tasks.css */
.card {
	background: #f0f0f0;
	padding: 20px;
	color: #333;
	border-radius: 8px;
}
```

```jsx
// Tasks.js
import './tasks.css';

export function TasksCard() {
	return <div className="card">Contenido</div>;
}
```

**Ventajas:**
- Muy legible
- Fácil de mantener
- Ideal para estilos reutilizables

---

### 2. Estilos en línea (inline styles)

En React, el prop `style` recibe un objeto JavaScript.

```jsx
const cardStyle = {
	background: '#f0f0f0',
	padding: '20px',
	color: '#333',
	borderRadius: '8px'
};

return <div style={cardStyle}>Contenido</div>;
```

Reglas importantes:
- Las propiedades CSS van en **camelCase** (`borderRadius`, `fontWeight`)
- Los valores numéricos pueden ir como número (`padding: 20`) o string con unidad (`'20px'`)
- No puedes usar pseudo-clases como `:hover` directamente en `style`

**Cuándo usarlo:**
- Estilos dinámicos que dependen de estado/props
- Ajustes visuales puntuales

---

### 3. Clases condicionales

Puedes cambiar clases según condiciones (estado o props).

```jsx
function TaskItem({ task }) {
	return (
		<li className={task.completed ? 'task done' : 'task'}>
			{task.title}
		</li>
	);
}
```

```css
.task {
	color: #222;
}

.task.done {
	color: #888;
	text-decoration: line-through;
}
```

Esto es clave para reflejar estados visuales: completado, error, loading, activo, etc.

---

### 4. CSS Modules

Evitan colisiones globales de clases. El scope del CSS queda limitado al componente.

```css
/* TasksCard.module.css */
.card {
	background: #f0f0f0;
	padding: 20px;
	border-radius: 8px;
}
```

```jsx
import styles from './TasksCard.module.css';

export function TasksCard() {
	return <div className={styles.card}>Contenido</div>;
}
```

**Ventajas:**
- No ensucia el espacio global de clases
- Muy útil en proyectos medianos/grandes

---

### 5. Librerías y frameworks CSS (futuro)

Además de CSS directo, hay otra forma muy común de trabajar estilos en React usando librerías/frameworks CSS.

Opciones que veremos más adelante:

- **Tailwind CSS**: enfoque utility-first (clases pequeñas directamente en JSX)
- **shadcn/ui**: componentes UI reutilizables construidos sobre Tailwind + Radix

Ejemplo rápido con Tailwind:

```jsx
export function TasksCardComponent({ tasks }) {
	return (
		<div className="rounded-lg bg-gray-100 p-5 text-gray-700">
			<h2 className="mb-3 text-xl font-bold">Tasks</h2>
			<ul className="space-y-2">
				{tasks.map((task) => (
					<li key={task.id} className="border-b border-gray-300 pb-2">
						{task.title}
					</li>
				))}
			</ul>
		</div>
	);
}
```

**Ruta del curso/proyecto:**
1. Primero dominar CSS directo (etapa actual)
2. Luego pasar a Tailwind
3. Después trabajar componentes de diseño con shadcn/ui

---

## Diferencias clave: `className` vs `style`

- `className`: mejor para estilos grandes, reutilizables y mantenibles
- `style`: mejor para estilos dinámicos y pequeños ajustes

Regla práctica:
- Usa `className` como base
- Usa `style` solo cuando necesites valores dinámicos en runtime

---

## Ejemplo aplicado a tu TaskApp

### Versión actual (tu código real)

Tu proyecto ahora tiene dos componentes en `Tasks.js`:

- `TasksCardComponent`: lista de tareas con clases CSS
- `TasksReadyComponent`: estado de tarea usando clases condicionales

Esto es una buena base porque usa `className` como estrategia principal.

### Versión recomendada (más limpia y escalable)

Centraliza estilos en `tasks.css` y usa clases condicionales para estados (`ready`, `pending`).

```css
.card {
	background: #f0f0f0;
	padding: 20px;
	color: #333;
	border-radius: 8px;
}

.card-title {
	font-weight: 700;
}
```

```jsx
import './tasks.css';

export function TasksCardComponent({ tasks }) {
	return (
		<div className="card">
			<h2 className="card-title">Tasks</h2>
			<ul className="task-list">
				{tasks.map((task) => (
					<li key={task.id}>{task.title}</li>
				))}
			</ul>
		</div>
	);
}

export function TasksReadyComponent({ ready }) {
	return (
		<div className="ready ready-card">
			<h2 className="ready-title">Estado de tarea</h2>
			<span>{ready ? 'Tarea realizada' : 'Tarea no realizada'}</span>
		</div>
	);
}
```

Con esto, el componente `TasksReadyComponent` queda como ejemplo directo de estilos condicionales en React.

---

## Buenas prácticas para estilos en React

- Mantén una convención de nombres (`card`, `card-title`, `task-item`)
- Evita mezclar demasiados estilos inline con CSS externo
- Agrupa estilos por componente o por feature
- Reutiliza clases utilitarias para patrones repetidos
- Si el proyecto crece, evalúa CSS Modules o styled-components

---

## Errores comunes

1. Usar `class` en vez de `className` en JSX
2. Escribir propiedades CSS con guiones en `style` (`font-weight`), debe ser `fontWeight`
3. Sobrecargar inline styles y perder mantenibilidad
4. Repetir el mismo bloque de estilos en varios componentes
5. No separar estilos globales de estilos específicos de componente

---

## 📋 Checklist rápido

- ✅ ¿Estoy usando `className` en lugar de `class`?
- ✅ ¿Los estilos grandes están en archivos `.css`?
- ✅ ¿Uso inline styles solo para valores dinámicos?
- ✅ ¿Mis nombres de clases son consistentes?
- ✅ ¿Evito duplicar estilos?

---

## 🚀 Siguientes temas

Después de dominar estilos en React, puedes continuar con:

1. Manejo de estado con `useState`
2. Efectos con `useEffect`
3. Formularios controlados
4. Organización por componentes reutilizables
