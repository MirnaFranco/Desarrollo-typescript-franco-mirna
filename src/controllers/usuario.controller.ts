import type { Request, Response } from "express";
import { getUsuariosService, getUsuarioService, updateUsuarioService, deleteUsuarioService } from "../services/usuario.service";

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await getUsuariosService();
    res.json(usuarios);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const getUsuario = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const usuario = await getUsuarioService(id);
    res.json(usuario);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const updateUsuario = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body;
    const usuario = await updateUsuarioService(id, data);
    res.json(usuario);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await deleteUsuarioService(id);
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};
