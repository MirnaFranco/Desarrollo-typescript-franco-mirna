import { Router } from "express";
import { getUsuarios, getUsuario, updateUsuario, deleteUsuario } from "../controllers/usuario.controller";
import { authenticateToken } from "../middlewares/auth.middleware";
import { permit } from "../middlewares/role.middleware";

const router = Router();

router.use(authenticateToken);

router.get("/", permit("admin"), getUsuarios);
router.get("/:id", permit("admin"), getUsuario);
router.put("/:id", permit("admin"), updateUsuario);
router.delete("/:id", permit("admin"), deleteUsuario);

export default router;
