import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Usuario } from "../Entidades/Usuario";
import { AppDataSource } from "../databaseFormotex";
import { ApiError } from "../utils/ApiError";

interface JwtPayload {
  id_usuario: number;
  rol: string;
}

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: "Token no proporcionado" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    const usuarioRepo = AppDataSource.getRepository(Usuario);
    const usuario = await usuarioRepo.findOneBy({ id_usuario: payload.id_usuario });
    if (!usuario) throw new ApiError(401, "Usuario no encontrado");

    req.user = usuario; // extendido tipo Request personalizado
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido", error: err });
  }
};
