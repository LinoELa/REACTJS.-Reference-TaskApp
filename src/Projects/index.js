// ======================= NOTES ==================================
/*
 * FILE: src/Projects/index.js
 * PURPOSE: Entry point para el proyecto Projects (Task App)
 * DESCRIPTION: Punto de entrada que renderiza la aplicación React Task App
 *              que está en react-task-app/src/
 *
 * IMPORTS: React, ReactDOM, App de react-task-app
 * EXPORTS: Renderiza la app en el DOM
 */
// ==================================================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './react-task-app/src/App.jsx';
import './react-task-app/src/index.css';

// ======================= COMPONENT ==================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ======================= NOTAS ====================================
/*
 * CONCEPTOS CLAVE:
 * - Entry Point: Este archivo es donde React comienza a renderizar
 * - ReactDOM.createRoot: Crea la raíz de React en el elemento #root
 * - StrictMode: Ayuda a detectar problemas potenciales en desarrollo
 *
 * CARACTERÍSTICAS:
 * - Renderiza App desde react-task-app/src/App
 * - Carga estilos globales
 * - Inicializa React 19
 *
 * IMPLEMENTACIONES APLICADAS:
 * - React 19 con createRoot API
 * - Estructura modular (App separado)
 * - Estilos globales centralizados
 */
// =================================================================
