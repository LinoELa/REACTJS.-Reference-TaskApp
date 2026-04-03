# 04 - JSX en React

## ¿Qué es JSX?

JSX (JavaScript XML) es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript. Es una forma de describir la estructura de la interfaz de usuario (UI) de manera **declarativa y legible**.

### Ejemplo básico:

```jsx
const elemento = <h1>Hola, JSX!</h1>;
```

## Características de JSX

### 1. Sintaxis Similar a HTML

JSX permite escribir etiquetas HTML directamente en JavaScript de forma muy intuitiva:

```jsx
const titulo = <h1>Bienvenido a React</h1>;
const parrafo = <p>Este es un párrafo en JSX</p>;
const contenedor = <div>Contenido dentro de un div</div>;
```

### 2. Expresiones JavaScript en JSX

Dentro of JSX, puedes usar expresiones de JavaScript usando llaves `{}`:

```jsx
const nombre = "Ela";
const saludo = <h1>Hola, {nombre}!</h1>;

const number = 42;
const resultado = <p>El resultado es: {number}</p>;

const fecha = <p>Hoy es: {new Date().toLocaleDateString()}</p>;
```

### 3. Atributos en JSX

Los atributos en JSX funcionan de manera similar a HTML, pero con algunas diferencias:

```jsx
// Atributos normales
const link = <a href="https://react.dev">React</a>;
const imagen = <img src="logo.png" alt="Logo" />;

// Usar variables en atributos
const url = "https://ejemplo.com";
const enlace = <a href={url}>Ir al sitio</a>;

// className en lugar de class
const contenedor = <div className="contenedor">Contenido</div>;
```

### 4. Elementos Anidados

Puedes anidar elementos JSX como lo harías con HTML:

```jsx
const lista = (
  <ul>
    <li>Primer elemento</li>
    <li>Segundo elemento</li>
    <li>Tercer elemento</li>
  </ul>
);
```

### 5. Reglas Importantes

- **Un solo elemento raíz**: JSX debe retornar un único elemento:

```jsx
// ❌ Incorrecto: dos elementos sin envolver
const incorrecto = (
  <h1>Título</h1>
  <p>Párrafo</p>
);

// ✅ Correcto: envuelto en un contenedor
const correcto = (
  <div>
    <h1>Título</h1>
    <p>Párrafo</p>
  </div>
);

// ✅ También correcto: usando Fragment <>
const conFragment = (
  <>
    <h1>Título</h1>
    <p>Párrafo</p>
  </>
);
```

- **Etiquetas auto-cerrables**: Las etiquetas sin contenido deben cerrarse:

```jsx
const imagen = <img src="foto.png" />;
const entrada = <input type="text" />;
const salto = <br />;
```

## Fragments en JSX

Los **Fragments** (fragmentos) permiten agrupar múltiples elementos sin agregar un nodo adicional (div o contenedor) al DOM. Son útiles cuando quieres retornar varios elementos sin envoltorio innecesario.

### ¿Por qué usar Fragments?

En React, un componente debe retornar un único elemento. Normalmente usarías un `div`, pero esto agrega un elemento extra al DOM que a menudo no es necesario.

```jsx
// ❌ Sin fragment: agrega un div innecesario al DOM
function Lista() {
  return (
    <div>
      <h1>Mi Lista</h1>
      <ul>
        <li>Elemento 1</li>
      </ul>
    </div>
  );
}

// ✅ Con fragment: sin elemento extra en el DOM
function Lista() {
  return (
    <>
      <h1>Mi Lista</h1>
      <ul>
        <li>Elemento 1</li>
      </ul>
    </>
  );
}
```

### Sintaxis de Fragments

Hay dos formas de usar fragments:

#### 1. Sintaxis Corta `<>`

Es la forma más común y recomendada:

```jsx
const elemento = (
  <>
    <h1>Título</h1>
    <p>Párrafo</p>
    <p>Otro párrafo</p>
  </>
);
```

#### 2. Sintaxis Larga: React.Fragment

Permite pasar props como `key`:

```jsx
import React from 'react';

// Forma larga
const elemento = (
  <React.Fragment>
    <h1>Título</h1>
    <p>Párrafo</p>
  </React.Fragment>
);

// Equivalente a la sintaxis <>
const elemento2 = (
  <>
    <h1>Título</h1>
    <p>Párrafo</p>
  </>
);
```

### Casos de Uso Comunes

#### 1. Retornar múltiples elementos

```jsx
function Tarjeta() {
  return (
    <>
      <h2>Título de la Tarjeta</h2>
      <p>Descripción</p>
      <button>Ver más</button>
    </>
  );
}
```

#### 2. Agrupar filas en tablas (sin `tbody` extra)

```jsx
function FilasTabla() {
  return (
    <>
      <tr><td>Dato 1</td></tr>
      <tr><td>Dato 2</td></tr>
      <tr><td>Dato 3</td></tr>
    </>
  );
}

function Tabla() {
  return (
    <table>
      <tbody>
        <FilasTabla />
      </tbody>
    </table>
  );
}
```

#### 3. Renderizar listas sin contenedor

```jsx
const elementos = [
  <h2 key="titulo">Título</h2>,
  <p key="parrafo1">Párrafo 1</p>,
  <p key="parrafo2">Párrafo 2</p>
];

// Mejor con fragments
const items = datos.map((item, index) => (
  <React.Fragment key={index}>
    <h3>{item.titulo}</h3>
    <p>{item.descripcion}</p>
  </React.Fragment>
));
```

### Fragment con Key

Cuando usas `.map()` dentro de un fragment, necesitas usar la sintaxis larga e incluir `key`:

```jsx
// ❌ Incorrecto: sintaxis corta no acepta key
const lista = datos.map((item) => (
  <>
    <h3>{item.nombre}</h3>
    <p>{item.email}</p>
  </>
));

// ✅ Correcto: usando React.Fragment con key
const lista = datos.map((item) => (
  <React.Fragment key={item.id}>
    <h3>{item.nombre}</h3>
    <p>{item.email}</p>
  </React.Fragment>
));
```

### Ventajas de Fragments

✓ **Menos nodos en el DOM**: No agrega elementos innecesarios
✓ **Mejor rendimiento**: Reduce la complejidad del árbol DOM
✓ **Semánticamente correcto**: Evita `div` wrapper sin propósito
✓ **Flexibilidad**: Funciona bien con tablas y listas

### Cuando NO usar Fragments

- Cuando necesitas aplicar clases o estilos (usa `div` en su lugar)
- Cuando necesitas atributos especiales en el contenedor
- Cuando el `div` es semánticamente correcto (como en un contenedor principal)

## Ventajas de JSX

✓ **Legibilidad**: El código es más claro y fácil de entender
✓ **Familiaridad**: Se parece a HTML, conocido por todos
✓ **Flexibilidad**: Puedes mezclar lógica JavaScript con UI
✓ **Validación**: Los editores pueden detectar errores en tiempo de escritura

## Compilación de JSX

JSX no es JavaScript válido por sí solo. React lo transforma en llamadas a `React.createElement()`:


```jsx
// JSX
const elemento = <h1 className="titulo">Hola</h1>;

// Lo que se convierte internamente
const elemento = React.createElement('h1', { className: 'titulo' }, 'Hola');
```

## Operadores Ternarios en JSX

El operador ternario es muy útil para **renderizado condicional** en JSX. Permite mostrar diferentes contenidos según una condición.

### Sintaxis del Operador Ternario

```javascript
condición ? valorSiVerdadero : valorSiFalso
```

### Ejemplos en JSX

#### 1. Renderizado simple de componentes

```jsx
const edad = 18;
const mensaje = (
  <p>
    {edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"}
  </p>
);
```

#### 2. Mostrar u ocultar elementos

```jsx
const usuarioLogueado = true;

const pantalla = (
  <div>
    {usuarioLogueado ? (
      <p>Bienvenido, usuario!</p>
    ) : (
      <p>Por favor, inicia sesión</p>
    )}
  </div>
);
```

#### 3. Cambiar clases dinámicamente

```jsx
const esActivo = true;

const boton = (
  <button className={esActivo ? "boton-activo" : "boton-inactivo"}>
    Click aquí
  </button>
);
```

#### 4. Renderizado condicional en listas

```jsx
const usuarios = [
  { id: 1, nombre: "Ela", premium: true },
  { id: 2, nombre: "Juan", premium: false },
  { id: 3, nombre: "María", premium: true }
];

const lista = (
  <ul>
    {usuarios.map(usuario => (
      <li key={usuario.id}>
        {usuario.nombre} 
        {usuario.premium ? " ⭐ (Premium)" : " (Gratis)"}
      </li>
    ))}
  </ul>
);
```

### Operadores Ternarios Anidados

Puedes anidar operadores ternarios, pero ten cuidado con la legibilidad:

```jsx
const puntuacion = 85;

const resultado = (
  <p>
    {puntuacion >= 90 ? "Excelente" : puntuacion >= 70 ? "Bien" : puntuacion >= 50 ? "Aceptable" : "Insuficiente"}
  </p>
);
```

**Nota**: Para casos más complejos, es mejor usar sentencias `if` dentro del componente.

### Alternativas al Operador Ternario

#### Usando Operador AND (&&)

Cuando solo necesitas mostrar algo si la condición es verdadera:

```jsx
const mostrarAlerta = true;

// Solo muestra si mostrarAlerta es true
const alerta = (
  <div>
    {mostrarAlerta && <p>⚠️ Esto es una alerta</p>}
  </div>
);
```

#### Usando Función

Para lógica más compleja, es mejor extraer en una función:

```jsx
function renderizarEstado(estado) {
  if (estado === "cargando") return <p>Cargando...</p>;
  if (estado === "error") return <p>Error en la carga</p>;
  return <p>Listo</p>;
}

const componente = (
  <div>
    {renderizarEstado("cargando")}
  </div>
);
```

## Objetos en JSX

Los objetos son estructuras de datos fundamentales en JavaScript. En JSX, los objetos se usan frecuentemente para pasar datos a componentes y para manejar estilos dinámicos.

### 1. Pasar Objetos como Props

Los objetos son la forma más común de enviar múltiples datos a componentes:

```jsx
const usuario = {
  id: 1,
  nombre: "Ela",
  email: "ela@example.com",
  edad: 25
};

function Perfil({ usuario }) {
  return (
    <div>
      <h2>{usuario.nombre}</h2>
      <p>Email: {usuario.email}</p>
      <p>Edad: {usuario.edad}</p>
    </div>
  );
}

// Usar el componente
const perfil = <Perfil usuario={usuario} />;
```

### 2. Estilos Dinámicos con Objetos

En React, los estilos se aplican usando objetos en lugar de strings CSS:

```jsx
const estilos = {
  contenedor: {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "8px"
  },
  titulo: {
    color: "navy",
    fontSize: "24px",
    fontWeight: "bold"
  },
  parrafo: {
    color: "gray",
    fontSize: "16px"
  }
};

const componente = (
  <div style={estilos.contenedor}>
    <h1 style={estilos.titulo}>Bienvenido</h1>
    <p style={estilos.parrafo}>Este es un párrafo con estilos dinámicos</p>
  </div>
);
```

**Nota**: Los nombres de las propiedades CSS en objetos usan **camelCase**: `fontSize` en lugar de `font-size`, `backgroundColor` en lugar de `background-color`.

### 3. Renderizar Arrays de Objetos

Frecuentemente necesitarás mostrar listas de objetos:

```jsx
const productos = [
  { id: 1, nombre: "Laptop", precio: 1000 },
  { id: 2, nombre: "Mouse", precio: 25 },
  { id: 3, nombre: "Teclado", precio: 75 }
];

function ListaProductos({ productos }) {
  return (
    <ul>
      {productos.map(producto => (
        <li key={producto.id}>
          {producto.nombre} - ${producto.precio}
        </li>
      ))}
    </ul>
  );
}

const lista = <ListaProductos productos={productos} />;
```

### 4. Desestructuración de Objetos

Es común desestructurar objetos para acceder más fácilmente a sus propiedades:

```jsx
// Sin desestructuración
function Tarjeta({ persona }) {
  return (
    <div>
      <h3>{persona.nombre}</h3>
      <p>{persona.descripcion}</p>
    </div>
  );
}

// Con desestructuración (más limpio)
function Tarjeta({ persona: { nombre, descripcion } }) {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
}
```

### 5. Objetos Dinámicos en JSX

Puedes crear objetos dinámicamente dentro de JSX:

```jsx
const usuarioActivo = true;
const tipoUsuario = "premium";

const config = {
  clase: usuarioActivo ? "activo" : "inactivo",
  color: tipoUsuario === "premium" ? "gold" : "silver"
};

const elemento = (
  <div className={config.clase} style={{ color: config.color }}>
    Configuración dinámica
  </div>
);
```

### 6. Spread Operator con Objetos

El operador spread (`...`) es muy útil para pasar múltiples propiedades de un objeto:

```jsx
const propiedades = {
  className: "boton-principal",
  disabled: false,
  onClick: function() { console.log("Clickeado"); }
};

// En lugar de pasar cada prop individualmente
const boton = <button {...propiedades}>Haz clic</button>;

// Es equivalente a:
const boton2 = (
  <button 
    className="boton-principal" 
    disabled={false}
    onClick={function() { console.log("Clickeado"); }}
  >
    Haz clic
  </button>
);
```

### 7. Objetos en Atributos

Puedes usar objetos para valores dinámicos en atributos:

```jsx
const formData = {
  nombre: "Ela",
  email: "ela@example.com"
};

const formulario = (
  <form>
    <input type="text" value={formData.nombre} />
    <input type="email" value={formData.email} />
  </form>
);
```

## Resumen

JSX es la forma moderna y eficiente de escribir interfaces en React. Combinado con operadores ternarios y objetos, permite crear UIs dinámicas y reactivas de manera clara y legible.