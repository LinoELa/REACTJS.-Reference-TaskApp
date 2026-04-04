# 10 - Fetch API en React

## 📑 Índice

1. [Introducción](#introducción)
2. [¿Qué es Fetch API?](#qué-es-fetch-api)
3. [Sintaxis Básica](#sintaxis-básica)
4. [Métodos HTTP Comunes](#métodos-http-comunes)
   - [GET](#get---obtener-datos)
   - [POST](#post---enviar-datos)
   - [PUT](#put---actualizar-datos)
   - [DELETE](#delete---eliminar-datos)
5. [Manejo de Respuestas](#manejo-de-respuestas)
6. [Manejo de Errores](#manejo-de-errores)
7. [Estados de Carga](#estados-de-carga)
8. [Usando Fetch con useEffect](#usando-fetch-con-useeffect)
9. [Ejemplo Práctico: Obtener Usuarios](#ejemplo-práctico-obtener-usuarios)
10. [Headers y Autenticación](#headers-y-autenticación)
11. [FormData y Archivos](#formdata-y-archivos)
12. [Abort Controller (Cancelar Requests)](#abort-controller-cancelar-requests)
13. [Tips de Rendimiento y Mejores Prácticas](#tips-de-rendimiento-y-mejores-prácticas)
14. [Debugging y DevTools](#debugging-y-devtools)
15. [Fetch vs Axios vs React Query](#fetch-vs-axios-vs-react-query)
16. [Quick Reference](#quick-reference---resumen-visual)
17. [Próximos Temas](#próximos-temas)

---

## Introducción

En esta sección aprenderemos a **hacer peticiones HTTP** desde React usando la **Fetch API**. Esto es fundamental para comunicarse con servidores backend, obtener datos de APIs públicas, y enviar información al servidor.

Aprenderemos:
- Cómo usar `fetch()` para hacer requests HTTP
- Métodos HTTP: GET, POST, PUT, DELETE
- Manejo de respuestas y errores
- Estados de carga (loading, error, success)
- Integración con `useEffect` en React
- Mejores prácticas y patrones comunes

---

## ¿Qué es Fetch API?

**Fetch API** es una interfaz moderna para hacer peticiones HTTP. Es la forma estándar en JavaScript moderno (sustituyó a XMLHttpRequest).

**Ventajas:**
- ✅ Basada en Promises (sintaxis moderna)
- ✅ Manejo más limpio de errores
- ✅ Para async/await
- ✅ Integrada en todos los navegadores modernos
- ✅ No requiere librerías externas

**Sintaxis básica:**
```jsx
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

## Sintaxis Básica

La forma más simple de hacer un GET request:

```jsx
// GET request básico
fetch('https://api.ejemplo.com/usuarios')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Datos recibidos:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

**Con async/await (más legible):**
```jsx
async function obtenerUsuarios() {
  try {
    const response = await fetch('https://api.ejemplo.com/usuarios');
    
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Datos recibidos:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

obtenerUsuarios();
```

---

## Métodos HTTP Comunes

### GET - Obtener datos

Se usa para **leer datos** del servidor. Los datos NO se envían en el body.

```jsx
// GET básico
fetch('https://api.ejemplo.com/usuarios')
  .then(r => r.json())
  .then(data => console.log(data));

// GET con parámetros en URL
fetch('https://api.ejemplo.com/usuarios?id=1&edad=25')
  .then(r => r.json())
  .then(data => console.log(data));
```

### POST - Enviar datos

Se usa para **crear nuevos recursos**. Los datos van en el body.

```jsx
const nuevoUsuario = {
  nombre: 'Juan',
  email: 'juan@ejemplo.com',
  edad: 30
};

fetch('https://api.ejemplo.com/usuarios', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(nuevoUsuario)
})
  .then(r => r.json())
  .then(data => console.log('Usuario creado:', data))
  .catch(error => console.error('Error:', error));
```

### PUT - Actualizar datos

Se usa para **actualizar recurso existente** completamente.

```jsx
const usuarioActualizado = {
  nombre: 'Juan Pérez',
  email: 'juan.perez@ejemplo.com',
  edad: 31
};

fetch('https://api.ejemplo.com/usuarios/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(usuarioActualizado)
})
  .then(r => r.json())
  .then(data => console.log('Usuario actualizado:', data));
```

### DELETE - Eliminar datos

Se usa para **eliminar un recurso**.

```jsx
fetch('https://api.ejemplo.com/usuarios/1', {
  method: 'DELETE'
})
  .then(r => r.json())
  .then(data => console.log('Usuario eliminado:', data));
```

---

## Manejo de Respuestas

El objeto `response` tiene información sobre la petición:

```jsx
fetch('https://api.ejemplo.com/usuarios')
  .then(response => {
    console.log('Status:', response.status); // 200, 404, 500, etc.
    console.log('OK:', response.ok); // true si status 200-299
    console.log('Headers:', response.headers);
    console.log('URL:', response.url);
    
    // Métodos para leer el body:
    return response.json(); // JSON
    // response.text(); // Texto plano
    // response.blob(); // Binario (imágenes, etc.)
    // response.formData(); // Datos de formulario
  })
  .then(data => console.log(data));
```

**Códigos HTTP comunes:**
- `200 OK` - Petición exitosa
- `201 Created` - Recurso creado
- `400 Bad Request` - Datos inválidos
- `401 Unauthorized` - Autenticación requerida
- `404 Not Found` - Recurso no existe
- `500 Server Error` - Error del servidor

---

## Manejo de Errores

Es importante capturar **dos tipos de errores:**

```jsx
async function obtenerDatos() {
  try {
    // 1. Error de red (no hay internet, servidor caído)
    const response = await fetch('https://api.ejemplo.com/datos');
    
    // 2. Error HTTP (404, 500, etc.)
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Éxito:', data);
    
  } catch (error) {
    // Captura AMBOS tipos de error
    if (error instanceof TypeError) {
      console.error('Error de red:', error.message);
    } else {
      console.error('Error HTTP:', error.message);
    }
  }
}
```

**Mejor práctica: crear función helper:**
```jsx
async function apiCall(url, options = {}) {
  try {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options
    });
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Usar:
apiCall('https://api.ejemplo.com/usuarios')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

## Estados de Carga

Cuando haces fetch, necesitas mostrar **3 estados** en la UI:

```jsx
import { useState, useEffect } from 'react';

function ComponenteConDatos() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarDatos() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://api.ejemplo.com/usuarios');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const resultado = await response.json();
        setData(resultado);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    cargarDatos();
  }, []); // Solo ejecuta UNA VEZ al montar

  // Estados de la UI:
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h2>Usuarios: {data.length}</h2>
      <ul>
        {data.map(usuario => (
          <li key={usuario.id}>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Usando Fetch con useEffect

**REGLA IMPORTANTE:** No puedes usar `async` directamente en `useEffect`. Debes crear una función async DENTRO:

```jsx
// ❌ INCORRECTO:
useEffect(async () => {
  const data = await fetch('...');
}, []);

// ✅ CORRECTO:
useEffect(() => {
  async function fetchData() {
    const response = await fetch('...');
    const data = await response.json();
    setData(data);
  }
  
  fetchData();
}, []);
```

**Dependencias:**
```jsx
// Sin dependencias: ejecuta CADA render
useEffect(() => { fetch(...); });

// Array vacío: ejecuta UNA VEZ al montar
useEffect(() => { fetch(...); }, []);

// Con dependencias: ejecuta cuando CAMBIAN
useEffect(() => { fetch(...); }, [userId]);
```

---

## Ejemplo Práctico: Obtener Usuarios

Aquí hay un **componente completo funcional:**

```jsx
import { useState, useEffect } from 'react';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    async function cargarUsuarios() {
      try {
        setLoading(true);
        setError(null);
        
        // Usar API pública para pruebas:
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const datos = await response.json();
        setUsuarios(datos);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    cargarUsuarios();
  }, []); // Ejecuta solo al montar

  // Filtrar usuarios por nombre
  const usuariosFiltrados = usuarios.filter(u =>
    u.name.toLowerCase().includes(filtro.toLowerCase())
  );

  if (loading) {
    return <div style={{ padding: '20px' }}>⏳ Cargando usuarios...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>❌ Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>📋 Lista de Usuarios ({usuariosFiltrados.length})</h2>
      
      <input
        type="text"
        placeholder="Buscar usuario..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        style={{ marginBottom: '15px', padding: '8px', width: '200px' }}
      />

      <ul>
        {usuariosFiltrados.map(usuario => (
          <li key={usuario.id} style={{ marginBottom: '10px' }}>
            <strong>{usuario.name}</strong> ({usuario.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
```

---

## Headers y Autenticación

Muchas APIs requieren **headers personalizados** y **autenticación**:

```jsx
// Con token Bearer (JWT)
async function obtenerDatosPrivados() {
  const token = localStorage.getItem('authToken');
  
  const response = await fetch('https://api.ejemplo.com/datos-privados', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // ← Token JWT
    }
  });
  
  const data = await response.json();
  return data;
}
```

**Headers comunes:**
```jsx
{
  'Content-Type': 'application/json',      // Tipo de dato
  'Authorization': 'Bearer TOKEN',          // Autenticación
  'Accept': 'application/json',            // Qué aceptas recibir
  'X-Custom-Header': 'valor'               // Headers personalizados
}
```

---

## FormData y Archivos

Para enviar **archivos o datos de formulario:**

```jsx
async function subirArchivo(archivo) {
  const formData = new FormData();
  formData.append('archivo', archivo);
  formData.append('nombre', 'Mi archivo');

  const response = await fetch('https://api.ejemplo.com/upload', {
    method: 'POST',
    body: formData  // NO incluyas Content-Type, el browser lo añade
  });

  const resultado = await response.json();
  console.log('Archivo subido:', resultado);
}

// Uso:
<input 
  type="file" 
  onChange={(e) => subirArchivo(e.target.files[0])}
/>
```

---

## AbortController (Cancelar Requests)

Si el usuario navega antes de que termine el fetch, **debes cancelarlo** para evitar memory leaks:

```jsx
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;

  async function cargarDatos() {
    try {
      const response = await fetch('https://api.ejemplo.com/usuarios', { signal });
      const data = await response.json();
      setData(data);
    } catch (error) {
      if (error.name !== 'AbortError') {
        setError(error.message);
      }
    }
  }

  cargarDatos();

  // Cleanup: cancela el fetch si el componente se desmonta
  return () => controller.abort();
}, []);
```

---

## Tips de Rendimiento y Mejores Prácticas

### 1. **Cachear datos cuando sea posible**

```jsx
let cacheData = null;

async function obtenerConCache(url) {
  if (cacheData) return cacheData;
  
  const response = await fetch(url);
  cacheData = await response.json();
  return cacheData;
}
```

### 2. **Evitar múltiples requests simultáneos**

```jsx
// ❌ MAL: 10 requests al mismo tiempo
usuarios.map(u => fetch(`/api/usuarios/${u.id}`));

// ✅ BIEN: Sequential o Promise.all
const promises = usuarios.map(u => fetch(`/api/usuarios/${u.id}`));
const resultados = await Promise.all(promises);
```

### 3. **Timeout para requests largas**

```jsx
const fetchConTimeout = (url, timeout = 5000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  return fetch(url, { signal: controller.signal })
    .finally(() => clearTimeout(id));
};

fetchConTimeout('https://api.ejemplo.com/datos', 3000);
```

### 4. **Usar useCallback para evitar re-renders**

```jsx
import { useCallback } from 'react';

function Componente() {
  const cargarDatos = useCallback(async () => {
    const response = await fetch('...');
    return response.json();
  }, []); // No se recreará en cada render

  useEffect(() => {
    cargarDatos();
  }, [cargarDatos]);
}
```

---

## Debugging y DevTools

### 1. **Network Tab en DevTools**

```
F12 → Network Tab → Recarga página
```

Aquí ves:
- URL de la petición
- Método (GET, POST, etc.)
- Status code
- Response (ver datos recibidos)
- Time (cuánto tardó)

### 2. **Consola para debugging**

```jsx
async function fetchDebug(url) {
  console.log('📤 Enviando:', url);
  const start = performance.now();
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const end = performance.now();
    console.log('📥 Recibido:', data);
    console.log(`⏱️ Tiempo: ${(end - start).toFixed(2)}ms`);
    
    return data;
  } catch (error) {
    console.error('❌ Error:', error);
    throw error;
  }
}
```

---

## Fetch vs Axios vs React Query

| Aspecto | Fetch | Axios | React Query |
|--------|-------|-------|------------|
| **Nativo** | ✅ Sí (sin librerías) | ❌ Librería | ❌ Librería |
| **Sintaxis** | Promises básicas | Más limpia | Hooks |
| **Auto-retry** | ❌ Manual | ✅ Automático | ✅ Automático |
| **Caché** | ❌ Manual | ❌ Manual | ✅ Automático |
| **Cancelación** | AbortController | Token | Automática |
| **Tamaño** | 0 KB | ~13 KB | ~40 KB |
| **Curva aprendizaje** | Baja | Media | Media-Alta |

**Recomendación:**
- **Fetch:** Proyectos pequeños, sin dependencias
- **Axios:** Proyectos medianos, APIs complejas
- **React Query:** Apps grandes, datos complejos

---

## Quick Reference - Resumen Visual

```
┌─────────────────────────────────────────────────────────────┐
│                    FETCH API FLOW                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Hacer petición                                          │
│     fetch(url, {method, headers, body})                     │
│              ↓                                              │
│  2. Browser envía HTTP request                              │
│              ↓                                              │
│  3. Servidor procesa y responde                             │
│              ↓                                              │
│  4. Response objeto (metadata)                              │
│              ↓                                              │
│  5. Parsear body: .json(), .text(), etc.                    │
│              ↓                                              │
│  6. Datos listos para usar                                  │
│              ↓                                              │
│  7. Actualizar estado con setData()                         │
│              ↓                                              │
│  8. React re-renderiza componente                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### GET Request Básico

```jsx
fetch('https://api.ejemplo.com/usuarios')
  .then(r => r.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### POST Request con Datos

```jsx
fetch('https://api.ejemplo.com/usuarios', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombre: 'Juan' })
})
  .then(r => r.json())
  .then(data => console.log('Creado:', data));
```

### useEffect + Fetch (Pattern común)

```jsx
useEffect(() => {
  async function cargar() {
    try {
      setLoading(true);
      const r = await fetch(url);
      const data = await r.json();
      setData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }
  cargar();
}, []);
```

### Checklist antes de hacer deploy:

- ✅ ¿Cancelé requests en useEffect cleanup?
- ✅ ¿Agregué .ok check en response?
- ✅ ¿Manejo ambos tipos de error (red e HTTP)?
- ✅ ¿Tengo loading/error/success states?
- ✅ ¿Probé en Network tab del DevTools?
- ✅ ¿Las URLs están en variables (no hardcoded)?
- ✅ ¿Tengo manejo correcto de autenticación?

---

## Próximos Temas

Cuando domines Fetch API, estarás listo para:

1. **API REST Patterns** - Cómo estructurar llamadas API
2. **GraphQL** - Alternativa moderna a REST
3. **WebSockets** - Comunicación bidireccional en tiempo real
4. **React Query / SWR** - Gestión avanzada de datos
5. **Error Boundaries** - Manejo de errores en componentes
6. **Authentication (JWT)** - Autenticación con tokens
7. **Testing HTTP Calls** - Mock de requests para tests

---

**¡Felicidades!** Ahora puedes conectar tu React app a cualquier backend. Practica con APIs públicas como:
- 🔗 [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- 🔗 [OpenWeather API](https://openweathermap.org/api)
- 🔗 [PokéAPI](https://pokeapi.co/)

🚀 **¡A integrar APIs se ha dicho!**

