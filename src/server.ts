import app from "./app";
import { AppDataSource } from "./databaseFormotex";

const PORT = process.env.PORT || 4000;

AppDataSource.initialize()
  .then(() => {
    console.log("Conexión a la base de datos establecida");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al inicializar la base de datos", err);
  });
