import "reflect-metadata";
import express from "express";
import * as dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import usuarioRoutes from "./routes/usuario.routes";
import equipoRoutes from "./routes/equipo.routes";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/equipos", equipoRoutes);

export default app;
