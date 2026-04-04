# Proyecto de referencia: Task App con React

> Este documento es la guía maestra del proyecto. Define qué es, por qué existe, cómo está estructurado y en qué orden avanzar.

---

## 📌 Curso base

Este proyecto es una aplicación de práctica basada en el siguiente curso de YouTube:

- **Video guía**: https://www.youtube.com/watch?v=rLoWMU4L_qE
- **Autor**: Fazt Code
- **Duración**: ~4h 42 minutos
- **Idioma**: Español

La documentación de este repositorio funciona como mapa de estudio y guía de implementación paso a paso.

---

## 🎯 Objetivo del proyecto

Construir una aplicación completa de tareas (Todo App) desde cero, aplicando todos los fundamentos de React que se enseñan en el curso:

- **JSX** — sintaxis XML dentro de JavaScript
- **Componentes** — piezas reutilizables de la interfaz
- **Props** — comunicación entre componentes (datos de arriba hacia abajo)
- **Eventos** — manejo de interacciones del usuario
- **useState** — estado local en componentes funcionales
- **useEffect** — efectos secundarios y ciclo de vida
- **Fetch API** — consumo de datos externos
- **Separación de componentes** — organización del código
- **Context API** — estado global sin librerías externas
- **Estilos** — CSS, estilos en línea y librerías como Tailwind
- **Deploy** — publicar la app en producción

---

## ⚙️ Estado actual del repositorio

El proyecto actual usa **Create React App**, no Vite. Esto implica:

- **Punto de entrada**: `src/index.js`
- **Componente raíz**: `src/App.js`
- **Build tool**: `react-scripts` (abstrae webpack)
- **Puerto de desarrollo**: Puerto 3000

Por esa razón, esta documentación está alineada con Create React App para evitar mezclar configuraciones distintas.

---

## 📂 Ruta de aprendizaje del curso

Esta es la secuencia que debería seguirse dentro del proyecto, ordenada por conceptos:

1. Introducción a React
2. Qué es React y cómo funciona
3. Configuración del entorno
4. Estructura del proyecto
5. JSX
6. Componentes
7. Props
8. Eventos
9. useState
10. useEffect
11. Fetch API
12. Proyecto práctico: Todo App
13. Separación de componentes
14. Context API
15. Estilos
16. Deploy

---

## 📚 Objetivos de aprendizaje

Al terminar este proyecto deberías poder:

✅ Entender la arquitectura basada en componentes de React.  
✅ Crear interfaces dinámicas con JSX.  
✅ Comunicar componentes mediante props.  
✅ Manejar estado local con useState.  
✅ Gestionar efectos secundarios con useEffect.  
✅ Consumir datos externos con fetch.  
✅ Organizar una app pequeña en componentes reutilizables.  
✅ Escalar una Todo App hacia una estructura más mantenible.  

---

## 📁 Estructura objetivo recomendada

Como este repositorio está en Create React App, la estructura sugerida es:

```text
src/
├── components/
│   ├── TaskForm.js       # Formulario para crear tareas
│   ├── TaskItem.js       # Componente de una tarea individual
│   └── TaskList.js       # Componente que lista todas las tareas
│
├── context/
│   └── TaskContext.js    # Contexto global (más adelante en el curso)
│
├── hooks/
│   └── useTasks.js       # Hook personalizado para lógica de tareas
│
├── services/
│   └── taskService.js    # Funciones para APIs o almacenamiento
│
├── App.js                # Componente principal
├── App.css               # Estilos globales
├── index.js              # Punto de entrada
└── index.css             # Estilos base
```

**Función de cada carpeta:**

| Carpeta | Propósito |
|---------|-----------|
| `components/` | Componentes reutilizables de la interfaz |
| `context/` | Estado global con Context API (fase 2) |
| `hooks/` | Lógica reutilizable basada en hooks |
| `services/` | Llamadas a APIs, almacenamiento local, etc. |

---

## ⚡ Flujo de desarrollo recomendado

Para avanzar con orden, sigue estos pasos:

### Fase 1: Fundamentos (sin API)
1. Limpiar la plantilla inicial de Create React App
2. Crear la estructura de carpetas
3. Construir interfaz mínima (formulario + lista vacía)
4. Agregar estado con useState
5. Implementar crear, completar y eliminar tareas

### Fase 2: Separación de código
6. Dividir en componentes pequeños
7. Pasar datos con props
8. Crear hook personalizado `useTasks()`

### Fase 3: Datos remotos y estado global
9. Consumir API o datos de localStorage
10. Introducir Context API para estado global
11. Refactorizar `useTasks()` con contexto

### Fase 4: Estilos y deploy
12. Aplicar estilos (CSS, Tailwind o similar)
13. Publicar en Github Pages

---

## 🎁 Alcance de la primera versión (MVP)

La app debe permitir:

- ✅ Crear una nueva tarea
- ✅ Listar todas las tareas
- ✅ Marcar tareas como completadas
- ✅ Eliminar tareas
- ✅ Interfaz clara y funcional
- ❌ (No necesita autenticación, API real compleja, etc.)



## Nota importante: Create React App vs Vite

El video muestra ambas configuraciones. En este proyecto **usamos Create React App**, pero los conceptos son idénticos. La diferencia está solo en el tooling, no en React en sí.