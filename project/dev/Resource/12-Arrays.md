# 12 - Arrays (Arreglos) en React

## 📑 Índice

1. [Introducción](#introducción)
2. [¿Qué es un Array?](#qué-es-un-array)
3. [Crear y Acceder a Arrays](#crear-y-acceder-a-arrays)
4. [Métodos de Iteración](#métodos-de-iteración)
   - [map()](#map---transformar-datos)
   - [filter()](#filter---filtrar-datos)
   - [reduce()](#reduce---acumular-valores)
   - [find()](#find---buscar-un-elemento)
   - [forEach()](#foreach---ejecutar-función)
   - [some() y every()](#some-y-every---verificar-condiciones)
5. [Métodos de Modificación](#métodos-de-modificación)
   - [push(), pop(), shift(), unshift()](#mutadores-básicos)
   - [slice() vs splice()](#slice-vs-splice)
   - [concat() y spread operator](#concat-y-spread-operator)
   - [sort() y reverse()](#sort-y-reverse)
6. [Renderizar Arrays en React](#renderizar-arrays-en-react)
7. [La Propiedad Key](#la-propiedad-key)
8. [Estados con Arrays (useState)](#estados-con-arrays-usestate)
9. [Ejemplos Prácticos](#ejemplos-prácticos)
10. [Errores Comunes](#errores-comunes-)
11. [Tips de Rendimiento](#tips-de-rendimiento-)
12. [Buscar, Filtrar, Ordenar](#buscar-filtrar-ordenar)
13. [Arrays Anidados](#arrays-anidados)
14. [Quick Reference](#quick-reference---resumen-visual)
15. [Próximos Temas](#próximos-temas)

---

## Introducción

En esta sección aprenderemos todo sobre **arrays (arreglos)** en React. Los arrays son fundamentales para:
- Renderizar listas de elementos
- Filtrar y transformar datos
- Manejar colecciones de información

Aprenderemos:
- Métodos de arrays modernos (map, filter, reduce)
- Cómo renderizar arrays en JSX
- La propiedad `key` (crucial en React)
- Manipular estados que contienen arrays
- Mejores prácticas

---

## ¿Qué es un Array?

Un **array** es una colección ordenada de elementos. En JavaScript, los arrays son objetos especiales que pueden contener cualquier tipo de dato.

```javascript
// Array простой
const numeros = [1, 2, 3, 4, 5];

// Array mixto
const datos = [1, 'texto', true, { id: 1 }, [1, 2]];

// Array de objetos (muy común en React)
const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'María' },
  { id: 3, nombre: 'Pedro' }
];

// Array vacío
const vacio = [];
```

**Propiedades básicas:**
```javascript
const arr = [1, 2, 3];

arr.length;        // 3 (cantidad de elementos)
arr[0];            // 1 (primer elemento, índice 0)
arr[arr.length-1]; // 3 (último elemento)
```

---

## Crear y Acceder a Arrays

### Crear arrays

```javascript
// Literal
const arr1 = [1, 2, 3];

// Constructor
const arr2 = new Array(1, 2, 3);

// De string
const arr3 = "hola".split('');      // ['h','o','l','a']

// Con length específico (vacío)
const arr4 = new Array(3);          // [empty, empty, empty]

// Rango (no existe, necesitas helper)
const arr5 = Array.from({length: 5}, (_, i) => i); // [0,1,2,3,4]
```

### Acceder a elementos

```javascript
const arr = ['a', 'b', 'c'];

// Índice directo
arr[0];           // 'a'
arr[1];           // 'b'
arr[arr.length-1]; // 'c'

// Destructuring
const [primero, segundo] = arr;     // primero='a', segundo='b'
const [x, , tercero] = arr;         // x='a', tercero='c'
const [first, ...resto] = arr;      // first='a', resto=['b','c']

// Métodos
arr.at(-1);       // 'c' (último, más moderno)
arr.at(-2);       // 'b' (penúltimo)
```

---

## Métodos de Iteración

### map() - Transformar datos

**map()** transforma cada elemento del array y devuelve un **NUEVO array**.

```javascript
// Duplicar cada número
const numeros = [1, 2, 3, 4];
const duplicados = numeros.map(n => n * 2);
console.log(duplicados); // [2, 4, 6, 8]

// Extraer propiedades de objetos
const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'María' }
];
const nombres = usuarios.map(u => u.nombre);
console.log(nombres); // ['Juan', 'María']

// Crear JSX (muy común en React)
function ListaUsuarios({ usuarios }) {
  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.nombre}</li>
      ))}
    </ul>
  );
}
```

### filter() - Filtrar datos

**filter()** devuelve un NUEVO array con solo los elementos que cumplen la condición.

```javascript
// Números mayores a 2
const numeros = [1, 2, 3, 4, 5];
const mayores = numeros.filter(n => n > 2);
console.log(mayores); // [3, 4, 5]

// Usuarios activos
const usuarios = [
  { id: 1, nombre: 'Juan', activo: true },
  { id: 2, nombre: 'María', activo: false },
  { id: 3, nombre: 'Pedro', activo: true }
];
const activos = usuarios.filter(u => u.activo);
console.log(activos); // [{id:1, nombre:'Juan',...}, {id:3, nombre:'Pedro',...}]

// En React
function ListaActivos({ usuarios }) {
  const activos = usuarios.filter(u => u.activo);
  return <div>{activos.length} usuarios activos</div>;
}
```

### reduce() - Acumular valores

**reduce()** procesa todos los elementos devolviendo UN SOLO valor acumulado.

```javascript
// Suma de números
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acual, n) => acual + n, 0);
console.log(suma); // 10

// Contar ocurrencias
const marcas = ['Nike', 'Adidas', 'Nike', 'Puma', 'Adidas', 'Adidas'];
const conteo = marcas.reduce((acc, marca) => {
  acc[marca] = (acc[marca] || 0) + 1;
  return acc;
}, {});
console.log(conteo); // {Nike: 2, Adidas: 3, Puma: 1}

// Total de precio
const productos = [
  { id: 1, precio: 10 },
  { id: 2, precio: 20 },
  { id: 3, precio: 30 }
];
const total = productos.reduce((sum, p) => sum + p.precio, 0);
console.log(total); // 60
```

### find() - Buscar un elemento

**find()** devuelve el **primer elemento** que cumple la condición (no array).

```javascript
// Buscar por ID
const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'María' },
  { id: 3, nombre: 'Pedro' }
];
const usuario = usuarios.find(u => u.id === 2);
console.log(usuario); // {id: 2, nombre: 'María'}

// Buscar número
const numeros = [1, 5, 3, 9, 2];
const primeroMayor = numeros.find(n => n > 5);
console.log(primeroMayor); // 9

// En React
function BuscarUsuario({ id, usuarios }) {
  const usuario = usuarios.find(u => u.id === id);
  return usuario ? <div>{usuario.nombre}</div> : <div>No encontrado</div>;
}
```

### forEach() - Ejecutar función

**forEach()** ejecuta una función para cada elemento (NO devuelve nada).

```javascript
// Imprimir cada elemento
const numeros = [1, 2, 3];
numeros.forEach(n => console.log(n));
// Output: 1, 2, 3

// NOTA: forEach NO es like map, NO devuelve array
const resultado = numeros.forEach(n => n * 2);
console.log(resultado); // undefined

// Use forEach solo para EFECTOS, no para transformar
numeros.forEach(n => {
  console.log(`Número: ${n}`);
  // Hacer alguna acción
});
```

### some() y every() - Verificar condiciones

```javascript
// some(): ¿Al menos UNO cumple?
const numeros = [1, 2, 3, 4, 5];
const tieneParejo = numeros.some(n => n % 2 === 0);
console.log(tieneParejo); // true

// every(): ¿TODOS cumplen?
const numeros2 = [2, 4, 6, 8];
const todosPares = numeros2.every(n => n % 2 === 0);
console.log(todosPares); // true

// En React
function ValidarFormulario({ campos }) {
  const todosLlenos = campos.every(c => c.valor !== '');
  
  return (
    <button disabled={!todosLlenos}>
      {todosLlenos ? 'Enviar' : 'Completa todos'}
    </button>
  );
}
```

---

## Métodos de Modificación

### ⚠️ Mutadores Básicos (MODIFICAN el array original)

```javascript
// push() - Agregar al final
const arr = [1, 2];
arr.push(3);        // Devuelve: 3 (length)
console.log(arr);   // [1, 2, 3]

// pop() - Eliminar último
arr.pop();          // Devuelve: 3 (elemento eliminado)
console.log(arr);   // [1, 2]

// unshift() - Agregar al inicio
arr.unshift(0);     // Devuelve: 3 (length)
console.log(arr);   // [0, 1, 2]

// shift() - Eliminar primero
arr.shift();        // Devuelve: 0 (elemento eliminado)
console.log(arr);   // [1, 2]

// ⚠️ EN REACT: EVITA ESTO, usa spread operator
```

### ✅ Métodos No-Mutadores (recomendado en React)

```javascript
// Agregar elemento (usar spread operator)
const arr = [1, 2, 3];
const nuevo = [...arr, 4];           // [1, 2, 3, 4]
const nuevo2 = [0, ...arr];          // [0, 1, 2, 3]
const nuevo3 = [...arr.slice(0, 1), 99, ...arr.slice(1)]; // [1, 99, 2, 3]

// concat() - NO mutador
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinado = arr1.concat(arr2); // [1, 2, 3, 4]
```

### slice() vs splice()

```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];

// slice() - NO mutador, devuelve substring
const parte1 = arr.slice(1, 4);      // ['b', 'c', 'd']
console.log(arr);                     // NÓ SE MODIFICA

// splice() - MUTADOR, modifica el original
const parte2 = arr.splice(1, 2, 'X', 'Y');
console.log(parte2);                  // ['b', 'c'] (lo que se sacó)
console.log(arr);                     // ['a', 'X', 'Y', 'd', 'e'] (MODIFICADO)

// ⚠️ EN REACT: Usa slice() o spread
```

### sort() y reverse()

```javascript
// ⚠️ sort() MUTADOR
const numeros = [3, 1, 4, 1, 5];
numeros.sort();                       // MODIFICÓ EL ARRAY
console.log(numeros);                 // [1, 1, 3, 4, 5]

// ✅ En React, crea nuevo array antes
const sorted = [...numeros].sort();

// reverse() también MUTADOR
const arr = [1, 2, 3];
arr.reverse();                        // MODIFICÓ
console.log(arr);                     // [3, 2, 1]

// ✅ En React:
const reversed = [...arr].reverse();
```

---

## Renderizar Arrays en React

### Básico con map()

```jsx
function Lista() {
  const items = ['Apple', 'Banana', 'Orange'];
  
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

### Mejor: usar IDs como keys

```jsx
function ListaUsuarios() {
  const usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'María' },
    { id: 3, nombre: 'Pedro' }
  ];

  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.nombre}</li>
      ))}
    </ul>
  );
}
```

### Anidar y filtrar

```jsx
function ProductosPorCategoria() {
  const productos = [
    { id: 1, nombre: 'Laptop', categoria: 'Electrónica' },
    { id: 2, nombre: 'Silla', categoria: 'Muebles' },
    { id: 3, nombre: 'Monitor', categoria: 'Electrónica' },
    { id: 4, nombre: 'Escritorio', categoria: 'Muebles' }
  ];

  const categorias = ['Electrónica', 'Muebles'];

  return (
    <div>
      {categorias.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <ul>
            {productos
              .filter(p => p.categoria === cat)
              .map(p => (
                <li key={p.id}>{p.nombre}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

---

## La Propiedad Key

**Key** es crítico en React para identificar qué items han cambiado.

### ❌ MAL: Usar index como key

```jsx
// ❌ MALO: Si la lista se reordena, todo se rompe
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

### ✅ BIEN: Usar ID único

```jsx
// ✅ BUENO: Cada elemento tiene ID único
{usuarios.map(user => (
  <li key={user.id}>{user.nombre}</li>
))}
```

### ¿Por qué?

```
❌ Si cambias el orden con index como key:
  Antes: [A(key=0), B(key=1), C(key=2)]
  Después: [B(key=0), A(key=1), C(key=2)]
  → React cree que cambió el CONTENIDO, no el orden
  → Re-renderiza todo innecesariamente

✅ Con IDs únicos:
  Antes: [A(key=1), B(key=2), C(key=3)]
  Después: [B(key=2), A(key=1), C(key=3)]
  → React ve que solo cambió el orden
  → Eficiente y correcto
```

---

## Estados con Arrays (useState)

### Agregar elemento

```jsx
import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, texto: 'Aprender React' },
    { id: 2, texto: 'Hacer ejercicio' }
  ]);

  const agregarTodo = (nuevoTexto) => {
    const nuevoTodo = {
      id: Date.now(), // ID único temporal
      texto: nuevoTexto
    };
    
    // ✅ CORRECTO: Crear nuevo array
    setTodos([...todos, nuevoTodo]);
    // O alternativa:
    // setTodos(todos.concat(nuevoTodo));
  };

  return (
    <div>
      <button onClick={() => agregarTodo('Nuevo todo')}>
        Agregar
      </button>
    </div>
  );
}
```

### Eliminar elemento

```jsx
const eliminarTodo = (id) => {
  // ✅ CORRECTO: filter para eliminar
  setTodos(todos.filter(t => t.id !== id));
};
```

### Actualizar elemento

```jsx
const actualizarTodo = (id, nuevoTexto) => {
  // ✅ CORRECTO: map para actualizar
  setTodos(
    todos.map(t =>
      t.id === id ? { ...t, texto: nuevoTexto } : t
    )
  );
};
```

### Operaciones complejas

```jsx
const reordenarTodos = () => {
  // ✅ CORRECTO: Crear nuevo array
  setTodos([...todos].reverse());
};

const duplicarTodos = () => {
  setTodos([...todos, ...todos]);
};

const limpiarTodos = () => {
  setTodos([]);
};
```

---

## Ejemplos Prácticos

### 1. Lista de Tareas Completa

```jsx
import { useState } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [entrada, setEntrada] = useState('');

  const agregarTarea = () => {
    if (entrada.trim()) {
      setTareas([
        ...tareas,
        { id: Date.now(), texto: entrada, completada: false }
      ]);
      setEntrada('');
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  const marcarCompletada = (id) => {
    setTareas(
      tareas.map(t =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const completadas = tareas.filter(t => t.completada).length;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Mi Lista de Tareas ({completadas}/{tareas.length})</h2>

      <div style={{ marginBottom: '10px' }}>
        <input
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
          placeholder="Agregar tarea..."
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <ul>
        {tareas.map(tarea => (
          <li
            key={tarea.id}
            style={{
              textDecoration: tarea.completada ? 'line-through' : 'none'
            }}
          >
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => marcarCompletada(tarea.id)}
            />
            {tarea.texto}
            <button onClick={() => eliminarTarea(tarea.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
```

### 2. Filtro y Búsqueda

```jsx
import { useState } from 'react';

function BuscadorProductos() {
  const productos = [
    { id: 1, nombre: 'Laptop', precio: 1000 },
    { id: 2, nombre: 'Mouse', precio: 50 },
    { id: 3, nombre: 'Teclado', precio: 150 },
    { id: 4, nombre: 'Monitor', precio: 400 }
  ];

  const [busqueda, setBusqueda] = useState('');
  const [precioMax, setPrecioMax] = useState(1000);

  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    p.precio <= precioMax
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <input
        type="range"
        min="0"
        max="1000"
        value={precioMax}
        onChange={(e) => setPrecioMax(e.target.value)}
      />
      <span>Máximo: ${precioMax}</span>

      <div>
        {filtrados.map(p => (
          <div key={p.id}>
            <h3>{p.nombre}</h3>
            <p>${p.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuscadorProductos;
```

---

## Errores Comunes ⚠️

### 1. Mutar el estado directamente

❌ **MAL:**
```jsx
todos[0].texto = 'Nuevo texto';  // ❌ Directo
setTodos(todos);                  // ❌ React no detecta cambio
```

✅ **BIEN:**
```jsx
const actualizado = todos.map(t =>
  t.id === id ? { ...t, texto: nuevoTexto } : t
);
setTodos(actualizado);
```

### 2. Usar index como key en listas dinámicas

❌ **MAL:**
```jsx
{items.map((item, i) => <li key={i}>{item}</li>)}
```

✅ **BIEN:**
```jsx
{items.map(item => <li key={item.id}>{item}</li>)}
```

### 3. Olvidar spread operator

❌ **MAL:**
```jsx
const nuevo = todos;
nuevo.push(item);         // ❌ Mutó
setTodos(nuevo);
```

✅ **BIEN:**
```jsx
setTodos([...todos, item]);
```

### 4. Métodos que mutan

❌ **MAL:**
```jsx
todos.sort();        // ❌ Mutador
todos.reverse();     // ❌ Mutador
todos.splice(0, 1);  // ❌ Mutador
```

✅ **BIEN:**
```jsx
[...todos].sort();        // ✅ Crea copia primero
[...todos].reverse();     // ✅ Crea copia primero
todos.slice(1);           // ✅ No mutador
```

### 5. Olvidar return en map

❌ **MAL:**
```jsx
{items.map(item => {
  <div>{item}</div>     // ❌ Falta return
})}
```

✅ **BIEN:**
```jsx
{items.map(item => (
  <div>{item}</div>     // ✅ Parentesis implica return
))}

// O explícito:
{items.map(item => {
  return <div>{item}</div>;
})}
```

---

## Tips de Rendimiento 🚀

### 1. No crear objetos/arrays en el render

❌ **MAL:**
```jsx
function Componente({ usuarios }) {
  // NUEVO array en cada render
  const activos = usuarios.filter(u => u.activo);
  
  return <div>{activos.length}</div>;
}
```

✅ **BIEN:**
```jsx
import { useMemo } from 'react';

function Componente({ usuarios }) {
  // Solo recalcula si usuarios cambia
  const activos = useMemo(
    () => usuarios.filter(u => u.activo),
    [usuarios]
  );
  
  return <div>{activos.length}</div>;
}
```

### 2. Evitar operaciones inline en map

❌ **MAL:**
```jsx
{users.map(u => (
  <UserCard
    key={u.id}
    user={u}
    isFriend={friends.find(f => f.id === u.id)}  // ❌ Busca en cada render
  />
))}
```

✅ **BIEN:**
```jsx
const friendIds = new Set(friends.map(f => f.id));

{users.map(u => (
  <UserCard
    key={u.id}
    user={u}
    isFriend={friendIds.has(u.id)}  // ✅ Búsqueda O(1)
  />
))}
```

### 3. Usar flat() y flatMap() para arrays anidados

```jsx
// flat() - aplanar un nivel
const anidado = [[1, 2], [3, 4]];
const plano = anidado.flat();
console.log(plano); // [1, 2, 3, 4]

// flatMap() - map() + flat()
const palabras = ['hola', 'mundo'];
const letras = palabras.flatMap(p => p.split(''));
console.log(letras); // ['h','o','l','a','m','u','n','d','o']
```

---

## Buscar, Filtrar, Ordenar

```jsx
function ControlPanelAvanzado() {
  const [productos, setProductos] = useState([...]);
  const [filtros, setFiltros] = useState({
    busqueda: '',
    categoria: 'todas',
    orden: 'nombre'
  });

  const filtrados = productos
    .filter(p =>
      p.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase()) &&
      (filtros.categoria === 'todas' || p.categoria === filtros.categoria)
    )
    .sort((a, b) => {
      if (filtros.orden === 'nombre') {
        return a.nombre.localeCompare(b.nombre);
      } else if (filtros.orden === 'precio-asc') {
        return a.precio - b.precio;
      } else if (filtros.orden === 'precio-desc') {
        return b.precio - a.precio;
      }
    });

  return (
    <div>
      {/* Controles de filtro */}
      <input
        type="text"
        placeholder="Buscar..."
        value={filtros.busqueda}
        onChange={(e) =>
          setFiltros({ ...filtros, busqueda: e.target.value })
        }
      />

      <select
        value={filtros.orden}
        onChange={(e) =>
          setFiltros({ ...filtros, orden: e.target.value })
        }
      >
        <option value="nombre">Nombre A-Z</option>
        <option value="precio-asc">Precio ↑</option>
        <option value="precio-desc">Precio ↓</option>
      </select>

      {/* Resultados */}
      <div>
        {filtrados.map(p => (
          <div key={p.id}>
            <h4>{p.nombre}</h4>
            <p>${p.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Arrays Anidados

### Renderizar arrays dentro de arrays

```jsx
function LocalesConOfertas() {
  const LocalesOfertas = [
    {
      id: 1,
      nombre: 'Local A',
      ofertas: [
        { id: 101, producto: 'Laptop', descuento: '10%' },
        { id: 102, producto: 'Mouse', descuento: '20%' }
      ]
    },
    {
      id: 2,
      nombre: 'Local B',
      ofertas: [
        { id: 201, producto: 'Monitor', descuento: '15%' }
      ]
    }
  ];

  return (
    <div>
      {locales.map(local => (
        <section key={local.id}>
          <h2>{local.nombre}</h2>
          <ul>
            {local.ofertas.map(oferta => (
              <li key={oferta.id}>
                {oferta.producto} - {oferta.descuento}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
```

### Actualizar array anidado

```jsx
const actualizarOferta = (localId, ofertaId, nuevoDescuento) => {
  setLocales(
    locales.map(local =>
      local.id === localId
        ? {
            ...local,
            ofertas: local.ofertas.map(oferta =>
              oferta.id === ofertaId
                ? { ...oferta, descuento: nuevoDescuento }
                : oferta
            )
          }
        : local
    )
  );
};
```

---

## Quick Reference - Resumen Visual

### Métodos principales

```
┌─────────────────────────────────────────────────────────┐
│                MÉTODOS DE ARRAYS                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ ITERACIÓN (devuelven nuevo array o valor)              │
│ • map() → transformar elementos                        │
│ • filter() → seleccionar elementos                     │
│ • reduce() → acumular en un valor                      │
│ • find() → buscar primer elemento                      │
│ • some() → ¿existe al menos uno?                       │
│ • every() → ¿todos cumplen?                            │
│ • forEach() → ejecutar función (sin return)            │
│                                                         │
│ MODIFICACIÓN (⚠️ algunos mutan el original)            │
│ • push() / pop() → final                               │
│ • shift() / unshift() → inicio                         │
│ • slice() → substring (NO mutador) ✅                  │
│ • splice() → mutar (MUTADOR) ❌                        │
│ • sort() → ordenar (MUTADOR) ❌                        │
│ • reverse() → invertir (MUTADOR) ❌                    │
│ • concat() → combinar (NO mutador) ✅                  │
│ • spread [...arr] → copiar (NO mutador) ✅             │
│                                                         │
│ BÚSQUEDA                                               │
│ • indexOf() → posición de elemento                     │
│ • includes() → ¿existe el elemento?                    │
│ • findIndex() → posición del primer que cumple         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### En React - Patrones

```jsx
// Agregar
setArr([...arr, nuevoElemento]);

// Eliminar
setArr(arr.filter(x => x.id !== id));

// Actualizar
setArr(arr.map(x => x.id === id ? {...x, propiedad: valor} : x));

// Reordenar
setArr([...arr].sort((a, b) => a - b));

// Renderizar
{arr.map(x => <div key={x.id}>{x.dato}</div>)}
```

### Checklist de mejores prácticas

- ✅ ¿Usé `key` con ID único?
- ✅ ¿Evité mutar el estado?
- ✅ ¿Usé spread operator para copiar?
- ✅ ¿Usé métodos NO-mutadores?
- ✅ ¿Pagué atención a rendimiento?
- ✅ ¿Probé con arrays vacíos?

---

## Próximos Temas

Cuando domines arrays en React, estarás listo para:

1. **Objetos y Desestructuración** - Trabajar con datos más complejos
2. **useReducer** - Gestión avanzada de estado con arrays
3. **Array Methods Avanzados** - groupBy, partition, chunk
4. **Rendimiento de Listas** - Virtualization, windowing
5. **APIs de Arrays modernos** - WeakMap, Map, Set
6. **Algoritmos de Búsqueda y Ordenamiento** - Binary search, quicksort

---

**🎯 Recuerda:** En React, **INMUTABILIDAD es clave**. Siempre crea nuevos arrays en lugar de mutar los existentes.

¡Los arrays son TU HERRAMIENTA para renderizar listas dinámicas! 🚀
