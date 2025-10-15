import "reflect-metadata";
import dotenv from "dotenv";
import app from "./app";
import { Database } from "./databaseFormotex";

dotenv.config();

const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    await Database.connect();
    console.log(" Conexión a la base de datos establecida");

    app.listen(PORT, () => {
      console.log(` Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error: unknown) {
    console.error(" Error al inicializar la base de datos:", error);
  }
}

startServer();

