import { AppDataSource } from "../databaseFormotex";
import { Usuario } from "../Entidades/Usuario";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError";
import type { SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h"; // valor por defecto

if (!JWT_SECRET) throw new Error("JWT_SECRET no está definido en el .env");

interface JwtPayload {
  id_usuario: number;
  rol: string;
}

export const loginService = async (correo: string, contrasena: string) => {
  const usuarioRepo = AppDataSource.getRepository(Usuario);
  const usuario = await usuarioRepo.findOneBy({ correo });
  if (!usuario) throw new ApiError(401, "Correo o contraseña incorrectos");

  const isValid = await bcrypt.compare(contrasena, usuario.contrasena);
  if (!isValid) throw new ApiError(401, "Correo o contraseña incorrectos");

  const payload: JwtPayload = { id_usuario: usuario.id_usuario, rol: usuario.rol };
  const options: SignOptions = { expiresIn: JWT_EXPIRES_IN };

  const token = jwt.sign(payload, JWT_SECRET, options);

  return { usuario, token };
    
};


export const registerService = async (nombre: string, correo: string, contrasena: string, rol: string) => {
  const usuarioRepo = AppDataSource.getRepository(Usuario);
  const existing = await usuarioRepo.findOneBy({ correo });
  if (existing) throw new ApiError(409, "Correo ya registrado");

  const hash = await bcrypt.hash(contrasena, 10);
  const usuario = usuarioRepo.create({ nombre, correo, contrasena: hash, rol });
  return await usuarioRepo.save(usuario);
};
