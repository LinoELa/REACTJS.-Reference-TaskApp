# 09 - Event Handlers in React

## 📑 Índice

- [09 - Event Handlers in React](#09---event-handlers-in-react)
	- [📑 Índice](#-índice)
	- [Introducción](#introducción)
	- [¿Qué es un Event Handler?](#qué-es-un-event-handler)
	- [Eventos Más Comunes](#eventos-más-comunes)
		- [1. **onClick** - Clic del ratón](#1-onclick---clic-del-ratón)
		- [2. **onChange** - Cambio en inputs/textareas](#2-onchange---cambio-en-inputstextareas)
		- [3. **onSubmit** - Envío de formulario](#3-onsubmit---envío-de-formulario)
		- [4. **onFocus** - Cuando el elemento recibe foco](#4-onfocus---cuando-el-elemento-recibe-foco)
		- [5. **onBlur** - Cuando el elemento pierde foco](#5-onblur---cuando-el-elemento-pierde-foco)
		- [6. **onMouseEnter / onMouseLeave** - Pasar el ratón](#6-onmouseenter--onmouseleave---pasar-el-ratón)
		- [7. **onKeyDown / onKeyUp** - Teclas del teclado](#7-onkeydown--onkeyup---teclas-del-teclado)
		- [8. **onDoubleClick** - Doble clic](#8-ondoubleclick---doble-clic)
	- [Otros Eventos Comunes](#otros-eventos-comunes)
	- [El Objeto Event (SyntheticEvent)](#el-objeto-event-syntheticevent)
	- [Debuguear Eventos en la Consola del Browser](#debuguear-eventos-en-la-consola-del-browser)
		- [Paso 1: Abre la Consola del Developer Tools](#paso-1-abre-la-consola-del-developer-tools)
		- [Paso 2: Usa console.log para ver eventos](#paso-2-usa-consolelog-para-ver-eventos)
		- [Paso 3: Monitorear todos los eventos (Truco avanzado)](#paso-3-monitorear-todos-los-eventos-truco-avanzado)
		- [Paso 4: Ver el Event Listener del Navegador](#paso-4-ver-el-event-listener-del-navegador)
	- [Mejores Prácticas](#mejores-prácticas)
		- [✅ DO (Haz esto):](#-do-haz-esto)
		- [❌ DON'T (No hagas esto):](#-dont-no-hagas-esto)
		- [✅ Siempre usa preventDefault en formularios:](#-siempre-usa-preventdefault-en-formularios)
	- [Ejemplo Completo: Formulario Interactivo](#ejemplo-completo-formulario-interactivo)
	- [Resumen](#resumen)
	- [Ejemplo Completo: App con Múltiples Event Handlers (index.js)](#ejemplo-completo-app-con-múltiples-event-handlers-indexjs)
		- [Puntos Clave de este Ejemplo:](#puntos-clave-de-este-ejemplo)
		- [Cómo Probar Este Código:](#cómo-probar-este-código)
	- [Errores Comunes ⚠️](#errores-comunes-️)
		- [1. **Invocar la función en lugar de pasar la referencia**](#1-invocar-la-función-en-lugar-de-pasar-la-referencia)
		- [2. **Olvidar preventDefault() en formularios**](#2-olvidar-preventdefault-en-formularios)
		- [3. **No acceder a event en callbacks asincronos**](#3-no-acceder-a-event-en-callbacks-asincronos)
		- [4. **Crear funciones anónimas en cada render**](#4-crear-funciones-anónimas-en-cada-render)
	- [Throttling y Debouncing 🚀](#throttling-y-debouncing-)
		- [Ejemplo: Debouncing con onChange](#ejemplo-debouncing-con-onchange)
	- [Event Bubbling y Capturing 🫧](#event-bubbling-y-capturing-)
	- [Tips de Rendimiento 🚀](#tips-de-rendimiento-)
		- [1. **Usa useCallback para handlers en componentes hijos**](#1-usa-usecallback-para-handlers-en-componentes-hijos)
		- [2. **Evita crear handlers inline en listas grandes**](#2-evita-crear-handlers-inline-en-listas-grandes)
	- [Quick Reference - Resumen Visual 📋](#quick-reference---resumen-visual-)
		- [Checklist antes de enviar tu código:](#checklist-antes-de-enviar-tu-código)
	- [Próximos Temas 🎓](#próximos-temas-)

---

## Introducción
En esta sección, vamos a hablar sobre los **event handlers** en React, que son funciones que se ejecutan en respuesta a eventos del usuario, como clics, cambios de formulario, escribir en inputs, etc. Los event handlers son la forma en que React responde a la interacción del usuario.

Aprenderemos:
- Los eventos más comunes y cómo usarlos
- Cómo crear event handlers correctamente
- Cómo debuguear eventos usando la consola del browser
- Mejores prácticas y patrones comunes
- Errores comunes y cómo evitarlos
- Optimización de rendimiento

---

## ¿Qué es un Event Handler?

Un event handler es una función que se ejecuta cuando ocurre un evento específico en tu componente. En React, conectas un event handler a un elemento pasándolo como prop.

```jsx
function MiComponente() {
  const handleClick = () => {
    console.log("¡Le hicieron clic!");
  };

  return <button onClick={handleClick}>Haz clic aquí</button>;
}
```

**Sintaxis importante:**
- El nombre del evento en React inicia con mayúscula: `onClick`, `onChange`, `onSubmit`
- Pasas la **función referencia**, no la invocas: `onClick={handleClick}` ✅
- NO hagas esto: `onClick={handleClick()}` ❌ (esto ejecutaría inmediatamente)

---

## Eventos Más Comunes

### 1. **onClick** - Clic del ratón

Se ejecuta cuando el usuario hace clic en un elemento.

```jsx
function BotonEjemplo() {
  const handleClick = () => {
    console.log("¡Botón clickeado!");
  };

  return <button onClick={handleClick}>Haz clic</button>;
}
```

**Variante con parámetros:**
```jsx
function BotonConParametros() {
  const handleClick = (id) => {
    console.log("Clickiste el botón con ID:", id);
  };

  return (
    <button onClick={() => handleClick(123)}>
      Enviar dato
    </button>
  );
}
```

---

### 2. **onChange** - Cambio en inputs/textareas

Se ejecuta cada vez que el usuario cambia el valor de un input, textarea, o select.

```jsx
function InputEjemplo() {
  const handleChange = (event) => {
    console.log("Nuevo valor:", event.target.value);
  };

  return (
    <input 
      type="text" 
      onChange={handleChange} 
      placeholder="Escribe algo..."
    />
  );
}
```

**Con state para controlar el valor:**
```jsx
import { useState } from 'react';

function InputControlado() {
  const [valor, setValor] = useState('');

  const handleChange = (event) => {
    setValor(event.target.value);
  };

  return (
    <>
      <input 
        type="text" 
        value={valor}
        onChange={handleChange}
      />
      <p>Escribiste: {valor}</p>
    </>
  );
}
```

---

### 3. **onSubmit** - Envío de formulario

Se ejecuta cuando se envía un formulario (user presiona Enter o clica el botón Submit).

```jsx
function Formulario() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita recargar la página
    console.log("Formulario enviado");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tu nombre" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

**Advertencia importante:** Siempre usa `event.preventDefault()` en onSubmit para evitar que la página se recargue.

---

### 4. **onFocus** - Cuando el elemento recibe foco

Se ejecuta cuando el usuario hace clic o usa Tab para entrar en un input.

```jsx
function InputConFoco() {
  const handleFocus = () => {
    console.log("¡El input tiene foco!");
  };

  return (
    <input 
      type="text" 
      onFocus={handleFocus}
      placeholder="Haz clic aquí"
    />
  );
}
```

---

### 5. **onBlur** - Cuando el elemento pierde foco

Se ejecuta cuando el usuario sale del input (Tab o clic afuera).

```jsx
function InputConBlur() {
  const handleBlur = () => {
    console.log("¡El input perdió foco!");
  };

  return (
    <input 
      type="text" 
      onBlur={handleBlur}
      placeholder="Escribe y luego sale"
    />
  );
}
```

---

### 6. **onMouseEnter / onMouseLeave** - Pasar el ratón

Se ejecutan cuando entras o sales con el ratón por encima de un elemento.

```jsx
function Hover() {
  const handleEnter = () => {
    console.log("¡Ratón entró!");
  };

  const handleLeave = () => {
    console.log("¡Ratón salió!");
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ padding: "20px", backgroundColor: "lightblue" }}
    >
      Pasa el ratón aquí
    </div>
  );
}
```

---

### 7. **onKeyDown / onKeyUp** - Teclas del teclado

Se ejecutan cuando presionas (onKeyDown) o sueltas (onKeyUp) una tecla.

```jsx
function InputConTeclas() {
  const handleKeyDown = (event) => {
    console.log("Tecla presionada:", event.key);
    
    // Ejemplo: hacer algo especial si presiona Enter
    if (event.key === 'Enter') {
      console.log("¡Presionaste Enter!");
    }
  };

  return (
    <input 
      type="text" 
      onKeyDown={handleKeyDown}
      placeholder="Presiona una tecla"
    />
  );
}
```

---

### 8. **onDoubleClick** - Doble clic

Se ejecuta cuando haces doble clic en un elemento.

```jsx
function BotonDobleClick() {
  const handleDoubleClick = () => {
    console.log("¡DOBLE CLIC!");
  };

  return (
    <button onDoubleClick={handleDoubleClick}>
      Hazme doble clic
    </button>
  );
}
```

---

## Otros Eventos Comunes

| Evento | Cuándo ocurre | Ejemplo |
|--------|---------------|---------|
| `onClick` | Clic del ratón | `<button onClick={handler}>` |
| `onChange` | Input/select cambia | `<input onChange={handler}>` |
| `onSubmit` | Forma enviada | `<form onSubmit={handler}>` |
| `onFocus` | Elemento recibe foco | `<input onFocus={handler}>` |
| `onBlur` | Elemento pierde foco | `<input onBlur={handler}>` |
| `onMouseEnter` | Ratón entra al elemento | `<div onMouseEnter={handler}>` |
| `onMouseLeave` | Ratón sale del elemento | `<div onMouseLeave={handler}>` |
| `onKeyDown` | Tecla presionada | `<input onKeyDown={handler}>` |
| `onKeyUp` | Tecla soltada | `<input onKeyUp={handler}>` |
| `onDoubleClick` | Doble clic | `<button onDoubleClick={handler}>` |
| `onScroll` | Página scroll | `<div onScroll={handler}>` |
| `onChange` | Select cambia | `<select onChange={handler}>` |

---

## El Objeto Event (SyntheticEvent)

React envuelve los eventos nativos del navegador en objetos llamados **SyntheticEvent**. Este objeto tiene propiedades útiles:

```jsx
function EventoCompleto() {
  const handleEvent = (event) => {
    console.log("Objeto completo:", event);
    console.log("Tipo de evento:", event.type); // "click", "change", etc.
    console.log("Valor del target:", event.target.value); // Solo si es input
    console.log("Elemento target:", event.target); // El elemento que disparó el evento
    console.log("Marca de tiempo:", event.timeStamp); // Cuándo ocurrió
  };

  return (
    <input 
      type="text"
      onChange={handleEvent}
      placeholder="Escribe algo"
    />
  );
}
```

**Propiedades importantes del event:**
- `event.target` - El elemento que disparó el evento
- `event.target.value` - El valor actual (para inputs)
- `event.type` - Tipo de evento ("click", "change", etc.)
- `event.preventDefault()` - Evita el comportamiento por defecto
- `event.stopPropagation()` - Evita que el evento suba al padre

---

## Debuguear Eventos en la Consola del Browser

### Paso 1: Abre la Consola del Developer Tools

Presiona **F12** o **Ctrl+Shift+I**, luego ve a la pestaña **"Console"**.

### Paso 2: Usa console.log para ver eventos

```jsx
function DebugEventos() {
  const handleClick = (event) => {
    // Esto sale en la consola del browser
    console.log("Evento:", event);
    console.log("Tipo:", event.type);
    console.log("Target:", event.target);
  };

  return <button onClick={handleClick}>Haz clic y mira la consola</button>;
}
```

### Paso 3: Monitorear todos los eventos (Truco avanzado)

En la consola, escribe:
```javascript
// Esto registra TODOS los eventos que ocurren en la página
document.addEventListener('click', (e) => console.log('Click en:', e.target));
document.addEventListener('change', (e) => console.log('Change en:', e.target));
document.addEventListener('keydown', (e) => console.log('Tecla:', e.key));
```

### Paso 4: Ver el Event Listener del Navegador

En el DevTools:
1. Haz clic derecho en un elemento
2. Selecciona "Inspect" (Inspeccionar)
3. Ve a la pestaña "Event Listeners"
4. Verás todos los eventos escuchados en ese elemento

---

## Mejores Prácticas

### ✅ DO (Haz esto):

```jsx
// Declara el handler ANTES del return
function Componente() {
  const handleClick = () => {
    console.log("Click");
  };

  return <button onClick={handleClick}>Clic</button>;
}
```

### ❌ DON'T (No hagas esto):

```jsx
// NO invoques la función
function Componente() {
  return <button onClick={handleClick()}>Clic</button>; // ❌ Error!
}

// NO declares inline si es lógica compleja
function Componente() {
  return (
    <button onClick={() => {
      // Mucho código aquí... mejor extraer a función
      console.log("Hola");
      console.log("Mundo");
    }}>
      Clic
    </button>
  );
}
```

### ✅ Siempre usa preventDefault en formularios:

```jsx
function Formulario() {
  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Importante!
    // Aquí hacer algo con los datos
  };

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```

---

## Ejemplo Completo: Formulario Interactivo

```jsx
import { useState } from 'react';

function FormularioCompleto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleNombreChange = (event) => {
    console.log("Nombre cambiado a:", event.target.value);
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    console.log("Email cambiado a:", event.target.value);
    setEmail(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleFocus = (field) => {
    console.log(`Foco en: ${field}`);
  };

  const handleBlur = (field) => {
    console.log(`Perdió foco: ${field}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado:", { nombre, email, mensaje });
    alert(`¡Gracias, ${nombre}! Tu mensaje fue recibido.`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "20px" }}>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            onFocus={() => handleFocus("nombre")}
            onBlur={() => handleBlur("nombre")}
            placeholder="Tu nombre"
          />
        </label>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email")}
            placeholder="Tu email"
          />
        </label>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>
          Mensaje:
          <textarea
            value={mensaje}
            onChange={handleMensajeChange}
            placeholder="Tu mensaje"
            rows="4"
          />
        </label>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioCompleto;
```

---

## Resumen

| Concepto | Descripción |
|----------|-------------|
| **Event Handler** | Función que se ejecuta cuando ocurre un evento |
| **onClick** | Clic del ratón |
| **onChange** | Cambio en input/select/textarea |
| **onSubmit** | Envío de formulario |
| **SyntheticEvent** | Objeto que React usa para envolver eventos nativos |
| **event.target** | El elemento que disparó el evento |
| **event.preventDefault()** | Evita comportamiento por defecto (reload en forms) |
| **Console** | Lugar donde ves console.log() para debuguear |

---

## Ejemplo Completo: App con Múltiples Event Handlers (index.js)

Este es un ejemplo práctico con **inputs CON y SIN funcionalidad**, mostrando diferentes event handlers en acción:

```jsx
function App() {
  // ==================== ONCHANGE ====================
  // Se ejecuta cada vez que el usuario escribe en un input
  const handleChange = (event) => {
    console.log("📝 onChange - Valor actual:", event.target.value);
  };

  // ==================== ONCLICK ====================
  // Se ejecuta cuando se hace clic en un elemento
  const handleButtonClick = (buttonName) => {
    console.log("🖱️ onClick - Botón presionado:", buttonName);
  };

  // ==================== ONSUBMIT ====================
  // Se ejecuta cuando se envía un formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita recargar la página
    console.log("✅ onSubmit - Formulario enviado!");
  };

  // ==================== ONFOCUS ====================
  // Se ejecuta cuando un input recibe foco
  const handleFocus = (fieldName) => {
    console.log("👁️ onFocus - Foco en:", fieldName);
  };

  // ==================== ONBLUR ====================
  // Se ejecuta cuando un input pierde foco
  const handleBlur = (fieldName) => {
    console.log("👁️ onBlur - Perdió foco:", fieldName);
  };

  // ==================== ONKEYDOWN ====================
  // Se ejecuta cuando presionas una tecla
  const handleKeyDown = (event) => {
    console.log("⌨️ onKeyDown - Tecla presionada:", event.key);
    if (event.key === "Enter") {
      console.log("   → ¡Presionaste Enter!");
    }
  };

  // ==================== ONMOUSEENTER/ONMOUSELEAVE ====================
  const handleMouseEnter = (elementName) => {
    console.log("🐭 onMouseEnter - Ratón entró en:", elementName);
  };

  const handleMouseLeave = (elementName) => {
    console.log("🐭 onMouseLeave - Ratón salió de:", elementName);
  };

  // ==================== ONDOUBLECLICK ====================
  const handleDoubleClick = () => {
    console.log("🖱️🖱️ onDoubleClick - ¡Doble clic!");
  };

  return (
    <div className="tasks-layout">
      <h2 style={{ marginTop: "30px", marginBottom: "10px" }}>
        📚 Event Handlers Demo
      </h2>
      <p style={{ fontSize: "12px", color: "#666" }}>
        Abre F12 → Console e interactúa con los elementos
      </p>

      {/* ==================== 1. onChange - INPUT SIN ESTADO ==================== */}
      {/* Simplemente registra el cambio en consola, sin guardar valor */}
      <div style={{ marginBottom: "15px" }}>
        <h3>1. onChange - Escribe algo:</h3>
        <input
          id="input-change"
          type="text"
          onChange={handleChange}
          placeholder="Escribe y mira la consola..."
          style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
        />
      </div>

      {/* ==================== 2. onFocus & onBlur ==================== */}
      <div style={{ marginBottom: "15px" }}>
        <h3>2. onFocus & onBlur:</h3>
        <input
          id="input-focus"
          type="text"
          onFocus={() => handleFocus("input-focus")}
          onBlur={() => handleBlur("input-focus")}
          placeholder="Haz clic aquí y luego sal..."
          style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
        />
      </div>

      {/* ==================== 3. onKeyDown ==================== */}
      <div style={{ marginBottom: "15px" }}>
        <h3>3. onKeyDown - Presiona Enter:</h3>
        <input
          id="input-keydown"
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Presiona cualquier tecla..."
          style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
        />
      </div>

      {/* ==================== 4. onClick - SIN INPUT ==================== */}
      {/* Botón que solo hace clic, sin interacción con formulario */}
      <div style={{ marginBottom: "15px" }}>
        <h3>4. onClick - Haz clic:</h3>
        <button
          onClick={() => handleButtonClick("demo-button")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Haz clic aquí
        </button>
      </div>

      {/* ==================== 5. onDoubleClick - SIN INPUT ==================== */}
      <div style={{ marginBottom: "15px" }}>
        <h3>5. onDoubleClick - Doble clic:</h3>
        <button
          onDoubleClick={handleDoubleClick}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Hazme doble clic
        </button>
      </div>

      {/* ==================== 6. onMouseEnter/Leave - SIN INPUT ==================== */}
      <div
        style={{ marginBottom: "15px" }}
        onMouseEnter={() => handleMouseEnter("demo-box")}
        onMouseLeave={() => handleMouseLeave("demo-box")}
      >
        <h3>6. onMouseEnter & onMouseLeave:</h3>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            border: "2px solid #ddd",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          Pasa el ratón por aquí 🐭
        </div>
      </div>

      {/* ==================== 7. onSubmit - FORMULARIO CON INPUT ==================== */}
      {/* Combina onChange + onSubmit para una experiencia completa */}
      <div style={{ marginBottom: "15px" }}>
        <h3>7. onSubmit - Formulario:</h3>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Escribe tu nombre..."
            style={{ padding: "8px", flex: 1, boxSizing: "border-box" }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              backgroundColor: "#ffc107",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
```

### Puntos Clave de este Ejemplo:

**1. Inputs SIN Estado (Uncontrolled inputs):**
```jsx
<input onChange={handleChange} placeholder="Escribe y mira la consola..." />
```
- El valor NO se guarda en state
- Solo registramos logs en consola
- El input guarda su propio valor internamente (DOM)

**2. Buttons SIN Input:**
```jsx
<button onClick={() => handleButtonClick("demo-button")}>
  Haz clic aquí
</button>
```
- Botones que NO interactúan con inputs
- Solo disparan acciones cuando se clickean
- Perfectos para acciones independientes

**3. Formularios CON Input:**
```jsx
<form onSubmit={handleSubmit}>
  <input onChange={handleChange} />
  <button type="submit">Enviar</button>
</form>
```
- El input cambia con `onChange`
- El formulario se envía con `onSubmit`
- `event.preventDefault()` evita recargar la página

### Cómo Probar Este Código:

1. **Abre el app en el browser**
2. **Presiona F12 o Ctrl+Shift+I**
3. **Ve a la pestaña "Console"**
4. **Interactúa con cada elemento:**
   - Escribe en los inputs → verás logs
   - Haz clic en botones → verás logs
   - Pasa el ratón → verás logs
   - Envía el formulario → evento onSubmit

**Verás en consola algo como:**
```javascript
📝 onChange - Valor actual: h
📝 onChange - Valor actual: ho
📝 onChange - Valor actual: hol
📝 onChange - Valor actual: hola
👁️ onFocus - Foco en: input-focus
⌨️ onKeyDown - Tecla presionada: Enter
   → ¡Presionaste Enter!
🐭 onMouseEnter - Ratón entró en: demo-box
🐭 onMouseLeave - Ratón salió de: demo-box
✅ onSubmit - Formulario enviado!
```

---
## Errores Comunes ⚠️

### 1. **Invocar la función en lugar de pasar la referencia**

❌ **MAL:**
```jsx
<button onClick={handleClick()}>Clic</button>  // ❌ Se ejecuta inmediatamente
```

✅ **BIEN:**
```jsx
<button onClick={handleClick}>Clic</button>  // ✅ Se ejecuta al clickear
```

### 2. **Olvidar preventDefault() en formularios**

❌ **MAL:**
```jsx
const handleSubmit = (event) => {
  console.log("Enviando...");
  // La página se recargará !
};

<form onSubmit={handleSubmit}>...</form>
```

✅ **BIEN:**
```jsx
const handleSubmit = (event) => {
  event.preventDefault();  // ✅ Previene recarga
  console.log("Enviando...");
};

<form onSubmit={handleSubmit}>...</form>
```

### 3. **No acceder a event en callbacks asincronos**

❌ **MAL:**
```jsx
const handleChange = (event) => {
  setTimeout(() => {
    console.log(event.target.value);  // ❌ event podría ser null
  }, 1000);
};
```

✅ **BIEN:**
```jsx
const handleChange = (event) => {
  const valor = event.target.value;  // ✅ Guarda el valor primero
  setTimeout(() => {
    console.log(valor);
  }, 1000);
};
```

### 4. **Crear funciones anónimas en cada render**

❌ **MAL (ralenta la app):**
```jsx
<button onClick={() => handleClick(id)}>Click</button>
// Se crea una NUEVA función anónima en cada render
```

✅ **BIEN (para funciones complejas):**
```jsx
const handleClickWithId = useCallback(() => {
  handleClick(id);
}, [id]);

<button onClick={handleClickWithId}>Click</button>
```

---

## Throttling y Debouncing 🚀

Para eventos que se disparan MUY frecuentemente (como `onScroll`, `onChange`, `onMouseMove`), es buena idea usar **throttling** o **debouncing** para mejorar el rendimiento.

### Ejemplo: Debouncing con onChange

```jsx
import { useState } from 'react';

function SearchInput() {
  const [query, setQuery] = useState('');

  // Función de búsqueda (simulada)
  const search = (termo) => {
    console.log("Buscando:", termo);
    // Aquí irían llamadas a API, etc.
  };

  // Simple debounce sin librerías
  let timeoutId;
  const handleChange = (event) => {
    const valor = event.target.value;
    setQuery(valor);
    
    // Limpiar el timeout anterior
    clearTimeout(timeoutId);
    
    // Ejecutar después de 500ms sin cambios
    timeoutId = setTimeout(() => {
      search(valor);
    }, 500);
  };

  return (
    <input 
      value={query}
      onChange={handleChange}
      placeholder="Buscar..."
    />
  );
}
```

**Con librerías como `lodash`:**
```jsx
import { debounce } from 'lodash';

const handleChange = debounce((event) => {
  console.log(event.target.value);
}, 500);

<input onChange={handleChange} />
```

---

## Event Bubbling y Capturing 🫧

React usa el modelo de **bubbling** por defecto. Aquí te muestro cómo funciona:

```jsx
function EventBubbling() {
  const handleChildClick = () => {
    console.log("Click en hijo");
  };

  const handleParentClick = () => {
    console.log("Click en padre");
  };

  return (
    <div onClick={handleParentClick}>
      Padre
      <button onClick={handleChildClick}>
        Hijo
      </button>
    </div>
  );
}

// Si clickeas el botón, verás en consola:
// "Click en hijo"
// "Click en padre"  ← El evento "sube" al padre
```

**Para detener el bubbling:**
```jsx
const handleChildClick = (event) => {
  event.stopPropagation();  // Detiene el bubbling
  console.log("Click en hijo");
};

// Ahora SOLO verás "Click en hijo"
```

---

## Tips de Rendimiento 🚀

### 1. **Usa useCallback para handlers en componentes hijos**

```jsx
import { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Este handler no se recreará en cada render
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <ChildComponent onClick={handleClick} />;
}
```

### 2. **Evita crear handlers inline en listas grandes**

❌ **MAL (lento en listas grandes):**
```jsx
{items.map((item) => (
  <button key={item.id} onClick={() => handleDelete(item.id)}>
    Eliminar
  </button>
))}
```

✅ **BIEN:**
```jsx
const handleDeleteClick = (event) => {
  const itemId = event.currentTarget.dataset.itemId;
  handleDelete(itemId);
};

{items.map((item) => (
  <button 
    key={item.id} 
    data-item-id={item.id}
    onClick={handleDeleteClick}
  >
    Eliminar
  </button>
))}
```

---

## Quick Reference - Resumen Visual 📋

```
┌─────────────────────────────────────────────────────────────┐
│                    EVENT HANDLERS FLOW                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Usuario interactúa (click, type, etc)                      │
│              ↓                                              │
│  Browser dispara evento nativo                              │
│              ↓                                              │
│  React lo envuelve en SyntheticEvent                         │
│              ↓                                              │
│  Llama tu función handler                                   │
│              ↓                                              │
│  Tu función se ejecuta (console.log, setState, etc)        │
│              ↓                                              │
│  React actualiza el DOM si hay cambios de estado           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Checklist antes de enviar tu código:

- ✅ ¿Pasé la función referencia, no la invocación?
- ✅ ¿Usé `event.preventDefault()` en formularios?
- ✅ ¿Accedí al valor del event ANTES de funciones asincronias?
- ✅ ¿Nombres claros para mis handlers (handleClick, handleSubmit, etc)?
- ✅ ¿Probé en la consola que los eventos se disparan?
- ✅ ¿Consideré rendimiento si hay muchos listeners?

---

## Próximos Temas 🎓

Cuando domines los event handlers, estarás listo para:

1. **useState y State Management** - Guardar y actualizar valores con eventos
2. **Componentes Controlados** - Inputs que React controla completamente
3. **Validación de Formularios** - Validar datos al escribir/enviar
4. **Peticiones HTTP** - Usar eventos para hacer fetch a APIs
5. **Custom Hooks** - Crear tus propios hooks para manejar eventos complejos

---

**¡Felicidades!** Ya entiendes los event handlers. Practica con los ejemplos del `index.js` y estarás listo para el siguiente nivel. 🚀