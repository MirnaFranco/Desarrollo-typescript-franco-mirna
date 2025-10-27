## FORMOTEX — Sistema de Gestión de Equipos
 Descripción

FORMOTEX es una aplicación backend desarrollada en Node.js con TypeScript y Express, que gestiona usuarios, equipos y asignaciones dentro de una organización.
Utiliza MySQL como base de datos relacional y TypeORM como ORM para mapear entidades, relaciones y operaciones CRUD.

El sistema incluye autenticación JWT, control de roles (admin/usuario) y persistencia de datos mediante contenedores Docker.


## Tecnologías utilizadas

Node.js 20 (Alpine)

TypeScript

Express

TypeORM

MySQL 8.1

JWT (jsonwebtoken)

bcryptjs

Docker & Docker Compose


## Estructura principal del proyecto

├── src
│   ├── controllers/        
│   ├── services/          
│   ├── routes/             
│   ├── middlewares/       
│   ├── Entidades/          
│   ├── utils/             
│   ├── databaseFormotex.ts 
│   ├── app.ts              
│   └── server.ts           
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── package.json
└── README.md


#  Formotex API — Docker Setup

Este proyecto contiene una API desarrollada con **Node.js + TypeScript** y ejecutada en contenedores mediante **Docker Compose**.

El proyecto se ejecuta completamente con Docker Compose, lo que simplifica el despliegue y evita configuraciones manuales.

Archivo docker-compose.yml

Define dos servicios:

app: Contenedor de la aplicación Node.js.

db: Contenedor de la base de datos MySQL con persistencia de datos.

## Instrucciones de ejecución

Clonar el repositorio

git clone https://github.com/MirnaFranco/Desarrollo-typescript-franco-mirna.git

Crear archivo .env

#  CONFIGURACIÓN DEL SERVIDOR
PORT=4000

#  CONFIGURACIÓN DE LA BASE DE DATOS (MySQL)
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=formotex

#  CONFIGURACIÓN DE JWT (Autenticación)
JWT_SECRET=supersecreto123
JWT_EXPIRES_IN=1h

## Construir e iniciar los contenedores

docker-compose up --build

## Acceder a la aplicación

Servidor: http://localhost:4000
