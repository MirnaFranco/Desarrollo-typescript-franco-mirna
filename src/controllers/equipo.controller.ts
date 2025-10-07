import type { Request, Response } from "express";
import { 
  crearEquipoService, 
  getEquiposService, 
  getEquipoService, 
  updateEquipoService, 
  deleteEquipoService, 
  asignarEquipoService 
} from "../services/equipo.service";

export const crearEquipo = async (req: Request, res: Response) => {
  try {
    const equipo = await crearEquipoService(req.body);
    res.status(201).json(equipo);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const getEquipos = async (req: Request, res: Response) => {
  try {
    const equipos = await getEquiposService();
    res.json(equipos);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const getEquipo = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const equipo = await getEquipoService(id);
    res.json(equipo);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const updateEquipo = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const equipo = await updateEquipoService(id, req.body);
    res.json(equipo);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const deleteEquipo = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await deleteEquipoService(id);
    res.json({ message: "Equipo eliminado correctamente" });
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const asignarEquipo = async (req: Request, res: Response) => {
  try {
    const id_equipo = Number(req.params.id);
    const { id_usuario, observaciones } = req.body;
    const equipo = await asignarEquipoService(id_equipo, id_usuario, observaciones);
    res.json(equipo);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const historialAsignaciones = async (req: Request, res: Response) => {
  res.status(501).json({ message: "Funcionalidad de historial no implementada aún" });
};
