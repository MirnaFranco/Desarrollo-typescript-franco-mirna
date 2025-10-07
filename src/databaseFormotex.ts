import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./Entidades/Usuario";
import { Equipo } from "./Entidades/Equipo";

// Validar variables de entorno obligatorias
const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env;

if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  throw new Error("Faltan variables de entorno de la base de datos (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)");
}

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT) || 3306,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true, // solo para desarrollo, genera tablas automáticamente
  logging: false,
  entities: [Usuario, Equipo],
  migrations: [],
  subscribers: [],
});
