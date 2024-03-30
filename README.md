# frontendlaravel

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Documentación de Rutas

## Autenticación

### Registro de Usuario
- **URL:** `/register`
- **Método HTTP:** POST
- **Controlador:** `\App\Http\Controllers\AuthController`
- **Método:** `register`

### Inicio de Sesión
- **URL:** `/login`
- **Método HTTP:** POST
- **Controlador:** `\App\Http\Controllers\AuthController`
- **Método:** `login`

### Operaciones Protegidas por Autenticación
Todas estas rutas requieren autenticación mediante el middleware 'auth:sanctum'.

#### Información del Usuario Autenticado
- **URL:** `/user`
- **Método HTTP:** GET
- **Controlador:** `\App\Http\Controllers\AuthController`
- **Método:** `user`

#### Cierre de Sesión
- **URL:** `/logout`
- **Método HTTP:** POST
- **Controlador:** `\App\Http\Controllers\AuthController`
- **Método:** `logout`

## Recursos API

### Estudiantes
- **URL Base:** `/v1/estudiantes`

#### Listar Estudiantes
- **URL:** `/v1/estudiantes`
- **Método HTTP:** GET
- **Controlador:** `EstudiantesController`
- **Método:** `index`

#### Crear Estudiante
- **URL:** `/v1/estudiantes`
- **Método HTTP:** POST
- **Controlador:** `EstudiantesController`
- **Método:** `store`

#### Mostrar Estudiante
- **URL:** `/v1/estudiantes/{id}`
- **Método HTTP:** GET
- **Controlador:** `EstudiantesController`
- **Método:** `show`

#### Actualizar Estudiante
- **URL:** `/v1/estudiantes/{id}`
- **Método HTTP:** PUT
- **Controlador:** `EstudiantesController`
- **Método:** `update`

#### Eliminar Estudiante
- **URL:** `/v1/estudiantes/{id}`
- **Método HTTP:** DELETE
- **Controlador:** `EstudiantesController`
- **Método:** `destroy`

### Usuarios
- **URL Base:** `/v1/usuarios`

#### Listar Usuarios
- **URL:** `/v1/usuarios`
- **Método HTTP:** GET
- **Controlador:** `UserController`
- **Método:** `index`

#### Crear Usuario
- **URL:** `/v1/usuarios`
- **Método HTTP:** POST
- **Controlador:** `UserController`
- **Método:** `store`

#### Mostrar Usuario
- **URL:** `/v1/usuarios/{id}`
- **Método HTTP:** GET
- **Controlador:** `UserController`
- **Método:** `show`

#### Actualizar Usuario
- **URL:** `/v1/usuarios/{id}`
- **Método HTTP:** PUT
- **Controlador:** `UserController`
- **Método:** `update`

#### Eliminar Usuario
- **URL:** `/v1/usuarios/{id}`
- **Método HTTP:** DELETE
- **Controlador:** `UserController`
- **Método:** `destroy`
