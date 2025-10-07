import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { authenticateToken } from "../middlewares/auth.middleware";
import { permit } from "../middlewares/role.middleware";

const router = Router();

router.post("/login", login);
router.post("/register", authenticateToken, permit("admin"), register);

export default router;
