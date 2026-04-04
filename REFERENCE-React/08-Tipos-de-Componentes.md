# 08 - Tipos de Componentes en React

> Aviso rápido: en React existen componentes funcionales y componentes de clase. Los de clase **sí existen y sí se pueden usar**, pero para código nuevo están **desaconsejados**.

---
## Índice de Contenidos

- [08 - Tipos de Componentes en React](#08---tipos-de-componentes-en-react)
  - [Índice de Contenidos](#índice-de-contenidos)
  - [¿Qué es un componente en React?](#qué-es-un-componente-en-react)
  - [Tipos principales de componentes](#tipos-principales-de-componentes)
    - [1. Componentes Funcionales (recomendados)](#1-componentes-funcionales-recomendados)
    - [2. Componentes de Clase (legacy)](#2-componentes-de-clase-legacy)
  - [¿Cuál usar hoy?](#cuál-usar-hoy)
  - [Comparación rápida](#comparación-rápida)
  - [Ejemplos aplicados a TaskApp](#ejemplos-aplicados-a-taskapp)
    - [Ejemplo funcional (estilo actual)](#ejemplo-funcional-estilo-actual)
    - [Ejemplo de clase (compatible, pero no recomendado para nuevo código)](#ejemplo-de-clase-compatible-pero-no-recomendado-para-nuevo-código)
  - [Ventajas y desventajas](#ventajas-y-desventajas)
  - [📋 Checklist rápido](#-checklist-rápido)
  - [🚀 Siguientes temas](#-siguientes-temas)

---

## ¿Qué es un componente en React?

Un componente es una pieza reutilizable de interfaz (UI) que puede recibir datos (props), manejar estado y renderizar elementos JSX.

En React, la app se construye combinando componentes pequeños.

---

## Tipos principales de componentes

### 1. Componentes Funcionales (recomendados)

Son funciones de JavaScript que retornan JSX.

```jsx
function Saludo({ nombre }) {
	return <h2>Hola, {nombre}</h2>;
}
```

Con Hooks (`useState`, `useEffect`, etc.), los componentes funcionales pueden hacer todo lo necesario en una app moderna.

---

### 2. Componentes de Clase (legacy)

Son clases que extienden `React.Component`.

> Nota importante: esta forma **sí existe** en React y **sí se puede usar**, pero está **desaconsejada** para crear componentes nuevos hoy en día.

```jsx
import React from 'react';

class SaludoClase extends React.Component {
	render() {
		return <h2>Hola, {this.props.nombre}</h2>;
	}
}
```

Se usan más en proyectos antiguos o código heredado.

---

## ¿Cuál usar hoy?

Regla actual del ecosistema React:

- ✅ **Usar componentes funcionales** para código nuevo
- ⚠️ **Componentes de clase están desaconsejados para nuevo desarrollo**, pero **sí se pueden usar** y seguir manteniendo

Es decir: no están prohibidos. Solo que hoy el estándar recomendado es funcional + Hooks.

---

## Comparación rápida

| Criterio | Funcionales | Clase |
| --- | --- | --- |
| Sintaxis | Más simple | Más verbosa |
| Estado | `useState` | `this.state` |
| Efectos | `useEffect` | Ciclos de vida (`componentDidMount`, etc.) |
| Recomendación actual | Sí | Legacy |
| Código nuevo | Recomendado | Desaconsejado |

---

## Ejemplos aplicados a TaskApp

### Ejemplo funcional (estilo actual)

```jsx
export function TasksReadyComponent({ ready }) {
	return (
		<div className="ready ready-card">
			<h2 className="ready-title">Estado de tarea</h2>
			<span>{ready ? 'Tarea realizada' : 'Tarea no realizada'}</span>
		</div>
	);
}
```

Este enfoque es el que estás usando en el proyecto, y es el correcto para React moderno.

### Ejemplo de clase (compatible, pero no recomendado para nuevo código)

```jsx
import React from 'react';

export class TasksReadyClassComponent extends React.Component {
	render() {
		const { ready } = this.props;

		return (
			<div className="ready ready-card">
				<h2 className="ready-title">Estado de tarea</h2>
				<span>{ready ? 'Tarea realizada' : 'Tarea no realizada'}</span>
			</div>
		);
	}
}
```

Este código funciona, pero solo conviene usarlo cuando trabajas sobre un código antiguo que ya está hecho con clases.

---

## Ventajas y desventajas

**Funcionales**
- Ventajas: menos código, más legibles, mejor integración con Hooks
- Desventajas: al inicio, Hooks pueden parecer abstractos

**Clase**
- Ventajas: útil para entender código legacy
- Desventajas: más complejos, más boilerplate, menos usados hoy

---

## 📋 Checklist rápido

- ✅ ¿Estoy creando componentes nuevos como funciones?
- ✅ ¿Uso Hooks para estado y efectos?
- ✅ ¿Evito crear componentes de clase en código nuevo?
- ✅ ¿Sé leer componentes de clase si aparecen en un proyecto viejo?

---

## 🚀 Siguientes temas

Después de entender tipos de componentes, continúa con:

1. `useState` para manejar estado local
2. `useEffect` para efectos secundarios
3. Renderizado condicional y listas
4. Comunicación entre componentes (props + lifting state)
