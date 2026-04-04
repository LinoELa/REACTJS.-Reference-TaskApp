# prepararTodo

## Que significa "prepara todo"

Cuando en este proyecto se diga prepara todo, no significa hacer solo el cambio puntual.

Significa revisar y cerrar todo el bloque relacionado en frontend y backend.

## Que se tiene que revisar

Si se pide prepara todo, hay que revisar:

- codigo del bloque
- wiring y registro del flujo
- imports y exports
- nombres de funciones y archivos
- contratos, endpoints y uso de servicios
- tests
- archivos @...md
- README y docs de referencia
- reglas de nombres en nomenclatura

## Checklist por capa

### Frontend

- features, components, hooks, services y utils
- paginas y estado de UI
- llamadas HTTP y manejo de errores
- contratos esperados desde backend

### Backend

- modules, controllers, dto y services
- middlewares y utilidades compartidas
- registro en index.module.js y module wiring
- endpoints y codigos HTTP documentados

## Que se tiene que corregir

Ademas del cambio principal, tambien hay que corregir:

- errores obvios
- nombres inconsistentes
- comentarios que no encajan con el codigo real
- archivos nuevos sin documentar
- carpetas nuevas sin su @...md
- wiring incompleto
- validaciones no conectadas
- endpoints no documentados

## Regla de idioma y nombres

Siempre revisar:

- carpetas, archivos, endpoints, funciones e identificadores en ingles
- comentarios del codigo en espanol
- documentacion interna clara para el equipo

## Referencia madre del proyecto

Si el cambio toca la vision del producto, hay que confirmarlo antes de seguir.

El archivo @project.md debe reflejar:

- vision del producto
- problema que resuelve
- rol de frontend y backend
- MVP real
- roadmap recomendado

## Sistema de comentarios

La idea no es comentar por comentar.

Cada archivo debe:

- explicar intencion cuando aporte valor
- marcar decisiones importantes del flujo
- evitar comentarios obvios

Patron visual estandar para todo el proyecto:

1. separador de bloque para imports
2. separador de bloque para setup principal
3. bloque JSDoc corto con intencion del archivo
4. separador de bloque para rutas o flujo principal
5. comentarios de linea solo en pasos importantes

Formato recomendado:

- Usar separadores con iguales para ubicar secciones grandes.
- Usar etiquetas de contexto en JSDoc como @ROUTER, @SERVICE, @CONTROLLER, @USECASE.
- Mantener bullets cortos dentro del JSDoc.

Ejemplo de orden esperado:

- IMPORTS
- SETUP PRINCIPAL
- BLOQUE DE FLUJO
- EXPORT

Regla de alcance:

- Este formato aplica por igual a frontend y backend.
- Si un archivo es pequeno, se puede simplificar, pero mantener la misma idea.

### Estructura definida

```text
// ======================= IMPORTS =========================================
import express from "express";
import { validateRequest } from "../../middlewares/validateRequest.js";

// ======================= NOTES ==================================

/**
 * - Define las rutas de autenticacion.
 * - Conecta register, login y logout
 * - Delega la logica a sus controllers
 * - Valida register y login antes del controller
 *
 * Importamos Express Router para definir rutas de autenticacion.
 * @ROUTER | Express Router
 */

const router = express.Router();

// ======================= AUTHENTICATION ROUTES ============================

/**
 * Rutas de autenticacion.
 * Este archivo define los endpoints publicos para registrar usuarios
 * e iniciar sesion dentro del modulo de auth.
 *
 * @REGISTER | POST /auth/register
 * @LOGIN | POST /auth/login
 * @LOGOUT | POST /auth/logout
 */
// Registro de usuarios nuevos.
router.post("/register", validateRequest(registerSchema), registerController);

// Login y generacion del token JWT.
router.post("/login", validateRequest(loginSchema), loginController);

// Logout y limpieza de la cookie del token.
router.post("/logout", logoutController);

export default router;


## Idea principal

prepara todo significa:

- no dejar medias partes
- no esperar a que pidan cada detalle
- revisar lo relacionado
- documentar lo nuevo
- dejar el bloque listo para el siguiente paso

```

## Seguridad npm obligatoria

En este proyecto, "preparar todo" tambien incluye asegurar la configuracion de npm a nivel de proyecto.

Reglas obligatorias:

- crear `.npmrc` en la raiz del proyecto, al lado de `package.json`
- mantener como minimo:
  - `ignore-scripts=true`
- aplicar endurecimiento adicional recomendado:
  - `audit=true`
  - `audit-level=high`
  - `save-exact=true`
  - `cache=.npm-cache`
- crear la carpeta local `.npm-cache/`
- agregar `.npm-cache/` en `.gitignore`
- aplicar exactamente la misma politica tambien en `adminJsonLens`

Contenido base obligatorio en `.npmrc`:

```ini
# Seguridad del proyecto:
# evita ejecutar scripts automaticos al instalar dependencias
ignore-scripts=true
```