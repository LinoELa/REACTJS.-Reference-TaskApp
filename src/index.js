import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <div>
      <h1>Hola, Mundo!</h1>
      <p>Bienvenido a tu aplicación React.</p>
    </div>
  );
}

root.render(<App />);

// sHIFT + ALT + A comentar en  linea asi

/* 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 */
