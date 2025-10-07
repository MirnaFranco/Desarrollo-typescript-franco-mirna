import  type { Request, Response } from "express";
import { loginService, registerService } from "../services/auth.service";

export const login = async (req: Request, res: Response) => {
  try {
    const { correo, contrasena } = req.body;
    const result = await loginService(correo, contrasena);
    res.json({ usuario: result.usuario, token: result.token });
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message || "Error en login" });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { nombre, correo, contrasena, rol } = req.body;
    const usuario = await registerService(nombre, correo, contrasena, rol);
    res.status(201).json(usuario);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message || "Error en registro" });
  }
};
