import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./Entidades/Usuario";
import { Equipo } from "./Entidades/Equipo";
import { Asignacion } from "./Entidades/Asignacion";

export class Database {
  private static instance: DataSource;

  private constructor() {}

  public static getInstance(): DataSource {
    if (!Database.instance) {
      Database.instance = new DataSource({
        type: "mysql",
        host: process.env.DB_HOST ?? "localhost",
        port: Number(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER ?? "root",
        password: process.env.DB_PASSWORD ?? "",
        database: process.env.DB_NAME ?? "formotex",
        synchronize: true,
        logging: false,
        entities: [Usuario, Equipo, Asignacion],
      });
    }
    return Database.instance;
  }

  public static async connect(): Promise<DataSource> {
    const ds = Database.getInstance();
    if (!ds.isInitialized) {
      await ds.initialize();
      console.log(" Conectado a la base de datos");
    }
    return ds;
  }
}

