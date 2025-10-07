import express from "express";
import "reflect-metadata";
import authRoutes from "./routes/auth.routes";
import usuarioRoutes from "./routes/usuario.routes";
import equipoRoutes from "./routes/equipo.routes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/equipos", equipoRoutes);

export default app;
