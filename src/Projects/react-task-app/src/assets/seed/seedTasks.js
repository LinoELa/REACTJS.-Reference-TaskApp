// ================ NOTES ================

/**
 * Archivo: seedTasks.js
 *
 * Datos de semilla con tareas predeterminadas para inicializar la aplicación.
 * Contiene un arreglo de tareas de ejemplo con propiedades como id, título, descripción y estado.
 *
 * Estructura de datos:
 * ├── @TaskSeed
 * │   ├─ id: Identificador único de la tarea
 * │   ├─ title: Título descriptivo de la tarea
 * │   ├─ description: Detalles adicionales de la tarea
 * │   └─ completed: Estado booleano de completación
 * └── *
 *
 */

// ================ SEEDS ================

const tasksData = [
  {
    id: 1,
    title: "Comprar leche",
    description: "Comprar leche en el supermercado",
    completed: false,
  },
  {
    id: 2,
    title: "Hacer ejercicio",
    description: "Ir al gimnasio a hacer ejercicio",
    completed: true,
  },
  {
    id: 3,
    title: "Leer un libro",
    description: "Leer 'El Principito'",
    completed: false,
  },
];

export default tasksData;
