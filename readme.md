
# Backend Devaton quita edición grupo uno

- [Backend Devaton quita edición grupo uno](#backend-devaton-quita-edición-grupo-uno)
  - [Estructura del proyecto](#estructura-del-proyecto)
    - [Descripción](#descripción)
      - [src](#src)
      - [app](#app)
      - [auth](#auth)
      - [controllers](#controllers)
      - [db](#db)
      - [jwt](#jwt)
      - [Routers](#routers)
      - [main](#main)
      - [.env](#env)
      - [.eslintrc](#eslintrc)
      - [.gitignore](#gitignore)
  - [Variables de entorno](#variables-de-entorno)
  - [Instalación del proyecto](#instalación-del-proyecto)
    - [Configuración de eslint](#configuración-de-eslint)
  - [Despliegue en local](#despliegue-en-local)

## Estructura del proyecto

- src
  - app
  - db
  - jwt
  - auth
  - controllers
  - router
  - main.js
- .env
- .eslintrc.json
- .gitignore

### Descripción

#### src

Albergará toda la lógica del proyecto

#### app

Encontraremos toda la configuración de express, cómo las rutas y los middleware a utilizar

#### auth

Encontraremos la lógica de autenticación de la aplicación

#### controllers

Encontraremos la lógica de cada una de las rutas del proyecto

#### db

Encontraremos la configuración de conexión con la base de datos

#### jwt

Esta las funciones de los JSON Web Tokens

#### Routers

la lógica de cada una de las rutas del proyecto

#### main

El punto de partida de nuestra app

#### .env

Las variables de entorno de nuestro proyecto

#### .eslintrc

La configuración de eslint

#### .gitignore

Los archivos que no queremos que se suban a nuestro repositorio

## Variables de entorno

Para poder ejecutar el proyecto necesitamos crear un archivo `.env` en la raíz del proyecto, con las siguientes variables de entorno

`APP_PORT`

`JWT_SECRET_KEY`

`DB_USER`

`DB_PASSWORD`

`DB_HOST`

`DB_PORT`

## Instalación del proyecto

Para instalar el proyecto vamos a usar NPM cómo gestor de librerías en dos tandas,
primero las dependencias necesarias para el proyecto

```bash
  npm i bcrypt, cors, dotenv, jsonwebtoken, express-validator, pg-promise
```

Por último, vamos a instalar las dependencias que nos van ayudar con el desarrollo del mismo

```bash
  npm i -D nodemon, morgan, eslint
```

### Configuración de eslint

Para configurar eslint vamos a ejecutar el siguiente comando

```bash
  npm init @eslint/config
```

Y vamos a seguir los pasos que nos indica el asistente

- To check syntax, find problems, and enforce code style
- CommonJS (require/exports)
- None of these
- No
- Node
- Use a popular style guide
- Airbnb: <https://github.com/airbnb/javascript>
- JSON
- Yes
- npm

## Despliegue en local

Para lanzar el proyecto el local tenemos que seguir estos pasos:

Clonamos el repositorio

```bash
  git clone https://github.com/altaskur/devaton-quita-edicion-grupo-uno-Backend.git
```

Vamos al directorio del proyecto

```bash
  cd https://github.com/altaskur/devaton-quita-edicion-grupo-uno-Backend.git
```

Instalamos las dependencias

```bash
  npm i 
    # o
  npm install
```

Iniciamos el servidor en desarrollo con nodemon

```bash
  npm run dev
```
