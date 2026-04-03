

# 03 - Componentes en React

## ¿Qué son los Componentes?

Los componentes son partes reutilizables de la interfaz que encapsulan su propia lógica y estilos. En React, los componentes pueden ser funcionales o de clase, pero en esta guía nos enfocaremos en los **componentes funcionales**, que son más modernos y fáciles de entender.

## El Componente Root

Existe un componente inicial que React llama **Root**, que es el punto de entrada de la aplicación:

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Dentro del componente Root se renderiza el componente `App`, que es el componente raíz de nuestra aplicación.

## Componentes Funcionales

Un componente funcional es simplemente una **función de JavaScript que retorna JSX**, que es una sintaxis similar a HTML para describir la interfaz de usuario (UI).

### Ejemplo básico:

```jsx
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}!</h1>;
}
```

**Nota:** Un componente siempre retorna una interfaz (elementos como `div`, `span`, `select`, etc.).

## Props (Propiedades)

Los componentes pueden recibir **props** (propiedades), que son argumentos que se pasan desde el componente padre para personalizar su comportamiento o apariencia.

### Ejemplo de uso de props:

```jsx
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}!</h1>;
}

function App() {
  return (
    <div>
      <Saludo nombre="Mundo" />
      <Saludo nombre="React" />
    </div>
  );
}
```

En este ejemplo, el componente `Saludo` recibe una prop llamada `nombre`, y el componente `App` lo utiliza para renderizar dos saludos diferentes.
