import { Router } from "express";
import { 
  crearEquipo, 
  getEquipos, 
  getEquipo, 
  updateEquipo, 
  deleteEquipo, 
  asignarEquipo, 
  historialAsignaciones 
} from "../controllers/equipo.controller";
import { authenticateToken } from "../middlewares/auth.middleware";
import { permit } from "../middlewares/role.middleware";

const router = Router();
router.use(authenticateToken);

router.get("/", getEquipos);
router.post("/", permit("admin"), crearEquipo);
router.get("/:id", getEquipo);
router.put("/:id", updateEquipo);
router.delete("/:id", permit("admin"), deleteEquipo);

router.post("/:id/asignar", permit("admin"), asignarEquipo);
router.get("/:id/asignaciones", historialAsignaciones);

export default router;
